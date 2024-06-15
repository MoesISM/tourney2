export namespace TournamentTeamApplicationEvent {
  export namespace TournamentTeamCreated {
    export const key = 'tournamentTeam.application.tournamentTeam.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
