import { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { MatrixSize } from './proto/blackPixels_pb'
import { PixelServiceClient } from './proto/BlackPixelsServiceClientPb'

function App() {
  useEffect(() => {
    const client = new PixelServiceClient('http://localhost:8082')
    const matrixSize = new MatrixSize()
    matrixSize.setN(5)
    matrixSize.setN(5)
    const stream1 = client.getMatrix(matrixSize)
    stream1.on('data', chunk => {
      console.log(chunk)
    })
    stream1.on('end', () => {
      console.log('aweso')
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
