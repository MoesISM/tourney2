'use client'

import { useEffect, useState } from 'react'
import { Typography, Input, Button, List, Space, Modal, Form } from 'antd'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  RedoOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ManageTeamsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [teams, setTeams] = useState<Model.Team[]>([])
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingTeam, setEditingTeam] = useState<Model.Team | null>(null)

  const fetchTeams = async () => {
    setLoading(true)
    try {
      const fetchedTeams = await Api.Team.findMany()
      setTeams(fetchedTeams)
    } catch (error) {
      enqueueSnackbar('Failed to fetch teams', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTeams()
  }, [])

  const handleAddTeam = async (values: { name: string }) => {
    try {
      const newTeam = await Api.Team.createOne({ name: values.name })
      setTeams([...teams, newTeam])
      enqueueSnackbar('Team added successfully', { variant: 'success' })
      setIsModalVisible(false)
    } catch (error) {
      enqueueSnackbar('Failed to add team', { variant: 'error' })
    }
  }

  const handleUpdateTeam = async (values: { name: string }) => {
    if (!editingTeam) return
    try {
      const updatedTeam = await Api.Team.updateOne(editingTeam.id, {
        name: values.name,
      })
      setTeams(
        teams.map(team => (team.id === editingTeam.id ? updatedTeam : team)),
      )
      enqueueSnackbar('Team updated successfully', { variant: 'success' })
      setIsModalVisible(false)
      setEditingTeam(null)
    } catch (error) {
      enqueueSnackbar('Failed to update team', { variant: 'error' })
    }
  }

  const handleDeleteTeam = async (teamId: string) => {
    try {
      await Api.Team.deleteOne(teamId)
      setTeams(teams.filter(team => team.id !== teamId))
      enqueueSnackbar('Team deleted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to delete team', { variant: 'error' })
    }
  }

  const handleResetBracket = async () => {
    // Implement the logic to reset the bracket and restart the tournament
    enqueueSnackbar('Bracket reset successfully', { variant: 'success' })
  }

  const handleGenerateBracket = () => {
    router.push('/tournament-bracket-visualizer')
  }

  const showModal = (team?: Model.Team) => {
    setEditingTeam(team || null)
    setIsModalVisible(true)
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
    setEditingTeam(null)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Manage Teams</Title>
      <Text>
        Enter team names to manage the teams participating in your tournament.
      </Text>
      <Space style={{ marginTop: 16, marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => showModal()}
        >
          Add Team
        </Button>
        <Button
          type="default"
          icon={<RedoOutlined />}
          onClick={handleResetBracket}
        >
          Reset Bracket
        </Button>
        <Button type="primary" onClick={handleGenerateBracket}>
          Generate Bracket
        </Button>
      </Space>
      <List
        loading={loading}
        dataSource={teams}
        renderItem={team => (
          <List.Item
            actions={[
              <Button
                icon={<EditOutlined />}
                onClick={() => showModal(team)}
              />,
              <Button
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteTeam(team.id)}
              />,
            ]}
          >
            {team.name}
          </List.Item>
        )}
      />
      <Modal
        title={editingTeam ? 'Edit Team' : 'Add Team'}
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form
          initialValues={
            editingTeam ? { name: editingTeam.name } : { name: '' }
          }
          onFinish={editingTeam ? handleUpdateTeam : handleAddTeam}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please enter the team name' }]}
          >
            <Input placeholder="Team Name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingTeam ? 'Update Team' : 'Add Team'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
