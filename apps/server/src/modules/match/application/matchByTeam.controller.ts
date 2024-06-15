import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { MatchDomainFacade } from '@server/modules/match/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { MatchApplicationEvent } from './match.application.event'
import { MatchCreateDto } from './match.dto'

import { TeamDomainFacade } from '../../team/domain'

@Controller('/v1/teams')
export class MatchByTeamController {
  constructor(
    private teamDomainFacade: TeamDomainFacade,

    private matchDomainFacade: MatchDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/team1/:team1Id/matchs')
  async findManyTeam1Id(
    @Param('team1Id') team1Id: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.teamDomainFacade.findOneByIdOrFail(team1Id)

    const items = await this.matchDomainFacade.findManyByTeam1(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/team1/:team1Id/matchs')
  async createByTeam1Id(
    @Param('team1Id') team1Id: string,
    @Body() body: MatchCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, team1Id }

    const item = await this.matchDomainFacade.create(valuesUpdated)

    await this.eventService.emit<MatchApplicationEvent.MatchCreated.Payload>(
      MatchApplicationEvent.MatchCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/team2/:team2Id/matchs')
  async findManyTeam2Id(
    @Param('team2Id') team2Id: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.teamDomainFacade.findOneByIdOrFail(team2Id)

    const items = await this.matchDomainFacade.findManyByTeam2(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/team2/:team2Id/matchs')
  async createByTeam2Id(
    @Param('team2Id') team2Id: string,
    @Body() body: MatchCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, team2Id }

    const item = await this.matchDomainFacade.create(valuesUpdated)

    await this.eventService.emit<MatchApplicationEvent.MatchCreated.Payload>(
      MatchApplicationEvent.MatchCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/winner/:winnerId/matchs')
  async findManyWinnerId(
    @Param('winnerId') winnerId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.teamDomainFacade.findOneByIdOrFail(winnerId)

    const items = await this.matchDomainFacade.findManyByWinner(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/winner/:winnerId/matchs')
  async createByWinnerId(
    @Param('winnerId') winnerId: string,
    @Body() body: MatchCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, winnerId }

    const item = await this.matchDomainFacade.create(valuesUpdated)

    await this.eventService.emit<MatchApplicationEvent.MatchCreated.Payload>(
      MatchApplicationEvent.MatchCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
