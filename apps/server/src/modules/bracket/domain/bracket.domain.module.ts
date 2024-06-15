import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { BracketDomainFacade } from './bracket.domain.facade'
import { Bracket } from './bracket.model'

@Module({
  imports: [TypeOrmModule.forFeature([Bracket]), DatabaseHelperModule],
  providers: [BracketDomainFacade, BracketDomainFacade],
  exports: [BracketDomainFacade],
})
export class BracketDomainModule {}
