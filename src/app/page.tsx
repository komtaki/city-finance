import type { Metadata } from 'next'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

import { getAllFinance } from '../lib/api'
import { DATA_YEAR, CMS_NAME } from '../lib/constants'
import { buildMetadata } from '../lib/metadata'
import Layout from '../components/uiParts/Layout'
import Text from '../components/uiParts/Text'
import JapanMap from '../components/uiParts/JapanMap'
import DataTable from '../components/uiParts/DataTable'
import { sortAndAddRanking } from '../lib/utils'
import DataReference from '../components/projects/DataReference'
import FinancePowerReference from '../components/projects/FinancePowerReference'

const maxSize = 25

const getNameWithPrefecture = (finance: Finance) =>
  `${finance.prefectureName}${finance.name}`

export async function generateMetadata(): Promise<Metadata> {
  const sortedData = sortAndAddRanking(getAllFinance())
  const worstData = sortedData.slice(-maxSize)
  const topData = sortedData.slice(0, maxSize)

  const worstCitiesText = worstData
    .filter((value) => value.ranking === worstData[maxSize - 1].ranking)
    .map((value) => getNameWithPrefecture(value))

  const title = '市区町村の財政指数ランキング'
  const description = `政府統計から算出した全国の市区町村の財政指数ランキングです。${DATA_YEAR}年の1位は${getNameWithPrefecture(
    topData[0],
  )}、2位は${getNameWithPrefecture(topData[1])}、3位は${getNameWithPrefecture(
    topData[2],
  )}でした。最下位は${worstCitiesText.join('と')}でした。`

  return buildMetadata({
    title,
    description,
    og: {
      url: '/',
      imageUrl: '/img/top.png',
    },
  })
}

export default async function HomePage() {
  const sortedData = sortAndAddRanking(getAllFinance())
  const worstData = sortedData.slice(-maxSize)
  const topData = sortedData.slice(0, maxSize)

  const worstCitiesText = worstData
    .filter((value) => value.ranking === worstData[maxSize - 1].ranking)
    .map((value) => getNameWithPrefecture(value))

  return (
    <Layout>
      <Grid container spacing={6}>
        <Grid size={12}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <Text
                variant="h2"
                align="center"
                sx={{ fontWeight: 600 }}
                gutterBottom
              >
                「{CMS_NAME}」の使い方
              </Text>

              <Text sx={{ mb: 2 }}>
                政府統計から算出した全国の市区町村の財政力指数ランキングを掲載しています。
              </Text>

              <FinancePowerReference />

              <Text sx={{ mb: 2 }}>
                人口減少で地方の過疎化が進む現代、もし自治体が財政破綻すれば小中学校などの公共インフラは大きな影響を受けます。そうなる前に、移住先や今住んでいる市区町村の財政がわかれば準備ができます。
              </Text>

              <Text bold gutterBottom>
                まずは気になる都道府県や市区町村の名前で検索してみましょう。
              </Text>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={12}>
          <Divider />
        </Grid>

        <Grid size={12}>
          <Text
            variant="h2"
            align="center"
            sx={{ fontWeight: 600 }}
            gutterBottom
          >
            データの参照元
          </Text>
          <DataReference />
        </Grid>

        <Grid size={12}>
          <Divider />
        </Grid>

        <Grid size={12}>
          <Text
            variant="h2"
            align="center"
            sx={{ fontWeight: 600 }}
            gutterBottom
          >
            都道府県から探す
          </Text>
          <JapanMap />
        </Grid>

        <Grid size={12}>
          <Divider />
        </Grid>

        <Grid size={12}>
          <Box sx={{ mb: 3 }}>
            <Text variant="h2" gutterBottom>
              全国の財政力指数 TOP {maxSize}
            </Text>
            <Text gutterBottom>
              {DATA_YEAR}
              年の政府統計の地方財政状況調査から算出した全国の市区町村の財政力指数ランキングです。
            </Text>
            <Text gutterBottom>
              1位は{getNameWithPrefecture(topData[0])}、2位は
              {getNameWithPrefecture(topData[1])}、3位は
              {getNameWithPrefecture(topData[2])}でした。
            </Text>
          </Box>

          <DataTable
            data={topData}
            fields={[
              'ranking',
              'prefectureName',
              'name',
              'power',
              'population',
            ]}
            pageSize={maxSize}
            requiredToolBar={false}
          />
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12}>
          <Box sx={{ mb: 3 }}>
            <Text variant="h2" gutterBottom>
              全国の財政力指数 WORST {maxSize}
            </Text>
            <Text gutterBottom>
              最下位は{worstCitiesText.join('と')}でした。
            </Text>
          </Box>

          <DataTable
            data={worstData}
            fields={[
              'ranking',
              'prefectureName',
              'name',
              'power',
              'population',
            ]}
            sort="asc"
            pageSize={maxSize}
            requiredToolBar={false}
          />
        </Grid>
      </Grid>
    </Layout>
  )
}
