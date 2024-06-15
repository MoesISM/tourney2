import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { BracketDomainFacade } from '@server/modules/bracket/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { BracketApplicationEvent } from './bracket.application.event'
import { BracketCreateDto } from './bracket.dto'

import { TournamentDomainFacade } from '../../tournament/domain'

@Controller('/v1/tournaments')
export class BracketByTournamentController {
  constructor(
    private tournamentDomainFacade: TournamentDomainFacade,

    private bracketDomainFacade: BracketDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/tournament/:tournamentId/brackets')
  async findManyTournamentId(
    @Param('tournamentId') tournamentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.tournamentDomainFacade.findOneByIdOrFail(tournamentId)

    const items = await this.bracketDomainFacade.findManyByTournament(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/tournament/:tournamentId/brackets')
  async createByTournamentId(
    @Param('tournamentId') tournamentId: string,
    @Body() body: BracketCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, tournamentId }

    const item = await this.bracketDomainFacade.create(valuesUpdated)

    await this.eventService.emit<BracketApplicationEvent.BracketCreated.Payload>(
      BracketApplicationEvent.BracketCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
