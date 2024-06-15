import { Tournament } from '../tournament'

import { Team } from '../team'

export class TournamentTeam {
  id: string

  tournamentId: string

  tournament?: Tournament

  teamId: string

  team?: Team

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
