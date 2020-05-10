// package: github.com.oojob.protobuf
// file: cursor.proto

import * as jspb from "google-protobuf";

export class Pagination extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getFirst(): number;
  setFirst(value: number): void;

  getAfter(): string;
  setAfter(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getSort(): Pagination.SortMap[keyof Pagination.SortMap];
  setSort(value: Pagination.SortMap[keyof Pagination.SortMap]): void;

  getPrevious(): string;
  setPrevious(value: string): void;

  getNext(): string;
  setNext(value: string): void;

  getIdentifier(): string;
  setIdentifier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pagination;
  static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
  export type AsObject = {
    page: number,
    first: number,
    after: string,
    offset: number,
    limit: number,
    sort: Pagination.SortMap[keyof Pagination.SortMap],
    previous: string,
    next: string,
    identifier: string,
  }

  export interface SortMap {
    ASC: 0;
    DSC: 1;
  }

  export const Sort: SortMap;
}

