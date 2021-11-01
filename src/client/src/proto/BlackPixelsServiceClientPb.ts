/**
 * @fileoverview gRPC-Web generated client stub for blackPixelsPackage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as src_proto_blackPixels_pb from '../../src/proto/blackPixels_pb';


export class PixelServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfogetMatrix = new grpcWeb.MethodDescriptor(
    '/blackPixelsPackage.PixelService/getMatrix',
    grpcWeb.MethodType.SERVER_STREAMING,
    src_proto_blackPixels_pb.MatrixSize,
    src_proto_blackPixels_pb.MatrixValues,
    (request: src_proto_blackPixels_pb.MatrixSize) => {
      return request.serializeBinary();
    },
    src_proto_blackPixels_pb.MatrixValues.deserializeBinary
  );

  getMatrix(
    request: src_proto_blackPixels_pb.MatrixSize,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/blackPixelsPackage.PixelService/getMatrix',
      request,
      metadata || {},
      this.methodInfogetMatrix);
  }

  methodInfogetNewMatrixValues = new grpcWeb.MethodDescriptor(
    '/blackPixelsPackage.PixelService/getNewMatrixValues',
    grpcWeb.MethodType.SERVER_STREAMING,
    src_proto_blackPixels_pb.NoParam,
    src_proto_blackPixels_pb.MatrixValue,
    (request: src_proto_blackPixels_pb.NoParam) => {
      return request.serializeBinary();
    },
    src_proto_blackPixels_pb.MatrixValue.deserializeBinary
  );

  getNewMatrixValues(
    request: src_proto_blackPixels_pb.NoParam,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/blackPixelsPackage.PixelService/getNewMatrixValues',
      request,
      metadata || {},
      this.methodInfogetNewMatrixValues);
  }

}

