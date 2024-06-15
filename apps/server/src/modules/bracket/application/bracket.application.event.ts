export namespace BracketApplicationEvent {
  export namespace BracketCreated {
    export const key = 'bracket.application.bracket.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
