import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TournamentTeamDomainFacade } from '@server/modules/tournamentTeam/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TournamentTeamApplicationEvent } from './tournamentTeam.application.event'
import { TournamentTeamCreateDto } from './tournamentTeam.dto'

import { TeamDomainFacade } from '../../team/domain'

@Controller('/v1/teams')
export class TournamentTeamByTeamController {
  constructor(
    private teamDomainFacade: TeamDomainFacade,

    private tournamentTeamDomainFacade: TournamentTeamDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/team/:teamId/tournamentTeams')
  async findManyTeamId(
    @Param('teamId') teamId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.teamDomainFacade.findOneByIdOrFail(teamId)

    const items = await this.tournamentTeamDomainFacade.findManyByTeam(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/team/:teamId/tournamentTeams')
  async createByTeamId(
    @Param('teamId') teamId: string,
    @Body() body: TournamentTeamCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, teamId }

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
