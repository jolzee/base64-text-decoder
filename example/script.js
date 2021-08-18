let decoder = require("../src/index");

var data = JSON.stringify({
  email: "myemail@email.com",
  password: "mypassword",
  body: '"Please call me. My phone number is (555) 253-0000."\n\nMore examples:\n    Email address: foo@example.com\n    Credit card number: 4012-8888-8888-1881\n    National Provider Identifier: 1245319599\n    Driver\'s license: AC333991\n    My SSN is: 078-05-1120\n    David Adams @ https://mysite.com\n    password: 1234567',
  emailBase64: "bXllbWFpbEBlbWFpbC5jb20=",
  passwordBase64: "bXlwYXNzd29yZA==",
  another: {
    passwordBase64: "bXlwYXNzd29yZA==",
  },
  bodyBase64:
    "IlBsZWFzZSBjYWxsIG1lLiBNeSBwaG9uZSBudW1iZXIgaXMgKDU1NSkgMjUzLTAwMDAuIgoKTW9yZSBleGFtcGxlczoKICAgIEVtYWlsIGFkZHJlc3M6IGZvb0BleGFtcGxlLmNvbQogICAgQ3JlZGl0IGNhcmQgbnVtYmVyOiA0MDEyLTg4ODgtODg4OC0xODgxCiAgICBOYXRpb25hbCBQcm92aWRlciBJZGVudGlmaWVyOiAxMjQ1MzE5NTk5CiAgICBEcml2ZXIncyBsaWNlbnNlOiBBQzMzMzk5MQogICAgTXkgU1NOIGlzOiAwNzgtMDUtMTEyMAogICAgRGF2aWQgQWRhbXMgQCBodHRwczovL215c2l0ZS5jb20KICAgIHBhc3N3b3JkOiAxMjM0NTY3",
});

console.log(decoder.getText(5552530000)); // Number
console.log(decoder.getText("bXlwYXNzd29yZA==")); // String
console.log(
  decoder.getText([
    "Peter",
    "bXlwYXNzd29yZA==",
    "IlBsZWFzZSBjYWxsIG1lLiBNeSBwaG9uZSBudW1iZXIgaXMgKDU1NSkgMjUzLTAwMDAuIgoKTW9yZSBleGFtcGxlczoKICAgIEVtYWlsIGFkZHJlc3M6IGZvb0BleGFtcGxlLmNvbQogICAgQ3JlZGl0IGNhcmQgbnVtYmVyOiA0MDEyLTg4ODgtODg4OC0xODgxCiAgICBOYXRpb25hbCBQcm92aWRlciBJZGVudGlmaWVyOiAxMjQ1MzE5NTk5CiAgICBEcml2ZXIncyBsaWNlbnNlOiBBQzMzMzk5MQogICAgTXkgU1NOIGlzOiAwNzgtMDUtMTEyMAogICAgRGF2aWQgQWRhbXMgQCBodHRwczovL215c2l0ZS5jb20KICAgIHBhc3N3b3JkOiAxMjM0NTY3",
    data,
    ["bXlwYXNzd29yZA=="],
  ])
); // Array containing base 64
console.log(decoder.getText(JSON.parse(data))); // Object
console.log(decoder.getText(data)); // Raw String
let resultFromSearchText = decoder.getSearchText(
  "?secret=bXlwYXNzd29yZA==&email=myemail%40email.com&password=mypassword&body=%22Please%20call%20me.%20My%20phone%20number%20is%20(555)%20253-0000.%22%0A%0AMore%20examples%3A%0A%20%20%20%20Email%20address%3A%20foo%40example.com%0A%20%20%20%20Credit%20card%20number%3A%204012-8888-8888-1881%0A%20%20%20%20National%20Provider%20Identifier%3A%201245319599%0A%20%20%20%20Driver%27s%20license%3A%20AC333991%0A%20%20%20%20My%20SSN%20is%3A%20078-05-1120%0A%20%20%20%20David%20Adams%20%40%20https%3A%2F%2Fmysite.com%0A%20%20%20%20password%3A%201234567"
); // search string from URL containing both base64 and plain
console.log(resultFromSearchText);
