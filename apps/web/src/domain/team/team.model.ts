import { Match } from '../match'

import { TournamentTeam } from '../tournamentTeam'

export class Team {
  id: string

  name: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  matchsAsTeam1?: Match[]

  matchsAsTeam2?: Match[]

  matchsAsWinner?: Match[]

  tournamentTeams?: TournamentTeam[]
}
