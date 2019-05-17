define(["./keyValuePersistenceStore","./logger"],function(a,b){"use strict";var c=function(b){a.call(this,b)};return c.prototype=new a,c.prototype.Init=function(a){return this._version=a&&a.version||"0",this._arrayStore={},Promise.resolve()},c.prototype._insert=function(a,b,c){var d={metadata:b,value:c};return this._arrayStore[a]=d,Promise.resolve()},c.prototype.removeByKey=function(a){b.log("Offline Persistence Toolkit arrayPersistenceStore: removeByKey() with key: "+a);var c=this;return this.findByKey(a).then(function(b){return b?(delete c._arrayStore[a],Promise.resolve(!0)):Promise.resolve(!1)})},c.prototype.keys=function(){b.log("Offline Persistence Toolkit arrayPersistenceStore: keys()");var a=Object.keys(this._arrayStore);return Promise.resolve(a)},c.prototype.getItem=function(a){b.log("Offline Persistence Toolkit arrayPersistenceStore: getItem() with key: "+a);var c=this._arrayStore[a];return c?Promise.resolve(c):Promise.resolve()},c});