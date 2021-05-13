let nock = require('nock');

module.exports.hash = "dfc9b3b9db885db985daab59b9e382de";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/v2.1/prebuilt/invoice/analyze', {"source":"https://storageaccount/testingdata/Invoice_1.pdf?sastoken"})
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.1/prebuilt/invoice/analyzeResults/a4420654-586a-4355-a7f0-a35238782153',
  'x-envoy-upstream-service-time',
  '218',
  'apim-request-id',
  'a4420654-586a-4355-a7f0-a35238782153',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 12 May 2021 01:28:43 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/prebuilt/invoice/analyzeResults/a4420654-586a-4355-a7f0-a35238782153')
  .reply(200, {"status":"notStarted","createdDateTime":"2021-05-12T01:28:44Z","lastUpdatedDateTime":"2021-05-12T01:28:44Z"}, [
  'Content-Length',
  '109',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '10',
  'apim-request-id',
  'b2311150-0b46-460f-891c-d45570237684',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 12 May 2021 01:28:43 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/prebuilt/invoice/analyzeResults/a4420654-586a-4355-a7f0-a35238782153')
  .reply(200, {"status":"running","createdDateTime":"2021-05-12T01:28:44Z","lastUpdatedDateTime":"2021-05-12T01:28:44Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '10',
  'apim-request-id',
  '15fe3d8e-f9a2-47bf-b88c-b263df1fb4ff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 12 May 2021 01:28:43 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/prebuilt/invoice/analyzeResults/a4420654-586a-4355-a7f0-a35238782153')
  .reply(200, {"status":"succeeded","createdDateTime":"2021-05-12T01:28:44Z","lastUpdatedDateTime":"2021-05-12T01:28:47Z","analyzeResult":{"version":"2.1.0","readResults":[{"page":1,"angle":0,"width":8.5,"height":11,"unit":"inch"}],"pageResults":[{"page":1,"tables":[{"rows":3,"columns":5,"cells":[{"rowIndex":0,"columnIndex":0,"text":"Invoice Number","boundingBox":[0.4992,2.7829,1.8978,2.79,1.8978,3.3181,0.5064,3.3181],"isHeader":true},{"rowIndex":0,"columnIndex":1,"text":"Invoice Date","boundingBox":[1.8978,2.79,3.3036,2.79,3.3036,3.3181,1.8978,3.3181],"isHeader":true},{"rowIndex":0,"columnIndex":2,"text":"Invoice Due Date","boundingBox":[3.3036,2.79,4.7022,2.79,4.7022,3.3181,3.3036,3.3181],"isHeader":true},{"rowIndex":0,"columnIndex":3,"text":"Charges","boundingBox":[4.7022,2.79,6.1008,2.79,6.1008,3.3181,4.7022,3.3181],"isHeader":true},{"rowIndex":0,"columnIndex":4,"text":"VAT ID","boundingBox":[6.1008,2.79,7.4994,2.79,7.4994,3.3181,6.1008,3.3181],"isHeader":true},{"rowIndex":1,"columnIndex":0,"rowSpan":2,"text":"34278587","boundingBox":[0.5064,3.3181,1.8978,3.3181,1.8978,3.8534,0.5064,3.8534]},{"rowIndex":1,"columnIndex":1,"rowSpan":2,"text":"6/18/2017","boundingBox":[1.8978,3.3181,3.3036,3.3181,3.3036,3.8534,1.8978,3.8534]},{"rowIndex":1,"columnIndex":2,"rowSpan":2,"text":"6/24/2017","boundingBox":[3.3036,3.3181,4.7022,3.3181,4.7022,3.8534,3.3036,3.8534]},{"rowIndex":1,"columnIndex":3,"rowSpan":2,"text":"$56,651.49","boundingBox":[4.7022,3.3181,6.1008,3.3181,6.1008,3.8534,4.7022,3.8534]},{"rowIndex":1,"columnIndex":4,"rowSpan":2,"text":"PT","boundingBox":[6.1008,3.3181,7.4994,3.3181,7.4994,3.8534,6.1008,3.8534]}],"boundingBox":[0.4985,2.7802,7.4933,2.7816,7.4913,3.8459,0.4966,3.8447]}]}],"documentResults":[{"docType":"prebuilt:invoice","pageRange":[1,1],"fields":{"CustomerAddress":{"type":"string","valueString":"1020 Enterprise Way Sunnayvale, CA 87659","text":"1020 Enterprise Way Sunnayvale, CA 87659","boundingBox":[5.196,1.716,6.6526,1.716,6.6526,2.0359,5.196,2.0359],"page":1,"confidence":0.954},"CustomerAddressRecipient":{"type":"string","valueString":"Microsoft","text":"Microsoft","boundingBox":[5.2045,1.5114,5.8155,1.5114,5.8155,1.6151,5.2045,1.6151],"page":1,"confidence":0.981},"CustomerName":{"type":"string","valueString":"Microsoft","text":"Microsoft","boundingBox":[5.2045,1.5114,5.8155,1.5114,5.8155,1.6151,5.2045,1.6151],"page":1,"confidence":0.981},"DueDate":{"type":"date","valueDate":"2017-06-24","text":"6/24/2017","boundingBox":[3.346,3.41,3.9514,3.41,3.9514,3.5144,3.346,3.5144],"page":1,"confidence":0.981},"InvoiceDate":{"type":"date","valueDate":"2017-06-18","text":"6/18/2017","boundingBox":[1.9455,3.41,2.551,3.41,2.551,3.5144,1.9455,3.5144],"page":1,"confidence":0.967},"InvoiceId":{"type":"string","valueString":"34278587","text":"34278587","boundingBox":[0.5397,3.411,1.1457,3.411,1.1457,3.5144,0.5397,3.5144],"page":1,"confidence":0.973},"Items":{"type":"array","valueArray":[{"type":"object","valueObject":{"Amount":{"type":"number","valueNumber":56651.49,"text":"$56,651.49","boundingBox":[5.3871,3.4047,6.0702,3.4047,6.0702,3.5321,5.3871,3.5321],"page":1,"confidence":0.783},"Date":{"type":"date","valueDate":"2017-06-18","text":"6/18/2017","boundingBox":[1.9455,3.41,2.551,3.41,2.551,3.5144,1.9455,3.5144],"page":1,"confidence":0.287},"ProductCode":{"type":"string","valueString":"34278587","text":"34278587","boundingBox":[0.5397,3.411,1.1457,3.411,1.1457,3.5144,0.5397,3.5144],"page":1,"confidence":0.646},"Tax":{"type":"number","text":"PT","boundingBox":[6.2285,3.4114,6.3919,3.4114,6.3919,3.5119,6.2285,3.5119],"page":1,"confidence":0.692}},"text":"34278587 6/18/2017 6/24/2017 $56,651.49 PT","boundingBox":[0.5397,3.4047,6.3919,3.4047,6.3919,3.5321,0.5397,3.5321],"page":1,"confidence":0.399}]},"VendorAddress":{"type":"string","valueString":"1 Redmond way Suite 6000 Redmond, WA 99243","text":"1 Redmond way Suite 6000 Redmond, WA 99243","boundingBox":[0.8019,1.7033,2.1445,1.7033,2.1445,2.1911,0.8019,2.1911],"page":1,"confidence":0.953},"VendorName":{"type":"string","valueString":"Contoso","text":"Contoso","boundingBox":[0.5384,1.1583,1.4466,1.1583,1.4466,1.3534,0.5384,1.3534],"page":1,"confidence":0.981}}}]}}, [
  'Content-Length',
  '4180',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '21',
  'apim-request-id',
  '1d38735d-dfa0-487f-8cb0-055fac27ea14',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 12 May 2021 01:28:49 GMT'
]);
