// package: github.com.oojob.protobuf
// file: applicants.proto

import * as jspb from "google-protobuf";

export class Applicant extends jspb.Message {
  clearApplicationsList(): void;
  getApplicationsList(): Array<string>;
  setApplicationsList(value: Array<string>): void;
  addApplications(value: string, index?: number): string;

  clearShortlistedList(): void;
  getShortlistedList(): Array<string>;
  setShortlistedList(value: Array<string>): void;
  addShortlisted(value: string, index?: number): string;

  clearOnholdList(): void;
  getOnholdList(): Array<string>;
  setOnholdList(value: Array<string>): void;
  addOnhold(value: string, index?: number): string;

  clearRejectedList(): void;
  getRejectedList(): Array<string>;
  setRejectedList(value: Array<string>): void;
  addRejected(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Applicant.AsObject;
  static toObject(includeInstance: boolean, msg: Applicant): Applicant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Applicant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Applicant;
  static deserializeBinaryFromReader(message: Applicant, reader: jspb.BinaryReader): Applicant;
}

export namespace Applicant {
  export type AsObject = {
    applicationsList: Array<string>,
    shortlistedList: Array<string>,
    onholdList: Array<string>,
    rejectedList: Array<string>,
  }
}

