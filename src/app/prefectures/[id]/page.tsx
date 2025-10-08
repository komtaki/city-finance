import type { Metadata } from 'next'
import * as React from 'react'
import Box from '@mui/system/Box'

import {
  getAllPrefectures,
  getPrefectureById,
  getFinanceByPrefectureName,
} from '../../../lib/api'
import { DATA_YEAR, CMS_NAME, CMD_DOMAIN_URL } from '../../../lib/constants'
import Layout from '../../../components/uiParts/Layout'
import DataTable, { Field } from '../../../components/uiParts/DataTable'
import { sortAndAddRanking } from '../../../lib/utils'
import Text from '../../../components/uiParts/Text'
import JapanMap from '../../../components/uiParts/JapanMap'
import Reference from '../../../components/projects/DataReference'
import FinancePowerReference from '../../../components/projects/FinancePowerReference'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const prefecture = getPrefectureById(Number(id))
  const data = sortAndAddRanking(getFinanceByPrefectureName(prefecture.name))

  const title = `${prefecture.name}の財政力指数ランキング`
  const description = `政府統計から算出した${prefecture.name}の市区町村の財政力指数ランキングです。${DATA_YEAR}年の1位は${data[0].name}、2位は${data[1].name}、3位は${data[2].name}でした。`

  return {
    title: `${title} | ${CMS_NAME}`,
    description,
    openGraph: {
      title: `${title} | ${CMS_NAME}`,
      description,
      url: `${CMD_DOMAIN_URL}/prefectures/${prefecture.id}/`,
      images: [`${CMD_DOMAIN_URL}/img/prefectures/${prefecture.id}.png`],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${CMS_NAME}`,
      description,
      images: [`${CMD_DOMAIN_URL}/img/prefectures/${prefecture.id}.png`],
    },
  }
}

export default async function PrefecturePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const prefecture = getPrefectureById(Number(id))
  const data = sortAndAddRanking(getFinanceByPrefectureName(prefecture.name))
  const pageSize = Math.min(50, data.length)

  return (
    <Layout>
      <Box marginBottom={3}>
        <Text variant="h1" bold gutterBottom>
          {prefecture.name}の財政力指数ランキング
        </Text>
        <Text gutterBottom>
          {DATA_YEAR}年の政府統計の地方財政状況調査から算出した
          {prefecture.name}
          の市区町村の財政力指数ランキングです。
        </Text>
        <Text gutterBottom>
          1位は{data[0].name}
          、2位は{data[1].name}、3位は{data[2].name}でした。
        </Text>
      </Box>

      <FinancePowerReference />

      <DataTable
        data={data}
        fields={[Field.ranking, Field.name, Field.power, Field.population]}
        pageSize={pageSize}
      />
      <Reference />
      <Text variant="h2" bold>
        他の都道府県を調べる
      </Text>
      <JapanMap />
    </Layout>
  )
}

export async function generateStaticParams() {
  const prefectures = getAllPrefectures()

  return prefectures.map((prefecture) => ({
    id: String(prefecture.id),
  }))
}
