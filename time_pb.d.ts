// package: oojob.protobuf
// file: time.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Time extends jspb.Message {
  hasOpens(): boolean;
  clearOpens(): void;
  getOpens(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOpens(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCloses(): boolean;
  clearCloses(): void;
  getCloses(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCloses(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearDaysOfWeekList(): void;
  getDaysOfWeekList(): Array<DaysOfWeekMap[keyof DaysOfWeekMap]>;
  setDaysOfWeekList(value: Array<DaysOfWeekMap[keyof DaysOfWeekMap]>): void;
  addDaysOfWeek(value: DaysOfWeekMap[keyof DaysOfWeekMap], index?: number): DaysOfWeekMap[keyof DaysOfWeekMap];

  hasValidFrom(): boolean;
  clearValidFrom(): void;
  getValidFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setValidFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasValidThrough(): boolean;
  clearValidThrough(): void;
  getValidThrough(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setValidThrough(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Time.AsObject;
  static toObject(includeInstance: boolean, msg: Time): Time.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Time, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Time;
  static deserializeBinaryFromReader(message: Time, reader: jspb.BinaryReader): Time;
}

export namespace Time {
  export type AsObject = {
    opens?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closes?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    daysOfWeekList: Array<DaysOfWeekMap[keyof DaysOfWeekMap]>,
    validFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    validThrough?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface DaysOfWeekMap {
  MONDAY: 0;
  TUESDAY: 1;
  WEDNESDAY: 2;
  THRUSDAY: 3;
  FRIDAY: 4;
  STAURDAY: 5;
  SUNDAY: 6;
}

export const DaysOfWeek: DaysOfWeekMap;

