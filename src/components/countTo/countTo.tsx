import { FC, useState } from "react";
import styles from './index.module.scss'
import CountUp from "react-countup";

type Props = {
  start: number
  add: number
  interval: number
  duration?: number
  className?: string
  style?: React.CSSProperties
}

const CountTo: FC<Props> = ({
  start,
  add,
  interval,
  className,
  duration,
  style,
}) => {
  const [cur, setCur] = useState(start)
  const [end, setEnd] = useState(start + add)
  const addFun = () => {
    const _cur = end
    const _end = end + add
    setCur(_cur)
    setEnd(_end)
  }
  
  return (
    <div
      style={{
        ...style
      }}
      className={`${styles.container} ${className}`}
    >
      <CountUp
        start={cur}
        end={end}
        duration={duration}
        onEnd={() => {
          console.log('end')
          setTimeout(() => {
            addFun()
          }, interval)
          // setCur(val => val + add)
          // setEnd(val => val + add)
        }}
      ></CountUp>
    </div>
  )
}

export default CountTo
