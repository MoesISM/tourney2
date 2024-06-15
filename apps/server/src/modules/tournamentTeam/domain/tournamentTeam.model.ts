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

@Entity()
export class TournamentTeam {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  tournamentId: string

  @ManyToOne(() => Tournament, parent => parent.tournamentTeams)
  @JoinColumn({ name: 'tournamentId' })
  tournament?: Tournament

  @Column({})
  teamId: string

  @ManyToOne(() => Team, parent => parent.tournamentTeams)
  @JoinColumn({ name: 'teamId' })
  team?: Team

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
