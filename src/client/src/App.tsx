import logo from './logo.svg'
import { useState, useEffect } from 'react'
import './App.css'
import { MatrixSize, MatrixValues, MatrixValue, NoParam } from './proto/blackPixels_pb'
import { PixelServiceClient } from './proto/BlackPixelsServiceClientPb'
import Canvas from './components/Canvas'

function App() {
  const client = new PixelServiceClient('http://localhost:8080')

  const [size, setSize] = useState<number>(0)
  const [processGuard, seprocessGuard] = useState<boolean>(true)

  const [killValue, setKillValue] = useState<{ row: number; col: number; val: number }>()

  const handleInputChange = (event: any) => {
    setSize(event.target.value)
  }

  const [matrix, setMatrix] = useState([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ])

  useEffect(() => {
    const newMatrix = JSON.parse(JSON.stringify(matrix))
    const row = killValue?.row
    const col = killValue?.col
    if (row && col) {
      console.log('entra', row, col)
      console.log(newMatrix[row][col])
      newMatrix[row][col] = 0
      setMatrix(newMatrix)
    }
  }, [killValue])

  const getMatrix = async () => {
    seprocessGuard(false)
    const theMatrix: any = []
    const matrixSize = new MatrixSize()
    matrixSize.setN(size)
    matrixSize.setM(size)
    const stream1 = client.getMatrix(matrixSize)
    stream1.on('data', chunk => {
      const msg = (chunk as MatrixValues).toObject()
      theMatrix.push(msg.listList)
    })
    stream1.on('end', () => {
      setMatrix(() => theMatrix)
    })
  }
  const updateMatrix = async () => {
    const stream2 = client.getNewMatrixValues(new NoParam())
    seprocessGuard(true)
    stream2.on('data', chunk => {
      const { row, col, val } = (chunk as MatrixValue).toObject()
      setKillValue({ row, col, val })
    })

    stream2.on('end', () => {})
  }

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
          Select matrix size: <input className="App-input" type="number" min="3" onChange={handleInputChange} placeholder="3" />
        </div>
        <div>
          <button className="App-button" disabled={size < 3} onClick={getMatrix}>
            Plot matrix
          </button>
          <button className="App-button" disabled={processGuard} onClick={updateMatrix}>
            process matrix
          </button>
        </div>

        <Canvas draw={draw} width="300px" height="300px" />
      </header>
    </div>
  )
}

export default App
