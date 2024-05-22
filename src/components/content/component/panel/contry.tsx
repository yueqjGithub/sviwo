import { FC, useEffect, useState } from "react";
import styles from './index.module.scss'
import { PANNEL_DATA } from "../../common";
import CountTo from "@/components/countTo/countTo";

type Props = {
  item: PANNEL_DATA['tradingDatas'][number],
  imgSrc: string,
  interval: number
}

const Country: FC<Props> = ({ item, imgSrc, interval }) => {
  const [cur, setCur] = useState<number>(Math.floor(item.current / item.target * 100))
  const _add = () => {
    const _cur = cur + Math.floor(item.perAdd / item.target * 100)
    setCur(_cur)
  }
  useEffect(() => {
    const _interval = setInterval(_add, interval)
    return () => {
      clearInterval(_interval)
    }
  }, [])
  return (
    <div className={`${styles.countryItem} flex-row flex-jst-start flex-ali-start`}>
      <div className={`${styles.imgContainer}`}>
        <img src={imgSrc} alt="" />
      </div>
      <div className={`${styles.right} flex-1 flex-col flex-jst-start flex-ali-start`}>
        <div className={`${styles.degree}`} style={{ '--degree': `${cur}%` } as any}>
          <div className={`${styles.line}`}></div>
        </div>
        <div className={`${styles.amountShow} full-width flex-row flex-jst-btw flex-ali-center`}>
          <div className="flex-row flex-jst-start flex-ali-center">
            <span>$</span>
            <div className={`${styles.countContainer}`}>
              <CountTo
                start={item.current}
                add={item.perAdd}
                interval={interval}
              ></CountTo>
            </div>
          </div>
          <div>{cur}%</div>
        </div>
      </div>
    </div>
  )
}

export default Country
