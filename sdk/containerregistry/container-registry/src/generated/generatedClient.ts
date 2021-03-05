/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  V2Support,
  Manifests,
  Blob,
  Repository,
  Tag,
  RefreshTokens,
  AccessTokens
} from "./operations";
import { GeneratedClientContext } from "./generatedClientContext";
import { GeneratedClientOptionalParams } from "./models";

/** @hidden */
export class GeneratedClient extends GeneratedClientContext {
  /**
   * Initializes a new instance of the GeneratedClient class.
   * @param url Registry login URL
   * @param options The parameter options
   */
  constructor(url: string, options?: GeneratedClientOptionalParams) {
    super(url, options);
    this.v2Support = new V2Support(this);
    this.manifests = new Manifests(this);
    this.blob = new Blob(this);
    this.repository = new Repository(this);
    this.tag = new Tag(this);
    this.refreshTokens = new RefreshTokens(this);
    this.accessTokens = new AccessTokens(this);
  }

  v2Support: V2Support;
  manifests: Manifests;
  blob: Blob;
  repository: Repository;
  tag: Tag;
  refreshTokens: RefreshTokens;
  accessTokens: AccessTokens;
}
