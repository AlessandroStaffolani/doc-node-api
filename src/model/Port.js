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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DocNodeApi) {
      root.DocNodeApi = {};
    }
    root.DocNodeApi.Port = factory(root.DocNodeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Port model module.
   * @module model/Port
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Port</code>.
   * An open port on a container
   * @alias module:model/Port
   * @class
   * @param privatePort {Number} Port on the container
   * @param type {module:model/Port.TypeEnum} 
   */
  var exports = function(privatePort, type) {
    var _this = this;


    _this['PrivatePort'] = privatePort;

    _this['Type'] = type;
  };

  /**
   * Constructs a <code>Port</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Port} obj Optional instance to populate.
   * @return {module:model/Port} The populated <code>Port</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('IP')) {
        obj['IP'] = ApiClient.convertToType(data['IP'], 'String');
      }
      if (data.hasOwnProperty('PrivatePort')) {
        obj['PrivatePort'] = ApiClient.convertToType(data['PrivatePort'], 'Number');
      }
      if (data.hasOwnProperty('PublicPort')) {
        obj['PublicPort'] = ApiClient.convertToType(data['PublicPort'], 'Number');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Host IP address that the container's port is mapped to
   * @member {String} IP
   */
  exports.prototype['IP'] = undefined;
  /**
   * Port on the container
   * @member {Number} PrivatePort
   */
  exports.prototype['PrivatePort'] = undefined;
  /**
   * Port exposed on the host
   * @member {Number} PublicPort
   */
  exports.prototype['PublicPort'] = undefined;
  /**
   * @member {module:model/Port.TypeEnum} Type
   */
  exports.prototype['Type'] = undefined;


  /**
   * Allowed values for the <code>Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "tcp"
     * @const
     */
    "tcp": "tcp",
    /**
     * value: "udp"
     * @const
     */
    "udp": "udp",
    /**
     * value: "sctp"
     * @const
     */
    "sctp": "sctp"  };


  return exports;
}));


