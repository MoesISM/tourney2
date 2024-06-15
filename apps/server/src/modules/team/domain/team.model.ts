import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Match } from '../../../modules/match/domain'

import { TournamentTeam } from '../../../modules/tournamentTeam/domain'

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @OneToMany(() => Match, child => child.team1)
  matchsAsTeam1?: Match[]

  @OneToMany(() => Match, child => child.team2)
  matchsAsTeam2?: Match[]

  @OneToMany(() => Match, child => child.winner)
  matchsAsWinner?: Match[]

  @OneToMany(() => TournamentTeam, child => child.team)
  tournamentTeams?: TournamentTeam[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
