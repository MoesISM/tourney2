import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { TournamentTeam } from './tournamentTeam.model'

import { Tournament } from '../../tournament/domain'

import { Team } from '../../team/domain'

@Injectable()
export class TournamentTeamDomainFacade {
  constructor(
    @InjectRepository(TournamentTeam)
    private repository: Repository<TournamentTeam>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<TournamentTeam>): Promise<TournamentTeam> {
    return this.repository.save(values)
  }

  async update(
    item: TournamentTeam,
    values: Partial<TournamentTeam>,
  ): Promise<TournamentTeam> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: TournamentTeam): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<TournamentTeam> = {},
  ): Promise<TournamentTeam[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<TournamentTeam> = {},
  ): Promise<TournamentTeam> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByTournament(
    item: Tournament,
    queryOptions: RequestHelper.QueryOptions<TournamentTeam> = {},
  ): Promise<TournamentTeam[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('tournament')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        tournamentId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByTeam(
    item: Team,
    queryOptions: RequestHelper.QueryOptions<TournamentTeam> = {},
  ): Promise<TournamentTeam[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('team')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        teamId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
