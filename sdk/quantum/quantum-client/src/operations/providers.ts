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
import { QuantumClient } from "../quantumClient";
import {
  ProvidersGetStatusResponse,
  ProvidersGetStatusNextResponse
} from "../models";

/**
 * Class representing a Providers.
 */
export class Providers {
  private readonly client: QuantumClient;

  /**
   * Initialize a new instance of the class Providers class.
   * @param client Reference to the service client
   */
  constructor(client: QuantumClient) {
    this.client = client;
  }

  /**
   * Get provider status.
   * @param options The options parameters.
   */
  getStatus(
    options?: coreHttp.OperationOptions
  ): Promise<ProvidersGetStatusResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getStatusOperationSpec
    ) as Promise<ProvidersGetStatusResponse>;
  }

  /**
   * GetStatusNext
   * @param nextLink The nextLink from the previous successful call to the GetStatus method.
   * @param options The options parameters.
   */
  getStatusNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ProvidersGetStatusNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getStatusNextOperationSpec
    ) as Promise<ProvidersGetStatusNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getStatusOperationSpec: coreHttp.OperationSpec = {
  path:
    "/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Quantum/workspaces/{workspaceName}/providerStatus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderStatusList
    },
    default: {
      bodyMapper: Mappers.RestError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getStatusNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderStatusList
    },
    default: {
      bodyMapper: Mappers.RestError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
