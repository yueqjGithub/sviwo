import { FC } from "react";
import styles from './index.module.scss'
import CountTo from "@/components/countTo/countTo";
import { centerData } from "../../common";
import CountUp from "react-countup";
import LogoImg from '@/assets/image/logo.png'
import Line from "./line";

const Center: FC = () => {
  return (
    <div className={`${styles.center} full-width full-height flex-col flex-jst-start flex-ali-center`}>
      <div className={`${styles.percent} flex-row flex-jst-center flex-ali-center`}>
        <CountTo
          start={centerData.percent.start}
          add={centerData.percent.per_add}
          interval={5000 + Math.floor(Math.random() * 3000)}
          decimals={2}
        ></CountTo>%
      </div>
      <div className="flex-1 full-width">
        <Line></Line>
      </div>
      <div className={`${styles.chipShow} full-width flex-row flex-jst-center flex-ali-center`}>
        <div className={`${styles.item} flex-row flex-jst-start flex-ali-center`}>
          <div className={`${styles.circle}`}></div>
          <div className={`${styles.name}`}>Blue Chip</div>
          <div className={`${styles.count} flex-row flex-jst-start flex-ali-center`}>
            <CountUp
              start={0}
              end={centerData.chip}
            ></CountUp>%
          </div>
        </div>
        <div className={`${styles.item} flex-row flex-jst-start flex-ali-center`}>
          <div className={`${styles.circle}`}></div>
          <div className={`${styles.name}`}>Other</div>
          <div className={`${styles.count} flex-row flex-jst-start flex-ali-center`}>
            <CountUp
              start={0}
              end={centerData.other}
            ></CountUp>%
          </div>
        </div>
      </div>
      <div className={`${styles.logo} full-width flex-row flex-jst-center flex-ali-center`}>
        <img src={LogoImg} alt="" />
      </div>
    </div>
  )
}

export default Center
