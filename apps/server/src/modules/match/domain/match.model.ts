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

import { Tournament } from '../../../modules/tournament/domain'

import { Team } from '../../../modules/team/domain'

import { Bracket } from '../../../modules/bracket/domain'

@Entity()
export class Match {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  round: number

  @Column({})
  tournamentId: string

  @ManyToOne(() => Tournament, parent => parent.matchs)
  @JoinColumn({ name: 'tournamentId' })
  tournament?: Tournament

  @Column({})
  team1Id: string

  @ManyToOne(() => Team, parent => parent.matchsAsTeam1)
  @JoinColumn({ name: 'team1Id' })
  team1?: Team

  @Column({})
  team2Id: string

  @ManyToOne(() => Team, parent => parent.matchsAsTeam2)
  @JoinColumn({ name: 'team2Id' })
  team2?: Team

  @Column({ nullable: true })
  winnerId?: string

  @ManyToOne(() => Team, parent => parent.matchsAsWinner)
  @JoinColumn({ name: 'winnerId' })
  winner?: Team

  @OneToMany(() => Bracket, child => child.match)
  brackets?: Bracket[]

  @OneToMany(() => Bracket, child => child.parentMatch)
  bracketsAsParentMatch?: Bracket[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
