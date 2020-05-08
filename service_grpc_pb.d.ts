// GENERATED CODE -- DO NOT EDIT!

// package: company
// file: services/company/service.proto

import * as services_company_service_pb from "./service_pb";
import * as github_com_oojob_protobuf_system_pb from "../../github.com/oojob/protobuf/system_pb";
import * as github_com_oojob_protobuf_cursor_pb from "../../github.com/oojob/protobuf/cursor_pb";
import * as github_com_oojob_protobuf_health_pb from "../../github.com/oojob/protobuf/health_pb";
import * as grpc from "grpc";

interface ICompanyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createCompany: grpc.MethodDefinition<services_company_service_pb.Company, github_com_oojob_protobuf_system_pb.Id>;
  readCompany: grpc.MethodDefinition<github_com_oojob_protobuf_system_pb.Id, services_company_service_pb.Company>;
  readCompanies: grpc.MethodDefinition<github_com_oojob_protobuf_system_pb.Empty, services_company_service_pb.Company>;
  readAllCompanies: grpc.MethodDefinition<github_com_oojob_protobuf_cursor_pb.Pagination, services_company_service_pb.CompanyAllResponse>;
  updateCompany: grpc.MethodDefinition<services_company_service_pb.Company, github_com_oojob_protobuf_system_pb.Id>;
  deleteCompany: grpc.MethodDefinition<github_com_oojob_protobuf_system_pb.Id, github_com_oojob_protobuf_system_pb.Id>;
  check: grpc.MethodDefinition<github_com_oojob_protobuf_health_pb.HealthCheckRequest, github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
  watch: grpc.MethodDefinition<github_com_oojob_protobuf_health_pb.HealthCheckRequest, github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
}

export const CompanyServiceService: ICompanyServiceService;

export class CompanyServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createCompany(argument: services_company_service_pb.Company, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  createCompany(argument: services_company_service_pb.Company, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  createCompany(argument: services_company_service_pb.Company, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  readCompany(argument: github_com_oojob_protobuf_system_pb.Id, callback: grpc.requestCallback<services_company_service_pb.Company>): grpc.ClientUnaryCall;
  readCompany(argument: github_com_oojob_protobuf_system_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_company_service_pb.Company>): grpc.ClientUnaryCall;
  readCompany(argument: github_com_oojob_protobuf_system_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_company_service_pb.Company>): grpc.ClientUnaryCall;
  readCompanies(argument: github_com_oojob_protobuf_system_pb.Empty, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<services_company_service_pb.Company>;
  readCompanies(argument: github_com_oojob_protobuf_system_pb.Empty, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<services_company_service_pb.Company>;
  readAllCompanies(argument: github_com_oojob_protobuf_cursor_pb.Pagination, callback: grpc.requestCallback<services_company_service_pb.CompanyAllResponse>): grpc.ClientUnaryCall;
  readAllCompanies(argument: github_com_oojob_protobuf_cursor_pb.Pagination, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_company_service_pb.CompanyAllResponse>): grpc.ClientUnaryCall;
  readAllCompanies(argument: github_com_oojob_protobuf_cursor_pb.Pagination, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_company_service_pb.CompanyAllResponse>): grpc.ClientUnaryCall;
  updateCompany(argument: services_company_service_pb.Company, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  updateCompany(argument: services_company_service_pb.Company, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  updateCompany(argument: services_company_service_pb.Company, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  deleteCompany(argument: github_com_oojob_protobuf_system_pb.Id, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  deleteCompany(argument: github_com_oojob_protobuf_system_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  deleteCompany(argument: github_com_oojob_protobuf_system_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  watch(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
  watch(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
}
