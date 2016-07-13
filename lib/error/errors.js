'use strict';

function createError(name, message, code) {
  function ResponseError(statusCode) {
    if (!!statusCode) {
      this.statusCode = statusCode;
    }
  }
  ResponseError.prototype = Object.create(Error.prototype);
  ResponseError.prototype.constructor = ResponseError;
  ResponseError.prototype.name = name;
  ResponseError.prototype.message = message;
  ResponseError.prototype.statusCode = code;

  ResponseError.prototype.predicate = function(error) {
    return error && error.name && error. name == this.name;
  };

  return ResponseError;
}

module.exports.DownloadError = createError('DownloadError', 'Download went wrong!', 404);
module.exports.WriteError = createError('WriteError', 'Writing file went wrong!', 500);