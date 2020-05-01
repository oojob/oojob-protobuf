// package: github.com.oojob.protobuf
// file: place.proto

import * as jspb from "google-protobuf";

export class Rating extends jspb.Message {
  getAuthor(): string;
  setAuthor(value: string): void;

  getBestRating(): number;
  setBestRating(value: number): void;

  getExplanation(): string;
  setExplanation(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getWorstRating(): number;
  setWorstRating(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rating.AsObject;
  static toObject(includeInstance: boolean, msg: Rating): Rating.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Rating, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rating;
  static deserializeBinaryFromReader(message: Rating, reader: jspb.BinaryReader): Rating;
}

export namespace Rating {
  export type AsObject = {
    author: string,
    bestRating: number,
    explanation: string,
    value: number,
    worstRating: number,
  }
}

export class AggregateRating extends jspb.Message {
  getItemReviewed(): string;
  setItemReviewed(value: string): void;

  getRatingCount(): number;
  setRatingCount(value: number): void;

  getReviewRount(): number;
  setReviewRount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregateRating.AsObject;
  static toObject(includeInstance: boolean, msg: AggregateRating): AggregateRating.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AggregateRating, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregateRating;
  static deserializeBinaryFromReader(message: AggregateRating, reader: jspb.BinaryReader): AggregateRating;
}

export namespace AggregateRating {
  export type AsObject = {
    itemReviewed: string,
    ratingCount: number,
    reviewRount: number,
  }
}

export class Review extends jspb.Message {
  getItemReviewed(): string;
  setItemReviewed(value: string): void;

  getAspect(): string;
  setAspect(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  hasRating(): boolean;
  clearRating(): void;
  getRating(): Rating | undefined;
  setRating(value?: Rating): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Review.AsObject;
  static toObject(includeInstance: boolean, msg: Review): Review.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Review, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Review;
  static deserializeBinaryFromReader(message: Review, reader: jspb.BinaryReader): Review;
}

export namespace Review {
  export type AsObject = {
    itemReviewed: string,
    aspect: string,
    body: string,
    rating?: Rating.AsObject,
  }
}

export class GeoLocation extends jspb.Message {
  getElevation(): number;
  setElevation(value: number): void;

  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  getPostalCode(): number;
  setPostalCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoLocation.AsObject;
  static toObject(includeInstance: boolean, msg: GeoLocation): GeoLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoLocation;
  static deserializeBinaryFromReader(message: GeoLocation, reader: jspb.BinaryReader): GeoLocation;
}

export namespace GeoLocation {
  export type AsObject = {
    elevation: number,
    latitude: number,
    longitude: number,
    postalCode: number,
  }
}

export class Address extends jspb.Message {
  getCountry(): string;
  setCountry(value: string): void;

  getLocality(): string;
  setLocality(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getPostalCode(): string;
  setPostalCode(value: string): void;

  getStreet(): string;
  setStreet(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    country: string,
    locality: string,
    region: string,
    postalCode: string,
    street: string,
  }
}

export class Place extends jspb.Message {
  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): Address | undefined;
  setAddress(value?: Address): void;

  hasReview(): boolean;
  clearReview(): void;
  getReview(): Review | undefined;
  setReview(value?: Review): void;

  hasAggregateRating(): boolean;
  clearAggregateRating(): void;
  getAggregateRating(): AggregateRating | undefined;
  setAggregateRating(value?: AggregateRating): void;

  getBranchCode(): string;
  setBranchCode(value: string): void;

  hasGeo(): boolean;
  clearGeo(): void;
  getGeo(): GeoLocation | undefined;
  setGeo(value?: GeoLocation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Place.AsObject;
  static toObject(includeInstance: boolean, msg: Place): Place.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Place, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Place;
  static deserializeBinaryFromReader(message: Place, reader: jspb.BinaryReader): Place;
}

export namespace Place {
  export type AsObject = {
    address?: Address.AsObject,
    review?: Review.AsObject,
    aggregateRating?: AggregateRating.AsObject,
    branchCode: string,
    geo?: GeoLocation.AsObject,
  }
}

