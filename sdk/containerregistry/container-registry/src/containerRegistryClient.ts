// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PipelineOptions,
  TokenCredential,
  OperationOptions,
  bearerTokenAuthenticationPolicy,
  createPipelineFromOptions,
  InternalPipelineOptions
} from "@azure/core-http";
import { CanonicalCode } from "@opentelemetry/api";

import { SDK_VERSION } from "./constants";
import { logger } from "./logger";
import { GeneratedClient, RepositoryAttributes, ChangeableAttributes } from "./generated";
import { createSpan } from "./tracing";

/**
 * Re-export generated types that are used as public interfaces.
 */
export { RepositoryAttributes, ChangeableAttributes };

/**
 * Options for the `GetAttributesOptions` method of `ContainerRegistryClient`.
 */
export interface GetAttributesOptions extends OperationOptions {}

/**
 * Client options used to configure Container Registry Repository API requests.
 */
export interface ContainerRegistryClientOptions extends PipelineOptions {
  // Any custom options configured at the client level go here.
}

/**
 * The client class used to interact with the Container Registry service.
 */
export class ContainerRegistryClient {
  private client: GeneratedClient;

  /**
   * Creates an instance of a ContainerRegistryClient.
   *
   * Example usage:
   * ```ts
   * import { ContainerRegistryClient } from "@azure/container-registry";
   * import { DefaultAzureCredential} from "@azure/identity";
   *
   * const client = new ContainerRegistryClient(
   *    "<container registry API endpoint>",
   *    new DefaultAzureCredential()
   * );
   * ```
   * @param endpointUrl - the URL to the Container Registry endpoint
   * @param credential - used to authenticate requests to the service
   * @param options - optional configuration used to send requests to the service
   */
  constructor(
    endpointUrl: string,
    credential: TokenCredential,
    options: ContainerRegistryClientOptions = {}
  ) {
    // The below code helps us set a proper User-Agent header on all requests
    const libInfo = `azsdk-js-container-registry/${SDK_VERSION}`;
    if (!options.userAgentOptions) {
      options.userAgentOptions = {};
    }
    if (options.userAgentOptions.userAgentPrefix) {
      options.userAgentOptions.userAgentPrefix = `${options.userAgentOptions.userAgentPrefix} ${libInfo}`;
    } else {
      options.userAgentOptions.userAgentPrefix = libInfo;
    }

    // The AAD scope for an API is usually the baseUri + "/.default", but it
    // may be different for your service.
    const authPolicy = bearerTokenAuthenticationPolicy(credential, `${endpointUrl}/.default`);

    const internalPipelineOptions: InternalPipelineOptions = {
      ...options,
      loggingOptions: {
        logger: logger.info,
        // This array contains header names we want to log that are not already
        // included as safe. Unknown/unsafe headers are logged as "<REDACTED>".
        allowedHeaderNames: ["x-ms-correlation-request-id"]
      }
    };
    const pipeline = createPipelineFromOptions(internalPipelineOptions, authPolicy);

    this.client = new GeneratedClient(endpointUrl, pipeline);
  }

  /**
   * Retrieve attributes of the repository identified by the given name.
   *
   * @param name - the name of repository to delete
   * @param options - optional configuration for the operation
   */
  public async getAttributes(
    name: string,
    options: GetAttributesOptions = {}
  ): Promise<RepositoryAttributes> {
    const { span, updatedOptions } = createSpan(
      // Here you set the name of the span, usually clientName-operationName
      "ContainerRegistryClient-getAttributes",
      options
    );

    try {
      const result = await this.client.repository.getAttributes(name, updatedOptions);
      return result;
    } catch (e) {
      // There are different standard codes available for different errors:
      // https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/api.md#status
      span.setStatus({ code: CanonicalCode.UNKNOWN, message: e.message });

      throw e;
    } finally {
      span.end();
    }
  }
}
