import { Match } from '../match'

import { Bracket } from '../bracket'

import { TournamentTeam } from '../tournamentTeam'

export class Tournament {
  id: string

  name: string

  status: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  matchs?: Match[]

  brackets?: Bracket[]

  tournamentTeams?: TournamentTeam[]
}
