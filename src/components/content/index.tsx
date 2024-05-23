import { FC } from "react";
import styles from './index.module.scss'
import Guage from "./component/guage";
import Panel from "./component/panel";
import { panelDatasL, panelDatasR } from "./common";
import Center from "./component/center";
const ContentPanel:FC = () => {
  return (
    <div className={`${styles.container} flex-col flex-jst-start flex-ali-center`}>
      <Guage></Guage>
      <div className="full-width flex-row flex-jst-btw flex-ali-start flex-1">
        <Panel pannelData={panelDatasL}></Panel>
        <div className="flex-1 full-height">
          <Center></Center>
        </div>
        <Panel pannelData={panelDatasR}></Panel>
      </div>
    </div>
  )
}

export default ContentPanel
