// Automatically generated file.  Do not edit!
var d,
  g = this;
function aa(a) {
  return void 0 !== a;
}
function p(a) {
  return "string" == typeof a;
}
function ba(a) {
  return "number" == typeof a;
}
function ca(a, b) {
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
function da() {}
function ea(a) {
  a.io = void 0;
  a.me = function() {
    return a.io ? a.io : (a.io = new a());
  };
}
function fa(a) {
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
function r(a) {
  return "array" == fa(a);
}
function ha(a) {
  var b = fa(a);
  return "array" == b || ("object" == b && "number" == typeof a.length);
}
function u(a) {
  return "function" == fa(a);
}
function ia(a) {
  var b = typeof a;
  return ("object" == b && null != a) || "function" == b;
}
function ja(a) {
  return a[ka] || (a[ka] = ++la);
}
var ka = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  la = 0;
function ma(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function na(a, b, c) {
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
function oa(a, b, c) {
  oa =
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? ma
      : na;
  return oa.apply(null, arguments);
}
function pa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
function v(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.s = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.JB = function(a, c, h) {
    for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++)
      e[f - 2] = arguments[f];
    return b.prototype[c].apply(a, e);
  };
}
// Copyright 2013 Google Inc.  Apache License 2.0
var w = {};
w.J = Object(null);
var qa;
var ra = Array.prototype.indexOf
    ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function(a, b) {
        if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  sa = Array.prototype.forEach
    ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c);
      }
    : function(a, b, c) {
        for (var e = a.length, f = p(a) ? a.split("") : a, h = 0; h < e; h++)
          h in f && b.call(c, f[h], h, a);
      },
  ta = Array.prototype.filter
    ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0);
      }
    : function(a, b) {
        for (
          var c = a.length, e = [], f = 0, h = p(a) ? a.split("") : a, k = 0;
          k < c;
          k++
        )
          if (k in h) {
            var l = h[k];
            b.call(void 0, l, k, a) && (e[f++] = l);
          }
        return e;
      },
  ua = Array.prototype.map
    ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c);
      }
    : function(a, b, c) {
        for (
          var e = a.length, f = Array(e), h = p(a) ? a.split("") : a, k = 0;
          k < e;
          k++
        )
          k in h && (f[k] = b.call(c, h[k], k, a));
        return f;
      },
  va = Array.prototype.every
    ? function(a, b) {
        return Array.prototype.every.call(a, b, void 0);
      }
    : function(a, b) {
        for (var c = a.length, e = p(a) ? a.split("") : a, f = 0; f < c; f++)
          if (f in e && !b.call(void 0, e[f], f, a)) return !1;
        return !0;
      };
function wa(a, b, c) {
  a: {
    for (var e = a.length, f = p(a) ? a.split("") : a, h = 0; h < e; h++)
      if (h in f && b.call(c, f[h], h, a)) {
        b = h;
        break a;
      }
    b = -1;
  }
  return 0 > b ? null : p(a) ? a.charAt(b) : a[b];
}
function xa(a, b) {
  return 0 <= ra(a, b);
}
function ya(a, b) {
  b = ra(a, b);
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
    if (ha(e)) {
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
  -1 != a.indexOf(">") && (a = a.replace(Na, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Oa, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Pa, "&#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Qa, "&#0;"));
  return a;
}
var Ka = /&/g,
  La = /</g,
  Na = />/g,
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
  var b = p(void 0)
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
var Ya;
a: {
  var Za = g.navigator;
  if (Za) {
    var $a = Za.userAgent;
    if ($a) {
      Ya = $a;
      break a;
    }
  }
  Ya = "";
}
function ab(a) {
  return -1 != Ya.indexOf(a);
}
function bb(a, b, c) {
  for (var e in a) b.call(c, a[e], e, a);
}
var cb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
  " "
);
function db(a, b) {
  for (var c, e, f = 1; f < arguments.length; f++) {
    e = arguments[f];
    for (c in e) a[c] = e[c];
    for (var h = 0; h < cb.length; h++)
      (c = cb[h]), Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
  }
}
function eb(a) {
  var b = arguments.length;
  if (1 == b && r(arguments[0])) return eb.apply(null, arguments[0]);
  for (var c = {}, e = 0; e < b; e++) c[arguments[e]] = !0;
  return c;
}
function fb(a) {
  fb[" "](a);
  return a;
}
fb[" "] = da;
function gb(a, b) {
  var c = hb;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
}
var ib = ab("Opera"),
  z = ab("Trident") || ab("MSIE"),
  jb = ab("Edge"),
  kb =
    ab("Gecko") &&
    !(-1 != Ya.toLowerCase().indexOf("webkit") && !ab("Edge")) &&
    !(ab("Trident") || ab("MSIE")) &&
    !ab("Edge"),
  A = -1 != Ya.toLowerCase().indexOf("webkit") && !ab("Edge"),
  lb = A && ab("Mobile"),
  mb = ab("Macintosh"),
  nb = ab("Android"),
  ob = ab("iPhone") && !ab("iPod") && !ab("iPad"),
  pb = ab("iPad");
function qb() {
  var a = g.document;
  return a ? a.documentMode : void 0;
}
var rb;
a: {
  var sb = "",
    tb = (function() {
      var a = Ya;
      if (kb) return /rv:([^\);]+)(\)|;)/.exec(a);
      if (jb) return /Edge\/([\d\.]+)/.exec(a);
      if (z) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (A) return /WebKit\/(\S+)/.exec(a);
      if (ib) return /(?:Version)[ \/]?(\S+)/.exec(a);
    })();
  tb && (sb = tb ? tb[1] : "");
  if (z) {
    var ub = qb();
    if (null != ub && ub > parseFloat(sb)) {
      rb = String(ub);
      break a;
    }
  }
  rb = sb;
}
var hb = {};
function vb(a) {
  return gb(a, function() {
    for (
      var b = 0,
        c = Ha(String(rb)).split("."),
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
var wb;
var xb = g.document;
wb =
  xb && z
    ? qb() || ("CSS1Compat" == xb.compatMode ? parseInt(rb, 10) : 5)
    : void 0;
var yb = !z || 9 <= Number(wb),
  zb = !z || 9 <= Number(wb),
  Ab = z && !vb("9"),
  Bb =
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
  Cb = "PointerEvent" in g,
  Db =
    "MSPointerEvent" in g && !(!g.navigator || !g.navigator.msPointerEnabled),
  Eb = (function() {
    if (!g.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function() {
          a = !0;
        }
      });
    g.addEventListener("test", da, b);
    g.removeEventListener("test", da, b);
    return a;
  })();
function Fb() {
  0 != Gb && (Hb[ja(this)] = this);
  this.Oh = this.Oh;
  this.cf = this.cf;
}
var Gb = 0,
  Hb = {};
Fb.prototype.Oh = !1;
Fb.prototype.A = function() {
  if (!this.Oh && ((this.Oh = !0), this.Ua(), 0 != Gb)) {
    var a = ja(this);
    if (0 != Gb && this.cf && 0 < this.cf.length)
      throw Error(
        this +
          " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
      );
    delete Hb[a];
  }
};
function Ib(a, b) {
  a.Oh
    ? aa(void 0)
      ? b.call(void 0)
      : b()
    : (a.cf || (a.cf = []), a.cf.push(aa(void 0) ? oa(b, void 0) : b));
}
Fb.prototype.Ua = function() {
  if (this.cf) for (; this.cf.length; ) this.cf.shift()();
};
function Jb(a) {
  a && "function" == typeof a.A && a.A();
}
function Kb(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Yg = !1;
  this.Xs = !0;
}
Kb.prototype.stopPropagation = function() {
  this.Yg = !0;
};
Kb.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Xs = !1;
};
function Lb(a) {
  return A ? "webkit" + a : ib ? "o" + a.toLowerCase() : a.toLowerCase();
}
var Mb = {
    Gy: "click",
    ZA: "rightclick",
    Qy: "dblclick",
    Bh: "mousedown",
    Ch: "mouseup",
    Ni: "mouseover",
    Mi: "mouseout",
    lu: "mousemove",
    ju: "mouseenter",
    ku: "mouseleave",
    Ah: "mousecancel",
    dB: "selectionchange",
    eB: "selectstart",
    FB: "wheel",
    Fz: "keypress",
    Ez: "keydown",
    Gz: "keyup",
    Dy: "blur",
    vz: "focus",
    Ry: "deactivate",
    wz: "focusin",
    xz: "focusout",
    yh: "change",
    WA: "reset",
    cB: "select",
    mB: "submit",
    Cz: "input",
    SA: "propertychange",
    hz: "dragstart",
    cz: "drag",
    ez: "dragenter",
    gz: "dragover",
    fz: "dragleave",
    mz: "drop",
    dz: "dragend",
    uB: "touchstart",
    tB: "touchmove",
    sB: "touchend",
    rB: "touchcancel",
    Ay: "beforeunload",
    Ly: "consolemessage",
    My: "contextmenu",
    Sy: "devicechange",
    Ty: "devicemotion",
    Uy: "deviceorientation",
    Xy: "DOMContentLoaded",
    rz: "error",
    Bz: "help",
    Hz: "load",
    Pz: "losecapture",
    CA: "orientationchange",
    UA: "readystatechange",
    XA: "resize",
    $A: "scroll",
    wB: "unload",
    Ey: "canplay",
    Fy: "canplaythrough",
    oz: "durationchange",
    pz: "emptied",
    qz: "ended",
    Kz: "loadeddata",
    Lz: "loadedmetadata",
    GA: "pause",
    HA: "play",
    IA: "playing",
    TA: "ratechange",
    aB: "seeked",
    bB: "seeking",
    jB: "stalled",
    nB: "suspend",
    qB: "timeupdate",
    DB: "volumechange",
    EB: "waiting",
    iB: "sourceopen",
    hB: "sourceended",
    gB: "sourceclosed",
    ky: "abort",
    yB: "update",
    BB: "updatestart",
    zB: "updateend",
    Az: "hashchange",
    DA: "pagehide",
    EA: "pageshow",
    RA: "popstate",
    Oy: "copy",
    FA: "paste",
    Py: "cut",
    uy: "beforecopy",
    vy: "beforecut",
    yy: "beforepaste",
    kA: "online",
    jA: "offline",
    Rz: "message",
    Ky: "connect",
    Dz: "install",
    ly: "activate",
    uz: "fetch",
    yz: "foreignfetch",
    Sz: "messageerror",
    kB: "statechange",
    AB: "updatefound",
    Ny: "controllerchange",
    sy: Lb("AnimationStart"),
    py: Lb("AnimationEnd"),
    qy: Lb("AnimationIteration"),
    vB: Lb("TransitionEnd"),
    KA: "pointerdown",
    QA: "pointerup",
    JA: "pointercancel",
    NA: "pointermove",
    PA: "pointerover",
    OA: "pointerout",
    LA: "pointerenter",
    MA: "pointerleave",
    zz: "gotpointercapture",
    Qz: "lostpointercapture",
    Tz: "MSGestureChange",
    Uz: "MSGestureEnd",
    Vz: "MSGestureHold",
    Wz: "MSGestureStart",
    Xz: "MSGestureTap",
    Yz: "MSGotPointerCapture",
    Zz: "MSInertiaStart",
    $z: "MSLostPointerCapture",
    aA: "MSPointerCancel",
    bA: "MSPointerDown",
    cA: "MSPointerEnter",
    dA: "MSPointerHover",
    eA: "MSPointerLeave",
    fA: "MSPointerMove",
    gA: "MSPointerOut",
    hA: "MSPointerOver",
    iA: "MSPointerUp",
    oB: "text",
    pB: z ? "textinput" : "textInput",
    Iy: "compositionstart",
    Jy: "compositionupdate",
    Hy: "compositionend",
    wy: "beforeinput",
    sz: "exit",
    Iz: "loadabort",
    Jz: "loadcommit",
    Mz: "loadredirect",
    Nz: "loadstart",
    Oz: "loadstop",
    YA: "responsive",
    fB: "sizechanged",
    xB: "unresponsive",
    CB: "visibilitychange",
    lB: "storage",
    bz: "DOMSubtreeModified",
    Yy: "DOMNodeInserted",
    $y: "DOMNodeRemoved",
    az: "DOMNodeRemovedFromDocument",
    Zy: "DOMNodeInsertedIntoDocument",
    Vy: "DOMAttrModified",
    Wy: "DOMCharacterDataModified",
    zy: "beforeprint",
    oy: "afterprint",
    xy: "beforeinstallprompt",
    ty: "appinstalled"
  },
  Nb = {
    Bh: Cb ? "pointerdown" : Db ? "MSPointerDown" : "mousedown",
    Ch: Cb ? "pointerup" : Db ? "MSPointerUp" : "mouseup",
    Ah: Cb ? "pointercancel" : Db ? "MSPointerCancel" : "mousecancel",
    lu: Cb ? "pointermove" : Db ? "MSPointerMove" : "mousemove",
    Ni: Cb ? "pointerover" : Db ? "MSPointerOver" : "mouseover",
    Mi: Cb ? "pointerout" : Db ? "MSPointerOut" : "mouseout",
    ju: Cb ? "pointerenter" : Db ? "MSPointerEnter" : "mouseenter",
    ku: Cb ? "pointerleave" : Db ? "MSPointerLeave" : "mouseleave"
  };
function Ob(a, b) {
  Kb.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.No = !1;
  this.pointerId = 0;
  this.pointerType = "";
  this.ge = null;
  a && this.N(a, b);
}
v(Ob, Kb);
var Pb = [1, 4, 2],
  Qb = { 2: "touch", 3: "pen", 4: "mouse" };
Ob.prototype.N = function(a, b) {
  var c = (this.type = a.type),
    e = a.changedTouches ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  if ((b = a.relatedTarget)) {
    if (kb) {
      a: {
        try {
          fb(b.nodeName);
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
    ? ((this.offsetX = A || void 0 !== a.offsetX ? a.offsetX : a.layerX),
      (this.offsetY = A || void 0 !== a.offsetY ? a.offsetY : a.layerY),
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
  this.No = mb ? a.metaKey : a.ctrlKey;
  this.pointerId = a.pointerId || 0;
  this.pointerType = p(a.pointerType) ? a.pointerType : Qb[a.pointerType] || "";
  this.state = a.state;
  this.ge = a;
  a.defaultPrevented && this.preventDefault();
};
function Rb(a) {
  return yb
    ? 0 == a.ge.button
    : "click" == a.type
    ? !0
    : !!(a.ge.button & Pb[0]);
}
Ob.prototype.stopPropagation = function() {
  Ob.s.stopPropagation.call(this);
  this.ge.stopPropagation
    ? this.ge.stopPropagation()
    : (this.ge.cancelBubble = !0);
};
Ob.prototype.preventDefault = function() {
  Ob.s.preventDefault.call(this);
  var a = this.ge;
  if (a.preventDefault) a.preventDefault();
  else if (((a.returnValue = !1), Ab))
    try {
      if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
    } catch (b) {}
};
var Sb = "closure_listenable_" + ((1e6 * Math.random()) | 0);
function Tb(a) {
  return !(!a || !a[Sb]);
}
var Ub = 0;
function Vb(a, b, c, e, f) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!e;
  this.Jl = f;
  this.key = ++Ub;
  this.ui = this.Qk = !1;
}
function Wb(a) {
  a.ui = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.Jl = null;
}
function Xb(a) {
  this.src = a;
  this.yc = {};
  this.wk = 0;
}
Xb.prototype.add = function(a, b, c, e, f) {
  var h = a.toString();
  a = this.yc[h];
  a || ((a = this.yc[h] = []), this.wk++);
  var k = Yb(a, b, e, f);
  -1 < k
    ? ((b = a[k]), c || (b.Qk = !1))
    : ((b = new Vb(b, this.src, h, !!e, f)), (b.Qk = c), a.push(b));
  return b;
};
Xb.prototype.remove = function(a, b, c, e) {
  a = a.toString();
  if (!(a in this.yc)) return !1;
  var f = this.yc[a];
  b = Yb(f, b, c, e);
  return -1 < b
    ? (Wb(f[b]),
      Array.prototype.splice.call(f, b, 1),
      0 == f.length && (delete this.yc[a], this.wk--),
      !0)
    : !1;
};
function Zb(a, b) {
  var c = b.type;
  c in a.yc &&
    ya(a.yc[c], b) &&
    (Wb(b), 0 == a.yc[c].length && (delete a.yc[c], a.wk--));
}
Xb.prototype.removeAll = function(a) {
  a = a && a.toString();
  var b = 0,
    c;
  for (c in this.yc)
    if (!a || c == a) {
      for (var e = this.yc[c], f = 0; f < e.length; f++) ++b, Wb(e[f]);
      delete this.yc[c];
      this.wk--;
    }
  return b;
};
Xb.prototype.qj = function(a, b, c, e) {
  a = this.yc[a.toString()];
  var f = -1;
  a && (f = Yb(a, b, c, e));
  return -1 < f ? a[f] : null;
};
function Yb(a, b, c, e) {
  for (var f = 0; f < a.length; ++f) {
    var h = a[f];
    if (!h.ui && h.listener == b && h.capture == !!c && h.Jl == e) return f;
  }
  return -1;
}
var $b = "closure_lm_" + ((1e6 * Math.random()) | 0),
  ac = {},
  bc = 0;
function cc(a, b, c, e, f) {
  if (e && e.once) return dc(a, b, c, e, f);
  if (r(b)) {
    for (var h = 0; h < b.length; h++) cc(a, b[h], c, e, f);
    return null;
  }
  c = ec(c);
  return Tb(a)
    ? a.pa(b, c, ia(e) ? !!e.capture : !!e, f)
    : fc(a, b, c, !1, e, f);
}
function fc(a, b, c, e, f, h) {
  if (!b) throw Error("Invalid event type");
  var k = ia(f) ? !!f.capture : !!f,
    l = gc(a);
  l || (a[$b] = l = new Xb(a));
  c = l.add(b, c, e, k, h);
  if (c.proxy) return c;
  e = hc();
  c.proxy = e;
  e.src = a;
  e.listener = c;
  if (a.addEventListener)
    Eb || (f = k),
      void 0 === f && (f = !1),
      a.addEventListener(b.toString(), e, f);
  else if (a.attachEvent) a.attachEvent(ic(b.toString()), e);
  else if (a.addListener && a.removeListener) a.addListener(e);
  else throw Error("addEventListener and attachEvent are unavailable.");
  bc++;
  return c;
}
function hc() {
  var a = jc,
    b = zb
      ? function(c) {
          return a.call(b.src, b.listener, c);
        }
      : function(c) {
          c = a.call(b.src, b.listener, c);
          if (!c) return c;
        };
  return b;
}
function dc(a, b, c, e, f) {
  if (r(b)) {
    for (var h = 0; h < b.length; h++) dc(a, b[h], c, e, f);
    return null;
  }
  c = ec(c);
  return Tb(a)
    ? a.fs(b, c, ia(e) ? !!e.capture : !!e, f)
    : fc(a, b, c, !0, e, f);
}
function kc(a, b, c, e, f) {
  if (r(b)) for (var h = 0; h < b.length; h++) kc(a, b[h], c, e, f);
  else
    (e = ia(e) ? !!e.capture : !!e),
      (c = ec(c)),
      Tb(a)
        ? a.hd(b, c, e, f)
        : a && (a = gc(a)) && (b = a.qj(b, c, e, f)) && lc(b);
}
function lc(a) {
  if (!ba(a) && a && !a.ui) {
    var b = a.src;
    if (Tb(b)) Zb(b.Ve, a);
    else {
      var c = a.type,
        e = a.proxy;
      b.removeEventListener
        ? b.removeEventListener(c, e, a.capture)
        : b.detachEvent
        ? b.detachEvent(ic(c), e)
        : b.addListener && b.removeListener && b.removeListener(e);
      bc--;
      (c = gc(b))
        ? (Zb(c, a), 0 == c.wk && ((c.src = null), (b[$b] = null)))
        : Wb(a);
    }
  }
}
function ic(a) {
  return a in ac ? ac[a] : (ac[a] = "on" + a);
}
function mc(a, b, c, e) {
  var f = !0;
  if ((a = gc(a)))
    if ((b = a.yc[b.toString()]))
      for (b = b.concat(), a = 0; a < b.length; a++) {
        var h = b[a];
        h && h.capture == c && !h.ui && ((h = nc(h, e)), (f = f && !1 !== h));
      }
  return f;
}
function nc(a, b) {
  var c = a.listener,
    e = a.Jl || a.src;
  a.Qk && lc(a);
  return c.call(e, b);
}
function jc(a, b) {
  if (a.ui) return !0;
  if (!zb) {
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
    b = new Ob(e, this);
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
      for (f = e.length - 1; !b.Yg && 0 <= f; f--) {
        b.currentTarget = e[f];
        var h = mc(e[f], a, !0, b);
        c = c && h;
      }
      for (f = 0; !b.Yg && f < e.length; f++)
        (b.currentTarget = e[f]), (h = mc(e[f], a, !1, b)), (c = c && h);
    }
    return c;
  }
  return nc(a, new Ob(b, this));
}
function gc(a) {
  a = a[$b];
  return a instanceof Xb ? a : null;
}
var oc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function ec(a) {
  if (u(a)) return a;
  a[oc] ||
    (a[oc] = function(b) {
      return a.handleEvent(b);
    });
  return a[oc];
}
// Copyright 2016 Google Inc.  Apache License 2.0
w.Touch = {};
w.Touch.tk = null;
w.Touch.Yd = {};
g.PointerEvent
  ? (w.Touch.Yd = {
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
  : Bb &&
    (w.Touch.Yd = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"]
    });
w.Yl = 0;
w.Rw = function(a, b) {
  w.Wf();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (w.Yl = setTimeout(function() {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      b && pc(b, a);
    }, w.fu));
};
w.Wf = function() {
  w.Yl && (clearTimeout(w.Yl), (w.Yl = 0));
};
w.Touch.Qe = function() {
  w.Touch.tk = null;
};
w.Touch.tp = function(a) {
  return !w.Touch.Gw(a) || w.Touch.hv(a);
};
w.Touch.Fl = function(a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 != a.changedTouches[0].identifier &&
      null != a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
w.Touch.hv = function(a) {
  var b = w.Touch.Fl(a);
  return void 0 != w.Touch.tk && null != w.Touch.tk
    ? w.Touch.tk == b
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((w.Touch.tk = b), !0)
    : !1;
};
w.Touch.Ix = function(a) {
  if (Ea(a.type, "touch")) {
    var b = a.changedTouches[0];
    a.clientX = b.clientX;
    a.clientY = b.clientY;
  }
};
w.Touch.Gw = function(a) {
  return Ea(a.type, "touch") || Ea(a.type, "mouse") || Ea(a.type, "pointer");
};
w.Touch.Ul = function(a) {
  return Ea(a.type, "touch") || Ea(a.type, "pointer");
};
w.Touch.Lx = function(a) {
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
function C(a, b) {
  this.x = aa(a) ? a : 0;
  this.y = aa(b) ? b : 0;
}
d = C.prototype;
d.clone = function() {
  return new C(this.x, this.y);
};
function qc(a, b) {
  return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1;
}
function rc(a, b) {
  var c = a.x - b.x;
  a = a.y - b.y;
  return Math.sqrt(c * c + a * a);
}
function sc(a, b) {
  return new C(a.x - b.x, a.y - b.y);
}
function tc(a, b) {
  return new C(a.x + b.x, a.y + b.y);
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
  a instanceof C
    ? ((this.x += a.x), (this.y += a.y))
    : ((this.x += Number(a)), ba(b) && (this.y += b));
  return this;
};
d.scale = function(a, b) {
  b = ba(b) ? b : a;
  this.x *= a;
  this.y *= b;
  return this;
};
w.j = {};
w.j.Gl = "";
w.j.jc = !0;
w.j.Bn = 0;
w.j.Fk = "create";
w.j.At = w.j.Fk;
w.j.Km = "delete";
w.j.Bt = w.j.Km;
w.j.yh = "change";
w.j.By = w.j.yh;
w.j.Oi = "move";
w.j.Cy = w.j.Oi;
w.j.Zp = "var_create";
w.j.$p = "var_delete";
w.j.aq = "var_rename";
w.j.Ym = "ui";
w.j.Lp = "comment_create";
w.j.Mp = "comment_delete";
w.j.Kp = "comment_change";
w.j.Np = "comment_move";
w.j.Hi = [];
w.j.V = function(a) {
  w.j.isEnabled() && (w.j.Hi.length || setTimeout(w.j.Xv, 0), w.j.Hi.push(a));
};
w.j.Xv = function() {
  for (
    var a = w.j.filter(w.j.Hi, !0), b = (w.j.Hi.length = 0), c;
    (c = a[b]);
    b++
  ) {
    var e = uc[c.Cc] || null;
    if (e) {
      var f = c;
      f.jc &&
        (e.qh.push(f), (e.$j.length = 0), e.qh.length > e.iu && e.qh.unshift());
      for (var h = 0; (c = e.zc[h]); h++) c(f);
    }
  }
};
w.j.filter = function(a, b) {
  a = Aa(a);
  b || a.reverse();
  for (var c = [], e = Object.create(null), f = 0, h; (h = a[f]); f++)
    if (!h.ci()) {
      var k = [h.type, h.ac, h.Cc].join(" "),
        l = e[k];
      l
        ? h.type == w.j.Oi
          ? ((l.Ug = h.Ug), (l.Tg = h.Tg), (l.Yf = h.Yf))
          : h.type == w.j.yh && h.element == l.element && h.name == l.name
          ? (l.newValue = h.newValue)
          : h.type != w.j.Ym ||
            "click" != h.element ||
            ("commentOpen" != l.element &&
              "mutatorOpen" != l.element &&
              "warningOpen" != l.element)
          ? ((e[k] = h), c.push(h))
          : (l.newValue = h.newValue)
        : ((e[k] = h), c.push(h));
    }
  a = c.filter(function(a) {
    return !a.ci();
  });
  b || a.reverse();
  for (f = 1; (h = a[f]); f++)
    h.type == w.j.yh && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
w.j.jv = function() {
  for (var a = 0, b; (b = w.j.Hi[a]); a++) b.jc = !1;
};
w.j.disable = function() {
  w.j.Bn++;
};
w.j.enable = function() {
  w.j.Bn--;
};
w.j.isEnabled = function() {
  return 0 == w.j.Bn;
};
w.j.tc = function() {
  return w.j.Gl;
};
w.j.S = function(a) {
  w.j.Gl = "boolean" == typeof a ? (a ? w.i.je() : "") : a;
};
w.j.yr = function(a) {
  var b = [];
  a = vc(a, !1);
  for (var c = 0, e; (e = a[c]); c++) b[c] = e.id;
  return b;
};
w.j.ha = function(a, b) {
  switch (a.type) {
    case w.j.Fk:
      var c = new wc(null);
      break;
    case w.j.Km:
      c = new xc(null);
      break;
    case w.j.yh:
      c = new yc(null, "", "", "", "");
      break;
    case w.j.Oi:
      c = new zc(null);
      break;
    case w.j.Zp:
      c = new Ac(null);
      break;
    case w.j.$p:
      c = new Bc(null);
      break;
    case w.j.aq:
      c = new Cc(null, "");
      break;
    case w.j.Ym:
      c = new Dc(null);
      break;
    case w.j.Lp:
      c = new Ec(null);
      break;
    case w.j.Kp:
      c = new Fc(null);
      break;
    case w.j.Np:
      c = new Gc(null);
      break;
    case w.j.Mp:
      c = new Hc(null);
      break;
    default:
      throw "Unknown event type.";
  }
  c.ha(a);
  c.Cc = b.id;
  return c;
};
w.j.OB = function(a) {
  if (a.type == w.j.Oi || a.type == w.j.Fk) {
    var b = uc[a.Cc] || null;
    if ((a = Ic(b, a.ac)))
      if (a.getParent() && !a.getParent().disabled) {
        b = vc(a, !1);
        a = 0;
        for (var c; (c = b[a]); a++) c.Bd(!1);
      } else if ((a.P || a.Z) && !b.pb()) {
        do a.Bd(!0), (a = Jc(a));
        while (a);
      }
  }
};
// Copyright 2018 Google Inc.  Apache License 2.0
function Kc() {
  this.Cc = void 0;
  this.group = w.j.Gl;
  this.jc = w.j.jc;
}
Kc.prototype.Ba = function() {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  return a;
};
Kc.prototype.ha = function(a) {
  this.group = a.group;
};
Kc.prototype.ci = function() {
  return !1;
};
Kc.prototype.run = function() {};
function Lc(a) {
  a = uc[a.Cc] || null;
  if (!a)
    throw Error(
      "Workspace is null. Event must have been generated from real Blockly events."
    );
  return a;
}
function Mc(a) {
  Mc.s.constructor.call(this);
  this.rg = a.aa();
  this.Cc = a.o.id;
}
v(Mc, Kc);
Mc.prototype.Ba = function() {
  var a = Mc.s.Ba.call(this);
  a.varId = this.rg;
  return a;
};
Mc.prototype.ha = function(a) {
  Mc.s.Ba.call(this);
  this.rg = a.varId;
};
function Ac(a) {
  a && (Ac.s.constructor.call(this, a), (this.vh = a.type), (this.uh = a.name));
}
v(Ac, Mc);
Ac.prototype.type = w.j.Zp;
Ac.prototype.Ba = function() {
  var a = Ac.s.Ba.call(this);
  a.varType = this.vh;
  a.varName = this.uh;
  return a;
};
Ac.prototype.ha = function(a) {
  Ac.s.ha.call(this, a);
  this.vh = a.varType;
  this.uh = a.varName;
};
Ac.prototype.run = function(a) {
  var b = Lc(this);
  a ? b.Vc(this.uh, this.vh, this.rg) : b.Df(this.rg);
};
function Bc(a) {
  a && (Bc.s.constructor.call(this, a), (this.vh = a.type), (this.uh = a.name));
}
v(Bc, Mc);
Bc.prototype.type = w.j.$p;
Bc.prototype.Ba = function() {
  var a = Bc.s.Ba.call(this);
  a.varType = this.vh;
  a.varName = this.uh;
  return a;
};
Bc.prototype.ha = function(a) {
  Bc.s.ha.call(this, a);
  this.vh = a.varType;
  this.uh = a.varName;
};
Bc.prototype.run = function(a) {
  var b = Lc(this);
  a ? b.Df(this.rg) : b.Vc(this.uh, this.vh, this.rg);
};
function Cc(a, b) {
  a && (Cc.s.constructor.call(this, a), (this.Co = a.name), (this.yo = b));
}
v(Cc, Mc);
Cc.prototype.type = w.j.aq;
Cc.prototype.Ba = function() {
  var a = Cc.s.Ba.call(this);
  a.oldName = this.Co;
  a.newName = this.yo;
  return a;
};
Cc.prototype.ha = function(a) {
  Cc.s.ha.call(this, a);
  this.Co = a.oldName;
  this.yo = a.newName;
};
Cc.prototype.run = function(a) {
  var b = Lc(this);
  a ? b.bh(this.rg, this.yo) : b.bh(this.rg, this.Co);
};
// Copyright 2017 Google Inc.  Apache License 2.0
function Nc(a) {
  this.sa = {};
  this.o = a;
}
d = Nc.prototype;
d.clear = function() {
  this.sa = Object(null);
};
d.Wo = function(a, b) {
  var c = this.Jc(b, a.type),
    e = Oc(this.o);
  w.j.S(!0);
  try {
    if (c && c.aa() != a.aa()) {
      var f = a.type;
      b != c.name && Pc(c, b, e);
      for (b = 0; b < e.length; b++) e[b].dk(a.aa(), c.aa());
      w.j.V(new Bc(a));
      this.sa[f].splice(this.uj(f).indexOf(a), 1);
    } else Pc(a, b, e);
  } finally {
    w.j.S(!1);
  }
};
d.bh = function(a, b) {
  var c = this.Kd(a);
  if (!c) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.Wo(c, b);
};
function Pc(a, b, c) {
  w.j.V(new Cc(a, b));
  a.name = b;
  for (b = 0; b < c.length; b++) c[b].Gm(a);
}
d.Vc = function(a, b, c) {
  var e = this.Jc(a, b);
  if (e) {
    if (c && e.aa() != c)
      throw Error(
        'Variable "' +
          a +
          '" is already in use and its id is "' +
          e.aa() +
          '" which conflicts with the passed in id, "' +
          c +
          '".'
      );
    return e;
  }
  if (c && this.Kd(c))
    throw Error('Variable id, "' + c + '", is already in use.');
  c = c || w.i.je();
  b = b || "";
  e = new Qc(this.o, a, b, c);
  this.sa[b] ? this.sa[b].push(e) : (this.sa[b] = [e]);
  return e;
};
d.Df = function(a) {
  var b = this.Kd(a);
  if (b) {
    var c = b.name,
      e = this.Un(a);
    a = 0;
    for (var f; (f = e[a]); a++)
      if (
        "procedures_defnoreturn" == f.type ||
        "procedures_defreturn" == f.type
      ) {
        a = D(f, "NAME");
        c = w.g.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", c).replace(
          "%2",
          a
        );
        w.alert(c);
        return;
      }
    var h = this;
    1 < e.length
      ? ((c = w.g.DELETE_VARIABLE_CONFIRMATION.replace(
          "%1",
          String(e.length)
        ).replace("%2", c)),
        w.confirm(c, function(a) {
          a && h.al(b, e);
        }))
      : h.al(b, e);
  } else console.warn("Can't delete non-existent variable: " + a);
};
d.al = function(a, b) {
  var c = w.j.tc();
  c || w.j.S(!0);
  try {
    for (var e = 0; e < b.length; e++) b[e].A(!0, !1);
    var f = this.sa[a.type];
    b = 0;
    for (var h; (h = f[b]); b++)
      if (h.aa() == a.aa()) {
        f.splice(b, 1);
        w.j.V(new Bc(a));
        break;
      }
  } finally {
    c || w.j.S(!1);
  }
};
d.Jc = function(a, b) {
  if ((b = this.sa[b || ""]))
    for (var c = 0, e; (e = b[c]); c++) if (Rc(e.name, a)) return e;
  return null;
};
d.Kd = function(a) {
  for (var b = Object.keys(this.sa), c = 0; c < b.length; c++)
    for (var e = b[c], f = 0, h; (h = this.sa[e][f]); f++)
      if (h.aa() == a) return h;
  return null;
};
d.uj = function(a) {
  return (a = this.sa[a || ""]) ? a.slice() : [];
};
d.Tn = function() {
  for (var a = Object.keys(this.sa), b = !1, c = 0; c < a.length; c++)
    "" == a[c] && (b = !0);
  b || a.push("");
  return a;
};
d.We = function() {
  for (var a = [], b = Object.keys(this.sa), c = 0; c < b.length; c++)
    a = a.concat(this.sa[b[c]]);
  return a;
};
d.Un = function(a) {
  for (var b = [], c = Oc(this.o), e = 0; e < c.length; e++) {
    var f = c[e].Hf();
    if (f) for (var h = 0; h < f.length; h++) f[h].aa() == a && b.push(c[e]);
  }
  return b;
};
function Tc(a) {
  this.Gd = a.id;
  this.Cc = a.o.id;
  this.group = w.j.Gl;
  this.jc = w.j.jc;
}
v(Tc, Kc);
Tc.prototype.Ba = function() {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.Gd && (a.commentId = this.Gd);
  return a;
};
Tc.prototype.ha = function(a) {
  this.Gd = a.commentId;
  this.group = a.group;
};
function Fc(a, b, c) {
  a && (Fc.s.constructor.call(this, a), (this.ts = b), (this.em = c));
}
v(Fc, Tc);
d = Fc.prototype;
d.type = w.j.Kp;
d.Ba = function() {
  var a = Fc.s.Ba.call(this);
  a.newContents = this.em;
  return a;
};
d.ha = function(a) {
  Fc.s.ha.call(this, a);
  this.em = a.newValue;
};
d.ci = function() {
  return this.ts == this.em;
};
d.run = function(a) {
  var b = Uc(Lc(this), this.Gd);
  b
    ? b.Ad(a ? this.em : this.ts)
    : console.warn("Can't change non-existent comment: " + this.Gd);
};
function Ec(a) {
  a && (Ec.s.constructor.call(this, a), (this.xml = a.rk()));
}
v(Ec, Tc);
Ec.prototype.type = w.j.Lp;
Ec.prototype.Ba = function() {
  var a = Ec.s.Ba.call(this);
  a.xml = w.D.td(this.xml);
  return a;
};
Ec.prototype.ha = function(a) {
  Ec.s.ha.call(this, a);
  this.xml = w.D.ed("<xml>" + a.xml + "</xml>").firstChild;
};
Ec.prototype.run = function(a) {
  var b = Lc(this);
  a
    ? ((a = E("xml")), a.appendChild(this.xml), w.D.ee(a, b))
    : (b = Uc(b, this.Gd))
    ? b.A(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + this.Gd);
};
function Hc(a) {
  a && (Hc.s.constructor.call(this, a), (this.xml = a.rk()));
}
v(Hc, Tc);
Hc.prototype.type = w.j.Mp;
Hc.prototype.Ba = function() {
  return Hc.s.Ba.call(this);
};
Hc.prototype.ha = function(a) {
  Hc.s.ha.call(this, a);
};
Hc.prototype.run = function(a) {
  var b = Lc(this);
  a
    ? (b = Uc(b, this.Gd))
      ? b.A(!1, !1)
      : console.warn("Can't uncreate non-existent comment: " + this.Gd)
    : ((a = E("xml")), a.appendChild(this.xml), w.D.ee(a, b));
};
function Gc(a) {
  a &&
    (Gc.s.constructor.call(this, a),
    (this.on = a),
    (this.Bo = a.ld.clone()),
    (this.Sg = null));
}
v(Gc, Tc);
d = Gc.prototype;
d.ff = function() {
  if (!this.on)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.Sg = this.on.ld.clone();
  this.on = null;
};
d.type = w.j.Np;
d.Ba = function() {
  var a = Gc.s.Ba.call(this);
  this.Sg &&
    (a.newCoordinate = Math.round(this.Sg.x) + "," + Math.round(this.Sg.y));
  return a;
};
d.ha = function(a) {
  Gc.s.ha.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.Sg = new C(parseFloat(a[0]), parseFloat(a[1]))));
};
d.ci = function() {
  return qc(this.Bo, this.Sg);
};
d.run = function(a) {
  var b = Uc(Lc(this), this.Gd);
  if (b) {
    a = a ? this.Sg : this.Bo;
    var c = b.ld.clone();
    b.moveBy(a.x - c.x, a.y - c.y);
  } else console.warn("Can't move non-existent comment: " + this.Gd);
};
function Vc(a, b, c, e, f) {
  this.id = f && !Uc(a, f) ? f : w.i.je();
  a.Bi.push(this);
  a.Wk[this.id] &&
    console.warn(
      'Overriding an existing comment on this workspace, with id "' +
        this.id +
        '"'
    );
  a.Wk[this.id] = this;
  this.ld = new C(0, 0);
  this.Fa = c;
  this.ia = e;
  this.o = a;
  this.u = a.u;
  this.Uj = this.gj = !0;
  this.Uc = b;
  this.Rr = !0;
  Wc(this);
}
d = Vc.prototype;
d.A = function() {
  if (this.o) {
    w.j.isEnabled() && w.j.V(new Hc(this));
    var a = this.o;
    if (!ya(a.Bi, this))
      throw "Comment not present in workspace's list of top-most comments.";
    delete a.Wk[this.id];
    this.o = null;
  }
};
d.Wh = function() {
  return this.Fa;
};
d.Zc = function() {
  return this.ia;
};
d.moveBy = function(a, b) {
  var c = new Gc(this);
  this.ld.translate(a, b);
  c.ff();
  w.j.V(c);
};
d.gc = function() {
  return this.gj && !(this.o && this.o.options.readOnly);
};
d.kp = function(a) {
  this.gj = a;
};
d.re = function() {
  return this.Uj && !(this.o && this.o.options.readOnly);
};
d.fh = function(a) {
  this.Uj = a;
};
d.Ic = function() {
  return this.Uc;
};
d.Ad = function(a) {
  this.Uc != a && (w.j.V(new Fc(this, this.Uc, a)), (this.Uc = a));
};
d.rk = function(a) {
  a = Xc(this, a);
  a.setAttribute("x", Math.round(this.ld.x));
  a.setAttribute("y", Math.round(this.ld.y));
  a.setAttribute("h", this.Fa);
  a.setAttribute("w", this.ia);
  return a;
};
function Xc(a, b) {
  var c = E("comment");
  b || c.setAttribute("id", a.id);
  c.textContent = a.Ic();
  return c;
}
function Wc(a) {
  if (w.j.isEnabled()) {
    var b = w.j.tc();
    b || w.j.S(!0);
    try {
      w.j.V(new Ec(a));
    } finally {
      b || w.j.S(!1);
    }
  }
}
function Yc(a) {
  var b = a.getAttribute("h"),
    c = a.getAttribute("w");
  return {
    id: a.getAttribute("id"),
    Dr: b ? parseInt(b, 10) : 100,
    vt: c ? parseInt(c, 10) : 100,
    x: parseInt(a.getAttribute("x"), 10),
    y: parseInt(a.getAttribute("y"), 10),
    content: a.textContent
  };
}
// Copyright 2012 Google Inc.  Apache License 2.0
function Zc(a) {
  this.id = w.i.je();
  uc[this.id] = this;
  this.options = a || {};
  this.u = !!this.options.u;
  this.pe = !!this.options.pe;
  this.Da = this.options.Da;
  this.Ai = [];
  this.Bi = [];
  this.Wk = Object.create(null);
  this.zc = [];
  this.qh = [];
  this.$j = [];
  this.gn = Object.create(null);
  this.sa = new Nc(this);
  this.si = null;
}
d = Zc.prototype;
d.R = !1;
d.jo = !1;
d.iu = 1024;
d.A = function() {
  this.zc.length = 0;
  this.clear();
  delete uc[this.id];
};
function $c(a, b) {
  if (!ya(a.Ai, b))
    throw "Block not present in workspace's list of top-most blocks.";
}
function ad(a, b) {
  var c = [].concat(a.Ai);
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
function bd(a, b) {
  var c = [].concat(a.Bi);
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
function Oc(a, b) {
  if (b) {
    a = ad(a, !0);
    b = [];
    for (var c = 0; c < a.length; c++) b.push.apply(b, vc(a[c], !0));
  } else
    for (b = ad(a, !1), c = 0; c < b.length; c++) b.push.apply(b, b[c].Gf(!1));
  return b;
}
d.clear = function() {
  this.jo = !0;
  try {
    var a = w.j.tc();
    for (a || w.j.S(!0); this.Ai.length; ) this.Ai[0].A();
    for (; this.Bi.length; ) this.Bi[this.Bi.length - 1].A();
    a || w.j.S(!1);
    this.sa.clear();
    this.si && this.si.clear();
  } finally {
    this.jo = !1;
  }
};
d.bh = function(a, b) {
  this.sa.bh(a, b);
};
d.Vc = function(a, b, c) {
  return this.sa.Vc(a, b, c);
};
d.Un = function(a) {
  return this.sa.Un(a);
};
d.Df = function(a) {
  this.sa.Df(a);
};
d.al = function(a, b) {
  this.sa.al(a, b);
};
d.Jc = function(a, b) {
  return this.sa.Jc(a, b);
};
d.Kd = function(a) {
  return this.sa.Kd(a);
};
d.uj = function(a) {
  return this.sa.uj(a);
};
d.Tn = function() {
  return this.sa.Tn();
};
d.We = function() {
  return this.sa.We();
};
d.Zc = function() {
  return 0;
};
d.bf = function(a, b) {
  return new cd(this, a, b);
};
function dd(a) {
  return isNaN(a.options.hs) ? Infinity : a.options.hs - Oc(a).length;
}
d.Gp = function(a) {
  var b = a ? this.$j : this.qh,
    c = a ? this.qh : this.$j,
    e = b.pop();
  if (e) {
    for (var f = [e]; b.length && e.group && e.group == b[b.length - 1].group; )
      f.push(b.pop());
    for (b = 0; (e = f[b]); b++) c.push(e);
    f = w.j.filter(f, a);
    w.j.jc = !1;
    try {
      for (b = 0; (e = f[b]); b++) e.run(a);
    } finally {
      w.j.jc = !0;
    }
  }
};
d.wq = function() {
  this.qh.length = 0;
  this.$j.length = 0;
  w.j.jv();
};
d.Sc = function(a) {
  this.zc.push(a);
  return a;
};
d.cg = function(a) {
  ya(this.zc, a);
};
function Ic(a, b) {
  return a.gn[b] || null;
}
function Uc(a, b) {
  return a.Wk[b] || null;
}
var uc = Object.create(null);
Zc.prototype.clear = Zc.prototype.clear;
Zc.prototype.clearUndo = Zc.prototype.wq;
Zc.prototype.addChangeListener = Zc.prototype.Sc;
Zc.prototype.removeChangeListener = Zc.prototype.cg;
var ed = !z || 9 <= Number(wb),
  fd = (!kb && !z) || (z && 9 <= Number(wb)) || (kb && vb("1.9.1")),
  gd = z && !vb("9");
var hd = {
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
function id() {
  this.Bp = "";
  this.yu = jd;
}
id.prototype.Nf = !0;
id.prototype.oe = function() {
  return this.Bp;
};
id.prototype.toString = function() {
  return "Const{" + this.Bp + "}";
};
function kd(a) {
  return a instanceof id && a.constructor === id && a.yu === jd
    ? a.Bp
    : "type_error:Const";
}
var jd = {};
function ld() {
  this.Ms = "";
  this.Fu = md;
}
ld.prototype.Nf = !0;
ld.prototype.oe = function() {
  return this.Ms;
};
ld.prototype.eo = !0;
ld.prototype.Vh = function() {
  return 1;
};
var md = {};
function nd() {
  this.Xg = "";
  this.wu = od;
}
nd.prototype.Nf = !0;
nd.prototype.oe = function() {
  return this.Xg;
};
nd.prototype.eo = !0;
nd.prototype.Vh = function() {
  return 1;
};
function pd(a) {
  if (a instanceof nd && a.constructor === nd && a.wu === od) return a.Xg;
  fa(a);
  return "type_error:SafeUrl";
}
var qd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function rd(a) {
  if (a instanceof nd) return a;
  a = a.Nf ? a.oe() : String(a);
  qd.test(a) || (a = "about:invalid#zClosurez");
  return sd(a);
}
var od = {};
function sd(a) {
  var b = new nd();
  b.Xg = a;
  return b;
}
sd("about:blank");
function td() {
  this.To = "";
  this.vu = ud;
}
td.prototype.Nf = !0;
var ud = {};
td.prototype.oe = function() {
  return this.To;
};
td.prototype.Nl = function(a) {
  this.To = a;
  return this;
};
var vd = new td().Nl("");
function wd(a) {
  var b = "",
    c;
  for (c in a) {
    if (!/^[-_a-zA-Z0-9]+$/.test(c))
      throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
    var e = a[c];
    null != e &&
      ((e = r(e) ? ua(e, xd).join(" ") : xd(e)), (b += c + ":" + e + ";"));
  }
  return b ? new td().Nl(b) : vd;
}
function xd(a) {
  if (a instanceof nd)
    a =
      'url("' +
      pd(a)
        .replace(/</g, "%3c")
        .replace(/[\\"]/g, "\\$&") +
      '")';
  else if (a instanceof id) a = kd(a);
  else {
    a = String(a);
    var b = a.replace(yd, "$1").replace(zd, "url");
    if ((b = Bd.test(b))) {
      for (var c = (b = !0), e = 0; e < a.length; e++) {
        var f = a.charAt(e);
        "'" == f && c ? (b = !b) : '"' == f && b && (c = !c);
      }
      b = b && c;
    }
    a = b ? Cd(a) : "zClosurez";
  }
  return a;
}
var Bd = /^[-,."'%_!# a-zA-Z0-9]+$/,
  zd = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
  yd = /\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;
function Cd(a) {
  return a.replace(zd, function(a, c, e, f) {
    var b = "";
    e = e.replace(/^(['"])(.*)\1$/, function(a, c, e) {
      b = c;
      return e;
    });
    a = rd(e).oe();
    return c + b + a + b + f;
  });
}
function Dd() {
  this.Xg = "";
  this.uu = Ed;
  this.gr = null;
}
Dd.prototype.eo = !0;
Dd.prototype.Vh = function() {
  return this.gr;
};
Dd.prototype.Nf = !0;
Dd.prototype.oe = function() {
  return this.Xg;
};
function Fd(a) {
  if (a instanceof Dd && a.constructor === Dd && a.uu === Ed) return a.Xg;
  fa(a);
  return "type_error:SafeHtml";
}
function Gd(a) {
  if (a instanceof Dd) return a;
  var b = null;
  a.eo && (b = a.Vh());
  return Hd(Ia(a.Nf ? a.oe() : String(a)), b);
}
var Id = /^[a-zA-Z0-9-]+$/,
  Jd = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0
  },
  Kd = {
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
function Ld(a, b, c) {
  var e = String(a);
  if (!Id.test(e)) throw Error("Invalid tag name <" + e + ">.");
  if (e.toUpperCase() in Kd)
    throw Error("Tag name <" + e + "> is not allowed for SafeHtml.");
  a = String(a);
  e = null;
  var f = "<" + a,
    h = "";
  if (b)
    for (n in b) {
      if (!Id.test(n)) throw Error('Invalid attribute name "' + n + '".');
      var k = b[n];
      if (null != k) {
        var l = a;
        var m = n;
        if (k instanceof id) k = kd(k);
        else if ("style" == m.toLowerCase()) {
          if (!ia(k))
            throw Error(
              'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                typeof k +
                " given: " +
                k
            );
          k instanceof td || (k = wd(k));
          k instanceof td && k.constructor === td && k.vu === ud
            ? (k = k.To)
            : (fa(k), (k = "type_error:SafeStyle"));
        } else {
          if (/^on/i.test(m))
            throw Error(
              'Attribute "' +
                m +
                '" requires goog.string.Const value, "' +
                k +
                '" given.'
            );
          if (m.toLowerCase() in Jd)
            if (k instanceof ld)
              k instanceof ld && k.constructor === ld && k.Fu === md
                ? (k = k.Ms)
                : (fa(k), (k = "type_error:TrustedResourceUrl"));
            else if (k instanceof nd) k = pd(k);
            else if (p(k)) k = rd(k).oe();
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
        k.Nf && (k = k.oe());
        m = m + '="' + Ia(String(k)) + '"';
        h += " " + m;
      }
    }
  var n = f + h;
  null != c ? r(c) || (c = [c]) : (c = []);
  !0 === hd[a.toLowerCase()]
    ? (n += ">")
    : ((c = Md(c)), (n += ">" + Fd(c) + "</" + a + ">"), (e = c.Vh()));
  (b = b && b.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
  return Hd(n, e);
}
function Md(a) {
  function b(a) {
    r(a)
      ? sa(a, b)
      : ((a = Gd(a)),
        (e += Fd(a)),
        (a = a.Vh()),
        0 == c ? (c = a) : 0 != a && c != a && (c = null));
  }
  var c = 0,
    e = "";
  sa(arguments, b);
  return Hd(e, c);
}
var Ed = {};
function Hd(a, b) {
  return new Dd().Nl(a, b);
}
Dd.prototype.Nl = function(a, b) {
  this.Xg = a;
  this.gr = b;
  return this;
};
Hd("<!DOCTYPE html>", 0);
var Nd = Hd("", 0),
  Od = Hd("<br>", 0);
function Pd(a, b) {
  a.innerHTML = Fd(b);
}
function Qd(a, b) {
  this.width = a;
  this.height = b;
}
d = Qd.prototype;
d.clone = function() {
  return new Qd(this.width, this.height);
};
d.Tu = function() {
  return this.width * this.height;
};
d.aspectRatio = function() {
  return this.width / this.height;
};
d.Tr = function() {
  return !this.Tu();
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
  b = ba(b) ? b : a;
  this.width *= a;
  this.height *= b;
  return this;
};
function Rd(a) {
  return a ? new Sd(Td(a)) : qa || (qa = new Sd());
}
function Ud(a, b) {
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
      "function" == typeof k.split && xa(k.split(/\s+/), a) && (c[e++] = h);
    }
    c.length = e;
    return c;
  }
  return b;
}
function Vd(a, b) {
  bb(b, function(b, e) {
    b && b.Nf && (b = b.oe());
    "style" == e
      ? (a.style.cssText = b)
      : "class" == e
      ? (a.className = b)
      : "for" == e
      ? (a.htmlFor = b)
      : Wd.hasOwnProperty(e)
      ? a.setAttribute(Wd[e], b)
      : Ea(e, "aria-") || Ea(e, "data-")
      ? a.setAttribute(e, b)
      : (a[e] = b);
  });
}
var Wd = {
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
function Xd() {
  var a = window.document;
  a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new Qd(a.clientWidth, a.clientHeight);
}
function Yd(a) {
  var b = Zd(a);
  a = a.parentWindow || a.defaultView;
  return z && vb("10") && a.pageYOffset != b.scrollTop
    ? new C(b.scrollLeft, b.scrollTop)
    : new C(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
}
function Zd(a) {
  return a.scrollingElement
    ? a.scrollingElement
    : A || "CSS1Compat" != a.compatMode
    ? a.body || a.documentElement
    : a.documentElement;
}
function E(a, b, c) {
  return $d(document, arguments);
}
function $d(a, b) {
  var c = String(b[0]),
    e = b[1];
  if (!ed && e && (e.name || e.type)) {
    c = ["<", c];
    e.name && c.push(' name="', Ia(e.name), '"');
    if (e.type) {
      c.push(' type="', Ia(e.type), '"');
      var f = {};
      db(f, e);
      delete f.type;
      e = f;
    }
    c.push(">");
    c = c.join("");
  }
  c = a.createElement(c);
  e &&
    (p(e) ? (c.className = e) : r(e) ? (c.className = e.join(" ")) : Vd(c, e));
  2 < b.length && ae(a, c, b, 2);
  return c;
}
function ae(a, b, c, e) {
  function f(c) {
    c && b.appendChild(p(c) ? a.createTextNode(c) : c);
  }
  for (; e < c.length; e++) {
    var h = c[e];
    !ha(h) || (ia(h) && 0 < h.nodeType) ? f(h) : sa(be(h) ? Aa(h) : h, f);
  }
}
function ce(a) {
  for (var b; (b = a.firstChild); ) a.removeChild(b);
}
function de(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
}
function F(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
function ee(a, b) {
  if (!a || !b) return !1;
  if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
  if ("undefined" != typeof a.compareDocumentPosition)
    return a == b || !!(a.compareDocumentPosition(b) & 16);
  for (; b && a != b; ) b = b.parentNode;
  return b == a;
}
function Td(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function fe(a, b) {
  if ("textContent" in a) a.textContent = b;
  else if (3 == a.nodeType) a.data = String(b);
  else if (a.firstChild && 3 == a.firstChild.nodeType) {
    for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
    a.firstChild.data = String(b);
  } else ce(a), a.appendChild(Td(a).createTextNode(String(b)));
}
var ge = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
  he = { IMG: " ", BR: "\n" };
function ie(a) {
  return z && !vb("9")
    ? ((a = a.getAttributeNode("tabindex")), null != a && a.specified)
    : a.hasAttribute("tabindex");
}
function je(a) {
  a = a.tabIndex;
  return ba(a) && 0 <= a && 32768 > a;
}
function ke(a) {
  if (gd && null !== a && "innerText" in a)
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  else {
    var b = [];
    le(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  gd || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
}
function me(a) {
  var b = [];
  le(a, b, !1);
  return b.join("");
}
function le(a, b, c) {
  if (!(a.nodeName in ge))
    if (3 == a.nodeType)
      c
        ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
        : b.push(a.nodeValue);
    else if (a.nodeName in he) b.push(he[a.nodeName]);
    else for (a = a.firstChild; a; ) le(a, b, c), (a = a.nextSibling);
}
function be(a) {
  if (a && "number" == typeof a.length) {
    if (ia(a)) return "function" == typeof a.item || "string" == typeof a.item;
    if (u(a)) return "function" == typeof a.item;
  }
  return !1;
}
function Sd(a) {
  this.Hd = a || g.document || document;
}
d = Sd.prototype;
d.qc = Rd;
d.F = function(a) {
  return p(a) ? this.Hd.getElementById(a) : a;
};
d.getElementsByTagName = function(a, b) {
  return (b || this.Hd).getElementsByTagName(String(a));
};
d.setProperties = Vd;
d.X = function(a, b, c) {
  return $d(this.Hd, arguments);
};
d.createElement = function(a) {
  return this.Hd.createElement(String(a));
};
d.createTextNode = function(a) {
  return this.Hd.createTextNode(String(a));
};
d.Hq = function(a, b) {
  for (
    var c = this.Hd,
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
  ae(Td(a), a, arguments, 1);
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
d.Us = ce;
d.removeNode = F;
d.Gf = function(a) {
  return fd && void 0 != a.children
    ? a.children
    : ta(a.childNodes, function(a) {
        return 1 == a.nodeType;
      });
};
d.contains = ee;
d.af = function(a) {
  var b;
  (b =
    "A" == a.tagName ||
    "INPUT" == a.tagName ||
    "TEXTAREA" == a.tagName ||
    "SELECT" == a.tagName ||
    "BUTTON" == a.tagName
      ? !a.disabled && (!ie(a) || je(a))
      : ie(a) && je(a)) && z
    ? ((a =
        !u(a.getBoundingClientRect) || (z && null == a.parentElement)
          ? { height: a.offsetHeight, width: a.offsetWidth }
          : a.getBoundingClientRect()),
      (a = null != a && 0 < a.height && 0 < a.width))
    : (a = b);
  return a;
};
function ne(a, b, c, e, f, h) {
  this.m = a;
  this.Uc = b;
  this.ct = c;
  c = oe;
  this.m.u && (c = -c);
  this.Uu = (c * Math.PI) / 180;
  a.Ud.appendChild(this.bj(b, !(!f || !h)));
  this.pd = e;
  this.eg && pe(this);
  (f && h) ||
    ((b = this.Uc.getBBox()), (f = b.width + 2 * qe), (h = b.height + 2 * qe));
  this.gg(f, h);
  pe(this);
  re(this);
  this.eg = !0;
  a.options.readOnly ||
    (w.O(this.Vi, "mousedown", this, this.$u),
    this.Lb && w.O(this.Lb, "mousedown", this, this.Yo));
}
var qe = 6,
  oe = 20,
  se = null,
  te = null;
d = ne.prototype;
d.Xo = null;
function ue() {
  se && (w.Na(se), (se = null));
  te && (w.Na(te), (te = null));
}
function ve() {
  w.Touch.Qe();
  ue();
}
d.eg = !1;
d.pd = null;
d.ti = 0;
d.bk = 0;
d.ia = 0;
d.Fa = 0;
d.Nk = !0;
d.bj = function(a, b) {
  this.Tc = w.i.B("g", {}, null);
  var c = { filter: "url(#" + this.m.options.pr + ")" };
  -1 != Ya.indexOf("JavaFX") && (c = {});
  c = w.i.B("g", c, this.Tc);
  this.jn = w.i.B("path", {}, c);
  this.Vi = w.i.B(
    "rect",
    { class: "blocklyDraggable", x: 0, y: 0, rx: qe, ry: qe },
    c
  );
  b
    ? ((this.Lb = w.i.B(
        "g",
        { class: this.m.u ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.Tc
      )),
      (b = 2 * qe),
      w.i.B(
        "polygon",
        { points: "0,x x,x x,0".replace(/x/g, b.toString()) },
        this.Lb
      ),
      w.i.B(
        "line",
        {
          class: "blocklyResizeLine",
          x1: b / 3,
          y1: b - 1,
          x2: b - 1,
          y2: b / 3
        },
        this.Lb
      ),
      w.i.B(
        "line",
        {
          class: "blocklyResizeLine",
          x1: (2 * b) / 3,
          y1: b - 1,
          x2: b - 1,
          y2: (2 * b) / 3
        },
        this.Lb
      ))
    : (this.Lb = null);
  this.Tc.appendChild(a);
  return this.Tc;
};
d.ga = function() {
  return this.Tc;
};
function we(a, b) {
  a.Tc.dataset && (a.Tc.dataset.ac = b);
}
d.$u = function(a) {
  var b = this.m.le(a);
  b && (b.Bc || (b.Bc = this), (b.Lc = a));
};
d.xi = function() {};
d.gc = function() {
  return !1;
};
d.Yo = function(a) {
  xe(this);
  ue();
  w.i.Tf(a) ||
    (this.m.Cm(a, new C(this.m.u ? -this.ia : this.ia, this.Fa)),
    (se = w.O(document, "mouseup", this, ve)),
    (te = w.O(document, "mousemove", this, this.Zo)),
    w.Pb());
  a.stopPropagation();
};
d.Zo = function(a) {
  this.Nk = !1;
  a = ye(this.m, a);
  this.gg(this.m.u ? -a.x : a.x, a.y);
  this.m.u && pe(this);
};
function xe(a) {
  var b = a.Tc.parentNode;
  return b.lastChild !== a.Tc ? (b.appendChild(a.Tc), !0) : !1;
}
function pe(a) {
  var b = a.pd.x;
  b = a.m.u ? b - (a.ti + a.ia) : b + a.ti;
  a.moveTo(b, a.bk + a.pd.y);
}
d.moveTo = function(a, b) {
  this.Tc.setAttribute("transform", "translate(" + a + "," + b + ")");
};
d.Ig = function() {
  return { width: this.ia, height: this.Fa };
};
d.gg = function(a, b) {
  var c = 2 * qe;
  a = Math.max(a, c + 45);
  b = Math.max(b, c + 20);
  this.ia = a;
  this.Fa = b;
  this.Vi.setAttribute("width", a);
  this.Vi.setAttribute("height", b);
  this.Lb &&
    (this.m.u
      ? this.Lb.setAttribute(
          "transform",
          "translate(" + 2 * qe + "," + (b - c) + ") scale(-1 1)"
        )
      : this.Lb.setAttribute(
          "transform",
          "translate(" + (a - c) + "," + (b - c) + ")"
        ));
  if (this.eg) {
    if (this.Nk) {
      a = -this.ia / 4;
      b = -this.Fa - 25;
      c = this.m.rb();
      c.xa /= this.m.scale;
      c.Ab /= this.m.scale;
      var e = this.pd.x;
      this.m.u
        ? e - c.Ab - a - this.ia < G
          ? (a = e - c.Ab - this.ia - G)
          : e - c.Ab - a > c.xa && (a = e - c.Ab - c.xa)
        : e + a < c.Ab
        ? (a = c.Ab - e)
        : c.Ab + c.xa < e + a + this.ia + 10 + G &&
          (a = c.Ab + c.xa - e - this.ia - G);
      this.pd.y + b < c.Fe && (b = this.ct.getBBox().height);
      this.ti = a;
      this.bk = b;
    }
    pe(this);
    re(this);
  }
  this.Xo && this.Xo();
};
function re(a) {
  var b = [],
    c = a.ia / 2,
    e = a.Fa / 2,
    f = -a.ti,
    h = -a.bk;
  if (c == f && e == h) b.push("M " + c + "," + e);
  else {
    h -= e;
    f -= c;
    a.m.u && (f *= -1);
    var k = Math.sqrt(h * h + f * f),
      l = Math.acos(f / k);
    0 > h && (l = 2 * Math.PI - l);
    var m = l + Math.PI / 2;
    m > 2 * Math.PI && (m -= 2 * Math.PI);
    var n = Math.sin(m),
      q = Math.cos(m),
      t = a.Ig();
    m = (t.width + t.height) / 5;
    m = Math.min(m, t.width, t.height) / 4;
    t = 1 - 8 / k;
    f = c + t * f;
    h = e + t * h;
    t = c + m * q;
    var y = e + m * n;
    c -= m * q;
    e -= m * n;
    n = l + a.Uu;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / 4;
    k = (Math.cos(n) * k) / 4;
    b.push("M" + t + "," + y);
    b.push(
      "C" + (t + k) + "," + (y + l) + " " + f + "," + h + " " + f + "," + h
    );
    b.push(
      "C" + f + "," + h + " " + (c + k) + "," + (e + l) + " " + c + "," + e
    );
  }
  b.push("z");
  a.jn.setAttribute("d", b.join(" "));
}
d.qb = function(a) {
  this.Vi.setAttribute("fill", a);
  this.jn.setAttribute("fill", a);
};
d.A = function() {
  ue();
  F(this.Tc);
  this.ct = this.Uc = this.m = this.Lb = this.Vi = this.jn = this.Tc = null;
};
d.cm = function(a, b) {
  a ? a.pf(b.x, b.y) : this.moveTo(b.x, b.y);
  this.ti = this.m.u ? this.pd.x - b.x - this.ia : b.x - this.pd.x;
  this.bk = b.y - this.pd.y;
  re(this);
};
d.la = function() {
  return new C(this.pd.x + this.ti, this.pd.y + this.bk);
};
d.$s = function(a) {
  this.Nk = a;
};
function ze(a) {
  ze.s.constructor.call(this);
  this.ac = a.id;
  this.Cc = a.o.id;
}
v(ze, Kc);
ze.prototype.Ba = function() {
  var a = ze.s.Ba.call(this);
  a.blockId = this.ac;
  return a;
};
ze.prototype.ha = function(a) {
  ze.s.Ba.call(this);
  this.ac = a.blockId;
};
function yc(a, b, c, e, f) {
  a &&
    (yc.s.constructor.call(this, a),
    (this.element = b),
    (this.name = c),
    (this.oldValue = e),
    (this.newValue = f));
}
v(yc, ze);
w.j.Dc = yc;
d = yc.prototype;
d.type = w.j.yh;
d.Ba = function() {
  var a = yc.s.Ba.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.newValue = this.newValue;
  return a;
};
d.ha = function(a) {
  yc.s.ha.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.newValue = a.newValue;
};
d.ci = function() {
  return this.oldValue == this.newValue;
};
d.run = function(a) {
  var b = Ic(Lc(this), this.ac);
  if (b)
    switch (
      (b.ad && b.ad.qa(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (b = H(b, this.name))
          ? (Ae(b, a), b.setValue(a))
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        b.dh(a || null);
        break;
      case "collapsed":
        b.hg(a);
        break;
      case "disabled":
        b.Bd(a);
        break;
      case "inline":
        b.jg(a);
        break;
      case "mutation":
        var c = "";
        b.Ga && (c = (c = b.Ga()) && w.D.td(c));
        if (b.Za) {
          a = a || "<mutation></mutation>";
          var e = w.D.ed("<xml>" + a + "</xml>");
          b.Za(e.firstChild);
        }
        w.j.V(new yc(b, "mutation", null, c, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.ac);
};
function wc(a) {
  a &&
    (wc.s.constructor.call(this, a),
    (this.xml = a.o.R ? w.D.hn(a) : w.D.Af(a)),
    (this.Mf = w.j.yr(a)));
}
v(wc, ze);
w.j.Ek = wc;
wc.prototype.type = w.j.Fk;
wc.prototype.Ba = function() {
  var a = wc.s.Ba.call(this);
  a.xml = w.D.td(this.xml);
  a.ids = this.Mf;
  return a;
};
wc.prototype.ha = function(a) {
  wc.s.ha.call(this, a);
  this.xml = w.D.ed("<xml>" + a.xml + "</xml>").firstChild;
  this.Mf = a.ids;
};
wc.prototype.run = function(a) {
  var b = Lc(this);
  if (a) (a = E("xml")), a.appendChild(this.xml), w.D.ee(a, b);
  else {
    a = 0;
    for (var c; (c = this.Mf[a]); a++) {
      var e = Ic(b, c);
      e
        ? e.A(!1, !1)
        : c == this.ac &&
          console.warn("Can't uncreate non-existent block: " + c);
    }
  }
};
function xc(a) {
  if (a) {
    if (a.getParent()) throw "Connected blocks cannot be deleted.";
    xc.s.constructor.call(this, a);
    this.bx = a.o.R ? w.D.hn(a) : w.D.Af(a);
    this.Mf = w.j.yr(a);
  }
}
v(xc, ze);
w.j.Dt = xc;
xc.prototype.type = w.j.Km;
xc.prototype.Ba = function() {
  var a = xc.s.Ba.call(this);
  a.ids = this.Mf;
  return a;
};
xc.prototype.ha = function(a) {
  xc.s.ha.call(this, a);
  this.Mf = a.ids;
};
xc.prototype.run = function(a) {
  var b = Lc(this);
  if (a) {
    a = 0;
    for (var c; (c = this.Mf[a]); a++) {
      var e = Ic(b, c);
      e
        ? e.A(!1, !1)
        : c == this.ac && console.warn("Can't delete non-existent block: " + c);
    }
  } else (a = E("xml")), a.appendChild(this.bx), w.D.ee(a, b);
};
function zc(a) {
  a &&
    (zc.s.constructor.call(this, a),
    (a = Be(this)),
    (this.vs = a.Hs),
    (this.us = a.Or),
    (this.Ao = a.Gq));
}
v(zc, ze);
w.j.Gi = zc;
d = zc.prototype;
d.type = w.j.Oi;
d.Ba = function() {
  var a = zc.s.Ba.call(this);
  this.Ug && (a.newParentId = this.Ug);
  this.Tg && (a.newInputName = this.Tg);
  this.Yf &&
    (a.newCoordinate = Math.round(this.Yf.x) + "," + Math.round(this.Yf.y));
  return a;
};
d.ha = function(a) {
  zc.s.ha.call(this, a);
  this.Ug = a.newParentId;
  this.Tg = a.newInputName;
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.Yf = new C(parseFloat(a[0]), parseFloat(a[1]))));
};
d.ff = function() {
  var a = Be(this);
  this.Ug = a.Hs;
  this.Tg = a.Or;
  this.Yf = a.Gq;
};
function Be(a) {
  var b = Ic(uc[a.Cc] || null, a.ac);
  a = {};
  var c = b.getParent();
  if (c) {
    a.Hs = c.id;
    a: {
      for (var e = 0, f; (f = c.W[e]); e++)
        if (f.connection && I(f.connection) == b) {
          b = f;
          break a;
        }
      b = null;
    }
    b && (a.Or = b.name);
  } else a.Gq = b.la();
  return a;
}
d.ci = function() {
  return this.vs == this.Ug && this.us == this.Tg && qc(this.Ao, this.Yf);
};
d.run = function(a) {
  var b = Lc(this),
    c = Ic(b, this.ac);
  if (c) {
    var e = a ? this.Ug : this.vs,
      f = a ? this.Tg : this.us;
    a = a ? this.Yf : this.Ao;
    var h = null;
    if (e && ((h = Ic(b, e)), !h)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    c.getParent() && Ce(c);
    if (a) (f = c.la()), c.moveBy(a.x - f.x, a.y - f.y);
    else {
      c = c.P || c.Z;
      if (f) {
        if ((b = J(h, f))) var k = b.connection;
      } else c.type == w.wf && (k = h.L);
      k
        ? c.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.ac);
};
function Dc(a, b, c, e) {
  Dc.s.constructor.call(this);
  this.ac = a ? a.id : null;
  this.Cc = a ? a.o.id : null;
  this.element = b;
  this.oldValue = c;
  this.newValue = e;
  this.jc = !1;
}
v(Dc, Kc);
Dc.prototype.type = w.j.Ym;
Dc.prototype.Ba = function() {
  var a = Dc.s.Ba.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.ac && (a.blockId = this.ac);
  return a;
};
Dc.prototype.ha = function(a) {
  Dc.s.ha.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.ac = a.blockId;
};
function De(a) {
  this.U = a;
}
d = De.prototype;
d.zq = !0;
d.Tm = 17;
d.Xa = null;
d.Mg = null;
function Ee(a) {
  a.wc ||
    ((a.wc = w.i.B("g", { class: "blocklyIconGroup" }, null)),
    a.U.sb && w.i.mb(a.wc, "blocklyIconGroupReadonly"),
    a.Gn(a.wc),
    a.U.ga().appendChild(a.wc),
    w.O(a.wc, "mouseup", a, a.co),
    a.tf());
}
d.A = function() {
  F(this.wc);
  this.wc = null;
  this.qa(!1);
  this.U = null;
};
d.tf = function() {};
d.Y = function() {
  return !!this.Xa;
};
d.co = function(a) {
  this.U.o.pb() || this.U.sb || w.i.Tf(a) || this.qa(!this.Y());
};
d.sf = function() {
  this.Y() && this.Xa.qb(this.U.ce);
};
function Fe(a) {
  var b = a.U.la(),
    c = w.i.uc(a.wc);
  b = new C(b.x + c.x + a.Tm / 2, b.y + c.y + a.Tm / 2);
  qc(a.Mg, b) || ((a.Mg = b), a.Y() && ((a = a.Xa), (a.pd = b), a.eg && pe(a)));
}
// Copyright 2011 Google Inc.  Apache License 2.0
function Ge(a) {
  Ge.s.constructor.call(this, a);
  Ee(this);
}
v(Ge, De);
d = Ge.prototype;
d.na = "";
d.ia = 160;
d.Fa = 80;
d.Gn = function(a) {
  w.i.B("circle", { class: "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
  w.i.B(
    "path",
    {
      class: "blocklyIconSymbol",
      d:
        "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z"
    },
    a
  );
  w.i.B(
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
d.cj = function() {
  this.Xc = w.i.B("foreignObject", { x: qe, y: qe }, null);
  var a = document.createElementNS(w.uf, "body");
  a.setAttribute("xmlns", w.uf);
  a.className = "blocklyMinimalBody";
  var b = document.createElementNS(w.uf, "textarea");
  b.className = "blocklyCommentTextarea";
  b.setAttribute("dir", this.U.u ? "RTL" : "LTR");
  a.appendChild(b);
  this.ub = b;
  this.Xc.appendChild(a);
  w.O(b, "mouseup", this, this.Sx, !0, !0);
  w.O(b, "wheel", this, function(a) {
    a.stopPropagation();
  });
  w.O(b, "change", this, function() {
    this.na != b.value &&
      (w.j.V(new w.j.Dc(this.U, "comment", null, this.na, b.value)),
      (this.na = b.value));
  });
  setTimeout(function() {
    b.focus();
  }, 0);
  return this.Xc;
};
d.tf = function() {
  this.Y() && (this.qa(!1), this.qa(!0));
  De.prototype.tf.call(this);
};
d.pm = function() {
  if (this.Y()) {
    var a = this.Xa.Ig(),
      b = 2 * qe;
    this.Xc.setAttribute("width", a.width - b);
    this.Xc.setAttribute("height", a.height - b);
    this.ub.style.width = a.width - b - 4 + "px";
    this.ub.style.height = a.height - b - 4 + "px";
  }
};
d.qa = function(a) {
  if (a != this.Y())
    if (
      (w.j.V(new Dc(this.U, "commentOpen", !a, a)),
      (!He(this.U) && !this.ub) || z)
    )
      Ie.prototype.qa.call(this, a);
    else {
      var b = this.Hb(),
        c = this.Ig();
      a
        ? ((this.Xa = new ne(
            this.U.o,
            this.cj(),
            this.U.Cd,
            this.Mg,
            this.ia,
            this.Fa
          )),
          we(this.Xa, this.U.id),
          (a = this.pm.bind(this)),
          (this.Xa.Xo = a),
          this.sf())
        : (this.Xa.A(), (this.Xc = this.ub = this.Xa = null));
      this.Sb(b);
      this.gg(c.width, c.height);
    }
};
d.Sx = function() {
  xe(this.Xa) && this.ub.focus();
};
d.Ig = function() {
  return this.Y() ? this.Xa.Ig() : { width: this.ia, height: this.Fa };
};
d.gg = function(a, b) {
  this.ub ? this.Xa.gg(a, b) : ((this.ia = a), (this.Fa = b));
};
d.Hb = function() {
  return this.ub ? this.ub.value : this.na;
};
d.Sb = function(a) {
  this.na != a &&
    (w.j.V(new w.j.Dc(this.U, "comment", null, this.na, a)), (this.na = a));
  this.ub && (this.ub.value = a);
};
d.A = function() {
  w.j.isEnabled() && this.Sb("");
  this.U.Ta = null;
  De.prototype.A.call(this);
};
function Je(a, b) {
  this.v = a;
  this.type = b;
  a.o.pn &&
    ((this.sd = a.o.pn[b]), (this.$k = a.o.pn[w.Dh[b]]), (this.bo = !this.sd));
}
d = Je.prototype;
d.Pa = null;
d.Ne = null;
d.Ae = null;
d.Pc = 0;
d.Ra = 0;
d.Of = !1;
d.sd = null;
d.$k = null;
d.bo = null;
d.Xk = function(a) {
  var b = this,
    c = b.v,
    e = a.v;
  a.isConnected() && a.disconnect();
  if (b.isConnected()) {
    var f = I(b),
      h = b.Ae;
    b.Ae = null;
    if (f.gb) (h = w.D.Af(f)), f.A(), (f = null);
    else if (b.type == w.kb) {
      if (!f.P) throw "Orphan block does not have an output connection.";
      var k = Ke(e, f);
      k && (f.P.connect(k), (f = null));
    } else if (b.type == w.Wa) {
      if (!f.Z) throw "Orphan block does not have a previous connection.";
      for (k = e; k.L; ) {
        var l = Jc(k);
        if (l && !l.gb) k = l;
        else {
          Le(f.Z, k.L) && (k.L.connect(f.Z), (f = null));
          break;
        }
      }
    }
    if (f && (b.disconnect(), w.j.jc)) {
      var m = w.j.tc();
      setTimeout(function() {
        f.o &&
          !f.getParent() &&
          (w.j.S(m), f.P ? Me(f.P, b) : f.Z && Me(f.Z, b), w.j.S(!1));
      }, w.Dk);
    }
    b.Ae = h;
  }
  var n;
  w.j.isEnabled() && (n = new w.j.Gi(e));
  Ne(b, a);
  e.gh(c);
  n && (n.ff(), w.j.V(n));
};
d.A = function() {
  if (this.isConnected()) throw "Disconnect connection before disposing of it.";
  this.Of && Oe(this.sd, this);
  this.$k = this.sd = null;
};
function Pe(a) {
  return a.type == w.kb || a.type == w.Wa;
}
d.isConnected = function() {
  return !!this.Pa;
};
function Qe(a, b) {
  if (!b) return 3;
  if (Pe(a))
    var c = a.v,
      e = b.v;
  else (e = a.v), (c = b.v);
  return c && c == e
    ? 1
    : b.type != w.Dh[a.type]
    ? 2
    : c && e && c.o !== e.o
    ? 5
    : Le(a, b)
    ? c.gb && !e.gb
      ? 6
      : 0
    : 4;
}
d.Ol = function(a) {
  if (0 != Qe(this, a)) return !1;
  if (a.type == w.Gh || a.type == w.wf)
    if (a.isConnected() || this.isConnected()) return !1;
  return (a.type == w.kb && a.isConnected() && !I(a).re() && !I(a).gb) ||
    (this.type == w.wf && a.isConnected() && !this.v.L && !I(a).gb && I(a).L) ||
    -1 != w.jl.indexOf(a)
    ? !1
    : !0;
};
d.connect = function(a) {
  if (this.Pa != a) {
    switch (Qe(this, a)) {
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
          (this + " expected " + this.Ne + ", found " + a.Ne);
      case 6:
        throw "Connecting non-shadow to shadow block.";
      default:
        throw "Unknown connection failure: this should never happen!";
    }
    Pe(this) ? this.Xk(a) : a.Xk(this);
  }
};
function Ne(a, b) {
  a.Pa = b;
  b.Pa = a;
}
function Re(a, b) {
  for (var c = !1, e = 0; e < a.W.length; e++) {
    var f = a.W[e].connection;
    if (f && f.type == w.kb && Le(b.P, f)) {
      if (c) return null;
      c = f;
    }
  }
  return c;
}
function Ke(a, b) {
  for (var c; (c = Re(a, b)); ) if (((a = I(c)), !a || a.gb)) return c;
  return null;
}
d.disconnect = function() {
  var a = this.Pa;
  if (Pe(this)) {
    var b = this.v;
    var c = a.v;
    a = this;
  } else (b = a.v), (c = this.v);
  this.Cn(b, c);
  a.ap();
};
d.Cn = function(a, b) {
  var c;
  w.j.isEnabled() && (c = new w.j.Gi(b));
  this.Pa = this.Pa.Pa = null;
  b.gh(null);
  c && (c.ff(), w.j.V(c));
};
d.ap = function() {
  var a = this.v,
    b = this.Ae;
  if (a.o && b && w.j.jc)
    if (((a = w.D.Ph(b, a.o)), a.P)) this.connect(a.P);
    else if (a.Z) this.connect(a.Z);
    else throw "Child block does not have output or previous statement.";
};
function I(a) {
  return a.isConnected() ? a.Pa.v : null;
}
function Le(a, b) {
  if (!a.Ne || !b.Ne) return !0;
  for (var c = 0; c < a.Ne.length; c++)
    if (-1 != b.Ne.indexOf(a.Ne[c])) return !0;
  return !1;
}
d.xs = function() {
  this.isConnected() && !Le(this, this.Pa) && Ce(Pe(this) ? I(this) : this.v);
};
d.Ca = function(a) {
  a ? (r(a) || (a = [a]), (this.Ne = a), this.xs()) : (this.Ne = null);
  return this;
};
d.ss = function() {
  return [];
};
d.toString = function() {
  var a = this.v;
  if (a)
    if (a.P == this) var b = "Output Connection of ";
    else if (a.Z == this) b = "Previous Connection of ";
    else if (a.L == this) b = "Next Connection of ";
    else if (
      (b = wa(
        a.W,
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
  return b + Se(a);
};
function Te() {}
Te.prototype = [];
function Ue(a, b) {
  if (b.Of) throw "Connection already in database.";
  b.v.sb || (a.splice(Ve(a, b), 0, b), (b.Of = !0));
}
function We(a, b) {
  if (!a.length) return -1;
  var c = Ve(a, b);
  if (c >= a.length) return -1;
  for (var e = b.Ra, f = c; 0 <= f && a[f].Ra == e; ) {
    if (a[f] == b) return f;
    f--;
  }
  for (; c < a.length && a[c].Ra == e; ) {
    if (a[c] == b) return c;
    c++;
  }
  return -1;
}
function Ve(a, b) {
  if (!a.length) return 0;
  for (var c = 0, e = a.length; c < e; ) {
    var f = Math.floor((c + e) / 2);
    if (a[f].Ra < b.Ra) c = f + 1;
    else if (a[f].Ra > b.Ra) e = f;
    else {
      c = f;
      break;
    }
  }
  return c;
}
function Oe(a, b) {
  if (!b.Of) throw "Connection not in database.";
  var c = We(a, b);
  if (-1 == c) throw "Unable to find connection in connectionDB.";
  b.Of = !1;
  a.splice(c, 1);
}
function Xe(a, b, c) {
  function e(a) {
    var b = h - f[a].Pc,
      e = k - f[a].Ra;
    Math.sqrt(b * b + e * e) <= c && m.push(f[a]);
    return e < c;
  }
  var f = a,
    h = b.Pc,
    k = b.Ra;
  a = 0;
  for (var l = (b = f.length - 2); a < l; )
    f[l].Ra < k ? (a = l) : (b = l), (l = Math.floor((a + b) / 2));
  var m = [];
  b = a = l;
  if (f.length) {
    for (; 0 <= a && e(a); ) a--;
    do b++;
    while (b < f.length && e(b));
  }
  return m;
}
w.MB = {};
w.Rp = 5;
w.Ot = 10;
w.Rc = 20;
w.Dk = 250;
w.Et = 30;
w.fu = 750;
w.xu = 100;
w.Nt = !0;
w.Wt = 0.45;
w.Xt = 0.65;
w.mc = { width: 96, height: 124, url: "sprites.png" };
w.Wm = "http://www.w3.org/2000/svg";
w.uf = "http://www.w3.org/1999/xhtml";
w.kb = 1;
w.Gh = 2;
w.Wa = 3;
w.wf = 4;
w.Ge = 5;
w.Fi = -1;
w.Bk = 0;
w.Nb = 1;
w.kz = 0;
w.lz = 1;
w.iz = 1;
w.jz = 2;
w.Dh = [];
w.Dh[w.kb] = w.Gh;
w.Dh[w.Gh] = w.kb;
w.Dh[w.Wa] = w.wf;
w.Dh[w.wf] = w.Wa;
w.yf = 0;
w.wg = 1;
w.xf = 2;
w.Xd = 3;
w.Op = null;
w.Lm = 1;
w.Pp = 2;
w.Yp = "VARIABLE";
w.Gu = "VARIABLE_DYNAMIC";
w.Wp = "PROCEDURE";
w.Xp = "RENAME_VARIABLE_ID";
w.Qp = "DELETE_VARIABLE_ID";
w.Ha = {};
w.Ha.Dn = 0;
w.Ha.dl = null;
w.Ha.Nv = function(a) {
  var b = a.o,
    c = a.ga();
  b.Zd.play("delete");
  a = Ye(b, c);
  c = c.cloneNode(!0);
  c.Xx = a.x;
  c.Yx = a.y;
  c.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  K(b).appendChild(c);
  c.iq = c.getBBox();
  w.Ha.jr(c, b.u, new Date(), b.scale);
};
w.Ha.jr = function(a, b, c, e) {
  var f = (new Date() - c) / 150;
  1 < f
    ? F(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.Xx + (((b ? -1 : 1) * a.iq.width * e) / 2) * f) +
          "," +
          (a.Yx + a.iq.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(w.Ha.jr, 10, a, b, c, e));
};
w.Ha.rv = function(a) {
  var b = a.o,
    c = b.scale;
  b.Zd.play("click");
  if (!(1 > c)) {
    var e = Ye(b, a.ga());
    a.P
      ? ((e.x += (a.u ? 3 : -3) * c), (e.y += 13 * c))
      : a.Z && ((e.x += (a.u ? -23 : 23) * c), (e.y += 3 * c));
    a = w.i.B(
      "circle",
      {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: "none",
        stroke: "#888",
        "stroke-width": 10
      },
      K(b)
    );
    w.Ha.Eq(a, new Date(), c);
  }
};
w.Ha.Eq = function(a, b, c) {
  var e = (new Date() - b) / 150;
  1 < e
    ? F(a)
    : (a.setAttribute("r", 25 * e * c),
      (a.style.opacity = 1 - e),
      (w.Ha.Dn = setTimeout(w.Ha.Eq, 10, a, b, c)));
};
w.Ha.Mv = function(a) {
  a.o.Zd.play("disconnect");
  if (!(1 > a.o.scale)) {
    var b = a.Gb().height;
    b = (Math.atan(10 / b) / Math.PI) * 180;
    a.u || (b *= -1);
    w.Ha.ir(a.ga(), b, new Date());
  }
};
w.Ha.ir = function(a, b, c) {
  var e = (new Date() - c) / 200;
  1 < e
    ? (a.jh = "")
    : ((a.jh =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * b) + ")"),
      (w.Ha.dl = a),
      (w.Ha.Dn = setTimeout(w.Ha.ir, 10, a, b, c)));
  a.setAttribute("transform", a.qf + a.jh);
};
w.Ha.En = function() {
  if (w.Ha.dl) {
    clearTimeout(w.Ha.Dn);
    var a = w.Ha.dl;
    a.jh = "";
    a.setAttribute("transform", a.qf);
    w.Ha.dl = null;
  }
};
function Ze(a, b) {
  Ze.s.constructor.call(this, a, b);
  this.gm = new C(0, 0);
}
v(Ze, Je);
function $e(a, b) {
  var c = a.Pc - b.Pc;
  a = a.Ra - b.Ra;
  return Math.sqrt(c * c + a * a);
}
function Me(a, b) {
  if (!a.v.o.pb()) {
    var c = af(a.v);
    if (!c.sb) {
      var e = !1;
      if (!c.re()) {
        c = af(b.v);
        if (!c.re()) return;
        b = a;
        e = !0;
      }
      var f = w.selected == c;
      f || c.Jh();
      var h = b.Pc + w.Rc - a.Pc;
      a = b.Ra + w.Rc - a.Ra;
      e && (a = -a);
      c.u && (h = -h);
      c.moveBy(h, a);
      f || c.ah();
    }
  }
}
d = Ze.prototype;
d.moveTo = function(a, b) {
  this.Of && Oe(this.sd, this);
  this.Pc = a;
  this.Ra = b;
  this.bo || Ue(this.sd, this);
};
d.moveBy = function(a, b) {
  this.moveTo(this.Pc + a, this.Ra + b);
};
function bf(a, b) {
  a.moveTo(b.x + a.gm.x, b.y + a.gm.y);
}
function cf(a, b, c) {
  a.gm.x = b;
  a.gm.y = c;
}
function df(a) {
  var b = a.Pa.Pc - a.Pc,
    c = a.Pa.Ra - a.Ra;
  if (0 != b || 0 != c) {
    a = I(a);
    var e = a.ga();
    if (!e) throw "block is not rendered.";
    e = w.i.uc(e);
    a.ga().setAttribute(
      "transform",
      "translate(" + (e.x - b) + "," + (e.y - c) + ")"
    );
    ef(a, -b, -c);
  }
}
d.closest = function(a, b) {
  var c = this.$k;
  if (c.length) {
    var e = this.Ra,
      f = this.Pc;
    this.Pc = f + b.x;
    this.Ra = e + b.y;
    var h = Ve(c, this);
    b = null;
    for (var k = a, l, m = h - 1; 0 <= m && Math.abs(c[m].Ra - this.Ra) <= a; )
      (l = c[m]), this.Ol(l, k) && ((b = l), (k = $e(l, this))), m--;
    for (; h < c.length && Math.abs(c[h].Ra - this.Ra) <= a; )
      (l = c[h]), this.Ol(l, k) && ((b = l), (k = $e(l, this))), h++;
    this.Pc = f;
    this.Ra = e;
    a = { connection: b, Ss: k };
  } else a = { connection: null, Ss: a };
  return a;
};
d.Lr = function() {
  var a =
    this.type == w.kb || this.type == w.Gh
      ? "m 0,0 " + ff + " v 5"
      : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5";
  var b = this.v.la();
  Je.Mr = w.i.B(
    "path",
    {
      class: "blocklyHighlightedConnectionPath",
      d: a,
      transform:
        "translate(" +
        (this.Pc - b.x) +
        "," +
        (this.Ra - b.y) +
        ")" +
        (this.v.u ? " scale(-1 1)" : "")
    },
    this.v.ga()
  );
};
function gf(a) {
  hf(a, !1);
  var b = [];
  if (a.type != w.kb && a.type != w.Wa) return b;
  if ((a = I(a))) {
    if (a.isCollapsed()) {
      var c = [];
      a.P && c.push(a.P);
      a.L && c.push(a.L);
      a.Z && c.push(a.Z);
    } else c = a.ke(!0);
    for (var e = 0; e < c.length; e++) b.push.apply(b, gf(c[e]));
    b.length || (b[0] = a);
  }
  return b;
}
function jf() {
  F(Je.Mr);
  delete Je.Mr;
}
function hf(a, b) {
  (a.bo = b) && a.Of ? Oe(a.sd, a) : b || a.Of || Ue(a.sd, a);
}
d.Ol = function(a, b) {
  return $e(this, a) > b ? !1 : Ze.s.Ol.call(this, a);
};
d.Cn = function(a, b) {
  Ze.s.Cn.call(this, a, b);
  a.R && a.$();
  b.R && (kf(b), b.$());
};
d.ap = function() {
  var a = this.v,
    b = this.Ae;
  if (a.o && b && w.j.jc) {
    Ze.s.ap.call(this);
    b = I(this);
    if (!b) throw "Couldn't respawn the shadow block that should exist here.";
    b.xc();
    b.$(!1);
    a.R && a.$();
  }
};
d.ss = function(a) {
  return Xe(this.$k, this, a);
};
d.Xk = function(a) {
  Ze.s.Xk.call(this, a);
  var b = this.v;
  a = a.v;
  b.R && kf(b);
  a.R && kf(a);
  b.R && a.R && (this.type == w.Wa || this.type == w.wf ? a.$() : b.$());
};
d.xs = function() {
  this.isConnected() &&
    !Le(this, this.Pa) &&
    (Ce(Pe(this) ? I(this) : this.v), this.v.ob());
};
function lf(a) {
  this.ng = w.selected = a;
  this.m = a.o;
  a = this.ng.ke(!1);
  var b;
  a: {
    for (b = this.ng.L; b; ) {
      var c = I(b);
      if (!c) break a;
      b = c.L;
    }
    b = null;
  }
  b && b != this.ng.L && a.push(b);
  this.fn = a;
  this.ii = this.ec = null;
  this.Uo = 0;
  this.tg = !1;
}
lf.prototype.A = function() {
  this.m = this.ng = null;
  this.fn.length = 0;
  this.ii = this.ec = null;
};
lf.prototype.update = function(a, b) {
  var c = this.ec,
    e = this.ec;
  this.ii = this.ec = null;
  this.Uo = w.Rc;
  for (var f = 0; f < this.fn.length; f++) {
    var h = this.fn[f],
      k = h.closest(this.Uo, a);
    k.connection && ((this.ec = k.connection), (this.ii = h), (this.Uo = k.Ss));
  }
  (a = e != this.ec) && c && jf();
  c = !!this.ec && b != w.Pp;
  this.tg = (b = !!b && !this.ng.getParent() && this.ng.gc()) && !c;
  b && this.ec && (jf(), (this.ec = null));
  !this.tg && a && this.ec && this.ec && this.ec.Lr();
};
function mf(a, b) {
  this.fb = a;
  this.m = b;
  this.Qh = new lf(this.fb);
  this.Dg = null;
  this.tg = !1;
  this.Ce = this.fb.la();
  b = [];
  a = vc(a, !1);
  for (var c = 0, e; (e = a[c]); c++) {
    e = nf(e);
    for (var f = 0; f < e.length; f++)
      b.push({ location: e[f].Mg, icon: e[f] });
  }
  this.il = b;
}
mf.prototype.A = function() {
  this.ib = this.m = this.fb = null;
  this.il.length = 0;
  this.Qh && (this.Qh.A(), (this.Qh = null));
};
function of(a, b, c) {
  c = a.oi(c);
  a.fb.cm(tc(a.Ce, c));
  for (var e = 0; e < a.il.length; e++) {
    var f = a.il[e],
      h = f.icon;
    f = tc(f.location, c);
    h.Mg = f;
    h.Y() && ((h = h.Xa), (h.pd = f), h.eg && pe(h));
  }
  a.Dg = pf(a.m, b);
  a.Qh.update(c, a.Dg);
  a.tg = a.Qh.tg;
  b = a.m.Nc;
  a.tg
    ? (a.fb.gk(!0), a.Dg == w.Lm && b && qf(b, !0))
    : (a.fb.gk(!1), b && qf(b, !1));
}
function rf(a, b, c) {
  of(a, b, c);
  a.il = [];
  w.Ha.En();
  b = a.oi(c);
  a.fb.ps(tc(a.Ce, b));
  c = a.m.Nc;
  a.tg ? (c && sf(c.close, 100, c), a.lj(), a.fb.A(!1, !0)) : c && c.close();
  a.tg ||
    (ef(a.fb, b.x, b.y),
    a.fb.ig(!1),
    (b = a.Qh),
    b.ec &&
      (b.ii.connect(b.ec),
      b.ng.R && (w.Ha.rv((Pe(b.ii) ? b.ec : b.ii).v), tf(af(b.ng))),
      b.ec && jf()),
    a.fb.$(),
    a.lj(),
    uf(a.fb));
  a.m.Rb(!0);
  (b = a.m.ca) &&
    w.i.Qb(b.Ec, a.fb.gc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  w.j.S(!1);
}
mf.prototype.lj = function() {
  var a = new w.j.Gi(this.fb);
  a.Ao = this.Ce;
  a.ff();
  w.j.V(a);
};
mf.prototype.oi = function(a) {
  a = new C(a.x / this.m.scale, a.y / this.m.scale);
  this.m.Kj && (a = a.scale(1 / this.m.options.Kb.scale));
  return a;
};
function vf(a, b, c, e, f) {
  this.w = w.i.B("g", { class: "blocklyComment" }, null);
  this.w.qf = "";
  this.qk = w.i.B("rect", {
    class: "blocklyCommentRect",
    x: 0,
    y: 0,
    rx: 3,
    ry: 3
  });
  this.w.appendChild(this.qk);
  this.eg = !1;
  this.Ee = w.i.Rf() && !!a.xb;
  vf.s.constructor.call(this, a, b, c, e, f);
  this.$();
}
v(vf, Vc);
d = vf.prototype;
d.A = function() {
  if (this.o) {
    if (w.selected == this) {
      this.rh();
      var a = this.o;
      a.Db && a.Db.cancel();
    }
    w.j.isEnabled() && w.j.V(new Hc(this));
    F(this.w);
    this.nh = this.mg = this.Xc = this.ub = this.qk = this.w = null;
    w.j.disable();
    vf.s.A.call(this);
    w.j.enable();
  }
};
d.xc = function() {
  this.o.options.readOnly ||
    this.In ||
    (w.O(this.mg, "mousedown", this, this.Is),
    w.O(this.nh, "mousedown", this, this.Is));
  this.In = !0;
  wf(this);
  this.ga().parentNode || this.o.Ud.appendChild(this.ga());
};
d.Is = function(a) {
  var b = this.o.le(a);
  b && (b.Bc || (b.Bc = this), (b.Lc = a));
};
d.xi = function(a) {
  if (!this.o.options.readOnly) {
    var b = [];
    this.gc() && this.re() && (b.push(w.ba.nv(this)), b.push(w.ba.mv(this)));
    w.ba.show(a, b, this.u);
  }
};
d.select = function() {
  if (w.selected != this) {
    var a = null;
    if (w.selected) {
      a = w.selected.id;
      w.j.disable();
      try {
        w.selected.rh();
      } finally {
        w.j.enable();
      }
    }
    a = new Dc(null, "selected", a, this.id);
    a.Cc = this.o.id;
    w.j.V(a);
    w.selected = this;
    this.Jh();
  }
};
d.rh = function() {
  if (w.selected == this) {
    var a = new Dc(null, "selected", this.id, null);
    a.Cc = this.o.id;
    w.j.V(a);
    w.selected = null;
    this.ah();
    xf(this);
  }
};
d.Jh = function() {
  w.i.mb(this.w, "blocklySelected");
  this.mp();
};
d.ah = function() {
  w.i.Qb(this.w, "blocklySelected");
  xf(this);
};
d.la = function() {
  var a = 0,
    b = 0,
    c = this.Ee ? this.o.xb.tc() : null,
    e = this.ga();
  if (e) {
    do {
      var f = w.i.uc(e);
      a += f.x;
      b += f.y;
      this.Ee &&
        this.o.xb.fe.firstChild == e &&
        ((f = this.o.xb.El()), (a += f.x), (b += f.y));
      e = e.parentNode;
    } while (e && e != this.o.Ud && e != c);
  }
  return (this.ld = new C(a, b));
};
d.moveBy = function(a, b) {
  var c = new Gc(this),
    e = this.la();
  this.translate(e.x + a, e.y + b);
  this.ld = new C(e.x + a, e.y + b);
  c.ff();
  w.j.V(c);
  yf(this.o);
};
d.translate = function(a, b) {
  this.ld = new C(a, b);
  this.ga().setAttribute("transform", "translate(" + a + "," + b + ")");
};
d.dm = function() {
  if (this.Ee) {
    var a = this.la();
    w.i.removeAttribute(this.ga(), "transform");
    this.o.xb.pf(a.x, a.y);
    zf(this.o.xb, this.ga());
  }
};
d.ps = function(a) {
  this.Ee && (this.translate(a.x, a.y), this.o.xb.Xi(this.o.Oa));
};
d.cm = function(a, b) {
  a
    ? a.pf(b.x, b.y)
    : ((this.w.qf = "translate(" + b.x + "," + b.y + ")"),
      this.w.setAttribute("transform", this.w.qf + this.w.jh));
};
d.moveTo = function(a, b) {
  this.translate(a, b);
};
d.On = function() {
  var a = this.la(),
    b = this.Gb();
  if (this.u) {
    var c = new C(a.x - b.width, a.y);
    a = new C(a.x, a.y + b.height);
  } else (c = new C(a.x, a.y)), (a = new C(a.x + b.width, a.y + b.height));
  return { gd: c, Fd: a };
};
function wf(a) {
  a.re() ? w.i.mb(a.w, "blocklyDraggable") : w.i.Qb(a.w, "blocklyDraggable");
}
d.fh = function(a) {
  vf.s.fh.call(this, a);
  wf(this);
};
d.ig = function(a) {
  a
    ? ((a = this.ga()),
      (a.qf = ""),
      (a.jh = ""),
      w.i.mb(this.w, "blocklyDragging"))
    : w.i.Qb(this.w, "blocklyDragging");
};
d.ga = function() {
  return this.w;
};
d.Ic = function() {
  return this.ub ? this.ub.value : this.Uc;
};
d.Ad = function(a) {
  vf.s.Ad.call(this, a);
  this.ub && (this.ub.value = a);
};
d.gk = function(a) {
  a
    ? w.i.mb(this.w, "blocklyDraggingDelete")
    : w.i.Qb(this.w, "blocklyDraggingDelete");
};
d.$s = function() {};
function Af(a, b, c) {
  w.j.disable();
  try {
    var e = Yc(a),
      f = new vf(b, e.content, e.Dr, e.vt, e.id);
    b.R && (f.xc(), f.$(!1));
    if (!isNaN(e.x) && !isNaN(e.y))
      if (b.u) {
        var h = c || b.Zc();
        f.moveBy(h - e.x, e.y);
      } else f.moveBy(e.x, e.y);
  } finally {
    w.j.enable();
  }
  Wc(f);
  return f;
}
d.rk = function(a) {
  var b;
  this.o.u && (b = this.o.Zc());
  a = Xc(this, a);
  var c = this.la();
  a.setAttribute("x", Math.round(this.o.u ? b - c.x : c.x));
  a.setAttribute("y", Math.round(c.y));
  a.setAttribute("h", this.Wh());
  a.setAttribute("w", this.Zc());
  return a;
};
function Bf(a, b) {
  this.Eb = a;
  this.m = b;
  this.Dg = null;
  this.Im = !1;
  this.Ce = this.Eb.la();
  this.Eg = w.i.Rf() && b.xb ? b.xb : null;
}
Bf.prototype.A = function() {
  this.Eg = this.m = this.Eb = null;
};
function Cf(a, b, c) {
  c = a.oi(c);
  a.Eb.cm(a.Eg, tc(a.Ce, c));
  a.Eb.gc() &&
    ((a.Dg = pf(a.m, b)),
    (a.Im = a.Dg != w.Op),
    (b = a.m.Nc),
    a.Im
      ? (a.Eb.gk(!0), a.Dg == w.Lm && b && qf(b, !0))
      : (a.Eb.gk(!1), b && qf(b, !1)));
}
function Df(a, b, c) {
  Cf(a, b, c);
  b = a.oi(c);
  b = tc(a.Ce, b);
  a.Eb.moveTo(b.x, b.y);
  b = a.m.Nc;
  a.Im ? (b && sf(b.close, 100, b), a.lj(), a.Eb.A(!1, !0)) : b && b.close();
  a.Im || (a.Eg && a.Eg.Xi(a.m.Ud), a.Eb.ig && a.Eb.ig(!1), a.lj());
  a.m.Rb(!0);
  a.m.ca &&
    w.i.Qb(
      a.m.ca.Ec,
      a.Eb.gc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab"
    );
  w.j.S(!1);
}
Bf.prototype.lj = function() {
  if (this.Eb.Rr) {
    var a = new Gc(this.Eb);
    a.Bo = this.Ce;
    a.ff();
    w.j.V(a);
  }
};
Bf.prototype.oi = function(a) {
  a = new C(a.x / this.m.scale, a.y / this.m.scale);
  this.m.Kj && (a = a.scale(1 / this.m.options.Kb.scale));
  return a;
};
Bf.prototype.dm = function() {
  this.Eb.moveTo(0, 0);
  this.Eg.pf(this.Ce.x, this.Ce.y);
  zf(this.Eg, this.Eb.ga());
};
function Ef(a) {
  this.m = a;
  this.Nx = a.rb();
  this.Px = new C(a.scrollX, a.scrollY);
}
Ef.prototype.A = function() {
  this.m = null;
};
Ef.prototype.Cm = function() {
  w.selected && w.selected.rh();
  Ff(this.m);
};
function Gf(a, b) {
  var c = a.Nx,
    e = tc(a.Px, b);
  b = Math.min(e.x, -c.Gc);
  e = Math.min(e.y, -c.oc);
  b = Math.max(b, c.xa - c.Gc - c.Hc);
  e = Math.max(e, c.bb - c.oc - c.nc);
  b = -b - c.Gc;
  e = -e - c.oc;
  a.st(b, e);
}
Ef.prototype.st = function(a, b) {
  this.m.hb.set(a, b);
};
function Hf(a) {
  Hf.s.constructor.call(this, a.vj());
  this.Vb = a.Vb;
  this.Ld = a.Ld;
}
v(Hf, Ef);
Hf.prototype.st = function(a, b) {
  this.Ld ? this.Vb.set(a) : this.Vb.set(b);
};
w.C = {};
w.C.visible = !1;
w.C.Lh = !1;
w.C.$t = 50;
w.C.os = 0;
w.C.lk = 0;
w.C.qo = 0;
w.C.ro = 0;
w.C.T = null;
w.C.km = null;
w.C.Sp = 0;
w.C.Tp = 10;
w.C.tu = 10;
w.C.Vt = 750;
w.C.Mm = 5;
w.C.ka = null;
w.C.X = function() {
  w.C.ka ||
    ((w.C.ka = E("DIV", "blocklyTooltipDiv")),
    document.body.appendChild(w.C.ka));
};
w.C.yg = function(a) {
  w.Fc(a, "mouseover", null, w.C.ux);
  w.Fc(a, "mouseout", null, w.C.tx);
  a.addEventListener("mousemove", w.C.sx, !1);
};
w.C.ux = function(a) {
  if (!w.C.Lh) {
    for (a = a.target; !p(a.fd) && !u(a.fd); ) a = a.fd;
    w.C.T != a && (w.C.La(), (w.C.km = null), (w.C.T = a));
    clearTimeout(w.C.os);
  }
};
w.C.tx = function() {
  w.C.Lh ||
    ((w.C.os = setTimeout(function() {
      w.C.T = null;
      w.C.km = null;
      w.C.La();
    }, 1)),
    clearTimeout(w.C.lk));
};
w.C.sx = function(a) {
  if (w.C.T && w.C.T.fd && !w.I.Y() && !w.C.Lh)
    if (w.C.visible) {
      var b = w.C.qo - a.pageX;
      a = w.C.ro - a.pageY;
      Math.sqrt(b * b + a * a) > w.C.tu && w.C.La();
    } else
      w.C.km != w.C.T &&
        (clearTimeout(w.C.lk),
        (w.C.qo = a.pageX),
        (w.C.ro = a.pageY),
        (w.C.lk = setTimeout(w.C.Jx, w.C.Vt)));
};
w.C.La = function() {
  w.C.visible &&
    ((w.C.visible = !1), w.C.ka && (w.C.ka.style.display = "none"));
  w.C.lk && clearTimeout(w.C.lk);
};
w.C.block = function() {
  w.C.La();
  w.C.Lh = !0;
};
w.C.Zx = function() {
  w.C.Lh = !1;
};
w.C.Jx = function() {
  if (!w.C.Lh && ((w.C.km = w.C.T), w.C.ka)) {
    ce(w.C.ka);
    for (var a = w.C.T.fd; u(a); ) a = a();
    a = w.i.yt(a, w.C.$t);
    a = a.split("\n");
    for (var b = 0; b < a.length; b++) {
      var c = document.createElement("div");
      c.appendChild(document.createTextNode(a[b]));
      w.C.ka.appendChild(c);
    }
    a = w.C.T.u;
    b = Xd();
    w.C.ka.style.direction = a ? "rtl" : "ltr";
    w.C.ka.style.display = "block";
    w.C.visible = !0;
    c = w.C.qo;
    c = a ? c - (w.C.Sp + w.C.ka.offsetWidth) : c + w.C.Sp;
    var e = w.C.ro + w.C.Tp;
    e + w.C.ka.offsetHeight > b.height + window.scrollY &&
      (e -= w.C.ka.offsetHeight + 2 * w.C.Tp);
    a
      ? (c = Math.max(w.C.Mm - window.scrollX, c))
      : c + w.C.ka.offsetWidth > b.width + window.scrollX - 2 * w.C.Mm &&
        (c = b.width - w.C.ka.offsetWidth - 2 * w.C.Mm);
    w.C.ka.style.top = e + "px";
    w.C.ka.style.left = c + "px";
  }
};
function If(a, b) {
  this.ib = this.Yb = this.kh = this.lh = this.Bc = this.pc = this.ns = null;
  this.vv = b;
  this.Ij = this.Pg = this.Jj = this.Kg = !1;
  this.Lc = a;
  this.H = this.sg = this.Le = this.Me = this.im = this.hm = null;
  this.Ql = this.Jr = !1;
  this.Kr = !w.Nt;
}
d = If.prototype;
d.A = function() {
  w.Touch.Qe();
  w.C.Zx();
  this.vv.Db = null;
  this.hm && w.Na(this.hm);
  this.im && w.Na(this.im);
  this.H = this.ib = this.Yb = this.kh = this.lh = null;
  this.Le && (this.Le.A(), (this.Le = null));
  this.sg && (this.sg.A(), (this.sg = null));
  this.Me && (this.Me.A(), (this.Me = null));
};
function Jf(a, b) {
  a.pc = sc(new C(b.clientX, b.clientY), a.ns);
  if (a.Kg) var c = !1;
  else
    (c = a.pc),
      (a.Kg = Math.sqrt(c.x * c.x + c.y * c.y) > (a.H ? w.Ot : w.Rp)),
      (c = a.Kg);
  if (c) {
    if (a.Bc) {
      a.Ij = !0;
      a.Me = new Bf(a.Bc, a.ib);
      c = a.Me;
      w.j.tc() || w.j.S(!0);
      c.m.Rb(!1);
      c.Eb.$s(!1);
      c.Eg && c.dm();
      c.Eb.ig && c.Eb.ig(!0);
      var e = c.m.ca;
      e &&
        w.i.mb(e.Ec, c.Eb.gc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
      Cf(a.Me, a.Lc, a.pc);
      c = !0;
    } else c = !1;
    if (!c) {
      if (a.Yb)
        if (
          (a.H
            ? (a.Yb.disabled
                ? (c = !1)
                : !Kf(a.H) || a.H.Sr(a.pc)
                ? ((a.ib = a.H.va),
                  Lf(a.ib),
                  w.j.tc() || w.j.S(!0),
                  (a.kh = null),
                  (a.Yb = Mf(a.H, a.Yb)),
                  a.Yb.select(),
                  (c = !0))
                : (c = !1),
              (a.Pg = c))
            : a.Yb.re() && (a.Pg = !0),
          a.Pg)
        ) {
          a.Le = new mf(a.Yb, a.ib);
          c = a.Le;
          e = a.pc;
          var f = a.Kr;
          w.j.tc() || w.j.S(!0);
          c.m.Rb(!1);
          w.Ha.En();
          if (c.fb.getParent() || (f && c.fb.L && I(c.fb.L)))
            Ce(c.fb, f),
              (e = c.oi(e)),
              (e = tc(c.Ce, e)),
              c.fb.translate(e.x, e.y),
              w.Ha.Mv(c.fb);
          c.fb.ig(!0);
          c.fb.dm();
          (e = c.m.ca) &&
            w.i.mb(
              e.Ec,
              c.fb.gc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab"
            );
          of(a.Le, a.Lc, a.pc);
          c = !0;
        } else c = !1;
      else c = !1;
      !c &&
        (a.H ? Kf(a.H) : a.ib && a.ib.hb) &&
        ((a.sg = a.H ? new Hf(a.H) : new Ef(a.ib)), (a.Jj = !0), a.sg.Cm());
    }
    w.Wf();
  }
  a.Lc = b;
}
d.ij = function(a) {
  w.i.Tl(a)
    ? this.cancel()
    : ((this.Jr = !0),
      w.Ha.En(),
      Lf(this.ib),
      this.ib.Kj && this.ib.resize(),
      Nf(this.ib),
      (this.Lc = a),
      w.Pb(!!this.H),
      w.C.block(),
      this.Yb && this.Yb.select(),
      w.i.Tf(a)
        ? pc(this, a)
        : (("touchstart" == a.type.toLowerCase() ||
            ("pointerdown" == a.type.toLowerCase() &&
              "mouse" != a.pointerType)) &&
            w.Rw(a, this),
          (this.ns = new C(a.clientX, a.clientY)),
          (this.Kr = a.altKey || a.ctrlKey || a.metaKey),
          this.yg(a)));
};
d.yg = function(a) {
  this.hm = w.O(document, "mousemove", null, this.zj.bind(this));
  this.im = w.O(document, "mouseup", null, this.Il.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
d.zj = function(a) {
  Jf(this, a);
  this.Jj
    ? Gf(this.sg, this.pc)
    : this.Pg
    ? of(this.Le, this.Lc, this.pc)
    : this.Ij && Cf(this.Me, this.Lc, this.pc);
  a.preventDefault();
  a.stopPropagation();
};
d.Il = function(a) {
  Jf(this, a);
  w.Wf();
  if (this.Ql) console.log("Trying to end a gesture recursively.");
  else {
    this.Ql = !0;
    if (this.Ij) Df(this.Me, a, this.pc);
    else if (this.Pg) rf(this.Le, a, this.pc);
    else if (this.Jj) {
      var b = this.sg;
      Gf(b, this.pc);
      Of(b.m);
    } else
      this.Bc && !this.Kg
        ? (this.Bc.mp && this.Bc.mp(), this.Bc.select && this.Bc.select())
        : Pf(this)
        ? (this.lh.Be(), Qf(this))
        : !this.kh || this.Kg || Pf(this)
        ? this.kh ||
          this.Bc ||
          this.lh ||
          this.Kg ||
          (w.selected && w.selected.rh())
        : (this.H && this.H.Kh
            ? this.Yb.disabled ||
              (w.j.tc() || w.j.S(!0), uf(Mf(this.H, this.Yb)))
            : w.j.V(new Dc(this.kh, "click", void 0, void 0)),
          Qf(this),
          w.j.S(!1));
    a.preventDefault();
    a.stopPropagation();
    this.A();
  }
};
d.cancel = function() {
  if (!this.Ql) {
    w.Wf();
    if (this.Ij) Df(this.Me, this.Lc, this.pc);
    else if (this.Pg) rf(this.Le, this.Lc, this.pc);
    else if (this.Jj) {
      var a = this.sg;
      Gf(a, this.pc);
      Of(a.m);
    }
    this.A();
  }
};
function pc(a, b) {
  a.Yb
    ? (Qf(a), w.Pb(a.H), a.Yb.xi(b))
    : a.Bc
    ? a.Bc.xi(b)
    : a.ib && !a.H && (w.Pb(), a.ib.xi(b));
  b.preventDefault();
  b.stopPropagation();
  a.A();
}
function Qf(a) {
  a.Yb && !a.H && tf(a.Yb);
}
function Rf(a, b) {
  a.kh || a.Bc || ((a.kh = b), b.sb && b != af(b) ? Sf(a, af(b)) : Sf(a, b));
}
function Sf(a, b) {
  b.gb ? Sf(a, b.getParent()) : (a.Yb = b);
}
function Pf(a) {
  if (a.lh) {
    var b = a.lh;
    b = b.ug && !!b.v && He(b.v);
  } else b = !1;
  return b && !a.Kg && (!a.H || !a.H.Kh);
}
d.pb = function() {
  return this.Jj || this.Pg || this.Ij;
};
w.i = {};
w.i.removeAttribute = function(a, b) {
  z && vb("10.0") ? a.setAttribute(b, null) : a.removeAttribute(b);
};
w.i.mb = function(a, b) {
  var c = a.getAttribute("class") || "";
  if (-1 != (" " + c + " ").indexOf(" " + b + " ")) return !1;
  c && (c += " ");
  a.setAttribute("class", c + b);
  return !0;
};
w.i.Qb = function(a, b) {
  var c = a.getAttribute("class");
  if (-1 == (" " + c + " ").indexOf(" " + b + " ")) return !1;
  c = c.split(/\s+/);
  for (var e = 0; e < c.length; e++)
    (c[e] && c[e] != b) || (c.splice(e, 1), e--);
  c.length
    ? a.setAttribute("class", c.join(" "))
    : w.i.removeAttribute(a, "class");
  return !0;
};
w.i.Gr = function(a, b) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + b + " ");
};
w.i.$w = function(a) {
  a.preventDefault();
  a.stopPropagation();
};
w.i.Tl = function(a) {
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
w.i.uc = function(a) {
  var b = new C(0, 0),
    c = a.getAttribute("x");
  c && (b.x = parseInt(c, 10));
  if ((c = a.getAttribute("y"))) b.y = parseInt(c, 10);
  if ((c = (c = a.getAttribute("transform")) && c.match(w.i.uc.Ku)))
    (b.x += parseFloat(c[1])), c[3] && (b.y += parseFloat(c[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    ((c = a.match(w.i.uc.Iu)) || (c = a.match(w.i.uc.Ju)),
    c && ((b.x += parseFloat(c[1])), c[3] && (b.y += parseFloat(c[3]))));
  return b;
};
w.i.yl = function(a) {
  for (var b = 0, c = 0; a; ) {
    var e = w.i.uc(a);
    b += e.x;
    c += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
    )
      break;
    a = a.parentNode;
  }
  return new C(b, c);
};
w.i.uc.Ku = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;
w.i.uc.Ju = /transform:\s*translate3d\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
w.i.uc.Iu = /transform:\s*translate\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
w.i.B = function(a, b, c) {
  a = document.createElementNS(w.Wm, a);
  for (var e in b) a.setAttribute(e, b[e]);
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
  c && c.appendChild(a);
  return a;
};
w.i.Tf = function(a) {
  return a.ctrlKey && mb ? !0 : 2 == a.button;
};
w.i.Tj = function(a, b, c) {
  var e = b.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  c || (c = b.getScreenCTM().inverse());
  return e.matrixTransform(c);
};
w.i.sp = function(a) {
  return a.length
    ? a.reduce(function(a, c) {
        return a.length < c.length ? a : c;
      }).length
    : 0;
};
w.i.ov = function(a, b) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var c = 0;
  b = b || w.i.sp(a);
  for (var e = 0; e < b; e++) {
    for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return c;
    " " == f && (c = e + 1);
  }
  for (h = 1; h < a.length; h++) if ((f = a[h][e]) && " " != f) return c;
  return b;
};
w.i.pv = function(a, b) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var c = 0;
  b = b || w.i.sp(a);
  for (var e = 0; e < b; e++) {
    for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
      if (f != a[h].substr(-e - 1, 1)) return c;
    " " == f && (c = e + 1);
  }
  for (h = 1; h < a.length; h++)
    if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c;
  return b;
};
w.i.Ux = function(a) {
  return w.i.Fp(a, !0);
};
w.i.kc = function(a) {
  if (!p(a)) return a;
  a = w.i.Fp(a, !1);
  return a.length ? a[0] : "";
};
w.i.qq = function(a) {
  for (var b = w.g, c = /%{(BKY_[A-Z][A-Z0-9_]*)}/gi, e = c.exec(a); e; ) {
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
w.i.Fp = function(a, b) {
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
                (l = Ea(l, "BKY_") ? l.substring(4) : null) && l in w.g
                  ? ((f = w.g[l]),
                    p(f)
                      ? Array.prototype.push.apply(c, w.i.Fp(f, b))
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
w.i.je = function() {
  for (var a = w.i.je.dt.length, b = [], c = 0; 20 > c; c++)
    b[c] = w.i.je.dt.charAt(Math.random() * a);
  return b.join("");
};
w.i.je.dt =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
w.i.yt = function(a, b) {
  a = a.split("\n");
  for (var c = 0; c < a.length; c++) a[c] = w.i.iy(a[c], b);
  return a.join("\n");
};
w.i.iy = function(a, b) {
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
    a = w.i.zt(c, a, b);
    e = w.i.Jp(c, a, b);
    a = w.i.jy(c, a);
    f++;
  } while (e > h);
  return k;
};
w.i.Jp = function(a, b, c) {
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
w.i.zt = function(a, b, c) {
  for (var e = w.i.Jp(a, b, c), f, h = 0; h < b.length - 1; h++)
    if (b[h] != b[h + 1]) {
      var k = [].concat(b);
      k[h] = !k[h];
      k[h + 1] = !k[h + 1];
      var l = w.i.Jp(a, k, c);
      l > e && ((e = l), (f = k));
    }
  return f ? w.i.zt(a, f, c) : b;
};
w.i.jy = function(a, b) {
  for (var c = [], e = 0; e < a.length; e++)
    c.push(a[e]), void 0 !== b[e] && c.push(b[e] ? "\n" : " ");
  return c.join("");
};
w.i.Rf = function() {
  if (void 0 !== w.i.Rf.kn) return w.i.Rf.kn;
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
  w.i.Rf.kn = "none" !== b;
  return w.i.Rf.kn;
};
w.i.Gj = function(a, b) {
  var c = b.nextSibling;
  b = b.parentNode;
  if (!b) throw "Reference node has no parent.";
  c ? b.insertBefore(a, c) : b.appendChild(a);
};
w.i.Ys = function(a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" === document.readyState) a();
  else
    var b = setInterval(function() {
      "complete" === document.readyState && (clearInterval(b), a());
    }, 10);
};
w.i.fk = function(a, b) {
  a.style.transform = b;
  a.style["-webkit-transform"] = b;
};
w.i.Wn = function() {
  var a = Xd(),
    b = Tf();
  return { right: a.width + b.x, bottom: a.height + b.y, top: b.y, left: b.x };
};
function Uf(a, b) {
  this.Yh = a;
  this.xp = b.spacing;
  this.bs = b.length;
  this.Lw = (this.to = a.firstChild) && this.to.nextSibling;
  this.Kx = b.snap;
}
Uf.prototype.fg = 1;
Uf.prototype.A = function() {
  this.Yh = null;
};
Uf.prototype.update = function(a) {
  this.fg = a;
  var b = this.xp * a || 100;
  this.Yh.setAttribute("width", b);
  this.Yh.setAttribute("height", b);
  b = Math.floor(this.xp / 2) + 0.5;
  var c = b - this.bs / 2,
    e = b + this.bs / 2;
  b *= a;
  c *= a;
  e *= a;
  Vf(this.to, a, c, e, b, b);
  Vf(this.Lw, a, b, b, c, e);
};
function Vf(a, b, c, e, f, h) {
  a &&
    (a.setAttribute("stroke-width", b),
    a.setAttribute("x1", c),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", h));
}
Uf.prototype.moveTo = function(a, b) {
  this.Yh.setAttribute("x", a);
  this.Yh.setAttribute("y", b);
  (z || jb) && this.update(this.fg);
};
function Wf(a) {
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
    (c = Xf(a.toolbox)),
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
    q = a.horizontalLayout;
  void 0 === q && (q = !1);
  var t = a.toolboxPosition;
  t = "end" === t ? !1 : !0;
  t = q ? (t ? w.yf : w.wg) : t == n ? w.Xd : w.xf;
  var y = a.scrollbars;
  void 0 === y && (y = e);
  var x = a.css;
  void 0 === x && (x = !0);
  var B = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (B = a.media) : a.path && (B = a.path + "media/");
  var Ma = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex;
  this.u = n;
  this.ef = Ma;
  this.collapse = h;
  this.Zi = k;
  this.disable = l;
  this.readOnly = b;
  this.hs = a.maxBlocks || Infinity;
  this.Pd = B;
  this.Fr = e;
  this.Ir = y;
  this.xw = f;
  this.ww = m;
  this.vw = x;
  this.pe = q;
  this.se = c;
  b = a.grid || {};
  c = {};
  c.spacing = parseFloat(b.spacing) || 0;
  c.Aq = b.colour || "#888";
  c.length = parseFloat(b.length) || 1;
  c.YB = 0 < c.spacing && !!b.snap;
  this.Br = c;
  a = a.zoom || {};
  b = {};
  b.controls = void 0 === a.controls ? !1 : !!a.controls;
  b.gy = void 0 === a.wheel ? !1 : !!a.wheel;
  b.jt = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
  b.Rj = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
  b.Sj = void 0 === a.minScale ? 0.3 : parseFloat(a.minScale);
  b.Hx = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
  this.Zb = b;
  this.Da = t;
}
Wf.prototype.Kb = null;
Wf.prototype.kg = null;
Wf.prototype.rb = null;
function Xf(a) {
  a
    ? ("string" != typeof a &&
        ("undefined" == typeof XSLTProcessor && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a && (a = w.D.ed(a)))
    : (a = null);
  return a;
}
function Yf(a) {
  this.m = a;
  this.Jf = new Zf(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.qg = new Zf(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.aj = w.i.B(
    "rect",
    { height: G, width: G, class: "blocklyScrollbarBackground" },
    null
  );
  w.i.Gj(this.aj, a.Ud);
}
Yf.prototype.$a = null;
Yf.prototype.A = function() {
  F(this.aj);
  this.$a = this.m = this.aj = null;
  this.Jf.A();
  this.Jf = null;
  this.qg.A();
  this.qg = null;
};
Yf.prototype.resize = function() {
  var a = this.m.rb();
  if (a) {
    var b = !1,
      c = !1;
    this.$a &&
    this.$a.xa == a.xa &&
    this.$a.bb == a.bb &&
    this.$a.wb == a.wb &&
    this.$a.lb == a.lb
      ? ((this.$a &&
          this.$a.Hc == a.Hc &&
          this.$a.Ab == a.Ab &&
          this.$a.Gc == a.Gc) ||
          (b = !0),
        (this.$a &&
          this.$a.nc == a.nc &&
          this.$a.Fe == a.Fe &&
          this.$a.oc == a.oc) ||
          (c = !0))
      : (c = b = !0);
    b && this.Jf.resize(a);
    c && this.qg.resize(a);
    (this.$a && this.$a.xa == a.xa && this.$a.lb == a.lb) ||
      this.aj.setAttribute("x", this.qg.Mc.x);
    (this.$a && this.$a.bb == a.bb && this.$a.wb == a.wb) ||
      this.aj.setAttribute("y", this.Jf.Mc.y);
    this.$a = a;
  }
};
Yf.prototype.set = function(a, b) {
  var c = {};
  a *= this.Jf.ic;
  b *= this.qg.ic;
  var e = this.qg.zd,
    f = a / this.Jf.zd;
  c.x = isNaN(f) ? 0 : f;
  e = b / e;
  c.y = isNaN(e) ? 0 : e;
  this.m.kg(c);
  $f(this.Jf, a);
  $f(this.qg, b);
};
function Zf(a, b, c, e) {
  this.m = a;
  this.ni = c || !1;
  this.Lg = b;
  this.$a = null;
  this.bj(e);
  this.Mc = new C(0, 0);
  a = G;
  b
    ? (this.dd.setAttribute("height", a),
      this.te.setAttribute("height", a),
      this.De.setAttribute("height", a - 5),
      this.De.setAttribute("y", 2.5),
      (this.Oj = "width"),
      (this.Js = "x"))
    : (this.dd.setAttribute("width", a),
      this.te.setAttribute("width", a),
      this.De.setAttribute("width", a - 5),
      this.De.setAttribute("x", 2.5),
      (this.Oj = "height"),
      (this.Js = "y"));
  this.Cs = w.O(this.dd, "mousedown", this, this.ox);
  this.Ds = w.O(this.De, "mousedown", this, this.px);
}
var ag, bg;
d = Zf.prototype;
d.Io = new C(0, 0);
d.gt = 0;
d.zd = 0;
d.Kf = 0;
d.Aj = 0;
d.Mj = !0;
d.zg = !0;
var G = 15;
Bb && (G = 25);
Zf.prototype.A = function() {
  cg();
  w.Na(this.Cs);
  this.Cs = null;
  w.Na(this.Ds);
  this.Ds = null;
  F(this.te);
  this.m = this.De = this.dd = this.w = this.te = null;
};
function $f(a, b) {
  a.Aj = b;
  a.De.setAttribute(a.Js, a.Aj);
}
function dg(a, b) {
  a.zd = b;
  a.te.setAttribute(a.Oj, a.zd);
  a.dd.setAttribute(a.Oj, a.zd);
}
Yf.prototype.eh = function(a) {
  this.Jf.eh(a);
  this.qg.eh(a);
};
function eg(a, b, c) {
  a.Mc.x = b;
  a.Mc.y = c;
  w.i.fk(
    a.te,
    "translate(" + (a.Mc.x + a.Io.x) + "px," + (a.Mc.y + a.Io.y) + "px)"
  );
}
d = Zf.prototype;
d.resize = function(a) {
  if (!a && ((a = this.m.rb()), !a)) return;
  var b = this.$a;
  if (
    !a ||
    !b ||
    a.xa != b.xa ||
    a.bb != b.bb ||
    a.Ab != b.Ab ||
    a.Fe != b.Fe ||
    a.wb != b.wb ||
    a.lb != b.lb ||
    a.Hc != b.Hc ||
    a.nc != b.nc ||
    a.Gc != b.Gc ||
    a.oc != b.oc
  ) {
    this.$a = a;
    if (this.Lg) {
      b = a.xa - 1;
      this.ni && (b -= G);
      dg(this, Math.max(0, b));
      b = a.lb + 0.5;
      this.ni && this.m.u && (b += G);
      eg(this, b, a.wb + a.bb - G - 0.5);
      this.ni || this.qa(this.zd < a.Hc);
      this.ic = this.zd / a.Hc;
      if (-Infinity == this.ic || Infinity == this.ic || isNaN(this.ic))
        this.ic = 0;
      this.Kf = Math.max(0, a.xa * this.ic);
      this.De.setAttribute(this.Oj, this.Kf);
      $f(this, fg(this, (a.Ab - a.Gc) * this.ic));
    } else {
      b = a.bb - 1;
      this.ni && (b -= G);
      dg(this, Math.max(0, b));
      b = a.lb + 0.5;
      this.m.u || (b += a.xa - G - 1);
      eg(this, b, a.wb + 0.5);
      this.ni || this.qa(this.zd < a.nc);
      this.ic = this.zd / a.nc;
      if (-Infinity == this.ic || Infinity == this.ic || isNaN(this.ic))
        this.ic = 0;
      this.Kf = Math.max(0, a.bb * this.ic);
      this.De.setAttribute(this.Oj, this.Kf);
      $f(this, fg(this, (a.Fe - a.oc) * this.ic));
    }
    gg(this);
  }
};
d.bj = function(a) {
  var b = "blocklyScrollbar" + (this.Lg ? "Horizontal" : "Vertical");
  a && (b += " " + a);
  this.te = w.i.B("svg", { class: b }, null);
  this.w = w.i.B("g", {}, this.te);
  this.dd = w.i.B("rect", { class: "blocklyScrollbarBackground" }, this.w);
  a = Math.floor((G - 5) / 2);
  this.De = w.i.B(
    "rect",
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.w
  );
  w.i.Gj(this.te, K(this.m));
};
d.Y = function() {
  return this.Mj;
};
d.eh = function(a) {
  var b = a != this.zg;
  this.zg = a;
  b && this.xk();
};
d.qa = function(a) {
  var b = a != this.Y();
  if (this.ni) throw "Unable to toggle visibility of paired scrollbars.";
  this.Mj = a;
  b && this.xk();
};
d.xk = function() {
  this.zg && this.Y()
    ? this.te.setAttribute("display", "block")
    : this.te.setAttribute("display", "none");
};
d.ox = function(a) {
  Nf(this.m);
  w.Touch.Qe();
  cg();
  if (w.i.Tf(a)) a.stopPropagation();
  else {
    var b = w.i.Tj(a, K(this.m), hg(this.m));
    b = this.Lg ? b.x : b.y;
    var c = w.i.yl(this.De);
    c = this.Lg ? c.x : c.y;
    var e = this.Aj,
      f = 0.95 * this.Kf;
    b <= c ? (e -= f) : b >= c + this.Kf && (e += f);
    $f(this, fg(this, e));
    gg(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
d.px = function(a) {
  Nf(this.m);
  cg();
  w.i.Tf(a)
    ? a.stopPropagation()
    : ((this.Mx = this.Aj),
      Ff(this.m),
      (this.gt = this.Lg ? a.clientX : a.clientY),
      (ag = w.O(document, "mouseup", this, this.vx)),
      (bg = w.O(document, "mousemove", this, this.qx)),
      a.stopPropagation(),
      a.preventDefault());
};
d.qx = function(a) {
  $f(this, fg(this, this.Mx + ((this.Lg ? a.clientX : a.clientY) - this.gt)));
  gg(this);
};
d.vx = function() {
  Of(this.m);
  w.Touch.Qe();
  cg();
};
function cg() {
  w.Pb(!0);
  ag && (w.Na(ag), (ag = null));
  bg && (w.Na(bg), (bg = null));
}
function fg(a, b) {
  return (b = 0 >= b || isNaN(b) || a.zd < a.Kf ? 0 : Math.min(b, a.zd - a.Kf));
}
function gg(a) {
  var b = a.Aj / a.zd;
  isNaN(b) && (b = 0);
  var c = {};
  a.Lg ? (c.x = b) : (c.y = b);
  a.m.kg(c);
}
d.set = function(a) {
  $f(this, fg(this, a * this.ic));
  gg(this);
};
function ig(a, b) {
  ig.s.constructor.call(this, a, b);
  this.Rl = !1;
  this.rd = {};
  this.ft = this.Zj = 0;
  this.Ho = null;
}
v(ig, If);
d = ig.prototype;
d.ij = function(a) {
  ig.s.ij.call(this, a);
  !this.Ql && w.Touch.Ul(a) && jg(this, a);
};
d.yg = function(a) {
  this.Ho = w.O(document, "mousedown", null, this.sw.bind(this), !0);
  this.hm = w.O(document, "mousemove", null, this.zj.bind(this), !0);
  this.im = w.O(document, "mouseup", null, this.Il.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
d.sw = function(a) {
  !this.pb() && w.Touch.Ul(a) && (jg(this, a), this.Rl && w.Wf());
};
d.zj = function(a) {
  if (this.pb()) w.Touch.tp(a) && ig.s.zj.call(this, a);
  else if (this.Rl) {
    if (w.Touch.Ul(a)) {
      this.rd[w.Touch.Fl(a)] = kg(this, a);
      var b = Object.keys(this.rd);
      if (2 == b.length) {
        b = rc(this.rd[b[0]], this.rd[b[1]]) / this.ft;
        if (0 < this.Zj && Infinity > this.Zj) {
          var c = b - this.Zj;
          c = 0 < c ? 5 * c : 6 * c;
          var e = this.ib,
            f = w.i.Tj(a, K(e), hg(e));
          e.zoom(f.x, f.y, c);
        }
        this.Zj = b;
        a.preventDefault();
      }
    }
    w.Wf();
  } else ig.s.zj.call(this, a);
};
d.Il = function(a) {
  if (w.Touch.Ul(a) && !this.pb()) {
    var b = w.Touch.Fl(a);
    this.rd[b] && delete this.rd[b];
    2 > Object.keys(this.rd).length && ((this.rd = {}), (this.Zj = 0));
  }
  !this.Rl || this.pb()
    ? w.Touch.tp(a) && ig.s.Il.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.A());
};
d.A = function() {
  ig.s.A.call(this);
  this.Ho && w.Na(this.Ho);
};
function jg(a, b) {
  a.rd[w.Touch.Fl(b)] = kg(a, b);
  var c = Object.keys(a.rd);
  2 == c.length &&
    ((a.ft = rc(a.rd[c[0]], a.rd[c[1]])), (a.Rl = !0), b.preventDefault());
}
function kg(a, b) {
  return a.ib
    ? new C(
        b.pageX ? b.pageX : b.changedTouches[0].pageX,
        b.pageY ? b.pageY : b.changedTouches[0].pageY
      )
    : null;
}
function lg() {
  Fb.call(this);
  this.Ve = new Xb(this);
  this.Mu = this;
  this.Ko = null;
}
v(lg, Fb);
lg.prototype[Sb] = !0;
d = lg.prototype;
d.Cl = function() {
  return this.Ko;
};
d.xm = function(a) {
  this.Ko = a;
};
d.addEventListener = function(a, b, c, e) {
  cc(this, a, b, c, e);
};
d.removeEventListener = function(a, b, c, e) {
  kc(this, a, b, c, e);
};
d.dispatchEvent = function(a) {
  var b,
    c = this.Cl();
  if (c) for (b = []; c; c = c.Cl()) b.push(c);
  c = this.Mu;
  var e = a.type || a;
  if (p(a)) a = new Kb(a, c);
  else if (a instanceof Kb) a.target = a.target || c;
  else {
    var f = a;
    a = new Kb(e, c);
    db(a, f);
  }
  f = !0;
  if (b)
    for (var h = b.length - 1; !a.Yg && 0 <= h; h--) {
      var k = (a.currentTarget = b[h]);
      f = mg(k, e, !0, a) && f;
    }
  a.Yg ||
    ((k = a.currentTarget = c),
    (f = mg(k, e, !0, a) && f),
    a.Yg || (f = mg(k, e, !1, a) && f));
  if (b)
    for (h = 0; !a.Yg && h < b.length; h++)
      (k = a.currentTarget = b[h]), (f = mg(k, e, !1, a) && f);
  return f;
};
d.Ua = function() {
  lg.s.Ua.call(this);
  this.removeAllListeners();
  this.Ko = null;
};
d.pa = function(a, b, c, e) {
  return this.Ve.add(String(a), b, !1, c, e);
};
d.fs = function(a, b, c, e) {
  return this.Ve.add(String(a), b, !0, c, e);
};
d.hd = function(a, b, c, e) {
  return this.Ve.remove(String(a), b, c, e);
};
d.removeAllListeners = function(a) {
  return this.Ve ? this.Ve.removeAll(a) : 0;
};
function mg(a, b, c, e) {
  b = a.Ve.yc[String(b)];
  if (!b) return !0;
  b = b.concat();
  for (var f = !0, h = 0; h < b.length; ++h) {
    var k = b[h];
    if (k && !k.ui && k.capture == c) {
      var l = k.listener,
        m = k.Jl || k.src;
      k.Qk && Zb(a.Ve, k);
      f = !1 !== l.call(m, e) && f;
    }
  }
  return f && 0 != e.Xs;
}
d.qj = function(a, b, c, e) {
  return this.Ve.qj(String(a), b, c, e);
};
function sf(a, b, c) {
  if (u(a)) c && (a = oa(a, c));
  else if (a && "function" == typeof a.handleEvent) a = oa(a.handleEvent, a);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : g.setTimeout(a, b || 0);
}
function ng(a, b, c, e) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = e;
}
d = ng.prototype;
d.Zc = function() {
  return this.right - this.left;
};
d.Wh = function() {
  return this.bottom - this.top;
};
d.clone = function() {
  return new ng(this.top, this.right, this.bottom, this.left);
};
d.contains = function(a) {
  return this && a
    ? a instanceof ng
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
  ia(a)
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
  a instanceof C
    ? ((this.left += a.x),
      (this.right += a.x),
      (this.top += a.y),
      (this.bottom += a.y))
    : ((this.left += a),
      (this.right += a),
      ba(b) && ((this.top += b), (this.bottom += b)));
  return this;
};
d.scale = function(a, b) {
  b = ba(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= b;
  this.bottom *= b;
  return this;
};
function og(a, b, c, e) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = e;
}
d = og.prototype;
d.clone = function() {
  return new og(this.left, this.top, this.width, this.height);
};
d.contains = function(a) {
  return a instanceof C
    ? a.x >= this.left &&
        a.x <= this.left + this.width &&
        a.y >= this.top &&
        a.y <= this.top + this.height
    : this.left <= a.left &&
        this.left + this.width >= a.left + a.width &&
        this.top <= a.top &&
        this.top + this.height >= a.top + a.height;
};
d.Ze = function() {
  return new Qd(this.width, this.height);
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
  a instanceof C
    ? ((this.left += a.x), (this.top += a.y))
    : ((this.left += a), ba(b) && (this.top += b));
  return this;
};
d.scale = function(a, b) {
  b = ba(b) ? b : a;
  this.left *= a;
  this.width *= a;
  this.top *= b;
  this.height *= b;
  return this;
};
function pg(a) {
  this.m = a;
}
d = pg.prototype;
d.xg = 47;
d.Ck = 44;
d.zh = 16;
d.Nm = 20;
d.Li = 20;
d.Ik = 10;
d.Um = 0;
d.Vm = 32;
d.di = !1;
d.w = null;
d.Em = null;
d.so = 0;
d.Vf = 0;
d.Ib = 0;
d.nf = 0;
d.X = function() {
  this.w = w.i.B("g", { class: "blocklyTrash" }, null);
  var a = String(Math.random()).substring(2);
  var b = w.i.B("clipPath", { id: "blocklyTrashBodyClipPath" + a }, this.w);
  w.i.B("rect", { width: this.xg, height: this.Ck, y: this.zh }, b);
  w.i
    .B(
      "image",
      {
        width: w.mc.width,
        x: -this.Um,
        height: w.mc.height,
        y: -this.Vm,
        "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")"
      },
      this.w
    )
    .setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      this.m.options.Pd + w.mc.url
    );
  b = w.i.B("clipPath", { id: "blocklyTrashLidClipPath" + a }, this.w);
  w.i.B("rect", { width: this.xg, height: this.zh }, b);
  this.Em = w.i.B(
    "image",
    {
      width: w.mc.width,
      x: -this.Um,
      height: w.mc.height,
      y: -this.Vm,
      "clip-path": "url(#blocklyTrashLidClipPath" + a + ")"
    },
    this.w
  );
  this.Em.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    this.m.options.Pd + w.mc.url
  );
  w.O(this.w, "mouseup", this, this.click);
  this.an();
  return this.w;
};
d.N = function(a) {
  this.Ui = this.Nm + a;
  qf(this, !1);
  return this.Ui + this.Ck + this.zh;
};
d.A = function() {
  this.w && (F(this.w), (this.w = null));
  this.m = this.Em = null;
  g.clearTimeout(this.so);
};
d.position = function() {
  var a = this.m.rb();
  a &&
    (this.m.u
      ? ((this.Ib = this.Li + G),
        a.Da == w.xf && ((this.Ib += a.ml), this.m.ca && (this.Ib += a.lb)))
      : ((this.Ib = a.xa + a.lb - this.xg - this.Li - G),
        a.Da == w.Xd && (this.Ib -= a.ml)),
    (this.nf = a.bb + a.wb - (this.Ck + this.zh) - this.Ui),
    a.Da == w.wg && (this.nf -= a.ur),
    this.w.setAttribute(
      "transform",
      "translate(" + this.Ib + "," + this.nf + ")"
    ));
};
d.Th = function() {
  if (!this.w) return null;
  var a = this.w.getBoundingClientRect();
  return new og(
    a.left + this.Um - this.Ik,
    a.top + this.Vm - this.Ik,
    this.xg + 2 * this.Ik,
    this.zh + this.Ck + 2 * this.Ik
  );
};
function qf(a, b) {
  a.di != b && (g.clearTimeout(a.so), (a.di = b), a.an());
}
d.an = function() {
  this.Vf += this.di ? 0.2 : -0.2;
  this.Vf = Math.min(Math.max(this.Vf, 0), 1);
  var a = 45 * this.Vf;
  this.Em.setAttribute(
    "transform",
    "rotate(" +
      (this.m.u ? -a : a) +
      "," +
      (this.m.u ? 4 : this.xg - 4) +
      "," +
      (this.zh - 2) +
      ")"
  );
  this.w.style.opacity = 0.4 + 0.4 * this.Vf;
  0 < this.Vf && 1 > this.Vf && (this.so = sf(this.an, 20, this));
};
d.close = function() {
  qf(this, !1);
};
d.click = function() {
  var a = this.m.Ox - this.m.scrollX,
    b = this.m.Qx - this.m.scrollY;
  Math.sqrt(a * a + b * b) > w.Rp || console.log("TODO: Inspect trash.");
};
function Qc(a, b, c, e) {
  this.o = a;
  this.name = b;
  this.type = c || "";
  this.bi = e || w.i.je();
  w.j.V(new Ac(this));
}
Qc.prototype.aa = function() {
  return this.bi;
};
function qg(a, b) {
  a = String(a.name).toLowerCase();
  b = String(b.name).toLowerCase();
  return a < b ? -1 : a == b ? 0 : 1;
}
w.G = {};
w.G.cb = w.Yp;
w.G.fq = function(a) {
  var b = Oc(a);
  a = Object.create(null);
  for (var c = 0; c < b.length; c++) {
    var e = b[c].Hf();
    if (e)
      for (var f = 0; f < e.length; f++) {
        var h = e[f];
        h.aa() && (a[h.aa()] = h);
      }
  }
  b = [];
  for (var k in a) b.push(a[k]);
  return b;
};
w.G.HB = function() {
  console.warn(
    "Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub."
  );
};
w.G.Ou = function(a) {
  var b = Oc(a);
  a = {};
  for (var c = 0; c < b.length; c++) {
    var e = b[c];
    if (e.bw) {
      e = e.bw();
      for (var f = 0; f < e.length; f++) a[e[f]] = e[f];
    }
  }
  b = [];
  for (var h in a) b.push(a[h]);
  return b;
};
w.G.Ef = function(a) {
  var b = [],
    c = E("button");
  c.setAttribute("text", w.g.NEW_VARIABLE);
  c.setAttribute("callbackKey", "CREATE_VARIABLE");
  rg(a, function(a) {
    w.G.Mh(a.va);
  });
  b.push(c);
  a = w.G.Kn(a);
  return (b = b.concat(a));
};
w.G.Kn = function(a) {
  a = a.uj("");
  a.sort(qg);
  var b = [];
  if (0 < a.length) {
    var c = a[0];
    if (w.J.variables_set) {
      var e = w.J.math_change ? 8 : 24;
      e =
        '<xml><block type="variables_set" gap="' +
        e +
        '">' +
        w.G.Sh(c) +
        "</block></xml>";
      e = w.D.ed(e).firstChild;
      b.push(e);
    }
    w.J.math_change &&
      ((e = w.J.variables_get ? 20 : 8),
      (e =
        '<xml><block type="math_change" gap="' +
        e +
        '">' +
        w.G.Sh(c) +
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>'),
      (e = w.D.ed(e).firstChild),
      b.push(e));
    for (c = 0; (e = a[c]); c++)
      w.J.variables_get &&
        ((e =
          '<xml><block type="variables_get" gap="8">' +
          w.G.Sh(e) +
          "</block></xml>"),
        (e = w.D.ed(e).firstChild),
        b.push(e));
  }
  return b;
};
w.G.Zv = function(a) {
  a = a.We();
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
w.G.Mh = function(a, b, c) {
  function e(c) {
    w.G.Ps(w.g.NEW_VARIABLE_TITLE, c, function(c) {
      if (c) {
        var h = w.G.Xw(c, a);
        if (h) {
          var k = c.toLowerCase();
          if (h.type == f) var n = w.g.VARIABLE_ALREADY_EXISTS.replace("%1", k);
          else
            (n = w.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (n = n.replace("%1", k).replace("%2", h.type));
          w.alert(n, function() {
            e(c);
          });
        } else a.Vc(c, f), b && b(c);
      } else b && b(null);
    });
  }
  var f = c || "";
  e("");
};
ca("Blockly.Variables.createVariableButtonHandler", w.G.Mh);
w.G.Vc = w.G.Mh;
ca("Blockly.Variables.createVariable", w.G.Vc);
w.G.Wo = function(a, b) {
  function c(e) {
    var f = w.g.RENAME_VARIABLE_TITLE.replace("%1", b.name);
    w.G.Ps(f, e, function(e) {
      if (e) {
        var f = w.G.Yw(e, b.type, a);
        f
          ? ((f = w.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              e.toLowerCase()
            ).replace("%2", f.type)),
            w.alert(f, function() {
              c(e);
            }))
          : a.bh(b.aa(), e);
      }
    });
  }
  c("");
};
w.G.Ps = function(a, b, c) {
  w.prompt(a, b, function(a) {
    a &&
      ((a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")),
      a == w.g.RENAME_VARIABLE || a == w.g.NEW_VARIABLE) &&
      (a = null);
    c(a);
  });
};
w.G.Yw = function(a, b, c) {
  c = c.sa.We();
  a = a.toLowerCase();
  for (var e = 0, f; (f = c[e]); e++)
    if (f.name.toLowerCase() == a && f.type != b) return f;
  return null;
};
w.G.Xw = function(a, b) {
  b = b.sa.We();
  a = a.toLowerCase();
  for (var c = 0, e; (e = b[c]); c++) if (e.name.toLowerCase() == a) return e;
  return null;
};
w.G.Sh = function(a) {
  var b = a.type;
  "" == b && (b = "''");
  return (
    '<field name="VAR" id="' +
    a.aa() +
    '" variabletype="' +
    Ia(b) +
    '">' +
    Ia(a.name) +
    "</field>"
  );
};
w.G.wr = function(a) {
  a = "<xml>" + w.G.Sh(a) + "</xml>";
  return w.D.ed(a).firstChild;
};
w.G.Bl = function(a, b, c, e) {
  var f = w.G.Jc(a, b, c, e);
  f || (f = w.G.uv(a, b, c, e));
  return f;
};
w.G.Jc = function(a, b, c, e) {
  var f = a.si;
  if (b) {
    var h = a.Kd(b);
    !h && f && (h = f.Kd(b));
  } else if (c) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    h = a.Jc(c, e);
    !h && f && (h = f.Jc(c, e));
  }
  return h;
};
w.G.uv = function(a, b, c, e) {
  var f = a.si;
  c || (c = w.G.Zv(a.Nd ? a.ph : a));
  return f ? f.Vc(c, e, b) : a.Vc(c, e, b);
};
w.G.xr = function(a, b) {
  a = a.We();
  var c = [];
  if (b.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == b.indexOf(f) && c.push(f);
    }
  return c;
};
w.od = {};
w.od.ix = function(a) {
  w.G.Mh(a.va, null, "String");
};
w.od.hx = function(a) {
  w.G.Mh(a.va, null, "Number");
};
w.od.gx = function(a) {
  w.G.Mh(a.va, null, "Colour");
};
w.od.Ef = function(a) {
  var b = [],
    c = E("button");
  c.setAttribute("text", w.g.NEW_STRING_VARIABLE);
  c.setAttribute("callbackKey", "CREATE_VARIABLE_STRING");
  b.push(c);
  c = E("button");
  c.setAttribute("text", w.g.NEW_NUMBER_VARIABLE);
  c.setAttribute("callbackKey", "CREATE_VARIABLE_NUMBER");
  b.push(c);
  c = E("button");
  c.setAttribute("text", w.g.NEW_COLOUR_VARIABLE);
  c.setAttribute("callbackKey", "CREATE_VARIABLE_COLOUR");
  b.push(c);
  a.Gg.CREATE_VARIABLE_STRING = w.od.ix;
  a.Gg.CREATE_VARIABLE_NUMBER = w.od.hx;
  a.Gg.CREATE_VARIABLE_COLOUR = w.od.gx;
  a = w.od.Kn(a);
  return (b = b.concat(a));
};
w.od.Kn = function(a) {
  a = a.We();
  a.sort(qg);
  var b = [];
  if (0 < a.length) {
    if (w.J.variables_set_dynamic) {
      var c =
        '<xml><block type="variables_set_dynamic" gap="24">' +
        w.G.Sh(a[0]) +
        "</block></xml>";
      c = w.D.ed(c).firstChild;
      b.push(c);
    }
    if (w.J.variables_get_dynamic)
      for (var e = 0; (c = a[e]); e++)
        (c =
          '<xml><block type="variables_get_dynamic" gap="8">' +
          w.G.Sh(c) +
          "</block></xml>"),
          (c = w.D.ed(c).firstChild),
          b.push(c);
  }
  return b;
};
function sg(a) {
  this.Lo = a;
  this.Si = Object.create(null);
}
d = sg.prototype;
d.po = null;
d.A = function() {
  this.Si = this.Lo = null;
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
    e && e.play && (this.Si[b] = e);
  }
};
d.preload = function() {
  for (var a in this.Si) {
    var b = this.Si[a];
    b.volume = 0.01;
    b.play();
    b.pause();
    if (pb || ob) break;
  }
};
d.play = function(a, b) {
  var c = this.Si[a];
  c
    ? ((a = new Date()),
      (null != this.po && a - this.po < w.xu) ||
        ((this.po = a),
        (c = (wb && 9 === wb) || pb || nb ? c : c.cloneNode()),
        (c.volume = void 0 === b ? 1 : b),
        c.play()))
    : this.Lo && this.Lo.Zd.play(a, b);
};
d = vf.prototype;
d.Gb = function() {
  return { width: this.Zc(), height: this.Wh() };
};
d.$ = function() {
  if (!this.eg) {
    var a = this.Gb();
    this.cj();
    this.w.appendChild(this.Xc);
    this.nh = w.i.B("rect", {
      class: "blocklyCommentHandleTarget",
      x: 0,
      y: 0
    });
    this.w.appendChild(this.nh);
    this.mg = w.i.B("rect", {
      class: "blocklyCommentTarget",
      x: 0,
      y: 0,
      rx: 3,
      ry: 3
    });
    this.w.appendChild(this.mg);
    this.Lb = w.i.B(
      "g",
      { class: this.u ? "blocklyResizeSW" : "blocklyResizeSE" },
      this.w
    );
    w.i.B(
      "polygon",
      { points: "0,x x,x x,0".replace(/x/g, (8).toString()) },
      this.Lb
    );
    w.i.B(
      "line",
      { class: "blocklyResizeLine", x1: 8 / 3, y1: 7, x2: 7, y2: 8 / 3 },
      this.Lb
    );
    w.i.B(
      "line",
      { class: "blocklyResizeLine", x1: 16 / 3, y1: 7, x2: 7, y2: 16 / 3 },
      this.Lb
    );
    this.gc() &&
      ((this.Cf = w.i.B("g", { class: "blocklyCommentDeleteIcon" }, this.w)),
      (this.Zq = w.i.B(
        "circle",
        { class: "blocklyDeleteIconShape", r: "7", cx: "7.5", cy: "7.5" },
        this.Cf
      )),
      w.i.B(
        "line",
        {
          x1: "5",
          y1: "10",
          x2: "10",
          y2: "5",
          stroke: "#fff",
          "stroke-width": "2"
        },
        this.Cf
      ),
      w.i.B(
        "line",
        {
          x1: "5",
          y1: "5",
          x2: "10",
          y2: "10",
          stroke: "#fff",
          "stroke-width": "2"
        },
        this.Cf
      ));
    tg(this, a.width, a.height);
    this.ub.value = this.Uc;
    this.eg = !0;
    this.Lb && w.O(this.Lb, "mousedown", this, this.Yo);
    this.gc() &&
      (w.O(this.Cf, "mousedown", this, this.Gv),
      w.O(this.Cf, "mouseout", this, this.Hv),
      w.O(this.Cf, "mouseup", this, this.Iv));
  }
};
d.cj = function() {
  this.Xc = w.i.B(
    "foreignObject",
    { x: 0, y: 10, class: "blocklyCommentForeignObject" },
    null
  );
  var a = document.createElementNS(w.uf, "body");
  a.setAttribute("xmlns", w.uf);
  a.className = "blocklyMinimalBody";
  var b = document.createElementNS(w.uf, "textarea");
  b.className = "blocklyCommentTextarea";
  b.setAttribute("dir", this.u ? "RTL" : "LTR");
  a.appendChild(b);
  this.ub = b;
  this.Xc.appendChild(a);
  w.O(b, "wheel", this, function(a) {
    a.stopPropagation();
  });
  w.O(b, "change", this, function() {
    this.Ad(b.value);
  });
  return this.Xc;
};
d.Yo = function(a) {
  ug(this);
  w.i.Tf(a) ||
    (this.o.Cm(a, new C(this.o.u ? -this.ia : this.ia, this.Fa)),
    (this.mi = w.O(document, "mouseup", this, this.Ex)),
    (this.Go = w.O(document, "mousemove", this, this.Zo)),
    w.Pb());
  a.stopPropagation();
};
d.Gv = function(a) {
  w.i.mb(this.Zq, "blocklyDeleteIconHighlighted");
  a.stopPropagation();
};
d.Hv = function() {
  w.i.Qb(this.Zq, "blocklyDeleteIconHighlighted");
};
d.Iv = function(a) {
  this.A(!0, !0);
  a.stopPropagation();
};
function ug(a) {
  a.mi && (w.Na(a.mi), (a.mi = null));
  a.Go && (w.Na(a.Go), (a.Go = null));
}
d.Ex = function() {
  w.Touch.Qe();
  ug(this);
};
d.Zo = function(a) {
  this.Nk = !1;
  a = ye(this.o, a);
  tg(this, this.u ? -a.x : a.x, a.y);
};
function tg(a, b, c) {
  b = Math.max(b, 45);
  c = Math.max(c, 30);
  a.ia = b;
  a.Fa = c;
  a.qk.setAttribute("width", b);
  a.qk.setAttribute("height", c);
  a.mg.setAttribute("width", b);
  a.mg.setAttribute("height", c);
  a.nh.setAttribute("width", b);
  a.nh.setAttribute("height", 10);
  a.u &&
    (a.qk.setAttribute("transform", "scale(-1 1)"),
    a.mg.setAttribute("transform", "scale(-1 1)"));
  a.Lb &&
    (a.u
      ? (a.Lb.setAttribute(
          "transform",
          "translate(" + (-b + 8) + "," + (c - 8) + ") scale(-1 1)"
        ),
        a.Cf.setAttribute(
          "transform",
          "translate(" + (-b + 8) + ",-8) scale(-1 1)"
        ))
      : (a.Lb.setAttribute(
          "transform",
          "translate(" + (b - 8) + "," + (c - 8) + ")"
        ),
        a.Cf.setAttribute("transform", "translate(" + (b - 8) + ",-8)")));
  b = a.Gb();
  a.Xc.setAttribute("width", b.width);
  a.Xc.setAttribute("height", b.height - 10);
  a.u && a.Xc.setAttribute("x", -b.width);
  a.ub.style.width = b.width - 4 + "px";
  a.ub.style.height = b.height - 4 - 10 + "px";
}
d.mp = function() {
  var a = this;
  this.mj = !0;
  setTimeout(function() {
    a.ub.focus();
    w.i.mb(a.w, "blocklyFocused");
    w.i.mb(a.mg, "blocklyCommentTargetFocused");
    w.i.mb(a.nh, "blocklyCommentHandleTargetFocused");
  }, 0);
};
function xf(a) {
  a.mj = !1;
  setTimeout(function() {
    a.ub.blur();
    w.i.Qb(a.w, "blocklyFocused");
    w.i.Qb(a.mg, "blocklyCommentTargetFocused");
    w.i.Qb(a.nh, "blocklyCommentHandleTargetFocused");
  }, 0);
}
function vg(a) {
  this.$i = a;
  this.X();
}
d = vg.prototype;
d.ya = null;
d.fe = null;
d.$i = null;
d.X = function() {
  this.ya ||
    ((this.ya = w.i.B(
      "svg",
      {
        xmlns: w.Wm,
        "xmlns:html": w.uf,
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible"
      },
      null
    )),
    this.$i.appendChild(this.ya));
};
d.pf = function(a, b) {
  a = a.toFixed(0);
  b = b.toFixed(0);
  this.ya.style.display = "block";
  w.i.fk(this.ya, "translate3d(" + a + "px, " + b + "px, 0px)");
};
d.El = function() {
  return w.i.uc(this.ya);
};
d.Xi = function(a) {
  if (!a)
    throw "Couldn't clear and hide the drag surface: missing new surface.";
  var b = this.ya.childNodes[0],
    c = this.ya.childNodes[1];
  if (
    !(
      b &&
      c &&
      w.i.Gr(b, "blocklyBlockCanvas") &&
      w.i.Gr(c, "blocklyBubbleCanvas")
    )
  )
    throw "Couldn't clear and hide the drag surface.  A node was missing.";
  null != this.Qd ? w.i.Gj(b, this.Qd) : a.insertBefore(b, a.firstChild);
  w.i.Gj(c, b);
  this.ya.style.display = "none";
  w.i.fk(this.ya, "");
  this.Qd = null;
};
w.D = {};
w.D.Ip = function(a, b) {
  var c = E("xml");
  c.appendChild(w.D.by(w.G.fq(a)));
  for (var e = bd(a, !0), f = 0, h; (h = e[f]); f++) c.appendChild(h.rk(b));
  a = ad(a, !0);
  for (f = 0; (e = a[f]); f++) c.appendChild(w.D.hn(e, b));
  return c;
};
w.D.by = function(a) {
  for (var b = E("variables"), c = 0, e; (e = a[c]); c++) {
    var f = E("variable", null, e.name);
    f.setAttribute("type", e.type);
    f.setAttribute("id", e.aa());
    b.appendChild(f);
  }
  return b;
};
w.D.hn = function(a, b) {
  var c;
  a.o.u && (c = a.o.Zc());
  b = w.D.Af(a, b);
  var e = a.la();
  b.setAttribute("x", Math.round(a.o.u ? c - e.x : e.x));
  b.setAttribute("y", Math.round(e.y));
  return b;
};
w.D.Uv = function(a) {
  null == a.getValue() && (a.Ng(), a.getValue());
  var b = a.Jc();
  if (!b) throw Error("Tried to serialize a variable field with no variable.");
  var c = E("field", null, b.name);
  c.setAttribute("name", a.name);
  c.setAttribute("id", b.aa());
  c.setAttribute("variabletype", b.type);
  return c;
};
w.D.Vv = function(a) {
  if (a.name && a.ug) {
    if (a.$g()) return w.D.Uv(a);
    var b = E("field", null, a.getValue());
    b.setAttribute("name", a.name);
    return b;
  }
  return null;
};
w.D.Pu = function(a, b) {
  for (var c = 0, e; (e = a.W[c]); c++)
    for (var f = 0, h; (h = e.Ia[f]); f++) (h = w.D.Vv(h)) && b.appendChild(h);
};
w.D.Af = function(a, b) {
  var c = E(a.gb ? "shadow" : "block");
  c.setAttribute("type", a.type);
  b || c.setAttribute("id", a.id);
  if (a.Ga) {
    var e = a.Ga();
    e && (e.hasChildNodes() || e.hasAttributes()) && c.appendChild(e);
  }
  w.D.Pu(a, c);
  if ((e = a.ul())) {
    e = E("comment", null, e);
    if ("object" == typeof a.Ta) {
      e.setAttribute("pinned", a.Ta.Y());
      var f = a.Ta.Ig();
      e.setAttribute("h", f.height);
      e.setAttribute("w", f.width);
    }
    c.appendChild(e);
  }
  a.data && ((e = E("data", null, a.data)), c.appendChild(e));
  f = 0;
  for (var h; (h = a.W[f]); f++) {
    var k,
      l = !0;
    if (h.type != w.Ge) {
      var m = I(h.connection);
      h.type == w.kb
        ? (k = E("value"))
        : h.type == w.Wa && (k = E("statement"));
      e = h.connection.Ae;
      !e || (m && m.gb) || k.appendChild(w.D.yq(e));
      m && (k.appendChild(w.D.Af(m, b)), (l = !1));
      k.setAttribute("name", h.name);
      l || c.appendChild(k);
    }
  }
  a.Ew != a.Qf && c.setAttribute("inline", a.Qf);
  a.isCollapsed() && c.setAttribute("collapsed", !0);
  a.disabled && c.setAttribute("disabled", !0);
  a.gc() || a.gb || c.setAttribute("deletable", !1);
  a.re() || a.gb || c.setAttribute("movable", !1);
  He(a) || c.setAttribute("editable", !1);
  if ((f = Jc(a))) (k = E("next", null, w.D.Af(f, b))), c.appendChild(k);
  e = a.L && a.L.Ae;
  !e || (f && f.gb) || k.appendChild(w.D.yq(e));
  return c;
};
w.D.yq = function(a) {
  for (var b = (a = a.cloneNode(!0)), c; b; )
    if (b.firstChild) b = b.firstChild;
    else {
      for (; b && !b.nextSibling; )
        (c = b),
          (b = b.parentNode),
          3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && F(c);
      b &&
        ((c = b),
        (b = b.nextSibling),
        3 == c.nodeType && "" == c.data.trim() && F(c));
    }
  return a;
};
w.D.td = function(a) {
  return new XMLSerializer().serializeToString(a);
};
w.D.PB = function(a) {
  a = w.D.td(a).split("<");
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
w.D.ed = function(a) {
  return new DOMParser().parseFromString(a, "text/xml").firstChild;
};
w.D.LB = function(a, b) {
  b.Rb(!1);
  b.clear();
  a = w.D.ee(a, b);
  b.Rb(!0);
  return a;
};
w.D.ee = function(a, b) {
  if (a instanceof Zc) {
    var c = a;
    a = b;
    b = c;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  b.u && (e = b.Zc());
  c = [];
  wg();
  var f = a.childNodes.length,
    h = w.j.tc();
  h || w.j.S(!0);
  b.Rb && b.Rb(!1);
  var k = !0;
  try {
    for (var l = 0; l < f; l++) {
      var m = a.childNodes[l],
        n = m.nodeName.toLowerCase();
      if ("block" == n || ("shadow" == n && !w.j.jc)) {
        var q = w.D.Ph(m, b);
        c.push(q.id);
        var t = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
          y = m.hasAttribute("y") ? parseInt(m.getAttribute("y"), 10) : 10;
        isNaN(t) || isNaN(y) || q.moveBy(b.u ? e - t : t, y);
        k = !1;
      } else if ("shadow" == n) k = !1;
      else if ("comment" == n)
        if (b.R) Af(m, b, e);
        else {
          var x = m,
            B = b,
            Ma = Yc(x),
            Sc = new Vc(B, Ma.content, Ma.Dr, Ma.vt, Ma.id),
            Xa = parseInt(x.getAttribute("x"), 10),
            Ad = parseInt(x.getAttribute("y"), 10);
          isNaN(Xa) || isNaN(Ad) || Sc.moveBy(Xa, Ad);
          Wc(Sc);
        }
      else if ("variables" == n) {
        if (k) w.D.Rv(m, b);
        else
          throw Error(
            "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
          );
        k = !1;
      }
    }
  } finally {
    h || w.j.S(!1), xg();
  }
  b.Rb && b.Rb(!0);
  return c;
};
w.D.IB = function(a, b) {
  if (b.hasOwnProperty("scale")) {
    var c = L;
    try {
      L = 0;
      var e = yg(b);
    } finally {
      L = c;
    }
  }
  a = w.D.ee(a, b);
  if (e && e.height) {
    c = e.y + e.height;
    var f = e.x;
    var h = Infinity,
      k = Infinity;
    for (e = 0; e < a.length; e++) {
      var l = Ic(b, a[e]).la();
      l.y < k && (k = l.y);
      l.x < h && (h = l.x);
    }
    c = c - k + 10;
    f -= h;
    var m;
    b.u && (m = b.Zc());
    for (e = 0; e < a.length; e++) Ic(b, a[e]).moveBy(b.u ? m - f : f, c);
  }
  return a;
};
w.D.Ph = function(a, b) {
  if (a instanceof Zc) {
    var c = a;
    a = b;
    b = c;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  w.j.disable();
  c = b.We();
  try {
    var e = w.D.Fn(a, b),
      f = vc(e, !1);
    if (b.R) {
      zg(e, !0);
      for (var h = f.length - 1; 0 <= h; h--) f[h].xc();
      for (h = f.length - 1; 0 <= h; h--) f[h].$(!1);
      setTimeout(function() {
        e.o && zg(e, !1);
      }, 1);
      kf(e);
      yf(b);
    } else for (h = f.length - 1; 0 <= h; h--) f[h].Ng();
  } finally {
    w.j.enable();
  }
  if (w.j.isEnabled()) {
    a = w.G.xr(b, c);
    for (h = 0; h < a.length; h++) w.j.V(new Ac(a[h]));
    w.j.V(new w.j.Ek(e));
  }
  return e;
};
w.D.Rv = function(a, b) {
  for (var c = 0, e; (e = a.children[c]); c++) {
    var f = e.getAttribute("type"),
      h = e.getAttribute("id");
    e = e.textContent;
    if (null == f) throw Error("Variable with id, " + h + " is without a type");
    b.Vc(e, f, h);
  }
};
w.D.Fn = function(a, b) {
  var c = null,
    e = a.getAttribute("type"),
    f = a.getAttribute("id");
  c = b.bf(e, f);
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
          c.Za && (c.Za(k), c.xc && c.xc());
          break;
        case "comment":
          c.dh(k.textContent);
          var q = k.getAttribute("pinned");
          q &&
            !c.sb &&
            setTimeout(function() {
              c.Ta && c.Ta.qa && c.Ta.qa("true" == q);
            }, 1);
          h = parseInt(k.getAttribute("w"), 10);
          k = parseInt(k.getAttribute("h"), 10);
          !isNaN(h) && !isNaN(k) && c.Ta && c.Ta.qa && c.Ta.gg(h, k);
          break;
        case "data":
          c.data = k.textContent;
          break;
        case "title":
        case "field":
          w.D.Qv(c, m, k);
          break;
        case "value":
        case "statement":
          k = J(c, m);
          if (!k) {
            console.warn("Ignoring non-existent input " + m + " in block " + e);
            break;
          }
          l && (k.connection.Ae = l);
          h &&
            ((h = w.D.Fn(h, b)),
            h.P ? k.connection.connect(h.P) : h.Z && k.connection.connect(h.Z));
          break;
        case "next":
          l && c.L && (c.L.Ae = l);
          h && ((h = w.D.Fn(h, b)), c.L.connect(h.Z));
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  (b = a.getAttribute("inline")) && c.jg("true" == b);
  (b = a.getAttribute("disabled")) && c.Bd("true" == b || "disabled" == b);
  (b = a.getAttribute("deletable")) && c.kp("true" == b);
  (b = a.getAttribute("movable")) && c.fh("true" == b);
  (b = a.getAttribute("editable")) && c.lp("true" == b);
  (b = a.getAttribute("collapsed")) && c.hg("true" == b);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = c.Gf(!1);
    for (f = 0; a[f]; f++);
    c.qp(!0);
  }
  return c;
};
w.D.Pv = function(a, b, c, e) {
  var f = b.getAttribute("variabletype") || "";
  "''" == f && (f = "");
  a = w.G.Bl(a, b.id, c, f);
  if (null != f && f !== a.type)
    throw Error(
      "Serialized variable type with id '" +
        a.aa() +
        "' had type " +
        a.type +
        ", and does not match variable field that references it: " +
        w.D.td(b) +
        "."
    );
  e.setValue(a.aa());
};
w.D.Qv = function(a, b, c) {
  var e = H(a, b);
  e
    ? ((a = a.o),
      (b = c.textContent),
      e.$g() ? w.D.Pv(a, c, b, e) : e.setValue(b))
    : console.warn("Ignoring non-existent field " + b + " in block " + a.type);
};
w.D.Jv = function(a) {
  for (var b = 0, c; (c = a.childNodes[b]); b++)
    if ("next" == c.nodeName.toLowerCase()) {
      a.removeChild(c);
      break;
    }
};
g.Blockly || (g.Blockly = {});
g.Blockly.Xml || (g.Blockly.Xml = {});
g.Blockly.Xml.domToText = w.D.td;
g.Blockly.Xml.domToWorkspace = w.D.ee;
g.Blockly.Xml.textToDom = w.D.ed;
g.Blockly.Xml.workspaceToDom = w.D.Ip;
// Copyright 2015 Google Inc.  Apache License 2.0
function Ag(a) {
  this.m = a;
}
d = Ag.prototype;
d.xg = 32;
d.Ii = 110;
d.Nm = 20;
d.Li = 20;
d.w = null;
d.Ib = 0;
d.nf = 0;
d.X = function() {
  this.w = w.i.B("g", { class: "blocklyZoom" }, null);
  var a = String(Math.random()).substring(2);
  Bg(this, a);
  Cg(this, a);
  Dg(this, a);
  return this.w;
};
d.N = function(a) {
  this.Ui = this.Nm + a;
  return this.Ui + this.Ii;
};
d.A = function() {
  this.w && (F(this.w), (this.w = null));
  this.m = null;
};
d.position = function() {
  var a = this.m.rb();
  a &&
    (this.m.u
      ? ((this.Ib = this.Li + G),
        a.Da == w.xf && ((this.Ib += a.ml), this.m.ca && (this.Ib += a.lb)))
      : ((this.Ib = a.xa + a.lb - this.xg - this.Li - G),
        a.Da == w.Xd && (this.Ib -= a.ml)),
    (this.nf = a.bb + a.wb - this.Ii - this.Ui),
    a.Da == w.wg && (this.nf -= a.ur),
    this.w.setAttribute(
      "transform",
      "translate(" + this.Ib + "," + this.nf + ")"
    ));
};
function Bg(a, b) {
  var c = a.m,
    e = w.i.B("clipPath", { id: "blocklyZoomoutClipPath" + b }, a.w);
  w.i.B("rect", { width: 32, height: 32, y: 77 }, e);
  a = w.i.B(
    "image",
    {
      width: w.mc.width,
      height: w.mc.height,
      x: -64,
      y: -15,
      "clip-path": "url(#blocklyZoomoutClipPath" + b + ")"
    },
    a.w
  );
  a.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    c.options.Pd + w.mc.url
  );
  w.O(a, "mousedown", null, function(a) {
    Nf(c);
    Eg(c, -1);
    w.Touch.Qe();
    a.stopPropagation();
    a.preventDefault();
  });
}
function Cg(a, b) {
  var c = a.m,
    e = w.i.B("clipPath", { id: "blocklyZoominClipPath" + b }, a.w);
  w.i.B("rect", { width: 32, height: 32, y: 43 }, e);
  a = w.i.B(
    "image",
    {
      width: w.mc.width,
      height: w.mc.height,
      x: -32,
      y: -49,
      "clip-path": "url(#blocklyZoominClipPath" + b + ")"
    },
    a.w
  );
  a.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    c.options.Pd + w.mc.url
  );
  w.O(a, "mousedown", null, function(a) {
    Nf(c);
    Eg(c, 1);
    w.Touch.Qe();
    a.stopPropagation();
    a.preventDefault();
  });
}
function Dg(a, b) {
  var c = a.m,
    e = w.i.B("clipPath", { id: "blocklyZoomresetClipPath" + b }, a.w);
  w.i.B("rect", { width: 32, height: 32 }, e);
  a = w.i.B(
    "image",
    {
      width: w.mc.width,
      height: w.mc.height,
      y: -92,
      "clip-path": "url(#blocklyZoomresetClipPath" + b + ")"
    },
    a.w
  );
  a.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    c.options.Pd + w.mc.url
  );
  w.O(a, "mousedown", null, function(a) {
    Nf(c);
    c.setScale(c.options.Zb.jt);
    if (c.hb) {
      var b = c.rb(),
        e = (b.Hc - b.xa) / 2;
      c.H && (e -= c.H.ia / 2);
      c.hb.set(e, (b.nc - b.bb) / 2);
    } else console.warn("Tried to scroll a non-scrollable workspace.");
    w.Touch.Qe();
    a.stopPropagation();
    a.preventDefault();
  });
}
// Copyright 2014 Google Inc.  Apache License 2.0
function Fg(a, b, c) {
  Fg.s.constructor.call(this, a);
  this.rb = a.rb || Gg;
  this.kg = a.kg || Hg;
  var e = [];
  e[w.kb] = new Te();
  e[w.Gh] = new Te();
  e[w.Wa] = new Te();
  e[w.wf] = new Te();
  this.pn = e;
  b && (this.xb = b);
  c && (this.wh = c);
  this.Hm = this.wh && w.i.Rf();
  this.Cj = [];
  this.Zd = new sg(a.Kb);
  this.wd = this.options.Cr ? new Uf(a.Cr, a.Br) : null;
  w.G && w.G.Ef && (this.zi[w.Yp] = w.G.Ef);
  w.od && w.od.Ef && (this.zi[w.Gu] = w.od.Ef);
  w.ta && w.ta.Ef && (this.zi[w.Wp] = w.ta.Ef);
}
v(Fg, Zc);
d = Fg.prototype;
d.rm = null;
d.R = !0;
d.Nd = !1;
d.Kj = !1;
d.$o = !0;
d.scrollX = 0;
d.scrollY = 0;
d.Ox = 0;
d.Qx = 0;
d.lr = null;
d.scale = 1;
d.Nc = null;
d.hb = null;
d.Db = null;
d.xb = null;
d.wh = null;
d.Hm = !1;
d.Pl = !1;
d.ho = null;
d.Zr = null;
d.Gg = {};
d.zi = {};
d.Cq = null;
d.ph = null;
d.Pr = null;
d.Hj = !0;
function hg(a) {
  if (a.Hj) {
    var b = K(a).getScreenCTM();
    b && ((a.Pr = b.inverse()), (a.Hj = !1));
  }
  return a.Pr;
}
function Ye(a, b) {
  var c = 0,
    e = 0,
    f = 1;
  if (ee(a.Oa, b) || ee(a.Ud, b)) f = a.scale;
  do {
    var h = w.i.uc(b);
    if (b == a.Oa || b == a.Ud) f = 1;
    c += h.x * f;
    e += h.y * f;
    b = b.parentNode;
  } while (b && b != K(a));
  return new C(c, e);
}
d.X = function(a) {
  this.w = w.i.B("g", { class: "blocklyWorkspace" }, null);
  a &&
    ((this.dd = w.i.B(
      "rect",
      { height: "100%", width: "100%", class: a },
      this.w
    )),
    "blocklyMainBackground" == a &&
      this.wd &&
      (this.dd.style.fill = "url(#" + this.wd.Yh.id + ")"));
  this.Oa = w.i.B("g", { class: "blocklyBlockCanvas" }, this.w);
  this.Ud = w.i.B("g", { class: "blocklyBubbleCanvas" }, this.w);
  a = G;
  if (this.options.xw) {
    this.Nc = new pg(this);
    var b = this.Nc.X();
    this.w.insertBefore(b, this.Oa);
    a = this.Nc.N(a);
  }
  this.options.Zb &&
    this.options.Zb.controls &&
    ((this.xh = new Ag(this)),
    (b = this.xh.X()),
    this.w.appendChild(b),
    this.xh.N(a));
  this.Nd ||
    (w.O(this.w, "mousedown", this, this.df, !1, !0),
    this.options.Zb &&
      this.options.Zb.gy &&
      w.O(this.w, "wheel", this, this.xx));
  this.options.Fr && (this.ca = new Ig(this));
  this.wd && this.wd.update(this.scale);
  Jg(this);
  return this.w;
};
d.A = function() {
  this.R = !1;
  this.Db && this.Db.cancel();
  Fg.s.A.call(this);
  this.w && (F(this.w), (this.w = null));
  this.Ud = this.Oa = null;
  this.ca && (this.ca.A(), (this.ca = null));
  this.H && (this.H.A(), (this.H = null));
  this.Nc && (this.Nc.A(), (this.Nc = null));
  this.hb && (this.hb.A(), (this.hb = null));
  this.xh && (this.xh.A(), (this.xh = null));
  this.Zd && (this.Zd.A(), (this.Zd = null));
  this.wd && (this.wd.A(), (this.wd = null));
  this.zi && (this.zi = null);
  this.Gg && (this.Gg = null);
  this.options.Kb || F(K(this).parentNode);
  this.rm && (w.Na(this.rm), (this.rm = null));
};
d.bf = function(a, b) {
  return new Kg(this, a, b);
};
function Lg(a, b) {
  var c = {
    hj: a.options.hj,
    Kb: a,
    u: a.u,
    ef: a.options.ef,
    pe: a.pe,
    Da: a.options.Da
  };
  a.H = null;
  a.H = a.pe ? new Mg(c) : new Ng(c);
  a.H.Kh = !1;
  return a.H.X(b);
}
function yf(a) {
  a.$o && a.R && (a.hb && a.hb.resize(), (a.Hj = !0));
}
d.resize = function() {
  this.ca && this.ca.position();
  this.H && this.H.position();
  this.Nc && this.Nc.position();
  this.xh && this.xh.position();
  this.hb && this.hb.resize();
  this.Hj = !0;
  Jg(this);
};
function Lf(a) {
  var b = Yd(document);
  qc(a.Zr, b) || ((a.Zr = b), (a.Hj = !0), Jg(a));
}
function K(a) {
  if (a.kq) return a.kq;
  for (var b = a.w; b; ) {
    if ("svg" == b.tagName) return (a.kq = b);
    b = b.parentNode;
  }
  return null;
}
d.translate = function(a, b) {
  if (this.Hm && this.Pl) this.wh.pf(a, b);
  else {
    var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
    this.Oa.setAttribute("transform", c);
    this.Ud.setAttribute("transform", c);
  }
  if (this.xb) {
    c = this.xb;
    var e = this.scale;
    c.fg = e;
    c.fe.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + b.toFixed(0) + ") scale(" + e + ")"
    );
  }
};
function Of(a) {
  if (a.Hm) {
    a.Pl = !1;
    var b = a.wh.El();
    a.wh.Xi(a.w);
    b = "translate(" + b.x + "," + b.y + ") scale(" + a.scale + ")";
    a.Oa.setAttribute("transform", b);
    a.Ud.setAttribute("transform", b);
  }
}
function Ff(a) {
  if (a.Hm && !a.Pl) {
    a.Pl = !0;
    var b = a.Oa.previousSibling,
      c = parseInt(K(a).getAttribute("width"), 10),
      e = parseInt(K(a).getAttribute("height"), 10),
      f = w.i.uc(a.Oa),
      h = a.wh,
      k = a.Oa,
      l = a.Ud,
      m = a.scale;
    h.Qd = b;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    h.ya.setAttribute("width", c);
    h.ya.setAttribute("height", e);
    h.ya.appendChild(k);
    h.ya.appendChild(l);
    h.ya.style.display = "block";
    a.wh.pf(f.x, f.y);
  }
}
d.Zc = function() {
  var a = this.rb();
  return a ? a.xa / this.scale : 0;
};
d.qa = function(a) {
  this.hb && this.hb.eh(a);
  (this.H || (this.ca && this.ca.H)) &&
    (this.H ? this.H : this.ca ? this.ca.H : null).eh(a);
  K(this).style.display = a ? "block" : "none";
  this.ca && (this.ca.Ec.style.display = a ? "block" : "none");
  a ? (this.$(), this.ca && this.ca.position()) : w.Pb(!0);
};
d.$ = function() {
  for (var a = Oc(this), b = a.length - 1; 0 <= b; b--) a[b].$(!1);
};
function Og(a) {
  var b = w.Yi;
  if (a.R && !(b.getElementsByTagName("block").length >= dd(a)))
    if ((a.Db && a.Db.cancel(), "comment" == b.tagName.toLowerCase())) {
      w.j.disable();
      try {
        var c = Af(b, a),
          e = parseInt(b.getAttribute("x"), 10),
          f = parseInt(b.getAttribute("y"), 10);
        isNaN(e) || isNaN(f) || (a.u && (e = -e), c.moveBy(e + 50, f + 50));
      } finally {
        w.j.enable();
      }
      c.select();
    } else {
      w.j.disable();
      try {
        var h = w.D.Ph(b, a),
          k = parseInt(b.getAttribute("x"), 10),
          l = parseInt(b.getAttribute("y"), 10);
        if (!isNaN(k) && !isNaN(l)) {
          a.u && (k = -k);
          do {
            b = !1;
            var m = Oc(a);
            c = 0;
            for (var n; (n = m[c]); c++) {
              var q = n.la();
              if (1 >= Math.abs(k - q.x) && 1 >= Math.abs(l - q.y)) {
                b = !0;
                break;
              }
            }
            if (!b) {
              var t = h.ke(!1);
              c = 0;
              for (var y; (y = t[c]); c++)
                if (y.closest(w.Rc, new C(k, l)).connection) {
                  b = !0;
                  break;
                }
            }
            b && ((k = a.u ? k - w.Rc : k + w.Rc), (l += 2 * w.Rc));
          } while (b);
          h.moveBy(k, l);
        }
      } finally {
        w.j.enable();
      }
      w.j.isEnabled() && !h.gb && w.j.V(new w.j.Ek(h));
      h.select();
    }
}
function Pg(a) {
  if ((a = a.Nd ? a.ph : a) && !a.Db && a.ca && a.ca.H) {
    a = a.ca;
    var b = a.Dd.ne();
    b && b.$d && a.H.show(b.$d);
  }
}
d.bh = function(a, b) {
  Fg.s.bh.call(this, a, b);
  Pg(this);
};
d.Df = function(a) {
  Fg.s.Df.call(this, a);
  Pg(this);
};
d.Vc = function(a, b, c) {
  a = Fg.s.Vc.call(this, a, b, c);
  Pg(this);
  return a;
};
function Jg(a) {
  a.Yq = a.Nc && a.w.parentNode ? a.Nc.Th() : null;
  a.Xq = a.H ? a.H.Th() : a.ca ? a.ca.Th() : null;
}
function pf(a, b) {
  b = new C(b.clientX, b.clientY);
  return a.Yq && a.Yq.contains(b)
    ? w.Lm
    : a.Xq && a.Xq.contains(b)
    ? w.Pp
    : w.Op;
}
d.df = function(a) {
  var b = this.le(a);
  b && (b.ib || (b.ib = this), (b.Lc = a), b.ij(a));
};
d.Cm = function(a, b) {
  a = w.i.Tj(a, K(this), hg(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.lr = sc(b, a);
};
function ye(a, b) {
  b = w.i.Tj(b, K(a), hg(a));
  b.x /= a.scale;
  b.y /= a.scale;
  return tc(a.lr, b);
}
d.pb = function() {
  return null != this.Db && this.Db.pb();
};
d.xx = function(a) {
  this.Db && this.Db.cancel();
  var b = -a.deltaY / 50,
    c = w.i.Tj(a, K(this), hg(this));
  this.zoom(c.x, c.y, b);
  a.preventDefault();
};
function yg(a) {
  var b = ad(a, !1);
  a = bd(a, !1);
  b = b.concat(a);
  if (!b.length) return { x: 0, y: 0, width: 0, height: 0 };
  a = b[0].On();
  for (var c = 1; c < b.length; c++) {
    var e = b[c].On();
    e.gd.x < a.gd.x && (a.gd.x = e.gd.x);
    e.Fd.x > a.Fd.x && (a.Fd.x = e.Fd.x);
    e.gd.y < a.gd.y && (a.gd.y = e.gd.y);
    e.Fd.y > a.Fd.y && (a.Fd.y = e.Fd.y);
  }
  return {
    x: a.gd.x,
    y: a.gd.y,
    width: a.Fd.x - a.gd.x,
    height: a.Fd.y - a.gd.y
  };
}
d.iv = function() {
  this.Rb(!1);
  w.j.S(!0);
  for (var a = ad(this, !0), b = 0, c = 0, e; (e = a[c]); c++) {
    var f = e.la();
    e.moveBy(-f.x, b - f.y);
    Qg(e);
    b = e.la().y + e.Gb().height + 25;
  }
  w.j.S(!1);
  this.Rb(!0);
};
d.xi = function(a) {
  function b(a) {
    if (a.gc()) y = y.concat(vc(a, !1));
    else {
      a = a.Gf(!1);
      for (var c = 0; c < a.length; c++) b(a[c]);
    }
  }
  function c() {
    w.j.S(h);
    var a = y.shift();
    a && (a.o ? (a.A(!1, !0), setTimeout(c, 10)) : c());
    w.j.S(!1);
  }
  if (!this.options.readOnly && !this.Nd) {
    var e = [],
      f = ad(this, !0),
      h = w.i.je(),
      k = this,
      l = {};
    l.text = w.g.UNDO;
    l.enabled = 0 < this.qh.length;
    l.eb = this.Gp.bind(this, !1);
    e.push(l);
    l = {};
    l.text = w.g.REDO;
    l.enabled = 0 < this.$j.length;
    l.eb = this.Gp.bind(this, !0);
    e.push(l);
    this.hb &&
      ((l = {}),
      (l.text = w.g.CLEAN_UP),
      (l.enabled = 1 < f.length),
      (l.eb = this.iv.bind(this)),
      e.push(l));
    if (this.options.collapse) {
      for (var m = (l = !1), n = 0; n < f.length; n++)
        for (var q = f[n]; q; )
          q.isCollapsed() ? (l = !0) : (m = !0), (q = Jc(q));
      var t = function(a) {
        for (var b = 0, c = 0; c < f.length; c++)
          for (var e = f[c]; e; )
            setTimeout(e.hg.bind(e, a), b), (e = Jc(e)), (b += 10);
      };
      m = { enabled: m };
      m.text = w.g.COLLAPSE_ALL;
      m.eb = function() {
        t(!0);
      };
      e.push(m);
      l = { enabled: l };
      l.text = w.g.EXPAND_ALL;
      l.eb = function() {
        t(!1);
      };
      e.push(l);
    }
    var y = [];
    for (n = 0; n < f.length; n++) b(f[n]);
    l = {
      text:
        1 == y.length
          ? w.g.DELETE_BLOCK
          : w.g.DELETE_X_BLOCKS.replace("%1", String(y.length)),
      enabled: 0 < y.length,
      eb: function() {
        k.Db && k.Db.cancel();
        2 > y.length
          ? c()
          : w.confirm(w.g.DELETE_ALL_BLOCKS.replace("%1", y.length), function(
              a
            ) {
              a && c();
            });
      }
    };
    e.push(l);
    this.Cq && this.Cq(e);
    w.ba.show(a, e, this.u);
  }
};
d.tt = function(a) {
  if ((a = Xf(a))) {
    if (!this.options.se)
      throw "Existing toolbox is null.  Can't create new toolbox.";
    if (a.getElementsByTagName("category").length) {
      if (!this.ca)
        throw "Existing toolbox has no categories.  Can't change mode.";
      this.options.se = a;
      this.ca.lm(a);
      Rg(this.ca);
    } else {
      if (!this.H) throw "Existing toolbox has categories.  Can't change mode.";
      this.options.se = a;
      this.H.show(a.childNodes);
    }
  } else if (this.options.se) throw "Can't nullify an existing toolbox.";
};
function Nf(a) {
  if (a.options.Kb) Nf(a.options.Kb);
  else {
    w.Xf = a;
    document.activeElement && document.activeElement.blur();
    try {
      K(a).focus();
    } catch (b) {
      try {
        K(a).parentNode.setActive();
      } catch (c) {
        K(a).parentNode.focus();
      }
    }
  }
}
d.zoom = function(a, b, c) {
  var e = this.options.Zb.Hx,
    f = this.rb(),
    h = K(this).createSVGPoint();
  h.x = a;
  h.y = b;
  h = h.matrixTransform(this.Oa.getCTM().inverse());
  a = h.x;
  b = h.y;
  h = this.Oa;
  e = Math.pow(e, c);
  c = this.scale * e;
  c > this.options.Zb.Rj
    ? (e = this.options.Zb.Rj / this.scale)
    : c < this.options.Zb.Sj && (e = this.options.Zb.Sj / this.scale);
  this.scale != c &&
    (this.hb &&
      ((a = h
        .getCTM()
        .translate(a * (1 - e), b * (1 - e))
        .scale(e)),
      (this.scrollX = a.e - f.lb),
      (this.scrollY = a.f - f.wb)),
    this.setScale(c));
};
function Eg(a, b) {
  var c = a.rb();
  a.zoom(c.xa / 2, c.bb / 2, b);
}
d.setScale = function(a) {
  this.options.Zb.Rj && a > this.options.Zb.Rj
    ? (a = this.options.Zb.Rj)
    : this.options.Zb.Sj && a < this.options.Zb.Sj && (a = this.options.Zb.Sj);
  this.scale = a;
  this.wd && this.wd.update(this.scale);
  this.hb ? this.hb.resize() : this.translate(this.scrollX, this.scrollY);
  w.Pb(!1);
  this.H && this.H.Vo();
};
function Sg(a) {
  var b = 0,
    c = 0;
  a && ((b = a.Zc()), (c = a.Wh()));
  return { width: b, height: c };
}
function Tg(a) {
  var b = yg(a),
    c = a.scale;
  a = b.width * c;
  var e = b.height * c,
    f = b.x * c;
  b = b.y * c;
  return { left: f, top: b, right: f + a, bottom: b + e, width: a, height: e };
}
function Gg() {
  var a = Sg(this.ca),
    b = Sg(this.H),
    c = w.ot(K(this));
  if (this.ca)
    if (this.Da == w.yf || this.Da == w.wg) c.height -= a.height;
    else if (this.Da == w.xf || this.Da == w.Xd) c.width -= a.width;
  if (this.hb) {
    var e = Tg(this);
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
  } else e = Tg(this);
  f = 0;
  this.ca && this.Da == w.xf && (f = a.width);
  h = 0;
  this.ca && this.Da == w.yf && (h = a.height);
  return {
    nc: e.height,
    Hc: e.width,
    oc: e.top,
    Gc: e.left,
    bb: c.height,
    xa: c.width,
    Fe: -this.scrollY,
    Ab: -this.scrollX,
    wb: h,
    lb: f,
    $B: a.width,
    ZB: a.height,
    ml: b.width,
    ur: b.height,
    Da: this.Da
  };
}
function Hg(a) {
  if (!this.hb)
    throw "Attempt to set top level workspace scroll without scrollbars.";
  var b = this.rb();
  ba(a.x) && (this.scrollX = -b.Hc * a.x - b.Gc);
  ba(a.y) && (this.scrollY = -b.nc * a.y - b.oc);
  a = this.scrollX + b.lb;
  b = this.scrollY + b.wb;
  this.translate(a, b);
  this.wd && this.wd.moveTo(a, b);
}
d.Rb = function(a) {
  var b = !this.$o && a;
  this.$o = a;
  b && yf(this);
};
d.clear = function() {
  this.Rb(!1);
  Fg.s.clear.call(this);
  this.Rb(!0);
};
function rg(a, b) {
  a.Gg.CREATE_VARIABLE = b;
}
function Ug(a, b) {
  return (a = a.Gg[b]) ? a : null;
}
function Vg(a, b) {
  return (a = a.zi[b]) ? a : null;
}
d.le = function(a) {
  var b =
      "mousedown" == a.type ||
      "touchstart" == a.type ||
      "pointerdown" == a.type,
    c = this.Db;
  return c
    ? b && c.Jr
      ? (console.warn("tried to start the same gesture twice"),
        c.cancel(),
        null)
      : c
    : b
    ? (this.Db = new ig(a, this))
    : null;
};
Fg.prototype.setVisible = Fg.prototype.qa;
function Wg(a) {
  Wg.s.constructor.call(this, null);
  this.Qs = a;
}
v(Wg, De);
d = Wg.prototype;
d.Ei = 0;
d.Ak = 0;
d.Gn = function(a) {
  w.i.B(
    "rect",
    { class: "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" },
    a
  );
  w.i.B(
    "path",
    {
      class: "blocklyIconSymbol",
      d:
        "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"
    },
    a
  );
  w.i.B("circle", { class: "blocklyIconShape", r: "2.7", cx: "8", cy: "8" }, a);
};
d.co = function(a) {
  He(this.U) && De.prototype.co.call(this, a);
};
d.cj = function() {
  this.nk = w.i.B("svg", { x: qe, y: qe }, null);
  if (this.Qs.length)
    for (var a = E("xml"), b = 0, c; (c = this.Qs[b]); b++)
      a.appendChild(E("block", { type: c }));
  else a = null;
  a = {
    se: a,
    Kb: this.U.o,
    Pd: this.U.o.options.Pd,
    u: this.U.u,
    Da: this.U.u ? w.Xd : w.xf,
    pe: !1,
    rb: this.cw.bind(this),
    kg: null
  };
  this.m = new Fg(a);
  this.m.Kj = !0;
  a = Lg(this.m, "g");
  b = this.m.X("blocklyMutatorBackground");
  b.insertBefore(a, this.m.Oa);
  this.nk.appendChild(b);
  return this.nk;
};
d.tf = function() {
  this.U.sb ||
    (He(this.U)
      ? this.wc && w.i.Qb(this.wc, "blocklyIconGroupReadonly")
      : (this.qa(!1), this.wc && w.i.mb(this.wc, "blocklyIconGroupReadonly")));
  De.prototype.tf.call(this);
};
d.pm = function() {
  var a = 2 * qe,
    b = this.m.Oa.getBBox();
  var c = this.U.u ? -b.x : b.width + b.x;
  b = b.height + 3 * a;
  if (this.m.H) {
    var e = this.m.H.Xe();
    b = Math.max(b, e.nc + 20);
  }
  c += 3 * a;
  if (Math.abs(this.Ei - c) > a || Math.abs(this.Ak - b) > a)
    (this.Ei = c),
      (this.Ak = b),
      this.Xa.gg(c + a, b + a),
      this.nk.setAttribute("width", this.Ei),
      this.nk.setAttribute("height", this.Ak);
  this.U.u &&
    this.m.Oa.setAttribute("transform", "translate(" + this.Ei + ",0)");
  this.m.resize();
};
d.qa = function(a) {
  if (a != this.Y())
    if ((w.j.V(new Dc(this.U, "mutatorOpen", !a, a)), a)) {
      this.Xa = new ne(this.U.o, this.cj(), this.U.Cd, this.Mg, null, null);
      we(this.Xa, this.U.id);
      if ((a = this.m.options.se))
        this.m.H.N(this.m), this.m.H.show(a.childNodes);
      this.gf = this.U.Te(this.m);
      a = vc(this.gf, !1);
      for (var b = 0, c; (c = a[b]); b++) c.$();
      this.gf.fh(!1);
      this.gf.kp(!1);
      this.m.H ? ((a = 2 * this.m.H.ra), (b = this.m.H.ia + a)) : (b = a = 16);
      this.U.u && (b = -b);
      this.gf.moveBy(b, a);
      if (this.U.sm) {
        var e = this;
        this.U.sm(this.gf);
        this.zm = function() {
          e.U.sm(e.gf);
        };
        this.U.o.Sc(this.zm);
      }
      this.pm();
      this.m.Sc(this.hy.bind(this));
      this.sf();
    } else
      (this.nk = null),
        this.m.A(),
        (this.gf = this.m = null),
        this.Xa.A(),
        (this.Xa = null),
        (this.Ak = this.Ei = 0),
        this.zm && (this.U.o.cg(this.zm), (this.zm = null));
};
d.hy = function() {
  if (!this.m.pb())
    for (var a = ad(this.m, !1), b = 0, c; (c = a[b]); b++) {
      var e = c.la(),
        f = c.Gb();
      20 > e.y + f.height && c.moveBy(0, 20 - f.height - e.y);
    }
  if (this.gf.o == this.m) {
    w.j.S(!0);
    c = this.U;
    a = (a = c.Ga()) && w.D.td(a);
    b = c.R;
    c.R = !1;
    c.Re(this.gf);
    c.R = b;
    c.xc();
    b = (b = c.Ga()) && w.D.td(b);
    if (a != b) {
      w.j.V(new w.j.Dc(c, "mutation", null, a, b));
      var h = w.j.tc();
      setTimeout(function() {
        w.j.S(h);
        c.ob();
        w.j.S(!1);
      }, w.Dk);
    }
    c.R && c.$();
    this.m.pb() || this.pm();
    w.j.S(!1);
  }
};
d.cw = function() {
  return { bb: this.Ak, xa: this.Ei, wb: 0, lb: 0 };
};
d.A = function() {
  this.U.ad = null;
  De.prototype.A.call(this);
};
function Xg(a, b, c) {
  if (!a || !a.v.o) return !1;
  c = J(b, c).connection;
  var e = I(a);
  return (e && e != b) || c.Pa == a
    ? !1
    : (c.isConnected() && c.disconnect(), c.connect(a), !0);
}
function Yg(a) {
  var b = null;
  if (a && a.options) {
    var c = a.options.Kb;
    a.Nd ? c && c.options && (b = c.options.Kb) : c && (b = c);
  }
  return b;
}
g.Blockly || (g.Blockly = {});
g.Blockly.Mutator || (g.Blockly.Mutator = {});
g.Blockly.Mutator.reconnect = Xg;
w.K = {};
w.K.Jm = {};
w.K.register = function(a, b) {
  if (!p(a) || Fa(a)) throw Error('Error: Invalid extension name "' + a + '"');
  if (w.K.Jm[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if (!u(b)) throw Error('Error: Extension "' + a + '" must be a function');
  w.K.Jm[a] = b;
};
w.K.nm = function(a, b) {
  if (!ia(b)) throw Error('Error: Mixin "' + a + '" must be a object');
  w.K.register(a, function() {
    Zg(this, b);
  });
};
w.K.ak = function(a, b, c, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  w.K.pq(f, b.Za, "domToMutation");
  w.K.pq(f, b.Ga, "mutationToDom");
  var h = w.K.rq(b, f);
  if (c && !u(c)) throw Error('Extension "' + a + '" is not a function');
  w.K.register(a, function() {
    h && this.ik(new Wg(e));
    Zg(this, b);
    c && c.apply(this);
  });
};
w.K.apply = function(a, b, c) {
  var e = w.K.Jm[a];
  if (!u(e)) throw Error('Error: Extension "' + a + '" not found.');
  if (c) w.K.gv(a, b);
  else var f = w.K.Rn(b);
  e.apply(b);
  if (c) w.K.ev('Error after applying mutator "' + a + '": ', b);
  else if (!w.K.Ww(f, b))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
w.K.pq = function(a, b, c) {
  if (!b) throw Error(a + 'missing required property "' + c + '"');
  if ("function" != typeof b)
    throw Error(a + '" required property "' + c + '" must be a function');
};
w.K.gv = function(a, b) {
  if (w.K.Rn(b).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        b.id
    );
};
w.K.rq = function(a, b) {
  var c = void 0 !== a.Re,
    e = void 0 !== a.Te;
  if (c && e) {
    if ("function" != typeof a.Re)
      throw Error(b + "compose must be a function.");
    if ("function" != typeof a.Te)
      throw Error(b + "decompose must be a function.");
    return !0;
  }
  if (c || e)
    throw Error(b + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
w.K.ev = function(a, b) {
  if ("function" != typeof b.Za)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof b.Ga)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  w.K.rq(b, a);
};
w.K.Rn = function(a) {
  var b = [];
  void 0 !== a.Za && b.push(a.Za);
  void 0 !== a.Ga && b.push(a.Ga);
  void 0 !== a.Re && b.push(a.Re);
  void 0 !== a.Te && b.push(a.Te);
  return b;
};
w.K.Ww = function(a, b) {
  b = w.K.Rn(b);
  if (b.length != a.length) return !1;
  for (var c = 0; c < b.length; c++) if (a[c] != b[c]) return !1;
  return !0;
};
w.K.Ok = function(a, b) {
  var c = [];
  "object" == typeof document &&
    w.i.Ys(function() {
      for (var a in b) w.i.qq(b[a]);
    });
  return function() {
    this.type &&
      -1 === c.indexOf(this.type) &&
      (w.K.fv(this, a, b), c.push(this.type));
    this.Ma(
      function() {
        var e = D(this, a),
          f = b[e];
        null == f
          ? -1 === c.indexOf(this.type) &&
            ((e = "No tooltip mapping for value " + e + " of field " + a),
            null != this.type && (e += " of block type " + this.type),
            console.warn(e + "."))
          : (f = w.i.kc(f));
        return f;
      }.bind(this)
    );
  };
};
w.K.fv = function(a, b, c) {
  var e = H(a, b);
  if (!u(e.Rg)) {
    e = e.getOptions();
    for (var f = 0; f < e.length; ++f) {
      var h = e[f][1];
      null == c[h] &&
        console.warn(
          "No tooltip mapping for value " +
            h +
            " of field " +
            b +
            " of block type " +
            a.type
        );
    }
  }
};
w.K.Pk = function(a) {
  "object" == typeof document &&
    w.i.Ys(function() {
      w.i.qq(a);
    });
  return function() {
    this.Ma(
      function() {
        var b = H(this, "VAR");
        return w.i.kc(a).replace("%1", b ? b.Hb() : "");
      }.bind(this)
    );
  };
};
w.K.Tv = function() {
  this.Wx = this.fd;
  this.Ma(
    function() {
      var a = this.getParent();
      return (a && $g(a) && a.fd) || this.Wx;
    }.bind(this)
  );
};
w.K.register("parent_tooltip_when_inline", w.K.Tv);
var ah = {};
function bh(a, b) {
  var c = Td(a);
  return c.defaultView &&
    c.defaultView.getComputedStyle &&
    (a = c.defaultView.getComputedStyle(a, null))
    ? a[b] || a.getPropertyValue(b) || ""
    : "";
}
function ch(a, b) {
  return (
    bh(a, b) ||
    (a.currentStyle ? a.currentStyle[b] : null) ||
    (a.style && a.style[b])
  );
}
function Tf() {
  var a = document,
    b = a.body;
  a = a.documentElement;
  return new C(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop);
}
function dh(a) {
  try {
    var b = a.getBoundingClientRect();
  } catch (c) {
    return { left: 0, top: 0, right: 0, bottom: 0 };
  }
  z &&
    a.ownerDocument.body &&
    ((a = a.ownerDocument),
    (b.left -= a.documentElement.clientLeft + a.body.clientLeft),
    (b.top -= a.documentElement.clientTop + a.body.clientTop));
  return b;
}
function eh(a) {
  var b = Td(a),
    c = new C(0, 0);
  var e = b ? Td(b) : document;
  e =
    !z || 9 <= Number(wb) || "CSS1Compat" == Rd(e).Hd.compatMode
      ? e.documentElement
      : e.body;
  if (a == e) return c;
  a = dh(a);
  b = Yd(Rd(b).Hd);
  c.x = a.left + b.x;
  c.y = a.top + b.y;
  return c;
}
function fh(a) {
  "number" == typeof a && (a += "px");
  return a;
}
function gh(a) {
  var b = hh;
  if ("none" != ch(a, "display")) return b(a);
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
function hh(a) {
  var b = a.offsetWidth,
    c = a.offsetHeight,
    e = A && !b && !c;
  return (aa(b) && !e) || !a.getBoundingClientRect
    ? new Qd(b, c)
    : ((a = dh(a)), new Qd(a.right - a.left, a.bottom - a.top));
}
function ih(a, b) {
  a.style.display = b ? "" : "none";
}
var jh = kb ? "MozUserSelect" : A || jb ? "WebkitUserSelect" : null;
function kh(a, b, c) {
  c = c ? null : a.getElementsByTagName("*");
  if (jh) {
    if (((b = b ? "none" : ""), a.style && (a.style[jh] = b), c)) {
      a = 0;
      for (var e; (e = c[a]); a++) e.style && (e.style[jh] = b);
    }
  } else if (z || ib)
    if (((b = b ? "on" : ""), a.setAttribute("unselectable", b), c))
      for (a = 0; (e = c[a]); a++) e.setAttribute("unselectable", b);
}
var lh = { thin: 2, medium: 4, thick: 6 };
function mh(a, b) {
  if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  if (c in lh) a = lh[c];
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
function nh(a, b) {
  this.ua = new Qd(0, 25);
  this.setValue(a);
  this.sh = b;
}
var oh = {};
function ph(a, b) {
  if (!p(a) || Fa(a)) throw Error('Invalid field type "' + a + '"');
  if (!ia(b) || !u(b.ha))
    throw Error('Field "' + b + '" must have a fromJson function');
  oh[a] = b;
}
var qh = null,
  rh = 0;
d = nh.prototype;
d.name = void 0;
d.js = 50;
d.na = "";
d.v = null;
d.Qa = !0;
d.sh = null;
d.ug = !0;
d.rp = function(a) {
  this.v = a;
};
d.N = function() {
  this.Va ||
    ((this.Va = w.i.B("g", {}, null)),
    this.Qa || (this.Va.style.display = "none"),
    (this.qd = w.i.B(
      "rect",
      { rx: 4, ry: 4, x: -5, y: 0, height: 16 },
      this.Va
    )),
    (this.Aa = w.i.B(
      "text",
      { class: "blocklyText", y: this.ua.height - 12.5 },
      this.Va
    )),
    this.tf(),
    this.v.ga().appendChild(this.Va),
    (this.bm = w.O(this.Va, "mousedown", this, this.df)),
    this.ve());
};
d.Ng = function() {};
d.A = function() {
  this.bm && (w.Na(this.bm), (this.bm = null));
  this.v = null;
  F(this.Va);
  this.sh = this.qd = this.Aa = this.Va = null;
};
d.tf = function() {
  var a = this.Va;
  this.ug &&
    a &&
    (He(this.v)
      ? (w.i.mb(a, "blocklyEditableText"),
        w.i.Qb(a, "blocklyNonEditableText"),
        (this.Va.style.cursor = this.Gk))
      : (w.i.mb(a, "blocklyNonEditableText"),
        w.i.Qb(a, "blocklyEditableText"),
        (this.Va.style.cursor = "")));
};
d.Y = function() {
  return this.Qa;
};
d.qa = function(a) {
  if (this.Qa != a) {
    this.Qa = a;
    var b = this.ga();
    b && ((b.style.display = a ? "block" : "none"), this.ve());
  }
};
function sh(a, b) {
  a.sh = b;
}
d.mn = function(a) {
  return a;
};
function Ae(a, b) {
  var c = a.mn(b);
  if (null === c) return null;
  void 0 !== c && (b = c);
  if ((c = a.sh)) {
    a = c.call(a, b);
    if (null === a) return null;
    void 0 !== a && (b = a);
  }
  return b;
}
d.ga = function() {
  return this.Va;
};
d.ve = function() {
  this.Qa ? ((this.Aa.textContent = th(this)), this.zk()) : (this.ua.width = 0);
};
d.zk = function() {
  var a = uh(this.Aa);
  this.qd && this.qd.setAttribute("width", a + 10);
  this.ua.width = a;
};
function uh(a) {
  var b = a.textContent + "\n" + a.className.baseVal,
    c;
  if (qh && (c = qh[b])) return c;
  try {
    c = z || jb ? a.getBBox().width : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  qh && (qh[b] = c);
  return c;
}
function wg() {
  rh++;
  qh || (qh = {});
}
function xg() {
  rh--;
  rh || (qh = null);
}
d.Ze = function() {
  this.ua.width || this.ve();
  return this.ua;
};
function vh(a) {
  var b = a.qd.getBBox(),
    c = b.height * a.v.o.scale;
  b = b.width * a.v.o.scale;
  a = eh(a.qd);
  return { top: a.y, bottom: a.y + c, left: a.x, right: a.x + b };
}
function th(a) {
  var b = a.na;
  if (!b) return "\u00a0";
  b.length > a.js && (b = b.substring(0, a.js - 2) + "\u2026");
  b = b.replace(/\s/g, "\u00a0");
  a.v.u && (b += "\u200f");
  return b;
}
d.Hb = function() {
  return this.na;
};
d.Sb = function(a) {
  null !== a && ((a = String(a)), a !== this.na && ((this.na = a), this.nj()));
};
d.nj = function() {
  this.ua.width = 0;
  this.v && this.v.R && (this.v.$(), this.v.ob());
};
d.getValue = function() {
  return this.Hb();
};
d.setValue = function(a) {
  if (null !== a) {
    var b = this.getValue();
    b != a &&
      (this.v &&
        w.j.isEnabled() &&
        w.j.V(new w.j.Dc(this.v, "field", this.name, b, a)),
      this.Sb(a));
  }
};
d.df = function(a) {
  this.v && this.v.o && (a = this.v.o.le(a)) && !a.lh && (a.lh = this);
};
d.Ma = function() {};
d.$g = function() {
  return !1;
};
function wh(a, b) {
  this.ua = new Qd(0, 17.5);
  this.vq = b;
  this.setValue(a);
}
v(wh, nh);
wh.ha = function(a) {
  var b = w.i.kc(a.text);
  return new wh(b, a["class"]);
};
d = wh.prototype;
d.ug = !1;
d.N = function() {
  this.Aa ||
    ((this.Aa = w.i.B(
      "text",
      { class: "blocklyText", y: this.ua.height - 5 },
      null
    )),
    this.vq && w.i.mb(this.Aa, this.vq),
    this.Qa || (this.Aa.style.display = "none"),
    this.v.ga().appendChild(this.Aa),
    (this.Aa.fd = this.v),
    w.C.yg(this.Aa),
    this.ve());
};
d.A = function() {
  F(this.Aa);
  this.Aa = null;
};
d.ga = function() {
  return this.Aa;
};
d.Ma = function(a) {
  this.Aa.fd = a;
};
ph("field_label", wh);
function xh(a, b, c, e) {
  if (a != w.Ge && !b)
    throw "Value inputs and statement inputs must have non-empty name.";
  this.type = a;
  this.name = b;
  this.v = c;
  this.connection = e;
  this.Ia = [];
}
d = xh.prototype;
d.align = w.Fi;
d.Qa = !0;
function M(a, b, c) {
  yh(a, a.Ia.length, b, c);
  return a;
}
function yh(a, b, c, e) {
  if (0 > b || b > a.Ia.length) throw Error("index " + b + " out of bounds.");
  if (!c && !e) return b;
  p(c) && (c = new wh(c));
  c.rp(a.v);
  a.v.R && c.N();
  c.name = e;
  c.Qo && (b = yh(a, b, c.Qo));
  a.Ia.splice(b, 0, c);
  ++b;
  c.Cp && (b = yh(a, b, c.Cp));
  a.v.R && (a.v.$(), a.v.ob());
  return b;
}
d.Y = function() {
  return this.Qa;
};
d.qa = function(a) {
  var b = [];
  if (this.Qa == a) return b;
  for (
    var c = (this.Qa = a) ? "block" : "none", e = 0, f;
    (f = this.Ia[e]);
    e++
  )
    f.qa(a);
  if (this.connection) {
    if (a) b = gf(this.connection);
    else if (((e = this.connection), hf(e, !0), e.Pa))
      for (e = vc(I(e), !1), f = 0; f < e.length; f++) {
        for (var h = e[f], k = h.ke(!0), l = 0; l < k.length; l++) hf(k[l], !0);
        h = nf(h);
        for (l = 0; l < h.length; l++) h[l].qa(!1);
      }
    if ((e = I(this.connection))) (e.ga().style.display = c), a || (e.R = !1);
  }
  return b;
};
d.Ca = function(a) {
  if (!this.connection) throw "This input does not have a connection.";
  this.connection.Ca(a);
  return this;
};
function zh(a, b) {
  a.align = b;
  a.v.R && a.v.$();
  return a;
}
d.N = function() {
  if (this.v.o.R) for (var a = 0; a < this.Ia.length; a++) this.Ia[a].N();
};
d.A = function() {
  for (var a = 0, b; (b = this.Ia[a]); a++) b.A();
  this.connection && this.connection.A();
  this.v = null;
};
function Ie(a) {
  Ie.s.constructor.call(this, a);
  Ee(this);
  this.na = {};
}
v(Ie, De);
d = Ie.prototype;
d.zq = !1;
d.Gn = function(a) {
  w.i.B(
    "path",
    {
      class: "blocklyIconShape",
      d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    },
    a
  );
  w.i.B(
    "path",
    {
      class: "blocklyIconSymbol",
      d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
    },
    a
  );
  w.i.B(
    "rect",
    { class: "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" },
    a
  );
};
d.qa = function(a) {
  if (a != this.Y())
    if ((w.j.V(new Dc(this.U, "warningOpen", !a, a)), a)) {
      var b = this.Hb();
      a = w.i.B(
        "text",
        { class: "blocklyText blocklyBubbleText", y: qe },
        null
      );
      b = b.split("\n");
      for (var c = 0; c < b.length; c++)
        w.i
          .B("tspan", { dy: "1em", x: qe }, a)
          .appendChild(document.createTextNode(b[c]));
      this.Xa = new ne(this.U.o, a, this.U.Cd, this.Mg, null, null);
      we(this.Xa, this.U.id);
      if (this.U.u) {
        b = a.getBBox().width;
        c = 0;
        for (var e; (e = a.childNodes[c]); c++)
          e.setAttribute("text-anchor", "end"), e.setAttribute("x", b + qe);
      }
      this.sf();
      a = this.Xa.Ig();
      this.Xa.gg(a.width, a.height);
    } else this.Xa.A(), (this.Xa = null);
};
d.Sb = function(a, b) {
  this.na[b] != a &&
    (a ? (this.na[b] = a) : delete this.na[b],
    this.Y() && (this.qa(!1), this.qa(!0)));
};
d.Hb = function() {
  var a = [],
    b;
  for (b in this.na) a.push(this.na[b]);
  return a.join("\n");
};
d.A = function() {
  this.U.kd = null;
  De.prototype.A.call(this);
};
function cd(a, b, c) {
  "undefined" !== typeof Ah.prototype[b] &&
    console.warn(
      'FUTURE ERROR: Block prototypeName "' +
        b +
        '" conflicts with Blockly.Generator members. Registering Generators for this block type will incur errors.\nThis name will be DISALLOWED (throwing an error) in future versions of Blockly.'
    );
  this.id = c && !Ic(a, c) ? c : w.i.je();
  a.gn[this.id] = this;
  this.Z = this.L = this.P = null;
  this.W = [];
  this.Qf = void 0;
  this.disabled = !1;
  this.fd = "";
  this.contextMenu = !0;
  this.Zf = null;
  this.Oe = [];
  this.nr = this.Uj = this.gj = !0;
  this.ae = this.gb = !1;
  this.Ta = null;
  this.ld = new C(0, 0);
  this.o = a;
  this.sb = a.Nd;
  this.u = a.u;
  if (b) {
    this.type = b;
    b = w.J[b];
    for (var e in b) this[e] = b[e];
  }
  a.Ai.push(this);
  u(this.N) && this.N();
  this.Ew = this.Qf;
  if (w.j.isEnabled()) {
    (a = w.j.tc()) || w.j.S(!0);
    try {
      w.j.V(new w.j.Ek(this));
    } finally {
      a || w.j.S(!1);
    }
  }
  if (u(this.onchange)) {
    if ((a = this.onchange) && !u(a))
      throw Error("onchange must be a function.");
    this.Vj && this.o.cg(this.Vj);
    if ((this.onchange = a)) (this.Vj = a.bind(this)), this.o.Sc(this.Vj);
  }
}
d = cd.prototype;
d.data = null;
d.ce = "#000000";
d.A = function(a) {
  if (this.o) {
    this.Vj && this.o.cg(this.Vj);
    Ce(this, a);
    w.j.isEnabled() && w.j.V(new w.j.Dt(this));
    w.j.disable();
    try {
      this.o && ($c(this.o, this), delete this.o.gn[this.id], (this.o = null));
      w.selected == this && (w.selected = null);
      for (var b = this.Oe.length - 1; 0 <= b; b--) this.Oe[b].A(!1);
      b = 0;
      for (var c; (c = this.W[b]); b++) c.A();
      this.W.length = 0;
      var e = this.ke(!0);
      for (b = 0; b < e.length; b++) {
        var f = e[b];
        f.isConnected() && f.disconnect();
        e[b].A();
      }
    } finally {
      w.j.enable();
    }
  }
};
d.Ng = function() {
  for (var a = 0, b; (b = this.W[a]); a++)
    for (var c = 0, e; (e = b.Ia[c]); c++) e.Ng && e.Ng();
};
function Ce(a, b) {
  if (a.P) a.P.isConnected() && a.P.disconnect();
  else if (a.Z) {
    var c = null;
    a.Z.isConnected() && ((c = a.Z.Pa), a.Z.disconnect());
    var e = Jc(a);
    b && e && ((a = a.L.Pa), a.disconnect(), c && Le(c, a) && c.connect(a));
  }
}
d.ke = function() {
  var a = [];
  this.P && a.push(this.P);
  this.Z && a.push(this.Z);
  this.L && a.push(this.L);
  for (var b = 0, c; (c = this.W[b]); b++) c.connection && a.push(c.connection);
  return a;
};
d.ob = function() {
  console.warn(
    "Not expected to reach this bumpNeighbours_ function. The BlockSvg function for bumpNeighbours_ was expected to be called instead."
  );
};
d.getParent = function() {
  return this.Zf;
};
function Bh(a) {
  do {
    var b = a;
    a = a.getParent();
    if (!a) return null;
  } while (Jc(a) == b);
  return a;
}
function Jc(a) {
  return a.L && I(a.L);
}
function af(a) {
  var b = a;
  do (a = b), (b = a.Zf);
  while (b);
  return a;
}
d.Gf = function(a) {
  if (!a) return this.Oe;
  a = [];
  for (var b = 0, c; (c = this.W[b]); b++)
    c.connection && (c = I(c.connection)) && a.push(c);
  (b = Jc(this)) && a.push(b);
  return a;
};
d.gh = function(a) {
  if (a != this.Zf) {
    if (this.Zf) {
      ya(this.Zf.Oe, this);
      if (this.Z && this.Z.isConnected())
        throw "Still connected to previous block.";
      if (this.P && this.P.isConnected())
        throw "Still connected to parent block.";
      this.Zf = null;
    } else $c(this.o, this);
    (this.Zf = a) ? a.Oe.push(this) : this.o.Ai.push(this);
  }
};
function vc(a, b) {
  var c = [a];
  a = a.Gf(b);
  for (var e, f = 0; (e = a[f]); f++) c.push.apply(c, vc(e, b));
  return c;
}
d.gc = function() {
  return this.gj && !this.gb && !(this.o && this.o.options.readOnly);
};
d.kp = function(a) {
  this.gj = a;
};
d.re = function() {
  return this.Uj && !this.gb && !(this.o && this.o.options.readOnly);
};
d.fh = function(a) {
  this.Uj = a;
};
d.qp = function(a) {
  this.gb = a;
};
function He(a) {
  return a.nr && !(a.o && a.o.options.readOnly);
}
d.lp = function(a) {
  this.nr = a;
  a = 0;
  for (var b; (b = this.W[a]); a++)
    for (var c = 0, e; (e = b.Ia[c]); c++) e.tf();
};
function zg(a, b) {
  if (!b && a.isCollapsed()) {
    if ((a.P && hf(a.P, b), a.Z && hf(a.Z, b), a.L)) {
      hf(a.L, b);
      var c = I(a.L);
      c && zg(c, b);
    }
  } else {
    a = a.ke(!0);
    for (var e = 0; (c = a[e]); e++) hf(c, b), Pe(c) && (c = I(c)) && zg(c, b);
  }
}
d.Ma = function(a) {
  this.fd = a;
};
d.qb = function(a) {
  var b = p(a) ? w.i.kc(a) : a,
    c = Number(b);
  if (!isNaN(c) && 0 <= c && 360 >= c) this.ce = w.Nr(c);
  else if (p(b) && /^#[0-9a-fA-F]{6}$/.test(b)) this.ce = b;
  else
    throw ((c = 'Invalid colour: "' + b + '"'),
    a != b && (c += ' (from "' + a + '")'),
    c);
};
function H(a, b) {
  for (var c = 0, e; (e = a.W[c]); c++)
    for (var f = 0, h; (h = e.Ia[f]); f++) if (h.name === b) return h;
  return null;
}
d.Vn = function() {
  for (var a = [], b = 0, c; (c = this.W[b]); b++)
    for (var e = 0, f; (f = c.Ia[e]); e++) f.$g() && a.push(f.getValue());
  return a;
};
d.Hf = function() {
  for (var a = [], b = 0, c; (c = this.W[b]); b++)
    for (var e = 0, f; (f = c.Ia[e]); e++)
      f.$g() && (f = this.o.Kd(f.getValue())) && a.push(f);
  return a;
};
d.Gm = function(a) {
  for (var b = 0, c; (c = this.W[b]); b++)
    for (var e = 0, f; (f = c.Ia[e]); e++)
      f.$g() && a.aa() == f.getValue() && f.Sb(a.name);
};
d.dk = function(a, b) {
  for (var c = 0, e; (e = this.W[c]); c++)
    for (var f = 0, h; (h = e.Ia[f]); f++)
      h.$g() && a == h.getValue() && h.setValue(b);
};
function D(a, b) {
  return (a = H(a, b)) ? a.getValue() : null;
}
d.ye = function(a, b) {
  a
    ? (void 0 === b && (b = null),
      this.Z || (this.Z = this.Pj(w.wf)),
      this.Z.Ca(b))
    : this.Z && (this.Z.A(), (this.Z = null));
};
d.we = function(a, b) {
  a
    ? (void 0 === b && (b = null),
      this.L || (this.L = this.Pj(w.Wa)),
      this.L.Ca(b))
    : this.L && (this.L.A(), (this.L = null));
};
d.xe = function(a, b) {
  a
    ? (void 0 === b && (b = null),
      this.P || (this.P = this.Pj(w.Gh)),
      this.P.Ca(b))
    : this.P && (this.P.A(), (this.P = null));
};
d.jg = function(a) {
  this.Qf != a &&
    (w.j.V(new w.j.Dc(this, "inline", null, this.Qf, a)), (this.Qf = a));
};
function $g(a) {
  if (void 0 != a.Qf) return a.Qf;
  for (var b = 1; b < a.W.length; b++)
    if (a.W[b - 1].type == w.Ge && a.W[b].type == w.Ge) return !1;
  for (b = 1; b < a.W.length; b++)
    if (a.W[b - 1].type == w.kb && a.W[b].type == w.Ge) return !0;
  return !1;
}
d.Bd = function(a) {
  this.disabled != a &&
    (w.j.V(new w.j.Dc(this, "disabled", null, this.disabled, a)),
    (this.disabled = a));
};
function Ch(a) {
  for (a = Bh(a); a; ) {
    if (a.disabled) return !0;
    a = Bh(a);
  }
  return !1;
}
d.isCollapsed = function() {
  return this.ae;
};
d.hg = function(a) {
  this.ae != a &&
    (w.j.V(new w.j.Dc(this, "collapsed", null, this.ae, a)), (this.ae = a));
};
d.toString = function(a, b) {
  var c = [],
    e = b || "?";
  if (this.ae) c.push(J(this, "_TEMP_COLLAPSED_INPUT").Ia[0].na);
  else
    for (var f = 0, h; (h = this.W[f]); f++) {
      for (var k = 0, l; (l = h.Ia[k]); k++)
        l instanceof Dh && !l.getValue() ? c.push(e) : c.push(l.Hb());
      h.connection &&
        ((h = I(h.connection)) ? c.push(h.toString(void 0, b)) : c.push(e));
    }
  c = Ha(c.join(" ")) || "???";
  a && ((b = c), b.length > a && (b = b.substring(0, a - 3) + "..."), (c = b));
  return c;
};
function N(a, b) {
  return a.Ke(w.kb, b);
}
function O(a, b) {
  return a.Ke(w.Ge, b || "");
}
function Eh(a, b) {
  var c = b.type ? 'Block "' + b.type + '": ' : "";
  if ("colour" in b)
    if (void 0 === b.colour) console.warn(c + "Undefined color value.");
    else {
      var e = b.colour;
      try {
        a.qb(e);
      } catch (x) {
        console.warn(c + "Illegal color value: ", e);
      }
    }
  for (e = 0; void 0 !== b["message" + e]; ) {
    for (
      var f = a,
        h = b["args" + e] || [],
        k = b["lastDummyAlign" + e],
        l = w.i.Ux(b["message" + e]),
        m = [],
        n = 0,
        q = [],
        t = 0;
      t < l.length;
      t++
    ) {
      var y = l[t];
      if ("number" == typeof y) {
        if (0 >= y || y > h.length)
          throw Error(
            'Block "' + f.type + '": Message index %' + y + " out of range."
          );
        if (m[y])
          throw Error(
            'Block "' + f.type + '": Message index %' + y + " duplicated."
          );
        m[y] = !0;
        n++;
        q.push(h[y - 1]);
      } else (y = y.trim()) && q.push(y);
    }
    if (n != h.length)
      throw Error(
        'Block "' +
          f.type +
          '": Message does not reference all ' +
          h.length +
          " arg(s)."
      );
    q.length &&
      ("string" == typeof q[q.length - 1] ||
        Ea(q[q.length - 1].type, "field_")) &&
      ((t = { type: "input_dummy" }), k && (t.align = k), q.push(t));
    k = { LEFT: w.Fi, RIGHT: w.Nb, CENTRE: w.Bk };
    h = [];
    for (t = 0; t < q.length; t++)
      if (((m = q[t]), "string" == typeof m)) h.push([m, void 0]);
      else {
        l = y = null;
        do
          if (((n = !1), "string" == typeof m)) y = new wh(m);
          else
            switch (m.type) {
              case "input_value":
                l = N(f, m.name);
                break;
              case "input_statement":
                l = f.Ke(w.Wa, m.name);
                break;
              case "input_dummy":
                l = O(f, m.name);
                break;
              default:
                (y = (y = oh[m.type]) ? y.ha(m) : null),
                  y ||
                    (m.alt
                      ? ((m = m.alt), (n = !0))
                      : console.warn(
                          "Blockly could not create a field of type " +
                            m.type +
                            ". You may need to register your custom field.  See github.com/google/blockly/issues/1584"
                        ));
            }
        while (n);
        if (y) h.push([y, m.name]);
        else if (l) {
          m.check && l.Ca(m.check);
          m.align && zh(l, k[m.align]);
          for (m = 0; m < h.length; m++) M(l, h[m][0], h[m][1]);
          h.length = 0;
        }
      }
    e++;
  }
  void 0 !== b.inputsInline && a.jg(b.inputsInline);
  void 0 !== b.output && a.xe(!0, b.output);
  void 0 !== b.previousStatement && a.ye(!0, b.previousStatement);
  void 0 !== b.nextStatement && a.we(!0, b.nextStatement);
  void 0 !== b.tooltip && ((e = b.tooltip), (e = w.i.kc(e)), a.Ma(e));
  void 0 !== b.enableContextMenu &&
    ((e = b.enableContextMenu), (a.contextMenu = !!e));
  void 0 !== b.helpUrl && ((e = b.helpUrl), (e = w.i.kc(e)), (a.fc = e));
  p(b.extensions) &&
    (console.warn(
      c +
        "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        b.type +
        "' block."
    ),
    (b.extensions = [b.extensions]));
  void 0 !== b.mutator && w.K.apply(b.mutator, a, !0);
  if (Array.isArray(b.extensions))
    for (b = b.extensions, e = 0; e < b.length; ++e) w.K.apply(b[e], a, !1);
}
function Zg(a, b) {
  if (aa(void 0)) throw Error("opt_disableCheck must be a boolean if provided");
  var c = [],
    e;
  for (e in b) void 0 !== a[e] && c.push(e);
  if (c.length)
    throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  for (var f in b) a[f] = b[f];
}
d.Ke = function(a, b) {
  var c = null;
  if (a == w.kb || a == w.Wa) c = this.Pj(a);
  a = new xh(a, b, this, c);
  this.W.push(a);
  return a;
};
function Fh(a, b, c) {
  if (b != c) {
    for (var e = -1, f = c ? -1 : a.W.length, h = 0, k; (k = a.W[h]); h++)
      if (k.name == b) {
        if (((e = h), -1 != f)) break;
      } else if (c && k.name == c && ((f = h), -1 != e)) break;
    a.wo(e, f);
  }
}
d.wo = function(a, b) {
  var c = this.W[a];
  this.W.splice(a, 1);
  a < b && b--;
  this.W.splice(b, 0, c);
};
d.yb = function(a) {
  for (var b = 0, c; (c = this.W[b]); b++)
    if (c.name == a) {
      c.connection &&
        c.connection.isConnected() &&
        ((c.connection.Ae = null), (a = I(c.connection)), a.gb ? a.A() : Ce(a));
      c.A();
      this.W.splice(b, 1);
      break;
    }
};
function J(a, b) {
  for (var c = 0, e; (e = a.W[c]); c++) if (e.name == b) return e;
  return null;
}
function Gh(a, b) {
  return (a = J(a, b)) && a.connection && I(a.connection);
}
d.ul = function() {
  return this.Ta || "";
};
d.dh = function(a) {
  this.Ta != a &&
    (w.j.V(new w.j.Dc(this, "comment", null, this.Ta, a || "")), (this.Ta = a));
};
d.ze = function() {};
d.ik = function() {};
d.la = function() {
  return this.ld;
};
d.moveBy = function(a, b) {
  var c = new w.j.Gi(this);
  this.ld.translate(a, b);
  c.ff();
  w.j.V(c);
};
d.Pj = function(a) {
  return new Je(this, a);
};
function Se(a) {
  var b = a.type ? '"' + a.type + '" block' : "Block";
  a.id && (b += ' (id="' + a.id + '")');
  return b;
}
w.i.Ci = {};
w.i.Ci.Ze = function(a) {
  a = a.F();
  var b = gh(a);
  b.height = a.scrollHeight;
  return b;
};
w.i.Ci.eq = function(a, b, c) {
  b.left += c.width;
  b.right += c.width;
  a.left += c.width;
  a.right += c.width;
};
function Hh(a) {
  Fb.call(this);
  this.ai = a;
  this.gi = {};
}
v(Hh, Fb);
var Ih = [];
d = Hh.prototype;
d.pa = function(a, b, c, e) {
  r(b) || (b && (Ih[0] = b.toString()), (b = Ih));
  for (var f = 0; f < b.length; f++) {
    var h = cc(a, b[f], c || this.handleEvent, e || !1, this.ai || this);
    if (!h) break;
    this.gi[h.key] = h;
  }
  return this;
};
d.fs = function(a, b, c, e) {
  return Jh(this, a, b, c, e);
};
function Jh(a, b, c, e, f, h) {
  if (r(c)) for (var k = 0; k < c.length; k++) Jh(a, b, c[k], e, f, h);
  else {
    b = dc(b, c, e || a.handleEvent, f, h || a.ai || a);
    if (!b) return a;
    a.gi[b.key] = b;
  }
  return a;
}
d.hd = function(a, b, c, e, f) {
  if (r(b)) for (var h = 0; h < b.length; h++) this.hd(a, b[h], c, e, f);
  else
    (c = c || this.handleEvent),
      (e = ia(e) ? !!e.capture : !!e),
      (f = f || this.ai || this),
      (c = ec(c)),
      (e = !!e),
      (b = Tb(a)
        ? a.qj(b, c, e, f)
        : a
        ? (a = gc(a))
          ? a.qj(b, c, e, f)
          : null
        : null),
      b && (lc(b), delete this.gi[b.key]);
  return this;
};
d.removeAll = function() {
  bb(
    this.gi,
    function(a, b) {
      this.gi.hasOwnProperty(b) && lc(a);
    },
    this
  );
  this.gi = {};
};
d.Ua = function() {
  Hh.s.Ua.call(this);
  this.removeAll();
};
d.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Kh() {}
ea(Kh);
Kh.prototype.Zw = 0;
function Lh(a) {
  lg.call(this);
  this.hl = a || Rd();
  this.wi = Mh;
  this.bi = null;
  this.za = !1;
  this.T = null;
  this.If = void 0;
  this.Bf = this.dc = this.ue = this.vo = null;
  this.ri = this.ey = !1;
}
v(Lh, lg);
Lh.prototype.Aw = Kh.me();
var Mh = null;
function Nh(a, b) {
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
d = Lh.prototype;
d.aa = function() {
  return this.bi || (this.bi = ":" + (this.Aw.Zw++).toString(36));
};
d.F = function() {
  return this.T;
};
function Oh(a) {
  a.If || (a.If = new Hh(a));
  return a.If;
}
d.gh = function(a) {
  if (this == a) throw Error("Unable to set parent component");
  if (a && this.ue && this.bi && Ph(this.ue, this.bi) && this.ue != a)
    throw Error("Unable to set parent component");
  this.ue = a;
  Lh.s.xm.call(this, a);
};
d.getParent = function() {
  return this.ue;
};
d.xm = function(a) {
  if (this.ue && this.ue != a) throw Error("Method not supported");
  Lh.s.xm.call(this, a);
};
d.qc = function() {
  return this.hl;
};
d.X = function() {
  this.T = this.hl.createElement("DIV");
};
d.$ = function(a) {
  this.ve(a);
};
d.ve = function(a, b) {
  if (this.za) throw Error("Component already rendered");
  this.T || this.X();
  a ? a.insertBefore(this.T, b || null) : this.hl.Hd.body.appendChild(this.T);
  (this.ue && !this.ue.za) || this.Fb();
};
d.Fb = function() {
  this.za = !0;
  Qh(this, function(a) {
    !a.za && a.F() && a.Fb();
  });
};
d.ud = function() {
  Qh(this, function(a) {
    a.za && a.ud();
  });
  this.If && this.If.removeAll();
  this.za = !1;
};
d.Ua = function() {
  this.za && this.ud();
  this.If && (this.If.A(), delete this.If);
  Qh(this, function(a) {
    a.A();
  });
  !this.ey && this.T && F(this.T);
  this.ue = this.vo = this.T = this.Bf = this.dc = null;
  Lh.s.Ua.call(this);
};
d.Ti = function(a, b) {
  this.Ih(a, Rh(this), b);
};
d.Ih = function(a, b, c) {
  if (a.za && (c || !this.za)) throw Error("Component already rendered");
  if (0 > b || b > Rh(this)) throw Error("Child component index out of bounds");
  (this.Bf && this.dc) || ((this.Bf = {}), (this.dc = []));
  if (a.getParent() == this) {
    var e = a.aa();
    this.Bf[e] = a;
    ya(this.dc, a);
  } else {
    e = this.Bf;
    var f = a.aa();
    if (null !== e && f in e)
      throw Error('The object already contains the key "' + f + '"');
    e[f] = a;
  }
  a.gh(this);
  Ca(this.dc, b, 0, a);
  a.za && this.za && a.getParent() == this
    ? ((c = this.Yc()),
      (b = c.childNodes[b] || null),
      b != a.F() && c.insertBefore(a.F(), b))
    : c
    ? (this.T || this.X(),
      (b = Sh(this, b + 1)),
      a.ve(this.Yc(), b ? b.T : null))
    : this.za &&
      !a.za &&
      a.T &&
      a.T.parentNode &&
      1 == a.T.parentNode.nodeType &&
      a.Fb();
};
d.Yc = function() {
  return this.T;
};
function Th(a) {
  null == a.wi && (a.wi = "rtl" == ch(a.za ? a.T : a.hl.Hd.body, "direction"));
  return a.wi;
}
d.jf = function(a) {
  if (this.za) throw Error("Component already rendered");
  this.wi = a;
};
function Uh(a) {
  return !!a.dc && 0 != a.dc.length;
}
function Rh(a) {
  return a.dc ? a.dc.length : 0;
}
function Ph(a, b) {
  a.Bf && b
    ? ((a = a.Bf), (b = (null !== a && b in a ? a[b] : void 0) || null))
    : (b = null);
  return b;
}
function Sh(a, b) {
  return a.dc ? a.dc[b] || null : null;
}
function Qh(a, b, c) {
  a.dc && sa(a.dc, b, c);
}
function Vh(a, b) {
  return a.dc && b ? ra(a.dc, b) : -1;
}
d.removeChild = function(a, b) {
  if (a) {
    var c = p(a) ? a : a.aa();
    a = Ph(this, c);
    if (c && a) {
      var e = this.Bf;
      c in e && delete e[c];
      ya(this.dc, a);
      b && (a.ud(), a.T && F(a.T));
      a.gh(null);
    }
  }
  if (!a) throw Error("Child is not in parent component");
  return a;
};
d.Us = function(a) {
  for (var b = []; Uh(this); ) b.push(this.removeChild(Sh(this, 0), a));
  return b;
};
var Wh;
eb(
  "A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(
    " "
  )
);
function Xh(a, b) {
  b ? a.setAttribute("role", b) : a.removeAttribute("role");
}
function P(a, b, c) {
  r(c) && (c = c.join(" "));
  var e = "aria-" + b;
  "" === c || void 0 == c
    ? (Wh ||
        (Wh = {
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
      (c = Wh),
      b in c ? a.setAttribute(e, c[b]) : a.removeAttribute(e))
    : a.setAttribute(e, c);
}
function Yh(a, b) {
  a = a.getAttribute("aria-" + b);
  return null == a || void 0 == a ? "" : String(a);
}
function Zh(a, b, c, e, f, h) {
  if (A && !vb("525")) return !0;
  if (mb && f) return $h(a);
  if (f && !e) return !1;
  if (!kb) {
    ba(b) && (b = ai(b));
    var k = 17 == b || 18 == b || (mb && 91 == b);
    if (((!c || mb) && k) || (mb && 16 == b && (e || h))) return !1;
  }
  if ((A || jb) && e && c)
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
  if (z && e && b == a) return !1;
  switch (a) {
    case 13:
      return kb ? (h || f ? !1 : !(c && e)) : !0;
    case 27:
      return !(A || jb || kb);
  }
  return kb && (e || f || h) ? !1 : $h(a);
}
function $h(a) {
  if (
    (48 <= a && 57 >= a) ||
    (96 <= a && 106 >= a) ||
    (65 <= a && 90 >= a) ||
    ((A || jb) && 0 == a)
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
function ai(a) {
  if (kb) a = bi(a);
  else if (mb && A)
    switch (a) {
      case 93:
        a = 91;
    }
  return a;
}
function bi(a) {
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
function ci(a, b) {
  lg.call(this);
  a && di(this, a, b);
}
v(ci, lg);
d = ci.prototype;
d.T = null;
d.Vl = null;
d.lo = null;
d.Wl = null;
d.Kc = -1;
d.Uf = -1;
d.$m = !1;
var ei = {
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
  fi = {
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
  gi = !A || vb("525"),
  hi = mb && kb;
d = ci.prototype;
d.mw = function(a) {
  if (A || jb)
    if (
      (17 == this.Kc && !a.ctrlKey) ||
      (18 == this.Kc && !a.altKey) ||
      (mb && 91 == this.Kc && !a.metaKey)
    )
      this.Uf = this.Kc = -1;
  -1 == this.Kc &&
    (a.ctrlKey && 17 != a.keyCode
      ? (this.Kc = 17)
      : a.altKey && 18 != a.keyCode
      ? (this.Kc = 18)
      : a.metaKey && 91 != a.keyCode && (this.Kc = 91));
  gi && !Zh(a.keyCode, this.Kc, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
    ? this.handleEvent(a)
    : ((this.Uf = ai(a.keyCode)), hi && (this.$m = a.altKey));
};
d.nw = function(a) {
  this.Uf = this.Kc = -1;
  this.$m = a.altKey;
};
d.handleEvent = function(a) {
  var b = a.ge,
    c = b.altKey;
  if (z && "keypress" == a.type) {
    var e = this.Uf;
    var f = 13 != e && 27 != e ? b.keyCode : 0;
  } else
    (A || jb) && "keypress" == a.type
      ? ((e = this.Uf),
        (f = 0 <= b.charCode && 63232 > b.charCode && $h(e) ? b.charCode : 0))
      : ib && !A
      ? ((e = this.Uf), (f = $h(e) ? b.keyCode : 0))
      : ((e = b.keyCode || this.Uf),
        (f = b.charCode || 0),
        hi && "keypress" == a.type && (c = this.$m),
        mb && 63 == f && 224 == e && (e = 191));
  var h = (e = ai(e));
  e
    ? 63232 <= e && e in ei
      ? (h = ei[e])
      : 25 == e && a.shiftKey && (h = 9)
    : b.keyIdentifier && b.keyIdentifier in fi && (h = fi[b.keyIdentifier]);
  (kb &&
    gi &&
    "keypress" == a.type &&
    !Zh(h, this.Kc, a.shiftKey, a.ctrlKey, c, a.metaKey)) ||
    ((a = h == this.Kc),
    (this.Kc = h),
    (b = new ii(h, f, a, b)),
    (b.altKey = c),
    this.dispatchEvent(b));
};
d.F = function() {
  return this.T;
};
function di(a, b, c) {
  a.Wl && a.detach();
  a.T = b;
  a.Vl = cc(a.T, "keypress", a, c);
  a.lo = cc(a.T, "keydown", a.mw, c, a);
  a.Wl = cc(a.T, "keyup", a.nw, c, a);
}
d.detach = function() {
  this.Vl &&
    (lc(this.Vl),
    lc(this.lo),
    lc(this.Wl),
    (this.Wl = this.lo = this.Vl = null));
  this.T = null;
  this.Uf = this.Kc = -1;
};
d.Ua = function() {
  ci.s.Ua.call(this);
  this.detach();
};
function ii(a, b, c, e) {
  Ob.call(this, e);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c;
}
v(ii, Ob);
function ji(a) {
  if (a.classList) return a.classList;
  a = a.className;
  return (p(a) && a.match(/\S+/g)) || [];
}
function ki(a, b) {
  return a.classList ? a.classList.contains(b) : xa(ji(a), b);
}
function li(a, b) {
  a.classList
    ? a.classList.add(b)
    : ki(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
}
function mi(a, b) {
  if (a.classList)
    sa(b, function(b) {
      li(a, b);
    });
  else {
    var c = {};
    sa(ji(a), function(a) {
      c[a] = !0;
    });
    sa(b, function(a) {
      c[a] = !0;
    });
    a.className = "";
    for (var e in c) a.className += 0 < a.className.length ? " " + e : e;
  }
}
function ni(a, b) {
  a.classList
    ? a.classList.remove(b)
    : ki(a, b) &&
      (a.className = ta(ji(a), function(a) {
        return a != b;
      }).join(" "));
}
function oi(a, b) {
  a.classList
    ? sa(b, function(b) {
        ni(a, b);
      })
    : (a.className = ta(ji(a), function(a) {
        return !xa(b, a);
      }).join(" "));
}
function pi(a, b) {
  if (!a) throw Error("Invalid class name " + a);
  if (!u(b)) throw Error("Invalid decorator function " + b);
}
var qi = {};
function ri(a) {
  this.hq = a;
}
ea(ri);
d = ri.prototype;
d.ol = function() {
  return this.hq;
};
function si(a, b) {
  a && (a.tabIndex = b ? 0 : -1);
}
d.X = function(a) {
  return a.qc().X("DIV", this.pj(a).join(" "));
};
d.Yc = function(a) {
  return a;
};
d.Fj = function(a) {
  a = a.F();
  kh(a, !0, kb);
  z && (a.hideFocus = !0);
  var b = this.ol();
  b && Xh(a, b);
};
d.Ob = function(a) {
  return a.F();
};
d.Ka = function() {
  return "goog-container";
};
d.pj = function(a) {
  var b = this.Ka(),
    c = [b, a.Wg == ti ? b + "-horizontal" : b + "-vertical"];
  a.isEnabled() || c.push(b + "-disabled");
  return c;
};
function ui() {}
var vi;
ea(ui);
var wi = {
  button: "pressed",
  checkbox: "checked",
  menuitem: "selected",
  menuitemcheckbox: "checked",
  menuitemradio: "checked",
  radio: "checked",
  tab: "selected",
  treeitem: "selected"
};
d = ui.prototype;
d.ol = function() {};
d.X = function(a) {
  return a.qc().X("DIV", this.pj(a).join(" "), a.Ic());
};
d.Yc = function(a) {
  return a;
};
d.jj = function(a, b, c) {
  if ((a = a.F ? a.F() : a)) {
    var e = [b];
    z && !vb("7") && ((e = xi(ji(a), b)), e.push(b));
    (c ? mi : oi)(a, e);
  }
};
d.Fj = function(a) {
  Th(a) && this.jf(a.F(), !0);
  a.isEnabled() && this.hf(a, a.Y());
};
function yi(a, b, c) {
  if ((a = c || a.ol()))
    (c = b.getAttribute("role") || null), a != c && Xh(b, a);
}
function zi(a, b, c) {
  var e = b.gq;
  null != e && a.hp(c, e);
  b.Y() || P(c, "hidden", !b.Y());
  b.isEnabled() || Ai(c, 1, !b.isEnabled());
  b.zb & 8 && Ai(c, 8, b.Sl());
  b.zb & 16 && Ai(c, 16, !!(b.Ja & 16));
  b.zb & 64 && Ai(c, 64, b.di());
}
d.hp = function(a, b) {
  P(a, "label", b);
};
d.gp = function(a, b) {
  kh(a, !b, !z && !ib);
};
d.jf = function(a, b) {
  this.jj(a, this.Ka() + "-rtl", b);
};
d.af = function(a) {
  var b;
  return a.zb & 32 && (b = a.Ob()) ? ie(b) && je(b) : !1;
};
d.hf = function(a, b) {
  var c;
  if (a.zb & 32 && (c = a.Ob())) {
    if (!b && a.Ja & 32) {
      try {
        c.blur();
      } catch (e) {}
      a.Ja & 32 && a.wj(null);
    }
    (ie(c) && je(c)) != b &&
      ((a = c),
      b
        ? (a.tabIndex = 0)
        : ((a.tabIndex = -1), a.removeAttribute("tabIndex")));
  }
};
d.qa = function(a, b) {
  ih(a, b);
  a && P(a, "hidden", !b);
};
d.Td = function(a, b, c) {
  var e = a.F();
  if (e) {
    var f = this.tl(b);
    f && this.jj(a, f, c);
    Ai(e, b, c);
  }
};
function Ai(a, b, c) {
  vi || (vi = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
  b = vi[b];
  var e = a.getAttribute("role") || null;
  e && ((e = wi[e] || b), (b = "checked" == b || "selected" == b ? e : b));
  b && P(a, b, c);
}
d.Ad = function(a, b) {
  var c = this.Yc(a);
  c &&
    (ce(c),
    b &&
      (p(b)
        ? fe(c, b)
        : ((a = function(a) {
            if (a) {
              var b = Td(c);
              c.appendChild(p(a) ? b.createTextNode(a) : a);
            }
          }),
          r(b) ? sa(b, a) : !ha(b) || "nodeType" in b ? a(b) : sa(Aa(b), a))));
};
d.Ob = function(a) {
  return a.F();
};
d.Ka = function() {
  return "goog-control";
};
d.pj = function(a) {
  var b = this.Ka(),
    c = [b],
    e = this.Ka();
  e != b && c.push(e);
  b = a.getState();
  for (e = []; b; ) {
    var f = b & -b;
    e.push(this.tl(f));
    b &= ~f;
  }
  c.push.apply(c, e);
  (a = a.ie) && c.push.apply(c, a);
  z && !vb("7") && c.push.apply(c, xi(c));
  return c;
};
function xi(a, b) {
  var c = [];
  b && (a = za(a, [b]));
  sa([], function(e) {
    !va(e, pa(xa, a)) || (b && !xa(e, b)) || c.push(e.join("_"));
  });
  return c;
}
d.tl = function(a) {
  if (!this.tq) {
    var b = this.Ka();
    b.replace(/\xa0|\s/g, " ");
    this.tq = {
      1: b + "-disabled",
      2: b + "-hover",
      4: b + "-active",
      8: b + "-selected",
      16: b + "-checked",
      32: b + "-focused",
      64: b + "-open"
    };
  }
  return this.tq[a];
};
function Q(a, b, c) {
  Lh.call(this, c);
  if (!b) {
    b = this.constructor;
    for (var e; b; ) {
      e = ja(b);
      if ((e = qi[e])) break;
      b = b.s ? b.s.constructor : null;
    }
    b = e ? (u(e.me) ? e.me() : new e()) : null;
  }
  this.ma = b;
  this.vm(aa(a) ? a : null);
  this.gq = null;
}
v(Q, Lh);
d = Q.prototype;
d.Uc = null;
d.Ja = 0;
d.zb = 39;
d.dn = 255;
d.mh = 0;
d.Qa = !0;
d.ie = null;
d.xj = !0;
d.Zm = !1;
d.Ax = null;
d.Ob = function() {
  return this.ma.Ob(this);
};
d.zl = function() {
  return this.hc || (this.hc = new ci());
};
d.jj = function(a, b) {
  b
    ? a &&
      (this.ie ? xa(this.ie, a) || this.ie.push(a) : (this.ie = [a]),
      this.ma.jj(this, a, !0))
    : a &&
      this.ie &&
      ya(this.ie, a) &&
      (0 == this.ie.length && (this.ie = null), this.ma.jj(this, a, !1));
};
d.X = function() {
  var a = this.ma.X(this);
  this.T = a;
  yi(this.ma, a, this.Dl());
  this.Zm || this.ma.gp(a, !1);
  this.Y() || this.ma.qa(a, !1);
};
d.Dl = function() {
  return this.Ax;
};
d.hp = function(a) {
  this.gq = a;
  var b = this.F();
  b && this.ma.hp(b, a);
};
d.Yc = function() {
  return this.ma.Yc(this.F());
};
d.Fb = function() {
  Q.s.Fb.call(this);
  zi(this.ma, this, this.T);
  this.ma.Fj(this);
  if (this.zb & -2 && (this.xj && Bi(this, !0), this.zb & 32)) {
    var a = this.Ob();
    if (a) {
      var b = this.zl();
      di(b, a);
      Oh(this)
        .pa(b, "key", this.xd)
        .pa(a, "focus", this.Hl)
        .pa(a, "blur", this.wj);
    }
  }
};
function Bi(a, b) {
  var c = a.ri ? Nb : Mb,
    e = Oh(a),
    f = a.F();
  b
    ? (e
        .pa(f, c.Ni, a.yj)
        .pa(f, c.Bh, a.$e)
        .pa(f, [c.Ch, c.Ah], a.$h)
        .pa(f, c.Mi, a.Zn),
      a.ri && e.pa(f, "gotpointercapture", a.mm),
      a.Zh != da && e.pa(f, "contextmenu", a.Zh),
      z &&
        (vb(9) || e.pa(f, "dblclick", a.Er),
        a.Ej || ((a.Ej = new Ci(a)), Ib(a, pa(Jb, a.Ej)))))
    : (e
        .hd(f, c.Ni, a.yj)
        .hd(f, c.Bh, a.$e)
        .hd(f, [c.Ch, c.Ah], a.$h)
        .hd(f, c.Mi, a.Zn),
      a.ri && e.hd(f, "gotpointercapture", a.mm),
      a.Zh != da && e.hd(f, "contextmenu", a.Zh),
      z && (vb(9) || e.hd(f, "dblclick", a.Er), Jb(a.Ej), (a.Ej = null)));
}
d.ud = function() {
  Q.s.ud.call(this);
  this.hc && this.hc.detach();
  this.Y() && this.isEnabled() && this.ma.hf(this, !1);
};
d.Ua = function() {
  Q.s.Ua.call(this);
  this.hc && (this.hc.A(), delete this.hc);
  delete this.ma;
  this.Ej = this.ie = this.Uc = null;
};
d.Ic = function() {
  return this.Uc;
};
d.Ad = function(a) {
  this.ma.Ad(this.F(), a);
  this.vm(a);
};
d.vm = function(a) {
  this.Uc = a;
};
d.rl = function() {
  var a = this.Ic();
  if (!a) return "";
  a = p(a) ? a : r(a) ? ua(a, me).join("") : ke(a);
  return Ga(a);
};
d.jf = function(a) {
  Q.s.jf.call(this, a);
  var b = this.F();
  b && this.ma.jf(b, a);
};
d.gp = function(a) {
  this.Zm = a;
  var b = this.F();
  b && this.ma.gp(b, a);
};
d.Y = function() {
  return this.Qa;
};
d.qa = function(a, b) {
  return b || (this.Qa != a && this.dispatchEvent(a ? "show" : "hide"))
    ? ((b = this.F()) && this.ma.qa(b, a),
      this.isEnabled() && this.ma.hf(this, a),
      (this.Qa = a),
      !0)
    : !1;
};
d.isEnabled = function() {
  return !(this.Ja & 1);
};
d.hk = function(a) {
  var b = this.getParent();
  (b && "function" == typeof b.isEnabled && !b.isEnabled()) ||
    !Di(this, 1, !a) ||
    (a || (this.setActive(!1), this.Xb(!1)),
    this.Y() && this.ma.hf(this, a),
    this.Td(1, !a, !0));
};
d.Xb = function(a) {
  Di(this, 2, a) && this.Td(2, a);
};
d.setActive = function(a) {
  Di(this, 4, a) && this.Td(4, a);
};
d.Sl = function() {
  return !!(this.Ja & 8);
};
d.op = function(a) {
  Di(this, 8, a) && this.Td(8, a);
};
function Ei(a, b) {
  Di(a, 16, b) && a.Td(16, b);
}
d.di = function() {
  return !!(this.Ja & 64);
};
function Fi(a, b) {
  Di(a, 64, b) && a.Td(64, b);
}
d.getState = function() {
  return this.Ja;
};
d.Td = function(a, b, c) {
  c || 1 != a
    ? this.zb & a &&
      b != !!(this.Ja & a) &&
      (this.ma.Td(this, a, b), (this.Ja = b ? this.Ja | a : this.Ja & ~a))
    : this.hk(!b);
};
d.Ac = function(a, b) {
  if (this.za && this.Ja & a && !b) throw Error("Component already rendered");
  !b && this.Ja & a && this.Td(a, !1);
  this.zb = b ? this.zb | a : this.zb & ~a;
};
function Gi(a, b) {
  return !!(a.dn & b) && !!(a.zb & b);
}
function Di(a, b, c) {
  return (
    !!(a.zb & b) &&
    !!(a.Ja & b) != c &&
    (!(a.mh & b) || a.dispatchEvent(Nh(b, c))) &&
    !a.Oh
  );
}
d.yj = function(a) {
  !Hi(a, this.F()) &&
    this.dispatchEvent("enter") &&
    this.isEnabled() &&
    Gi(this, 2) &&
    this.Xb(!0);
};
d.Zn = function(a) {
  !Hi(a, this.F()) &&
    this.dispatchEvent("leave") &&
    (Gi(this, 4) && this.setActive(!1), Gi(this, 2) && this.Xb(!1));
};
d.mm = function(a) {
  var b = a.target;
  b.releasePointerCapture && b.releasePointerCapture(a.pointerId);
};
d.Zh = da;
function Hi(a, b) {
  return !!a.relatedTarget && ee(b, a.relatedTarget);
}
d.$e = function(a) {
  this.isEnabled() &&
    (Gi(this, 2) && this.Xb(!0),
    !Rb(a) ||
      (A && mb && a.ctrlKey) ||
      (Gi(this, 4) && this.setActive(!0),
      this.ma && this.ma.af(this) && this.Ob().focus()));
  this.Zm || !Rb(a) || (A && mb && a.ctrlKey) || a.preventDefault();
};
d.$h = function(a) {
  this.isEnabled() &&
    (Gi(this, 2) && this.Xb(!0),
    this.Ja & 4 && this.$f(a) && Gi(this, 4) && this.setActive(!1));
};
d.Er = function(a) {
  this.isEnabled() && this.$f(a);
};
d.$f = function(a) {
  Gi(this, 16) && Ei(this, !(this.Ja & 16));
  Gi(this, 8) && this.op(!0);
  Gi(this, 64) && Fi(this, !this.di());
  var b = new Kb("action", this);
  a &&
    ((b.altKey = a.altKey),
    (b.ctrlKey = a.ctrlKey),
    (b.metaKey = a.metaKey),
    (b.shiftKey = a.shiftKey),
    (b.No = a.No));
  return this.dispatchEvent(b);
};
d.Hl = function() {
  Gi(this, 32) && Di(this, 32, !0) && this.Td(32, !0);
};
d.wj = function() {
  Gi(this, 4) && this.setActive(!1);
  Gi(this, 32) && Di(this, 32, !1) && this.Td(32, !1);
};
d.xd = function(a) {
  return this.Y() && this.isEnabled() && this.Jg(a)
    ? (a.preventDefault(), a.stopPropagation(), !0)
    : !1;
};
d.Jg = function(a) {
  return 13 == a.keyCode && this.$f(a);
};
if (!u(Q)) throw Error("Invalid component class " + Q);
if (!u(ui)) throw Error("Invalid renderer class " + ui);
var Ii = ja(Q);
qi[Ii] = ui;
pi("goog-control", function() {
  return new Q(null);
});
function Ci(a) {
  Fb.call(this);
  this.Yk = a;
  this.Tk = !1;
  this.ai = new Hh(this);
  Ib(this, pa(Jb, this.ai));
  a = this.Yk.T;
  this.ai
    .pa(a, "mousedown", this.ow)
    .pa(a, "mouseup", this.pw)
    .pa(a, "click", this.hw);
}
v(Ci, Fb);
var Ji = !z || 9 <= Number(wb);
Ci.prototype.ow = function() {
  this.Tk = !1;
};
Ci.prototype.pw = function() {
  this.Tk = !0;
};
function Ki(a, b) {
  if (!Ji) return (a.button = 0), (a.type = b), a;
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
Ci.prototype.hw = function(a) {
  if (this.Tk) this.Tk = !1;
  else {
    var b = a.ge,
      c = b.button,
      e = b.type,
      f = Ki(b, "mousedown");
    this.Yk.$e(new Ob(f, a.currentTarget));
    f = Ki(b, "mouseup");
    this.Yk.$h(new Ob(f, a.currentTarget));
    Ji || ((b.button = c), (b.type = e));
  }
};
Ci.prototype.Ua = function() {
  this.Yk = null;
  Ci.s.Ua.call(this);
};
function Li(a, b, c) {
  Lh.call(this, c);
  this.ma = b || ri.me();
  this.Wg = a || Mi;
}
v(Li, Lh);
var ti = "horizontal",
  Mi = "vertical";
d = Li.prototype;
d.mo = null;
d.hc = null;
d.ma = null;
d.Wg = null;
d.Qa = !0;
d.Fg = !0;
d.Hg = !0;
d.wa = -1;
d.Jb = null;
d.ki = !1;
d.Ru = !1;
d.zx = !0;
d.Pe = null;
d.Ob = function() {
  return this.mo || this.ma.Ob(this);
};
d.zl = function() {
  return this.hc || (this.hc = new ci(this.Ob()));
};
d.X = function() {
  this.T = this.ma.X(this);
};
d.Yc = function() {
  return this.ma.Yc(this.F());
};
d.Fb = function() {
  Li.s.Fb.call(this);
  Qh(
    this,
    function(a) {
      a.za && Ni(this, a);
    },
    this
  );
  var a = this.F();
  this.ma.Fj(this);
  this.qa(this.Qa, !0);
  var b = this.ri ? Nb : Mb;
  Oh(this)
    .pa(this, "enter", this.Xn)
    .pa(this, "highlight", this.lw)
    .pa(this, "unhighlight", this.uw)
    .pa(this, "open", this.qw)
    .pa(this, "close", this.iw)
    .pa(a, b.Bh, this.$e)
    .pa(Td(a), [b.Ch, b.Ah], this.jw)
    .pa(a, [b.Bh, b.Ch, b.Ah, b.Ni, b.Mi, "contextmenu"], this.gw);
  this.ri && Oh(this).pa(a, "gotpointercapture", this.mm);
  this.af() && Oi(this, !0);
};
d.mm = function(a) {
  var b = a.target;
  b.releasePointerCapture && b.releasePointerCapture(a.pointerId);
};
function Oi(a, b) {
  var c = Oh(a),
    e = a.Ob();
  b
    ? c
        .pa(e, "focus", a.Hl)
        .pa(e, "blur", a.wj)
        .pa(a.zl(), "key", a.xd)
    : c
        .hd(e, "focus", a.Hl)
        .hd(e, "blur", a.wj)
        .hd(a.zl(), "key", a.xd);
}
d.ud = function() {
  this.lc(-1);
  this.Jb && Fi(this.Jb, !1);
  this.ki = !1;
  Li.s.ud.call(this);
};
d.Ua = function() {
  Li.s.Ua.call(this);
  this.hc && (this.hc.A(), (this.hc = null));
  this.ma = this.Jb = this.Pe = this.mo = null;
};
d.Xn = function() {
  return !0;
};
d.lw = function(a) {
  var b = Vh(this, a.target);
  if (-1 < b && b != this.wa) {
    var c = Sh(this, this.wa);
    c && c.Xb(!1);
    this.wa = b;
    c = Sh(this, this.wa);
    this.ki && c.setActive(!0);
    this.zx &&
      this.Jb &&
      c != this.Jb &&
      (c.zb & 64 ? Fi(c, !0) : Fi(this.Jb, !1));
  }
  b = this.F();
  null != a.target.F() && P(b, "activedescendant", a.target.F().id);
};
d.uw = function(a) {
  a.target == Sh(this, this.wa) && (this.wa = -1);
  this.F().removeAttribute("aria-activedescendant");
};
d.qw = function(a) {
  (a = a.target) &&
    a != this.Jb &&
    a.getParent() == this &&
    (this.Jb && Fi(this.Jb, !1), (this.Jb = a));
};
d.iw = function(a) {
  a.target == this.Jb && (this.Jb = null);
  var b = this.F(),
    c = a.target.F();
  b &&
    a.target.Ja & 2 &&
    c &&
    ((a = ""), c && (a = c.id), P(b, "activedescendant", a));
};
d.$e = function(a) {
  this.Fg && (this.ki = !0);
  var b = this.Ob();
  b && ie(b) && je(b) ? b.focus() : a.preventDefault();
};
d.jw = function() {
  this.ki = !1;
};
d.gw = function(a) {
  var b = this.ri ? Nb : Mb,
    c = Pi(this, a.target);
  if (c)
    switch (a.type) {
      case b.Bh:
        c.$e(a);
        break;
      case b.Ch:
      case b.Ah:
        c.$h(a);
        break;
      case b.Ni:
        c.yj(a);
        break;
      case b.Mi:
        c.Zn(a);
        break;
      case "contextmenu":
        c.Zh(a);
    }
};
function Pi(a, b) {
  if (a.Pe)
    for (var c = a.F(); b && b !== c; ) {
      var e = b.id;
      if (e in a.Pe) return a.Pe[e];
      b = b.parentNode;
    }
  return null;
}
d.Hl = function() {};
d.wj = function() {
  this.lc(-1);
  this.ki = !1;
  this.Jb && Fi(this.Jb, !1);
};
d.xd = function(a) {
  return this.isEnabled() &&
    this.Y() &&
    (0 != Rh(this) || this.mo) &&
    this.Jg(a)
    ? (a.preventDefault(), a.stopPropagation(), !0)
    : !1;
};
d.Jg = function(a) {
  var b = Sh(this, this.wa);
  if (
    (b && "function" == typeof b.xd && b.xd(a)) ||
    (this.Jb &&
      this.Jb != b &&
      "function" == typeof this.Jb.xd &&
      this.Jb.xd(a))
  )
    return !0;
  if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
  switch (a.keyCode) {
    case 27:
      if (this.af()) this.Ob().blur();
      else return !1;
      break;
    case 36:
      Qi(this);
      break;
    case 35:
      Ri(this);
      break;
    case 38:
      if (this.Wg == Mi) Si(this);
      else return !1;
      break;
    case 37:
      if (this.Wg == ti) Th(this) ? Ti(this) : Si(this);
      else return !1;
      break;
    case 40:
      if (this.Wg == Mi) Ti(this);
      else return !1;
      break;
    case 39:
      if (this.Wg == ti) Th(this) ? Si(this) : Ti(this);
      else return !1;
      break;
    default:
      return !1;
  }
  return !0;
};
function Ni(a, b) {
  var c = b.F();
  c = c.id || (c.id = b.aa());
  a.Pe || (a.Pe = {});
  a.Pe[c] = b;
}
d.Ti = function(a, b) {
  Li.s.Ti.call(this, a, b);
};
d.Ih = function(a, b, c) {
  a.mh |= 2;
  a.mh |= 64;
  (!this.af() && this.Ru) || a.Ac(32, !1);
  a.za && 0 != a.xj && Bi(a, !1);
  a.xj = !1;
  var e = a.getParent() == this ? Vh(this, a) : -1;
  Li.s.Ih.call(this, a, b, c);
  a.za && this.za && Ni(this, a);
  a = e;
  -1 == a && (a = Rh(this));
  a == this.wa
    ? (this.wa = Math.min(Rh(this) - 1, b))
    : a > this.wa && b <= this.wa
    ? this.wa++
    : a < this.wa && b > this.wa && this.wa--;
};
d.removeChild = function(a, b) {
  if ((a = p(a) ? Ph(this, a) : a)) {
    var c = Vh(this, a);
    -1 != c &&
      (c == this.wa ? (a.Xb(!1), (this.wa = -1)) : c < this.wa && this.wa--);
    var e = a.F();
    e && e.id && this.Pe && ((c = this.Pe), (e = e.id), e in c && delete c[e]);
  }
  b = a = Li.s.removeChild.call(this, a, b);
  b.za && 1 != b.xj && Bi(b, !0);
  b.xj = !0;
  return a;
};
d.setOrientation = function(a) {
  if (this.F()) throw Error("Component already rendered");
  this.Wg = a;
};
d.Y = function() {
  return this.Qa;
};
d.qa = function(a, b) {
  if (b || (this.Qa != a && this.dispatchEvent(a ? "show" : "hide"))) {
    this.Qa = a;
    var c = this.F();
    c &&
      (ih(c, a),
      this.af() && si(this.Ob(), this.Fg && this.Qa),
      b || this.dispatchEvent(this.Qa ? "aftershow" : "afterhide"));
    return !0;
  }
  return !1;
};
d.isEnabled = function() {
  return this.Fg;
};
d.hk = function(a) {
  this.Fg != a &&
    this.dispatchEvent(a ? "enable" : "disable") &&
    (a
      ? ((this.Fg = !0),
        Qh(this, function(a) {
          a.wt ? delete a.wt : a.hk(!0);
        }))
      : (Qh(this, function(a) {
          a.isEnabled() ? a.hk(!1) : (a.wt = !0);
        }),
        (this.ki = this.Fg = !1)),
    this.af() && si(this.Ob(), a && this.Qa));
};
d.af = function() {
  return this.Hg;
};
d.hf = function(a) {
  a != this.Hg && this.za && Oi(this, a);
  this.Hg = a;
  this.Fg && this.Qa && si(this.Ob(), a);
};
d.lc = function(a) {
  (a = Sh(this, a)) ? a.Xb(!0) : -1 < this.wa && Sh(this, this.wa).Xb(!1);
};
d.Xb = function(a) {
  this.lc(Vh(this, a));
};
function Qi(a) {
  Ui(
    a,
    function(a, c) {
      return (a + 1) % c;
    },
    Rh(a) - 1
  );
}
function Ri(a) {
  Ui(
    a,
    function(a, c) {
      a--;
      return 0 > a ? c - 1 : a;
    },
    0
  );
}
function Ti(a) {
  Ui(
    a,
    function(a, c) {
      return (a + 1) % c;
    },
    a.wa
  );
}
function Si(a) {
  Ui(
    a,
    function(a, c) {
      a--;
      return 0 > a ? c - 1 : a;
    },
    a.wa
  );
}
function Ui(a, b, c) {
  c = 0 > c ? Vh(a, a.Jb) : c;
  var e = Rh(a);
  c = b.call(a, c, e);
  for (var f = 0; f <= e; ) {
    var h = Sh(a, c);
    if (h && a.nq(h)) {
      a.lc(c);
      break;
    }
    f++;
    c = b.call(a, c, e);
  }
}
d.nq = function(a) {
  return a.Y() && a.isEnabled() && !!(a.zb & 2);
};
function Vi() {}
v(Vi, ui);
ea(Vi);
Vi.prototype.Ka = function() {
  return "goog-menuheader";
};
function Wi(a, b, c) {
  Q.call(this, a, c || Vi.me(), b);
  this.Ac(1, !1);
  this.Ac(2, !1);
  this.Ac(4, !1);
  this.Ac(32, !1);
  this.Ja = 1;
}
v(Wi, Q);
pi("goog-menuheader", function() {
  return new Wi(null);
});
function Xi() {
  this.uq = [];
}
v(Xi, ui);
ea(Xi);
function Yi(a, b) {
  var c = a.uq[b];
  if (!c) {
    switch (b) {
      case 0:
        c = a.Ka() + "-highlight";
        break;
      case 1:
        c = a.Ka() + "-checkbox";
        break;
      case 2:
        c = a.Ka() + "-content";
    }
    a.uq[b] = c;
  }
  return c;
}
d = Xi.prototype;
d.ol = function() {
  return "menuitem";
};
d.X = function(a) {
  var b = a.qc().X("DIV", this.pj(a).join(" "), Zi(this, a.Ic(), a.qc()));
  $i(this, a, b, !!(a.zb & 8) || !!(a.zb & 16));
  return b;
};
d.Yc = function(a) {
  return a && a.firstChild;
};
d.Ad = function(a, b) {
  var c = this.Yc(a),
    e = aj(this, a) ? c.firstChild : null;
  Xi.s.Ad.call(this, a, b);
  e && !aj(this, a) && c.insertBefore(e, c.firstChild || null);
};
function Zi(a, b, c) {
  a = Yi(a, 2);
  return c.X("DIV", a, b);
}
d.bt = function(a, b, c) {
  a && b && $i(this, a, b, c);
};
d.jp = function(a, b, c) {
  a && b && $i(this, a, b, c);
};
function aj(a, b) {
  return (b = a.Yc(b))
    ? ((b = b.firstChild),
      (a = Yi(a, 1)),
      !!b && ia(b) && 1 == b.nodeType && ki(b, a))
    : !1;
}
function $i(a, b, c, e) {
  yi(a, c, b.Dl());
  zi(a, b, c);
  e != aj(a, c) &&
    (e ? li(c, "goog-option") : ni(c, "goog-option"),
    (c = a.Yc(c)),
    e
      ? ((a = Yi(a, 1)),
        c.insertBefore(b.qc().X("DIV", a), c.firstChild || null))
      : c.removeChild(c.firstChild));
}
d.tl = function(a) {
  switch (a) {
    case 2:
      return Yi(this, 0);
    case 16:
    case 8:
      return "goog-option-selected";
    default:
      return Xi.s.tl.call(this, a);
  }
};
d.Ka = function() {
  return "goog-menuitem";
};
function bj(a, b, c, e) {
  Q.call(this, a, e || Xi.me(), c);
  this.setValue(b);
}
v(bj, Q);
d = bj.prototype;
d.getValue = function() {
  var a = this.vo;
  return null != a ? a : this.rl();
};
d.setValue = function(a) {
  this.vo = a;
};
d.Ac = function(a, b) {
  bj.s.Ac.call(this, a, b);
  switch (a) {
    case 8:
      this.Ja & 16 && !b && Ei(this, !1);
      (a = this.F()) && this.ma.bt(this, a, b);
      break;
    case 16:
      (a = this.F()) && this.ma.jp(this, a, b);
  }
};
d.bt = function(a) {
  this.Ac(8, a);
};
d.jp = function(a) {
  this.Ac(16, a);
};
d.rl = function() {
  var a = this.Ic();
  return r(a)
    ? ((a = ua(a, function(a) {
        return ia(a) &&
          1 == a.nodeType &&
          (ki(a, "goog-menuitem-accel") ||
            ki(a, "goog-menuitem-mnemonic-separator"))
          ? ""
          : me(a);
      }).join("")),
      Ga(a))
    : bj.s.rl.call(this);
};
d.$h = function(a) {
  var b = this.getParent();
  if (b) {
    var c = b.Gs;
    b.Gs = null;
    if (c && ba(a.clientX) && qc(c, new C(a.clientX, a.clientY))) return;
  }
  bj.s.$h.call(this, a);
};
d.Jg = function(a) {
  return a.keyCode == this.ls && this.$f(a) ? !0 : bj.s.Jg.call(this, a);
};
d.ew = function() {
  return this.ls;
};
pi("goog-menuitem", function() {
  return new bj(null);
});
bj.prototype.Dl = function() {
  return this.zb & 16
    ? "menuitemcheckbox"
    : this.zb & 8
    ? "menuitemradio"
    : bj.s.Dl.call(this);
};
bj.prototype.getParent = function() {
  return Q.prototype.getParent.call(this);
};
bj.prototype.Cl = function() {
  return Q.prototype.Cl.call(this);
};
function cj() {}
v(cj, ui);
ea(cj);
cj.prototype.X = function(a) {
  return a.qc().X("DIV", this.Ka());
};
cj.prototype.Ad = function() {};
cj.prototype.Ka = function() {
  return "goog-menuseparator";
};
function dj(a, b) {
  Q.call(this, null, a || cj.me(), b);
  this.Ac(1, !1);
  this.Ac(2, !1);
  this.Ac(4, !1);
  this.Ac(32, !1);
  this.Ja = 1;
}
v(dj, Q);
dj.prototype.Fb = function() {
  dj.s.Fb.call(this);
  var a = this.F();
  Xh(a, "separator");
};
pi("goog-menuseparator", function() {
  return new dj();
});
function ej(a) {
  this.hq = a || "menu";
}
v(ej, ri);
ea(ej);
ej.prototype.Ka = function() {
  return "goog-menu";
};
ej.prototype.Fj = function(a) {
  ej.s.Fj.call(this, a);
  a = a.F();
  P(a, "haspopup", "true");
};
pi("goog-menuseparator", function() {
  return new dj();
});
function fj(a, b) {
  Li.call(this, Mi, b || ej.me(), a);
  this.hf(!1);
}
v(fj, Li);
d = fj.prototype;
d.Mk = !0;
d.Su = !1;
d.Ka = function() {
  return this.ma.Ka();
};
d.removeItem = function(a) {
  (a = this.removeChild(a, !0)) && a.A();
};
d.zr = function(a) {
  return Sh(this, a);
};
d.setPosition = function(a, b) {
  var c = this.Y();
  c || ih(this.F(), !0);
  var e = this.F(),
    f = a;
  a = eh(e);
  f instanceof C && ((b = f.y), (f = f.x));
  var h = e.offsetLeft + (f - a.x);
  h instanceof C
    ? ((f = h.x), (b = h.y))
    : ((f = h), (b = e.offsetTop + (Number(b) - a.y)));
  e.style.left = fh(f);
  e.style.top = fh(b);
  c || ih(this.F(), !1);
};
d.Ar = function() {
  return this.Y() ? eh(this.F()) : null;
};
d.qa = function(a, b, c) {
  (b = fj.s.qa.call(this, a, b)) &&
    a &&
    this.za &&
    this.Mk &&
    this.Ob().focus();
  this.Gs = a && c && ba(c.clientX) ? new C(c.clientX, c.clientY) : null;
  return b;
};
d.Xn = function(a) {
  this.Mk && this.Ob().focus();
  return fj.s.Xn.call(this, a);
};
d.nq = function(a) {
  return (this.Su || a.isEnabled()) && a.Y() && !!(a.zb & 2);
};
d.Jg = function(a) {
  var b = fj.s.Jg.call(this, a);
  b ||
    Qh(
      this,
      function(c) {
        !b &&
          c.ew &&
          c.ls == a.keyCode &&
          (this.isEnabled() && this.Xb(c), (b = c.xd(a)));
      },
      this
    );
  return b;
};
d.lc = function(a) {
  fj.s.lc.call(this, a);
  if ((a = Sh(this, a))) {
    var b = a.F();
    a = this.F() || Zd(document);
    var c = a || Zd(document);
    var e = eh(b),
      f = eh(c);
    if (!z || 9 <= Number(wb)) {
      k = bh(c, "borderLeftWidth");
      var h = bh(c, "borderRightWidth");
      l = bh(c, "borderTopWidth");
      m = bh(c, "borderBottomWidth");
      h = new ng(parseFloat(l), parseFloat(h), parseFloat(m), parseFloat(k));
    } else {
      var k = mh(c, "borderLeft");
      h = mh(c, "borderRight");
      var l = mh(c, "borderTop"),
        m = mh(c, "borderBottom");
      h = new ng(l, h, m, k);
    }
    c == Zd(document)
      ? ((k = e.x - c.scrollLeft),
        (e = e.y - c.scrollTop),
        !z || 10 <= Number(wb) || ((k += h.left), (e += h.top)))
      : ((k = e.x - f.x - h.left), (e = e.y - f.y - h.top));
    b = hh(b);
    f = c.clientHeight - b.height;
    h = c.scrollLeft;
    l = c.scrollTop;
    h += Math.min(k, Math.max(k - (c.clientWidth - b.width), 0));
    l += Math.min(e, Math.max(e - f, 0));
    c = new C(h, l);
    a.scrollLeft = c.x;
    a.scrollTop = c.y;
  }
};
w.ba = {};
w.ba.Zk = null;
w.ba.qr = null;
w.ba.show = function(a, b, c) {
  w.I.show(w.ba, c, null);
  if (b.length) {
    var e = w.ba.lm(b, c);
    cc(e, "action", w.ba.La);
    w.ba.Mc(e, a, c);
    setTimeout(function() {
      e.F().focus();
    }, 1);
    w.ba.Zk = null;
  } else w.ba.La();
};
w.ba.lm = function(a, b) {
  var c = new fj();
  c.jf(b);
  for (var e = 0, f; (f = a[e]); e++) {
    var h = new bj(f.text);
    h.jf(b);
    c.Ti(h, !0);
    h.hk(f.enabled);
    f.enabled &&
      (cc(h, "action", f.eb),
      (h.Zh = function() {
        this.dispatchEvent("action");
      }));
  }
  return c;
};
w.ba.Mc = function(a, b, c) {
  var e = w.i.Wn();
  b = {
    top: b.clientY + e.top,
    bottom: b.clientY + e.top,
    left: b.clientX + e.left,
    right: b.clientX + e.left
  };
  w.ba.dj(a);
  var f = w.i.Ci.Ze(a);
  c && w.i.Ci.eq(e, b, f);
  w.I.Oo(e, b, f, c);
  a.F().focus();
};
w.ba.dj = function(a) {
  a.$(w.I.ka);
  var b = a.F();
  w.i.mb(b, "blocklyContextMenu");
  w.O(b, "contextmenu", null, w.i.$w);
  a.Mk = !0;
  a.hf(!0);
};
w.ba.La = function() {
  w.I.Bj(w.ba);
  w.ba.Zk = null;
  w.ba.qr && w.Na(w.ba.qr);
};
w.ba.Rk = function(a, b) {
  return function() {
    w.j.disable();
    try {
      var c = w.D.Ph(b, a.o),
        e = a.la();
      e.x = a.u ? e.x - w.Rc : e.x + w.Rc;
      e.y += 2 * w.Rc;
      c.moveBy(e.x, e.y);
    } finally {
      w.j.enable();
    }
    w.j.isEnabled() && !c.gb && w.j.V(new w.j.Ek(c));
    c.select();
  };
};
w.ba.Xu = function(a) {
  var b = vc(a, !1).length,
    c = Jc(a);
  c && (b -= vc(c, !1).length);
  return {
    text:
      1 == b ? w.g.DELETE_BLOCK : w.g.DELETE_X_BLOCKS.replace("%1", String(b)),
    enabled: !0,
    eb: function() {
      w.j.S(!0);
      a.A(!0, !0);
      w.j.S(!1);
    }
  };
};
w.ba.Zu = function(a) {
  return {
    enabled: !(u(a.fc) ? !a.fc() : !a.fc),
    text: w.g.HELP,
    eb: function() {
      var b = u(a.fc) ? a.fc() : a.fc;
      b && window.open(b);
    }
  };
};
w.ba.Yu = function(a) {
  var b = !0;
  vc(a, !1).length > dd(a.o) && (b = !1);
  return {
    text: w.g.DUPLICATE_BLOCK,
    enabled: b,
    eb: function() {
      w.mr(a);
    }
  };
};
w.ba.Wu = function(a) {
  var b = { enabled: !z };
  a.Ta
    ? ((b.text = w.g.REMOVE_COMMENT),
      (b.eb = function() {
        a.dh(null);
      }))
    : ((b.text = w.g.ADD_COMMENT),
      (b.eb = function() {
        a.dh("");
      }));
  return b;
};
w.ba.mv = function(a) {
  return {
    text: w.g.VA,
    enabled: !0,
    eb: function() {
      w.j.S(!0);
      a.A(!0, !0);
      w.j.S(!1);
    }
  };
};
w.ba.nv = function(a) {
  return {
    text: w.g.nz,
    enabled: !0,
    eb: function() {
      w.mr(a);
    }
  };
};
w.ba.aC = function(a, b) {
  var c = { enabled: !0 };
  c.text = w.g.ny;
  c.eb = function() {
    var c = new vf(a, w.g.GB, 100, 100);
    if (!a.ho)
      for (var f = a.w; f; ) {
        if (
          -1 !=
          (" " + (f.getAttribute("class") || "") + " ").indexOf(
            " injectionDiv "
          )
        ) {
          a.ho = f;
          break;
        }
        f = f.parentNode;
      }
    f = a.ho.getBoundingClientRect();
    f = new C(b.clientX - f.left, b.clientY - f.top);
    var h = w.i.yl(a.Oa);
    f = sc(f, h).scale(1 / a.scale);
    c.moveBy(f.x, f.y);
    a.R && (c.xc(), c.$(!1), c.select());
  };
  return c;
};
function Kg(a, b, c) {
  this.w = w.i.B("g", {}, null);
  this.w.qf = "";
  this.pk = w.i.B(
    "path",
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.w
  );
  this.Cd = w.i.B("path", { class: "blocklyPath" }, this.w);
  this.lg = w.i.B("path", { class: "blocklyPathLight" }, this.w);
  this.Cd.fd = this;
  this.R = !1;
  this.Ee = w.i.Rf() && !!a.xb;
  w.C.yg(this.Cd);
  Kg.s.constructor.call(this, a, b, c);
  this.w.dataset && (this.w.dataset.id = this.id);
}
v(Kg, cd);
d = Kg.prototype;
d.height = 0;
d.width = 0;
d.Oc = null;
d.xc = function() {
  for (var a = 0, b; (b = this.W[a]); a++) b.N();
  b = nf(this);
  for (a = 0; a < b.length; a++) Ee(b[a]);
  this.sf();
  wf(this);
  this.o.options.readOnly ||
    this.In ||
    w.O(this.ga(), "mousedown", this, this.df);
  this.In = !0;
  this.ga().parentNode || this.o.Oa.appendChild(this.ga());
};
d.select = function() {
  if (this.gb && this.getParent()) this.getParent().select();
  else if (w.selected != this) {
    var a = null;
    if (w.selected) {
      a = w.selected.id;
      w.j.disable();
      try {
        w.selected.rh();
      } finally {
        w.j.enable();
      }
    }
    a = new Dc(null, "selected", a, this.id);
    a.Cc = this.o.id;
    w.j.V(a);
    w.selected = this;
    this.Jh();
  }
};
d.rh = function() {
  if (w.selected == this) {
    var a = new Dc(null, "selected", this.id, null);
    a.Cc = this.o.id;
    w.j.V(a);
    w.selected = null;
    this.ah();
  }
};
d.ad = null;
d.Ta = null;
d.kd = null;
function nf(a) {
  var b = [];
  a.ad && b.push(a.ad);
  a.Ta && b.push(a.Ta);
  a.kd && b.push(a.kd);
  return b;
}
d.gh = function(a) {
  var b = this.Zf;
  if (a != b) {
    wg();
    Kg.s.gh.call(this, a);
    xg();
    var c = this.ga();
    if (!this.o.jo && c) {
      var e = this.la();
      a
        ? (a.ga().appendChild(c),
          (a = this.la()),
          ef(this, a.x - e.x, a.y - e.y))
        : b &&
          w.selected != this &&
          (this.o.Oa.appendChild(c), this.translate(e.x, e.y));
    }
  }
};
d.la = function() {
  var a = 0,
    b = 0,
    c = this.Ee ? this.o.xb.tc() : null,
    e = this.ga();
  if (e) {
    do {
      var f = w.i.uc(e);
      a += f.x;
      b += f.y;
      this.Ee &&
        this.o.xb.fe.firstChild == e &&
        ((f = this.o.xb.El()), (a += f.x), (b += f.y));
      e = e.parentNode;
    } while (e && e != this.o.Oa && e != c);
  }
  return new C(a, b);
};
d.moveBy = function(a, b) {
  var c = w.j.isEnabled();
  if (c) var e = new w.j.Gi(this);
  var f = this.la();
  this.translate(f.x + a, f.y + b);
  ef(this, a, b);
  c && (e.ff(), w.j.V(e));
  yf(this.o);
};
d.translate = function(a, b) {
  this.ga().setAttribute("transform", "translate(" + a + "," + b + ")");
};
d.dm = function() {
  if (this.Ee) {
    var a = this.la();
    w.i.removeAttribute(this.ga(), "transform");
    this.o.xb.pf(a.x, a.y);
    zf(this.o.xb, this.ga());
  }
};
d.ps = function(a) {
  this.Ee && (this.translate(a.x, a.y), this.o.xb.Xi(this.o.Oa));
};
d.cm = function(a) {
  this.Ee
    ? this.o.xb.pf(a.x, a.y)
    : ((this.w.qf = "translate(" + a.x + "," + a.y + ")"),
      this.w.setAttribute("transform", this.w.qf + this.w.jh));
};
function Qg(a) {
  if (a.o && !a.o.pb() && !a.getParent() && !a.sb) {
    var b = a.o.wd;
    if (b && b.Kx) {
      var c = b.xp,
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
d.On = function() {
  var a = this.la(),
    b = this.P ? L : 0,
    c = this.Gb();
  if (this.u) {
    var e = new C(a.x - (c.width - b), a.y);
    a = new C(a.x + b, a.y + c.height);
  } else
    (e = new C(a.x - b, a.y)), (a = new C(a.x + c.width - b, a.y + c.height));
  return { gd: e, Fd: a };
};
d.hg = function(a) {
  if (this.ae != a) {
    for (var b = [], c = 0, e; (e = this.W[c]); c++) b.push.apply(b, e.qa(!a));
    if (a) {
      e = nf(this);
      for (c = 0; c < e.length; c++) e[c].qa(!1);
      c = this.toString(w.Et);
      M(O(this, "_TEMP_COLLAPSED_INPUT"), c).N();
    } else this.yb("_TEMP_COLLAPSED_INPUT"), this.ze(null);
    Kg.s.hg.call(this, a);
    b.length || (b[0] = this);
    if (this.R) for (c = 0; (a = b[c]); c++) a.$();
  }
};
d.Ep = function(a, b) {
  for (var c = [], e = 0, f; (f = this.W[e]); e++) {
    for (var h = 0, k; (k = f.Ia[h]); h++) k instanceof gj && c.push(k);
    f.connection && (f = I(f.connection)) && c.push(f);
  }
  a = c.indexOf(a);
  -1 == a && (a = b ? -1 : c.length);
  (c = c[b ? a + 1 : a - 1])
    ? c instanceof nh
      ? c.Be()
      : c.Ep(null, b)
    : (c = this.getParent()) && c.Ep(this, b);
};
d.df = function(a) {
  var b = this.o && this.o.le(a);
  b && (Rf(b, this), (b.Lc = a));
};
d.xi = function(a) {
  if (!this.o.options.readOnly && this.contextMenu) {
    var b = this,
      c = [];
    if (this.gc() && this.re() && !b.sb) {
      c.push(w.ba.Yu(b));
      He(this) && !this.ae && this.o.options.Zi && c.push(w.ba.Wu(b));
      if (!this.ae)
        for (var e = 1; e < this.W.length; e++)
          if (this.W[e - 1].type != w.Wa && this.W[e].type != w.Wa) {
            e = { enabled: !0 };
            var f = $g(this);
            e.text = f ? w.g.EXTERNAL_INPUTS : w.g.INLINE_INPUTS;
            e.eb = function() {
              b.jg(!f);
            };
            c.push(e);
            break;
          }
      this.o.options.collapse &&
        (this.ae
          ? ((e = { enabled: !0 }),
            (e.text = w.g.EXPAND_BLOCK),
            (e.eb = function() {
              b.hg(!1);
            }),
            c.push(e))
          : ((e = { enabled: !0 }),
            (e.text = w.g.COLLAPSE_BLOCK),
            (e.eb = function() {
              b.hg(!0);
            }),
            c.push(e)));
      this.o.options.disable &&
        ((e = {
          text: this.disabled ? w.g.ENABLE_BLOCK : w.g.DISABLE_BLOCK,
          enabled: !Ch(this),
          eb: function() {
            b.Bd(!b.disabled);
          }
        }),
        c.push(e));
      c.push(w.ba.Xu(b));
    }
    c.push(w.ba.Zu(b));
    this.Se && this.Se(c);
    w.ba.show(a, c, this.u);
    w.ba.Zk = this;
  }
};
function ef(a, b, c) {
  if (a.R) {
    for (var e = a.ke(!1), f = 0; f < e.length; f++) e[f].moveBy(b, c);
    e = nf(a);
    for (f = 0; f < e.length; f++) Fe(e[f]);
    for (f = 0; f < a.Oe.length; f++) ef(a.Oe[f], b, c);
  }
}
d.ig = function(a) {
  if (a) {
    var b = this.ga();
    b.qf = "";
    b.jh = "";
    w.jl = w.jl.concat(this.ke(!0));
    w.i.mb(this.w, "blocklyDragging");
  } else (w.jl = []), w.i.Qb(this.w, "blocklyDragging");
  for (b = 0; b < this.Oe.length; b++) this.Oe[b].ig(a);
};
d.fh = function(a) {
  Kg.s.fh.call(this, a);
  wf(this);
};
d.lp = function(a) {
  Kg.s.lp.call(this, a);
  a = nf(this);
  for (var b = 0; b < a.length; b++) a[b].tf();
};
d.qp = function(a) {
  Kg.s.qp.call(this, a);
  this.sf();
};
d.ga = function() {
  return this.w;
};
d.A = function(a, b) {
  if (this.o) {
    w.C.La();
    wg();
    var c = this.o;
    if (w.selected == this) {
      this.rh();
      var e = this.o;
      e.Db && e.Db.cancel();
    }
    w.ba.Zk == this && w.ba.La();
    b && this.R && (Ce(this, a), w.Ha.Nv(this));
    this.R = !1;
    if (this.Oc) {
      for (var f in this.Oc) clearTimeout(this.Oc[f]);
      this.Oc = null;
    }
    w.j.disable();
    try {
      var h = nf(this);
      for (b = 0; b < h.length; b++) h[b].A();
    } finally {
      w.j.enable();
    }
    Kg.s.A.call(this, a);
    F(this.w);
    yf(c);
    this.pk = this.lg = this.Cd = this.w = null;
    xg();
  }
};
d.sf = function() {
  if (!this.disabled) {
    var a = this.ce,
      b = hj(a);
    if (this.gb)
      (b = ij([255, 255, 255], b, 0.6)),
        (a = jj(b)),
        (this.lg.style.display = "none"),
        this.pk.setAttribute("fill", a);
    else {
      this.lg.style.display = "";
      var c = jj(ij([255, 255, 255], b, 0.3));
      b = jj(ij([0, 0, 0], b, 0.2));
      this.lg.setAttribute("stroke", c);
      this.pk.setAttribute("fill", b);
    }
    this.Cd.setAttribute("fill", a);
    a = nf(this);
    for (c = 0; c < a.length; c++) a[c].sf();
    for (a = 0; (c = this.W[a]); a++) {
      b = 0;
      for (var e; (e = c.Ia[b]); b++) e.nj();
    }
  }
};
function kf(a) {
  a.disabled || Ch(a)
    ? w.i.mb(a.w, "blocklyDisabled") &&
      a.Cd.setAttribute("fill", "url(#" + a.o.options.hj + ")")
    : w.i.Qb(a.w, "blocklyDisabled") && a.sf();
  a = a.Gf(!1);
  for (var b = 0, c; (c = a[b]); b++) kf(c);
}
d.ul = function() {
  return this.Ta
    ? this.Ta.Hb()
        .replace(/\s+$/, "")
        .replace(/ +\n/g, "\n")
    : "";
};
d.dh = function(a) {
  var b = !1;
  p(a)
    ? (this.Ta || ((this.Ta = new Ge(this)), (b = !0)), this.Ta.Sb(a))
    : this.Ta && (this.Ta.A(), (b = !0));
  b && this.R && (this.$(), this.ob());
};
d.ze = function(a, b) {
  this.Oc || (this.Oc = Object.create(null));
  var c = b || "";
  if (c) this.Oc[c] && (clearTimeout(this.Oc[c]), delete this.Oc[c]);
  else for (var e in this.Oc) clearTimeout(this.Oc[e]), delete this.Oc[e];
  if (this.o.pb()) {
    var f = this;
    this.Oc[c] = setTimeout(function() {
      f.o && (delete f.Oc[c], f.ze(a, c));
    }, 100);
  } else {
    this.sb && (a = null);
    b = Bh(this);
    for (e = null; b; ) b.isCollapsed() && (e = b), (b = Bh(b));
    e && e.ze(a, "collapsed " + this.id + " " + c);
    b = !1;
    p(a)
      ? (this.kd || ((this.kd = new Ie(this)), (b = !0)), this.kd.Sb(a, c))
      : this.kd && !c
      ? (this.kd.A(), (b = !0))
      : this.kd &&
        ((b = this.kd.Hb()),
        this.kd.Sb("", c),
        (e = this.kd.Hb()) || this.kd.A(),
        (b = b != e));
    b && this.R && (this.$(), this.ob());
  }
};
d.ik = function(a) {
  this.ad && this.ad !== a && this.ad.A();
  a && ((a.U = this), (this.ad = a), Ee(a));
};
d.Bd = function(a) {
  this.disabled != a && (Kg.s.Bd.call(this, a), this.R && kf(this));
};
d.Xb = function(a) {
  this.R &&
    (a
      ? (this.Cd.setAttribute("filter", "url(#" + this.o.options.pr + ")"),
        (this.lg.style.display = "none"))
      : (w.i.removeAttribute(this.Cd, "filter"), delete this.lg.style.display));
};
d.Jh = function() {
  w.i.mb(this.w, "blocklySelected");
};
d.ah = function() {
  w.i.Qb(this.w, "blocklySelected");
};
d.gk = function(a) {
  a
    ? w.i.mb(this.w, "blocklyDraggingDelete")
    : w.i.Qb(this.w, "blocklyDraggingDelete");
};
d.qb = function(a) {
  Kg.s.qb.call(this, a);
  this.R && this.sf();
};
function tf(a) {
  do {
    var b = a.ga();
    b.parentNode.appendChild(b);
    a = a.getParent();
  } while (a);
}
d.ye = function(a, b) {
  Kg.s.ye.call(this, a, b);
  this.R && (this.$(), this.ob());
};
d.we = function(a, b) {
  Kg.s.we.call(this, a, b);
  this.R && (this.$(), this.ob());
};
d.xe = function(a, b) {
  Kg.s.xe.call(this, a, b);
  this.R && (this.$(), this.ob());
};
d.jg = function(a) {
  Kg.s.jg.call(this, a);
  this.R && (this.$(), this.ob());
};
d.yb = function(a, b) {
  Kg.s.yb.call(this, a, b);
  this.R && (this.$(), this.ob());
};
d.wo = function(a, b) {
  Kg.s.wo.call(this, a, b);
  this.R && (this.$(), this.ob());
};
d.Ke = function(a, b) {
  a = Kg.s.Ke.call(this, a, b);
  this.R && (this.$(), this.ob());
  return a;
};
d.ke = function(a) {
  var b = [];
  if (a || this.R)
    if (
      (this.P && b.push(this.P),
      this.Z && b.push(this.Z),
      this.L && b.push(this.L),
      a || !this.ae)
    ) {
      a = 0;
      for (var c; (c = this.W[a]); a++) c.connection && b.push(c.connection);
    }
  return b;
};
d.Pj = function(a) {
  return new Ze(this, a);
};
d.ob = function() {
  if (this.o && !this.o.pb()) {
    var a = af(this);
    if (!a.sb)
      for (var b = this.ke(!1), c = 0, e; (e = b[c]); c++) {
        e.isConnected() && Pe(e) && I(e).ob();
        for (var f = e.ss(w.Rc), h = 0, k; (k = f[h]); h++)
          (e.isConnected() && k.isConnected()) ||
            (af(k.v) != a && (Pe(e) ? Me(k, e) : Me(e, k)));
      }
  }
};
function uf(a) {
  var b = w.j.tc();
  setTimeout(function() {
    w.j.S(b);
    Qg(a);
    w.j.S(!1);
  }, w.Dk / 2);
  setTimeout(function() {
    w.j.S(b);
    a.ob();
    w.j.S(!1);
  }, w.Dk);
}
var L = 8,
  kj = 7.5 * (1 - Math.SQRT1_2) + 0.5,
  lj = 8.5 * (1 - Math.SQRT1_2) - 0.5,
  ff = "v 5 c 0,10 -" + L + ",-8 -" + L + ",7.5 s " + L + ",-2.5 " + L + ",7.5",
  mj =
    "v 6.5 m -" +
    0.97 * L +
    ",3 q -" +
    0.05 * L +
    ",10 " +
    0.3 * L +
    ",9.5 m " +
    0.67 * L +
    ",-1.9 v 1.4",
  nj = "m " + kj + "," + kj,
  oj = "a 8,8 0 0,0 " + (-lj - 0.5) + "," + (8 - lj),
  pj = "a 8.5,8.5 0 0,0 " + (8 - lj) + "," + (lj + 0.5);
Kg.prototype.Gb = function() {
  var a = this.height,
    b = this.width,
    c = Jc(this);
  c
    ? ((c = c.Gb()), (a += c.height - 4), (b = Math.max(b, c.width)))
    : this.L || this.P || (a += 2);
  return { height: a, width: b };
};
Kg.prototype.$ = function(a) {
  wg();
  this.R = !0;
  var b = 10;
  this.u && (b = -b);
  for (var c = nf(this), e = 0; e < c.length; e++) {
    var f = c[e];
    if (f.zq && f.U.isCollapsed()) f.wc.setAttribute("display", "none");
    else {
      f.wc.setAttribute("display", "block");
      var h = f.Tm;
      f.U.u && (b -= h);
      f.wc.setAttribute("transform", "translate(" + b + ",5)");
      Fe(f);
      b = f.U.u ? b - 10 : b + (h + 10);
    }
  }
  var k = (b += this.u ? 10 : -10),
    l = this.W;
  c = [];
  c.Mb = k + 20;
  if (this.Z || this.L) c.Mb = Math.max(c.Mb, 40);
  f = e = 0;
  for (
    var m = (h = !1),
      n = !1,
      q = void 0,
      t = $g(this) && !this.isCollapsed(),
      y = 0,
      x;
    (x = l[y]);
    y++
  )
    if (x.Y()) {
      if (t && q && q != w.Wa && x.type != w.Wa) var B = c[c.length - 1];
      else
        (q = x.type),
          (B = []),
          (B.type = t && x.type != w.Wa ? -1 : x.type),
          (B.height = 0),
          c.push(B);
      B.push(x);
      x.dg = 25;
      x.Ub = t && x.type == w.kb ? L + 12.5 : 0;
      if (x.connection && x.connection.isConnected()) {
        var Ma = I(x.connection).Gb();
        x.dg = Math.max(x.dg, Ma.height);
        x.Ub = Math.max(x.Ub, Ma.width);
      }
      t || y != l.length - 1
        ? !t && x.type == w.kb && l[y + 1] && l[y + 1].type == w.Wa && x.dg--
        : x.dg--;
      B.height = Math.max(B.height, x.dg);
      x.Jd = 0;
      1 == c.length && (x.Jd += this.u ? -k : k);
      Ma = !1;
      for (var Sc = 0, Xa; (Xa = x.Ia[Sc]); Sc++) {
        0 != Sc && (x.Jd += 10);
        var Ad = Xa.Ze();
        Xa.Ub = Ad.width;
        Xa.om = Ma && Xa.ug ? 10 : 0;
        x.Jd += Xa.Ub + Xa.om;
        B.height = Math.max(B.height, Ad.height);
        Ma = Xa.ug;
      }
      -1 != B.type &&
        (B.type == w.Wa
          ? ((m = !0), (f = Math.max(f, x.Jd)))
          : (B.type == w.kb ? (h = !0) : B.type == w.Ge && (n = !0),
            (e = Math.max(e, x.Jd))));
    }
  for (k = 0; (B = c[k]); k++)
    if (((B.qt = !1), -1 == B.type))
      for (l = 0; (x = B[l]); l++)
        if (x.type == w.kb) {
          B.height += 10;
          B.qt = !0;
          break;
        }
  c.Dm = 20 + f;
  m && (c.Mb = Math.max(c.Mb, c.Dm + 30));
  h
    ? (c.Mb = Math.max(c.Mb, e + 20 + L))
    : n && (c.Mb = Math.max(c.Mb, e + 20));
  c.yw = h;
  c.SB = m;
  c.RB = n;
  f = b;
  this.ht = !1;
  this.height = 0;
  this.P
    ? (this.yp = this.Bm = !0)
    : ((this.yp = this.Bm = !1),
      this.Z && (b = I(this.Z)) && Jc(b) == this && (this.Bm = !0),
      Jc(this) && (this.yp = !0));
  h = [];
  m = [];
  b = [];
  e = [];
  n = c.Mb;
  this.Bm
    ? (h.push("m 0,0"),
      b.push("m 0.5,0.5"),
      this.ht &&
        (h.push("c 30,-15 70,-15 100,0"),
        b.push(
          this.u
            ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7"
            : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"
        )))
    : (h.push("m 0,8"),
      b.push(this.u ? nj : "m 0.5,7.5"),
      h.push("A 8,8 0 0,1 8,0"),
      b.push("A 7.5,7.5 0 0,1 8,0.5"));
  this.Z &&
    (h.push("H", 15),
    b.push("H", 15),
    h.push("l 6,4 3,0 6,-4"),
    b.push("l 6,4 3,0 6,-4"),
    cf(this.Z, this.u ? -30 : 30, 0));
  h.push("H", n);
  b.push("H", n - 0.5);
  this.width = n;
  for (x = n = 0; (B = c[x]); x++) {
    q = 10;
    0 == x && (q += this.u ? -f : f);
    b.push("M", c.Mb - 0.5 + "," + (n + 0.5));
    if (this.isCollapsed())
      (k = B[0]),
        (t = n),
        qj(this, k.Ia, q, t),
        h.push("l 8,0 0,4 8,4 -16,8 8,4"),
        b.push("h 8"),
        (k = B.height - 20),
        h.push("v", k),
        this.u &&
          (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"),
          b.push("v", k - 0.7)),
        (this.width += 15);
    else if (-1 == B.type) {
      for (l = 0; (k = B[l]); l++)
        (t = n),
          B.qt && (t += 5),
          (q = qj(this, k.Ia, q, t)),
          k.type != w.Ge && (q += k.Ub + 10),
          k.type == w.kb &&
            (m.push("M", q - 10 + "," + (n + 5)),
            m.push("h", L - 2 - k.Ub),
            m.push(ff),
            m.push("v", k.dg + 1 - 20),
            m.push("h", k.Ub + 2 - L),
            m.push("z"),
            this.u
              ? (e.push("M", q - 10 - 2.5 + L - k.Ub + "," + (n + 5 + 0.5)),
                e.push(mj),
                e.push("v", k.dg - 20 + 2.5),
                e.push("h", k.Ub - L + 2))
              : (e.push("M", q - 10 + 0.5 + "," + (n + 5 + 0.5)),
                e.push("v", k.dg + 1),
                e.push("h", L - 2 - k.Ub),
                e.push("M", q - k.Ub - 10 + 0.9 + "," + (n + 5 + 20 - 0.7)),
                e.push("l", 0.46 * L + ",-2.1")),
            (t = this.u ? -q - L + 10 + k.Ub + 1 : q + L - 10 - k.Ub - 1),
            (y = n + 5 + 1),
            cf(k.connection, t, y));
      q = Math.max(q, c.Mb);
      this.width = Math.max(this.width, q);
      h.push("H", q);
      b.push("H", q - 0.5);
      h.push("v", B.height);
      this.u && b.push("v", B.height - 1);
    } else
      B.type == w.kb
        ? ((k = B[0]),
          (t = n),
          k.align != w.Fi &&
            ((l = c.Mb - k.Jd - L - 20),
            k.align == w.Nb ? (q += l) : k.align == w.Bk && (q += l / 2)),
          qj(this, k.Ia, q, t),
          h.push(ff),
          (l = B.height - 20),
          h.push("v", l),
          this.u
            ? (b.push(mj), b.push("v", l + 0.5))
            : (b.push("M", c.Mb - 5 + "," + (n + 20 - 0.7)),
              b.push("l", 0.46 * L + ",-2.1")),
          (t = this.u ? -c.Mb - 1 : c.Mb + 1),
          cf(k.connection, t, n),
          k.connection.isConnected() &&
            (this.width = Math.max(
              this.width,
              c.Mb + I(k.connection).Gb().width - L + 1
            )))
        : B.type == w.Ge
        ? ((k = B[0]),
          (t = n),
          k.align != w.Fi &&
            ((l = c.Mb - k.Jd - 20),
            c.yw && (l -= L),
            k.align == w.Nb ? (q += l) : k.align == w.Bk && (q += l / 2)),
          qj(this, k.Ia, q, t),
          h.push("v", B.height),
          this.u && b.push("v", B.height - 1))
        : B.type == w.Wa &&
          ((k = B[0]),
          0 == x && (h.push("v", 10), this.u && b.push("v", 9), (n += 10)),
          (t = n),
          k.align != w.Fi &&
            ((l = c.Dm - k.Jd - 20),
            k.align == w.Nb ? (q += l) : k.align == w.Bk && (q += l / 2)),
          qj(this, k.Ia, q, t),
          (q = c.Dm + 30),
          h.push("H", q),
          h.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"),
          h.push("v", B.height - 16),
          h.push("a 8,8 0 0,0 8,8"),
          h.push("H", c.Mb),
          this.u
            ? (b.push("M", q - 30 + lj + "," + (n + lj)),
              b.push(oj),
              b.push("v", B.height - 16),
              b.push("a 8.5,8.5 0 0,0 8.5,8.5"))
            : (b.push("M", q - 30 + lj + "," + (n + B.height - lj)),
              b.push(pj)),
          b.push("H", c.Mb - 0.5),
          (t = this.u ? -q : q + 1),
          cf(k.connection, t, n + 1),
          k.connection.isConnected() &&
            (this.width = Math.max(
              this.width,
              c.Dm + I(k.connection).Gb().width
            )),
          x == c.length - 1 || c[x + 1].type == w.Wa) &&
          (h.push("v", 10), this.u && b.push("v", 9), (n += 10));
    n += B.height;
  }
  c.length || ((n = 25), h.push("V", n), this.u && b.push("V", n - 1));
  c = n;
  this.height += c + 1;
  this.L &&
    (h.push("H", 30 + (this.u ? 0.5 : -0.5) + " l -6,4 -3,0 -6,-4"),
    cf(this.L, this.u ? -30 : 30, c + 1),
    (this.height += 4));
  this.yp
    ? (h.push("H 0"), this.u || b.push("M", "0.5," + (c - 0.5)))
    : (h.push("H", 8),
      h.push("a", "8,8 0 0,1 -8,-8"),
      this.u ||
        (b.push("M", kj + "," + (c - kj)),
        b.push("A", "7.5,7.5 0 0,1 0.5," + (c - 8))));
  this.P
    ? (cf(this.P, 0, 0),
      h.push("V", 20),
      h.push(
        "c 0,-10 -" + L + ",8 -" + L + ",-7.5 s " + L + ",2.5 " + L + ",-7.5"
      ),
      this.u
        ? (b.push("M", -0.25 * L + ",8.4"), b.push("l", -0.45 * L + ",-2.1"))
        : (b.push("V", 18.5),
          b.push("m", -0.92 * L + ",-0.5 q " + -0.19 * L + ",-5.5 0,-11"),
          b.push("m", 0.92 * L + ",1 V 0.5 H 1")),
      (this.width += L))
    : this.u || (this.Bm ? b.push("V", 0.5) : b.push("V", 8));
  h.push("z");
  c = h.join(" ") + "\n" + m.join(" ");
  this.Cd.setAttribute("d", c);
  this.pk.setAttribute("d", c);
  c = b.join(" ") + "\n" + e.join(" ");
  this.lg.setAttribute("d", c);
  this.u &&
    (this.Cd.setAttribute("transform", "scale(-1 1)"),
    this.lg.setAttribute("transform", "scale(-1 1)"),
    this.pk.setAttribute("transform", "translate(1,1) scale(-1 1)"));
  c = this.la();
  this.Z && bf(this.Z, c);
  this.P && bf(this.P, c);
  for (b = 0; b < this.W.length; b++)
    if ((e = this.W[b].connection)) bf(e, c), e.isConnected() && df(e);
  this.L && (bf(this.L, c), this.L.isConnected() && df(this.L));
  !1 !== a && ((a = this.getParent()) ? a.$(!0) : yf(this.o));
  xg();
};
function qj(a, b, c, e) {
  e += 5;
  a.u && (c = -c);
  for (var f = 0, h; (h = b[f]); f++) {
    var k = h.ga();
    k &&
      (a.u
        ? ((c -= h.om + h.Ub),
          k.setAttribute("transform", "translate(" + c + "," + e + ")"),
          h.Ub && (c -= 10))
        : (k.setAttribute(
            "transform",
            "translate(" + (c + h.om) + "," + e + ")"
          ),
          h.Ub && (c += h.om + h.Ub + 10)));
  }
  return a.u ? -c : c;
}
w.g = {};
function gj(a, b) {
  gj.s.constructor.call(this, a, b);
}
v(gj, nh);
gj.ha = function(a) {
  var b = w.i.kc(a.text);
  b = new gj(b, a["class"]);
  "boolean" === typeof a.spellcheck && (b.Am = a.spellcheck);
  return b;
};
var rj = null;
d = gj.prototype;
d.Gk = "text";
d.Am = !0;
d.A = function() {
  w.I.Bj(this);
  gj.s.A.call(this);
};
d.setValue = function(a) {
  if (null !== a) {
    if (this.v) {
      var b = Ae(this, a);
      null !== b && (a = b);
    }
    nh.prototype.setValue.call(this, a);
  }
};
d.Sb = function(a) {
  null !== a &&
    ((a = String(a)),
    a !== this.na &&
      (this.v &&
        w.j.isEnabled() &&
        w.j.V(new w.j.Dc(this.v, "field", this.name, this.na, a)),
      nh.prototype.Sb.call(this, a)));
};
d.Be = function(a) {
  this.m = this.v.o;
  a = a || !1;
  if (!a && (lb || nb || pb)) sj(this);
  else {
    w.I.show(this, this.v.u, tj(this));
    var b = w.I.ka,
      c = E("INPUT", "blocklyHtmlInput");
    c.setAttribute("spellcheck", this.Am);
    var e = 11 * this.m.scale + "pt";
    b.style.fontSize = e;
    c.style.fontSize = e;
    rj = c;
    b.appendChild(c);
    c.value = c.defaultValue = this.na;
    c.ws = null;
    uj(this);
    this.qm();
    a || (c.focus(), c.select());
    c.kx = w.O(c, "keydown", this, this.jx);
    c.nx = w.O(c, "keyup", this, this.zs);
    c.mx = w.O(c, "keypress", this, this.zs);
    c.Fs = this.qm.bind(this);
    this.m.Sc(c.Fs);
  }
};
function sj(a) {
  w.prompt(w.g.CHANGE_VALUE_TITLE, a.na, function(b) {
    a.v && (b = Ae(a, b));
    a.setValue(b);
  });
}
d.jx = function(a) {
  var b = rj;
  13 == a.keyCode
    ? w.I.La()
    : 27 == a.keyCode
    ? ((b.value = b.defaultValue), w.I.La())
    : 9 == a.keyCode &&
      (w.I.La(), this.v.Ep(this, !a.shiftKey), a.preventDefault());
};
d.zs = function() {
  var a = rj,
    b = a.value;
  b !== a.ws ? ((a.ws = b), this.setValue(b), uj(this)) : A && this.v.$();
  this.qm();
  w.oh(this.v.o);
};
function uj(a) {
  var b = !0,
    c = rj;
  a.v && (b = Ae(a, c.value));
  null === b
    ? w.i.mb(c, "blocklyInvalidInput")
    : w.i.Qb(c, "blocklyInvalidInput");
}
d.qm = function() {
  var a = w.I.ka,
    b = vh(this);
  a.style.width = b.right - b.left + "px";
  a.style.height = b.bottom - b.top + "px";
  b = new C(this.v.u ? b.right - a.offsetWidth : b.left, b.top);
  b.y += 1;
  kb && w.I.ka.style.top && (--b.x, --b.y);
  A && (b.y -= 3);
  a.style.left = b.x + "px";
  a.style.top = b.y + "px";
};
function tj(a) {
  return function() {
    var b = rj,
      c = rj,
      e = c.value;
    a.v &&
      ((e = Ae(a, e)), null === e ? (e = c.defaultValue) : a.Eo && a.Eo(e));
    a.Sb(e);
    a.v.R && a.v.$();
    w.Na(b.kx);
    w.Na(b.nx);
    w.Na(b.mx);
    a.m.cg(b.Fs);
    rj = null;
    w.j.S(!1);
    b = w.I.ka.style;
    b.width = "auto";
    b.height = "auto";
    b.fontSize = "";
  };
}
ph("field_input", gj);
function vj(a, b) {
  this.Dp = w.i.B("tspan", {}, null);
  this.Dp.appendChild(document.createTextNode("\u00b0"));
  a = a && !isNaN(a) ? String(a) : "0";
  vj.s.constructor.call(this, a, b);
}
v(vj, gj);
vj.ha = function(a) {
  return new vj(a.angle);
};
d = vj.prototype;
d.ve = function() {
  this.Qa
    ? ((this.Aa.textContent = th(this)),
      this.v.u
        ? this.Aa.insertBefore(this.Dp, this.Aa.firstChild)
        : this.Aa.appendChild(this.Dp),
      this.zk())
    : (this.ua.width = 0);
};
d.Nh = function() {
  var a = this;
  return function() {
    vj.s.Nh.call(a)();
    a.oj = null;
    a.xq && w.Na(a.xq);
    a.qs && w.Na(a.qs);
    a.rs && w.Na(a.rs);
  };
};
d.Be = function() {
  vj.s.Be.call(this, lb || nb || pb);
  var a = w.I.ka;
  if (a.firstChild) {
    a = w.i.B(
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
    var b = w.i.B(
      "circle",
      { cx: 50, cy: 50, r: 49, class: "blocklyAngleCircle" },
      a
    );
    this.oj = w.i.B("path", { class: "blocklyAngleGauge" }, a);
    this.ds = w.i.B("line", { x1: 50, y1: 50, class: "blocklyAngleLine" }, a);
    for (var c = 0; 360 > c; c += 15)
      w.i.B(
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
    this.xq = w.Fc(a, "click", this, w.I.La);
    this.qs = w.Fc(b, "mousemove", this, this.Es);
    this.rs = w.Fc(this.oj, "mousemove", this, this.Es);
    wj(this);
  }
};
d.Es = function(a) {
  var b = this.oj.ownerSVGElement.getBoundingClientRect(),
    c = a.clientX - b.left - 50;
  a = a.clientY - b.top - 50;
  b = Math.atan(-a / c);
  isNaN(b) ||
    ((b = (180 * b) / Math.PI),
    0 > c ? (b += 180) : 0 < a && (b += 360),
    (b = 15 * Math.round((b - 0) / 15)),
    (b = Ae(this, b)),
    (rj.value = b),
    this.setValue(b),
    uj(this),
    this.qm());
};
d.Sb = function(a) {
  vj.s.Sb.call(this, a);
  this.Aa && (wj(this), (this.ua.width = 0));
};
function wj(a) {
  if (a.oj) {
    var b = ((Number(a.Hb()) + 0) * Math.PI) / 180,
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
    a.oj.setAttribute("d", c.join(""));
    a.ds.setAttribute("x2", e);
    a.ds.setAttribute("y2", f);
  }
}
d.mn = function(a) {
  if (null === a) return null;
  a = parseFloat(a || 0);
  if (isNaN(a)) return null;
  a %= 360;
  0 > a && (a += 360);
  360 < a && (a -= 360);
  return String(a);
};
ph("field_angle", vj);
function xj(a, b) {
  xj.s.constructor.call(this, "", b);
  this.setValue(a);
}
v(xj, nh);
xj.ha = function(a) {
  return new xj(a.checked ? "TRUE" : "FALSE");
};
d = xj.prototype;
d.Gk = "default";
d.N = function() {
  this.Va ||
    (xj.s.N.call(this),
    (this.Sk = w.i.B(
      "text",
      { class: "blocklyText blocklyCheckbox", x: -3, y: 14 },
      this.Va
    )),
    this.Sk.appendChild(document.createTextNode("\u2713")),
    (this.Sk.style.display = this.Ja ? "block" : "none"));
};
d.getValue = function() {
  return String(this.Ja).toUpperCase();
};
d.setValue = function(a) {
  a = "string" == typeof a ? "TRUE" == a.toUpperCase() : !!a;
  this.Ja !== a &&
    (this.v &&
      w.j.isEnabled() &&
      w.j.V(new w.j.Dc(this.v, "field", this.name, this.Ja, a)),
    (this.Ja = a),
    this.Sk && (this.Sk.style.display = a ? "block" : "none"));
};
d.Be = function() {
  var a = !this.Ja;
  this.v && (a = Ae(this, a));
  null !== a && this.setValue(String(a).toUpperCase());
};
ph("field_checkbox", xj);
var yj = {
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
function zj(a) {
  var b = {};
  a = String(a);
  var c = "#" == a.charAt(0) ? a : "#" + a;
  if (Aj.test(c)) return (b.$n = Bj(c)), (b.type = "hex"), b;
  a: {
    var e = a.match(Cj);
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
  if (c.length) return (b.$n = jj(c)), (b.type = "rgb"), b;
  if (yj && (c = yj[a.toLowerCase()])) return (b.$n = c), (b.type = "named"), b;
  throw Error(a + " is not a valid color string");
}
var Dj = /#(.)(.)(.)/;
function Bj(a) {
  if (!Aj.test(a)) throw Error("'" + a + "' is not a valid hex color");
  4 == a.length && (a = a.replace(Dj, "#$1$1$2$2$3$3"));
  return a.toLowerCase();
}
function hj(a) {
  a = Bj(a);
  return [
    parseInt(a.substr(1, 2), 16),
    parseInt(a.substr(3, 2), 16),
    parseInt(a.substr(5, 2), 16)
  ];
}
function jj(a) {
  var b = a[0],
    c = a[1];
  a = a[2];
  b = Number(b);
  c = Number(c);
  a = Number(a);
  if (b != (b & 255) || c != (c & 255) || a != (a & 255))
    throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
  b = Ej(b.toString(16));
  c = Ej(c.toString(16));
  a = Ej(a.toString(16));
  return "#" + b + c + a;
}
var Aj = /^#(?:[0-9a-f]{3}){1,2}$/i,
  Cj = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Ej(a) {
  return 1 == a.length ? "0" + a : a;
}
function ij(a, b, c) {
  c = Math.min(Math.max(c, 0), 1);
  return [
    Math.round(c * a[0] + (1 - c) * b[0]),
    Math.round(c * a[1] + (1 - c) * b[1]),
    Math.round(c * a[2] + (1 - c) * b[2])
  ];
}
var Fj =
  "StopIteration" in g
    ? g.StopIteration
    : { message: "StopIteration", stack: "" };
function Gj() {}
Gj.prototype.next = function() {
  throw Fj;
};
Gj.prototype.bq = function() {
  return this;
};
function Hj(a) {
  if (a instanceof Gj) return a;
  if ("function" == typeof a.bq) return a.bq();
  if (ha(a)) {
    var b = 0,
      c = new Gj();
    c.next = function() {
      for (;;) {
        if (b >= a.length) throw Fj;
        if (b in a) return a[b++];
        b++;
      }
    };
    return c;
  }
  throw Error("Not implemented");
}
function Ij(a) {
  try {
    return Hj(a).next();
  } catch (b) {
    if (b != Fj) throw b;
    return null;
  }
}
function Jj(a, b, c, e, f) {
  this.bd = !!b;
  this.node = null;
  this.lf = 0;
  this.kt = !1;
  this.Fq = !c;
  a && this.setPosition(a, e);
  this.depth = void 0 != f ? f : this.lf || 0;
  this.bd && (this.depth *= -1);
}
v(Jj, Gj);
Jj.prototype.setPosition = function(a, b, c) {
  if ((this.node = a))
    this.lf = ba(b) ? b : 1 != this.node.nodeType ? 0 : this.bd ? -1 : 1;
  ba(c) && (this.depth = c);
};
Jj.prototype.clone = function() {
  return new Jj(this.node, this.bd, !this.Fq, this.lf, this.depth);
};
Jj.prototype.next = function() {
  if (this.kt) {
    if (!this.node || (this.Fq && 0 == this.depth)) throw Fj;
    var a = this.node;
    var b = this.bd ? -1 : 1;
    if (this.lf == b) {
      var c = this.bd ? a.lastChild : a.firstChild;
      c ? this.setPosition(c) : this.setPosition(a, -1 * b);
    } else
      (c = this.bd ? a.previousSibling : a.nextSibling)
        ? this.setPosition(c)
        : this.setPosition(a.parentNode, -1 * b);
    this.depth += this.lf * (this.bd ? -1 : 1);
  } else this.kt = !0;
  a = this.node;
  if (!this.node) throw Fj;
  return a;
};
Jj.prototype.splice = function(a) {
  var b = this.node,
    c = this.bd ? 1 : -1;
  this.lf == c &&
    ((this.lf = -1 * c), (this.depth += this.lf * (this.bd ? -1 : 1)));
  this.bd = !this.bd;
  Jj.prototype.next.call(this);
  this.bd = !this.bd;
  c = ha(arguments[0]) ? arguments[0] : arguments;
  for (var e = c.length - 1; 0 <= e; e--) de(c[e], b);
  F(b);
};
function Kj(a, b, c, e) {
  Jj.call(this, a, b, c, null, e);
}
v(Kj, Jj);
Kj.prototype.next = function() {
  do Kj.s.next.call(this);
  while (-1 == this.lf);
  return this.node;
};
function Lj() {}
v(Lj, ui);
ea(Lj);
var Mj = 0;
Lj.prototype.X = function(a) {
  var b = this.pj(a);
  a = a.qc().X("DIV", b, Nj(this, a.Ic(), a.Ze(), a.qc()));
  Xh(a, "grid");
  return a;
};
function Nj(a, b, c, e) {
  for (var f = [], h = 0, k = 0; h < c.height; h++) {
    for (var l = [], m = 0; m < c.width; m++) {
      var n = b && b[k++];
      l.push(Oj(a, n, e));
    }
    f.push(Pj(a, l, e));
  }
  return a.Hq(f, e);
}
Lj.prototype.Hq = function(a, b) {
  a = b.X("TABLE", this.Ka() + "-table", b.X("TBODY", this.Ka() + "-body", a));
  a.cellSpacing = "0";
  a.cellPadding = "0";
  return a;
};
function Pj(a, b, c) {
  a = c.X("TR", a.Ka() + "-row", b);
  Xh(a, "row");
  return a;
}
function Oj(a, b, c) {
  a = c.X("TD", { class: a.Ka() + "-cell", id: a.Ka() + "-cell-" + Mj++ }, b);
  Xh(a, "gridcell");
  P(a, "selected", !1);
  if (!ke(a) && !Yh(a, "label")) {
    var e;
    b = new Kj(a);
    for (c = ""; !c && (e = Ij(b)); )
      1 == e.nodeType && (c = Yh(e, "label") || e.title);
    (e = c) && P(a, "label", e);
  }
  return a;
}
Lj.prototype.Ad = function(a, b) {
  if (a) {
    var c = Ud(this.Ka() + "-body", a)[0];
    if (c) {
      var e = 0;
      sa(c.rows, function(a) {
        sa(a.cells, function(a) {
          ce(a);
          if (b) {
            var c = b[e++];
            c && a.appendChild(c);
          }
        });
      });
      if (e < b.length) {
        for (
          var f = [], h = Rd(a), k = c.rows[0].cells.length;
          e < b.length;

        ) {
          var l = b[e++];
          f.push(Oj(this, l, h));
          f.length == k &&
            ((l = Pj(this, f, h)), c.appendChild(l), (f.length = 0));
        }
        if (0 < f.length) {
          for (; f.length < k; ) f.push(Oj(this, "", h));
          l = Pj(this, f, h);
          c.appendChild(l);
        }
      }
    }
    kh(a, !0, kb);
  }
};
function Qj(a, b, c) {
  for (b = b.F(); c && 1 == c.nodeType && c != b; ) {
    if ("TD" == c.tagName && ki(c, a.Ka() + "-cell")) return c.firstChild;
    c = c.parentNode;
  }
  return null;
}
Lj.prototype.Ka = function() {
  return "goog-palette";
};
function Rj(a) {
  lg.call(this);
  this.ei = [];
  Sj(this, a);
}
v(Rj, lg);
d = Rj.prototype;
d.tb = null;
d.fp = null;
d.zr = function(a) {
  return this.ei[a] || null;
};
function Sj(a, b) {
  b &&
    (sa(
      b,
      function(a) {
        this.ek(a, !1);
      },
      a
    ),
    Ba(a.ei, b));
}
d.removeItem = function(a) {
  a &&
    ya(this.ei, a) &&
    a == this.tb &&
    ((this.tb = null), this.dispatchEvent("select"));
};
d.ne = function() {
  return this.tb;
};
d.cd = function(a) {
  a != this.tb && (this.ek(this.tb, !1), (this.tb = a), this.ek(a, !0));
  this.dispatchEvent("select");
};
d.sj = function() {
  var a = this.tb;
  return a ? ra(this.ei, a) : -1;
};
d.jk = function(a) {
  this.cd(this.zr(a));
};
d.clear = function() {
  var a = this.ei;
  if (!r(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
  a.length = 0;
  this.tb = null;
};
d.Ua = function() {
  Rj.s.Ua.call(this);
  delete this.ei;
  this.tb = null;
};
d.ek = function(a, b) {
  a &&
    ("function" == typeof this.fp
      ? this.fp(a, b)
      : "function" == typeof a.op && a.op(b));
};
function Tj(a, b, c) {
  Q.call(this, a, b || Lj.me(), c);
  this.dn &= -89;
  this.fj = new Uj();
  this.fj.xm(this);
  this.oo = -1;
}
v(Tj, Q);
d = Tj.prototype;
d.ua = null;
d.wa = -1;
d.Wb = null;
d.Ua = function() {
  Tj.s.Ua.call(this);
  this.Wb && (this.Wb.A(), (this.Wb = null));
  this.ua = null;
  this.fj.A();
};
d.vm = function(a) {
  Tj.s.vm.call(this, a);
  Vj(this);
  this.Wb
    ? (this.Wb.clear(), Sj(this.Wb, a))
    : ((this.Wb = new Rj(a)),
      (a = oa(this.ek, this)),
      (this.Wb.fp = a),
      Oh(this).pa(this.Wb, "select", this.rw));
  this.wa = -1;
};
d.rl = function() {
  return "";
};
d.yj = function(a) {
  Tj.s.yj.call(this, a);
  var b = Qj(this.ma, this, a.target);
  (b && a.relatedTarget && ee(b, a.relatedTarget)) ||
    (b != Wj(this) && Xj(this, b));
};
d.$e = function(a) {
  Tj.s.$e.call(this, a);
  this.Ja & 4 &&
    ((a = Qj(this.ma, this, a.target)), a != Wj(this) && Xj(this, a));
};
d.$f = function(a) {
  var b = Wj(this);
  return b
    ? (a &&
        (this.ne() ? "mouseup" != a.type || Qj(this.ma, this, a.target) : 1) &&
        this.cd(b),
      Tj.s.$f.call(this, a))
    : !1;
};
d.xd = function(a) {
  var b = this.Ic();
  b = b ? b.length : 0;
  var c = this.ua.width;
  if (0 == b || !this.isEnabled()) return !1;
  if (13 == a.keyCode || 32 == a.keyCode) return this.$f(a);
  if (36 == a.keyCode) return this.lc(0), !0;
  if (35 == a.keyCode) return this.lc(b - 1), !0;
  var e = 0 > this.wa ? this.sj() : this.wa;
  switch (a.keyCode) {
    case 37:
      if (-1 == e || 0 == e) e = b;
      this.lc(e - 1);
      a.preventDefault();
      return !0;
    case 39:
      return e == b - 1 && (e = -1), this.lc(e + 1), a.preventDefault(), !0;
    case 38:
      -1 == e && (e = b + c - 1);
      if (e >= c) return this.lc(e - c), a.preventDefault(), !0;
      break;
    case 40:
      if ((-1 == e && (e = -c), e < b - c))
        return this.lc(e + c), a.preventDefault(), !0;
  }
  return !1;
};
d.rw = function() {};
d.Ze = function() {
  return this.ua;
};
d.ym = function(a) {
  if (this.F()) throw Error("Component already rendered");
  this.ua = ba(a) ? new Qd(a, void 0) : a;
  Vj(this);
};
function Wj(a) {
  var b = a.Ic();
  return b && b[a.wa];
}
d.lc = function(a) {
  a != this.wa &&
    (Yj(this, this.wa, !1),
    (this.oo = this.wa),
    (this.wa = a),
    Yj(this, a, !0),
    this.dispatchEvent("a"));
};
function Xj(a, b) {
  var c = a.Ic();
  a.lc(c && b ? ra(c, b) : -1);
}
d.sj = function() {
  return this.Wb ? this.Wb.sj() : -1;
};
d.ne = function() {
  return this.Wb ? this.Wb.ne() : null;
};
d.jk = function(a) {
  this.Wb && this.Wb.jk(a);
};
d.cd = function(a) {
  this.Wb && this.Wb.cd(a);
};
function Yj(a, b, c) {
  if (a.F()) {
    var e = a.Ic();
    if (e && 0 <= b && b < e.length) {
      var f = (f = Wj(a)) ? f.parentNode : null;
      a.fj.F() != f && (a.fj.T = f);
      f = a.fj;
      f.Xb(c);
      !!(f.Ja & 2) == c &&
        ((f = a.ma), (b = e[b])) &&
        ((b = b ? b.parentNode : null),
        (e = f.Ka() + "-cell-hover"),
        c ? li(b, e) : ni(b, e),
        c
          ? P(a.T, "activedescendant", b.id)
          : b.id == Yh(a.T, "activedescendant") &&
            a.T.removeAttribute("aria-activedescendant"));
    }
  }
}
d.Xb = function(a) {
  a && -1 == this.wa ? this.lc(-1 < this.oo ? this.oo : 0) : a || this.lc(-1);
  Tj.s.Xb.call(this, a);
};
d.ek = function(a, b) {
  if (this.F() && a) {
    a = a.parentNode;
    var c = this.ma.Ka() + "-cell-selected";
    b ? li(a, c) : ni(a, c);
    P(a, "selected", b);
  }
};
function Vj(a) {
  var b = a.Ic();
  if (b)
    if (a.ua && a.ua.width) {
      if (
        ((b = Math.ceil(b.length / a.ua.width)),
        !ba(a.ua.height) || a.ua.height < b)
      )
        a.ua.height = b;
    } else (b = Math.ceil(Math.sqrt(b.length))), (a.ua = new Qd(b, b));
  else a.ua = new Qd(0, 0);
}
function Uj() {
  Q.call(this, null);
  this.mh |= 2;
}
v(Uj, Q);
function Zj(a, b, c) {
  this.Vk = a || [];
  Tj.call(this, null, b || Lj.me(), c);
  this.um(this.Vk);
}
v(Zj, Tj);
d = Zj.prototype;
d.fm = null;
d.Xl = null;
d.um = function(a) {
  this.Vk = a;
  this.fm = this.Xl = null;
  this.Ad(ak(this));
};
d.Sn = function() {
  var a = this.ne();
  if (a) {
    var b = a.style[Va()];
    if ("undefined" !== typeof b) a = b;
    else {
      b = a.style;
      var c = ah["background-color"];
      if (!c) {
        var e = Va();
        c = e;
        void 0 === a.style[e] &&
          ((e =
            (A ? "Webkit" : kb ? "Moz" : z ? "ms" : ib ? "O" : null) + Wa(e)),
          void 0 !== a.style[e] && (c = e));
        ah["background-color"] = c;
      }
      a = b[c] || "";
    }
    return bk(a);
  }
  return null;
};
d.pp = function(a) {
  a = bk(a);
  this.fm ||
    (this.fm = ua(this.Vk, function(a) {
      return bk(a);
    }));
  this.jk(a ? ra(this.fm, a) : -1);
};
function ak(a) {
  return ua(
    a.Vk,
    function(a, c) {
      var b = this.qc().X("DIV", {
        class: this.ma.Ka() + "-colorswatch",
        style: "background-color:" + a
      });
      b.title =
        this.Xl && this.Xl[c]
          ? this.Xl[c]
          : "#" == a.charAt(0)
          ? "RGB (" + hj(a).join(", ") + ")"
          : a;
      return b;
    },
    a
  );
}
function bk(a) {
  if (a)
    try {
      return zj(a).$n;
    } catch (b) {}
  return null;
}
function ck(a, b) {
  Lh.call(this, a);
  this.Sa = b || null;
  Oh(this).pa(this, "action", this.ex);
}
v(ck, Lh);
d = ck.prototype;
d.Hg = !0;
d.um = function(a) {
  this.Sa ? this.Sa.um(a) : dk(this, a);
};
d.ym = function(a) {
  this.Sa || dk(this, []);
  this.Sa.ym(a);
};
d.Ze = function() {
  return this.Sa ? this.Sa.Ze() : null;
};
d.sj = function() {
  return this.Sa ? this.Sa.sj() : -1;
};
d.jk = function(a) {
  this.Sa && this.Sa.jk(a);
};
d.Sn = function() {
  return this.Sa ? this.Sa.Sn() : null;
};
d.pp = function(a) {
  this.Sa && this.Sa.pp(a);
};
d.af = function() {
  return this.Hg;
};
d.hf = function(a) {
  this.Hg = a;
  this.Sa && this.Sa.Ac(32, a);
};
d.Fb = function() {
  ck.s.Fb.call(this);
  this.Sa && this.Sa.$(this.F());
  this.F().unselectable = "on";
};
d.Ua = function() {
  ck.s.Ua.call(this);
  this.Sa && (this.Sa.A(), (this.Sa = null));
};
d.focus = function() {
  this.Sa && this.Sa.F().focus();
};
d.ex = function(a) {
  a.stopPropagation();
  this.dispatchEvent("change");
};
function dk(a, b) {
  b = new Zj(b, null, a.qc());
  b.ym(5);
  b.Ac(32, a.Hg);
  a.Ti(b);
  a.Sa = b;
  a.za && a.Sa.$(a.F());
}
function ek(a, b) {
  ek.s.constructor.call(this, a, b);
  this.Sb("\u00a0\u00a0\u00a0");
}
var fk;
v(ek, nh);
ek.ha = function(a) {
  return new ek(a.colour);
};
d = ek.prototype;
d.kv = null;
d.Bq = 0;
d.N = function() {
  ek.s.N.call(this);
  this.qd.style.fillOpacity = 1;
  this.setValue(this.getValue());
};
d.Gk = "default";
d.A = function() {
  w.I.Bj(this);
  ek.s.A.call(this);
};
d.getValue = function() {
  return this.ce;
};
d.setValue = function(a) {
  this.v &&
    w.j.isEnabled() &&
    this.ce != a &&
    w.j.V(new w.j.Dc(this.v, "field", this.name, this.ce, a));
  this.ce = a;
  this.qd && (this.qd.style.fill = a);
};
d.Hb = function() {
  var a = this.ce,
    b = a.match(/^#(.)\1(.)\2(.)\3$/);
  b && (a = "#" + b[1] + b[2] + b[3]);
  return a;
};
var gk = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(
    " "
  ),
  hk = 7;
ek.prototype.setColumns = function(a) {
  this.Bq = a;
  return this;
};
ek.prototype.Be = function() {
  w.I.show(this, this.v.u, ik);
  var a = w.i.Wn(),
    b = vh(this),
    c = this.dj(),
    e = gh(c.F());
  w.I.Oo(a, b, e, this.v.u);
  var f = this;
  fk = cc(c, "change", function(a) {
    a = a.target.Sn() || "#000000";
    w.I.La();
    f.v && (a = Ae(f, a));
    null !== a && f.setValue(a);
  });
};
ek.prototype.dj = function() {
  var a = new ck();
  a.ym(this.Bq || hk);
  a.um(this.kv || gk);
  a.$(w.I.ka);
  a.pp(this.getValue());
  return a;
};
function ik() {
  fk && lc(fk);
  w.j.S(!1);
}
ph("field_colour", ek);
function Dh(a, b) {
  u(a) || jk(a);
  this.Rg = a;
  this.Cp = this.Qo = null;
  a = this.Rg;
  if (r(a)) {
    for (var c = !1, e = 0; e < a.length; e++) {
      var f = a[e][0];
      "string" == typeof f
        ? (a[e][0] = w.i.kc(f))
        : (null != f.alt && (a[e][0].alt = w.i.kc(f.alt)), (c = !0));
    }
    if (!(c || 2 > a.length)) {
      f = [];
      for (e = 0; e < a.length; e++) f.push(a[e][0]);
      var h = w.i.sp(f);
      e = w.i.ov(f, h);
      c = w.i.pv(f, h);
      if ((e || c) && !(h <= e + c)) {
        e && (this.Qo = f[0].substring(0, e - 1));
        c && (this.Cp = f[0].substr(1 - c));
        f = [];
        for (h = 0; h < a.length; h++) {
          var k = a[h][0],
            l = a[h][1];
          k = k.substring(e, k.length - c);
          f[h] = [k, l];
        }
        this.Rg = f;
      }
    }
  }
  a = this.getOptions()[0];
  Dh.s.constructor.call(this, a[1], b);
}
v(Dh, nh);
Dh.ha = function(a) {
  return new Dh(a.options);
};
var kk = nb ? "\u25bc" : "\u25be";
d = Dh.prototype;
d.Gk = "default";
d.jb = "";
d.Md = null;
d.qe = null;
d.N = function() {
  this.Va ||
    ((this.zf = w.i.B("tspan", {}, null)),
    this.zf.appendChild(
      document.createTextNode(this.v.u ? kk + " " : " " + kk)
    ),
    Dh.s.N.call(this));
};
d.Be = function() {
  w.I.show(this, this.v.u, null);
  var a = new fj();
  a.jf(this.v.u);
  for (var b = this.getOptions(), c = 0; c < b.length; c++) {
    var e = b[c][0],
      f = b[c][1];
    if ("object" == typeof e) {
      var h = new Image(e.width, e.height);
      h.src = e.src;
      h.alt = e.alt || "";
      e = h;
    }
    e = new bj(e);
    e.jf(this.v.u);
    e.setValue(f);
    e.jp(!0);
    a.Ti(e, !0);
    Ei(e, f == this.jb);
  }
  lk(this, a);
  mk(a);
  nk(a);
  b = w.i.Wn();
  c = vh(this);
  this.v.u ? (c.right += 25) : (c.left -= 25);
  this.dj(a);
  f = w.i.Ci.Ze(a);
  300 < f.height && (f.height = 300);
  this.v.u && w.i.Ci.eq(b, c, f);
  w.I.Oo(b, c, f, this.v.u);
  a.F().focus();
};
function lk(a, b) {
  cc(b, "action", function(b) {
    (b = b.target) && a.As(b);
    w.I.Bj(a);
    w.j.S(!1);
  });
}
function mk(a) {
  Oh(a).pa(a.F(), "touchstart", function(a) {
    Pi(this, a.target).$e(a);
  });
}
function nk(a) {
  Oh(a).pa(a.F(), "touchend", function(a) {
    Pi(this, a.target).$f(a);
  });
}
d.dj = function(a) {
  a.$(w.I.ka);
  w.i.mb(a.F(), "blocklyDropdownMenu");
  a.Mk = !0;
  a.hf(!0);
};
d.As = function(a) {
  a = a.getValue();
  this.v && (a = Ae(this, a));
  null !== a && this.setValue(a);
};
d.getOptions = function() {
  if (u(this.Rg)) {
    var a = this.Rg.call(this);
    jk(a);
    return a;
  }
  return this.Rg;
};
d.getValue = function() {
  return this.jb;
};
d.setValue = function(a) {
  if (null !== a && a !== this.jb) {
    this.v &&
      w.j.isEnabled() &&
      w.j.V(new w.j.Dc(this.v, "field", this.name, this.jb, a));
    this.jb = a;
    for (var b = this.getOptions(), c = 0; c < b.length; c++)
      if (b[c][1] == a) {
        a = b[c][0];
        "object" == typeof a
          ? ((this.qe = a), (this.na = a.alt))
          : ((this.qe = null), (this.na = a));
        this.nj();
        return;
      }
    this.na = a;
    this.nj();
  }
};
d.ve = function() {
  if (this.Qa) {
    this.v && this.zf && (this.zf.style.fill = this.v.ce);
    ce(this.Aa);
    F(this.Md);
    this.Md = null;
    if (this.qe) {
      this.Md = w.i.B(
        "image",
        { y: 5, height: this.qe.height + "px", width: this.qe.width + "px" },
        this.Va
      );
      this.Md.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        this.qe.src
      );
      this.Aa.appendChild(this.zf);
      var a = uh(this.zf);
      this.ua.height = Number(this.qe.height) + 19;
      this.ua.width = Number(this.qe.width) + a;
      this.v.u
        ? (this.Md.setAttribute("x", a), this.Aa.setAttribute("x", -1))
        : (this.Aa.setAttribute("text-anchor", "end"),
          this.Aa.setAttribute("x", this.ua.width + 1));
    } else
      (a = document.createTextNode(th(this))),
        this.Aa.appendChild(a),
        this.v.u
          ? this.Aa.insertBefore(this.zf, this.Aa.firstChild)
          : this.Aa.appendChild(this.zf),
        this.Aa.setAttribute("text-anchor", "start"),
        this.Aa.setAttribute("x", 0),
        (this.ua.height = 25),
        (this.ua.width = uh(this.Aa));
    this.qd.setAttribute("height", this.ua.height - 9);
    this.qd.setAttribute("width", this.ua.width + 10);
  } else this.ua.width = 0;
};
d.zk = function() {
  if (this.qe && (z || jb)) {
    var a = uh(this.zf);
    a = Number(this.qe.width) + a + 10;
    this.qd && this.qd.setAttribute("width", a);
    this.ua.width = a;
  } else nh.prototype.zk.call(this);
};
d.A = function() {
  w.I.Bj(this);
  Dh.s.A.call(this);
};
function jk(a) {
  if (!r(a)) throw "FieldDropdown options must be an array.";
  for (var b = !1, c = 0; c < a.length; ++c) {
    var e = a[c];
    r(a)
      ? p(e[1])
        ? p(e[0]) ||
          p(e[0].src) ||
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
ph("field_dropdown", Dh);
function ok(a, b, c, e, f) {
  this.v = null;
  this.Fa = Number(c);
  this.ia = Number(b);
  this.ua = new Qd(this.ia, this.Fa + 10);
  this.na = e || "";
  this.setValue(a);
  "function" == typeof f && (this.nn = f);
}
v(ok, nh);
ok.ha = function(a) {
  var b = w.i.kc(a.src),
    c = Number(w.i.kc(a.width)),
    e = Number(w.i.kc(a.height));
  a = w.i.kc(a.alt);
  return new ok(b, c, e, a);
};
d = ok.prototype;
d.ug = !1;
d.N = function() {
  this.Va ||
    ((this.Va = w.i.B("g", {}, null)),
    this.Qa || (this.Va.style.display = "none"),
    (this.Md = w.i.B(
      "image",
      { height: this.Fa + "px", width: this.ia + "px" },
      this.Va
    )),
    this.setValue(this.et),
    this.v.ga().appendChild(this.Va),
    this.Ma(this.v),
    w.C.yg(this.Md),
    this.nn && (this.bm = w.O(this.Va, "mousedown", this, this.df)));
};
d.A = function() {
  F(this.Va);
  this.Md = this.Va = null;
};
d.Ma = function(a) {
  this.Md.fd = a;
};
d.getValue = function() {
  return this.et;
};
d.setValue = function(a) {
  null !== a &&
    ((this.et = a),
    this.Md &&
      this.Md.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        a || ""
      ));
};
d.Sb = function(a) {
  null !== a && (this.na = a);
};
d.ve = function() {};
d.nj = function() {};
d.zk = function() {};
d.Be = function() {
  this.nn && this.nn(this);
};
ph("field_image", ok);
function pk(a, b, c, e, f) {
  a = a && !isNaN(a) ? String(a) : "0";
  pk.s.constructor.call(this, a, f);
  a = parseFloat(e);
  this.Po = isNaN(a) ? 0 : a;
  b = parseFloat(b);
  this.Vw = isNaN(b) ? -Infinity : b;
  c = parseFloat(c);
  this.Uw = isNaN(c) ? Infinity : c;
  this.setValue(Ae(this, this.getValue()));
}
v(pk, gj);
pk.ha = function(a) {
  return new pk(a.value, a.min, a.max, a.precision);
};
pk.prototype.mn = function(a) {
  if (null === a) return null;
  a = String(a);
  a = a.replace(/O/gi, "0");
  a = a.replace(/,/g, "");
  a = parseFloat(a || 0);
  if (isNaN(a)) return null;
  this.Po && isFinite(a) && (a = Math.round(a / this.Po) * this.Po);
  a = Math.min(Math.max(a, this.Vw), this.Uw);
  return String(a);
};
ph("field_number", pk);
function qk(a, b, c, e) {
  this.Rg = rk;
  this.ua = new Qd(0, 25);
  this.sh = b;
  this.Ev = a || "";
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
  this.Dv = a;
  this.$x = c;
  this.jb = null;
}
v(qk, Dh);
qk.ha = function(a) {
  var b = w.i.kc(a.variable);
  return new qk(b, null, a.variableTypes, a.defaultType);
};
d = qk.prototype;
d.N = function() {
  this.Va || (qk.s.N.call(this), this.Ng());
};
d.Ng = function() {
  if (!this.Vd) {
    this.m = this.v.o;
    var a = w.G.Bl(this.m, null, this.Ev, this.Dv);
    w.j.disable();
    try {
      this.setValue(a.aa());
    } finally {
      w.j.enable();
    }
  }
};
d.A = function() {
  qk.s.A.call(this);
  this.sa = this.m = null;
};
d.rp = function(a) {
  qk.s.rp.call(this, a);
};
d.getValue = function() {
  return this.Vd ? this.Vd.aa() : null;
};
d.Hb = function() {
  return this.Vd ? this.Vd.name : "";
};
d.Jc = function() {
  return this.Vd;
};
d.setValue = function(a) {
  var b = w.G.Jc(this.v.o, a);
  if (!b)
    throw Error("Variable id doesn't point to a real variable!  ID was " + a);
  var c = b.type,
    e;
  a: if ((e = sk(this))) {
    for (var f = 0; f < e.length; f++)
      if (c == e[f]) {
        e = !0;
        break a;
      }
    e = !1;
  } else e = !0;
  if (!e) throw Error("Variable type doesn't match this field!  Type was " + c);
  this.v &&
    w.j.isEnabled() &&
    ((c = this.Vd ? this.Vd.aa() : null),
    w.j.V(new w.j.Dc(this.v, "field", this.name, c, a)));
  this.Vd = b;
  this.jb = a;
  this.Sb(b.name);
};
function sk(a) {
  var b = a.$x;
  if (null === b && a.v) return a.v.o.Tn();
  b = b || [""];
  if (0 == b.length)
    throw ((a = a.Hb()),
    Error("'variableTypes' of field variable " + a + " was an empty list"));
  return b;
}
function rk() {
  if (!this.Vd)
    throw Error(
      "Tried to call dropdownCreate on a variable field with no variable selected."
    );
  var a = this.Hb(),
    b = null;
  this.v && (b = this.v.o);
  var c = [];
  if (b)
    for (var e = sk(this), f = 0; f < e.length; f++) c = c.concat(b.uj(e[f]));
  c.sort(qg);
  b = [];
  for (f = 0; f < c.length; f++) b[f] = [c[f].name, c[f].aa()];
  b.push([w.g.RENAME_VARIABLE, w.Xp]);
  w.g.DELETE_VARIABLE && b.push([w.g.DELETE_VARIABLE.replace("%1", a), w.Qp]);
  return b;
}
d.As = function(a) {
  a = a.getValue();
  if (this.v && this.v.o) {
    var b = this.v.o;
    if (a == w.Xp) {
      w.G.Wo(b, this.Vd);
      return;
    }
    if (a == w.Qp) {
      b.Df(this.Vd.aa());
      return;
    }
  }
  this.setValue(a);
};
d.$g = function() {
  return !0;
};
ph("field_variable", qk);
function Ah() {
  this.Qt = new RegExp(this.$b, "g");
}
d = Ah.prototype;
d.Hk = null;
d.Hh = null;
d.He = "  ";
d.Ft = 60;
d.Lk = [];
function tk() {
  var a = w.h,
    b = uk;
  b ||
    (console.warn("No workspace specified in workspaceToCode call.  Guessing."),
    (b = w.Xh()));
  var c = [];
  a.N(b);
  b = ad(b, !0);
  for (var e = 0, f; (f = b[e]); e++) {
    var h = vk(a, f);
    r(h) && (h = h[0]);
    h && (f.P && (h = a.Zs(h)), c.push(h));
  }
  c = c.join("\n");
  c = a.finish(c);
  c = c.replace(/^\s+\n/, "");
  c = c.replace(/\n\s+$/, "\n");
  return (c = c.replace(/[ \t]+\n/g, "\n"));
}
function wk(a, b) {
  return b + a.replace(/(?!\n$)\n/g, "\n" + b);
}
function vk(a, b) {
  if (!b) return "";
  if (b.disabled) return vk(a, Jc(b));
  var c = a[b.type].call(b, b);
  if (r(c)) return [a.tm(b, c[0]), c[1]];
  if (p(c)) {
    var e = b.id.replace(/\$/g, "$$$$");
    a.Hh && (c = a.Hh.replace(/%1/g, "'" + e + "'") + c);
    return a.tm(b, c);
  }
  if (null === c) return "";
}
function R(a, b, c) {
  var e = w.h;
  a = Gh(a, b);
  if (!a) return "";
  b = vk(e, a);
  if ("" === b) return "";
  a = b[0];
  b = b[1];
  if (!a) return "";
  var f = !1,
    h = Math.floor(c),
    k = Math.floor(b);
  if (h <= k && (h != k || (0 != h && 99 != h)))
    for (f = !0, h = 0; h < e.Lk.length; h++)
      if (e.Lk[h][0] == c && e.Lk[h][1] == b) {
        f = !1;
        break;
      }
  f && (a = "(" + a + ")");
  return a;
}
function xk(a, b) {
  var c = w.h;
  a = Gh(a, b);
  (a = vk(c, a)) && (a = wk(a, c.He));
  return a;
}
function yk(a, b) {
  var c = w.h;
  b = b.replace(/\$/g, "$$$$");
  c.Hk && (a = c.Hk.replace(/%1/g, "'" + b + "'") + a);
  c.Hh && (a += wk(c.Hh.replace(/%1/g, "'" + b + "'"), c.He));
  return a;
}
d.Sm = "";
function zk(a) {
  var b = w.h;
  b.Sm += a + ",";
}
d.$b = "{leCUI8hutHZI4480Dc}";
function Ak(a, b) {
  var c = w.h;
  if (!c.Cg[a]) {
    var e = Bk(c.ab, a, w.ta.cb);
    c.Mn[a] = e;
    b = b.join("\n").replace(c.Qt, e);
    for (var f; f != b; )
      (f = b), (b = b.replace(/^(( {2})*) {2}/gm, "$1\x00"));
    b = b.replace(/\0/g, c.He);
    c.Cg[a] = b;
  }
  return c.Mn[a];
}
d.N = function() {};
d.tm = function(a, b) {
  return b;
};
d.finish = function(a) {
  return a;
};
d.Zs = function(a) {
  return a;
};
function Ck() {
  var a = w.h.Sm;
  this.ut = "";
  this.Ws = Object.create(null);
  if (a) {
    a = a.split(",");
    for (var b = 0; b < a.length; b++) this.Ws[a[b]] = !0;
  }
  this.reset();
}
Ck.prototype.reset = function() {
  this.sd = Object.create(null);
  this.Wq = Object.create(null);
  this.sa = null;
};
Ck.prototype.getName = function(a, b) {
  if (b == w.G.cb) {
    var c = a;
    this.sa
      ? (c = (c = this.sa.Kd(c)) ? c.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the folowing code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (c = null));
    c && (a = c);
  }
  c = a.toLowerCase() + "_" + b;
  var e = b == w.G.cb || "DEVELOPER_VARIABLE" == b ? this.ut : "";
  if (c in this.sd) return e + this.sd[c];
  a = Bk(this, a, b);
  this.sd[c] = a.substr(e.length);
  return a;
};
function Bk(a, b, c) {
  b
    ? ((b = encodeURI(b.replace(/ /g, "_")).replace(/[^\w]/g, "_")),
      -1 != "0123456789".indexOf(b[0]) && (b = "my_" + b))
    : (b = "unnamed");
  for (var e = ""; a.Wq[b + e] || b + e in a.Ws; ) e = e ? e + 1 : 2;
  b += e;
  a.Wq[b] = !0;
  return (c == w.G.cb || "DEVELOPER_VARIABLE" == c ? a.ut : "") + b;
}
function Rc(a, b) {
  return a.toLowerCase() == b.toLowerCase();
}
w.ta = {};
w.ta.cb = w.Wp;
w.ta.Qu = function(a) {
  a = Oc(a);
  for (var b = [], c = [], e = 0; e < a.length; e++)
    if (a[e].Ye) {
      var f = a[e].Ye();
      f && (f[2] ? b.push(f) : c.push(f));
    }
  c.sort(w.ta.Ns);
  b.sort(w.ta.Ns);
  return [c, b];
};
w.ta.Ns = function(a, b) {
  return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
};
w.ta.Wv = function(a, b) {
  if (b.sb) return a;
  for (; !w.ta.Fw(a, b.o, b); ) {
    var c = a.match(/^(.*?)(\d+)$/);
    a = c ? c[1] + (parseInt(c[2], 10) + 1) : a + "2";
  }
  return a;
};
w.ta.Fw = function(a, b, c) {
  return !w.ta.Hw(a, b, c);
};
w.ta.Hw = function(a, b, c) {
  b = Oc(b);
  for (var e = 0; e < b.length; e++)
    if (b[e] != c && b[e].Ye) {
      var f = b[e].Ye();
      if (Rc(f[0], a)) return !0;
    }
  return !1;
};
w.ta.Vs = function(a) {
  a = a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  var b = w.ta.Wv(a, this.v),
    c = this.na;
  if (c != a && c != b) {
    a = Oc(this.v.o);
    for (var e = 0; e < a.length; e++) a[e].ck && a[e].ck(c, b);
  }
  return b;
};
w.ta.Ef = function(a) {
  function b(a, b) {
    for (var e = 0; e < a.length; e++) {
      var f = a[e][0],
        h = a[e][1],
        k = E("block");
      k.setAttribute("type", b);
      k.setAttribute("gap", 16);
      var t = E("mutation");
      t.setAttribute("name", f);
      k.appendChild(t);
      for (f = 0; f < h.length; f++) {
        var y = E("arg");
        y.setAttribute("name", h[f]);
        t.appendChild(y);
      }
      c.push(k);
    }
  }
  var c = [];
  if (w.J.procedures_defnoreturn) {
    var e = E("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = E("field", null, w.g.PROCEDURES_DEFNORETURN_PROCEDURE);
    f.setAttribute("name", "NAME");
    e.appendChild(f);
    c.push(e);
  }
  w.J.procedures_defreturn &&
    ((e = E("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = E("field", null, w.g.PROCEDURES_DEFRETURN_PROCEDURE)),
    f.setAttribute("name", "NAME"),
    e.appendChild(f),
    c.push(e));
  w.J.procedures_ifreturn &&
    ((e = E("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    c.push(e));
  c.length && c[c.length - 1].setAttribute("gap", 24);
  a = w.ta.Qu(a);
  b(a[0], "procedures_callnoreturn");
  b(a[1], "procedures_callreturn");
  return c;
};
w.ta.aw = function(a, b) {
  var c = [];
  b = Oc(b);
  for (var e = 0; e < b.length; e++)
    if (b[e].vd) {
      var f = b[e].vd();
      f && Rc(f, a) && c.push(b[e]);
    }
  return c;
};
w.ta.xo = function(a) {
  var b = w.j.jc,
    c = a.Ye()[0],
    e = a.Ga(!0);
  a = w.ta.aw(c, a.o);
  c = 0;
  for (var f; (f = a[c]); c++) {
    var h = f.Ga();
    h = h && w.D.td(h);
    f.Za(e);
    var k = f.Ga();
    k = k && w.D.td(k);
    h != k &&
      ((w.j.jc = !1),
      w.j.V(new w.j.Dc(f, "mutation", null, h, k)),
      (w.j.jc = b));
  }
};
w.ta.vl = function(a, b) {
  b = ad(b, !1);
  for (var c = 0; c < b.length; c++)
    if (b[c].Ye) {
      var e = b[c].Ye();
      if (e && Rc(e[0], a)) return b[c];
    }
  return null;
};
function Dk(a, b, c, e) {
  this.m = a;
  this.va = b;
  this.na = c.getAttribute("text");
  this.Mc = new C(0, 0);
  this.Qg = e;
  this.ln = null;
  a = c.getAttribute("callbackKey");
  this.Qg && a
    ? console.warn("Labels should not have callbacks. Label text: " + this.na)
    : this.Qg || (a && Ug(b, a))
    ? (this.ln = Ug(b, a))
    : console.warn("Buttons should have callbacks. Button text: " + this.na);
  this.Kq = c.getAttribute("web-class") || null;
}
d = Dk.prototype;
d.width = 0;
d.height = 0;
d.mi = null;
d.X = function() {
  var a = this.Qg ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
  this.Kq && (a += " " + this.Kq);
  this.w = w.i.B("g", { class: a }, this.m.Oa);
  if (!this.Qg)
    var b = w.i.B(
      "rect",
      { class: "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 },
      this.w
    );
  a = w.i.B(
    "rect",
    {
      class: this.Qg
        ? "blocklyFlyoutLabelBackground"
        : "blocklyFlyoutButtonBackground",
      rx: 4,
      ry: 4
    },
    this.w
  );
  var c = w.i.B(
    "text",
    {
      class: this.Qg ? "blocklyFlyoutLabelText" : "blocklyText",
      x: 0,
      y: 0,
      "text-anchor": "middle"
    },
    this.w
  );
  c.textContent = this.na;
  this.width = uh(c);
  this.height = 20;
  this.Qg ||
    ((this.width += 10),
    b.setAttribute("width", this.width),
    b.setAttribute("height", this.height));
  a.setAttribute("width", this.width);
  a.setAttribute("height", this.height);
  c.setAttribute("x", this.width / 2);
  c.setAttribute("y", this.height - 5);
  Ek(this);
  w.O(this.w, "mouseup", this, this.wx);
  return this.w;
};
d.show = function() {
  Ek(this);
  this.w.setAttribute("display", "block");
};
function Ek(a) {
  a.w.setAttribute("transform", "translate(" + a.Mc.x + "," + a.Mc.y + ")");
}
d.moveTo = function(a, b) {
  this.Mc.x = a;
  this.Mc.y = b;
  Ek(this);
};
d.Ar = function() {
  return this.Mc;
};
d.A = function() {
  this.mi && w.Na(this.mi);
  this.w && (F(this.w), (this.w = null));
  this.va = this.m = null;
};
d.wx = function(a) {
  (a = this.va.le(a)) && a.cancel();
  this.ln && this.ln(this);
};
function Fk(a) {
  a.rb = this.Xe.bind(this);
  a.kg = this.wm.bind(this);
  this.m = new Fg(a);
  this.m.Nd = !0;
  this.u = !!a.u;
  this.mf = a.Da;
  this.Hn = [];
  this.am = [];
  this.Wi = [];
  this.zc = [];
  this.Mo = [];
}
d = Fk.prototype;
d.Kh = !0;
d.Mj = !1;
d.zg = !0;
d.ra = 8;
d.nd = Fk.prototype.ra;
d.Tt = 3 * Fk.prototype.nd;
d.Ut = 3 * Fk.prototype.nd;
d.vg = 2;
d.ia = 0;
d.Fa = 0;
d.kr = 70;
d.X = function(a) {
  this.w = w.i.B(a, { class: "blocklyFlyout", style: "display: none" }, null);
  this.dd = w.i.B("path", { class: "blocklyFlyoutBackground" }, this.w);
  this.w.appendChild(this.m.X());
  return this.w;
};
d.N = function(a) {
  this.va = a;
  this.m.ph = a;
  this.Vb = new Zf(this.m, this.Ld, !1, "blocklyFlyoutScrollbar");
  this.La();
  Array.prototype.push.apply(this.Hn, w.O(this.w, "wheel", this, this.xt));
  this.Kh || ((this.kl = this.Jn.bind(this)), this.va.Sc(this.kl));
  Array.prototype.push.apply(this.Hn, w.O(this.dd, "mousedown", this, this.df));
  this.m.le = this.va.le.bind(this.va);
  this.m.sa = this.va.sa;
  a = this.m;
  a.si = new Nc(a);
};
d.A = function() {
  this.La();
  w.Na(this.Hn);
  this.kl && (this.va.cg(this.kl), (this.kl = null));
  this.Vb && (this.Vb.A(), (this.Vb = null));
  this.m && ((this.m.ph = null), this.m.A(), (this.m = null));
  this.w && (F(this.w), (this.w = null));
  this.va = this.dd = null;
};
d.Zc = function() {
  return this.ia;
};
d.Wh = function() {
  return this.Fa;
};
d.vj = function() {
  return this.m;
};
d.Y = function() {
  return this.Mj;
};
d.qa = function(a) {
  var b = a != this.Y();
  this.Mj = a;
  b && this.xk();
};
d.eh = function(a) {
  var b = a != this.zg;
  this.zg = a;
  b && this.xk();
};
d.xk = function() {
  var a = this.zg ? this.Y() : !1;
  this.w.style.display = a ? "block" : "none";
  this.Vb.eh(a);
};
function Gk(a, b, c, e, f) {
  a.w.setAttribute("width", b);
  a.w.setAttribute("height", c);
  "svg" == a.w.tagName
    ? w.i.fk(a.w, "translate(" + e + "px," + f + "px)")
    : a.w.setAttribute("transform", "translate(" + e + "," + f + ")");
  a.Vb && ((a.Vb.Io = new C(e, f)), a.Vb.resize());
}
d.La = function() {
  if (this.Y()) {
    this.qa(!1);
    for (var a = 0, b; (b = this.zc[a]); a++) w.Na(b);
    this.zc.length = 0;
    this.ag && (this.m.cg(this.ag), (this.ag = null));
  }
};
d.show = function(a) {
  this.m.Rb(!1);
  this.La();
  Hk(this);
  "string" == typeof a && (a = Vg(this.m.ph, a)(this.m.ph));
  this.qa(!0);
  for (var b = [], c = [], e = (this.Mo.length = 0), f; (f = a[e]); e++)
    if (f.tagName) {
      var h = f.tagName.toUpperCase(),
        k = this.Ld ? this.Tt : this.Ut;
      if ("BLOCK" == h)
        (h = w.D.Ph(f, this.m)),
          h.disabled && this.Mo.push(h),
          b.push({ type: "block", block: h }),
          (f = parseInt(f.getAttribute("gap"), 10)),
          c.push(isNaN(f) ? k : f);
      else if ("SEP" == f.tagName.toUpperCase())
        (f = parseInt(f.getAttribute("gap"), 10)),
          !isNaN(f) && 0 < c.length ? (c[c.length - 1] = f) : c.push(k);
      else if ("BUTTON" == h || "LABEL" == h)
        (f = new Dk(this.m, this.va, f, "LABEL" == h)),
          b.push({ type: "button", button: f }),
          c.push(k);
    }
  this.$r(b, c);
  this.zc.push(
    w.O(this.dd, "mouseover", this, function() {
      for (var a = ad(this.m, !1), b = 0, c; (c = a[b]); b++) c.ah();
    })
  );
  this.Ld ? (this.Fa = 0) : (this.ia = 0);
  this.m.Rb(!0);
  this.Vo();
  this.Jn();
  this.position();
  this.ag = this.Vo.bind(this);
  this.m.Sc(this.ag);
};
function Hk(a) {
  for (var b = ad(a.m, !1), c = 0, e; (e = b[c]); c++)
    e.o == a.m && e.A(!1, !1);
  for (c = 0; c < a.am.length; c++) (b = a.am[c]) && F(b);
  for (c = a.am.length = 0; (b = a.Wi[c]); c++) b.A();
  a.Wi.length = 0;
  a.m.si.clear();
}
function Ik(a, b, c, e) {
  a.zc.push(w.O(b, "mousedown", null, Jk(a, c)));
  a.zc.push(w.O(e, "mousedown", null, Jk(a, c)));
  a.zc.push(w.Fc(b, "mouseover", c, c.Jh));
  a.zc.push(w.Fc(b, "mouseout", c, c.ah));
  a.zc.push(w.Fc(e, "mouseover", c, c.Jh));
  a.zc.push(w.Fc(e, "mouseout", c, c.ah));
}
function Jk(a, b) {
  return function(c) {
    var e = a.va.le(c);
    e &&
      (Rf(e, b),
      e.H || (e.H = a),
      e.ib || (e.ib = a.vj()),
      (e.Lc = c),
      e.ij(c));
  };
}
d.df = function(a) {
  var b = this.va.le(a);
  b && (b.H || (b.H = this), b.ib || (b.ib = this.vj()), (b.Lc = a), b.ij(a));
};
function Mf(a, b) {
  var c = null;
  w.j.disable();
  var e = a.va.We();
  a.va.Rb(!1);
  try {
    var f = a.va;
    if (!b.ga()) throw "oldBlock is not rendered.";
    var h = w.D.Af(b);
    f.Rb(!1);
    var k = w.D.Ph(h, f);
    if (!k.ga()) throw "block is not rendered.";
    var l = w.i.yl(f.Oa),
      m = w.i.yl(a.m.Oa),
      n = b.la().scale(a.m.scale),
      q = sc(tc(m, n), l).scale(1 / f.scale);
    k.moveBy(q.x, q.y);
    c = k;
    w.Pb();
  } finally {
    w.j.enable();
  }
  b = w.G.xr(a.va, e);
  if (w.j.isEnabled())
    for (w.j.S(!0), w.j.V(new wc(c)), e = 0; e < b.length; e++)
      w.j.V(new Ac(b[e]));
  a.Kh ? a.La() : a.Jn();
  return c;
}
function Kk(a, b, c, e) {
  var f = b.X();
  b.moveTo(c, e);
  b.show();
  a.zc.push(w.O(f, "mousedown", a, a.df));
  a.Wi.push(b);
}
function Lk(a, b, c, e, f, h) {
  c = w.i.B(
    "rect",
    { "fill-opacity": 0, x: c, y: e, height: f.height, width: f.width },
    null
  );
  c.fd = b;
  w.C.yg(c);
  a.m.Oa.insertBefore(c, b.ga());
  b.ll = c;
  return (a.am[h] = c);
}
function Mk(a, b, c) {
  var e = c.Gb();
  b.setAttribute("width", e.width);
  b.setAttribute("height", e.height);
  var f = c.ht ? 15 : 0;
  f && c.moveBy(0, f);
  f = c.P ? L : 0;
  c = c.la();
  b.setAttribute("y", c.y);
  b.setAttribute("x", a.u ? c.x - e.width + f : c.x - f);
}
d.Jn = function() {
  for (var a = dd(this.va), b = ad(this.m, !1), c = 0, e; (e = b[c]); c++)
    if (-1 == this.Mo.indexOf(e)) {
      var f = vc(e, !1);
      e.Bd(f.length > a);
    }
};
d.Vo = function() {
  this.ag && this.m.cg(this.ag);
  this.Ts();
  this.ag && this.m.Sc(this.ag);
};
function Kf(a) {
  return a.Vb ? a.Vb.Y() : !1;
}
function Mg(a) {
  a.rb = this.Xe.bind(this);
  a.kg = this.wm.bind(this);
  Mg.s.constructor.call(this, a);
  this.Ld = !0;
}
v(Mg, Fk);
d = Mg.prototype;
d.Xe = function() {
  if (!this.Y()) return null;
  try {
    var a = this.m.Oa.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var b = this.vg,
    c = this.vg;
  this.mf == w.wg && (b = 0);
  var e = this.Fa;
  this.mf == w.yf && (e -= this.vg);
  return {
    bb: e,
    xa: this.ia - 2 * this.vg,
    nc: (a.height + 2 * this.nd) * this.m.scale,
    Hc: (a.width + 2 * this.nd) * this.m.scale,
    Fe: -this.m.scrollY,
    Ab: -this.m.scrollX,
    oc: a.y,
    Gc: a.x,
    wb: b,
    lb: c
  };
};
d.wm = function(a) {
  var b = this.Xe();
  b &&
    (ba(a.x) && (this.m.scrollX = -b.Hc * a.x),
    this.m.translate(this.m.scrollX + b.lb, this.m.scrollY + b.wb));
};
d.position = function() {
  if (this.Y()) {
    var a = this.va.rb();
    if (a) {
      this.ia = a.xa;
      this.ip(a.xa - 2 * this.ra, this.Fa - this.ra);
      var b = a.lb,
        c = a.wb;
      this.mf == w.wg && (c += a.bb - this.Fa);
      Gk(this, this.ia, this.Fa, b, c);
    }
  }
};
d.ip = function(a, b) {
  var c = this.mf == w.yf,
    e = ["M 0," + (c ? 0 : this.ra)];
  c
    ? (e.push("h", a + 2 * this.ra),
      e.push("v", b),
      e.push("a", this.ra, this.ra, 0, 0, 1, -this.ra, this.ra),
      e.push("h", -1 * a),
      e.push("a", this.ra, this.ra, 0, 0, 1, -this.ra, -this.ra))
    : (e.push("a", this.ra, this.ra, 0, 0, 1, this.ra, -this.ra),
      e.push("h", a),
      e.push("a", this.ra, this.ra, 0, 0, 1, this.ra, this.ra),
      e.push("v", b),
      e.push("h", -a - 2 * this.ra));
  e.push("z");
  this.dd.setAttribute("d", e.join(" "));
};
d.cp = function() {
  this.Vb.set(this.u ? Infinity : 0);
};
d.xt = function(a) {
  var b = a.deltaX;
  if (b) {
    kb && 1 === a.deltaMode && (b *= 10);
    var c = this.Xe();
    b = c.Ab + b;
    b = Math.min(b, c.Hc - c.xa);
    b = Math.max(b, 0);
    this.Vb.set(b);
    w.I.La();
  }
  a.preventDefault();
  a.stopPropagation();
};
d.$r = function(a, b) {
  this.m.scale = this.va.scale;
  var c = this.nd,
    e = this.u ? c : c + L;
  this.u && (a = a.reverse());
  for (var f = 0, h; (h = a[f]); f++)
    if ("block" == h.type) {
      h = h.block;
      for (var k = vc(h, !1), l = 0, m; (m = k[l]); l++) m.sb = !0;
      h.$();
      k = h.ga();
      l = h.Gb();
      m = h.P ? L : 0;
      m = this.u ? e + l.width : e + m;
      h.moveBy(m, c);
      m = Lk(this, h, m, c, l, f);
      e += l.width + b[f];
      Ik(this, k, h, m);
    } else
      "button" == h.type &&
        (Kk(this, h.button, e, c), (e += h.button.width + b[f]));
};
d.Sr = function(a) {
  a = (Math.atan2(a.y, a.x) / Math.PI) * 180;
  var b = this.kr;
  return (a < 90 + b && a > 90 - b) || (a > -90 - b && a < -90 + b) ? !0 : !1;
};
d.Th = function() {
  if (!this.w) return null;
  var a = this.w.getBoundingClientRect(),
    b = a.top;
  a = a.height;
  if (this.mf == w.yf) return new og(-1e9, b - 1e9, 2e9, 1e9 + a);
  if (this.mf == w.wg) return new og(-1e9, b, 2e9, 1e9 + a);
};
d.Ts = function() {
  this.m.scale = this.va.scale;
  for (var a = 0, b = ad(this.m, !1), c = 0, e; (e = b[c]); c++)
    a = Math.max(a, e.Gb().height);
  a += 1.5 * this.nd;
  a *= this.m.scale;
  a += G;
  if (this.Fa != a) {
    for (c = 0; (e = b[c]); c++) e.ll && Mk(this, e.ll, e);
    this.Fa = a;
    this.va.resize();
  }
};
function Ng(a) {
  a.rb = this.Xe.bind(this);
  a.kg = this.wm.bind(this);
  Ng.s.constructor.call(this, a);
  this.Ld = !1;
}
v(Ng, Fk);
d = Ng.prototype;
d.Xe = function() {
  if (!this.Y()) return null;
  try {
    var a = this.m.Oa.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var b = this.vg,
    c = this.Fa - 2 * this.vg,
    e = this.ia;
  this.u || (e -= this.vg);
  return {
    bb: c,
    xa: e,
    nc: a.height * this.m.scale + 2 * this.nd,
    Hc: a.width * this.m.scale + 2 * this.nd,
    Fe: -this.m.scrollY + a.y,
    Ab: -this.m.scrollX,
    oc: a.y,
    Gc: a.x,
    wb: b,
    lb: 0
  };
};
d.wm = function(a) {
  var b = this.Xe();
  b &&
    (ba(a.y) && (this.m.scrollY = -b.nc * a.y),
    this.m.translate(this.m.scrollX + b.lb, this.m.scrollY + b.wb));
};
d.position = function() {
  if (this.Y()) {
    var a = this.va.rb();
    if (a) {
      this.Fa = a.bb;
      this.ip(this.ia - this.ra, a.bb - 2 * this.ra);
      var b = a.wb,
        c = a.lb;
      this.mf == w.Xd && (this.Kw = c += a.xa - this.ia);
      Gk(this, this.ia, this.Fa, c, b);
    }
  }
};
d.ip = function(a, b) {
  var c = this.mf == w.Xd,
    e = a + this.ra;
  e = ["M " + (c ? e : 0) + ",0"];
  e.push("h", c ? -a : a);
  e.push(
    "a",
    this.ra,
    this.ra,
    0,
    0,
    c ? 0 : 1,
    c ? -this.ra : this.ra,
    this.ra
  );
  e.push("v", Math.max(0, b));
  e.push(
    "a",
    this.ra,
    this.ra,
    0,
    0,
    c ? 0 : 1,
    c ? this.ra : -this.ra,
    this.ra
  );
  e.push("h", c ? a : -a);
  e.push("z");
  this.dd.setAttribute("d", e.join(" "));
};
d.cp = function() {
  this.Vb.set(0);
};
d.xt = function(a) {
  var b = a.deltaY;
  if (b) {
    kb && 1 === a.deltaMode && (b *= 10);
    var c = this.Xe();
    b = c.Fe - c.oc + b;
    b = Math.min(b, c.nc - c.bb);
    b = Math.max(b, 0);
    this.Vb.set(b);
    w.I.La();
  }
  a.preventDefault();
  a.stopPropagation();
};
d.$r = function(a, b) {
  this.m.scale = this.va.scale;
  for (var c = this.nd, e = this.u ? c : c + L, f = 0, h; (h = a[f]); f++)
    if ("block" == h.type) {
      h = h.block;
      for (var k = vc(h, !1), l = 0, m; (m = k[l]); l++) m.sb = !0;
      h.$();
      k = h.ga();
      l = h.Gb();
      h.moveBy(e, c);
      m = Lk(this, h, this.u ? e - l.width : e, c, l, f);
      Ik(this, k, h, m);
      c += l.height + b[f];
    } else
      "button" == h.type &&
        (Kk(this, h.button, e, c), (c += h.button.height + b[f]));
};
d.Sr = function(a) {
  a = (Math.atan2(a.y, a.x) / Math.PI) * 180;
  var b = this.kr;
  return (a < b && a > -b) || a < -180 + b || a > 180 - b ? !0 : !1;
};
d.Th = function() {
  if (!this.w) return null;
  var a = this.w.getBoundingClientRect(),
    b = a.left;
  a = a.width;
  if (this.mf == w.xf) return new og(b - 1e9, -1e9, 1e9 + a, 2e9);
  if (kb && this.va && this.va.Kj) {
    var c = this.va.w.getBoundingClientRect().x;
    10 > Math.abs(c - b) && (b += this.Kw * this.va.options.Kb.scale);
  }
  return new og(b, -1e9, 1e9 + a, 2e9);
};
d.Ts = function() {
  this.m.scale = this.va.scale;
  for (var a = 0, b = ad(this.m, !1), c = 0, e; (e = b[c]); c++) {
    var f = e.Gb().width;
    e.P && (f -= L);
    a = Math.max(a, f);
  }
  for (c = 0; (e = this.Wi[c]); c++) a = Math.max(a, e.width);
  a += 1.5 * this.nd + L;
  a *= this.m.scale;
  a += G;
  if (this.ia != a) {
    for (c = 0; (e = b[c]); c++)
      this.u &&
        ((f = e.la().x), e.moveBy(a / this.m.scale - this.nd - L - f, 0)),
        e.ll && Mk(this, e.ll, e);
    if (this.u)
      for (c = 0; (e = this.Wi[c]); c++)
        (b = e.Ar().y), e.moveTo(a / this.m.scale - e.width - this.nd - L, b);
    this.ia = a;
    this.va.resize();
  }
};
function Nk(a) {
  lg.call(this);
  this.T = a;
  a = z ? "focusout" : "blur";
  this.Mw = cc(this.T, z ? "focusin" : "focus", this, !z);
  this.Nw = cc(this.T, a, this, !z);
}
v(Nk, lg);
Nk.prototype.handleEvent = function(a) {
  var b = new Ob(a.ge);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  this.dispatchEvent(b);
};
Nk.prototype.Ua = function() {
  Nk.s.Ua.call(this);
  lc(this.Mw);
  lc(this.Nw);
  delete this.T;
};
function Ok(a, b) {
  null != a && this.append.apply(this, arguments);
}
d = Ok.prototype;
d.Cb = "";
d.set = function(a) {
  this.Cb = "" + a;
};
d.append = function(a, b, c) {
  this.Cb += String(a);
  if (null != b)
    for (var e = 1; e < arguments.length; e++) this.Cb += arguments[e];
  return this;
};
d.clear = function() {
  this.Cb = "";
};
d.toString = function() {
  return this.Cb;
};
function Pk(a, b, c) {
  Lh.call(this, c);
  this.Ya = b || Qk;
  a instanceof Dd ||
    ((a = Gd(a)), (a = Hd(Fd(a).replace(/(\r\n|\r|\n)/g, "<br>"), a.Vh())));
  this.Dj = a;
  this.kj = this.ep = !1;
  this.Vx = null;
  this.Nu = Nd;
  this.Lj = !0;
  this.bl = -1;
}
v(Pk, Lh);
var Rk = {};
d = Pk.prototype;
d.Ua = function() {
  Pk.s.Ua.call(this);
  this.og && (this.og.removeNode(this), (this.og = null));
  this.T = null;
};
d.Ml = function() {
  var a = this.F();
  if (a) {
    var b = Sk(this);
    b && !b.id && (b.id = this.aa() + ".label");
    Xh(a, "treeitem");
    P(a, "selected", !1);
    P(a, "level", this.Uh());
    b && P(a, "labelledby", b.id);
    (b = this.xl()) && Xh(b, "presentation");
    (b = this.wl()) && Xh(b, "presentation");
    if ((b = Tk(this)))
      if ((Xh(b, "group"), b.hasChildNodes()))
        for (P(a, "expanded", !1), a = Rh(this), b = 1; b <= a; b++) {
          var c = Sh(this, b - 1).F();
          P(c, "setsize", a);
          P(c, "posinset", b);
        }
  }
};
d.X = function() {
  var a = this.qc();
  var b = this.Fm();
  var c = a.Hd;
  a = c.createElement("DIV");
  z ? (Pd(a, Md(Od, b)), a.removeChild(a.firstChild)) : Pd(a, b);
  if (1 == a.childNodes.length) b = a.removeChild(a.firstChild);
  else
    for (b = c.createDocumentFragment(); a.firstChild; )
      b.appendChild(a.firstChild);
  this.T = b;
};
d.Fb = function() {
  Pk.s.Fb.call(this);
  Rk[this.aa()] = this;
  this.Ml();
};
d.ud = function() {
  Pk.s.ud.call(this);
  delete Rk[this.aa()];
};
d.Ih = function(a, b) {
  var c = Sh(this, b - 1),
    e = Sh(this, b);
  Pk.s.Ih.call(this, a, b);
  a.Qd = c;
  a.Od = e;
  c ? (c.Od = a) : (this.rr = a);
  e ? (e.Qd = a) : (this.Wr = a);
  (b = this.vc()) && Uk(a, b);
  Vk(a, this.Uh() + 1);
  if ((b = this.F()))
    if ((this.Di(), P(b, "expanded", this.rc()), this.rc())) {
      b = Tk(this);
      a.F() || a.X();
      var f = a.F(),
        h = e && e.F();
      b.insertBefore(f, h);
      this.za && a.Fb();
      e || (c ? c.Di() : (ih(b, !0), this.Sd(this.rc())));
    }
};
d.add = function(a, b) {
  a.getParent() && a.getParent().removeChild(a);
  this.Ih(a, b ? Vh(this, b) : Rh(this));
  return a;
};
d.removeChild = function(a) {
  var b = this.vc(),
    c = b ? b.ne() : null;
  if (c == a || a.contains(c))
    b.hasFocus() ? (this.select(), sf(this.yx, 10, this)) : this.select();
  Pk.s.removeChild.call(this, a);
  this.Wr == a && (this.Wr = a.Qd);
  this.rr == a && (this.rr = a.Od);
  a.Qd && (a.Qd.Od = a.Od);
  a.Od && (a.Od.Qd = a.Qd);
  c = !a.Od;
  a.og = null;
  a.bl = -1;
  if (b && (b.removeNode(a), this.za)) {
    b = Tk(this);
    if (a.za) {
      var e = a.F();
      b.removeChild(e);
      a.ud();
    }
    c && (c = Sh(this, Rh(this) - 1)) && c.Di();
    Uh(this) ||
      ((b.style.display = "none"),
      this.Di(),
      (this.xl().className = this.ql()),
      (c = this.F()) && c.removeAttribute("aria-expanded"));
  }
  return a;
};
d.remove = Pk.prototype.removeChild;
d.yx = function() {
  this.select();
};
d.Uh = function() {
  var a = this.bl;
  0 > a && ((a = (a = this.getParent()) ? a.Uh() + 1 : 0), Vk(this, a));
  return a;
};
function Vk(a, b) {
  if (b != a.bl) {
    a.bl = b;
    var c = Wk(a);
    if (c) {
      var e = Xk(a) + "px";
      Th(a) ? (c.style.paddingRight = e) : (c.style.paddingLeft = e);
    }
    Qh(a, function(a) {
      Vk(a, b + 1);
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
d.Gf = function() {
  var a = [];
  Qh(this, function(b) {
    a.push(b);
  });
  return a;
};
d.Sl = function() {
  return this.ep;
};
d.select = function() {
  var a = this.vc();
  a && a.cd(this);
};
function Yk(a, b) {
  if (a.ep != b) {
    a.ep = b;
    Zk(a);
    var c = a.F();
    c &&
      (P(c, "selected", b),
      b && ((b = a.vc().F()), P(b, "activedescendant", a.aa())));
  }
}
d.rc = function() {
  return this.kj;
};
d.Sd = function(a) {
  var b = a != this.kj;
  if (!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) {
    this.kj = a;
    var c = this.vc();
    var e = this.F();
    if (Uh(this)) {
      if ((!a && c && this.contains(c.ne()) && this.select(), e)) {
        if ((c = Tk(this)))
          if (
            (ih(c, a), P(e, "expanded", a), a && this.za && !c.hasChildNodes())
          ) {
            var f = [];
            Qh(this, function(a) {
              f.push(a.Fm());
            });
            Pd(c, Md(f));
            Qh(this, function(a) {
              a.Fb();
            });
          }
        this.Di();
      }
    } else (c = Tk(this)) && ih(c, !1);
    e && (this.xl().className = this.ql());
    b && this.dispatchEvent(a ? "expand" : "collapse");
  }
};
d.toggle = function() {
  this.Sd(!this.rc());
};
d.expand = function() {
  this.Sd(!0);
};
d.collapse = function() {
  this.Sd(!1);
};
d.bp = function() {
  var a = this.getParent();
  a && (a.Sd(!0), a.bp());
};
d.Fm = function() {
  var a = this.vc(),
    b = !a.kk || (a == this.getParent() && !a.wp) ? this.Ya.Jq : this.Ya.Iq;
  a = this.rc() && Uh(this);
  b = { class: b, style: $k(this) };
  var c = [];
  a &&
    Qh(this, function(a) {
      c.push(a.Fm());
    });
  a = Ld("div", b, c);
  return Ld("div", { class: this.Ya.Sq, id: this.aa() }, [al(this), a]);
};
function Xk(a) {
  return Math.max(0, (a.Uh() - 1) * a.Ya.fo);
}
function al(a) {
  var b = {};
  b["padding-" + (Th(a) ? "right" : "left")] = Xk(a) + "px";
  b = { class: a.rj(), style: b };
  var c = a.Qn(),
    e = Ld("span", { style: { display: "inline-block" }, class: a.ql() }),
    f = Ld("span", { class: a.Ya.Tq, title: a.Vx || null }, a.Dj);
  a = Md(f, Ld("span", {}, a.Nu));
  return Ld("div", b, [c, e, a]);
}
d.rj = function() {
  return this.Ya.vn + (this.Sl() ? " " + this.Ya.Vq : "");
};
d.Qn = function() {
  return Ld("span", {
    type: "expand",
    style: { display: "inline-block" },
    class: bl(this)
  });
};
function bl(a) {
  var b = a.vc(),
    c = !b.kk || (b == a.getParent() && !b.wp),
    e = a.Ya,
    f = new Ok();
  f.append(e.Ag, " ", e.wv, " ");
  if (Uh(a)) {
    var h = 0;
    b.up && a.Lj && (h = a.rc() ? 2 : 1);
    c || (h = a.Od ? h + 8 : h + 4);
    switch (h) {
      case 1:
        f.append(e.Av);
        break;
      case 2:
        f.append(e.zv);
        break;
      case 4:
        f.append(e.Oq);
        break;
      case 5:
        f.append(e.yv);
        break;
      case 6:
        f.append(e.xv);
        break;
      case 8:
        f.append(e.Pq);
        break;
      case 9:
        f.append(e.Cv);
        break;
      case 10:
        f.append(e.Bv);
        break;
      default:
        f.append(e.Nq);
    }
  } else c ? f.append(e.Nq) : a.Od ? f.append(e.Pq) : f.append(e.Oq);
  return f.toString();
}
function $k(a) {
  var b = a.rc() && Uh(a);
  return wd({ "background-position": cl(a), display: b ? null : "none" });
}
function cl(a) {
  return (a.Od ? (a.Uh() - 1) * a.Ya.fo : "-100") + "px 0";
}
d.F = function() {
  var a = Pk.s.F.call(this);
  a || (this.T = a = this.qc().F(this.aa()));
  return a;
};
function Wk(a) {
  return (a = a.F()) ? a.firstChild : null;
}
d.wl = function() {
  var a = Wk(this);
  return a ? a.firstChild : null;
};
d.xl = function() {
  var a = Wk(this);
  return a ? a.childNodes[1] : null;
};
function Sk(a) {
  return (a = Wk(a)) && a.lastChild ? a.lastChild.previousSibling : null;
}
function Tk(a) {
  return (a = a.F()) ? a.lastChild : null;
}
d.Sb = function(a) {
  this.Dj = a = Gd(a);
  var b = Sk(this);
  b && Pd(b, a);
  (a = this.vc()) && dl(a, this);
};
d.Hb = function() {
  var a = Fd(this.Dj);
  return -1 != a.indexOf("&") ? ("document" in g ? Ra(a) : Ta(a)) : a;
};
function Zk(a) {
  var b = Wk(a);
  b && (b.className = a.rj());
}
d.Di = function() {
  var a = this.wl();
  a && (a.className = bl(this));
  if ((a = Tk(this))) a.style.backgroundPosition = cl(this);
};
d.Bs = function(a) {
  "expand" == a.target.getAttribute("type") && Uh(this)
    ? this.Lj && this.toggle()
    : (this.select(), Zk(this));
};
d.Do = function(a) {
  a.preventDefault();
};
d.ys = function(a) {
  ("expand" == a.target.getAttribute("type") && Uh(this)) ||
    (this.Lj && this.toggle());
};
d.Fo = function(a) {
  var b = !0;
  switch (a.keyCode) {
    case 39:
      if (a.altKey) break;
      Uh(this) && (this.rc() ? Sh(this, 0).select() : this.Sd(!0));
      break;
    case 37:
      if (a.altKey) break;
      if (Uh(this) && this.rc() && this.Lj) this.Sd(!1);
      else {
        var c = this.getParent(),
          e = this.vc();
        c && (e.ih || c != e) && c.select();
      }
      break;
    case 40:
      a: if (Uh(this) && this.rc()) c = Sh(this, 0);
      else {
        for (c = this; c != this.vc(); ) {
          e = c.Od;
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
      c = this.Qd;
      null != c
        ? (c = el(c))
        : ((c = this.getParent()),
          (e = this.vc()),
          (c = (!e.ih && c == e) || this == e ? null : c));
      c && c.select();
      break;
    default:
      b = !1;
  }
  b && (a.preventDefault(), (e = this.vc()) && e.vk.clear());
  return b;
};
function el(a) {
  return a.rc() && Uh(a) ? el(Sh(a, Rh(a) - 1)) : a;
}
function Uk(a, b) {
  a.og != b &&
    ((a.og = b),
    dl(b, a),
    Qh(a, function(a) {
      Uk(a, b);
    }));
}
var Qk = {
  fo: 19,
  Uq: "goog-tree-root goog-tree-item",
  Rq: "goog-tree-hide-root",
  Sq: "goog-tree-item",
  Iq: "goog-tree-children",
  Jq: "goog-tree-children-nolines",
  vn: "goog-tree-row",
  Tq: "goog-tree-item-label",
  Ag: "goog-tree-icon",
  wv: "goog-tree-expand-icon",
  Av: "goog-tree-expand-icon-plus",
  zv: "goog-tree-expand-icon-minus",
  Cv: "goog-tree-expand-icon-tplus",
  Bv: "goog-tree-expand-icon-tminus",
  yv: "goog-tree-expand-icon-lplus",
  xv: "goog-tree-expand-icon-lminus",
  Pq: "goog-tree-expand-icon-t",
  Oq: "goog-tree-expand-icon-l",
  Nq: "goog-tree-expand-icon-blank",
  tn: "goog-tree-expanded-folder-icon",
  Lq: "goog-tree-collapsed-folder-icon",
  un: "goog-tree-file-icon",
  Qq: "goog-tree-expanded-folder-icon",
  Mq: "goog-tree-collapsed-folder-icon",
  Vq: "selected"
};
function fl(a, b, c) {
  Pk.call(this, a, b, c);
}
v(fl, Pk);
fl.prototype.vc = function() {
  if (this.og) return this.og;
  var a = this.getParent();
  return a && (a = a.vc()) ? (Uk(this, a), a) : null;
};
fl.prototype.ql = function() {
  var a = this.rc(),
    b = this.Sv;
  if (a && b) return b;
  b = this.zw;
  if (!a && b) return b;
  b = this.Ya;
  if (Uh(this)) {
    if (a && b.tn) return b.Ag + " " + b.tn;
    if (!a && b.Lq) return b.Ag + " " + b.Lq;
  } else if (b.un) return b.Ag + " " + b.un;
  return "";
};
function gl(a) {
  if (a.tj && "function" == typeof a.tj) return a.tj();
  if (p(a)) return a.split("");
  if (ha(a)) {
    for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]);
    return b;
  }
  b = [];
  c = 0;
  for (e in a) b[c++] = a[e];
  return b;
}
function hl(a) {
  this.jb = void 0;
  this.cc = {};
  if (a) {
    if (a.Al && "function" == typeof a.Al) var b = a.Al();
    else if (a.tj && "function" == typeof a.tj) b = void 0;
    else if (ha(a) || p(a)) {
      b = [];
      for (var c = a.length, e = 0; e < c; e++) b.push(e);
    } else for (e in ((b = []), (c = 0), a)) b[c++] = e;
    a = gl(a);
    for (c = 0; c < b.length; c++) this.set(b[c], a[c]);
  }
}
d = hl.prototype;
d.set = function(a, b) {
  il(this, a, b, !1);
};
d.add = function(a, b) {
  il(this, a, b, !0);
};
function il(a, b, c, e) {
  for (var f = 0; f < b.length; f++) {
    var h = b.charAt(f);
    a.cc[h] || (a.cc[h] = new hl());
    a = a.cc[h];
  }
  if (e && void 0 !== a.jb)
    throw Error('The collection already contains the key "' + b + '"');
  a.jb = c;
}
d.get = function(a) {
  a: {
    for (var b = this, c = 0; c < a.length; c++)
      if (((b = b.cc[a.charAt(c)]), !b)) {
        a = void 0;
        break a;
      }
    a = b;
  }
  return a ? a.jb : void 0;
};
d.tj = function() {
  var a = [];
  jl(this, a);
  return a;
};
function jl(a, b) {
  void 0 !== a.jb && b.push(a.jb);
  for (var c in a.cc) jl(a.cc[c], b);
}
d.Al = function(a) {
  var b = [];
  if (a) {
    for (var c = this, e = 0; e < a.length; e++) {
      var f = a.charAt(e);
      if (!c.cc[f]) return [];
      c = c.cc[f];
    }
    kl(c, a, b);
  } else kl(this, "", b);
  return b;
};
function kl(a, b, c) {
  void 0 !== a.jb && c.push(b);
  for (var e in a.cc) kl(a.cc[e], b + e, c);
}
d.clear = function() {
  this.cc = {};
  this.jb = void 0;
};
d.remove = function(a) {
  for (var b = this, c = [], e = 0; e < a.length; e++) {
    var f = a.charAt(e);
    if (!b.cc[f])
      throw Error('The collection does not have the key "' + a + '"');
    c.push([b, f]);
    b = b.cc[f];
  }
  a = b.jb;
  for (delete b.jb; 0 < c.length; )
    if (((f = c.pop()), (b = f[0]), (f = f[1]), b.cc[f].Tr())) delete b.cc[f];
    else break;
  return a;
};
d.clone = function() {
  return new hl(this);
};
d.Tr = function() {
  var a;
  if ((a = void 0 === this.jb))
    a: {
      for (var b in this.cc) {
        a = !1;
        break a;
      }
      a = !0;
    }
  return a;
};
function ll() {
  this.Vg = new hl();
  this.Cb = "";
  this.$l = this.uo = null;
  this.ji = this.Qj = 0;
}
function ml(a, b) {
  var c = b.Hb();
  if (c && !Fa(null == c ? "" : String(c))) {
    c = c.toLowerCase();
    var e = a.Vg.get(c);
    if (e) {
      for (var f = Rh(b), h = 0; h < f; h++) ml(a, Sh(b, h));
      ya(e, b);
      e.length || a.Vg.remove(c);
    }
  }
}
function nl(a, b) {
  var c = !1;
  (b = a.Vg.Al(b)) &&
    b.length &&
    ((a.ji = 0), (a.Qj = 0), (c = a.Vg.get(b[0])), (c = ol(a, c))) &&
    (a.uo = b);
  return c;
}
function ol(a, b) {
  if (b) {
    if (a.ji < b.length) {
      var c = b[a.ji];
      a.$l = b;
    }
    c && (c.bp(), c.select());
  }
  return !!c;
}
ll.prototype.clear = function() {
  this.Cb = "";
};
function pl(a, b, c) {
  Pk.call(this, a, b, c);
  this.kj = !0;
  Yk(this, !0);
  this.tb = this;
  this.vk = new ll();
  this.Ln = this.hc = null;
  this.mj = !1;
  this.Yv = null;
  this.wp = this.ih = this.up = this.kk = !0;
  if (z)
    try {
      document.execCommand("BackgroundImageCache", !1, !0);
    } catch (e) {}
}
v(pl, Pk);
d = pl.prototype;
d.vc = function() {
  return this;
};
d.Uh = function() {
  return 0;
};
d.bp = function() {};
d.kw = function() {
  this.mj = !0;
  li(this.F(), "focused");
  this.tb && this.tb.select();
};
d.fw = function() {
  this.mj = !1;
  ni(this.F(), "focused");
};
d.hasFocus = function() {
  return this.mj;
};
d.rc = function() {
  return !this.ih || pl.s.rc.call(this);
};
d.Sd = function(a) {
  this.ih ? pl.s.Sd.call(this, a) : (this.kj = a);
};
d.Qn = function() {
  return Nd;
};
d.xl = function() {
  var a = Wk(this);
  return a ? a.firstChild : null;
};
d.wl = function() {
  return null;
};
d.Di = function() {};
d.rj = function() {
  return pl.s.rj.call(this) + (this.ih ? "" : " " + this.Ya.Rq);
};
d.ql = function() {
  var a = this.rc(),
    b = this.Sv;
  if (a && b) return b;
  b = this.zw;
  if (!a && b) return b;
  b = this.Ya;
  return a && b.Qq ? b.Ag + " " + b.Qq : !a && b.Mq ? b.Ag + " " + b.Mq : "";
};
d.cd = function(a) {
  if (this.tb != a) {
    var b = !1;
    this.tb && ((b = this.tb == this.Yv), Yk(this.tb, !1));
    if ((this.tb = a)) Yk(a, !0), b && a.select();
    this.dispatchEvent("change");
  }
};
d.ne = function() {
  return this.tb;
};
function ql(a) {
  0 != a.kk && ((a.kk = !1), a.za && rl(a));
}
function rl(a) {
  function b(a) {
    var h = Tk(a);
    if (h) {
      var l = !e || (c == a.getParent() && !f) ? a.Ya.Jq : a.Ya.Iq;
      h.className = l;
      if ((h = a.wl())) h.className = bl(a);
    }
    Qh(a, b);
  }
  var c = a,
    e = c.kk,
    f = c.wp;
  b(a);
}
function sl(a) {
  0 != a.up && ((a.up = !1), a.za && rl(a));
}
function tl(a) {
  if (0 != a.ih) {
    a.ih = !1;
    if (a.za) {
      var b = Wk(a);
      b && (b.className = a.rj());
    }
    a.ne() == a && Sh(a, 0) && a.cd(Sh(a, 0));
  }
}
d.Ml = function() {
  pl.s.Ml.call(this);
  var a = this.F();
  Xh(a, "tree");
  P(a, "labelledby", Sk(this).id);
};
d.Fb = function() {
  pl.s.Fb.call(this);
  var a = this.F();
  a.className = this.Ya.Uq;
  a.setAttribute("hideFocus", "true");
  a = this.F();
  a.tabIndex = 0;
  var b = (this.hc = new ci(a)),
    c = (this.Ln = new Nk(a));
  Oh(this)
    .pa(c, "focusout", this.fw)
    .pa(c, "focusin", this.kw)
    .pa(b, "key", this.xd)
    .pa(a, "mousedown", this.Yn)
    .pa(a, "click", this.Yn)
    .pa(a, "dblclick", this.Yn);
  this.Ml();
};
d.ud = function() {
  pl.s.ud.call(this);
  this.hc.A();
  this.hc = null;
  this.Ln.A();
  this.Ln = null;
};
d.Yn = function(a) {
  var b = ul(this, a);
  if (b)
    switch (a.type) {
      case "mousedown":
        b.Bs(a);
        break;
      case "click":
        b.Do(a);
        break;
      case "dblclick":
        b.ys(a);
    }
};
d.xd = function(a) {
  var b = this.vk;
  var c = !1;
  switch (a.keyCode) {
    case 40:
    case 38:
      if (a.ctrlKey) {
        c = 40 == a.keyCode ? 1 : -1;
        var e = b.uo;
        if (e) {
          var f = null,
            h = !1;
          if (b.$l) {
            var k = b.ji + c;
            0 <= k && k < b.$l.length ? ((b.ji = k), (f = b.$l)) : (h = !0);
          }
          f ||
            ((k = b.Qj + c),
            0 <= k && k < e.length && (b.Qj = k),
            e.length > b.Qj && (f = b.Vg.get(e[b.Qj])),
            f && f.length && h && (b.ji = -1 == c ? f.length - 1 : 0));
          ol(b, f) && (b.uo = e);
        }
        c = !0;
      }
      break;
    case 8:
      e = b.Cb.length - 1;
      c = !0;
      0 < e
        ? ((b.Cb = b.Cb.substring(0, e)), nl(b, b.Cb))
        : 0 == e
        ? (b.Cb = "")
        : (c = !1);
      break;
    case 27:
      (b.Cb = ""), (c = !0);
  }
  (b = c || (this.tb && this.tb.Fo(a))) ||
    ((b = this.vk),
    (c = !1),
    a.ctrlKey ||
      a.altKey ||
      ((e = String.fromCharCode(a.charCode || a.keyCode).toLowerCase()),
      ((1 == e.length && " " <= e && "~" >= e) ||
        ("\u0080" <= e && "\ufffd" >= e)) &&
        (" " != e || b.Cb) &&
        ((b.Cb += e), (c = nl(b, b.Cb)))),
    (b = c));
  b && a.preventDefault();
  return b;
};
function ul(a, b) {
  for (var c = b.target; null != c; ) {
    if ((b = Rk[c.id])) return b;
    if (c == a.F()) break;
    c = c.parentNode;
  }
  return null;
}
d.createNode = function(a) {
  return new fl(a || Nd, this.Ya, this.qc());
};
function dl(a, b) {
  a = a.vk;
  var c = b.Hb();
  if (c && !Fa(null == c ? "" : String(c))) {
    c = c.toLowerCase();
    var e = a.Vg.get(c);
    e ? e.push(b) : a.Vg.set(c, [b]);
  }
}
d.removeNode = function(a) {
  ml(this.vk, a);
};
function Ig(a) {
  this.m = a;
  this.u = a.options.u;
  this.Ld = a.options.pe;
  this.Da = a.options.Da;
  this.Ya = {
    fo: 19,
    Uq: "blocklyTreeRoot",
    Rq: "blocklyHidden",
    Sq: "",
    vn: "blocklyTreeRow",
    Tq: "blocklyTreeLabel",
    Ag: "blocklyTreeIcon",
    tn: "blocklyTreeIconOpen",
    un: "blocklyTreeIconNone",
    Vq: "blocklyTreeSelected"
  };
  this.rt = { vn: "blocklyTreeSeparator" };
  this.Ld &&
    ((this.Ya.cssTreeRow += a.u
      ? " blocklyHorizontalTreeRtl"
      : " blocklyHorizontalTree"),
    (this.rt.cssTreeRow =
      "blocklyTreeSeparatorHorizontal " +
      (a.u ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree")),
    (this.Ya.cssTreeIcon = ""));
}
d = Ig.prototype;
d.width = 0;
d.height = 0;
d.Nj = null;
d.N = function() {
  var a = this.m,
    b = K(this.m);
  this.Ec = E("DIV", "blocklyToolboxDiv");
  this.Ec.setAttribute("dir", a.u ? "RTL" : "LTR");
  b.parentNode.insertBefore(this.Ec, b);
  w.O(
    this.Ec,
    "mousedown",
    this,
    function(a) {
      w.i.Tf(a) || a.target == this.Ec ? w.Pb(!1) : w.Pb(!0);
      w.Touch.Qe();
    },
    !1,
    !0
  );
  b = {
    hj: a.options.hj,
    Kb: a,
    u: a.u,
    ef: a.options.ef,
    pe: a.pe,
    Da: a.options.Da
  };
  this.H = null;
  this.H = a.pe ? new Mg(b) : new Ng(b);
  de(this.H.X("svg"), K(this.m));
  this.H.N(a);
  this.Ya.cleardotPath = a.options.Pd + "1x1.gif";
  this.Ya.cssCollapsedFolderIcon =
    "blocklyTreeIconClosed" + (a.u ? "Rtl" : "Ltr");
  this.Dd = b = new vl(this, this.Ya);
  tl(b);
  ql(b);
  sl(b);
  b.cd(null);
  a = this.lm(a.options.se);
  b.$(this.Ec);
  a && b.cd(a);
  Rg(this);
  this.position();
};
d.A = function() {
  this.H.A();
  this.Dd.A();
  F(this.Ec);
  this.Nj = this.m = null;
};
d.Zc = function() {
  return this.width;
};
d.Wh = function() {
  return this.height;
};
d.position = function() {
  var a = this.Ec;
  if (a) {
    var b = K(this.m);
    b = w.ot(b);
    this.Ld
      ? ((a.style.left = "0"),
        (a.style.height = "auto"),
        (a.style.width = b.width + "px"),
        (this.height = a.offsetHeight),
        this.Da == w.yf ? (a.style.top = "0") : (a.style.bottom = "0"))
      : (this.Da == w.Xd ? (a.style.right = "0") : (a.style.left = "0"),
        (a.style.height = b.height + "px"),
        (this.width = a.offsetWidth));
    this.H.position();
  }
};
d.lm = function(a) {
  this.Dd.Us();
  this.Dd.$d = [];
  this.Hr = !1;
  a = wl(this, a, this.Dd, this.m.options.Pd);
  if (this.Dd.$d.length)
    throw "Toolbox cannot have both blocks and categories in the root level.";
  yf(this.m);
  return a;
};
function wl(a, b, c, e) {
  for (var f = null, h = null, k = 0, l; (l = b.childNodes[k]); k++)
    if (l.tagName)
      switch (l.tagName.toUpperCase()) {
        case "CATEGORY":
          h = w.i.kc(l.getAttribute("name"));
          h = a.Dd.createNode(h);
          h.$d = [];
          c.add(h);
          var m = l.getAttribute("custom");
          m ? (h.$d = m) : (m = wl(a, l, h, e)) && (f = m);
          m = w.i.kc(l.getAttribute("colour"));
          p(m)
            ? ((h.ao = /^#[0-9a-fA-F]{6}$/.test(m) ? m : w.Nr(Number(m))),
              (a.Hr = !0))
            : (h.ao = "");
          "true" == l.getAttribute("expanded")
            ? (h.$d.length && (f = h), h.Sd(!0))
            : h.Sd(!1);
          h = l;
          break;
        case "SEP":
          h &&
            ("CATEGORY" == h.tagName.toUpperCase()
              ? c.add(new xl(a.rt))
              : ((l = parseFloat(l.getAttribute("gap"))),
                !isNaN(l) && h && h.setAttribute("gap", l)));
          break;
        case "BLOCK":
        case "SHADOW":
        case "LABEL":
        case "BUTTON":
          c.$d.push(l), (h = l);
      }
  return f;
}
function Rg(a, b) {
  b = (b || a.Dd).Gf(!1);
  for (var c = 0, e; (e = b[c]); c++) {
    var f = Wk(e);
    if (f) {
      var h = a.Hr ? "8px solid " + (e.ao || "#ddd") : "none";
      a.m.u ? (f.style.borderRight = h) : (f.style.borderLeft = h);
    }
    Rg(a, e);
  }
}
d.Th = function() {
  if (!this.Ec) return null;
  var a = this.Ec.getBoundingClientRect(),
    b = a.left,
    c = a.top,
    e = a.width;
  a = a.height;
  return this.Da == w.xf
    ? new og(-1e7, -1e7, 1e7 + b + e, 2e7)
    : this.Da == w.Xd
    ? new og(b, -1e7, 1e7 + e, 2e7)
    : this.Da == w.yf
    ? new og(-1e7, -1e7, 2e7, 1e7 + c + a)
    : new og(0, c, 2e7, 1e7 + e);
};
function vl(a, b) {
  this.ca = a;
  pl.call(this, Nd, b);
}
v(vl, pl);
vl.prototype.Fb = function() {
  vl.s.Fb.call(this);
  if (Bb) {
    var a = this.F();
    w.O(a, "touchend", this, this.tw);
  }
};
vl.prototype.tw = function(a) {
  var b = ul(this, a);
  b &&
    "touchend" === a.type &&
    setTimeout(function() {
      b.Do(a);
    }, 1);
};
vl.prototype.createNode = function(a) {
  a = a ? Gd(a) : Nd;
  return new yl(this.ca, a, this.Ya, this.qc());
};
vl.prototype.cd = function(a) {
  var b = this.ca;
  if (a != this.tb && a != b.Dd) {
    b.Nj && (Wk(b.Nj).style.backgroundColor = "");
    if (a) {
      var c = a.ao || "#57e";
      Wk(a).style.backgroundColor = c;
      Rg(b, a);
    }
    c = this.ne();
    pl.prototype.cd.call(this, a);
    a && a.$d && a.$d.length
      ? (b.H.show(a.$d), b.Nj != a && b.H.cp())
      : b.H.La();
    c != a &&
      c != this &&
      ((c = new Dc(null, "category", c && Fd(c.Dj), a && Fd(a.Dj))),
      (c.Cc = b.m.id),
      w.j.V(c));
    a && (b.Nj = a);
  }
};
function yl(a, b, c, e) {
  Pk.call(this, b, c, e);
  a &&
    ((b = function() {
      w.oh(a.m);
    }),
    cc(a.Dd, "expand", b),
    cc(a.Dd, "collapse", b));
}
v(yl, fl);
d = yl.prototype;
d.Qn = function() {
  return Ld("span");
};
d.Do = function() {
  Uh(this) && this.Lj
    ? (this.toggle(), this.select())
    : this.Sl()
    ? this.vc().cd(null)
    : this.select();
  Zk(this);
};
d.Bs = function() {};
d.ys = function() {};
d.Fo = function(a) {
  if (this.og.ca.Ld) {
    var b = {};
    b[39] = this.wi ? 38 : 40;
    b[37] = this.wi ? 40 : 38;
    b[38] = 37;
    b[40] = 39;
    a.keyCode = b[a.keyCode] || a.keyCode;
  }
  return yl.s.Fo.call(this, a);
};
function xl(a) {
  yl.call(this, null, Nd, a);
}
v(xl, yl);
w.md = {};
w.md.NB = "";
w.md.nt = null;
w.md.ks = "";
w.md.Pf = function(a, b) {
  if (!w.md.nt) {
    var c = ".blocklyDraggable {}\n";
    a && ((c += w.md.Gt.join("\n")), w.St && (c += w.St.CSS.join("\n")));
    w.md.ks = b.replace(/[\\\/]$/, "");
    c = c.replace(/<<<PATH>>>/g, w.md.ks);
    a = document.createElement("style");
    document.head.insertBefore(a, document.head.firstChild);
    a.appendChild(document.createTextNode(c));
    w.md.nt = a.sheet;
  }
};
w.md.XB = function() {
  console.warn(
    "Deprecated call to Blockly.Css.setCursor.See https://github.com/google/blockly/issues/981 for context"
  );
};
w.md.Gt = [
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
  "touch-action: none",
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
w.I = {};
w.I.ka = null;
w.I.Wj = null;
w.I.Nh = null;
w.I.X = function() {
  w.I.ka ||
    ((w.I.ka = E("DIV", "blocklyWidgetDiv")),
    document.body.appendChild(w.I.ka));
};
w.I.show = function(a, b, c) {
  w.I.La();
  w.I.Wj = a;
  w.I.Nh = c;
  w.I.ka.style.top = Tf().y + "px";
  w.I.ka.style.direction = b ? "rtl" : "ltr";
  w.I.ka.style.display = "block";
};
w.I.La = function() {
  w.I.Wj &&
    ((w.I.Wj = null),
    (w.I.ka.style.display = "none"),
    (w.I.ka.style.left = ""),
    (w.I.ka.style.top = ""),
    w.I.Nh && w.I.Nh(),
    (w.I.Nh = null),
    ce(w.I.ka));
};
w.I.Y = function() {
  return !!w.I.Wj;
};
w.I.Bj = function(a) {
  w.I.Wj == a && w.I.La();
};
w.I.position = function(a, b, c, e, f) {
  b < e.y && (b = e.y);
  f ? a > c.width + e.x && (a = c.width + e.x) : a < e.x && (a = e.x);
  w.I.Ks(a, b, c.height);
};
w.I.Ks = function(a, b, c) {
  w.I.ka.style.left = a + "px";
  w.I.ka.style.top = b + "px";
  w.I.ka.style.height = c + "px";
};
w.I.Oo = function(a, b, c, e) {
  w.I.Ks(w.I.av(a, b, c, e), w.I.bv(a, b, c), c.height);
};
w.I.av = function(a, b, c, e) {
  if (e)
    return (
      (b = Math.max(b.right - c.width, a.left)), Math.min(b, a.right - c.width)
    );
  b = Math.min(b.left, a.right - c.width);
  return Math.max(b, a.left);
};
w.I.bv = function(a, b, c) {
  return b.bottom + c.height >= a.bottom ? b.top - c.height : b.bottom;
};
function zl(a) {
  this.$i = a;
  this.X();
}
d = zl.prototype;
d.ya = null;
d.fe = null;
d.$i = null;
d.fg = 1;
d.mk = null;
d.X = function() {
  this.ya ||
    ((this.ya = w.i.B(
      "svg",
      {
        xmlns: w.Wm,
        "xmlns:html": w.uf,
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        class: "blocklyBlockDragSurface"
      },
      this.$i
    )),
    (this.fe = w.i.B("g", {}, this.ya)));
};
function zf(a, b) {
  a.fe.appendChild(b);
  a.ya.style.display = "block";
  a.mk = new C(0, 0);
}
d.pf = function(a, b) {
  this.mk = new C(a * this.fg, b * this.fg);
  a = this.mk.x;
  b = this.mk.y;
  a = a.toFixed(0);
  b = b.toFixed(0);
  this.ya.style.display = "block";
  w.i.fk(this.ya, "translate3d(" + a + "px, " + b + "px, 0px)");
};
d.El = function() {
  var a = w.i.uc(this.ya);
  return new C(a.x / this.fg, a.y / this.fg);
};
d.tc = function() {
  return this.fe;
};
d.Xi = function(a) {
  a
    ? a.appendChild(this.fe.firstChild)
    : this.fe.removeChild(this.fe.firstChild);
  this.ya.style.display = "none";
  this.mk = null;
};
w.Pf = function(a, b) {
  w.dv();
  p(a) && (a = document.getElementById(a) || document.querySelector(a));
  if (!ee(document, a)) throw "Error: container is not in current document.";
  b = new Wf(b || {});
  var c = E("DIV", "injectionDiv");
  a.appendChild(c);
  a = w.bj(c, b);
  var e = new zl(c);
  c = new vg(c);
  b = w.tv(a, b, e, c);
  w.Cw(b);
  w.Xf = b;
  w.oh(b);
  return b;
};
w.bj = function(a, b) {
  a.setAttribute("dir", "LTR");
  Mh = b.u;
  w.md.Pf(b.vw, b.Pd);
  a = w.i.B(
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
  var c = w.i.B("defs", {}, a),
    e = String(Math.random()).substring(2),
    f = w.i.B("filter", { id: "blocklyEmbossFilter" + e }, c);
  w.i.B(
    "feGaussianBlur",
    { in: "SourceAlpha", stdDeviation: 1, result: "blur" },
    f
  );
  var h = w.i.B(
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
  w.i.B("fePointLight", { x: -5e3, y: -1e4, z: 2e4 }, h);
  w.i.B(
    "feComposite",
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    f
  );
  w.i.B(
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
  b.pr = f.id;
  f = w.i.B(
    "pattern",
    {
      id: "blocklyDisabledPattern" + e,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10
    },
    c
  );
  w.i.B("rect", { width: 10, height: 10, fill: "#aaa" }, f);
  w.i.B("path", { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, f);
  b.hj = f.id;
  f = b.Br;
  c = w.i.B(
    "pattern",
    { id: "blocklyGridPattern" + e, patternUnits: "userSpaceOnUse" },
    c
  );
  0 < f.length && 0 < f.spacing
    ? (w.i.B("line", { stroke: f.colour }, c),
      1 < f.length && w.i.B("line", { stroke: f.colour }, c))
    : w.i.B("line", {}, c);
  b.Cr = c;
  return a;
};
w.tv = function(a, b, c, e) {
  b.Kb = null;
  var f = new Fg(b, c, e);
  f.scale = b.Zb.jt;
  a.appendChild(f.X("blocklyMainBackground"));
  !b.Fr && b.se && ((c = Lg(f, "svg")), w.i.Gj(c, a));
  f.translate(0, 0);
  w.Xf = f;
  b.readOnly ||
    b.Ir ||
    f.Sc(function() {
      if (!f.pb()) {
        var a = f.rb(),
          c = a.Ab + a.lb,
          e = a.Fe + a.wb;
        if (
          a.oc < e ||
          a.oc + a.nc > a.bb + e ||
          a.Gc < (b.u ? a.Ab : c) ||
          a.Gc + a.Hc > (b.u ? a.xa : a.xa + c)
        )
          for (var m = ad(f, !1), n = 0, q; (q = m[n]); n++) {
            var t = q.la(),
              y = q.Gb(),
              x = e + 25 - y.height - t.y;
            0 < x && q.moveBy(0, x);
            x = e + a.bb - 25 - t.y;
            0 > x && q.moveBy(0, x);
            x = 25 + c - t.x - (b.u ? 0 : y.width);
            0 < x && q.moveBy(x, 0);
            t = c + a.xa - 25 - t.x + (b.u ? y.width : 0);
            0 > t && q.moveBy(t, 0);
          }
      }
    });
  w.oh(f);
  w.I.X();
  w.C.X();
  return f;
};
w.Cw = function(a) {
  var b = a.options,
    c = K(a);
  w.O(c.parentNode, "contextmenu", null, function(a) {
    w.i.Tl(a) || a.preventDefault();
  });
  c = w.O(window, "resize", null, function() {
    w.Pb(!0);
    w.oh(a);
  });
  a.rm = c;
  w.Pf.Vu();
  b.se &&
    (a.ca
      ? a.ca.N(a)
      : a.H &&
        (a.H.N(a),
        a.H.show(b.se.childNodes),
        a.H.cp(),
        (a.scrollX = a.H.ia),
        b.Da == w.Xd && (a.scrollX *= -1),
        a.translate(a.scrollX, 0)));
  b.Ir && ((a.hb = new Yf(a)), a.hb.resize());
  b.ww && w.Pf.Pw(b.Pd, a);
};
w.Pf.Vu = function() {
  w.Ov ||
    (w.O(document, "keydown", null, w.lx),
    w.Fc(document, "touchend", null, w.Wf),
    w.Fc(document, "touchcancel", null, w.Wf),
    pb &&
      w.O(window, "orientationchange", document, function() {
        w.oh(w.Xh());
      }));
  w.Ov = !0;
};
w.Pf.Pw = function(a, b) {
  function c() {
    for (; f.length; ) w.Na(f.pop());
    e.preload();
  }
  var e = b.Zd;
  e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
  e.load(
    [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"],
    "disconnect"
  );
  e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
  var f = [];
  f.push(w.O(document, "mousemove", null, c, !0));
  f.push(w.O(document, "touchstart", null, c, !0));
};
w.tt = function(a) {
  console.warn(
    "Deprecated call to Blockly.updateToolbox, use workspace.updateToolbox instead."
  );
  w.Xh().tt(a);
};
w.Xf = null;
w.selected = null;
w.jl = [];
w.Yi = null;
w.Uk = null;
w.KB = null;
w.Nr = function(a) {
  var b = w.Wt,
    c = 255 * w.Xt,
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
  return jj([Math.floor(e), Math.floor(f), Math.floor(h)]);
};
w.ot = function(a) {
  return { width: a.lq, height: a.jq };
};
w.WB = function(a) {
  yf(a);
};
w.oh = function(a) {
  for (; a.options.Kb; ) a = a.options.Kb;
  var b = K(a),
    c = b.parentNode;
  if (c) {
    var e = c.offsetWidth;
    c = c.offsetHeight;
    b.lq != e && (b.setAttribute("width", e + "px"), (b.lq = e));
    b.jq != c && (b.setAttribute("height", c + "px"), (b.jq = c));
    a.resize();
  }
};
w.lx = function(a) {
  if (!w.Xf.options.readOnly && !w.i.Tl(a)) {
    var b = !1;
    if (27 == a.keyCode) w.Pb();
    else if (8 == a.keyCode || 46 == a.keyCode) {
      a.preventDefault();
      if (w.Xf.pb()) return;
      w.selected && w.selected.gc() && (b = !0);
    } else if (a.altKey || a.ctrlKey || a.metaKey) {
      if (w.Xf.pb()) return;
      w.selected &&
        w.selected.gc() &&
        w.selected.re() &&
        (67 == a.keyCode
          ? (w.Pb(), w.sn(w.selected))
          : 88 != a.keyCode || w.selected.o.Nd || (w.sn(w.selected), (b = !0)));
      86 == a.keyCode
        ? w.Yi && (w.j.S(!0), (a = w.Uk), a.Nd && (a = a.ph), Og(a), w.j.S(!1))
        : 90 == a.keyCode && (w.Pb(), w.Xf.Gp(a.shiftKey));
    }
    b &&
      !w.selected.o.Nd &&
      (w.j.S(!0), w.Pb(), w.selected.A(!0, !0), w.j.S(!1));
  }
};
w.sn = function(a) {
  if (a.Rr) var b = a.rk();
  else {
    b = w.D.Af(a);
    w.D.Jv(b);
    var c = a.la();
    b.setAttribute("x", a.u ? -c.x : c.x);
    b.setAttribute("y", c.y);
  }
  w.Yi = b;
  w.Uk = a.o;
};
w.mr = function(a) {
  var b = w.Yi,
    c = w.Uk;
  w.sn(a);
  Og(a.o);
  w.Yi = b;
  w.Uk = c;
};
w.VB = function(a) {
  w.i.Tl(a) || a.preventDefault();
};
w.Pb = function(a) {
  w.C.La();
  w.I.La();
  a || ((a = w.Xh()), a.ca && a.ca.H && a.ca.H.Kh && a.ca.Dd.cd(null));
};
w.Sc = function(a) {
  console.warn(
    "Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead."
  );
  return w.Xh().Sc(a);
};
w.Xh = function() {
  return w.Xf;
};
w.alert = function(a, b) {
  window.alert(a);
  b && b();
};
w.confirm = function(a, b) {
  b(window.confirm(a));
};
w.prompt = function(a, b, c) {
  c(window.prompt(a, b));
};
w.Iw = function(a) {
  return function() {
    Eh(this, a);
  };
};
w.Bg = function(a) {
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
        : (w.J[e] &&
            console.warn(
              "Block definition #" +
                b +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (w.J[e] = { N: w.Iw(c) }));
    } else
      console.warn(
        "Block definition #" + b + " in JSON array is " + c + ". Skipping."
      );
  }
};
w.O = function(a, b, c, e, f, h) {
  function k(a) {
    var b = !f;
    a = w.Touch.Lx(a);
    for (var h = 0, k; (k = a[h]); h++)
      if (!b || w.Touch.tp(k)) w.Touch.Ix(k), c ? e.call(c, k) : e(k), (l = !0);
  }
  var l = !1,
    m = [];
  if (g.PointerEvent && b in w.Touch.Yd)
    for (var n = 0, q; (q = w.Touch.Yd[b][n]); n++)
      a.addEventListener(q, k, !1), m.push([a, q, k]);
  else if ((a.addEventListener(b, k, !1), m.push([a, b, k]), b in w.Touch.Yd)) {
    var t = function(a) {
      k(a);
      var b = !h;
      l && b && a.preventDefault();
    };
    for (n = 0; (q = w.Touch.Yd[b][n]); n++)
      a.addEventListener(q, t, !1), m.push([a, q, t]);
  }
  return m;
};
w.Fc = function(a, b, c, e) {
  function f(a) {
    c ? e.call(c, a) : e(a);
  }
  var h = [],
    k = g.window;
  if (k && k.PointerEvent && b in w.Touch.Yd) {
    k = 0;
    for (var l; (l = w.Touch.Yd[b][k]); k++)
      a.addEventListener(l, f, !1), h.push([a, l, f]);
  } else if (
    (a.addEventListener(b, f, !1), h.push([a, b, f]), b in w.Touch.Yd)
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
    for (k = 0; (l = w.Touch.Yd[b][k]); k++)
      a.addEventListener(l, m, !1), h.push([a, l, m]);
  }
  return h;
};
w.Na = function(a) {
  for (; a.length; ) {
    var b = a.pop();
    b[0].removeEventListener(b[1], b[2], !1);
  }
};
w.Sf = function(a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
w.dv = function() {
  w.bc("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  w.bc("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  w.bc("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  w.bc("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  w.bc("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  w.bc("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  w.bc("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  w.bc("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  w.bc("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  w.bc("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  w.bc("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  w.bc("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  w.bc("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  w.bc("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  w.bc("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  w.bc("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
w.bc = function(a, b, c) {
  for (var e = "Blockly", f = w, h = 0; h < b.length; ++h)
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
g.Blockly.getMainWorkspace = w.Xh;
g.Blockly.addChangeListener = w.Sc;
function Al(a, b) {
  var c = a.className;
  c = (p(c) && c.match(/\S+/g)) || [];
  for (var e = Da(arguments, 1), f = 0; f < e.length; f++)
    xa(c, e[f]) || c.push(e[f]);
  c = c.join(" ");
  a.className = c;
}
var Bl = {
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
  Cl = "ace ar fa he mzn ps".split(" "),
  Dl = window.BlocklyGamesLang,
  El = window.BlocklyGamesLanguages,
  Fl = !!window.location.pathname.match(/\.html$/),
  uk = null,
  S,
  Gl = Number,
  Hl,
  Il = window.location.search.match(/[?&]level=([^&]+)/);
Hl = Il ? decodeURIComponent(Il[1].replace(/\+/g, "%20")) : "NaN";
var Jl = Gl(Hl);
S = isNaN(Jl) ? 1 : Math.min(Math.max(1, Jl), 10);
function Kl() {
  document.title = document.getElementById("title").textContent;
  document.dir = -1 != Cl.indexOf(Dl) ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", Dl);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var b = [], c = 0; c < El.length; c++) {
      var e = El[c];
      b.push([Bl[e], e]);
    }
    b.sort(function(a, b) {
      return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
    });
    for (c = a.options.length = 0; c < b.length; c++) {
      var f = b[c];
      e = f[1];
      f = new Option(f[0], e);
      e == Dl && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (c = 1; 10 >= c; c++)
    (a = document.getElementById("level" + c)),
      (b = !!Ll(c)),
      a && b && Al(a, "level_done");
  (c = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(Ml, 1);
}
function Ll(a) {
  var b = Nl;
  try {
    var c = window.localStorage[b + a];
  } catch (e) {}
  return c;
}
function T(a) {
  var b;
  (b = document.getElementById(a))
    ? ((b = b.textContent), (b = b.replace(/\\n/g, "\n")))
    : (b = null);
  return null === b ? "[Unknown message: " + a + "]" : b;
}
function Ol(a, b) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", b, !0);
  a.addEventListener("touchend", b, !0);
}
function Ml() {
  if (!Fl) {
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
w.g.QB = {};
w.g.ADD_COMMENT = "A\u00f1adir comentario";
w.g.CANNOT_DELETE_VARIABLE_PROCEDURE =
  'No se puede eliminar la variable "%1" porque es parte de la definici\u00f3n de la funci\u00f3n "%2"';
w.g.CHANGE_VALUE_TITLE = "Cambiar el valor:";
w.g.CLEAN_UP = "Limpiar los bloques";
w.g.COLLAPSE_ALL = "Contraer bloques";
w.g.COLLAPSE_BLOCK = "Contraer bloque";
w.g.COLOUR_BLEND_COLOUR1 = "color 1";
w.g.COLOUR_BLEND_COLOUR2 = "color 2";
w.g.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";
w.g.COLOUR_BLEND_RATIO = "proporci\u00f3n";
w.g.COLOUR_BLEND_TITLE = "combinar";
w.g.COLOUR_BLEND_TOOLTIP =
  "Combina dos colores con una proporci\u00f3n determinada (0,0\u20131,0).";
w.g.COLOUR_PICKER_HELPURL = "https://es.wikipedia.org/wiki/Color";
w.g.COLOUR_PICKER_TOOLTIP = "Elige un color de la paleta.";
w.g.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
w.g.COLOUR_RANDOM_TITLE = "color aleatorio";
w.g.COLOUR_RANDOM_TOOLTIP = "Elige un color al azar.";
w.g.COLOUR_RGB_BLUE = "azul";
w.g.COLOUR_RGB_GREEN = "verde";
w.g.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";
w.g.COLOUR_RGB_RED = "rojo";
w.g.COLOUR_RGB_TITLE = "colorear con";
w.g.COLOUR_RGB_TOOLTIP =
  "Crea un color con cantidades espec\u00edficas de rojo, verde y azul. Todos los valores deben encontrarse entre 0 y 100.";
w.g.CONTROLS_FLOW_STATEMENTS_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
w.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "romper el bucle";
w.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE =
  "continuar con la siguiente iteraci\u00f3n del bucle";
w.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Romper el bucle que lo contiene.";
w.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE =
  "Saltar el resto de este bucle, y continuar con la siguiente iteraci\u00f3n.";
w.g.CONTROLS_FLOW_STATEMENTS_WARNING =
  "Atenci\u00f3n: este bloque puede usarse solamente dentro de un bucle.";
w.g.CONTROLS_FOREACH_HELPURL = "https://es.wikipedia.org/wiki/Foreach";
w.g.CONTROLS_FOREACH_TITLE = "para cada elemento %1 en la lista %2";
w.g.CONTROLS_FOREACH_TOOLTIP =
  "Para cada elemento en una lista, establecer la variable '%1' al elemento y luego hacer algunas declaraciones.";
w.g.CONTROLS_FOR_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#count-with";
w.g.CONTROLS_FOR_TITLE = "contar con %1 desde %2 hasta %3 de a %4";
w.g.CONTROLS_FOR_TOOLTIP =
  'Hacer que la variable "%1" tome los valores desde el n\u00famero de inicio hasta el n\u00famero final, contando con el intervalo especificado, y hacer los bloques especificados.';
w.g.CONTROLS_IF_ELSEIF_TOOLTIP = "Agregar una condici\u00f3n a este bloque.";
w.g.CONTROLS_IF_ELSE_TOOLTIP =
  "Agregar una condici\u00f3n general final a este bloque.";
w.g.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
w.g.CONTROLS_IF_IF_TOOLTIP =
  "Agregar, eliminar o reordenar las secciones para reconfigurar este bloque.";
w.g.CONTROLS_IF_MSG_ELSE = "sino";
w.g.CONTROLS_IF_MSG_ELSEIF = "sino si";
w.g.CONTROLS_IF_MSG_IF = "si";
w.g.CONTROLS_IF_TOOLTIP_1 =
  "Si un valor es verdadero, entonces hacer algunas declaraciones.";
w.g.CONTROLS_IF_TOOLTIP_2 =
  "Si un valor es verdadero, entonces hacer el primer bloque de declaraciones.  De lo contrario, hacer el segundo bloque de declaraciones.";
w.g.CONTROLS_IF_TOOLTIP_3 =
  "Si el primer valor es verdadero, entonces hacer el primer bloque de declaraciones. De lo contrario, si el segundo valor es verdadero, hacer el segundo bloque de declaraciones.";
w.g.CONTROLS_IF_TOOLTIP_4 =
  "Si el primer valor es verdadero, entonces hacer el primer bloque de declaraciones. De lo contrario, si el segundo valor es verdadero, hacer el segundo bloque de declaraciones. Si ninguno de los valores son verdaderos, hacer el \u00faltimo bloque de declaraciones.";
w.g.CONTROLS_REPEAT_HELPURL = "https://es.wikipedia.org/wiki/Bucle_for";
w.g.CONTROLS_REPEAT_INPUT_DO = "hacer";
w.g.CONTROLS_REPEAT_TITLE = "repetir %1 veces";
w.g.CONTROLS_REPEAT_TOOLTIP = "Hacer algunas declaraciones varias veces.";
w.g.CONTROLS_WHILEUNTIL_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#repeat";
w.g.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repetir hasta";
w.g.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repetir mientras";
w.g.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL =
  "Mientras un valor sea falso, entonces hacer algunas declaraciones.";
w.g.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE =
  "Mientras un valor sea verdadero, entonces hacer algunas declaraciones.";
w.g.DELETE_ALL_BLOCKS = "\u00bfEliminar todos los %1 bloques?";
w.g.DELETE_BLOCK = "Eliminar bloque";
w.g.DELETE_VARIABLE = 'Borrar la variable "%1"';
w.g.DELETE_VARIABLE_CONFIRMATION = '\u00bfBorrar %1 usos de la variable "%2"?';
w.g.DELETE_X_BLOCKS = "Eliminar %1 bloques";
w.g.DISABLE_BLOCK = "Desactivar bloque";
w.g.DUPLICATE_BLOCK = "Duplicar";
w.g.DUPLICATE_COMMENT = "Duplicar comentario";
w.g.ENABLE_BLOCK = "Activar bloque";
w.g.EXPAND_ALL = "Expandir bloques";
w.g.EXPAND_BLOCK = "Expandir bloque";
w.g.EXTERNAL_INPUTS = "Entradas externas";
w.g.HELP = "Ayuda";
w.g.INLINE_INPUTS = "Entradas en l\u00ednea";
w.g.IOS_CANCEL = "Cancelar";
w.g.IOS_ERROR = "Error";
w.g.IOS_OK = "Aceptar";
w.g.IOS_PROCEDURES_ADD_INPUT = "+ A\u00f1adir entrada";
w.g.IOS_PROCEDURES_ALLOW_STATEMENTS = "Permitir declaraciones";
w.g.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR =
  "Esta funci\u00f3n tiene entradas duplicadas.";
w.g.IOS_PROCEDURES_INPUTS = "ENTRADAS";
w.g.IOS_VARIABLES_ADD_BUTTON = "A\u00f1adir";
w.g.IOS_VARIABLES_ADD_VARIABLE = "+ A\u00f1adir variable";
w.g.IOS_VARIABLES_DELETE_BUTTON = "Borrar";
w.g.IOS_VARIABLES_EMPTY_NAME_ERROR =
  "No puedes usar un nombre de variable vac\u00edo.";
w.g.IOS_VARIABLES_RENAME_BUTTON = "Renombrar";
w.g.IOS_VARIABLES_VARIABLE_NAME = "Nombre de la variable";
w.g.LISTS_CREATE_EMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-empty-list";
w.g.LISTS_CREATE_EMPTY_TITLE = "crear lista vac\u00eda";
w.g.LISTS_CREATE_EMPTY_TOOLTIP =
  "Devuelve una lista, de longitud 0, sin ning\u00fan dato";
w.g.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "lista";
w.g.LISTS_CREATE_WITH_CONTAINER_TOOLTIP =
  "Agregar, eliminar o reorganizar las secciones para reconfigurar este bloque de lista.";
w.g.LISTS_CREATE_WITH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
w.g.LISTS_CREATE_WITH_INPUT_WITH = "crear lista con";
w.g.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Agregar un elemento a la lista.";
w.g.LISTS_CREATE_WITH_TOOLTIP =
  "Crear una lista con cualquier n\u00famero de elementos.";
w.g.LISTS_GET_INDEX_FIRST = "primero";
w.g.LISTS_GET_INDEX_FROM_END = "# del final";
w.g.LISTS_GET_INDEX_FROM_START = "#";
w.g.LISTS_GET_INDEX_GET = "obtener";
w.g.LISTS_GET_INDEX_GET_REMOVE = "obtener y eliminar";
w.g.LISTS_GET_INDEX_LAST = "\u00faltimo";
w.g.LISTS_GET_INDEX_RANDOM = "aleatorio";
w.g.LISTS_GET_INDEX_REMOVE = "eliminar";
w.g.LISTS_GET_INDEX_TAIL = "";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_FIRST =
  "Devuelve el primer elemento de una lista.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM =
  "Devuelve el elemento en la posici\u00f3n especificada en una lista.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_LAST =
  "Devuelve el \u00faltimo elemento de una lista.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM =
  "Devuelve un elemento aleatorio en una lista.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST =
  "Elimina y devuelve el primer elemento de una lista.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM =
  "Elimina y devuelve el elemento en la posici\u00f3n especificada en una lista.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST =
  "Elimina y devuelve el \u00faltimo elemento de una lista.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM =
  "Elimina y devuelve un elemento aleatorio en una lista.";
w.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST =
  "Elimina el primer elemento de una lista.";
w.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM =
  "Elimina el elemento en la posici\u00f3n especificada en una lista.";
w.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST =
  "Elimina el \u00faltimo elemento de una lista.";
w.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM =
  "Elimina un elemento aleatorio en una lista.";
w.g.LISTS_GET_SUBLIST_END_FROM_END = "hasta # del final";
w.g.LISTS_GET_SUBLIST_END_FROM_START = "hasta #";
w.g.LISTS_GET_SUBLIST_END_LAST = "hasta el \u00faltimo";
w.g.LISTS_GET_SUBLIST_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
w.g.LISTS_GET_SUBLIST_START_FIRST = "obtener sublista desde el primero";
w.g.LISTS_GET_SUBLIST_START_FROM_END = "obtener sublista desde # del final";
w.g.LISTS_GET_SUBLIST_START_FROM_START = "obtener sublista desde #";
w.g.LISTS_GET_SUBLIST_TAIL = "";
w.g.LISTS_GET_SUBLIST_TOOLTIP =
  "Crea una copia de la parte especificada de una lista.";
w.g.LISTS_INDEX_FROM_END_TOOLTIP = "%1 es el \u00faltimo elemento.";
w.g.LISTS_INDEX_FROM_START_TOOLTIP = "%1 es el primer elemento.";
w.g.LISTS_INDEX_OF_FIRST = "encontrar la primera aparici\u00f3n del elemento";
w.g.LISTS_INDEX_OF_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
w.g.LISTS_INDEX_OF_LAST =
  "encontrar la \u00faltima aparici\u00f3n del elemento";
w.g.LISTS_INDEX_OF_TOOLTIP =
  "Devuelve el \u00edndice de la primera/\u00faltima aparici\u00f3n del elemento en la lista. Devuelve %1 si el elemento no se encuentra.";
w.g.LISTS_INLIST = "en la lista";
w.g.LISTS_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#is-empty";
w.g.LISTS_ISEMPTY_TITLE = "%1 est\u00e1 vac\u00eda";
w.g.LISTS_ISEMPTY_TOOLTIP =
  "Devuelve verdadero si la lista est\u00e1 vac\u00eda.";
w.g.LISTS_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#length-of";
w.g.LISTS_LENGTH_TITLE = "longitud de %1";
w.g.LISTS_LENGTH_TOOLTIP = "Devuelve la longitud de una lista.";
w.g.LISTS_REPEAT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
w.g.LISTS_REPEAT_TITLE = "crear lista con el elemento %1 repetido %2 veces";
w.g.LISTS_REPEAT_TOOLTIP =
  "Crea una lista que consta de un valor dado repetido el n\u00famero de veces especificado.";
w.g.LISTS_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
w.g.LISTS_REVERSE_MESSAGE0 = "invertir %1";
w.g.LISTS_REVERSE_TOOLTIP = "Invertir una copia de una lista.";
w.g.LISTS_SET_INDEX_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#in-list--set";
w.g.LISTS_SET_INDEX_INPUT_TO = "como";
w.g.LISTS_SET_INDEX_INSERT = "insertar en";
w.g.LISTS_SET_INDEX_SET = "establecer";
w.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST =
  "Inserta el elemento al inicio de una lista.";
w.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM =
  "Inserta el elemento en la posici\u00f3n especificada en una lista.";
w.g.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST =
  "A\u00f1ade el elemento al final de una lista.";
w.g.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM =
  "Inserta el elemento aleatoriamente en una lista.";
w.g.LISTS_SET_INDEX_TOOLTIP_SET_FIRST =
  "Establece el primer elemento de una lista.";
w.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM =
  "Establece el elemento en la posici\u00f3n especificada en una lista.";
w.g.LISTS_SET_INDEX_TOOLTIP_SET_LAST =
  "Establece el \u00faltimo elemento de una lista.";
w.g.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM =
  "Establece un elemento aleatorio en una lista.";
w.g.LISTS_SORT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
w.g.LISTS_SORT_ORDER_ASCENDING = "ascendente";
w.g.LISTS_SORT_ORDER_DESCENDING = "descendente";
w.g.LISTS_SORT_TITLE = "orden %1 %2 %3";
w.g.LISTS_SORT_TOOLTIP = "Ordenar una copia de una lista.";
w.g.LISTS_SORT_TYPE_IGNORECASE =
  "alfab\u00e9tico, ignorar may\u00fascula/min\u00fascula";
w.g.LISTS_SORT_TYPE_NUMERIC = "num\u00e9rico";
w.g.LISTS_SORT_TYPE_TEXT = "alfab\u00e9tico";
w.g.LISTS_SPLIT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
w.g.LISTS_SPLIT_LIST_FROM_TEXT = "hacer lista a partir de texto";
w.g.LISTS_SPLIT_TEXT_FROM_LIST = "hacer texto a partir de lista";
w.g.LISTS_SPLIT_TOOLTIP_JOIN =
  "Unir una lista de textos en un solo texto, separado por un delimitador.";
w.g.LISTS_SPLIT_TOOLTIP_SPLIT =
  "Dividir el texto en una lista de textos, separando en cada delimitador.";
w.g.LISTS_SPLIT_WITH_DELIMITER = "con delimitador";
w.g.LOGIC_BOOLEAN_FALSE = "falso";
w.g.LOGIC_BOOLEAN_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#values";
w.g.LOGIC_BOOLEAN_TOOLTIP = "Devuelve verdadero o falso.";
w.g.LOGIC_BOOLEAN_TRUE = "verdadero";
w.g.LOGIC_COMPARE_HELPURL =
  "https://es.wikipedia.org/wiki/Desigualdad_matem\u00e1tica";
w.g.LOGIC_COMPARE_TOOLTIP_EQ =
  "Devuelve verdadero si ambas entradas son iguales.";
w.g.LOGIC_COMPARE_TOOLTIP_GT =
  "Devuelve verdadero si la primera entrada es mayor que la segunda entrada.";
w.g.LOGIC_COMPARE_TOOLTIP_GTE =
  "Devuelve verdadero si la primera entrada es mayor o igual a la segunda entrada.";
w.g.LOGIC_COMPARE_TOOLTIP_LT =
  "Devuelve verdadero si la primera entrada es menor que la segunda entrada.";
w.g.LOGIC_COMPARE_TOOLTIP_LTE =
  "Devuelve verdadero si la primera entrada es menor que o igual a la segunda entrada.";
w.g.LOGIC_COMPARE_TOOLTIP_NEQ =
  "Devuelve verdadero si ambas entradas son distintas.";
w.g.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
w.g.LOGIC_NEGATE_TITLE = "no %1";
w.g.LOGIC_NEGATE_TOOLTIP =
  "Devuelve verdadero si la entrada es falsa. Devuelve falso si la entrada es verdadera.";
w.g.LOGIC_NULL = "nulo";
w.g.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
w.g.LOGIC_NULL_TOOLTIP = "Devuelve nulo.";
w.g.LOGIC_OPERATION_AND = "y";
w.g.LOGIC_OPERATION_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#logical-operations";
w.g.LOGIC_OPERATION_OR = "o";
w.g.LOGIC_OPERATION_TOOLTIP_AND =
  "Devuelve verdadero si ambas entradas son verdaderas.";
w.g.LOGIC_OPERATION_TOOLTIP_OR =
  "Devuelve verdadero si al menos una de las entradas es verdadera.";
w.g.LOGIC_TERNARY_CONDITION = "prueba";
w.g.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
w.g.LOGIC_TERNARY_IF_FALSE = "si es falso";
w.g.LOGIC_TERNARY_IF_TRUE = "si es verdadero";
w.g.LOGIC_TERNARY_TOOLTIP =
  'Comprueba la condici\u00f3n en "prueba". Si la condici\u00f3n es verdadera, devuelve el valor "si es verdadero"; de lo contrario, devuelve el valor "si es falso".';
w.g.MATH_ADDITION_SYMBOL = "+";
w.g.MATH_ARITHMETIC_HELPURL = "https://es.wikipedia.org/wiki/Aritm\u00e9tica";
w.g.MATH_ARITHMETIC_TOOLTIP_ADD = "Devuelve la suma de ambos n\u00fameros.";
w.g.MATH_ARITHMETIC_TOOLTIP_DIVIDE =
  "Devuelve el cociente de ambos n\u00fameros.";
w.g.MATH_ARITHMETIC_TOOLTIP_MINUS =
  "Devuelve la diferencia de ambos n\u00fameros.";
w.g.MATH_ARITHMETIC_TOOLTIP_MULTIPLY =
  "Devuelve el producto de ambos n\u00fameros.";
w.g.MATH_ARITHMETIC_TOOLTIP_POWER =
  "Devuelve el primer n\u00famero elevado a la potencia del segundo.";
w.g.MATH_CHANGE_HELPURL =
  "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
w.g.MATH_CHANGE_TITLE = "a\u00f1adir %2 a %1";
w.g.MATH_CHANGE_TOOLTIP =
  "A\u00f1adir un n\u00famero a la variable \u00ab%1\u00bb.";
w.g.MATH_CONSTANT_HELPURL =
  "https://es.wikipedia.org/wiki/Anexo:Constantes_matem\u00e1ticas";
w.g.MATH_CONSTANT_TOOLTIP =
  "Devuelve una de las constantes comunes: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026) o \u221e (infinito).";
w.g.MATH_CONSTRAIN_HELPURL =
  "https://en.wikipedia.org/wiki/Clamping_(graphics)";
w.g.MATH_CONSTRAIN_TITLE = "limitar %1 entre %2 y %3";
w.g.MATH_CONSTRAIN_TOOLTIP =
  "Limitar un n\u00famero entre los l\u00edmites especificados (inclusive).";
w.g.MATH_DIVISION_SYMBOL = "\u00f7";
w.g.MATH_IS_DIVISIBLE_BY = "es divisible por";
w.g.MATH_IS_EVEN = "es par";
w.g.MATH_IS_NEGATIVE = "es negativo";
w.g.MATH_IS_ODD = "es impar";
w.g.MATH_IS_POSITIVE = "es positivo";
w.g.MATH_IS_PRIME = "es primo";
w.g.MATH_IS_TOOLTIP =
  "Comprueba si un n\u00famero es par, impar, primo, entero, positivo, negativo, o si es divisible por un n\u00famero determinado. Devuelve verdadero o falso.";
w.g.MATH_IS_WHOLE = "es entero";
w.g.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
w.g.MATH_MODULO_TITLE = "resto de %1 \u00f7 %2";
w.g.MATH_MODULO_TOOLTIP = "Devuelve el resto al dividir los dos n\u00fameros.";
w.g.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
w.g.MATH_NUMBER_HELPURL = "https://es.wikipedia.org/wiki/N\u00famero";
w.g.MATH_NUMBER_TOOLTIP = "Un n\u00famero.";
w.g.MATH_ONLIST_HELPURL = "";
w.g.MATH_ONLIST_OPERATOR_AVERAGE = "promedio de la lista";
w.g.MATH_ONLIST_OPERATOR_MAX = "m\u00e1ximo de la lista";
w.g.MATH_ONLIST_OPERATOR_MEDIAN = "mediana de la lista";
w.g.MATH_ONLIST_OPERATOR_MIN = "m\u00ednimo de la lista";
w.g.MATH_ONLIST_OPERATOR_MODE = "modas de la lista";
w.g.MATH_ONLIST_OPERATOR_RANDOM = "elemento aleatorio de la lista";
w.g.MATH_ONLIST_OPERATOR_STD_DEV = "desviaci\u00f3n est\u00e1ndar de la lista";
w.g.MATH_ONLIST_OPERATOR_SUM = "suma de la lista";
w.g.MATH_ONLIST_TOOLTIP_AVERAGE =
  "Devuelve el promedio (media aritm\u00e9tica) de los valores num\u00e9ricos en la lista.";
w.g.MATH_ONLIST_TOOLTIP_MAX =
  "Devuelve el n\u00famero m\u00e1s grande en la lista.";
w.g.MATH_ONLIST_TOOLTIP_MEDIAN = "Devuelve la mediana en la lista.";
w.g.MATH_ONLIST_TOOLTIP_MIN =
  "Devuelve el n\u00famero m\u00e1s peque\u00f1o en la lista.";
w.g.MATH_ONLIST_TOOLTIP_MODE =
  "Devuelve una lista de los elementos m\u00e1s comunes en la lista.";
w.g.MATH_ONLIST_TOOLTIP_RANDOM = "Devuelve un elemento aleatorio de la lista.";
w.g.MATH_ONLIST_TOOLTIP_STD_DEV =
  "Devuelve la desviaci\u00f3n est\u00e1ndar de la lista.";
w.g.MATH_ONLIST_TOOLTIP_SUM =
  "Devuelve la suma de todos los n\u00fameros en la lista.";
w.g.MATH_POWER_SYMBOL = "^";
w.g.MATH_RANDOM_FLOAT_HELPURL =
  "https://es.wikipedia.org/wiki/Generador_de_n\u00fameros_aleatorios";
w.g.MATH_RANDOM_FLOAT_TITLE_RANDOM = "fracci\u00f3n aleatoria";
w.g.MATH_RANDOM_FLOAT_TOOLTIP =
  "Devuelve una fracci\u00f3n aleatoria entre 0,0 (ambos inclusive) y 1.0 (exclusivo).";
w.g.MATH_RANDOM_INT_HELPURL =
  "https://es.wikipedia.org/wiki/Generador_de_n\u00fameros_aleatorios";
w.g.MATH_RANDOM_INT_TITLE = "entero aleatorio de %1 a %2";
w.g.MATH_RANDOM_INT_TOOLTIP =
  "Devuelve un entero aleatorio entre los dos l\u00edmites especificados, inclusive.";
w.g.MATH_ROUND_HELPURL = "https://es.wikipedia.org/wiki/Redondeo";
w.g.MATH_ROUND_OPERATOR_ROUND = "redondear";
w.g.MATH_ROUND_OPERATOR_ROUNDDOWN = "redondear a la baja";
w.g.MATH_ROUND_OPERATOR_ROUNDUP = "redondear al alza";
w.g.MATH_ROUND_TOOLTIP = "Redondear un n\u00famero al alza o a la baja.";
w.g.MATH_SINGLE_HELPURL = "https://es.wikipedia.org/wiki/Ra%C3%ADz_cuadrada";
w.g.MATH_SINGLE_OP_ABSOLUTE = "absoluto";
w.g.MATH_SINGLE_OP_ROOT = "ra\u00edz cuadrada";
w.g.MATH_SINGLE_TOOLTIP_ABS = "Devuelve el valor absoluto de un n\u00famero.";
w.g.MATH_SINGLE_TOOLTIP_EXP = "Devuelve e a la potencia de un n\u00famero.";
w.g.MATH_SINGLE_TOOLTIP_LN = "Devuelve el logaritmo natural de un n\u00famero.";
w.g.MATH_SINGLE_TOOLTIP_LOG10 =
  "Devuelve el logaritmo base 10 de un n\u00famero.";
w.g.MATH_SINGLE_TOOLTIP_NEG = "Devuelve la negaci\u00f3n de un n\u00famero.";
w.g.MATH_SINGLE_TOOLTIP_POW10 = "Devuelve 10 a la potencia de un n\u00famero.";
w.g.MATH_SINGLE_TOOLTIP_ROOT =
  "Devuelve la ra\u00edz cuadrada de un n\u00famero.";
w.g.MATH_SUBTRACTION_SYMBOL = "-";
w.g.MATH_TRIG_ACOS = "acos";
w.g.MATH_TRIG_ASIN = "asin";
w.g.MATH_TRIG_ATAN = "atan";
w.g.MATH_TRIG_COS = "cos";
w.g.MATH_TRIG_HELPURL =
  "https://es.wikipedia.org/wiki/Funci\u00f3n_trigonom\u00e9trica";
w.g.MATH_TRIG_SIN = "sin";
w.g.MATH_TRIG_TAN = "tan";
w.g.MATH_TRIG_TOOLTIP_ACOS = "Devuelve el arcocoseno de un n\u00famero.";
w.g.MATH_TRIG_TOOLTIP_ASIN = "Devuelve el arcoseno de un n\u00famero.";
w.g.MATH_TRIG_TOOLTIP_ATAN = "Devuelve el arcotangente de un n\u00famero.";
w.g.MATH_TRIG_TOOLTIP_COS = "Devuelve el coseno de un grado (no radi\u00e1n).";
w.g.MATH_TRIG_TOOLTIP_SIN = "Devuelve el seno de un grado (no radi\u00e1n).";
w.g.MATH_TRIG_TOOLTIP_TAN =
  "Devuelve la tangente de un grado (no radi\u00e1n).";
w.g.NEW_COLOUR_VARIABLE = "Create colour variable...";
w.g.NEW_NUMBER_VARIABLE = "Create number variable...";
w.g.NEW_STRING_VARIABLE = "Create string variable...";
w.g.NEW_VARIABLE = "Crear variable\u2026";
w.g.NEW_VARIABLE_TITLE = "Nombre de variable nueva:";
w.g.NEW_VARIABLE_TYPE_TITLE = "New variable type:";
w.g.ORDINAL_NUMBER_SUFFIX = "";
w.g.PROCEDURES_ALLOW_STATEMENTS = "permitir declaraciones";
w.g.PROCEDURES_BEFORE_PARAMS = "con:";
w.g.PROCEDURES_CALLNORETURN_HELPURL = "https://es.wikipedia.org/wiki/Subrutina";
w.g.PROCEDURES_CALLNORETURN_TOOLTIP =
  "Ejecuta la funci\u00f3n definida por el usuario '%1'.";
w.g.PROCEDURES_CALLRETURN_HELPURL = "https://es.wikipedia.org/wiki/Subrutina";
w.g.PROCEDURES_CALLRETURN_TOOLTIP =
  "Ejecuta la funci\u00f3n definida por el usuario '%1' y usa su salida.";
w.g.PROCEDURES_CALL_BEFORE_PARAMS = "con:";
w.g.PROCEDURES_CREATE_DO = "Crear '%1'";
w.g.PROCEDURES_DEFNORETURN_COMMENT = "Describe esta funci\u00f3n...";
w.g.PROCEDURES_DEFNORETURN_DO = "";
w.g.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
w.g.PROCEDURES_DEFNORETURN_PROCEDURE = "hacer algo";
w.g.PROCEDURES_DEFNORETURN_TITLE = "para";
w.g.PROCEDURES_DEFNORETURN_TOOLTIP = "Crea una funci\u00f3n sin salida.";
w.g.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
w.g.PROCEDURES_DEFRETURN_RETURN = "devuelve";
w.g.PROCEDURES_DEFRETURN_TOOLTIP = "Crea una funci\u00f3n con una salida.";
w.g.PROCEDURES_DEF_DUPLICATE_WARNING =
  "Advertencia: Esta funci\u00f3n tiene par\u00e1metros duplicados.";
w.g.PROCEDURES_HIGHLIGHT_DEF = "Destacar definici\u00f3n de la funci\u00f3n";
w.g.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
w.g.PROCEDURES_IFRETURN_TOOLTIP =
  "Si un valor es verdadero, entonces devuelve un segundo valor.";
w.g.PROCEDURES_IFRETURN_WARNING =
  "Advertencia: Este bloque solo puede ser utilizado dentro de la definici\u00f3n de una funci\u00f3n.";
w.g.PROCEDURES_MUTATORARG_TITLE = "nombre de entrada:";
w.g.PROCEDURES_MUTATORARG_TOOLTIP =
  "A\u00f1adir una entrada a la funci\u00f3n.";
w.g.PROCEDURES_MUTATORCONTAINER_TITLE = "entradas";
w.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP =
  "A\u00f1adir, eliminar o reordenar entradas para esta funci\u00f3n.";
w.g.REDO = "Rehacer";
w.g.REMOVE_COMMENT = "Eliminar comentario";
w.g.RENAME_VARIABLE = "Renombrar la variable\u2026";
w.g.RENAME_VARIABLE_TITLE = "Renombrar todas las variables \u00ab%1\u00bb a:";
w.g.TEXT_APPEND_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-modification";
w.g.TEXT_APPEND_TITLE = "a %1 a\u00f1ade el texto %2";
w.g.TEXT_APPEND_TOOLTIP = "A\u00f1adir texto a la variable '%1'.";
w.g.TEXT_CHANGECASE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
w.g.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "a min\u00fasculas";
w.g.TEXT_CHANGECASE_OPERATOR_TITLECASE = "a May\u00fasculas Cada Palabra";
w.g.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "a MAY\u00daSCULAS";
w.g.TEXT_CHANGECASE_TOOLTIP =
  "Devuelve una copia del texto en un tama\u00f1o diferente.";
w.g.TEXT_CHARAT_FIRST = "obtener la primera letra";
w.g.TEXT_CHARAT_FROM_END = "obtener la letra # del final";
w.g.TEXT_CHARAT_FROM_START = "obtener la letra #";
w.g.TEXT_CHARAT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#extracting-text";
w.g.TEXT_CHARAT_LAST = "obtener la \u00faltima letra";
w.g.TEXT_CHARAT_RANDOM = "obtener letra aleatoria";
w.g.TEXT_CHARAT_TAIL = "";
w.g.TEXT_CHARAT_TITLE = "en el texto %1 %2";
w.g.TEXT_CHARAT_TOOLTIP = "Devuelve la letra en la posici\u00f3n especificada.";
w.g.TEXT_COUNT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#counting-substrings";
w.g.TEXT_COUNT_MESSAGE0 = "contar %1 en %2";
w.g.TEXT_COUNT_TOOLTIP = "Cuantas veces aparece un texto dentro de otro texto.";
w.g.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Agregar un elemento al texto.";
w.g.TEXT_CREATE_JOIN_TITLE_JOIN = "unir";
w.g.TEXT_CREATE_JOIN_TOOLTIP =
  "Agregar, eliminar o reordenar las secciones para reconfigurar este bloque de texto.";
w.g.TEXT_GET_SUBSTRING_END_FROM_END = "hasta la letra # del final";
w.g.TEXT_GET_SUBSTRING_END_FROM_START = "hasta la letra #";
w.g.TEXT_GET_SUBSTRING_END_LAST = "hasta la \u00faltima letra";
w.g.TEXT_GET_SUBSTRING_HELPURL =
  "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
w.g.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "en el texto";
w.g.TEXT_GET_SUBSTRING_START_FIRST = "obtener subcadena desde la primera letra";
w.g.TEXT_GET_SUBSTRING_START_FROM_END =
  "obtener subcadena desde la letra # del final";
w.g.TEXT_GET_SUBSTRING_START_FROM_START = "obtener subcadena desde la letra #";
w.g.TEXT_GET_SUBSTRING_TAIL = "";
w.g.TEXT_GET_SUBSTRING_TOOLTIP =
  "Devuelve una porci\u00f3n determinada del texto.";
w.g.TEXT_INDEXOF_HELPURL =
  "https://github.com/google/blockly/wiki/Text#finding-text";
w.g.TEXT_INDEXOF_OPERATOR_FIRST =
  "encontrar la primera aparici\u00f3n del texto";
w.g.TEXT_INDEXOF_OPERATOR_LAST =
  "encontrar la \u00faltima aparici\u00f3n del texto";
w.g.TEXT_INDEXOF_TITLE = "en el texto %1 %2 %3";
w.g.TEXT_INDEXOF_TOOLTIP =
  "Devuelve el \u00edndice de la primera/\u00faltima aparici\u00f3n del primer texto en el segundo texto. Devuelve %1 si el texto no se encuentra.";
w.g.TEXT_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
w.g.TEXT_ISEMPTY_TITLE = "%1 est\u00e1 vac\u00edo";
w.g.TEXT_ISEMPTY_TOOLTIP =
  "Devuelve verdadero si el texto proporcionado est\u00e1 vac\u00edo.";
w.g.TEXT_JOIN_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-creation";
w.g.TEXT_JOIN_TITLE_CREATEWITH = "crear texto con";
w.g.TEXT_JOIN_TOOLTIP =
  "Crear un fragmento de texto al unir cualquier n\u00famero de elementos.";
w.g.TEXT_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-modification";
w.g.TEXT_LENGTH_TITLE = "longitud de %1";
w.g.TEXT_LENGTH_TOOLTIP =
  "Devuelve el n\u00famero de letras (espacios incluidos) del texto proporcionado.";
w.g.TEXT_PRINT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#printing-text";
w.g.TEXT_PRINT_TITLE = "imprimir %1";
w.g.TEXT_PRINT_TOOLTIP =
  "Imprimir el texto, n\u00famero u otro valor especificado.";
w.g.TEXT_PROMPT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
w.g.TEXT_PROMPT_TOOLTIP_NUMBER = "Solicitar al usuario un n\u00famero.";
w.g.TEXT_PROMPT_TOOLTIP_TEXT = "Solicitar al usuario un texto.";
w.g.TEXT_PROMPT_TYPE_NUMBER = "solicitar n\u00famero con el mensaje";
w.g.TEXT_PROMPT_TYPE_TEXT = "solicitar texto con el mensaje";
w.g.TEXT_REPLACE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#replacing-substrings";
w.g.TEXT_REPLACE_MESSAGE0 = "reemplazar %1 con %2 en %3";
w.g.TEXT_REPLACE_TOOLTIP =
  "Reemplazar todas las veces que un texto dentro de otro texto.";
w.g.TEXT_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#reversing-text";
w.g.TEXT_REVERSE_MESSAGE0 = "invertir %1";
w.g.TEXT_REVERSE_TOOLTIP = "Invierte el orden de los caracteres en el texto.";
w.g.TEXT_TEXT_HELPURL = "https://es.wikipedia.org/wiki/Cadena_de_caracteres";
w.g.TEXT_TEXT_TOOLTIP = "Una letra, palabra o l\u00ednea de texto.";
w.g.TEXT_TRIM_HELPURL =
  "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
w.g.TEXT_TRIM_OPERATOR_BOTH = "quitar espacios de ambos lados de";
w.g.TEXT_TRIM_OPERATOR_LEFT = "quitar espacios iniciales de";
w.g.TEXT_TRIM_OPERATOR_RIGHT = "quitar espacios finales de";
w.g.TEXT_TRIM_TOOLTIP =
  "Devuelve una copia del texto sin los espacios de uno o ambos extremos.";
w.g.TODAY = "Hoy";
w.g.UNDO = "Deshacer";
w.g.VARIABLES_DEFAULT_NAME = "elemento";
w.g.VARIABLES_GET_CREATE_SET = "Crear 'establecer %1'";
w.g.VARIABLES_GET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#get";
w.g.VARIABLES_GET_TOOLTIP = "Devuelve el valor de esta variable.";
w.g.VARIABLES_SET = "establecer %1 a %2";
w.g.VARIABLES_SET_CREATE_GET = "Crear 'obtener %1'";
w.g.VARIABLES_SET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#set";
w.g.VARIABLES_SET_TOOLTIP =
  "Establece esta variable para que sea igual a la entrada.";
w.g.VARIABLE_ALREADY_EXISTS = 'Ya existe una variable llamada "%1".';
w.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE =
  "Ya existe una variable nombrada '%1' para otra variable del tipo: '%2'.";
w.g.WORKSPACE_COMMENT_DEFAULT_TEXT = "Di algo\u2026";
w.g.PROCEDURES_DEFRETURN_TITLE = w.g.PROCEDURES_DEFNORETURN_TITLE;
w.g.CONTROLS_IF_IF_TITLE_IF = w.g.CONTROLS_IF_MSG_IF;
w.g.CONTROLS_WHILEUNTIL_INPUT_DO = w.g.CONTROLS_REPEAT_INPUT_DO;
w.g.CONTROLS_IF_MSG_THEN = w.g.CONTROLS_REPEAT_INPUT_DO;
w.g.CONTROLS_IF_ELSE_TITLE_ELSE = w.g.CONTROLS_IF_MSG_ELSE;
w.g.PROCEDURES_DEFRETURN_PROCEDURE = w.g.PROCEDURES_DEFNORETURN_PROCEDURE;
w.g.LISTS_GET_SUBLIST_INPUT_IN_LIST = w.g.LISTS_INLIST;
w.g.LISTS_GET_INDEX_INPUT_IN_LIST = w.g.LISTS_INLIST;
w.g.MATH_CHANGE_TITLE_ITEM = w.g.VARIABLES_DEFAULT_NAME;
w.g.PROCEDURES_DEFRETURN_DO = w.g.PROCEDURES_DEFNORETURN_DO;
w.g.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = w.g.CONTROLS_IF_MSG_ELSEIF;
w.g.LISTS_GET_INDEX_HELPURL = w.g.LISTS_INDEX_OF_HELPURL;
w.g.CONTROLS_FOREACH_INPUT_DO = w.g.CONTROLS_REPEAT_INPUT_DO;
w.g.LISTS_SET_INDEX_INPUT_IN_LIST = w.g.LISTS_INLIST;
w.g.CONTROLS_FOR_INPUT_DO = w.g.CONTROLS_REPEAT_INPUT_DO;
w.g.LISTS_CREATE_WITH_ITEM_TITLE = w.g.VARIABLES_DEFAULT_NAME;
w.g.TEXT_APPEND_VARIABLE = w.g.VARIABLES_DEFAULT_NAME;
w.g.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = w.g.VARIABLES_DEFAULT_NAME;
w.g.LISTS_INDEX_OF_INPUT_IN_LIST = w.g.LISTS_INLIST;
w.g.PROCEDURES_DEFRETURN_COMMENT = w.g.PROCEDURES_DEFNORETURN_COMMENT;
w.g.MATH_HUE = "230";
w.g.LOOPS_HUE = "120";
w.g.LISTS_HUE = "260";
w.g.LOGIC_HUE = "210";
w.g.VARIABLES_HUE = "330";
w.g.TEXTS_HUE = "160";
w.g.PROCEDURES_HUE = "290";
w.g.COLOUR_HUE = "20";
w.g.VARIABLES_DYNAMIC_HUE = "310";
var V = {
  Rh: null,
  N: function() {
    Kl();
    var a = document.getElementById("linkButton");
    "BlocklyStorage" in window
      ? ((BlocklyStorage.HTTPREQUEST_ERROR = T("Games_httpRequestError")),
        (BlocklyStorage.LINK_ALERT = T("Games_linkAlert")),
        (BlocklyStorage.HASH_ERROR = T("Games_hashError")),
        (BlocklyStorage.XML_ERROR = T("Games_xmlError")),
        (BlocklyStorage.alert = U.mt.bind(U, a)),
        a && Ol(a, BlocklyStorage.link))
      : a && (a.style.display = "none");
    (a = document.getElementById("languageMenu")) &&
      a.addEventListener("change", V.cv, !0);
    w.J && (w.J.mu = !1);
    w.h && (w.h.mu = !1);
  },
  Ow: function(a, b) {
    if ("BlocklyStorage" in window && 1 < window.location.hash.length)
      BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    else {
      var c = null;
      try {
        c = window.sessionStorage.gs;
      } catch (h) {}
      c && delete window.sessionStorage.gs;
      var e = Ll(S),
        f = b && Ll(S - 1);
      f && "function" == typeof b && (f = b(f));
      (a = c || e || f || a) && V.at(a);
    }
  },
  at: function(a) {
    V.Rh
      ? V.Rh.setValue(a, -1)
      : ((a = w.D.ed(a)), uk.clear(), w.D.ee(a, uk), uk.wq());
  },
  Pn: function() {
    if (V.Rh) var a = V.Rh.getValue();
    else {
      a = w.D.Ip(uk, !0);
      if (1 == ad(uk, !1).length && a.querySelector) {
        var b = a.querySelector("block");
        b && (b.removeAttribute("x"), b.removeAttribute("y"));
      }
      a = w.D.td(a);
    }
    return a;
  },
  vj: function() {
    return uk;
  },
  Gx: function() {
    window.localStorage && (window.localStorage[Nl + S] = V.Pn());
  },
  Ll: function() {
    window.location = (Fl ? "index.html" : "./") + "?lang=" + Dl;
  },
  cv: function() {
    if (window.sessionStorage) {
      if (V.Rh) var a = V.Rh.getValue();
      else (a = w.D.Ip(uk)), (a = w.D.td(a));
      window.sessionStorage.gs = a;
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
  zo: function() {
    10 > S
      ? (window.location =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?lang=" +
          Dl +
          "&level=" +
          (S + 1))
      : V.Ll();
  },
  Lr: function(a, b) {
    if (a) {
      var c = a.match(/^block_id_([^']+)$/);
      c && (a = c[1]);
    }
    var e = a;
    a = uk;
    if (void 0 === b) {
      for (var f = 0; (c = a.Cj[f]); f++) c.Xb(!1);
      a.Cj.length = 0;
    }
    if ((c = e ? Ic(a, e) : null))
      (b = void 0 === b || b)
        ? -1 == a.Cj.indexOf(c) && a.Cj.push(c)
        : ya(a.Cj, c),
        c.Xb(b);
  },
  Dw: function(a, b) {
    a = document.getElementById(a);
    a.firstChild ||
      ((a = w.Pf(a, { rtl: -1 != Cl.indexOf(Dl), readOnly: !0 })),
      "string" != typeof b && (b = b.join("")),
      w.D.ee(w.D.ed(b), a));
  },
  Rx: function(a) {
    return a
      .replace(/(,\s*)?'block_id_[^']+'\)/g, ")")
      .replace(/[\s\xa0]+$/, "");
  },
  Ue: function(a) {
    if (
      ("click" == a.type &&
        "touchend" == V.Ue.So &&
        V.Ue.Ro + 2e3 > Date.now()) ||
      (V.Ue.So == a.type && V.Ue.Ro + 400 > Date.now())
    )
      return a.preventDefault(), a.stopPropagation(), !0;
    V.Ue.So = a.type;
    V.Ue.Ro = Date.now();
    return !1;
  }
};
V.Ue.So = null;
V.Ue.Ro = 0;
V.TB = function() {
  var a = document.createElement("script");
  a.setAttribute("type", "text/javascript");
  a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
  document.head.appendChild(a);
};
V.Bw = function() {
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
window.BlocklyInterface = V;
V.setCode = V.at;
V.getCode = V.Pn;
V.getWorkspace = V.vj;
var U = {
  Og: !1,
  cr: null,
  cl: null,
  yi: function(a, b, c, e, f, h) {
    function k() {
      U.Og &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    U.Og && U.$c(!1);
    w.Pb(!0);
    U.Og = !0;
    U.cr = b;
    U.cl = h;
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
      (U.xn = w.Fc(e, "mousedown", null, U.Kv)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    c && b ? (U.Zl(b, !1, 0.2), U.Zl(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  dr: 0,
  er: 0,
  Kv: function(a) {
    U.An();
    if (!w.i.Tf(a)) {
      var b = document.getElementById("dialog");
      U.dr = b.offsetLeft - a.clientX;
      U.er = b.offsetTop - a.clientY;
      U.zn = w.Fc(document, "mouseup", null, U.An);
      U.yn = w.Fc(document, "mousemove", null, U.Lv);
      a.stopPropagation();
    }
  },
  Lv: function(a) {
    var b = document.getElementById("dialog"),
      c = U.dr + a.clientX;
    a = U.er + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - b.offsetHeight);
    c = Math.max(c, 0);
    c = Math.min(c, window.innerWidth - b.offsetWidth);
    b.style.left = c + "px";
    b.style.top = a + "px";
  },
  An: function() {
    U.zn && (w.Na(U.zn), (U.zn = null));
    U.yn && (w.Na(U.yn), (U.yn = null));
  },
  $c: function(a) {
    function b() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (U.Og) {
      U.An();
      U.xn && (w.Na(U.xn), (U.xn = null));
      U.Og = !1;
      U.cl && U.cl();
      U.cl = null;
      var c = !1 === a ? null : U.cr;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      c && a ? (U.Zl(a, !1, 0.8), U.Zl(c, !0, 0.2), setTimeout(b, 175)) : b();
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
  Zl: function(a, b, c) {
    function e() {
      f.style.width = h.width + "px";
      f.style.height = h.height + "px";
      f.style.left = h.x + "px";
      f.style.top = h.y + "px";
      f.style.opacity = c;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        h = U.$v(a);
      b
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  $v: function(a) {
    var b = eh(a);
    b = { x: b.x, y: b.y };
    a.getBBox
      ? ((a = a.getBBox()), (b.height = a.height), (b.width = a.width))
      : ((b.height = a.offsetHeight), (b.width = a.offsetWidth));
    return b;
  },
  mt: function(a, b) {
    var c = document.getElementById("containerStorage");
    c.textContent = "";
    b = b.split("\n");
    for (var e = 0; e < b.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(b[e]));
      c.appendChild(f);
    }
    c = document.getElementById("dialogStorage");
    U.yi(c, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, U.Ap);
    U.zp();
  },
  Lu: function() {
    if (!Ll(S))
      if (U.Og || uk.pb()) setTimeout(U.Lu, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          b = document.getElementById("abortCancel");
        b.addEventListener("click", U.$c, !0);
        b.addEventListener("touchend", U.$c, !0);
        b = document.getElementById("abortOk");
        b.addEventListener("click", V.Ll, !0);
        b.addEventListener("touchend", V.Ll, !0);
        U.yi(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function() {
            document.body.removeEventListener("keydown", U.cq, !0);
          }
        );
        document.body.addEventListener("keydown", U.cq, !0);
      }
  },
  vp: function() {
    document.getElementById("galleryXml").value = V.Pn();
    var a = document.getElementById("galleryDialog");
    if (!U.vp.Fx) {
      var b = document.getElementById("galleryCancel");
      b.addEventListener("click", U.$c, !0);
      b.addEventListener("touchend", U.$c, !0);
      b = document.getElementById("galleryOk");
      b.addEventListener("click", U.Nn, !0);
      b.addEventListener("touchend", U.Nn, !0);
      U.vp.Fx = !0;
    }
    b = document.getElementById("submitButton");
    U.yi(a, b, !0, !0, { width: "40%", left: "30%", top: "3em" }, function() {
      document.body.removeEventListener("keydown", U.vr, !0);
    });
    document.body.addEventListener("keydown", U.vr, !0);
    setTimeout(function() {
      document.getElementById("galleryTitle").focus();
    }, 250);
  },
  qv: function() {
    var a = document.getElementById("dialogDone");
    if (uk) {
      var b = document.getElementById("dialogLinesText");
      b.textContent = "";
      var c = tk();
      c = V.Rx(c);
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
          ? T("Games_linesOfCode1")
          : T("Games_linesOfCode2").replace("%1", String(e));
      b.appendChild(document.createTextNode(c));
    }
    c =
      10 > S
        ? T("Games_nextLevel").replace("%1", String(S + 1))
        : T("Games_finalLevel");
    b = document.getElementById("doneCancel");
    b.addEventListener("click", U.$c, !0);
    b.addEventListener("touchend", U.$c, !0);
    b = document.getElementById("doneOk");
    b.addEventListener("click", V.zo, !0);
    b.addEventListener("touchend", V.zo, !0);
    U.yi(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function() {
        document.body.removeEventListener("keydown", U.Dq, !0);
      }
    );
    document.body.addEventListener("keydown", U.Dq, !0);
    document.getElementById("dialogDoneText").textContent = c;
  },
  $q: function(a) {
    !U.Og ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (U.$c(!0), a.stopPropagation(), a.preventDefault());
  },
  zp: function() {
    document.body.addEventListener("keydown", U.$q, !0);
  },
  Ap: function() {
    document.body.removeEventListener("keydown", U.$q, !0);
  },
  Dq: function(a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      U.$c(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && V.zo();
  },
  cq: function(a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      U.$c(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && V.Ll();
  },
  vr: function(a) {
    27 == a.keyCode ? U.$c(!0) : 13 == a.keyCode && U.Nn();
  },
  Nn: function() {
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
              ? T("Games_submitted")
              : T("Games_httpRequestError") + "\nStatus: " + f.status;
          U.mt(null, a);
        }
      };
      f.send(b.join("&"));
      U.$c(!0);
    } else (a.value = ""), a.focus();
  }
};
window.BlocklyDialogs = U;
U.hideDialog = U.$c;
var Pl, W;
function Ql() {
  if (10 == S) return 1 < Oc(uk).length;
  for (var a = 0; a <= Rl; a++)
    if (50 != a) {
      if (void 0 === Sl[a]) return !1;
      if (100 < Sl[a])
        return console.log("Pixel errors (frame " + a + "): " + Sl[a]), !1;
    }
  if (9 == S) {
    a = Oc(uk, !0);
    for (var b = 0, c; (c = a[b]); b++)
      if ("movie_circle" == c.type) {
        if ("math_arithmetic" != Gh(c, "RADIUS").type)
          return (
            (a = document.getElementById("helpLayer")),
            U.yi(
              a,
              null,
              !1,
              !0,
              { width: "30%", left: "35%", top: "12em" },
              U.Ap
            ),
            U.zp(),
            !1
          );
        break;
      }
  }
  return !0;
}
w.J.Aq = {};
w.M = {};
w.M.Mt = {};
w.M.Mt.Ji = 20;
w.Bg([
  {
    type: "colour_picker",
    message0: "%1",
    args0: [{ type: "field_colour", name: "COLOUR", colour: "#ff0000" }],
    output: "Colour",
    colour: "%{BKY_COLOUR_HUE}",
    helpUrl: "%{BKY_COLOUR_PICKER_HELPURL}",
    tooltip: "%{BKY_COLOUR_PICKER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "colour_random",
    message0: "%{BKY_COLOUR_RANDOM_TITLE}",
    output: "Colour",
    colour: "%{BKY_COLOUR_HUE}",
    helpUrl: "%{BKY_COLOUR_RANDOM_HELPURL}",
    tooltip: "%{BKY_COLOUR_RANDOM_TOOLTIP}"
  },
  {
    type: "colour_rgb",
    message0:
      "%{BKY_COLOUR_RGB_TITLE} %{BKY_COLOUR_RGB_RED} %1 %{BKY_COLOUR_RGB_GREEN} %2 %{BKY_COLOUR_RGB_BLUE} %3",
    args0: [
      { type: "input_value", name: "RED", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "GREEN", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "BLUE", check: "Number", align: "RIGHT" }
    ],
    output: "Colour",
    colour: "%{BKY_COLOUR_HUE}",
    helpUrl: "%{BKY_COLOUR_RGB_HELPURL}",
    tooltip: "%{BKY_COLOUR_RGB_TOOLTIP}"
  },
  {
    type: "colour_blend",
    message0:
      "%{BKY_COLOUR_BLEND_TITLE} %{BKY_COLOUR_BLEND_COLOUR1} %1 %{BKY_COLOUR_BLEND_COLOUR2} %2 %{BKY_COLOUR_BLEND_RATIO} %3",
    args0: [
      { type: "input_value", name: "COLOUR1", check: "Colour", align: "RIGHT" },
      { type: "input_value", name: "COLOUR2", check: "Colour", align: "RIGHT" },
      { type: "input_value", name: "RATIO", check: "Number", align: "RIGHT" }
    ],
    output: "Colour",
    colour: "%{BKY_COLOUR_HUE}",
    helpUrl: "%{BKY_COLOUR_BLEND_HELPURL}",
    tooltip: "%{BKY_COLOUR_BLEND_TOOLTIP}"
  }
]);
w.J.Qw = {};
w.M.Qc = {};
w.M.Qc.Ji = 210;
w.Bg([
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
w.Bg([
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
w.M.Qc.Xm = {
  EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
  NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
  LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
  LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
  GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
  GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
  AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
  OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}"
};
w.K.register("logic_op_tooltip", w.K.Ok("OP", w.M.Qc.Xm));
w.M.Qc.Ht = {
  Wc: 0,
  Id: 0,
  Ga: function() {
    if (!this.Wc && !this.Id) return null;
    var a = document.createElement("mutation");
    this.Wc && a.setAttribute("elseif", this.Wc);
    this.Id && a.setAttribute("else", 1);
    return a;
  },
  Za: function(a) {
    this.Wc = parseInt(a.getAttribute("elseif"), 10) || 0;
    this.Id = parseInt(a.getAttribute("else"), 10) || 0;
    this.jd();
  },
  Te: function(a) {
    var b = a.bf("controls_if_if");
    b.xc();
    for (var c = b.L, e = 1; e <= this.Wc; e++) {
      var f = a.bf("controls_if_elseif");
      f.xc();
      c.connect(f.Z);
      c = f.L;
    }
    this.Id && ((a = a.bf("controls_if_else")), a.xc(), c.connect(a.Z));
    return b;
  },
  Re: function(a) {
    var b = I(a.L);
    this.Id = this.Wc = 0;
    a = [null];
    for (var c = [null], e = null; b; ) {
      switch (b.type) {
        case "controls_if_elseif":
          this.Wc++;
          a.push(b.Hp);
          c.push(b.kf);
          break;
        case "controls_if_else":
          this.Id++;
          e = b.kf;
          break;
        default:
          throw "Unknown block type.";
      }
      b = b.L && I(b.L);
    }
    this.jd();
    for (b = 1; b <= this.Wc; b++)
      Xg(a[b], this, "IF" + b), Xg(c[b], this, "DO" + b);
    Xg(e, this, "ELSE");
  },
  sm: function(a) {
    a = I(a.L);
    for (var b = 1; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          var c = J(this, "IF" + b),
            e = J(this, "DO" + b);
          a.Hp = c && c.connection.Pa;
          a.kf = e && e.connection.Pa;
          b++;
          break;
        case "controls_if_else":
          e = J(this, "ELSE");
          a.kf = e && e.connection.Pa;
          break;
        default:
          throw "Unknown block type.";
      }
      a = a.L && I(a.L);
    }
  },
  jd: function() {
    J(this, "ELSE") && this.yb("ELSE");
    for (var a = 1; J(this, "IF" + a); )
      this.yb("IF" + a), this.yb("DO" + a), a++;
    for (a = 1; a <= this.Wc; a++)
      M(N(this, "IF" + a).Ca("Boolean"), w.g.CONTROLS_IF_MSG_ELSEIF),
        M(this.Ke(w.Wa, "DO" + a), w.g.CONTROLS_IF_MSG_THEN);
    this.Id && M(this.Ke(w.Wa, "ELSE"), w.g.CONTROLS_IF_MSG_ELSE);
  }
};
w.K.ak("controls_if_mutator", w.M.Qc.Ht, null, [
  "controls_if_elseif",
  "controls_if_else"
]);
w.M.Qc.It = function() {
  this.Ma(
    function() {
      if (this.Wc || this.Id) {
        if (!this.Wc && this.Id) return w.g.CONTROLS_IF_TOOLTIP_2;
        if (this.Wc && !this.Id) return w.g.CONTROLS_IF_TOOLTIP_3;
        if (this.Wc && this.Id) return w.g.CONTROLS_IF_TOOLTIP_4;
      } else return w.g.CONTROLS_IF_TOOLTIP_1;
      return "";
    }.bind(this)
  );
};
w.K.register("controls_if_tooltip", w.M.Qc.It);
w.M.Qc.du = {
  onchange: function(a) {
    this.Yj || (this.Yj = [null, null]);
    var b = Gh(this, "A"),
      c = Gh(this, "B");
    b &&
      c &&
      !Le(b.P, c.P) &&
      (w.j.S(a.group),
      (a = this.Yj[0]),
      a !== b && (Ce(b), a && !a.gb && J(this, "A").connection.connect(a.P)),
      (b = this.Yj[1]),
      b !== c && (Ce(c), b && !b.gb && J(this, "B").connection.connect(b.P)),
      this.ob(),
      w.j.S(!1));
    this.Yj[0] = Gh(this, "A");
    this.Yj[1] = Gh(this, "B");
  }
};
w.M.Qc.cu = function() {
  Zg(this, w.M.Qc.du);
};
w.K.register("logic_compare", w.M.Qc.cu);
w.M.Qc.eu = {
  Ls: null,
  onchange: function(a) {
    var b = Gh(this, "THEN"),
      c = Gh(this, "ELSE"),
      e = this.P.Pa;
    if ((b || c) && e)
      for (var f = 0; 2 > f; f++) {
        var h = 1 == f ? b : c;
        h &&
          !Le(h.P, e) &&
          (w.j.S(a.group),
          e === this.Ls ? (Ce(this), e.v.ob()) : (Ce(h), h.ob()),
          w.j.S(!1));
      }
    this.Ls = e;
  }
};
w.K.nm("logic_ternary", w.M.Qc.eu);
w.J.Sw = {};
w.M.Ie = {};
w.M.Ie.Ji = 120;
w.Bg([
  {
    type: "controls_repeat_ext",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{ type: "input_value", name: "TIMES", check: "Number" }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
  },
  {
    type: "controls_repeat",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [
      { type: "field_number", name: "TIMES", value: 10, min: 0, precision: 1 }
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
  },
  {
    type: "controls_whileUntil",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "MODE",
        options: [
          ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"],
          ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"]
        ]
      },
      { type: "input_value", name: "BOOL", check: "Boolean" }
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    extensions: ["controls_whileUntil_tooltip"]
  },
  {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR_TITLE}",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "TO", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "BY", check: "Number", align: "RIGHT" }
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"]
  },
  {
    type: "controls_forEach",
    message0: "%{BKY_CONTROLS_FOREACH_TITLE}",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "LIST", check: "Array" }
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_forEach_tooltip"]
  },
  {
    type: "controls_flow_statements",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "FLOW",
        options: [
          ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"],
          ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"]
        ]
      }
    ],
    previousStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
    extensions: ["controls_flow_tooltip", "controls_flow_in_loop_check"]
  }
]);
w.M.Ie.Hu = {
  WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
  UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}"
};
w.K.register("controls_whileUntil_tooltip", w.K.Ok("MODE", w.M.Ie.Hu));
w.M.Ie.Ct = {
  BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
  CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}"
};
w.K.register("controls_flow_tooltip", w.K.Ok("FLOW", w.M.Ie.Ct));
w.M.Ie.Kt = {
  Se: function(a) {
    if (!this.sb) {
      var b = H(this, "VAR").Jc(),
        c = b.name;
      if (!this.isCollapsed() && null != c) {
        var e = { enabled: !0 };
        e.text = w.g.VARIABLES_SET_CREATE_GET.replace("%1", c);
        b = w.G.wr(b);
        b = E("block", null, b);
        b.setAttribute("type", "variables_get");
        e.eb = w.ba.Rk(this, b);
        a.push(e);
      }
    }
  }
};
w.K.nm("contextMenu_newGetVariableBlock", w.M.Ie.Kt);
w.K.register("controls_for_tooltip", w.K.Pk("%{BKY_CONTROLS_FOR_TOOLTIP}"));
w.K.register(
  "controls_forEach_tooltip",
  w.K.Pk("%{BKY_CONTROLS_FOREACH_TOOLTIP}")
);
w.M.Ie.Jt = {
  gu: [
    "controls_repeat",
    "controls_repeat_ext",
    "controls_forEach",
    "controls_for",
    "controls_whileUntil"
  ],
  onchange: function() {
    if (this.o.pb && !this.o.pb()) {
      var a = !1,
        b = this;
      do {
        if (-1 != this.gu.indexOf(b.type)) {
          a = !0;
          break;
        }
        b = Bh(b);
      } while (b);
      a
        ? (this.ze(null), this.sb || this.Bd(!1))
        : (this.ze(w.g.CONTROLS_FLOW_STATEMENTS_WARNING),
          this.sb || Ch(this) || this.Bd(!0));
    }
  }
};
w.K.nm("controls_flow_in_loop_check", w.M.Ie.Jt);
w.J.Tw = {};
w.M.Math = {};
w.M.Math.Ji = 230;
w.Bg([
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
w.M.Math.Xm = {
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
w.K.register("math_op_tooltip", w.K.Ok("OP", w.M.Math.Xm));
w.M.Math.Yt = {
  Ga: function() {
    var a = document.createElement("mutation"),
      b = "DIVISIBLE_BY" == D(this, "PROPERTY");
    a.setAttribute("divisor_input", b);
    return a;
  },
  Za: function(a) {
    a = "true" == a.getAttribute("divisor_input");
    this.jd(a);
  },
  jd: function(a) {
    var b = J(this, "DIVISOR");
    a ? b || N(this, "DIVISOR").Ca("Number") : b && this.yb("DIVISOR");
  }
};
w.M.Math.Zt = function() {
  sh(H(this, "PROPERTY"), function(a) {
    this.v.jd("DIVISIBLE_BY" == a);
  });
};
w.K.ak("math_is_divisibleby_mutator", w.M.Math.Yt, w.M.Math.Zt);
w.K.register("math_change_tooltip", w.K.Pk("%{BKY_MATH_CHANGE_TOOLTIP}"));
w.M.Math.bu = {
  pg: function(a) {
    "MODE" == a ? this.P.Ca("Array") : this.P.Ca("Number");
  },
  Ga: function() {
    var a = document.createElement("mutation");
    a.setAttribute("op", D(this, "OP"));
    return a;
  },
  Za: function(a) {
    this.pg(a.getAttribute("op"));
  }
};
w.M.Math.au = function() {
  sh(
    H(this, "OP"),
    function(a) {
      this.pg(a);
    }.bind(this)
  );
};
w.K.ak("math_modes_of_list_mutator", w.M.Math.bu, w.M.Math.au);
w.J.Bx = {};
w.J.procedures_defnoreturn = {
  N: function() {
    var a = new gj("", w.ta.Vs);
    a.Am = !1;
    M(M(M(O(this), w.g.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
    this.ik(new Wg(["procedures_mutatorarg"]));
    (this.o.options.Zi ||
      (this.o.options.Kb && this.o.options.Kb.options.Zi)) &&
      w.g.PROCEDURES_DEFNORETURN_COMMENT &&
      this.dh(w.g.PROCEDURES_DEFNORETURN_COMMENT);
    this.qb(w.g.PROCEDURES_HUE);
    this.Ma(w.g.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.fc = w.g.PROCEDURES_DEFNORETURN_HELPURL;
    this.ea = [];
    this.Bb = [];
    this.hh(!0);
    this.kf = null;
  },
  hh: function(a) {
    this.Kl !== a &&
      (a
        ? (M(this.Ke(w.Wa, "STACK"), w.g.PROCEDURES_DEFNORETURN_DO),
          J(this, "RETURN") && Fh(this, "STACK", "RETURN"))
        : this.yb("STACK", !0),
      (this.Kl = a));
  },
  yk: function() {
    for (var a = !1, b = {}, c = 0; c < this.ea.length; c++) {
      if (b["arg_" + this.ea[c].toLowerCase()]) {
        a = !0;
        break;
      }
      b["arg_" + this.ea[c].toLowerCase()] = !0;
    }
    a ? this.ze(w.g.PROCEDURES_DEF_DUPLICATE_WARNING) : this.ze(null);
    a = "";
    this.ea.length &&
      (a = w.g.PROCEDURES_BEFORE_PARAMS + " " + this.ea.join(", "));
    w.j.disable();
    try {
      H(this, "PARAMS").setValue(a);
    } finally {
      w.j.enable();
    }
  },
  Ga: function(a) {
    var b = document.createElement("mutation");
    a && b.setAttribute("name", D(this, "NAME"));
    for (var c = 0; c < this.Bb.length; c++) {
      var e = document.createElement("arg"),
        f = this.Bb[c];
      e.setAttribute("name", f.name);
      e.setAttribute("varId", f.aa());
      a && this.Jo && e.setAttribute("paramId", this.Jo[c]);
      b.appendChild(e);
    }
    this.Kl || b.setAttribute("statements", "false");
    return b;
  },
  Za: function(a) {
    this.ea = [];
    this.Bb = [];
    for (var b = 0, c; (c = a.childNodes[b]); b++)
      if ("arg" == c.nodeName.toLowerCase()) {
        var e = c.getAttribute("name");
        c = c.getAttribute("varId");
        this.ea.push(e);
        e = w.G.Bl(this.o, c, e, "");
        this.Bb.push(e);
      }
    this.yk();
    w.ta.xo(this);
    this.hh("false" !== a.getAttribute("statements"));
  },
  Te: function(a) {
    var b = a.bf("procedures_mutatorcontainer");
    b.xc();
    J(this, "RETURN")
      ? H(b, "STATEMENTS").setValue(this.Kl ? "TRUE" : "FALSE")
      : J(b, "STATEMENT_INPUT").qa(!1);
    for (var c = J(b, "STACK").connection, e = 0; e < this.ea.length; e++) {
      var f = a.bf("procedures_mutatorarg");
      f.xc();
      H(f, "NAME").setValue(this.ea[e]);
      f.UB = e;
      c.connect(f.Z);
      c = f.L;
    }
    w.ta.xo(this);
    return b;
  },
  Re: function(a) {
    this.ea = [];
    this.Jo = [];
    this.Bb = [];
    for (var b = Gh(a, "STACK"); b; ) {
      var c = D(b, "NAME");
      this.ea.push(c);
      c = this.o.Jc(c, "");
      this.Bb.push(c);
      this.Jo.push(b.id);
      b = b.L && I(b.L);
    }
    this.yk();
    w.ta.xo(this);
    a = D(a, "STATEMENTS");
    if (null !== a && ((a = "TRUE" == a), this.Kl != a))
      if (a) this.hh(!0), Xg(this.kf, this, "STACK"), (this.kf = null);
      else {
        a = J(this, "STACK").connection;
        if ((this.kf = a.Pa)) (a = I(a)), Ce(a), a.ob();
        this.hh(!1);
      }
  },
  Ye: function() {
    return [D(this, "NAME"), this.ea, !1];
  },
  Vn: function() {
    return this.ea;
  },
  Hf: function() {
    return this.Bb;
  },
  dk: function(a, b) {
    var c = this.o.Kd(a);
    if ("" == c.type) {
      c = c.name;
      b = this.o.Kd(b);
      for (var e = !1, f = 0; f < this.Bb.length; f++)
        this.Bb[f].aa() == a &&
          ((this.ea[f] = b.name), (this.Bb[f] = b), (e = !0));
      e && this.fl(c, b.name);
    }
  },
  Gm: function(a) {
    for (var b = a.name, c = !1, e = 0; e < this.Bb.length; e++)
      if (this.Bb[e].aa() == a.aa()) {
        var f = this.ea[e];
        this.ea[e] = b;
        c = !0;
      }
    c && this.fl(f, b);
  },
  fl: function(a, b) {
    this.yk();
    if (this.ad.Y())
      for (var c = Oc(this.ad.m), e = 0, f; (f = c[e]); e++)
        "procedures_mutatorarg" == f.type &&
          Rc(a, D(f, "NAME")) &&
          H(f, "NAME").setValue(b);
  },
  Se: function(a) {
    if (!this.sb) {
      var b = { enabled: !0 },
        c = D(this, "NAME");
      b.text = w.g.PROCEDURES_CREATE_DO.replace("%1", c);
      var e = E("mutation");
      e.setAttribute("name", c);
      for (var f = 0; f < this.ea.length; f++)
        (c = E("arg")), c.setAttribute("name", this.ea[f]), e.appendChild(c);
      c = E("block", null, e);
      c.setAttribute("type", this.mq);
      b.eb = w.ba.Rk(this, c);
      a.push(b);
      if (!this.isCollapsed())
        for (f = 0; f < this.Bb.length; f++)
          (b = { enabled: !0 }),
            (e = this.Bb[f]),
            (c = e.name),
            (b.text = w.g.VARIABLES_SET_CREATE_GET.replace("%1", c)),
            (c = w.G.wr(e)),
            (c = E("block", null, c)),
            c.setAttribute("type", "variables_get"),
            (b.eb = w.ba.Rk(this, c)),
            a.push(b);
    }
  },
  mq: "procedures_callnoreturn"
};
w.J.procedures_defreturn = {
  N: function() {
    var a = new gj("", w.ta.Vs);
    a.Am = !1;
    M(M(M(O(this), w.g.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
    M(zh(N(this, "RETURN"), w.Nb), w.g.PROCEDURES_DEFRETURN_RETURN);
    this.ik(new Wg(["procedures_mutatorarg"]));
    (this.o.options.Zi ||
      (this.o.options.Kb && this.o.options.Kb.options.Zi)) &&
      w.g.PROCEDURES_DEFRETURN_COMMENT &&
      this.dh(w.g.PROCEDURES_DEFRETURN_COMMENT);
    this.qb(w.g.PROCEDURES_HUE);
    this.Ma(w.g.PROCEDURES_DEFRETURN_TOOLTIP);
    this.fc = w.g.PROCEDURES_DEFRETURN_HELPURL;
    this.ea = [];
    this.Bb = [];
    this.hh(!0);
    this.kf = null;
  },
  hh: w.J.procedures_defnoreturn.hh,
  yk: w.J.procedures_defnoreturn.yk,
  Ga: w.J.procedures_defnoreturn.Ga,
  Za: w.J.procedures_defnoreturn.Za,
  Te: w.J.procedures_defnoreturn.Te,
  Re: w.J.procedures_defnoreturn.Re,
  Ye: function() {
    return [D(this, "NAME"), this.ea, !0];
  },
  Vn: w.J.procedures_defnoreturn.Vn,
  Hf: w.J.procedures_defnoreturn.Hf,
  dk: w.J.procedures_defnoreturn.dk,
  Gm: w.J.procedures_defnoreturn.Gm,
  fl: w.J.procedures_defnoreturn.fl,
  Se: w.J.procedures_defnoreturn.Se,
  mq: "procedures_callreturn"
};
w.J.procedures_mutatorcontainer = {
  N: function() {
    M(O(this), w.g.PROCEDURES_MUTATORCONTAINER_TITLE);
    this.Ke(w.Wa, "STACK");
    M(
      M(O(this, "STATEMENT_INPUT"), w.g.PROCEDURES_ALLOW_STATEMENTS),
      new xj("TRUE"),
      "STATEMENTS"
    );
    this.qb(w.g.PROCEDURES_HUE);
    this.Ma(w.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
    this.contextMenu = !1;
  }
};
w.J.procedures_mutatorarg = {
  N: function() {
    var a = new gj("x", this.sh);
    a.ax = a.Be;
    a.Be = function() {
      this.ej = [];
      this.ax();
    };
    M(M(O(this), w.g.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
    this.ye(!0);
    this.we(!0);
    this.qb(w.g.PROCEDURES_HUE);
    this.Ma(w.g.PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = !1;
    a.Eo = this.Fv;
    a.ej = [];
    a.Eo("x");
  },
  sh: function(a) {
    var b = Yg(this.v.o);
    a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
    if (!a) return null;
    var c = b.Jc(a, "");
    c && c.name != a && b.dk(c.aa(), a);
    c || ((c = b.Vc(a, "")) && this.ej && this.ej.push(c));
    return a;
  },
  Fv: function(a) {
    var b = Yg(this.v.o);
    if (b)
      for (var c = 0; c < this.ej.length; c++) {
        var e = this.ej[c];
        e.name != a && b.Df(e.aa());
      }
  }
};
w.J.procedures_callnoreturn = {
  N: function() {
    M(O(this, "TOPROW"), this.id, "NAME");
    this.ye(!0);
    this.we(!0);
    this.qb(w.g.PROCEDURES_HUE);
    this.fc = w.g.PROCEDURES_CALLNORETURN_HELPURL;
    this.ea = [];
    this.Bb = [];
    this.Zg = {};
    this.Rd = null;
  },
  vd: function() {
    return D(this, "NAME");
  },
  ck: function(a, b) {
    Rc(a, this.vd()) &&
      (H(this, "NAME").setValue(b),
      this.Ma(
        (this.P
          ? w.g.PROCEDURES_CALLRETURN_TOOLTIP
          : w.g.PROCEDURES_CALLNORETURN_TOOLTIP
        ).replace("%1", b)
      ));
  },
  np: function(a, b) {
    var c = w.ta.vl(this.vd(), this.o);
    c = c && c.ad && c.ad.Y();
    c || ((this.Zg = {}), (this.Rd = null));
    if (b) {
      a: {
        var e = this.ea;
        if (ha(e) && ha(a) && e.length == a.length) {
          for (var f = e.length, h = 0; h < f; h++)
            if (e[h] !== a[h]) {
              e = !1;
              break a;
            }
          e = !0;
        } else e = !1;
      }
      if (e) this.Rd = b;
      else {
        if (b.length != a.length)
          throw "Error: paramNames and paramIds must be the same length.";
        this.hg(!1);
        this.Rd ||
          ((this.Zg = {}),
          a.join("\n") == this.ea.join("\n") ? (this.Rd = b) : (this.Rd = []));
        e = this.R;
        this.R = !1;
        for (f = 0; f < this.ea.length; f++)
          if ((h = J(this, "ARG" + f)))
            (h = h.connection.Pa),
              (this.Zg[this.Rd[f]] = h),
              c &&
                h &&
                -1 == b.indexOf(this.Rd[f]) &&
                (h.disconnect(), h.v.ob());
        this.ea = [].concat(a);
        this.Bb = [];
        for (f = 0; f < this.ea.length; f++)
          (a = w.G.Bl(this.o, null, this.ea[f], "")), this.Bb.push(a);
        this.jd();
        if ((this.Rd = b))
          for (f = 0; f < this.ea.length; f++)
            (b = this.Rd[f]),
              b in this.Zg &&
                ((h = this.Zg[b]), Xg(h, this, "ARG" + f) || delete this.Zg[b]);
        (this.R = e) && this.$();
      }
    }
  },
  jd: function() {
    for (var a = 0; a < this.ea.length; a++) {
      var b = H(this, "ARGNAME" + a);
      if (b) {
        w.j.disable();
        try {
          b.setValue(this.ea[a]);
        } finally {
          w.j.enable();
        }
      } else
        (b = new wh(this.ea[a])),
          M(zh(N(this, "ARG" + a), w.Nb), b, "ARGNAME" + a).N();
    }
    for (; J(this, "ARG" + a); ) this.yb("ARG" + a), a++;
    if ((a = J(this, "TOPROW")))
      if (this.ea.length)
        H(this, "WITH") ||
          (M(a, w.g.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.N());
      else if (H(this, "WITH")) {
        b = 0;
        for (var c; (c = a.Ia[b]); b++)
          if ("WITH" === c.name) {
            c.A();
            a.Ia.splice(b, 1);
            a.v.R && (a.v.$(), a.v.ob());
            break;
          }
      }
  },
  Ga: function() {
    var a = document.createElement("mutation");
    a.setAttribute("name", this.vd());
    for (var b = 0; b < this.ea.length; b++) {
      var c = document.createElement("arg");
      c.setAttribute("name", this.ea[b]);
      a.appendChild(c);
    }
    return a;
  },
  Za: function(a) {
    var b = a.getAttribute("name");
    this.ck(this.vd(), b);
    b = [];
    for (var c = [], e = 0, f; (f = a.childNodes[e]); e++)
      "arg" == f.nodeName.toLowerCase() &&
        (b.push(f.getAttribute("name")), c.push(f.getAttribute("paramId")));
    this.np(b, c);
  },
  Hf: function() {
    return this.Bb;
  },
  onchange: function(a) {
    if (this.o && !this.o.Nd)
      if (a.type == w.j.At && -1 != a.Mf.indexOf(this.id)) {
        var b = this.vd();
        b = w.ta.vl(b, this.o);
        !b ||
          (b.type == this.wn &&
            JSON.stringify(b.ea) == JSON.stringify(this.ea)) ||
          (b = null);
        if (!b) {
          w.j.S(a.group);
          a = E("xml");
          b = E("block");
          b.setAttribute("type", this.wn);
          var c = this.la(),
            e = c.y + 2 * w.Rc;
          b.setAttribute("x", c.x + w.Rc * (this.u ? -1 : 1));
          b.setAttribute("y", e);
          c = this.Ga();
          b.appendChild(c);
          c = E("field");
          c.setAttribute("name", "NAME");
          c.appendChild(document.createTextNode(this.vd()));
          b.appendChild(c);
          a.appendChild(b);
          w.D.ee(a, this.o);
          w.j.S(!1);
        }
      } else
        a.type == w.j.Bt &&
          ((b = this.vd()),
          (b = w.ta.vl(b, this.o)),
          b || (w.j.S(a.group), this.A(!0, !1), w.j.S(!1)));
  },
  Se: function(a) {
    var b = { enabled: !0 };
    b.text = w.g.PROCEDURES_HIGHLIGHT_DEF;
    var c = this.vd(),
      e = this.o;
    b.eb = function() {
      var a = w.ta.vl(c, e);
      if (a) {
        if (e.hb) {
          var b = Ic(e, a.id);
          if (b) {
            var k = b.la(),
              l = b.Gb(),
              m = e.scale;
            b = (k.x + ((e.u ? -1 : 1) * l.width) / 2) * m;
            k = (k.y + l.height / 2) * m;
            l = e.rb();
            b = b - l.Gc - l.xa / 2;
            k = k - l.oc - l.bb / 2;
            w.Pb();
            e.hb.set(b, k);
          }
        } else console.warn("Tried to scroll a non-scrollable workspace.");
        a.select();
      }
    };
    a.push(b);
  },
  wn: "procedures_defnoreturn"
};
w.J.procedures_callreturn = {
  N: function() {
    M(O(this, "TOPROW"), "", "NAME");
    this.xe(!0);
    this.qb(w.g.PROCEDURES_HUE);
    this.fc = w.g.PROCEDURES_CALLRETURN_HELPURL;
    this.ea = [];
    this.Zg = {};
    this.Rd = null;
  },
  vd: w.J.procedures_callnoreturn.vd,
  ck: w.J.procedures_callnoreturn.ck,
  np: w.J.procedures_callnoreturn.np,
  jd: w.J.procedures_callnoreturn.jd,
  Ga: w.J.procedures_callnoreturn.Ga,
  Za: w.J.procedures_callnoreturn.Za,
  Hf: w.J.procedures_callnoreturn.Hf,
  onchange: w.J.procedures_callnoreturn.onchange,
  Se: w.J.procedures_callnoreturn.Se,
  wn: "procedures_defreturn"
};
w.J.procedures_ifreturn = {
  N: function() {
    M(N(this, "CONDITION").Ca("Boolean"), w.g.CONTROLS_IF_MSG_IF);
    M(N(this, "VALUE"), w.g.PROCEDURES_DEFRETURN_RETURN);
    this.jg(!0);
    this.ye(!0);
    this.we(!0);
    this.qb(w.g.PROCEDURES_HUE);
    this.Ma(w.g.PROCEDURES_IFRETURN_TOOLTIP);
    this.fc = w.g.PROCEDURES_IFRETURN_HELPURL;
    this.Lf = !0;
  },
  Ga: function() {
    var a = document.createElement("mutation");
    a.setAttribute("value", Number(this.Lf));
    return a;
  },
  Za: function(a) {
    this.Lf = 1 == a.getAttribute("value");
    this.Lf ||
      (this.yb("VALUE"), M(O(this, "VALUE"), w.g.PROCEDURES_DEFRETURN_RETURN));
  },
  onchange: function() {
    if (this.o.pb && !this.o.pb()) {
      var a = !1,
        b = this;
      do {
        if (-1 != this.Rt.indexOf(b.type)) {
          a = !0;
          break;
        }
        b = Bh(b);
      } while (b);
      a
        ? ("procedures_defnoreturn" == b.type && this.Lf
            ? (this.yb("VALUE"),
              M(O(this, "VALUE"), w.g.PROCEDURES_DEFRETURN_RETURN),
              (this.Lf = !1))
            : "procedures_defreturn" != b.type ||
              this.Lf ||
              (this.yb("VALUE"),
              M(N(this, "VALUE"), w.g.PROCEDURES_DEFRETURN_RETURN),
              (this.Lf = !0)),
          this.ze(null),
          this.sb || this.Bd(!1))
        : (this.ze(w.g.PROCEDURES_IFRETURN_WARNING),
          this.sb || Ch(this) || this.Bd(!0));
    }
  },
  Rt: ["procedures_defnoreturn", "procedures_defreturn"]
};
w.J.Tx = {};
w.M.Text = {};
w.M.Text.Ji = 160;
w.Bg([
  {
    type: "text",
    message0: "%1",
    args0: [{ type: "field_input", name: "TEXT", text: "" }],
    output: "String",
    colour: "%{BKY_TEXTS_HUE}",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["text_quotes", "parent_tooltip_when_inline"]
  },
  {
    type: "text_join",
    message0: "",
    output: "String",
    colour: "%{BKY_TEXTS_HUE}",
    helpUrl: "%{BKY_TEXT_JOIN_HELPURL}",
    tooltip: "%{BKY_TEXT_JOIN_TOOLTIP}",
    mutator: "text_join_mutator"
  },
  {
    type: "text_create_join_container",
    message0: "%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2",
    args0: [
      { type: "input_dummy" },
      { type: "input_statement", name: "STACK" }
    ],
    colour: "%{BKY_TEXTS_HUE}",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_TOOLTIP}",
    enableContextMenu: !1
  },
  {
    type: "text_create_join_item",
    message0: "%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}",
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_TEXTS_HUE}",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}",
    enableContextMenu: !1
  },
  {
    type: "text_append",
    message0: "%{BKY_TEXT_APPEND_TITLE}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_TEXT_APPEND_VARIABLE}"
      },
      { type: "input_value", name: "TEXT" }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_TEXTS_HUE}",
    extensions: ["text_append_tooltip"]
  },
  {
    type: "text_length",
    message0: "%{BKY_TEXT_LENGTH_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Number",
    colour: "%{BKY_TEXTS_HUE}",
    tooltip: "%{BKY_TEXT_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_LENGTH_HELPURL}"
  },
  {
    type: "text_isEmpty",
    message0: "%{BKY_TEXT_ISEMPTY_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Boolean",
    colour: "%{BKY_TEXTS_HUE}",
    tooltip: "%{BKY_TEXT_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_ISEMPTY_HELPURL}"
  },
  {
    type: "text_indexOf",
    message0: "%{BKY_TEXT_INDEXOF_TITLE}",
    args0: [
      { type: "input_value", name: "VALUE", check: "String" },
      {
        type: "field_dropdown",
        name: "END",
        options: [
          ["%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}", "FIRST"],
          ["%{BKY_TEXT_INDEXOF_OPERATOR_LAST}", "LAST"]
        ]
      },
      { type: "input_value", name: "FIND", check: "String" }
    ],
    output: "Number",
    colour: "%{BKY_TEXTS_HUE}",
    helpUrl: "%{BKY_TEXT_INDEXOF_HELPURL}",
    inputsInline: !0,
    extensions: ["text_indexOf_tooltip"]
  },
  {
    type: "text_charAt",
    message0: "%{BKY_TEXT_CHARAT_TITLE}",
    args0: [
      { type: "input_value", name: "VALUE", check: "String" },
      {
        type: "field_dropdown",
        name: "WHERE",
        options: [
          ["%{BKY_TEXT_CHARAT_FROM_START}", "FROM_START"],
          ["%{BKY_TEXT_CHARAT_FROM_END}", "FROM_END"],
          ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"],
          ["%{BKY_TEXT_CHARAT_LAST}", "LAST"],
          ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"]
        ]
      }
    ],
    output: "String",
    colour: "%{BKY_TEXTS_HUE}",
    helpUrl: "%{BKY_TEXT_CHARAT_HELPURL}",
    inputsInline: !0,
    mutator: "text_charAt_mutator"
  }
]);
w.J.text_getSubstring = {
  N: function() {
    this.WHERE_OPTIONS_1 = [
      [w.g.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"],
      [w.g.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"],
      [w.g.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"]
    ];
    this.WHERE_OPTIONS_2 = [
      [w.g.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"],
      [w.g.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"],
      [w.g.TEXT_GET_SUBSTRING_END_LAST, "LAST"]
    ];
    this.fc = w.g.TEXT_GET_SUBSTRING_HELPURL;
    this.qb(w.g.TEXTS_HUE);
    M(N(this, "STRING").Ca("String"), w.g.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
    O(this, "AT1");
    O(this, "AT2");
    w.g.TEXT_GET_SUBSTRING_TAIL &&
      M(O(this, "TAIL"), w.g.TEXT_GET_SUBSTRING_TAIL);
    this.jg(!0);
    this.xe(!0, "String");
    this.rf(1, !0);
    this.rf(2, !0);
    this.Ma(w.g.TEXT_GET_SUBSTRING_TOOLTIP);
  },
  Ga: function() {
    var a = document.createElement("mutation");
    a.setAttribute("at1", J(this, "AT1").type == w.kb);
    a.setAttribute("at2", J(this, "AT2").type == w.kb);
    return a;
  },
  Za: function(a) {
    var b = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.rf(1, b);
    this.rf(2, a);
  },
  rf: function(a, b) {
    this.yb("AT" + a);
    this.yb("ORDINAL" + a, !0);
    b
      ? (N(this, "AT" + a).Ca("Number"),
        w.g.ORDINAL_NUMBER_SUFFIX &&
          M(O(this, "ORDINAL" + a), w.g.ORDINAL_NUMBER_SUFFIX))
      : O(this, "AT" + a);
    2 == a &&
      w.g.TEXT_GET_SUBSTRING_TAIL &&
      (this.yb("TAIL", !0), M(O(this, "TAIL"), w.g.TEXT_GET_SUBSTRING_TAIL));
    var c = new Dh(this["WHERE_OPTIONS_" + a], function(c) {
      var e = "FROM_START" == c || "FROM_END" == c;
      if (e != b) {
        var h = this.v;
        h.rf(a, e);
        H(h, "WHERE" + a).setValue(c);
        return null;
      }
    });
    M(J(this, "AT" + a), c, "WHERE" + a);
    1 == a &&
      (Fh(this, "AT1", "AT2"),
      J(this, "ORDINAL1") && Fh(this, "ORDINAL1", "AT2"));
  }
};
w.J.text_changeCase = {
  N: function() {
    var a = [
      [w.g.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"],
      [w.g.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"],
      [w.g.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"]
    ];
    this.fc = w.g.TEXT_CHANGECASE_HELPURL;
    this.qb(w.g.TEXTS_HUE);
    M(N(this, "TEXT").Ca("String"), new Dh(a), "CASE");
    this.xe(!0, "String");
    this.Ma(w.g.TEXT_CHANGECASE_TOOLTIP);
  }
};
w.J.text_trim = {
  N: function() {
    var a = [
      [w.g.TEXT_TRIM_OPERATOR_BOTH, "BOTH"],
      [w.g.TEXT_TRIM_OPERATOR_LEFT, "LEFT"],
      [w.g.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"]
    ];
    this.fc = w.g.TEXT_TRIM_HELPURL;
    this.qb(w.g.TEXTS_HUE);
    M(N(this, "TEXT").Ca("String"), new Dh(a), "MODE");
    this.xe(!0, "String");
    this.Ma(w.g.TEXT_TRIM_TOOLTIP);
  }
};
w.J.text_print = {
  N: function() {
    Eh(this, {
      message0: w.g.TEXT_PRINT_TITLE,
      args0: [{ type: "input_value", name: "TEXT" }],
      previousStatement: null,
      nextStatement: null,
      colour: w.g.TEXTS_HUE,
      tooltip: w.g.TEXT_PRINT_TOOLTIP,
      helpUrl: w.g.TEXT_PRINT_HELPURL
    });
  }
};
w.J.text_prompt_ext = {
  N: function() {
    var a = [
      [w.g.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
      [w.g.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]
    ];
    this.fc = w.g.TEXT_PROMPT_HELPURL;
    this.qb(w.g.TEXTS_HUE);
    var b = this;
    a = new Dh(a, function(a) {
      b.pg(a);
    });
    M(N(this, "TEXT"), a, "TYPE");
    this.xe(!0, "String");
    this.Ma(function() {
      return "TEXT" == D(b, "TYPE")
        ? w.g.TEXT_PROMPT_TOOLTIP_TEXT
        : w.g.TEXT_PROMPT_TOOLTIP_NUMBER;
    });
  },
  pg: function(a) {
    this.P.Ca("NUMBER" == a ? "Number" : "String");
  },
  Ga: function() {
    var a = document.createElement("mutation");
    a.setAttribute("type", D(this, "TYPE"));
    return a;
  },
  Za: function(a) {
    this.pg(a.getAttribute("type"));
  }
};
w.J.text_prompt = {
  N: function() {
    Zg(this, w.M.Text.Rm);
    var a = [
        [w.g.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
        [w.g.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]
      ],
      b = this;
    this.fc = w.g.TEXT_PROMPT_HELPURL;
    this.qb(w.g.TEXTS_HUE);
    a = new Dh(a, function(a) {
      b.pg(a);
    });
    M(
      M(M(M(O(this), a, "TYPE"), this.li(!0)), new gj(""), "TEXT"),
      this.li(!1)
    );
    this.xe(!0, "String");
    this.Ma(function() {
      return "TEXT" == D(b, "TYPE")
        ? w.g.TEXT_PROMPT_TOOLTIP_TEXT
        : w.g.TEXT_PROMPT_TOOLTIP_NUMBER;
    });
  },
  pg: w.J.text_prompt_ext.pg,
  Ga: w.J.text_prompt_ext.Ga,
  Za: w.J.text_prompt_ext.Za
};
w.J.text_count = {
  N: function() {
    Eh(this, {
      message0: w.g.TEXT_COUNT_MESSAGE0,
      args0: [
        { type: "input_value", name: "SUB", check: "String" },
        { type: "input_value", name: "TEXT", check: "String" }
      ],
      output: "Number",
      inputsInline: !0,
      colour: w.g.TEXTS_HUE,
      tooltip: w.g.TEXT_COUNT_TOOLTIP,
      helpUrl: w.g.TEXT_COUNT_HELPURL
    });
  }
};
w.J.text_replace = {
  N: function() {
    Eh(this, {
      message0: w.g.TEXT_REPLACE_MESSAGE0,
      args0: [
        { type: "input_value", name: "FROM", check: "String" },
        { type: "input_value", name: "TO", check: "String" },
        { type: "input_value", name: "TEXT", check: "String" }
      ],
      output: "String",
      inputsInline: !0,
      colour: w.g.TEXTS_HUE,
      tooltip: w.g.TEXT_REPLACE_TOOLTIP,
      helpUrl: w.g.TEXT_REPLACE_HELPURL
    });
  }
};
w.J.text_reverse = {
  N: function() {
    Eh(this, {
      message0: w.g.TEXT_REVERSE_MESSAGE0,
      args0: [{ type: "input_value", name: "TEXT", check: "String" }],
      output: "String",
      inputsInline: !0,
      colour: w.g.TEXTS_HUE,
      tooltip: w.g.TEXT_REVERSE_TOOLTIP,
      helpUrl: w.g.TEXT_REVERSE_HELPURL
    });
  }
};
w.M.Text.Rm = {
  pu:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
  qu:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
  su: 12,
  ou: 12,
  Cx: function(a) {
    for (var b = 0, c; (c = this.W[b]); b++)
      for (var e = 0, f; (f = c.Ia[e]); e++)
        if (a == f.name) {
          yh(c, e, this.li(!0));
          yh(c, e + 2, this.li(!1));
          return;
        }
    console.warn('field named "' + a + '" not found in ' + Se(this));
  },
  li: function(a) {
    a = this.u ? !a : a;
    return new ok(
      a ? this.pu : this.qu,
      this.su,
      this.ou,
      a ? "\u201c" : "\u201d"
    );
  }
};
w.M.Text.Eu = function() {
  Zg(this, w.M.Text.Rm);
  this.Cx("TEXT");
};
w.M.Text.Du = {
  Ga: function() {
    var a = document.createElement("mutation");
    a.setAttribute("items", this.yd);
    return a;
  },
  Za: function(a) {
    this.yd = parseInt(a.getAttribute("items"), 10);
    this.jd();
  },
  Te: function(a) {
    var b = a.bf("text_create_join_container");
    b.xc();
    for (var c = J(b, "STACK").connection, e = 0; e < this.yd; e++) {
      var f = a.bf("text_create_join_item");
      f.xc();
      c.connect(f.Z);
      c = f.L;
    }
    return b;
  },
  Re: function(a) {
    var b = Gh(a, "STACK");
    for (a = []; b; ) a.push(b.Hp), (b = b.L && I(b.L));
    for (b = 0; b < this.yd; b++) {
      var c = J(this, "ADD" + b).connection.Pa;
      c && -1 == a.indexOf(c) && c.disconnect();
    }
    this.yd = a.length;
    this.jd();
    for (b = 0; b < this.yd; b++) Xg(a[b], this, "ADD" + b);
  },
  sm: function(a) {
    a = Gh(a, "STACK");
    for (var b = 0; a; ) {
      var c = J(this, "ADD" + b);
      a.Hp = c && c.connection.Pa;
      b++;
      a = a.L && I(a.L);
    }
  },
  jd: function() {
    this.yd && J(this, "EMPTY")
      ? this.yb("EMPTY")
      : this.yd ||
        J(this, "EMPTY") ||
        M(M(O(this, "EMPTY"), this.li(!0)), this.li(!1));
    for (var a = 0; a < this.yd; a++)
      if (!J(this, "ADD" + a)) {
        var b = N(this, "ADD" + a);
        0 == a && M(b, w.g.TEXT_JOIN_TITLE_CREATEWITH);
      }
    for (; J(this, "ADD" + a); ) this.yb("ADD" + a), a++;
  }
};
w.M.Text.Cu = function() {
  Zg(this, w.M.Text.Rm);
  this.yd = 2;
  this.jd();
  this.ik(new Wg(["text_create_join_item"]));
};
w.K.register("text_append_tooltip", w.K.Pk("%{BKY_TEXT_APPEND_TOOLTIP}"));
w.M.Text.Bu = function() {
  var a = this;
  this.Ma(function() {
    return w.g.TEXT_INDEXOF_TOOLTIP.replace("%1", a.o.options.ef ? "0" : "-1");
  });
};
w.M.Text.Au = {
  Ga: function() {
    var a = document.createElement("mutation");
    a.setAttribute("at", !!this.Qr);
    return a;
  },
  Za: function(a) {
    a = "false" != a.getAttribute("at");
    this.rf(a);
  },
  rf: function(a) {
    this.yb("AT", !0);
    this.yb("ORDINAL", !0);
    a &&
      (N(this, "AT").Ca("Number"),
      w.g.ORDINAL_NUMBER_SUFFIX &&
        M(O(this, "ORDINAL"), w.g.ORDINAL_NUMBER_SUFFIX));
    w.g.TEXT_CHARAT_TAIL &&
      (this.yb("TAIL", !0), M(O(this, "TAIL"), w.g.TEXT_CHARAT_TAIL));
    this.Qr = a;
  }
};
w.M.Text.zu = function() {
  sh(H(this, "WHERE"), function(a) {
    var b = "FROM_START" == a || "FROM_END" == a;
    if (b != this.Qr) {
      var e = this.v;
      e.rf(b);
      H(e, "WHERE").setValue(a);
      return null;
    }
  });
  this.rf(!0);
  var a = this;
  this.Ma(function() {
    var b = D(a, "WHERE"),
      c = w.g.TEXT_CHARAT_TOOLTIP;
    ("FROM_START" == b || "FROM_END" == b) &&
      (b =
        "FROM_START" == b
          ? w.g.LISTS_INDEX_FROM_START_TOOLTIP
          : w.g.LISTS_INDEX_FROM_END_TOOLTIP) &&
      (c += "  " + b.replace("%1", a.o.options.ef ? "#1" : "#0"));
    return c;
  });
};
w.K.register("text_indexOf_tooltip", w.M.Text.Bu);
w.K.register("text_quotes", w.M.Text.Eu);
w.K.ak("text_join_mutator", w.M.Text.Du, w.M.Text.Cu);
w.K.ak("text_charAt_mutator", w.M.Text.Au, w.M.Text.zu);
w.J.ay = {};
w.M.G = {};
w.M.G.Ji = 330;
w.Bg([
  {
    type: "variables_get",
    message0: "%1",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
      }
    ],
    output: null,
    colour: "%{BKY_VARIABLES_HUE}",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableSetterGetter"]
  },
  {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
      },
      { type: "input_value", name: "VALUE" }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_VARIABLES_HUE}",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableSetterGetter"]
  }
]);
w.M.G.Lt = {
  Se: function(a) {
    if (!this.sb) {
      if ("variables_get" == this.type)
        var b = "variables_set",
          c = w.g.VARIABLES_GET_CREATE_SET;
      else (b = "variables_get"), (c = w.g.VARIABLES_SET_CREATE_GET);
      var e = { enabled: 0 < dd(this.o) },
        f = H(this, "VAR").Hb();
      e.text = c.replace("%1", f);
      c = E("field", null, f);
      c.setAttribute("name", "VAR");
      c = E("block", null, c);
      c.setAttribute("type", b);
      e.eb = w.ba.Rk(this, c);
      a.push(e);
    }
  }
};
w.K.nm("contextMenu_variableSetterGetter", w.M.G.Lt);
// Copyright 2012 Google Inc.  Apache License 2.0
w.h = new Ah();
zk(
  "Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan"
);
w.h.Je = 0;
w.h.xA = 1.1;
w.h.vb = 1.2;
w.h.Ea = 2;
w.h.vA = 3;
w.h.rA = 3;
w.h.nA = 4.1;
w.h.zA = 4.2;
w.h.Ri = 4.3;
w.h.Pi = 4.4;
w.h.yA = 4.5;
w.h.AA = 4.6;
w.h.sA = 4.7;
w.h.lA = 4.8;
w.h.tA = 5;
w.h.Qm = 5.1;
w.h.Kk = 5.2;
w.h.Qi = 5.3;
w.h.Fh = 6.1;
w.h.vf = 6.2;
w.h.pA = 7;
w.h.nu = 8;
w.h.uA = 8;
w.h.wA = 8;
w.h.Vp = 9;
w.h.mA = 10;
w.h.qA = 11;
w.h.oA = 12;
w.h.Om = 13;
w.h.Pm = 14;
w.h.Jk = 15;
w.h.Eh = 16;
w.h.BA = 17;
w.h.Tb = 18;
w.h.oa = 99;
w.h.Lk = [
  [w.h.Ea, w.h.vb],
  [w.h.Ea, w.h.Ea],
  [w.h.vb, w.h.vb],
  [w.h.vb, w.h.Ea],
  [w.h.Pi, w.h.Pi],
  [w.h.Qm, w.h.Qm],
  [w.h.vf, w.h.vf],
  [w.h.Om, w.h.Om],
  [w.h.Pm, w.h.Pm]
];
w.h.N = function(a) {
  w.h.Cg = Object.create(null);
  w.h.Mn = Object.create(null);
  w.h.ab ? w.h.ab.reset() : (w.h.ab = new Ck());
  w.h.ab.sa = a.sa;
  for (var b = [], c = w.G.Ou(a), e = 0; e < c.length; e++)
    b.push(w.h.ab.getName(c[e], "DEVELOPER_VARIABLE"));
  a = w.G.fq(a);
  for (e = 0; e < a.length; e++) b.push(w.h.ab.getName(a[e].aa(), w.G.cb));
  b.length && (w.h.Cg.variables = "var " + b.join(", ") + ";");
};
w.h.finish = function(a) {
  var b = [],
    c;
  for (c in w.h.Cg) b.push(w.h.Cg[c]);
  delete w.h.Cg;
  delete w.h.Mn;
  w.h.ab.reset();
  return b.join("\n\n") + "\n\n\n" + a;
};
w.h.Zs = function(a) {
  return a + ";\n";
};
w.h.Rs = function(a) {
  a = a
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\\n")
    .replace(/'/g, "\\'");
  return "'" + a + "'";
};
w.h.tm = function(a, b) {
  var c = "";
  if (!a.P || !a.P.Pa) {
    var e = a.ul();
    (e = w.i.yt(e, w.h.Ft - 3)) &&
      (c = a.Ye
        ? c + ("/**\n" + wk(e + "\n", " * ") + " */\n")
        : c + wk(e + "\n", "// "));
    for (var f = 0; f < a.W.length; f++)
      if (a.W[f].type == w.kb) {
        var h = I(a.W[f].connection);
        if (h) {
          e = [];
          h = vc(h, !0);
          for (var k = 0; k < h.length; k++) {
            var l = h[k].ul();
            l && e.push(l);
          }
          e.length && e.push("");
          (e = e.join("\n")) && (c += wk(e, "// "));
        }
      }
  }
  a = a.L && I(a.L);
  a = vk(w.h, a);
  return c + b + a;
};
w.h.Ff = function(a, b, c, e, f) {
  c = c || 0;
  f = f || w.h.oa;
  a.o.options.ef && c--;
  var h = a.o.options.ef ? "1" : "0";
  a =
    0 < c
      ? R(a, b, w.h.vf) || h
      : 0 > c
      ? R(a, b, w.h.Fh) || h
      : e
      ? R(a, b, w.h.Ri) || h
      : R(a, b, f) || h;
  if (w.Sf(a)) (a = parseFloat(a) + c), e && (a = -a);
  else {
    if (0 < c) {
      a = a + " + " + c;
      var k = w.h.vf;
    } else 0 > c && ((a = a + " - " + -c), (k = w.h.Fh));
    e && ((a = c ? "-(" + a + ")" : "-" + a), (k = w.h.Ri));
    k = Math.floor(k);
    f = Math.floor(f);
    k && f >= k && (a = "(" + a + ")");
  }
  return a;
};
w.h.Aq = {};
w.h.colour_picker = function(a) {
  return ["'" + D(a, "COLOUR") + "'", w.h.Je];
};
w.h.colour_random = function() {
  return [
    Ak("colourRandom", [
      "function " + w.h.$b + "() {",
      "  var num = Math.floor(Math.random() * Math.pow(2, 24));",
      "  return '#' + ('00000' + num.toString(16)).substr(-6);",
      "}"
    ]) + "()",
    w.h.Ea
  ];
};
w.h.colour_rgb = function(a) {
  var b = R(a, "RED", w.h.Tb) || 0,
    c = R(a, "GREEN", w.h.Tb) || 0;
  a = R(a, "BLUE", w.h.Tb) || 0;
  return [
    Ak("colourRgb", [
      "function " + w.h.$b + "(r, g, b) {",
      "  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;",
      "  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;",
      "  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;",
      "  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);",
      "  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);",
      "  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);",
      "  return '#' + r + g + b;",
      "}"
    ]) +
      "(" +
      b +
      ", " +
      c +
      ", " +
      a +
      ")",
    w.h.Ea
  ];
};
w.h.colour_blend = function(a) {
  var b = R(a, "COLOUR1", w.h.Tb) || "'#000000'",
    c = R(a, "COLOUR2", w.h.Tb) || "'#000000'";
  a = R(a, "RATIO", w.h.Tb) || 0.5;
  return [
    Ak("colourBlend", [
      "function " + w.h.$b + "(c1, c2, ratio) {",
      "  ratio = Math.max(Math.min(Number(ratio), 1), 0);",
      "  var r1 = parseInt(c1.substring(1, 3), 16);",
      "  var g1 = parseInt(c1.substring(3, 5), 16);",
      "  var b1 = parseInt(c1.substring(5, 7), 16);",
      "  var r2 = parseInt(c2.substring(1, 3), 16);",
      "  var g2 = parseInt(c2.substring(3, 5), 16);",
      "  var b2 = parseInt(c2.substring(5, 7), 16);",
      "  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);",
      "  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);",
      "  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);",
      "  r = ('0' + (r || 0).toString(16)).slice(-2);",
      "  g = ('0' + (g || 0).toString(16)).slice(-2);",
      "  b = ('0' + (b || 0).toString(16)).slice(-2);",
      "  return '#' + r + g + b;",
      "}"
    ]) +
      "(" +
      b +
      ", " +
      c +
      ", " +
      a +
      ")",
    w.h.Ea
  ];
};
w.h.Qw = {};
w.h.controls_if = function(a) {
  var b = 0,
    c = "";
  do {
    var e = R(a, "IF" + b, w.h.oa) || "false";
    var f = xk(a, "DO" + b);
    c += (0 < b ? " else " : "") + "if (" + e + ") {\n" + f + "}";
    ++b;
  } while (J(a, "IF" + b));
  J(a, "ELSE") && ((f = xk(a, "ELSE")), (c += " else {\n" + f + "}"));
  return c + "\n";
};
w.h.controls_ifelse = w.h.controls_if;
w.h.logic_compare = function(a) {
  var b = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[
      D(a, "OP")
    ],
    c = "==" == b || "!=" == b ? w.h.Vp : w.h.nu,
    e = R(a, "A", c) || "0";
  a = R(a, "B", c) || "0";
  return [e + " " + b + " " + a, c];
};
w.h.logic_operation = function(a) {
  var b = "AND" == D(a, "OP") ? "&&" : "||",
    c = "&&" == b ? w.h.Om : w.h.Pm,
    e = R(a, "A", c);
  a = R(a, "B", c);
  if (e || a) {
    var f = "&&" == b ? "true" : "false";
    e || (e = f);
    a || (a = f);
  } else a = e = "false";
  return [e + " " + b + " " + a, c];
};
w.h.logic_negate = function(a) {
  var b = w.h.Pi;
  return ["!" + (R(a, "BOOL", b) || "true"), b];
};
w.h.logic_boolean = function(a) {
  return ["TRUE" == D(a, "BOOL") ? "true" : "false", w.h.Je];
};
w.h.logic_null = function() {
  return ["null", w.h.Je];
};
w.h.logic_ternary = function(a) {
  var b = R(a, "IF", w.h.Jk) || "false",
    c = R(a, "THEN", w.h.Jk) || "null";
  a = R(a, "ELSE", w.h.Jk) || "null";
  return [b + " ? " + c + " : " + a, w.h.Jk];
};
w.h.Sw = {};
w.h.controls_repeat_ext = function(a) {
  var b = H(a, "TIMES")
      ? String(Number(D(a, "TIMES")))
      : R(a, "TIMES", w.h.Eh) || "0",
    c = xk(a, "DO");
  c = yk(c, a.id);
  a = "";
  var e = Bk(w.h.ab, "count", w.G.cb),
    f = b;
  b.match(/^\w+$/) ||
    w.Sf(b) ||
    ((f = Bk(w.h.ab, "repeat_end", w.G.cb)),
    (a += "var " + f + " = " + b + ";\n"));
  return (
    a +
    ("for (var " +
      e +
      " = 0; " +
      e +
      " < " +
      f +
      "; " +
      e +
      "++) {\n" +
      c +
      "}\n")
  );
};
w.h.controls_repeat = w.h.controls_repeat_ext;
w.h.controls_whileUntil = function(a) {
  var b = "UNTIL" == D(a, "MODE"),
    c = R(a, "BOOL", b ? w.h.Pi : w.h.oa) || "false",
    e = xk(a, "DO");
  e = yk(e, a.id);
  b && (c = "!" + c);
  return "while (" + c + ") {\n" + e + "}\n";
};
w.h.controls_for = function(a) {
  var b = w.h.ab.getName(D(a, "VAR"), w.G.cb),
    c = R(a, "FROM", w.h.Eh) || "0",
    e = R(a, "TO", w.h.Eh) || "0",
    f = R(a, "BY", w.h.Eh) || "1",
    h = xk(a, "DO");
  h = yk(h, a.id);
  if (w.Sf(c) && w.Sf(e) && w.Sf(f)) {
    var k = parseFloat(c) <= parseFloat(e);
    a =
      "for (" + b + " = " + c + "; " + b + (k ? " <= " : " >= ") + e + "; " + b;
    b = Math.abs(parseFloat(f));
    a =
      (1 == b ? a + (k ? "++" : "--") : a + ((k ? " += " : " -= ") + b)) +
      (") {\n" + h + "}\n");
  } else
    (a = ""),
      (k = c),
      c.match(/^\w+$/) ||
        w.Sf(c) ||
        ((k = Bk(w.h.ab, b + "_start", w.G.cb)),
        (a += "var " + k + " = " + c + ";\n")),
      (c = e),
      e.match(/^\w+$/) ||
        w.Sf(e) ||
        ((c = Bk(w.h.ab, b + "_end", w.G.cb)),
        (a += "var " + c + " = " + e + ";\n")),
      (e = Bk(w.h.ab, b + "_inc", w.G.cb)),
      (a += "var " + e + " = "),
      (a = w.Sf(f)
        ? a + (Math.abs(f) + ";\n")
        : a + ("Math.abs(" + f + ");\n")),
      (a =
        a +
        ("if (" + k + " > " + c + ") {\n") +
        (w.h.He + e + " = -" + e + ";\n")),
      (a += "}\n"),
      (a +=
        "for (" +
        b +
        " = " +
        k +
        "; " +
        e +
        " >= 0 ? " +
        b +
        " <= " +
        c +
        " : " +
        b +
        " >= " +
        c +
        "; " +
        b +
        " += " +
        e +
        ") {\n" +
        h +
        "}\n");
  return a;
};
w.h.controls_forEach = function(a) {
  var b = w.h.ab.getName(D(a, "VAR"), w.G.cb),
    c = R(a, "LIST", w.h.Eh) || "[]",
    e = xk(a, "DO");
  e = yk(e, a.id);
  a = "";
  var f = c;
  c.match(/^\w+$/) ||
    ((f = Bk(w.h.ab, b + "_list", w.G.cb)),
    (a += "var " + f + " = " + c + ";\n"));
  c = Bk(w.h.ab, b + "_index", w.G.cb);
  e = w.h.He + b + " = " + f + "[" + c + "];\n" + e;
  return a + ("for (var " + c + " in " + f + ") {\n" + e + "}\n");
};
w.h.controls_flow_statements = function(a) {
  switch (D(a, "FLOW")) {
    case "BREAK":
      return "break;\n";
    case "CONTINUE":
      return "continue;\n";
  }
  throw "Unknown flow statement.";
};
w.h.Tw = {};
w.h.math_number = function(a) {
  a = parseFloat(D(a, "NUM"));
  return [a, 0 <= a ? w.h.Je : w.h.Ri];
};
w.h.math_arithmetic = function(a) {
  var b = {
      ADD: [" + ", w.h.vf],
      MINUS: [" - ", w.h.Fh],
      MULTIPLY: [" * ", w.h.Qm],
      DIVIDE: [" / ", w.h.Kk],
      POWER: [null, w.h.Tb]
    }[D(a, "OP")],
    c = b[0];
  b = b[1];
  var e = R(a, "A", b) || "0";
  a = R(a, "B", b) || "0";
  return c ? [e + c + a, b] : ["Math.pow(" + e + ", " + a + ")", w.h.Ea];
};
w.h.math_single = function(a) {
  var b = D(a, "OP");
  if ("NEG" == b)
    return (
      (a = R(a, "NUM", w.h.Ri) || "0"),
      "-" == a[0] && (a = " " + a),
      ["-" + a, w.h.Ri]
    );
  a =
    "SIN" == b || "COS" == b || "TAN" == b
      ? R(a, "NUM", w.h.Kk) || "0"
      : R(a, "NUM", w.h.oa) || "0";
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
  if (c) return [c, w.h.Ea];
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
  return [c, w.h.Kk];
};
w.h.math_constant = function(a) {
  return {
    PI: ["Math.PI", w.h.vb],
    E: ["Math.E", w.h.vb],
    GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", w.h.Kk],
    SQRT2: ["Math.SQRT2", w.h.vb],
    SQRT1_2: ["Math.SQRT1_2", w.h.vb],
    INFINITY: ["Infinity", w.h.Je]
  }[D(a, "CONSTANT")];
};
w.h.math_number_property = function(a) {
  var b = R(a, "NUMBER_TO_CHECK", w.h.Qi) || "0",
    c = D(a, "PROPERTY");
  if ("PRIME" == c) {
    var e =
      Ak("mathIsPrime", [
        "function " + w.h.$b + "(n) {",
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
    return [e, w.h.Ea];
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
      (a = R(a, "DIVISOR", w.h.Qi) || "0"), (e = b + " % " + a + " == 0");
  }
  return [e, w.h.Vp];
};
w.h.math_change = function(a) {
  var b = R(a, "DELTA", w.h.vf) || "0";
  a = w.h.ab.getName(D(a, "VAR"), w.G.cb);
  return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + b + ";\n";
};
w.h.math_round = w.h.math_single;
w.h.math_trig = w.h.math_single;
w.h.math_on_list = function(a) {
  var b = D(a, "OP");
  switch (b) {
    case "SUM":
      a = R(a, "LIST", w.h.vb) || "[]";
      a += ".reduce(function(x, y) {return x + y;})";
      break;
    case "MIN":
      a = R(a, "LIST", w.h.Tb) || "[]";
      a = "Math.min.apply(null, " + a + ")";
      break;
    case "MAX":
      a = R(a, "LIST", w.h.Tb) || "[]";
      a = "Math.max.apply(null, " + a + ")";
      break;
    case "AVERAGE":
      b = Ak("mathMean", [
        "function " + w.h.$b + "(myList) {",
        "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;",
        "}"
      ]);
      a = R(a, "LIST", w.h.oa) || "[]";
      a = b + "(" + a + ")";
      break;
    case "MEDIAN":
      b = Ak("mathMedian", [
        "function " + w.h.$b + "(myList) {",
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
      a = R(a, "LIST", w.h.oa) || "[]";
      a = b + "(" + a + ")";
      break;
    case "MODE":
      b = Ak("mathModes", [
        "function " + w.h.$b + "(values) {",
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
      a = R(a, "LIST", w.h.oa) || "[]";
      a = b + "(" + a + ")";
      break;
    case "STD_DEV":
      b = Ak("mathStandardDeviation", [
        "function " + w.h.$b + "(numbers) {",
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
      a = R(a, "LIST", w.h.oa) || "[]";
      a = b + "(" + a + ")";
      break;
    case "RANDOM":
      b = Ak("mathRandomList", [
        "function " + w.h.$b + "(list) {",
        "  var x = Math.floor(Math.random() * list.length);",
        "  return list[x];",
        "}"
      ]);
      a = R(a, "LIST", w.h.oa) || "[]";
      a = b + "(" + a + ")";
      break;
    default:
      throw "Unknown operator: " + b;
  }
  return [a, w.h.Ea];
};
w.h.math_modulo = function(a) {
  var b = R(a, "DIVIDEND", w.h.Qi) || "0";
  a = R(a, "DIVISOR", w.h.Qi) || "0";
  return [b + " % " + a, w.h.Qi];
};
w.h.math_constrain = function(a) {
  var b = R(a, "VALUE", w.h.Tb) || "0",
    c = R(a, "LOW", w.h.Tb) || "0";
  a = R(a, "HIGH", w.h.Tb) || "Infinity";
  return ["Math.min(Math.max(" + b + ", " + c + "), " + a + ")", w.h.Ea];
};
w.h.math_random_int = function(a) {
  var b = R(a, "FROM", w.h.Tb) || "0";
  a = R(a, "TO", w.h.Tb) || "0";
  return [
    Ak("mathRandomInt", [
      "function " + w.h.$b + "(a, b) {",
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
    w.h.Ea
  ];
};
w.h.math_random_float = function() {
  return ["Math.random()", w.h.Ea];
};
w.h.Bx = {};
w.h.procedures_defreturn = function(a) {
  var b = w.h.ab.getName(D(a, "NAME"), w.ta.cb),
    c = xk(a, "STACK");
  if (w.h.Hh) {
    var e = a.id.replace(/\$/g, "$$$$");
    c = wk(w.h.Hh.replace(/%1/g, "'" + e + "'"), w.h.He) + c;
  }
  w.h.Hk && (c = w.h.Hk.replace(/%1/g, "'" + a.id + "'") + c);
  (e = R(a, "RETURN", w.h.oa) || "") && (e = w.h.He + "return " + e + ";\n");
  for (var f = [], h = 0; h < a.ea.length; h++)
    f[h] = w.h.ab.getName(a.ea[h], w.G.cb);
  c = "function " + b + "(" + f.join(", ") + ") {\n" + c + e + "}";
  c = w.h.tm(a, c);
  w.h.Cg["%" + b] = c;
  return null;
};
w.h.procedures_defnoreturn = w.h.procedures_defreturn;
w.h.procedures_callreturn = function(a) {
  for (
    var b = w.h.ab.getName(D(a, "NAME"), w.ta.cb), c = [], e = 0;
    e < a.ea.length;
    e++
  )
    c[e] = R(a, "ARG" + e, w.h.Tb) || "null";
  return [b + "(" + c.join(", ") + ")", w.h.Ea];
};
w.h.procedures_callnoreturn = function(a) {
  for (
    var b = w.h.ab.getName(D(a, "NAME"), w.ta.cb), c = [], e = 0;
    e < a.ea.length;
    e++
  )
    c[e] = R(a, "ARG" + e, w.h.Tb) || "null";
  return b + "(" + c.join(", ") + ");\n";
};
w.h.procedures_ifreturn = function(a) {
  var b = "if (" + (R(a, "CONDITION", w.h.oa) || "false") + ") {\n";
  a.Lf
    ? ((a = R(a, "VALUE", w.h.oa) || "null"),
      (b += w.h.He + "return " + a + ";\n"))
    : (b += w.h.He + "return;\n");
  return b + "}\n";
};
w.h.Tx = {};
w.h.text = function(a) {
  return [w.h.Rs(D(a, "TEXT")), w.h.Je];
};
w.h.text_join = function(a) {
  switch (a.yd) {
    case 0:
      return ["''", w.h.Je];
    case 1:
      return (
        (a = "String(" + (R(a, "ADD0", w.h.oa) || "''") + ")"), [a, w.h.Ea]
      );
    case 2:
      var b = R(a, "ADD0", w.h.oa) || "''";
      a = R(a, "ADD1", w.h.oa) || "''";
      return ["String(" + b + ") + String(" + a + ")", w.h.vf];
    default:
      b = Array(a.yd);
      for (var c = 0; c < a.yd; c++) b[c] = R(a, "ADD" + c, w.h.Tb) || "''";
      a = "[" + b.join(",") + "].join('')";
      return [a, w.h.Ea];
  }
};
w.h.text_append = function(a) {
  var b = w.h.ab.getName(D(a, "VAR"), w.G.cb);
  a = R(a, "TEXT", w.h.oa) || "''";
  return b + " = String(" + b + ") + String(" + a + ");\n";
};
w.h.text_length = function(a) {
  return [(R(a, "VALUE", w.h.Ea) || "''") + ".length", w.h.vb];
};
w.h.text_isEmpty = function(a) {
  return ["!" + (R(a, "VALUE", w.h.vb) || "''") + ".length", w.h.Pi];
};
w.h.text_indexOf = function(a) {
  var b = "FIRST" == D(a, "END") ? "indexOf" : "lastIndexOf",
    c = R(a, "FIND", w.h.oa) || "''";
  b = (R(a, "VALUE", w.h.vb) || "''") + "." + b + "(" + c + ")";
  return a.o.options.ef ? [b + " + 1", w.h.vf] : [b, w.h.Ea];
};
w.h.text_charAt = function(a) {
  var b = D(a, "WHERE") || "FROM_START",
    c = R(a, "VALUE", "RANDOM" == b ? w.h.oa : w.h.vb) || "''";
  switch (b) {
    case "FIRST":
      return [c + ".charAt(0)", w.h.Ea];
    case "LAST":
      return [c + ".slice(-1)", w.h.Ea];
    case "FROM_START":
      return (a = w.h.Ff(a, "AT")), [c + ".charAt(" + a + ")", w.h.Ea];
    case "FROM_END":
      return (
        (a = w.h.Ff(a, "AT", 1, !0)),
        [c + ".slice(" + a + ").charAt(0)", w.h.Ea]
      );
    case "RANDOM":
      return (
        (c =
          Ak("textRandomLetter", [
            "function " + w.h.$b + "(text) {",
            "  var x = Math.floor(Math.random() * text.length);",
            "  return text[x];",
            "}"
          ]) +
          "(" +
          c +
          ")"),
        [c, w.h.Ea]
      );
  }
  throw "Unhandled option (text_charAt).";
};
w.h.text.dw = function(a, b, c) {
  return "FIRST" == b
    ? "0"
    : "FROM_END" == b
    ? a + ".length - 1 - " + c
    : "LAST" == b
    ? a + ".length - 1"
    : c;
};
w.h.text_getSubstring = function(a) {
  var b = R(a, "STRING", w.h.Ea) || "''",
    c = D(a, "WHERE1"),
    e = D(a, "WHERE2");
  if ("FIRST" != c || "LAST" != e)
    if (
      b.match(/^'?\w+'?$/) ||
      ("FROM_END" != c && "LAST" != c && "FROM_END" != e && "LAST" != e)
    ) {
      switch (c) {
        case "FROM_START":
          var f = w.h.Ff(a, "AT1");
          break;
        case "FROM_END":
          f = w.h.Ff(a, "AT1", 1, !1, w.h.Fh);
          f = b + ".length - " + f;
          break;
        case "FIRST":
          f = "0";
          break;
        default:
          throw "Unhandled option (text_getSubstring).";
      }
      switch (e) {
        case "FROM_START":
          a = w.h.Ff(a, "AT2", 1);
          break;
        case "FROM_END":
          a = w.h.Ff(a, "AT2", 0, !1, w.h.Fh);
          a = b + ".length - " + a;
          break;
        case "LAST":
          a = b + ".length";
          break;
        default:
          throw "Unhandled option (text_getSubstring).";
      }
      b = b + ".slice(" + f + ", " + a + ")";
    } else {
      f = w.h.Ff(a, "AT1");
      a = w.h.Ff(a, "AT2");
      var h = w.h.text.dw,
        k = {
          FIRST: "First",
          LAST: "Last",
          FROM_START: "FromStart",
          FROM_END: "FromEnd"
        };
      b =
        Ak("subsequence" + k[c] + k[e], [
          "function " +
            w.h.$b +
            "(sequence" +
            ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") +
            ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") +
            ") {",
          "  var start = " + h("sequence", c, "at1") + ";",
          "  var end = " + h("sequence", e, "at2") + " + 1;",
          "  return sequence.slice(start, end);",
          "}"
        ]) +
        "(" +
        b +
        ("FROM_END" == c || "FROM_START" == c ? ", " + f : "") +
        ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") +
        ")";
    }
  return [b, w.h.Ea];
};
w.h.text_changeCase = function(a) {
  var b = {
    UPPERCASE: ".toUpperCase()",
    LOWERCASE: ".toLowerCase()",
    TITLECASE: null
  }[D(a, "CASE")];
  a = R(a, "TEXT", b ? w.h.vb : w.h.oa) || "''";
  return [
    b
      ? a + b
      : Ak("textToTitleCase", [
          "function " + w.h.$b + "(str) {",
          "  return str.replace(/\\S+/g,",
          "      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});",
          "}"
        ]) +
        "(" +
        a +
        ")",
    w.h.Ea
  ];
};
w.h.text_trim = function(a) {
  var b = {
    LEFT: ".replace(/^[\\s\\xa0]+/, '')",
    RIGHT: ".replace(/[\\s\\xa0]+$/, '')",
    BOTH: ".trim()"
  }[D(a, "MODE")];
  return [(R(a, "TEXT", w.h.vb) || "''") + b, w.h.Ea];
};
w.h.text_print = function(a) {
  return "window.alert(" + (R(a, "TEXT", w.h.oa) || "''") + ");\n";
};
w.h.text_prompt_ext = function(a) {
  var b =
    "window.prompt(" +
    (H(a, "TEXT") ? w.h.Rs(D(a, "TEXT")) : R(a, "TEXT", w.h.oa) || "''") +
    ")";
  "NUMBER" == D(a, "TYPE") && (b = "parseFloat(" + b + ")");
  return [b, w.h.Ea];
};
w.h.text_prompt = w.h.text_prompt_ext;
w.h.text_count = function(a) {
  var b = R(a, "TEXT", w.h.vb) || "''";
  a = R(a, "SUB", w.h.oa) || "''";
  return [
    Ak("textCount", [
      "function " + w.h.$b + "(haystack, needle) {",
      "  if (needle.length === 0) {",
      "    return haystack.length + 1;",
      "  } else {",
      "    return haystack.split(needle).length - 1;",
      "  }",
      "}"
    ]) +
      "(" +
      b +
      ", " +
      a +
      ")",
    w.h.Fh
  ];
};
w.h.text_replace = function(a) {
  var b = R(a, "TEXT", w.h.vb) || "''",
    c = R(a, "FROM", w.h.oa) || "''";
  a = R(a, "TO", w.h.oa) || "''";
  return [
    Ak("textReplace", [
      "function " + w.h.$b + "(haystack, needle, replacement) {",
      '  needle = needle.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,"\\\\$1")',
      '                 .replace(/\\x08/g,"\\\\x08");',
      "  return haystack.replace(new RegExp(needle, 'g'), replacement);",
      "}"
    ]) +
      "(" +
      b +
      ", " +
      c +
      ", " +
      a +
      ")",
    w.h.vb
  ];
};
w.h.text_reverse = function(a) {
  return [
    (R(a, "TEXT", w.h.vb) || "''") + ".split('').reverse().join('')",
    w.h.vb
  ];
};
w.h.ay = {};
w.h.variables_get = function(a) {
  return [w.h.ab.getName(D(a, "VAR"), w.G.cb), w.h.Je];
};
w.h.variables_set = function(a) {
  var b = R(a, "VALUE", w.h.Eh) || "0";
  return w.h.ab.getName(D(a, "VAR"), w.G.cb) + " = " + b + ";\n";
};
w.J.movie_circle = {
  N: function() {
    this.qb(160);
    M(
      M(zh(N(this, "X").Ca("Number"), w.Nb), T("Movie_circleDraw")),
      T("Movie_x")
    );
    M(zh(N(this, "Y").Ca("Number"), w.Nb), T("Movie_y"));
    M(zh(N(this, "RADIUS").Ca("Number"), w.Nb), T("Movie_radius"));
    this.ye(!0);
    this.we(!0);
    this.Ma(T("Movie_circleTooltip"));
  }
};
w.h.movie_circle = function(a) {
  var b = R(a, "X", w.h.oa) || "0",
    c = R(a, "Y", w.h.oa) || "0";
  a = R(a, "RADIUS", w.h.oa) || "0";
  return "circle(" + b + ", " + c + ", " + a + ");\n";
};
w.J.movie_rect = {
  N: function() {
    this.qb(160);
    M(
      M(zh(N(this, "X").Ca("Number"), w.Nb), T("Movie_rectDraw")),
      T("Movie_x")
    );
    M(zh(N(this, "Y").Ca("Number"), w.Nb), T("Movie_y"));
    M(zh(N(this, "WIDTH").Ca("Number"), w.Nb), T("Movie_width"));
    M(zh(N(this, "HEIGHT").Ca("Number"), w.Nb), T("Movie_height"));
    this.ye(!0);
    this.we(!0);
    this.Ma(T("Movie_rectTooltip"));
  }
};
w.h.movie_rect = function(a) {
  var b = R(a, "X", w.h.oa) || "0",
    c = R(a, "Y", w.h.oa) || "0",
    e = R(a, "WIDTH", w.h.oa) || "0";
  a = R(a, "HEIGHT", w.h.oa) || "0";
  return "rect(" + b + ", " + c + ", " + e + ", " + a + ");\n";
};
w.J.movie_line = {
  N: function() {
    this.qb(160);
    M(
      M(zh(N(this, "X1").Ca("Number"), w.Nb), T("Movie_lineDraw")),
      T("Movie_x1")
    );
    M(zh(N(this, "Y1").Ca("Number"), w.Nb), T("Movie_y1"));
    M(zh(N(this, "X2").Ca("Number"), w.Nb), T("Movie_x2"));
    M(zh(N(this, "Y2").Ca("Number"), w.Nb), T("Movie_y2"));
    M(zh(N(this, "WIDTH").Ca("Number"), w.Nb), T("Movie_width"));
    this.ye(!0);
    this.we(!0);
    this.Ma(T("Movie_rectTooltip"));
  }
};
w.h.movie_line = function(a) {
  var b = R(a, "X1", w.h.oa) || "0",
    c = R(a, "Y1", w.h.oa) || "0",
    e = R(a, "X2", w.h.oa) || "0",
    f = R(a, "Y2", w.h.oa) || "0";
  a = R(a, "WIDTH", w.h.oa) || "0";
  return "line(" + b + ", " + c + ", " + e + ", " + f + ", " + a + ");\n";
};
w.J.movie_time = {
  N: function() {
    this.qb(w.g.VARIABLES_HUE);
    M(O(this), "time (0\u2192100)");
    this.xe(!0, "Number");
    this.Ma(T("Movie_timeTooltip"));
  }
};
w.h.movie_time = function() {
  return ["time()", w.h.Je];
};
w.J.movie_colour = {
  N: function() {
    this.qb(w.g.COLOUR_HUE);
    M(N(this, "COLOUR").Ca("Colour"), T("Movie_setColour"));
    this.ye(!0);
    this.we(!0);
    this.Ma(T("Movie_colourTooltip"));
  }
};
w.h.movie_colour = function(a) {
  return "penColour(" + (R(a, "COLOUR", w.h.oa) || "'#000000'") + ");\n";
};
var Tl = {},
  Ul = {};
function Vl() {
  throw Error("Do not instantiate directly");
}
Vl.prototype.qn = null;
Vl.prototype.Ic = function() {
  return this.content;
};
Vl.prototype.toString = function() {
  return this.content;
};
Vl.prototype.Fm = function() {
  if (this.rn === Ul) return Gd(this.toString());
  if (this.rn !== Tl)
    throw Error("Sanitized content was not of kind TEXT or HTML.");
  return Hd(this.toString(), this.qn || null);
};
function Wl(a) {
  if (null != a)
    switch (a.qn) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function Xl() {
  Vl.call(this);
}
v(Xl, Vl);
Xl.prototype.rn = Tl;
function Yl(a) {
  return null != a && a.rn === Tl
    ? a
    : Zl(String(String(a)).replace($l, am), Wl(a));
}
var Zl = (function(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, e) {
      var c = new b();
      c.content = String(a);
      void 0 !== e && (c.qn = e);
      return c;
    };
  })(Xl),
  bm = {
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
function am(a) {
  return bm[a];
}
var $l = /[\x00\x22\x26\x27\x3c\x3e]/g;
function cm() {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Aceptar</button></div>';
}
function dm() {
  for (
    var a =
        '<nav style="width: 100%; margin-bottom:20px;"><a href="../index.html"><figure><img src="maze/logo.png"></figure></a><h1>BLOCK&#8217;S</h1><h1></h1></nav><div style="display: none"><span id="Games_name">Robgam Games</span><span id="Games_puzzle">Rompecabezas</span><span id="Games_maze">Laberinto</span><span id="Games_bird">P\u00e1jaro</span><span id="Games_turtle">Tortuga</span><span id="Games_movie">Pel\u00edcula</span><span id="Games_music">M\u00fasica</span><span id="Games_pondTutor">Tutor del estanque</span><span id="Games_pond">Estanque</span><span id="Games_genetics">Gen\u00e9tica</span><span id="Games_linesOfCode1">Resolviste este nivel con 1 l\u00ednea de JavaScript:</span><span id="Games_linesOfCode2">Resolviste este nivel con %1 l\u00edneas de JavaScript:</span><span id="Games_nextLevel">\u00bfEst\u00e1s listo/a para el nivel %1?</span><span id="Games_finalLevel">\u00bfEst\u00e1s listo/a para el siguiente desaf\u00edo?</span><span id="Games_submitTitle">T\u00edtulo:</span><span id="Games_linkTooltip">Guardar y enlazar a los bloques.</span><span id="Games_runTooltip">Ejecutar el programa que escribiste.</span><span id="Games_runProgram">Ejecutar el programa</span><span id="Games_resetTooltip">Detener el programa y restablecer el nivel.</span><span id="Games_resetProgram">Restablecer</span><span id="Games_help">Ayuda</span><span id="Games_dialogOk">Aceptar</span><span id="Games_dialogCancel">Cancelar</span><span id="Games_catLogic">L\u00f3gica</span><span id="Games_catLoops">Bucles</span><span id="Games_catMath">Matem\u00e1ticas</span><span id="Games_catText">Texto</span><span id="Games_catLists">Listas</span><span id="Games_catColour">Color</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Funciones</span><span id="Games_httpRequestError">Hubo un problema con la petici\u00f3n.</span><span id="Games_linkAlert">Comparte tus bloques con este enlace:\n\n%1</span><span id="Games_hashError">\u00ab%1\u00bb no corresponde con ning\u00fan programa guardado.</span><span id="Games_xmlError">No se pudo cargar el archivo guardado.  \u00bfQuiz\u00e1 fue creado con otra versi\u00f3n de Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">texto</span><span id="Games_breakLink">Una vez que comiences la edici\u00f3n de JavaScript, no podr\u00e1s volver a la edici\u00f3n de bloques. \u00bfEst\u00e1s seguro?</span><span id="Games_blocks">Bloques</div></div><div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">inicio x</span><span id="Movie_y1">inicio y</span><span id="Movie_x2">final x</span><span id="Movie_y2">final y</span><span id="Movie_radius">radio</span><span id="Movie_width">anchura</span><span id="Movie_height">altura</span><span id="Movie_circleTooltip">Dibuja un c\u00edrculo en la ubicaci\u00f3n especificada y \\ncon el radio especificado. </span><span id="Movie_circleDraw">c\u00edrculo</span><span id="Movie_rectTooltip">Dibuja un rect\u00e1ngulo en la ubicaci\u00f3n \\nespecificada y con la anchura y la \\naltura especificadas. </span><span id="Movie_rectDraw">rect\u00e1ngulo</span><span id="Movie_lineTooltip">Dibuja una l\u00ednea desde un punto a otro con la \\nanchura especificada. </span><span id="Movie_lineDraw">l\u00ednea</span><span id="Movie_timeTooltip">Devuelve la hora actual en la animaci\u00f3n (0-100).</span><span id="Movie_colourTooltip">Cambia el color de la pluma.</span><span id="Movie_setColour">establecer el color a</span><span id="Movie_submitDisabled">La pel\u00edcula no se mueve. Usa los bloques para hacer algo interesante. Luego puedes enviar tu pel\u00edcula a la galer\u00eda.</span></div><table width="100%"><tr><td><h1>' +
        ('<div class="niveles"> <span id="title" style="display:none;">' +
          (Fl
            ? '<a style="display:none;" href="index.html?lang=' + Yl(Dl) + '">'
            : '<a href="./?lang=' + Yl(Dl) + '">') +
          "Robgam Games</a> : " +
          Yl({ appName: "Pel\u00edcula" }.appName) +
          "</span>"),
      b = " &nbsp; ",
      c = 1;
    11 > c;
    c++
  )
    b +=
      " " +
      (c == S
        ? '<span class="level_number level_done" id="level' +
          Yl(c) +
          '">' +
          Yl(c) +
          "</span>"
        : 10 == c
        ? '<a class="level_number" id="level' +
          Yl(c) +
          '" href="?lang=' +
          Yl(Dl) +
          "&level=" +
          Yl(c) +
          Yl("") +
          '">' +
          Yl(c) +
          "</a>"
        : '<a class="level_dot" id="level' +
          Yl(c) +
          '" href="?lang=' +
          Yl(Dl) +
          "&level=" +
          Yl(c) +
          Yl("") +
          '"></a>');
  return (
    a +
    b +
    '</div></h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Guardar y enlazar a los bloques."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton" style="position: relative;">Ayuda</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' +
    (10 != S || Fl
      ? ""
      : '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' +
        Yl(Dl) +
        '"><button type="submit" title="Abre la galer\u00eda de pel\u00edculas."><img src="common/1x1.gif" class="gallery icon21"> Ver galer\u00eda</button></form></td><td style="text-align: center;"><button id="submitButton" title="Env\u00eda tu pel\u00edcula a la galer\u00eda."><img src="common/1x1.gif" class="camera icon21"> Enviar a la galer\u00eda</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Env\u00eda tu pel\u00edcula a la galer\u00eda.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>T\u00edtulo: <input id="galleryTitle" type="text" name="title" required></div><footer>\x3c!--Legal disclaimer goes here if needed.--\x3e</footer><div class="farSide"><button id="galleryCancel" type="button">Cancelar</button><button id="galleryOk" class="secondary" type="submit">Aceptar</button></div></form></div>') +
    ('<xml id="toolbox" style="display: none"><category name="Pel\u00edcula"><block type="movie_circle">' +
      (2 != S
        ? '<value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value>'
        : "") +
      '<value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' +
      (1 < S ? '<block type="movie_time"></block>' : "") +
      '</category><category name="Color"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' +
      (10 == S
        ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>'
        : "") +
      "</category>" +
      (6 < S
        ? '<category name="L\u00f3gica"><block type="controls_if">' +
          (10 > S ? '<mutation else="1"></mutation>' : "") +
          '</block><block type="logic_compare"></block>' +
          (10 == S
            ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>'
            : "") +
          "</category>"
        : "") +
      (10 == S
        ? '<category name="Bucles"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>'
        : "") +
      (2 < S
        ? '<category name="Matem\u00e1ticas"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' +
          (10 == S
            ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>'
            : "") +
          "</category>"
        : "") +
      (10 == S
        ? '<sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Funciones" custom="PROCEDURE"></category>'
        : "") +
      "</xml>") +
    '<div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u00a1Felicitaciones!</div><div id="dialogLinesText" style="font-size: large; margin: 1em; display:none;"></div><pre id="containerCode" display:none;></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancelar</button><button id="doneOk" class="secondary">Aceptar</button></div></div><div id="dialogAbort" class="dialogHiddenContent">Este nivel es extremadamente dif\u00edcil. \u00bfDeseas saltearlo e ir al siguiente nivel? Siempre puedes regresar m\u00e1s adelante.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancelar</button><button id="abortOk" class="secondary">Aceptar</button></div></div>' +
    ('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' +
      cm() +
      "</div>") +
    (9 == S
      ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Move the background circle to the top of your program.  Then it will appear behind the person.</div>' +
        cm() +
        "</div>"
      : "") +
    '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' +
    (1 == S
      ? "Usa formas simples para dibujar a esta persona."
      : 2 == S
      ? 'Este nivel es una pel\u00edcula. Quieres que una bola roja ruede en la pantalla. Presiona el bot\u00f3n reproducir para ver una vista previa.<div id="sampleHelp2" class="readonly"></div>Mientras se reproduce la pel\u00edcula, el valor del bloque \'tiempo\' cuenta de 0 a 100. Ya que quieres que la posici\u00f3n horizontal de la bola roja comience en 0 y vaya a 100 esto deber\u00eda ser f\u00e1cil.'
      : 3 == S
      ? "El bloque 'tiempo' cuenta de 0 a 100. Pero esta vez quieres que la posici\u00f3n horizontal de la bola roja comience en 100 y vaya a 0. \u00bfPuedes encontrar una f\u00f3rmula matem\u00e1tica simple que cambie la direcci\u00f3n?"
      : 4 == S
      ? "Usa lo aprendido en el nivel anterior para hacer cuatro bolas verdes que se muevan en las cuatro direcciones."
      : 5 == S
      ? 'Es f\u00e1cil hacer que la cabeza del rat\u00f3n se mueva. \u00bfPuedes resolver la matem\u00e1tica para hacer que las orejas tambi\u00e9n se muevan?<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">2 ^ (5 &divide; (50 - time)) = y</code>'
      : 6 == S
      ? "Dale a la persona un par de manos."
      : 7 == S
      ? "La f\u00f3rmula matem\u00e1tica para la ca\u00edda de la bola es complicada. He aqu\u00ed la respuesta:"
      : 8 == S
      ? "Usa el bloque 'si' para dibujar bolas rojas y azules para la primera mitad de la pel\u00edcula. Luego dibuja una bola verde para la segunda mitad de la pel\u00edcula."
      : 9 == S
      ? "Dibuja un c\u00edrculo creciente detr\u00e1s de la persona."
      : 10 == S
      ? "Haz una pel\u00edcula sobre lo que quieras. Tienes muchos bloques nuevos para explorar \u00a1Divi\u00e9rtete!" +
        (Fl
          ? ""
          : '<br><br>Usa el bot\u00f3n "Ver galer\u00eda" para ver pel\u00edculas de otras personas. Si has hecho una pel\u00edcula interesante, usa el bot\u00f3n "Enviar a la galer\u00eda" para publicarla.')
      : "") +
    "</div>" +
    cm() +
    "</div>"
  );
}
function em(a) {
  var b = fm;
  this.Ed = 42;
  this.Ki = 328;
  this.Ii = 11.5;
  this.Wd = 12;
  this.jb = 0;
  this.oq = b;
  this.cn = [];
  this.Os = [];
  b = document.createElementNS(gm, "text");
  b.setAttribute("style", "font-size: 10pt");
  b.setAttribute("x", this.Ki + 9);
  b.setAttribute("y", 16);
  -1 != Cl.indexOf(Dl) && b.setAttribute("text-anchor", "end");
  a.appendChild(b);
  this.na = b;
  b = "#ff3333 #f72f2f #ef2a2a #e72727 #df2222 #d71f1f #cf1a1a".split(" ");
  for (var c = 0; c < b.length; c++) {
    var e = document.createElementNS(gm, "rect");
    e.setAttribute("style", "fill: " + b[c]);
    e.setAttribute("x", this.Ed);
    e.setAttribute("y", 8 + c);
    e.setAttribute("height", 1);
    a.appendChild(e);
    this.Os[c] = e;
  }
  b = document.createElementNS(gm, "rect");
  b.setAttribute("style", "opacity: 0");
  b.setAttribute("x", this.Ed - this.Wd);
  b.setAttribute("y", this.Ii - this.Wd);
  b.setAttribute("width", this.Ki - this.Ed + 2 * this.Wd);
  b.setAttribute("height", 2 * this.Wd);
  b.setAttribute("rx", this.Wd);
  b.setAttribute("ry", this.Wd);
  a.appendChild(b);
  e = document.createElementNS(gm, "clipPath");
  e.setAttribute("id", "knobClipPath");
  a.appendChild(e);
  c = document.createElementNS(gm, "rect");
  c.setAttribute("width", "16");
  c.setAttribute("height", "16");
  c.setAttribute("y", "3");
  e.appendChild(c);
  this.Jw = c;
  e = document.createElementNS(gm, "image");
  e.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "movie/icons.png"
  );
  e.setAttribute("clip-path", "url(#knobClipPath)");
  e.setAttribute("width", "63");
  e.setAttribute("height", "42");
  e.setAttribute("y", "3");
  a.appendChild(e);
  this.Vr = e;
  e = document.createElementNS(gm, "rect");
  e.setAttribute("style", "opacity: 0");
  e.setAttribute("width", 2 * this.Wd);
  e.setAttribute("height", 2 * this.Wd);
  e.setAttribute("y", this.Ii - this.Wd);
  a.appendChild(e);
  this.no = e;
  this.setValue(0);
  e = document.createElementNS(gm, "clipPath");
  e.setAttribute("id", "playClipPath");
  a.appendChild(e);
  c = document.createElementNS(gm, "rect");
  c.setAttribute("width", "21");
  c.setAttribute("height", "21");
  c.setAttribute("x", "4");
  c.setAttribute("y", "1");
  e.appendChild(c);
  e = document.createElementNS(gm, "image");
  e.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "movie/icons.png"
  );
  e.setAttribute("clip-path", "url(#playClipPath)");
  e.setAttribute("width", "63");
  e.setAttribute("height", "42");
  e.setAttribute("x", -17);
  e.setAttribute("y", "-20");
  a.appendChild(e);
  for (this.jm = e; a && "svg" != a.nodeName.toLowerCase(); )
    a = a.parentElement;
  this.ya = a;
  hm(this.no, "mousedown", this, this.Ur);
  hm(this.no, "touchstart", this, this.Ur);
  hm(b, "mousedown", this, this.Dx);
  hm(this.ya, "mouseup", null, im);
  hm(this.ya, "touchend", null, im);
  hm(this.ya, "mousemove", null, jm);
  hm(this.ya, "touchmove", null, jm);
  hm(this.jm, "click", this, this.Xj);
  hm(this.jm, "touchend", this, this.Xj);
}
var gm = "http://www.w3.org/2000/svg",
  km = null,
  lm = 0,
  mm = 0;
d = em.prototype;
d.Ur = function(a) {
  this.pi && this.Xj();
  if ("touchstart" == a.type) {
    if (1 != a.changedTouches.length) return;
    nm(a);
  }
  km = this;
  lm = om(this, a).x;
  mm = Number(this.Vr.getAttribute("x")) + this.Ed + 8;
  a.preventDefault();
};
function im() {
  km = null;
}
function jm(a) {
  var b = km;
  if (b) {
    if ("touchmove" == a.type) {
      if (1 != a.changedTouches.length) return;
      nm(a);
    }
    a = om(b, a).x - lm + mm;
    b.setValue((a - b.Ed) / (b.Ki - b.Ed));
  }
}
d.Dx = function(a) {
  this.pi && this.Xj();
  if ("touchstart" == a.type) {
    if (1 != a.changedTouches.length) return;
    nm(a);
  }
  a = om(this, a).x;
  pm(this, (a - this.Ed) / (this.Ki - this.Ed));
};
d.pi = 0;
d.Xj = function(a) {
  (a && V.Ue(a)) ||
    (this.pi
      ? (this.jm.setAttribute("x", -17),
        clearTimeout(this.pi),
        (this.pi = 0),
        qm())
      : (this.jm.setAttribute("x", 4),
        1 <= this.getValue() && this.setValue(0),
        rm(this)));
};
d.Yr = 0;
d.Xr = 0;
d.Pt = 25;
function rm(a) {
  var b = a.getValue();
  if (1 <= b) a.Xj();
  else {
    a.setValue(b + 0.01);
    b = Date.now();
    var c = Math.max(1, 1e3 / a.Pt - (b - a.Yr - a.Xr));
    a.pi = setTimeout(function() {
      rm(a);
    }, c);
    a.Yr = b;
    a.Xr = c;
  }
}
d.getValue = function() {
  return this.jb;
};
function pm(a, b) {
  function c(c) {
    return function() {
      a.setValue((c * (b - e)) / 9 + e);
    };
  }
  for (; a.cn.length; ) clearTimeout(a.cn.pop());
  for (var e = a.getValue(), f = 0; 10 > f; f++)
    a.cn.push(setTimeout(c(f), (200 * f) / 10));
}
d.setValue = function(a) {
  this.jb = Math.min(Math.max(a, 0), 1);
  a = this.Ed + (this.Ki - this.Ed) * this.jb;
  this.Jw.setAttribute("x", a - 8);
  this.Vr.setAttribute("x", a - 42 - 8);
  this.no.setAttribute("x", a - this.Wd);
  for (var b = 0, c; (c = this.Os[b]); b++)
    c.setAttribute("width", a - this.Ed);
  for (; this.na.firstChild; ) this.na.removeChild(this.na.firstChild);
  a = Math.round(100 * this.jb);
  this.na.appendChild(document.createTextNode("time = " + a));
  this.oq && this.oq(a);
};
function om(a, b) {
  var c = a.ya.createSVGPoint();
  c.x = b.clientX;
  c.y = b.clientY;
  a = a.ya.getScreenCTM().inverse();
  return c.matrixTransform(a);
}
function hm(a, b, c, e) {
  a.addEventListener(
    b,
    function(a) {
      e.apply(c, arguments);
    },
    !1
  );
}
function nm(a) {
  var b = a.changedTouches[0];
  a.clientX = b.clientX;
  a.clientY = b.clientY;
}
var Nl = "movie",
  Rl = 1 == S ? 0 : 100,
  Sl = Array(Rl),
  sm = !1,
  tm = 0;
function um() {
  var a = document.getElementById("help"),
    b = document.getElementById("helpButton");
  2 == S &&
    V.Dw(
      "sampleHelp2",
      '<xml><block type="movie_time" x="15" y="10"></block></xml>'
    );
  U.yi(a, b, !0, !0, { width: "50%", left: "25%", top: "5em" }, vm);
  U.zp();
}
function vm() {
  U.Ap();
}
function wm(a) {
  var b = document.getElementById("visualization");
  W.strokeStyle = "#000";
  W.fillStyle = "#000";
  var c = document.createElement("canvas");
  c.id = "answer" + a;
  c.width = 400;
  c.height = 400;
  c.style.display = "none";
  b.appendChild(c);
  W.canvas.width = W.canvas.width;
  switch (S) {
    case 1:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      xm(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 70, 5);
      Z(60, 50, 80, 70, 5);
      break;
    case 2:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      xm(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 70, 5);
      Z(60, 50, 80, a, 5);
      break;
    case 3:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      xm(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, a, 5);
      break;
    case 4:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      xm(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, a, 5);
      Z(40, 20, a, 0, 5);
      Z(60, 20, 100 - a, 0, 5);
      break;
    case 5:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      xm(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5);
      Z(40, 20, a, 0, 5);
      Z(60, 20, 100 - a, 0, 5);
      break;
    case 6:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      xm(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5);
      Z(40, 20, a, 0, 5);
      Z(60, 20, 100 - a, 0, 5);
      X("#ff0000");
      Y(20, 100 - a, 5);
      Y(80, Math.pow((a - 50) / 5, 2), 5);
      break;
    case 7:
      X("#ff0000");
      50 > a ? Y(50, 70, 10) : Y(50, 80, 20);
      X("#3333ff");
      xm(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5);
      Z(40, 20, a, 0, 5);
      Z(60, 20, 100 - a, 0, 5);
      X("#ff0000");
      Y(20, 100 - a, 5);
      Y(80, Math.pow((a - 50) / 5, 2), 5);
      break;
    case 8:
      X("#ff0000");
      50 > a ? Y(50, 70, 10) : Y(50, 80, 20);
      X("#3333ff");
      xm(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5);
      50 > a
        ? (Z(40, 20, a, 0, 5), Z(60, 20, 100 - a, 0, 5))
        : (Z(40, 20, 100 - a, 0, 5), Z(60, 20, a, 0, 5));
      X("#ff0000");
      Y(20, 100 - a, 5);
      Y(80, Math.pow((a - 50) / 5, 2), 5);
      break;
    case 9:
      X("#00ff00"),
        Y(50, a / 2, a / 2),
        X("#ff0000"),
        50 > a ? Y(50, 70, 10) : Y(50, 80, 20),
        X("#3333ff"),
        xm(50, 40, 20, 40),
        X("#000000"),
        Z(40, 50, 20, 100 - a, 5),
        Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5),
        50 > a
          ? (Z(40, 20, a, 0, 5), Z(60, 20, 100 - a, 0, 5))
          : (Z(40, 20, 100 - a, 0, 5), Z(60, 20, a, 0, 5)),
        X("#ff0000"),
        Y(20, 100 - a, 5),
        Y(80, Math.pow((a - 50) / 5, 2), 5);
  }
  a = c.getContext("2d");
  a.globalCompositeOperation = "copy";
  a.drawImage(W.canvas, 0, 0);
}
function ym() {
  var a = document.getElementById("hatching").getContext("2d");
  a.strokeStyle = "#fff";
  a.lineWidth = 1;
  for (var b = -400; 400 > b; b += 4)
    a.beginPath(), a.moveTo(b, -b), a.lineTo(b + 400, -b + 400), a.stroke();
}
function zm() {
  var a = document.getElementById("axies").getContext("2d");
  a.lineWidth = 1;
  a.strokeStyle = "#bba";
  a.fillStyle = "#bba";
  a.font = "normal 14px sans-serif";
  for (var b = 1, c = 0.1; 0.9 > c; c += 0.1)
    a.beginPath(),
      a.moveTo(400 * c, 400),
      a.lineTo(400 * c, 400 - 9 * b),
      a.stroke(),
      a.beginPath(),
      a.moveTo(0, 400 * c),
      a.lineTo(9 * b, 400 * c),
      a.stroke(),
      2 == b &&
        (a.fillText(Math.round(100 * c), 400 * c + 2, 396),
        a.fillText(Math.round(100 - 100 * c), 3, 400 * c - 2)),
      (b = 1 == b ? 2 : 1);
}
function Am(a) {
  W.canvas.width = W.canvas.width;
  W.strokeStyle = "#000";
  W.fillStyle = "#000";
  W.globalAlpha = 10 == S ? 1 : 0.9;
  for (var b = !0, c = 0; b && 1e4 > c; c++)
    try {
      b = a.step();
    } catch (e) {
      alert(e), (b = !1);
    }
}
function fm(a) {
  "number" == typeof a && (tm = a);
  a = tm;
  Pl.beginPath();
  Pl.rect(0, 0, Pl.canvas.width, Pl.canvas.height);
  Pl.fillStyle = "#ffffff";
  Pl.fill();
  if ((a = document.getElementById("answer" + a)))
    (Pl.globalAlpha = 0.2), Pl.drawImage(a, 0, 0), (Pl.globalAlpha = 1);
  a = document.getElementById("hatching");
  Pl.drawImage(a, 0, 0);
  a = tk();
  try {
    var b = new Interpreter(a, Bm);
  } catch (h) {
    console.error(h);
  }
  b ? Am(b) : (W.canvas.width = W.canvas.width);
  Pl.drawImage(W.canvas, 0, 0);
  Pl.drawImage(document.getElementById("axies"), 0, 0);
  if ((b = document.getElementById("answer" + tm))) {
    b = b.getContext("2d").getImageData(0, 0, 400, 400);
    a = W.getImageData(0, 0, 400, 400);
    for (
      var c = Math.min(a.data.length, b.data.length), e = 0, f = 3;
      f < c;
      f += 4
    )
      96 < Math.abs(a.data[f] - b.data[f]) && e++;
    Sl[tm] = e;
  }
  1 == S && setTimeout(qm, 1e3);
}
function Bm(a, b) {
  var c = function(a, b, c) {
    Y(a, b, c);
  };
  a.setProperty(b, "circle", a.createNativeFunction(c));
  c = function(a, b, c, k) {
    xm(a, b, c, k);
  };
  a.setProperty(b, "rect", a.createNativeFunction(c));
  c = function(a, b, c, k, l) {
    Z(a, b, c, k, l);
  };
  a.setProperty(b, "line", a.createNativeFunction(c));
  c = function(a) {
    X(a);
  };
  a.setProperty(b, "penColour", a.createNativeFunction(c));
  a.setProperty(
    b,
    "time",
    a.createNativeFunction(function() {
      return tm;
    })
  );
}
function Y(a, b, c) {
  a *= 4;
  b = 4 * (100 - b);
  c = Math.max(4 * c, 0);
  W.beginPath();
  W.arc(a, b, c, 0, 2 * Math.PI, !1);
  W.fill();
}
function xm(a, b, c, e) {
  a *= 4;
  b = 4 * (100 - b);
  c = Math.max(4 * c, 0);
  e = Math.max(4 * e, 0);
  W.beginPath();
  W.rect(a - c / 2, b - e / 2, c, e);
  W.fill();
}
function Z(a, b, c, e, f) {
  a *= 4;
  b = 4 * (100 - b);
  c *= 4;
  e = 4 * (100 - e);
  f *= 4;
  W.beginPath();
  W.moveTo(a, b);
  W.lineTo(c, e);
  W.lineWidth = Math.max(f, 0);
  W.stroke();
}
function X(a) {
  W.strokeStyle = a;
  W.fillStyle = a;
}
function qm() {
  (1 < S && tm != Rl) ||
    !Ql() ||
    sm ||
    ((sm = !0), V.Gx(), 10 > S && (uk.Zd.play("win", 0.5), U.qv()));
}
function Cm() {
  var a = Oc(uk).length,
    b = tk();
  if (4 > a || -1 == b.indexOf("time()")) alert(T("Movie_submitDisabled"));
  else {
    a = new Interpreter(b, Bm);
    b = tm;
    try {
      (tm = Math.round(Rl / 2)), Am(a);
    } finally {
      tm = b;
    }
    a = document.getElementById("thumbnail");
    b = a.getContext("2d");
    b.globalCompositeOperation = "copy";
    b.drawImage(W.canvas, 0, 0, 200, 200);
    a = a.toDataURL("image/png");
    document.getElementById("galleryThumb").value = a;
    U.vp();
  }
}
window.addEventListener("load", function() {
  function a() {
    c.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
    c.style.left = b ? "10px" : "420px";
    c.style.width = window.innerWidth - 440 + "px";
  }
  document.body.innerHTML = dm();
  V.N();
  var b = -1 != Cl.indexOf(Dl),
    c = document.getElementById("blockly"),
    e = document.getElementById("visualization");
  window.addEventListener("scroll", function() {
    a(null);
    w.oh(uk);
  });
  window.addEventListener("resize", a);
  a(null);
  10 > S &&
    ((hk = 3),
    (gk = "#ff0000 #ffcc33 #ffff00 #009900 #3333ff #cc33cc #ffffff #999999 #000000".split(
      " "
    )));
  var f = document.getElementById("toolbox");
  uk = w.Pf("blockly", {
    media: "third-party/blockly/media/",
    rtl: b,
    toolbox: f,
    trashcan: !0,
    zoom: 10 == S ? { controls: !0, wheel: !0 } : null
  });
  zk("circle,rect,line,penColour,time");
  document.getElementById("submitButton") && Ol("submitButton", Cm);
  V.Ow("<xml></xml>", !0);
  Pl = document.getElementById("display").getContext("2d");
  Pl.globalCompositeOperation = "source-over";
  W = document.getElementById("scratch").getContext("2d");
  ym();
  wm(0);
  setTimeout(function() {
    for (var a = 1; a <= Rl; a++) wm(a);
  }, 1);
  zm();
  fm();
  uk.Sc(fm);
  f = document.getElementById("scrubber");
  new em(f);
  1 == S && (f.style.display = "none");
  uk.Zd.load(["movie/win.mp3", "movie/win.ogg"], "win");
  setTimeout(V.Bw, 1);
  Ol("helpButton", um);
  2 > location.hash.length && !Ll(S) && setTimeout(um, 1e3);
});
