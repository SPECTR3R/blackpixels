import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PixelServiceClient as _blackPixelsPackage_PixelServiceClient, PixelServiceDefinition as _blackPixelsPackage_PixelServiceDefinition } from './blackPixelsPackage/PixelService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  blackPixelsPackage: {
    MatrixSize: MessageTypeDefinition
    MatrixValue: MessageTypeDefinition
    MatrixValues: MessageTypeDefinition
    NoParam: MessageTypeDefinition
    PixelService: SubtypeConstructor<typeof grpc.Client, _blackPixelsPackage_PixelServiceClient> & { service: _blackPixelsPackage_PixelServiceDefinition }
  }
}

