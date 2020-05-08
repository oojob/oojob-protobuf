// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Created on Sun Apr 27 2020
//
// Company entity related messages.
// This file is resposible for all operation related to company entity.
//
// @authors nirajgeorgian@oojob.io (Niraj Kishore)
//
// Copyright (c) 2020 - oojob
'use strict';
var grpc = require('grpc');
var services_company_service_pb = require('./service_pb.js');
var github_com_oojob_protobuf_system_pb = require('../../github.com/oojob/protobuf/system_pb.js');
var github_com_oojob_protobuf_place_pb = require('../../github.com/oojob/protobuf/place_pb.js');
var github_com_oojob_protobuf_metadata_pb = require('../../github.com/oojob/protobuf/metadata_pb.js');
var github_com_oojob_protobuf_cursor_pb = require('../../github.com/oojob/protobuf/cursor_pb.js');
var github_com_oojob_protobuf_health_pb = require('../../github.com/oojob/protobuf/health_pb.js');

function serialize_company_Company(arg) {
  if (!(arg instanceof services_company_service_pb.Company)) {
    throw new Error('Expected argument of type company.Company');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_company_Company(buffer_arg) {
  return services_company_service_pb.Company.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_CompanyAllResponse(arg) {
  if (!(arg instanceof services_company_service_pb.CompanyAllResponse)) {
    throw new Error('Expected argument of type company.CompanyAllResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_company_CompanyAllResponse(buffer_arg) {
  return services_company_service_pb.CompanyAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_Empty(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_system_pb.Empty)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_Empty(buffer_arg) {
  return github_com_oojob_protobuf_system_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_HealthCheckRequest(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.HealthCheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_HealthCheckRequest(buffer_arg) {
  return github_com_oojob_protobuf_health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_HealthCheckResponse(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.HealthCheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_HealthCheckResponse(buffer_arg) {
  return github_com_oojob_protobuf_health_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_Id(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_system_pb.Id)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.Id');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_Id(buffer_arg) {
  return github_com_oojob_protobuf_system_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_Pagination(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_cursor_pb.Pagination)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.Pagination');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_Pagination(buffer_arg) {
  return github_com_oojob_protobuf_cursor_pb.Pagination.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// CompanyService service file for company entity
var CompanyServiceService = exports.CompanyServiceService = {
  createCompany: {
    path: '/company.CompanyService/CreateCompany',
    requestStream: false,
    responseStream: false,
    requestType: services_company_service_pb.Company,
    responseType: github_com_oojob_protobuf_system_pb.Id,
    requestSerialize: serialize_company_Company,
    requestDeserialize: deserialize_company_Company,
    responseSerialize: serialize_github_com_oojob_protobuf_Id,
    responseDeserialize: deserialize_github_com_oojob_protobuf_Id,
  },
  readCompany: {
    path: '/company.CompanyService/ReadCompany',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_system_pb.Id,
    responseType: services_company_service_pb.Company,
    requestSerialize: serialize_github_com_oojob_protobuf_Id,
    requestDeserialize: deserialize_github_com_oojob_protobuf_Id,
    responseSerialize: serialize_company_Company,
    responseDeserialize: deserialize_company_Company,
  },
  readCompanies: {
    path: '/company.CompanyService/ReadCompanies',
    requestStream: false,
    responseStream: true,
    requestType: github_com_oojob_protobuf_system_pb.Empty,
    responseType: services_company_service_pb.Company,
    requestSerialize: serialize_github_com_oojob_protobuf_Empty,
    requestDeserialize: deserialize_github_com_oojob_protobuf_Empty,
    responseSerialize: serialize_company_Company,
    responseDeserialize: deserialize_company_Company,
  },
  readAllCompanies: {
    path: '/company.CompanyService/ReadAllCompanies',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_cursor_pb.Pagination,
    responseType: services_company_service_pb.CompanyAllResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_Pagination,
    requestDeserialize: deserialize_github_com_oojob_protobuf_Pagination,
    responseSerialize: serialize_company_CompanyAllResponse,
    responseDeserialize: deserialize_company_CompanyAllResponse,
  },
  updateCompany: {
    path: '/company.CompanyService/UpdateCompany',
    requestStream: false,
    responseStream: false,
    requestType: services_company_service_pb.Company,
    responseType: github_com_oojob_protobuf_system_pb.Id,
    requestSerialize: serialize_company_Company,
    requestDeserialize: deserialize_company_Company,
    responseSerialize: serialize_github_com_oojob_protobuf_Id,
    responseDeserialize: deserialize_github_com_oojob_protobuf_Id,
  },
  deleteCompany: {
    path: '/company.CompanyService/DeleteCompany',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_system_pb.Id,
    responseType: github_com_oojob_protobuf_system_pb.Id,
    requestSerialize: serialize_github_com_oojob_protobuf_Id,
    requestDeserialize: deserialize_github_com_oojob_protobuf_Id,
    responseSerialize: serialize_github_com_oojob_protobuf_Id,
    responseDeserialize: deserialize_github_com_oojob_protobuf_Id,
  },
  check: {
    path: '/company.CompanyService/Check',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: github_com_oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckResponse,
  },
  watch: {
    path: '/company.CompanyService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: github_com_oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: github_com_oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckResponse,
  },
};

exports.CompanyServiceClient = grpc.makeGenericClientConstructor(CompanyServiceService);
