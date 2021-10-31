// Original file: proto/blackPixels.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PingRequest as _blackPixelsPackage_PingRequest, PingRequest__Output as _blackPixelsPackage_PingRequest__Output } from './PingRequest';
import type { PongResponse as _blackPixelsPackage_PongResponse, PongResponse__Output as _blackPixelsPackage_PongResponse__Output } from './PongResponse';

export interface PixelServiceClient extends grpc.Client {
  PingPong(argument: _blackPixelsPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _blackPixelsPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  PingPong(argument: _blackPixelsPackage_PingRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _blackPixelsPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  PingPong(argument: _blackPixelsPackage_PingRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _blackPixelsPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  PingPong(argument: _blackPixelsPackage_PingRequest, callback: (error?: grpc.ServiceError, result?: _blackPixelsPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  pingPong(argument: _blackPixelsPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _blackPixelsPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  pingPong(argument: _blackPixelsPackage_PingRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _blackPixelsPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  pingPong(argument: _blackPixelsPackage_PingRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _blackPixelsPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  pingPong(argument: _blackPixelsPackage_PingRequest, callback: (error?: grpc.ServiceError, result?: _blackPixelsPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;

}

export interface PixelServiceHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_blackPixelsPackage_PingRequest__Output, _blackPixelsPackage_PongResponse>;

}

export interface PixelServiceDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_blackPixelsPackage_PingRequest, _blackPixelsPackage_PongResponse, _blackPixelsPackage_PingRequest__Output, _blackPixelsPackage_PongResponse__Output>
}
