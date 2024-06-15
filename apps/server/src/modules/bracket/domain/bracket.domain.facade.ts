import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Bracket } from './bracket.model'

import { Tournament } from '../../tournament/domain'

import { Match } from '../../match/domain'

@Injectable()
export class BracketDomainFacade {
  constructor(
    @InjectRepository(Bracket)
    private repository: Repository<Bracket>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Bracket>): Promise<Bracket> {
    return this.repository.save(values)
  }

  async update(item: Bracket, values: Partial<Bracket>): Promise<Bracket> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Bracket): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Bracket> = {},
  ): Promise<Bracket[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Bracket> = {},
  ): Promise<Bracket> {
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
    queryOptions: RequestHelper.QueryOptions<Bracket> = {},
  ): Promise<Bracket[]> {
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

  async findManyByMatch(
    item: Match,
    queryOptions: RequestHelper.QueryOptions<Bracket> = {},
  ): Promise<Bracket[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('match')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        matchId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByParentMatch(
    item: Match,
    queryOptions: RequestHelper.QueryOptions<Bracket> = {},
  ): Promise<Bracket[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('parentMatch')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        parentMatchId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
