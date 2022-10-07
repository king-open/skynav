// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"epB2":[function(require,module,exports) {
// 1. 初始化数据
var hashA = init();
var keys = hashA['keys'];
var hash = hashA['hash'];

// 2. 生成键盘
// 遍历 keys，生成 kbd 标签
generateKeyboard(keys, hash);

// 3. 监听用户动作
listenToUser(hash);

// 下面是工具函数
function getFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name) || 'null');
}

function tag(tagName) {
  return document.createElement(tagName);
}

function createSpan(textContent) {
  var span = tag('span');
  span.textContent = textContent;
  span.className = "text";
  return span;
}
function createButton(id) {
  var button = tag('button');
  button.textContent = '编辑';
  button.id = id;
  button.onclick = function (xzkjcnxlkcjlk) {
    // xzkjcnxlkcjlk['target'] 就是用户点击的元素
    var button2 = xzkjcnxlkcjlk['target'];
    var img2 = button2.previousSibling;
    var key = button2['id']; // q w e r t
    var x = prompt('给我一个网址'); // qq.com
    hash[key] = x; // hash 变更
    img2.src = 'http://' + x + '/favicon.ico';
    img2.onerror = function (xxx) {
      xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
    };
    localStorage.setItem('zzz', JSON.stringify(hash));
  };
  return button;
}
function createImage(domain) {
  var img = tag('img');
  if (domain) {
    img.src = 'http://' + domain + '/favicon.ico';
  } else {
    img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
  }
  img.onerror = function (xxx) {
    xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
  };
  return img;
}
function init() {
  var keys = {
    '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
    '1': { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9 },
    '2': { 0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7 },
    'length': 3
  };
  var hash = { 'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youtube.com', 'u': 'uc.com', 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'
    // 取出 localStorage 中的 zzz 对应的 hash
  };var hashInLocalStorage = getFromLocalStorage('zzz');
  if (hashInLocalStorage) {
    hash = hashInLocalStorage;
  }
  return {
    "keys": keys,
    "hash": hash
  };
}
function generateKeyboard(keys, hash) {
  for (var index = 0; index < keys['length']; index = index + 1) {
    var div = tag('div');
    div.className = 'row';

    main.appendChild(div);

    var row = keys[index]; // 第一个数组  第二个数组  第三个数组
    for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {
      var span = createSpan(row[index2]);

      var button = createButton(row[index2]);

      var img = createImage(hash[row[index2]]);

      var kbd = tag('kbd');
      kbd.className = 'key';

      kbd.appendChild(span);
      kbd.appendChild(img);
      kbd.appendChild(button);

      div.appendChild(kbd);
    }
  }
}
function listenToUser(hash) {
  document.onkeypress = function (xzkjcnxlkcjlk) {
    var key = xzkjcnxlkcjlk['key']; // q w e
    var website = hash[key];
    //location.href = 'http://'+website
    window.open('http://' + website, '_blank');
  };
}
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.b80593b0.map