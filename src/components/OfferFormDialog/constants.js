import originAreaData from 'china-area-data'

export const areaData = originAreaData
export const areaDataMap = {}

const _parTmp = Object.keys(originAreaData)
for (let i = 0; i < _parTmp.length; i++) {
  const _key = _parTmp[i]

  const _subTmp = Object.keys(originAreaData[_key])

  for (let subI = 0; subI < _subTmp.length; subI++) {
    const _subKey = _subTmp[subI]

    areaDataMap[_subKey] = originAreaData[_key][_subKey]
  }
}

export const genderMap = {
  0: '女',
  1: '男',
  9: '不限'
}

export const genderList = Object.keys(genderMap).map((v) => ({
  label: genderMap[v],
  value: v
}))

export const workExpMap = {
  不限: '不限',
  一年以下: '一年以下',
  '1~2年': '1~2年',
  '3~5年': '3~5年',
  '6~9年': '6~9年',
  '9年以上': '9年以上'
}

export const workExpList = Object.keys(workExpMap).map((v) => ({
  label: workExpMap[v],
  value: v
}))

export const eductionMap = {
  5: '硕士及以上',
  4: '本科',
  3: '大专',
  2: '高中',
  1: '初中及以下',
  0: '不限'
}

export const eductionList = Object.keys(eductionMap).map((v) => ({
  label: eductionMap[v],
  value: v
}))

export const moneyList = [
  {
    label: '面议',
    value: '面议'
  }
].concat(
  new Array(20).fill(undefined).map((_, k) => ({
    label: `${k + 1}K`,
    value: `${k + 1}K`
  }))
)

export const moneyMap = moneyList.reduce((pre, cur) => {
  return {
    ...pre,
    [cur.value]: cur.label
  }
}, {})

export const welfareMap = {
  高额提成: '高额提成',
  饭补: '饭补',
  年底双薪: '年底双薪',
  包住: '包住',
  房补: '房补',
  话补: '话补',
  周末双休: '周末双休',
  加班补助: '加班补助',
  交通补助: '交通补助',
  五险一金: '五险一金'
}

export const welfareList = Object.keys(welfareMap).map((v) => ({
  label: welfareMap[v],
  value: v
}))

export const getObAry = (obj) => {
  if (obj) {
    return Object.keys(obj).map((v) => ({
      label: obj[v],
      value: v
    }))
  }
  return []
}
