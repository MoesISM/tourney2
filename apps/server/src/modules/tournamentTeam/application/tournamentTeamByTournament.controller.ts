import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TournamentTeamDomainFacade } from '@server/modules/tournamentTeam/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TournamentTeamApplicationEvent } from './tournamentTeam.application.event'
import { TournamentTeamCreateDto } from './tournamentTeam.dto'

import { TournamentDomainFacade } from '../../tournament/domain'

@Controller('/v1/tournaments')
export class TournamentTeamByTournamentController {
  constructor(
    private tournamentDomainFacade: TournamentDomainFacade,

    private tournamentTeamDomainFacade: TournamentTeamDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/tournament/:tournamentId/tournamentTeams')
  async findManyTournamentId(
    @Param('tournamentId') tournamentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.tournamentDomainFacade.findOneByIdOrFail(tournamentId)

    const items = await this.tournamentTeamDomainFacade.findManyByTournament(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/tournament/:tournamentId/tournamentTeams')
  async createByTournamentId(
    @Param('tournamentId') tournamentId: string,
    @Body() body: TournamentTeamCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, tournamentId }

    const item = await this.tournamentTeamDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TournamentTeamApplicationEvent.TournamentTeamCreated.Payload>(
      TournamentTeamApplicationEvent.TournamentTeamCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
