#!/bin/bash

yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/proto/ src/proto/*.proto

rm -rf ./src/client/src/proto
mkdir -p ./src/client/src/proto
protoc -I=. ./src/proto/*.proto \
  --js_out=import_style=commonjs:./src/client \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/client