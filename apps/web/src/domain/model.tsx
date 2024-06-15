import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'
import {
  BillingPayment as BillingPaymentModel,
  BillingProduct as BillingProductModel,
  BillingSubscription as BillingSubscriptionModel,
} from './billing/billing.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Team as TeamModel } from './team/team.model'

import { Tournament as TournamentModel } from './tournament/tournament.model'

import { Match as MatchModel } from './match/match.model'

import { Bracket as BracketModel } from './bracket/bracket.model'

import { TournamentTeam as TournamentTeamModel } from './tournamentTeam/tournamentTeam.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  export class BillingProduct extends BillingProductModel {}
  export class BillingPayment extends BillingPaymentModel {}
  export class BillingSubscription extends BillingSubscriptionModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Team extends TeamModel {}

  export class Tournament extends TournamentModel {}

  export class Match extends MatchModel {}

  export class Bracket extends BracketModel {}

  export class TournamentTeam extends TournamentTeamModel {}
}
