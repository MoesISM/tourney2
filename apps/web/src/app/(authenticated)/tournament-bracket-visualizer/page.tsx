'use client'

import { useEffect, useState } from 'react'
import { Typography, Button, Row, Col, Card, Spin } from 'antd'
import { TrophyOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function TournamentBracketVisualizerPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [tournament, setTournament] = useState<Model.Tournament | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchTournament = async () => {
    try {
      const tournamentData = await Api.Tournament.findOne(params.tournamentId, {
        includes: [
          'matchs',
          'matchs.team1',
          'matchs.team2',
          'matchs.winner',
          'brackets',
          'brackets.match',
          'brackets.parentMatch',
        ],
      })
      setTournament(tournamentData)
    } catch (error) {
      enqueueSnackbar('Failed to load tournament data', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (params.tournamentId) {
      fetchTournament()
    }
  }, [params.tournamentId])

  const handleWinnerClick = async (matchId: string, winnerId: string) => {
    try {
      await Api.Match.updateOne(matchId, { winnerId })
      enqueueSnackbar('Winner updated successfully', { variant: 'success' })
      fetchTournament()
    } catch (error) {
      enqueueSnackbar('Failed to update winner', { variant: 'error' })
    }
  }

  const renderMatch = (match: Model.Match) => (
    <Card key={match.id} style={{ marginBottom: 16 }}>
      <Row justify="space-between" align="middle">
        <Col>
          <Text>{match.team1?.name || 'TBD'}</Text>
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={() => handleWinnerClick(match.id, match.team1Id)}
          >
            Win
          </Button>
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col>
          <Text>{match.team2?.name || 'TBD'}</Text>
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={() => handleWinnerClick(match.id, match.team2Id)}
          >
            Win
          </Button>
        </Col>
      </Row>
    </Card>
  )

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        <TrophyOutlined /> Tournament Bracket Visualizer
      </Title>
      <Text style={{ textAlign: 'center', display: 'block', marginBottom: 24 }}>
        Visualize the tournament bracket and update match winners in real-time.
      </Text>
      {loading ? (
        <Spin size="large" style={{ display: 'block', margin: 'auto' }} />
      ) : (
        <div>{tournament?.matchs?.map(renderMatch)}</div>
      )}
    </PageLayout>
  )
}
