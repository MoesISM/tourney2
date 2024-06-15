'use client'

import { Typography, Row, Col } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={1}>
            Welcome to Our Application <SmileOutlined />
          </Title>
          <Paragraph>
            This application helps you manage your tasks efficiently and
            effectively. You can create, update, and delete tasks as per your
            requirements. Stay organized and keep track of your progress with
            our user-friendly interface.
          </Paragraph>
        </Col>
      </Row>
    </PageLayout>
  )
}
