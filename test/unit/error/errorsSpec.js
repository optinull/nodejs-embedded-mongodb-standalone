'use strict';

describe('errors', function () {
  var errors = require('../../../lib/error/errors.js');

  it('should be defined', function () {
    expect(errors).toBeDefined();
  });

  describe('DownloadError', function () {

    var error;

    beforeEach(function() {
      error = new errors.DownloadError();
    });

    describe('properties', function() {

      it('should be defined appropriately', function() {
        expect(error.name).toBe('DownloadError');
        expect(error.message).toBe('Download went wrong!');
        expect(error.statusCode).toBe(404);
        expect(error.predicate).toEqual(jasmine.any(Function));
      });

      it('predicate should return true, when called with same Error type', function () {
        var expectedError = new errors.DownloadError();
        expect(error.predicate(expectedError)).toBeTruthy();
      });

    });

    it('should be initialized appropriately', function () {
      var expectedStatusCode = 500;

      error = new errors.DownloadError(expectedStatusCode);

      expect(error.statusCode).toBe(expectedStatusCode);
    });
  });

  describe('WriteError', function () {

    var error;

    beforeEach(function() {
      error = new errors.WriteError();
    });

    describe('properties', function() {

      it('should be defined appropriately', function() {
        expect(error.name).toBe('WriteError');
        expect(error.message).toBe('Writing file went wrong!');
        expect(error.statusCode).toBe(500);
        expect(error.predicate).toEqual(jasmine.any(Function));
      });

      it('predicate should return true, when called with same Error type', function () {
        var expectedError = new errors.WriteError();
        expect(error.predicate(expectedError)).toBeTruthy();
      });

    });

    it('should be initialized appropriately', function () {
      var expectedStatusCode = 503;

      error = new errors.WriteError(expectedStatusCode);

      expect(error.statusCode).toBe(expectedStatusCode);
    });
  });
});