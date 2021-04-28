/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/privateEndPointConnectionsMappers";
import * as Parameters from "../models/parameters";
import { DataFactoryManagementClientContext } from "../dataFactoryManagementClientContext";

/** Class representing a PrivateEndPointConnections. */
export class PrivateEndPointConnections {
  private readonly client: DataFactoryManagementClientContext;

  /**
   * Create a PrivateEndPointConnections.
   * @param {DataFactoryManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataFactoryManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists Private endpoint connections
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndPointConnectionsListByFactoryResponse>
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.PrivateEndPointConnectionsListByFactoryResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param callback The callback
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResponse>
  ): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResponse>
  ): void;
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?:
      | msRest.RequestOptionsBase
      | msRest.ServiceCallback<Models.PrivateEndpointConnectionListResponse>,
    callback?: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResponse>
  ): Promise<Models.PrivateEndPointConnectionsListByFactoryResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        options
      },
      listByFactoryOperationSpec,
      callback
    ) as Promise<Models.PrivateEndPointConnectionsListByFactoryResponse>;
  }

  /**
   * Lists Private endpoint connections
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndPointConnectionsListByFactoryNextResponse>
   */
  listByFactoryNext(
    nextPageLink: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.PrivateEndPointConnectionsListByFactoryNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByFactoryNext(
    nextPageLink: string,
    callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResponse>
  ): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFactoryNext(
    nextPageLink: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResponse>
  ): void;
  listByFactoryNext(
    nextPageLink: string,
    options?:
      | msRest.RequestOptionsBase
      | msRest.ServiceCallback<Models.PrivateEndpointConnectionListResponse>,
    callback?: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResponse>
  ): Promise<Models.PrivateEndPointConnectionsListByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByFactoryNextOperationSpec,
      callback
    ) as Promise<Models.PrivateEndPointConnectionsListByFactoryNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByFactoryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/privateEndPointConnections",
  urlParameters: [Parameters.subscriptionId, Parameters.resourceGroupName, Parameters.factoryName],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByFactoryNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [Parameters.nextPageLink],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
