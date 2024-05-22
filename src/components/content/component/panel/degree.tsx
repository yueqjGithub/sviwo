import { FC, useEffect, useState } from "react";
import { PANNEL_DATA } from "../../common";
import styles from './index.module.scss'

type Props = {
  item: PANNEL_DATA['degreeDatas'][number],
  interval: number
}

const Degree: FC<Props> = ({ item, interval }) => {
  const [cur, setCur] = useState<number>(item.degree)
  const _add = () => {
    setCur(val => val + item.perAdd)
  }
  useEffect(() => {
    const _interval = setInterval(_add, interval)
    return () => {
      clearInterval(_interval)
    }
  }, [])
  return (
    <div className={`${styles.degreeLine}`}
    style={{
      '--degree': `${cur}%`
    } as any}
    >
      <div className={`${styles.line}`}></div>
    </div>
  )
}

export default Degree