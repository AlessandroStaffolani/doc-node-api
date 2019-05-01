# doc-node client

DocNodeApi - JavaScript client for doc-node
Deamon used to periodically generate volume's backup and send of this backups on a predefined persistent system (eg. NFS, SWIFT, ...)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install doc_node_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your doc_node_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('doc_node_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/doc_node_api
then install it via:

```shell
    npm install YOUR_USERNAME/doc_node_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DocNodeApi = require('doc_node_api');

var api = new DocNodeApi.ContainerApi()

var id = "id_example"; // {String} Id of the container in which perform the volumes backup


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.containerBackupPOST(id, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:5555/api/v1.0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DocNodeApi.ContainerApi* | [**containerBackupPOST**](docs/ContainerApi.md#containerBackupPOST) | **POST** /containers/{id}/backup | Create backup of the container passed by Id.
*DocNodeApi.ContainerApi* | [**containerByIdGET**](docs/ContainerApi.md#containerByIdGET) | **GET** /containers/{id} | Returns a container object.
*DocNodeApi.ContainerApi* | [**containerMountsGET**](docs/ContainerApi.md#containerMountsGET) | **GET** /containers/{id}/mounts | Returns an array of mounts object.
*DocNodeApi.ContainerApi* | [**containersGET**](docs/ContainerApi.md#containersGET) | **GET** /containers/ | Returns a list of active containers.
*DocNodeApi.VolumeApi* | [**volumesListGET**](docs/VolumeApi.md#volumesListGET) | **GET** /volumes/list | Returns a list of all volumes


## Documentation for Models

 - [DocNodeApi.Backup](docs/Backup.md)
 - [DocNodeApi.Container](docs/Container.md)
 - [DocNodeApi.ContainerHostConfig](docs/ContainerHostConfig.md)
 - [DocNodeApi.ContainerNetworkSettings](docs/ContainerNetworkSettings.md)
 - [DocNodeApi.EndpointIPAMConfig](docs/EndpointIPAMConfig.md)
 - [DocNodeApi.EndpointSettings](docs/EndpointSettings.md)
 - [DocNodeApi.Error](docs/Error.md)
 - [DocNodeApi.InlineResponse200](docs/InlineResponse200.md)
 - [DocNodeApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [DocNodeApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [DocNodeApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [DocNodeApi.Mount](docs/Mount.md)
 - [DocNodeApi.MountBindOptions](docs/MountBindOptions.md)
 - [DocNodeApi.MountTmpfsOptions](docs/MountTmpfsOptions.md)
 - [DocNodeApi.MountVolumeOptions](docs/MountVolumeOptions.md)
 - [DocNodeApi.MountVolumeOptionsDriverConfig](docs/MountVolumeOptionsDriverConfig.md)
 - [DocNodeApi.Port](docs/Port.md)
 - [DocNodeApi.Volume](docs/Volume.md)
 - [DocNodeApi.VolumeUsageData](docs/VolumeUsageData.md)


## Documentation for Authorization

 All endpoints do not require authorization.

