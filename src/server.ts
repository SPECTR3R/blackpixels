import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './proto/blackPixels'
import { PixelServiceHandlers } from './proto/blackPixelsPackage/PixelService'
import { createRandomMatrix, RemoveBlackPixels } from './logic'

const PORT = 8082
const PROTO_FILE = './proto/blackPixels.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const blackPixelsPackage = grpcObj.blackPixelsPackage

let removeBlackPixels: RemoveBlackPixels

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
      const { n, m } = call.request
      const matrix = createRandomMatrix(n, m)
      removeBlackPixels = new RemoveBlackPixels(matrix)
      matrix.forEach(list => {
        call.write({ list })
      })

      call.end()
    },
    getNewMatrixValues: call => {
      if (!removeBlackPixels) console.error('You must call getMatrix first'), call.end()

      const { regionsMatrix, regionsData } = removeBlackPixels.groupBlackPixels()

      for (const region in regionsData) {
        if (!regionsData[region]?.isConnectedToBorder) continue

        for (let row = 0; row < this.inputMatrix.length; row++) {
          for (let col = 0; col < this.inputMatrix[0].length; col++) {
            if (regionsMatrix[row][col] === parseInt(region)) {
              call.write({ row, col, val: 1 })
            }
          }
        }
      }

      call.end()
    }
  } as PixelServiceHandlers)
  return server
}

main()
