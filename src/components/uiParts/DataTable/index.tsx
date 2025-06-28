import {
  DataGrid,
  GridColDef,
  GridRowsProp,
} from '@mui/x-data-grid'
import { QuickFilter } from '@mui/x-data-grid/components/quickFilter'
import { ExportCsv } from '@mui/x-data-grid/components/export'
import { Box } from '@mui/material'

export const Field = {
  ranking: 'ranking',
  prefectureName: 'prefectureName',
  name: 'name',
  power: 'power',
  population: 'population',
} as const

type Field = keyof typeof Field

const columns = [
  { field: Field.ranking, headerName: '順位', width: 70 },
  { field: Field.prefectureName, headerName: '都道府県', width: 120 },
  { field: Field.name, headerName: '名前', width: 120 },
  {
    field: Field.power,
    headerName: '財政力指数',
    type: 'number',
    width: 130,
  },
  {
    field: Field.population,
    headerName: '人口',
    description: '住民台帳に紐づく人口',
    type: 'number',
    width: 130,
  },
] as const

export type FinanceWithRanking = Finance & {
  ranking: number
}

export const sortAndAddRanking = (data: Finance[]): FinanceWithRanking[] => {
  const sortedData = data.sort((a: Finance, b: Finance) => {
    return a.power > b.power ? -1 : 1 // オブジェクトの昇順ソート
  })

  let ranking = 1
  return sortedData.map((datum, i) => {
    if (i === 0 || sortedData[i - 1].power === sortedData[i].power) {
      // 同率順位
    } else {
      ranking = i + 1
    }

    return {
      ...datum,
      ranking,
    }
  })
}

const generateColumns = (fields: Field[]): GridColDef[] =>
  columns.filter((column) => fields.includes(column.field))

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <QuickFilter />
      <ExportCsv />
    </Box>
  )
}

type Props = {
  fields: Field[]
  pageSize: number
  data: GridRowsProp
  requiredToolBar?: boolean
  sort?: 'desc' | 'asc'
}

const DataTable: React.FC<Props> = ({
  fields,
  data,
  pageSize,
  sort = 'desc',
  requiredToolBar = true,
}) => (
  <div
    style={{
      height: pageSize * 52 + (156 - (requiredToolBar ? 0 : 45)),
      width: '100%',
      marginBottom: '3rem',
    }}
  >
    <DataGrid
      rows={data}
      columns={generateColumns(fields)}
      disableColumnFilter
      disableColumnSelector
      disableRowSelectionOnClick
      disableDensitySelector
      pageSizeOptions={[5]}
      initialState={{
        sorting: {
          sortModel: [{ field: 'power', sort }],
        },
        pagination: { paginationModel: { page: 0, pageSize } },
      }}
      slots={
        requiredToolBar
          ? {
              toolbar: QuickSearchToolbar,
            }
          : {}
      }
    />
  </div>
)

export default DataTable
