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

export const panelDatasL: PANNEL_DATA = {
  name: 'Battery Industry',
  degreeDatas: [
    {
      key: 'Power capacity',
      degree: 40,
      perAdd: 0.02
    },
    {
      key: 'Solar Power Generation',
      degree: 70,
      perAdd: 0.02
    },
    {
      key: 'Battery Cycle Count',
      degree: 52,
      perAdd: 0.02
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

export const panelDatasR: PANNEL_DATA = {
  name: 'Battery Industry',
  degreeDatas: [
    {
      key: 'Distance Traveled',
      degree: 40,
      perAdd: 0.02
    },
    {
      key: 'Solar Power Generation',
      degree: 70,
      perAdd: 0.02
    },
    {
      key: 'Battery Cycle Count',
      degree: 52,
      perAdd: 0.02
    },
    {
      key: 'Charge Capacity',
      degree: 42,
      perAdd: 0.02
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