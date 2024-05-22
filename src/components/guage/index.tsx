import { FC, useEffect, useRef, useState } from "react"
import { MOCK_DATA } from "./common"
import styles from './index.module.scss'
import CountTo from "../countTo/countTo"
const Guage: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [ra, setRa] = useState(0)
  const changeRa = () => {
    const _w = ref.current!.clientWidth
    const result = Math.floor(_w / 3 * 0.5)
    setRa(result)
  }
  useEffect(() => {
    if (ref.current) {
      changeRa()
    }
    window.addEventListener('resize', changeRa)
  }, [])
  return (
    <div className={`full-width flex-row flex-jst-ard flex-ali-center ${styles.container}`} ref={ref}>
      {
        MOCK_DATA.map((item, idx) => {
          return (
            <div className={`${styles.item} flex-col flex-jst-btw flex-ali-center flex-1`} key={item.key}>
              <div className={`${styles.title}`}>{item.key}</div>
              <div className={`${styles.countContainer} full-width flex-row flex-jst-center flex-ali-start`} style={{ '--ra': ra, '--delay': `${idx / 10}s` } as any}>
                <svg className={`${styles.svg}`} width={ra} height={ra}>
                  <linearGradient id={`gradient${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color={`${idx === 1 ? '#A964FF' : '#22AFFF'}`}>
                      <animate attributeName="offset" values="0;1" dur={`${idx + 8}s`} repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stop-color={`${idx === 1 ? '#22AFFF' : '#A964FF'}`}>
                      <animate attributeName="offset" values="1;2" dur={`${idx + 8}s`} repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  <circle stroke={`url(#gradient${idx})`} className={`${styles.degree}`}
                    cx={Math.floor(ra / 2)}
                    cy={Math.floor(ra / 2)}
                    r={Math.floor(ra / 2 * 0.9)}
                    fill='none'
                    strokeWidth={Math.floor(ra / 2 * 0.1)}
                    strokeDasharray={`${Math.floor(2 * Math.PI * Math.floor(ra / 2 * 0.9) * 75 / 100)} 300%`}
                  ></circle>
                </svg>
                <CountTo
                start={item.value}
                add={item.day_add}
                interval={5000 + Math.floor(Math.random() * 3000)}
                ></CountTo>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Guage
