import { FC } from "react";
import styles from './index.module.scss'
import Guage from "../guage";
const ContentPanel:FC = () => {
  return (
    <div className={`${styles.container}`}>
      <Guage></Guage>
    </div>
  )
}

export default ContentPanel
