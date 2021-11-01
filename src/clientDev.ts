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
  const stream1 = client.getMatrix({ n: 5, m: 5 })
  stream1.on('data', chunk => {
    console.log(chunk)
  })
  stream1.on('end', () => {
    console.log('pos olle 1')
  })

  const stream2 = client.getNewMatrixValues({})
  stream2.on('data', chunk => {
    console.log(chunk)
  })
  stream2.on('end', () => {
    console.log('pos olle 2')
  })
}
