// Automatically generated file.  Do not edit!
var d,
  g = this;
function aa(a) {
  return void 0 !== a;
}
function q(a) {
  return "string" == typeof a;
}
function r(a) {
  return "number" == typeof a;
}
function ba(a, b) {
  a = a.split(".");
  var c = g;
  a[0] in c ||
    "undefined" == typeof c.execScript ||
    c.execScript("var " + a[0]);
  for (var e; a.length && (e = a.shift()); )
    !a.length && aa(b)
      ? (c[e] = b)
      : (c = c[e] && c[e] !== Object.prototype[e] ? c[e] : (c[e] = {}));
}
function ca() {}
function da(a) {
  a.qn = void 0;
  a.Vd = function() {
    return a.qn ? a.qn : (a.qn = new a());
  };
}
function ea(a) {
  var b = typeof a;
  if ("object" == b)
    if (a) {
      if (a instanceof Array) return "array";
      if (a instanceof Object) return b;
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) return "object";
      if (
        "[object Array]" == c ||
        ("number" == typeof a.length &&
          "undefined" != typeof a.splice &&
          "undefined" != typeof a.propertyIsEnumerable &&
          !a.propertyIsEnumerable("splice"))
      )
        return "array";
      if (
        "[object Function]" == c ||
        ("undefined" != typeof a.call &&
          "undefined" != typeof a.propertyIsEnumerable &&
          !a.propertyIsEnumerable("call"))
      )
        return "function";
    } else return "null";
  else if ("function" == b && "undefined" == typeof a.call) return "object";
  return b;
}
function u(a) {
  return "array" == ea(a);
}
function fa(a) {
  var b = ea(a);
  return "array" == b || ("object" == b && "number" == typeof a.length);
}
function x(a) {
  return "function" == ea(a);
}
function ha(a) {
  var b = typeof a;
  return ("object" == b && null != a) || "function" == b;
}
function ia(a) {
  return a[ja] || (a[ja] = ++ka);
}
var ja = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ma(a, b, c) {
  if (!a) throw Error();
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, e);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function na(a, b, c) {
  na =
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? la
      : ma;
  return na.apply(null, arguments);
}
function oa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
function z(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.o = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.tA = function(a, c, h) {
    for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++)
      e[f - 2] = arguments[f];
    return b.prototype[c].apply(a, e);
  };
}
// Copyright 2013 Google Inc.  Apache License 2.0
var A = {};
A.Da = Object(null);
var pa;
var qa = Array.prototype.indexOf
    ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function(a, b) {
        if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  ra = Array.prototype.forEach
    ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c);
      }
    : function(a, b, c) {
        for (var e = a.length, f = q(a) ? a.split("") : a, h = 0; h < e; h++)
          h in f && b.call(c, f[h], h, a);
      },
  sa = Array.prototype.filter
    ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0);
      }
    : function(a, b) {
        for (
          var c = a.length, e = [], f = 0, h = q(a) ? a.split("") : a, k = 0;
          k < c;
          k++
        )
          if (k in h) {
            var l = h[k];
            b.call(void 0, l, k, a) && (e[f++] = l);
          }
        return e;
      },
  ta = Array.prototype.map
    ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c);
      }
    : function(a, b, c) {
        for (
          var e = a.length, f = Array(e), h = q(a) ? a.split("") : a, k = 0;
          k < e;
          k++
        )
          k in h && (f[k] = b.call(c, h[k], k, a));
        return f;
      },
  ua = Array.prototype.every
    ? function(a, b) {
        return Array.prototype.every.call(a, b, void 0);
      }
    : function(a, b) {
        for (var c = a.length, e = q(a) ? a.split("") : a, f = 0; f < c; f++)
          if (f in e && !b.call(void 0, e[f], f, a)) return !1;
        return !0;
      };
function va(a, b, c) {
  a: {
    for (var e = a.length, f = q(a) ? a.split("") : a, h = 0; h < e; h++)
      if (h in f && b.call(c, f[h], h, a)) {
        b = h;
        break a;
      }
    b = -1;
  }
  return 0 > b ? null : q(a) ? a.charAt(b) : a[b];
}
function wa(a, b) {
  return 0 <= qa(a, b);
}
function xa(a, b) {
  b = qa(a, b);
  var c;
  (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
  return c;
}
function za(a) {
  return Array.prototype.concat.apply([], arguments);
}
function Aa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e];
    return c;
  }
  return [];
}
function Ba(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var e = arguments[c];
    if (fa(e)) {
      var f = a.length || 0,
        h = e.length || 0;
      a.length = f + h;
      for (var k = 0; k < h; k++) a[f + k] = e[k];
    } else a.push(e);
  }
}
function Ca(a, b, c, e) {
  Array.prototype.splice.apply(a, Da(arguments, 1));
}
function Da(a, b, c) {
  return 2 >= arguments.length
    ? Array.prototype.slice.call(a, b)
    : Array.prototype.slice.call(a, b, c);
}
function Ea(a, b) {
  return 0 == a.lastIndexOf(b, 0);
}
function Fa(a) {
  return /^[\s\xa0]*$/.test(a);
}
function Ga(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
}
var Ha = String.prototype.trim
  ? function(a) {
      return a.trim();
    }
  : function(a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
function Ia(a) {
  if (!Ja.test(a)) return a;
  -1 != a.indexOf("&") && (a = a.replace(Ka, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(La, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ma, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Oa, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Pa, "&#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Qa, "&#0;"));
  return a;
}
var Ka = /&/g,
  La = /</g,
  Ma = />/g,
  Oa = /"/g,
  Pa = /'/g,
  Qa = /\x00/g,
  Ja = /[\x00&<>"']/;
function Ra(a) {
  var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
  var c = g.document.createElement("div");
  return a.replace(Sa, function(a, f) {
    var e = b[a];
    if (e) return e;
    "#" == f.charAt(0) &&
      ((f = Number("0" + f.substr(1))),
      isNaN(f) || (e = String.fromCharCode(f)));
    e || ((c.innerHTML = a + " "), (e = c.firstChild.nodeValue.slice(0, -1)));
    return (b[a] = e);
  });
}
function Ta(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch (c) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        return "#" != c.charAt(0) || ((c = Number("0" + c.substr(1))), isNaN(c))
          ? a
          : String.fromCharCode(c);
    }
  });
}
var Sa = /&([^;\s<&]+);?/g;
function Ua(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function Va() {
  return "background-color".replace(/\-([a-z])/g, function(a, b) {
    return b.toUpperCase();
  });
}
function Wa(a) {
  var b = q(void 0)
    ? "undefined"
        .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
        .replace(/\x08/g, "\\x08")
    : "\\s";
  return a.replace(
    new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"),
    function(a, b, f) {
      return b + f.toUpperCase();
    }
  );
}
var Xa;
a: {
  var Ya = g.navigator;
  if (Ya) {
    var Za = Ya.userAgent;
    if (Za) {
      Xa = Za;
      break a;
    }
  }
  Xa = "";
}
function B(a) {
  return -1 != Xa.indexOf(a);
}
function $a(a, b, c) {
  for (var e in a) b.call(c, a[e], e, a);
}
var ab = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
  " "
);
function bb(a, b) {
  for (var c, e, f = 1; f < arguments.length; f++) {
    e = arguments[f];
    for (c in e) a[c] = e[c];
    for (var h = 0; h < ab.length; h++)
      (c = ab[h]), Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
  }
}
function cb(a) {
  var b = arguments.length;
  if (1 == b && u(arguments[0])) return cb.apply(null, arguments[0]);
  for (var c = {}, e = 0; e < b; e++) c[arguments[e]] = !0;
  return c;
}
function db(a) {
  db[" "](a);
  return a;
}
db[" "] = ca;
function eb(a, b) {
  var c = fb;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
}
var gb = B("Opera"),
  C = B("Trident") || B("MSIE"),
  hb = B("Edge"),
  D =
    B("Gecko") &&
    !(-1 != Xa.toLowerCase().indexOf("webkit") && !B("Edge")) &&
    !(B("Trident") || B("MSIE")) &&
    !B("Edge"),
  E = -1 != Xa.toLowerCase().indexOf("webkit") && !B("Edge"),
  ib = E && B("Mobile"),
  jb = B("Macintosh"),
  kb = B("Android"),
  lb = B("iPhone") && !B("iPod") && !B("iPad"),
  mb = B("iPad");
function nb() {
  var a = g.document;
  return a ? a.documentMode : void 0;
}
var ob;
a: {
  var pb = "",
    qb = (function() {
      var a = Xa;
      if (D) return /rv:([^\);]+)(\)|;)/.exec(a);
      if (hb) return /Edge\/([\d\.]+)/.exec(a);
      if (C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (E) return /WebKit\/(\S+)/.exec(a);
      if (gb) return /(?:Version)[ \/]?(\S+)/.exec(a);
    })();
  qb && (pb = qb ? qb[1] : "");
  if (C) {
    var rb = nb();
    if (null != rb && rb > parseFloat(pb)) {
      ob = String(rb);
      break a;
    }
  }
  ob = pb;
}
var fb = {};
function sb(a) {
  return eb(a, function() {
    for (
      var b = 0,
        c = Ha(String(ob)).split("."),
        e = Ha(String(a)).split("."),
        f = Math.max(c.length, e.length),
        h = 0;
      0 == b && h < f;
      h++
    ) {
      var k = c[h] || "",
        l = e[h] || "";
      do {
        k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
        l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
        if (0 == k[0].length && 0 == l[0].length) break;
        b =
          Ua(
            0 == k[1].length ? 0 : parseInt(k[1], 10),
            0 == l[1].length ? 0 : parseInt(l[1], 10)
          ) ||
          Ua(0 == k[2].length, 0 == l[2].length) ||
          Ua(k[2], l[2]);
        k = k[3];
        l = l[3];
      } while (0 == b);
    }
    return 0 <= b;
  });
}
var tb;
var ub = g.document;
tb =
  ub && C
    ? nb() || ("CSS1Compat" == ub.compatMode ? parseInt(ob, 10) : 5)
    : void 0;
var vb = !C || 9 <= Number(tb),
  wb = !C || 9 <= Number(tb),
  xb = C && !sb("9"),
  yb =
    "ontouchstart" in g ||
    !!(
      g.document &&
      document.documentElement &&
      "ontouchstart" in document.documentElement
    ) ||
    !(
      !g.navigator ||
      (!g.navigator.maxTouchPoints && !g.navigator.msMaxTouchPoints)
    ),
  zb = "PointerEvent" in g,
  Ab =
    "MSPointerEvent" in g && !(!g.navigator || !g.navigator.msPointerEnabled),
  Bb = (function() {
    if (!g.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function() {
          a = !0;
        }
      });
    g.addEventListener("test", ca, b);
    g.removeEventListener("test", ca, b);
    return a;
  })();
function Cb() {
  0 != Db && (Eb[ia(this)] = this);
  this.hh = this.hh;
  this.Fe = this.Fe;
}
var Db = 0,
  Eb = {};
Cb.prototype.hh = !1;
Cb.prototype.A = function() {
  if (!this.hh && ((this.hh = !0), this.Ka(), 0 != Db)) {
    var a = ia(this);
    if (0 != Db && this.Fe && 0 < this.Fe.length)
      throw Error(
        this +
          " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
      );
    delete Eb[a];
  }
};
function Fb(a, b) {
  a.hh
    ? aa(void 0)
      ? b.call(void 0)
      : b()
    : (a.Fe || (a.Fe = []), a.Fe.push(aa(void 0) ? na(b, void 0) : b));
}
Cb.prototype.Ka = function() {
  if (this.Fe) for (; this.Fe.length; ) this.Fe.shift()();
};
function Gb(a) {
  a && "function" == typeof a.A && a.A();
}
function Hb(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.xg = !1;
  this.Or = !0;
}
Hb.prototype.stopPropagation = function() {
  this.xg = !0;
};
Hb.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Or = !1;
};
function Ib(a) {
  return E ? "webkit" + a : gb ? "o" + a.toLowerCase() : a.toLowerCase();
}
var Jb = {
    jx: "click",
    Jz: "rightclick",
    ux: "dblclick",
    Vg: "mousedown",
    Wg: "mouseup",
    $h: "mouseover",
    Zh: "mouseout",
    Zs: "mousemove",
    Xs: "mouseenter",
    Ys: "mouseleave",
    Ug: "mousecancel",
    Oz: "selectionchange",
    Pz: "selectstart",
    pA: "wheel",
    ly: "keypress",
    ky: "keydown",
    ny: "keyup",
    gx: "blur",
    Zx: "focus",
    vx: "deactivate",
    $x: "focusin",
    ay: "focusout",
    Sg: "change",
    Gz: "reset",
    Nz: "select",
    Xz: "submit",
    iy: "input",
    Cz: "propertychange",
    Mx: "dragstart",
    Hx: "drag",
    Jx: "dragenter",
    Lx: "dragover",
    Kx: "dragleave",
    Rx: "drop",
    Ix: "dragend",
    eA: "touchstart",
    dA: "touchmove",
    cA: "touchend",
    bA: "touchcancel",
    Zw: "beforeunload",
    ox: "consolemessage",
    px: "contextmenu",
    wx: "devicechange",
    xx: "devicemotion",
    yx: "deviceorientation",
    Bx: "DOMContentLoaded",
    Wx: "error",
    hy: "help",
    oy: "load",
    xy: "losecapture",
    lz: "orientationchange",
    Ez: "readystatechange",
    Hz: "resize",
    Kz: "scroll",
    gA: "unload",
    hx: "canplay",
    ix: "canplaythrough",
    Tx: "durationchange",
    Ux: "emptied",
    Vx: "ended",
    sy: "loadeddata",
    ty: "loadedmetadata",
    pz: "pause",
    qz: "play",
    rz: "playing",
    Dz: "ratechange",
    Lz: "seeked",
    Mz: "seeking",
    Uz: "stalled",
    Yz: "suspend",
    aA: "timeupdate",
    nA: "volumechange",
    oA: "waiting",
    Tz: "sourceopen",
    Sz: "sourceended",
    Rz: "sourceclosed",
    Lw: "abort",
    iA: "update",
    lA: "updatestart",
    jA: "updateend",
    gy: "hashchange",
    mz: "pagehide",
    nz: "pageshow",
    Bz: "popstate",
    sx: "copy",
    oz: "paste",
    tx: "cut",
    Tw: "beforecopy",
    Uw: "beforecut",
    Xw: "beforepaste",
    Ty: "online",
    Sy: "offline",
    zy: "message",
    nx: "connect",
    jy: "install",
    Mw: "activate",
    Yx: "fetch",
    by: "foreignfetch",
    Ay: "messageerror",
    Vz: "statechange",
    kA: "updatefound",
    qx: "controllerchange",
    Rw: Ib("AnimationStart"),
    Pw: Ib("AnimationEnd"),
    Qw: Ib("AnimationIteration"),
    fA: Ib("TransitionEnd"),
    uz: "pointerdown",
    Az: "pointerup",
    sz: "pointercancel",
    xz: "pointermove",
    zz: "pointerover",
    yz: "pointerout",
    vz: "pointerenter",
    wz: "pointerleave",
    ey: "gotpointercapture",
    yy: "lostpointercapture",
    By: "MSGestureChange",
    Cy: "MSGestureEnd",
    Dy: "MSGestureHold",
    Ey: "MSGestureStart",
    Fy: "MSGestureTap",
    Gy: "MSGotPointerCapture",
    Hy: "MSInertiaStart",
    Iy: "MSLostPointerCapture",
    Jy: "MSPointerCancel",
    Ky: "MSPointerDown",
    Ly: "MSPointerEnter",
    My: "MSPointerHover",
    Ny: "MSPointerLeave",
    Oy: "MSPointerMove",
    Py: "MSPointerOut",
    Qy: "MSPointerOver",
    Ry: "MSPointerUp",
    Zz: "text",
    $z: C ? "textinput" : "textInput",
    lx: "compositionstart",
    mx: "compositionupdate",
    kx: "compositionend",
    Vw: "beforeinput",
    Xx: "exit",
    py: "loadabort",
    qy: "loadcommit",
    uy: "loadredirect",
    vy: "loadstart",
    wy: "loadstop",
    Iz: "responsive",
    Qz: "sizechanged",
    hA: "unresponsive",
    mA: "visibilitychange",
    Wz: "storage",
    Gx: "DOMSubtreeModified",
    Cx: "DOMNodeInserted",
    Ex: "DOMNodeRemoved",
    Fx: "DOMNodeRemovedFromDocument",
    Dx: "DOMNodeInsertedIntoDocument",
    zx: "DOMAttrModified",
    Ax: "DOMCharacterDataModified",
    Yw: "beforeprint",
    Ow: "afterprint",
    Ww: "beforeinstallprompt",
    Sw: "appinstalled"
  },
  Kb = {
    Vg: zb ? "pointerdown" : Ab ? "MSPointerDown" : "mousedown",
    Wg: zb ? "pointerup" : Ab ? "MSPointerUp" : "mouseup",
    Ug: zb ? "pointercancel" : Ab ? "MSPointerCancel" : "mousecancel",
    Zs: zb ? "pointermove" : Ab ? "MSPointerMove" : "mousemove",
    $h: zb ? "pointerover" : Ab ? "MSPointerOver" : "mouseover",
    Zh: zb ? "pointerout" : Ab ? "MSPointerOut" : "mouseout",
    Xs: zb ? "pointerenter" : Ab ? "MSPointerEnter" : "mouseenter",
    Ys: zb ? "pointerleave" : Ab ? "MSPointerLeave" : "mouseleave"
  };
function Lb(a, b) {
  Hb.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.Pn = !1;
  this.pointerId = 0;
  this.pointerType = "";
  this.Qd = null;
  a && this.W(a, b);
}
z(Lb, Hb);
var Mb = [1, 4, 2],
  Nb = { 2: "touch", 3: "pen", 4: "mouse" };
Lb.prototype.W = function(a, b) {
  var c = (this.type = a.type),
    e = a.changedTouches ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  if ((b = a.relatedTarget)) {
    if (D) {
      a: {
        try {
          db(b.nodeName);
          var f = !0;
          break a;
        } catch (h) {}
        f = !1;
      }
      f || (b = null);
    }
  } else
    "mouseover" == c
      ? (b = a.fromElement)
      : "mouseout" == c && (b = a.toElement);
  this.relatedTarget = b;
  null === e
    ? ((this.offsetX = E || void 0 !== a.offsetX ? a.offsetX : a.layerX),
      (this.offsetY = E || void 0 !== a.offsetY ? a.offsetY : a.layerY),
      (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
      (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
      (this.screenX = a.screenX || 0),
      (this.screenY = a.screenY || 0))
    : ((this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX),
      (this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY),
      (this.screenX = e.screenX || 0),
      (this.screenY = e.screenY || 0));
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.key = a.key || "";
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.Pn = jb ? a.metaKey : a.ctrlKey;
  this.pointerId = a.pointerId || 0;
  this.pointerType = q(a.pointerType) ? a.pointerType : Nb[a.pointerType] || "";
  this.state = a.state;
  this.Qd = a;
  a.defaultPrevented && this.preventDefault();
};
function Ob(a) {
  return vb
    ? 0 == a.Qd.button
    : "click" == a.type
    ? !0
    : !!(a.Qd.button & Mb[0]);
}
Lb.prototype.stopPropagation = function() {
  Lb.o.stopPropagation.call(this);
  this.Qd.stopPropagation
    ? this.Qd.stopPropagation()
    : (this.Qd.cancelBubble = !0);
};
Lb.prototype.preventDefault = function() {
  Lb.o.preventDefault.call(this);
  var a = this.Qd;
  if (a.preventDefault) a.preventDefault();
  else if (((a.returnValue = !1), xb))
    try {
      if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
    } catch (b) {}
};
var Pb = "closure_listenable_" + ((1e6 * Math.random()) | 0);
function Qb(a) {
  return !(!a || !a[Pb]);
}
var Rb = 0;
function Sb(a, b, c, e, f) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!e;
  this.Vk = f;
  this.key = ++Rb;
  this.Mh = this.hk = !1;
}
function Tb(a) {
  a.Mh = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.Vk = null;
}
function Ub(a) {
  this.src = a;
  this.ec = {};
  this.Lj = 0;
}
Ub.prototype.add = function(a, b, c, e, f) {
  var h = a.toString();
  a = this.ec[h];
  a || ((a = this.ec[h] = []), this.Lj++);
  var k = Vb(a, b, e, f);
  -1 < k
    ? ((b = a[k]), c || (b.hk = !1))
    : ((b = new Sb(b, this.src, h, !!e, f)), (b.hk = c), a.push(b));
  return b;
};
Ub.prototype.remove = function(a, b, c, e) {
  a = a.toString();
  if (!(a in this.ec)) return !1;
  var f = this.ec[a];
  b = Vb(f, b, c, e);
  return -1 < b
    ? (Tb(f[b]),
      Array.prototype.splice.call(f, b, 1),
      0 == f.length && (delete this.ec[a], this.Lj--),
      !0)
    : !1;
};
function Wb(a, b) {
  var c = b.type;
  c in a.ec &&
    xa(a.ec[c], b) &&
    (Tb(b), 0 == a.ec[c].length && (delete a.ec[c], a.Lj--));
}
Ub.prototype.removeAll = function(a) {
  a = a && a.toString();
  var b = 0,
    c;
  for (c in this.ec)
    if (!a || c == a) {
      for (var e = this.ec[c], f = 0; f < e.length; f++) ++b, Tb(e[f]);
      delete this.ec[c];
      this.Lj--;
    }
  return b;
};
Ub.prototype.Gi = function(a, b, c, e) {
  a = this.ec[a.toString()];
  var f = -1;
  a && (f = Vb(a, b, c, e));
  return -1 < f ? a[f] : null;
};
function Vb(a, b, c, e) {
  for (var f = 0; f < a.length; ++f) {
    var h = a[f];
    if (!h.Mh && h.listener == b && h.capture == !!c && h.Vk == e) return f;
  }
  return -1;
}
var Xb = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Yb = {},
  Zb = 0;
function $b(a, b, c, e, f) {
  if (e && e.once) return ac(a, b, c, e, f);
  if (u(b)) {
    for (var h = 0; h < b.length; h++) $b(a, b[h], c, e, f);
    return null;
  }
  c = bc(c);
  return Qb(a)
    ? a.ia(b, c, ha(e) ? !!e.capture : !!e, f)
    : cc(a, b, c, !1, e, f);
}
function cc(a, b, c, e, f, h) {
  if (!b) throw Error("Invalid event type");
  var k = ha(f) ? !!f.capture : !!f,
    l = dc(a);
  l || (a[Xb] = l = new Ub(a));
  c = l.add(b, c, e, k, h);
  if (c.proxy) return c;
  e = ec();
  c.proxy = e;
  e.src = a;
  e.listener = c;
  if (a.addEventListener)
    Bb || (f = k),
      void 0 === f && (f = !1),
      a.addEventListener(b.toString(), e, f);
  else if (a.attachEvent) a.attachEvent(fc(b.toString()), e);
  else if (a.addListener && a.removeListener) a.addListener(e);
  else throw Error("addEventListener and attachEvent are unavailable.");
  Zb++;
  return c;
}
function ec() {
  var a = gc,
    b = wb
      ? function(c) {
          return a.call(b.src, b.listener, c);
        }
      : function(c) {
          c = a.call(b.src, b.listener, c);
          if (!c) return c;
        };
  return b;
}
function ac(a, b, c, e, f) {
  if (u(b)) {
    for (var h = 0; h < b.length; h++) ac(a, b[h], c, e, f);
    return null;
  }
  c = bc(c);
  return Qb(a)
    ? a.Vq(b, c, ha(e) ? !!e.capture : !!e, f)
    : cc(a, b, c, !0, e, f);
}
function hc(a, b, c, e, f) {
  if (u(b)) for (var h = 0; h < b.length; h++) hc(a, b[h], c, e, f);
  else
    (e = ha(e) ? !!e.capture : !!e),
      (c = bc(c)),
      Qb(a)
        ? a.Vc(b, c, e, f)
        : a && (a = dc(a)) && (b = a.Gi(b, c, e, f)) && ic(b);
}
function ic(a) {
  if (!r(a) && a && !a.Mh) {
    var b = a.src;
    if (Qb(b)) Wb(b.we, a);
    else {
      var c = a.type,
        e = a.proxy;
      b.removeEventListener
        ? b.removeEventListener(c, e, a.capture)
        : b.detachEvent
        ? b.detachEvent(fc(c), e)
        : b.addListener && b.removeListener && b.removeListener(e);
      Zb--;
      (c = dc(b))
        ? (Wb(c, a), 0 == c.Lj && ((c.src = null), (b[Xb] = null)))
        : Tb(a);
    }
  }
}
function fc(a) {
  return a in Yb ? Yb[a] : (Yb[a] = "on" + a);
}
function jc(a, b, c, e) {
  var f = !0;
  if ((a = dc(a)))
    if ((b = a.ec[b.toString()]))
      for (b = b.concat(), a = 0; a < b.length; a++) {
        var h = b[a];
        h && h.capture == c && !h.Mh && ((h = kc(h, e)), (f = f && !1 !== h));
      }
  return f;
}
function kc(a, b) {
  var c = a.listener,
    e = a.Vk || a.src;
  a.hk && ic(a);
  return c.call(e, b);
}
function gc(a, b) {
  if (a.Mh) return !0;
  if (!wb) {
    if (!b)
      a: {
        b = ["window", "event"];
        for (var c = g, e = 0; e < b.length; e++)
          if (((c = c[b[e]]), null == c)) {
            b = null;
            break a;
          }
        b = c;
      }
    e = b;
    b = new Lb(e, this);
    c = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode)
          try {
            e.keyCode = -1;
            break a;
          } catch (k) {
            f = !0;
          }
        if (f || void 0 == e.returnValue) e.returnValue = !0;
      }
      e = [];
      for (f = b.currentTarget; f; f = f.parentNode) e.push(f);
      a = a.type;
      for (f = e.length - 1; !b.xg && 0 <= f; f--) {
        b.currentTarget = e[f];
        var h = jc(e[f], a, !0, b);
        c = c && h;
      }
      for (f = 0; !b.xg && f < e.length; f++)
        (b.currentTarget = e[f]), (h = jc(e[f], a, !1, b)), (c = c && h);
    }
    return c;
  }
  return kc(a, new Lb(b, this));
}
function dc(a) {
  a = a[Xb];
  return a instanceof Ub ? a : null;
}
var lc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function bc(a) {
  if (x(a)) return a;
  a[lc] ||
    (a[lc] = function(b) {
      return a.handleEvent(b);
    });
  return a[lc];
}
// Copyright 2016 Google Inc.  Apache License 2.0
A.Touch = {};
A.Touch.Jj = null;
A.Touch.Kd = {};
g.PointerEvent
  ? (A.Touch.Kd = {
      mousedown: ["pointerdown"],
      mouseenter: ["pointerenter"],
      mouseleave: ["pointerleave"],
      mousemove: ["pointermove"],
      mouseout: ["pointerout"],
      mouseover: ["pointerover"],
      mouseup: ["pointerup", "pointercancel"],
      touchend: ["pointerup"],
      touchcancel: ["pointercancel"]
    })
  : yb &&
    (A.Touch.Kd = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"]
    });
A.ll = 0;
A.yv = function(a, b) {
  A.rf();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (A.ll = setTimeout(function() {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      b && mc(b, a);
    }, A.Vs));
};
A.rf = function() {
  A.ll && (clearTimeout(A.ll), (A.ll = 0));
};
A.Touch.ue = function() {
  A.Touch.Jj = null;
};
A.Touch.yo = function(a) {
  return !A.Touch.mv(a) || A.Touch.Lt(a);
};
A.Touch.Rk = function(a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 != a.changedTouches[0].identifier &&
      null != a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
A.Touch.Lt = function(a) {
  var b = A.Touch.Rk(a);
  return void 0 != A.Touch.Jj && null != A.Touch.Jj
    ? A.Touch.Jj == b
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((A.Touch.Jj = b), !0)
    : !1;
};
A.Touch.kw = function(a) {
  if (Ea(a.type, "touch")) {
    var b = a.changedTouches[0];
    a.clientX = b.clientX;
    a.clientY = b.clientY;
  }
};
A.Touch.mv = function(a) {
  return Ea(a.type, "touch") || Ea(a.type, "mouse") || Ea(a.type, "pointer");
};
A.Touch.hl = function(a) {
  return Ea(a.type, "touch") || Ea(a.type, "pointer");
};
A.Touch.nw = function(a) {
  var b = [];
  if (a.changedTouches)
    for (var c = 0; c < a.changedTouches.length; c++)
      b[c] = {
        type: a.type,
        changedTouches: [a.changedTouches[c]],
        target: a.target,
        stopPropagation: function() {
          a.stopPropagation();
        },
        preventDefault: function() {
          a.preventDefault();
        }
      };
  else b.push(a);
  return b;
};
function nc(a) {
  a %= 360;
  return 0 > 360 * a ? a + 360 : a;
}
function F(a, b) {
  this.x = aa(a) ? a : 0;
  this.y = aa(b) ? b : 0;
}
d = F.prototype;
d.clone = function() {
  return new F(this.x, this.y);
};
function oc(a, b) {
  return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1;
}
function pc(a, b) {
  var c = a.x - b.x;
  a = a.y - b.y;
  return Math.sqrt(c * c + a * a);
}
function qc(a, b) {
  return new F(a.x - b.x, a.y - b.y);
}
function rc(a, b) {
  return new F(a.x + b.x, a.y + b.y);
}
d.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
d.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
d.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
d.translate = function(a, b) {
  a instanceof F
    ? ((this.x += a.x), (this.y += a.y))
    : ((this.x += Number(a)), r(b) && (this.y += b));
  return this;
};
d.scale = function(a, b) {
  b = r(b) ? b : a;
  this.x *= a;
  this.y *= b;
  return this;
};
A.i = {};
A.i.Sk = "";
A.i.Rb = !0;
A.i.Jm = 0;
A.i.Yj = "create";
A.i.ax = A.i.Yj;
A.i.Xl = "delete";
A.i.bx = A.i.Xl;
A.i.Sg = "change";
A.i.$w = A.i.Sg;
A.i.ai = "move";
A.i.ex = A.i.ai;
A.i.cp = "var_create";
A.i.ep = "var_delete";
A.i.fp = "var_rename";
A.i.jm = "ui";
A.i.Mo = "comment_create";
A.i.No = "comment_delete";
A.i.Lo = "comment_change";
A.i.Oo = "comment_move";
A.i.Xh = [];
A.i.R = function(a) {
  A.i.isEnabled() && (A.i.Xh.length || setTimeout(A.i.Cu, 0), A.i.Xh.push(a));
};
A.i.Cu = function() {
  for (
    var a = A.i.filter(A.i.Xh, !0), b = (A.i.Xh.length = 0), c;
    (c = a[b]);
    b++
  ) {
    var e = sc[c.kc] || null;
    if (e) {
      var f = c;
      f.Rb &&
        (e.Ng.push(f), (e.qj.length = 0), e.Ng.length > e.Ws && e.Ng.unshift());
      for (var h = 0; (c = e.fc[h]); h++) c(f);
    }
  }
};
A.i.filter = function(a, b) {
  a = Aa(a);
  b || a.reverse();
  for (var c = [], e = Object.create(null), f = 0, h; (h = a[f]); f++)
    if (!h.xh()) {
      var k = [h.type, h.Jb, h.kc].join(" "),
        l = e[k];
      l
        ? h.type == A.i.ai
          ? ((l.tg = h.tg), (l.sg = h.sg), (l.tf = h.tf))
          : h.type == A.i.Sg && h.element == l.element && h.name == l.name
          ? (l.newValue = h.newValue)
          : h.type != A.i.jm ||
            "click" != h.element ||
            ("commentOpen" != l.element &&
              "mutatorOpen" != l.element &&
              "warningOpen" != l.element)
          ? ((e[k] = h), c.push(h))
          : (l.newValue = h.newValue)
        : ((e[k] = h), c.push(h));
    }
  a = c.filter(function(a) {
    return !a.xh();
  });
  b || a.reverse();
  for (f = 1; (h = a[f]); f++)
    h.type == A.i.Sg && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
A.i.Nt = function() {
  for (var a = 0, b; (b = A.i.Xh[a]); a++) b.Rb = !1;
};
A.i.disable = function() {
  A.i.Jm++;
};
A.i.enable = function() {
  A.i.Jm--;
};
A.i.isEnabled = function() {
  return 0 == A.i.Jm;
};
A.i.ac = function() {
  return A.i.Sk;
};
A.i.O = function(a) {
  A.i.Sk = "boolean" == typeof a ? (a ? A.h.Sd() : "") : a;
};
A.i.vq = function(a) {
  var b = [];
  a = tc(a, !1);
  for (var c = 0, e; (e = a[c]); c++) b[c] = e.id;
  return b;
};
A.i.aa = function(a, b) {
  switch (a.type) {
    case A.i.Yj:
      var c = new uc(null);
      break;
    case A.i.Xl:
      c = new vc(null);
      break;
    case A.i.Sg:
      c = new wc(null, "", "", "", "");
      break;
    case A.i.ai:
      c = new xc(null);
      break;
    case A.i.cp:
      c = new yc(null);
      break;
    case A.i.ep:
      c = new zc(null);
      break;
    case A.i.fp:
      c = new Ac(null, "");
      break;
    case A.i.jm:
      c = new Bc(null);
      break;
    case A.i.Mo:
      c = new Cc(null);
      break;
    case A.i.Lo:
      c = new Dc(null);
      break;
    case A.i.Oo:
      c = new Ec(null);
      break;
    case A.i.No:
      c = new Fc(null);
      break;
    default:
      throw "Unknown event type.";
  }
  c.aa(a);
  c.kc = b.id;
  return c;
};
A.i.pu = function(a) {
  if (a.type == A.i.ai || a.type == A.i.Yj) {
    var b = sc[a.kc] || null;
    if ((a = Gc(b, a.Jb)))
      if (a.getParent() && !a.getParent().disabled) {
        b = tc(a, !1);
        a = 0;
        for (var c; (c = b[a]); a++) c.Cf(!1);
      } else if ((a.L || a.X) && !b.ob()) {
        do a.Cf(!0), (a = Hc(a));
        while (a);
      }
  }
};
// Copyright 2018 Google Inc.  Apache License 2.0
function Ic() {
  this.kc = void 0;
  this.group = A.i.Sk;
  this.Rb = A.i.Rb;
}
Ic.prototype.ua = function() {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  return a;
};
Ic.prototype.aa = function(a) {
  this.group = a.group;
};
Ic.prototype.xh = function() {
  return !1;
};
Ic.prototype.run = function() {};
function Kc(a) {
  a = sc[a.kc] || null;
  if (!a)
    throw Error(
      "Workspace is null. Event must have been generated from real Blockly events."
    );
  return a;
}
function Lc(a) {
  Lc.o.constructor.call(this);
  this.Nf = a.ha();
  this.kc = a.s.id;
}
z(Lc, Ic);
Lc.prototype.ua = function() {
  var a = Lc.o.ua.call(this);
  a.varId = this.Nf;
  return a;
};
Lc.prototype.aa = function(a) {
  Lc.o.ua.call(this);
  this.Nf = a.varId;
};
function yc(a) {
  a && (yc.o.constructor.call(this, a), (this.Pg = a.type), (this.Og = a.name));
}
z(yc, Lc);
yc.prototype.type = A.i.cp;
yc.prototype.ua = function() {
  var a = yc.o.ua.call(this);
  a.varType = this.Pg;
  a.varName = this.Og;
  return a;
};
yc.prototype.aa = function(a) {
  yc.o.aa.call(this, a);
  this.Pg = a.varType;
  this.Og = a.varName;
};
yc.prototype.run = function(a) {
  var b = Kc(this);
  a ? b.ed(this.Og, this.Pg, this.Nf) : b.$f(this.Nf);
};
function zc(a) {
  a && (zc.o.constructor.call(this, a), (this.Pg = a.type), (this.Og = a.name));
}
z(zc, Lc);
zc.prototype.type = A.i.ep;
zc.prototype.ua = function() {
  var a = zc.o.ua.call(this);
  a.varType = this.Pg;
  a.varName = this.Og;
  return a;
};
zc.prototype.aa = function(a) {
  zc.o.aa.call(this, a);
  this.Pg = a.varType;
  this.Og = a.varName;
};
zc.prototype.run = function(a) {
  var b = Kc(this);
  a ? b.$f(this.Nf) : b.ed(this.Og, this.Pg, this.Nf);
};
function Ac(a, b) {
  a && (Ac.o.constructor.call(this, a), (this.Gn = a.name), (this.Cn = b));
}
z(Ac, Lc);
Ac.prototype.type = A.i.fp;
Ac.prototype.ua = function() {
  var a = Ac.o.ua.call(this);
  a.oldName = this.Gn;
  a.newName = this.Cn;
  return a;
};
Ac.prototype.aa = function(a) {
  Ac.o.aa.call(this, a);
  this.Gn = a.oldName;
  this.Cn = a.newName;
};
Ac.prototype.run = function(a) {
  var b = Kc(this);
  a ? b.Ag(this.Nf, this.Cn) : b.Ag(this.Nf, this.Gn);
};
// Copyright 2017 Google Inc.  Apache License 2.0
function Mc(a) {
  this.na = {};
  this.s = a;
}
d = Mc.prototype;
d.clear = function() {
  this.na = Object(null);
};
d.Zn = function(a, b) {
  var c = this.xd(b, a.type),
    e = Nc(this.s);
  A.i.O(!0);
  try {
    if (c && c.ha() != a.ha()) {
      var f = a.type;
      b != c.name && Oc(c, b, e);
      for (b = 0; b < e.length; b++)
        for (
          var h = void 0, k = e[b], l = a.ha(), m = c.ha(), n = 0;
          (h = k.Z[n]);
          n++
        )
          for (var p = 0, t; (t = h.Qa[p]); p++)
            t.Kh() && l == t.getValue() && t.setValue(m);
      A.i.R(new zc(a));
      this.na[f].splice(this.Ki(f).indexOf(a), 1);
    } else Oc(a, b, e);
  } finally {
    A.i.O(!1);
  }
};
d.Ag = function(a, b) {
  var c = this.Ae(a);
  if (!c) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.Zn(c, b);
};
function Oc(a, b, c) {
  A.i.R(new Ac(a, b));
  a.name = b;
  for (b = 0; b < c.length; b++)
    for (var e, f = c[b], h = a, k = 0; (e = f.Z[k]); k++)
      for (var l = 0, m; (m = e.Qa[l]); l++)
        m.Kh() && h.ha() == m.getValue() && m.Ab(h.name);
}
d.ed = function(a, b, c) {
  var e = this.xd(a, b);
  if (e) {
    if (c && e.ha() != c)
      throw Error(
        'Variable "' +
          a +
          '" is already in use and its id is "' +
          e.ha() +
          '" which conflicts with the passed in id, "' +
          c +
          '".'
      );
    return e;
  }
  if (c && this.Ae(c))
    throw Error('Variable id, "' + c + '", is already in use.');
  c = c || A.h.Sd();
  b = b || "";
  e = new Pc(this.s, a, b, c);
  this.na[b] ? this.na[b].push(e) : (this.na[b] = [e]);
  return e;
};
d.$f = function(a) {
  var b = this.Ae(a);
  if (b) {
    var c = b.name,
      e = this.cn(a);
    a = 0;
    for (var f; (f = e[a]); a++)
      if (
        "procedures_defnoreturn" == f.type ||
        "procedures_defreturn" == f.type
      ) {
        a = G(f, "NAME");
        c = A.g.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", c).replace(
          "%2",
          a
        );
        A.alert(c);
        return;
      }
    var h = this;
    1 < e.length
      ? ((c = A.g.DELETE_VARIABLE_CONFIRMATION.replace(
          "%1",
          String(e.length)
        ).replace("%2", c)),
        A.confirm(c, function(a) {
          a && h.tk(b, e);
        }))
      : h.tk(b, e);
  } else console.warn("Can't delete non-existent variable: " + a);
};
d.tk = function(a, b) {
  var c = A.i.ac();
  c || A.i.O(!0);
  try {
    for (var e = 0; e < b.length; e++) b[e].A(!0, !1);
    var f = this.na[a.type];
    b = 0;
    for (var h; (h = f[b]); b++)
      if (h.ha() == a.ha()) {
        f.splice(b, 1);
        A.i.R(new zc(a));
        break;
      }
  } finally {
    c || A.i.O(!1);
  }
};
d.xd = function(a, b) {
  if ((b = this.na[b || ""]))
    for (var c = 0, e; (e = b[c]); c++)
      if (e.name.toLowerCase() == a.toLowerCase()) return e;
  return null;
};
d.Ae = function(a) {
  for (var b = Object.keys(this.na), c = 0; c < b.length; c++)
    for (var e = b[c], f = 0, h; (h = this.na[e][f]); f++)
      if (h.ha() == a) return h;
  return null;
};
d.Ki = function(a) {
  return (a = this.na[a || ""]) ? a.slice() : [];
};
d.an = function() {
  for (var a = Object.keys(this.na), b = !1, c = 0; c < a.length; c++)
    "" == a[c] && (b = !0);
  b || a.push("");
  return a;
};
d.xe = function() {
  for (var a = [], b = Object.keys(this.na), c = 0; c < b.length; c++)
    a = a.concat(this.na[b[c]]);
  return a;
};
d.cn = function(a) {
  for (var b = [], c = Nc(this.s), e = 0; e < c.length; e++) {
    var f = Qc(c[e]);
    if (f) for (var h = 0; h < f.length; h++) f[h].ha() == a && b.push(c[e]);
  }
  return b;
};
function Rc(a) {
  this.sd = a.id;
  this.kc = a.s.id;
  this.group = A.i.Sk;
  this.Rb = A.i.Rb;
}
z(Rc, Ic);
Rc.prototype.ua = function() {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.sd && (a.commentId = this.sd);
  return a;
};
Rc.prototype.aa = function(a) {
  this.sd = a.commentId;
  this.group = a.group;
};
function Dc(a, b, c) {
  a && (Dc.o.constructor.call(this, a), (this.kr = b), (this.ul = c));
}
z(Dc, Rc);
d = Dc.prototype;
d.type = A.i.Lo;
d.ua = function() {
  var a = Dc.o.ua.call(this);
  a.newContents = this.ul;
  return a;
};
d.aa = function(a) {
  Dc.o.aa.call(this, a);
  this.ul = a.newValue;
};
d.xh = function() {
  return this.kr == this.ul;
};
d.run = function(a) {
  var b = Sc(Kc(this), this.sd);
  b
    ? b.ld(a ? this.ul : this.kr)
    : console.warn("Can't change non-existent comment: " + this.sd);
};
function Cc(a) {
  a && (Cc.o.constructor.call(this, a), (this.xml = a.Ij()));
}
z(Cc, Rc);
Cc.prototype.type = A.i.Mo;
Cc.prototype.ua = function() {
  var a = Cc.o.ua.call(this);
  a.xml = A.D.Hc(this.xml);
  return a;
};
Cc.prototype.aa = function(a) {
  Cc.o.aa.call(this, a);
  this.xml = A.D.Sc("<xml>" + a.xml + "</xml>").firstChild;
};
Cc.prototype.run = function(a) {
  var b = Kc(this);
  a
    ? ((a = H("xml")), a.appendChild(this.xml), A.D.ve(a, b))
    : (b = Sc(b, this.sd))
    ? b.A(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + this.sd);
};
function Fc(a) {
  a && (Fc.o.constructor.call(this, a), (this.xml = a.Ij()));
}
z(Fc, Rc);
Fc.prototype.type = A.i.No;
Fc.prototype.ua = function() {
  return Fc.o.ua.call(this);
};
Fc.prototype.aa = function(a) {
  Fc.o.aa.call(this, a);
};
Fc.prototype.run = function(a) {
  var b = Kc(this);
  a
    ? (b = Sc(b, this.sd))
      ? b.A(!1, !1)
      : console.warn("Can't uncreate non-existent comment: " + this.sd)
    : ((a = H("xml")), a.appendChild(this.xml), A.D.ve(a, b));
};
function Ec(a) {
  a &&
    (Ec.o.constructor.call(this, a),
    (this.wm = a),
    (this.Fn = a.Xc.clone()),
    (this.rg = null));
}
z(Ec, Rc);
d = Ec.prototype;
d.He = function() {
  if (!this.wm)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.rg = this.wm.Xc.clone();
  this.wm = null;
};
d.type = A.i.Oo;
d.ua = function() {
  var a = Ec.o.ua.call(this);
  this.rg &&
    (a.newCoordinate = Math.round(this.rg.x) + "," + Math.round(this.rg.y));
  return a;
};
d.aa = function(a) {
  Ec.o.aa.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.rg = new F(parseFloat(a[0]), parseFloat(a[1]))));
};
d.xh = function() {
  return oc(this.Fn, this.rg);
};
d.run = function(a) {
  var b = Sc(Kc(this), this.sd);
  if (b) {
    a = a ? this.rg : this.Fn;
    var c = b.Xc.clone();
    b.moveBy(a.x - c.x, a.y - c.y);
  } else console.warn("Can't move non-existent comment: " + this.sd);
};
function Tc(a, b, c, e, f) {
  this.id = f && !Sc(a, f) ? f : A.h.Sd();
  a.Rh.push(this);
  a.mk[this.id] &&
    console.warn(
      'Overriding an existing comment on this workspace, with id "' +
        this.id +
        '"'
    );
  a.mk[this.id] = this;
  this.Xc = new F(0, 0);
  this.xa = c;
  this.ba = e;
  this.s = a;
  this.u = a.u;
  this.kj = this.wi = !0;
  this.Gc = b;
  this.Nq = !0;
  Uc(this);
}
d = Tc.prototype;
d.A = function() {
  if (this.s) {
    A.i.isEnabled() && A.i.R(new Fc(this));
    var a = this.s;
    if (!xa(a.Rh, this))
      throw "Comment not present in workspace's list of top-most comments.";
    delete a.mk[this.id];
    this.s = null;
  }
};
d.ph = function() {
  return this.xa;
};
d.Lc = function() {
  return this.ba;
};
d.moveBy = function(a, b) {
  var c = new Ec(this);
  this.Xc.translate(a, b);
  c.He();
  A.i.R(c);
};
d.Ob = function() {
  return this.wi && !(this.s && this.s.options.readOnly);
};
d.vj = function(a) {
  this.wi = a;
};
d.$d = function() {
  return this.kj && !(this.s && this.s.options.readOnly);
};
d.Dg = function(a) {
  this.kj = a;
};
d.tc = function() {
  return this.Gc;
};
d.ld = function(a) {
  this.Gc != a && (A.i.R(new Dc(this, this.Gc, a)), (this.Gc = a));
};
d.Ij = function(a) {
  a = Vc(this, a);
  a.setAttribute("x", Math.round(this.Xc.x));
  a.setAttribute("y", Math.round(this.Xc.y));
  a.setAttribute("h", this.xa);
  a.setAttribute("w", this.ba);
  return a;
};
function Vc(a, b) {
  var c = H("comment");
  b || c.setAttribute("id", a.id);
  c.textContent = a.tc();
  return c;
}
function Uc(a) {
  if (A.i.isEnabled()) {
    var b = A.i.ac();
    b || A.i.O(!0);
    try {
      A.i.R(new Cc(a));
    } finally {
      b || A.i.O(!1);
    }
  }
}
function Wc(a) {
  var b = a.getAttribute("h"),
    c = a.getAttribute("w");
  return {
    id: a.getAttribute("id"),
    Bq: b ? parseInt(b, 10) : 100,
    ss: c ? parseInt(c, 10) : 100,
    x: parseInt(a.getAttribute("x"), 10),
    y: parseInt(a.getAttribute("y"), 10),
    content: a.textContent
  };
}
// Copyright 2012 Google Inc.  Apache License 2.0
function Xc(a) {
  this.id = A.h.Sd();
  sc[this.id] = this;
  this.options = a || {};
  this.u = !!this.options.u;
  this.Yd = !!this.options.Yd;
  this.wa = this.options.wa;
  this.Qh = [];
  this.Rh = [];
  this.mk = Object.create(null);
  this.fc = [];
  this.Ng = [];
  this.qj = [];
  this.pm = Object.create(null);
  this.na = new Mc(this);
  this.Jh = null;
}
d = Xc.prototype;
d.U = !1;
d.rn = !1;
d.Ws = 1024;
d.A = function() {
  this.fc.length = 0;
  this.clear();
  delete sc[this.id];
};
function Yc(a, b) {
  if (!xa(a.Qh, b))
    throw "Block not present in workspace's list of top-most blocks.";
}
function I(a, b) {
  var c = [].concat(a.Qh);
  if (b && 1 < c.length) {
    var e = Math.sin((3 * Math.PI) / 180);
    a.u && (e *= -1);
    c.sort(function(a, b) {
      a = a.la();
      b = b.la();
      return a.y + e * a.x - (b.y + e * b.x);
    });
  }
  return c;
}
function Zc(a, b) {
  var c = [].concat(a.Rh);
  if (b && 1 < c.length) {
    var e = Math.sin((3 * Math.PI) / 180);
    a.u && (e *= -1);
    c.sort(function(a, b) {
      a = a.la();
      b = b.la();
      return a.y + e * a.x - (b.y + e * b.x);
    });
  }
  return c;
}
function Nc(a) {
  var b = I(a, !1);
  for (a = 0; a < b.length; a++) b.push.apply(b, b[a].df(!1));
  return b;
}
d.clear = function() {
  this.rn = !0;
  try {
    var a = A.i.ac();
    for (a || A.i.O(!0); this.Qh.length; ) this.Qh[0].A();
    for (; this.Rh.length; ) this.Rh[this.Rh.length - 1].A();
    a || A.i.O(!1);
    this.na.clear();
    this.Jh && this.Jh.clear();
  } finally {
    this.rn = !1;
  }
};
d.Ag = function(a, b) {
  this.na.Ag(a, b);
};
d.ed = function(a, b, c) {
  return this.na.ed(a, b, c);
};
d.cn = function(a) {
  return this.na.cn(a);
};
d.$f = function(a) {
  this.na.$f(a);
};
d.tk = function(a, b) {
  this.na.tk(a, b);
};
d.xd = function(a, b) {
  return this.na.xd(a, b);
};
d.Ae = function(a) {
  return this.na.Ae(a);
};
d.Ki = function(a) {
  return this.na.Ki(a);
};
d.an = function() {
  return this.na.an();
};
d.xe = function() {
  return this.na.xe();
};
d.Lc = function() {
  return 0;
};
d.lj = function(a, b) {
  return new $c(this, a, b);
};
function ad(a) {
  return isNaN(a.options.Xq) ? Infinity : a.options.Xq - Nc(a).length;
}
d.Jo = function(a) {
  var b = a ? this.qj : this.Ng,
    c = a ? this.Ng : this.qj,
    e = b.pop();
  if (e) {
    for (var f = [e]; b.length && e.group && e.group == b[b.length - 1].group; )
      f.push(b.pop());
    for (b = 0; (e = f[b]); b++) c.push(e);
    f = A.i.filter(f, a);
    A.i.Rb = !1;
    try {
      for (b = 0; (e = f[b]); b++) e.run(a);
    } finally {
      A.i.Rb = !0;
    }
  }
};
d.zp = function() {
  this.Ng.length = 0;
  this.qj.length = 0;
  A.i.Nt();
};
d.oc = function(a) {
  this.fc.push(a);
  return a;
};
d.xf = function(a) {
  xa(this.fc, a);
};
function Gc(a, b) {
  return a.pm[b] || null;
}
function Sc(a, b) {
  return a.mk[b] || null;
}
var sc = Object.create(null);
Xc.prototype.clear = Xc.prototype.clear;
Xc.prototype.clearUndo = Xc.prototype.zp;
Xc.prototype.addChangeListener = Xc.prototype.oc;
Xc.prototype.removeChangeListener = Xc.prototype.xf;
var bd = !C || 9 <= Number(tb),
  cd = (!D && !C) || (C && 9 <= Number(tb)) || (D && sb("1.9.1")),
  dd = C && !sb("9");
var ed = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  command: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
function fd() {
  this.Eo = "";
  this.ft = gd;
}
fd.prototype.hf = !0;
fd.prototype.Xd = function() {
  return this.Eo;
};
fd.prototype.toString = function() {
  return "Const{" + this.Eo + "}";
};
function hd(a) {
  return a instanceof fd && a.constructor === fd && a.ft === gd
    ? a.Eo
    : "type_error:Const";
}
var gd = {};
function id() {
  this.Gr = "";
  this.gt = jd;
}
id.prototype.hf = !0;
id.prototype.Xd = function() {
  return this.Gr;
};
id.prototype.nn = !0;
id.prototype.oh = function() {
  return 1;
};
var jd = {};
function kd() {
  this.wg = "";
  this.dt = ld;
}
kd.prototype.hf = !0;
kd.prototype.Xd = function() {
  return this.wg;
};
kd.prototype.nn = !0;
kd.prototype.oh = function() {
  return 1;
};
function md(a) {
  if (a instanceof kd && a.constructor === kd && a.dt === ld) return a.wg;
  ea(a);
  return "type_error:SafeUrl";
}
var nd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function od(a) {
  if (a instanceof kd) return a;
  a = a.hf ? a.Xd() : String(a);
  nd.test(a) || (a = "about:invalid#zClosurez");
  return qd(a);
}
var ld = {};
function qd(a) {
  var b = new kd();
  b.wg = a;
  return b;
}
qd("about:blank");
function rd() {
  this.Vn = "";
  this.ct = sd;
}
rd.prototype.hf = !0;
var sd = {};
rd.prototype.Xd = function() {
  return this.Vn;
};
rd.prototype.Zk = function(a) {
  this.Vn = a;
  return this;
};
var td = new rd().Zk("");
function ud(a) {
  var b = "",
    c;
  for (c in a) {
    if (!/^[-_a-zA-Z0-9]+$/.test(c))
      throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
    var e = a[c];
    null != e &&
      ((e = u(e) ? ta(e, vd).join(" ") : vd(e)), (b += c + ":" + e + ";"));
  }
  return b ? new rd().Zk(b) : td;
}
function vd(a) {
  if (a instanceof kd)
    a =
      'url("' +
      md(a)
        .replace(/</g, "%3c")
        .replace(/[\\"]/g, "\\$&") +
      '")';
  else if (a instanceof fd) a = hd(a);
  else {
    a = String(a);
    var b = a.replace(wd, "$1").replace(xd, "url");
    if ((b = yd.test(b))) {
      for (var c = (b = !0), e = 0; e < a.length; e++) {
        var f = a.charAt(e);
        "'" == f && c ? (b = !b) : '"' == f && b && (c = !c);
      }
      b = b && c;
    }
    a = b ? zd(a) : "zClosurez";
  }
  return a;
}
var yd = /^[-,."'%_!# a-zA-Z0-9]+$/,
  xd = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
  wd = /\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;
function zd(a) {
  return a.replace(xd, function(a, c, e, f) {
    var b = "";
    e = e.replace(/^(['"])(.*)\1$/, function(a, c, e) {
      b = c;
      return e;
    });
    a = od(e).Xd();
    return c + b + a + b + f;
  });
}
function Ad() {
  this.wg = "";
  this.bt = Bd;
  this.hq = null;
}
Ad.prototype.nn = !0;
Ad.prototype.oh = function() {
  return this.hq;
};
Ad.prototype.hf = !0;
Ad.prototype.Xd = function() {
  return this.wg;
};
function Cd(a) {
  if (a instanceof Ad && a.constructor === Ad && a.bt === Bd) return a.wg;
  ea(a);
  return "type_error:SafeHtml";
}
function Dd(a) {
  if (a instanceof Ad) return a;
  var b = null;
  a.nn && (b = a.oh());
  return Ed(Ia(a.hf ? a.Xd() : String(a)), b);
}
var Fd = /^[a-zA-Z0-9-]+$/,
  Gd = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0
  },
  Hd = {
    APPLET: !0,
    BASE: !0,
    EMBED: !0,
    IFRAME: !0,
    LINK: !0,
    MATH: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0
  };
function Id(a, b, c) {
  var e = String(a);
  if (!Fd.test(e)) throw Error("Invalid tag name <" + e + ">.");
  if (e.toUpperCase() in Hd)
    throw Error("Tag name <" + e + "> is not allowed for SafeHtml.");
  a = String(a);
  e = null;
  var f = "<" + a,
    h = "";
  if (b)
    for (n in b) {
      if (!Fd.test(n)) throw Error('Invalid attribute name "' + n + '".');
      var k = b[n];
      if (null != k) {
        var l = a;
        var m = n;
        if (k instanceof fd) k = hd(k);
        else if ("style" == m.toLowerCase()) {
          if (!ha(k))
            throw Error(
              'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                typeof k +
                " given: " +
                k
            );
          k instanceof rd || (k = ud(k));
          k instanceof rd && k.constructor === rd && k.ct === sd
            ? (k = k.Vn)
            : (ea(k), (k = "type_error:SafeStyle"));
        } else {
          if (/^on/i.test(m))
            throw Error(
              'Attribute "' +
                m +
                '" requires goog.string.Const value, "' +
                k +
                '" given.'
            );
          if (m.toLowerCase() in Gd)
            if (k instanceof id)
              k instanceof id && k.constructor === id && k.gt === jd
                ? (k = k.Gr)
                : (ea(k), (k = "type_error:TrustedResourceUrl"));
            else if (k instanceof kd) k = md(k);
            else if (q(k)) k = od(k).Xd();
            else
              throw Error(
                'Attribute "' +
                  m +
                  '" on tag "' +
                  l +
                  '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                  k +
                  '" given.'
              );
        }
        k.hf && (k = k.Xd());
        m = m + '="' + Ia(String(k)) + '"';
        h += " " + m;
      }
    }
  var n = f + h;
  null != c ? u(c) || (c = [c]) : (c = []);
  !0 === ed[a.toLowerCase()]
    ? (n += ">")
    : ((c = Jd(c)), (n += ">" + Cd(c) + "</" + a + ">"), (e = c.oh()));
  (b = b && b.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
  return Ed(n, e);
}
function Jd(a) {
  function b(a) {
    u(a)
      ? ra(a, b)
      : ((a = Dd(a)),
        (e += Cd(a)),
        (a = a.oh()),
        0 == c ? (c = a) : 0 != a && c != a && (c = null));
  }
  var c = 0,
    e = "";
  ra(arguments, b);
  return Ed(e, c);
}
var Bd = {};
function Ed(a, b) {
  return new Ad().Zk(a, b);
}
Ad.prototype.Zk = function(a, b) {
  this.wg = a;
  this.hq = b;
  return this;
};
Ed("<!DOCTYPE html>", 0);
var Kd = Ed("", 0),
  Ld = Ed("<br>", 0);
function Md(a, b) {
  a.innerHTML = Cd(b);
}
function Nd(a, b) {
  this.width = a;
  this.height = b;
}
d = Nd.prototype;
d.clone = function() {
  return new Nd(this.width, this.height);
};
d.vt = function() {
  return this.width * this.height;
};
d.aspectRatio = function() {
  return this.width / this.height;
};
d.Pq = function() {
  return !this.vt();
};
d.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
d.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
d.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
d.scale = function(a, b) {
  b = r(b) ? b : a;
  this.width *= a;
  this.height *= b;
  return this;
};
function Od(a) {
  return a ? new Pd(Qd(a)) : pa || (pa = new Pd());
}
function Rd(a, b) {
  var c = document;
  b = b || c;
  if (b.querySelectorAll && b.querySelector)
    return b.querySelectorAll("TBODY" + (a ? "." + a : ""));
  if (a && b.getElementsByClassName) {
    b = b.getElementsByClassName(a);
    c = {};
    for (var e = 0, f = 0, h; (h = b[f]); f++)
      "TBODY" == h.nodeName && (c[e++] = h);
    c.length = e;
    return c;
  }
  b = b.getElementsByTagName("TBODY");
  if (a) {
    c = {};
    for (f = e = 0; (h = b[f]); f++) {
      var k = h.className;
      "function" == typeof k.split && wa(k.split(/\s+/), a) && (c[e++] = h);
    }
    c.length = e;
    return c;
  }
  return b;
}
function Sd(a, b) {
  $a(b, function(b, e) {
    b && b.hf && (b = b.Xd());
    "style" == e
      ? (a.style.cssText = b)
      : "class" == e
      ? (a.className = b)
      : "for" == e
      ? (a.htmlFor = b)
      : Td.hasOwnProperty(e)
      ? a.setAttribute(Td[e], b)
      : Ea(e, "aria-") || Ea(e, "data-")
      ? a.setAttribute(e, b)
      : (a[e] = b);
  });
}
var Td = {
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  colspan: "colSpan",
  frameborder: "frameBorder",
  height: "height",
  maxlength: "maxLength",
  nonce: "nonce",
  role: "role",
  rowspan: "rowSpan",
  type: "type",
  usemap: "useMap",
  valign: "vAlign",
  width: "width"
};
function Ud() {
  var a = window.document;
  a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new Nd(a.clientWidth, a.clientHeight);
}
function Vd(a) {
  var b = Wd(a);
  a = a.parentWindow || a.defaultView;
  return C && sb("10") && a.pageYOffset != b.scrollTop
    ? new F(b.scrollLeft, b.scrollTop)
    : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
}
function Wd(a) {
  return a.scrollingElement
    ? a.scrollingElement
    : E || "CSS1Compat" != a.compatMode
    ? a.body || a.documentElement
    : a.documentElement;
}
function H(a, b, c) {
  return Xd(document, arguments);
}
function Xd(a, b) {
  var c = String(b[0]),
    e = b[1];
  if (!bd && e && (e.name || e.type)) {
    c = ["<", c];
    e.name && c.push(' name="', Ia(e.name), '"');
    if (e.type) {
      c.push(' type="', Ia(e.type), '"');
      var f = {};
      bb(f, e);
      delete f.type;
      e = f;
    }
    c.push(">");
    c = c.join("");
  }
  c = a.createElement(c);
  e &&
    (q(e) ? (c.className = e) : u(e) ? (c.className = e.join(" ")) : Sd(c, e));
  2 < b.length && Yd(a, c, b, 2);
  return c;
}
function Yd(a, b, c, e) {
  function f(c) {
    c && b.appendChild(q(c) ? a.createTextNode(c) : c);
  }
  for (; e < c.length; e++) {
    var h = c[e];
    !fa(h) || (ha(h) && 0 < h.nodeType) ? f(h) : ra(Zd(h) ? Aa(h) : h, f);
  }
}
function $d(a) {
  for (var b; (b = a.firstChild); ) a.removeChild(b);
}
function ae(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
}
function J(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
function be(a, b) {
  if (!a || !b) return !1;
  if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
  if ("undefined" != typeof a.compareDocumentPosition)
    return a == b || !!(a.compareDocumentPosition(b) & 16);
  for (; b && a != b; ) b = b.parentNode;
  return b == a;
}
function Qd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function ce(a, b) {
  if ("textContent" in a) a.textContent = b;
  else if (3 == a.nodeType) a.data = String(b);
  else if (a.firstChild && 3 == a.firstChild.nodeType) {
    for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
    a.firstChild.data = String(b);
  } else $d(a), a.appendChild(Qd(a).createTextNode(String(b)));
}
var de = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
  ee = { IMG: " ", BR: "\n" };
function fe(a) {
  return C && !sb("9")
    ? ((a = a.getAttributeNode("tabindex")), null != a && a.specified)
    : a.hasAttribute("tabindex");
}
function ge(a) {
  a = a.tabIndex;
  return r(a) && 0 <= a && 32768 > a;
}
function he(a) {
  if (dd && null !== a && "innerText" in a)
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  else {
    var b = [];
    ie(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  dd || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
}
function je(a) {
  var b = [];
  ie(a, b, !1);
  return b.join("");
}
function ie(a, b, c) {
  if (!(a.nodeName in de))
    if (3 == a.nodeType)
      c
        ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
        : b.push(a.nodeValue);
    else if (a.nodeName in ee) b.push(ee[a.nodeName]);
    else for (a = a.firstChild; a; ) ie(a, b, c), (a = a.nextSibling);
}
function Zd(a) {
  if (a && "number" == typeof a.length) {
    if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item;
    if (x(a)) return "function" == typeof a.item;
  }
  return !1;
}
function Pd(a) {
  this.td = a || g.document || document;
}
d = Pd.prototype;
d.Zb = Od;
d.F = function(a) {
  return q(a) ? this.td.getElementById(a) : a;
};
d.getElementsByTagName = function(a, b) {
  return (b || this.td).getElementsByTagName(String(a));
};
d.setProperties = Sd;
d.T = function(a, b, c) {
  return Xd(this.td, arguments);
};
d.createElement = function(a) {
  return this.td.createElement(String(a));
};
d.createTextNode = function(a) {
  return this.td.createTextNode(String(a));
};
d.Jp = function(a, b) {
  for (
    var c = this.td,
      e = c.createElement("TABLE"),
      f = e.appendChild(c.createElement("TBODY")),
      h = 0;
    h < a;
    h++
  ) {
    for (var k = c.createElement("TR"), l = 0; l < b; l++)
      k.appendChild(c.createElement("TD"));
    f.appendChild(k);
  }
  return e;
};
d.appendChild = function(a, b) {
  a.appendChild(b);
};
d.append = function(a, b) {
  Yd(Qd(a), a, arguments, 1);
};
d.canHaveChildren = function(a) {
  if (1 != a.nodeType) return !1;
  switch (a.tagName) {
    case "APPLET":
    case "AREA":
    case "BASE":
    case "BR":
    case "COL":
    case "COMMAND":
    case "EMBED":
    case "FRAME":
    case "HR":
    case "IMG":
    case "INPUT":
    case "IFRAME":
    case "ISINDEX":
    case "KEYGEN":
    case "LINK":
    case "NOFRAMES":
    case "NOSCRIPT":
    case "META":
    case "OBJECT":
    case "PARAM":
    case "SCRIPT":
    case "SOURCE":
    case "STYLE":
    case "TRACK":
    case "WBR":
      return !1;
  }
  return !0;
};
d.Mr = $d;
d.removeNode = J;
d.df = function(a) {
  return cd && void 0 != a.children
    ? a.children
    : sa(a.childNodes, function(a) {
        return 1 == a.nodeType;
      });
};
d.contains = be;
d.Ee = function(a) {
  var b;
  (b =
    "A" == a.tagName ||
    "INPUT" == a.tagName ||
    "TEXTAREA" == a.tagName ||
    "SELECT" == a.tagName ||
    "BUTTON" == a.tagName
      ? !a.disabled && (!fe(a) || ge(a))
      : fe(a) && ge(a)) && C
    ? ((a =
        !x(a.getBoundingClientRect) || (C && null == a.parentElement)
          ? { height: a.offsetHeight, width: a.offsetWidth }
          : a.getBoundingClientRect()),
      (a = null != a && 0 < a.height && 0 < a.width))
    : (a = b);
  return a;
};
function ke(a, b, c, e, f, h) {
  this.j = a;
  this.Gc = b;
  this.Vr = c;
  c = le;
  this.j.u && (c = -c);
  this.wt = (c * Math.PI) / 180;
  a.Hd.appendChild(this.pi(b, !(!f || !h)));
  this.ad = e;
  this.zf && me(this);
  (f && h) ||
    ((b = this.Gc.getBBox()), (f = b.width + 2 * ne), (h = b.height + 2 * ne));
  this.Bf(f, h);
  me(this);
  oe(this);
  this.zf = !0;
  a.options.readOnly ||
    (A.J(this.ii, "mousedown", this, this.Ct),
    this.rb && A.J(this.rb, "mousedown", this, this.ao));
}
var ne = 6,
  le = 20,
  pe = null,
  qe = null;
d = ke.prototype;
d.$n = null;
function re() {
  pe && (A.Ca(pe), (pe = null));
  qe && (A.Ca(qe), (qe = null));
}
function se() {
  A.Touch.ue();
  re();
}
d.zf = !1;
d.ad = null;
d.Lh = 0;
d.rj = 0;
d.ba = 0;
d.xa = 0;
d.gk = !0;
d.pi = function(a, b) {
  this.Ec = A.h.B("g", {}, null);
  var c = { filter: "url(#" + this.j.options.oq + ")" };
  -1 != Xa.indexOf("JavaFX") && (c = {});
  c = A.h.B("g", c, this.Ec);
  this.rm = A.h.B("path", {}, c);
  this.ii = A.h.B(
    "rect",
    { class: "blocklyDraggable", x: 0, y: 0, rx: ne, ry: ne },
    c
  );
  b
    ? ((this.rb = A.h.B(
        "g",
        { class: this.j.u ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.Ec
      )),
      (b = 2 * ne),
      A.h.B(
        "polygon",
        { points: "0,x x,x x,0".replace(/x/g, b.toString()) },
        this.rb
      ),
      A.h.B(
        "line",
        {
          class: "blocklyResizeLine",
          x1: b / 3,
          y1: b - 1,
          x2: b - 1,
          y2: b / 3
        },
        this.rb
      ),
      A.h.B(
        "line",
        {
          class: "blocklyResizeLine",
          x1: (2 * b) / 3,
          y1: b - 1,
          x2: b - 1,
          y2: (2 * b) / 3
        },
        this.rb
      ))
    : (this.rb = null);
  this.Ec.appendChild(a);
  return this.Ec;
};
d.M = function() {
  return this.Ec;
};
function te(a, b) {
  a.Ec.dataset && (a.Ec.dataset.Jb = b);
}
d.Ct = function(a) {
  var b = this.j.Ud(a);
  b && (b.jc || (b.jc = this), (b.xc = a));
};
d.Oh = function() {};
d.Ob = function() {
  return !1;
};
d.ao = function(a) {
  ue(this);
  re();
  A.h.nf(a) ||
    (this.j.Pl(a, new F(this.j.u ? -this.ba : this.ba, this.xa)),
    (pe = A.J(document, "mouseup", this, se)),
    (qe = A.J(document, "mousemove", this, this.bo)),
    A.Cb());
  a.stopPropagation();
};
d.bo = function(a) {
  this.gk = !1;
  a = ve(this.j, a);
  this.Bf(this.j.u ? -a.x : a.x, a.y);
  this.j.u && me(this);
};
function ue(a) {
  var b = a.Ec.parentNode;
  return b.lastChild !== a.Ec ? (b.appendChild(a.Ec), !0) : !1;
}
function me(a) {
  var b = a.ad.x;
  b = a.j.u ? b - (a.Lh + a.ba) : b + a.Lh;
  a.moveTo(b, a.rj + a.ad.y);
}
d.moveTo = function(a, b) {
  this.Ec.setAttribute("transform", "translate(" + a + "," + b + ")");
};
d.fg = function() {
  return { width: this.ba, height: this.xa };
};
d.Bf = function(a, b) {
  var c = 2 * ne;
  a = Math.max(a, c + 45);
  b = Math.max(b, c + 20);
  this.ba = a;
  this.xa = b;
  this.ii.setAttribute("width", a);
  this.ii.setAttribute("height", b);
  this.rb &&
    (this.j.u
      ? this.rb.setAttribute(
          "transform",
          "translate(" + 2 * ne + "," + (b - c) + ") scale(-1 1)"
        )
      : this.rb.setAttribute(
          "transform",
          "translate(" + (a - c) + "," + (b - c) + ")"
        ));
  if (this.zf) {
    if (this.gk) {
      a = -this.ba / 4;
      b = -this.xa - 25;
      c = this.j.gb();
      c.va /= this.j.scale;
      c.ib /= this.j.scale;
      var e = this.ad.x;
      this.j.u
        ? e - c.ib - a - this.ba < K
          ? (a = e - c.ib - this.ba - K)
          : e - c.ib - a > c.va && (a = e - c.ib - c.va)
        : e + a < c.ib
        ? (a = c.ib - e)
        : c.ib + c.va < e + a + this.ba + 10 + K &&
          (a = c.ib + c.va - e - this.ba - K);
      this.ad.y + b < c.me && (b = this.Vr.getBBox().height);
      this.Lh = a;
      this.rj = b;
    }
    me(this);
    oe(this);
  }
  this.$n && this.$n();
};
function oe(a) {
  var b = [],
    c = a.ba / 2,
    e = a.xa / 2,
    f = -a.Lh,
    h = -a.rj;
  if (c == f && e == h) b.push("M " + c + "," + e);
  else {
    h -= e;
    f -= c;
    a.j.u && (f *= -1);
    var k = Math.sqrt(h * h + f * f),
      l = Math.acos(f / k);
    0 > h && (l = 2 * Math.PI - l);
    var m = l + Math.PI / 2;
    m > 2 * Math.PI && (m -= 2 * Math.PI);
    var n = Math.sin(m),
      p = Math.cos(m),
      t = a.fg();
    m = (t.width + t.height) / 5;
    m = Math.min(m, t.width, t.height) / 4;
    t = 1 - 8 / k;
    f = c + t * f;
    h = e + t * h;
    t = c + m * p;
    var w = e + m * n;
    c -= m * p;
    e -= m * n;
    n = l + a.wt;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / 4;
    k = (Math.cos(n) * k) / 4;
    b.push("M" + t + "," + w);
    b.push(
      "C" + (t + k) + "," + (w + l) + " " + f + "," + h + " " + f + "," + h
    );
    b.push(
      "C" + f + "," + h + " " + (c + k) + "," + (e + l) + " " + c + "," + e
    );
  }
  b.push("z");
  a.rm.setAttribute("d", b.join(" "));
}
d.Je = function(a) {
  this.ii.setAttribute("fill", a);
  this.rm.setAttribute("fill", a);
};
d.A = function() {
  re();
  J(this.Ec);
  this.Vr = this.Gc = this.j = this.rb = this.ii = this.rm = this.Ec = null;
};
d.rl = function(a, b) {
  a ? a.Pe(b.x, b.y) : this.moveTo(b.x, b.y);
  this.Lh = this.j.u ? this.ad.x - b.x - this.ba : b.x - this.ad.x;
  this.rj = b.y - this.ad.y;
  oe(this);
};
d.la = function() {
  return new F(this.ad.x + this.Lh, this.ad.y + this.rj);
};
d.Rr = function(a) {
  this.gk = a;
};
function we(a) {
  we.o.constructor.call(this);
  this.Jb = a.id;
  this.kc = a.s.id;
}
z(we, Ic);
we.prototype.ua = function() {
  var a = we.o.ua.call(this);
  a.blockId = this.Jb;
  return a;
};
we.prototype.aa = function(a) {
  we.o.ua.call(this);
  this.Jb = a.blockId;
};
function wc(a, b, c, e, f) {
  a &&
    (wc.o.constructor.call(this, a),
    (this.element = b),
    (this.name = c),
    (this.oldValue = e),
    (this.newValue = f));
}
z(wc, we);
A.i.lc = wc;
d = wc.prototype;
d.type = A.i.Sg;
d.ua = function() {
  var a = wc.o.ua.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.newValue = this.newValue;
  return a;
};
d.aa = function(a) {
  wc.o.aa.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.newValue = a.newValue;
};
d.xh = function() {
  return this.oldValue == this.newValue;
};
d.run = function(a) {
  var b = Gc(Kc(this), this.Jb);
  if (b)
    switch (
      (b.Bd && b.Bd.ma(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (b = xe(b, this.name))
          ? (ye(b, a), b.setValue(a))
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        b.tj(a || null);
        break;
      case "collapsed":
        b.Bg(a);
        break;
      case "disabled":
        b.Cf(a);
        break;
      case "inline":
        b.Ef(a);
        break;
      case "mutation":
        var c = "";
        b.gc && (c = (c = b.gc()) && A.D.Hc(c));
        if (b.ud) {
          a = a || "<mutation></mutation>";
          var e = A.D.Sc("<xml>" + a + "</xml>");
          b.ud(e.firstChild);
        }
        A.i.R(new wc(b, "mutation", null, c, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.Jb);
};
function uc(a) {
  a &&
    (uc.o.constructor.call(this, a),
    (this.xml = a.s.U ? A.D.qm(a) : A.D.$e(a)),
    (this.lg = A.i.vq(a)));
}
z(uc, we);
A.i.Xj = uc;
uc.prototype.type = A.i.Yj;
uc.prototype.ua = function() {
  var a = uc.o.ua.call(this);
  a.xml = A.D.Hc(this.xml);
  a.ids = this.lg;
  return a;
};
uc.prototype.aa = function(a) {
  uc.o.aa.call(this, a);
  this.xml = A.D.Sc("<xml>" + a.xml + "</xml>").firstChild;
  this.lg = a.ids;
};
uc.prototype.run = function(a) {
  var b = Kc(this);
  if (a) (a = H("xml")), a.appendChild(this.xml), A.D.ve(a, b);
  else {
    a = 0;
    for (var c; (c = this.lg[a]); a++) {
      var e = Gc(b, c);
      e
        ? e.A(!1, !1)
        : c == this.Jb &&
          console.warn("Can't uncreate non-existent block: " + c);
    }
  }
};
function vc(a) {
  if (a) {
    if (a.getParent()) throw "Connected blocks cannot be deleted.";
    vc.o.constructor.call(this, a);
    this.Iv = a.s.U ? A.D.qm(a) : A.D.$e(a);
    this.lg = A.i.vq(a);
  }
}
z(vc, we);
A.i.xs = vc;
vc.prototype.type = A.i.Xl;
vc.prototype.ua = function() {
  var a = vc.o.ua.call(this);
  a.ids = this.lg;
  return a;
};
vc.prototype.aa = function(a) {
  vc.o.aa.call(this, a);
  this.lg = a.ids;
};
vc.prototype.run = function(a) {
  var b = Kc(this);
  if (a) {
    a = 0;
    for (var c; (c = this.lg[a]); a++) {
      var e = Gc(b, c);
      e
        ? e.A(!1, !1)
        : c == this.Jb && console.warn("Can't delete non-existent block: " + c);
    }
  } else (a = H("xml")), a.appendChild(this.Iv), A.D.ve(a, b);
};
function xc(a) {
  a &&
    (xc.o.constructor.call(this, a),
    (a = ze(this)),
    (this.mr = a.Br),
    (this.lr = a.Lq),
    (this.En = a.Ip));
}
z(xc, we);
A.i.Wh = xc;
d = xc.prototype;
d.type = A.i.ai;
d.ua = function() {
  var a = xc.o.ua.call(this);
  this.tg && (a.newParentId = this.tg);
  this.sg && (a.newInputName = this.sg);
  this.tf &&
    (a.newCoordinate = Math.round(this.tf.x) + "," + Math.round(this.tf.y));
  return a;
};
d.aa = function(a) {
  xc.o.aa.call(this, a);
  this.tg = a.newParentId;
  this.sg = a.newInputName;
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.tf = new F(parseFloat(a[0]), parseFloat(a[1]))));
};
d.He = function() {
  var a = ze(this);
  this.tg = a.Br;
  this.sg = a.Lq;
  this.tf = a.Ip;
};
function ze(a) {
  var b = Gc(sc[a.kc] || null, a.Jb);
  a = {};
  var c = b.getParent();
  if (c) {
    a.Br = c.id;
    a: {
      for (var e = 0, f; (f = c.Z[e]); e++)
        if (f.connection && L(f.connection) == b) {
          b = f;
          break a;
        }
      b = null;
    }
    b && (a.Lq = b.name);
  } else a.Ip = b.la();
  return a;
}
d.xh = function() {
  return this.mr == this.tg && this.lr == this.sg && oc(this.En, this.tf);
};
d.run = function(a) {
  var b = Kc(this),
    c = Gc(b, this.Jb);
  if (c) {
    var e = a ? this.tg : this.mr,
      f = a ? this.sg : this.lr;
    a = a ? this.tf : this.En;
    var h = null;
    if (e && ((h = Gc(b, e)), !h)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    c.getParent() && Ae(c);
    if (a) (f = c.la()), c.moveBy(a.x - f.x, a.y - f.y);
    else {
      c = c.L || c.X;
      if (f) {
        if ((b = Be(h, f))) var k = b.connection;
      } else c.type == A.We && (k = h.K);
      k
        ? c.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.Jb);
};
function Bc(a, b, c, e) {
  Bc.o.constructor.call(this);
  this.Jb = a ? a.id : null;
  this.kc = a ? a.s.id : null;
  this.element = b;
  this.oldValue = c;
  this.newValue = e;
  this.Rb = !1;
}
z(Bc, Ic);
Bc.prototype.type = A.i.jm;
Bc.prototype.ua = function() {
  var a = Bc.o.ua.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.Jb && (a.blockId = this.Jb);
  return a;
};
Bc.prototype.aa = function(a) {
  Bc.o.aa.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.Jb = a.blockId;
};
function Ce(a) {
  this.P = a;
}
d = Ce.prototype;
d.Cp = !0;
d.fm = 17;
d.Oa = null;
d.kg = null;
function De(a) {
  a.dc ||
    ((a.dc = A.h.B("g", { class: "blocklyIconGroup" }, null)),
    a.P.vc && A.h.Ya(a.dc, "blocklyIconGroupReadonly"),
    a.Om(a.dc),
    a.P.M().appendChild(a.dc),
    A.J(a.dc, "mouseup", a, a.mn),
    a.Se());
}
d.A = function() {
  J(this.dc);
  this.dc = null;
  this.ma(!1);
  this.P = null;
};
d.Se = function() {};
d.V = function() {
  return !!this.Oa;
};
d.mn = function(a) {
  this.P.s.ob() || this.P.vc || A.h.nf(a) || this.ma(!this.V());
};
d.Re = function() {
  this.V() && this.Oa.Je(this.P.Nd);
};
function Ee(a) {
  var b = a.P.la(),
    c = A.h.bc(a.dc);
  b = new F(b.x + c.x + a.fm / 2, b.y + c.y + a.fm / 2);
  oc(a.kg, b) || ((a.kg = b), a.V() && ((a = a.Oa), (a.ad = b), a.zf && me(a)));
}
// Copyright 2011 Google Inc.  Apache License 2.0
function Fe(a) {
  Fe.o.constructor.call(this, a);
  De(this);
}
z(Fe, Ce);
d = Fe.prototype;
d.ra = "";
d.ba = 160;
d.xa = 80;
d.Om = function(a) {
  A.h.B("circle", { class: "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
  A.h.B(
    "path",
    {
      class: "blocklyIconSymbol",
      d:
        "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z"
    },
    a
  );
  A.h.B(
    "rect",
    {
      class: "blocklyIconSymbol",
      x: "6.8",
      y: "10.78",
      height: "2",
      width: "2"
    },
    a
  );
};
d.ri = function() {
  this.Jc = A.h.B("foreignObject", { x: ne, y: ne }, null);
  var a = document.createElementNS(A.Ue, "body");
  a.setAttribute("xmlns", A.Ue);
  a.className = "blocklyMinimalBody";
  var b = document.createElementNS(A.Ue, "textarea");
  b.className = "blocklyCommentTextarea";
  b.setAttribute("dir", this.P.u ? "RTL" : "LTR");
  a.appendChild(b);
  this.bb = b;
  this.Jc.appendChild(a);
  A.J(b, "mouseup", this, this.ww, !0, !0);
  A.J(b, "wheel", this, function(a) {
    a.stopPropagation();
  });
  A.J(b, "change", this, function() {
    this.ra != b.value &&
      (A.i.R(new A.i.lc(this.P, "comment", null, this.ra, b.value)),
      (this.ra = b.value));
  });
  setTimeout(function() {
    b.focus();
  }, 0);
  return this.Jc;
};
d.Se = function() {
  this.V() && (this.ma(!1), this.ma(!0));
  Ce.prototype.Se.call(this);
};
d.Dl = function() {
  if (this.V()) {
    var a = this.Oa.fg(),
      b = 2 * ne;
    this.Jc.setAttribute("width", a.width - b);
    this.Jc.setAttribute("height", a.height - b);
    this.bb.style.width = a.width - b - 4 + "px";
    this.bb.style.height = a.height - b - 4 + "px";
  }
};
d.ma = function(a) {
  if (a != this.V())
    if (
      (A.i.R(new Bc(this.P, "commentOpen", !a, a)),
      (!Ge(this.P) && !this.bb) || C)
    )
      He.prototype.ma.call(this, a);
    else {
      var b = this.xb(),
        c = this.fg();
      a
        ? ((this.Oa = new ke(
            this.P.s,
            this.ri(),
            this.P.md,
            this.kg,
            this.ba,
            this.xa
          )),
          te(this.Oa, this.P.id),
          (a = this.Dl.bind(this)),
          (this.Oa.$n = a),
          this.Re())
        : (this.Oa.A(), (this.Jc = this.bb = this.Oa = null));
      this.Ab(b);
      this.Bf(c.width, c.height);
    }
};
d.ww = function() {
  ue(this.Oa) && this.bb.focus();
};
d.fg = function() {
  return this.V() ? this.Oa.fg() : { width: this.ba, height: this.xa };
};
d.Bf = function(a, b) {
  this.bb ? this.Oa.Bf(a, b) : ((this.ba = a), (this.xa = b));
};
d.xb = function() {
  return this.bb ? this.bb.value : this.ra;
};
d.Ab = function(a) {
  this.ra != a &&
    (A.i.R(new A.i.lc(this.P, "comment", null, this.ra, a)), (this.ra = a));
  this.bb && (this.bb.value = a);
};
d.A = function() {
  A.i.isEnabled() && this.Ab("");
  this.P.Ja = null;
  Ce.prototype.A.call(this);
};
function Ie(a, b) {
  this.w = a;
  this.type = b;
  a.s.xm &&
    ((this.fd = a.s.xm[b]), (this.rk = a.s.xm[A.Xg[b]]), (this.ln = !this.fd));
}
d = Ie.prototype;
d.Za = null;
d.re = null;
d.ge = null;
d.Bc = 0;
d.Ha = 0;
d.jf = !1;
d.fd = null;
d.rk = null;
d.ln = null;
d.nk = function(a) {
  var b = this,
    c = b.w,
    e = a.w;
  a.isConnected() && a.disconnect();
  if (b.isConnected()) {
    var f = L(b),
      h = b.ge;
    b.ge = null;
    if (f.Ta) (h = A.D.$e(f)), f.A(), (f = null);
    else if (b.type == A.cb) {
      if (!f.L) throw "Orphan block does not have an output connection.";
      var k = Je(e, f);
      k && (f.L.connect(k), (f = null));
    } else if (b.type == A.Ma) {
      if (!f.X) throw "Orphan block does not have a previous connection.";
      for (k = e; k.K; ) {
        var l = Hc(k);
        if (l && !l.Ta) k = l;
        else {
          Ke(f.X, k.K) && (k.K.connect(f.X), (f = null));
          break;
        }
      }
    }
    if (f && (b.disconnect(), A.i.Rb)) {
      var m = A.i.ac();
      setTimeout(function() {
        f.s &&
          !f.getParent() &&
          (A.i.O(m), f.L ? Le(f.L, b) : f.X && Le(f.X, b), A.i.O(!1));
      }, A.Wj);
    }
    b.ge = h;
  }
  var n;
  A.i.isEnabled() && (n = new A.i.Wh(e));
  Me(b, a);
  e.Eg(c);
  n && (n.He(), A.i.R(n));
};
d.A = function() {
  if (this.isConnected()) throw "Disconnect connection before disposing of it.";
  this.jf && Ne(this.fd, this);
  this.rk = this.fd = null;
};
function Oe(a) {
  return a.type == A.cb || a.type == A.Ma;
}
d.isConnected = function() {
  return !!this.Za;
};
function Pe(a, b) {
  if (!b) return 3;
  if (Oe(a))
    var c = a.w,
      e = b.w;
  else (e = a.w), (c = b.w);
  return c && c == e
    ? 1
    : b.type != A.Xg[a.type]
    ? 2
    : c && e && c.s !== e.s
    ? 5
    : Ke(a, b)
    ? c.Ta && !e.Ta
      ? 6
      : 0
    : 4;
}
d.$k = function(a) {
  if (0 != Pe(this, a)) return !1;
  if (a.type == A.Zg || a.type == A.We)
    if (a.isConnected() || this.isConnected()) return !1;
  return (a.type == A.cb && a.isConnected() && !L(a).$d() && !L(a).Ta) ||
    (this.type == A.We && a.isConnected() && !this.w.K && !L(a).Ta && L(a).K) ||
    -1 != A.Ak.indexOf(a)
    ? !1
    : !0;
};
d.connect = function(a) {
  if (this.Za != a) {
    switch (Pe(this, a)) {
      case 0:
        break;
      case 1:
        throw "Attempted to connect a block to itself.";
      case 5:
        throw "Blocks not on same workspace.";
      case 2:
        throw "Attempt to connect incompatible types.";
      case 3:
        throw "Target connection is null.";
      case 4:
        throw "Connection checks failed. " +
          (this + " expected " + this.re + ", found " + a.re);
      case 6:
        throw "Connecting non-shadow to shadow block.";
      default:
        throw "Unknown connection failure: this should never happen!";
    }
    Oe(this) ? this.nk(a) : a.nk(this);
  }
};
function Me(a, b) {
  a.Za = b;
  b.Za = a;
}
function Qe(a, b) {
  for (var c = !1, e = 0; e < a.Z.length; e++) {
    var f = a.Z[e].connection;
    if (f && f.type == A.cb && Ke(b.L, f)) {
      if (c) return null;
      c = f;
    }
  }
  return c;
}
function Je(a, b) {
  for (var c; (c = Qe(a, b)); ) if (((a = L(c)), !a || a.Ta)) return c;
  return null;
}
d.disconnect = function() {
  var a = this.Za;
  if (Oe(this)) {
    var b = this.w;
    var c = a.w;
    a = this;
  } else (b = a.w), (c = this.w);
  this.Km(b, c);
  a.eo();
};
d.Km = function(a, b) {
  var c;
  A.i.isEnabled() && (c = new A.i.Wh(b));
  this.Za = this.Za.Za = null;
  b.Eg(null);
  c && (c.He(), A.i.R(c));
};
d.eo = function() {
  var a = this.w,
    b = this.ge;
  if (a.s && b && A.i.Rb)
    if (((a = A.D.ih(b, a.s)), a.L)) this.connect(a.L);
    else if (a.X) this.connect(a.X);
    else throw "Child block does not have output or previous statement.";
};
function L(a) {
  return a.isConnected() ? a.Za.w : null;
}
function Ke(a, b) {
  if (!a.re || !b.re) return !0;
  for (var c = 0; c < a.re.length; c++)
    if (-1 != b.re.indexOf(a.re[c])) return !0;
  return !1;
}
d.pr = function() {
  this.isConnected() && !Ke(this, this.Za) && Ae(Oe(this) ? L(this) : this.w);
};
d.hc = function(a) {
  a ? (u(a) || (a = [a]), (this.re = a), this.pr()) : (this.re = null);
  return this;
};
d.jr = function() {
  return [];
};
d.toString = function() {
  var a = this.w;
  if (a)
    if (a.L == this) var b = "Output Connection of ";
    else if (a.X == this) b = "Previous Connection of ";
    else if (a.K == this) b = "Next Connection of ";
    else if (
      (b = va(
        a.Z,
        function(a) {
          return a.connection == this;
        },
        this
      ))
    )
      b = 'Input "' + b.name + '" connection on ';
    else
      return (
        console.warn("Connection not actually connected to sourceBlock_"),
        "Orphan Connection"
      );
  else return "Orphan Connection";
  return b + Re(a);
};
function Se() {}
Se.prototype = [];
function Te(a, b) {
  if (b.jf) throw "Connection already in database.";
  b.w.vc || (a.splice(Ue(a, b), 0, b), (b.jf = !0));
}
function Ve(a, b) {
  if (!a.length) return -1;
  var c = Ue(a, b);
  if (c >= a.length) return -1;
  for (var e = b.Ha, f = c; 0 <= f && a[f].Ha == e; ) {
    if (a[f] == b) return f;
    f--;
  }
  for (; c < a.length && a[c].Ha == e; ) {
    if (a[c] == b) return c;
    c++;
  }
  return -1;
}
function Ue(a, b) {
  if (!a.length) return 0;
  for (var c = 0, e = a.length; c < e; ) {
    var f = Math.floor((c + e) / 2);
    if (a[f].Ha < b.Ha) c = f + 1;
    else if (a[f].Ha > b.Ha) e = f;
    else {
      c = f;
      break;
    }
  }
  return c;
}
function Ne(a, b) {
  if (!b.jf) throw "Connection not in database.";
  var c = Ve(a, b);
  if (-1 == c) throw "Unable to find connection in connectionDB.";
  b.jf = !1;
  a.splice(c, 1);
}
function We(a, b, c) {
  function e(a) {
    var b = h - f[a].Bc,
      e = k - f[a].Ha;
    Math.sqrt(b * b + e * e) <= c && m.push(f[a]);
    return e < c;
  }
  var f = a,
    h = b.Bc,
    k = b.Ha;
  a = 0;
  for (var l = (b = f.length - 2); a < l; )
    f[l].Ha < k ? (a = l) : (b = l), (l = Math.floor((a + b) / 2));
  var m = [];
  b = a = l;
  if (f.length) {
    for (; 0 <= a && e(a); ) a--;
    do b++;
    while (b < f.length && e(b));
  }
  return m;
}
A.yA = {};
A.So = 5;
A.Es = 10;
A.pd = 20;
A.Wj = 250;
A.ys = 30;
A.Vs = 750;
A.et = 100;
A.Ds = !0;
A.Ks = 0.45;
A.Ls = 0.65;
A.Wb = { width: 96, height: 124, url: "sprites.png" };
A.nc = "http://www.w3.org/2000/svg";
A.Ue = "http://www.w3.org/1999/xhtml";
A.cb = 1;
A.Zg = 2;
A.Ma = 3;
A.We = 4;
A.od = 5;
A.Vh = -1;
A.Tj = 0;
A.Uj = 1;
A.Px = 0;
A.Qx = 1;
A.Nx = 1;
A.Ox = 2;
A.Xg = [];
A.Xg[A.cb] = A.Zg;
A.Xg[A.Zg] = A.cb;
A.Xg[A.Ma] = A.We;
A.Xg[A.We] = A.Ma;
A.Ye = 0;
A.Uf = 1;
A.Xe = 2;
A.Jd = 3;
A.Po = null;
A.Yl = 1;
A.Qo = 2;
A.bp = "VARIABLE";
A.ht = "VARIABLE_DYNAMIC";
A.Zo = "PROCEDURE";
A.$o = "RENAME_VARIABLE_ID";
A.Ro = "DELETE_VARIABLE_ID";
A.ya = {};
A.ya.Lm = 0;
A.ya.xk = null;
A.ya.su = function(a) {
  var b = a.s,
    c = a.M();
  b.bd.play("delete");
  a = Xe(b, c);
  c = c.cloneNode(!0);
  c.Aw = a.x;
  c.Bw = a.y;
  c.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  M(b).appendChild(c);
  c.np = c.getBBox();
  A.ya.jq(c, b.u, new Date(), b.scale);
};
A.ya.jq = function(a, b, c, e) {
  var f = (new Date() - c) / 150;
  1 < f
    ? J(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.Aw + (((b ? -1 : 1) * a.np.width * e) / 2) * f) +
          "," +
          (a.Bw + a.np.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(A.ya.jq, 10, a, b, c, e));
};
A.ya.Vt = function(a) {
  var b = a.s,
    c = b.scale;
  b.bd.play("click");
  if (!(1 > c)) {
    var e = Xe(b, a.M());
    a.L
      ? ((e.x += (a.u ? 3 : -3) * c), (e.y += 13 * c))
      : a.X && ((e.x += (a.u ? -23 : 23) * c), (e.y += 3 * c));
    a = A.h.B(
      "circle",
      {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: "none",
        stroke: "#888",
        "stroke-width": 10
      },
      M(b)
    );
    A.ya.Gp(a, new Date(), c);
  }
};
A.ya.Gp = function(a, b, c) {
  var e = (new Date() - b) / 150;
  1 < e
    ? J(a)
    : (a.setAttribute("r", 25 * e * c),
      (a.style.opacity = 1 - e),
      (A.ya.Lm = setTimeout(A.ya.Gp, 10, a, b, c)));
};
A.ya.qu = function(a) {
  a.s.bd.play("disconnect");
  if (!(1 > a.s.scale)) {
    var b = a.vb().height;
    b = (Math.atan(10 / b) / Math.PI) * 180;
    a.u || (b *= -1);
    A.ya.iq(a.M(), b, new Date());
  }
};
A.ya.iq = function(a, b, c) {
  var e = (new Date() - c) / 200;
  1 < e
    ? (a.Gg = "")
    : ((a.Gg =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * b) + ")"),
      (A.ya.xk = a),
      (A.ya.Lm = setTimeout(A.ya.iq, 10, a, b, c)));
  a.setAttribute("transform", a.Qe + a.Gg);
};
A.ya.Mm = function() {
  if (A.ya.xk) {
    clearTimeout(A.ya.Lm);
    var a = A.ya.xk;
    a.Gg = "";
    a.setAttribute("transform", a.Qe);
    A.ya.xk = null;
  }
};
function Ye(a, b) {
  Ye.o.constructor.call(this, a, b);
  this.wl = new F(0, 0);
}
z(Ye, Ie);
function Ze(a, b) {
  var c = a.Bc - b.Bc;
  a = a.Ha - b.Ha;
  return Math.sqrt(c * c + a * a);
}
function Le(a, b) {
  if (!a.w.s.ob()) {
    var c = $e(a.w);
    if (!c.vc) {
      var e = !1;
      if (!c.$d()) {
        c = $e(b.w);
        if (!c.$d()) return;
        b = a;
        e = !0;
      }
      var f = A.selected == c;
      f || c.ah();
      var h = b.Bc + A.pd - a.Bc;
      a = b.Ha + A.pd - a.Ha;
      e && (a = -a);
      c.u && (h = -h);
      c.moveBy(h, a);
      f || c.zg();
    }
  }
}
d = Ye.prototype;
d.moveTo = function(a, b) {
  this.jf && Ne(this.fd, this);
  this.Bc = a;
  this.Ha = b;
  this.ln || Te(this.fd, this);
};
d.moveBy = function(a, b) {
  this.moveTo(this.Bc + a, this.Ha + b);
};
function af(a, b) {
  a.moveTo(b.x + a.wl.x, b.y + a.wl.y);
}
function bf(a, b, c) {
  a.wl.x = b;
  a.wl.y = c;
}
function cf(a) {
  var b = a.Za.Bc - a.Bc,
    c = a.Za.Ha - a.Ha;
  if (0 != b || 0 != c) {
    a = L(a);
    var e = a.M();
    if (!e) throw "block is not rendered.";
    e = A.h.bc(e);
    a.M().setAttribute(
      "transform",
      "translate(" + (e.x - b) + "," + (e.y - c) + ")"
    );
    df(a, -b, -c);
  }
}
d.closest = function(a, b) {
  var c = this.rk;
  if (c.length) {
    var e = this.Ha,
      f = this.Bc;
    this.Bc = f + b.x;
    this.Ha = e + b.y;
    var h = Ue(c, this);
    b = null;
    for (var k = a, l, m = h - 1; 0 <= m && Math.abs(c[m].Ha - this.Ha) <= a; )
      (l = c[m]), this.$k(l, k) && ((b = l), (k = Ze(l, this))), m--;
    for (; h < c.length && Math.abs(c[h].Ha - this.Ha) <= a; )
      (l = c[h]), this.$k(l, k) && ((b = l), (k = Ze(l, this))), h++;
    this.Bc = f;
    this.Ha = e;
    a = { connection: b, Kr: k };
  } else a = { connection: null, Kr: a };
  return a;
};
d.Wk = function() {
  var a =
    this.type == A.cb || this.type == A.Zg
      ? "m 0,0 " + ef + " v 5"
      : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5";
  var b = this.w.la();
  Ie.Jq = A.h.B(
    "path",
    {
      class: "blocklyHighlightedConnectionPath",
      d: a,
      transform:
        "translate(" +
        (this.Bc - b.x) +
        "," +
        (this.Ha - b.y) +
        ")" +
        (this.w.u ? " scale(-1 1)" : "")
    },
    this.w.M()
  );
};
function ff(a) {
  gf(a, !1);
  var b = [];
  if (a.type != A.cb && a.type != A.Ma) return b;
  if ((a = L(a))) {
    if (a.isCollapsed()) {
      var c = [];
      a.L && c.push(a.L);
      a.K && c.push(a.K);
      a.X && c.push(a.X);
    } else c = a.Td(!0);
    for (var e = 0; e < c.length; e++) b.push.apply(b, ff(c[e]));
    b.length || (b[0] = a);
  }
  return b;
}
function hf() {
  J(Ie.Jq);
  delete Ie.Jq;
}
function gf(a, b) {
  (a.ln = b) && a.jf ? Ne(a.fd, a) : b || a.jf || Te(a.fd, a);
}
d.$k = function(a, b) {
  return Ze(this, a) > b ? !1 : Ye.o.$k.call(this, a);
};
d.Km = function(a, b) {
  Ye.o.Km.call(this, a, b);
  a.U && a.$();
  b.U && (jf(b), b.$());
};
d.eo = function() {
  var a = this.w,
    b = this.ge;
  if (a.s && b && A.i.Rb) {
    Ye.o.eo.call(this);
    b = L(this);
    if (!b) throw "Couldn't respawn the shadow block that should exist here.";
    b.Ad();
    b.$(!1);
    a.U && a.$();
  }
};
d.jr = function(a) {
  return We(this.rk, this, a);
};
d.nk = function(a) {
  Ye.o.nk.call(this, a);
  var b = this.w;
  a = a.w;
  b.U && jf(b);
  a.U && jf(a);
  b.U && a.U && (this.type == A.Ma || this.type == A.We ? a.$() : b.$());
};
d.pr = function() {
  this.isConnected() &&
    !Ke(this, this.Za) &&
    (Ae(Oe(this) ? L(this) : this.w), this.w.tb());
};
function kf(a) {
  this.Jf = A.selected = a;
  this.j = a.s;
  a = this.Jf.Td(!1);
  var b;
  a: {
    for (b = this.Jf.K; b; ) {
      var c = L(b);
      if (!c) break a;
      b = c.K;
    }
    b = null;
  }
  b && b != this.Jf.K && a.push(b);
  this.om = a;
  this.Bh = this.Nb = null;
  this.Wn = 0;
  this.Qf = !1;
}
kf.prototype.A = function() {
  this.j = this.Jf = null;
  this.om.length = 0;
  this.Bh = this.Nb = null;
};
kf.prototype.update = function(a, b) {
  var c = this.Nb,
    e = this.Nb;
  this.Bh = this.Nb = null;
  this.Wn = A.pd;
  for (var f = 0; f < this.om.length; f++) {
    var h = this.om[f],
      k = h.closest(this.Wn, a);
    k.connection && ((this.Nb = k.connection), (this.Bh = h), (this.Wn = k.Kr));
  }
  (a = e != this.Nb) && c && hf();
  c = !!this.Nb && b != A.Qo;
  this.Qf = (b = !!b && !this.Jf.getParent() && this.Jf.Ob()) && !c;
  b && this.Nb && (hf(), (this.Nb = null));
  !this.Qf && a && this.Nb && this.Nb && this.Nb.Wk();
};
function lf(a, b) {
  this.Sa = a;
  this.j = b;
  this.jh = new kf(this.Sa);
  this.Zf = null;
  this.Qf = !1;
  this.je = this.Sa.la();
  b = [];
  a = tc(a, !1);
  for (var c = 0, e; (e = a[c]); c++) {
    e = mf(e);
    for (var f = 0; f < e.length; f++)
      b.push({ location: e[f].kg, icon: e[f] });
  }
  this.zk = b;
}
lf.prototype.A = function() {
  this.Ua = this.j = this.Sa = null;
  this.zk.length = 0;
  this.jh && (this.jh.A(), (this.jh = null));
};
function nf(a, b, c) {
  c = a.Hh(c);
  a.Sa.rl(rc(a.je, c));
  for (var e = 0; e < a.zk.length; e++) {
    var f = a.zk[e],
      h = f.icon;
    f = rc(f.location, c);
    h.kg = f;
    h.V() && ((h = h.Oa), (h.ad = f), h.zf && me(h));
  }
  a.Zf = of(a.j, b);
  a.jh.update(c, a.Zf);
  a.Qf = a.jh.Qf;
  b = a.j.zc;
  a.Qf
    ? (a.Sa.wj(!0), a.Zf == A.Yl && b && pf(b, !0))
    : (a.Sa.wj(!1), b && pf(b, !1));
}
function qf(a, b, c) {
  nf(a, b, c);
  a.zk = [];
  A.ya.Mm();
  b = a.Hh(c);
  a.Sa.er(rc(a.je, b));
  c = a.j.zc;
  a.Qf ? (c && rf(c.close, 100, c), a.Bi(), a.Sa.A(!1, !0)) : c && c.close();
  a.Qf ||
    (df(a.Sa, b.x, b.y),
    a.Sa.Df(!1),
    (b = a.jh),
    b.Nb &&
      (b.Bh.connect(b.Nb),
      b.Jf.U && (A.ya.Vt((Oe(b.Bh) ? b.Nb : b.Bh).w), sf($e(b.Jf))),
      b.Nb && hf()),
    a.Sa.$(),
    a.Bi(),
    tf(a.Sa));
  a.j.zb(!0);
  (b = a.j.Y) &&
    A.h.yb(b.mc, a.Sa.Ob() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  A.i.O(!1);
}
lf.prototype.Bi = function() {
  var a = new A.i.Wh(this.Sa);
  a.En = this.je;
  a.He();
  A.i.R(a);
};
lf.prototype.Hh = function(a) {
  a = new F(a.x / this.j.scale, a.y / this.j.scale);
  this.j.$i && (a = a.scale(1 / this.j.options.Nc.scale));
  return a;
};
function uf(a, b, c, e, f) {
  this.v = A.h.B("g", { class: "blocklyComment" }, null);
  this.v.Qe = "";
  this.Hj = A.h.B("rect", {
    class: "blocklyCommentRect",
    x: 0,
    y: 0,
    rx: 3,
    ry: 3
  });
  this.v.appendChild(this.Hj);
  this.zf = !1;
  this.le = A.h.mf() && !!a.fb;
  uf.o.constructor.call(this, a, b, c, e, f);
  this.$();
}
z(uf, Tc);
d = uf.prototype;
d.A = function() {
  if (this.s) {
    if (A.selected == this) {
      this.Lf();
      var a = this.s;
      a.kb && a.kb.cancel();
    }
    A.i.isEnabled() && A.i.R(new Fc(this));
    J(this.v);
    this.Kg = this.If = this.Jc = this.bb = this.Hj = this.v = null;
    A.i.disable();
    uf.o.A.call(this);
    A.i.enable();
  }
};
d.Ad = function() {
  this.s.options.readOnly ||
    this.Qm ||
    (A.J(this.If, "mousedown", this, this.Cr),
    A.J(this.Kg, "mousedown", this, this.Cr));
  this.Qm = !0;
  vf(this);
  this.M().parentNode || this.s.Hd.appendChild(this.M());
};
d.Cr = function(a) {
  var b = this.s.Ud(a);
  b && (b.jc || (b.jc = this), (b.xc = a));
};
d.Oh = function(a) {
  if (!this.s.options.readOnly) {
    var b = [];
    this.Ob() && this.$d() && (b.push(A.ea.Qt(this)), b.push(A.ea.Pt(this)));
    A.ea.show(a, b, this.u);
  }
};
d.select = function() {
  if (A.selected != this) {
    var a = null;
    if (A.selected) {
      a = A.selected.id;
      A.i.disable();
      try {
        A.selected.Lf();
      } finally {
        A.i.enable();
      }
    }
    a = new Bc(null, "selected", a, this.id);
    a.kc = this.s.id;
    A.i.R(a);
    A.selected = this;
    this.ah();
  }
};
d.Lf = function() {
  if (A.selected == this) {
    var a = new Bc(null, "selected", this.id, null);
    a.kc = this.s.id;
    A.i.R(a);
    A.selected = null;
    this.zg();
    wf(this);
  }
};
d.ah = function() {
  A.h.Ya(this.v, "blocklySelected");
  this.so();
};
d.zg = function() {
  A.h.yb(this.v, "blocklySelected");
  wf(this);
};
d.la = function() {
  var a = 0,
    b = 0,
    c = this.le ? this.s.fb.ac() : null,
    e = this.M();
  if (e) {
    do {
      var f = A.h.bc(e);
      a += f.x;
      b += f.y;
      this.le &&
        this.s.fb.Od.firstChild == e &&
        ((f = this.s.fb.Qk()), (a += f.x), (b += f.y));
      e = e.parentNode;
    } while (e && e != this.s.Hd && e != c);
  }
  return (this.Xc = new F(a, b));
};
d.moveBy = function(a, b) {
  var c = new Ec(this),
    e = this.la();
  this.translate(e.x + a, e.y + b);
  this.Xc = new F(e.x + a, e.y + b);
  c.He();
  A.i.R(c);
  xf(this.s);
};
d.translate = function(a, b) {
  this.Xc = new F(a, b);
  this.M().setAttribute("transform", "translate(" + a + "," + b + ")");
};
d.tl = function() {
  if (this.le) {
    var a = this.la();
    A.h.removeAttribute(this.M(), "transform");
    this.s.fb.Pe(a.x, a.y);
    yf(this.s.fb, this.M());
  }
};
d.er = function(a) {
  this.le && (this.translate(a.x, a.y), this.s.fb.ki(this.s.Fa));
};
d.rl = function(a, b) {
  a
    ? a.Pe(b.x, b.y)
    : ((this.v.Qe = "translate(" + b.x + "," + b.y + ")"),
      this.v.setAttribute("transform", this.v.Qe + this.v.Gg));
};
d.moveTo = function(a, b) {
  this.translate(a, b);
};
d.Wm = function() {
  var a = this.la(),
    b = this.vb();
  if (this.u) {
    var c = new F(a.x - b.width, a.y);
    a = new F(a.x, a.y + b.height);
  } else (c = new F(a.x, a.y)), (a = new F(a.x + b.width, a.y + b.height));
  return { Uc: c, rd: a };
};
function vf(a) {
  a.$d() ? A.h.Ya(a.v, "blocklyDraggable") : A.h.yb(a.v, "blocklyDraggable");
}
d.Dg = function(a) {
  uf.o.Dg.call(this, a);
  vf(this);
};
d.Df = function(a) {
  a
    ? ((a = this.M()),
      (a.Qe = ""),
      (a.Gg = ""),
      A.h.Ya(this.v, "blocklyDragging"))
    : A.h.yb(this.v, "blocklyDragging");
};
d.M = function() {
  return this.v;
};
d.tc = function() {
  return this.bb ? this.bb.value : this.Gc;
};
d.ld = function(a) {
  uf.o.ld.call(this, a);
  this.bb && (this.bb.value = a);
};
d.wj = function(a) {
  a
    ? A.h.Ya(this.v, "blocklyDraggingDelete")
    : A.h.yb(this.v, "blocklyDraggingDelete");
};
d.Rr = function() {};
function zf(a, b, c) {
  A.i.disable();
  try {
    var e = Wc(a),
      f = new uf(b, e.content, e.Bq, e.ss, e.id);
    b.U && (f.Ad(), f.$(!1));
    if (!isNaN(e.x) && !isNaN(e.y))
      if (b.u) {
        var h = c || b.Lc();
        f.moveBy(h - e.x, e.y);
      } else f.moveBy(e.x, e.y);
  } finally {
    A.i.enable();
  }
  Uc(f);
  return f;
}
d.Ij = function(a) {
  var b;
  this.s.u && (b = this.s.Lc());
  a = Vc(this, a);
  var c = this.la();
  a.setAttribute("x", Math.round(this.s.u ? b - c.x : c.x));
  a.setAttribute("y", Math.round(c.y));
  a.setAttribute("h", this.ph());
  a.setAttribute("w", this.Lc());
  return a;
};
function Af(a, b) {
  this.lb = a;
  this.j = b;
  this.Zf = null;
  this.Vl = !1;
  this.je = this.lb.la();
  this.ag = A.h.mf() && b.fb ? b.fb : null;
}
Af.prototype.A = function() {
  this.ag = this.j = this.lb = null;
};
function Bf(a, b, c) {
  c = a.Hh(c);
  a.lb.rl(a.ag, rc(a.je, c));
  a.lb.Ob() &&
    ((a.Zf = of(a.j, b)),
    (a.Vl = a.Zf != A.Po),
    (b = a.j.zc),
    a.Vl
      ? (a.lb.wj(!0), a.Zf == A.Yl && b && pf(b, !0))
      : (a.lb.wj(!1), b && pf(b, !1)));
}
function Cf(a, b, c) {
  Bf(a, b, c);
  b = a.Hh(c);
  b = rc(a.je, b);
  a.lb.moveTo(b.x, b.y);
  b = a.j.zc;
  a.Vl ? (b && rf(b.close, 100, b), a.Bi(), a.lb.A(!1, !0)) : b && b.close();
  a.Vl || (a.ag && a.ag.ki(a.j.Hd), a.lb.Df && a.lb.Df(!1), a.Bi());
  a.j.zb(!0);
  a.j.Y &&
    A.h.yb(a.j.Y.mc, a.lb.Ob() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  A.i.O(!1);
}
Af.prototype.Bi = function() {
  if (this.lb.Nq) {
    var a = new Ec(this.lb);
    a.Fn = this.je;
    a.He();
    A.i.R(a);
  }
};
Af.prototype.Hh = function(a) {
  a = new F(a.x / this.j.scale, a.y / this.j.scale);
  this.j.$i && (a = a.scale(1 / this.j.options.Nc.scale));
  return a;
};
Af.prototype.tl = function() {
  this.lb.moveTo(0, 0);
  this.ag.Pe(this.je.x, this.je.y);
  yf(this.ag, this.lb.M());
};
function Df(a) {
  this.j = a;
  this.qw = a.gb();
  this.sw = new F(a.scrollX, a.scrollY);
}
Df.prototype.A = function() {
  this.j = null;
};
Df.prototype.Pl = function() {
  A.selected && A.selected.Lf();
  Ef(this.j);
};
function Ff(a, b) {
  var c = a.qw,
    e = rc(a.sw, b);
  b = Math.min(e.x, -c.Fc);
  e = Math.min(e.y, -c.qc);
  b = Math.max(b, c.va - c.Fc - c.rc);
  e = Math.max(e, c.Va - c.qc - c.Xb);
  b = -b - c.Fc;
  e = -e - c.qc;
  a.os(b, e);
}
Df.prototype.os = function(a, b) {
  this.j.$a.set(a, b);
};
function Gf(a) {
  Gf.o.constructor.call(this, a.Li());
  this.Eb = a.Eb;
  this.yd = a.yd;
}
z(Gf, Df);
Gf.prototype.os = function(a, b) {
  this.yd ? this.Eb.set(a) : this.Eb.set(b);
};
A.C = {};
A.C.visible = !1;
A.C.dh = !1;
A.C.Ps = 50;
A.C.dr = 0;
A.C.Dj = 0;
A.C.wn = 0;
A.C.xn = 0;
A.C.N = null;
A.C.zl = null;
A.C.Vo = 0;
A.C.Wo = 10;
A.C.at = 10;
A.C.Js = 750;
A.C.Zl = 5;
A.C.ca = null;
A.C.T = function() {
  A.C.ca ||
    ((A.C.ca = H("DIV", "blocklyTooltipDiv")),
    document.body.appendChild(A.C.ca));
};
A.C.Wf = function(a) {
  A.pc(a, "mouseover", null, A.C.Yv);
  A.pc(a, "mouseout", null, A.C.Xv);
  a.addEventListener("mousemove", A.C.Wv, !1);
};
A.C.Yv = function(a) {
  if (!A.C.dh) {
    for (a = a.target; !q(a.Tc) && !x(a.Tc); ) a = a.Tc;
    A.C.N != a && (A.C.Ba(), (A.C.zl = null), (A.C.N = a));
    clearTimeout(A.C.dr);
  }
};
A.C.Xv = function() {
  A.C.dh ||
    ((A.C.dr = setTimeout(function() {
      A.C.N = null;
      A.C.zl = null;
      A.C.Ba();
    }, 1)),
    clearTimeout(A.C.Dj));
};
A.C.Wv = function(a) {
  if (A.C.N && A.C.N.Tc && !A.H.V() && !A.C.dh)
    if (A.C.visible) {
      var b = A.C.wn - a.pageX;
      a = A.C.xn - a.pageY;
      Math.sqrt(b * b + a * a) > A.C.at && A.C.Ba();
    } else
      A.C.zl != A.C.N &&
        (clearTimeout(A.C.Dj),
        (A.C.wn = a.pageX),
        (A.C.xn = a.pageY),
        (A.C.Dj = setTimeout(A.C.lw, A.C.Js)));
};
A.C.Ba = function() {
  A.C.visible &&
    ((A.C.visible = !1), A.C.ca && (A.C.ca.style.display = "none"));
  A.C.Dj && clearTimeout(A.C.Dj);
};
A.C.block = function() {
  A.C.Ba();
  A.C.dh = !0;
};
A.C.Cw = function() {
  A.C.dh = !1;
};
A.C.lw = function() {
  if (!A.C.dh && ((A.C.zl = A.C.N), A.C.ca)) {
    $d(A.C.ca);
    for (var a = A.C.N.Tc; x(a); ) a = a();
    a = A.h.vs(a, A.C.Ps);
    a = a.split("\n");
    for (var b = 0; b < a.length; b++) {
      var c = document.createElement("div");
      c.appendChild(document.createTextNode(a[b]));
      A.C.ca.appendChild(c);
    }
    a = A.C.N.u;
    b = Ud();
    A.C.ca.style.direction = a ? "rtl" : "ltr";
    A.C.ca.style.display = "block";
    A.C.visible = !0;
    c = A.C.wn;
    c = a ? c - (A.C.Vo + A.C.ca.offsetWidth) : c + A.C.Vo;
    var e = A.C.xn + A.C.Wo;
    e + A.C.ca.offsetHeight > b.height + window.scrollY &&
      (e -= A.C.ca.offsetHeight + 2 * A.C.Wo);
    a
      ? (c = Math.max(A.C.Zl - window.scrollX, c))
      : c + A.C.ca.offsetWidth > b.width + window.scrollX - 2 * A.C.Zl &&
        (c = b.width - A.C.ca.offsetWidth - 2 * A.C.Zl);
    A.C.ca.style.top = e + "px";
    A.C.ca.style.left = c + "px";
  }
};
function Hf(a, b) {
  this.Ua = this.Hb = this.Hg = this.Ig = this.jc = this.Yb = this.cr = null;
  this.Yt = b;
  this.Yi = this.og = this.Zi = this.ig = !1;
  this.xc = a;
  this.G = this.Pf = this.pe = this.qe = this.yl = this.xl = null;
  this.bl = this.Hq = !1;
  this.Iq = !A.Ds;
}
d = Hf.prototype;
d.A = function() {
  A.Touch.ue();
  A.C.Cw();
  this.Yt.kb = null;
  this.xl && A.Ca(this.xl);
  this.yl && A.Ca(this.yl);
  this.G = this.Ua = this.Hb = this.Hg = this.Ig = null;
  this.pe && (this.pe.A(), (this.pe = null));
  this.Pf && (this.Pf.A(), (this.Pf = null));
  this.qe && (this.qe.A(), (this.qe = null));
};
function If(a, b) {
  a.Yb = qc(new F(b.clientX, b.clientY), a.cr);
  if (a.ig) var c = !1;
  else
    (c = a.Yb),
      (a.ig = Math.sqrt(c.x * c.x + c.y * c.y) > (a.G ? A.Es : A.So)),
      (c = a.ig);
  if (c) {
    if (a.jc) {
      a.Yi = !0;
      a.qe = new Af(a.jc, a.Ua);
      c = a.qe;
      A.i.ac() || A.i.O(!0);
      c.j.zb(!1);
      c.lb.Rr(!1);
      c.ag && c.tl();
      c.lb.Df && c.lb.Df(!0);
      var e = c.j.Y;
      e &&
        A.h.Ya(e.mc, c.lb.Ob() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
      Bf(a.qe, a.xc, a.Yb);
      c = !0;
    } else c = !1;
    if (!c) {
      if (a.Hb)
        if (
          (a.G
            ? (a.Hb.disabled
                ? (c = !1)
                : !Jf(a.G) || a.G.Oq(a.Yb)
                ? ((a.Ua = a.G.pa),
                  Kf(a.Ua),
                  A.i.ac() || A.i.O(!0),
                  (a.Hg = null),
                  (a.Hb = Lf(a.G, a.Hb)),
                  a.Hb.select(),
                  (c = !0))
                : (c = !1),
              (a.og = c))
            : a.Hb.$d() && (a.og = !0),
          a.og)
        ) {
          a.pe = new lf(a.Hb, a.Ua);
          c = a.pe;
          e = a.Yb;
          var f = a.Iq;
          A.i.ac() || A.i.O(!0);
          c.j.zb(!1);
          A.ya.Mm();
          if (c.Sa.getParent() || (f && c.Sa.K && L(c.Sa.K)))
            Ae(c.Sa, f),
              (e = c.Hh(e)),
              (e = rc(c.je, e)),
              c.Sa.translate(e.x, e.y),
              A.ya.qu(c.Sa);
          c.Sa.Df(!0);
          c.Sa.tl();
          (e = c.j.Y) &&
            A.h.Ya(
              e.mc,
              c.Sa.Ob() ? "blocklyToolboxDelete" : "blocklyToolboxGrab"
            );
          nf(a.pe, a.xc, a.Yb);
          c = !0;
        } else c = !1;
      else c = !1;
      !c &&
        (a.G ? Jf(a.G) : a.Ua && a.Ua.$a) &&
        ((a.Pf = a.G ? new Gf(a.G) : new Df(a.Ua)), (a.Zi = !0), a.Pf.Pl());
    }
    A.rf();
  }
  a.xc = b;
}
d.yi = function(a) {
  A.h.fl(a)
    ? this.cancel()
    : ((this.Hq = !0),
      A.ya.Mm(),
      Kf(this.Ua),
      this.Ua.$i && this.Ua.resize(),
      Mf(this.Ua),
      (this.xc = a),
      A.Cb(!!this.G),
      A.C.block(),
      this.Hb && this.Hb.select(),
      A.h.nf(a)
        ? mc(this, a)
        : (("touchstart" == a.type.toLowerCase() ||
            ("pointerdown" == a.type.toLowerCase() &&
              "mouse" != a.pointerType)) &&
            A.yv(a, this),
          (this.cr = new F(a.clientX, a.clientY)),
          (this.Iq = a.altKey || a.ctrlKey || a.metaKey),
          this.Wf(a)));
};
d.Wf = function(a) {
  this.xl = A.J(document, "mousemove", null, this.Pi.bind(this));
  this.yl = A.J(document, "mouseup", null, this.Uk.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
d.Pi = function(a) {
  If(this, a);
  this.Zi
    ? Ff(this.Pf, this.Yb)
    : this.og
    ? nf(this.pe, this.xc, this.Yb)
    : this.Yi && Bf(this.qe, this.xc, this.Yb);
  a.preventDefault();
  a.stopPropagation();
};
d.Uk = function(a) {
  If(this, a);
  A.rf();
  if (this.bl) console.log("Trying to end a gesture recursively.");
  else {
    this.bl = !0;
    if (this.Yi) Cf(this.qe, a, this.Yb);
    else if (this.og) qf(this.pe, a, this.Yb);
    else if (this.Zi) {
      var b = this.Pf;
      Ff(b, this.Yb);
      Nf(b.j);
    } else
      this.jc && !this.ig
        ? (this.jc.so && this.jc.so(), this.jc.select && this.jc.select())
        : Of(this)
        ? (this.Ig.Gf(), Pf(this))
        : !this.Hg || this.ig || Of(this)
        ? this.Hg ||
          this.jc ||
          this.Ig ||
          this.ig ||
          (A.selected && A.selected.Lf())
        : (this.G && this.G.bh
            ? this.Hb.disabled ||
              (A.i.ac() || A.i.O(!0), tf(Lf(this.G, this.Hb)))
            : A.i.R(new Bc(this.Hg, "click", void 0, void 0)),
          Pf(this),
          A.i.O(!1));
    a.preventDefault();
    a.stopPropagation();
    this.A();
  }
};
d.cancel = function() {
  if (!this.bl) {
    A.rf();
    if (this.Yi) Cf(this.qe, this.xc, this.Yb);
    else if (this.og) qf(this.pe, this.xc, this.Yb);
    else if (this.Zi) {
      var a = this.Pf;
      Ff(a, this.Yb);
      Nf(a.j);
    }
    this.A();
  }
};
function mc(a, b) {
  a.Hb
    ? (Pf(a), A.Cb(a.G), a.Hb.Oh(b))
    : a.jc
    ? a.jc.Oh(b)
    : a.Ua && !a.G && (A.Cb(), a.Ua.Oh(b));
  b.preventDefault();
  b.stopPropagation();
  a.A();
}
function Pf(a) {
  a.Hb && !a.G && sf(a.Hb);
}
function Qf(a, b) {
  a.Hg || a.jc || ((a.Hg = b), b.vc && b != $e(b) ? Rf(a, $e(b)) : Rf(a, b));
}
function Rf(a, b) {
  b.Ta ? Rf(a, b.getParent()) : (a.Hb = b);
}
function Of(a) {
  if (a.Ig) {
    var b = a.Ig;
    b = b.Rf && !!b.w && Ge(b.w);
  } else b = !1;
  return b && !a.ig && (!a.G || !a.G.bh);
}
d.ob = function() {
  return this.Zi || this.og || this.Yi;
};
A.h = {};
A.h.removeAttribute = function(a, b) {
  C && sb("10.0") ? a.setAttribute(b, null) : a.removeAttribute(b);
};
A.h.Ya = function(a, b) {
  var c = a.getAttribute("class") || "";
  if (-1 != (" " + c + " ").indexOf(" " + b + " ")) return !1;
  c && (c += " ");
  a.setAttribute("class", c + b);
  return !0;
};
A.h.yb = function(a, b) {
  var c = a.getAttribute("class");
  if (-1 == (" " + c + " ").indexOf(" " + b + " ")) return !1;
  c = c.split(/\s+/);
  for (var e = 0; e < c.length; e++)
    (c[e] && c[e] != b) || (c.splice(e, 1), e--);
  c.length
    ? a.setAttribute("class", c.join(" "))
    : A.h.removeAttribute(a, "class");
  return !0;
};
A.h.Eq = function(a, b) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + b + " ");
};
A.h.Gv = function(a) {
  a.preventDefault();
  a.stopPropagation();
};
A.h.fl = function(a) {
  return (
    "textarea" == a.target.type ||
    "text" == a.target.type ||
    "number" == a.target.type ||
    "email" == a.target.type ||
    "password" == a.target.type ||
    "search" == a.target.type ||
    "tel" == a.target.type ||
    "url" == a.target.type ||
    a.target.isContentEditable
  );
};
A.h.bc = function(a) {
  var b = new F(0, 0),
    c = a.getAttribute("x");
  c && (b.x = parseInt(c, 10));
  if ((c = a.getAttribute("y"))) b.y = parseInt(c, 10);
  if ((c = (c = a.getAttribute("transform")) && c.match(A.h.bc.mt)))
    (b.x += parseFloat(c[1])), c[3] && (b.y += parseFloat(c[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    ((c = a.match(A.h.bc.jt)) || (c = a.match(A.h.bc.kt)),
    c && ((b.x += parseFloat(c[1])), c[3] && (b.y += parseFloat(c[3]))));
  return b;
};
A.h.Lk = function(a) {
  for (var b = 0, c = 0; a; ) {
    var e = A.h.bc(a);
    b += e.x;
    c += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv margin-top")
    )
      break;
    a = a.parentNode;
  }
  return new F(b, c);
};
A.h.bc.mt = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;
A.h.bc.kt = /transform:\s*translate3d\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
A.h.bc.jt = /transform:\s*translate\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
A.h.B = function(a, b, c) {
  a = document.createElementNS(A.nc, a);
  for (var e in b) a.setAttribute(e, b[e]);
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
  c && c.appendChild(a);
  return a;
};
A.h.nf = function(a) {
  return a.ctrlKey && jb ? !0 : 2 == a.button;
};
A.h.jj = function(a, b, c) {
  var e = b.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  c || (c = b.getScreenCTM().inverse());
  return e.matrixTransform(c);
};
A.h.xo = function(a) {
  return a.length
    ? a.reduce(function(a, c) {
        return a.length < c.length ? a : c;
      }).length
    : 0;
};
A.h.St = function(a, b) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var c = 0;
  b = b || A.h.xo(a);
  for (var e = 0; e < b; e++) {
    for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return c;
    " " == f && (c = e + 1);
  }
  for (h = 1; h < a.length; h++) if ((f = a[h][e]) && " " != f) return c;
  return b;
};
A.h.Tt = function(a, b) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var c = 0;
  b = b || A.h.xo(a);
  for (var e = 0; e < b; e++) {
    for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
      if (f != a[h].substr(-e - 1, 1)) return c;
    " " == f && (c = e + 1);
  }
  for (h = 1; h < a.length; h++)
    if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c;
  return b;
};
A.h.xw = function(a) {
  return A.h.Io(a, !0);
};
A.h.Sb = function(a) {
  if (!q(a)) return a;
  a = A.h.Io(a, !1);
  return a.length ? a[0] : "";
};
A.h.up = function(a) {
  for (var b = A.g, c = /%{(BKY_[A-Z][A-Z0-9_]*)}/gi, e = c.exec(a); e; ) {
    var f = e[1];
    f = f.toUpperCase();
    "BKY_" != f.substr(0, 4)
      ? console.log(
          "WARNING: Unsupported message table prefix in %{" + e[1] + "}."
        )
      : void 0 == b[f.substr(4)] &&
        console.log("WARNING: No message string for %{" + e[1] + "}.");
    a = a.substring(e.index + f.length + 1);
    e = c.exec(a);
  }
};
A.h.Io = function(a, b) {
  var c = [],
    e = a.split("");
  e.push("");
  var f = 0;
  a = [];
  for (var h = null, k = 0; k < e.length; k++) {
    var l = e[k];
    0 == f
      ? "%" == l
        ? ((l = a.join("")) && c.push(l), (a.length = 0), (f = 1))
        : a.push(l)
      : 1 == f
      ? "%" == l
        ? (a.push(l), (f = 0))
        : b && "0" <= l && "9" >= l
        ? ((f = 2), (h = l), (l = a.join("")) && c.push(l), (a.length = 0))
        : "{" == l
        ? (f = 3)
        : (a.push("%", l), (f = 0))
      : 2 == f
      ? "0" <= l && "9" >= l
        ? (h += l)
        : (c.push(parseInt(h, 10)), k--, (f = 0))
      : 3 == f &&
        ("" == l
          ? (a.splice(0, 0, "%{"), k--, (f = 0))
          : "}" != l
          ? a.push(l)
          : ((f = a.join("")),
            /[a-zA-Z][a-zA-Z0-9_]*/.test(f)
              ? ((l = f.toUpperCase()),
                (l = Ea(l, "BKY_") ? l.substring(4) : null) && l in A.g
                  ? ((f = A.g[l]),
                    q(f)
                      ? Array.prototype.push.apply(c, A.h.Io(f, b))
                      : b
                      ? c.push(String(f))
                      : c.push(f))
                  : c.push("%{" + f + "}"))
              : c.push("%{" + f + "}"),
            (f = a.length = 0)));
  }
  (l = a.join("")) && c.push(l);
  b = [];
  for (k = a.length = 0; k < c.length; ++k)
    "string" == typeof c[k]
      ? a.push(c[k])
      : ((l = a.join("")) && b.push(l), (a.length = 0), b.push(c[k]));
  (l = a.join("")) && b.push(l);
  a.length = 0;
  return b;
};
A.h.Sd = function() {
  for (var a = A.h.Sd.Xr.length, b = [], c = 0; 20 > c; c++)
    b[c] = A.h.Sd.Xr.charAt(Math.random() * a);
  return b.join("");
};
A.h.Sd.Xr =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
A.h.vs = function(a, b) {
  a = a.split("\n");
  for (var c = 0; c < a.length; c++) a[c] = A.h.Jw(a[c], b);
  return a.join("\n");
};
A.h.Jw = function(a, b) {
  if (a.length <= b) return a;
  for (var c = a.trim().split(/\s+/), e = 0; e < c.length; e++)
    c[e].length > b && (b = c[e].length);
  e = -Infinity;
  var f = 1;
  do {
    var h = e;
    var k = a;
    a = [];
    var l = c.length / f,
      m = 1;
    for (e = 0; e < c.length - 1; e++)
      m < (e + 1.5) / l ? (m++, (a[e] = !0)) : (a[e] = !1);
    a = A.h.ws(c, a, b);
    e = A.h.Ko(c, a, b);
    a = A.h.Kw(c, a);
    f++;
  } while (e > h);
  return k;
};
A.h.Ko = function(a, b, c) {
  for (var e = [0], f = [], h = 0; h < a.length; h++)
    (e[e.length - 1] += a[h].length),
      !0 === b[h]
        ? (e.push(0), f.push(a[h].charAt(a[h].length - 1)))
        : !1 === b[h] && e[e.length - 1]++;
  a = Math.max.apply(Math, e);
  for (h = b = 0; h < e.length; h++)
    (b -= 2 * Math.pow(Math.abs(c - e[h]), 1.5)),
      (b -= Math.pow(a - e[h], 1.5)),
      -1 != ".?!".indexOf(f[h])
        ? (b += c / 3)
        : -1 != ",;)]}".indexOf(f[h]) && (b += c / 4);
  1 < e.length && e[e.length - 1] <= e[e.length - 2] && (b += 0.5);
  return b;
};
A.h.ws = function(a, b, c) {
  for (var e = A.h.Ko(a, b, c), f, h = 0; h < b.length - 1; h++)
    if (b[h] != b[h + 1]) {
      var k = [].concat(b);
      k[h] = !k[h];
      k[h + 1] = !k[h + 1];
      var l = A.h.Ko(a, k, c);
      l > e && ((e = l), (f = k));
    }
  return f ? A.h.ws(a, f, c) : b;
};
A.h.Kw = function(a, b) {
  for (var c = [], e = 0; e < a.length; e++)
    c.push(a[e]), void 0 !== b[e] && c.push(b[e] ? "\n" : " ");
  return c.join("");
};
A.h.mf = function() {
  if (void 0 !== A.h.mf.sm) return A.h.mf.sm;
  if (!g.getComputedStyle) return !1;
  var a = document.createElement("p"),
    b = "none",
    c = {
      webkitTransform: "-webkit-transform",
      OTransform: "-o-transform",
      msTransform: "-ms-transform",
      MozTransform: "-moz-transform",
      transform: "transform"
    };
  document.body.insertBefore(a, null);
  for (var e in c)
    if (void 0 !== a.style[e]) {
      a.style[e] = "translate3d(1px,1px,1px)";
      b = g.getComputedStyle(a);
      if (!b) return document.body.removeChild(a), !1;
      b = b.getPropertyValue(c[e]);
    }
  document.body.removeChild(a);
  A.h.mf.sm = "none" !== b;
  return A.h.mf.sm;
};
A.h.Wi = function(a, b) {
  var c = b.nextSibling;
  b = b.parentNode;
  if (!b) throw "Reference node has no parent.";
  c ? b.insertBefore(a, c) : b.appendChild(a);
};
A.h.Pr = function(a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" === document.readyState) a();
  else
    var b = setInterval(function() {
      "complete" === document.readyState && (clearInterval(b), a());
    }, 10);
};
A.h.uj = function(a, b) {
  a.style.transform = b;
  a.style["-webkit-transform"] = b;
};
A.h.dn = function() {
  var a = Ud(),
    b = Sf();
  return { right: a.width + b.x, bottom: a.height + b.y, top: b.y, left: b.x };
};
function Tf(a, b) {
  this.rh = a;
  this.Bo = b.spacing;
  this.Tq = b.length;
  this.rv = (this.zn = a.firstChild) && this.zn.nextSibling;
  this.mw = b.snap;
}
Tf.prototype.Af = 1;
Tf.prototype.A = function() {
  this.rh = null;
};
Tf.prototype.update = function(a) {
  this.Af = a;
  var b = this.Bo * a || 100;
  this.rh.setAttribute("width", b);
  this.rh.setAttribute("height", b);
  b = Math.floor(this.Bo / 2) + 0.5;
  var c = b - this.Tq / 2,
    e = b + this.Tq / 2;
  b *= a;
  c *= a;
  e *= a;
  Uf(this.zn, a, c, e, b, b);
  Uf(this.rv, a, b, b, c, e);
};
function Uf(a, b, c, e, f, h) {
  a &&
    (a.setAttribute("stroke-width", b),
    a.setAttribute("x1", c),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", h));
}
Tf.prototype.moveTo = function(a, b) {
  this.rh.setAttribute("x", a);
  this.rh.setAttribute("y", b);
  (C || hb) && this.update(this.Af);
};
function Vf(a) {
  var b = !!a.readOnly;
  if (b)
    var c = null,
      e = !1,
      f = !1,
      h = !1,
      k = !1,
      l = !1,
      m = !1;
  else
    (c = Wf(a.toolbox)),
      (e = !(!c || !c.getElementsByTagName("category").length)),
      (f = a.trashcan),
      void 0 === f && (f = e),
      (h = a.collapse),
      void 0 === h && (h = e),
      (k = a.comments),
      void 0 === k && (k = e),
      (l = a.disable),
      void 0 === l && (l = e),
      (m = a.sounds),
      void 0 === m && (m = !0);
  var n = !!a.rtl,
    p = a.horizontalLayout;
  void 0 === p && (p = !1);
  var t = a.toolboxPosition;
  t = "end" === t ? !1 : !0;
  t = p ? (t ? A.Ye : A.Uf) : t == n ? A.Jd : A.Xe;
  var w = a.scrollbars;
  void 0 === w && (w = e);
  var v = a.css;
  void 0 === v && (v = !0);
  var y = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (y = a.media) : a.path && (y = a.path + "media/");
  var ya = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex;
  this.u = n;
  this.Fh = ya;
  this.collapse = h;
  this.Rt = k;
  this.disable = l;
  this.readOnly = b;
  this.Xq = a.maxBlocks || Infinity;
  this.Dd = y;
  this.Dq = e;
  this.Gq = w;
  this.cv = f;
  this.bv = m;
  this.av = v;
  this.Yd = p;
  this.ae = c;
  b = a.grid || {};
  c = {};
  c.spacing = parseFloat(b.spacing) || 0;
  c.xA = b.colour || "#888";
  c.length = parseFloat(b.length) || 1;
  c.OA = 0 < c.spacing && !!b.snap;
  this.zq = c;
  a = a.zoom || {};
  b = {};
  b.controls = void 0 === a.controls ? !1 : !!a.controls;
  b.Hw = void 0 === a.wheel ? !1 : !!a.wheel;
  b.fs = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
  b.hj = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
  b.ij = void 0 === a.minScale ? 0.3 : parseFloat(a.minScale);
  b.jw = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
  this.Ib = b;
  this.wa = t;
}
Vf.prototype.Nc = null;
Vf.prototype.Ff = null;
Vf.prototype.gb = null;
function Wf(a) {
  a
    ? ("string" != typeof a &&
        ("undefined" == typeof XSLTProcessor && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a && (a = A.D.Sc(a)))
    : (a = null);
  return a;
}
function Xf(a) {
  this.j = a;
  this.ff = new Yf(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.Mf = new Yf(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.oi = A.h.B(
    "rect",
    { height: K, width: K, class: "blocklyScrollbarBackground" },
    null
  );
  A.h.Wi(this.oi, a.Hd);
}
Xf.prototype.Ra = null;
Xf.prototype.A = function() {
  J(this.oi);
  this.Ra = this.j = this.oi = null;
  this.ff.A();
  this.ff = null;
  this.Mf.A();
  this.Mf = null;
};
Xf.prototype.resize = function() {
  var a = this.j.gb();
  if (a) {
    var b = !1,
      c = !1;
    this.Ra &&
    this.Ra.va == a.va &&
    this.Ra.Va == a.Va &&
    this.Ra.eb == a.eb &&
    this.Ra.Xa == a.Xa
      ? ((this.Ra &&
          this.Ra.rc == a.rc &&
          this.Ra.ib == a.ib &&
          this.Ra.Fc == a.Fc) ||
          (b = !0),
        (this.Ra &&
          this.Ra.Xb == a.Xb &&
          this.Ra.me == a.me &&
          this.Ra.qc == a.qc) ||
          (c = !0))
      : (c = b = !0);
    b && this.ff.resize(a);
    c && this.Mf.resize(a);
    (this.Ra && this.Ra.va == a.va && this.Ra.Xa == a.Xa) ||
      this.oi.setAttribute("x", this.Mf.yc.x);
    (this.Ra && this.Ra.Va == a.Va && this.Ra.eb == a.eb) ||
      this.oi.setAttribute("y", this.ff.yc.y);
    this.Ra = a;
  }
};
Xf.prototype.set = function(a, b) {
  var c = {};
  a *= this.ff.Qb;
  b *= this.Mf.Qb;
  var e = this.Mf.kd,
    f = a / this.ff.kd;
  c.x = isNaN(f) ? 0 : f;
  e = b / e;
  c.y = isNaN(e) ? 0 : e;
  this.j.Ff(c);
  Zf(this.ff, a);
  Zf(this.Mf, b);
};
function Yf(a, b, c, e) {
  this.j = a;
  this.Gh = c || !1;
  this.jg = b;
  this.Ra = null;
  this.pi(e);
  this.yc = new F(0, 0);
  a = K;
  b
    ? (this.Rc.setAttribute("height", a),
      this.ce.setAttribute("height", a),
      this.ke.setAttribute("height", a - 5),
      this.ke.setAttribute("y", 2.5),
      (this.dj = "width"),
      (this.Dr = "x"))
    : (this.Rc.setAttribute("width", a),
      this.ce.setAttribute("width", a),
      this.ke.setAttribute("width", a - 5),
      this.ke.setAttribute("x", 2.5),
      (this.dj = "height"),
      (this.Dr = "y"));
  this.wr = A.J(this.Rc, "mousedown", this, this.Tv);
  this.xr = A.J(this.ke, "mousedown", this, this.Uv);
}
var $f, ag;
d = Yf.prototype;
d.Ln = new F(0, 0);
d.bs = 0;
d.kd = 0;
d.gf = 0;
d.Qi = 0;
d.bj = !0;
d.Xf = !0;
var K = 15;
yb && (K = 25);
Yf.prototype.A = function() {
  bg();
  A.Ca(this.wr);
  this.wr = null;
  A.Ca(this.xr);
  this.xr = null;
  J(this.ce);
  this.j = this.ke = this.Rc = this.v = this.ce = null;
};
function Zf(a, b) {
  a.Qi = b;
  a.ke.setAttribute(a.Dr, a.Qi);
}
function cg(a, b) {
  a.kd = b;
  a.ce.setAttribute(a.dj, a.kd);
  a.Rc.setAttribute(a.dj, a.kd);
}
Xf.prototype.Cg = function(a) {
  this.ff.Cg(a);
  this.Mf.Cg(a);
};
function dg(a, b, c) {
  a.yc.x = b;
  a.yc.y = c;
  A.h.uj(
    a.ce,
    "translate(" + (a.yc.x + a.Ln.x) + "px," + (a.yc.y + a.Ln.y) + "px)"
  );
}
d = Yf.prototype;
d.resize = function(a) {
  if (!a && ((a = this.j.gb()), !a)) return;
  var b = this.Ra;
  if (
    !a ||
    !b ||
    a.va != b.va ||
    a.Va != b.Va ||
    a.ib != b.ib ||
    a.me != b.me ||
    a.eb != b.eb ||
    a.Xa != b.Xa ||
    a.rc != b.rc ||
    a.Xb != b.Xb ||
    a.Fc != b.Fc ||
    a.qc != b.qc
  ) {
    this.Ra = a;
    if (this.jg) {
      b = a.va - 1;
      this.Gh && (b -= K);
      cg(this, Math.max(0, b));
      b = a.Xa + 0.5;
      this.Gh && this.j.u && (b += K);
      dg(this, b, a.eb + a.Va - K - 0.5);
      this.Gh || this.ma(this.kd < a.rc);
      this.Qb = this.kd / a.rc;
      if (-Infinity == this.Qb || Infinity == this.Qb || isNaN(this.Qb))
        this.Qb = 0;
      this.gf = Math.max(0, a.va * this.Qb);
      this.ke.setAttribute(this.dj, this.gf);
      Zf(this, eg(this, (a.ib - a.Fc) * this.Qb));
    } else {
      b = a.Va - 1;
      this.Gh && (b -= K);
      cg(this, Math.max(0, b));
      b = a.Xa + 0.5;
      this.j.u || (b += a.va - K - 1);
      dg(this, b, a.eb + 0.5);
      this.Gh || this.ma(this.kd < a.Xb);
      this.Qb = this.kd / a.Xb;
      if (-Infinity == this.Qb || Infinity == this.Qb || isNaN(this.Qb))
        this.Qb = 0;
      this.gf = Math.max(0, a.Va * this.Qb);
      this.ke.setAttribute(this.dj, this.gf);
      Zf(this, eg(this, (a.me - a.qc) * this.Qb));
    }
    fg(this);
  }
};
d.pi = function(a) {
  var b = "blocklyScrollbar" + (this.jg ? "Horizontal" : "Vertical");
  a && (b += " " + a);
  this.ce = A.h.B("svg", { class: b }, null);
  this.v = A.h.B("g", {}, this.ce);
  this.Rc = A.h.B("rect", { class: "blocklyScrollbarBackground" }, this.v);
  a = Math.floor((K - 5) / 2);
  this.ke = A.h.B(
    "rect",
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.v
  );
  A.h.Wi(this.ce, M(this.j));
};
d.V = function() {
  return this.bj;
};
d.Cg = function(a) {
  var b = a != this.Xf;
  this.Xf = a;
  b && this.Mj();
};
d.ma = function(a) {
  var b = a != this.V();
  if (this.Gh) throw "Unable to toggle visibility of paired scrollbars.";
  this.bj = a;
  b && this.Mj();
};
d.Mj = function() {
  this.Xf && this.V()
    ? this.ce.setAttribute("display", "block")
    : this.ce.setAttribute("display", "none");
};
d.Tv = function(a) {
  Mf(this.j);
  A.Touch.ue();
  bg();
  if (A.h.nf(a)) a.stopPropagation();
  else {
    var b = A.h.jj(a, M(this.j), gg(this.j));
    b = this.jg ? b.x : b.y;
    var c = A.h.Lk(this.ke);
    c = this.jg ? c.x : c.y;
    var e = this.Qi,
      f = 0.95 * this.gf;
    b <= c ? (e -= f) : b >= c + this.gf && (e += f);
    Zf(this, eg(this, e));
    fg(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
d.Uv = function(a) {
  Mf(this.j);
  bg();
  A.h.nf(a)
    ? a.stopPropagation()
    : ((this.pw = this.Qi),
      Ef(this.j),
      (this.bs = this.jg ? a.clientX : a.clientY),
      ($f = A.J(document, "mouseup", this, this.Zv)),
      (ag = A.J(document, "mousemove", this, this.Vv)),
      a.stopPropagation(),
      a.preventDefault());
};
d.Vv = function(a) {
  Zf(this, eg(this, this.pw + ((this.jg ? a.clientX : a.clientY) - this.bs)));
  fg(this);
};
d.Zv = function() {
  Nf(this.j);
  A.Touch.ue();
  bg();
};
function bg() {
  A.Cb(!0);
  $f && (A.Ca($f), ($f = null));
  ag && (A.Ca(ag), (ag = null));
}
function eg(a, b) {
  return (b = 0 >= b || isNaN(b) || a.kd < a.gf ? 0 : Math.min(b, a.kd - a.gf));
}
function fg(a) {
  var b = a.Qi / a.kd;
  isNaN(b) && (b = 0);
  var c = {};
  a.jg ? (c.x = b) : (c.y = b);
  a.j.Ff(c);
}
d.set = function(a) {
  Zf(this, eg(this, a * this.Qb));
  fg(this);
};
function hg(a, b) {
  hg.o.constructor.call(this, a, b);
  this.cl = !1;
  this.dd = {};
  this.$r = this.pj = 0;
  this.Kn = null;
}
z(hg, Hf);
d = hg.prototype;
d.yi = function(a) {
  hg.o.yi.call(this, a);
  !this.bl && A.Touch.hl(a) && ig(this, a);
};
d.Wf = function(a) {
  this.Kn = A.J(document, "mousedown", null, this.Yu.bind(this), !0);
  this.xl = A.J(document, "mousemove", null, this.Pi.bind(this), !0);
  this.yl = A.J(document, "mouseup", null, this.Uk.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
d.Yu = function(a) {
  !this.ob() && A.Touch.hl(a) && (ig(this, a), this.cl && A.rf());
};
d.Pi = function(a) {
  if (this.ob()) A.Touch.yo(a) && hg.o.Pi.call(this, a);
  else if (this.cl) {
    if (A.Touch.hl(a)) {
      this.dd[A.Touch.Rk(a)] = jg(this, a);
      var b = Object.keys(this.dd);
      if (2 == b.length) {
        b = pc(this.dd[b[0]], this.dd[b[1]]) / this.$r;
        if (0 < this.pj && Infinity > this.pj) {
          var c = b - this.pj;
          c = 0 < c ? 5 * c : 6 * c;
          var e = this.Ua,
            f = A.h.jj(a, M(e), gg(e));
          e.zoom(f.x, f.y, c);
        }
        this.pj = b;
        a.preventDefault();
      }
    }
    A.rf();
  } else hg.o.Pi.call(this, a);
};
d.Uk = function(a) {
  if (A.Touch.hl(a) && !this.ob()) {
    var b = A.Touch.Rk(a);
    this.dd[b] && delete this.dd[b];
    2 > Object.keys(this.dd).length && ((this.dd = {}), (this.pj = 0));
  }
  !this.cl || this.ob()
    ? A.Touch.yo(a) && hg.o.Uk.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.A());
};
d.A = function() {
  hg.o.A.call(this);
  this.Kn && A.Ca(this.Kn);
};
function ig(a, b) {
  a.dd[A.Touch.Rk(b)] = jg(a, b);
  var c = Object.keys(a.dd);
  2 == c.length &&
    ((a.$r = pc(a.dd[c[0]], a.dd[c[1]])), (a.cl = !0), b.preventDefault());
}
function jg(a, b) {
  return a.Ua
    ? new F(
        b.pageX ? b.pageX : b.changedTouches[0].pageX,
        b.pageY ? b.pageY : b.changedTouches[0].pageY
      )
    : null;
}
function kg() {
  Cb.call(this);
  this.we = new Ub(this);
  this.nt = this;
  this.Mn = null;
}
z(kg, Cb);
kg.prototype[Pb] = !0;
d = kg.prototype;
d.Ok = function() {
  return this.Mn;
};
d.Kl = function(a) {
  this.Mn = a;
};
d.addEventListener = function(a, b, c, e) {
  $b(this, a, b, c, e);
};
d.removeEventListener = function(a, b, c, e) {
  hc(this, a, b, c, e);
};
d.dispatchEvent = function(a) {
  var b,
    c = this.Ok();
  if (c) for (b = []; c; c = c.Ok()) b.push(c);
  c = this.nt;
  var e = a.type || a;
  if (q(a)) a = new Hb(a, c);
  else if (a instanceof Hb) a.target = a.target || c;
  else {
    var f = a;
    a = new Hb(e, c);
    bb(a, f);
  }
  f = !0;
  if (b)
    for (var h = b.length - 1; !a.xg && 0 <= h; h--) {
      var k = (a.currentTarget = b[h]);
      f = lg(k, e, !0, a) && f;
    }
  a.xg ||
    ((k = a.currentTarget = c),
    (f = lg(k, e, !0, a) && f),
    a.xg || (f = lg(k, e, !1, a) && f));
  if (b)
    for (h = 0; !a.xg && h < b.length; h++)
      (k = a.currentTarget = b[h]), (f = lg(k, e, !1, a) && f);
  return f;
};
d.Ka = function() {
  kg.o.Ka.call(this);
  this.removeAllListeners();
  this.Mn = null;
};
d.ia = function(a, b, c, e) {
  return this.we.add(String(a), b, !1, c, e);
};
d.Vq = function(a, b, c, e) {
  return this.we.add(String(a), b, !0, c, e);
};
d.Vc = function(a, b, c, e) {
  return this.we.remove(String(a), b, c, e);
};
d.removeAllListeners = function(a) {
  return this.we ? this.we.removeAll(a) : 0;
};
function lg(a, b, c, e) {
  b = a.we.ec[String(b)];
  if (!b) return !0;
  b = b.concat();
  for (var f = !0, h = 0; h < b.length; ++h) {
    var k = b[h];
    if (k && !k.Mh && k.capture == c) {
      var l = k.listener,
        m = k.Vk || k.src;
      k.hk && Wb(a.we, k);
      f = !1 !== l.call(m, e) && f;
    }
  }
  return f && 0 != e.Or;
}
d.Gi = function(a, b, c, e) {
  return this.we.Gi(String(a), b, c, e);
};
function rf(a, b, c) {
  if (x(a)) c && (a = na(a, c));
  else if (a && "function" == typeof a.handleEvent) a = na(a.handleEvent, a);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : g.setTimeout(a, b || 0);
}
function mg(a, b, c, e) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = e;
}
d = mg.prototype;
d.Lc = function() {
  return this.right - this.left;
};
d.ph = function() {
  return this.bottom - this.top;
};
d.clone = function() {
  return new mg(this.top, this.right, this.bottom, this.left);
};
d.contains = function(a) {
  return this && a
    ? a instanceof mg
      ? a.left >= this.left &&
        a.right <= this.right &&
        a.top >= this.top &&
        a.bottom <= this.bottom
      : a.x >= this.left &&
        a.x <= this.right &&
        a.y >= this.top &&
        a.y <= this.bottom
    : !1;
};
d.expand = function(a, b, c, e) {
  ha(a)
    ? ((this.top -= a.top),
      (this.right += a.right),
      (this.bottom += a.bottom),
      (this.left -= a.left))
    : ((this.top -= a),
      (this.right += Number(b)),
      (this.bottom += Number(c)),
      (this.left -= Number(e)));
  return this;
};
d.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
d.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
d.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
d.translate = function(a, b) {
  a instanceof F
    ? ((this.left += a.x),
      (this.right += a.x),
      (this.top += a.y),
      (this.bottom += a.y))
    : ((this.left += a),
      (this.right += a),
      r(b) && ((this.top += b), (this.bottom += b)));
  return this;
};
d.scale = function(a, b) {
  b = r(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= b;
  this.bottom *= b;
  return this;
};
function ng(a, b, c, e) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = e;
}
d = ng.prototype;
d.clone = function() {
  return new ng(this.left, this.top, this.width, this.height);
};
d.contains = function(a) {
  return a instanceof F
    ? a.x >= this.left &&
        a.x <= this.left + this.width &&
        a.y >= this.top &&
        a.y <= this.top + this.height
    : this.left <= a.left &&
        this.left + this.width >= a.left + a.width &&
        this.top <= a.top &&
        this.top + this.height >= a.top + a.height;
};
d.ze = function() {
  return new Nd(this.width, this.height);
};
d.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
d.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
d.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
d.translate = function(a, b) {
  a instanceof F
    ? ((this.left += a.x), (this.top += a.y))
    : ((this.left += a), r(b) && (this.top += b));
  return this;
};
d.scale = function(a, b) {
  b = r(b) ? b : a;
  this.left *= a;
  this.width *= a;
  this.top *= b;
  this.height *= b;
  return this;
};
function og(a) {
  this.j = a;
}
d = og.prototype;
d.Vf = 47;
d.Vj = 44;
d.Tg = 16;
d.$l = 20;
d.Yh = 20;
d.$j = 10;
d.gm = 0;
d.hm = 32;
d.yh = !1;
d.v = null;
d.Rl = null;
d.yn = 0;
d.qf = 0;
d.pb = 0;
d.Oe = 0;
d.T = function() {
  this.v = A.h.B("g", { class: "blocklyTrash" }, null);
  var a = String(Math.random()).substring(2);
  var b = A.h.B("clipPath", { id: "blocklyTrashBodyClipPath" + a }, this.v);
  A.h.B("rect", { width: this.Vf, height: this.Vj, y: this.Tg }, b);
  A.h
    .B(
      "image",
      {
        width: A.Wb.width,
        x: -this.gm,
        height: A.Wb.height,
        y: -this.hm,
        "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")"
      },
      this.v
    )
    .setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      this.j.options.Dd + A.Wb.url
    );
  b = A.h.B("clipPath", { id: "blocklyTrashLidClipPath" + a }, this.v);
  A.h.B("rect", { width: this.Vf, height: this.Tg }, b);
  this.Rl = A.h.B(
    "image",
    {
      width: A.Wb.width,
      x: -this.gm,
      height: A.Wb.height,
      y: -this.hm,
      "clip-path": "url(#blocklyTrashLidClipPath" + a + ")"
    },
    this.v
  );
  this.Rl.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    this.j.options.Dd + A.Wb.url
  );
  A.J(this.v, "mouseup", this, this.click);
  this.mm();
  return this.v;
};
d.W = function(a) {
  this.gi = this.$l + a;
  pf(this, !1);
  return this.gi + this.Vj + this.Tg;
};
d.A = function() {
  this.v && (J(this.v), (this.v = null));
  this.j = this.Rl = null;
  g.clearTimeout(this.yn);
};
d.position = function() {
  var a = this.j.gb();
  a &&
    (this.j.u
      ? ((this.pb = this.Yh + K),
        a.wa == A.Xe && ((this.pb += a.Dk), this.j.Y && (this.pb += a.Xa)))
      : ((this.pb = a.va + a.Xa - this.Vf - this.Yh - K),
        a.wa == A.Jd && (this.pb -= a.Dk)),
    (this.Oe = a.Va + a.eb - (this.Vj + this.Tg) - this.gi),
    a.wa == A.Uf && (this.Oe -= a.rq),
    this.v.setAttribute(
      "transform",
      "translate(" + this.pb + "," + this.Oe + ")"
    ));
};
d.mh = function() {
  if (!this.v) return null;
  var a = this.v.getBoundingClientRect();
  return new ng(
    a.left + this.gm - this.$j,
    a.top + this.hm - this.$j,
    this.Vf + 2 * this.$j,
    this.Tg + this.Vj + 2 * this.$j
  );
};
function pf(a, b) {
  a.yh != b && (g.clearTimeout(a.yn), (a.yh = b), a.mm());
}
d.mm = function() {
  this.qf += this.yh ? 0.2 : -0.2;
  this.qf = Math.min(Math.max(this.qf, 0), 1);
  var a = 45 * this.qf;
  this.Rl.setAttribute(
    "transform",
    "rotate(" +
      (this.j.u ? -a : a) +
      "," +
      (this.j.u ? 4 : this.Vf - 4) +
      "," +
      (this.Tg - 2) +
      ")"
  );
  this.v.style.opacity = 0.4 + 0.4 * this.qf;
  0 < this.qf && 1 > this.qf && (this.yn = rf(this.mm, 20, this));
};
d.close = function() {
  pf(this, !1);
};
d.click = function() {
  var a = this.j.rw - this.j.scrollX,
    b = this.j.tw - this.j.scrollY;
  Math.sqrt(a * a + b * b) > A.So || console.log("TODO: Inspect trash.");
};
function Pc(a, b, c, e) {
  this.s = a;
  this.name = b;
  this.type = c || "";
  this.wh = e || A.h.Sd();
  A.i.R(new yc(this));
}
Pc.prototype.ha = function() {
  return this.wh;
};
function pg(a, b) {
  a = String(a.name).toLowerCase();
  b = String(b.name).toLowerCase();
  return a < b ? -1 : a == b ? 0 : 1;
}
A.I = {};
A.I.Sf = A.bp;
A.I.kp = function(a) {
  var b = Nc(a);
  a = Object.create(null);
  for (var c = 0; c < b.length; c++) {
    var e = Qc(b[c]);
    if (e)
      for (var f = 0; f < e.length; f++) {
        var h = e[f];
        h.ha() && (a[h.ha()] = h);
      }
  }
  b = [];
  for (var k in a) b.push(a[k]);
  return b;
};
A.I.rA = function() {
  console.warn(
    "Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub."
  );
};
A.I.qt = function(a) {
  var b = Nc(a);
  a = {};
  for (var c = 0; c < b.length; c++) {
    var e = b[c];
    if (e.Hu) {
      e = e.Hu();
      for (var f = 0; f < e.length; f++) a[e[f]] = e[f];
    }
  }
  b = [];
  for (var h in a) b.push(a[h]);
  return b;
};
A.I.cf = function(a) {
  var b = [],
    c = H("button");
  c.setAttribute("text", A.g.NEW_VARIABLE);
  c.setAttribute("callbackKey", "CREATE_VARIABLE");
  qg(a, function(a) {
    A.I.eh(a.pa);
  });
  b.push(c);
  a = A.I.Sm(a);
  return (b = b.concat(a));
};
A.I.Sm = function(a) {
  a = a.Ki("");
  a.sort(pg);
  var b = [];
  if (0 < a.length) {
    var c = a[0];
    if (A.Da.variables_set) {
      var e = A.Da.math_change ? 8 : 24;
      e =
        '<xml><block type="variables_set" gap="' +
        e +
        '">' +
        A.I.lh(c) +
        "</block></xml>";
      e = A.D.Sc(e).firstChild;
      b.push(e);
    }
    A.Da.math_change &&
      ((e = A.Da.variables_get ? 20 : 8),
      (e =
        '<xml><block type="math_change" gap="' +
        e +
        '">' +
        A.I.lh(c) +
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>'),
      (e = A.D.Sc(e).firstChild),
      b.push(e));
    for (c = 0; (e = a[c]); c++)
      A.Da.variables_get &&
        ((e =
          '<xml><block type="variables_get" gap="8">' +
          A.I.lh(e) +
          "</block></xml>"),
        (e = A.D.Sc(e).firstChild),
        b.push(e));
  }
  return b;
};
A.I.Eu = function(a) {
  a = a.xe();
  var b = "";
  if (a.length)
    for (var c = 1, e = 0, f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e); !b; ) {
      for (var h = !1, k = 0; k < a.length; k++)
        if (a[k].name.toLowerCase() == f) {
          h = !0;
          break;
        }
      h
        ? (e++,
          25 == e && ((e = 0), c++),
          (f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e)),
          1 < c && (f += c))
        : (b = f);
    }
  else b = "i";
  return b;
};
A.I.eh = function(a, b, c) {
  function e(c) {
    A.I.Ir(A.g.NEW_VARIABLE_TITLE, c, function(c) {
      if (c) {
        var h = A.I.Dv(c, a);
        if (h) {
          var k = c.toLowerCase();
          if (h.type == f) var n = A.g.VARIABLE_ALREADY_EXISTS.replace("%1", k);
          else
            (n = A.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (n = n.replace("%1", k).replace("%2", h.type));
          A.alert(n, function() {
            e(c);
          });
        } else a.ed(c, f), b && b(c);
      } else b && b(null);
    });
  }
  var f = c || "";
  e("");
};
ba("Blockly.Variables.createVariableButtonHandler", A.I.eh);
A.I.ed = A.I.eh;
ba("Blockly.Variables.createVariable", A.I.ed);
A.I.Zn = function(a, b) {
  function c(e) {
    var f = A.g.RENAME_VARIABLE_TITLE.replace("%1", b.name);
    A.I.Ir(f, e, function(e) {
      if (e) {
        var f = A.I.Ev(e, b.type, a);
        f
          ? ((f = A.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              e.toLowerCase()
            ).replace("%2", f.type)),
            A.alert(f, function() {
              c(e);
            }))
          : a.Ag(b.ha(), e);
      }
    });
  }
  c("");
};
A.I.Ir = function(a, b, c) {
  A.prompt(a, b, function(a) {
    a &&
      ((a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")),
      a == A.g.RENAME_VARIABLE || a == A.g.NEW_VARIABLE) &&
      (a = null);
    c(a);
  });
};
A.I.Ev = function(a, b, c) {
  c = c.na.xe();
  a = a.toLowerCase();
  for (var e = 0, f; (f = c[e]); e++)
    if (f.name.toLowerCase() == a && f.type != b) return f;
  return null;
};
A.I.Dv = function(a, b) {
  b = b.na.xe();
  a = a.toLowerCase();
  for (var c = 0, e; (e = b[c]); c++) if (e.name.toLowerCase() == a) return e;
  return null;
};
A.I.lh = function(a) {
  var b = a.type;
  "" == b && (b = "''");
  return (
    '<field name="VAR" id="' +
    a.ha() +
    '" variabletype="' +
    Ia(b) +
    '">' +
    Ia(a.name) +
    "</field>"
  );
};
A.I.CA = function(a) {
  a = "<xml>" + A.I.lh(a) + "</xml>";
  return A.D.Sc(a).firstChild;
};
A.I.xq = function(a, b, c, e) {
  var f = A.I.xd(a, b, c, e);
  f || (f = A.I.Xt(a, b, c, e));
  return f;
};
A.I.xd = function(a, b, c, e) {
  var f = a.Jh;
  if (b) {
    var h = a.Ae(b);
    !h && f && (h = f.Ae(b));
  } else if (c) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    h = a.xd(c, e);
    !h && f && (h = f.xd(c, e));
  }
  return h;
};
A.I.Xt = function(a, b, c, e) {
  var f = a.Jh;
  c || (c = A.I.Eu(a.De ? a.Mg : a));
  return f ? f.ed(c, e, b) : a.ed(c, e, b);
};
A.I.uq = function(a, b) {
  a = a.xe();
  var c = [];
  if (b.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == b.indexOf(f) && c.push(f);
    }
  return c;
};
A.$c = {};
A.$c.Mv = function(a) {
  A.I.eh(a.pa, null, "String");
};
A.$c.Lv = function(a) {
  A.I.eh(a.pa, null, "Number");
};
A.$c.Kv = function(a) {
  A.I.eh(a.pa, null, "Colour");
};
A.$c.cf = function(a) {
  var b = [],
    c = H("button");
  c.setAttribute("text", A.g.NEW_STRING_VARIABLE);
  c.setAttribute("callbackKey", "CREATE_VARIABLE_STRING");
  b.push(c);
  c = H("button");
  c.setAttribute("text", A.g.NEW_NUMBER_VARIABLE);
  c.setAttribute("callbackKey", "CREATE_VARIABLE_NUMBER");
  b.push(c);
  c = H("button");
  c.setAttribute("text", A.g.NEW_COLOUR_VARIABLE);
  c.setAttribute("callbackKey", "CREATE_VARIABLE_COLOUR");
  b.push(c);
  a.dg.CREATE_VARIABLE_STRING = A.$c.Mv;
  a.dg.CREATE_VARIABLE_NUMBER = A.$c.Lv;
  a.dg.CREATE_VARIABLE_COLOUR = A.$c.Kv;
  a = A.$c.Sm(a);
  return (b = b.concat(a));
};
A.$c.Sm = function(a) {
  a = a.xe();
  a.sort(pg);
  var b = [];
  if (0 < a.length) {
    if (A.Da.variables_set_dynamic) {
      var c =
        '<xml><block type="variables_set_dynamic" gap="24">' +
        A.I.lh(a[0]) +
        "</block></xml>";
      c = A.D.Sc(c).firstChild;
      b.push(c);
    }
    if (A.Da.variables_get_dynamic)
      for (var e = 0; (c = a[e]); e++)
        (c =
          '<xml><block type="variables_get_dynamic" gap="8">' +
          A.I.lh(c) +
          "</block></xml>"),
          (c = A.D.Sc(c).firstChild),
          b.push(c);
  }
  return b;
};
function rg(a) {
  this.Nn = a;
  this.di = Object.create(null);
}
d = rg.prototype;
d.vn = null;
d.A = function() {
  this.di = this.Nn = null;
};
d.load = function(a, b) {
  if (a.length) {
    try {
      var c = new window.Audio();
    } catch (l) {
      return;
    }
    for (var e, f = 0; f < a.length; f++) {
      var h = a[f],
        k = h.match(/\.(\w+)$/);
      if (k && c.canPlayType("audio/" + k[1])) {
        e = new window.Audio(h);
        break;
      }
    }
    e && e.play && (this.di[b] = e);
  }
};
d.preload = function() {
  for (var a in this.di) {
    var b = this.di[a];
    b.volume = 0.01;
    b.play();
    b.pause();
    if (mb || lb) break;
  }
};
d.play = function(a, b) {
  var c = this.di[a];
  c
    ? ((a = new Date()),
      (null != this.vn && a - this.vn < A.et) ||
        ((this.vn = a),
        (c = (tb && 9 === tb) || mb || kb ? c : c.cloneNode()),
        (c.volume = void 0 === b ? 1 : b),
        c.play()))
    : this.Nn && this.Nn.bd.play(a, b);
};
d = uf.prototype;
d.vb = function() {
  return { width: this.Lc(), height: this.ph() };
};
d.$ = function() {
  if (!this.zf) {
    var a = this.vb();
    this.ri();
    this.v.appendChild(this.Jc);
    this.Kg = A.h.B("rect", {
      class: "blocklyCommentHandleTarget",
      x: 0,
      y: 0
    });
    this.v.appendChild(this.Kg);
    this.If = A.h.B("rect", {
      class: "blocklyCommentTarget",
      x: 0,
      y: 0,
      rx: 3,
      ry: 3
    });
    this.v.appendChild(this.If);
    this.rb = A.h.B(
      "g",
      { class: this.u ? "blocklyResizeSW" : "blocklyResizeSE" },
      this.v
    );
    A.h.B(
      "polygon",
      { points: "0,x x,x x,0".replace(/x/g, (8).toString()) },
      this.rb
    );
    A.h.B(
      "line",
      { class: "blocklyResizeLine", x1: 8 / 3, y1: 7, x2: 7, y2: 8 / 3 },
      this.rb
    );
    A.h.B(
      "line",
      { class: "blocklyResizeLine", x1: 16 / 3, y1: 7, x2: 7, y2: 16 / 3 },
      this.rb
    );
    this.Ob() &&
      ((this.bf = A.h.B("g", { class: "blocklyCommentDeleteIcon" }, this.v)),
      (this.bq = A.h.B(
        "circle",
        { class: "blocklyDeleteIconShape", r: "7", cx: "7.5", cy: "7.5" },
        this.bf
      )),
      A.h.B(
        "line",
        {
          x1: "5",
          y1: "10",
          x2: "10",
          y2: "5",
          stroke: "#fff",
          "stroke-width": "2"
        },
        this.bf
      ),
      A.h.B(
        "line",
        {
          x1: "5",
          y1: "5",
          x2: "10",
          y2: "10",
          stroke: "#fff",
          "stroke-width": "2"
        },
        this.bf
      ));
    sg(this, a.width, a.height);
    this.bb.value = this.Gc;
    this.zf = !0;
    this.rb && A.J(this.rb, "mousedown", this, this.ao);
    this.Ob() &&
      (A.J(this.bf, "mousedown", this, this.ju),
      A.J(this.bf, "mouseout", this, this.ku),
      A.J(this.bf, "mouseup", this, this.lu));
  }
};
d.ri = function() {
  this.Jc = A.h.B(
    "foreignObject",
    { x: 0, y: 10, class: "blocklyCommentForeignObject" },
    null
  );
  var a = document.createElementNS(A.Ue, "body");
  a.setAttribute("xmlns", A.Ue);
  a.className = "blocklyMinimalBody";
  var b = document.createElementNS(A.Ue, "textarea");
  b.className = "blocklyCommentTextarea";
  b.setAttribute("dir", this.u ? "RTL" : "LTR");
  a.appendChild(b);
  this.bb = b;
  this.Jc.appendChild(a);
  A.J(b, "wheel", this, function(a) {
    a.stopPropagation();
  });
  A.J(b, "change", this, function() {
    this.ld(b.value);
  });
  return this.Jc;
};
d.ao = function(a) {
  tg(this);
  A.h.nf(a) ||
    (this.s.Pl(a, new F(this.s.u ? -this.ba : this.ba, this.xa)),
    (this.Eh = A.J(document, "mouseup", this, this.gw)),
    (this.Jn = A.J(document, "mousemove", this, this.bo)),
    A.Cb());
  a.stopPropagation();
};
d.ju = function(a) {
  A.h.Ya(this.bq, "blocklyDeleteIconHighlighted");
  a.stopPropagation();
};
d.ku = function() {
  A.h.yb(this.bq, "blocklyDeleteIconHighlighted");
};
d.lu = function(a) {
  this.A(!0, !0);
  a.stopPropagation();
};
function tg(a) {
  a.Eh && (A.Ca(a.Eh), (a.Eh = null));
  a.Jn && (A.Ca(a.Jn), (a.Jn = null));
}
d.gw = function() {
  A.Touch.ue();
  tg(this);
};
d.bo = function(a) {
  this.gk = !1;
  a = ve(this.s, a);
  sg(this, this.u ? -a.x : a.x, a.y);
};
function sg(a, b, c) {
  b = Math.max(b, 45);
  c = Math.max(c, 30);
  a.ba = b;
  a.xa = c;
  a.Hj.setAttribute("width", b);
  a.Hj.setAttribute("height", c);
  a.If.setAttribute("width", b);
  a.If.setAttribute("height", c);
  a.Kg.setAttribute("width", b);
  a.Kg.setAttribute("height", 10);
  a.u &&
    (a.Hj.setAttribute("transform", "scale(-1 1)"),
    a.If.setAttribute("transform", "scale(-1 1)"));
  a.rb &&
    (a.u
      ? (a.rb.setAttribute(
          "transform",
          "translate(" + (-b + 8) + "," + (c - 8) + ") scale(-1 1)"
        ),
        a.bf.setAttribute(
          "transform",
          "translate(" + (-b + 8) + ",-8) scale(-1 1)"
        ))
      : (a.rb.setAttribute(
          "transform",
          "translate(" + (b - 8) + "," + (c - 8) + ")"
        ),
        a.bf.setAttribute("transform", "translate(" + (b - 8) + ",-8)")));
  b = a.vb();
  a.Jc.setAttribute("width", b.width);
  a.Jc.setAttribute("height", b.height - 10);
  a.u && a.Jc.setAttribute("x", -b.width);
  a.bb.style.width = b.width - 4 + "px";
  a.bb.style.height = b.height - 4 - 10 + "px";
}
d.so = function() {
  var a = this;
  this.Ci = !0;
  setTimeout(function() {
    a.bb.focus();
    A.h.Ya(a.v, "blocklyFocused");
    A.h.Ya(a.If, "blocklyCommentTargetFocused");
    A.h.Ya(a.Kg, "blocklyCommentHandleTargetFocused");
  }, 0);
};
function wf(a) {
  a.Ci = !1;
  setTimeout(function() {
    a.bb.blur();
    A.h.yb(a.v, "blocklyFocused");
    A.h.yb(a.If, "blocklyCommentTargetFocused");
    A.h.yb(a.Kg, "blocklyCommentHandleTargetFocused");
  }, 0);
}
function ug(a) {
  this.ni = a;
  this.T();
}
d = ug.prototype;
d.Na = null;
d.Od = null;
d.ni = null;
d.T = function() {
  this.Na ||
    ((this.Na = A.h.B(
      "svg",
      {
        xmlns: A.nc,
        "xmlns:html": A.Ue,
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible"
      },
      null
    )),
    this.ni.appendChild(this.Na));
};
d.Pe = function(a, b) {
  a = a.toFixed(0);
  b = b.toFixed(0);
  this.Na.style.display = "block";
  A.h.uj(this.Na, "translate3d(" + a + "px, " + b + "px, 0px)");
};
d.Qk = function() {
  return A.h.bc(this.Na);
};
d.ki = function(a) {
  if (!a)
    throw "Couldn't clear and hide the drag surface: missing new surface.";
  var b = this.Na.childNodes[0],
    c = this.Na.childNodes[1];
  if (
    !(
      b &&
      c &&
      A.h.Eq(b, "blocklyBlockCanvas") &&
      A.h.Eq(c, "blocklyBubbleCanvas")
    )
  )
    throw "Couldn't clear and hide the drag surface.  A node was missing.";
  null != this.Ed ? A.h.Wi(b, this.Ed) : a.insertBefore(b, a.firstChild);
  A.h.Wi(c, b);
  this.Na.style.display = "none";
  A.h.uj(this.Na, "");
  this.Ed = null;
};
A.D = {};
A.D.Ul = function(a, b) {
  var c = H("xml");
  c.appendChild(A.D.Fw(A.I.kp(a)));
  for (var e = Zc(a, !0), f = 0, h; (h = e[f]); f++) c.appendChild(h.Ij(b));
  a = I(a, !0);
  for (f = 0; (e = a[f]); f++) c.appendChild(A.D.qm(e, b));
  return c;
};
A.D.Fw = function(a) {
  for (var b = H("variables"), c = 0, e; (e = a[c]); c++) {
    var f = H("variable", null, e.name);
    f.setAttribute("type", e.type);
    f.setAttribute("id", e.ha());
    b.appendChild(f);
  }
  return b;
};
A.D.qm = function(a, b) {
  var c;
  a.s.u && (c = a.s.Lc());
  b = A.D.$e(a, b);
  var e = a.la();
  b.setAttribute("x", Math.round(a.s.u ? c - e.x : e.x));
  b.setAttribute("y", Math.round(e.y));
  return b;
};
A.D.zu = function(a) {
  null == a.getValue() && (a.mg(), a.getValue());
  var b = a.xd();
  if (!b) throw Error("Tried to serialize a variable field with no variable.");
  var c = H("field", null, b.name);
  c.setAttribute("name", a.name);
  c.setAttribute("id", b.ha());
  c.setAttribute("variabletype", b.type);
  return c;
};
A.D.Au = function(a) {
  if (a.name && a.Rf) {
    if (a.Kh()) return A.D.zu(a);
    var b = H("field", null, a.getValue());
    b.setAttribute("name", a.name);
    return b;
  }
  return null;
};
A.D.rt = function(a, b) {
  for (var c = 0, e; (e = a.Z[c]); c++)
    for (var f = 0, h; (h = e.Qa[f]); f++) (h = A.D.Au(h)) && b.appendChild(h);
};
A.D.$e = function(a, b) {
  var c = H(a.Ta ? "shadow" : "block");
  c.setAttribute("type", a.type);
  b || c.setAttribute("id", a.id);
  if (a.gc) {
    var e = a.gc();
    e && (e.hasChildNodes() || e.hasAttributes()) && c.appendChild(e);
  }
  A.D.rt(a, c);
  if ((e = a.Ik())) {
    e = H("comment", null, e);
    if ("object" == typeof a.Ja) {
      e.setAttribute("pinned", a.Ja.V());
      var f = a.Ja.fg();
      e.setAttribute("h", f.height);
      e.setAttribute("w", f.width);
    }
    c.appendChild(e);
  }
  a.data && ((e = H("data", null, a.data)), c.appendChild(e));
  f = 0;
  for (var h; (h = a.Z[f]); f++) {
    var k,
      l = !0;
    if (h.type != A.od) {
      var m = L(h.connection);
      h.type == A.cb
        ? (k = H("value"))
        : h.type == A.Ma && (k = H("statement"));
      e = h.connection.ge;
      !e || (m && m.Ta) || k.appendChild(A.D.Bp(e));
      m && (k.appendChild(A.D.$e(m, b)), (l = !1));
      k.setAttribute("name", h.name);
      l || c.appendChild(k);
    }
  }
  a.jv != a.lf && c.setAttribute("inline", a.lf);
  a.isCollapsed() && c.setAttribute("collapsed", !0);
  a.disabled && c.setAttribute("disabled", !0);
  a.Ob() || a.Ta || c.setAttribute("deletable", !1);
  a.$d() || a.Ta || c.setAttribute("movable", !1);
  Ge(a) || c.setAttribute("editable", !1);
  if ((f = Hc(a))) (k = H("next", null, A.D.$e(f, b))), c.appendChild(k);
  e = a.K && a.K.ge;
  !e || (f && f.Ta) || k.appendChild(A.D.Bp(e));
  return c;
};
A.D.Bp = function(a) {
  for (var b = (a = a.cloneNode(!0)), c; b; )
    if (b.firstChild) b = b.firstChild;
    else {
      for (; b && !b.nextSibling; )
        (c = b),
          (b = b.parentNode),
          3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && J(c);
      b &&
        ((c = b),
        (b = b.nextSibling),
        3 == c.nodeType && "" == c.data.trim() && J(c));
    }
  return a;
};
A.D.Hc = function(a) {
  return new XMLSerializer().serializeToString(a);
};
A.D.AA = function(a) {
  a = A.D.Hc(a).split("<");
  for (var b = "", c = 1; c < a.length; c++) {
    var e = a[c];
    "/" == e[0] && (b = b.substring(2));
    a[c] = b + "<" + e;
    "/" != e[0] && "/>" != e.slice(-2) && (b += "  ");
  }
  a = a.join("\n");
  a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
  return a.replace(/^\n/, "");
};
A.D.Sc = function(a) {
  return new DOMParser().parseFromString(a, "text/xml").firstChild;
};
A.D.wA = function(a, b) {
  b.zb(!1);
  b.clear();
  a = A.D.ve(a, b);
  b.zb(!0);
  return a;
};
A.D.ve = function(a, b) {
  if (a instanceof Xc) {
    var c = a;
    a = b;
    b = c;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  b.u && (e = b.Lc());
  c = [];
  vg();
  var f = a.childNodes.length,
    h = A.i.ac();
  h || A.i.O(!0);
  b.zb && b.zb(!1);
  var k = !0;
  try {
    for (var l = 0; l < f; l++) {
      var m = a.childNodes[l],
        n = m.nodeName.toLowerCase();
      if ("block" == n || ("shadow" == n && !A.i.Rb)) {
        var p = A.D.ih(m, b);
        c.push(p.id);
        var t = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
          w = m.hasAttribute("y") ? parseInt(m.getAttribute("y"), 10) : 10;
        isNaN(t) || isNaN(w) || p.moveBy(b.u ? e - t : t, w);
        k = !1;
      } else if ("shadow" == n) k = !1;
      else if ("comment" == n)
        if (b.U) zf(m, b, e);
        else {
          var v = m,
            y = b,
            ya = Wc(v),
            Jc = new Tc(y, ya.content, ya.Bq, ya.ss, ya.id),
            Na = parseInt(v.getAttribute("x"), 10),
            pd = parseInt(v.getAttribute("y"), 10);
          isNaN(Na) || isNaN(pd) || Jc.moveBy(Na, pd);
          Uc(Jc);
        }
      else if ("variables" == n) {
        if (k) A.D.wu(m, b);
        else
          throw Error(
            "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
          );
        k = !1;
      }
    }
  } finally {
    h || A.i.O(!1), wg();
  }
  b.zb && b.zb(!0);
  return c;
};
A.D.sA = function(a, b) {
  if (b.hasOwnProperty("scale")) {
    var c = N;
    try {
      N = 0;
      var e = xg(b);
    } finally {
      N = c;
    }
  }
  a = A.D.ve(a, b);
  if (e && e.height) {
    c = e.y + e.height;
    var f = e.x;
    var h = Infinity,
      k = Infinity;
    for (e = 0; e < a.length; e++) {
      var l = Gc(b, a[e]).la();
      l.y < k && (k = l.y);
      l.x < h && (h = l.x);
    }
    c = c - k + 10;
    f -= h;
    var m;
    b.u && (m = b.Lc());
    for (e = 0; e < a.length; e++) Gc(b, a[e]).moveBy(b.u ? m - f : f, c);
  }
  return a;
};
A.D.ih = function(a, b) {
  if (a instanceof Xc) {
    var c = a;
    a = b;
    b = c;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  A.i.disable();
  c = b.xe();
  try {
    var e = A.D.Nm(a, b),
      f = tc(e, !1);
    if (b.U) {
      yg(e, !0);
      for (var h = f.length - 1; 0 <= h; h--) f[h].Ad();
      for (h = f.length - 1; 0 <= h; h--) f[h].$(!1);
      setTimeout(function() {
        e.s && yg(e, !1);
      }, 1);
      jf(e);
      xf(b);
    } else for (h = f.length - 1; 0 <= h; h--) f[h].mg();
  } finally {
    A.i.enable();
  }
  if (A.i.isEnabled()) {
    a = A.I.uq(b, c);
    for (h = 0; h < a.length; h++) A.i.R(new yc(a[h]));
    A.i.R(new A.i.Xj(e));
  }
  return e;
};
A.D.wu = function(a, b) {
  for (var c = 0, e; (e = a.children[c]); c++) {
    var f = e.getAttribute("type"),
      h = e.getAttribute("id");
    e = e.textContent;
    if (null == f) throw Error("Variable with id, " + h + " is without a type");
    b.ed(e, f, h);
  }
};
A.D.Nm = function(a, b) {
  var c = null,
    e = a.getAttribute("type"),
    f = a.getAttribute("id");
  c = b.lj(e, f);
  var h = null;
  f = 0;
  for (var k; (k = a.childNodes[f]); f++)
    if (3 != k.nodeType) {
      for (var l = (h = null), m = 0, n; (n = k.childNodes[m]); m++)
        1 == n.nodeType &&
          ("block" == n.nodeName.toLowerCase()
            ? (h = n)
            : "shadow" == n.nodeName.toLowerCase() && (l = n));
      !h && l && (h = l);
      m = k.getAttribute("name");
      switch (k.nodeName.toLowerCase()) {
        case "mutation":
          c.ud && (c.ud(k), c.Ad && c.Ad());
          break;
        case "comment":
          c.tj(k.textContent);
          var p = k.getAttribute("pinned");
          p &&
            !c.vc &&
            setTimeout(function() {
              c.Ja && c.Ja.ma && c.Ja.ma("true" == p);
            }, 1);
          h = parseInt(k.getAttribute("w"), 10);
          k = parseInt(k.getAttribute("h"), 10);
          !isNaN(h) && !isNaN(k) && c.Ja && c.Ja.ma && c.Ja.Bf(h, k);
          break;
        case "data":
          c.data = k.textContent;
          break;
        case "title":
        case "field":
          A.D.vu(c, m, k);
          break;
        case "value":
        case "statement":
          k = Be(c, m);
          if (!k) {
            console.warn("Ignoring non-existent input " + m + " in block " + e);
            break;
          }
          l && (k.connection.ge = l);
          h &&
            ((h = A.D.Nm(h, b)),
            h.L ? k.connection.connect(h.L) : h.X && k.connection.connect(h.X));
          break;
        case "next":
          l && c.K && (c.K.ge = l);
          h && ((h = A.D.Nm(h, b)), c.K.connect(h.X));
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  (b = a.getAttribute("inline")) && c.Ef("true" == b);
  (b = a.getAttribute("disabled")) && c.Cf("true" == b || "disabled" == b);
  (b = a.getAttribute("deletable")) && c.vj("true" == b);
  (b = a.getAttribute("movable")) && c.Dg("true" == b);
  (b = a.getAttribute("editable")) && c.ro("true" == b);
  (b = a.getAttribute("collapsed")) && c.Bg("true" == b);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = c.df(!1);
    for (f = 0; a[f]; f++);
    c.vo(!0);
  }
  return c;
};
A.D.uu = function(a, b, c, e) {
  var f = b.getAttribute("variabletype") || "";
  "''" == f && (f = "");
  a = A.I.xq(a, b.id, c, f);
  if (null != f && f !== a.type)
    throw Error(
      "Serialized variable type with id '" +
        a.ha() +
        "' had type " +
        a.type +
        ", and does not match variable field that references it: " +
        A.D.Hc(b) +
        "."
    );
  e.setValue(a.ha());
};
A.D.vu = function(a, b, c) {
  var e = xe(a, b);
  e
    ? ((a = a.s),
      (b = c.textContent),
      e.Kh() ? A.D.uu(a, c, b, e) : e.setValue(b))
    : console.warn("Ignoring non-existent field " + b + " in block " + a.type);
};
A.D.mu = function(a) {
  for (var b = 0, c; (c = a.childNodes[b]); b++)
    if ("next" == c.nodeName.toLowerCase()) {
      a.removeChild(c);
      break;
    }
};
g.Blockly || (g.Blockly = {});
g.Blockly.Xml || (g.Blockly.Xml = {});
g.Blockly.Xml.domToText = A.D.Hc;
g.Blockly.Xml.domToWorkspace = A.D.ve;
g.Blockly.Xml.textToDom = A.D.Sc;
g.Blockly.Xml.workspaceToDom = A.D.Ul;
// Copyright 2015 Google Inc.  Apache License 2.0
function zg(a) {
  this.j = a;
}
d = zg.prototype;
d.Vf = 32;
d.To = 110;
d.$l = 20;
d.Yh = 20;
d.v = null;
d.pb = 0;
d.Oe = 0;
d.T = function() {
  this.v = A.h.B("g", { class: "blocklyZoom" }, null);
  var a = String(Math.random()).substring(2);
  Ag(this, a);
  Bg(this, a);
  Cg(this, a);
  return this.v;
};
d.W = function(a) {
  this.gi = this.$l + a;
  return this.gi + this.To;
};
d.A = function() {
  this.v && (J(this.v), (this.v = null));
  this.j = null;
};
d.position = function() {
  var a = this.j.gb();
  a &&
    (this.j.u
      ? ((this.pb = this.Yh + K),
        a.wa == A.Xe && ((this.pb += a.Dk), this.j.Y && (this.pb += a.Xa)))
      : ((this.pb = a.va + a.Xa - this.Vf - this.Yh - K),
        a.wa == A.Jd && (this.pb -= a.Dk)),
    (this.Oe = a.Va + a.eb - this.To - this.gi),
    a.wa == A.Uf && (this.Oe -= a.rq),
    this.v.setAttribute(
      "transform",
      "translate(" + this.pb + "," + this.Oe + ")"
    ));
};
function Ag(a, b) {
  var c = a.j,
    e = A.h.B("clipPath", { id: "blocklyZoomoutClipPath" + b }, a.v);
  A.h.B("rect", { width: 32, height: 32, y: 77 }, e);
  a = A.h.B(
    "image",
    {
      width: A.Wb.width,
      height: A.Wb.height,
      x: -64,
      y: -15,
      "clip-path": "url(#blocklyZoomoutClipPath" + b + ")"
    },
    a.v
  );
  a.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    c.options.Dd + A.Wb.url
  );
  A.J(a, "mousedown", null, function(a) {
    Mf(c);
    Dg(c, -1);
    A.Touch.ue();
    a.stopPropagation();
    a.preventDefault();
  });
}
function Bg(a, b) {
  var c = a.j,
    e = A.h.B("clipPath", { id: "blocklyZoominClipPath" + b }, a.v);
  A.h.B("rect", { width: 32, height: 32, y: 43 }, e);
  a = A.h.B(
    "image",
    {
      width: A.Wb.width,
      height: A.Wb.height,
      x: -32,
      y: -49,
      "clip-path": "url(#blocklyZoominClipPath" + b + ")"
    },
    a.v
  );
  a.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    c.options.Dd + A.Wb.url
  );
  A.J(a, "mousedown", null, function(a) {
    Mf(c);
    Dg(c, 1);
    A.Touch.ue();
    a.stopPropagation();
    a.preventDefault();
  });
}
function Cg(a, b) {
  var c = a.j,
    e = A.h.B("clipPath", { id: "blocklyZoomresetClipPath" + b }, a.v);
  A.h.B("rect", { width: 32, height: 32 }, e);
  a = A.h.B(
    "image",
    {
      width: A.Wb.width,
      height: A.Wb.height,
      y: -92,
      "clip-path": "url(#blocklyZoomresetClipPath" + b + ")"
    },
    a.v
  );
  a.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    c.options.Dd + A.Wb.url
  );
  A.J(a, "mousedown", null, function(a) {
    Mf(c);
    c.setScale(c.options.Ib.fs);
    if (c.$a) {
      var b = c.gb(),
        e = (b.rc - b.va) / 2;
      c.G && (e -= c.G.ba / 2);
      c.$a.set(e, (b.Xb - b.Va) / 2);
    } else console.warn("Tried to scroll a non-scrollable workspace.");
    A.Touch.ue();
    a.stopPropagation();
    a.preventDefault();
  });
}
// Copyright 2014 Google Inc.  Apache License 2.0
function Eg(a, b, c) {
  Eg.o.constructor.call(this, a);
  this.gb = a.gb || Fg;
  this.Ff = a.Ff || Gg;
  var e = [];
  e[A.cb] = new Se();
  e[A.Zg] = new Se();
  e[A.Ma] = new Se();
  e[A.We] = new Se();
  this.xm = e;
  b && (this.fb = b);
  c && (this.Qg = c);
  this.Tl = this.Qg && A.h.mf();
  this.Si = [];
  this.bd = new rg(a.Nc);
  this.hd = this.options.Aq ? new Tf(a.Aq, a.zq) : null;
  A.I && A.I.cf && (this.Ph[A.bp] = A.I.cf);
  A.$c && A.$c.cf && (this.Ph[A.ht] = A.$c.cf);
  A.Wa && A.Wa.cf && (this.Ph[A.Zo] = A.Wa.cf);
}
z(Eg, Xc);
d = Eg.prototype;
d.Fl = null;
d.U = !0;
d.De = !1;
d.$i = !1;
d.co = !0;
d.scrollX = 0;
d.scrollY = 0;
d.rw = 0;
d.tw = 0;
d.lq = null;
d.scale = 1;
d.zc = null;
d.$a = null;
d.kb = null;
d.fb = null;
d.Qg = null;
d.Tl = !1;
d.al = !1;
d.pn = null;
d.Rq = null;
d.dg = {};
d.Ph = {};
d.Ep = null;
d.Mg = null;
d.Mq = null;
d.Xi = !0;
function gg(a) {
  if (a.Xi) {
    var b = M(a).getScreenCTM();
    b && ((a.Mq = b.inverse()), (a.Xi = !1));
  }
  return a.Mq;
}
function Xe(a, b) {
  var c = 0,
    e = 0,
    f = 1;
  if (be(a.Fa, b) || be(a.Hd, b)) f = a.scale;
  do {
    var h = A.h.bc(b);
    if (b == a.Fa || b == a.Hd) f = 1;
    c += h.x * f;
    e += h.y * f;
    b = b.parentNode;
  } while (b && b != M(a));
  return new F(c, e);
}
d.T = function(a) {
  this.v = A.h.B("g", { class: "blocklyWorkspace" }, null);
  a &&
    ((this.Rc = A.h.B(
      "rect",
      { height: "100%", width: "100%", class: a },
      this.v
    )),
    "blocklyMainBackground" == a &&
      this.hd &&
      (this.Rc.style.fill = "url(#" + this.hd.rh.id + ")"));
  this.Fa = A.h.B("g", { class: "blocklyBlockCanvas" }, this.v);
  this.Hd = A.h.B("g", { class: "blocklyBubbleCanvas" }, this.v);
  a = K;
  if (this.options.cv) {
    this.zc = new og(this);
    var b = this.zc.T();
    this.v.insertBefore(b, this.Fa);
    a = this.zc.W(a);
  }
  this.options.Ib &&
    this.options.Ib.controls &&
    ((this.Rg = new zg(this)),
    (b = this.Rg.T()),
    this.v.appendChild(b),
    this.Rg.W(a));
  this.De ||
    (A.J(this.v, "mousedown", this, this.Ge, !1, !0),
    this.options.Ib &&
      this.options.Ib.Hw &&
      A.J(this.v, "wheel", this, this.aw));
  this.options.Dq && (this.Y = new Hg(this));
  this.hd && this.hd.update(this.scale);
  Ig(this);
  return this.v;
};
d.A = function() {
  this.U = !1;
  this.kb && this.kb.cancel();
  Eg.o.A.call(this);
  this.v && (J(this.v), (this.v = null));
  this.Hd = this.Fa = null;
  this.Y && (this.Y.A(), (this.Y = null));
  this.G && (this.G.A(), (this.G = null));
  this.zc && (this.zc.A(), (this.zc = null));
  this.$a && (this.$a.A(), (this.$a = null));
  this.Rg && (this.Rg.A(), (this.Rg = null));
  this.bd && (this.bd.A(), (this.bd = null));
  this.hd && (this.hd.A(), (this.hd = null));
  this.Ph && (this.Ph = null);
  this.dg && (this.dg = null);
  this.options.Nc || J(M(this).parentNode);
  this.Fl && (A.Ca(this.Fl), (this.Fl = null));
};
d.lj = function(a, b) {
  return new O(this, a, b);
};
function Jg(a, b) {
  var c = {
    xi: a.options.xi,
    Nc: a,
    u: a.u,
    Fh: a.options.Fh,
    Yd: a.Yd,
    wa: a.options.wa
  };
  a.G = null;
  a.G = a.Yd ? new Kg(c) : new Lg(c);
  a.G.bh = !1;
  return a.G.T(b);
}
function xf(a) {
  a.co && a.U && (a.$a && a.$a.resize(), (a.Xi = !0));
}
d.resize = function() {
  this.Y && this.Y.position();
  this.G && this.G.position();
  this.zc && this.zc.position();
  this.Rg && this.Rg.position();
  this.$a && this.$a.resize();
  this.Xi = !0;
  Ig(this);
};
function Kf(a) {
  var b = Vd(document);
  oc(a.Rq, b) || ((a.Rq = b), (a.Xi = !0), Ig(a));
}
function M(a) {
  if (a.qp) return a.qp;
  for (var b = a.v; b; ) {
    if ("svg" == b.tagName) return (a.qp = b);
    b = b.parentNode;
  }
  return null;
}
d.translate = function(a, b) {
  if (this.Tl && this.al) this.Qg.Pe(a, b);
  else {
    var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
    this.Fa.setAttribute("transform", c);
    this.Hd.setAttribute("transform", c);
  }
  if (this.fb) {
    c = this.fb;
    var e = this.scale;
    c.Af = e;
    c.Od.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + b.toFixed(0) + ") scale(" + e + ")"
    );
  }
};
function Nf(a) {
  if (a.Tl) {
    a.al = !1;
    var b = a.Qg.Qk();
    a.Qg.ki(a.v);
    b = "translate(" + b.x + "," + b.y + ") scale(" + a.scale + ")";
    a.Fa.setAttribute("transform", b);
    a.Hd.setAttribute("transform", b);
  }
}
function Ef(a) {
  if (a.Tl && !a.al) {
    a.al = !0;
    var b = a.Fa.previousSibling,
      c = parseInt(M(a).getAttribute("width"), 10),
      e = parseInt(M(a).getAttribute("height"), 10),
      f = A.h.bc(a.Fa),
      h = a.Qg,
      k = a.Fa,
      l = a.Hd,
      m = a.scale;
    h.Ed = b;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    h.Na.setAttribute("width", c);
    h.Na.setAttribute("height", e);
    h.Na.appendChild(k);
    h.Na.appendChild(l);
    h.Na.style.display = "block";
    a.Qg.Pe(f.x, f.y);
  }
}
d.Lc = function() {
  var a = this.gb();
  return a ? a.va / this.scale : 0;
};
d.ma = function(a) {
  this.$a && this.$a.Cg(a);
  (this.G || (this.Y && this.Y.G)) &&
    (this.G ? this.G : this.Y ? this.Y.G : null).Cg(a);
  M(this).style.display = a ? "block" : "none";
  this.Y && (this.Y.mc.style.display = a ? "block" : "none");
  a ? (this.$(), this.Y && this.Y.position()) : A.Cb(!0);
};
d.$ = function() {
  for (var a = Nc(this), b = a.length - 1; 0 <= b; b--) a[b].$(!1);
};
function Mg(a, b) {
  var c = P;
  if (void 0 === b) {
    for (var e = 0, f; (f = c.Si[e]); e++) f.Gb(!1);
    c.Si.length = 0;
  }
  if ((f = a ? Gc(c, a) : null))
    (a = void 0 === b || b)
      ? -1 == c.Si.indexOf(f) && c.Si.push(f)
      : xa(c.Si, f),
      f.Gb(a);
}
function Ng(a) {
  var b = A.li;
  if (a.U && !(b.getElementsByTagName("block").length >= ad(a)))
    if ((a.kb && a.kb.cancel(), "comment" == b.tagName.toLowerCase())) {
      A.i.disable();
      try {
        var c = zf(b, a),
          e = parseInt(b.getAttribute("x"), 10),
          f = parseInt(b.getAttribute("y"), 10);
        isNaN(e) || isNaN(f) || (a.u && (e = -e), c.moveBy(e + 50, f + 50));
      } finally {
        A.i.enable();
      }
      c.select();
    } else {
      A.i.disable();
      try {
        var h = A.D.ih(b, a),
          k = parseInt(b.getAttribute("x"), 10),
          l = parseInt(b.getAttribute("y"), 10);
        if (!isNaN(k) && !isNaN(l)) {
          a.u && (k = -k);
          do {
            b = !1;
            var m = Nc(a);
            c = 0;
            for (var n; (n = m[c]); c++) {
              var p = n.la();
              if (1 >= Math.abs(k - p.x) && 1 >= Math.abs(l - p.y)) {
                b = !0;
                break;
              }
            }
            if (!b) {
              var t = h.Td(!1);
              c = 0;
              for (var w; (w = t[c]); c++)
                if (w.closest(A.pd, new F(k, l)).connection) {
                  b = !0;
                  break;
                }
            }
            b && ((k = a.u ? k - A.pd : k + A.pd), (l += 2 * A.pd));
          } while (b);
          h.moveBy(k, l);
        }
      } finally {
        A.i.enable();
      }
      A.i.isEnabled() && !h.Ta && A.i.R(new A.i.Xj(h));
      h.select();
    }
}
function Og(a) {
  if ((a = a.De ? a.Mg : a) && !a.kb && a.Y && a.Y.G) {
    a = a.Y;
    var b = a.nd.Wd();
    b && b.Ld && a.G.show(b.Ld);
  }
}
d.Ag = function(a, b) {
  Eg.o.Ag.call(this, a, b);
  Og(this);
};
d.$f = function(a) {
  Eg.o.$f.call(this, a);
  Og(this);
};
d.ed = function(a, b, c) {
  a = Eg.o.ed.call(this, a, b, c);
  Og(this);
  return a;
};
function Ig(a) {
  a.aq = a.zc && a.v.parentNode ? a.zc.mh() : null;
  a.$p = a.G ? a.G.mh() : a.Y ? a.Y.mh() : null;
}
function of(a, b) {
  b = new F(b.clientX, b.clientY);
  return a.aq && a.aq.contains(b)
    ? A.Yl
    : a.$p && a.$p.contains(b)
    ? A.Qo
    : A.Po;
}
d.Ge = function(a) {
  var b = this.Ud(a);
  b && (b.Ua || (b.Ua = this), (b.xc = a), b.yi(a));
};
d.Pl = function(a, b) {
  a = A.h.jj(a, M(this), gg(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.lq = qc(b, a);
};
function ve(a, b) {
  b = A.h.jj(b, M(a), gg(a));
  b.x /= a.scale;
  b.y /= a.scale;
  return rc(a.lq, b);
}
d.ob = function() {
  return null != this.kb && this.kb.ob();
};
d.aw = function(a) {
  this.kb && this.kb.cancel();
  var b = -a.deltaY / 50,
    c = A.h.jj(a, M(this), gg(this));
  this.zoom(c.x, c.y, b);
  a.preventDefault();
};
function xg(a) {
  var b = I(a, !1);
  a = Zc(a, !1);
  b = b.concat(a);
  if (!b.length) return { x: 0, y: 0, width: 0, height: 0 };
  a = b[0].Wm();
  for (var c = 1; c < b.length; c++) {
    var e = b[c].Wm();
    e.Uc.x < a.Uc.x && (a.Uc.x = e.Uc.x);
    e.rd.x > a.rd.x && (a.rd.x = e.rd.x);
    e.Uc.y < a.Uc.y && (a.Uc.y = e.Uc.y);
    e.rd.y > a.rd.y && (a.rd.y = e.rd.y);
  }
  return {
    x: a.Uc.x,
    y: a.Uc.y,
    width: a.rd.x - a.Uc.x,
    height: a.rd.y - a.Uc.y
  };
}
d.Mt = function() {
  this.zb(!1);
  A.i.O(!0);
  for (var a = I(this, !0), b = 0, c = 0, e; (e = a[c]); c++) {
    var f = e.la();
    e.moveBy(-f.x, b - f.y);
    Pg(e);
    b = e.la().y + e.vb().height + 25;
  }
  A.i.O(!1);
  this.zb(!0);
};
d.Oh = function(a) {
  function b(a) {
    if (a.Ob()) w = w.concat(tc(a, !1));
    else {
      a = a.df(!1);
      for (var c = 0; c < a.length; c++) b(a[c]);
    }
  }
  function c() {
    A.i.O(h);
    var a = w.shift();
    a && (a.s ? (a.A(!1, !0), setTimeout(c, 10)) : c());
    A.i.O(!1);
  }
  if (!this.options.readOnly && !this.De) {
    var e = [],
      f = I(this, !0),
      h = A.h.Sd(),
      k = this,
      l = {};
    l.text = A.g.UNDO;
    l.enabled = 0 < this.Ng.length;
    l.ub = this.Jo.bind(this, !1);
    e.push(l);
    l = {};
    l.text = A.g.REDO;
    l.enabled = 0 < this.qj.length;
    l.ub = this.Jo.bind(this, !0);
    e.push(l);
    this.$a &&
      ((l = {}),
      (l.text = A.g.CLEAN_UP),
      (l.enabled = 1 < f.length),
      (l.ub = this.Mt.bind(this)),
      e.push(l));
    if (this.options.collapse) {
      for (var m = (l = !1), n = 0; n < f.length; n++)
        for (var p = f[n]; p; )
          p.isCollapsed() ? (l = !0) : (m = !0), (p = Hc(p));
      var t = function(a) {
        for (var b = 0, c = 0; c < f.length; c++)
          for (var e = f[c]; e; )
            setTimeout(e.Bg.bind(e, a), b), (e = Hc(e)), (b += 10);
      };
      m = { enabled: m };
      m.text = A.g.COLLAPSE_ALL;
      m.ub = function() {
        t(!0);
      };
      e.push(m);
      l = { enabled: l };
      l.text = A.g.EXPAND_ALL;
      l.ub = function() {
        t(!1);
      };
      e.push(l);
    }
    var w = [];
    for (n = 0; n < f.length; n++) b(f[n]);
    l = {
      text:
        1 == w.length
          ? A.g.DELETE_BLOCK
          : A.g.DELETE_X_BLOCKS.replace("%1", String(w.length)),
      enabled: 0 < w.length,
      ub: function() {
        k.kb && k.kb.cancel();
        2 > w.length
          ? c()
          : A.confirm(A.g.DELETE_ALL_BLOCKS.replace("%1", w.length), function(
              a
            ) {
              a && c();
            });
      }
    };
    e.push(l);
    this.Ep && this.Ep(e);
    A.ea.show(a, e, this.u);
  }
};
d.ps = function(a) {
  if ((a = Wf(a))) {
    if (!this.options.ae)
      throw "Existing toolbox is null.  Can't create new toolbox.";
    if (a.getElementsByTagName("category").length) {
      if (!this.Y)
        throw "Existing toolbox has no categories.  Can't change mode.";
      this.options.ae = a;
      this.Y.Al(a);
      Qg(this.Y);
    } else {
      if (!this.G) throw "Existing toolbox has categories.  Can't change mode.";
      this.options.ae = a;
      this.G.show(a.childNodes);
    }
  } else if (this.options.ae) throw "Can't nullify an existing toolbox.";
};
function Mf(a) {
  if (a.options.Nc) Mf(a.options.Nc);
  else {
    A.sf = a;
    document.activeElement && document.activeElement.blur();
    try {
      M(a).focus();
    } catch (b) {
      try {
        M(a).parentNode.setActive();
      } catch (c) {
        M(a).parentNode.focus();
      }
    }
  }
}
d.zoom = function(a, b, c) {
  var e = this.options.Ib.jw,
    f = this.gb(),
    h = M(this).createSVGPoint();
  h.x = a;
  h.y = b;
  h = h.matrixTransform(this.Fa.getCTM().inverse());
  a = h.x;
  b = h.y;
  h = this.Fa;
  e = Math.pow(e, c);
  c = this.scale * e;
  c > this.options.Ib.hj
    ? (e = this.options.Ib.hj / this.scale)
    : c < this.options.Ib.ij && (e = this.options.Ib.ij / this.scale);
  this.scale != c &&
    (this.$a &&
      ((a = h
        .getCTM()
        .translate(a * (1 - e), b * (1 - e))
        .scale(e)),
      (this.scrollX = a.e - f.Xa),
      (this.scrollY = a.f - f.eb)),
    this.setScale(c));
};
function Dg(a, b) {
  var c = a.gb();
  a.zoom(c.va / 2, c.Va / 2, b);
}
d.setScale = function(a) {
  this.options.Ib.hj && a > this.options.Ib.hj
    ? (a = this.options.Ib.hj)
    : this.options.Ib.ij && a < this.options.Ib.ij && (a = this.options.Ib.ij);
  this.scale = a;
  this.hd && this.hd.update(this.scale);
  this.$a ? this.$a.resize() : this.translate(this.scrollX, this.scrollY);
  A.Cb(!1);
  this.G && this.G.Xn();
};
function Rg(a) {
  var b = 0,
    c = 0;
  a && ((b = a.Lc()), (c = a.ph()));
  return { width: b, height: c };
}
function Sg(a) {
  var b = xg(a),
    c = a.scale;
  a = b.width * c;
  var e = b.height * c,
    f = b.x * c;
  b = b.y * c;
  return { left: f, top: b, right: f + a, bottom: b + e, width: a, height: e };
}
function Fg() {
  var a = Rg(this.Y),
    b = Rg(this.G),
    c = A.ks(M(this));
  if (this.Y)
    if (this.wa == A.Ye || this.wa == A.Uf) c.height -= a.height;
    else if (this.wa == A.Xe || this.wa == A.Jd) c.width -= a.width;
  if (this.$a) {
    var e = Sg(this);
    var f = c.width,
      h = c.height,
      k = f / 2,
      l = h / 2,
      m = Math.min(e.left - k, e.right - f),
      n = Math.min(e.top - l, e.bottom - h);
    e = {
      left: m,
      top: n,
      height: Math.max(e.bottom + l, e.top + h) - n,
      width: Math.max(e.right + k, e.left + f) - m
    };
  } else e = Sg(this);
  f = 0;
  this.Y && this.wa == A.Xe && (f = a.width);
  h = 0;
  this.Y && this.wa == A.Ye && (h = a.height);
  return {
    Xb: e.height,
    rc: e.width,
    qc: e.top,
    Fc: e.left,
    Va: c.height,
    va: c.width,
    me: -this.scrollY,
    ib: -this.scrollX,
    eb: h,
    Xa: f,
    QA: a.width,
    PA: a.height,
    Dk: b.width,
    rq: b.height,
    wa: this.wa
  };
}
function Gg(a) {
  if (!this.$a)
    throw "Attempt to set top level workspace scroll without scrollbars.";
  var b = this.gb();
  r(a.x) && (this.scrollX = -b.rc * a.x - b.Fc);
  r(a.y) && (this.scrollY = -b.Xb * a.y - b.qc);
  a = this.scrollX + b.Xa;
  b = this.scrollY + b.eb;
  this.translate(a, b);
  this.hd && this.hd.moveTo(a, b);
}
d.zb = function(a) {
  var b = !this.co && a;
  this.co = a;
  b && xf(this);
};
d.clear = function() {
  this.zb(!1);
  Eg.o.clear.call(this);
  this.zb(!0);
};
function qg(a, b) {
  a.dg.CREATE_VARIABLE = b;
}
function Tg(a, b) {
  return (a = a.dg[b]) ? a : null;
}
function Ug(a, b) {
  return (a = a.Ph[b]) ? a : null;
}
d.Ud = function(a) {
  var b =
      "mousedown" == a.type ||
      "touchstart" == a.type ||
      "pointerdown" == a.type,
    c = this.kb;
  return c
    ? b && c.Hq
      ? (console.warn("tried to start the same gesture twice"),
        c.cancel(),
        null)
      : c
    : b
    ? (this.kb = new hg(a, this))
    : null;
};
Eg.prototype.setVisible = Eg.prototype.ma;
function Vg(a) {
  Vg.o.constructor.call(this, null);
  this.Jr = a;
}
z(Vg, Ce);
d = Vg.prototype;
d.Uh = 0;
d.Qj = 0;
d.Om = function(a) {
  A.h.B(
    "rect",
    { class: "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" },
    a
  );
  A.h.B(
    "path",
    {
      class: "blocklyIconSymbol",
      d:
        "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"
    },
    a
  );
  A.h.B("circle", { class: "blocklyIconShape", r: "2.7", cx: "8", cy: "8" }, a);
};
d.mn = function(a) {
  Ge(this.P) && Ce.prototype.mn.call(this, a);
};
d.ri = function() {
  this.Fj = A.h.B("svg", { x: ne, y: ne }, null);
  if (this.Jr.length)
    for (var a = H("xml"), b = 0, c; (c = this.Jr[b]); b++)
      a.appendChild(H("block", { type: c }));
  else a = null;
  a = {
    ae: a,
    Nc: this.P.s,
    Dd: this.P.s.options.Dd,
    u: this.P.u,
    wa: this.P.u ? A.Jd : A.Xe,
    Yd: !1,
    gb: this.Iu.bind(this),
    Ff: null
  };
  this.j = new Eg(a);
  this.j.$i = !0;
  a = Jg(this.j, "g");
  b = this.j.T("blocklyMutatorBackground");
  b.insertBefore(a, this.j.Fa);
  this.Fj.appendChild(b);
  return this.Fj;
};
d.Se = function() {
  this.P.vc ||
    (Ge(this.P)
      ? this.dc && A.h.yb(this.dc, "blocklyIconGroupReadonly")
      : (this.ma(!1), this.dc && A.h.Ya(this.dc, "blocklyIconGroupReadonly")));
  Ce.prototype.Se.call(this);
};
d.Dl = function() {
  var a = 2 * ne,
    b = this.j.Fa.getBBox();
  var c = this.P.u ? -b.x : b.width + b.x;
  b = b.height + 3 * a;
  if (this.j.G) {
    var e = this.j.G.ye();
    b = Math.max(b, e.Xb + 20);
  }
  c += 3 * a;
  if (Math.abs(this.Uh - c) > a || Math.abs(this.Qj - b) > a)
    (this.Uh = c),
      (this.Qj = b),
      this.Oa.Bf(c + a, b + a),
      this.Fj.setAttribute("width", this.Uh),
      this.Fj.setAttribute("height", this.Qj);
  this.P.u &&
    this.j.Fa.setAttribute("transform", "translate(" + this.Uh + ",0)");
  this.j.resize();
};
d.ma = function(a) {
  if (a != this.V())
    if ((A.i.R(new Bc(this.P, "mutatorOpen", !a, a)), a)) {
      this.Oa = new ke(this.P.s, this.ri(), this.P.md, this.kg, null, null);
      te(this.Oa, this.P.id);
      if ((a = this.j.options.ae))
        this.j.G.W(this.j), this.j.G.show(a.childNodes);
      this.Ie = this.P.ui(this.j);
      a = tc(this.Ie, !1);
      for (var b = 0, c; (c = a[b]); b++) c.$();
      this.Ie.Dg(!1);
      this.Ie.vj(!1);
      this.j.G ? ((a = 2 * this.j.G.ka), (b = this.j.G.ba + a)) : (b = a = 16);
      this.P.u && (b = -b);
      this.Ie.moveBy(b, a);
      if (this.P.ho) {
        var e = this;
        this.P.ho(this.Ie);
        this.Nl = function() {
          e.P.ho(e.Ie);
        };
        this.P.s.oc(this.Nl);
      }
      this.Dl();
      this.j.oc(this.Iw.bind(this));
      this.Re();
    } else
      (this.Fj = null),
        this.j.A(),
        (this.Ie = this.j = null),
        this.Oa.A(),
        (this.Oa = null),
        (this.Qj = this.Uh = 0),
        this.Nl && (this.P.s.xf(this.Nl), (this.Nl = null));
};
d.Iw = function() {
  if (!this.j.ob())
    for (var a = I(this.j, !1), b = 0, c; (c = a[b]); b++) {
      var e = c.la(),
        f = c.vb();
      20 > e.y + f.height && c.moveBy(0, 20 - f.height - e.y);
    }
  if (this.Ie.s == this.j) {
    A.i.O(!0);
    c = this.P;
    a = (a = c.gc()) && A.D.Hc(a);
    b = c.U;
    c.U = !1;
    c.mi(this.Ie);
    c.U = b;
    c.Ad();
    b = (b = c.gc()) && A.D.Hc(b);
    if (a != b) {
      A.i.R(new A.i.lc(c, "mutation", null, a, b));
      var h = A.i.ac();
      setTimeout(function() {
        A.i.O(h);
        c.tb();
        A.i.O(!1);
      }, A.Wj);
    }
    c.U && c.$();
    this.j.ob() || this.Dl();
    A.i.O(!1);
  }
};
d.Iu = function() {
  return { Va: this.Qj, va: this.Uh, eb: 0, Xa: 0 };
};
d.A = function() {
  this.P.Bd = null;
  Ce.prototype.A.call(this);
};
function Wg(a, b, c) {
  if (!a || !a.w.s) return !1;
  c = Be(b, c).connection;
  var e = L(a);
  return (e && e != b) || c.Za == a
    ? !1
    : (c.isConnected() && c.disconnect(), c.connect(a), !0);
}
g.Blockly || (g.Blockly = {});
g.Blockly.Mutator || (g.Blockly.Mutator = {});
g.Blockly.Mutator.reconnect = Wg;
A.S = {};
A.S.Wl = {};
A.S.register = function(a, b) {
  if (!q(a) || Fa(a)) throw Error('Error: Invalid extension name "' + a + '"');
  if (A.S.Wl[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if (!x(b)) throw Error('Error: Extension "' + a + '" must be a function');
  A.S.Wl[a] = b;
};
A.S.ew = function() {
  var a = A.Ea.Cc.Us;
  if (!ha(a)) throw Error('Error: Mixin "logic_ternary" must be a object');
  A.S.register("logic_ternary", function() {
    Xg(this, a);
  });
};
A.S.Yn = function(a, b, c, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  A.S.tp(f, b.ud, "domToMutation");
  A.S.tp(f, b.gc, "mutationToDom");
  var h = A.S.vp(b, f);
  if (c && !x(c)) throw Error('Extension "' + a + '" is not a function');
  A.S.register(a, function() {
    h && this.Tr(new Vg(e));
    Xg(this, b);
    c && c.apply(this);
  });
};
A.S.apply = function(a, b, c) {
  var e = A.S.Wl[a];
  if (!x(e)) throw Error('Error: Extension "' + a + '" not found.');
  if (c) A.S.Kt(a, b);
  else var f = A.S.Zm(b);
  e.apply(b);
  if (c) A.S.It('Error after applying mutator "' + a + '": ', b);
  else if (!A.S.Cv(f, b))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
A.S.tp = function(a, b, c) {
  if (!b) throw Error(a + 'missing required property "' + c + '"');
  if ("function" != typeof b)
    throw Error(a + '" required property "' + c + '" must be a function');
};
A.S.Kt = function(a, b) {
  if (A.S.Zm(b).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        b.id
    );
};
A.S.vp = function(a, b) {
  var c = void 0 !== a.mi,
    e = void 0 !== a.ui;
  if (c && e) {
    if ("function" != typeof a.mi)
      throw Error(b + "compose must be a function.");
    if ("function" != typeof a.ui)
      throw Error(b + "decompose must be a function.");
    return !0;
  }
  if (c || e)
    throw Error(b + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
A.S.It = function(a, b) {
  if ("function" != typeof b.ud)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof b.gc)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  A.S.vp(b, a);
};
A.S.Zm = function(a) {
  var b = [];
  void 0 !== a.ud && b.push(a.ud);
  void 0 !== a.gc && b.push(a.gc);
  void 0 !== a.mi && b.push(a.mi);
  void 0 !== a.ui && b.push(a.ui);
  return b;
};
A.S.Cv = function(a, b) {
  b = A.S.Zm(b);
  if (b.length != a.length) return !1;
  for (var c = 0; c < b.length; c++) if (a[c] != b[c]) return !1;
  return !0;
};
A.S.op = function(a) {
  var b = [];
  "object" == typeof document &&
    A.h.Pr(function() {
      for (var b in a) A.h.up(a[b]);
    });
  return function() {
    this.type &&
      -1 === b.indexOf(this.type) &&
      (A.S.Jt(this, a), b.push(this.type));
    this.Qc(
      function() {
        var c = G(this, "OP"),
          e = a[c];
        null == e
          ? -1 === b.indexOf(this.type) &&
            ((c = "No tooltip mapping for value " + c + " of field OP"),
            null != this.type && (c += " of block type " + this.type),
            console.warn(c + "."))
          : (e = A.h.Sb(e));
        return e;
      }.bind(this)
    );
  };
};
A.S.Jt = function(a, b) {
  var c = xe(a, "OP");
  if (!x(c.qg)) {
    c = c.getOptions();
    for (var e = 0; e < c.length; ++e) {
      var f = c[e][1];
      null == b[f] &&
        console.warn(
          "No tooltip mapping for value " +
            f +
            " of field OP of block type " +
            a.type
        );
    }
  }
};
A.S.Dt = function() {
  "object" == typeof document &&
    A.h.Pr(function() {
      A.h.up("%{BKY_MATH_CHANGE_TOOLTIP}");
    });
  return function() {
    this.Qc(
      function() {
        var a = xe(this, "VAR");
        return A.h
          .Sb("%{BKY_MATH_CHANGE_TOOLTIP}")
          .replace("%1", a ? a.xb() : "");
      }.bind(this)
    );
  };
};
A.S.yu = function() {
  this.zw = this.Tc;
  this.Qc(
    function() {
      var a = this.getParent();
      return (a && Yg(a) && a.Tc) || this.zw;
    }.bind(this)
  );
};
A.S.register("parent_tooltip_when_inline", A.S.yu);
var Zg = {};
function $g(a, b) {
  var c = Qd(a);
  return c.defaultView &&
    c.defaultView.getComputedStyle &&
    (a = c.defaultView.getComputedStyle(a, null))
    ? a[b] || a.getPropertyValue(b) || ""
    : "";
}
function ah(a, b) {
  return (
    $g(a, b) ||
    (a.currentStyle ? a.currentStyle[b] : null) ||
    (a.style && a.style[b])
  );
}
function Sf() {
  var a = document,
    b = a.body;
  a = a.documentElement;
  return new F(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop);
}
function bh(a) {
  try {
    var b = a.getBoundingClientRect();
  } catch (c) {
    return { left: 0, top: 0, right: 0, bottom: 0 };
  }
  C &&
    a.ownerDocument.body &&
    ((a = a.ownerDocument),
    (b.left -= a.documentElement.clientLeft + a.body.clientLeft),
    (b.top -= a.documentElement.clientTop + a.body.clientTop));
  return b;
}
function ch(a) {
  var b = Qd(a),
    c = new F(0, 0);
  var e = b ? Qd(b) : document;
  e =
    !C || 9 <= Number(tb) || "CSS1Compat" == Od(e).td.compatMode
      ? e.documentElement
      : e.body;
  if (a == e) return c;
  a = bh(a);
  b = Vd(Od(b).td);
  c.x = a.left + b.x;
  c.y = a.top + b.y;
  return c;
}
function dh(a) {
  "number" == typeof a && (a += "px");
  return a;
}
function eh(a) {
  var b = fh;
  if ("none" != ah(a, "display")) return b(a);
  var c = a.style,
    e = c.display,
    f = c.visibility,
    h = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  a = b(a);
  c.display = e;
  c.position = h;
  c.visibility = f;
  return a;
}
function fh(a) {
  var b = a.offsetWidth,
    c = a.offsetHeight,
    e = E && !b && !c;
  return (aa(b) && !e) || !a.getBoundingClientRect
    ? new Nd(b, c)
    : ((a = bh(a)), new Nd(a.right - a.left, a.bottom - a.top));
}
function gh(a, b) {
  a.style.display = b ? "" : "none";
}
var hh = D ? "MozUserSelect" : E || hb ? "WebkitUserSelect" : null;
function ih(a, b, c) {
  c = c ? null : a.getElementsByTagName("*");
  if (hh) {
    if (((b = b ? "none" : ""), a.style && (a.style[hh] = b), c)) {
      a = 0;
      for (var e; (e = c[a]); a++) e.style && (e.style[hh] = b);
    }
  } else if (C || gb)
    if (((b = b ? "on" : ""), a.setAttribute("unselectable", b), c))
      for (a = 0; (e = c[a]); a++) e.setAttribute("unselectable", b);
}
var jh = { thin: 2, medium: 4, thick: 6 };
function kh(a, b) {
  if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  if (c in jh) a = jh[c];
  else if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
  else {
    b = a.style.left;
    var e = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = c;
    c = a.style.pixelLeft;
    a.style.left = b;
    a.runtimeStyle.left = e;
    a = +c;
  }
  return a;
}
function lh(a, b) {
  this.oa = new Nd(0, 25);
  this.setValue(a);
  this.Pj = b;
}
var mh = {};
function nh(a, b) {
  if (!q(a) || Fa(a)) throw Error('Invalid field type "' + a + '"');
  if (!ha(b) || !x(b.aa))
    throw Error('Field "' + b + '" must have a fromJson function');
  mh[a] = b;
}
var oh = null,
  ph = 0;
d = lh.prototype;
d.name = void 0;
d.Yq = 50;
d.ra = "";
d.w = null;
d.Ga = !0;
d.Pj = null;
d.Rf = !0;
d.wo = function(a) {
  this.w = a;
};
d.W = function() {
  this.La ||
    ((this.La = A.h.B("g", {}, null)),
    this.Ga || (this.La.style.display = "none"),
    (this.cd = A.h.B(
      "rect",
      { rx: 4, ry: 4, x: -5, y: 0, height: 16 },
      this.La
    )),
    (this.ta = A.h.B(
      "text",
      { class: "blocklyText", y: this.oa.height - 12.5 },
      this.La
    )),
    this.Se(),
    this.w.M().appendChild(this.La),
    (this.ql = A.J(this.La, "mousedown", this, this.Ge)),
    this.fe());
};
d.mg = function() {};
d.A = function() {
  this.ql && (A.Ca(this.ql), (this.ql = null));
  this.w = null;
  J(this.La);
  this.Pj = this.cd = this.ta = this.La = null;
};
d.Se = function() {
  var a = this.La;
  this.Rf &&
    a &&
    (Ge(this.w)
      ? (A.h.Ya(a, "blocklyEditableText"),
        A.h.yb(a, "blocklyNonEditableText"),
        (this.La.style.cursor = this.Zj))
      : (A.h.Ya(a, "blocklyNonEditableText"),
        A.h.yb(a, "blocklyEditableText"),
        (this.La.style.cursor = "")));
};
d.V = function() {
  return this.Ga;
};
d.ma = function(a) {
  if (this.Ga != a) {
    this.Ga = a;
    var b = this.M();
    b && ((b.style.display = a ? "block" : "none"), this.fe());
  }
};
function qh(a, b) {
  a.Pj = b;
}
d.um = function(a) {
  return a;
};
function ye(a, b) {
  var c = a.um(b);
  if (null === c) return null;
  void 0 !== c && (b = c);
  if ((c = a.Pj)) {
    a = c.call(a, b);
    if (null === a) return null;
    void 0 !== a && (b = a);
  }
  return b;
}
d.M = function() {
  return this.La;
};
d.fe = function() {
  this.Ga ? ((this.ta.textContent = rh(this)), this.Oj()) : (this.oa.width = 0);
};
d.Oj = function() {
  var a = sh(this.ta);
  this.cd && this.cd.setAttribute("width", a + 10);
  this.oa.width = a;
};
function sh(a) {
  var b = a.textContent + "\n" + a.className.baseVal,
    c;
  if (oh && (c = oh[b])) return c;
  try {
    c = C || hb ? a.getBBox().width : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  oh && (oh[b] = c);
  return c;
}
function vg() {
  ph++;
  oh || (oh = {});
}
function wg() {
  ph--;
  ph || (oh = null);
}
d.ze = function() {
  this.oa.width || this.fe();
  return this.oa;
};
function th(a) {
  var b = a.cd.getBBox(),
    c = b.height * a.w.s.scale;
  b = b.width * a.w.s.scale;
  a = ch(a.cd);
  return { top: a.y, bottom: a.y + c, left: a.x, right: a.x + b };
}
function rh(a) {
  var b = a.ra;
  if (!b) return "\u00a0";
  b.length > a.Yq && (b = b.substring(0, a.Yq - 2) + "\u2026");
  b = b.replace(/\s/g, "\u00a0");
  a.w.u && (b += "\u200f");
  return b;
}
d.xb = function() {
  return this.ra;
};
d.Ab = function(a) {
  null !== a && ((a = String(a)), a !== this.ra && ((this.ra = a), this.Di()));
};
d.Di = function() {
  this.oa.width = 0;
  this.w && this.w.U && (this.w.$(), this.w.tb());
};
d.getValue = function() {
  return this.xb();
};
d.setValue = function(a) {
  if (null !== a) {
    var b = this.getValue();
    b != a &&
      (this.w &&
        A.i.isEnabled() &&
        A.i.R(new A.i.lc(this.w, "field", this.name, b, a)),
      this.Ab(a));
  }
};
d.Ge = function(a) {
  this.w && this.w.s && (a = this.w.s.Ud(a)) && !a.Ig && (a.Ig = this);
};
d.Qc = function() {};
d.Kh = function() {
  return !1;
};
function uh(a, b) {
  this.oa = new Nd(0, 17.5);
  this.yp = b;
  this.setValue(a);
}
z(uh, lh);
uh.aa = function(a) {
  var b = A.h.Sb(a.text);
  return new uh(b, a["class"]);
};
d = uh.prototype;
d.Rf = !1;
d.W = function() {
  this.ta ||
    ((this.ta = A.h.B(
      "text",
      { class: "blocklyText", y: this.oa.height - 5 },
      null
    )),
    this.yp && A.h.Ya(this.ta, this.yp),
    this.Ga || (this.ta.style.display = "none"),
    this.w.M().appendChild(this.ta),
    (this.ta.Tc = this.w),
    A.C.Wf(this.ta),
    this.fe());
};
d.A = function() {
  J(this.ta);
  this.ta = null;
};
d.M = function() {
  return this.ta;
};
d.Qc = function(a) {
  this.ta.Tc = a;
};
nh("field_label", uh);
function vh(a, b, c, e) {
  if (a != A.od && !b)
    throw "Value inputs and statement inputs must have non-empty name.";
  this.type = a;
  this.name = b;
  this.w = c;
  this.connection = e;
  this.Qa = [];
}
d = vh.prototype;
d.align = A.Vh;
d.Ga = !0;
function wh(a, b, c) {
  xh(a, a.Qa.length, b, c);
  return a;
}
function xh(a, b, c, e) {
  if (0 > b || b > a.Qa.length) throw Error("index " + b + " out of bounds.");
  if (!c && !e) return b;
  q(c) && (c = new uh(c));
  c.wo(a.w);
  a.w.U && c.W();
  c.name = e;
  c.Sn && (b = xh(a, b, c.Sn));
  a.Qa.splice(b, 0, c);
  ++b;
  c.Fo && (b = xh(a, b, c.Fo));
  a.w.U && (a.w.$(), a.w.tb());
  return b;
}
d.V = function() {
  return this.Ga;
};
d.ma = function(a) {
  var b = [];
  if (this.Ga == a) return b;
  for (
    var c = (this.Ga = a) ? "block" : "none", e = 0, f;
    (f = this.Qa[e]);
    e++
  )
    f.ma(a);
  if (this.connection) {
    if (a) b = ff(this.connection);
    else if (((e = this.connection), gf(e, !0), e.Za))
      for (e = tc(L(e), !1), f = 0; f < e.length; f++) {
        for (var h = e[f], k = h.Td(!0), l = 0; l < k.length; l++) gf(k[l], !0);
        h = mf(h);
        for (l = 0; l < h.length; l++) h[l].ma(!1);
      }
    if ((e = L(this.connection))) (e.M().style.display = c), a || (e.U = !1);
  }
  return b;
};
d.hc = function(a) {
  if (!this.connection) throw "This input does not have a connection.";
  this.connection.hc(a);
  return this;
};
d.W = function() {
  if (this.w.s.U) for (var a = 0; a < this.Qa.length; a++) this.Qa[a].W();
};
d.A = function() {
  for (var a = 0, b; (b = this.Qa[a]); a++) b.A();
  this.connection && this.connection.A();
  this.w = null;
};
function He(a) {
  He.o.constructor.call(this, a);
  De(this);
  this.ra = {};
}
z(He, Ce);
d = He.prototype;
d.Cp = !1;
d.Om = function(a) {
  A.h.B(
    "path",
    {
      class: "blocklyIconShape",
      d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    },
    a
  );
  A.h.B(
    "path",
    {
      class: "blocklyIconSymbol",
      d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
    },
    a
  );
  A.h.B(
    "rect",
    { class: "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" },
    a
  );
};
d.ma = function(a) {
  if (a != this.V())
    if ((A.i.R(new Bc(this.P, "warningOpen", !a, a)), a)) {
      var b = this.xb();
      a = A.h.B(
        "text",
        { class: "blocklyText blocklyBubbleText", y: ne },
        null
      );
      b = b.split("\n");
      for (var c = 0; c < b.length; c++)
        A.h
          .B("tspan", { dy: "1em", x: ne }, a)
          .appendChild(document.createTextNode(b[c]));
      this.Oa = new ke(this.P.s, a, this.P.md, this.kg, null, null);
      te(this.Oa, this.P.id);
      if (this.P.u) {
        b = a.getBBox().width;
        c = 0;
        for (var e; (e = a.childNodes[c]); c++)
          e.setAttribute("text-anchor", "end"), e.setAttribute("x", b + ne);
      }
      this.Re();
      a = this.Oa.fg();
      this.Oa.Bf(a.width, a.height);
    } else this.Oa.A(), (this.Oa = null);
};
d.Ab = function(a, b) {
  this.ra[b] != a &&
    (a ? (this.ra[b] = a) : delete this.ra[b],
    this.V() && (this.ma(!1), this.ma(!0)));
};
d.xb = function() {
  var a = [],
    b;
  for (b in this.ra) a.push(this.ra[b]);
  return a.join("\n");
};
d.A = function() {
  this.P.Wc = null;
  Ce.prototype.A.call(this);
};
function $c(a, b, c) {
  "undefined" !== typeof yh.prototype[b] &&
    console.warn(
      'FUTURE ERROR: Block prototypeName "' +
        b +
        '" conflicts with Blockly.Generator members. Registering Generators for this block type will incur errors.\nThis name will be DISALLOWED (throwing an error) in future versions of Blockly.'
    );
  this.id = c && !Gc(a, c) ? c : A.h.Sd();
  a.pm[this.id] = this;
  this.X = this.K = this.L = null;
  this.Z = [];
  this.lf = void 0;
  this.disabled = !1;
  this.Tc = "";
  this.contextMenu = !0;
  this.uf = null;
  this.se = [];
  this.nq = this.kj = this.wi = !0;
  this.Md = this.Ta = !1;
  this.Ja = null;
  this.Xc = new F(0, 0);
  this.s = a;
  this.vc = a.De;
  this.u = a.u;
  if (b) {
    this.type = b;
    b = A.Da[b];
    for (var e in b) this[e] = b[e];
  }
  a.Qh.push(this);
  x(this.W) && this.W();
  this.jv = this.lf;
  if (A.i.isEnabled()) {
    (a = A.i.ac()) || A.i.O(!0);
    try {
      A.i.R(new A.i.Xj(this));
    } finally {
      a || A.i.O(!1);
    }
  }
  if (x(this.onchange)) {
    if ((a = this.onchange) && !x(a))
      throw Error("onchange must be a function.");
    this.mj && this.s.xf(this.mj);
    if ((this.onchange = a)) (this.mj = a.bind(this)), this.s.oc(this.mj);
  }
}
d = $c.prototype;
d.data = null;
d.Nd = "#000000";
d.A = function(a) {
  if (this.s) {
    this.mj && this.s.xf(this.mj);
    Ae(this, a);
    A.i.isEnabled() && A.i.R(new A.i.xs(this));
    A.i.disable();
    try {
      this.s && (Yc(this.s, this), delete this.s.pm[this.id], (this.s = null));
      A.selected == this && (A.selected = null);
      for (var b = this.se.length - 1; 0 <= b; b--) this.se[b].A(!1);
      b = 0;
      for (var c; (c = this.Z[b]); b++) c.A();
      this.Z.length = 0;
      var e = this.Td(!0);
      for (b = 0; b < e.length; b++) {
        var f = e[b];
        f.isConnected() && f.disconnect();
        e[b].A();
      }
    } finally {
      A.i.enable();
    }
  }
};
d.mg = function() {
  for (var a = 0, b; (b = this.Z[a]); a++)
    for (var c = 0, e; (e = b.Qa[c]); c++) e.mg && e.mg();
};
function Ae(a, b) {
  if (a.L) a.L.isConnected() && a.L.disconnect();
  else if (a.X) {
    var c = null;
    a.X.isConnected() && ((c = a.X.Za), a.X.disconnect());
    var e = Hc(a);
    b && e && ((a = a.K.Za), a.disconnect(), c && Ke(c, a) && c.connect(a));
  }
}
d.Td = function() {
  var a = [];
  this.L && a.push(this.L);
  this.X && a.push(this.X);
  this.K && a.push(this.K);
  for (var b = 0, c; (c = this.Z[b]); b++) c.connection && a.push(c.connection);
  return a;
};
d.tb = function() {
  console.warn(
    "Not expected to reach this bumpNeighbours_ function. The BlockSvg function for bumpNeighbours_ was expected to be called instead."
  );
};
d.getParent = function() {
  return this.uf;
};
function zh(a) {
  do {
    var b = a;
    a = a.getParent();
    if (!a) return null;
  } while (Hc(a) == b);
  return a;
}
function Hc(a) {
  return a.K && L(a.K);
}
function $e(a) {
  var b = a;
  do (a = b), (b = a.uf);
  while (b);
  return a;
}
d.df = function(a) {
  if (!a) return this.se;
  a = [];
  for (var b = 0, c; (c = this.Z[b]); b++)
    c.connection && (c = L(c.connection)) && a.push(c);
  (b = Hc(this)) && a.push(b);
  return a;
};
d.Eg = function(a) {
  if (a != this.uf) {
    if (this.uf) {
      xa(this.uf.se, this);
      if (this.X && this.X.isConnected())
        throw "Still connected to previous block.";
      if (this.L && this.L.isConnected())
        throw "Still connected to parent block.";
      this.uf = null;
    } else Yc(this.s, this);
    (this.uf = a) ? a.se.push(this) : this.s.Qh.push(this);
  }
};
function tc(a, b) {
  var c = [a];
  a = a.df(b);
  for (var e, f = 0; (e = a[f]); f++) c.push.apply(c, tc(e, b));
  return c;
}
d.Ob = function() {
  return this.wi && !this.Ta && !(this.s && this.s.options.readOnly);
};
d.vj = function(a) {
  this.wi = a;
};
d.$d = function() {
  return this.kj && !this.Ta && !(this.s && this.s.options.readOnly);
};
d.Dg = function(a) {
  this.kj = a;
};
d.vo = function(a) {
  this.Ta = a;
};
function Ge(a) {
  return a.nq && !(a.s && a.s.options.readOnly);
}
d.ro = function(a) {
  this.nq = a;
  a = 0;
  for (var b; (b = this.Z[a]); a++)
    for (var c = 0, e; (e = b.Qa[c]); c++) e.Se();
};
function yg(a, b) {
  if (!b && a.isCollapsed()) {
    if ((a.L && gf(a.L, b), a.X && gf(a.X, b), a.K)) {
      gf(a.K, b);
      var c = L(a.K);
      c && yg(c, b);
    }
  } else {
    a = a.Td(!0);
    for (var e = 0; (c = a[e]); e++) gf(c, b), Oe(c) && (c = L(c)) && yg(c, b);
  }
}
d.Qc = function(a) {
  this.Tc = a;
};
d.Je = function(a) {
  var b = q(a) ? A.h.Sb(a) : a,
    c = Number(b);
  if (!isNaN(c) && 0 <= c && 360 >= c) this.Nd = A.Kq(c);
  else if (q(b) && /^#[0-9a-fA-F]{6}$/.test(b)) this.Nd = b;
  else
    throw ((c = 'Invalid colour: "' + b + '"'),
    a != b && (c += ' (from "' + a + '")'),
    c);
};
function xe(a, b) {
  for (var c = 0, e; (e = a.Z[c]); c++)
    for (var f = 0, h; (h = e.Qa[f]); f++) if (h.name === b) return h;
  return null;
}
function Qc(a) {
  for (var b = [], c = 0, e; (e = a.Z[c]); c++)
    for (var f = 0, h; (h = e.Qa[f]); f++)
      h.Kh() && (h = a.s.Ae(h.getValue())) && b.push(h);
  return b;
}
function G(a, b) {
  return (a = xe(a, b)) ? a.getValue() : null;
}
d.zj = function(a, b) {
  a
    ? (void 0 === b && (b = null),
      this.X || (this.X = this.ej(A.We)),
      this.X.hc(b))
    : this.X && (this.X.A(), (this.X = null));
};
d.Jl = function(a, b) {
  a
    ? (void 0 === b && (b = null),
      this.K || (this.K = this.ej(A.Ma)),
      this.K.hc(b))
    : this.K && (this.K.A(), (this.K = null));
};
d.yj = function(a, b) {
  a
    ? (void 0 === b && (b = null),
      this.L || (this.L = this.ej(A.Zg)),
      this.L.hc(b))
    : this.L && (this.L.A(), (this.L = null));
};
d.Ef = function(a) {
  this.lf != a &&
    (A.i.R(new A.i.lc(this, "inline", null, this.lf, a)), (this.lf = a));
};
function Yg(a) {
  if (void 0 != a.lf) return a.lf;
  for (var b = 1; b < a.Z.length; b++)
    if (a.Z[b - 1].type == A.od && a.Z[b].type == A.od) return !1;
  for (b = 1; b < a.Z.length; b++)
    if (a.Z[b - 1].type == A.cb && a.Z[b].type == A.od) return !0;
  return !1;
}
d.Cf = function(a) {
  this.disabled != a &&
    (A.i.R(new A.i.lc(this, "disabled", null, this.disabled, a)),
    (this.disabled = a));
};
function Ah(a) {
  for (a = zh(a); a; ) {
    if (a.disabled) return !0;
    a = zh(a);
  }
  return !1;
}
d.isCollapsed = function() {
  return this.Md;
};
d.Bg = function(a) {
  this.Md != a &&
    (A.i.R(new A.i.lc(this, "collapsed", null, this.Md, a)), (this.Md = a));
};
d.toString = function(a, b) {
  var c = [],
    e = b || "?";
  if (this.Md) c.push(Be(this, "_TEMP_COLLAPSED_INPUT").Qa[0].ra);
  else
    for (var f = 0, h; (h = this.Z[f]); f++) {
      for (var k = 0, l; (l = h.Qa[k]); k++)
        l instanceof Bh && !l.getValue() ? c.push(e) : c.push(l.xb());
      h.connection &&
        ((h = L(h.connection)) ? c.push(h.toString(void 0, b)) : c.push(e));
    }
  c = Ha(c.join(" ")) || "???";
  a && ((b = c), b.length > a && (b = b.substring(0, a - 3) + "..."), (c = b));
  return c;
};
function Ch(a, b) {
  return a.qd(A.cb, b);
}
function Dh(a, b) {
  var c = b.type ? 'Block "' + b.type + '": ' : "";
  if ("colour" in b)
    if (void 0 === b.colour) console.warn(c + "Undefined color value.");
    else {
      var e = b.colour;
      try {
        a.Je(e);
      } catch (v) {
        console.warn(c + "Illegal color value: ", e);
      }
    }
  for (e = 0; void 0 !== b["message" + e]; ) {
    for (
      var f = a,
        h = b["args" + e] || [],
        k = b["lastDummyAlign" + e],
        l = A.h.xw(b["message" + e]),
        m = [],
        n = 0,
        p = [],
        t = 0;
      t < l.length;
      t++
    ) {
      var w = l[t];
      if ("number" == typeof w) {
        if (0 >= w || w > h.length)
          throw Error(
            'Block "' + f.type + '": Message index %' + w + " out of range."
          );
        if (m[w])
          throw Error(
            'Block "' + f.type + '": Message index %' + w + " duplicated."
          );
        m[w] = !0;
        n++;
        p.push(h[w - 1]);
      } else (w = w.trim()) && p.push(w);
    }
    if (n != h.length)
      throw Error(
        'Block "' +
          f.type +
          '": Message does not reference all ' +
          h.length +
          " arg(s)."
      );
    p.length &&
      ("string" == typeof p[p.length - 1] ||
        Ea(p[p.length - 1].type, "field_")) &&
      ((t = { type: "input_dummy" }), k && (t.align = k), p.push(t));
    k = { LEFT: A.Vh, RIGHT: A.Uj, CENTRE: A.Tj };
    h = [];
    for (t = 0; t < p.length; t++)
      if (((m = p[t]), "string" == typeof m)) h.push([m, void 0]);
      else {
        l = w = null;
        do
          if (((n = !1), "string" == typeof m)) w = new uh(m);
          else
            switch (m.type) {
              case "input_value":
                l = Ch(f, m.name);
                break;
              case "input_statement":
                l = f.qd(A.Ma, m.name);
                break;
              case "input_dummy":
                l = f.qd(A.od, m.name || "");
                break;
              default:
                (w = (w = mh[m.type]) ? w.aa(m) : null),
                  w ||
                    (m.alt
                      ? ((m = m.alt), (n = !0))
                      : console.warn(
                          "Blockly could not create a field of type " +
                            m.type +
                            ". You may need to register your custom field.  See github.com/google/blockly/issues/1584"
                        ));
            }
        while (n);
        if (w) h.push([w, m.name]);
        else if (l) {
          m.check && l.hc(m.check);
          m.align && ((n = l), (n.align = k[m.align]), n.w.U && n.w.$());
          for (m = 0; m < h.length; m++) wh(l, h[m][0], h[m][1]);
          h.length = 0;
        }
      }
    e++;
  }
  void 0 !== b.inputsInline && a.Ef(b.inputsInline);
  void 0 !== b.output && a.yj(!0, b.output);
  void 0 !== b.previousStatement && a.zj(!0, b.previousStatement);
  void 0 !== b.nextStatement && a.Jl(!0, b.nextStatement);
  void 0 !== b.tooltip && ((e = b.tooltip), (e = A.h.Sb(e)), a.Qc(e));
  void 0 !== b.enableContextMenu &&
    ((e = b.enableContextMenu), (a.contextMenu = !!e));
  void 0 !== b.helpUrl && ((e = b.helpUrl), (e = A.h.Sb(e)), (a.Ce = e));
  q(b.extensions) &&
    (console.warn(
      c +
        "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        b.type +
        "' block."
    ),
    (b.extensions = [b.extensions]));
  void 0 !== b.mutator && A.S.apply(b.mutator, a, !0);
  if (Array.isArray(b.extensions))
    for (b = b.extensions, e = 0; e < b.length; ++e) A.S.apply(b[e], a, !1);
}
function Xg(a, b) {
  if (aa(void 0)) throw Error("opt_disableCheck must be a boolean if provided");
  var c = [],
    e;
  for (e in b) void 0 !== a[e] && c.push(e);
  if (c.length)
    throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  for (var f in b) a[f] = b[f];
}
d.qd = function(a, b) {
  var c = null;
  if (a == A.cb || a == A.Ma) c = this.ej(a);
  a = new vh(a, b, this, c);
  this.Z.push(a);
  return a;
};
d.yg = function(a) {
  for (var b = 0, c; (c = this.Z[b]); b++)
    if (c.name == a) {
      c.connection &&
        c.connection.isConnected() &&
        ((c.connection.ge = null), (a = L(c.connection)), a.Ta ? a.A() : Ae(a));
      c.A();
      this.Z.splice(b, 1);
      break;
    }
};
function Be(a, b) {
  for (var c = 0, e; (e = a.Z[c]); c++) if (e.name == b) return e;
  return null;
}
function Eh(a, b) {
  return (a = Be(a, b)) && a.connection && L(a.connection);
}
d.Ik = function() {
  return this.Ja || "";
};
d.tj = function(a) {
  this.Ja != a &&
    (A.i.R(new A.i.lc(this, "comment", null, this.Ja, a || "")), (this.Ja = a));
};
d.Ml = function() {};
d.Tr = function() {};
d.la = function() {
  return this.Xc;
};
d.moveBy = function(a, b) {
  var c = new A.i.Wh(this);
  this.Xc.translate(a, b);
  c.He();
  A.i.R(c);
};
d.ej = function(a) {
  return new Ie(this, a);
};
function Re(a) {
  var b = a.type ? '"' + a.type + '" block' : "Block";
  a.id && (b += ' (id="' + a.id + '")');
  return b;
}
A.h.Sh = {};
A.h.Sh.ze = function(a) {
  a = a.F();
  var b = eh(a);
  b.height = a.scrollHeight;
  return b;
};
A.h.Sh.jp = function(a, b, c) {
  b.left += c.width;
  b.right += c.width;
  a.left += c.width;
  a.right += c.width;
};
function Fh(a) {
  Cb.call(this);
  this.vh = a;
  this.Ah = {};
}
z(Fh, Cb);
var Gh = [];
d = Fh.prototype;
d.ia = function(a, b, c, e) {
  u(b) || (b && (Gh[0] = b.toString()), (b = Gh));
  for (var f = 0; f < b.length; f++) {
    var h = $b(a, b[f], c || this.handleEvent, e || !1, this.vh || this);
    if (!h) break;
    this.Ah[h.key] = h;
  }
  return this;
};
d.Vq = function(a, b, c, e) {
  return Hh(this, a, b, c, e);
};
function Hh(a, b, c, e, f, h) {
  if (u(c)) for (var k = 0; k < c.length; k++) Hh(a, b, c[k], e, f, h);
  else {
    b = ac(b, c, e || a.handleEvent, f, h || a.vh || a);
    if (!b) return a;
    a.Ah[b.key] = b;
  }
  return a;
}
d.Vc = function(a, b, c, e, f) {
  if (u(b)) for (var h = 0; h < b.length; h++) this.Vc(a, b[h], c, e, f);
  else
    (c = c || this.handleEvent),
      (e = ha(e) ? !!e.capture : !!e),
      (f = f || this.vh || this),
      (c = bc(c)),
      (e = !!e),
      (b = Qb(a)
        ? a.Gi(b, c, e, f)
        : a
        ? (a = dc(a))
          ? a.Gi(b, c, e, f)
          : null
        : null),
      b && (ic(b), delete this.Ah[b.key]);
  return this;
};
d.removeAll = function() {
  $a(
    this.Ah,
    function(a, b) {
      this.Ah.hasOwnProperty(b) && ic(a);
    },
    this
  );
  this.Ah = {};
};
d.Ka = function() {
  Fh.o.Ka.call(this);
  this.removeAll();
};
d.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Ih() {}
da(Ih);
Ih.prototype.Fv = 0;
function Jh(a) {
  kg.call(this);
  this.yk = a || Od();
  this.Nh = Kh;
  this.wh = null;
  this.sa = !1;
  this.N = null;
  this.ef = void 0;
  this.af = this.Mb = this.ee = this.Bn = null;
  this.Ih = this.Gw = !1;
}
z(Jh, kg);
Jh.prototype.fv = Ih.Vd();
var Kh = null;
function Lh(a, b) {
  switch (a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close";
  }
  throw Error("Invalid component state");
}
d = Jh.prototype;
d.ha = function() {
  return this.wh || (this.wh = ":" + (this.fv.Fv++).toString(36));
};
d.F = function() {
  return this.N;
};
function Mh(a) {
  a.ef || (a.ef = new Fh(a));
  return a.ef;
}
d.Eg = function(a) {
  if (this == a) throw Error("Unable to set parent component");
  if (a && this.ee && this.wh && Nh(this.ee, this.wh) && this.ee != a)
    throw Error("Unable to set parent component");
  this.ee = a;
  Jh.o.Kl.call(this, a);
};
d.getParent = function() {
  return this.ee;
};
d.Kl = function(a) {
  if (this.ee && this.ee != a) throw Error("Method not supported");
  Jh.o.Kl.call(this, a);
};
d.Zb = function() {
  return this.yk;
};
d.T = function() {
  this.N = this.yk.createElement("DIV");
};
d.$ = function(a) {
  this.fe(a);
};
d.fe = function(a, b) {
  if (this.sa) throw Error("Component already rendered");
  this.N || this.T();
  a ? a.insertBefore(this.N, b || null) : this.yk.td.body.appendChild(this.N);
  (this.ee && !this.ee.sa) || this.mb();
};
d.mb = function() {
  this.sa = !0;
  Oh(this, function(a) {
    !a.sa && a.F() && a.mb();
  });
};
d.gd = function() {
  Oh(this, function(a) {
    a.sa && a.gd();
  });
  this.ef && this.ef.removeAll();
  this.sa = !1;
};
d.Ka = function() {
  this.sa && this.gd();
  this.ef && (this.ef.A(), delete this.ef);
  Oh(this, function(a) {
    a.A();
  });
  !this.Gw && this.N && J(this.N);
  this.ee = this.Bn = this.N = this.af = this.Mb = null;
  Jh.o.Ka.call(this);
};
d.ei = function(a, b) {
  this.$g(a, Ph(this), b);
};
d.$g = function(a, b, c) {
  if (a.sa && (c || !this.sa)) throw Error("Component already rendered");
  if (0 > b || b > Ph(this)) throw Error("Child component index out of bounds");
  (this.af && this.Mb) || ((this.af = {}), (this.Mb = []));
  if (a.getParent() == this) {
    var e = a.ha();
    this.af[e] = a;
    xa(this.Mb, a);
  } else {
    e = this.af;
    var f = a.ha();
    if (null !== e && f in e)
      throw Error('The object already contains the key "' + f + '"');
    e[f] = a;
  }
  a.Eg(this);
  Ca(this.Mb, b, 0, a);
  a.sa && this.sa && a.getParent() == this
    ? ((c = this.Kc()),
      (b = c.childNodes[b] || null),
      b != a.F() && c.insertBefore(a.F(), b))
    : c
    ? (this.N || this.T(),
      (b = Q(this, b + 1)),
      a.fe(this.Kc(), b ? b.N : null))
    : this.sa &&
      !a.sa &&
      a.N &&
      a.N.parentNode &&
      1 == a.N.parentNode.nodeType &&
      a.mb();
};
d.Kc = function() {
  return this.N;
};
function Qh(a) {
  null == a.Nh && (a.Nh = "rtl" == ah(a.sa ? a.N : a.yk.td.body, "direction"));
  return a.Nh;
}
d.Le = function(a) {
  if (this.sa) throw Error("Component already rendered");
  this.Nh = a;
};
function Rh(a) {
  return !!a.Mb && 0 != a.Mb.length;
}
function Ph(a) {
  return a.Mb ? a.Mb.length : 0;
}
function Nh(a, b) {
  a.af && b
    ? ((a = a.af), (b = (null !== a && b in a ? a[b] : void 0) || null))
    : (b = null);
  return b;
}
function Q(a, b) {
  return a.Mb ? a.Mb[b] || null : null;
}
function Oh(a, b, c) {
  a.Mb && ra(a.Mb, b, c);
}
function Sh(a, b) {
  return a.Mb && b ? qa(a.Mb, b) : -1;
}
d.removeChild = function(a, b) {
  if (a) {
    var c = q(a) ? a : a.ha();
    a = Nh(this, c);
    if (c && a) {
      var e = this.af;
      c in e && delete e[c];
      xa(this.Mb, a);
      b && (a.gd(), a.N && J(a.N));
      a.Eg(null);
    }
  }
  if (!a) throw Error("Child is not in parent component");
  return a;
};
d.Mr = function(a) {
  for (var b = []; Rh(this); ) b.push(this.removeChild(Q(this, 0), a));
  return b;
};
var Th;
cb(
  "A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(
    " "
  )
);
function Uh(a, b) {
  b ? a.setAttribute("role", b) : a.removeAttribute("role");
}
function R(a, b, c) {
  u(c) && (c = c.join(" "));
  var e = "aria-" + b;
  "" === c || void 0 == c
    ? (Th ||
        (Th = {
          atomic: !1,
          autocomplete: "none",
          dropeffect: "none",
          haspopup: !1,
          live: "off",
          multiline: !1,
          multiselectable: !1,
          orientation: "vertical",
          readonly: !1,
          relevant: "additions text",
          required: !1,
          sort: "none",
          busy: !1,
          disabled: !1,
          hidden: !1,
          invalid: "false"
        }),
      (c = Th),
      b in c ? a.setAttribute(e, c[b]) : a.removeAttribute(e))
    : a.setAttribute(e, c);
}
function Vh(a, b) {
  a = a.getAttribute("aria-" + b);
  return null == a || void 0 == a ? "" : String(a);
}
function Wh(a, b, c, e, f, h) {
  if (E && !sb("525")) return !0;
  if (jb && f) return Xh(a);
  if (f && !e) return !1;
  if (!D) {
    r(b) && (b = Yh(b));
    var k = 17 == b || 18 == b || (jb && 91 == b);
    if (((!c || jb) && k) || (jb && 16 == b && (e || h))) return !1;
  }
  if ((E || hb) && e && c)
    switch (a) {
      case 220:
      case 219:
      case 221:
      case 192:
      case 186:
      case 189:
      case 187:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
        return !1;
    }
  if (C && e && b == a) return !1;
  switch (a) {
    case 13:
      return D ? (h || f ? !1 : !(c && e)) : !0;
    case 27:
      return !(E || hb || D);
  }
  return D && (e || f || h) ? !1 : Xh(a);
}
function Xh(a) {
  if (
    (48 <= a && 57 >= a) ||
    (96 <= a && 106 >= a) ||
    (65 <= a && 90 >= a) ||
    ((E || hb) && 0 == a)
  )
    return !0;
  switch (a) {
    case 32:
    case 43:
    case 63:
    case 64:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
      return !0;
    default:
      return !1;
  }
}
function Yh(a) {
  if (D) a = Zh(a);
  else if (jb && E)
    switch (a) {
      case 93:
        a = 91;
    }
  return a;
}
function Zh(a) {
  switch (a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 173:
      return 189;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a;
  }
}
function $h(a, b) {
  kg.call(this);
  a && ai(this, a, b);
}
z($h, kg);
d = $h.prototype;
d.N = null;
d.il = null;
d.sn = null;
d.jl = null;
d.wc = -1;
d.pf = -1;
d.lm = !1;
var bi = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
  },
  ci = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
  },
  di = !E || sb("525"),
  ei = jb && D;
d = $h.prototype;
d.Su = function(a) {
  if (E || hb)
    if (
      (17 == this.wc && !a.ctrlKey) ||
      (18 == this.wc && !a.altKey) ||
      (jb && 91 == this.wc && !a.metaKey)
    )
      this.pf = this.wc = -1;
  -1 == this.wc &&
    (a.ctrlKey && 17 != a.keyCode
      ? (this.wc = 17)
      : a.altKey && 18 != a.keyCode
      ? (this.wc = 18)
      : a.metaKey && 91 != a.keyCode && (this.wc = 91));
  di && !Wh(a.keyCode, this.wc, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
    ? this.handleEvent(a)
    : ((this.pf = Yh(a.keyCode)), ei && (this.lm = a.altKey));
};
d.Tu = function(a) {
  this.pf = this.wc = -1;
  this.lm = a.altKey;
};
d.handleEvent = function(a) {
  var b = a.Qd,
    c = b.altKey;
  if (C && "keypress" == a.type) {
    var e = this.pf;
    var f = 13 != e && 27 != e ? b.keyCode : 0;
  } else
    (E || hb) && "keypress" == a.type
      ? ((e = this.pf),
        (f = 0 <= b.charCode && 63232 > b.charCode && Xh(e) ? b.charCode : 0))
      : gb && !E
      ? ((e = this.pf), (f = Xh(e) ? b.keyCode : 0))
      : ((e = b.keyCode || this.pf),
        (f = b.charCode || 0),
        ei && "keypress" == a.type && (c = this.lm),
        jb && 63 == f && 224 == e && (e = 191));
  var h = (e = Yh(e));
  e
    ? 63232 <= e && e in bi
      ? (h = bi[e])
      : 25 == e && a.shiftKey && (h = 9)
    : b.keyIdentifier && b.keyIdentifier in ci && (h = ci[b.keyIdentifier]);
  (D &&
    di &&
    "keypress" == a.type &&
    !Wh(h, this.wc, a.shiftKey, a.ctrlKey, c, a.metaKey)) ||
    ((a = h == this.wc),
    (this.wc = h),
    (b = new fi(h, f, a, b)),
    (b.altKey = c),
    this.dispatchEvent(b));
};
d.F = function() {
  return this.N;
};
function ai(a, b, c) {
  a.jl && a.detach();
  a.N = b;
  a.il = $b(a.N, "keypress", a, c);
  a.sn = $b(a.N, "keydown", a.Su, c, a);
  a.jl = $b(a.N, "keyup", a.Tu, c, a);
}
d.detach = function() {
  this.il &&
    (ic(this.il),
    ic(this.sn),
    ic(this.jl),
    (this.jl = this.sn = this.il = null));
  this.N = null;
  this.pf = this.wc = -1;
};
d.Ka = function() {
  $h.o.Ka.call(this);
  this.detach();
};
function fi(a, b, c, e) {
  Lb.call(this, e);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c;
}
z(fi, Lb);
function gi(a) {
  if (a.classList) return a.classList;
  a = a.className;
  return (q(a) && a.match(/\S+/g)) || [];
}
function hi(a, b) {
  return a.classList ? a.classList.contains(b) : wa(gi(a), b);
}
function ii(a, b) {
  a.classList
    ? a.classList.add(b)
    : hi(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
}
function ji(a, b) {
  if (a.classList)
    ra(b, function(b) {
      ii(a, b);
    });
  else {
    var c = {};
    ra(gi(a), function(a) {
      c[a] = !0;
    });
    ra(b, function(a) {
      c[a] = !0;
    });
    a.className = "";
    for (var e in c) a.className += 0 < a.className.length ? " " + e : e;
  }
}
function ki(a, b) {
  a.classList
    ? a.classList.remove(b)
    : hi(a, b) &&
      (a.className = sa(gi(a), function(a) {
        return a != b;
      }).join(" "));
}
function li(a, b) {
  a.classList
    ? ra(b, function(b) {
        ki(a, b);
      })
    : (a.className = sa(gi(a), function(a) {
        return !wa(b, a);
      }).join(" "));
}
function mi(a, b) {
  if (!a) throw Error("Invalid class name " + a);
  if (!x(b)) throw Error("Invalid decorator function " + b);
}
var ni = {};
function oi(a) {
  this.mp = a;
}
da(oi);
d = oi.prototype;
d.Ek = function() {
  return this.mp;
};
function pi(a, b) {
  a && (a.tabIndex = b ? 0 : -1);
}
d.T = function(a) {
  return a.Zb().T("DIV", this.Fi(a).join(" "));
};
d.Kc = function(a) {
  return a;
};
d.Vi = function(a) {
  a = a.F();
  ih(a, !0, D);
  C && (a.hideFocus = !0);
  var b = this.Ek();
  b && Uh(a, b);
};
d.wb = function(a) {
  return a.F();
};
d.Aa = function() {
  return "goog-container";
};
d.Fi = function(a) {
  var b = this.Aa(),
    c = [b, a.vg == qi ? b + "-horizontal" : b + "-vertical"];
  a.isEnabled() || c.push(b + "-disabled");
  return c;
};
function ri() {}
var si;
da(ri);
var ti = {
  button: "pressed",
  checkbox: "checked",
  menuitem: "selected",
  menuitemcheckbox: "checked",
  menuitemradio: "checked",
  radio: "checked",
  tab: "selected",
  treeitem: "selected"
};
d = ri.prototype;
d.Ek = function() {};
d.T = function(a) {
  return a.Zb().T("DIV", this.Fi(a).join(" "), a.tc());
};
d.Kc = function(a) {
  return a;
};
d.zi = function(a, b, c) {
  if ((a = a.F ? a.F() : a)) {
    var e = [b];
    C && !sb("7") && ((e = ui(gi(a), b)), e.push(b));
    (c ? ji : li)(a, e);
  }
};
d.Vi = function(a) {
  Qh(a) && this.Le(a.F(), !0);
  a.isEnabled() && this.Ke(a, a.V());
};
function vi(a, b, c) {
  if ((a = c || a.Ek()))
    (c = b.getAttribute("role") || null), a != c && Uh(b, a);
}
function wi(a, b, c) {
  var e = b.lp;
  null != e && a.oo(c, e);
  b.V() || R(c, "hidden", !b.V());
  b.isEnabled() || xi(c, 1, !b.isEnabled());
  b.hb & 8 && xi(c, 8, b.dl());
  b.hb & 16 && xi(c, 16, !!(b.za & 16));
  b.hb & 64 && xi(c, 64, b.yh());
}
d.oo = function(a, b) {
  R(a, "label", b);
};
d.no = function(a, b) {
  ih(a, !b, !C && !gb);
};
d.Le = function(a, b) {
  this.zi(a, this.Aa() + "-rtl", b);
};
d.Ee = function(a) {
  var b;
  return a.hb & 32 && (b = a.wb()) ? fe(b) && ge(b) : !1;
};
d.Ke = function(a, b) {
  var c;
  if (a.hb & 32 && (c = a.wb())) {
    if (!b && a.za & 32) {
      try {
        c.blur();
      } catch (e) {}
      a.za & 32 && a.Mi(null);
    }
    (fe(c) && ge(c)) != b &&
      ((a = c),
      b
        ? (a.tabIndex = 0)
        : ((a.tabIndex = -1), a.removeAttribute("tabIndex")));
  }
};
d.ma = function(a, b) {
  gh(a, b);
  a && R(a, "hidden", !b);
};
d.Gd = function(a, b, c) {
  var e = a.F();
  if (e) {
    var f = this.Hk(b);
    f && this.zi(a, f, c);
    xi(e, b, c);
  }
};
function xi(a, b, c) {
  si || (si = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
  b = si[b];
  var e = a.getAttribute("role") || null;
  e && ((e = ti[e] || b), (b = "checked" == b || "selected" == b ? e : b));
  b && R(a, b, c);
}
d.ld = function(a, b) {
  var c = this.Kc(a);
  c &&
    ($d(c),
    b &&
      (q(b)
        ? ce(c, b)
        : ((a = function(a) {
            if (a) {
              var b = Qd(c);
              c.appendChild(q(a) ? b.createTextNode(a) : a);
            }
          }),
          u(b) ? ra(b, a) : !fa(b) || "nodeType" in b ? a(b) : ra(Aa(b), a))));
};
d.wb = function(a) {
  return a.F();
};
d.Aa = function() {
  return "goog-control";
};
d.Fi = function(a) {
  var b = this.Aa(),
    c = [b],
    e = this.Aa();
  e != b && c.push(e);
  b = a.getState();
  for (e = []; b; ) {
    var f = b & -b;
    e.push(this.Hk(f));
    b &= ~f;
  }
  c.push.apply(c, e);
  (a = a.Rd) && c.push.apply(c, a);
  C && !sb("7") && c.push.apply(c, ui(c));
  return c;
};
function ui(a, b) {
  var c = [];
  b && (a = za(a, [b]));
  ra([], function(e) {
    !ua(e, oa(wa, a)) || (b && !wa(e, b)) || c.push(e.join("_"));
  });
  return c;
}
d.Hk = function(a) {
  if (!this.wp) {
    var b = this.Aa();
    b.replace(/\xa0|\s/g, " ");
    this.wp = {
      1: b + "-disabled",
      2: b + "-hover",
      4: b + "-active",
      8: b + "-selected",
      16: b + "-checked",
      32: b + "-focused",
      64: b + "-open"
    };
  }
  return this.wp[a];
};
function S(a, b, c) {
  Jh.call(this, c);
  if (!b) {
    b = this.constructor;
    for (var e; b; ) {
      e = ia(b);
      if ((e = ni[e])) break;
      b = b.o ? b.o.constructor : null;
    }
    b = e ? (x(e.Vd) ? e.Vd() : new e()) : null;
  }
  this.ga = b;
  this.Hl(aa(a) ? a : null);
  this.lp = null;
}
z(S, Jh);
d = S.prototype;
d.Gc = null;
d.za = 0;
d.hb = 39;
d.nm = 255;
d.Jg = 0;
d.Ga = !0;
d.Rd = null;
d.Ni = !0;
d.km = !1;
d.dw = null;
d.wb = function() {
  return this.ga.wb(this);
};
d.Mk = function() {
  return this.Pb || (this.Pb = new $h());
};
d.zi = function(a, b) {
  b
    ? a &&
      (this.Rd ? wa(this.Rd, a) || this.Rd.push(a) : (this.Rd = [a]),
      this.ga.zi(this, a, !0))
    : a &&
      this.Rd &&
      xa(this.Rd, a) &&
      (0 == this.Rd.length && (this.Rd = null), this.ga.zi(this, a, !1));
};
d.T = function() {
  var a = this.ga.T(this);
  this.N = a;
  vi(this.ga, a, this.Pk());
  this.km || this.ga.no(a, !1);
  this.V() || this.ga.ma(a, !1);
};
d.Pk = function() {
  return this.dw;
};
d.oo = function(a) {
  this.lp = a;
  var b = this.F();
  b && this.ga.oo(b, a);
};
d.Kc = function() {
  return this.ga.Kc(this.F());
};
d.mb = function() {
  S.o.mb.call(this);
  wi(this.ga, this, this.N);
  this.ga.Vi(this);
  if (this.hb & -2 && (this.Ni && yi(this, !0), this.hb & 32)) {
    var a = this.wb();
    if (a) {
      var b = this.Mk();
      ai(b, a);
      Mh(this)
        .ia(b, "key", this.jd)
        .ia(a, "focus", this.Tk)
        .ia(a, "blur", this.Mi);
    }
  }
};
function yi(a, b) {
  var c = a.Ih ? Kb : Jb,
    e = Mh(a),
    f = a.F();
  b
    ? (e
        .ia(f, c.$h, a.Oi)
        .ia(f, c.Vg, a.Be)
        .ia(f, [c.Wg, c.Ug], a.uh)
        .ia(f, c.Zh, a.hn),
      a.Ih && e.ia(f, "gotpointercapture", a.Bl),
      a.sh != ca && e.ia(f, "contextmenu", a.sh),
      C &&
        (sb(9) || e.ia(f, "dblclick", a.Cq),
        a.Ui || ((a.Ui = new zi(a)), Fb(a, oa(Gb, a.Ui)))))
    : (e
        .Vc(f, c.$h, a.Oi)
        .Vc(f, c.Vg, a.Be)
        .Vc(f, [c.Wg, c.Ug], a.uh)
        .Vc(f, c.Zh, a.hn),
      a.Ih && e.Vc(f, "gotpointercapture", a.Bl),
      a.sh != ca && e.Vc(f, "contextmenu", a.sh),
      C && (sb(9) || e.Vc(f, "dblclick", a.Cq), Gb(a.Ui), (a.Ui = null)));
}
d.gd = function() {
  S.o.gd.call(this);
  this.Pb && this.Pb.detach();
  this.V() && this.isEnabled() && this.ga.Ke(this, !1);
};
d.Ka = function() {
  S.o.Ka.call(this);
  this.Pb && (this.Pb.A(), delete this.Pb);
  delete this.ga;
  this.Ui = this.Rd = this.Gc = null;
};
d.tc = function() {
  return this.Gc;
};
d.ld = function(a) {
  this.ga.ld(this.F(), a);
  this.Hl(a);
};
d.Hl = function(a) {
  this.Gc = a;
};
d.Gk = function() {
  var a = this.tc();
  if (!a) return "";
  a = q(a) ? a : u(a) ? ta(a, je).join("") : he(a);
  return Ga(a);
};
d.Le = function(a) {
  S.o.Le.call(this, a);
  var b = this.F();
  b && this.ga.Le(b, a);
};
d.no = function(a) {
  this.km = a;
  var b = this.F();
  b && this.ga.no(b, a);
};
d.V = function() {
  return this.Ga;
};
d.ma = function(a, b) {
  return b || (this.Ga != a && this.dispatchEvent(a ? "show" : "hide"))
    ? ((b = this.F()) && this.ga.ma(b, a),
      this.isEnabled() && this.ga.Ke(this, a),
      (this.Ga = a),
      !0)
    : !1;
};
d.isEnabled = function() {
  return !(this.za & 1);
};
d.xj = function(a) {
  var b = this.getParent();
  (b && "function" == typeof b.isEnabled && !b.isEnabled()) ||
    !Ai(this, 1, !a) ||
    (a || (this.setActive(!1), this.Gb(!1)),
    this.V() && this.ga.Ke(this, a),
    this.Gd(1, !a, !0));
};
d.Gb = function(a) {
  Ai(this, 2, a) && this.Gd(2, a);
};
d.setActive = function(a) {
  Ai(this, 4, a) && this.Gd(4, a);
};
d.dl = function() {
  return !!(this.za & 8);
};
d.to = function(a) {
  Ai(this, 8, a) && this.Gd(8, a);
};
function Bi(a, b) {
  Ai(a, 16, b) && a.Gd(16, b);
}
d.yh = function() {
  return !!(this.za & 64);
};
function Ci(a, b) {
  Ai(a, 64, b) && a.Gd(64, b);
}
d.getState = function() {
  return this.za;
};
d.Gd = function(a, b, c) {
  c || 1 != a
    ? this.hb & a &&
      b != !!(this.za & a) &&
      (this.ga.Gd(this, a, b), (this.za = b ? this.za | a : this.za & ~a))
    : this.xj(!b);
};
d.ic = function(a, b) {
  if (this.sa && this.za & a && !b) throw Error("Component already rendered");
  !b && this.za & a && this.Gd(a, !1);
  this.hb = b ? this.hb | a : this.hb & ~a;
};
function Di(a, b) {
  return !!(a.nm & b) && !!(a.hb & b);
}
function Ai(a, b, c) {
  return (
    !!(a.hb & b) &&
    !!(a.za & b) != c &&
    (!(a.Jg & b) || a.dispatchEvent(Lh(b, c))) &&
    !a.hh
  );
}
d.Oi = function(a) {
  !Ei(a, this.F()) &&
    this.dispatchEvent("enter") &&
    this.isEnabled() &&
    Di(this, 2) &&
    this.Gb(!0);
};
d.hn = function(a) {
  !Ei(a, this.F()) &&
    this.dispatchEvent("leave") &&
    (Di(this, 4) && this.setActive(!1), Di(this, 2) && this.Gb(!1));
};
d.Bl = function(a) {
  var b = a.target;
  b.releasePointerCapture && b.releasePointerCapture(a.pointerId);
};
d.sh = ca;
function Ei(a, b) {
  return !!a.relatedTarget && be(b, a.relatedTarget);
}
d.Be = function(a) {
  this.isEnabled() &&
    (Di(this, 2) && this.Gb(!0),
    !Ob(a) ||
      (E && jb && a.ctrlKey) ||
      (Di(this, 4) && this.setActive(!0),
      this.ga && this.ga.Ee(this) && this.wb().focus()));
  this.km || !Ob(a) || (E && jb && a.ctrlKey) || a.preventDefault();
};
d.uh = function(a) {
  this.isEnabled() &&
    (Di(this, 2) && this.Gb(!0),
    this.za & 4 && this.vf(a) && Di(this, 4) && this.setActive(!1));
};
d.Cq = function(a) {
  this.isEnabled() && this.vf(a);
};
d.vf = function(a) {
  Di(this, 16) && Bi(this, !(this.za & 16));
  Di(this, 8) && this.to(!0);
  Di(this, 64) && Ci(this, !this.yh());
  var b = new Hb("action", this);
  a &&
    ((b.altKey = a.altKey),
    (b.ctrlKey = a.ctrlKey),
    (b.metaKey = a.metaKey),
    (b.shiftKey = a.shiftKey),
    (b.Pn = a.Pn));
  return this.dispatchEvent(b);
};
d.Tk = function() {
  Di(this, 32) && Ai(this, 32, !0) && this.Gd(32, !0);
};
d.Mi = function() {
  Di(this, 4) && this.setActive(!1);
  Di(this, 32) && Ai(this, 32, !1) && this.Gd(32, !1);
};
d.jd = function(a) {
  return this.V() && this.isEnabled() && this.hg(a)
    ? (a.preventDefault(), a.stopPropagation(), !0)
    : !1;
};
d.hg = function(a) {
  return 13 == a.keyCode && this.vf(a);
};
if (!x(S)) throw Error("Invalid component class " + S);
if (!x(ri)) throw Error("Invalid renderer class " + ri);
var Fi = ia(S);
ni[Fi] = ri;
mi("goog-control", function() {
  return new S(null);
});
function zi(a) {
  Cb.call(this);
  this.pk = a;
  this.jk = !1;
  this.vh = new Fh(this);
  Fb(this, oa(Gb, this.vh));
  a = this.pk.N;
  this.vh
    .ia(a, "mousedown", this.Uu)
    .ia(a, "mouseup", this.Vu)
    .ia(a, "click", this.Nu);
}
z(zi, Cb);
var Gi = !C || 9 <= Number(tb);
zi.prototype.Uu = function() {
  this.jk = !1;
};
zi.prototype.Vu = function() {
  this.jk = !0;
};
function Hi(a, b) {
  if (!Gi) return (a.button = 0), (a.type = b), a;
  var c = document.createEvent("MouseEvents");
  c.initMouseEvent(
    b,
    a.bubbles,
    a.cancelable,
    a.view || null,
    a.detail,
    a.screenX,
    a.screenY,
    a.clientX,
    a.clientY,
    a.ctrlKey,
    a.altKey,
    a.shiftKey,
    a.metaKey,
    0,
    a.relatedTarget || null
  );
  return c;
}
zi.prototype.Nu = function(a) {
  if (this.jk) this.jk = !1;
  else {
    var b = a.Qd,
      c = b.button,
      e = b.type,
      f = Hi(b, "mousedown");
    this.pk.Be(new Lb(f, a.currentTarget));
    f = Hi(b, "mouseup");
    this.pk.uh(new Lb(f, a.currentTarget));
    Gi || ((b.button = c), (b.type = e));
  }
};
zi.prototype.Ka = function() {
  this.pk = null;
  zi.o.Ka.call(this);
};
function Ii(a, b, c) {
  Jh.call(this, c);
  this.ga = b || oi.Vd();
  this.vg = a || Ji;
}
z(Ii, Jh);
var qi = "horizontal",
  Ji = "vertical";
d = Ii.prototype;
d.tn = null;
d.Pb = null;
d.ga = null;
d.vg = null;
d.Ga = !0;
d.cg = !0;
d.eg = !0;
d.qa = -1;
d.qb = null;
d.Dh = !1;
d.tt = !1;
d.cw = !0;
d.te = null;
d.wb = function() {
  return this.tn || this.ga.wb(this);
};
d.Mk = function() {
  return this.Pb || (this.Pb = new $h(this.wb()));
};
d.T = function() {
  this.N = this.ga.T(this);
};
d.Kc = function() {
  return this.ga.Kc(this.F());
};
d.mb = function() {
  Ii.o.mb.call(this);
  Oh(
    this,
    function(a) {
      a.sa && Ki(this, a);
    },
    this
  );
  var a = this.F();
  this.ga.Vi(this);
  this.ma(this.Ga, !0);
  var b = this.Ih ? Kb : Jb;
  Mh(this)
    .ia(this, "enter", this.fn)
    .ia(this, "highlight", this.Ru)
    .ia(this, "unhighlight", this.$u)
    .ia(this, "open", this.Wu)
    .ia(this, "close", this.Ou)
    .ia(a, b.Vg, this.Be)
    .ia(Qd(a), [b.Wg, b.Ug], this.Pu)
    .ia(a, [b.Vg, b.Wg, b.Ug, b.$h, b.Zh, "contextmenu"], this.Mu);
  this.Ih && Mh(this).ia(a, "gotpointercapture", this.Bl);
  this.Ee() && Li(this, !0);
};
d.Bl = function(a) {
  var b = a.target;
  b.releasePointerCapture && b.releasePointerCapture(a.pointerId);
};
function Li(a, b) {
  var c = Mh(a),
    e = a.wb();
  b
    ? c
        .ia(e, "focus", a.Tk)
        .ia(e, "blur", a.Mi)
        .ia(a.Mk(), "key", a.jd)
    : c
        .Vc(e, "focus", a.Tk)
        .Vc(e, "blur", a.Mi)
        .Vc(a.Mk(), "key", a.jd);
}
d.gd = function() {
  this.Tb(-1);
  this.qb && Ci(this.qb, !1);
  this.Dh = !1;
  Ii.o.gd.call(this);
};
d.Ka = function() {
  Ii.o.Ka.call(this);
  this.Pb && (this.Pb.A(), (this.Pb = null));
  this.ga = this.qb = this.te = this.tn = null;
};
d.fn = function() {
  return !0;
};
d.Ru = function(a) {
  var b = Sh(this, a.target);
  if (-1 < b && b != this.qa) {
    var c = Q(this, this.qa);
    c && c.Gb(!1);
    this.qa = b;
    c = Q(this, this.qa);
    this.Dh && c.setActive(!0);
    this.cw &&
      this.qb &&
      c != this.qb &&
      (c.hb & 64 ? Ci(c, !0) : Ci(this.qb, !1));
  }
  b = this.F();
  null != a.target.F() && R(b, "activedescendant", a.target.F().id);
};
d.$u = function(a) {
  a.target == Q(this, this.qa) && (this.qa = -1);
  this.F().removeAttribute("aria-activedescendant");
};
d.Wu = function(a) {
  (a = a.target) &&
    a != this.qb &&
    a.getParent() == this &&
    (this.qb && Ci(this.qb, !1), (this.qb = a));
};
d.Ou = function(a) {
  a.target == this.qb && (this.qb = null);
  var b = this.F(),
    c = a.target.F();
  b &&
    a.target.za & 2 &&
    c &&
    ((a = ""), c && (a = c.id), R(b, "activedescendant", a));
};
d.Be = function(a) {
  this.cg && (this.Dh = !0);
  var b = this.wb();
  b && fe(b) && ge(b) ? b.focus() : a.preventDefault();
};
d.Pu = function() {
  this.Dh = !1;
};
d.Mu = function(a) {
  var b = this.Ih ? Kb : Jb,
    c = Mi(this, a.target);
  if (c)
    switch (a.type) {
      case b.Vg:
        c.Be(a);
        break;
      case b.Wg:
      case b.Ug:
        c.uh(a);
        break;
      case b.$h:
        c.Oi(a);
        break;
      case b.Zh:
        c.hn(a);
        break;
      case "contextmenu":
        c.sh(a);
    }
};
function Mi(a, b) {
  if (a.te)
    for (var c = a.F(); b && b !== c; ) {
      var e = b.id;
      if (e in a.te) return a.te[e];
      b = b.parentNode;
    }
  return null;
}
d.Tk = function() {};
d.Mi = function() {
  this.Tb(-1);
  this.Dh = !1;
  this.qb && Ci(this.qb, !1);
};
d.jd = function(a) {
  return this.isEnabled() &&
    this.V() &&
    (0 != Ph(this) || this.tn) &&
    this.hg(a)
    ? (a.preventDefault(), a.stopPropagation(), !0)
    : !1;
};
d.hg = function(a) {
  var b = Q(this, this.qa);
  if (
    (b && "function" == typeof b.jd && b.jd(a)) ||
    (this.qb &&
      this.qb != b &&
      "function" == typeof this.qb.jd &&
      this.qb.jd(a))
  )
    return !0;
  if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
  switch (a.keyCode) {
    case 27:
      if (this.Ee()) this.wb().blur();
      else return !1;
      break;
    case 36:
      Ni(this);
      break;
    case 35:
      Oi(this);
      break;
    case 38:
      if (this.vg == Ji) Pi(this);
      else return !1;
      break;
    case 37:
      if (this.vg == qi) Qh(this) ? Qi(this) : Pi(this);
      else return !1;
      break;
    case 40:
      if (this.vg == Ji) Qi(this);
      else return !1;
      break;
    case 39:
      if (this.vg == qi) Qh(this) ? Pi(this) : Qi(this);
      else return !1;
      break;
    default:
      return !1;
  }
  return !0;
};
function Ki(a, b) {
  var c = b.F();
  c = c.id || (c.id = b.ha());
  a.te || (a.te = {});
  a.te[c] = b;
}
d.ei = function(a, b) {
  Ii.o.ei.call(this, a, b);
};
d.$g = function(a, b, c) {
  a.Jg |= 2;
  a.Jg |= 64;
  (!this.Ee() && this.tt) || a.ic(32, !1);
  a.sa && 0 != a.Ni && yi(a, !1);
  a.Ni = !1;
  var e = a.getParent() == this ? Sh(this, a) : -1;
  Ii.o.$g.call(this, a, b, c);
  a.sa && this.sa && Ki(this, a);
  a = e;
  -1 == a && (a = Ph(this));
  a == this.qa
    ? (this.qa = Math.min(Ph(this) - 1, b))
    : a > this.qa && b <= this.qa
    ? this.qa++
    : a < this.qa && b > this.qa && this.qa--;
};
d.removeChild = function(a, b) {
  if ((a = q(a) ? Nh(this, a) : a)) {
    var c = Sh(this, a);
    -1 != c &&
      (c == this.qa ? (a.Gb(!1), (this.qa = -1)) : c < this.qa && this.qa--);
    var e = a.F();
    e && e.id && this.te && ((c = this.te), (e = e.id), e in c && delete c[e]);
  }
  b = a = Ii.o.removeChild.call(this, a, b);
  b.sa && 1 != b.Ni && yi(b, !0);
  b.Ni = !0;
  return a;
};
d.setOrientation = function(a) {
  if (this.F()) throw Error("Component already rendered");
  this.vg = a;
};
d.V = function() {
  return this.Ga;
};
d.ma = function(a, b) {
  if (b || (this.Ga != a && this.dispatchEvent(a ? "show" : "hide"))) {
    this.Ga = a;
    var c = this.F();
    c &&
      (gh(c, a),
      this.Ee() && pi(this.wb(), this.cg && this.Ga),
      b || this.dispatchEvent(this.Ga ? "aftershow" : "afterhide"));
    return !0;
  }
  return !1;
};
d.isEnabled = function() {
  return this.cg;
};
d.xj = function(a) {
  this.cg != a &&
    this.dispatchEvent(a ? "enable" : "disable") &&
    (a
      ? ((this.cg = !0),
        Oh(this, function(a) {
          a.ts ? delete a.ts : a.xj(!0);
        }))
      : (Oh(this, function(a) {
          a.isEnabled() ? a.xj(!1) : (a.ts = !0);
        }),
        (this.Dh = this.cg = !1)),
    this.Ee() && pi(this.wb(), a && this.Ga));
};
d.Ee = function() {
  return this.eg;
};
d.Ke = function(a) {
  a != this.eg && this.sa && Li(this, a);
  this.eg = a;
  this.cg && this.Ga && pi(this.wb(), a);
};
d.Tb = function(a) {
  (a = Q(this, a)) ? a.Gb(!0) : -1 < this.qa && Q(this, this.qa).Gb(!1);
};
d.Gb = function(a) {
  this.Tb(Sh(this, a));
};
function Ni(a) {
  Ri(
    a,
    function(a, c) {
      return (a + 1) % c;
    },
    Ph(a) - 1
  );
}
function Oi(a) {
  Ri(
    a,
    function(a, c) {
      a--;
      return 0 > a ? c - 1 : a;
    },
    0
  );
}
function Qi(a) {
  Ri(
    a,
    function(a, c) {
      return (a + 1) % c;
    },
    a.qa
  );
}
function Pi(a) {
  Ri(
    a,
    function(a, c) {
      a--;
      return 0 > a ? c - 1 : a;
    },
    a.qa
  );
}
function Ri(a, b, c) {
  c = 0 > c ? Sh(a, a.qb) : c;
  var e = Ph(a);
  c = b.call(a, c, e);
  for (var f = 0; f <= e; ) {
    var h = Q(a, c);
    if (h && a.sp(h)) {
      a.Tb(c);
      break;
    }
    f++;
    c = b.call(a, c, e);
  }
}
d.sp = function(a) {
  return a.V() && a.isEnabled() && !!(a.hb & 2);
};
function Si() {}
z(Si, ri);
da(Si);
Si.prototype.Aa = function() {
  return "goog-menuheader";
};
function Ti(a, b, c) {
  S.call(this, a, c || Si.Vd(), b);
  this.ic(1, !1);
  this.ic(2, !1);
  this.ic(4, !1);
  this.ic(32, !1);
  this.za = 1;
}
z(Ti, S);
mi("goog-menuheader", function() {
  return new Ti(null);
});
function Ui() {
  this.xp = [];
}
z(Ui, ri);
da(Ui);
function Vi(a, b) {
  var c = a.xp[b];
  if (!c) {
    switch (b) {
      case 0:
        c = a.Aa() + "-highlight";
        break;
      case 1:
        c = a.Aa() + "-checkbox";
        break;
      case 2:
        c = a.Aa() + "-content";
    }
    a.xp[b] = c;
  }
  return c;
}
d = Ui.prototype;
d.Ek = function() {
  return "menuitem";
};
d.T = function(a) {
  var b = a.Zb().T("DIV", this.Fi(a).join(" "), Wi(this, a.tc(), a.Zb()));
  Xi(this, a, b, !!(a.hb & 8) || !!(a.hb & 16));
  return b;
};
d.Kc = function(a) {
  return a && a.firstChild;
};
d.ld = function(a, b) {
  var c = this.Kc(a),
    e = Yi(this, a) ? c.firstChild : null;
  Ui.o.ld.call(this, a, b);
  e && !Yi(this, a) && c.insertBefore(e, c.firstChild || null);
};
function Wi(a, b, c) {
  a = Vi(a, 2);
  return c.T("DIV", a, b);
}
d.Ur = function(a, b, c) {
  a && b && Xi(this, a, b, c);
};
d.qo = function(a, b, c) {
  a && b && Xi(this, a, b, c);
};
function Yi(a, b) {
  return (b = a.Kc(b))
    ? ((b = b.firstChild),
      (a = Vi(a, 1)),
      !!b && ha(b) && 1 == b.nodeType && hi(b, a))
    : !1;
}
function Xi(a, b, c, e) {
  vi(a, c, b.Pk());
  wi(a, b, c);
  e != Yi(a, c) &&
    (e ? ii(c, "goog-option") : ki(c, "goog-option"),
    (c = a.Kc(c)),
    e
      ? ((a = Vi(a, 1)),
        c.insertBefore(b.Zb().T("DIV", a), c.firstChild || null))
      : c.removeChild(c.firstChild));
}
d.Hk = function(a) {
  switch (a) {
    case 2:
      return Vi(this, 0);
    case 16:
    case 8:
      return "goog-option-selected";
    default:
      return Ui.o.Hk.call(this, a);
  }
};
d.Aa = function() {
  return "goog-menuitem";
};
function Zi(a, b, c, e) {
  S.call(this, a, e || Ui.Vd(), c);
  this.setValue(b);
}
z(Zi, S);
d = Zi.prototype;
d.getValue = function() {
  var a = this.Bn;
  return null != a ? a : this.Gk();
};
d.setValue = function(a) {
  this.Bn = a;
};
d.ic = function(a, b) {
  Zi.o.ic.call(this, a, b);
  switch (a) {
    case 8:
      this.za & 16 && !b && Bi(this, !1);
      (a = this.F()) && this.ga.Ur(this, a, b);
      break;
    case 16:
      (a = this.F()) && this.ga.qo(this, a, b);
  }
};
d.Ur = function(a) {
  this.ic(8, a);
};
d.qo = function(a) {
  this.ic(16, a);
};
d.Gk = function() {
  var a = this.tc();
  return u(a)
    ? ((a = ta(a, function(a) {
        return ha(a) &&
          1 == a.nodeType &&
          (hi(a, "goog-menuitem-accel") ||
            hi(a, "goog-menuitem-mnemonic-separator"))
          ? ""
          : je(a);
      }).join("")),
      Ga(a))
    : Zi.o.Gk.call(this);
};
d.uh = function(a) {
  var b = this.getParent();
  if (b) {
    var c = b.Ar;
    b.Ar = null;
    if (c && r(a.clientX) && oc(c, new F(a.clientX, a.clientY))) return;
  }
  Zi.o.uh.call(this, a);
};
d.hg = function(a) {
  return a.keyCode == this.$q && this.vf(a) ? !0 : Zi.o.hg.call(this, a);
};
d.Ju = function() {
  return this.$q;
};
mi("goog-menuitem", function() {
  return new Zi(null);
});
Zi.prototype.Pk = function() {
  return this.hb & 16
    ? "menuitemcheckbox"
    : this.hb & 8
    ? "menuitemradio"
    : Zi.o.Pk.call(this);
};
Zi.prototype.getParent = function() {
  return S.prototype.getParent.call(this);
};
Zi.prototype.Ok = function() {
  return S.prototype.Ok.call(this);
};
function $i() {}
z($i, ri);
da($i);
$i.prototype.T = function(a) {
  return a.Zb().T("DIV", this.Aa());
};
$i.prototype.ld = function() {};
$i.prototype.Aa = function() {
  return "goog-menuseparator";
};
function aj(a, b) {
  S.call(this, null, a || $i.Vd(), b);
  this.ic(1, !1);
  this.ic(2, !1);
  this.ic(4, !1);
  this.ic(32, !1);
  this.za = 1;
}
z(aj, S);
aj.prototype.mb = function() {
  aj.o.mb.call(this);
  var a = this.F();
  Uh(a, "separator");
};
mi("goog-menuseparator", function() {
  return new aj();
});
function bj(a) {
  this.mp = a || "menu";
}
z(bj, oi);
da(bj);
bj.prototype.Aa = function() {
  return "goog-menu";
};
bj.prototype.Vi = function(a) {
  bj.o.Vi.call(this, a);
  a = a.F();
  R(a, "haspopup", "true");
};
mi("goog-menuseparator", function() {
  return new aj();
});
function cj(a, b) {
  Ii.call(this, Ji, b || bj.Vd(), a);
  this.Ke(!1);
}
z(cj, Ii);
d = cj.prototype;
d.fk = !0;
d.ut = !1;
d.Aa = function() {
  return this.ga.Aa();
};
d.removeItem = function(a) {
  (a = this.removeChild(a, !0)) && a.A();
};
d.wq = function(a) {
  return Q(this, a);
};
d.setPosition = function(a, b) {
  var c = this.V();
  c || gh(this.F(), !0);
  var e = this.F(),
    f = a;
  a = ch(e);
  f instanceof F && ((b = f.y), (f = f.x));
  var h = e.offsetLeft + (f - a.x);
  h instanceof F
    ? ((f = h.x), (b = h.y))
    : ((f = h), (b = e.offsetTop + (Number(b) - a.y)));
  e.style.left = dh(f);
  e.style.top = dh(b);
  c || gh(this.F(), !1);
};
d.yq = function() {
  return this.V() ? ch(this.F()) : null;
};
d.ma = function(a, b, c) {
  (b = cj.o.ma.call(this, a, b)) &&
    a &&
    this.sa &&
    this.fk &&
    this.wb().focus();
  this.Ar = a && c && r(c.clientX) ? new F(c.clientX, c.clientY) : null;
  return b;
};
d.fn = function(a) {
  this.fk && this.wb().focus();
  return cj.o.fn.call(this, a);
};
d.sp = function(a) {
  return (this.ut || a.isEnabled()) && a.V() && !!(a.hb & 2);
};
d.hg = function(a) {
  var b = cj.o.hg.call(this, a);
  b ||
    Oh(
      this,
      function(c) {
        !b &&
          c.Ju &&
          c.$q == a.keyCode &&
          (this.isEnabled() && this.Gb(c), (b = c.jd(a)));
      },
      this
    );
  return b;
};
d.Tb = function(a) {
  cj.o.Tb.call(this, a);
  if ((a = Q(this, a))) {
    var b = a.F();
    a = this.F() || Wd(document);
    var c = a || Wd(document);
    var e = ch(b),
      f = ch(c);
    if (!C || 9 <= Number(tb)) {
      k = $g(c, "borderLeftWidth");
      var h = $g(c, "borderRightWidth");
      l = $g(c, "borderTopWidth");
      m = $g(c, "borderBottomWidth");
      h = new mg(parseFloat(l), parseFloat(h), parseFloat(m), parseFloat(k));
    } else {
      var k = kh(c, "borderLeft");
      h = kh(c, "borderRight");
      var l = kh(c, "borderTop"),
        m = kh(c, "borderBottom");
      h = new mg(l, h, m, k);
    }
    c == Wd(document)
      ? ((k = e.x - c.scrollLeft),
        (e = e.y - c.scrollTop),
        !C || 10 <= Number(tb) || ((k += h.left), (e += h.top)))
      : ((k = e.x - f.x - h.left), (e = e.y - f.y - h.top));
    b = fh(b);
    f = c.clientHeight - b.height;
    h = c.scrollLeft;
    l = c.scrollTop;
    h += Math.min(k, Math.max(k - (c.clientWidth - b.width), 0));
    l += Math.min(e, Math.max(e - f, 0));
    c = new F(h, l);
    a.scrollLeft = c.x;
    a.scrollTop = c.y;
  }
};
A.ea = {};
A.ea.qk = null;
A.ea.pq = null;
A.ea.show = function(a, b, c) {
  A.H.show(A.ea, c, null);
  if (b.length) {
    var e = A.ea.Al(b, c);
    $b(e, "action", A.ea.Ba);
    A.ea.yc(e, a, c);
    setTimeout(function() {
      e.F().focus();
    }, 1);
    A.ea.qk = null;
  } else A.ea.Ba();
};
A.ea.Al = function(a, b) {
  var c = new cj();
  c.Le(b);
  for (var e = 0, f; (f = a[e]); e++) {
    var h = new Zi(f.text);
    h.Le(b);
    c.ei(h, !0);
    h.xj(f.enabled);
    f.enabled &&
      ($b(h, "action", f.ub),
      (h.sh = function() {
        this.dispatchEvent("action");
      }));
  }
  return c;
};
A.ea.yc = function(a, b, c) {
  var e = A.h.dn();
  b = {
    top: b.clientY + e.top,
    bottom: b.clientY + e.top,
    left: b.clientX + e.left,
    right: b.clientX + e.left
  };
  A.ea.si(a);
  var f = A.h.Sh.ze(a);
  c && A.h.Sh.jp(e, b, f);
  A.H.Qn(e, b, f, c);
  a.F().focus();
};
A.ea.si = function(a) {
  a.$(A.H.ca);
  var b = a.F();
  A.h.Ya(b, "blocklyContextMenu");
  A.J(b, "contextmenu", null, A.h.Gv);
  a.fk = !0;
  a.Ke(!0);
};
A.ea.Ba = function() {
  A.H.Ri(A.ea);
  A.ea.qk = null;
  A.ea.pq && A.Ca(A.ea.pq);
};
A.ea.vA = function(a, b) {
  return function() {
    A.i.disable();
    try {
      var c = A.D.ih(b, a.s),
        e = a.la();
      e.x = a.u ? e.x - A.pd : e.x + A.pd;
      e.y += 2 * A.pd;
      c.moveBy(e.x, e.y);
    } finally {
      A.i.enable();
    }
    A.i.isEnabled() && !c.Ta && A.i.R(new A.i.Xj(c));
    c.select();
  };
};
A.ea.zt = function(a) {
  var b = tc(a, !1).length,
    c = Hc(a);
  c && (b -= tc(c, !1).length);
  return {
    text:
      1 == b ? A.g.DELETE_BLOCK : A.g.DELETE_X_BLOCKS.replace("%1", String(b)),
    enabled: !0,
    ub: function() {
      A.i.O(!0);
      a.A(!0, !0);
      A.i.O(!1);
    }
  };
};
A.ea.Bt = function(a) {
  return {
    enabled: !(x(a.Ce) ? !a.Ce() : !a.Ce),
    text: A.g.HELP,
    ub: function() {
      var b = x(a.Ce) ? a.Ce() : a.Ce;
      b && window.open(b);
    }
  };
};
A.ea.At = function(a) {
  var b = !0;
  tc(a, !1).length > ad(a.s) && (b = !1);
  return {
    text: A.g.DUPLICATE_BLOCK,
    enabled: b,
    ub: function() {
      A.mq(a);
    }
  };
};
A.ea.yt = function(a) {
  var b = { enabled: !C };
  a.Ja
    ? ((b.text = A.g.REMOVE_COMMENT),
      (b.ub = function() {
        a.tj(null);
      }))
    : ((b.text = A.g.ADD_COMMENT),
      (b.ub = function() {
        a.tj("");
      }));
  return b;
};
A.ea.Pt = function(a) {
  return {
    text: A.g.Fz,
    enabled: !0,
    ub: function() {
      A.i.O(!0);
      a.A(!0, !0);
      A.i.O(!1);
    }
  };
};
A.ea.Qt = function(a) {
  return {
    text: A.g.Sx,
    enabled: !0,
    ub: function() {
      A.mq(a);
    }
  };
};
A.ea.RA = function(a, b) {
  var c = { enabled: !0 };
  c.text = A.g.Nw;
  c.ub = function() {
    var c = new uf(a, A.g.qA, 100, 100);
    if (!a.pn)
      for (var f = a.v; f; ) {
        if (
          -1 !=
          (" " + (f.getAttribute("class") || "") + " ").indexOf(
            " injectionDiv "
          )
        ) {
          a.pn = f;
          break;
        }
        f = f.parentNode;
      }
    f = a.pn.getBoundingClientRect();
    f = new F(b.clientX - f.left, b.clientY - f.top);
    var h = A.h.Lk(a.Fa);
    f = qc(f, h).scale(1 / a.scale);
    c.moveBy(f.x, f.y);
    a.U && (c.Ad(), c.$(!1), c.select());
  };
  return c;
};
function O(a, b, c) {
  this.v = A.h.B("g", {}, null);
  this.v.Qe = "";
  this.Gj = A.h.B(
    "path",
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.v
  );
  this.md = A.h.B("path", { class: "blocklyPath" }, this.v);
  this.Hf = A.h.B("path", { class: "blocklyPathLight" }, this.v);
  this.md.Tc = this;
  this.U = !1;
  this.le = A.h.mf() && !!a.fb;
  A.C.Wf(this.md);
  O.o.constructor.call(this, a, b, c);
  this.v.dataset && (this.v.dataset.id = this.id);
}
z(O, $c);
d = O.prototype;
d.height = 0;
d.width = 0;
d.Ac = null;
d.Ad = function() {
  for (var a = 0, b; (b = this.Z[a]); a++) b.W();
  b = mf(this);
  for (a = 0; a < b.length; a++) De(b[a]);
  this.Re();
  vf(this);
  this.s.options.readOnly ||
    this.Qm ||
    A.J(this.M(), "mousedown", this, this.Ge);
  this.Qm = !0;
  this.M().parentNode || this.s.Fa.appendChild(this.M());
};
d.select = function() {
  if (this.Ta && this.getParent()) this.getParent().select();
  else if (A.selected != this) {
    var a = null;
    if (A.selected) {
      a = A.selected.id;
      A.i.disable();
      try {
        A.selected.Lf();
      } finally {
        A.i.enable();
      }
    }
    a = new Bc(null, "selected", a, this.id);
    a.kc = this.s.id;
    A.i.R(a);
    A.selected = this;
    this.ah();
  }
};
d.Lf = function() {
  if (A.selected == this) {
    var a = new Bc(null, "selected", this.id, null);
    a.kc = this.s.id;
    A.i.R(a);
    A.selected = null;
    this.zg();
  }
};
d.Bd = null;
d.Ja = null;
d.Wc = null;
function mf(a) {
  var b = [];
  a.Bd && b.push(a.Bd);
  a.Ja && b.push(a.Ja);
  a.Wc && b.push(a.Wc);
  return b;
}
d.Eg = function(a) {
  var b = this.uf;
  if (a != b) {
    vg();
    O.o.Eg.call(this, a);
    wg();
    var c = this.M();
    if (!this.s.rn && c) {
      var e = this.la();
      a
        ? (a.M().appendChild(c),
          (a = this.la()),
          df(this, a.x - e.x, a.y - e.y))
        : b &&
          A.selected != this &&
          (this.s.Fa.appendChild(c), this.translate(e.x, e.y));
    }
  }
};
d.la = function() {
  var a = 0,
    b = 0,
    c = this.le ? this.s.fb.ac() : null,
    e = this.M();
  if (e) {
    do {
      var f = A.h.bc(e);
      a += f.x;
      b += f.y;
      this.le &&
        this.s.fb.Od.firstChild == e &&
        ((f = this.s.fb.Qk()), (a += f.x), (b += f.y));
      e = e.parentNode;
    } while (e && e != this.s.Fa && e != c);
  }
  return new F(a, b);
};
d.moveBy = function(a, b) {
  var c = A.i.isEnabled();
  if (c) var e = new A.i.Wh(this);
  var f = this.la();
  this.translate(f.x + a, f.y + b);
  df(this, a, b);
  c && (e.He(), A.i.R(e));
  xf(this.s);
};
d.translate = function(a, b) {
  this.M().setAttribute("transform", "translate(" + a + "," + b + ")");
};
d.tl = function() {
  if (this.le) {
    var a = this.la();
    A.h.removeAttribute(this.M(), "transform");
    this.s.fb.Pe(a.x, a.y);
    yf(this.s.fb, this.M());
  }
};
d.er = function(a) {
  this.le && (this.translate(a.x, a.y), this.s.fb.ki(this.s.Fa));
};
d.rl = function(a) {
  this.le
    ? this.s.fb.Pe(a.x, a.y)
    : ((this.v.Qe = "translate(" + a.x + "," + a.y + ")"),
      this.v.setAttribute("transform", this.v.Qe + this.v.Gg));
};
function Pg(a) {
  if (a.s && !a.s.ob() && !a.getParent() && !a.vc) {
    var b = a.s.hd;
    if (b && b.mw) {
      var c = b.Bo,
        e = c / 2,
        f = a.la();
      b = Math.round((f.x - e) / c) * c + e - f.x;
      c = Math.round((f.y - e) / c) * c + e - f.y;
      b = Math.round(b);
      c = Math.round(c);
      (0 == b && 0 == c) || a.moveBy(b, c);
    }
  }
}
d.Wm = function() {
  var a = this.la(),
    b = this.L ? N : 0,
    c = this.vb();
  if (this.u) {
    var e = new F(a.x - (c.width - b), a.y);
    a = new F(a.x + b, a.y + c.height);
  } else
    (e = new F(a.x - b, a.y)), (a = new F(a.x + c.width - b, a.y + c.height));
  return { Uc: e, rd: a };
};
d.Bg = function(a) {
  if (this.Md != a) {
    for (var b = [], c = 0, e; (e = this.Z[c]); c++) b.push.apply(b, e.ma(!a));
    if (a) {
      e = mf(this);
      for (c = 0; c < e.length; c++) e[c].ma(!1);
      c = this.toString(A.ys);
      wh(this.qd(A.od, "_TEMP_COLLAPSED_INPUT"), c).W();
    } else this.yg("_TEMP_COLLAPSED_INPUT"), this.Ml(null);
    O.o.Bg.call(this, a);
    b.length || (b[0] = this);
    if (this.U) for (c = 0; (a = b[c]); c++) a.$();
  }
};
d.Ho = function(a, b) {
  for (var c = [], e = 0, f; (f = this.Z[e]); e++) {
    for (var h = 0, k; (k = f.Qa[h]); h++) k instanceof dj && c.push(k);
    f.connection && (f = L(f.connection)) && c.push(f);
  }
  a = c.indexOf(a);
  -1 == a && (a = b ? -1 : c.length);
  (c = c[b ? a + 1 : a - 1])
    ? c instanceof lh
      ? c.Gf()
      : c.Ho(null, b)
    : (c = this.getParent()) && c.Ho(this, b);
};
d.Ge = function(a) {
  var b = this.s && this.s.Ud(a);
  b && (Qf(b, this), (b.xc = a));
};
d.Oh = function(a) {
  if (!this.s.options.readOnly && this.contextMenu) {
    var b = this,
      c = [];
    if (this.Ob() && this.$d() && !b.vc) {
      c.push(A.ea.At(b));
      Ge(this) && !this.Md && this.s.options.Rt && c.push(A.ea.yt(b));
      if (!this.Md)
        for (var e = 1; e < this.Z.length; e++)
          if (this.Z[e - 1].type != A.Ma && this.Z[e].type != A.Ma) {
            e = { enabled: !0 };
            var f = Yg(this);
            e.text = f ? A.g.EXTERNAL_INPUTS : A.g.INLINE_INPUTS;
            e.ub = function() {
              b.Ef(!f);
            };
            c.push(e);
            break;
          }
      this.s.options.collapse &&
        (this.Md
          ? ((e = { enabled: !0 }),
            (e.text = A.g.EXPAND_BLOCK),
            (e.ub = function() {
              b.Bg(!1);
            }),
            c.push(e))
          : ((e = { enabled: !0 }),
            (e.text = A.g.COLLAPSE_BLOCK),
            (e.ub = function() {
              b.Bg(!0);
            }),
            c.push(e)));
      this.s.options.disable &&
        ((e = {
          text: this.disabled ? A.g.ENABLE_BLOCK : A.g.DISABLE_BLOCK,
          enabled: !Ah(this),
          ub: function() {
            b.Cf(!b.disabled);
          }
        }),
        c.push(e));
      c.push(A.ea.zt(b));
    }
    c.push(A.ea.Bt(b));
    this.fu && this.fu(c);
    A.ea.show(a, c, this.u);
    A.ea.qk = this;
  }
};
function df(a, b, c) {
  if (a.U) {
    for (var e = a.Td(!1), f = 0; f < e.length; f++) e[f].moveBy(b, c);
    e = mf(a);
    for (f = 0; f < e.length; f++) Ee(e[f]);
    for (f = 0; f < a.se.length; f++) df(a.se[f], b, c);
  }
}
d.Df = function(a) {
  if (a) {
    var b = this.M();
    b.Qe = "";
    b.Gg = "";
    A.Ak = A.Ak.concat(this.Td(!0));
    A.h.Ya(this.v, "blocklyDragging");
  } else (A.Ak = []), A.h.yb(this.v, "blocklyDragging");
  for (b = 0; b < this.se.length; b++) this.se[b].Df(a);
};
d.Dg = function(a) {
  O.o.Dg.call(this, a);
  vf(this);
};
d.ro = function(a) {
  O.o.ro.call(this, a);
  a = mf(this);
  for (var b = 0; b < a.length; b++) a[b].Se();
};
d.vo = function(a) {
  O.o.vo.call(this, a);
  this.Re();
};
d.M = function() {
  return this.v;
};
d.A = function(a, b) {
  if (this.s) {
    A.C.Ba();
    vg();
    var c = this.s;
    if (A.selected == this) {
      this.Lf();
      var e = this.s;
      e.kb && e.kb.cancel();
    }
    A.ea.qk == this && A.ea.Ba();
    b && this.U && (Ae(this, a), A.ya.su(this));
    this.U = !1;
    if (this.Ac) {
      for (var f in this.Ac) clearTimeout(this.Ac[f]);
      this.Ac = null;
    }
    A.i.disable();
    try {
      var h = mf(this);
      for (b = 0; b < h.length; b++) h[b].A();
    } finally {
      A.i.enable();
    }
    O.o.A.call(this, a);
    J(this.v);
    xf(c);
    this.Gj = this.Hf = this.md = this.v = null;
    wg();
  }
};
d.Re = function() {
  if (!this.disabled) {
    var a = this.Nd,
      b = ej(a);
    if (this.Ta)
      (b = fj([255, 255, 255], b, 0.6)),
        (a = gj(b)),
        (this.Hf.style.display = "none"),
        this.Gj.setAttribute("fill", a);
    else {
      this.Hf.style.display = "";
      var c = gj(fj([255, 255, 255], b, 0.3));
      b = gj(fj([0, 0, 0], b, 0.2));
      this.Hf.setAttribute("stroke", c);
      this.Gj.setAttribute("fill", b);
    }
    this.md.setAttribute("fill", a);
    a = mf(this);
    for (c = 0; c < a.length; c++) a[c].Re();
    for (a = 0; (c = this.Z[a]); a++) {
      b = 0;
      for (var e; (e = c.Qa[b]); b++) e.Di();
    }
  }
};
function jf(a) {
  a.disabled || Ah(a)
    ? A.h.Ya(a.v, "blocklyDisabled") &&
      a.md.setAttribute("fill", "url(#" + a.s.options.xi + ")")
    : A.h.yb(a.v, "blocklyDisabled") && a.Re();
  a = a.df(!1);
  for (var b = 0, c; (c = a[b]); b++) jf(c);
}
d.Ik = function() {
  return this.Ja
    ? this.Ja.xb()
        .replace(/\s+$/, "")
        .replace(/ +\n/g, "\n")
    : "";
};
d.tj = function(a) {
  var b = !1;
  q(a)
    ? (this.Ja || ((this.Ja = new Fe(this)), (b = !0)), this.Ja.Ab(a))
    : this.Ja && (this.Ja.A(), (b = !0));
  b && this.U && (this.$(), this.tb());
};
d.Ml = function(a, b) {
  this.Ac || (this.Ac = Object.create(null));
  var c = b || "";
  if (c) this.Ac[c] && (clearTimeout(this.Ac[c]), delete this.Ac[c]);
  else for (var e in this.Ac) clearTimeout(this.Ac[e]), delete this.Ac[e];
  if (this.s.ob()) {
    var f = this;
    this.Ac[c] = setTimeout(function() {
      f.s && (delete f.Ac[c], f.Ml(a, c));
    }, 100);
  } else {
    this.vc && (a = null);
    b = zh(this);
    for (e = null; b; ) b.isCollapsed() && (e = b), (b = zh(b));
    e && e.Ml(a, "collapsed " + this.id + " " + c);
    b = !1;
    q(a)
      ? (this.Wc || ((this.Wc = new He(this)), (b = !0)), this.Wc.Ab(a, c))
      : this.Wc && !c
      ? (this.Wc.A(), (b = !0))
      : this.Wc &&
        ((b = this.Wc.xb()),
        this.Wc.Ab("", c),
        (e = this.Wc.xb()) || this.Wc.A(),
        (b = b != e));
    b && this.U && (this.$(), this.tb());
  }
};
d.Tr = function(a) {
  this.Bd && this.Bd !== a && this.Bd.A();
  a && ((a.P = this), (this.Bd = a), De(a));
};
d.Cf = function(a) {
  this.disabled != a && (O.o.Cf.call(this, a), this.U && jf(this));
};
d.Gb = function(a) {
  this.U &&
    (a
      ? (this.md.setAttribute("filter", "url(#" + this.s.options.oq + ")"),
        (this.Hf.style.display = "none"))
      : (A.h.removeAttribute(this.md, "filter"), delete this.Hf.style.display));
};
d.ah = function() {
  A.h.Ya(this.v, "blocklySelected");
};
d.zg = function() {
  A.h.yb(this.v, "blocklySelected");
};
d.wj = function(a) {
  a
    ? A.h.Ya(this.v, "blocklyDraggingDelete")
    : A.h.yb(this.v, "blocklyDraggingDelete");
};
d.Je = function(a) {
  O.o.Je.call(this, a);
  this.U && this.Re();
};
function sf(a) {
  do {
    var b = a.M();
    b.parentNode.appendChild(b);
    a = a.getParent();
  } while (a);
}
d.zj = function(a, b) {
  O.o.zj.call(this, a, b);
  this.U && (this.$(), this.tb());
};
d.Jl = function(a, b) {
  O.o.Jl.call(this, a, b);
  this.U && (this.$(), this.tb());
};
d.yj = function(a, b) {
  O.o.yj.call(this, a, b);
  this.U && (this.$(), this.tb());
};
d.Ef = function(a) {
  O.o.Ef.call(this, a);
  this.U && (this.$(), this.tb());
};
d.yg = function(a, b) {
  O.o.yg.call(this, a, b);
  this.U && (this.$(), this.tb());
};
d.qd = function(a, b) {
  a = O.o.qd.call(this, a, b);
  this.U && (this.$(), this.tb());
  return a;
};
d.Td = function(a) {
  var b = [];
  if (a || this.U)
    if (
      (this.L && b.push(this.L),
      this.X && b.push(this.X),
      this.K && b.push(this.K),
      a || !this.Md)
    ) {
      a = 0;
      for (var c; (c = this.Z[a]); a++) c.connection && b.push(c.connection);
    }
  return b;
};
d.ej = function(a) {
  return new Ye(this, a);
};
d.tb = function() {
  if (this.s && !this.s.ob()) {
    var a = $e(this);
    if (!a.vc)
      for (var b = this.Td(!1), c = 0, e; (e = b[c]); c++) {
        e.isConnected() && Oe(e) && L(e).tb();
        for (var f = e.jr(A.pd), h = 0, k; (k = f[h]); h++)
          (e.isConnected() && k.isConnected()) ||
            ($e(k.w) != a && (Oe(e) ? Le(k, e) : Le(e, k)));
      }
  }
};
function tf(a) {
  var b = A.i.ac();
  setTimeout(function() {
    A.i.O(b);
    Pg(a);
    A.i.O(!1);
  }, A.Wj / 2);
  setTimeout(function() {
    A.i.O(b);
    a.tb();
    A.i.O(!1);
  }, A.Wj);
}
var N = 8,
  hj = 7.5 * (1 - Math.SQRT1_2) + 0.5,
  ij = 8.5 * (1 - Math.SQRT1_2) - 0.5,
  ef = "v 5 c 0,10 -" + N + ",-8 -" + N + ",7.5 s " + N + ",-2.5 " + N + ",7.5",
  jj =
    "v 6.5 m -" +
    0.97 * N +
    ",3 q -" +
    0.05 * N +
    ",10 " +
    0.3 * N +
    ",9.5 m " +
    0.67 * N +
    ",-1.9 v 1.4",
  kj = "m " + hj + "," + hj,
  lj = "a 8,8 0 0,0 " + (-ij - 0.5) + "," + (8 - ij),
  mj = "a 8.5,8.5 0 0,0 " + (8 - ij) + "," + (ij + 0.5);
O.prototype.vb = function() {
  var a = this.height,
    b = this.width,
    c = Hc(this);
  c
    ? ((c = c.vb()), (a += c.height - 4), (b = Math.max(b, c.width)))
    : this.K || this.L || (a += 2);
  return { height: a, width: b };
};
O.prototype.$ = function(a) {
  vg();
  this.U = !0;
  var b = 10;
  this.u && (b = -b);
  for (var c = mf(this), e = 0; e < c.length; e++) {
    var f = c[e];
    if (f.Cp && f.P.isCollapsed()) f.dc.setAttribute("display", "none");
    else {
      f.dc.setAttribute("display", "block");
      var h = f.fm;
      f.P.u && (b -= h);
      f.dc.setAttribute("transform", "translate(" + b + ",5)");
      Ee(f);
      b = f.P.u ? b - 10 : b + (h + 10);
    }
  }
  var k = (b += this.u ? 10 : -10),
    l = this.Z;
  c = [];
  c.sb = k + 20;
  if (this.X || this.K) c.sb = Math.max(c.sb, 40);
  f = e = 0;
  for (
    var m = (h = !1),
      n = !1,
      p = void 0,
      t = Yg(this) && !this.isCollapsed(),
      w = 0,
      v;
    (v = l[w]);
    w++
  )
    if (v.V()) {
      if (t && p && p != A.Ma && v.type != A.Ma) var y = c[c.length - 1];
      else
        (p = v.type),
          (y = []),
          (y.type = t && v.type != A.Ma ? -1 : v.type),
          (y.height = 0),
          c.push(y);
      y.push(v);
      v.yf = 25;
      v.Db = t && v.type == A.cb ? N + 12.5 : 0;
      if (v.connection && v.connection.isConnected()) {
        var ya = L(v.connection).vb();
        v.yf = Math.max(v.yf, ya.height);
        v.Db = Math.max(v.Db, ya.width);
      }
      t || w != l.length - 1
        ? !t && v.type == A.cb && l[w + 1] && l[w + 1].type == A.Ma && v.yf--
        : v.yf--;
      y.height = Math.max(y.height, v.yf);
      v.wd = 0;
      1 == c.length && (v.wd += this.u ? -k : k);
      ya = !1;
      for (var Jc = 0, Na; (Na = v.Qa[Jc]); Jc++) {
        0 != Jc && (v.wd += 10);
        var pd = Na.ze();
        Na.Db = pd.width;
        Na.Cl = ya && Na.Rf ? 10 : 0;
        v.wd += Na.Db + Na.Cl;
        y.height = Math.max(y.height, pd.height);
        ya = Na.Rf;
      }
      -1 != y.type &&
        (y.type == A.Ma
          ? ((m = !0), (f = Math.max(f, v.wd)))
          : (y.type == A.cb ? (h = !0) : y.type == A.od && (n = !0),
            (e = Math.max(e, v.wd))));
    }
  for (k = 0; (y = c[k]); k++)
    if (((y.ls = !1), -1 == y.type))
      for (l = 0; (v = y[l]); l++)
        if (v.type == A.cb) {
          y.height += 10;
          y.ls = !0;
          break;
        }
  c.Ql = 20 + f;
  m && (c.sb = Math.max(c.sb, c.Ql + 30));
  h
    ? (c.sb = Math.max(c.sb, e + 20 + N))
    : n && (c.sb = Math.max(c.sb, e + 20));
  c.dv = h;
  c.GA = m;
  c.FA = n;
  f = b;
  this.ds = !1;
  this.height = 0;
  this.L
    ? (this.Co = this.Ol = !0)
    : ((this.Co = this.Ol = !1),
      this.X && (b = L(this.X)) && Hc(b) == this && (this.Ol = !0),
      Hc(this) && (this.Co = !0));
  h = [];
  m = [];
  b = [];
  e = [];
  n = c.sb;
  this.Ol
    ? (h.push("m 0,0"),
      b.push("m 0.5,0.5"),
      this.ds &&
        (h.push("c 30,-15 70,-15 100,0"),
        b.push(
          this.u
            ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7"
            : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"
        )))
    : (h.push("m 0,8"),
      b.push(this.u ? kj : "m 0.5,7.5"),
      h.push("A 8,8 0 0,1 8,0"),
      b.push("A 7.5,7.5 0 0,1 8,0.5"));
  this.X &&
    (h.push("H", 15),
    b.push("H", 15),
    h.push("l 6,4 3,0 6,-4"),
    b.push("l 6,4 3,0 6,-4"),
    bf(this.X, this.u ? -30 : 30, 0));
  h.push("H", n);
  b.push("H", n - 0.5);
  this.width = n;
  for (v = n = 0; (y = c[v]); v++) {
    p = 10;
    0 == v && (p += this.u ? -f : f);
    b.push("M", c.sb - 0.5 + "," + (n + 0.5));
    if (this.isCollapsed())
      (k = y[0]),
        (t = n),
        nj(this, k.Qa, p, t),
        h.push("l 8,0 0,4 8,4 -16,8 8,4"),
        b.push("h 8"),
        (k = y.height - 20),
        h.push("v", k),
        this.u &&
          (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"),
          b.push("v", k - 0.7)),
        (this.width += 15);
    else if (-1 == y.type) {
      for (l = 0; (k = y[l]); l++)
        (t = n),
          y.ls && (t += 5),
          (p = nj(this, k.Qa, p, t)),
          k.type != A.od && (p += k.Db + 10),
          k.type == A.cb &&
            (m.push("M", p - 10 + "," + (n + 5)),
            m.push("h", N - 2 - k.Db),
            m.push(ef),
            m.push("v", k.yf + 1 - 20),
            m.push("h", k.Db + 2 - N),
            m.push("z"),
            this.u
              ? (e.push("M", p - 10 - 2.5 + N - k.Db + "," + (n + 5 + 0.5)),
                e.push(jj),
                e.push("v", k.yf - 20 + 2.5),
                e.push("h", k.Db - N + 2))
              : (e.push("M", p - 10 + 0.5 + "," + (n + 5 + 0.5)),
                e.push("v", k.yf + 1),
                e.push("h", N - 2 - k.Db),
                e.push("M", p - k.Db - 10 + 0.9 + "," + (n + 5 + 20 - 0.7)),
                e.push("l", 0.46 * N + ",-2.1")),
            (t = this.u ? -p - N + 10 + k.Db + 1 : p + N - 10 - k.Db - 1),
            (w = n + 5 + 1),
            bf(k.connection, t, w));
      p = Math.max(p, c.sb);
      this.width = Math.max(this.width, p);
      h.push("H", p);
      b.push("H", p - 0.5);
      h.push("v", y.height);
      this.u && b.push("v", y.height - 1);
    } else
      y.type == A.cb
        ? ((k = y[0]),
          (t = n),
          k.align != A.Vh &&
            ((l = c.sb - k.wd - N - 20),
            k.align == A.Uj ? (p += l) : k.align == A.Tj && (p += l / 2)),
          nj(this, k.Qa, p, t),
          h.push(ef),
          (l = y.height - 20),
          h.push("v", l),
          this.u
            ? (b.push(jj), b.push("v", l + 0.5))
            : (b.push("M", c.sb - 5 + "," + (n + 20 - 0.7)),
              b.push("l", 0.46 * N + ",-2.1")),
          (t = this.u ? -c.sb - 1 : c.sb + 1),
          bf(k.connection, t, n),
          k.connection.isConnected() &&
            (this.width = Math.max(
              this.width,
              c.sb + L(k.connection).vb().width - N + 1
            )))
        : y.type == A.od
        ? ((k = y[0]),
          (t = n),
          k.align != A.Vh &&
            ((l = c.sb - k.wd - 20),
            c.dv && (l -= N),
            k.align == A.Uj ? (p += l) : k.align == A.Tj && (p += l / 2)),
          nj(this, k.Qa, p, t),
          h.push("v", y.height),
          this.u && b.push("v", y.height - 1))
        : y.type == A.Ma &&
          ((k = y[0]),
          0 == v && (h.push("v", 10), this.u && b.push("v", 9), (n += 10)),
          (t = n),
          k.align != A.Vh &&
            ((l = c.Ql - k.wd - 20),
            k.align == A.Uj ? (p += l) : k.align == A.Tj && (p += l / 2)),
          nj(this, k.Qa, p, t),
          (p = c.Ql + 30),
          h.push("H", p),
          h.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"),
          h.push("v", y.height - 16),
          h.push("a 8,8 0 0,0 8,8"),
          h.push("H", c.sb),
          this.u
            ? (b.push("M", p - 30 + ij + "," + (n + ij)),
              b.push(lj),
              b.push("v", y.height - 16),
              b.push("a 8.5,8.5 0 0,0 8.5,8.5"))
            : (b.push("M", p - 30 + ij + "," + (n + y.height - ij)),
              b.push(mj)),
          b.push("H", c.sb - 0.5),
          (t = this.u ? -p : p + 1),
          bf(k.connection, t, n + 1),
          k.connection.isConnected() &&
            (this.width = Math.max(
              this.width,
              c.Ql + L(k.connection).vb().width
            )),
          v == c.length - 1 || c[v + 1].type == A.Ma) &&
          (h.push("v", 10), this.u && b.push("v", 9), (n += 10));
    n += y.height;
  }
  c.length || ((n = 25), h.push("V", n), this.u && b.push("V", n - 1));
  c = n;
  this.height += c + 1;
  this.K &&
    (h.push("H", 30 + (this.u ? 0.5 : -0.5) + " l -6,4 -3,0 -6,-4"),
    bf(this.K, this.u ? -30 : 30, c + 1),
    (this.height += 4));
  this.Co
    ? (h.push("H 0"), this.u || b.push("M", "0.5," + (c - 0.5)))
    : (h.push("H", 8),
      h.push("a", "8,8 0 0,1 -8,-8"),
      this.u ||
        (b.push("M", hj + "," + (c - hj)),
        b.push("A", "7.5,7.5 0 0,1 0.5," + (c - 8))));
  this.L
    ? (bf(this.L, 0, 0),
      h.push("V", 20),
      h.push(
        "c 0,-10 -" + N + ",8 -" + N + ",-7.5 s " + N + ",2.5 " + N + ",-7.5"
      ),
      this.u
        ? (b.push("M", -0.25 * N + ",8.4"), b.push("l", -0.45 * N + ",-2.1"))
        : (b.push("V", 18.5),
          b.push("m", -0.92 * N + ",-0.5 q " + -0.19 * N + ",-5.5 0,-11"),
          b.push("m", 0.92 * N + ",1 V 0.5 H 1")),
      (this.width += N))
    : this.u || (this.Ol ? b.push("V", 0.5) : b.push("V", 8));
  h.push("z");
  c = h.join(" ") + "\n" + m.join(" ");
  this.md.setAttribute("d", c);
  this.Gj.setAttribute("d", c);
  c = b.join(" ") + "\n" + e.join(" ");
  this.Hf.setAttribute("d", c);
  this.u &&
    (this.md.setAttribute("transform", "scale(-1 1)"),
    this.Hf.setAttribute("transform", "scale(-1 1)"),
    this.Gj.setAttribute("transform", "translate(1,1) scale(-1 1)"));
  c = this.la();
  this.X && af(this.X, c);
  this.L && af(this.L, c);
  for (b = 0; b < this.Z.length; b++)
    if ((e = this.Z[b].connection)) af(e, c), e.isConnected() && cf(e);
  this.K && (af(this.K, c), this.K.isConnected() && cf(this.K));
  !1 !== a && ((a = this.getParent()) ? a.$(!0) : xf(this.s));
  wg();
};
function nj(a, b, c, e) {
  e += 5;
  a.u && (c = -c);
  for (var f = 0, h; (h = b[f]); f++) {
    var k = h.M();
    k &&
      (a.u
        ? ((c -= h.Cl + h.Db),
          k.setAttribute("transform", "translate(" + c + "," + e + ")"),
          h.Db && (c -= 10))
        : (k.setAttribute(
            "transform",
            "translate(" + (c + h.Cl) + "," + e + ")"
          ),
          h.Db && (c += h.Cl + h.Db + 10)));
  }
  return a.u ? -c : c;
}
A.g = {};
function dj(a, b) {
  dj.o.constructor.call(this, a, b);
}
z(dj, lh);
dj.aa = function(a) {
  var b = A.h.Sb(a.text);
  b = new dj(b, a["class"]);
  "boolean" === typeof a.spellcheck && (b.Yr = a.spellcheck);
  return b;
};
var oj = null;
d = dj.prototype;
d.Zj = "text";
d.Yr = !0;
d.A = function() {
  A.H.Ri(this);
  dj.o.A.call(this);
};
d.setValue = function(a) {
  if (null !== a) {
    if (this.w) {
      var b = ye(this, a);
      null !== b && (a = b);
    }
    lh.prototype.setValue.call(this, a);
  }
};
d.Ab = function(a) {
  null !== a &&
    ((a = String(a)),
    a !== this.ra &&
      (this.w &&
        A.i.isEnabled() &&
        A.i.R(new A.i.lc(this.w, "field", this.name, this.ra, a)),
      lh.prototype.Ab.call(this, a)));
};
d.Gf = function(a) {
  this.j = this.w.s;
  a = a || !1;
  if (!a && (ib || kb || mb)) pj(this);
  else {
    A.H.show(this, this.w.u, qj(this));
    var b = A.H.ca,
      c = H("INPUT", "blocklyHtmlInput");
    c.setAttribute("spellcheck", this.Yr);
    var e = 11 * this.j.scale + "pt";
    b.style.fontSize = e;
    c.style.fontSize = e;
    oj = c;
    b.appendChild(c);
    c.value = c.defaultValue = this.ra;
    c.nr = null;
    rj(this);
    this.El();
    a || (c.focus(), c.select());
    c.Pv = A.J(c, "keydown", this, this.Ov);
    c.Sv = A.J(c, "keyup", this, this.rr);
    c.Rv = A.J(c, "keypress", this, this.rr);
    c.zr = this.El.bind(this);
    this.j.oc(c.zr);
  }
};
function pj(a) {
  A.prompt(A.g.CHANGE_VALUE_TITLE, a.ra, function(b) {
    a.w && (b = ye(a, b));
    a.setValue(b);
  });
}
d.Ov = function(a) {
  var b = oj;
  13 == a.keyCode
    ? A.H.Ba()
    : 27 == a.keyCode
    ? ((b.value = b.defaultValue), A.H.Ba())
    : 9 == a.keyCode &&
      (A.H.Ba(), this.w.Ho(this, !a.shiftKey), a.preventDefault());
};
d.rr = function() {
  var a = oj,
    b = a.value;
  b !== a.nr ? ((a.nr = b), this.setValue(b), rj(this)) : E && this.w.$();
  this.El();
  A.Lg(this.w.s);
};
function rj(a) {
  var b = !0,
    c = oj;
  a.w && (b = ye(a, c.value));
  null === b
    ? A.h.Ya(c, "blocklyInvalidInput")
    : A.h.yb(c, "blocklyInvalidInput");
}
d.El = function() {
  var a = A.H.ca,
    b = th(this);
  a.style.width = b.right - b.left + "px";
  a.style.height = b.bottom - b.top + "px";
  b = new F(this.w.u ? b.right - a.offsetWidth : b.left, b.top);
  b.y += 1;
  D && A.H.ca.style.top && (--b.x, --b.y);
  E && (b.y -= 3);
  a.style.left = b.x + "px";
  a.style.top = b.y + "px";
};
function qj(a) {
  return function() {
    var b = oj,
      c = oj,
      e = c.value;
    a.w &&
      ((e = ye(a, e)), null === e ? (e = c.defaultValue) : a.Nv && a.Nv(e));
    a.Ab(e);
    a.w.U && a.w.$();
    A.Ca(b.Pv);
    A.Ca(b.Sv);
    A.Ca(b.Rv);
    a.j.xf(b.zr);
    oj = null;
    A.i.O(!1);
    b = A.H.ca.style;
    b.width = "auto";
    b.height = "auto";
    b.fontSize = "";
  };
}
nh("field_input", dj);
function sj(a, b) {
  this.Go = A.h.B("tspan", {}, null);
  this.Go.appendChild(document.createTextNode("\u00b0"));
  a = a && !isNaN(a) ? String(a) : "0";
  sj.o.constructor.call(this, a, b);
}
z(sj, dj);
sj.aa = function(a) {
  return new sj(a.angle);
};
d = sj.prototype;
d.fe = function() {
  this.Ga
    ? ((this.ta.textContent = rh(this)),
      this.w.u
        ? this.ta.insertBefore(this.Go, this.ta.firstChild)
        : this.ta.appendChild(this.Go),
      this.Oj())
    : (this.oa.width = 0);
};
d.gh = function() {
  var a = this;
  return function() {
    sj.o.gh.call(a)();
    a.Ei = null;
    a.Ap && A.Ca(a.Ap);
    a.gr && A.Ca(a.gr);
    a.ir && A.Ca(a.ir);
  };
};
d.Gf = function() {
  sj.o.Gf.call(this, ib || kb || mb);
  var a = A.H.ca;
  if (a.firstChild) {
    a = A.h.B(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:html": "http://www.w3.org/1999/xhtml",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        height: "100px",
        width: "100px"
      },
      a
    );
    var b = A.h.B(
      "circle",
      { cx: 50, cy: 50, r: 49, class: "blocklyAngleCircle" },
      a
    );
    this.Ei = A.h.B("path", { class: "blocklyAngleGauge" }, a);
    this.Uq = A.h.B("line", { x1: 50, y1: 50, class: "blocklyAngleLine" }, a);
    for (var c = 0; 360 > c; c += 15)
      A.h.B(
        "line",
        {
          x1: 99,
          y1: 50,
          x2: 99 - (0 == c % 45 ? 10 : 5),
          y2: 50,
          class: "blocklyAngleMarks",
          transform: "rotate(" + c + ",50,50)"
        },
        a
      );
    a.style.marginLeft = "-34px";
    this.Ap = A.pc(a, "click", this, A.H.Ba);
    this.gr = A.pc(b, "mousemove", this, this.yr);
    this.ir = A.pc(this.Ei, "mousemove", this, this.yr);
    tj(this);
  }
};
d.yr = function(a) {
  var b = this.Ei.ownerSVGElement.getBoundingClientRect(),
    c = a.clientX - b.left - 50;
  a = a.clientY - b.top - 50;
  b = Math.atan(-a / c);
  isNaN(b) ||
    ((b = (180 * b) / Math.PI),
    0 > c ? (b += 180) : 0 < a && (b += 360),
    (b = 15 * Math.round((b - 0) / 15)),
    (b = ye(this, b)),
    (oj.value = b),
    this.setValue(b),
    rj(this),
    this.El());
};
d.Ab = function(a) {
  sj.o.Ab.call(this, a);
  this.ta && (tj(this), (this.oa.width = 0));
};
function tj(a) {
  if (a.Ei) {
    var b = ((Number(a.xb()) + 0) * Math.PI) / 180,
      c = ["M ", 50, ",", 50],
      e = 50,
      f = 50;
    if (!isNaN(b)) {
      var h = (0 * Math.PI) / 180,
        k = 49 * Math.cos(h),
        l = -49 * Math.sin(h);
      e += 49 * Math.cos(b);
      f -= 49 * Math.sin(b);
      c.push(
        " l ",
        k,
        ",",
        l,
        " A ",
        49,
        ",",
        49,
        " 0 ",
        Math.abs(Math.floor((b - h) / Math.PI) % 2),
        " ",
        Number(!1),
        " ",
        e,
        ",",
        f,
        " z"
      );
    }
    a.Ei.setAttribute("d", c.join(""));
    a.Uq.setAttribute("x2", e);
    a.Uq.setAttribute("y2", f);
  }
}
d.um = function(a) {
  if (null === a) return null;
  a = parseFloat(a || 0);
  if (isNaN(a)) return null;
  a %= 360;
  0 > a && (a += 360);
  360 < a && (a -= 360);
  return String(a);
};
nh("field_angle", sj);
function uj(a, b) {
  uj.o.constructor.call(this, "", b);
  this.setValue(a);
}
z(uj, lh);
uj.aa = function(a) {
  return new uj(a.checked ? "TRUE" : "FALSE");
};
d = uj.prototype;
d.Zj = "default";
d.W = function() {
  this.La ||
    (uj.o.W.call(this),
    (this.ik = A.h.B(
      "text",
      { class: "blocklyText blocklyCheckbox", x: -3, y: 14 },
      this.La
    )),
    this.ik.appendChild(document.createTextNode("\u2713")),
    (this.ik.style.display = this.za ? "block" : "none"));
};
d.getValue = function() {
  return String(this.za).toUpperCase();
};
d.setValue = function(a) {
  a = "string" == typeof a ? "TRUE" == a.toUpperCase() : !!a;
  this.za !== a &&
    (this.w &&
      A.i.isEnabled() &&
      A.i.R(new A.i.lc(this.w, "field", this.name, this.za, a)),
    (this.za = a),
    this.ik && (this.ik.style.display = a ? "block" : "none"));
};
d.Gf = function() {
  var a = !this.za;
  this.w && (a = ye(this, a));
  null !== a && this.setValue(String(a).toUpperCase());
};
nh("field_checkbox", uj);
var vj = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function wj(a) {
  var b = {};
  a = String(a);
  var c = "#" == a.charAt(0) ? a : "#" + a;
  if (xj.test(c)) return (b.jn = yj(c)), (b.type = "hex"), b;
  a: {
    var e = a.match(zj);
    if (e) {
      c = Number(e[1]);
      var f = Number(e[2]);
      e = Number(e[3]);
      if (0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= e && 255 >= e) {
        c = [c, f, e];
        break a;
      }
    }
    c = [];
  }
  if (c.length) return (b.jn = gj(c)), (b.type = "rgb"), b;
  if (vj && (c = vj[a.toLowerCase()])) return (b.jn = c), (b.type = "named"), b;
  throw Error(a + " is not a valid color string");
}
var Aj = /#(.)(.)(.)/;
function yj(a) {
  if (!xj.test(a)) throw Error("'" + a + "' is not a valid hex color");
  4 == a.length && (a = a.replace(Aj, "#$1$1$2$2$3$3"));
  return a.toLowerCase();
}
function ej(a) {
  a = yj(a);
  return [
    parseInt(a.substr(1, 2), 16),
    parseInt(a.substr(3, 2), 16),
    parseInt(a.substr(5, 2), 16)
  ];
}
function gj(a) {
  var b = a[0],
    c = a[1];
  a = a[2];
  b = Number(b);
  c = Number(c);
  a = Number(a);
  if (b != (b & 255) || c != (c & 255) || a != (a & 255))
    throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
  b = Bj(b.toString(16));
  c = Bj(c.toString(16));
  a = Bj(a.toString(16));
  return "#" + b + c + a;
}
var xj = /^#(?:[0-9a-f]{3}){1,2}$/i,
  zj = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Bj(a) {
  return 1 == a.length ? "0" + a : a;
}
function fj(a, b, c) {
  c = Math.min(Math.max(c, 0), 1);
  return [
    Math.round(c * a[0] + (1 - c) * b[0]),
    Math.round(c * a[1] + (1 - c) * b[1]),
    Math.round(c * a[2] + (1 - c) * b[2])
  ];
}
var Cj =
  "StopIteration" in g
    ? g.StopIteration
    : { message: "StopIteration", stack: "" };
function Dj() {}
Dj.prototype.next = function() {
  throw Cj;
};
Dj.prototype.gp = function() {
  return this;
};
function Ej(a) {
  if (a instanceof Dj) return a;
  if ("function" == typeof a.gp) return a.gp();
  if (fa(a)) {
    var b = 0,
      c = new Dj();
    c.next = function() {
      for (;;) {
        if (b >= a.length) throw Cj;
        if (b in a) return a[b++];
        b++;
      }
    };
    return c;
  }
  throw Error("Not implemented");
}
function Fj(a) {
  try {
    return Ej(a).next();
  } catch (b) {
    if (b != Cj) throw b;
    return null;
  }
}
function Gj(a, b, c, e, f) {
  this.Oc = !!b;
  this.node = null;
  this.Me = 0;
  this.gs = !1;
  this.Hp = !c;
  a && this.setPosition(a, e);
  this.depth = void 0 != f ? f : this.Me || 0;
  this.Oc && (this.depth *= -1);
}
z(Gj, Dj);
Gj.prototype.setPosition = function(a, b, c) {
  if ((this.node = a))
    this.Me = r(b) ? b : 1 != this.node.nodeType ? 0 : this.Oc ? -1 : 1;
  r(c) && (this.depth = c);
};
Gj.prototype.clone = function() {
  return new Gj(this.node, this.Oc, !this.Hp, this.Me, this.depth);
};
Gj.prototype.next = function() {
  if (this.gs) {
    if (!this.node || (this.Hp && 0 == this.depth)) throw Cj;
    var a = this.node;
    var b = this.Oc ? -1 : 1;
    if (this.Me == b) {
      var c = this.Oc ? a.lastChild : a.firstChild;
      c ? this.setPosition(c) : this.setPosition(a, -1 * b);
    } else
      (c = this.Oc ? a.previousSibling : a.nextSibling)
        ? this.setPosition(c)
        : this.setPosition(a.parentNode, -1 * b);
    this.depth += this.Me * (this.Oc ? -1 : 1);
  } else this.gs = !0;
  a = this.node;
  if (!this.node) throw Cj;
  return a;
};
Gj.prototype.splice = function(a) {
  var b = this.node,
    c = this.Oc ? 1 : -1;
  this.Me == c &&
    ((this.Me = -1 * c), (this.depth += this.Me * (this.Oc ? -1 : 1)));
  this.Oc = !this.Oc;
  Gj.prototype.next.call(this);
  this.Oc = !this.Oc;
  c = fa(arguments[0]) ? arguments[0] : arguments;
  for (var e = c.length - 1; 0 <= e; e--) ae(c[e], b);
  J(b);
};
function Hj(a, b, c, e) {
  Gj.call(this, a, b, c, null, e);
}
z(Hj, Gj);
Hj.prototype.next = function() {
  do Hj.o.next.call(this);
  while (-1 == this.Me);
  return this.node;
};
function Ij() {}
z(Ij, ri);
da(Ij);
var Jj = 0;
Ij.prototype.T = function(a) {
  var b = this.Fi(a);
  a = a.Zb().T("DIV", b, Kj(this, a.tc(), a.ze(), a.Zb()));
  Uh(a, "grid");
  return a;
};
function Kj(a, b, c, e) {
  for (var f = [], h = 0, k = 0; h < c.height; h++) {
    for (var l = [], m = 0; m < c.width; m++) {
      var n = b && b[k++];
      l.push(Lj(a, n, e));
    }
    f.push(Mj(a, l, e));
  }
  return a.Jp(f, e);
}
Ij.prototype.Jp = function(a, b) {
  a = b.T("TABLE", this.Aa() + "-table", b.T("TBODY", this.Aa() + "-body", a));
  a.cellSpacing = "0";
  a.cellPadding = "0";
  return a;
};
function Mj(a, b, c) {
  a = c.T("TR", a.Aa() + "-row", b);
  Uh(a, "row");
  return a;
}
function Lj(a, b, c) {
  a = c.T("TD", { class: a.Aa() + "-cell", id: a.Aa() + "-cell-" + Jj++ }, b);
  Uh(a, "gridcell");
  R(a, "selected", !1);
  if (!he(a) && !Vh(a, "label")) {
    var e;
    b = new Hj(a);
    for (c = ""; !c && (e = Fj(b)); )
      1 == e.nodeType && (c = Vh(e, "label") || e.title);
    (e = c) && R(a, "label", e);
  }
  return a;
}
Ij.prototype.ld = function(a, b) {
  if (a) {
    var c = Rd(this.Aa() + "-body", a)[0];
    if (c) {
      var e = 0;
      ra(c.rows, function(a) {
        ra(a.cells, function(a) {
          $d(a);
          if (b) {
            var c = b[e++];
            c && a.appendChild(c);
          }
        });
      });
      if (e < b.length) {
        for (
          var f = [], h = Od(a), k = c.rows[0].cells.length;
          e < b.length;

        ) {
          var l = b[e++];
          f.push(Lj(this, l, h));
          f.length == k &&
            ((l = Mj(this, f, h)), c.appendChild(l), (f.length = 0));
        }
        if (0 < f.length) {
          for (; f.length < k; ) f.push(Lj(this, "", h));
          l = Mj(this, f, h);
          c.appendChild(l);
        }
      }
    }
    ih(a, !0, D);
  }
};
function Nj(a, b, c) {
  for (b = b.F(); c && 1 == c.nodeType && c != b; ) {
    if ("TD" == c.tagName && hi(c, a.Aa() + "-cell")) return c.firstChild;
    c = c.parentNode;
  }
  return null;
}
Ij.prototype.Aa = function() {
  return "goog-palette";
};
function Oj(a) {
  kg.call(this);
  this.zh = [];
  Pj(this, a);
}
z(Oj, kg);
d = Oj.prototype;
d.ab = null;
d.mo = null;
d.wq = function(a) {
  return this.zh[a] || null;
};
function Pj(a, b) {
  b &&
    (ra(
      b,
      function(a) {
        this.sj(a, !1);
      },
      a
    ),
    Ba(a.zh, b));
}
d.removeItem = function(a) {
  a &&
    xa(this.zh, a) &&
    a == this.ab &&
    ((this.ab = null), this.dispatchEvent("select"));
};
d.Wd = function() {
  return this.ab;
};
d.Pc = function(a) {
  a != this.ab && (this.sj(this.ab, !1), (this.ab = a), this.sj(a, !0));
  this.dispatchEvent("select");
};
d.Ii = function() {
  var a = this.ab;
  return a ? qa(this.zh, a) : -1;
};
d.Aj = function(a) {
  this.Pc(this.wq(a));
};
d.clear = function() {
  var a = this.zh;
  if (!u(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
  a.length = 0;
  this.ab = null;
};
d.Ka = function() {
  Oj.o.Ka.call(this);
  delete this.zh;
  this.ab = null;
};
d.sj = function(a, b) {
  a &&
    ("function" == typeof this.mo
      ? this.mo(a, b)
      : "function" == typeof a.to && a.to(b));
};
function Qj(a, b, c) {
  S.call(this, a, b || Ij.Vd(), c);
  this.nm &= -89;
  this.ti = new Rj();
  this.ti.Kl(this);
  this.un = -1;
}
z(Qj, S);
d = Qj.prototype;
d.oa = null;
d.qa = -1;
d.Fb = null;
d.Ka = function() {
  Qj.o.Ka.call(this);
  this.Fb && (this.Fb.A(), (this.Fb = null));
  this.oa = null;
  this.ti.A();
};
d.Hl = function(a) {
  Qj.o.Hl.call(this, a);
  Sj(this);
  this.Fb
    ? (this.Fb.clear(), Pj(this.Fb, a))
    : ((this.Fb = new Oj(a)),
      (a = na(this.sj, this)),
      (this.Fb.mo = a),
      Mh(this).ia(this.Fb, "select", this.Xu));
  this.qa = -1;
};
d.Gk = function() {
  return "";
};
d.Oi = function(a) {
  Qj.o.Oi.call(this, a);
  var b = Nj(this.ga, this, a.target);
  (b && a.relatedTarget && be(b, a.relatedTarget)) ||
    (b != Tj(this) && Uj(this, b));
};
d.Be = function(a) {
  Qj.o.Be.call(this, a);
  this.za & 4 &&
    ((a = Nj(this.ga, this, a.target)), a != Tj(this) && Uj(this, a));
};
d.vf = function(a) {
  var b = Tj(this);
  return b
    ? (a &&
        (this.Wd() ? "mouseup" != a.type || Nj(this.ga, this, a.target) : 1) &&
        this.Pc(b),
      Qj.o.vf.call(this, a))
    : !1;
};
d.jd = function(a) {
  var b = this.tc();
  b = b ? b.length : 0;
  var c = this.oa.width;
  if (0 == b || !this.isEnabled()) return !1;
  if (13 == a.keyCode || 32 == a.keyCode) return this.vf(a);
  if (36 == a.keyCode) return this.Tb(0), !0;
  if (35 == a.keyCode) return this.Tb(b - 1), !0;
  var e = 0 > this.qa ? this.Ii() : this.qa;
  switch (a.keyCode) {
    case 37:
      if (-1 == e || 0 == e) e = b;
      this.Tb(e - 1);
      a.preventDefault();
      return !0;
    case 39:
      return e == b - 1 && (e = -1), this.Tb(e + 1), a.preventDefault(), !0;
    case 38:
      -1 == e && (e = b + c - 1);
      if (e >= c) return this.Tb(e - c), a.preventDefault(), !0;
      break;
    case 40:
      if ((-1 == e && (e = -c), e < b - c))
        return this.Tb(e + c), a.preventDefault(), !0;
  }
  return !1;
};
d.Xu = function() {};
d.ze = function() {
  return this.oa;
};
d.Ll = function(a) {
  if (this.F()) throw Error("Component already rendered");
  this.oa = r(a) ? new Nd(a, void 0) : a;
  Sj(this);
};
function Tj(a) {
  var b = a.tc();
  return b && b[a.qa];
}
d.Tb = function(a) {
  a != this.qa &&
    (Vj(this, this.qa, !1),
    (this.un = this.qa),
    (this.qa = a),
    Vj(this, a, !0),
    this.dispatchEvent("a"));
};
function Uj(a, b) {
  var c = a.tc();
  a.Tb(c && b ? qa(c, b) : -1);
}
d.Ii = function() {
  return this.Fb ? this.Fb.Ii() : -1;
};
d.Wd = function() {
  return this.Fb ? this.Fb.Wd() : null;
};
d.Aj = function(a) {
  this.Fb && this.Fb.Aj(a);
};
d.Pc = function(a) {
  this.Fb && this.Fb.Pc(a);
};
function Vj(a, b, c) {
  if (a.F()) {
    var e = a.tc();
    if (e && 0 <= b && b < e.length) {
      var f = (f = Tj(a)) ? f.parentNode : null;
      a.ti.F() != f && (a.ti.N = f);
      f = a.ti;
      f.Gb(c);
      !!(f.za & 2) == c &&
        ((f = a.ga), (b = e[b])) &&
        ((b = b ? b.parentNode : null),
        (e = f.Aa() + "-cell-hover"),
        c ? ii(b, e) : ki(b, e),
        c
          ? R(a.N, "activedescendant", b.id)
          : b.id == Vh(a.N, "activedescendant") &&
            a.N.removeAttribute("aria-activedescendant"));
    }
  }
}
d.Gb = function(a) {
  a && -1 == this.qa ? this.Tb(-1 < this.un ? this.un : 0) : a || this.Tb(-1);
  Qj.o.Gb.call(this, a);
};
d.sj = function(a, b) {
  if (this.F() && a) {
    a = a.parentNode;
    var c = this.ga.Aa() + "-cell-selected";
    b ? ii(a, c) : ki(a, c);
    R(a, "selected", b);
  }
};
function Sj(a) {
  var b = a.tc();
  if (b)
    if (a.oa && a.oa.width) {
      if (
        ((b = Math.ceil(b.length / a.oa.width)),
        !r(a.oa.height) || a.oa.height < b)
      )
        a.oa.height = b;
    } else (b = Math.ceil(Math.sqrt(b.length))), (a.oa = new Nd(b, b));
  else a.oa = new Nd(0, 0);
}
function Rj() {
  S.call(this, null);
  this.Jg |= 2;
}
z(Rj, S);
function Wj(a, b, c) {
  this.lk = a || [];
  Qj.call(this, null, b || Ij.Vd(), c);
  this.Gl(this.lk);
}
z(Wj, Qj);
d = Wj.prototype;
d.vl = null;
d.kl = null;
d.Gl = function(a) {
  this.lk = a;
  this.vl = this.kl = null;
  this.ld(Xj(this));
};
d.$m = function() {
  var a = this.Wd();
  if (a) {
    var b = a.style[Va()];
    if ("undefined" !== typeof b) a = b;
    else {
      b = a.style;
      var c = Zg["background-color"];
      if (!c) {
        var e = Va();
        c = e;
        void 0 === a.style[e] &&
          ((e =
            (E ? "Webkit" : D ? "Moz" : C ? "ms" : gb ? "O" : null) + Wa(e)),
          void 0 !== a.style[e] && (c = e));
        Zg["background-color"] = c;
      }
      a = b[c] || "";
    }
    return Yj(a);
  }
  return null;
};
d.uo = function(a) {
  a = Yj(a);
  this.vl ||
    (this.vl = ta(this.lk, function(a) {
      return Yj(a);
    }));
  this.Aj(a ? qa(this.vl, a) : -1);
};
function Xj(a) {
  return ta(
    a.lk,
    function(a, c) {
      var b = this.Zb().T("DIV", {
        class: this.ga.Aa() + "-colorswatch",
        style: "background-color:" + a
      });
      b.title =
        this.kl && this.kl[c]
          ? this.kl[c]
          : "#" == a.charAt(0)
          ? "RGB (" + ej(a).join(", ") + ")"
          : a;
      return b;
    },
    a
  );
}
function Yj(a) {
  if (a)
    try {
      return wj(a).jn;
    } catch (b) {}
  return null;
}
function Zj(a, b) {
  Jh.call(this, a);
  this.Ia = b || null;
  Mh(this).ia(this, "action", this.Jv);
}
z(Zj, Jh);
d = Zj.prototype;
d.eg = !0;
d.Gl = function(a) {
  this.Ia ? this.Ia.Gl(a) : ak(this, a);
};
d.Ll = function(a) {
  this.Ia || ak(this, []);
  this.Ia.Ll(a);
};
d.ze = function() {
  return this.Ia ? this.Ia.ze() : null;
};
d.Ii = function() {
  return this.Ia ? this.Ia.Ii() : -1;
};
d.Aj = function(a) {
  this.Ia && this.Ia.Aj(a);
};
d.$m = function() {
  return this.Ia ? this.Ia.$m() : null;
};
d.uo = function(a) {
  this.Ia && this.Ia.uo(a);
};
d.Ee = function() {
  return this.eg;
};
d.Ke = function(a) {
  this.eg = a;
  this.Ia && this.Ia.ic(32, a);
};
d.mb = function() {
  Zj.o.mb.call(this);
  this.Ia && this.Ia.$(this.F());
  this.F().unselectable = "on";
};
d.Ka = function() {
  Zj.o.Ka.call(this);
  this.Ia && (this.Ia.A(), (this.Ia = null));
};
d.focus = function() {
  this.Ia && this.Ia.F().focus();
};
d.Jv = function(a) {
  a.stopPropagation();
  this.dispatchEvent("change");
};
function ak(a, b) {
  b = new Wj(b, null, a.Zb());
  b.Ll(5);
  b.ic(32, a.eg);
  a.ei(b);
  a.Ia = b;
  a.sa && a.Ia.$(a.F());
}
var bk = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(
  " "
);
function ck(a, b) {
  ck.o.constructor.call(this, a, b);
  this.Ab("\u00a0\u00a0\u00a0");
}
var dk;
z(ck, lh);
ck.aa = function(a) {
  return new ck(a.colour);
};
d = ck.prototype;
d.Ot = null;
d.Dp = 0;
d.W = function() {
  ck.o.W.call(this);
  this.cd.style.fillOpacity = 1;
  this.setValue(this.getValue());
};
d.Zj = "default";
d.A = function() {
  A.H.Ri(this);
  ck.o.A.call(this);
};
d.getValue = function() {
  return this.Nd;
};
d.setValue = function(a) {
  this.w &&
    A.i.isEnabled() &&
    this.Nd != a &&
    A.i.R(new A.i.lc(this.w, "field", this.name, this.Nd, a));
  this.Nd = a;
  this.cd && (this.cd.style.fill = a);
};
d.xb = function() {
  var a = this.Nd,
    b = a.match(/^#(.)\1(.)\2(.)\3$/);
  b && (a = "#" + b[1] + b[2] + b[3]);
  return a;
};
d.setColumns = function(a) {
  this.Dp = a;
  return this;
};
d.Gf = function() {
  A.H.show(this, this.w.u, ek);
  var a = A.h.dn(),
    b = th(this),
    c = this.si(),
    e = eh(c.F());
  A.H.Qn(a, b, e, this.w.u);
  var f = this;
  dk = $b(c, "change", function(a) {
    a = a.target.$m() || "#000000";
    A.H.Ba();
    f.w && (a = ye(f, a));
    null !== a && f.setValue(a);
  });
};
d.si = function() {
  var a = new Zj();
  a.Ll(this.Dp || 7);
  a.Gl(this.Ot || bk);
  a.$(A.H.ca);
  a.uo(this.getValue());
  return a;
};
function ek() {
  dk && ic(dk);
  A.i.O(!1);
}
nh("field_colour", ck);
function Bh(a, b) {
  x(a) || fk(a);
  this.qg = a;
  this.Fo = this.Sn = null;
  a = this.qg;
  if (u(a)) {
    for (var c = !1, e = 0; e < a.length; e++) {
      var f = a[e][0];
      "string" == typeof f
        ? (a[e][0] = A.h.Sb(f))
        : (null != f.alt && (a[e][0].alt = A.h.Sb(f.alt)), (c = !0));
    }
    if (!(c || 2 > a.length)) {
      f = [];
      for (e = 0; e < a.length; e++) f.push(a[e][0]);
      var h = A.h.xo(f);
      e = A.h.St(f, h);
      c = A.h.Tt(f, h);
      if ((e || c) && !(h <= e + c)) {
        e && (this.Sn = f[0].substring(0, e - 1));
        c && (this.Fo = f[0].substr(1 - c));
        f = [];
        for (h = 0; h < a.length; h++) {
          var k = a[h][0],
            l = a[h][1];
          k = k.substring(e, k.length - c);
          f[h] = [k, l];
        }
        this.qg = f;
      }
    }
  }
  a = this.getOptions()[0];
  Bh.o.constructor.call(this, a[1], b);
}
z(Bh, lh);
Bh.aa = function(a) {
  return new Bh(a.options);
};
var gk = kb ? "\u25bc" : "\u25be";
d = Bh.prototype;
d.Zj = "default";
d.Bb = "";
d.zd = null;
d.Zd = null;
d.W = function() {
  this.La ||
    ((this.Ze = A.h.B("tspan", {}, null)),
    this.Ze.appendChild(
      document.createTextNode(this.w.u ? gk + " " : " " + gk)
    ),
    Bh.o.W.call(this));
};
d.Gf = function() {
  A.H.show(this, this.w.u, null);
  var a = new cj();
  a.Le(this.w.u);
  for (var b = this.getOptions(), c = 0; c < b.length; c++) {
    var e = b[c][0],
      f = b[c][1];
    if ("object" == typeof e) {
      var h = new Image(e.width, e.height);
      h.src = e.src;
      h.alt = e.alt || "";
      e = h;
    }
    e = new Zi(e);
    e.Le(this.w.u);
    e.setValue(f);
    e.qo(!0);
    a.ei(e, !0);
    Bi(e, f == this.Bb);
  }
  hk(this, a);
  ik(a);
  jk(a);
  b = A.h.dn();
  c = th(this);
  this.w.u ? (c.right += 25) : (c.left -= 25);
  this.si(a);
  f = A.h.Sh.ze(a);
  300 < f.height && (f.height = 300);
  this.w.u && A.h.Sh.jp(b, c, f);
  A.H.Qn(b, c, f, this.w.u);
  a.F().focus();
};
function hk(a, b) {
  $b(b, "action", function(b) {
    (b = b.target) && a.ur(b);
    A.H.Ri(a);
    A.i.O(!1);
  });
}
function ik(a) {
  Mh(a).ia(a.F(), "touchstart", function(a) {
    Mi(this, a.target).Be(a);
  });
}
function jk(a) {
  Mh(a).ia(a.F(), "touchend", function(a) {
    Mi(this, a.target).vf(a);
  });
}
d.si = function(a) {
  a.$(A.H.ca);
  A.h.Ya(a.F(), "blocklyDropdownMenu");
  a.fk = !0;
  a.Ke(!0);
};
d.ur = function(a) {
  a = a.getValue();
  this.w && (a = ye(this, a));
  null !== a && this.setValue(a);
};
d.getOptions = function() {
  if (x(this.qg)) {
    var a = this.qg.call(this);
    fk(a);
    return a;
  }
  return this.qg;
};
d.getValue = function() {
  return this.Bb;
};
d.setValue = function(a) {
  if (null !== a && a !== this.Bb) {
    this.w &&
      A.i.isEnabled() &&
      A.i.R(new A.i.lc(this.w, "field", this.name, this.Bb, a));
    this.Bb = a;
    for (var b = this.getOptions(), c = 0; c < b.length; c++)
      if (b[c][1] == a) {
        a = b[c][0];
        "object" == typeof a
          ? ((this.Zd = a), (this.ra = a.alt))
          : ((this.Zd = null), (this.ra = a));
        this.Di();
        return;
      }
    this.ra = a;
    this.Di();
  }
};
d.fe = function() {
  if (this.Ga) {
    this.w && this.Ze && (this.Ze.style.fill = this.w.Nd);
    $d(this.ta);
    J(this.zd);
    this.zd = null;
    if (this.Zd) {
      this.zd = A.h.B(
        "image",
        { y: 5, height: this.Zd.height + "px", width: this.Zd.width + "px" },
        this.La
      );
      this.zd.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        this.Zd.src
      );
      this.ta.appendChild(this.Ze);
      var a = sh(this.Ze);
      this.oa.height = Number(this.Zd.height) + 19;
      this.oa.width = Number(this.Zd.width) + a;
      this.w.u
        ? (this.zd.setAttribute("x", a), this.ta.setAttribute("x", -1))
        : (this.ta.setAttribute("text-anchor", "end"),
          this.ta.setAttribute("x", this.oa.width + 1));
    } else
      (a = document.createTextNode(rh(this))),
        this.ta.appendChild(a),
        this.w.u
          ? this.ta.insertBefore(this.Ze, this.ta.firstChild)
          : this.ta.appendChild(this.Ze),
        this.ta.setAttribute("text-anchor", "start"),
        this.ta.setAttribute("x", 0),
        (this.oa.height = 25),
        (this.oa.width = sh(this.ta));
    this.cd.setAttribute("height", this.oa.height - 9);
    this.cd.setAttribute("width", this.oa.width + 10);
  } else this.oa.width = 0;
};
d.Oj = function() {
  if (this.Zd && (C || hb)) {
    var a = sh(this.Ze);
    a = Number(this.Zd.width) + a + 10;
    this.cd && this.cd.setAttribute("width", a);
    this.oa.width = a;
  } else lh.prototype.Oj.call(this);
};
d.A = function() {
  A.H.Ri(this);
  Bh.o.A.call(this);
};
function fk(a) {
  if (!u(a)) throw "FieldDropdown options must be an array.";
  for (var b = !1, c = 0; c < a.length; ++c) {
    var e = a[c];
    u(a)
      ? q(e[1])
        ? q(e[0]) ||
          q(e[0].src) ||
          ((b = !0),
          console.error(
            "Invalid option[" +
              c +
              "]: Each FieldDropdown option must have a string label or image description. Found" +
              e[0] +
              " in: ",
            e
          ))
        : ((b = !0),
          console.error(
            "Invalid option[" +
              c +
              "]: Each FieldDropdown option id must be a string. Found " +
              e[1] +
              " in: ",
            e
          ))
      : ((b = !0),
        console.error(
          "Invalid option[" +
            c +
            "]: Each FieldDropdown option must be an array. Found: ",
          e
        ));
  }
  if (b) throw "Found invalid FieldDropdown options.";
}
nh("field_dropdown", Bh);
function kk(a, b, c, e, f) {
  this.w = null;
  this.xa = Number(c);
  this.ba = Number(b);
  this.oa = new Nd(this.ba, this.xa + 10);
  this.ra = e || "";
  this.setValue(a);
  "function" == typeof f && (this.vm = f);
}
z(kk, lh);
kk.aa = function(a) {
  var b = A.h.Sb(a.src),
    c = Number(A.h.Sb(a.width)),
    e = Number(A.h.Sb(a.height));
  a = A.h.Sb(a.alt);
  return new kk(b, c, e, a);
};
d = kk.prototype;
d.Rf = !1;
d.W = function() {
  this.La ||
    ((this.La = A.h.B("g", {}, null)),
    this.Ga || (this.La.style.display = "none"),
    (this.zd = A.h.B(
      "image",
      { height: this.xa + "px", width: this.ba + "px" },
      this.La
    )),
    this.setValue(this.Zr),
    this.w.M().appendChild(this.La),
    this.Qc(this.w),
    A.C.Wf(this.zd),
    this.vm && (this.ql = A.J(this.La, "mousedown", this, this.Ge)));
};
d.A = function() {
  J(this.La);
  this.zd = this.La = null;
};
d.Qc = function(a) {
  this.zd.Tc = a;
};
d.getValue = function() {
  return this.Zr;
};
d.setValue = function(a) {
  null !== a &&
    ((this.Zr = a),
    this.zd &&
      this.zd.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        a || ""
      ));
};
d.Ab = function(a) {
  null !== a && (this.ra = a);
};
d.fe = function() {};
d.Di = function() {};
d.Oj = function() {};
d.Gf = function() {
  this.vm && this.vm(this);
};
nh("field_image", kk);
function lk(a, b, c, e, f) {
  a = a && !isNaN(a) ? String(a) : "0";
  lk.o.constructor.call(this, a, f);
  a = parseFloat(e);
  this.Rn = isNaN(a) ? 0 : a;
  b = parseFloat(b);
  this.Bv = isNaN(b) ? -Infinity : b;
  c = parseFloat(c);
  this.Av = isNaN(c) ? Infinity : c;
  this.setValue(ye(this, this.getValue()));
}
z(lk, dj);
lk.aa = function(a) {
  return new lk(a.value, a.min, a.max, a.precision);
};
lk.prototype.um = function(a) {
  if (null === a) return null;
  a = String(a);
  a = a.replace(/O/gi, "0");
  a = a.replace(/,/g, "");
  a = parseFloat(a || 0);
  if (isNaN(a)) return null;
  this.Rn && isFinite(a) && (a = Math.round(a / this.Rn) * this.Rn);
  a = Math.min(Math.max(a, this.Bv), this.Av);
  return String(a);
};
nh("field_number", lk);
function mk(a, b, c, e) {
  this.qg = nk;
  this.oa = new Nd(0, 25);
  this.Pj = b;
  this.iu = a || "";
  a = e || "";
  if (null == c || void 0 == c) c = null;
  else if (Array.isArray(c)) {
    b = !1;
    for (e = 0; e < c.length; e++) c[e] == a && (b = !0);
    if (!b)
      throw Error(
        "Invalid default type '" + a + "' in the definition of a FieldVariable"
      );
  } else
    throw Error(
      "'variableTypes' was not an array in the definition of a FieldVariable"
    );
  this.gu = a;
  this.Ew = c;
  this.Bb = null;
}
z(mk, Bh);
mk.aa = function(a) {
  var b = A.h.Sb(a.variable);
  return new mk(b, null, a.variableTypes, a.defaultType);
};
d = mk.prototype;
d.W = function() {
  this.La || (mk.o.W.call(this), this.mg());
};
d.mg = function() {
  if (!this.Id) {
    this.j = this.w.s;
    var a = A.I.xq(this.j, null, this.iu, this.gu);
    A.i.disable();
    try {
      this.setValue(a.ha());
    } finally {
      A.i.enable();
    }
  }
};
d.A = function() {
  mk.o.A.call(this);
  this.na = this.j = null;
};
d.wo = function(a) {
  mk.o.wo.call(this, a);
};
d.getValue = function() {
  return this.Id ? this.Id.ha() : null;
};
d.xb = function() {
  return this.Id ? this.Id.name : "";
};
d.xd = function() {
  return this.Id;
};
d.setValue = function(a) {
  var b = A.I.xd(this.w.s, a);
  if (!b)
    throw Error("Variable id doesn't point to a real variable!  ID was " + a);
  var c = b.type,
    e;
  a: if ((e = ok(this))) {
    for (var f = 0; f < e.length; f++)
      if (c == e[f]) {
        e = !0;
        break a;
      }
    e = !1;
  } else e = !0;
  if (!e) throw Error("Variable type doesn't match this field!  Type was " + c);
  this.w &&
    A.i.isEnabled() &&
    ((c = this.Id ? this.Id.ha() : null),
    A.i.R(new A.i.lc(this.w, "field", this.name, c, a)));
  this.Id = b;
  this.Bb = a;
  this.Ab(b.name);
};
function ok(a) {
  var b = a.Ew;
  if (null === b && a.w) return a.w.s.an();
  b = b || [""];
  if (0 == b.length)
    throw ((a = a.xb()),
    Error("'variableTypes' of field variable " + a + " was an empty list"));
  return b;
}
function nk() {
  if (!this.Id)
    throw Error(
      "Tried to call dropdownCreate on a variable field with no variable selected."
    );
  var a = this.xb(),
    b = null;
  this.w && (b = this.w.s);
  var c = [];
  if (b)
    for (var e = ok(this), f = 0; f < e.length; f++) c = c.concat(b.Ki(e[f]));
  c.sort(pg);
  b = [];
  for (f = 0; f < c.length; f++) b[f] = [c[f].name, c[f].ha()];
  b.push([A.g.RENAME_VARIABLE, A.$o]);
  A.g.DELETE_VARIABLE && b.push([A.g.DELETE_VARIABLE.replace("%1", a), A.Ro]);
  return b;
}
d.ur = function(a) {
  a = a.getValue();
  if (this.w && this.w.s) {
    var b = this.w.s;
    if (a == A.$o) {
      A.I.Zn(b, this.Id);
      return;
    }
    if (a == A.Ro) {
      b.$f(this.Id.ha());
      return;
    }
  }
  this.setValue(a);
};
d.Kh = function() {
  return !0;
};
nh("field_variable", mk);
function yh() {
  this.Fs = new RegExp(this.Te, "g");
}
d = yh.prototype;
d.ap = null;
d.Uo = "  ";
d.zs = 60;
d.ek = [];
function pk() {
  var a = A.m,
    b = P;
  b ||
    (console.warn("No workspace specified in workspaceToCode call.  Guessing."),
    (b = A.qh()));
  var c = [];
  a.W(b);
  b = I(b, !0);
  for (var e = 0, f; (f = b[e]); e++) {
    var h = qk(a, f);
    u(h) && (h = h[0]);
    h && (f.L && (h = a.Qr(h)), c.push(h));
  }
  c = c.join("\n");
  c = a.finish(c);
  c = c.replace(/^\s+\n/, "");
  c = c.replace(/\n\s+$/, "\n");
  return (c = c.replace(/[ \t]+\n/g, "\n"));
}
function rk(a, b) {
  return b + a.replace(/(?!\n$)\n/g, "\n" + b);
}
function qk(a, b) {
  if (!b) return "";
  if (b.disabled) return qk(a, Hc(b));
  var c = a[b.type].call(b, b);
  if (u(c)) return [a.jo(b, c[0]), c[1]];
  if (q(c)) {
    var e = b.id.replace(/\$/g, "$$$$");
    a.ap && (c = a.ap.replace(/%1/g, "'" + e + "'") + c);
    return a.jo(b, c);
  }
  if (null === c) return "";
}
function T(a, b, c) {
  var e = A.m;
  a = Eh(a, b);
  if (!a) return "";
  b = qk(e, a);
  if ("" === b) return "";
  a = b[0];
  b = b[1];
  if (!a) return "";
  var f = !1,
    h = Math.floor(c),
    k = Math.floor(b);
  if (h <= k && (h != k || (0 != h && 99 != h)))
    for (f = !0, h = 0; h < e.ek.length; h++)
      if (e.ek[h][0] == c && e.ek[h][1] == b) {
        f = !1;
        break;
      }
  f && (a = "(" + a + ")");
  return a;
}
function sk(a, b) {
  var c = A.m;
  a = Eh(a, b);
  (a = qk(c, a)) && (a = rk(a, c.Uo));
  return a;
}
d.em = "";
function tk(a) {
  var b = A.m;
  b.em += a + ",";
}
d.Te = "{leCUI8hutHZI4480Dc}";
function uk(a, b) {
  var c = A.m;
  if (!c.fh[a]) {
    var e = vk(c.Of, a, A.Wa.Sf);
    c.Um[a] = e;
    b = b.join("\n").replace(c.Fs, e);
    for (var f; f != b; )
      (f = b), (b = b.replace(/^(( {2})*) {2}/gm, "$1\x00"));
    b = b.replace(/\0/g, c.Uo);
    c.fh[a] = b;
  }
  return c.Um[a];
}
d.W = function() {};
d.jo = function(a, b) {
  return b;
};
d.finish = function(a) {
  return a;
};
d.Qr = function(a) {
  return a;
};
function wk() {
  var a = A.m.em;
  this.rs = "";
  this.Nr = Object.create(null);
  if (a) {
    a = a.split(",");
    for (var b = 0; b < a.length; b++) this.Nr[a[b]] = !0;
  }
  this.reset();
}
wk.prototype.reset = function() {
  this.fd = Object.create(null);
  this.Zp = Object.create(null);
  this.na = null;
};
wk.prototype.getName = function(a, b) {
  if (b == A.I.Sf) {
    var c = a;
    this.na
      ? (c = (c = this.na.Ae(c)) ? c.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the folowing code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (c = null));
    c && (a = c);
  }
  c = a.toLowerCase() + "_" + b;
  var e = b == A.I.Sf || "DEVELOPER_VARIABLE" == b ? this.rs : "";
  if (c in this.fd) return e + this.fd[c];
  a = vk(this, a, b);
  this.fd[c] = a.substr(e.length);
  return a;
};
function vk(a, b, c) {
  b
    ? ((b = encodeURI(b.replace(/ /g, "_")).replace(/[^\w]/g, "_")),
      -1 != "0123456789".indexOf(b[0]) && (b = "my_" + b))
    : (b = "unnamed");
  for (var e = ""; a.Zp[b + e] || b + e in a.Nr; ) e = e ? e + 1 : 2;
  b += e;
  a.Zp[b] = !0;
  return (c == A.I.Sf || "DEVELOPER_VARIABLE" == c ? a.rs : "") + b;
}
A.Wa = {};
A.Wa.Sf = A.Zo;
A.Wa.st = function(a) {
  a = Nc(a);
  for (var b = [], c = [], e = 0; e < a.length; e++)
    if (a[e].gg) {
      var f = a[e].gg();
      f && (f[2] ? b.push(f) : c.push(f));
    }
  c.sort(A.Wa.Hr);
  b.sort(A.Wa.Hr);
  return [c, b];
};
A.Wa.Hr = function(a, b) {
  return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
};
A.Wa.Bu = function(a, b) {
  if (b.vc) return a;
  for (; !A.Wa.kv(a, b.s, b); ) {
    var c = a.match(/^(.*?)(\d+)$/);
    a = c ? c[1] + (parseInt(c[2], 10) + 1) : a + "2";
  }
  return a;
};
A.Wa.kv = function(a, b, c) {
  return !A.Wa.nv(a, b, c);
};
A.Wa.nv = function(a, b, c) {
  b = Nc(b);
  for (var e = 0; e < b.length; e++)
    if (b[e] != c && b[e].gg && b[e].gg()[0].toLowerCase() == a.toLowerCase())
      return !0;
  return !1;
};
A.Wa.LA = function(a) {
  a = a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  var b = A.Wa.Bu(a, this.w),
    c = this.ra;
  if (c != a && c != b) {
    a = Nc(this.w.s);
    for (var e = 0; e < a.length; e++) a[e].fw && a[e].fw(c, b);
  }
  return b;
};
A.Wa.cf = function(a) {
  function b(a, b) {
    for (var e = 0; e < a.length; e++) {
      var f = a[e][0],
        h = a[e][1],
        k = H("block");
      k.setAttribute("type", b);
      k.setAttribute("gap", 16);
      var t = H("mutation");
      t.setAttribute("name", f);
      k.appendChild(t);
      for (f = 0; f < h.length; f++) {
        var w = H("arg");
        w.setAttribute("name", h[f]);
        t.appendChild(w);
      }
      c.push(k);
    }
  }
  var c = [];
  if (A.Da.procedures_defnoreturn) {
    var e = H("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = H("field", null, A.g.PROCEDURES_DEFNORETURN_PROCEDURE);
    f.setAttribute("name", "NAME");
    e.appendChild(f);
    c.push(e);
  }
  A.Da.procedures_defreturn &&
    ((e = H("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = H("field", null, A.g.PROCEDURES_DEFRETURN_PROCEDURE)),
    f.setAttribute("name", "NAME"),
    e.appendChild(f),
    c.push(e));
  A.Da.procedures_ifreturn &&
    ((e = H("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    c.push(e));
  c.length && c[c.length - 1].setAttribute("gap", 24);
  a = A.Wa.st(a);
  b(a[0], "procedures_callnoreturn");
  b(a[1], "procedures_callreturn");
  return c;
};
A.Wa.Gu = function(a, b) {
  var c = [];
  b = Nc(b);
  for (var e = 0; e < b.length; e++)
    if (b[e].Ku) {
      var f = b[e].Ku();
      f && f.toLowerCase() == a.toLowerCase() && c.push(b[e]);
    }
  return c;
};
A.Wa.IA = function(a) {
  var b = A.i.Rb,
    c = a.gg()[0],
    e = a.gc(!0);
  a = A.Wa.Gu(c, a.s);
  c = 0;
  for (var f; (f = a[c]); c++) {
    var h = f.gc();
    h = h && A.D.Hc(h);
    f.ud(e);
    var k = f.gc();
    k = k && A.D.Hc(k);
    h != k &&
      ((A.i.Rb = !1),
      A.i.R(new A.i.lc(f, "mutation", null, h, k)),
      (A.i.Rb = b));
  }
};
A.Wa.EA = function(a, b) {
  b = I(b, !1);
  for (var c = 0; c < b.length; c++)
    if (b[c].gg) {
      var e = b[c].gg();
      if (e && e[0].toLowerCase() == a.toLowerCase()) return b[c];
    }
  return null;
};
function xk(a, b, c, e) {
  this.j = a;
  this.pa = b;
  this.ra = c.getAttribute("text");
  this.yc = new F(0, 0);
  this.pg = e;
  this.tm = null;
  a = c.getAttribute("callbackKey");
  this.pg && a
    ? console.warn("Labels should not have callbacks. Label text: " + this.ra)
    : this.pg || (a && Tg(b, a))
    ? (this.tm = Tg(b, a))
    : console.warn("Buttons should have callbacks. Button text: " + this.ra);
  this.Mp = c.getAttribute("web-class") || null;
}
d = xk.prototype;
d.width = 0;
d.height = 0;
d.Eh = null;
d.T = function() {
  var a = this.pg ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
  this.Mp && (a += " " + this.Mp);
  this.v = A.h.B("g", { class: a }, this.j.Fa);
  if (!this.pg)
    var b = A.h.B(
      "rect",
      { class: "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 },
      this.v
    );
  a = A.h.B(
    "rect",
    {
      class: this.pg
        ? "blocklyFlyoutLabelBackground"
        : "blocklyFlyoutButtonBackground",
      rx: 4,
      ry: 4
    },
    this.v
  );
  var c = A.h.B(
    "text",
    {
      class: this.pg ? "blocklyFlyoutLabelText" : "blocklyText",
      x: 0,
      y: 0,
      "text-anchor": "middle"
    },
    this.v
  );
  c.textContent = this.ra;
  this.width = sh(c);
  this.height = 20;
  this.pg ||
    ((this.width += 10),
    b.setAttribute("width", this.width),
    b.setAttribute("height", this.height));
  a.setAttribute("width", this.width);
  a.setAttribute("height", this.height);
  c.setAttribute("x", this.width / 2);
  c.setAttribute("y", this.height - 5);
  yk(this);
  A.J(this.v, "mouseup", this, this.$v);
  return this.v;
};
d.show = function() {
  yk(this);
  this.v.setAttribute("display", "block");
};
function yk(a) {
  a.v.setAttribute("transform", "translate(" + a.yc.x + "," + a.yc.y + ")");
}
d.moveTo = function(a, b) {
  this.yc.x = a;
  this.yc.y = b;
  yk(this);
};
d.yq = function() {
  return this.yc;
};
d.A = function() {
  this.Eh && A.Ca(this.Eh);
  this.v && (J(this.v), (this.v = null));
  this.pa = this.j = null;
};
d.$v = function(a) {
  (a = this.pa.Ud(a)) && a.cancel();
  this.tm && this.tm(this);
};
function zk(a) {
  a.gb = this.ye.bind(this);
  a.Ff = this.Il.bind(this);
  this.j = new Eg(a);
  this.j.De = !0;
  this.u = !!a.u;
  this.Ne = a.wa;
  this.Pm = [];
  this.gj = [];
  this.ji = [];
  this.fc = [];
  this.On = [];
}
d = zk.prototype;
d.bh = !0;
d.bj = !1;
d.Xf = !0;
d.ka = 8;
d.Zc = zk.prototype.ka;
d.Hs = 3 * zk.prototype.Zc;
d.Is = 3 * zk.prototype.Zc;
d.Tf = 2;
d.ba = 0;
d.xa = 0;
d.kq = 70;
d.T = function(a) {
  this.v = A.h.B(a, { class: "blocklyFlyout", style: "display: none" }, null);
  this.Rc = A.h.B("path", { class: "blocklyFlyoutBackground" }, this.v);
  this.v.appendChild(this.j.T());
  return this.v;
};
d.W = function(a) {
  this.pa = a;
  this.j.Mg = a;
  this.Eb = new Yf(this.j, this.yd, !1, "blocklyFlyoutScrollbar");
  this.Ba();
  Array.prototype.push.apply(this.Pm, A.J(this.v, "wheel", this, this.us));
  this.bh || ((this.Bk = this.Rm.bind(this)), this.pa.oc(this.Bk));
  Array.prototype.push.apply(this.Pm, A.J(this.Rc, "mousedown", this, this.Ge));
  this.j.Ud = this.pa.Ud.bind(this.pa);
  this.j.na = this.pa.na;
  a = this.j;
  a.Jh = new Mc(a);
};
d.A = function() {
  this.Ba();
  A.Ca(this.Pm);
  this.Bk && (this.pa.xf(this.Bk), (this.Bk = null));
  this.Eb && (this.Eb.A(), (this.Eb = null));
  this.j && ((this.j.Mg = null), this.j.A(), (this.j = null));
  this.v && (J(this.v), (this.v = null));
  this.pa = this.Rc = null;
};
d.Lc = function() {
  return this.ba;
};
d.ph = function() {
  return this.xa;
};
d.Li = function() {
  return this.j;
};
d.V = function() {
  return this.bj;
};
d.ma = function(a) {
  var b = a != this.V();
  this.bj = a;
  b && this.Mj();
};
d.Cg = function(a) {
  var b = a != this.Xf;
  this.Xf = a;
  b && this.Mj();
};
d.Mj = function() {
  var a = this.Xf ? this.V() : !1;
  this.v.style.display = a ? "block" : "none";
  this.Eb.Cg(a);
};
function Ak(a, b, c, e, f) {
  a.v.setAttribute("width", b);
  a.v.setAttribute("height", c);
  "svg" == a.v.tagName
    ? A.h.uj(a.v, "translate(" + e + "px," + f + "px)")
    : a.v.setAttribute("transform", "translate(" + e + "," + f + ")");
  a.Eb && ((a.Eb.Ln = new F(e, f)), a.Eb.resize());
}
d.Ba = function() {
  if (this.V()) {
    this.ma(!1);
    for (var a = 0, b; (b = this.fc[a]); a++) A.Ca(b);
    this.fc.length = 0;
    this.wf && (this.j.xf(this.wf), (this.wf = null));
  }
};
d.show = function(a) {
  this.j.zb(!1);
  this.Ba();
  Bk(this);
  "string" == typeof a && (a = Ug(this.j.Mg, a)(this.j.Mg));
  this.ma(!0);
  for (var b = [], c = [], e = (this.On.length = 0), f; (f = a[e]); e++)
    if (f.tagName) {
      var h = f.tagName.toUpperCase(),
        k = this.yd ? this.Hs : this.Is;
      if ("BLOCK" == h)
        (h = A.D.ih(f, this.j)),
          h.disabled && this.On.push(h),
          b.push({ type: "block", block: h }),
          (f = parseInt(f.getAttribute("gap"), 10)),
          c.push(isNaN(f) ? k : f);
      else if ("SEP" == f.tagName.toUpperCase())
        (f = parseInt(f.getAttribute("gap"), 10)),
          !isNaN(f) && 0 < c.length ? (c[c.length - 1] = f) : c.push(k);
      else if ("BUTTON" == h || "LABEL" == h)
        (f = new xk(this.j, this.pa, f, "LABEL" == h)),
          b.push({ type: "button", button: f }),
          c.push(k);
    }
  this.Sq(b, c);
  this.fc.push(
    A.J(this.Rc, "mouseover", this, function() {
      for (var a = I(this.j, !1), b = 0, c; (c = a[b]); b++) c.zg();
    })
  );
  this.yd ? (this.xa = 0) : (this.ba = 0);
  this.j.zb(!0);
  this.Xn();
  this.Rm();
  this.position();
  this.wf = this.Xn.bind(this);
  this.j.oc(this.wf);
};
function Bk(a) {
  for (var b = I(a.j, !1), c = 0, e; (e = b[c]); c++) e.s == a.j && e.A(!1, !1);
  for (c = 0; c < a.gj.length; c++) (b = a.gj[c]) && J(b);
  for (c = a.gj.length = 0; (b = a.ji[c]); c++) b.A();
  a.ji.length = 0;
  a.j.Jh.clear();
}
function Ck(a, b, c, e) {
  a.fc.push(A.J(b, "mousedown", null, Dk(a, c)));
  a.fc.push(A.J(e, "mousedown", null, Dk(a, c)));
  a.fc.push(A.pc(b, "mouseover", c, c.ah));
  a.fc.push(A.pc(b, "mouseout", c, c.zg));
  a.fc.push(A.pc(e, "mouseover", c, c.ah));
  a.fc.push(A.pc(e, "mouseout", c, c.zg));
}
function Dk(a, b) {
  return function(c) {
    var e = a.pa.Ud(c);
    e &&
      (Qf(e, b),
      e.G || (e.G = a),
      e.Ua || (e.Ua = a.Li()),
      (e.xc = c),
      e.yi(c));
  };
}
d.Ge = function(a) {
  var b = this.pa.Ud(a);
  b && (b.G || (b.G = this), b.Ua || (b.Ua = this.Li()), (b.xc = a), b.yi(a));
};
function Lf(a, b) {
  var c = null;
  A.i.disable();
  var e = a.pa.xe();
  a.pa.zb(!1);
  try {
    var f = a.pa;
    if (!b.M()) throw "oldBlock is not rendered.";
    var h = A.D.$e(b);
    f.zb(!1);
    var k = A.D.ih(h, f);
    if (!k.M()) throw "block is not rendered.";
    var l = A.h.Lk(f.Fa),
      m = A.h.Lk(a.j.Fa),
      n = b.la().scale(a.j.scale),
      p = qc(rc(m, n), l).scale(1 / f.scale);
    k.moveBy(p.x, p.y);
    c = k;
    A.Cb();
  } finally {
    A.i.enable();
  }
  b = A.I.uq(a.pa, e);
  if (A.i.isEnabled())
    for (A.i.O(!0), A.i.R(new uc(c)), e = 0; e < b.length; e++)
      A.i.R(new yc(b[e]));
  a.bh ? a.Ba() : a.Rm();
  return c;
}
function Ek(a, b, c, e) {
  var f = b.T();
  b.moveTo(c, e);
  b.show();
  a.fc.push(A.J(f, "mousedown", a, a.Ge));
  a.ji.push(b);
}
function Fk(a, b, c, e, f, h) {
  c = A.h.B(
    "rect",
    { "fill-opacity": 0, x: c, y: e, height: f.height, width: f.width },
    null
  );
  c.Tc = b;
  A.C.Wf(c);
  a.j.Fa.insertBefore(c, b.M());
  b.Ck = c;
  return (a.gj[h] = c);
}
function Gk(a, b, c) {
  var e = c.vb();
  b.setAttribute("width", e.width);
  b.setAttribute("height", e.height);
  var f = c.ds ? 15 : 0;
  f && c.moveBy(0, f);
  f = c.L ? N : 0;
  c = c.la();
  b.setAttribute("y", c.y);
  b.setAttribute("x", a.u ? c.x - e.width + f : c.x - f);
}
d.Rm = function() {
  for (var a = ad(this.pa), b = I(this.j, !1), c = 0, e; (e = b[c]); c++)
    if (-1 == this.On.indexOf(e)) {
      var f = tc(e, !1);
      e.Cf(f.length > a);
    }
};
d.Xn = function() {
  this.wf && this.j.xf(this.wf);
  this.Lr();
  this.wf && this.j.oc(this.wf);
};
function Jf(a) {
  return a.Eb ? a.Eb.V() : !1;
}
function Kg(a) {
  a.gb = this.ye.bind(this);
  a.Ff = this.Il.bind(this);
  Kg.o.constructor.call(this, a);
  this.yd = !0;
}
z(Kg, zk);
d = Kg.prototype;
d.ye = function() {
  if (!this.V()) return null;
  try {
    var a = this.j.Fa.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var b = this.Tf,
    c = this.Tf;
  this.Ne == A.Uf && (b = 0);
  var e = this.xa;
  this.Ne == A.Ye && (e -= this.Tf);
  return {
    Va: e,
    va: this.ba - 2 * this.Tf,
    Xb: (a.height + 2 * this.Zc) * this.j.scale,
    rc: (a.width + 2 * this.Zc) * this.j.scale,
    me: -this.j.scrollY,
    ib: -this.j.scrollX,
    qc: a.y,
    Fc: a.x,
    eb: b,
    Xa: c
  };
};
d.Il = function(a) {
  var b = this.ye();
  b &&
    (r(a.x) && (this.j.scrollX = -b.rc * a.x),
    this.j.translate(this.j.scrollX + b.Xa, this.j.scrollY + b.eb));
};
d.position = function() {
  if (this.V()) {
    var a = this.pa.gb();
    if (a) {
      this.ba = a.va;
      this.po(a.va - 2 * this.ka, this.xa - this.ka);
      var b = a.Xa,
        c = a.eb;
      this.Ne == A.Uf && (c += a.Va - this.xa);
      Ak(this, this.ba, this.xa, b, c);
    }
  }
};
d.po = function(a, b) {
  var c = this.Ne == A.Ye,
    e = ["M 0," + (c ? 0 : this.ka)];
  c
    ? (e.push("h", a + 2 * this.ka),
      e.push("v", b),
      e.push("a", this.ka, this.ka, 0, 0, 1, -this.ka, this.ka),
      e.push("h", -1 * a),
      e.push("a", this.ka, this.ka, 0, 0, 1, -this.ka, -this.ka))
    : (e.push("a", this.ka, this.ka, 0, 0, 1, this.ka, -this.ka),
      e.push("h", a),
      e.push("a", this.ka, this.ka, 0, 0, 1, this.ka, this.ka),
      e.push("v", b),
      e.push("h", -a - 2 * this.ka));
  e.push("z");
  this.Rc.setAttribute("d", e.join(" "));
};
d.io = function() {
  this.Eb.set(this.u ? Infinity : 0);
};
d.us = function(a) {
  var b = a.deltaX;
  if (b) {
    D && 1 === a.deltaMode && (b *= 10);
    var c = this.ye();
    b = c.ib + b;
    b = Math.min(b, c.rc - c.va);
    b = Math.max(b, 0);
    this.Eb.set(b);
    A.H.Ba();
  }
  a.preventDefault();
  a.stopPropagation();
};
d.Sq = function(a, b) {
  this.j.scale = this.pa.scale;
  var c = this.Zc,
    e = this.u ? c : c + N;
  this.u && (a = a.reverse());
  for (var f = 0, h; (h = a[f]); f++)
    if ("block" == h.type) {
      h = h.block;
      for (var k = tc(h, !1), l = 0, m; (m = k[l]); l++) m.vc = !0;
      h.$();
      k = h.M();
      l = h.vb();
      m = h.L ? N : 0;
      m = this.u ? e + l.width : e + m;
      h.moveBy(m, c);
      m = Fk(this, h, m, c, l, f);
      e += l.width + b[f];
      Ck(this, k, h, m);
    } else
      "button" == h.type &&
        (Ek(this, h.button, e, c), (e += h.button.width + b[f]));
};
d.Oq = function(a) {
  a = (Math.atan2(a.y, a.x) / Math.PI) * 180;
  var b = this.kq;
  return (a < 90 + b && a > 90 - b) || (a > -90 - b && a < -90 + b) ? !0 : !1;
};
d.mh = function() {
  if (!this.v) return null;
  var a = this.v.getBoundingClientRect(),
    b = a.top;
  a = a.height;
  if (this.Ne == A.Ye) return new ng(-1e9, b - 1e9, 2e9, 1e9 + a);
  if (this.Ne == A.Uf) return new ng(-1e9, b, 2e9, 1e9 + a);
};
d.Lr = function() {
  this.j.scale = this.pa.scale;
  for (var a = 0, b = I(this.j, !1), c = 0, e; (e = b[c]); c++)
    a = Math.max(a, e.vb().height);
  a += 1.5 * this.Zc;
  a *= this.j.scale;
  a += K;
  if (this.xa != a) {
    for (c = 0; (e = b[c]); c++) e.Ck && Gk(this, e.Ck, e);
    this.xa = a;
    this.pa.resize();
  }
};
function Lg(a) {
  a.gb = this.ye.bind(this);
  a.Ff = this.Il.bind(this);
  Lg.o.constructor.call(this, a);
  this.yd = !1;
}
z(Lg, zk);
d = Lg.prototype;
d.ye = function() {
  if (!this.V()) return null;
  try {
    var a = this.j.Fa.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var b = this.Tf,
    c = this.xa - 2 * this.Tf,
    e = this.ba;
  this.u || (e -= this.Tf);
  return {
    Va: c,
    va: e,
    Xb: a.height * this.j.scale + 2 * this.Zc,
    rc: a.width * this.j.scale + 2 * this.Zc,
    me: -this.j.scrollY + a.y,
    ib: -this.j.scrollX,
    qc: a.y,
    Fc: a.x,
    eb: b,
    Xa: 0
  };
};
d.Il = function(a) {
  var b = this.ye();
  b &&
    (r(a.y) && (this.j.scrollY = -b.Xb * a.y),
    this.j.translate(this.j.scrollX + b.Xa, this.j.scrollY + b.eb));
};
d.position = function() {
  if (this.V()) {
    var a = this.pa.gb();
    if (a) {
      this.xa = a.Va;
      this.po(this.ba - this.ka, a.Va - 2 * this.ka);
      var b = a.eb,
        c = a.Xa;
      this.Ne == A.Jd && (this.qv = c += a.va - this.ba);
      Ak(this, this.ba, this.xa, c, b);
    }
  }
};
d.po = function(a, b) {
  var c = this.Ne == A.Jd,
    e = a + this.ka;
  e = ["M " + (c ? e : 0) + ",0"];
  e.push("h", c ? -a : a);
  e.push(
    "a",
    this.ka,
    this.ka,
    0,
    0,
    c ? 0 : 1,
    c ? -this.ka : this.ka,
    this.ka
  );
  e.push("v", Math.max(0, b));
  e.push(
    "a",
    this.ka,
    this.ka,
    0,
    0,
    c ? 0 : 1,
    c ? this.ka : -this.ka,
    this.ka
  );
  e.push("h", c ? a : -a);
  e.push("z");
  this.Rc.setAttribute("d", e.join(" "));
};
d.io = function() {
  this.Eb.set(0);
};
d.us = function(a) {
  var b = a.deltaY;
  if (b) {
    D && 1 === a.deltaMode && (b *= 10);
    var c = this.ye();
    b = c.me - c.qc + b;
    b = Math.min(b, c.Xb - c.Va);
    b = Math.max(b, 0);
    this.Eb.set(b);
    A.H.Ba();
  }
  a.preventDefault();
  a.stopPropagation();
};
d.Sq = function(a, b) {
  this.j.scale = this.pa.scale;
  for (var c = this.Zc, e = this.u ? c : c + N, f = 0, h; (h = a[f]); f++)
    if ("block" == h.type) {
      h = h.block;
      for (var k = tc(h, !1), l = 0, m; (m = k[l]); l++) m.vc = !0;
      h.$();
      k = h.M();
      l = h.vb();
      h.moveBy(e, c);
      m = Fk(this, h, this.u ? e - l.width : e, c, l, f);
      Ck(this, k, h, m);
      c += l.height + b[f];
    } else
      "button" == h.type &&
        (Ek(this, h.button, e, c), (c += h.button.height + b[f]));
};
d.Oq = function(a) {
  a = (Math.atan2(a.y, a.x) / Math.PI) * 180;
  var b = this.kq;
  return (a < b && a > -b) || a < -180 + b || a > 180 - b ? !0 : !1;
};
d.mh = function() {
  if (!this.v) return null;
  var a = this.v.getBoundingClientRect(),
    b = a.left;
  a = a.width;
  if (this.Ne == A.Xe) return new ng(b - 1e9, -1e9, 1e9 + a, 2e9);
  if (D && this.pa && this.pa.$i) {
    var c = this.pa.v.getBoundingClientRect().x;
    10 > Math.abs(c - b) && (b += this.qv * this.pa.options.Nc.scale);
  }
  return new ng(b, -1e9, 1e9 + a, 2e9);
};
d.Lr = function() {
  this.j.scale = this.pa.scale;
  for (var a = 0, b = I(this.j, !1), c = 0, e; (e = b[c]); c++) {
    var f = e.vb().width;
    e.L && (f -= N);
    a = Math.max(a, f);
  }
  for (c = 0; (e = this.ji[c]); c++) a = Math.max(a, e.width);
  a += 1.5 * this.Zc + N;
  a *= this.j.scale;
  a += K;
  if (this.ba != a) {
    for (c = 0; (e = b[c]); c++)
      this.u &&
        ((f = e.la().x), e.moveBy(a / this.j.scale - this.Zc - N - f, 0)),
        e.Ck && Gk(this, e.Ck, e);
    if (this.u)
      for (c = 0; (e = this.ji[c]); c++)
        (b = e.yq().y), e.moveTo(a / this.j.scale - e.width - this.Zc - N, b);
    this.ba = a;
    this.pa.resize();
  }
};
function Hk(a) {
  kg.call(this);
  this.N = a;
  a = C ? "focusout" : "blur";
  this.tv = $b(this.N, C ? "focusin" : "focus", this, !C);
  this.uv = $b(this.N, a, this, !C);
}
z(Hk, kg);
Hk.prototype.handleEvent = function(a) {
  var b = new Lb(a.Qd);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  this.dispatchEvent(b);
};
Hk.prototype.Ka = function() {
  Hk.o.Ka.call(this);
  ic(this.tv);
  ic(this.uv);
  delete this.N;
};
function Ik(a, b) {
  null != a && this.append.apply(this, arguments);
}
d = Ik.prototype;
d.jb = "";
d.set = function(a) {
  this.jb = "" + a;
};
d.append = function(a, b, c) {
  this.jb += String(a);
  if (null != b)
    for (var e = 1; e < arguments.length; e++) this.jb += arguments[e];
  return this;
};
d.clear = function() {
  this.jb = "";
};
d.toString = function() {
  return this.jb;
};
function Jk(a, b, c) {
  Jh.call(this, c);
  this.Pa = b || Kk;
  a instanceof Ad ||
    ((a = Dd(a)), (a = Ed(Cd(a).replace(/(\r\n|\r|\n)/g, "<br>"), a.oh())));
  this.Ti = a;
  this.Ai = this.lo = !1;
  this.yw = null;
  this.ot = Kd;
  this.aj = !0;
  this.vk = -1;
}
z(Jk, Jh);
var Lk = {};
d = Jk.prototype;
d.Ka = function() {
  Jk.o.Ka.call(this);
  this.Kf && (this.Kf.removeNode(this), (this.Kf = null));
  this.N = null;
};
d.Yk = function() {
  var a = this.F();
  if (a) {
    var b = Mk(this);
    b && !b.id && (b.id = this.ha() + ".label");
    Uh(a, "treeitem");
    R(a, "selected", !1);
    R(a, "level", this.nh());
    b && R(a, "labelledby", b.id);
    (b = this.Kk()) && Uh(b, "presentation");
    (b = this.Jk()) && Uh(b, "presentation");
    if ((b = Nk(this)))
      if ((Uh(b, "group"), b.hasChildNodes()))
        for (R(a, "expanded", !1), a = Ph(this), b = 1; b <= a; b++) {
          var c = Q(this, b - 1).F();
          R(c, "setsize", a);
          R(c, "posinset", b);
        }
  }
};
d.T = function() {
  var a = this.Zb();
  var b = this.Sl();
  var c = a.td;
  a = c.createElement("DIV");
  C ? (Md(a, Jd(Ld, b)), a.removeChild(a.firstChild)) : Md(a, b);
  if (1 == a.childNodes.length) b = a.removeChild(a.firstChild);
  else
    for (b = c.createDocumentFragment(); a.firstChild; )
      b.appendChild(a.firstChild);
  this.N = b;
};
d.mb = function() {
  Jk.o.mb.call(this);
  Lk[this.ha()] = this;
  this.Yk();
};
d.gd = function() {
  Jk.o.gd.call(this);
  delete Lk[this.ha()];
};
d.$g = function(a, b) {
  var c = Q(this, b - 1),
    e = Q(this, b);
  Jk.o.$g.call(this, a, b);
  a.Ed = c;
  a.Cd = e;
  c ? (c.Cd = a) : (this.qq = a);
  e ? (e.Ed = a) : (this.Qq = a);
  (b = this.cc()) && Ok(a, b);
  Pk(a, this.nh() + 1);
  if ((b = this.F()))
    if ((this.Th(), R(b, "expanded", this.$b()), this.$b())) {
      b = Nk(this);
      a.F() || a.T();
      var f = a.F(),
        h = e && e.F();
      b.insertBefore(f, h);
      this.sa && a.mb();
      e || (c ? c.Th() : (gh(b, !0), this.Fd(this.$b())));
    }
};
d.add = function(a, b) {
  a.getParent() && a.getParent().removeChild(a);
  this.$g(a, b ? Sh(this, b) : Ph(this));
  return a;
};
d.removeChild = function(a) {
  var b = this.cc(),
    c = b ? b.Wd() : null;
  if (c == a || a.contains(c))
    b.hasFocus() ? (this.select(), rf(this.bw, 10, this)) : this.select();
  Jk.o.removeChild.call(this, a);
  this.Qq == a && (this.Qq = a.Ed);
  this.qq == a && (this.qq = a.Cd);
  a.Ed && (a.Ed.Cd = a.Cd);
  a.Cd && (a.Cd.Ed = a.Ed);
  c = !a.Cd;
  a.Kf = null;
  a.vk = -1;
  if (b && (b.removeNode(a), this.sa)) {
    b = Nk(this);
    if (a.sa) {
      var e = a.F();
      b.removeChild(e);
      a.gd();
    }
    c && (c = Q(this, Ph(this) - 1)) && c.Th();
    Rh(this) ||
      ((b.style.display = "none"),
      this.Th(),
      (this.Kk().className = this.Fk()),
      (c = this.F()) && c.removeAttribute("aria-expanded"));
  }
  return a;
};
d.remove = Jk.prototype.removeChild;
d.bw = function() {
  this.select();
};
d.nh = function() {
  var a = this.vk;
  0 > a && ((a = (a = this.getParent()) ? a.nh() + 1 : 0), Pk(this, a));
  return a;
};
function Pk(a, b) {
  if (b != a.vk) {
    a.vk = b;
    var c = Qk(a);
    if (c) {
      var e = Rk(a) + "px";
      Qh(a) ? (c.style.paddingRight = e) : (c.style.paddingLeft = e);
    }
    Oh(a, function(a) {
      Pk(a, b + 1);
    });
  }
}
d.contains = function(a) {
  for (; a; ) {
    if (a == this) return !0;
    a = a.getParent();
  }
  return !1;
};
d.df = function() {
  var a = [];
  Oh(this, function(b) {
    a.push(b);
  });
  return a;
};
d.dl = function() {
  return this.lo;
};
d.select = function() {
  var a = this.cc();
  a && a.Pc(this);
};
function Sk(a, b) {
  if (a.lo != b) {
    a.lo = b;
    Tk(a);
    var c = a.F();
    c &&
      (R(c, "selected", b),
      b && ((b = a.cc().F()), R(b, "activedescendant", a.ha())));
  }
}
d.$b = function() {
  return this.Ai;
};
d.Fd = function(a) {
  var b = a != this.Ai;
  if (!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) {
    this.Ai = a;
    var c = this.cc();
    var e = this.F();
    if (Rh(this)) {
      if ((!a && c && this.contains(c.Wd()) && this.select(), e)) {
        if ((c = Nk(this)))
          if (
            (gh(c, a), R(e, "expanded", a), a && this.sa && !c.hasChildNodes())
          ) {
            var f = [];
            Oh(this, function(a) {
              f.push(a.Sl());
            });
            Md(c, Jd(f));
            Oh(this, function(a) {
              a.mb();
            });
          }
        this.Th();
      }
    } else (c = Nk(this)) && gh(c, !1);
    e && (this.Kk().className = this.Fk());
    b && this.dispatchEvent(a ? "expand" : "collapse");
  }
};
d.toggle = function() {
  this.Fd(!this.$b());
};
d.expand = function() {
  this.Fd(!0);
};
d.collapse = function() {
  this.Fd(!1);
};
d.fo = function() {
  var a = this.getParent();
  a && (a.Fd(!0), a.fo());
};
d.Sl = function() {
  var a = this.cc(),
    b = !a.Cj || (a == this.getParent() && !a.Ao) ? this.Pa.Lp : this.Pa.Kp;
  a = this.$b() && Rh(this);
  b = { class: b, style: Uk(this) };
  var c = [];
  a &&
    Oh(this, function(a) {
      c.push(a.Sl());
    });
  a = Id("div", b, c);
  return Id("div", { class: this.Pa.Vp, id: this.ha() }, [Vk(this), a]);
};
function Rk(a) {
  return Math.max(0, (a.nh() - 1) * a.Pa.on);
}
function Vk(a) {
  var b = {};
  b["padding-" + (Qh(a) ? "right" : "left")] = Rk(a) + "px";
  b = { class: a.Hi(), style: b };
  var c = a.Ym(),
    e = Id("span", { style: { display: "inline-block" }, class: a.Fk() }),
    f = Id("span", { class: a.Pa.Wp, title: a.yw || null }, a.Ti);
  a = Jd(f, Id("span", {}, a.ot));
  return Id("div", b, [c, e, a]);
}
d.Hi = function() {
  return this.Pa.Dm + (this.dl() ? " " + this.Pa.Yp : "");
};
d.Ym = function() {
  return Id("span", {
    type: "expand",
    style: { display: "inline-block" },
    class: Wk(this)
  });
};
function Wk(a) {
  var b = a.cc(),
    c = !b.Cj || (b == a.getParent() && !b.Ao),
    e = a.Pa,
    f = new Ik();
  f.append(e.Yf, " ", e.Zt, " ");
  if (Rh(a)) {
    var h = 0;
    b.zo && a.aj && (h = a.$b() ? 2 : 1);
    c || (h = a.Cd ? h + 8 : h + 4);
    switch (h) {
      case 1:
        f.append(e.cu);
        break;
      case 2:
        f.append(e.bu);
        break;
      case 4:
        f.append(e.Qp);
        break;
      case 5:
        f.append(e.au);
        break;
      case 6:
        f.append(e.$t);
        break;
      case 8:
        f.append(e.Rp);
        break;
      case 9:
        f.append(e.eu);
        break;
      case 10:
        f.append(e.du);
        break;
      default:
        f.append(e.Pp);
    }
  } else c ? f.append(e.Pp) : a.Cd ? f.append(e.Rp) : f.append(e.Qp);
  return f.toString();
}
function Uk(a) {
  var b = a.$b() && Rh(a);
  return ud({ "background-position": Xk(a), display: b ? null : "none" });
}
function Xk(a) {
  return (a.Cd ? (a.nh() - 1) * a.Pa.on : "-100") + "px 0";
}
d.F = function() {
  var a = Jk.o.F.call(this);
  a || (this.N = a = this.Zb().F(this.ha()));
  return a;
};
function Qk(a) {
  return (a = a.F()) ? a.firstChild : null;
}
d.Jk = function() {
  var a = Qk(this);
  return a ? a.firstChild : null;
};
d.Kk = function() {
  var a = Qk(this);
  return a ? a.childNodes[1] : null;
};
function Mk(a) {
  return (a = Qk(a)) && a.lastChild ? a.lastChild.previousSibling : null;
}
function Nk(a) {
  return (a = a.F()) ? a.lastChild : null;
}
d.Ab = function(a) {
  this.Ti = a = Dd(a);
  var b = Mk(this);
  b && Md(b, a);
  (a = this.cc()) && Yk(a, this);
};
d.xb = function() {
  var a = Cd(this.Ti);
  return -1 != a.indexOf("&") ? ("document" in g ? Ra(a) : Ta(a)) : a;
};
function Tk(a) {
  var b = Qk(a);
  b && (b.className = a.Hi());
}
d.Th = function() {
  var a = this.Jk();
  a && (a.className = Wk(this));
  if ((a = Nk(this))) a.style.backgroundPosition = Xk(this);
};
d.vr = function(a) {
  "expand" == a.target.getAttribute("type") && Rh(this)
    ? this.aj && this.toggle()
    : (this.select(), Tk(this));
};
d.Hn = function(a) {
  a.preventDefault();
};
d.qr = function(a) {
  ("expand" == a.target.getAttribute("type") && Rh(this)) ||
    (this.aj && this.toggle());
};
d.In = function(a) {
  var b = !0;
  switch (a.keyCode) {
    case 39:
      if (a.altKey) break;
      Rh(this) && (this.$b() ? Q(this, 0).select() : this.Fd(!0));
      break;
    case 37:
      if (a.altKey) break;
      if (Rh(this) && this.$b() && this.aj) this.Fd(!1);
      else {
        var c = this.getParent(),
          e = this.cc();
        c && (e.Fg || c != e) && c.select();
      }
      break;
    case 40:
      a: if (Rh(this) && this.$b()) c = Q(this, 0);
      else {
        for (c = this; c != this.cc(); ) {
          e = c.Cd;
          if (null != e) {
            c = e;
            break a;
          }
          c = c.getParent();
        }
        c = null;
      }
      c && c.select();
      break;
    case 38:
      c = this.Ed;
      null != c
        ? (c = Zk(c))
        : ((c = this.getParent()),
          (e = this.cc()),
          (c = (!e.Fg && c == e) || this == e ? null : c));
      c && c.select();
      break;
    default:
      b = !1;
  }
  b && (a.preventDefault(), (e = this.cc()) && e.Kj.clear());
  return b;
};
function Zk(a) {
  return a.$b() && Rh(a) ? Zk(Q(a, Ph(a) - 1)) : a;
}
function Ok(a, b) {
  a.Kf != b &&
    ((a.Kf = b),
    Yk(b, a),
    Oh(a, function(a) {
      Ok(a, b);
    }));
}
var Kk = {
  on: 19,
  Xp: "goog-tree-root goog-tree-item",
  Tp: "goog-tree-hide-root",
  Vp: "goog-tree-item",
  Kp: "goog-tree-children",
  Lp: "goog-tree-children-nolines",
  Dm: "goog-tree-row",
  Wp: "goog-tree-item-label",
  Yf: "goog-tree-icon",
  Zt: "goog-tree-expand-icon",
  cu: "goog-tree-expand-icon-plus",
  bu: "goog-tree-expand-icon-minus",
  eu: "goog-tree-expand-icon-tplus",
  du: "goog-tree-expand-icon-tminus",
  au: "goog-tree-expand-icon-lplus",
  $t: "goog-tree-expand-icon-lminus",
  Rp: "goog-tree-expand-icon-t",
  Qp: "goog-tree-expand-icon-l",
  Pp: "goog-tree-expand-icon-blank",
  Bm: "goog-tree-expanded-folder-icon",
  Np: "goog-tree-collapsed-folder-icon",
  Cm: "goog-tree-file-icon",
  Sp: "goog-tree-expanded-folder-icon",
  Op: "goog-tree-collapsed-folder-icon",
  Yp: "selected"
};
function $k(a, b, c) {
  Jk.call(this, a, b, c);
}
z($k, Jk);
$k.prototype.cc = function() {
  if (this.Kf) return this.Kf;
  var a = this.getParent();
  return a && (a = a.cc()) ? (Ok(this, a), a) : null;
};
$k.prototype.Fk = function() {
  var a = this.$b(),
    b = this.xu;
  if (a && b) return b;
  b = this.ev;
  if (!a && b) return b;
  b = this.Pa;
  if (Rh(this)) {
    if (a && b.Bm) return b.Yf + " " + b.Bm;
    if (!a && b.Np) return b.Yf + " " + b.Np;
  } else if (b.Cm) return b.Yf + " " + b.Cm;
  return "";
};
function al(a) {
  if (a.Ji && "function" == typeof a.Ji) return a.Ji();
  if (q(a)) return a.split("");
  if (fa(a)) {
    for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]);
    return b;
  }
  b = [];
  c = 0;
  for (e in a) b[c++] = a[e];
  return b;
}
function bl(a) {
  this.Bb = void 0;
  this.Lb = {};
  if (a) {
    if (a.Nk && "function" == typeof a.Nk) var b = a.Nk();
    else if (a.Ji && "function" == typeof a.Ji) b = void 0;
    else if (fa(a) || q(a)) {
      b = [];
      for (var c = a.length, e = 0; e < c; e++) b.push(e);
    } else for (e in ((b = []), (c = 0), a)) b[c++] = e;
    a = al(a);
    for (c = 0; c < b.length; c++) this.set(b[c], a[c]);
  }
}
d = bl.prototype;
d.set = function(a, b) {
  cl(this, a, b, !1);
};
d.add = function(a, b) {
  cl(this, a, b, !0);
};
function cl(a, b, c, e) {
  for (var f = 0; f < b.length; f++) {
    var h = b.charAt(f);
    a.Lb[h] || (a.Lb[h] = new bl());
    a = a.Lb[h];
  }
  if (e && void 0 !== a.Bb)
    throw Error('The collection already contains the key "' + b + '"');
  a.Bb = c;
}
d.get = function(a) {
  a: {
    for (var b = this, c = 0; c < a.length; c++)
      if (((b = b.Lb[a.charAt(c)]), !b)) {
        a = void 0;
        break a;
      }
    a = b;
  }
  return a ? a.Bb : void 0;
};
d.Ji = function() {
  var a = [];
  dl(this, a);
  return a;
};
function dl(a, b) {
  void 0 !== a.Bb && b.push(a.Bb);
  for (var c in a.Lb) dl(a.Lb[c], b);
}
d.Nk = function(a) {
  var b = [];
  if (a) {
    for (var c = this, e = 0; e < a.length; e++) {
      var f = a.charAt(e);
      if (!c.Lb[f]) return [];
      c = c.Lb[f];
    }
    el(c, a, b);
  } else el(this, "", b);
  return b;
};
function el(a, b, c) {
  void 0 !== a.Bb && c.push(b);
  for (var e in a.Lb) el(a.Lb[e], b + e, c);
}
d.clear = function() {
  this.Lb = {};
  this.Bb = void 0;
};
d.remove = function(a) {
  for (var b = this, c = [], e = 0; e < a.length; e++) {
    var f = a.charAt(e);
    if (!b.Lb[f])
      throw Error('The collection does not have the key "' + a + '"');
    c.push([b, f]);
    b = b.Lb[f];
  }
  a = b.Bb;
  for (delete b.Bb; 0 < c.length; )
    if (((f = c.pop()), (b = f[0]), (f = f[1]), b.Lb[f].Pq())) delete b.Lb[f];
    else break;
  return a;
};
d.clone = function() {
  return new bl(this);
};
d.Pq = function() {
  var a;
  if ((a = void 0 === this.Bb))
    a: {
      for (var b in this.Lb) {
        a = !1;
        break a;
      }
      a = !0;
    }
  return a;
};
function fl() {
  this.ug = new bl();
  this.jb = "";
  this.ol = this.An = null;
  this.Ch = this.fj = 0;
}
function gl(a, b) {
  var c = b.xb();
  if (c && !Fa(null == c ? "" : String(c))) {
    c = c.toLowerCase();
    var e = a.ug.get(c);
    if (e) {
      for (var f = Ph(b), h = 0; h < f; h++) gl(a, Q(b, h));
      xa(e, b);
      e.length || a.ug.remove(c);
    }
  }
}
function hl(a, b) {
  var c = !1;
  (b = a.ug.Nk(b)) &&
    b.length &&
    ((a.Ch = 0), (a.fj = 0), (c = a.ug.get(b[0])), (c = il(a, c))) &&
    (a.An = b);
  return c;
}
function il(a, b) {
  if (b) {
    if (a.Ch < b.length) {
      var c = b[a.Ch];
      a.ol = b;
    }
    c && (c.fo(), c.select());
  }
  return !!c;
}
fl.prototype.clear = function() {
  this.jb = "";
};
function jl(a, b, c) {
  Jk.call(this, a, b, c);
  this.Ai = !0;
  Sk(this, !0);
  this.ab = this;
  this.Kj = new fl();
  this.Tm = this.Pb = null;
  this.Ci = !1;
  this.Du = null;
  this.Ao = this.Fg = this.zo = this.Cj = !0;
  if (C)
    try {
      document.execCommand("BackgroundImageCache", !1, !0);
    } catch (e) {}
}
z(jl, Jk);
d = jl.prototype;
d.cc = function() {
  return this;
};
d.nh = function() {
  return 0;
};
d.fo = function() {};
d.Qu = function() {
  this.Ci = !0;
  ii(this.F(), "focused");
  this.ab && this.ab.select();
};
d.Lu = function() {
  this.Ci = !1;
  ki(this.F(), "focused");
};
d.hasFocus = function() {
  return this.Ci;
};
d.$b = function() {
  return !this.Fg || jl.o.$b.call(this);
};
d.Fd = function(a) {
  this.Fg ? jl.o.Fd.call(this, a) : (this.Ai = a);
};
d.Ym = function() {
  return Kd;
};
d.Kk = function() {
  var a = Qk(this);
  return a ? a.firstChild : null;
};
d.Jk = function() {
  return null;
};
d.Th = function() {};
d.Hi = function() {
  return jl.o.Hi.call(this) + (this.Fg ? "" : " " + this.Pa.Tp);
};
d.Fk = function() {
  var a = this.$b(),
    b = this.xu;
  if (a && b) return b;
  b = this.ev;
  if (!a && b) return b;
  b = this.Pa;
  return a && b.Sp ? b.Yf + " " + b.Sp : !a && b.Op ? b.Yf + " " + b.Op : "";
};
d.Pc = function(a) {
  if (this.ab != a) {
    var b = !1;
    this.ab && ((b = this.ab == this.Du), Sk(this.ab, !1));
    if ((this.ab = a)) Sk(a, !0), b && a.select();
    this.dispatchEvent("change");
  }
};
d.Wd = function() {
  return this.ab;
};
function kl(a) {
  0 != a.Cj && ((a.Cj = !1), a.sa && ll(a));
}
function ll(a) {
  function b(a) {
    var h = Nk(a);
    if (h) {
      var l = !e || (c == a.getParent() && !f) ? a.Pa.Lp : a.Pa.Kp;
      h.className = l;
      if ((h = a.Jk())) h.className = Wk(a);
    }
    Oh(a, b);
  }
  var c = a,
    e = c.Cj,
    f = c.Ao;
  b(a);
}
function ml(a) {
  0 != a.zo && ((a.zo = !1), a.sa && ll(a));
}
function nl(a) {
  if (0 != a.Fg) {
    a.Fg = !1;
    if (a.sa) {
      var b = Qk(a);
      b && (b.className = a.Hi());
    }
    a.Wd() == a && Q(a, 0) && a.Pc(Q(a, 0));
  }
}
d.Yk = function() {
  jl.o.Yk.call(this);
  var a = this.F();
  Uh(a, "tree");
  R(a, "labelledby", Mk(this).id);
};
d.mb = function() {
  jl.o.mb.call(this);
  var a = this.F();
  a.className = this.Pa.Xp;
  a.setAttribute("hideFocus", "true");
  a = this.F();
  a.tabIndex = 0;
  var b = (this.Pb = new $h(a)),
    c = (this.Tm = new Hk(a));
  Mh(this)
    .ia(c, "focusout", this.Lu)
    .ia(c, "focusin", this.Qu)
    .ia(b, "key", this.jd)
    .ia(a, "mousedown", this.gn)
    .ia(a, "click", this.gn)
    .ia(a, "dblclick", this.gn);
  this.Yk();
};
d.gd = function() {
  jl.o.gd.call(this);
  this.Pb.A();
  this.Pb = null;
  this.Tm.A();
  this.Tm = null;
};
d.gn = function(a) {
  var b = ol(this, a);
  if (b)
    switch (a.type) {
      case "mousedown":
        b.vr(a);
        break;
      case "click":
        b.Hn(a);
        break;
      case "dblclick":
        b.qr(a);
    }
};
d.jd = function(a) {
  var b = this.Kj;
  var c = !1;
  switch (a.keyCode) {
    case 40:
    case 38:
      if (a.ctrlKey) {
        c = 40 == a.keyCode ? 1 : -1;
        var e = b.An;
        if (e) {
          var f = null,
            h = !1;
          if (b.ol) {
            var k = b.Ch + c;
            0 <= k && k < b.ol.length ? ((b.Ch = k), (f = b.ol)) : (h = !0);
          }
          f ||
            ((k = b.fj + c),
            0 <= k && k < e.length && (b.fj = k),
            e.length > b.fj && (f = b.ug.get(e[b.fj])),
            f && f.length && h && (b.Ch = -1 == c ? f.length - 1 : 0));
          il(b, f) && (b.An = e);
        }
        c = !0;
      }
      break;
    case 8:
      e = b.jb.length - 1;
      c = !0;
      0 < e
        ? ((b.jb = b.jb.substring(0, e)), hl(b, b.jb))
        : 0 == e
        ? (b.jb = "")
        : (c = !1);
      break;
    case 27:
      (b.jb = ""), (c = !0);
  }
  (b = c || (this.ab && this.ab.In(a))) ||
    ((b = this.Kj),
    (c = !1),
    a.ctrlKey ||
      a.altKey ||
      ((e = String.fromCharCode(a.charCode || a.keyCode).toLowerCase()),
      ((1 == e.length && " " <= e && "~" >= e) ||
        ("\u0080" <= e && "\ufffd" >= e)) &&
        (" " != e || b.jb) &&
        ((b.jb += e), (c = hl(b, b.jb)))),
    (b = c));
  b && a.preventDefault();
  return b;
};
function ol(a, b) {
  for (var c = b.target; null != c; ) {
    if ((b = Lk[c.id])) return b;
    if (c == a.F()) break;
    c = c.parentNode;
  }
  return null;
}
d.createNode = function(a) {
  return new $k(a || Kd, this.Pa, this.Zb());
};
function Yk(a, b) {
  a = a.Kj;
  var c = b.xb();
  if (c && !Fa(null == c ? "" : String(c))) {
    c = c.toLowerCase();
    var e = a.ug.get(c);
    e ? e.push(b) : a.ug.set(c, [b]);
  }
}
d.removeNode = function(a) {
  gl(this.Kj, a);
};
function Hg(a) {
  this.j = a;
  this.u = a.options.u;
  this.yd = a.options.Yd;
  this.wa = a.options.wa;
  this.Pa = {
    on: 19,
    Xp: "blocklyTreeRoot",
    Tp: "blocklyHidden",
    Vp: "",
    Dm: "blocklyTreeRow",
    Wp: "blocklyTreeLabel",
    Yf: "blocklyTreeIcon",
    Bm: "blocklyTreeIconOpen",
    Cm: "blocklyTreeIconNone",
    Yp: "blocklyTreeSelected"
  };
  this.ns = { Dm: "blocklyTreeSeparator" };
  this.yd &&
    ((this.Pa.cssTreeRow += a.u
      ? " blocklyHorizontalTreeRtl"
      : " blocklyHorizontalTree"),
    (this.ns.cssTreeRow =
      "blocklyTreeSeparatorHorizontal " +
      (a.u ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree")),
    (this.Pa.cssTreeIcon = ""));
}
d = Hg.prototype;
d.width = 0;
d.height = 0;
d.cj = null;
d.W = function() {
  var a = this.j,
    b = M(this.j);
  this.mc = H("DIV", "blocklyToolboxDiv");
  this.mc.setAttribute("dir", a.u ? "RTL" : "LTR");
  b.parentNode.insertBefore(this.mc, b);
  A.J(
    this.mc,
    "mousedown",
    this,
    function(a) {
      A.h.nf(a) || a.target == this.mc ? A.Cb(!1) : A.Cb(!0);
      A.Touch.ue();
    },
    !1,
    !0
  );
  b = {
    xi: a.options.xi,
    Nc: a,
    u: a.u,
    Fh: a.options.Fh,
    Yd: a.Yd,
    wa: a.options.wa
  };
  this.G = null;
  this.G = a.Yd ? new Kg(b) : new Lg(b);
  ae(this.G.T("svg"), M(this.j));
  this.G.W(a);
  this.Pa.cleardotPath = a.options.Dd + "1x1.gif";
  this.Pa.cssCollapsedFolderIcon =
    "blocklyTreeIconClosed" + (a.u ? "Rtl" : "Ltr");
  this.nd = b = new pl(this, this.Pa);
  nl(b);
  kl(b);
  ml(b);
  b.Pc(null);
  a = this.Al(a.options.ae);
  b.$(this.mc);
  a && b.Pc(a);
  Qg(this);
  this.position();
};
d.A = function() {
  this.G.A();
  this.nd.A();
  J(this.mc);
  this.cj = this.j = null;
};
d.Lc = function() {
  return this.width;
};
d.ph = function() {
  return this.height;
};
d.position = function() {
  var a = this.mc;
  if (a) {
    var b = M(this.j);
    b = A.ks(b);
    this.yd
      ? ((a.style.left = "0"),
        (a.style.height = "auto"),
        (a.style.width = b.width + "px"),
        (this.height = a.offsetHeight),
        this.wa == A.Ye ? (a.style.top = "0") : (a.style.bottom = "0"))
      : (this.wa == A.Jd ? (a.style.right = "0") : (a.style.left = "0"),
        (a.style.height = b.height + "px"),
        (this.width = a.offsetWidth));
    this.G.position();
  }
};
d.Al = function(a) {
  this.nd.Mr();
  this.nd.Ld = [];
  this.Fq = !1;
  a = ql(this, a, this.nd, this.j.options.Dd);
  if (this.nd.Ld.length)
    throw "Toolbox cannot have both blocks and categories in the root level.";
  xf(this.j);
  return a;
};
function ql(a, b, c, e) {
  for (var f = null, h = null, k = 0, l; (l = b.childNodes[k]); k++)
    if (l.tagName)
      switch (l.tagName.toUpperCase()) {
        case "CATEGORY":
          h = A.h.Sb(l.getAttribute("name"));
          h = a.nd.createNode(h);
          h.Ld = [];
          c.add(h);
          var m = l.getAttribute("custom");
          m ? (h.Ld = m) : (m = ql(a, l, h, e)) && (f = m);
          m = A.h.Sb(l.getAttribute("colour"));
          q(m)
            ? ((h.kn = /^#[0-9a-fA-F]{6}$/.test(m) ? m : A.Kq(Number(m))),
              (a.Fq = !0))
            : (h.kn = "");
          "true" == l.getAttribute("expanded")
            ? (h.Ld.length && (f = h), h.Fd(!0))
            : h.Fd(!1);
          h = l;
          break;
        case "SEP":
          h &&
            ("CATEGORY" == h.tagName.toUpperCase()
              ? c.add(new rl(a.ns))
              : ((l = parseFloat(l.getAttribute("gap"))),
                !isNaN(l) && h && h.setAttribute("gap", l)));
          break;
        case "BLOCK":
        case "SHADOW":
        case "LABEL":
        case "BUTTON":
          c.Ld.push(l), (h = l);
      }
  return f;
}
function Qg(a, b) {
  b = (b || a.nd).df(!1);
  for (var c = 0, e; (e = b[c]); c++) {
    var f = Qk(e);
    if (f) {
      var h = a.Fq ? "8px solid " + (e.kn || "#ddd") : "none";
      a.j.u ? (f.style.borderRight = h) : (f.style.borderLeft = h);
    }
    Qg(a, e);
  }
}
d.mh = function() {
  if (!this.mc) return null;
  var a = this.mc.getBoundingClientRect(),
    b = a.left,
    c = a.top,
    e = a.width;
  a = a.height;
  return this.wa == A.Xe
    ? new ng(-1e7, -1e7, 1e7 + b + e, 2e7)
    : this.wa == A.Jd
    ? new ng(b, -1e7, 1e7 + e, 2e7)
    : this.wa == A.Ye
    ? new ng(-1e7, -1e7, 2e7, 1e7 + c + a)
    : new ng(0, c, 2e7, 1e7 + e);
};
function pl(a, b) {
  this.Y = a;
  jl.call(this, Kd, b);
}
z(pl, jl);
pl.prototype.mb = function() {
  pl.o.mb.call(this);
  if (yb) {
    var a = this.F();
    A.J(a, "touchend", this, this.Zu);
  }
};
pl.prototype.Zu = function(a) {
  var b = ol(this, a);
  b &&
    "touchend" === a.type &&
    setTimeout(function() {
      b.Hn(a);
    }, 1);
};
pl.prototype.createNode = function(a) {
  a = a ? Dd(a) : Kd;
  return new sl(this.Y, a, this.Pa, this.Zb());
};
pl.prototype.Pc = function(a) {
  var b = this.Y;
  if (a != this.ab && a != b.nd) {
    b.cj && (Qk(b.cj).style.backgroundColor = "");
    if (a) {
      var c = a.kn || "#57e";
      Qk(a).style.backgroundColor = c;
      Qg(b, a);
    }
    c = this.Wd();
    jl.prototype.Pc.call(this, a);
    a && a.Ld && a.Ld.length
      ? (b.G.show(a.Ld), b.cj != a && b.G.io())
      : b.G.Ba();
    c != a &&
      c != this &&
      ((c = new Bc(null, "category", c && Cd(c.Ti), a && Cd(a.Ti))),
      (c.kc = b.j.id),
      A.i.R(c));
    a && (b.cj = a);
  }
};
function sl(a, b, c, e) {
  Jk.call(this, b, c, e);
  a &&
    ((b = function() {
      A.Lg(a.j);
    }),
    $b(a.nd, "expand", b),
    $b(a.nd, "collapse", b));
}
z(sl, $k);
d = sl.prototype;
d.Ym = function() {
  return Id("span");
};
d.Hn = function() {
  Rh(this) && this.aj
    ? (this.toggle(), this.select())
    : this.dl()
    ? this.cc().Pc(null)
    : this.select();
  Tk(this);
};
d.vr = function() {};
d.qr = function() {};
d.In = function(a) {
  if (this.Kf.Y.yd) {
    var b = {};
    b[39] = this.Nh ? 38 : 40;
    b[37] = this.Nh ? 40 : 38;
    b[38] = 37;
    b[40] = 39;
    a.keyCode = b[a.keyCode] || a.keyCode;
  }
  return sl.o.In.call(this, a);
};
function rl(a) {
  sl.call(this, null, Kd, a);
}
z(rl, sl);
A.Yc = {};
A.Yc.zA = "";
A.Yc.js = null;
A.Yc.Zq = "";
A.Yc.kf = function(a, b) {
  if (!A.Yc.js) {
    var c = ".blocklyDraggable {}\n";
    a && ((c += A.Yc.As.join("\n")), A.Gs && (c += A.Gs.CSS.join("\n")));
    A.Yc.Zq = b.replace(/[\\\/]$/, "");
    c = c.replace(/<<<PATH>>>/g, A.Yc.Zq);
    a = document.createElement("style");
    document.head.insertBefore(a, document.head.firstChild);
    a.appendChild(document.createTextNode(c));
    A.Yc.js = a.sheet;
  }
};
A.Yc.NA = function() {
  console.warn(
    "Deprecated call to Blockly.Css.setCursor.See https://github.com/google/blockly/issues/981 for context"
  );
};
A.Yc.As = [
  ".blocklySvg {",
  "background-color: #fff;",
  "outline: none;",
  "overflow: hidden;",
  "position: absolute;",
  "display: block;",
  "}",
  ".blocklyWidgetDiv {",
  "display: none;",
  "position: absolute;",
  "z-index: 99999;",
  "}",
  ".injectionDiv {",
  "height: 100%;",
  "position: relative;",
  "overflow: hidden;",
  "touch-action: none;",
  "margin-top: 25px;",
  "}",
  ".blocklyNonSelectable {",
  "user-select: none;",
  "-moz-user-select: none;",
  "-ms-user-select: none;",
  "-webkit-user-select: none;",
  "}",
  ".blocklyWsDragSurface {",
  "display: none;",
  "position: absolute;",
  "top: 0;",
  "left: 0;",
  "}",
  ".blocklyWsDragSurface.blocklyOverflowVisible {",
  "overflow: visible;",
  "}",
  ".blocklyBlockDragSurface {",
  "display: none;",
  "position: absolute;",
  "top: 0;",
  "left: 0;",
  "right: 0;",
  "bottom: 0;",
  "overflow: visible !important;",
  "z-index: 50;",
  "}",
  ".blocklyTooltipDiv {",
  "background-color: #ffffc7;",
  "border: 1px solid #ddc;",
  "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);",
  "color: #000;",
  "display: none;",
  "font-family: sans-serif;",
  "font-size: 9pt;",
  "opacity: .9;",
  "padding: 2px;",
  "position: absolute;",
  "z-index: 100000;",
  "}",
  ".blocklyResizeSE {",
  "cursor: se-resize;",
  "fill: #aaa;",
  "}",
  ".blocklyResizeSW {",
  "cursor: sw-resize;",
  "fill: #aaa;",
  "}",
  ".blocklyResizeLine {",
  "stroke: #515A5A;",
  "stroke-width: 1;",
  "}",
  ".blocklyHighlightedConnectionPath {",
  "fill: none;",
  "stroke: #fc3;",
  "stroke-width: 4px;",
  "}",
  ".blocklyPathLight {",
  "fill: none;",
  "stroke-linecap: round;",
  "stroke-width: 1;",
  "}",
  ".blocklySelected>.blocklyPath {",
  "stroke: #fc3;",
  "stroke-width: 3px;",
  "}",
  ".blocklySelected>.blocklyPathLight {",
  "display: none;",
  "}",
  ".blocklyDraggable {",
  'cursor: url("<<<PATH>>>/handopen.cur"), auto;',
  "cursor: grab;",
  "cursor: -webkit-grab;",
  "}",
  ".blocklyDragging {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyDraggable:active {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyBlockDragSurface .blocklyDraggable {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyDragging.blocklyDraggingDelete {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyToolboxDelete {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyToolboxGrab {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyDragging>.blocklyPath,",
  ".blocklyDragging>.blocklyPathLight {",
  "fill-opacity: .8;",
  "stroke-opacity: .8;",
  "}",
  ".blocklyDragging>.blocklyPathDark {",
  "display: none;",
  "}",
  ".blocklyDisabled>.blocklyPath {",
  "fill-opacity: .5;",
  "stroke-opacity: .5;",
  "}",
  ".blocklyDisabled>.blocklyPathLight,",
  ".blocklyDisabled>.blocklyPathDark {",
  "display: none;",
  "}",
  ".blocklyText {",
  "cursor: default;",
  "fill: #fff;",
  "font-family: sans-serif;",
  "font-size: 11pt;",
  "}",
  ".blocklyNonEditableText>text {",
  "pointer-events: none;",
  "}",
  ".blocklyNonEditableText>rect,",
  ".blocklyEditableText>rect {",
  "fill: #fff;",
  "fill-opacity: .6;",
  "}",
  ".blocklyNonEditableText>text,",
  ".blocklyEditableText>text {",
  "fill: #000;",
  "}",
  ".blocklyEditableText:hover>rect {",
  "stroke: #fff;",
  "stroke-width: 2;",
  "}",
  ".blocklyBubbleText {",
  "fill: #000;",
  "}",
  ".blocklyFlyout {",
  "position: absolute;",
  "z-index: 20;",
  "}",
  ".blocklyFlyoutButton {",
  "fill: #888;",
  "cursor: default;",
  "}",
  ".blocklyFlyoutButtonShadow {",
  "fill: #666;",
  "}",
  ".blocklyFlyoutButton:hover {",
  "fill: #aaa;",
  "}",
  ".blocklyFlyoutLabel {",
  "cursor: default;",
  "}",
  ".blocklyFlyoutLabelBackground {",
  "opacity: 0;",
  "}",
  ".blocklyFlyoutLabelText {",
  "fill: #000;",
  "}",
  ".blocklySvg text, .blocklyBlockDragSurface text {",
  "user-select: none;",
  "-moz-user-select: none;",
  "-ms-user-select: none;",
  "-webkit-user-select: none;",
  "cursor: inherit;",
  "}",
  ".blocklyHidden {",
  "display: none;",
  "}",
  ".blocklyFieldDropdown:not(.blocklyHidden) {",
  "display: block;",
  "}",
  ".blocklyIconGroup {",
  "cursor: default;",
  "}",
  ".blocklyIconGroup:not(:hover),",
  ".blocklyIconGroupReadonly {",
  "opacity: .6;",
  "}",
  ".blocklyIconShape {",
  "fill: #00f;",
  "stroke: #fff;",
  "stroke-width: 1px;",
  "}",
  ".blocklyIconSymbol {",
  "fill: #fff;",
  "}",
  ".blocklyMinimalBody {",
  "margin: 0;",
  "padding: 0;",
  "}",
  ".blocklyCommentForeignObject {",
  "position: relative;",
  "z-index: 0;",
  "}",
  ".blocklyCommentRect {",
  "fill: #E7DE8E;",
  "stroke: #bcA903;",
  "stroke-width: 1px",
  "}",
  ".blocklyCommentTarget {",
  "fill: transparent;",
  "stroke: #bcA903;",
  "}",
  ".blocklyCommentTargetFocused {",
  "fill: none;",
  "}",
  ".blocklyCommentHandleTarget {",
  "fill: none;",
  "}",
  ".blocklyCommentHandleTargetFocused {",
  "fill: transparent;",
  "}",
  ".blocklyFocused>.blocklyCommentRect {",
  "fill: #B9B272;",
  "stroke: #B9B272;",
  "}",
  ".blocklySelected>.blocklyCommentTarget {",
  "stroke: #fc3;",
  "stroke-width: 3px;",
  "}",
  ".blocklyCommentTextarea {",
  "background-color: #fef49c;",
  "border: 0;",
  "outline: 0;",
  "margin: 0;",
  "padding: 3px;",
  "resize: none;",
  "display: block;",
  "overflow: hidden;",
  "}",
  ".blocklyCommentDeleteIcon {",
  "cursor: pointer;",
  "fill: #000;",
  "display: none",
  "}",
  ".blocklySelected > .blocklyCommentDeleteIcon {",
  "display: block",
  "}",
  ".blocklyDeleteIconShape {",
  "fill: #000;",
  "stroke: #000;",
  "stroke-width: 1px;",
  "}",
  ".blocklyDeleteIconShape.blocklyDeleteIconHighlighted {",
  "stroke: #fc3;",
  "}",
  ".blocklyHtmlInput {",
  "border: none;",
  "border-radius: 4px;",
  "font-family: sans-serif;",
  "height: 100%;",
  "margin: 0;",
  "outline: none;",
  "padding: 0 1px;",
  "width: 100%",
  "}",
  ".blocklyMainBackground {",
  "stroke-width: 1;",
  "stroke: #c6c6c6;",
  "}",
  ".blocklyMutatorBackground {",
  "fill: #fff;",
  "stroke: #ddd;",
  "stroke-width: 1;",
  "}",
  ".blocklyFlyoutBackground {",
  "fill: #ddd;",
  "fill-opacity: .8;",
  "}",
  ".blocklyTransparentBackground {",
  "opacity: 0;",
  "}",
  ".blocklyMainWorkspaceScrollbar {",
  "z-index: 20;",
  "}",
  ".blocklyFlyoutScrollbar {",
  "z-index: 30;",
  "}",
  ".blocklyScrollbarHorizontal, .blocklyScrollbarVertical {",
  "position: absolute;",
  "outline: none;",
  "}",
  ".blocklyScrollbarBackground {",
  "opacity: 0;",
  "}",
  ".blocklyScrollbarHandle {",
  "fill: #ccc;",
  "}",
  ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
  ".blocklyScrollbarHandle:hover {",
  "fill: #bbb;",
  "}",
  ".blocklyZoom>image {",
  "opacity: .4;",
  "}",
  ".blocklyZoom>image:hover {",
  "opacity: .6;",
  "}",
  ".blocklyZoom>image:active {",
  "opacity: .8;",
  "}",
  ".blocklyFlyout .blocklyScrollbarHandle {",
  "fill: #bbb;",
  "}",
  ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
  ".blocklyFlyout .blocklyScrollbarHandle:hover {",
  "fill: #aaa;",
  "}",
  ".blocklyInvalidInput {",
  "background: #faa;",
  "}",
  ".blocklyAngleCircle {",
  "stroke: #444;",
  "stroke-width: 1;",
  "fill: #ddd;",
  "fill-opacity: .8;",
  "}",
  ".blocklyAngleMarks {",
  "stroke: #444;",
  "stroke-width: 1;",
  "}",
  ".blocklyAngleGauge {",
  "fill: #f88;",
  "fill-opacity: .8;",
  "}",
  ".blocklyAngleLine {",
  "stroke: #f00;",
  "stroke-width: 2;",
  "stroke-linecap: round;",
  "pointer-events: none;",
  "}",
  ".blocklyContextMenu {",
  "border-radius: 4px;",
  "}",
  ".blocklyDropdownMenu {",
  "padding: 0 !important;",
  "max-height: 300px !important;",
  "}",
  ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,",
  ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {",
  "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;",
  "}",
  ".blocklyToolboxDiv {",
  "background-color: #ddd;",
  "overflow-x: visible;",
  "overflow-y: auto;",
  "position: absolute;",
  "user-select: none;",
  "-moz-user-select: none;",
  "-ms-user-select: none;",
  "-webkit-user-select: none;",
  "z-index: 70;",
  "-webkit-tap-highlight-color: transparent;",
  "}",
  ".blocklyTreeRoot {",
  "padding: 4px 0;",
  "}",
  ".blocklyTreeRoot:focus {",
  "outline: none;",
  "}",
  ".blocklyTreeRow {",
  "height: 22px;",
  "line-height: 22px;",
  "margin-bottom: 3px;",
  "padding-right: 8px;",
  "white-space: nowrap;",
  "}",
  ".blocklyHorizontalTree {",
  "float: left;",
  "margin: 1px 5px 8px 0;",
  "}",
  ".blocklyHorizontalTreeRtl {",
  "float: right;",
  "margin: 1px 0 8px 5px;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',
  "margin-left: 8px;",
  "}",
  ".blocklyTreeRow:not(.blocklyTreeSelected):hover {",
  "background-color: #e4e4e4;",
  "}",
  ".blocklyTreeSeparator {",
  "border-bottom: solid #e5e5e5 1px;",
  "height: 0;",
  "margin: 5px 0;",
  "}",
  ".blocklyTreeSeparatorHorizontal {",
  "border-right: solid #e5e5e5 1px;",
  "width: 0;",
  "padding: 5px 0;",
  "margin: 0 5px;",
  "}",
  ".blocklyTreeIcon {",
  "background-image: url(<<<PATH>>>/sprites.png);",
  "height: 16px;",
  "vertical-align: middle;",
  "width: 16px;",
  "}",
  ".blocklyTreeIconClosedLtr {",
  "background-position: -32px -1px;",
  "}",
  ".blocklyTreeIconClosedRtl {",
  "background-position: 0 -1px;",
  "}",
  ".blocklyTreeIconOpen {",
  "background-position: -16px -1px;",
  "}",
  ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {",
  "background-position: -32px -17px;",
  "}",
  ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {",
  "background-position: 0 -17px;",
  "}",
  ".blocklyTreeSelected>.blocklyTreeIconOpen {",
  "background-position: -16px -17px;",
  "}",
  ".blocklyTreeIconNone,",
  ".blocklyTreeSelected>.blocklyTreeIconNone {",
  "background-position: -48px -1px;",
  "}",
  ".blocklyTreeLabel {",
  "cursor: default;",
  "font-family: sans-serif;",
  "font-size: 16px;",
  "padding: 0 3px;",
  "vertical-align: middle;",
  "}",
  ".blocklyToolboxDelete .blocklyTreeLabel {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyTreeSelected .blocklyTreeLabel {",
  "color: #fff;",
  "}",
  ".blocklyWidgetDiv .goog-palette {",
  "outline: none;",
  "cursor: default;",
  "}",
  ".blocklyWidgetDiv .goog-palette-table {",
  "border: 1px solid #666;",
  "border-collapse: collapse;",
  "}",
  ".blocklyWidgetDiv .goog-palette-cell {",
  "height: 13px;",
  "width: 15px;",
  "margin: 0;",
  "border: 0;",
  "text-align: center;",
  "vertical-align: middle;",
  "border-right: 1px solid #666;",
  "font-size: 1px;",
  "}",
  ".blocklyWidgetDiv .goog-palette-colorswatch {",
  "position: relative;",
  "height: 13px;",
  "width: 15px;",
  "border: 1px solid #666;",
  "}",
  ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {",
  "border: 1px solid #FFF;",
  "}",
  ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {",
  "border: 1px solid #000;",
  "color: #fff;",
  "}",
  ".blocklyWidgetDiv .goog-menu {",
  "background: #fff;",
  "border-color: #ccc #666 #666 #ccc;",
  "border-style: solid;",
  "border-width: 1px;",
  "cursor: default;",
  "font: normal 13px Arial, sans-serif;",
  "margin: 0;",
  "outline: none;",
  "padding: 4px 0;",
  "position: absolute;",
  "overflow-y: auto;",
  "overflow-x: hidden;",
  "max-height: 100%;",
  "z-index: 20000;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem {",
  "color: #000;",
  "font: normal 13px Arial, sans-serif;",
  "list-style: none;",
  "margin: 0;",
  "padding: 4px 7em 4px 28px;",
  "white-space: nowrap;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {",
  "padding-left: 7em;",
  "padding-right: 28px;",
  "}",
  ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,",
  ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {",
  "padding-left: 12px;",
  "}",
  ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {",
  "padding-right: 20px;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-content {",
  "color: #000;",
  "font: normal 13px Arial, sans-serif;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,",
  ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {",
  "color: #ccc !important;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {",
  "opacity: 0.3;",
  "filter: alpha(opacity=30);",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-highlight,",
  ".blocklyWidgetDiv .goog-menuitem-hover {",
  "background-color: #d6e9f8;",
  "border-color: #d6e9f8;",
  "border-style: dotted;",
  "border-width: 1px 0;",
  "padding-bottom: 3px;",
  "padding-top: 3px;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-checkbox,",
  ".blocklyWidgetDiv .goog-menuitem-icon {",
  "background-repeat: no-repeat;",
  "height: 16px;",
  "left: 6px;",
  "position: absolute;",
  "right: auto;",
  "vertical-align: middle;",
  "width: 16px;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,",
  ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {",
  "left: auto;",
  "right: 6px;",
  "}",
  ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,",
  ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {",
  "background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-accel {",
  "color: #999;",
  "direction: ltr;",
  "left: auto;",
  "padding: 0 6px;",
  "position: absolute;",
  "right: 0;",
  "text-align: right;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {",
  "left: 0;",
  "right: auto;",
  "text-align: left;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {",
  "text-decoration: underline;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {",
  "color: #999;",
  "font-size: 12px;",
  "padding-left: 4px;",
  "}",
  ".blocklyWidgetDiv .goog-menuseparator {",
  "border-top: 1px solid #ccc;",
  "margin: 4px 0;",
  "padding: 0;",
  "}",
  ""
];
A.H = {};
A.H.ca = null;
A.H.nj = null;
A.H.gh = null;
A.H.T = function() {
  A.H.ca ||
    ((A.H.ca = H("DIV", "blocklyWidgetDiv")),
    document.body.appendChild(A.H.ca));
};
A.H.show = function(a, b, c) {
  A.H.Ba();
  A.H.nj = a;
  A.H.gh = c;
  A.H.ca.style.top = Sf().y + "px";
  A.H.ca.style.direction = b ? "rtl" : "ltr";
  A.H.ca.style.display = "block";
};
A.H.Ba = function() {
  A.H.nj &&
    ((A.H.nj = null),
    (A.H.ca.style.display = "none"),
    (A.H.ca.style.left = ""),
    (A.H.ca.style.top = ""),
    A.H.gh && A.H.gh(),
    (A.H.gh = null),
    $d(A.H.ca));
};
A.H.V = function() {
  return !!A.H.nj;
};
A.H.Ri = function(a) {
  A.H.nj == a && A.H.Ba();
};
A.H.position = function(a, b, c, e, f) {
  b < e.y && (b = e.y);
  f ? a > c.width + e.x && (a = c.width + e.x) : a < e.x && (a = e.x);
  A.H.Er(a, b, c.height);
};
A.H.Er = function(a, b, c) {
  A.H.ca.style.left = a + "px";
  A.H.ca.style.top = b + "px";
  A.H.ca.style.height = c + "px";
};
A.H.Qn = function(a, b, c, e) {
  A.H.Er(A.H.Et(a, b, c, e), A.H.Ft(a, b, c), c.height);
};
A.H.Et = function(a, b, c, e) {
  if (e)
    return (
      (b = Math.max(b.right - c.width, a.left)), Math.min(b, a.right - c.width)
    );
  b = Math.min(b.left, a.right - c.width);
  return Math.max(b, a.left);
};
A.H.Ft = function(a, b, c) {
  return b.bottom + c.height >= a.bottom ? b.top - c.height : b.bottom;
};
function tl(a) {
  this.ni = a;
  this.T();
}
d = tl.prototype;
d.Na = null;
d.Od = null;
d.ni = null;
d.Af = 1;
d.Ej = null;
d.T = function() {
  this.Na ||
    ((this.Na = A.h.B(
      "svg",
      {
        xmlns: A.nc,
        "xmlns:html": A.Ue,
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        class: "blocklyBlockDragSurface"
      },
      this.ni
    )),
    (this.Od = A.h.B("g", {}, this.Na)));
};
function yf(a, b) {
  a.Od.appendChild(b);
  a.Na.style.display = "block";
  a.Ej = new F(0, 0);
}
d.Pe = function(a, b) {
  this.Ej = new F(a * this.Af, b * this.Af);
  a = this.Ej.x;
  b = this.Ej.y;
  a = a.toFixed(0);
  b = b.toFixed(0);
  this.Na.style.display = "block";
  A.h.uj(this.Na, "translate3d(" + a + "px, " + b + "px, 0px)");
};
d.Qk = function() {
  var a = A.h.bc(this.Na);
  return new F(a.x / this.Af, a.y / this.Af);
};
d.ac = function() {
  return this.Od;
};
d.ki = function(a) {
  a
    ? a.appendChild(this.Od.firstChild)
    : this.Od.removeChild(this.Od.firstChild);
  this.Na.style.display = "none";
  this.Ej = null;
};
A.kf = function(a, b) {
  A.Ht();
  q(a) && (a = document.getElementById(a) || document.querySelector(a));
  if (!be(document, a)) throw "Error: container is not in current document.";
  b = new Vf(b || {});
  var c = H("DIV", "injectionDiv");
  a.appendChild(c);
  a = A.pi(c, b);
  var e = new tl(c);
  c = new ug(c);
  b = A.Wt(a, b, e, c);
  A.iv(b);
  A.sf = b;
  A.Lg(b);
  return b;
};
A.pi = function(a, b) {
  a.setAttribute("dir", "LTR");
  Kh = b.u;
  A.Yc.kf(b.av, b.Dd);
  a = A.h.B(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:html": "http://www.w3.org/1999/xhtml",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      version: "1.1",
      class: "blocklySvg"
    },
    a
  );
  var c = A.h.B("defs", {}, a),
    e = String(Math.random()).substring(2),
    f = A.h.B("filter", { id: "blocklyEmbossFilter" + e }, c);
  A.h.B(
    "feGaussianBlur",
    { in: "SourceAlpha", stdDeviation: 1, result: "blur" },
    f
  );
  var h = A.h.B(
    "feSpecularLighting",
    {
      in: "blur",
      surfaceScale: 1,
      specularConstant: 0.5,
      specularExponent: 10,
      "lighting-color": "white",
      result: "specOut"
    },
    f
  );
  A.h.B("fePointLight", { x: -5e3, y: -1e4, z: 2e4 }, h);
  A.h.B(
    "feComposite",
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    f
  );
  A.h.B(
    "feComposite",
    {
      in: "SourceGraphic",
      in2: "specOut",
      operator: "arithmetic",
      k1: 0,
      k2: 1,
      k3: 1,
      k4: 0
    },
    f
  );
  b.oq = f.id;
  f = A.h.B(
    "pattern",
    {
      id: "blocklyDisabledPattern" + e,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10
    },
    c
  );
  A.h.B("rect", { width: 10, height: 10, fill: "#aaa" }, f);
  A.h.B("path", { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, f);
  b.xi = f.id;
  f = b.zq;
  c = A.h.B(
    "pattern",
    { id: "blocklyGridPattern" + e, patternUnits: "userSpaceOnUse" },
    c
  );
  0 < f.length && 0 < f.spacing
    ? (A.h.B("line", { stroke: f.colour }, c),
      1 < f.length && A.h.B("line", { stroke: f.colour }, c))
    : A.h.B("line", {}, c);
  b.Aq = c;
  return a;
};
A.Wt = function(a, b, c, e) {
  b.Nc = null;
  var f = new Eg(b, c, e);
  f.scale = b.Ib.fs;
  a.appendChild(f.T("blocklyMainBackground"));
  !b.Dq && b.ae && ((c = Jg(f, "svg")), A.h.Wi(c, a));
  f.translate(0, 0);
  A.sf = f;
  b.readOnly ||
    b.Gq ||
    f.oc(function() {
      if (!f.ob()) {
        var a = f.gb(),
          c = a.ib + a.Xa,
          e = a.me + a.eb;
        if (
          a.qc < e ||
          a.qc + a.Xb > a.Va + e ||
          a.Fc < (b.u ? a.ib : c) ||
          a.Fc + a.rc > (b.u ? a.va : a.va + c)
        )
          for (var m = I(f, !1), n = 0, p; (p = m[n]); n++) {
            var t = p.la(),
              w = p.vb(),
              v = e + 25 - w.height - t.y;
            0 < v && p.moveBy(0, v);
            v = e + a.Va - 25 - t.y;
            0 > v && p.moveBy(0, v);
            v = 25 + c - t.x - (b.u ? 0 : w.width);
            0 < v && p.moveBy(v, 0);
            t = c + a.va - 25 - t.x + (b.u ? w.width : 0);
            0 > t && p.moveBy(t, 0);
          }
      }
    });
  A.Lg(f);
  A.H.T();
  A.C.T();
  return f;
};
A.iv = function(a) {
  var b = a.options,
    c = M(a);
  A.J(c.parentNode, "contextmenu", null, function(a) {
    A.h.fl(a) || a.preventDefault();
  });
  c = A.J(window, "resize", null, function() {
    A.Cb(!0);
    A.Lg(a);
  });
  a.Fl = c;
  A.kf.xt();
  b.ae &&
    (a.Y
      ? a.Y.W(a)
      : a.G &&
        (a.G.W(a),
        a.G.show(b.ae.childNodes),
        a.G.io(),
        (a.scrollX = a.G.ba),
        b.wa == A.Jd && (a.scrollX *= -1),
        a.translate(a.scrollX, 0)));
  b.Gq && ((a.$a = new Xf(a)), a.$a.resize());
  b.bv && A.kf.wv(b.Dd, a);
};
A.kf.xt = function() {
  A.tu ||
    (A.J(document, "keydown", null, A.Qv),
    A.pc(document, "touchend", null, A.rf),
    A.pc(document, "touchcancel", null, A.rf),
    mb &&
      A.J(window, "orientationchange", document, function() {
        A.Lg(A.qh());
      }));
  A.tu = !0;
};
A.kf.wv = function(a, b) {
  function c() {
    for (; f.length; ) A.Ca(f.pop());
    e.preload();
  }
  var e = b.bd;
  e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
  e.load(
    [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"],
    "disconnect"
  );
  e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
  var f = [];
  f.push(A.J(document, "mousemove", null, c, !0));
  f.push(A.J(document, "touchstart", null, c, !0));
};
A.ps = function(a) {
  console.warn(
    "Deprecated call to Blockly.updateToolbox, use workspace.updateToolbox instead."
  );
  A.qh().ps(a);
};
A.sf = null;
A.selected = null;
A.Ak = [];
A.li = null;
A.kk = null;
A.uA = null;
A.Kq = function(a) {
  var b = A.Ks,
    c = 255 * A.Ls,
    e = 0,
    f = 0,
    h = 0;
  if (0 == b) h = f = e = c;
  else {
    var k = Math.floor(a / 60),
      l = a / 60 - k;
    a = c * (1 - b);
    var m = c * (1 - b * l);
    b = c * (1 - b * (1 - l));
    switch (k) {
      case 1:
        e = m;
        f = c;
        h = a;
        break;
      case 2:
        e = a;
        f = c;
        h = b;
        break;
      case 3:
        e = a;
        f = m;
        h = c;
        break;
      case 4:
        e = b;
        f = a;
        h = c;
        break;
      case 5:
        e = c;
        f = a;
        h = m;
        break;
      case 6:
      case 0:
        (e = c), (f = b), (h = a);
    }
  }
  return gj([Math.floor(e), Math.floor(f), Math.floor(h)]);
};
A.ks = function(a) {
  return { width: a.rp, height: a.pp };
};
A.MA = function(a) {
  xf(a);
};
A.Lg = function(a) {
  for (; a.options.Nc; ) a = a.options.Nc;
  var b = M(a),
    c = b.parentNode;
  if (c) {
    var e = c.offsetWidth;
    c = c.offsetHeight;
    b.rp != e && (b.setAttribute("width", e + "px"), (b.rp = e));
    b.pp != c && (b.setAttribute("height", c + "px"), (b.pp = c));
    a.resize();
  }
};
A.Qv = function(a) {
  if (!A.sf.options.readOnly && !A.h.fl(a)) {
    var b = !1;
    if (27 == a.keyCode) A.Cb();
    else if (8 == a.keyCode || 46 == a.keyCode) {
      a.preventDefault();
      if (A.sf.ob()) return;
      A.selected && A.selected.Ob() && (b = !0);
    } else if (a.altKey || a.ctrlKey || a.metaKey) {
      if (A.sf.ob()) return;
      A.selected &&
        A.selected.Ob() &&
        A.selected.$d() &&
        (67 == a.keyCode
          ? (A.Cb(), A.Am(A.selected))
          : 88 != a.keyCode || A.selected.s.De || (A.Am(A.selected), (b = !0)));
      86 == a.keyCode
        ? A.li && (A.i.O(!0), (a = A.kk), a.De && (a = a.Mg), Ng(a), A.i.O(!1))
        : 90 == a.keyCode && (A.Cb(), A.sf.Jo(a.shiftKey));
    }
    b &&
      !A.selected.s.De &&
      (A.i.O(!0), A.Cb(), A.selected.A(!0, !0), A.i.O(!1));
  }
};
A.Am = function(a) {
  if (a.Nq) var b = a.Ij();
  else {
    b = A.D.$e(a);
    A.D.mu(b);
    var c = a.la();
    b.setAttribute("x", a.u ? -c.x : c.x);
    b.setAttribute("y", c.y);
  }
  A.li = b;
  A.kk = a.s;
};
A.mq = function(a) {
  var b = A.li,
    c = A.kk;
  A.Am(a);
  Ng(a.s);
  A.li = b;
  A.kk = c;
};
A.JA = function(a) {
  A.h.fl(a) || a.preventDefault();
};
A.Cb = function(a) {
  A.C.Ba();
  A.H.Ba();
  a || ((a = A.qh()), a.Y && a.Y.G && a.Y.G.bh && a.Y.nd.Pc(null));
};
A.oc = function(a) {
  console.warn(
    "Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead."
  );
  return A.qh().oc(a);
};
A.qh = function() {
  return A.sf;
};
A.alert = function(a, b) {
  window.alert(a);
  b && b();
};
A.confirm = function(a, b) {
  b(window.confirm(a));
};
A.prompt = function(a, b, c) {
  c(window.prompt(a, b));
};
A.pv = function(a) {
  return function() {
    Dh(this, a);
  };
};
A.Em = function(a) {
  for (var b = 0; b < a.length; b++) {
    var c = a[b];
    if (c) {
      var e = c.type;
      null == e || "" === e
        ? console.warn(
            "Block definition #" +
              b +
              " in JSON array is missing a type attribute. Skipping."
          )
        : (A.Da[e] &&
            console.warn(
              "Block definition #" +
                b +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (A.Da[e] = { W: A.pv(c) }));
    } else
      console.warn(
        "Block definition #" + b + " in JSON array is " + c + ". Skipping."
      );
  }
};
A.J = function(a, b, c, e, f, h) {
  function k(a) {
    var b = !f;
    a = A.Touch.nw(a);
    for (var h = 0, k; (k = a[h]); h++)
      if (!b || A.Touch.yo(k)) A.Touch.kw(k), c ? e.call(c, k) : e(k), (l = !0);
  }
  var l = !1,
    m = [];
  if (g.PointerEvent && b in A.Touch.Kd)
    for (var n = 0, p; (p = A.Touch.Kd[b][n]); n++)
      a.addEventListener(p, k, !1), m.push([a, p, k]);
  else if ((a.addEventListener(b, k, !1), m.push([a, b, k]), b in A.Touch.Kd)) {
    var t = function(a) {
      k(a);
      var b = !h;
      l && b && a.preventDefault();
    };
    for (n = 0; (p = A.Touch.Kd[b][n]); n++)
      a.addEventListener(p, t, !1), m.push([a, p, t]);
  }
  return m;
};
A.pc = function(a, b, c, e) {
  function f(a) {
    c ? e.call(c, a) : e(a);
  }
  var h = [],
    k = g.window;
  if (k && k.PointerEvent && b in A.Touch.Kd) {
    k = 0;
    for (var l; (l = A.Touch.Kd[b][k]); k++)
      a.addEventListener(l, f, !1), h.push([a, l, f]);
  } else if (
    (a.addEventListener(b, f, !1), h.push([a, b, f]), b in A.Touch.Kd)
  ) {
    var m = function(a) {
      if (a.changedTouches && 1 == a.changedTouches.length) {
        var b = a.changedTouches[0];
        a.clientX = b.clientX;
        a.clientY = b.clientY;
      }
      f(a);
      a.preventDefault();
    };
    for (k = 0; (l = A.Touch.Kd[b][k]); k++)
      a.addEventListener(l, m, !1), h.push([a, l, m]);
  }
  return h;
};
A.Ca = function(a) {
  for (; a.length; ) {
    var b = a.pop();
    b[0].removeEventListener(b[1], b[2], !1);
  }
};
A.ov = function(a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
A.Ht = function() {
  A.Kb("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  A.Kb("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  A.Kb("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  A.Kb("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  A.Kb("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  A.Kb("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  A.Kb("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  A.Kb("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  A.Kb("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  A.Kb("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  A.Kb("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  A.Kb("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  A.Kb("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  A.Kb("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  A.Kb("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  A.Kb("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
A.Kb = function(a, b, c) {
  for (var e = "Blockly", f = A, h = 0; h < b.length; ++h)
    (e += "." + b[h]), f && (f = f[b[h]]);
  f &&
    f !== c &&
    ((a = (void 0 === c
      ? '%1 has been removed. Use Blockly.Msg["%2"].'
      : '%1 is deprecated and unused. Override Blockly.Msg["%2"].'
    )
      .replace("%1", e)
      .replace("%2", a)),
    console.warn(a));
};
g.console || (g.console = { log: function() {}, warn: function() {} });
g.Blockly || (g.Blockly = {});
g.Blockly.getMainWorkspace = A.qh;
g.Blockly.addChangeListener = A.oc;
A.Da.xv = {};
A.Ea = {};
A.Ea.Cc = {};
A.Ea.Cc.Ms = 210;
A.Em([
  {
    type: "logic_boolean",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "BOOL",
        options: [
          ["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
          ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]
        ]
      }
    ],
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}"
  },
  {
    type: "controls_if",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{ type: "input_statement", name: "DO0" }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOGIC_HUE}",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    mutator: "controls_if_mutator",
    extensions: ["controls_if_tooltip"]
  },
  {
    type: "controls_ifelse",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{ type: "input_statement", name: "DO0" }],
    message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
    args2: [{ type: "input_statement", name: "ELSE" }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    extensions: ["controls_if_tooltip"]
  },
  {
    type: "logic_compare",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["=", "EQ"],
          ["\u2260", "NEQ"],
          ["\u200f<", "LT"],
          ["\u200f\u2264", "LTE"],
          ["\u200f>", "GT"],
          ["\u200f\u2265", "GTE"]
        ]
      },
      { type: "input_value", name: "B" }
    ],
    inputsInline: !0,
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}",
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
    extensions: ["logic_compare", "logic_op_tooltip"]
  },
  {
    type: "logic_operation",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Boolean" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_LOGIC_OPERATION_AND}", "AND"],
          ["%{BKY_LOGIC_OPERATION_OR}", "OR"]
        ]
      },
      { type: "input_value", name: "B", check: "Boolean" }
    ],
    inputsInline: !0,
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}",
    helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}",
    extensions: ["logic_op_tooltip"]
  },
  {
    type: "logic_negate",
    message0: "%{BKY_LOGIC_NEGATE_TITLE}",
    args0: [{ type: "input_value", name: "BOOL", check: "Boolean" }],
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}"
  },
  {
    type: "logic_null",
    message0: "%{BKY_LOGIC_NULL}",
    output: null,
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_LOGIC_NULL_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NULL_HELPURL}"
  },
  {
    type: "logic_ternary",
    message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
    args0: [{ type: "input_value", name: "IF", check: "Boolean" }],
    message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
    args1: [{ type: "input_value", name: "THEN" }],
    message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
    args2: [{ type: "input_value", name: "ELSE" }],
    output: null,
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
    extensions: ["logic_ternary"]
  }
]);
A.Em([
  {
    type: "controls_if_if",
    message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}",
    nextStatement: null,
    enableContextMenu: !1,
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}"
  },
  {
    type: "controls_if_elseif",
    message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
    previousStatement: null,
    nextStatement: null,
    enableContextMenu: !1,
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}"
  },
  {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}"
  }
]);
A.Ea.Cc.im = {
  EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
  NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
  LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
  LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
  GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
  GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
  AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
  OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}"
};
A.S.register("logic_op_tooltip", A.S.op(A.Ea.Cc.im));
A.Ea.Cc.Bs = {
  Ic: 0,
  vd: 0,
  gc: function() {
    if (!this.Ic && !this.vd) return null;
    var a = document.createElement("mutation");
    this.Ic && a.setAttribute("elseif", this.Ic);
    this.vd && a.setAttribute("else", 1);
    return a;
  },
  ud: function(a) {
    this.Ic = parseInt(a.getAttribute("elseif"), 10) || 0;
    this.vd = parseInt(a.getAttribute("else"), 10) || 0;
    this.Nj();
  },
  ui: function(a) {
    var b = a.lj("controls_if_if");
    b.Ad();
    for (var c = b.K, e = 1; e <= this.Ic; e++) {
      var f = a.lj("controls_if_elseif");
      f.Ad();
      c.connect(f.X);
      c = f.K;
    }
    this.vd && ((a = a.lj("controls_if_else")), a.Ad(), c.connect(a.X));
    return b;
  },
  mi: function(a) {
    var b = L(a.K);
    this.vd = this.Ic = 0;
    a = [null];
    for (var c = [null], e = null; b; ) {
      switch (b.type) {
        case "controls_if_elseif":
          this.Ic++;
          a.push(b.Dw);
          c.push(b.Do);
          break;
        case "controls_if_else":
          this.vd++;
          e = b.Do;
          break;
        default:
          throw "Unknown block type.";
      }
      b = b.K && L(b.K);
    }
    this.Nj();
    for (b = 1; b <= this.Ic; b++)
      Wg(a[b], this, "IF" + b), Wg(c[b], this, "DO" + b);
    Wg(e, this, "ELSE");
  },
  ho: function(a) {
    a = L(a.K);
    for (var b = 1; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          var c = Be(this, "IF" + b),
            e = Be(this, "DO" + b);
          a.Dw = c && c.connection.Za;
          a.Do = e && e.connection.Za;
          b++;
          break;
        case "controls_if_else":
          e = Be(this, "ELSE");
          a.Do = e && e.connection.Za;
          break;
        default:
          throw "Unknown block type.";
      }
      a = a.K && L(a.K);
    }
  },
  Nj: function() {
    Be(this, "ELSE") && this.yg("ELSE");
    for (var a = 1; Be(this, "IF" + a); )
      this.yg("IF" + a), this.yg("DO" + a), a++;
    for (a = 1; a <= this.Ic; a++)
      wh(Ch(this, "IF" + a).hc("Boolean"), A.g.CONTROLS_IF_MSG_ELSEIF),
        wh(this.qd(A.Ma, "DO" + a), A.g.CONTROLS_IF_MSG_THEN);
    this.vd && wh(this.qd(A.Ma, "ELSE"), A.g.CONTROLS_IF_MSG_ELSE);
  }
};
A.S.Yn("controls_if_mutator", A.Ea.Cc.Bs, null, [
  "controls_if_elseif",
  "controls_if_else"
]);
A.Ea.Cc.Cs = function() {
  this.Qc(
    function() {
      if (this.Ic || this.vd) {
        if (!this.Ic && this.vd) return A.g.CONTROLS_IF_TOOLTIP_2;
        if (this.Ic && !this.vd) return A.g.CONTROLS_IF_TOOLTIP_3;
        if (this.Ic && this.vd) return A.g.CONTROLS_IF_TOOLTIP_4;
      } else return A.g.CONTROLS_IF_TOOLTIP_1;
      return "";
    }.bind(this)
  );
};
A.S.register("controls_if_tooltip", A.Ea.Cc.Cs);
A.Ea.Cc.Ts = {
  onchange: function(a) {
    this.oj || (this.oj = [null, null]);
    var b = Eh(this, "A"),
      c = Eh(this, "B");
    b &&
      c &&
      !Ke(b.L, c.L) &&
      (A.i.O(a.group),
      (a = this.oj[0]),
      a !== b && (Ae(b), a && !a.Ta && Be(this, "A").connection.connect(a.L)),
      (b = this.oj[1]),
      b !== c && (Ae(c), b && !b.Ta && Be(this, "B").connection.connect(b.L)),
      this.tb(),
      A.i.O(!1));
    this.oj[0] = Eh(this, "A");
    this.oj[1] = Eh(this, "B");
  }
};
A.Ea.Cc.Ss = function() {
  Xg(this, A.Ea.Cc.Ts);
};
A.S.register("logic_compare", A.Ea.Cc.Ss);
A.Ea.Cc.Us = {
  Fr: null,
  onchange: function(a) {
    var b = Eh(this, "THEN"),
      c = Eh(this, "ELSE"),
      e = this.L.Za;
    if ((b || c) && e)
      for (var f = 0; 2 > f; f++) {
        var h = 1 == f ? b : c;
        h &&
          !Ke(h.L, e) &&
          (A.i.O(a.group),
          e === this.Fr ? (Ae(this), e.w.tb()) : (Ae(h), h.tb()),
          A.i.O(!1));
      }
    this.Fr = e;
  }
};
A.S.ew();
A.Da.zv = {};
A.Ea.Math = {};
A.Ea.Math.Ms = 230;
A.Em([
  {
    type: "math_number",
    message0: "%1",
    args0: [{ type: "field_number", name: "NUM", value: 0 }],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
    tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "math_arithmetic",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Number" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
          ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
          ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
          ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
          ["%{BKY_MATH_POWER_SYMBOL}", "POWER"]
        ]
      },
      { type: "input_value", name: "B", check: "Number" }
    ],
    inputsInline: !0,
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"]
  },
  {
    type: "math_single",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"],
          ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"],
          ["-", "NEG"],
          ["ln", "LN"],
          ["log10", "LOG10"],
          ["e^", "EXP"],
          ["10^", "POW10"]
        ]
      },
      { type: "input_value", name: "NUM", check: "Number" }
    ],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
    extensions: ["math_op_tooltip"]
  },
  {
    type: "math_trig",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_TRIG_SIN}", "SIN"],
          ["%{BKY_MATH_TRIG_COS}", "COS"],
          ["%{BKY_MATH_TRIG_TAN}", "TAN"],
          ["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
          ["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
          ["%{BKY_MATH_TRIG_ATAN}", "ATAN"]
        ]
      },
      { type: "input_value", name: "NUM", check: "Number" }
    ],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_TRIG_HELPURL}",
    extensions: ["math_op_tooltip"]
  },
  {
    type: "math_constant",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "CONSTANT",
        options: [
          ["\u03c0", "PI"],
          ["e", "E"],
          ["\u03c6", "GOLDEN_RATIO"],
          ["sqrt(2)", "SQRT2"],
          ["sqrt(\u00bd)", "SQRT1_2"],
          ["\u221e", "INFINITY"]
        ]
      }
    ],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}"
  },
  {
    type: "math_number_property",
    message0: "%1 %2",
    args0: [
      { type: "input_value", name: "NUMBER_TO_CHECK", check: "Number" },
      {
        type: "field_dropdown",
        name: "PROPERTY",
        options: [
          ["%{BKY_MATH_IS_EVEN}", "EVEN"],
          ["%{BKY_MATH_IS_ODD}", "ODD"],
          ["%{BKY_MATH_IS_PRIME}", "PRIME"],
          ["%{BKY_MATH_IS_WHOLE}", "WHOLE"],
          ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"],
          ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"],
          ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"]
        ]
      }
    ],
    inputsInline: !0,
    output: "Boolean",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_IS_TOOLTIP}",
    mutator: "math_is_divisibleby_mutator"
  },
  {
    type: "math_change",
    message0: "%{BKY_MATH_CHANGE_TITLE}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}"
      },
      { type: "input_value", name: "DELTA", check: "Number" }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_VARIABLES_HUE}",
    helpUrl: "%{BKY_MATH_CHANGE_HELPURL}",
    extensions: ["math_change_tooltip"]
  },
  {
    type: "math_round",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
          ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
          ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"]
        ]
      },
      { type: "input_value", name: "NUM", check: "Number" }
    ],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}"
  },
  {
    type: "math_on_list",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"],
          ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"],
          ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}", "STD_DEV"],
          ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}", "RANDOM"]
        ]
      },
      { type: "input_value", name: "LIST", check: "Array" }
    ],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_ONLIST_HELPURL}",
    mutator: "math_modes_of_list_mutator",
    extensions: ["math_op_tooltip"]
  },
  {
    type: "math_modulo",
    message0: "%{BKY_MATH_MODULO_TITLE}",
    args0: [
      { type: "input_value", name: "DIVIDEND", check: "Number" },
      { type: "input_value", name: "DIVISOR", check: "Number" }
    ],
    inputsInline: !0,
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
    helpUrl: "%{BKY_MATH_MODULO_HELPURL}"
  },
  {
    type: "math_constrain",
    message0: "%{BKY_MATH_CONSTRAIN_TITLE}",
    args0: [
      { type: "input_value", name: "VALUE", check: "Number" },
      { type: "input_value", name: "LOW", check: "Number" },
      { type: "input_value", name: "HIGH", check: "Number" }
    ],
    inputsInline: !0,
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}"
  },
  {
    type: "math_random_int",
    message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
    args0: [
      { type: "input_value", name: "FROM", check: "Number" },
      { type: "input_value", name: "TO", check: "Number" }
    ],
    inputsInline: !0,
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}"
  },
  {
    type: "math_random_float",
    message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}"
  }
]);
A.Ea.Math.im = {
  ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
  MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
  MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
  DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
  POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
  ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
  ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
  NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
  LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
  LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
  EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
  POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
  SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
  COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
  TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
  ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
  ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
  ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
  SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
  MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
  MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
  AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
  MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
  MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
  STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
  RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}"
};
A.S.register("math_op_tooltip", A.S.op(A.Ea.Math.im));
A.Ea.Math.Ns = {
  gc: function() {
    var a = document.createElement("mutation"),
      b = "DIVISIBLE_BY" == G(this, "PROPERTY");
    a.setAttribute("divisor_input", b);
    return a;
  },
  ud: function(a) {
    a = "true" == a.getAttribute("divisor_input");
    this.Nj(a);
  },
  Nj: function(a) {
    var b = Be(this, "DIVISOR");
    a ? b || Ch(this, "DIVISOR").hc("Number") : b && this.yg("DIVISOR");
  }
};
A.Ea.Math.Os = function() {
  qh(xe(this, "PROPERTY"), function(a) {
    this.w.Nj("DIVISIBLE_BY" == a);
  });
};
A.S.Yn("math_is_divisibleby_mutator", A.Ea.Math.Ns, A.Ea.Math.Os);
A.S.register("math_change_tooltip", A.S.Dt());
A.Ea.Math.Rs = {
  qs: function(a) {
    "MODE" == a ? this.L.hc("Array") : this.L.hc("Number");
  },
  gc: function() {
    var a = document.createElement("mutation");
    a.setAttribute("op", G(this, "OP"));
    return a;
  },
  ud: function(a) {
    this.qs(a.getAttribute("op"));
  }
};
A.Ea.Math.Qs = function() {
  qh(
    xe(this, "OP"),
    function(a) {
      this.qs(a);
    }.bind(this)
  );
};
A.S.Yn("math_modes_of_list_mutator", A.Ea.Math.Rs, A.Ea.Math.Qs);
// Copyright 2012 Google Inc.  Apache License 2.0
A.m = new yh();
tk(
  "Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan"
);
A.m.ak = 0;
A.m.gz = 1.1;
A.m.ne = 1.2;
A.m.Dc = 2;
A.m.ez = 3;
A.m.az = 3;
A.m.Xy = 4.1;
A.m.iz = 4.2;
A.m.ci = 4.3;
A.m.am = 4.4;
A.m.hz = 4.5;
A.m.jz = 4.6;
A.m.bz = 4.7;
A.m.Vy = 4.8;
A.m.cz = 5;
A.m.cm = 5.1;
A.m.ck = 5.2;
A.m.bi = 5.3;
A.m.dm = 6.1;
A.m.Yg = 6.2;
A.m.Zy = 7;
A.m.Yo = 8;
A.m.dz = 8;
A.m.fz = 8;
A.m.Xo = 9;
A.m.Wy = 10;
A.m.$y = 11;
A.m.Yy = 12;
A.m.dk = 13;
A.m.bm = 14;
A.m.bk = 15;
A.m.Uy = 16;
A.m.kz = 17;
A.m.Ve = 18;
A.m.oe = 99;
A.m.ek = [
  [A.m.Dc, A.m.ne],
  [A.m.Dc, A.m.Dc],
  [A.m.ne, A.m.ne],
  [A.m.ne, A.m.Dc],
  [A.m.am, A.m.am],
  [A.m.cm, A.m.cm],
  [A.m.Yg, A.m.Yg],
  [A.m.dk, A.m.dk],
  [A.m.bm, A.m.bm]
];
A.m.W = function(a) {
  A.m.fh = Object.create(null);
  A.m.Um = Object.create(null);
  A.m.Of ? A.m.Of.reset() : (A.m.Of = new wk());
  A.m.Of.na = a.na;
  for (var b = [], c = A.I.qt(a), e = 0; e < c.length; e++)
    b.push(A.m.Of.getName(c[e], "DEVELOPER_VARIABLE"));
  a = A.I.kp(a);
  for (e = 0; e < a.length; e++) b.push(A.m.Of.getName(a[e].ha(), A.I.Sf));
  b.length && (A.m.fh.variables = "var " + b.join(", ") + ";");
};
A.m.finish = function(a) {
  var b = [],
    c;
  for (c in A.m.fh) b.push(A.m.fh[c]);
  delete A.m.fh;
  delete A.m.Um;
  A.m.Of.reset();
  return b.join("\n\n") + "\n\n\n" + a;
};
A.m.Qr = function(a) {
  return a + ";\n";
};
A.m.KA = function(a) {
  a = a
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\\n")
    .replace(/'/g, "\\'");
  return "'" + a + "'";
};
A.m.jo = function(a, b) {
  var c = "";
  if (!a.L || !a.L.Za) {
    var e = a.Ik();
    (e = A.h.vs(e, A.m.zs - 3)) &&
      (c = a.gg
        ? c + ("/**\n" + rk(e + "\n", " * ") + " */\n")
        : c + rk(e + "\n", "// "));
    for (var f = 0; f < a.Z.length; f++)
      if (a.Z[f].type == A.cb) {
        var h = L(a.Z[f].connection);
        if (h) {
          e = [];
          h = tc(h, !0);
          for (var k = 0; k < h.length; k++) {
            var l = h[k].Ik();
            l && e.push(l);
          }
          e.length && e.push("");
          (e = e.join("\n")) && (c += rk(e, "// "));
        }
      }
  }
  a = a.K && L(a.K);
  a = qk(A.m, a);
  return c + b + a;
};
A.m.DA = function(a, b, c, e, f) {
  c = c || 0;
  f = f || A.m.oe;
  a.s.options.Fh && c--;
  var h = a.s.options.Fh ? "1" : "0";
  a =
    0 < c
      ? T(a, b, A.m.Yg) || h
      : 0 > c
      ? T(a, b, A.m.dm) || h
      : e
      ? T(a, b, A.m.ci) || h
      : T(a, b, f) || h;
  if (A.ov(a)) (a = parseFloat(a) + c), e && (a = -a);
  else {
    if (0 < c) {
      a = a + " + " + c;
      var k = A.m.Yg;
    } else 0 > c && ((a = a + " - " + -c), (k = A.m.dm));
    e && ((a = c ? "-(" + a + ")" : "-" + a), (k = A.m.ci));
    k = Math.floor(k);
    f = Math.floor(f);
    k && f >= k && (a = "(" + a + ")");
  }
  return a;
};
A.m.xv = {};
A.m.controls_if = function(a) {
  var b = 0,
    c = "";
  do {
    var e = T(a, "IF" + b, A.m.oe) || "false";
    var f = sk(a, "DO" + b);
    c += (0 < b ? " else " : "") + "if (" + e + ") {\n" + f + "}";
    ++b;
  } while (Be(a, "IF" + b));
  Be(a, "ELSE") && ((f = sk(a, "ELSE")), (c += " else {\n" + f + "}"));
  return c + "\n";
};
A.m.controls_ifelse = A.m.controls_if;
A.m.logic_compare = function(a) {
  var b = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[
      G(a, "OP")
    ],
    c = "==" == b || "!=" == b ? A.m.Xo : A.m.Yo,
    e = T(a, "A", c) || "0";
  a = T(a, "B", c) || "0";
  return [e + " " + b + " " + a, c];
};
A.m.logic_operation = function(a) {
  var b = "AND" == G(a, "OP") ? "&&" : "||",
    c = "&&" == b ? A.m.dk : A.m.bm,
    e = T(a, "A", c);
  a = T(a, "B", c);
  if (e || a) {
    var f = "&&" == b ? "true" : "false";
    e || (e = f);
    a || (a = f);
  } else a = e = "false";
  return [e + " " + b + " " + a, c];
};
A.m.logic_negate = function(a) {
  var b = A.m.am;
  return ["!" + (T(a, "BOOL", b) || "true"), b];
};
A.m.logic_boolean = function(a) {
  return ["TRUE" == G(a, "BOOL") ? "true" : "false", A.m.ak];
};
A.m.logic_null = function() {
  return ["null", A.m.ak];
};
A.m.logic_ternary = function(a) {
  var b = T(a, "IF", A.m.bk) || "false",
    c = T(a, "THEN", A.m.bk) || "null";
  a = T(a, "ELSE", A.m.bk) || "null";
  return [b + " ? " + c + " : " + a, A.m.bk];
};
A.m.zv = {};
A.m.math_number = function(a) {
  a = parseFloat(G(a, "NUM"));
  return [a, 0 <= a ? A.m.ak : A.m.ci];
};
A.m.math_arithmetic = function(a) {
  var b = {
      ADD: [" + ", A.m.Yg],
      MINUS: [" - ", A.m.dm],
      MULTIPLY: [" * ", A.m.cm],
      DIVIDE: [" / ", A.m.ck],
      POWER: [null, A.m.Ve]
    }[G(a, "OP")],
    c = b[0];
  b = b[1];
  var e = T(a, "A", b) || "0";
  a = T(a, "B", b) || "0";
  return c ? [e + c + a, b] : ["Math.pow(" + e + ", " + a + ")", A.m.Dc];
};
A.m.math_single = function(a) {
  var b = G(a, "OP");
  if ("NEG" == b)
    return (
      (a = T(a, "NUM", A.m.ci) || "0"),
      "-" == a[0] && (a = " " + a),
      ["-" + a, A.m.ci]
    );
  a =
    "SIN" == b || "COS" == b || "TAN" == b
      ? T(a, "NUM", A.m.ck) || "0"
      : T(a, "NUM", A.m.oe) || "0";
  switch (b) {
    case "ABS":
      var c = "Math.abs(" + a + ")";
      break;
    case "ROOT":
      c = "Math.sqrt(" + a + ")";
      break;
    case "LN":
      c = "Math.log(" + a + ")";
      break;
    case "EXP":
      c = "Math.exp(" + a + ")";
      break;
    case "POW10":
      c = "Math.pow(10," + a + ")";
      break;
    case "ROUND":
      c = "Math.round(" + a + ")";
      break;
    case "ROUNDUP":
      c = "Math.ceil(" + a + ")";
      break;
    case "ROUNDDOWN":
      c = "Math.floor(" + a + ")";
      break;
    case "SIN":
      c = "Math.sin(" + a + " / 180 * Math.PI)";
      break;
    case "COS":
      c = "Math.cos(" + a + " / 180 * Math.PI)";
      break;
    case "TAN":
      c = "Math.tan(" + a + " / 180 * Math.PI)";
  }
  if (c) return [c, A.m.Dc];
  switch (b) {
    case "LOG10":
      c = "Math.log(" + a + ") / Math.log(10)";
      break;
    case "ASIN":
      c = "Math.asin(" + a + ") / Math.PI * 180";
      break;
    case "ACOS":
      c = "Math.acos(" + a + ") / Math.PI * 180";
      break;
    case "ATAN":
      c = "Math.atan(" + a + ") / Math.PI * 180";
      break;
    default:
      throw "Unknown math operator: " + b;
  }
  return [c, A.m.ck];
};
A.m.math_constant = function(a) {
  return {
    PI: ["Math.PI", A.m.ne],
    E: ["Math.E", A.m.ne],
    GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", A.m.ck],
    SQRT2: ["Math.SQRT2", A.m.ne],
    SQRT1_2: ["Math.SQRT1_2", A.m.ne],
    INFINITY: ["Infinity", A.m.ak]
  }[G(a, "CONSTANT")];
};
A.m.math_number_property = function(a) {
  var b = T(a, "NUMBER_TO_CHECK", A.m.bi) || "0",
    c = G(a, "PROPERTY");
  if ("PRIME" == c) {
    var e =
      uk("mathIsPrime", [
        "function " + A.m.Te + "(n) {",
        "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods",
        "  if (n == 2 || n == 3) {",
        "    return true;",
        "  }",
        "  // False if n is NaN, negative, is 1, or not whole.",
        "  // And false if n is divisible by 2 or 3.",
        "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {",
        "    return false;",
        "  }",
        "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
        "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {",
        "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {",
        "      return false;",
        "    }",
        "  }",
        "  return true;",
        "}"
      ]) +
      "(" +
      b +
      ")";
    return [e, A.m.Dc];
  }
  switch (c) {
    case "EVEN":
      e = b + " % 2 == 0";
      break;
    case "ODD":
      e = b + " % 2 == 1";
      break;
    case "WHOLE":
      e = b + " % 1 == 0";
      break;
    case "POSITIVE":
      e = b + " > 0";
      break;
    case "NEGATIVE":
      e = b + " < 0";
      break;
    case "DIVISIBLE_BY":
      (a = T(a, "DIVISOR", A.m.bi) || "0"), (e = b + " % " + a + " == 0");
  }
  return [e, A.m.Xo];
};
A.m.math_change = function(a) {
  var b = T(a, "DELTA", A.m.Yg) || "0";
  a = A.m.Of.getName(G(a, "VAR"), A.I.Sf);
  return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + b + ";\n";
};
A.m.math_round = A.m.math_single;
A.m.math_trig = A.m.math_single;
A.m.math_on_list = function(a) {
  var b = G(a, "OP");
  switch (b) {
    case "SUM":
      a = T(a, "LIST", A.m.ne) || "[]";
      a += ".reduce(function(x, y) {return x + y;})";
      break;
    case "MIN":
      a = T(a, "LIST", A.m.Ve) || "[]";
      a = "Math.min.apply(null, " + a + ")";
      break;
    case "MAX":
      a = T(a, "LIST", A.m.Ve) || "[]";
      a = "Math.max.apply(null, " + a + ")";
      break;
    case "AVERAGE":
      b = uk("mathMean", [
        "function " + A.m.Te + "(myList) {",
        "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;",
        "}"
      ]);
      a = T(a, "LIST", A.m.oe) || "[]";
      a = b + "(" + a + ")";
      break;
    case "MEDIAN":
      b = uk("mathMedian", [
        "function " + A.m.Te + "(myList) {",
        "  var localList = myList.filter(function (x) {return typeof x == 'number';});",
        "  if (!localList.length) return null;",
        "  localList.sort(function(a, b) {return b - a;});",
        "  if (localList.length % 2 == 0) {",
        "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;",
        "  } else {",
        "    return localList[(localList.length - 1) / 2];",
        "  }",
        "}"
      ]);
      a = T(a, "LIST", A.m.oe) || "[]";
      a = b + "(" + a + ")";
      break;
    case "MODE":
      b = uk("mathModes", [
        "function " + A.m.Te + "(values) {",
        "  var modes = [];",
        "  var counts = [];",
        "  var maxCount = 0;",
        "  for (var i = 0; i < values.length; i++) {",
        "    var value = values[i];",
        "    var found = false;",
        "    var thisCount;",
        "    for (var j = 0; j < counts.length; j++) {",
        "      if (counts[j][0] === value) {",
        "        thisCount = ++counts[j][1];",
        "        found = true;",
        "        break;",
        "      }",
        "    }",
        "    if (!found) {",
        "      counts.push([value, 1]);",
        "      thisCount = 1;",
        "    }",
        "    maxCount = Math.max(thisCount, maxCount);",
        "  }",
        "  for (var j = 0; j < counts.length; j++) {",
        "    if (counts[j][1] == maxCount) {",
        "        modes.push(counts[j][0]);",
        "    }",
        "  }",
        "  return modes;",
        "}"
      ]);
      a = T(a, "LIST", A.m.oe) || "[]";
      a = b + "(" + a + ")";
      break;
    case "STD_DEV":
      b = uk("mathStandardDeviation", [
        "function " + A.m.Te + "(numbers) {",
        "  var n = numbers.length;",
        "  if (!n) return null;",
        "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;",
        "  var variance = 0;",
        "  for (var j = 0; j < n; j++) {",
        "    variance += Math.pow(numbers[j] - mean, 2);",
        "  }",
        "  variance = variance / n;",
        "  return Math.sqrt(variance);",
        "}"
      ]);
      a = T(a, "LIST", A.m.oe) || "[]";
      a = b + "(" + a + ")";
      break;
    case "RANDOM":
      b = uk("mathRandomList", [
        "function " + A.m.Te + "(list) {",
        "  var x = Math.floor(Math.random() * list.length);",
        "  return list[x];",
        "}"
      ]);
      a = T(a, "LIST", A.m.oe) || "[]";
      a = b + "(" + a + ")";
      break;
    default:
      throw "Unknown operator: " + b;
  }
  return [a, A.m.Dc];
};
A.m.math_modulo = function(a) {
  var b = T(a, "DIVIDEND", A.m.bi) || "0";
  a = T(a, "DIVISOR", A.m.bi) || "0";
  return [b + " % " + a, A.m.bi];
};
A.m.math_constrain = function(a) {
  var b = T(a, "VALUE", A.m.Ve) || "0",
    c = T(a, "LOW", A.m.Ve) || "0";
  a = T(a, "HIGH", A.m.Ve) || "Infinity";
  return ["Math.min(Math.max(" + b + ", " + c + "), " + a + ")", A.m.Dc];
};
A.m.math_random_int = function(a) {
  var b = T(a, "FROM", A.m.Ve) || "0";
  a = T(a, "TO", A.m.Ve) || "0";
  return [
    uk("mathRandomInt", [
      "function " + A.m.Te + "(a, b) {",
      "  if (a > b) {",
      "    // Swap a and b to ensure a is smaller.",
      "    var c = a;",
      "    a = b;",
      "    b = c;",
      "  }",
      "  return Math.floor(Math.random() * (b - a + 1) + a);",
      "}"
    ]) +
      "(" +
      b +
      ", " +
      a +
      ")",
    A.m.Dc
  ];
};
A.m.math_random_float = function() {
  return ["Math.random()", A.m.Dc];
};
function ul(a, b) {
  var c = a.className;
  c = (q(c) && c.match(/\S+/g)) || [];
  for (var e = Da(arguments, 1), f = 0; f < e.length; f++)
    wa(c, e[f]) || c.push(e[f]);
  c = c.join(" ");
  a.className = c;
}
var vl = {
    ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
    be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
    "be-tarask": "Tara\u0161kievica",
    bg:
      "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
    bn: "\u09ac\u09be\u0982\u09b2\u09be",
    br: "Brezhoneg",
    cs: "\u010cesky",
    da: "Dansk",
    de: "Deutsch",
    el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
    en: "English",
    es: "Espa\u00f1ol",
    fa: "\u0641\u0627\u0631\u0633\u06cc",
    fi: "Suomi",
    fr: "Fran\u00e7ais",
    gl: "Galego",
    he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
    hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
    hu: "Magyar",
    id: "Bahasa Indonesia",
    is: "\u00cdslenska",
    it: "Italiano",
    ja: "\u65e5\u672c\u8a9e",
    kab: "Taqbaylit",
    ko: "\ud55c\uad6d\uc5b4",
    lt: "Lietuvi\u0173",
    lv: "Latvie\u0161u",
    ms: "Bahasa Melayu",
    my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
    nb: "Norsk Bokm\u00e5l",
    nl: "Nederlands, Vlaams",
    pl: "Polski",
    pms: "Piemont\u00e8is",
    pt: "Portugu\u00eas",
    "pt-br": "Portugu\u00eas Brasileiro",
    ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
    sc: "Sardu",
    sk: "Sloven\u010dina",
    sl: "Sloven\u0161\u010dina",
    sq: "Shqip",
    sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
    sv: "Svenska",
    th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
    tr: "T\u00fcrk\u00e7e",
    uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
    vi: "Ti\u1ebfng Vi\u1ec7t",
    "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
    "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
  },
  wl = "ace ar fa he mzn ps".split(" "),
  xl = window.BlocklyGamesLang,
  yl = window.BlocklyGamesLanguages,
  zl = !!window.location.pathname.match(/\.html$/),
  P = null,
  U,
  Al = Number,
  Bl,
  Cl = window.location.search.match(/[?&]level=([^&]+)/);
Bl = Cl ? decodeURIComponent(Cl[1].replace(/\+/g, "%20")) : "NaN";
var Dl = Al(Bl);
U = isNaN(Dl) ? 1 : Math.min(Math.max(1, Dl), 10);
function El() {
  document.title = document.getElementById("title").textContent;
  document.dir = -1 != wl.indexOf(xl) ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", xl);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var b = [], c = 0; c < yl.length; c++) {
      var e = yl[c];
      b.push([vl[e], e]);
    }
    b.sort(function(a, b) {
      return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
    });
    for (c = a.options.length = 0; c < b.length; c++) {
      var f = b[c];
      e = f[1];
      f = new Option(f[0], e);
      e == xl && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (c = 1; 10 >= c; c++)
    (a = document.getElementById("level" + c)),
      (b = !!Fl(c)),
      a && b && ul(a, "level_done");
  (c = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(Gl, 1);
}
function Fl(a) {
  var b = Hl;
  try {
    var c = window.localStorage[b + a];
  } catch (e) {}
  return c;
}
function Il(a) {
  var b;
  (b = document.getElementById(a))
    ? ((b = b.textContent), (b = b.replace(/\\n/g, "\n")))
    : (b = null);
  return null === b ? "[Unknown message: " + a + "]" : b;
}
function Jl(a, b) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", b, !0);
  a.addEventListener("touchend", b, !0);
}
function Gl() {
  if (!zl) {
    window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
    var a = function(b) {
      (a.q = a.q || []).push(arguments);
    };
    window.GoogleAnalyticsFunction = a;
    a.l = 1 * new Date();
    var b = document.createElement("script");
    b.async = 1;
    b.src = "//www.google-analytics.com/analytics.js";
    document.head.appendChild(b);
    a("create", "UA-50448074-1", "auto");
    a("send", "pageview");
  }
}
var Kl, V, Ll, Ml, Nl, Ol;
A.Da.bird_noWorm = {
  W: function() {
    Dh(this, {
      message0: Il("Bird_noWorm"),
      output: "Boolean",
      colour: 330,
      tooltip: Il("Bird_noWormTooltip")
    });
  }
};
A.m.bird_noWorm = function() {
  return ["noWorm()", A.m.Dc];
};
A.Da.bird_heading = {
  W: function() {
    this.Je(290);
    wh(wh(this.qd(A.od, ""), Il("Bird_heading")), new sj("90"), "ANGLE");
    this.zj(!0);
    this.Qc(Il("Bird_headingTooltip"));
  }
};
A.m.bird_heading = function(a) {
  return (
    "heading(" + parseFloat(G(a, "ANGLE")) + ", 'block_id_" + a.id + "');\n"
  );
};
A.Da.bird_position = {
  W: function() {
    Dh(this, {
      message0: "%1",
      args0: [
        {
          type: "field_dropdown",
          name: "XY",
          options: [["x", "X"], ["y", "Y"]]
        }
      ],
      output: "Number",
      colour: 330,
      tooltip: Il("Bird_positionTooltip")
    });
  }
};
A.m.bird_position = function(a) {
  return ["get" + G(a, "XY").charAt(0) + "()", A.m.Dc];
};
A.Da.bird_compare = {
  W: function() {
    this.Ce = A.g.LOGIC_COMPARE_HELPURL;
    this.Je(A.g.LOGIC_HUE);
    this.yj(!0, "Boolean");
    Ch(this, "A").hc("Number");
    wh(
      Ch(this, "B").hc("Number"),
      new Bh([["\u200f<", "LT"], ["\u200f>", "GT"]]),
      "OP"
    );
    this.Ef(!0);
    var a = this;
    this.Qc(function() {
      var b = G(a, "OP");
      return {
        LT: A.g.LOGIC_COMPARE_TOOLTIP_LT,
        GT: A.g.LOGIC_COMPARE_TOOLTIP_GT
      }[b];
    });
  }
};
A.m.bird_compare = function(a) {
  var b = "LT" == G(a, "OP") ? "<" : ">",
    c = A.m.Yo,
    e = T(a, "A", c) || "0";
  a = T(a, "B", c) || "0";
  return [e + " " + b + " " + a, c];
};
A.Da.bird_and = {
  W: function() {
    this.Ce = A.g.LOGIC_OPERATION_HELPURL;
    this.Je(A.g.LOGIC_HUE);
    this.yj(!0, "Boolean");
    Ch(this, "A").hc("Boolean");
    wh(Ch(this, "B").hc("Boolean"), A.g.LOGIC_OPERATION_AND);
    this.Ef(!0);
    this.Qc(A.g.LOGIC_OPERATION_TOOLTIP_AND);
  }
};
A.m.bird_and = function(a) {
  var b = A.m.dk,
    c = T(a, "A", b);
  a = T(a, "B", b);
  c || a ? (c || (c = "true"), a || (a = "true")) : (a = c = "false");
  return [c + " && " + a, b];
};
A.Da.bird_ifElse = {
  W: function() {
    this.Ce = A.g.CONTROLS_IF_HELPURL;
    this.Je(A.g.LOGIC_HUE);
    wh(Ch(this, "CONDITION"), A.g.CONTROLS_IF_MSG_IF).hc("Boolean");
    wh(this.qd(A.Ma, "DO"), A.g.CONTROLS_IF_MSG_THEN);
    wh(this.qd(A.Ma, "ELSE"), A.g.CONTROLS_IF_MSG_ELSE);
    this.vj(!1);
    this.Qc(A.g.CONTROLS_IF_TOOLTIP_2);
  }
};
A.m.bird_ifElse = function(a) {
  var b = T(a, "CONDITION", A.m.oe) || "false",
    c = sk(a, "DO");
  a = sk(a, "ELSE");
  return "if (" + b + ") {\n" + c + "} else {\n" + a + "}\n";
};
A.Da.controls_if.Hv = A.Da.controls_if.W;
A.Da.controls_if.W = function() {
  this.Hv();
  this.zj(!1);
  this.Jl(!1);
  this.vj(!1);
};
var Pl = {},
  Ql = {};
function Rl() {
  throw Error("Do not instantiate directly");
}
Rl.prototype.ym = null;
Rl.prototype.tc = function() {
  return this.content;
};
Rl.prototype.toString = function() {
  return this.content;
};
Rl.prototype.Sl = function() {
  if (this.zm === Ql) return Dd(this.toString());
  if (this.zm !== Pl)
    throw Error("Sanitized content was not of kind TEXT or HTML.");
  return Ed(this.toString(), this.ym || null);
};
function Sl(a) {
  if (null != a)
    switch (a.ym) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function Tl() {
  Rl.call(this);
}
z(Tl, Rl);
Tl.prototype.zm = Pl;
function Ul(a) {
  return null != a && a.zm === Pl
    ? a
    : Vl(String(String(a)).replace(Wl, Xl), Sl(a));
}
var Vl = (function(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, e) {
      var c = new b();
      c.content = String(a);
      void 0 !== e && (c.ym = e);
      return c;
    };
  })(Tl),
  Yl = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
  };
function Xl(a) {
  return Yl[a];
}
var Wl = /[\x00\x22\x26\x27\x3c\x3e]/g;
function Zl() {
  for (
    var a =
        '<nav style="width: 100%; margin-bottom:20px;"><a href="../index.html"><figure><img src="maze/logo.png"></figure></a><h1>BLOCK&#8217;S</h1><h1></h1></nav><div style="display: none"><span id="Games_name">Robgam Games</span><span id="Games_puzzle">Rompecabezas</span><span id="Games_maze">Laberinto</span><span id="Games_bird">P\u00e1jaro</span><span id="Games_turtle">Tortuga</span><span id="Games_movie">Pel\u00edcula</span><span id="Games_music">M\u00fasica</span><span id="Games_pondTutor">Tutor del estanque</span><span id="Games_pond">Estanque</span><span id="Games_genetics">Gen\u00e9tica</span><span id="Games_linesOfCode1">Resolviste este nivel con 1 l\u00ednea de JavaScript:</span><span id="Games_linesOfCode2">Resolviste este nivel con %1 l\u00edneas de JavaScript:</span><span id="Games_nextLevel">\u00bfEst\u00e1s listo/a para el nivel %1?</span><span id="Games_finalLevel">\u00bfEst\u00e1s listo/a para el siguiente desaf\u00edo?</span><span id="Games_submitTitle">T\u00edtulo:</span><span id="Games_linkTooltip">Guardar y enlazar a los bloques.</span><span id="Games_runTooltip">Ejecutar el programa que escribiste.</span><span id="Games_runProgram">Ejecutar el programa</span><span id="Games_resetTooltip">Detener el programa y restablecer el nivel.</span><span id="Games_resetProgram">Restablecer</span><span id="Games_help">Ayuda</span><span id="Games_dialogOk">Aceptar</span><span id="Games_dialogCancel">Cancelar</span><span id="Games_catLogic">L\u00f3gica</span><span id="Games_catLoops">Bucles</span><span id="Games_catMath">Matem\u00e1ticas</span><span id="Games_catText">Texto</span><span id="Games_catLists">Listas</span><span id="Games_catColour">Color</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Funciones</span><span id="Games_httpRequestError">Hubo un problema con la petici\u00f3n.</span><span id="Games_linkAlert">Comparte tus bloques con este enlace:\n\n%1</span><span id="Games_hashError">\u00ab%1\u00bb no corresponde con ning\u00fan programa guardado.</span><span id="Games_xmlError">No se pudo cargar el archivo guardado.  \u00bfQuiz\u00e1 fue creado con otra versi\u00f3n de Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">texto</span><span id="Games_breakLink">Una vez que comiences la edici\u00f3n de JavaScript, no podr\u00e1s volver a la edici\u00f3n de bloques. \u00bfEst\u00e1s seguro?</span><span id="Games_blocks">Bloques</div></div><div style="display: none"><span id="Bird_noWorm">no tiene gusano</span><span id="Bird_heading">rumbo</span><span id="Bird_noWormTooltip">La condici\u00f3n cuando el p\u00e1jaro no consigui\u00f3 el \\ngusano. </span><span id="Bird_headingTooltip">Mover en la direcci\u00f3n del \u00e1ngulo especificado: 0 \\nes a la derecha, 90 es hacia arriba, etc. </span><span id="Bird_positionTooltip">x e y marcan la posici\u00f3n del p\u00e1jaro. \\nCuando x = 0 el p\u00e1jaro est\u00e1 cerca del \\nborde izquierdo, cuando x = 100 est\u00e1 \\ncerca del derecho. Cuando y = 0 el \\np\u00e1jaro est\u00e1 en la parte inferior, cuando \\ny = 100 est\u00e1 en la parte superior. </span></div><table width="100%"><tr><td><h1>' +
        ('<div class="niveles"><span style="display:none;" id="title">' +
          (zl
            ? '<a style="display:none;" href="index.html?lang=' + Ul(xl) + '">'
            : '<a href="./?lang=' + Ul(xl) + '">') +
          "Robgam Game</a> : " +
          Ul({ appName: "P\u00e1jaro" }.appName) +
          "</span>"),
      b = " &nbsp; ",
      c = 1;
    11 > c;
    c++
  )
    b +=
      " " +
      (c == U
        ? '<span class="level_number level_done" id="level' +
          Ul(c) +
          '">' +
          Ul(c) +
          "</span>"
        : 10 == c
        ? '<a class="level_number" id="level' +
          Ul(c) +
          '" href="?lang=' +
          Ul(xl) +
          "&level=" +
          Ul(c) +
          Ul("") +
          '">' +
          Ul(c) +
          "</a>"
        : '<a class="level_dot" id="level' +
          Ul(c) +
          '" href="?lang=' +
          Ul(xl) +
          "&level=" +
          Ul(c) +
          Ul("") +
          '"></a>');
  return (
    a +
    b +
    '</h1></div></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Guardar y enlazar a los bloques."><img src="common/1x1.gif" class="link icon21"></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Ejecutar el programa que escribiste."><img src="common/1x1.gif" class="run icon21"> Ejecutar el programa</button><button id="resetButton" class="primary" style="display: none" title="Detener el programa y restablecer el nivel."><img src="common/1x1.gif" class="stop icon21"> Restablecer</button></td></tr></table>' +
    ('<xml id="toolbox" style="display: none;"><block type="bird_heading"></block>' +
      (2 <= U
        ? (4 == U || 5 == U
            ? '<block type="bird_noWorm" disabled="true"></block>'
            : '<block type="bird_noWorm"></block>') +
          (4 <= U
            ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">X</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' +
              (5 <= U
                ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">Y</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' +
                  (8 <= U ? '<block type="bird_and"></block>' : "")
                : "")
            : "")
        : "") +
      "</xml>") +
    '<div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u00a1Felicitaciones!</div><div id="dialogLinesText" style="font-size: large; margin: 1em; display:none;"></div><pre id="containerCode" style="display: none;"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancelar</button><button id="doneOk" class="secondary">Aceptar</button></div></div><div id="dialogAbort" class="dialogHiddenContent">Este nivel es extremadamente dif\u00edcil. \u00bfDeseas saltearlo e ir al siguiente nivel? Siempre puedes regresar m\u00e1s adelante.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancelar</button><button id="abortOk" class="secondary">Aceptar</button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div><div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Aceptar</button></div></div><div id="dialogHelp" class="dialogHiddenContent">' +
    (1 == U
      ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Cambia el \u00e1ngulo de rumbo para que el p\u00e1jaro consiga el gusano y aterrice en su nido.</td></tr></table>'
      : 2 == U
      ? '<table><tr><td><img src="common/help.png"></td><td>Usa este bloque para seguir un rumbo si tienes el gusano, u otro rumbo si no lo tienes.</td><td><img src="bird/help_up.png"></td></tr></table>'
      : 4 == U
      ? "<table><tr><td><img src=\"common/help.png\"></td><td>'x' es tu posici\u00f3n horizontal actual. Usa este bloque para seguir un rumbo si 'x' es menor a un n\u00famero, o un rumbo distinto de otro modo.</td><td><img src=\"bird/help_up.png\"></td></tr></table>"
      : 5 == U
      ? '<table><tr><td><img src="bird/help_up.png"></td><td>Pulsa en el icono para modificar el bloque \u00absi\u00bb.</td><td><img src="common/help.png"></td></tr></table>'
      : 6 == U
      ? "<table><tr><td><img src=\"bird/help_up.png\"></td><td>Este nivel necesita un bloque 'sino si' y uno 'sino'.</td><td><img src=\"common/help.png\"></td></tr></table>"
      : 8 == U
      ? '<table><tr><td><img src="bird/help_up.png"></td><td>El bloque \'y\' es cierto solo cuando ambas de sus entradas son ciertas.</td><td><img src="common/help.png"></td></tr></table>'
      : "") +
    "</div>" +
    (5 == U
      ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Arrastra un bloque \'sino\' dentro del bloque \'si\'.</td></tr></table></div>'
      : "")
  );
}
A.g.BA = {};
A.g.ADD_COMMENT = "A\u00f1adir comentario";
A.g.CANNOT_DELETE_VARIABLE_PROCEDURE =
  'No se puede eliminar la variable "%1" porque es parte de la definici\u00f3n de la funci\u00f3n "%2"';
A.g.CHANGE_VALUE_TITLE = "Cambiar el valor:";
A.g.CLEAN_UP = "Limpiar los bloques";
A.g.COLLAPSE_ALL = "Contraer bloques";
A.g.COLLAPSE_BLOCK = "Contraer bloque";
A.g.COLOUR_BLEND_COLOUR1 = "color 1";
A.g.COLOUR_BLEND_COLOUR2 = "color 2";
A.g.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";
A.g.COLOUR_BLEND_RATIO = "proporci\u00f3n";
A.g.COLOUR_BLEND_TITLE = "combinar";
A.g.COLOUR_BLEND_TOOLTIP =
  "Combina dos colores con una proporci\u00f3n determinada (0,0\u20131,0).";
A.g.COLOUR_PICKER_HELPURL = "https://es.wikipedia.org/wiki/Color";
A.g.COLOUR_PICKER_TOOLTIP = "Elige un color de la paleta.";
A.g.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
A.g.COLOUR_RANDOM_TITLE = "color aleatorio";
A.g.COLOUR_RANDOM_TOOLTIP = "Elige un color al azar.";
A.g.COLOUR_RGB_BLUE = "azul";
A.g.COLOUR_RGB_GREEN = "verde";
A.g.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";
A.g.COLOUR_RGB_RED = "rojo";
A.g.COLOUR_RGB_TITLE = "colorear con";
A.g.COLOUR_RGB_TOOLTIP =
  "Crea un color con cantidades espec\u00edficas de rojo, verde y azul. Todos los valores deben encontrarse entre 0 y 100.";
A.g.CONTROLS_FLOW_STATEMENTS_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
A.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "romper el bucle";
A.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE =
  "continuar con la siguiente iteraci\u00f3n del bucle";
A.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Romper el bucle que lo contiene.";
A.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE =
  "Saltar el resto de este bucle, y continuar con la siguiente iteraci\u00f3n.";
A.g.CONTROLS_FLOW_STATEMENTS_WARNING =
  "Atenci\u00f3n: este bloque puede usarse solamente dentro de un bucle.";
A.g.CONTROLS_FOREACH_HELPURL = "https://es.wikipedia.org/wiki/Foreach";
A.g.CONTROLS_FOREACH_TITLE = "para cada elemento %1 en la lista %2";
A.g.CONTROLS_FOREACH_TOOLTIP =
  "Para cada elemento en una lista, establecer la variable '%1' al elemento y luego hacer algunas declaraciones.";
A.g.CONTROLS_FOR_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#count-with";
A.g.CONTROLS_FOR_TITLE = "contar con %1 desde %2 hasta %3 de a %4";
A.g.CONTROLS_FOR_TOOLTIP =
  'Hacer que la variable "%1" tome los valores desde el n\u00famero de inicio hasta el n\u00famero final, contando con el intervalo especificado, y hacer los bloques especificados.';
A.g.CONTROLS_IF_ELSEIF_TOOLTIP = "Agregar una condici\u00f3n a este bloque.";
A.g.CONTROLS_IF_ELSE_TOOLTIP =
  "Agregar una condici\u00f3n general final a este bloque.";
A.g.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
A.g.CONTROLS_IF_IF_TOOLTIP =
  "Agregar, eliminar o reordenar las secciones para reconfigurar este bloque.";
A.g.CONTROLS_IF_MSG_ELSE = "sino";
A.g.CONTROLS_IF_MSG_ELSEIF = "sino si";
A.g.CONTROLS_IF_MSG_IF = "si";
A.g.CONTROLS_IF_TOOLTIP_1 =
  "Si un valor es verdadero, entonces hacer algunas declaraciones.";
A.g.CONTROLS_IF_TOOLTIP_2 =
  "Si un valor es verdadero, entonces hacer el primer bloque de declaraciones.  De lo contrario, hacer el segundo bloque de declaraciones.";
A.g.CONTROLS_IF_TOOLTIP_3 =
  "Si el primer valor es verdadero, entonces hacer el primer bloque de declaraciones. De lo contrario, si el segundo valor es verdadero, hacer el segundo bloque de declaraciones.";
A.g.CONTROLS_IF_TOOLTIP_4 =
  "Si el primer valor es verdadero, entonces hacer el primer bloque de declaraciones. De lo contrario, si el segundo valor es verdadero, hacer el segundo bloque de declaraciones. Si ninguno de los valores son verdaderos, hacer el \u00faltimo bloque de declaraciones.";
A.g.CONTROLS_REPEAT_HELPURL = "https://es.wikipedia.org/wiki/Bucle_for";
A.g.CONTROLS_REPEAT_INPUT_DO = "hacer";
A.g.CONTROLS_REPEAT_TITLE = "repetir %1 veces";
A.g.CONTROLS_REPEAT_TOOLTIP = "Hacer algunas declaraciones varias veces.";
A.g.CONTROLS_WHILEUNTIL_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#repeat";
A.g.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repetir hasta";
A.g.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repetir mientras";
A.g.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL =
  "Mientras un valor sea falso, entonces hacer algunas declaraciones.";
A.g.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE =
  "Mientras un valor sea verdadero, entonces hacer algunas declaraciones.";
A.g.DELETE_ALL_BLOCKS = "\u00bfEliminar todos los %1 bloques?";
A.g.DELETE_BLOCK = "Eliminar bloque";
A.g.DELETE_VARIABLE = 'Borrar la variable "%1"';
A.g.DELETE_VARIABLE_CONFIRMATION = '\u00bfBorrar %1 usos de la variable "%2"?';
A.g.DELETE_X_BLOCKS = "Eliminar %1 bloques";
A.g.DISABLE_BLOCK = "Desactivar bloque";
A.g.DUPLICATE_BLOCK = "Duplicar";
A.g.DUPLICATE_COMMENT = "Duplicar comentario";
A.g.ENABLE_BLOCK = "Activar bloque";
A.g.EXPAND_ALL = "Expandir bloques";
A.g.EXPAND_BLOCK = "Expandir bloque";
A.g.EXTERNAL_INPUTS = "Entradas externas";
A.g.HELP = "Ayuda";
A.g.INLINE_INPUTS = "Entradas en l\u00ednea";
A.g.IOS_CANCEL = "Cancelar";
A.g.IOS_ERROR = "Error";
A.g.IOS_OK = "Aceptar";
A.g.IOS_PROCEDURES_ADD_INPUT = "+ A\u00f1adir entrada";
A.g.IOS_PROCEDURES_ALLOW_STATEMENTS = "Permitir declaraciones";
A.g.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR =
  "Esta funci\u00f3n tiene entradas duplicadas.";
A.g.IOS_PROCEDURES_INPUTS = "ENTRADAS";
A.g.IOS_VARIABLES_ADD_BUTTON = "A\u00f1adir";
A.g.IOS_VARIABLES_ADD_VARIABLE = "+ A\u00f1adir variable";
A.g.IOS_VARIABLES_DELETE_BUTTON = "Borrar";
A.g.IOS_VARIABLES_EMPTY_NAME_ERROR =
  "No puedes usar un nombre de variable vac\u00edo.";
A.g.IOS_VARIABLES_RENAME_BUTTON = "Renombrar";
A.g.IOS_VARIABLES_VARIABLE_NAME = "Nombre de la variable";
A.g.LISTS_CREATE_EMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-empty-list";
A.g.LISTS_CREATE_EMPTY_TITLE = "crear lista vac\u00eda";
A.g.LISTS_CREATE_EMPTY_TOOLTIP =
  "Devuelve una lista, de longitud 0, sin ning\u00fan dato";
A.g.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "lista";
A.g.LISTS_CREATE_WITH_CONTAINER_TOOLTIP =
  "Agregar, eliminar o reorganizar las secciones para reconfigurar este bloque de lista.";
A.g.LISTS_CREATE_WITH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
A.g.LISTS_CREATE_WITH_INPUT_WITH = "crear lista con";
A.g.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Agregar un elemento a la lista.";
A.g.LISTS_CREATE_WITH_TOOLTIP =
  "Crear una lista con cualquier n\u00famero de elementos.";
A.g.LISTS_GET_INDEX_FIRST = "primero";
A.g.LISTS_GET_INDEX_FROM_END = "# del final";
A.g.LISTS_GET_INDEX_FROM_START = "#";
A.g.LISTS_GET_INDEX_GET = "obtener";
A.g.LISTS_GET_INDEX_GET_REMOVE = "obtener y eliminar";
A.g.LISTS_GET_INDEX_LAST = "\u00faltimo";
A.g.LISTS_GET_INDEX_RANDOM = "aleatorio";
A.g.LISTS_GET_INDEX_REMOVE = "eliminar";
A.g.LISTS_GET_INDEX_TAIL = "";
A.g.LISTS_GET_INDEX_TOOLTIP_GET_FIRST =
  "Devuelve el primer elemento de una lista.";
A.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM =
  "Devuelve el elemento en la posici\u00f3n especificada en una lista.";
A.g.LISTS_GET_INDEX_TOOLTIP_GET_LAST =
  "Devuelve el \u00faltimo elemento de una lista.";
A.g.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM =
  "Devuelve un elemento aleatorio en una lista.";
A.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST =
  "Elimina y devuelve el primer elemento de una lista.";
A.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM =
  "Elimina y devuelve el elemento en la posici\u00f3n especificada en una lista.";
A.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST =
  "Elimina y devuelve el \u00faltimo elemento de una lista.";
A.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM =
  "Elimina y devuelve un elemento aleatorio en una lista.";
A.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST =
  "Elimina el primer elemento de una lista.";
A.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM =
  "Elimina el elemento en la posici\u00f3n especificada en una lista.";
A.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST =
  "Elimina el \u00faltimo elemento de una lista.";
A.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM =
  "Elimina un elemento aleatorio en una lista.";
A.g.LISTS_GET_SUBLIST_END_FROM_END = "hasta # del final";
A.g.LISTS_GET_SUBLIST_END_FROM_START = "hasta #";
A.g.LISTS_GET_SUBLIST_END_LAST = "hasta el \u00faltimo";
A.g.LISTS_GET_SUBLIST_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
A.g.LISTS_GET_SUBLIST_START_FIRST = "obtener sublista desde el primero";
A.g.LISTS_GET_SUBLIST_START_FROM_END = "obtener sublista desde # del final";
A.g.LISTS_GET_SUBLIST_START_FROM_START = "obtener sublista desde #";
A.g.LISTS_GET_SUBLIST_TAIL = "";
A.g.LISTS_GET_SUBLIST_TOOLTIP =
  "Crea una copia de la parte especificada de una lista.";
A.g.LISTS_INDEX_FROM_END_TOOLTIP = "%1 es el \u00faltimo elemento.";
A.g.LISTS_INDEX_FROM_START_TOOLTIP = "%1 es el primer elemento.";
A.g.LISTS_INDEX_OF_FIRST = "encontrar la primera aparici\u00f3n del elemento";
A.g.LISTS_INDEX_OF_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
A.g.LISTS_INDEX_OF_LAST =
  "encontrar la \u00faltima aparici\u00f3n del elemento";
A.g.LISTS_INDEX_OF_TOOLTIP =
  "Devuelve el \u00edndice de la primera/\u00faltima aparici\u00f3n del elemento en la lista. Devuelve %1 si el elemento no se encuentra.";
A.g.LISTS_INLIST = "en la lista";
A.g.LISTS_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#is-empty";
A.g.LISTS_ISEMPTY_TITLE = "%1 est\u00e1 vac\u00eda";
A.g.LISTS_ISEMPTY_TOOLTIP =
  "Devuelve verdadero si la lista est\u00e1 vac\u00eda.";
A.g.LISTS_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#length-of";
A.g.LISTS_LENGTH_TITLE = "longitud de %1";
A.g.LISTS_LENGTH_TOOLTIP = "Devuelve la longitud de una lista.";
A.g.LISTS_REPEAT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
A.g.LISTS_REPEAT_TITLE = "crear lista con el elemento %1 repetido %2 veces";
A.g.LISTS_REPEAT_TOOLTIP =
  "Crea una lista que consta de un valor dado repetido el n\u00famero de veces especificado.";
A.g.LISTS_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
A.g.LISTS_REVERSE_MESSAGE0 = "invertir %1";
A.g.LISTS_REVERSE_TOOLTIP = "Invertir una copia de una lista.";
A.g.LISTS_SET_INDEX_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#in-list--set";
A.g.LISTS_SET_INDEX_INPUT_TO = "como";
A.g.LISTS_SET_INDEX_INSERT = "insertar en";
A.g.LISTS_SET_INDEX_SET = "establecer";
A.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST =
  "Inserta el elemento al inicio de una lista.";
A.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM =
  "Inserta el elemento en la posici\u00f3n especificada en una lista.";
A.g.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST =
  "A\u00f1ade el elemento al final de una lista.";
A.g.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM =
  "Inserta el elemento aleatoriamente en una lista.";
A.g.LISTS_SET_INDEX_TOOLTIP_SET_FIRST =
  "Establece el primer elemento de una lista.";
A.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM =
  "Establece el elemento en la posici\u00f3n especificada en una lista.";
A.g.LISTS_SET_INDEX_TOOLTIP_SET_LAST =
  "Establece el \u00faltimo elemento de una lista.";
A.g.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM =
  "Establece un elemento aleatorio en una lista.";
A.g.LISTS_SORT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
A.g.LISTS_SORT_ORDER_ASCENDING = "ascendente";
A.g.LISTS_SORT_ORDER_DESCENDING = "descendente";
A.g.LISTS_SORT_TITLE = "orden %1 %2 %3";
A.g.LISTS_SORT_TOOLTIP = "Ordenar una copia de una lista.";
A.g.LISTS_SORT_TYPE_IGNORECASE =
  "alfab\u00e9tico, ignorar may\u00fascula/min\u00fascula";
A.g.LISTS_SORT_TYPE_NUMERIC = "num\u00e9rico";
A.g.LISTS_SORT_TYPE_TEXT = "alfab\u00e9tico";
A.g.LISTS_SPLIT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
A.g.LISTS_SPLIT_LIST_FROM_TEXT = "hacer lista a partir de texto";
A.g.LISTS_SPLIT_TEXT_FROM_LIST = "hacer texto a partir de lista";
A.g.LISTS_SPLIT_TOOLTIP_JOIN =
  "Unir una lista de textos en un solo texto, separado por un delimitador.";
A.g.LISTS_SPLIT_TOOLTIP_SPLIT =
  "Dividir el texto en una lista de textos, separando en cada delimitador.";
A.g.LISTS_SPLIT_WITH_DELIMITER = "con delimitador";
A.g.LOGIC_BOOLEAN_FALSE = "falso";
A.g.LOGIC_BOOLEAN_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#values";
A.g.LOGIC_BOOLEAN_TOOLTIP = "Devuelve verdadero o falso.";
A.g.LOGIC_BOOLEAN_TRUE = "verdadero";
A.g.LOGIC_COMPARE_HELPURL =
  "https://es.wikipedia.org/wiki/Desigualdad_matem\u00e1tica";
A.g.LOGIC_COMPARE_TOOLTIP_EQ =
  "Devuelve verdadero si ambas entradas son iguales.";
A.g.LOGIC_COMPARE_TOOLTIP_GT =
  "Devuelve verdadero si la primera entrada es mayor que la segunda entrada.";
A.g.LOGIC_COMPARE_TOOLTIP_GTE =
  "Devuelve verdadero si la primera entrada es mayor o igual a la segunda entrada.";
A.g.LOGIC_COMPARE_TOOLTIP_LT =
  "Devuelve verdadero si la primera entrada es menor que la segunda entrada.";
A.g.LOGIC_COMPARE_TOOLTIP_LTE =
  "Devuelve verdadero si la primera entrada es menor que o igual a la segunda entrada.";
A.g.LOGIC_COMPARE_TOOLTIP_NEQ =
  "Devuelve verdadero si ambas entradas son distintas.";
A.g.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
A.g.LOGIC_NEGATE_TITLE = "no %1";
A.g.LOGIC_NEGATE_TOOLTIP =
  "Devuelve verdadero si la entrada es falsa. Devuelve falso si la entrada es verdadera.";
A.g.LOGIC_NULL = "nulo";
A.g.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
A.g.LOGIC_NULL_TOOLTIP = "Devuelve nulo.";
A.g.LOGIC_OPERATION_AND = "y";
A.g.LOGIC_OPERATION_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#logical-operations";
A.g.LOGIC_OPERATION_OR = "o";
A.g.LOGIC_OPERATION_TOOLTIP_AND =
  "Devuelve verdadero si ambas entradas son verdaderas.";
A.g.LOGIC_OPERATION_TOOLTIP_OR =
  "Devuelve verdadero si al menos una de las entradas es verdadera.";
A.g.LOGIC_TERNARY_CONDITION = "prueba";
A.g.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
A.g.LOGIC_TERNARY_IF_FALSE = "si es falso";
A.g.LOGIC_TERNARY_IF_TRUE = "si es verdadero";
A.g.LOGIC_TERNARY_TOOLTIP =
  'Comprueba la condici\u00f3n en "prueba". Si la condici\u00f3n es verdadera, devuelve el valor "si es verdadero"; de lo contrario, devuelve el valor "si es falso".';
A.g.MATH_ADDITION_SYMBOL = "+";
A.g.MATH_ARITHMETIC_HELPURL = "https://es.wikipedia.org/wiki/Aritm\u00e9tica";
A.g.MATH_ARITHMETIC_TOOLTIP_ADD = "Devuelve la suma de ambos n\u00fameros.";
A.g.MATH_ARITHMETIC_TOOLTIP_DIVIDE =
  "Devuelve el cociente de ambos n\u00fameros.";
A.g.MATH_ARITHMETIC_TOOLTIP_MINUS =
  "Devuelve la diferencia de ambos n\u00fameros.";
A.g.MATH_ARITHMETIC_TOOLTIP_MULTIPLY =
  "Devuelve el producto de ambos n\u00fameros.";
A.g.MATH_ARITHMETIC_TOOLTIP_POWER =
  "Devuelve el primer n\u00famero elevado a la potencia del segundo.";
A.g.MATH_CHANGE_HELPURL =
  "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
A.g.MATH_CHANGE_TITLE = "a\u00f1adir %2 a %1";
A.g.MATH_CHANGE_TOOLTIP =
  "A\u00f1adir un n\u00famero a la variable \u00ab%1\u00bb.";
A.g.MATH_CONSTANT_HELPURL =
  "https://es.wikipedia.org/wiki/Anexo:Constantes_matem\u00e1ticas";
A.g.MATH_CONSTANT_TOOLTIP =
  "Devuelve una de las constantes comunes: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026) o \u221e (infinito).";
A.g.MATH_CONSTRAIN_HELPURL =
  "https://en.wikipedia.org/wiki/Clamping_(graphics)";
A.g.MATH_CONSTRAIN_TITLE = "limitar %1 entre %2 y %3";
A.g.MATH_CONSTRAIN_TOOLTIP =
  "Limitar un n\u00famero entre los l\u00edmites especificados (inclusive).";
A.g.MATH_DIVISION_SYMBOL = "\u00f7";
A.g.MATH_IS_DIVISIBLE_BY = "es divisible por";
A.g.MATH_IS_EVEN = "es par";
A.g.MATH_IS_NEGATIVE = "es negativo";
A.g.MATH_IS_ODD = "es impar";
A.g.MATH_IS_POSITIVE = "es positivo";
A.g.MATH_IS_PRIME = "es primo";
A.g.MATH_IS_TOOLTIP =
  "Comprueba si un n\u00famero es par, impar, primo, entero, positivo, negativo, o si es divisible por un n\u00famero determinado. Devuelve verdadero o falso.";
A.g.MATH_IS_WHOLE = "es entero";
A.g.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
A.g.MATH_MODULO_TITLE = "resto de %1 \u00f7 %2";
A.g.MATH_MODULO_TOOLTIP = "Devuelve el resto al dividir los dos n\u00fameros.";
A.g.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
A.g.MATH_NUMBER_HELPURL = "https://es.wikipedia.org/wiki/N\u00famero";
A.g.MATH_NUMBER_TOOLTIP = "Un n\u00famero.";
A.g.MATH_ONLIST_HELPURL = "";
A.g.MATH_ONLIST_OPERATOR_AVERAGE = "promedio de la lista";
A.g.MATH_ONLIST_OPERATOR_MAX = "m\u00e1ximo de la lista";
A.g.MATH_ONLIST_OPERATOR_MEDIAN = "mediana de la lista";
A.g.MATH_ONLIST_OPERATOR_MIN = "m\u00ednimo de la lista";
A.g.MATH_ONLIST_OPERATOR_MODE = "modas de la lista";
A.g.MATH_ONLIST_OPERATOR_RANDOM = "elemento aleatorio de la lista";
A.g.MATH_ONLIST_OPERATOR_STD_DEV = "desviaci\u00f3n est\u00e1ndar de la lista";
A.g.MATH_ONLIST_OPERATOR_SUM = "suma de la lista";
A.g.MATH_ONLIST_TOOLTIP_AVERAGE =
  "Devuelve el promedio (media aritm\u00e9tica) de los valores num\u00e9ricos en la lista.";
A.g.MATH_ONLIST_TOOLTIP_MAX =
  "Devuelve el n\u00famero m\u00e1s grande en la lista.";
A.g.MATH_ONLIST_TOOLTIP_MEDIAN = "Devuelve la mediana en la lista.";
A.g.MATH_ONLIST_TOOLTIP_MIN =
  "Devuelve el n\u00famero m\u00e1s peque\u00f1o en la lista.";
A.g.MATH_ONLIST_TOOLTIP_MODE =
  "Devuelve una lista de los elementos m\u00e1s comunes en la lista.";
A.g.MATH_ONLIST_TOOLTIP_RANDOM = "Devuelve un elemento aleatorio de la lista.";
A.g.MATH_ONLIST_TOOLTIP_STD_DEV =
  "Devuelve la desviaci\u00f3n est\u00e1ndar de la lista.";
A.g.MATH_ONLIST_TOOLTIP_SUM =
  "Devuelve la suma de todos los n\u00fameros en la lista.";
A.g.MATH_POWER_SYMBOL = "^";
A.g.MATH_RANDOM_FLOAT_HELPURL =
  "https://es.wikipedia.org/wiki/Generador_de_n\u00fameros_aleatorios";
A.g.MATH_RANDOM_FLOAT_TITLE_RANDOM = "fracci\u00f3n aleatoria";
A.g.MATH_RANDOM_FLOAT_TOOLTIP =
  "Devuelve una fracci\u00f3n aleatoria entre 0,0 (ambos inclusive) y 1.0 (exclusivo).";
A.g.MATH_RANDOM_INT_HELPURL =
  "https://es.wikipedia.org/wiki/Generador_de_n\u00fameros_aleatorios";
A.g.MATH_RANDOM_INT_TITLE = "entero aleatorio de %1 a %2";
A.g.MATH_RANDOM_INT_TOOLTIP =
  "Devuelve un entero aleatorio entre los dos l\u00edmites especificados, inclusive.";
A.g.MATH_ROUND_HELPURL = "https://es.wikipedia.org/wiki/Redondeo";
A.g.MATH_ROUND_OPERATOR_ROUND = "redondear";
A.g.MATH_ROUND_OPERATOR_ROUNDDOWN = "redondear a la baja";
A.g.MATH_ROUND_OPERATOR_ROUNDUP = "redondear al alza";
A.g.MATH_ROUND_TOOLTIP = "Redondear un n\u00famero al alza o a la baja.";
A.g.MATH_SINGLE_HELPURL = "https://es.wikipedia.org/wiki/Ra%C3%ADz_cuadrada";
A.g.MATH_SINGLE_OP_ABSOLUTE = "absoluto";
A.g.MATH_SINGLE_OP_ROOT = "ra\u00edz cuadrada";
A.g.MATH_SINGLE_TOOLTIP_ABS = "Devuelve el valor absoluto de un n\u00famero.";
A.g.MATH_SINGLE_TOOLTIP_EXP = "Devuelve e a la potencia de un n\u00famero.";
A.g.MATH_SINGLE_TOOLTIP_LN = "Devuelve el logaritmo natural de un n\u00famero.";
A.g.MATH_SINGLE_TOOLTIP_LOG10 =
  "Devuelve el logaritmo base 10 de un n\u00famero.";
A.g.MATH_SINGLE_TOOLTIP_NEG = "Devuelve la negaci\u00f3n de un n\u00famero.";
A.g.MATH_SINGLE_TOOLTIP_POW10 = "Devuelve 10 a la potencia de un n\u00famero.";
A.g.MATH_SINGLE_TOOLTIP_ROOT =
  "Devuelve la ra\u00edz cuadrada de un n\u00famero.";
A.g.MATH_SUBTRACTION_SYMBOL = "-";
A.g.MATH_TRIG_ACOS = "acos";
A.g.MATH_TRIG_ASIN = "asin";
A.g.MATH_TRIG_ATAN = "atan";
A.g.MATH_TRIG_COS = "cos";
A.g.MATH_TRIG_HELPURL =
  "https://es.wikipedia.org/wiki/Funci\u00f3n_trigonom\u00e9trica";
A.g.MATH_TRIG_SIN = "sin";
A.g.MATH_TRIG_TAN = "tan";
A.g.MATH_TRIG_TOOLTIP_ACOS = "Devuelve el arcocoseno de un n\u00famero.";
A.g.MATH_TRIG_TOOLTIP_ASIN = "Devuelve el arcoseno de un n\u00famero.";
A.g.MATH_TRIG_TOOLTIP_ATAN = "Devuelve el arcotangente de un n\u00famero.";
A.g.MATH_TRIG_TOOLTIP_COS = "Devuelve el coseno de un grado (no radi\u00e1n).";
A.g.MATH_TRIG_TOOLTIP_SIN = "Devuelve el seno de un grado (no radi\u00e1n).";
A.g.MATH_TRIG_TOOLTIP_TAN =
  "Devuelve la tangente de un grado (no radi\u00e1n).";
A.g.NEW_COLOUR_VARIABLE = "Create colour variable...";
A.g.NEW_NUMBER_VARIABLE = "Create number variable...";
A.g.NEW_STRING_VARIABLE = "Create string variable...";
A.g.NEW_VARIABLE = "Crear variable\u2026";
A.g.NEW_VARIABLE_TITLE = "Nombre de variable nueva:";
A.g.NEW_VARIABLE_TYPE_TITLE = "New variable type:";
A.g.ORDINAL_NUMBER_SUFFIX = "";
A.g.PROCEDURES_ALLOW_STATEMENTS = "permitir declaraciones";
A.g.PROCEDURES_BEFORE_PARAMS = "con:";
A.g.PROCEDURES_CALLNORETURN_HELPURL = "https://es.wikipedia.org/wiki/Subrutina";
A.g.PROCEDURES_CALLNORETURN_TOOLTIP =
  "Ejecuta la funci\u00f3n definida por el usuario '%1'.";
A.g.PROCEDURES_CALLRETURN_HELPURL = "https://es.wikipedia.org/wiki/Subrutina";
A.g.PROCEDURES_CALLRETURN_TOOLTIP =
  "Ejecuta la funci\u00f3n definida por el usuario '%1' y usa su salida.";
A.g.PROCEDURES_CALL_BEFORE_PARAMS = "con:";
A.g.PROCEDURES_CREATE_DO = "Crear '%1'";
A.g.PROCEDURES_DEFNORETURN_COMMENT = "Describe esta funci\u00f3n...";
A.g.PROCEDURES_DEFNORETURN_DO = "";
A.g.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
A.g.PROCEDURES_DEFNORETURN_PROCEDURE = "hacer algo";
A.g.PROCEDURES_DEFNORETURN_TITLE = "para";
A.g.PROCEDURES_DEFNORETURN_TOOLTIP = "Crea una funci\u00f3n sin salida.";
A.g.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
A.g.PROCEDURES_DEFRETURN_RETURN = "devuelve";
A.g.PROCEDURES_DEFRETURN_TOOLTIP = "Crea una funci\u00f3n con una salida.";
A.g.PROCEDURES_DEF_DUPLICATE_WARNING =
  "Advertencia: Esta funci\u00f3n tiene par\u00e1metros duplicados.";
A.g.PROCEDURES_HIGHLIGHT_DEF = "Destacar definici\u00f3n de la funci\u00f3n";
A.g.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
A.g.PROCEDURES_IFRETURN_TOOLTIP =
  "Si un valor es verdadero, entonces devuelve un segundo valor.";
A.g.PROCEDURES_IFRETURN_WARNING =
  "Advertencia: Este bloque solo puede ser utilizado dentro de la definici\u00f3n de una funci\u00f3n.";
A.g.PROCEDURES_MUTATORARG_TITLE = "nombre de entrada:";
A.g.PROCEDURES_MUTATORARG_TOOLTIP =
  "A\u00f1adir una entrada a la funci\u00f3n.";
A.g.PROCEDURES_MUTATORCONTAINER_TITLE = "entradas";
A.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP =
  "A\u00f1adir, eliminar o reordenar entradas para esta funci\u00f3n.";
A.g.REDO = "Rehacer";
A.g.REMOVE_COMMENT = "Eliminar comentario";
A.g.RENAME_VARIABLE = "Renombrar la variable\u2026";
A.g.RENAME_VARIABLE_TITLE = "Renombrar todas las variables \u00ab%1\u00bb a:";
A.g.TEXT_APPEND_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-modification";
A.g.TEXT_APPEND_TITLE = "a %1 a\u00f1ade el texto %2";
A.g.TEXT_APPEND_TOOLTIP = "A\u00f1adir texto a la variable '%1'.";
A.g.TEXT_CHANGECASE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
A.g.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "a min\u00fasculas";
A.g.TEXT_CHANGECASE_OPERATOR_TITLECASE = "a May\u00fasculas Cada Palabra";
A.g.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "a MAY\u00daSCULAS";
A.g.TEXT_CHANGECASE_TOOLTIP =
  "Devuelve una copia del texto en un tama\u00f1o diferente.";
A.g.TEXT_CHARAT_FIRST = "obtener la primera letra";
A.g.TEXT_CHARAT_FROM_END = "obtener la letra # del final";
A.g.TEXT_CHARAT_FROM_START = "obtener la letra #";
A.g.TEXT_CHARAT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#extracting-text";
A.g.TEXT_CHARAT_LAST = "obtener la \u00faltima letra";
A.g.TEXT_CHARAT_RANDOM = "obtener letra aleatoria";
A.g.TEXT_CHARAT_TAIL = "";
A.g.TEXT_CHARAT_TITLE = "en el texto %1 %2";
A.g.TEXT_CHARAT_TOOLTIP = "Devuelve la letra en la posici\u00f3n especificada.";
A.g.TEXT_COUNT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#counting-substrings";
A.g.TEXT_COUNT_MESSAGE0 = "contar %1 en %2";
A.g.TEXT_COUNT_TOOLTIP = "Cuantas veces aparece un texto dentro de otro texto.";
A.g.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Agregar un elemento al texto.";
A.g.TEXT_CREATE_JOIN_TITLE_JOIN = "unir";
A.g.TEXT_CREATE_JOIN_TOOLTIP =
  "Agregar, eliminar o reordenar las secciones para reconfigurar este bloque de texto.";
A.g.TEXT_GET_SUBSTRING_END_FROM_END = "hasta la letra # del final";
A.g.TEXT_GET_SUBSTRING_END_FROM_START = "hasta la letra #";
A.g.TEXT_GET_SUBSTRING_END_LAST = "hasta la \u00faltima letra";
A.g.TEXT_GET_SUBSTRING_HELPURL =
  "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
A.g.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "en el texto";
A.g.TEXT_GET_SUBSTRING_START_FIRST = "obtener subcadena desde la primera letra";
A.g.TEXT_GET_SUBSTRING_START_FROM_END =
  "obtener subcadena desde la letra # del final";
A.g.TEXT_GET_SUBSTRING_START_FROM_START = "obtener subcadena desde la letra #";
A.g.TEXT_GET_SUBSTRING_TAIL = "";
A.g.TEXT_GET_SUBSTRING_TOOLTIP =
  "Devuelve una porci\u00f3n determinada del texto.";
A.g.TEXT_INDEXOF_HELPURL =
  "https://github.com/google/blockly/wiki/Text#finding-text";
A.g.TEXT_INDEXOF_OPERATOR_FIRST =
  "encontrar la primera aparici\u00f3n del texto";
A.g.TEXT_INDEXOF_OPERATOR_LAST =
  "encontrar la \u00faltima aparici\u00f3n del texto";
A.g.TEXT_INDEXOF_TITLE = "en el texto %1 %2 %3";
A.g.TEXT_INDEXOF_TOOLTIP =
  "Devuelve el \u00edndice de la primera/\u00faltima aparici\u00f3n del primer texto en el segundo texto. Devuelve %1 si el texto no se encuentra.";
A.g.TEXT_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
A.g.TEXT_ISEMPTY_TITLE = "%1 est\u00e1 vac\u00edo";
A.g.TEXT_ISEMPTY_TOOLTIP =
  "Devuelve verdadero si el texto proporcionado est\u00e1 vac\u00edo.";
A.g.TEXT_JOIN_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-creation";
A.g.TEXT_JOIN_TITLE_CREATEWITH = "crear texto con";
A.g.TEXT_JOIN_TOOLTIP =
  "Crear un fragmento de texto al unir cualquier n\u00famero de elementos.";
A.g.TEXT_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-modification";
A.g.TEXT_LENGTH_TITLE = "longitud de %1";
A.g.TEXT_LENGTH_TOOLTIP =
  "Devuelve el n\u00famero de letras (espacios incluidos) del texto proporcionado.";
A.g.TEXT_PRINT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#printing-text";
A.g.TEXT_PRINT_TITLE = "imprimir %1";
A.g.TEXT_PRINT_TOOLTIP =
  "Imprimir el texto, n\u00famero u otro valor especificado.";
A.g.TEXT_PROMPT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
A.g.TEXT_PROMPT_TOOLTIP_NUMBER = "Solicitar al usuario un n\u00famero.";
A.g.TEXT_PROMPT_TOOLTIP_TEXT = "Solicitar al usuario un texto.";
A.g.TEXT_PROMPT_TYPE_NUMBER = "solicitar n\u00famero con el mensaje";
A.g.TEXT_PROMPT_TYPE_TEXT = "solicitar texto con el mensaje";
A.g.TEXT_REPLACE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#replacing-substrings";
A.g.TEXT_REPLACE_MESSAGE0 = "reemplazar %1 con %2 en %3";
A.g.TEXT_REPLACE_TOOLTIP =
  "Reemplazar todas las veces que un texto dentro de otro texto.";
A.g.TEXT_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#reversing-text";
A.g.TEXT_REVERSE_MESSAGE0 = "invertir %1";
A.g.TEXT_REVERSE_TOOLTIP = "Invierte el orden de los caracteres en el texto.";
A.g.TEXT_TEXT_HELPURL = "https://es.wikipedia.org/wiki/Cadena_de_caracteres";
A.g.TEXT_TEXT_TOOLTIP = "Una letra, palabra o l\u00ednea de texto.";
A.g.TEXT_TRIM_HELPURL =
  "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
A.g.TEXT_TRIM_OPERATOR_BOTH = "quitar espacios de ambos lados de";
A.g.TEXT_TRIM_OPERATOR_LEFT = "quitar espacios iniciales de";
A.g.TEXT_TRIM_OPERATOR_RIGHT = "quitar espacios finales de";
A.g.TEXT_TRIM_TOOLTIP =
  "Devuelve una copia del texto sin los espacios de uno o ambos extremos.";
A.g.TODAY = "Hoy";
A.g.UNDO = "Deshacer";
A.g.VARIABLES_DEFAULT_NAME = "elemento";
A.g.VARIABLES_GET_CREATE_SET = "Crear 'establecer %1'";
A.g.VARIABLES_GET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#get";
A.g.VARIABLES_GET_TOOLTIP = "Devuelve el valor de esta variable.";
A.g.VARIABLES_SET = "establecer %1 a %2";
A.g.VARIABLES_SET_CREATE_GET = "Crear 'obtener %1'";
A.g.VARIABLES_SET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#set";
A.g.VARIABLES_SET_TOOLTIP =
  "Establece esta variable para que sea igual a la entrada.";
A.g.VARIABLE_ALREADY_EXISTS = 'Ya existe una variable llamada "%1".';
A.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE =
  "Ya existe una variable nombrada '%1' para otra variable del tipo: '%2'.";
A.g.WORKSPACE_COMMENT_DEFAULT_TEXT = "Di algo\u2026";
A.g.PROCEDURES_DEFRETURN_TITLE = A.g.PROCEDURES_DEFNORETURN_TITLE;
A.g.CONTROLS_IF_IF_TITLE_IF = A.g.CONTROLS_IF_MSG_IF;
A.g.CONTROLS_WHILEUNTIL_INPUT_DO = A.g.CONTROLS_REPEAT_INPUT_DO;
A.g.CONTROLS_IF_MSG_THEN = A.g.CONTROLS_REPEAT_INPUT_DO;
A.g.CONTROLS_IF_ELSE_TITLE_ELSE = A.g.CONTROLS_IF_MSG_ELSE;
A.g.PROCEDURES_DEFRETURN_PROCEDURE = A.g.PROCEDURES_DEFNORETURN_PROCEDURE;
A.g.LISTS_GET_SUBLIST_INPUT_IN_LIST = A.g.LISTS_INLIST;
A.g.LISTS_GET_INDEX_INPUT_IN_LIST = A.g.LISTS_INLIST;
A.g.MATH_CHANGE_TITLE_ITEM = A.g.VARIABLES_DEFAULT_NAME;
A.g.PROCEDURES_DEFRETURN_DO = A.g.PROCEDURES_DEFNORETURN_DO;
A.g.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = A.g.CONTROLS_IF_MSG_ELSEIF;
A.g.LISTS_GET_INDEX_HELPURL = A.g.LISTS_INDEX_OF_HELPURL;
A.g.CONTROLS_FOREACH_INPUT_DO = A.g.CONTROLS_REPEAT_INPUT_DO;
A.g.LISTS_SET_INDEX_INPUT_IN_LIST = A.g.LISTS_INLIST;
A.g.CONTROLS_FOR_INPUT_DO = A.g.CONTROLS_REPEAT_INPUT_DO;
A.g.LISTS_CREATE_WITH_ITEM_TITLE = A.g.VARIABLES_DEFAULT_NAME;
A.g.TEXT_APPEND_VARIABLE = A.g.VARIABLES_DEFAULT_NAME;
A.g.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = A.g.VARIABLES_DEFAULT_NAME;
A.g.LISTS_INDEX_OF_INPUT_IN_LIST = A.g.LISTS_INLIST;
A.g.PROCEDURES_DEFRETURN_COMMENT = A.g.PROCEDURES_DEFNORETURN_COMMENT;
A.g.MATH_HUE = "230";
A.g.LOOPS_HUE = "120";
A.g.LISTS_HUE = "260";
A.g.LOGIC_HUE = "210";
A.g.VARIABLES_HUE = "330";
A.g.TEXTS_HUE = "160";
A.g.PROCEDURES_HUE = "290";
A.g.COLOUR_HUE = "20";
A.g.VARIABLES_DYNAMIC_HUE = "310";
var X = {
  kh: null,
  W: function() {
    El();
    var a = document.getElementById("linkButton");
    "BlocklyStorage" in window
      ? ((BlocklyStorage.HTTPREQUEST_ERROR = Il("Games_httpRequestError")),
        (BlocklyStorage.LINK_ALERT = Il("Games_linkAlert")),
        (BlocklyStorage.HASH_ERROR = Il("Games_hashError")),
        (BlocklyStorage.XML_ERROR = Il("Games_xmlError")),
        (BlocklyStorage.alert = W.hs.bind(W, a)),
        a && Jl(a, BlocklyStorage.link))
      : a && (a.style.display = "none");
    (a = document.getElementById("languageMenu")) &&
      a.addEventListener("change", X.Gt, !0);
    A.Da && (A.Da.$s = !1);
    A.m && (A.m.$s = !1);
  },
  vv: function(a, b) {
    if ("BlocklyStorage" in window && 1 < window.location.hash.length)
      BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    else {
      var c = null;
      try {
        c = window.sessionStorage.Wq;
      } catch (h) {}
      c && delete window.sessionStorage.Wq;
      var e = Fl(U),
        f = b && Fl(U - 1);
      f && "function" == typeof b && (f = b(f));
      (a = c || e || f || a) && X.Sr(a);
    }
  },
  Sr: function(a) {
    X.kh
      ? X.kh.setValue(a, -1)
      : ((a = A.D.Sc(a)), P.clear(), A.D.ve(a, P), P.zp());
  },
  Xm: function() {
    if (X.kh) var a = X.kh.getValue();
    else {
      a = A.D.Ul(P, !0);
      if (1 == I(P, !1).length && a.querySelector) {
        var b = a.querySelector("block");
        b && (b.removeAttribute("x"), b.removeAttribute("y"));
      }
      a = A.D.Hc(a);
    }
    return a;
  },
  Li: function() {
    return P;
  },
  iw: function() {
    window.localStorage && (window.localStorage[Hl + U] = X.Xm());
  },
  Xk: function() {
    window.location = (zl ? "index.html" : "./") + "?lang=" + xl;
  },
  Gt: function() {
    if (window.sessionStorage) {
      if (X.kh) var a = X.kh.getValue();
      else (a = A.D.Ul(P)), (a = A.D.Hc(a));
      window.sessionStorage.Wq = a;
    }
    a = document.getElementById("languageMenu");
    a = encodeURIComponent(a.options[a.selectedIndex].value);
    var b = window.location.search;
    b =
      1 >= b.length
        ? "?lang=" + a
        : b.match(/[?&]lang=[^&]*/)
        ? b.replace(/([?&]lang=)[^&]*/, "$1" + a)
        : b.replace(/\?/, "?lang=" + a + "&");
    window.location =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      b;
  },
  Dn: function() {
    10 > U
      ? (window.location =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?lang=" +
          xl +
          "&level=" +
          (U + 1))
      : X.Xk();
  },
  Wk: function(a, b) {
    if (a) {
      var c = a.match(/^block_id_([^']+)$/);
      c && (a = c[1]);
    }
    Mg(a, b);
  },
  HA: function(a, b) {
    a = document.getElementById(a);
    a.firstChild ||
      ((a = A.kf(a, { rtl: -1 != wl.indexOf(xl), readOnly: !0 })),
      "string" != typeof b && (b = b.join("")),
      A.D.ve(A.D.Sc(b), a));
  },
  vw: function(a) {
    return a
      .replace(/(,\s*)?'block_id_[^']+'\)/g, ")")
      .replace(/[\s\xa0]+$/, "");
  },
  Pd: function(a) {
    if (
      ("click" == a.type &&
        "touchend" == X.Pd.Un &&
        X.Pd.Tn + 2e3 > Date.now()) ||
      (X.Pd.Un == a.type && X.Pd.Tn + 400 > Date.now())
    )
      return a.preventDefault(), a.stopPropagation(), !0;
    X.Pd.Un = a.type;
    X.Pd.Tn = Date.now();
    return !1;
  }
};
X.Pd.Un = null;
X.Pd.Tn = 0;
X.gv = function() {
  var a = document.createElement("script");
  a.setAttribute("type", "text/javascript");
  a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
  document.head.appendChild(a);
};
X.hv = function() {
  var a = document.createElement("link");
  a.setAttribute("rel", "stylesheet");
  a.setAttribute("type", "text/css");
  a.setAttribute("href", "common/prettify.css");
  document.head.appendChild(a);
  a = document.createElement("script");
  a.setAttribute("type", "text/javascript");
  a.setAttribute("src", "common/prettify.js");
  document.head.appendChild(a);
};
window.BlocklyInterface = X;
X.setCode = X.Sr;
X.getCode = X.Xm;
X.getWorkspace = X.Li;
var W = {
  ng: !1,
  eq: null,
  wk: null,
  Bj: function(a, b, c, e, f, h) {
    function k() {
      W.ng &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    W.ng && W.uc(!1);
    A.Cb(!0);
    W.ng = !0;
    W.eq = b;
    W.wk = h;
    var l = document.getElementById("dialog");
    h = document.getElementById("dialogShadow");
    var m = document.getElementById("dialogBorder"),
      n;
    for (n in f) l.style[n] = f[n];
    e &&
      ((h.style.visibility = "visible"),
      (h.style.opacity = 0.3),
      (h.style.zIndex = 9),
      (e = document.createElement("div")),
      (e.id = "dialogHeader"),
      l.appendChild(e),
      (W.Fm = A.pc(e, "mousedown", null, W.nu)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    c && b ? (W.ml(b, !1, 0.2), W.ml(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  fq: 0,
  gq: 0,
  nu: function(a) {
    W.Im();
    if (!A.h.nf(a)) {
      var b = document.getElementById("dialog");
      W.fq = b.offsetLeft - a.clientX;
      W.gq = b.offsetTop - a.clientY;
      W.Hm = A.pc(document, "mouseup", null, W.Im);
      W.Gm = A.pc(document, "mousemove", null, W.ou);
      a.stopPropagation();
    }
  },
  ou: function(a) {
    var b = document.getElementById("dialog"),
      c = W.fq + a.clientX;
    a = W.gq + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - b.offsetHeight);
    c = Math.max(c, 0);
    c = Math.min(c, window.innerWidth - b.offsetWidth);
    b.style.left = c + "px";
    b.style.top = a + "px";
  },
  Im: function() {
    W.Hm && (A.Ca(W.Hm), (W.Hm = null));
    W.Gm && (A.Ca(W.Gm), (W.Gm = null));
  },
  uc: function(a) {
    function b() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (W.ng) {
      W.Im();
      W.Fm && (A.Ca(W.Fm), (W.Fm = null));
      W.ng = !1;
      W.wk && W.wk();
      W.wk = null;
      var c = !1 === a ? null : W.eq;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      c && a ? (W.ml(a, !1, 0.8), W.ml(c, !0, 0.2), setTimeout(b, 175)) : b();
      a.style.visibility = "hidden";
      a.style.zIndex = -1;
      for (
        (c = document.getElementById("dialogHeader")) &&
        c.parentNode.removeChild(c);
        a.firstChild;

      )
        (c = a.firstChild),
          (c.className += " dialogHiddenContent"),
          document.body.appendChild(c);
    }
  },
  ml: function(a, b, c) {
    function e() {
      f.style.width = h.width + "px";
      f.style.height = h.height + "px";
      f.style.left = h.x + "px";
      f.style.top = h.y + "px";
      f.style.opacity = c;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        h = W.Fu(a);
      b
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  Fu: function(a) {
    var b = ch(a);
    b = { x: b.x, y: b.y };
    a.getBBox
      ? ((a = a.getBBox()), (b.height = a.height), (b.width = a.width))
      : ((b.height = a.offsetHeight), (b.width = a.offsetWidth));
    return b;
  },
  hs: function(a, b) {
    var c = document.getElementById("containerStorage");
    c.textContent = "";
    b = b.split("\n");
    for (var e = 0; e < b.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(b[e]));
      c.appendChild(f);
    }
    c = document.getElementById("dialogStorage");
    W.Bj(c, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, W.uw);
    W.ow();
  },
  ip: function() {
    if (!Fl(U))
      if (W.ng || P.ob()) setTimeout(W.ip, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          b = document.getElementById("abortCancel");
        b.addEventListener("click", W.uc, !0);
        b.addEventListener("touchend", W.uc, !0);
        b = document.getElementById("abortOk");
        b.addEventListener("click", X.Xk, !0);
        b.addEventListener("touchend", X.Xk, !0);
        W.Bj(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function() {
            document.body.removeEventListener("keydown", W.hp, !0);
          }
        );
        document.body.addEventListener("keydown", W.hp, !0);
      }
  },
  Wr: function() {
    document.getElementById("galleryXml").value = X.Xm();
    var a = document.getElementById("galleryDialog");
    if (!W.Wr.hw) {
      var b = document.getElementById("galleryCancel");
      b.addEventListener("click", W.uc, !0);
      b.addEventListener("touchend", W.uc, !0);
      b = document.getElementById("galleryOk");
      b.addEventListener("click", W.Vm, !0);
      b.addEventListener("touchend", W.Vm, !0);
      W.Wr.hw = !0;
    }
    b = document.getElementById("submitButton");
    W.Bj(a, b, !0, !0, { width: "40%", left: "30%", top: "3em" }, function() {
      document.body.removeEventListener("keydown", W.tq, !0);
    });
    document.body.addEventListener("keydown", W.tq, !0);
    setTimeout(function() {
      document.getElementById("galleryTitle").focus();
    }, 250);
  },
  Ut: function() {
    var a = document.getElementById("dialogDone");
    if (P) {
      var b = document.getElementById("dialogLinesText");
      b.textContent = "";
      var c = pk();
      c = X.vw(c);
      var e = c.replace(/\/\/[^\n]*/g, "");
      e = e.replace(/\/\*.*\*\//g, "");
      e = e.replace(/[ \t]+\n/g, "\n");
      e = e.replace(/\n+/g, "\n");
      e = e.trim();
      e = e.split("\n").length;
      var f = document.getElementById("containerCode");
      f.textContent = c;
      "function" == typeof prettyPrintOne &&
        ((c = f.innerHTML), (c = prettyPrintOne(c, "js")), (f.innerHTML = c));
      c =
        1 == e
          ? Il("Games_linesOfCode1")
          : Il("Games_linesOfCode2").replace("%1", String(e));
      b.appendChild(document.createTextNode(c));
    }
    c =
      10 > U
        ? Il("Games_nextLevel").replace("%1", String(U + 1))
        : Il("Games_finalLevel");
    b = document.getElementById("doneCancel");
    b.addEventListener("click", W.uc, !0);
    b.addEventListener("touchend", W.uc, !0);
    b = document.getElementById("doneOk");
    b.addEventListener("click", X.Dn, !0);
    b.addEventListener("touchend", X.Dn, !0);
    W.Bj(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function() {
        document.body.removeEventListener("keydown", W.Fp, !0);
      }
    );
    document.body.addEventListener("keydown", W.Fp, !0);
    document.getElementById("dialogDoneText").textContent = c;
  },
  cq: function(a) {
    !W.ng ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (W.uc(!0), a.stopPropagation(), a.preventDefault());
  },
  ow: function() {
    document.body.addEventListener("keydown", W.cq, !0);
  },
  uw: function() {
    document.body.removeEventListener("keydown", W.cq, !0);
  },
  Fp: function(a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      W.uc(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && X.Dn();
  },
  hp: function(a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      W.uc(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && X.Xk();
  },
  tq: function(a) {
    27 == a.keyCode ? W.uc(!0) : 13 == a.keyCode && W.Vm();
  },
  Vm: function() {
    var a = document.getElementById("galleryTitle");
    if (a.value.trim()) {
      a = document.getElementById("galleryForm");
      for (var b = [], c = 0, e; (e = a.elements[c]); c++)
        e.name &&
          (b[c] =
            encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
      var f = new XMLHttpRequest();
      f.open("POST", a.action);
      f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      f.onload = function() {
        if (4 == f.readyState) {
          var a =
            200 == f.status
              ? Il("Games_submitted")
              : Il("Games_httpRequestError") + "\nStatus: " + f.status;
          W.hs(null, a);
        }
      };
      f.send(b.join("&"));
      W.uc(!0);
    } else (a.value = ""), a.focus();
  }
};
window.BlocklyDialogs = W;
W.hideDialog = W.uc;
function Y(a, b, c, e) {
  this.Rj = a;
  this.Sj = b;
  this.x1 = c;
  this.y1 = e;
}
Y.prototype.clone = function() {
  return new Y(this.Rj, this.Sj, this.x1, this.y1);
};
var Hl = "bird",
  Z = [
    void 0,
    {
      start: new F(20, 20),
      ie: 90,
      Vb: new F(50, 50),
      Mc: new F(80, 80),
      Ub: []
    },
    {
      start: new F(20, 20),
      ie: 0,
      Vb: new F(80, 20),
      Mc: new F(80, 80),
      Ub: [new Y(0, 50, 60, 50)]
    },
    {
      start: new F(20, 70),
      ie: 270,
      Vb: new F(50, 20),
      Mc: new F(80, 70),
      Ub: [new Y(50, 50, 50, 100)]
    },
    {
      start: new F(20, 80),
      ie: 0,
      Vb: null,
      Mc: new F(80, 20),
      Ub: [new Y(0, 0, 65, 65)]
    },
    {
      start: new F(80, 80),
      ie: 270,
      Vb: null,
      Mc: new F(20, 20),
      Ub: [new Y(0, 100, 65, 35)]
    },
    {
      start: new F(20, 40),
      ie: 0,
      Vb: new F(80, 20),
      Mc: new F(20, 80),
      Ub: [new Y(0, 59, 50, 59)]
    },
    {
      start: new F(80, 80),
      ie: 180,
      Vb: new F(80, 20),
      Mc: new F(20, 20),
      Ub: [new Y(0, 70, 40, 70), new Y(70, 50, 100, 50)]
    },
    {
      start: new F(20, 25),
      ie: 90,
      Vb: new F(80, 25),
      Mc: new F(80, 75),
      Ub: [
        new Y(50, 0, 50, 25),
        new Y(75, 50, 100, 50),
        new Y(50, 100, 50, 75),
        new Y(0, 50, 25, 50)
      ]
    },
    {
      start: new F(80, 70),
      ie: 180,
      Vb: new F(20, 20),
      Mc: new F(80, 20),
      Ub: [new Y(0, 69, 31, 100), new Y(40, 50, 71, 0), new Y(80, 50, 100, 50)]
    },
    {
      start: new F(20, 20),
      ie: 90,
      Vb: new F(80, 50),
      Mc: new F(20, 20),
      Ub: [new Y(40, 60, 60, 60), new Y(40, 60, 60, 30), new Y(60, 30, 100, 30)]
    }
  ][U],
  $l = [],
  am = 1;
function bm() {
  var a = document.getElementById("svgBird");
  Z.Ub.push(new Y(-5, -5, -5, 105));
  Z.Ub.push(new Y(-5, 105, 105, 105));
  Z.Ub.push(new Y(105, 105, 105, -5));
  Z.Ub.push(new Y(105, -5, -5, -5));
  for (var b = 0; b < Z.Ub.length; b++) {
    var c = Z.Ub[b],
      e = document.createElementNS(A.nc, "line");
    e.setAttribute("x1", (c.Rj / 100) * 400);
    e.setAttribute("y1", 400 * (1 - c.Sj / 100));
    e.setAttribute("x2", (c.x1 / 100) * 400);
    e.setAttribute("y2", 400 * (1 - c.y1 / 100));
    e.setAttribute("stroke", "#CCB");
    e.setAttribute("stroke-width", 10);
    e.setAttribute("stroke-linecap", "round");
    a.appendChild(e);
  }
  b = document.createElementNS(A.nc, "image");
  b.setAttribute("id", "nest");
  b.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "bird/nest.png"
  );
  b.setAttribute("height", 100);
  b.setAttribute("width", 100);
  a.appendChild(b);
  Z.Vb &&
    ((b = document.createElementNS(A.nc, "image")),
    b.setAttribute("id", "worm"),
    b.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "bird/worm.png"
    ),
    b.setAttribute("height", 100),
    b.setAttribute("width", 100),
    a.appendChild(b));
  b = document.createElementNS(A.nc, "clipPath");
  b.setAttribute("id", "birdClipPath");
  c = document.createElementNS(A.nc, "rect");
  c.setAttribute("id", "clipRect");
  c.setAttribute("width", 120);
  c.setAttribute("height", 120);
  b.appendChild(c);
  a.appendChild(b);
  b = document.createElementNS(A.nc, "image");
  b.setAttribute("id", "bird");
  b.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "bird/birds-120.png"
  );
  b.setAttribute("height", 480);
  b.setAttribute("width", 1440);
  b.setAttribute("clip-path", "url(#birdClipPath)");
  a.appendChild(b);
  b = document.createElementNS(A.nc, "rect");
  b.setAttribute("class", "edges");
  b.setAttribute("width", 400);
  b.setAttribute("height", 400);
  a.appendChild(b);
  b = 3 < U;
  c = 4 < U;
  e = 1;
  for (var f = 0.1; 0.9 > f; f += 0.1) {
    if (b) {
      var h = document.createElementNS(A.nc, "line");
      h.setAttribute("class", "edges");
      h.setAttribute("x1", 400 * f);
      h.setAttribute("y1", 400);
      h.setAttribute("x2", 400 * f);
      h.setAttribute("y2", 400 - 9 * e);
      a.appendChild(h);
    }
    c &&
      ((h = document.createElementNS(A.nc, "line")),
      h.setAttribute("class", "edges"),
      h.setAttribute("x1", 0),
      h.setAttribute("y1", 400 * f),
      h.setAttribute("x2", 9 * e),
      h.setAttribute("y2", 400 * f),
      a.appendChild(h));
    2 == e &&
      (b &&
        ((h = document.createElementNS(A.nc, "text")),
        h.setAttribute("class", "edgeX"),
        h.setAttribute("x", 400 * f + 2),
        h.setAttribute("y", 396),
        h.appendChild(document.createTextNode(Math.round(100 * f))),
        a.appendChild(h)),
      c &&
        ((h = document.createElementNS(A.nc, "text")),
        h.setAttribute("class", "edgeY"),
        h.setAttribute("x", 3),
        h.setAttribute("y", 400 * f - 2),
        h.appendChild(document.createTextNode(Math.round(100 - 100 * f))),
        a.appendChild(h)));
    e = 1 == e ? 2 : 1;
  }
}
window.addEventListener("load", function() {
  function a() {
    c.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
    c.style.left = b ? "10px" : "420px";
    c.style.width = window.innerWidth - 440 + "px";
  }
  document.body.innerHTML = Zl();
  X.W();
  var b = -1 != wl.indexOf(xl),
    c = document.getElementById("blockly"),
    e = document.getElementById("visualization");
  window.addEventListener("scroll", function() {
    a(null);
    A.Lg(P);
  });
  window.addEventListener("resize", a);
  a(null);
  var f = document.getElementById("toolbox");
  P = A.kf("blockly", {
    media: "third-party/blockly/media/",
    rtl: b,
    toolbox: f,
    trashcan: !0
  });
  P.bd.load(["bird/quack.ogg", "bird/quack.mp3"], "quack");
  P.bd.load(["bird/whack.mp3", "bird/whack.ogg"], "whack");
  P.bd.load(["bird/worm.mp3", "bird/worm.ogg"], "worm");
  1 < U && P.oc(A.i.pu);
  tk("noWorm,heading,getX,getY");
  bm();
  f = "";
  f =
    1 == U
      ? '<xml>  <block type="bird_heading" x="70" y="70"></block></xml>'
      : 5 > U
      ? '<xml>  <block type="bird_ifElse" x="70" y="70"></block></xml>'
      : '<xml>  <block type="controls_if" x="70" y="70"></block></xml>';
  X.vv(f, !1);
  cm();
  Jl("runButton", dm);
  Jl("resetButton", em);
  setTimeout(function() {
    P.oc(function() {
      fm();
    });
    fm();
  }, 5e3);
  8 < U && setTimeout(W.ip, 3e5);
  setTimeout(X.gv, 1);
  setTimeout(X.hv, 1);
});
var gm = 0;
function fm() {
  if (!P.ob() && !Fl(U)) {
    var a = -1 != wl.indexOf(xl),
      b = A.D.Hc(A.D.Ul(P)),
      c = I(P.G.j, !0),
      e = document.getElementById("dialogHelp"),
      f = null,
      h = null;
    if (1 == U)
      (-1 == b.indexOf(">90<") && -1 != b.indexOf("bird_heading")) ||
        A.H.V() ||
        ((h = { width: "370px", top: "140px" }),
        (h[a ? "right" : "left"] = "215px"),
        (f = I(P, !0)),
        (f = f.length ? f[0].M() : c[0].M()));
    else if (2 == U)
      -1 == b.indexOf("bird_noWorm") &&
        ((h = { width: "350px", top: "170px" }),
        (h[a ? "right" : "left"] = "180px"),
        (f = c[1].M()));
    else if (4 == U)
      -1 == b.indexOf("bird_compare") &&
        ((h = { width: "350px", top: "230px" }),
        (h[a ? "right" : "left"] = "180px"),
        (f = c[2].M()));
    else if (5 == U) {
      if (
        (gm || (gm = setInterval(fm, 100)), -1 == b.indexOf("mutation else"))
      ) {
        f = I(P, !1);
        for (h = 0; (c = f[h]) && "controls_if" != c.type; h++);
        c.Bd.V()
          ? ((e = document.getElementById("dialogMutatorHelp")),
            (f = c.Bd.j.G.gj[1]),
            (b = ch(f)),
            (h = { width: "340px", top: b.y + 60 + "px" }),
            (h.left = b.x - (a ? 310 : 0) + "px"))
          : ((b = ch(c.M())),
            (h = { width: "340px", top: b.y + 100 + "px" }),
            (h.left = b.x - (a ? 350 : 0) + "px"),
            (f = c.M()));
      }
    } else if (6 == U) {
      if (-1 == b.indexOf("mutation")) {
        f = I(P, !1);
        for (h = 0; (c = f[h]) && "controls_if" != c.type; h++);
        b = ch(c.M());
        h = { width: "350px", top: b.y + 220 + "px" };
        h.left = b.x - (a ? 350 : 0) + "px";
        f = c.M();
      }
    } else
      8 == U &&
        -1 == b.indexOf("bird_and") &&
        ((h = { width: "350px", top: "360px" }),
        (h[a ? "right" : "left"] = "450px"),
        (f = c[4].M()));
    h
      ? e.parentNode != document.getElementById("dialog") &&
        W.Bj(e, f, !0, !1, h, null)
      : W.uc(!1);
  }
}
function cm() {
  for (var a = 0; a < $l.length; a++) window.clearTimeout($l[a]);
  $l = [];
  V = Z.start.clone();
  Ml = Ll = Z.ie;
  Nl = !Z.Vb;
  am = 1;
  hm();
  if ((a = document.getElementById("worm")))
    a.setAttribute("x", (Z.Vb.x / 100) * 400 - 50),
      a.setAttribute("y", 400 * (1 - Z.Vb.y / 100) - 50),
      (a.style.visibility = "visible");
  a = document.getElementById("nest");
  a.setAttribute("x", (Z.Mc.x / 100) * 400 - 50);
  a.setAttribute("y", 400 * (1 - Z.Mc.y / 100) - 50);
}
function dm(a) {
  if (!X.Pd(a)) {
    a = document.getElementById("runButton");
    var b = document.getElementById("resetButton");
    b.style.minWidth || (b.style.minWidth = a.offsetWidth + "px");
    a.style.display = "none";
    b.style.display = "inline";
    cm();
    im();
  }
}
function em(a) {
  X.Pd(a) ||
    ((document.getElementById("runButton").style.display = "inline"),
    (document.getElementById("resetButton").style.display = "none"),
    Mg(null),
    cm());
}
function jm(a, b) {
  a.setProperty(
    b,
    "heading",
    a.createNativeFunction(function(a, b) {
      var c = (a * Math.PI) / 180;
      V.x += Math.cos(c);
      V.y += Math.sin(c);
      Ll = a;
      Ol.push(["move", V.x, V.y, Ll, b]);
      if (Nl && 15 > pc(V, Z.Mc))
        throw (Ol.push(["play", "quack", null]),
        km(Z.Mc),
        Ol.push(["finish", null]),
        !0);
      !Nl &&
        Z.Vb &&
        15 > pc(V, Z.Vb) &&
        (km(Z.Vb),
        Ol.push(["worm", null]),
        Ol.push(["play", "worm", null]),
        (Nl = !0));
      a: {
        for (a = 0; (b = Z.Ub[a]); a++) {
          var e = V;
          e instanceof F ? ((c = e.y), (e = e.x)) : (c = void 0);
          var k = b.Rj,
            l = b.Sj;
          var m = b.x1 - b.Rj;
          var n = b.y1 - b.Sj;
          m = m * m + n * n;
          c = Math.min(
            Math.max(
              ((Number(e) - k) * (b.x1 - k) + (Number(c) - l) * (b.y1 - l)) / m,
              0
            ),
            1
          );
          e = b.Rj;
          e += c * (b.x1 - e);
          k = b.Sj;
          b = k + c * (b.y1 - k);
          if (6 > pc(new F(e, b), V)) {
            a = !0;
            break a;
          }
        }
        a = !1;
      }
      if (a) throw (Ol.push(["play", "whack", null]), !1);
    })
  );
  a.setProperty(
    b,
    "noWorm",
    a.createNativeFunction(function() {
      return !Nl;
    })
  );
  a.setProperty(
    b,
    "getX",
    a.createNativeFunction(function() {
      return V.x;
    })
  );
  a.setProperty(
    b,
    "getY",
    a.createNativeFunction(function() {
      return V.y;
    })
  );
}
function im() {
  if ("Interpreter" in window) {
    Ol = [];
    A.selected && A.selected.Lf();
    var a = pk(),
      b = a.indexOf("if ("),
      c = a.indexOf("}\n");
    -1 != b && -1 != c && (a = a.substring(b, c + 2));
    b = 0;
    a = new Interpreter("while(true) {\n" + a + "}", jm);
    try {
      for (c = 1e5; a.step(); ) if (0 >= c--) throw Infinity;
      b = -1;
    } catch (e) {
      Infinity === e
        ? (b = 2)
        : !0 === e
        ? (b = 1)
        : !1 === e
        ? (b = -2)
        : ((b = -2), window.alert(e));
    }
    Kl = 1 == b ? 10 : 15;
    cm();
    $l.push(setTimeout(lm, 1));
  } else setTimeout(im, 250);
}
function lm() {
  $l = [];
  var a = Ol.shift();
  a
    ? (X.Wk(a.pop()),
      "move" == a[0] || "goto" == a[0]
        ? ((V.x = a[1]),
          (V.y = a[2]),
          (Ll = a[3]),
          (am = "move" == a[0] ? 2 : 1),
          hm())
        : "worm" == a[0]
        ? (document.getElementById("worm").style.visibility = "hidden")
        : "finish" == a[0]
        ? ((am = 3), hm(), X.iw(), W.Ut())
        : "play" == a[0] && P.bd.play(a[1], 0.5),
      $l.push(setTimeout(lm, 5 * Kl)))
    : X.Wk(null);
}
function hm() {
  var a = nc(Ml) - nc(Ll);
  180 < a ? (a -= 360) : -180 >= a && (a = 360 + a);
  10 >= Math.abs(a)
    ? (Ml = Ll)
    : ((Ml -= 10 * (0 < a ? 1 : 0 > a ? -1 : a)), (Ml = nc(Ml)));
  var b = (14 - Math.round((Ml / 360) * 12)) % 12,
    c = Ml % 30;
  15 <= c && (c -= 30);
  c *= -1;
  if (1 == am) var e = 0;
  else if (3 == am) e = 3;
  else if (2 == am) e = Math.round(Date.now() / 100) % 3;
  else throw "Unknown pose.";
  a = (V.x / 100) * 400 - 60;
  var f = 400 * (1 - V.y / 100) - 60,
    h = document.getElementById("bird");
  h.setAttribute("x", a - 120 * b);
  h.setAttribute("y", f - 120 * e);
  h.setAttribute(
    "transform",
    "rotate(" + c + ", " + (a + 60) + ", " + (f + 60) + ")"
  );
  b = document.getElementById("clipRect");
  b.setAttribute("x", a);
  b.setAttribute("y", f);
}
function km(a) {
  var b = Math.round(pc(V, a));
  a = nc((180 * Math.atan2(a.y - V.y, a.x - V.x)) / Math.PI);
  for (var c = (a * Math.PI) / 180, e = 0; e < b; e++)
    (V.x += Math.cos(c)),
      (V.y += Math.sin(c)),
      Ol.push(["goto", V.x, V.y, a, null]);
}
