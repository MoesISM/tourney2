import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { MatchDomainModule } from '../domain'
import { MatchController } from './match.controller'

import { TournamentDomainModule } from '../../../modules/tournament/domain'

import { MatchByTournamentController } from './matchByTournament.controller'

import { TeamDomainModule } from '../../../modules/team/domain'

import { MatchByTeamController } from './matchByTeam.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    MatchDomainModule,

    TournamentDomainModule,

    TeamDomainModule,
  ],
  controllers: [
    MatchController,

    MatchByTournamentController,

    MatchByTeamController,
  ],
  providers: [],
})
export class MatchApplicationModule {}
