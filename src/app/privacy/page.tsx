import type { Metadata } from 'next'
import Box from '@mui/material/Box'

import Layout from '../../components/uiParts/Layout'
import Text from '../../components/uiParts/Text'
import { buildMetadata } from '../../lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'プライバシーポリシー',
  description:
    'このプライバシーポリシーは、当サイトが収集する情報、情報を収集する理由について理解を深めていただくためのものです。',
})

export default function PrivacyPage() {
  return (
    <Layout>
      <article>
        <Text component="h1" variant="h4" sx={{ mb: 2 }} bold>
          プライバシーポリシー
        </Text>
        <Text sx={{ mb: 2 }}>
          このプライバシーポリシーは、当サイトが収集する情報、情報を収集する理由について理解を深めていただくためのものです。
        </Text>
        <Box sx={{ mb: 3 }}>
          <Text component="h2" variant="h5" gutterBottom bold>
            個人情報の管理
          </Text>
          当サイトは、訪問者からご提供いただいた情報の管理について、以下の 3
          つを徹底します。
          <Text component="h3" variant="h6">
            1. 情報の正確性の確保
          </Text>
          訪問者からご提供いただいた情報については、常に正確かつ最新の情報となるよう努めます。
          <Text component="h3" variant="h6">
            2. 安全管理措置
          </Text>
          当サイトは、個人情報の漏えいや滅失又は棄損を防止するために、適切なセキリュティ対策を実施して個人情報を保護します。
          <Text component="h3" variant="h6">
            3. 個人情報の廃棄
          </Text>
          個人情報が不要となった場合には、すみやかに廃棄します。
        </Box>
        <Box sx={{ mb: 3 }}>
          <Text component="h2" variant="h5" gutterBottom bold>
            個人情報の第三者への提供について
          </Text>
          当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
          <Text gutterBottom>・ 本人のご了解がある場合</Text>
          <Text gutterBottom>
            ・ 法令等への協力のため、開示が必要となる場合
          </Text>
          <Text component="h3" variant="h6" gutterBottom bold>
            アナリティクス
          </Text>
          <Text sx={{ mb: 2 }}>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
          </Text>
          <Text sx={{ mb: 2 }}>
            このGoogle アナリティクスはアクセス情報の収集のために
            Cookieを使用しています。このアクセス情報は匿名で収集されており、個人を特定するものではありません。
          </Text>
          <Text sx={{ mb: 2 }}>
            Google アナリティクスの Cookie は、26
            ヶ月間保持されます。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。Google
            アナリティクスの利用規約に関して確認したい場合は、
            <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">
              こちら
            </a>
            を確認してください。
          </Text>
          <Text sx={{ mb: 2 }}>
            また、「ユーザーが Google パートナーのサイトやアプリを使用する際の
            Google によるデータ使用」に関して確認したい場合は、
            <a href="https://policies.google.com/technologies/partner-sites?hl=ja">
              こちら
            </a>
            を確認してください。
          </Text>
          <Text component="h3" variant="h6" gutterBottom bold>
            免責事項
          </Text>
          <Text sx={{ mb: 2 }}>
            当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
          </Text>
          <Text sx={{ mb: 2 }}>
            当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
          </Text>
          <Text sx={{ mb: 2 }}>
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </Text>
          <Text sx={{ mb: 2 }}>
            当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接メールでご連絡下さい。確認後、対応させて頂きます。
          </Text>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Text component="h2" variant="h5" gutterBottom bold>
            プライバシーポリシーの変更について
          </Text>
          <Text>
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </Text>
        </Box>
        <Text sx={{ mb: 2 }}>2022 年 7 月 25 日　策定</Text>
      </article>
    </Layout>
  )
}
