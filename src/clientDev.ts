import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './proto/blackPixels'

const PORT = 8082
const PROTO_FILE = './proto/blackPixels.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const client = new grpcObj.blackPixelsPackage.PixelService(`0.0.0.0:${PORT}`, grpc.credentials.createInsecure())

const deadline = new Date()
deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, err => {
  if (err) {
    console.error(err)
    return
  }
  onClientReady()
})

function onClientReady(): void {
  const stream1 = client.getMatrix({ n: 6, m: 6 })
  let stream2

  const theMatrix: number[][] = []

  stream1.on('data', chunk => {
    theMatrix.push(chunk.list)
  })

  stream1.on('end', () => {
    console.log({ initalState: theMatrix })

    stream2 = client.getNewMatrixValues({})

    stream2.on('data', chunk => {
      const { col, row, val } = chunk
      theMatrix[row][col] = val
      console.log({ updating: theMatrix })
    })

    stream2.on('end', () => {
      console.log({ final: theMatrix })
    })
  })
}
