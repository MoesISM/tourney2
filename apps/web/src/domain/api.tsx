import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { BillingApi } from './billing/billing.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { TeamApi } from './team/team.api'

import { TournamentApi } from './tournament/tournament.api'

import { MatchApi } from './match/match.api'

import { BracketApi } from './bracket/bracket.api'

import { TournamentTeamApi } from './tournamentTeam/tournamentTeam.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Billing extends BillingApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Team extends TeamApi {}

  export class Tournament extends TournamentApi {}

  export class Match extends MatchApi {}

  export class Bracket extends BracketApi {}

  export class TournamentTeam extends TournamentTeamApi {}
}
