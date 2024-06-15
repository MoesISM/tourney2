import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { BracketDomainModule } from '../domain'
import { BracketController } from './bracket.controller'

import { TournamentDomainModule } from '../../../modules/tournament/domain'

import { BracketByTournamentController } from './bracketByTournament.controller'

import { MatchDomainModule } from '../../../modules/match/domain'

import { BracketByMatchController } from './bracketByMatch.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    BracketDomainModule,

    TournamentDomainModule,

    MatchDomainModule,
  ],
  controllers: [
    BracketController,

    BracketByTournamentController,

    BracketByMatchController,
  ],
  providers: [],
})
export class BracketApplicationModule {}
