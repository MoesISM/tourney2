import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  TournamentTeam,
  TournamentTeamDomainFacade,
} from '@server/modules/tournamentTeam/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TournamentTeamApplicationEvent } from './tournamentTeam.application.event'
import {
  TournamentTeamCreateDto,
  TournamentTeamUpdateDto,
} from './tournamentTeam.dto'

@Controller('/v1/tournamentTeams')
export class TournamentTeamController {
  constructor(
    private eventService: EventService,
    private tournamentTeamDomainFacade: TournamentTeamDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.tournamentTeamDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: TournamentTeamCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.tournamentTeamDomainFacade.create(body)

    await this.eventService.emit<TournamentTeamApplicationEvent.TournamentTeamCreated.Payload>(
      TournamentTeamApplicationEvent.TournamentTeamCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:tournamentTeamId')
  async findOne(
    @Param('tournamentTeamId') tournamentTeamId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.tournamentTeamDomainFacade.findOneByIdOrFail(
      tournamentTeamId,
      queryOptions,
    )

    return item
  }

  @Patch('/:tournamentTeamId')
  async update(
    @Param('tournamentTeamId') tournamentTeamId: string,
    @Body() body: TournamentTeamUpdateDto,
  ) {
    const item =
      await this.tournamentTeamDomainFacade.findOneByIdOrFail(tournamentTeamId)

    const itemUpdated = await this.tournamentTeamDomainFacade.update(
      item,
      body as Partial<TournamentTeam>,
    )
    return itemUpdated
  }

  @Delete('/:tournamentTeamId')
  async delete(@Param('tournamentTeamId') tournamentTeamId: string) {
    const item =
      await this.tournamentTeamDomainFacade.findOneByIdOrFail(tournamentTeamId)

    await this.tournamentTeamDomainFacade.delete(item)

    return item
  }
}
