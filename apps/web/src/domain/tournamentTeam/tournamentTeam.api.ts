import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { TournamentTeam } from './tournamentTeam.model'

export class TournamentTeamApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<TournamentTeam>,
  ): Promise<TournamentTeam[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/tournamentTeams${buildOptions}`)
  }

  static findOne(
    tournamentTeamId: string,
    queryOptions?: ApiHelper.QueryOptions<TournamentTeam>,
  ): Promise<TournamentTeam> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/tournamentTeams/${tournamentTeamId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<TournamentTeam>): Promise<TournamentTeam> {
    return HttpService.api.post(`/v1/tournamentTeams`, values)
  }

  static updateOne(
    tournamentTeamId: string,
    values: Partial<TournamentTeam>,
  ): Promise<TournamentTeam> {
    return HttpService.api.patch(
      `/v1/tournamentTeams/${tournamentTeamId}`,
      values,
    )
  }

  static deleteOne(tournamentTeamId: string): Promise<void> {
    return HttpService.api.delete(`/v1/tournamentTeams/${tournamentTeamId}`)
  }

  static findManyByTournamentId(
    tournamentId: string,
    queryOptions?: ApiHelper.QueryOptions<TournamentTeam>,
  ): Promise<TournamentTeam[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/tournaments/tournament/${tournamentId}/tournamentTeams${buildOptions}`,
    )
  }

  static createOneByTournamentId(
    tournamentId: string,
    values: Partial<TournamentTeam>,
  ): Promise<TournamentTeam> {
    return HttpService.api.post(
      `/v1/tournaments/tournament/${tournamentId}/tournamentTeams`,
      values,
    )
  }

  static findManyByTeamId(
    teamId: string,
    queryOptions?: ApiHelper.QueryOptions<TournamentTeam>,
  ): Promise<TournamentTeam[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/teams/team/${teamId}/tournamentTeams${buildOptions}`,
    )
  }

  static createOneByTeamId(
    teamId: string,
    values: Partial<TournamentTeam>,
  ): Promise<TournamentTeam> {
    return HttpService.api.post(
      `/v1/teams/team/${teamId}/tournamentTeams`,
      values,
    )
  }
}
