import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { BracketDomainFacade } from '@server/modules/bracket/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { BracketApplicationEvent } from './bracket.application.event'
import { BracketCreateDto } from './bracket.dto'

import { MatchDomainFacade } from '../../match/domain'

@Controller('/v1/matchs')
export class BracketByMatchController {
  constructor(
    private matchDomainFacade: MatchDomainFacade,

    private bracketDomainFacade: BracketDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/match/:matchId/brackets')
  async findManyMatchId(
    @Param('matchId') matchId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.matchDomainFacade.findOneByIdOrFail(matchId)

    const items = await this.bracketDomainFacade.findManyByMatch(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/match/:matchId/brackets')
  async createByMatchId(
    @Param('matchId') matchId: string,
    @Body() body: BracketCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, matchId }

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

  @Get('/parentMatch/:parentMatchId/brackets')
  async findManyParentMatchId(
    @Param('parentMatchId') parentMatchId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.matchDomainFacade.findOneByIdOrFail(parentMatchId)

    const items = await this.bracketDomainFacade.findManyByParentMatch(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/parentMatch/:parentMatchId/brackets')
  async createByParentMatchId(
    @Param('parentMatchId') parentMatchId: string,
    @Body() body: BracketCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, parentMatchId }

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
