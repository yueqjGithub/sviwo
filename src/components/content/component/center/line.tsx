import { FC, useEffect, useRef, useState } from "react";
import styles from './index.module.scss'

const Line: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [w, setW] = useState(0)
  const [h, setH] = useState(0)
  const [len, setLen] = useState(0)
  const [aniStep, setAniStep] = useState(0)
  const setUnit = () => {
    const _w = ref.current!.clientWidth
    const _h = Math.floor(_w / 2.36)
    setW(_w)
    setH(_h)
  }
  
  useEffect(() => {
    setUnit()
    window.addEventListener('resize', () => setUnit())
    return () => {
      window.removeEventListener('resize', () => setUnit())
    }
  }, [])
  useEffect(() => {
    if (pathRef.current && h !== 0) {
      setLen(pathRef.current.getTotalLength())
      let _step = 0
      setInterval(() => {
        if (_step === 2) {
          _step = 0
        } else {
          _step++
        }
        setAniStep(_step)
      }, 2500)
    }
  }, [pathRef, h])
  return (
    <div className={`${styles.line} full-width full-height`} ref={ref}>
      {/* 心电图 */}
      {
        h > 0 && (
          <svg width="100%" height="100%">
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FFFF" />
              <stop offset="30%" stopColor="#00FFFF" />
              <stop offset="50%" stopColor="#A964FF" />
              <stop offset="80%" stopColor="#00FFFF" />
              <stop offset="100%" stopColor="#00FFFF" />
            </linearGradient>
            <path
              ref={pathRef}
              className={`${styles.path} ${aniStep === 0 ? styles.start : ''} ${aniStep === 1 ? styles.mid : ''} ${aniStep === 2 ? styles.end : ''}`}
              stroke="url(#grad1)"
              strokeWidth={Math.floor(h / 50)}
              fill="none"
              strokeLinejoin="miter"
              strokeMiterlimit={10}
              style={{
                '--l': len
              } as any}
              d={`M 0 ${h / 2} L ${w / 4} ${h / 2} l ${w / 20} -${h / 8} l ${w / 20} ${Math.floor(h / 6) * 2}
        l ${w / 20} -${h * 0.65} l ${w / 20} ${h * 0.8} l ${w / 20} -${h / 4}
        l ${w / 18} 0 l ${w / 20} -${h / 6} l ${w / 24} ${h * 0.4} l ${w / 24} -${h * 0.7} L ${w * 0.72} ${h / 2} L ${w} ${h / 2}`}
            ></path>
          </svg>
        )
      }
    </div>
  )
}

export default Line
