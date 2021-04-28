/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";
import {
  FileSystemCreateOptionalParams,
  FileSystemCreateResponse,
  FileSystemSetPropertiesOptionalParams,
  FileSystemSetPropertiesResponse,
  FileSystemGetPropertiesOptionalParams,
  FileSystemGetPropertiesResponse,
  FileSystemDeleteOptionalParams,
  FileSystemDeleteResponse,
  FileSystemListPathsOptionalParams,
  FileSystemListPathsResponse
} from "../models";

/** Class representing a FileSystem. */
export class FileSystem {
  private readonly client: StorageClientContext;

  /**
   * Initialize a new instance of the class FileSystem class.
   * @param client Reference to the service client
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * Create a FileSystem rooted at the specified location. If the FileSystem already exists, the
   * operation fails.  This operation does not support conditional HTTP requests.
   * @param options The options parameters.
   */
  create(
    options?: FileSystemCreateOptionalParams
  ): Promise<FileSystemCreateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOperationSpec
    ) as Promise<FileSystemCreateResponse>;
  }

  /**
   * Set properties for the FileSystem.  This operation supports conditional HTTP requests.  For more
   * information, see [Specifying Conditional Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   * @param options The options parameters.
   */
  setProperties(
    options?: FileSystemSetPropertiesOptionalParams
  ): Promise<FileSystemSetPropertiesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setPropertiesOperationSpec
    ) as Promise<FileSystemSetPropertiesResponse>;
  }

  /**
   * All system and user-defined filesystem properties are specified in the response headers.
   * @param options The options parameters.
   */
  getProperties(
    options?: FileSystemGetPropertiesOptionalParams
  ): Promise<FileSystemGetPropertiesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getPropertiesOperationSpec
    ) as Promise<FileSystemGetPropertiesResponse>;
  }

  /**
   * Marks the FileSystem for deletion.  When a FileSystem is deleted, a FileSystem with the same
   * identifier cannot be created for at least 30 seconds. While the filesystem is being deleted,
   * attempts to create a filesystem with the same identifier will fail with status code 409 (Conflict),
   * with the service returning additional error information indicating that the filesystem is being
   * deleted. All other operations, including operations on any files or directories within the
   * filesystem, will fail with status code 404 (Not Found) while the filesystem is being deleted. This
   * operation supports conditional HTTP requests.  For more information, see [Specifying Conditional
   * Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   * @param options The options parameters.
   */
  delete(
    options?: FileSystemDeleteOptionalParams
  ): Promise<FileSystemDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<FileSystemDeleteResponse>;
  }

  /**
   * List FileSystem paths and their properties.
   * @param recursive Required
   * @param options The options parameters.
   */
  listPaths(
    recursive: boolean,
    options?: FileSystemListPathsOptionalParams
  ): Promise<FileSystemListPathsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      recursive,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listPathsOperationSpec
    ) as Promise<FileSystemListPathsResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.FileSystemCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileSystemCreateExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout, Parameters.resource1],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.properties
  ],
  serializer
};
const setPropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}",
  httpMethod: "PATCH",
  responses: {
    200: {
      headersMapper: Mappers.FileSystemSetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileSystemSetPropertiesExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout, Parameters.resource1],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.properties,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  serializer
};
const getPropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.FileSystemGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileSystemGetPropertiesExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout, Parameters.resource1],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version
  ],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}",
  httpMethod: "DELETE",
  responses: {
    202: {
      headersMapper: Mappers.FileSystemDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileSystemDeleteExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout, Parameters.resource1],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  serializer
};
const listPathsOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PathList,
      headersMapper: Mappers.FileSystemListPathsHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileSystemListPathsExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.continuation,
    Parameters.maxResults,
    Parameters.timeout,
    Parameters.resource1,
    Parameters.path,
    Parameters.recursive,
    Parameters.upn
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version
  ],
  serializer
};
