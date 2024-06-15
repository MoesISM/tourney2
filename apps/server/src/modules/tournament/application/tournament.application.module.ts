import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TournamentDomainModule } from '../domain'
import { TournamentController } from './tournament.controller'

@Module({
  imports: [AuthenticationDomainModule, TournamentDomainModule],
  controllers: [TournamentController],
  providers: [],
})
export class TournamentApplicationModule {}
