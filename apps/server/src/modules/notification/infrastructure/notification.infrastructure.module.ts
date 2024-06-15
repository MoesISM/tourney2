import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationTeamSubscriber } from './subscribers/notification.team.subscriber'

import { NotificationTournamentSubscriber } from './subscribers/notification.tournament.subscriber'

import { NotificationMatchSubscriber } from './subscribers/notification.match.subscriber'

import { NotificationBracketSubscriber } from './subscribers/notification.bracket.subscriber'

import { NotificationTournamentTeamSubscriber } from './subscribers/notification.tournamentTeam.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationTeamSubscriber,

    NotificationTournamentSubscriber,

    NotificationMatchSubscriber,

    NotificationBracketSubscriber,

    NotificationTournamentTeamSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
