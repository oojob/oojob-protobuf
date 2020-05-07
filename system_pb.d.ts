// package: oojob.protobuf
// file: system.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Range extends jspb.Message {
  getMin(): number;
  setMin(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Range.AsObject;
  static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Range;
  static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
}

export namespace Range {
  export type AsObject = {
    min: number,
    max: number,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class DefaultResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getError(): string;
  setError(value: string): void;

  getCode(): number;
  setCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DefaultResponse): DefaultResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefaultResponse;
  static deserializeBinaryFromReader(message: DefaultResponse, reader: jspb.BinaryReader): DefaultResponse;
}

export namespace DefaultResponse {
  export type AsObject = {
    status: boolean,
    error: string,
    code: number,
  }
}

export class Id extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Id.AsObject;
  static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Id;
  static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
}

export namespace Id {
  export type AsObject = {
    id: string,
  }
}

export class Email extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getStatus(): Email.EmailStatusMap[keyof Email.EmailStatusMap];
  setStatus(value: Email.EmailStatusMap[keyof Email.EmailStatusMap]): void;

  getShow(): boolean;
  setShow(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Email.AsObject;
  static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Email;
  static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
}

export namespace Email {
  export type AsObject = {
    email: string,
    status: Email.EmailStatusMap[keyof Email.EmailStatusMap],
    show: boolean,
  }

  export interface EmailStatusMap {
    WAITING: 0;
    CONFIRMED: 1;
    BLOCKED: 2;
    EXPIRED: 3;
  }

  export const EmailStatus: EmailStatusMap;
}

export class Attachment extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getFile(): string;
  setFile(value: string): void;

  hasUploadDate(): boolean;
  clearUploadDate(): void;
  getUploadDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUploadDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUrl(): string;
  setUrl(value: string): void;

  getUser(): string;
  setUser(value: string): void;

  getFolder(): string;
  setFolder(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attachment.AsObject;
  static toObject(includeInstance: boolean, msg: Attachment): Attachment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Attachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attachment;
  static deserializeBinaryFromReader(message: Attachment, reader: jspb.BinaryReader): Attachment;
}

export namespace Attachment {
  export type AsObject = {
    type: string,
    file: string,
    uploadDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    url: string,
    user: string,
    folder: string,
  }
}

export class Identifier extends jspb.Message {
  getIdentifier(): string;
  setIdentifier(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAlternateName(): string;
  setAlternateName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getAdditionalType(): string;
  setAdditionalType(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDisambiguatingDescription(): string;
  setDisambiguatingDescription(value: string): void;

  getHeadline(): string;
  setHeadline(value: string): void;

  getSlogan(): string;
  setSlogan(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identifier.AsObject;
  static toObject(includeInstance: boolean, msg: Identifier): Identifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Identifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identifier;
  static deserializeBinaryFromReader(message: Identifier, reader: jspb.BinaryReader): Identifier;
}

export namespace Identifier {
  export type AsObject = {
    identifier: string,
    name: string,
    alternateName: string,
    type: string,
    additionalType: string,
    description: string,
    disambiguatingDescription: string,
    headline: string,
    slogan: string,
  }
}

