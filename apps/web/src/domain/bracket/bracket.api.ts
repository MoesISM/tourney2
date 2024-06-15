import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Bracket } from './bracket.model'

export class BracketApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Bracket>,
  ): Promise<Bracket[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/brackets${buildOptions}`)
  }

  static findOne(
    bracketId: string,
    queryOptions?: ApiHelper.QueryOptions<Bracket>,
  ): Promise<Bracket> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/brackets/${bracketId}${buildOptions}`)
  }

  static createOne(values: Partial<Bracket>): Promise<Bracket> {
    return HttpService.api.post(`/v1/brackets`, values)
  }

  static updateOne(
    bracketId: string,
    values: Partial<Bracket>,
  ): Promise<Bracket> {
    return HttpService.api.patch(`/v1/brackets/${bracketId}`, values)
  }

  static deleteOne(bracketId: string): Promise<void> {
    return HttpService.api.delete(`/v1/brackets/${bracketId}`)
  }

  static findManyByTournamentId(
    tournamentId: string,
    queryOptions?: ApiHelper.QueryOptions<Bracket>,
  ): Promise<Bracket[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/tournaments/tournament/${tournamentId}/brackets${buildOptions}`,
    )
  }

  static createOneByTournamentId(
    tournamentId: string,
    values: Partial<Bracket>,
  ): Promise<Bracket> {
    return HttpService.api.post(
      `/v1/tournaments/tournament/${tournamentId}/brackets`,
      values,
    )
  }

  static findManyByMatchId(
    matchId: string,
    queryOptions?: ApiHelper.QueryOptions<Bracket>,
  ): Promise<Bracket[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/matchs/match/${matchId}/brackets${buildOptions}`,
    )
  }

  static createOneByMatchId(
    matchId: string,
    values: Partial<Bracket>,
  ): Promise<Bracket> {
    return HttpService.api.post(`/v1/matchs/match/${matchId}/brackets`, values)
  }

  static findManyByParentMatchId(
    parentMatchId: string,
    queryOptions?: ApiHelper.QueryOptions<Bracket>,
  ): Promise<Bracket[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/matchs/parentMatch/${parentMatchId}/brackets${buildOptions}`,
    )
  }

  static createOneByParentMatchId(
    parentMatchId: string,
    values: Partial<Bracket>,
  ): Promise<Bracket> {
    return HttpService.api.post(
      `/v1/matchs/parentMatch/${parentMatchId}/brackets`,
      values,
    )
  }
}
