import * as jspb from 'google-protobuf'



export class NoParam extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoParam.AsObject;
  static toObject(includeInstance: boolean, msg: NoParam): NoParam.AsObject;
  static serializeBinaryToWriter(message: NoParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoParam;
  static deserializeBinaryFromReader(message: NoParam, reader: jspb.BinaryReader): NoParam;
}

export namespace NoParam {
  export type AsObject = {
  }
}

export class MatrixSize extends jspb.Message {
  getN(): number;
  setN(value: number): MatrixSize;

  getM(): number;
  setM(value: number): MatrixSize;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatrixSize.AsObject;
  static toObject(includeInstance: boolean, msg: MatrixSize): MatrixSize.AsObject;
  static serializeBinaryToWriter(message: MatrixSize, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatrixSize;
  static deserializeBinaryFromReader(message: MatrixSize, reader: jspb.BinaryReader): MatrixSize;
}

export namespace MatrixSize {
  export type AsObject = {
    n: number,
    m: number,
  }
}

export class MatrixValue extends jspb.Message {
  getRow(): number;
  setRow(value: number): MatrixValue;

  getCol(): number;
  setCol(value: number): MatrixValue;

  getVal(): number;
  setVal(value: number): MatrixValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatrixValue.AsObject;
  static toObject(includeInstance: boolean, msg: MatrixValue): MatrixValue.AsObject;
  static serializeBinaryToWriter(message: MatrixValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatrixValue;
  static deserializeBinaryFromReader(message: MatrixValue, reader: jspb.BinaryReader): MatrixValue;
}

export namespace MatrixValue {
  export type AsObject = {
    row: number,
    col: number,
    val: number,
  }
}

export class MatrixValues extends jspb.Message {
  getListList(): Array<number>;
  setListList(value: Array<number>): MatrixValues;
  clearListList(): MatrixValues;
  addList(value: number, index?: number): MatrixValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatrixValues.AsObject;
  static toObject(includeInstance: boolean, msg: MatrixValues): MatrixValues.AsObject;
  static serializeBinaryToWriter(message: MatrixValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatrixValues;
  static deserializeBinaryFromReader(message: MatrixValues, reader: jspb.BinaryReader): MatrixValues;
}

export namespace MatrixValues {
  export type AsObject = {
    listList: Array<number>,
  }
}

