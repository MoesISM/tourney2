import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { TeamApplicationModule } from './team/application'

import { TournamentApplicationModule } from './tournament/application'

import { MatchApplicationModule } from './match/application'

import { BracketApplicationModule } from './bracket/application'

import { TournamentTeamApplicationModule } from './tournamentTeam/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { BillingApplicationModule } from './billing/application'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,
    BillingApplicationModule,

    TeamApplicationModule,

    TournamentApplicationModule,

    MatchApplicationModule,

    BracketApplicationModule,

    TournamentTeamApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
