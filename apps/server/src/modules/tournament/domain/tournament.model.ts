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

import { Bracket } from '../../../modules/bracket/domain'

import { TournamentTeam } from '../../../modules/tournamentTeam/domain'

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @Column({})
  status: string

  @OneToMany(() => Match, child => child.tournament)
  matchs?: Match[]

  @OneToMany(() => Bracket, child => child.tournament)
  brackets?: Bracket[]

  @OneToMany(() => TournamentTeam, child => child.tournament)
  tournamentTeams?: TournamentTeam[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
