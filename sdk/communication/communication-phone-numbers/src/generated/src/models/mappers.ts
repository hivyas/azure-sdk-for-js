/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const PhoneNumberSearchRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberSearchRequest",
    modelProperties: {
      phoneNumberType: {
        serializedName: "phoneNumberType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["geographic", "tollFree"]
        }
      },
      assignmentType: {
        serializedName: "assignmentType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["person", "application"]
        }
      },
      capabilities: {
        serializedName: "capabilities",
        type: {
          name: "Composite",
          className: "PhoneNumberCapabilities"
        }
      },
      areaCode: {
        serializedName: "areaCode",
        type: {
          name: "String"
        }
      },
      quantity: {
        defaultValue: 1,
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 1
        },
        serializedName: "quantity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PhoneNumberCapabilities: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberCapabilities",
    modelProperties: {
      calling: {
        serializedName: "calling",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["none", "inbound", "outbound", "inbound+outbound"]
        }
      },
      sms: {
        serializedName: "sms",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["none", "inbound", "outbound", "inbound+outbound"]
        }
      }
    }
  }
};

export const PhoneNumberSearchResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberSearchResult",
    modelProperties: {
      searchId: {
        serializedName: "searchId",
        required: true,
        type: {
          name: "String"
        }
      },
      phoneNumbers: {
        serializedName: "phoneNumbers",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      phoneNumberType: {
        serializedName: "phoneNumberType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["geographic", "tollFree"]
        }
      },
      assignmentType: {
        serializedName: "assignmentType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["person", "application"]
        }
      },
      capabilities: {
        serializedName: "capabilities",
        type: {
          name: "Composite",
          className: "PhoneNumberCapabilities"
        }
      },
      cost: {
        serializedName: "cost",
        type: {
          name: "Composite",
          className: "PhoneNumberCost"
        }
      },
      searchExpiresBy: {
        serializedName: "searchExpiresBy",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const PhoneNumberCost: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberCost",
    modelProperties: {
      amount: {
        serializedName: "amount",
        required: true,
        type: {
          name: "Number"
        }
      },
      currencyCode: {
        serializedName: "currencyCode",
        required: true,
        type: {
          name: "String"
        }
      },
      billingFrequency: {
        defaultValue: "monthly",
        isConstant: true,
        serializedName: "billingFrequency",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommunicationErrorResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};

export const CommunicationError: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommunicationError"
            }
          }
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};

export const PhoneNumberPurchaseRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberPurchaseRequest",
    modelProperties: {
      searchId: {
        serializedName: "searchId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhoneNumberOperation: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberOperation",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["notStarted", "running", "succeeded", "failed"]
        }
      },
      resourceLocation: {
        serializedName: "resourceLocation",
        type: {
          name: "String"
        }
      },
      createdDateTime: {
        serializedName: "createdDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      },
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      operationType: {
        serializedName: "operationType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "purchase",
            "releasePhoneNumber",
            "search",
            "updatePhoneNumberCapabilities"
          ]
        }
      },
      lastActionDateTime: {
        serializedName: "lastActionDateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const AcquiredPhoneNumber: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AcquiredPhoneNumber",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      countryCode: {
        serializedName: "countryCode",
        required: true,
        type: {
          name: "String"
        }
      },
      phoneNumberType: {
        serializedName: "phoneNumberType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["geographic", "tollFree"]
        }
      },
      capabilities: {
        serializedName: "capabilities",
        type: {
          name: "Composite",
          className: "PhoneNumberCapabilities"
        }
      },
      assignmentType: {
        serializedName: "assignmentType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["person", "application"]
        }
      },
      purchaseDate: {
        serializedName: "purchaseDate",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      cost: {
        serializedName: "cost",
        type: {
          name: "Composite",
          className: "PhoneNumberCost"
        }
      }
    }
  }
};

export const AcquiredPhoneNumbers: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AcquiredPhoneNumbers",
    modelProperties: {
      phoneNumbers: {
        serializedName: "phoneNumbers",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AcquiredPhoneNumber"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhoneNumberCapabilitiesRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberCapabilitiesRequest",
    modelProperties: {
      calling: {
        serializedName: "calling",
        type: {
          name: "Enum",
          allowedValues: ["none", "inbound", "outbound", "inbound+outbound"]
        }
      },
      sms: {
        serializedName: "sms",
        type: {
          name: "Enum",
          allowedValues: ["none", "inbound", "outbound", "inbound+outbound"]
        }
      }
    }
  }
};

export const PhoneNumbersSearchAvailablePhoneNumbersHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumbersSearchAvailablePhoneNumbersHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      },
      operationId: {
        serializedName: "operation-id",
        type: {
          name: "String"
        }
      },
      searchId: {
        serializedName: "search-id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhoneNumbersPurchasePhoneNumbersHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumbersPurchasePhoneNumbersHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      },
      operationId: {
        serializedName: "operation-id",
        type: {
          name: "String"
        }
      },
      purchaseId: {
        serializedName: "purchase-id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhoneNumbersGetOperationHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumbersGetOperationHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhoneNumbersReleasePhoneNumberHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumbersReleasePhoneNumberHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      },
      operationId: {
        serializedName: "operation-id",
        type: {
          name: "String"
        }
      },
      releaseId: {
        serializedName: "release-id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhoneNumbersUpdateCapabilitiesHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumbersUpdateCapabilitiesHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      },
      operationId: {
        serializedName: "operation-id",
        type: {
          name: "String"
        }
      },
      capabilitiesId: {
        serializedName: "capabilities-id",
        type: {
          name: "String"
        }
      }
    }
  }
};
