import fs from 'fs'
import { join } from 'path'
import { parse } from 'csv/sync'
import { DATA_YEAR } from './constants'

const getContents = (filename: string) => {
  const dataDirectory = join(process.cwd(), 'data')
  const fileContents = fs.readFileSync(`${dataDirectory}${filename}`, 'utf8')

  return parse(fileContents, { cast: true, fromLine: 2 })
}

export const getAllFinance = (): Finance[] => {
  return getContents(`/${DATA_YEAR}.csv`).map(
    (record: Array<string | number>, index: number) => {
      return {
        id: index,
        prefectureName: String(record[1]),
        name: String(record[2]),
        power: Number(record[3]),
        population: Number(record[8]),
      }
    },
  )
}

export const getFinanceByPrefectureName = (prefectureName: string) => {
  return getAllFinance().filter((finance) => {
    return finance.prefectureName === prefectureName
  })
}

export const getAllPrefectures = (): Prefecture[] => {
  return getContents('/prefectures.csv').map(
    (prefecture: Array<string | number>) => {
      return { id: Number(prefecture[0]), name: String(prefecture[1]) }
    },
  )
}

export const getPrefectureById = (id: number): Prefecture => {
  const prefectures = getAllPrefectures().filter((prefecture) => {
    return prefecture.id === id
  })
  return prefectures[0]
}
