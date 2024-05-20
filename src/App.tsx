
import { useEffect } from 'react'
import './app.scss'
import BackGround from './components/background'
import SkyBg from './components/sky'
import Content from './components/content'
function App() {
  const setHtmlFontSize = (designWidth: number) => {
    const html = document.getElementsByTagName('html')[0]
    html.style.fontSize = `${(document.body.clientWidth / designWidth) * 625}%`
  }
  useEffect(() => {
    setHtmlFontSize(1920)
    window.addEventListener('resize', () => setHtmlFontSize(1920))
    return () => {
      window.removeEventListener('resize', () => setHtmlFontSize(1920))
    }
  }, [])
  return (
    <div className={`app-container`}>
      <BackGround />
      <SkyBg></SkyBg>
      <Content></Content>
    </div>
  )
}

export default App
