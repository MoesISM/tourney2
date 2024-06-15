import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Tournament } from './tournament.model'

@Injectable()
export class TournamentDomainFacade {
  constructor(
    @InjectRepository(Tournament)
    private repository: Repository<Tournament>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Tournament>): Promise<Tournament> {
    return this.repository.save(values)
  }

  async update(
    item: Tournament,
    values: Partial<Tournament>,
  ): Promise<Tournament> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Tournament): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Tournament> = {},
  ): Promise<Tournament[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Tournament> = {},
  ): Promise<Tournament> {
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
}
