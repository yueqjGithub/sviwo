import { FC } from "react";
import styles from './index.module.scss'
import { PANNEL_DATA } from "../../common";
import Degree from "./degree";
import Country from "./contry";
import ukImg from '@/assets/image/uk.png'
import spainImg from '@/assets/image/spain.png'
import franceImg from '@/assets/image/france.png'
import mexicoImg from '@/assets/image/mexico.png'

type Props = {
  pannelData: PANNEL_DATA
}

const IMG_KEYS: Record<string, string> = {
  'uk': ukImg,
  'spain': spainImg,
  'france': franceImg,
  'mexico': mexicoImg
}

const Panel: FC<Props> = ({ pannelData }) => {
  return (
    <div className={`${styles.panel} full-width full-height flex-col flex-jst-start flex-ali-center`}>
      <div className={`${styles.degreeOut} full-width flex-1 flex-col flex-jst-btw flex-ali-center`}>
        {
          pannelData.degreeDatas.map(item => {
            const _interval = 5000 + Math.floor(Math.random() * 3000)
            return (
              <div className={`${styles.degree} flex-col flex-jst-start flex-ali-start`} key={item.key}>
                <div className={`${styles.title}`}>{item.key}</div>
                <Degree
                  item={item}
                  interval={_interval}
                ></Degree>
              </div>
            )
          })
        }
      </div>
      <div className={`${styles.nameRow} full-width flex-row flex-jst-center flex-ali-base`}>
        <p>{pannelData.name}</p>
        <span>{`(Trading)`}</span>
      </div>
      <div className={`${styles.country} full-width flex-row flex-jst-btw flex-ali-start flex-wrap`}>
        {
          pannelData.tradingDatas.map(item => {
            const _interval = 5000 + Math.floor(Math.random() * 3000)
            return (
              <Country
              key={item.key}
              item={item}
              imgSrc={IMG_KEYS[item.key]}
              interval={_interval}
              ></Country>
            )
          })
        }
      </div>
    </div>
  )
}

export default Panel