/**
 * Doc-Node API
 * Deamon used to periodically generate volume's backup and send of this backups on a predefined persistent system (eg. NFS, SWIFT, ...)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DocNodeApi);
  }
}(this, function(expect, DocNodeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DocNodeApi.MountBindOptions();
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

  describe('MountBindOptions', function() {
    it('should create an instance of MountBindOptions', function() {
      // uncomment below and update the code to test MountBindOptions
      //var instance = new DocNodeApi.MountBindOptions();
      //expect(instance).to.be.a(DocNodeApi.MountBindOptions);
    });

    it('should have the property propagation (base name: "Propagation")', function() {
      // uncomment below and update the code to test the property propagation
      //var instance = new DocNodeApi.MountBindOptions();
      //expect(instance).to.be();
    });

  });

}));
