// package: github.com.oojob.protobuf
// file: permissions.proto

import * as jspb from "google-protobuf";

export class ProfileOperations extends jspb.Message {
  clearProfileOperationsList(): void;
  getProfileOperationsList(): Array<ProfileOperations.ProfileOperationOptionsMap[keyof ProfileOperations.ProfileOperationOptionsMap]>;
  setProfileOperationsList(value: Array<ProfileOperations.ProfileOperationOptionsMap[keyof ProfileOperations.ProfileOperationOptionsMap]>): void;
  addProfileOperations(value: ProfileOperations.ProfileOperationOptionsMap[keyof ProfileOperations.ProfileOperationOptionsMap], index?: number): ProfileOperations.ProfileOperationOptionsMap[keyof ProfileOperations.ProfileOperationOptionsMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileOperations.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileOperations): ProfileOperations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileOperations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileOperations;
  static deserializeBinaryFromReader(message: ProfileOperations, reader: jspb.BinaryReader): ProfileOperations;
}

export namespace ProfileOperations {
  export type AsObject = {
    profileOperationsList: Array<ProfileOperations.ProfileOperationOptionsMap[keyof ProfileOperations.ProfileOperationOptionsMap]>,
  }

  export interface ProfileOperationOptionsMap {
    CREATE: 0;
    READ: 1;
    UPDATE: 2;
    DELETE: 3;
    BULK_UPDATE: 4;
  }

  export const ProfileOperationOptions: ProfileOperationOptionsMap;
}

export class PermissionsBase extends jspb.Message {
  getPermissionsMap(): jspb.Map<string, ProfileOperations>;
  clearPermissionsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionsBase.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionsBase): PermissionsBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PermissionsBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionsBase;
  static deserializeBinaryFromReader(message: PermissionsBase, reader: jspb.BinaryReader): PermissionsBase;
}

export namespace PermissionsBase {
  export type AsObject = {
    permissionsMap: Array<[string, ProfileOperations.AsObject]>,
  }
}

