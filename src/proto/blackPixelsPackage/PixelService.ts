// Original file: src/proto/blackPixels.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MatrixRequest as _blackPixelsPackage_MatrixRequest, MatrixRequest__Output as _blackPixelsPackage_MatrixRequest__Output } from '../blackPixelsPackage/MatrixRequest';
import type { MatrixResponse as _blackPixelsPackage_MatrixResponse, MatrixResponse__Output as _blackPixelsPackage_MatrixResponse__Output } from '../blackPixelsPackage/MatrixResponse';
import type { NoParam as _blackPixelsPackage_NoParam, NoParam__Output as _blackPixelsPackage_NoParam__Output } from '../blackPixelsPackage/NoParam';

export interface PixelServiceClient extends grpc.Client {
  getMatrix(argument: _blackPixelsPackage_MatrixRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixResponse__Output>;
  getMatrix(argument: _blackPixelsPackage_MatrixRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixResponse__Output>;
  getMatrix(argument: _blackPixelsPackage_MatrixRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixResponse__Output>;
  getMatrix(argument: _blackPixelsPackage_MatrixRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixResponse__Output>;
  
  getUpdtedMatrix(argument: _blackPixelsPackage_NoParam, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixResponse__Output>;
  getUpdtedMatrix(argument: _blackPixelsPackage_NoParam, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixResponse__Output>;
  getUpdtedMatrix(argument: _blackPixelsPackage_NoParam, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixResponse__Output>;
  getUpdtedMatrix(argument: _blackPixelsPackage_NoParam, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixResponse__Output>;
  
}

export interface PixelServiceHandlers extends grpc.UntypedServiceImplementation {
  getMatrix: grpc.handleServerStreamingCall<_blackPixelsPackage_MatrixRequest__Output, _blackPixelsPackage_MatrixResponse>;
  
  getUpdtedMatrix: grpc.handleServerStreamingCall<_blackPixelsPackage_NoParam__Output, _blackPixelsPackage_MatrixResponse>;
  
}

export interface PixelServiceDefinition extends grpc.ServiceDefinition {
  getMatrix: MethodDefinition<_blackPixelsPackage_MatrixRequest, _blackPixelsPackage_MatrixResponse, _blackPixelsPackage_MatrixRequest__Output, _blackPixelsPackage_MatrixResponse__Output>
  getUpdtedMatrix: MethodDefinition<_blackPixelsPackage_NoParam, _blackPixelsPackage_MatrixResponse, _blackPixelsPackage_NoParam__Output, _blackPixelsPackage_MatrixResponse__Output>
}
