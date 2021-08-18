var isBase64 = require("is-base64");
var isJSON = require("is-json");
var isString = require("is-string");
var isPlainObject = require("is-plain-object").isPlainObject;
var decode = require("js-base64").decode;

const _getText = (something) => {
  if (Array.isArray(something)) {
    let result = [];
    something.forEach((element) => {
      result.push(_getText(element));
    });
    return result;
  } else if (isPlainObject(something)) {
    return processObject(something);
  } else if (isBase64(something)) {
    // console.log(`Processing a base64 encoded string:`, something);
    return decode(something);
  } else if (isJSON(something)) {
    try {
      // console.log(`Processing what seems to be JSON:`, something);
      let somethingParsed = JSON.parse(something);
      return processObject(somethingParsed);
    } catch (e) {
      console.error(`Could not JSON parse:`, something);
      return something;
    }
  } else {
    return something;
  }
};

const containsEncodedComponents = (x) => {
  // ie ?,=,&,/ etc
  return decodeURI(x) !== decodeURIComponent(x);
};

function processObject(someObject) {
  // console.log(`Processing an Object`);
  let results = {};
  traverse(someObject, (returnedObject, key, value, scope) => {
    // let keyText = _getText(key);
    let valueText = _getText(value);
    someObject[key] = valueText;
  });
  return JSON.stringify(someObject, null, 4);
}

const decodeURLParams = (search) => {
  // console.log(`Processing a search`);
  const hashes = search.slice(search.indexOf("?") + 1).split("&");
  return hashes.reduce((params, hash) => {
    const split = hash.indexOf("=");

    if (split < 0) {
      return Object.assign(params, {
        [hash]: null,
      });
    }

    const key = hash.slice(0, split);
    const val = hash.slice(split + 1);

    return Object.assign(params, { [key]: decodeURIComponent(val) });
  }, {});
};

const getText = (something) => {
  if (!something) return something;
  let textResult = _getText(something);
  // console.log(`Processed:`, something, textResult);
  return textResult;
};

const getSearchText = (search) => {
  if (!search || !isString(search)) return search;
  let searchObject = decodeURLParams(search);
  let textResult = getText(searchObject);
  // console.log("Getting search test:", searchObject, textResult);
  return textResult;
};

const traverse = (obj, fn, scope = []) => {
  // console.log(`Traversing an Object`, obj, scope);
  Object.entries(obj).forEach(([key, value]) => {
    fn.apply(this, [obj, key, value, scope]); // callback
    if (value !== null && typeof value === "object") {
      traverse(value, fn, scope.concat(key));
    }
  });
};

module.exports = {
  getText,
  getSearchText,
};
