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
import * as Mappers from "../models/policyDescriptionMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a PolicyDescription. */
export class PolicyDescription {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a PolicyDescription.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all policy descriptions.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyDescriptionListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, options?: Models.PolicyDescriptionListByServiceOptionalParams): Promise<Models.PolicyDescriptionListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.PolicyDescriptionCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, options: Models.PolicyDescriptionListByServiceOptionalParams, callback: msRest.ServiceCallback<Models.PolicyDescriptionCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, options?: Models.PolicyDescriptionListByServiceOptionalParams | msRest.ServiceCallback<Models.PolicyDescriptionCollection>, callback?: msRest.ServiceCallback<Models.PolicyDescriptionCollection>): Promise<Models.PolicyDescriptionListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.PolicyDescriptionListByServiceResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyDescriptions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.scope1,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDescriptionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
