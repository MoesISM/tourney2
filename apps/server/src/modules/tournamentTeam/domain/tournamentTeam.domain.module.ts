import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TournamentTeamDomainFacade } from './tournamentTeam.domain.facade'
import { TournamentTeam } from './tournamentTeam.model'

@Module({
  imports: [TypeOrmModule.forFeature([TournamentTeam]), DatabaseHelperModule],
  providers: [TournamentTeamDomainFacade, TournamentTeamDomainFacade],
  exports: [TournamentTeamDomainFacade],
})
export class TournamentTeamDomainModule {}
