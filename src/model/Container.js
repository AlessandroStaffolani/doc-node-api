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
    define(['ApiClient', 'model/ContainerHostConfig', 'model/ContainerNetworkSettings', 'model/Mount', 'model/Port'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContainerHostConfig'), require('./ContainerNetworkSettings'), require('./Mount'), require('./Port'));
  } else {
    // Browser globals (root is window)
    if (!root.DocNodeApi) {
      root.DocNodeApi = {};
    }
    root.DocNodeApi.Container = factory(root.DocNodeApi.ApiClient, root.DocNodeApi.ContainerHostConfig, root.DocNodeApi.ContainerNetworkSettings, root.DocNodeApi.Mount, root.DocNodeApi.Port);
  }
}(this, function(ApiClient, ContainerHostConfig, ContainerNetworkSettings, Mount, Port) {
  'use strict';




  /**
   * The Container model module.
   * @module model/Container
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Container</code>.
   * @alias module:model/Container
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>Container</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Container} obj Optional instance to populate.
   * @return {module:model/Container} The populated <code>Container</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('Names')) {
        obj['Names'] = ApiClient.convertToType(data['Names'], ['String']);
      }
      if (data.hasOwnProperty('Image')) {
        obj['Image'] = ApiClient.convertToType(data['Image'], 'String');
      }
      if (data.hasOwnProperty('ImageID')) {
        obj['ImageID'] = ApiClient.convertToType(data['ImageID'], 'String');
      }
      if (data.hasOwnProperty('Command')) {
        obj['Command'] = ApiClient.convertToType(data['Command'], 'String');
      }
      if (data.hasOwnProperty('Created')) {
        obj['Created'] = ApiClient.convertToType(data['Created'], 'Number');
      }
      if (data.hasOwnProperty('Ports')) {
        obj['Ports'] = ApiClient.convertToType(data['Ports'], [Port]);
      }
      if (data.hasOwnProperty('SizeRw')) {
        obj['SizeRw'] = ApiClient.convertToType(data['SizeRw'], 'Number');
      }
      if (data.hasOwnProperty('SizeRootFs')) {
        obj['SizeRootFs'] = ApiClient.convertToType(data['SizeRootFs'], 'Number');
      }
      if (data.hasOwnProperty('Labels')) {
        obj['Labels'] = ApiClient.convertToType(data['Labels'], {'String': 'String'});
      }
      if (data.hasOwnProperty('State')) {
        obj['State'] = ApiClient.convertToType(data['State'], 'String');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('HostConfig')) {
        obj['HostConfig'] = ContainerHostConfig.constructFromObject(data['HostConfig']);
      }
      if (data.hasOwnProperty('NetworkSettings')) {
        obj['NetworkSettings'] = ContainerNetworkSettings.constructFromObject(data['NetworkSettings']);
      }
      if (data.hasOwnProperty('Mounts')) {
        obj['Mounts'] = ApiClient.convertToType(data['Mounts'], [Mount]);
      }
    }
    return obj;
  }

  /**
   * The ID of this container
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * The names that this container has been given
   * @member {Array.<String>} Names
   */
  exports.prototype['Names'] = undefined;
  /**
   * The name of the image used when creating this container
   * @member {String} Image
   */
  exports.prototype['Image'] = undefined;
  /**
   * The ID of the image that this container was created from
   * @member {String} ImageID
   */
  exports.prototype['ImageID'] = undefined;
  /**
   * Command to run when starting the container
   * @member {String} Command
   */
  exports.prototype['Command'] = undefined;
  /**
   * When the container was created
   * @member {Number} Created
   */
  exports.prototype['Created'] = undefined;
  /**
   * The ports exposed by this container
   * @member {Array.<module:model/Port>} Ports
   */
  exports.prototype['Ports'] = undefined;
  /**
   * The size of files that have been created or changed by this container
   * @member {Number} SizeRw
   */
  exports.prototype['SizeRw'] = undefined;
  /**
   * The total size of all the files in this container
   * @member {Number} SizeRootFs
   */
  exports.prototype['SizeRootFs'] = undefined;
  /**
   * User-defined key/value metadata.
   * @member {Object.<String, String>} Labels
   */
  exports.prototype['Labels'] = undefined;
  /**
   * The state of this container (e.g. `Exited`)
   * @member {String} State
   */
  exports.prototype['State'] = undefined;
  /**
   * Additional human-readable status of this container (e.g. `Exit 0`)
   * @member {String} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * @member {module:model/ContainerHostConfig} HostConfig
   */
  exports.prototype['HostConfig'] = undefined;
  /**
   * @member {module:model/ContainerNetworkSettings} NetworkSettings
   */
  exports.prototype['NetworkSettings'] = undefined;
  /**
   * @member {Array.<module:model/Mount>} Mounts
   */
  exports.prototype['Mounts'] = undefined;



  return exports;
}));


