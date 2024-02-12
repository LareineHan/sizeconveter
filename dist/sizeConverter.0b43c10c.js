// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"sizes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var sizesData = [{
  region: 'US(M)',
  sizes: [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22]
}, {
  region: 'US(W)',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5]
}, {
  region: 'UK',
  sizes: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21]
}, {
  region: 'MM / KO',
  sizes: [225, 230, 235, 235, 240, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 380, 385, 390, 395, 400]
}, {
  region: 'CM / JP',
  sizes: [22.5, 23, 23.5, 23.5, 24, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 31.5, 32, 32.5, 33, 33.5, 34, 34.5, 35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40]
}, {
  region: 'EU',
  sizes: [35.5, 36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48, 48.5, 49, 49.5, 50, 50.5, 51, 51.5, 52, 52.5, 53, 53.5, 54, 54.5, 55, 55.5, 56, 56.5]
}];
var _default = sizesData;
exports.default = _default;
},{}],"sizeConverter.js":[function(require,module,exports) {
"use strict";

var _sizes = _interopRequireDefault(require("./sizes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
console.log(_sizes.default);
var selectedSize = 0;
document.addEventListener('DOMContentLoaded', function (event) {
  var buttons = document.querySelectorAll('.size-buttons-container button');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      buttons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      selectedSize = parseFloat(button.dataset.size); // Assign the selected size
    });
  });
});

function convertSize(sourceSize, sourceRegion, targetRegion) {
  // Find the source region object in sizesData
  var sourceRegionObj = _sizes.default.find(function (region) {
    return region.region === sourceRegion;
  });

  // Find the target region object in the source region's sizes
  var targetSizeObj = sourceRegionObj.sizes.find(function (sizeObj) {
    return sizeObj.region === targetRegion;
  });
  if (targetSizeObj) {
    var targetSize = targetSizeObj.sizes[sourceSize.toString()];
    if (targetSize) {
      return targetSize;
    }
  }
  return NaN;
}
function populateSizes(region, targetElementId) {
  var targetElement = document.getElementsByClassName(targetElementId)[0];
  targetElement.innerHTML = ''; // Clear existing buttons

  var sizes = getSizesForRegion(region);
  if (sizes) {
    sizes.forEach(function (size) {
      var button = document.createElement('button');
      button.innerHTML = size;
      button.value = size;
      button.addEventListener('click', function () {
        var _this = this;
        var sizeButtons = document.querySelectorAll('.size-buttons-container button');
        sizeButtons.forEach(function (button) {
          button.classList.toggle('active', button === _this);
        });
        selectedSize = this.value;
        convert();
      });
      targetElement.appendChild(button);
    });
  }
  setDefaultSize();

  // Add a refresh button
  var refreshButton = document.createElement('button');
  refreshButton.classList.add('btn', 'btn-primary', 'btn-sm');
  refreshButton.innerHTML = 'Refresh';
  refreshButton.addEventListener('click', function () {
    var sizeButtons = document.querySelectorAll('.size-buttons-container button');
    sizeButtons.forEach(function (button) {
      button.classList.remove('active');
    });
    selectedSize = 0; // Reset selected size to default
    var sourceRegionSelect = document.getElementById('source_region');
    var targetRegionSelect = document.getElementById('target_region');
    var output = document.getElementById('output');
    sourceRegionSelect.selectedIndex = 0; // Set source_region to default (index 0)
    targetRegionSelect.selectedIndex = 0; // Set target_region to default (index 0)
    output.innerHTML = ''; // Clear output
    populateSizes(sourceRegionSelect.value, 'size-button');
  });
  targetElement.appendChild(refreshButton);

  // Set the default option for target_region based on source_region
  var targetRegionSelect = document.getElementById('target_region');
  var sourceRegion = document.getElementById('source_region').value;
  var defaultOption = new Option('Select', '');
  targetRegionSelect.innerHTML = ''; // Clear existing options
  targetRegionSelect.add(defaultOption); // Add default option
  if (sourceRegion !== '') {
    var targetRegions = getTargetRegions(sourceRegion);
    targetRegions.forEach(function (region) {
      var option = new Option(region, region);
      targetRegionSelect.add(option);
    });
  }
}
function getTargetRegions(sourceRegion) {
  var targetRegions = {
    '미국 - 남성': ['유럽', '영국', 'MM / 한국', 'CM / 일본'],
    '미국 - 여성': ['유럽', '영국', 'MM / 한국', 'CM / 일본'],
    영국: ['미국 - 남성', '미국 - 여성', 'MM / 한국', 'CM / 일본'],
    'MM / 한국': ['미국 - 남성', '미국 - 여성', '영국', 'CM / 일본'],
    'CM / 일본': ['미국 - 남성', '미국 - 여성', '영국', 'MM / 한국'],
    유럽: ['미국 - 남성', '미국 - 여성', '영국', 'MM / 한국', 'CM / 일본']
  };
  return targetRegions[sourceRegion] || [];
}
function convert() {
  var sourceRegion = document.getElementById('source_region').value;
  var targetRegion = document.getElementById('target_region').value;
  if (sourceRegion === targetRegion) {
    alert('Source and target regions cannot be the same');
    document.getElementById('output').innerHTML = ''; // Clear the output
    return;
  }
  if (selectedSize == 0) {
    alert('Please select a size to convert');
    return;
  }

  // Update targetRegion value to match the regions in sizesData
  if (targetRegion === 'US') {
    targetRegion = '미국 - 남성';
  } else if (targetRegion === 'EU') {
    targetRegion = '유럽';
  } else if (targetRegion === 'UK') {
    targetRegion = '영국';
  } else if (targetRegion === 'KR') {
    targetRegion = 'MM / 한국';
  } else if (targetRegion === 'CN') {
    targetRegion = 'CM / 일본';
  }
  var convertedSize = convertSize(selectedSize, sourceRegion, targetRegion);
  if (isNaN(convertedSize)) {
    document.getElementById('output').innerHTML = 'Please select a target region';
  } else {
    document.getElementById('output').innerHTML = 'Converted Size: ' + convertedSize;
  }
}

// Populate the region select elements when the page loads

function getSizesForRegion(region) {
  var sizes = _sizes.default.find(function (data) {
    return data.region === region;
  });
  if (sizes) {
    return sizes.sizes;
  }
  return [];
}
function setDefaultSize() {
  var defaultSize = _sizes.default[0].sizes[3]; // Default size is the first size in the first region

  // Set the default size button as active
  var sizeButtons = document.querySelectorAll('.size-buttons-container button');
  sizeButtons.forEach(function (button) {
    if (parseFloat(button.value) === defaultSize) {
      button.classList.add('active');
      selectedSize = defaultSize;
    } else {
      button.classList.remove('active');
    }
  });
}
document.addEventListener('DOMContentLoaded', setDefaultSize);
window.onload = function () {
  var regions = ['US', 'EU', 'UK', 'KR', 'CN']; // Add your regions here

  regions.forEach(function (region) {
    var option = new Option(region, region);
    document.getElementById('source_region').add(option);
    document.getElementById('target_region').add(option.cloneNode(true)); // Clone the option for the target_region select element
  });

  populateSizes(regions[0], 'size-button'); // Default buttons for the first region
};
},{"./sizes.js":"sizes.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59196" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","sizeConverter.js"], null)
//# sourceMappingURL=/sizeConverter.0b43c10c.js.map