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

import { Match } from '../../../modules/match/domain'

@Entity()
export class Bracket {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  tournamentId: string

  @ManyToOne(() => Tournament, parent => parent.brackets)
  @JoinColumn({ name: 'tournamentId' })
  tournament?: Tournament

  @Column({})
  matchId: string

  @ManyToOne(() => Match, parent => parent.brackets)
  @JoinColumn({ name: 'matchId' })
  match?: Match

  @Column({ nullable: true })
  parentMatchId?: string

  @ManyToOne(() => Match, parent => parent.bracketsAsParentMatch)
  @JoinColumn({ name: 'parentMatchId' })
  parentMatch?: Match

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
