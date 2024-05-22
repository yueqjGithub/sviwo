
import { useEffect } from 'react'
import './app.scss'
import BackGround from './components/background'
import SkyBg from './components/sky'
import Content from './components/content'

const designWidth = 1920
const designHeight = 1080

function App() {
  const setHtmlFontSize = () => {
    // body
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const html = document.getElementsByTagName('html')[0]

    if (screenWidth / screenHeight > designWidth / designHeight) { // 更矮
      const _h = screenHeight
      const _w = Math.floor(screenHeight / designHeight * designWidth)

      document.body.style.width = `${_w}px`
      document.body.style.height = `${_h}px`

      html.style.fontSize = `${(_w / designWidth) * 625}%`
    } else {
      const _w = screenWidth
      const _h = Math.floor(screenWidth / designWidth * designHeight)

      document.body.style.width = `${_w}px`
      document.body.style.height = `${_h}px`

      html.style.fontSize = `${(_w / designWidth) * 625}%`
    }

  }
  useEffect(() => {
    setHtmlFontSize()
    window.addEventListener('resize', () => setHtmlFontSize())
    return () => {
      window.removeEventListener('resize', () => setHtmlFontSize())
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
