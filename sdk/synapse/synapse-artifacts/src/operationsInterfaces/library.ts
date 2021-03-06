/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { LROPoller } from "../lro";
import {
  LibraryResource,
  LibraryGetOperationResultResponse,
  LibraryGetResponse,
  LibraryAppendOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Library. */
export interface Library {
  /**
   * Lists Library.
   * @param options The options parameters.
   */
  list(options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<LibraryResource>;
  /**
   * Flush Library
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  flush(
    libraryName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>>;
  /**
   * Get Operation result for Library
   * @param operationId operation id for which status is requested
   * @param options The options parameters.
   */
  getOperationResult(
    operationId: string,
    options?: coreHttp.OperationOptions
  ): Promise<LibraryGetOperationResultResponse>;
  /**
   * Delete Library
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  delete(
    libraryName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>>;
  /**
   * Get Library
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  get(libraryName: string, options?: coreHttp.OperationOptions): Promise<LibraryGetResponse>;
  /**
   * Creates a library with the library name.
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  create(
    libraryName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>>;
  /**
   * Append the content to the library resource created using the create operation. The maximum content
   * size is 4MiB. Content larger than 4MiB must be appended in 4MiB chunks
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param content Library file chunk.
   * @param options The options parameters.
   */
  append(
    libraryName: string,
    content: coreHttp.HttpRequestBody,
    options?: LibraryAppendOptionalParams
  ): Promise<coreHttp.RestResponse>;
}
