import { FC, useEffect, useTransition, useState } from "react";
import styles from './index.module.scss'

type Props = {
  start: number
  add: number
  interval: number
  className?: string
  style?: React.CSSProperties
}

const CountTo:FC<Props> = ({
  start,
  add,
  interval,
  className,
  style,
}) => {
  const [isPending, startTransition] = useTransition()
  const [cur, setCur] = useState(start)
  const [end, setEnd] = useState(start + add)
  console.log(isPending, cur, end)
  const addFun = () => {
    const _cur = end
    const _end = end + add
    startTransition(() => {
      setCur(_cur)
      setEnd(_end)
    })
  }
  useEffect(() => {
    const timer = setInterval(() => {
      addFun()
    }, interval)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div
    style={{
      ...style
    }}
    className={`${styles.container} ${className}`}
    ></div>
  )
}

export default CountTo
