
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.SecuConnectApi);
  }
}(this, function(SecuConnectApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SecuConnectApi.PaymentTransactionsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PaymentTransactionsApi', function() {
    describe('paymentTransactionsGet', function() {
      it('should call paymentTransactionsGet successfully', function(done) {
        //uncomment below and update the code to test paymentTransactionsGet
        //instance.paymentTransactionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentTransactionsGetById', function() {
      it('should call paymentTransactionsGetById successfully', function(done) {
        //uncomment below and update the code to test paymentTransactionsGetById
        //instance.paymentTransactionsGetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentTransactionsIdCancelPost', function() {
      it('should call paymentTransactionsIdCancelPost successfully', function(done) {
        //uncomment below and update the code to test paymentTransactionsIdCancelPost
        //instance.paymentTransactionsIdCancelPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentTransactionsIdShippingUrlGet', function() {
      it('should call paymentTransactionsIdShippingUrlGet successfully', function(done) {
        //uncomment below and update the code to test paymentTransactionsIdShippingUrlGet
        //instance.paymentTransactionsIdShippingUrlGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
