import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TournamentTeamDomainModule } from '../domain'
import { TournamentTeamController } from './tournamentTeam.controller'

import { TournamentDomainModule } from '../../../modules/tournament/domain'

import { TournamentTeamByTournamentController } from './tournamentTeamByTournament.controller'

import { TeamDomainModule } from '../../../modules/team/domain'

import { TournamentTeamByTeamController } from './tournamentTeamByTeam.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TournamentTeamDomainModule,

    TournamentDomainModule,

    TeamDomainModule,
  ],
  controllers: [
    TournamentTeamController,

    TournamentTeamByTournamentController,

    TournamentTeamByTeamController,
  ],
  providers: [],
})
export class TournamentTeamApplicationModule {}
