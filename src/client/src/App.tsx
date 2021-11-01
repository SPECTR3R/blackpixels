import logo from './logo.svg'
import { useState } from 'react'
import './App.css'
import { MatrixSize } from './proto/blackPixels_pb'
import { PixelServiceClient } from './proto/BlackPixelsServiceClientPb'
import Canvas from './components/Canvas'

function App() {
  const [matrix, setMatrix] = useState([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ])
  // useEffect(() => {
  //   const client = new PixelServiceClient('http://localhost:8080')
  //   const matrixSize = new MatrixSize()
  //   matrixSize.setN(5)
  //   matrixSize.setN(5)
  //   const stream1 = client.getMatrix(matrixSize)
  //   stream1.on('data', chunk => {
  //     console.log(chunk)
  //   })
  //   stream1.on('end', () => {
  //     console.log('aweso')
  //   })
  // }, [])

  const draw = (ctx: any, frameCount: number): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const cellWidth = ctx.canvas.width / matrix.length
    const cellHeight = ctx.canvas.height / matrix.length
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        ctx.fillStyle = value ? '#000' : '#fff'
        ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight)
      })
    })

    ctx.fill()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Remove Black <br /> pixels!
        </h1>

        <div>
          Select matrix size: <input className="App-input" type="number" min="3" placeholder="3" />
        </div>
        <div>
          <button className="App-button">Plot matrix</button>
          <button className="App-button">process matrix</button>
        </div>

        <Canvas draw={draw} width="300px" height="300px" />
      </header>
    </div>
  )
}

export default App
