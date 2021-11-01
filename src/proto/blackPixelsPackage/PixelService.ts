// Original file: src/proto/blackPixels.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MatrixSize as _blackPixelsPackage_MatrixSize, MatrixSize__Output as _blackPixelsPackage_MatrixSize__Output } from '../blackPixelsPackage/MatrixSize';
import type { MatrixValue as _blackPixelsPackage_MatrixValue, MatrixValue__Output as _blackPixelsPackage_MatrixValue__Output } from '../blackPixelsPackage/MatrixValue';
import type { MatrixValues as _blackPixelsPackage_MatrixValues, MatrixValues__Output as _blackPixelsPackage_MatrixValues__Output } from '../blackPixelsPackage/MatrixValues';
import type { NoParam as _blackPixelsPackage_NoParam, NoParam__Output as _blackPixelsPackage_NoParam__Output } from '../blackPixelsPackage/NoParam';

export interface PixelServiceClient extends grpc.Client {
  getMatrix(argument: _blackPixelsPackage_MatrixSize, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixValues__Output>;
  getMatrix(argument: _blackPixelsPackage_MatrixSize, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixValues__Output>;
  getMatrix(argument: _blackPixelsPackage_MatrixSize, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixValues__Output>;
  getMatrix(argument: _blackPixelsPackage_MatrixSize, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixValues__Output>;
  
  getNewMatrixValues(argument: _blackPixelsPackage_NoParam, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixValue__Output>;
  getNewMatrixValues(argument: _blackPixelsPackage_NoParam, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixValue__Output>;
  getNewMatrixValues(argument: _blackPixelsPackage_NoParam, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixValue__Output>;
  getNewMatrixValues(argument: _blackPixelsPackage_NoParam, options?: grpc.CallOptions): grpc.ClientReadableStream<_blackPixelsPackage_MatrixValue__Output>;
  
}

export interface PixelServiceHandlers extends grpc.UntypedServiceImplementation {
  getMatrix: grpc.handleServerStreamingCall<_blackPixelsPackage_MatrixSize__Output, _blackPixelsPackage_MatrixValues>;
  
  getNewMatrixValues: grpc.handleServerStreamingCall<_blackPixelsPackage_NoParam__Output, _blackPixelsPackage_MatrixValue>;
  
}

export interface PixelServiceDefinition extends grpc.ServiceDefinition {
  getMatrix: MethodDefinition<_blackPixelsPackage_MatrixSize, _blackPixelsPackage_MatrixValues, _blackPixelsPackage_MatrixSize__Output, _blackPixelsPackage_MatrixValues__Output>
  getNewMatrixValues: MethodDefinition<_blackPixelsPackage_NoParam, _blackPixelsPackage_MatrixValue, _blackPixelsPackage_NoParam__Output, _blackPixelsPackage_MatrixValue__Output>
}
