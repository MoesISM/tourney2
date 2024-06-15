import { Tournament } from '../tournament'

import { Match } from '../match'

export class Bracket {
  id: string

  tournamentId: string

  tournament?: Tournament

  matchId: string

  match?: Match

  parentMatchId?: string

  parentMatch?: Match

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
