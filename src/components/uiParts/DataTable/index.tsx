'use client'

import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridRowsProp,
} from '@mui/x-data-grid'

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


const generateColumns = (fields: Field[]): GridColDef[] =>
  columns.filter((column) => fields.includes(column.field))

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
              toolbar: GridToolbar,
            }
          : {}
      }
      slotProps={
        requiredToolBar
          ? {
              toolbar: { showQuickFilter: true },
            }
          : {}
      }
    />
  </div>
)

export default DataTable
