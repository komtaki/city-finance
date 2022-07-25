import { NextPage } from 'next'
import Container from '../components/container'
import { CMS_NAME } from '../lib/constants'
import Text from '../components/Text'
import Meta from '../components/Meta'

const Index: NextPage = () => {
  return (
    <>
      <Meta
        title={`市区町村の財政健全度ランキング`}
        description={`政府統計をベースに算出した都道府県の市区町村の財政力ランキングです。2021年の1位は${data[0].prefectureName}${data[0].name}、2位は${data[1].prefectureName}${data[1].name}、3位は${data[2].prefectureName}${data[2].name}でした。`}
        og={{
          url: '/',
          imageUrl: `/img/top.png`,
        }}
      />
      <Container>
        <Text>調べたい都道府県を選択してください。</Text>
      </Container>
    </>
  )
}

export default Index
