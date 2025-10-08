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
      // 最初の要素または前の要素と同じ値の場合
      return { ...datum, ranking }
    } else {
      // 前の要素と異なる値の場合、ランキングを更新
      ranking = i + 1
      return { ...datum, ranking }
    }
  })
}
