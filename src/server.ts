import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './proto/blackPixels'
import { PixelServiceHandlers } from './proto/blackPixelsPackage/PixelService'

const PORT = 8082
const PROTO_FILE = './proto/blackPixels.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const blackPixelsPackage = grpcObj.blackPixelsPackage

function main(): void {
  const server = getServer()

  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error(err)
      return
    }
    server.start()
    console.log(`Your server as started on port ${port}`)
  })
}
function getServer(): grpc.Server {
  const server = new grpc.Server()
  server.addService(blackPixelsPackage.PixelService.service, {
    getMatrix: call => {
      call.request
      call.write({ row: 0, col: 0, val: 1 })
      call.end()
    },
    getUpdtedMatrix: call => {
      call.request
      call.write({ row: 0, col: 0, val: 2 })
      call.end()
    }
  } as PixelServiceHandlers)
  return server
}

main()
