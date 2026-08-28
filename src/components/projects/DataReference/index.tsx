import Box from '@mui/material/Box'

import {
  DATA_YEAR,
  FINANCE_SURVEY_URL,
  JAPANESE_YEAR,
  POPULATION_SURVEY_URL,
} from '../../../lib/constants'
import Alert from '../../uiParts/Alert'
import Text from '../../uiParts/Text'

const Reference = () => (
  <>
    <Box sx={{ mb: 3 }}>
      <Text gutterBottom>下記の政府統計を使用しています。</Text>
      <Text variant="body2" gutterBottom>
        <a href={FINANCE_SURVEY_URL}>
          ・{JAPANESE_YEAR}({DATA_YEAR}) 地方財政状況調査
        </a>
      </Text>
      <Text variant="body2" gutterBottom>
        <a href={POPULATION_SURVEY_URL}>
          ・住民基本台帳に基づく人口、人口動態及び世帯数調査
        </a>
      </Text>
    </Box>
    <Box sx={{ mb: 3 }}>
      <Alert title="地方財政状況調査とは">
        <Text variant="body2" gutterBottom>
          都道府県や市町村など各地方公共団体の決算に関する統計調査で、統一的な会計区分が定められ予算の執行を通じて地方公共団体がどのように行政運営を行ったかを見るものです。
        </Text>
        <Text variant="body2" gutterBottom>
          毎年度、地方財政状況調査の結果を取りまとめ「地方財政白書」として国会に報告されます。これらは地方公共団体の歳入・歳出の分析や財政の健全性の判断において重要な役割を果たしています。
        </Text>
      </Alert>
    </Box>
  </>
)

export default Reference
