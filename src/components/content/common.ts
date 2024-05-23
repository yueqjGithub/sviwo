export type PANNEL_DATA = {
  name: string
  degreeDatas: {
    key: string
    degree: number
    perAdd: number
  }[]
  tradingDatas: {
    key: string
    current: number
    target: number
    perAdd: number
  }[]
}

/** 顶部面板数据 */
export const GuageDatas = [
  {
    key: 'Total Online Population',
    value: 46260,
    day_add_start: 2760,
    per_add: 23,
  },
  {
    key: 'Global User',
    value: 176566,
    day_add_start: 1800,
    per_add: 7,
  },
  {
    key: 'Global mileage',
    value: 89957,
    day_add_start: 240,
    per_add: 1,
  }
]

/** 左边面板数据 */
export const panelDatasL: PANNEL_DATA = {
  name: 'Battery Industry',
  degreeDatas: [
    {
      key: 'Power capacity',
      degree: 40,
      perAdd: 0.002
    },
    {
      key: 'Solar Power Generation',
      degree: 70,
      perAdd: 0.002
    },
    {
      key: 'Battery Cycle Count',
      degree: 52,
      perAdd: 0.002
    }
  ],
  tradingDatas: [
    {
      key: 'uk',
      current: 75003,
      target: 1000000,
      perAdd: 7
    },
    {
      key: 'spain',
      current: 26003,
      target: 1000000,
      perAdd: 8
    },
    {
      key: 'france',
      current: 12003,
      target: 1000000,
      perAdd: 5
    },
    {
      key: 'mexico',
      current: 115003,
      target: 1000000,
      perAdd: 15
    }
  ]
}

/** 右边面板数据 */
export const panelDatasR: PANNEL_DATA = {
  name: 'Battery Industry',
  degreeDatas: [
    {
      key: 'Distance Traveled',
      degree: 40,
      perAdd: 0.002
    },
    {
      key: 'Solar Power Generation',
      degree: 70,
      perAdd: 0.002
    },
    {
      key: 'Battery Cycle Count',
      degree: 52,
      perAdd: 0.002
    },
    {
      key: 'Charge Capacity',
      degree: 42,
      perAdd: 0.002
    }
  ],
  tradingDatas: [
    {
      key: 'uk',
      current: 275003,
      target: 4000000,
      perAdd: 7
    },
    {
      key: 'spain',
      current: 126003,
      target: 4000000,
      perAdd: 8
    },
    {
      key: 'france',
      current: 222003,
      target: 4000000,
      perAdd: 5
    },
    {
      key: 'mexico',
      current: 315003,
      target: 4000000,
      perAdd: 15
    }
  ]
}

/** 中间数据 */
export const centerData = {
  percent: {
    start: 36.15,
    per_add: 0.002,
  },
  chip: 36,
  other: 64
}