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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/InlineResponse2003'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/InlineResponse2003'));
  } else {
    // Browser globals (root is window)
    if (!root.DocNodeApi) {
      root.DocNodeApi = {};
    }
    root.DocNodeApi.VolumeApi = factory(root.DocNodeApi.ApiClient, root.DocNodeApi.Error, root.DocNodeApi.InlineResponse2003);
  }
}(this, function(ApiClient, Error, InlineResponse2003) {
  'use strict';

  /**
   * Volume service.
   * @module api/VolumeApi
   * @version 1.0.0
   */

  /**
   * Constructs a new VolumeApi. 
   * @alias module:api/VolumeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the volumesListGET operation.
     * @callback module:api/VolumeApi~volumesListGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of all volumes
     * Allow to retrive all volume objects that are in the host machine (for additional information [Docker API Reference - volume list](https://docs.docker.com/engine/api/v1.39/#operation/VolumeList))
     * @param {module:api/VolumeApi~volumesListGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.volumesListGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/volumes/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));