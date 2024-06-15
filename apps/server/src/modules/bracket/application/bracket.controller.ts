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
import { Bracket, BracketDomainFacade } from '@server/modules/bracket/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { BracketApplicationEvent } from './bracket.application.event'
import { BracketCreateDto, BracketUpdateDto } from './bracket.dto'

@Controller('/v1/brackets')
export class BracketController {
  constructor(
    private eventService: EventService,
    private bracketDomainFacade: BracketDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.bracketDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: BracketCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.bracketDomainFacade.create(body)

    await this.eventService.emit<BracketApplicationEvent.BracketCreated.Payload>(
      BracketApplicationEvent.BracketCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:bracketId')
  async findOne(
    @Param('bracketId') bracketId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.bracketDomainFacade.findOneByIdOrFail(
      bracketId,
      queryOptions,
    )

    return item
  }

  @Patch('/:bracketId')
  async update(
    @Param('bracketId') bracketId: string,
    @Body() body: BracketUpdateDto,
  ) {
    const item = await this.bracketDomainFacade.findOneByIdOrFail(bracketId)

    const itemUpdated = await this.bracketDomainFacade.update(
      item,
      body as Partial<Bracket>,
    )
    return itemUpdated
  }

  @Delete('/:bracketId')
  async delete(@Param('bracketId') bracketId: string) {
    const item = await this.bracketDomainFacade.findOneByIdOrFail(bracketId)

    await this.bracketDomainFacade.delete(item)

    return item
  }
}
