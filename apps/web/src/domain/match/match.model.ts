import { Tournament } from '../tournament'

import { Team } from '../team'

import { Bracket } from '../bracket'

export class Match {
  id: string

  round: number

  tournamentId: string

  tournament?: Tournament

  team1Id: string

  team1?: Team

  team2Id: string

  team2?: Team

  winnerId?: string

  winner?: Team

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  brackets?: Bracket[]

  bracketsAsParentMatch?: Bracket[]
}
