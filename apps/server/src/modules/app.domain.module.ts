import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { TeamDomainModule } from './team/domain'

import { TournamentDomainModule } from './tournament/domain'

import { MatchDomainModule } from './match/domain'

import { BracketDomainModule } from './bracket/domain'

import { TournamentTeamDomainModule } from './tournamentTeam/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    TeamDomainModule,

    TournamentDomainModule,

    MatchDomainModule,

    BracketDomainModule,

    TournamentTeamDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
