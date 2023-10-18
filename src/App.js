import "./styles.css";
import {useRef, useEffect} from 'react'
import Fluid from 'webgl-fluid'

export default function App() {
  const canvas = useRef(null)
  useEffect(function () {
    let c = canvas.current
    Fluid(c)
  }, [])
  return (
    <div className="App">
      <canvas ref={canvas} style={{width: '100%', height: '100%'}}></canvas>
    </div>
  );
}
