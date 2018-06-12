# secu_connect_api

SecuConnectApi - JavaScript client for secu_connect_api
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0
- Package version: 2.0
- Build package: com.secuconnect.js.SecujscodegenGenerator

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install secu_connect_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SecuConnectApi = require('secu_connect_api');

var defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
var oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = "YOUR ACCESS TOKEN"

var api = new SecuConnectApi.PaymentContainersApi()
api.paymentContainersGet().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SecuConnectApi.PaymentContainersApi* | [**paymentContainersGet**](docs/PaymentContainersApi.md#paymentContainersGet) | **GET** Payment/Containers | 
*SecuConnectApi.PaymentContainersApi* | [**paymentContainersGetById**](docs/PaymentContainersApi.md#paymentContainersGetById) | **GET** Payment/Containers/{id} | 
*SecuConnectApi.PaymentContainersApi* | [**paymentContainersIdAssignSecondaryIdDelete**](docs/PaymentContainersApi.md#paymentContainersIdAssignSecondaryIdDelete) | **DELETE** Payment/Containers/{id}/assign/{secondary-id} | 
*SecuConnectApi.PaymentContainersApi* | [**paymentContainersIdAssignSecondaryIdPost**](docs/PaymentContainersApi.md#paymentContainersIdAssignSecondaryIdPost) | **POST** Payment/Containers/{id}/assign/{secondary-id} | 
*SecuConnectApi.PaymentContainersApi* | [**paymentContainersIdDelete**](docs/PaymentContainersApi.md#paymentContainersIdDelete) | **DELETE** Payment/Containers/{id} | 
*SecuConnectApi.PaymentContainersApi* | [**paymentContainersIdPut**](docs/PaymentContainersApi.md#paymentContainersIdPut) | **PUT** Payment/Containers/{id} | 
*SecuConnectApi.PaymentContainersApi* | [**paymentContainersPost**](docs/PaymentContainersApi.md#paymentContainersPost) | **POST** Payment/Containers | 
*SecuConnectApi.PaymentContractsApi* | [**paymentContractsGet**](docs/PaymentContractsApi.md#paymentContractsGet) | **GET** Payment/Contracts | 
*SecuConnectApi.PaymentContractsApi* | [**paymentContractsGetById**](docs/PaymentContractsApi.md#paymentContractsGetById) | **GET** Payment/Contracts/{id} | 
*SecuConnectApi.PaymentContractsApi* | [**paymentContractsIdClonePost**](docs/PaymentContractsApi.md#paymentContractsIdClonePost) | **POST** Payment/Contracts/{id}/clone | 
*SecuConnectApi.PaymentContractsApi* | [**paymentContractsIdDelete**](docs/PaymentContractsApi.md#paymentContractsIdDelete) | **DELETE** Payment/Contracts/{id} | 
*SecuConnectApi.PaymentContractsApi* | [**paymentContractsIdPaymentMethodsGet**](docs/PaymentContractsApi.md#paymentContractsIdPaymentMethodsGet) | **GET** Payment/Contracts/{id}/PaymentMethods | 
*SecuConnectApi.PaymentContractsApi* | [**paymentContractsIdPut**](docs/PaymentContractsApi.md#paymentContractsIdPut) | **PUT** Payment/Contracts/{id} | 
*SecuConnectApi.PaymentContractsApi* | [**paymentContractsIdRequestIdPost**](docs/PaymentContractsApi.md#paymentContractsIdRequestIdPost) | **POST** Payment/Contracts/{id}/RequestId | 
*SecuConnectApi.PaymentContractsApi* | [**paymentContractsPost**](docs/PaymentContractsApi.md#paymentContractsPost) | **POST** Payment/Contracts | 
*SecuConnectApi.PaymentCustomersApi* | [**paymentCustomersGet**](docs/PaymentCustomersApi.md#paymentCustomersGet) | **GET** Payment/Customers | 
*SecuConnectApi.PaymentCustomersApi* | [**paymentCustomersGetById**](docs/PaymentCustomersApi.md#paymentCustomersGetById) | **GET** Payment/Customers/{id} | 
*SecuConnectApi.PaymentCustomersApi* | [**paymentCustomersIdDelete**](docs/PaymentCustomersApi.md#paymentCustomersIdDelete) | **DELETE** Payment/Customers/{id} | 
*SecuConnectApi.PaymentCustomersApi* | [**paymentCustomersIdPut**](docs/PaymentCustomersApi.md#paymentCustomersIdPut) | **PUT** Payment/Customers/{id} | 
*SecuConnectApi.PaymentCustomersApi* | [**paymentCustomersPost**](docs/PaymentCustomersApi.md#paymentCustomersPost) | **POST** Payment/Customers | 
*SecuConnectApi.PaymentSecupayCreditcardsApi* | [**paymentSecupayCreditcardsCancelById**](docs/PaymentSecupayCreditcardsApi.md#paymentSecupayCreditcardsCancelById) | **POST** Payment/Secupaycreditcards/{hash}/cancel | 
*SecuConnectApi.PaymentSecupayCreditcardsApi* | [**paymentSecupayCreditcardsGetById**](docs/PaymentSecupayCreditcardsApi.md#paymentSecupayCreditcardsGetById) | **GET** Payment/Secupaycreditcards/{hash} | 
*SecuConnectApi.PaymentSecupayCreditcardsApi* | [**paymentSecupaycreditcardsPost**](docs/PaymentSecupayCreditcardsApi.md#paymentSecupaycreditcardsPost) | **POST** Payment/Secupaycreditcards | 
*SecuConnectApi.PaymentSecupayDebitsApi* | [**paymentSecupayDebitsCancelById**](docs/PaymentSecupayDebitsApi.md#paymentSecupayDebitsCancelById) | **POST** Payment/Secupaydebits/{hash}/cancel | 
*SecuConnectApi.PaymentSecupayDebitsApi* | [**paymentSecupayDebitsGetById**](docs/PaymentSecupayDebitsApi.md#paymentSecupayDebitsGetById) | **GET** Payment/Secupaydebits/{hash} | 
*SecuConnectApi.PaymentSecupayDebitsApi* | [**paymentSecupaydebitsPost**](docs/PaymentSecupayDebitsApi.md#paymentSecupaydebitsPost) | **POST** Payment/Secupaydebits | 
*SecuConnectApi.PaymentSecupayInvoicesApi* | [**paymentSecupayInvoicesCancelById**](docs/PaymentSecupayInvoicesApi.md#paymentSecupayInvoicesCancelById) | **POST** Payment/Secupayinvoices/{hash}/cancel | 
*SecuConnectApi.PaymentSecupayInvoicesApi* | [**paymentSecupayInvoicesGetById**](docs/PaymentSecupayInvoicesApi.md#paymentSecupayInvoicesGetById) | **GET** Payment/Secupayinvoices/{hash} | 
*SecuConnectApi.PaymentSecupayInvoicesApi* | [**paymentSecupayinvoicesPost**](docs/PaymentSecupayInvoicesApi.md#paymentSecupayinvoicesPost) | **POST** Payment/Secupayinvoices | 
*SecuConnectApi.PaymentSecupayPrepaysApi* | [**paymentSecupayPrepaysCancelById**](docs/PaymentSecupayPrepaysApi.md#paymentSecupayPrepaysCancelById) | **POST** Payment/Secupayprepays/{hash}/cancel | 
*SecuConnectApi.PaymentSecupayPrepaysApi* | [**paymentSecupayPrepaysGetById**](docs/PaymentSecupayPrepaysApi.md#paymentSecupayPrepaysGetById) | **GET** Payment/Secupayprepays/{hash} | 
*SecuConnectApi.PaymentSecupayPrepaysApi* | [**paymentSecupayprepaysPost**](docs/PaymentSecupayPrepaysApi.md#paymentSecupayprepaysPost) | **POST** Payment/Secupayprepays | 
*SecuConnectApi.PaymentTransactionsApi* | [**paymentTransactionsGet**](docs/PaymentTransactionsApi.md#paymentTransactionsGet) | **GET** Payment/Transactions | 
*SecuConnectApi.PaymentTransactionsApi* | [**paymentTransactionsGetById**](docs/PaymentTransactionsApi.md#paymentTransactionsGetById) | **GET** Payment/Transactions/{id} | 
*SecuConnectApi.PaymentTransactionsApi* | [**paymentTransactionsIdCancelPost**](docs/PaymentTransactionsApi.md#paymentTransactionsIdCancelPost) | **POST** Payment/Transactions/{id}/cancel | 
*SecuConnectApi.PaymentTransactionsApi* | [**paymentTransactionsIdShippingUrlGet**](docs/PaymentTransactionsApi.md#paymentTransactionsIdShippingUrlGet) | **GET** Payment/Transactions/{id}/shippingUrl | 


## Documentation for Models

 - [SecuConnectApi.Address](docs/Address.md)
 - [SecuConnectApi.BankAccountDescriptor](docs/BankAccountDescriptor.md)
 - [SecuConnectApi.InlineResponse200](docs/InlineResponse200.md)
 - [SecuConnectApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [SecuConnectApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [SecuConnectApi.InlineResponse2002PayingAccount](docs/InlineResponse2002PayingAccount.md)
 - [SecuConnectApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [SecuConnectApi.InlineResponse2004](docs/InlineResponse2004.md)
 - [SecuConnectApi.InlineResponse2005](docs/InlineResponse2005.md)
 - [SecuConnectApi.InlineResponse2006](docs/InlineResponse2006.md)
 - [SecuConnectApi.PaymentContainerMandate](docs/PaymentContainerMandate.md)
 - [SecuConnectApi.PaymentContainersDTO](docs/PaymentContainersDTO.md)
 - [SecuConnectApi.PaymentContainersDTOCustomer](docs/PaymentContainersDTOCustomer.md)
 - [SecuConnectApi.PaymentContainersDTOPrivate](docs/PaymentContainersDTOPrivate.md)
 - [SecuConnectApi.PaymentContainersProductModel](docs/PaymentContainersProductModel.md)
 - [SecuConnectApi.PaymentContractsDTO](docs/PaymentContractsDTO.md)
 - [SecuConnectApi.PaymentContractsProductModel](docs/PaymentContractsProductModel.md)
 - [SecuConnectApi.PaymentCustomersDTO](docs/PaymentCustomersDTO.md)
 - [SecuConnectApi.PaymentCustomersDTOContact](docs/PaymentCustomersDTOContact.md)
 - [SecuConnectApi.PaymentCustomersProductModel](docs/PaymentCustomersProductModel.md)
 - [SecuConnectApi.PaymentTransactionsProductModel](docs/PaymentTransactionsProductModel.md)
 - [SecuConnectApi.PaymentTransactionsProductModelCustomer](docs/PaymentTransactionsProductModelCustomer.md)
 - [SecuConnectApi.PaymentTransactionsProductModelDetails](docs/PaymentTransactionsProductModelDetails.md)
 - [SecuConnectApi.PaymentTransactionsProductModelMerchant](docs/PaymentTransactionsProductModelMerchant.md)
 - [SecuConnectApi.ProductExceptionPayload](docs/ProductExceptionPayload.md)
 - [SecuConnectApi.ProductInstanceUID](docs/ProductInstanceUID.md)
 - [SecuConnectApi.SecupayBasketItem](docs/SecupayBasketItem.md)
 - [SecuConnectApi.SecupayTransactionProductDTO](docs/SecupayTransactionProductDTO.md)
 - [SecuConnectApi.SecupayTransactionProductDTOApiData](docs/SecupayTransactionProductDTOApiData.md)
 - [SecuConnectApi.SecupayTransactionProductDTOExperience](docs/SecupayTransactionProductDTOExperience.md)
 - [SecuConnectApi.SecupayTransactionProductDTOOptData](docs/SecupayTransactionProductDTOOptData.md)
 - [SecuConnectApi.SecupayTransactionProductDTORedirectUrl](docs/SecupayTransactionProductDTORedirectUrl.md)
 - [SecuConnectApi.SecupayTransactionProductDTOSubscription](docs/SecupayTransactionProductDTOSubscription.md)
 - [SecuConnectApi.SecupayTransactionProductModel](docs/SecupayTransactionProductModel.md)
 - [SecuConnectApi.SecupayTransactionProductModelRedirectUrl](docs/SecupayTransactionProductModelRedirectUrl.md)
 - [SecuConnectApi.SecupayTransactionProductModelTransferAccount](docs/SecupayTransactionProductModelTransferAccount.md)
 - [SecuConnectApi.SecupayTransactionProductModelUsedPaymentInstrument](docs/SecupayTransactionProductModelUsedPaymentInstrument.md)


## Documentation for Authorization


### oauth_token

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: https://connect-testing.secupay-ag.de/oauth/token
- **Scopes**: N/A

