// Automatically generated file.  Do not edit!
var d,
  g = this;
function aa(a) {
  return void 0 !== a;
}
function q(a) {
  return "string" == typeof a;
}
function t(a) {
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
  a.Om = void 0;
  a.Hd = function() {
    return a.Om ? a.Om : (a.Om = new a());
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
function y(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.m = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.Vz = function(a, c, h) {
    for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++)
      e[f - 2] = arguments[f];
    return b.prototype[c].apply(a, e);
  };
}
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
function ya(a) {
  return Array.prototype.concat.apply([], arguments);
}
function za(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e];
    return c;
  }
  return [];
}
function Aa(a, b) {
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
function Ba(a, b, c, e) {
  Array.prototype.splice.apply(a, Ca(arguments, 1));
}
function Ca(a, b, c) {
  return 2 >= arguments.length
    ? Array.prototype.slice.call(a, b)
    : Array.prototype.slice.call(a, b, c);
}
function A(a, b) {
  this.x = aa(a) ? a : 0;
  this.y = aa(b) ? b : 0;
}
d = A.prototype;
d.clone = function() {
  return new A(this.x, this.y);
};
function Da(a, b) {
  return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1;
}
function Fa(a, b) {
  var c = a.x - b.x;
  a = a.y - b.y;
  return Math.sqrt(c * c + a * a);
}
function Ga(a, b) {
  return new A(a.x - b.x, a.y - b.y);
}
function Ha(a, b) {
  return new A(a.x + b.x, a.y + b.y);
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
  a instanceof A
    ? ((this.x += a.x), (this.y += a.y))
    : ((this.x += Number(a)), t(b) && (this.y += b));
  return this;
};
d.scale = function(a, b) {
  b = t(b) ? b : a;
  this.x *= a;
  this.y *= b;
  return this;
};
// Copyright 2016 Google Inc.  Apache License 2.0
var B = { i: {} };
B.i.yk = "";
B.i.Rb = !0;
B.i.km = 0;
B.i.Aj = "create";
B.i.vw = B.i.Aj;
B.i.El = "delete";
B.i.ww = B.i.El;
B.i.zg = "change";
B.i.uw = B.i.zg;
B.i.Oh = "move";
B.i.xw = B.i.Oh;
B.i.Lo = "var_create";
B.i.Mo = "var_delete";
B.i.No = "var_rename";
B.i.Hj = "ui";
B.i.qo = "comment_create";
B.i.ro = "comment_delete";
B.i.po = "comment_change";
B.i.so = "comment_move";
B.i.Kh = [];
B.i.M = function(a) {
  B.i.isEnabled() && (B.i.Kh.length || setTimeout(B.i.$t, 0), B.i.Kh.push(a));
};
B.i.$t = function() {
  for (
    var a = B.i.filter(B.i.Kh, !0), b = (B.i.Kh.length = 0), c;
    (c = a[b]);
    b++
  ) {
    var e = Ia[c.hc] || null;
    if (e) {
      var f = c;
      f.Rb &&
        (e.ug.push(f), (e.$i.length = 0), e.ug.length > e.xs && e.ug.unshift());
      for (var h = 0; (c = e.ec[h]); h++) c(f);
    }
  }
};
B.i.filter = function(a, b) {
  a = za(a);
  b || a.reverse();
  for (var c = [], e = Object.create(null), f = 0, h; (h = a[f]); f++)
    if (!h.dh()) {
      var k = [h.type, h.Ib, h.hc].join(" "),
        l = e[k];
      l
        ? h.type == B.i.Oh
          ? ((l.Zf = h.Zf), (l.Yf = h.Yf), (l.cf = h.cf))
          : h.type == B.i.zg && h.element == l.element && h.name == l.name
          ? (l.newValue = h.newValue)
          : h.type != B.i.Hj ||
            "click" != h.element ||
            ("commentOpen" != l.element &&
              "mutatorOpen" != l.element &&
              "warningOpen" != l.element)
          ? ((e[k] = h), c.push(h))
          : (l.newValue = h.newValue)
        : ((e[k] = h), c.push(h));
    }
  a = c.filter(function(a) {
    return !a.dh();
  });
  b || a.reverse();
  for (f = 1; (h = a[f]); f++)
    h.type == B.i.zg && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
B.i.ot = function() {
  for (var a = 0, b; (b = B.i.Kh[a]); a++) b.Rb = !1;
};
B.i.disable = function() {
  B.i.km++;
};
B.i.enable = function() {
  B.i.km--;
};
B.i.isEnabled = function() {
  return 0 == B.i.km;
};
B.i.$b = function() {
  return B.i.yk;
};
B.i.T = function(a) {
  B.i.yk = "boolean" == typeof a ? (a ? B.h.Ed() : "") : a;
};
B.i.eq = function(a) {
  var b = [];
  a = Ja(a, !1);
  for (var c = 0, e; (e = a[c]); c++) b[c] = e.id;
  return b;
};
B.i.Z = function(a, b) {
  switch (a.type) {
    case B.i.Aj:
      var c = new Ka(null);
      break;
    case B.i.El:
      c = new La(null);
      break;
    case B.i.zg:
      c = new Ma(null, "", "", "", "");
      break;
    case B.i.Oh:
      c = new Na(null);
      break;
    case B.i.Lo:
      c = new Oa(null);
      break;
    case B.i.Mo:
      c = new Qa(null);
      break;
    case B.i.No:
      c = new Ra(null, "");
      break;
    case B.i.Hj:
      c = new Sa(null);
      break;
    case B.i.qo:
      c = new Ta(null);
      break;
    case B.i.po:
      c = new Ua(null);
      break;
    case B.i.so:
      c = new Va(null);
      break;
    case B.i.ro:
      c = new Wa(null);
      break;
    default:
      throw "Unknown event type.";
  }
  c.Z(a);
  c.hc = b.id;
  return c;
};
B.i.eA = function(a) {
  if (a.type == B.i.Oh || a.type == B.i.Aj) {
    var b = Ia[a.hc] || null;
    if ((a = Xa(b, a.Ib)))
      if (a.getParent() && !a.getParent().disabled) {
        b = Ja(a, !1);
        a = 0;
        for (var c; (c = b[a]); a++) c.lf(!1);
      } else if ((a.S || a.X) && !b.lb()) {
        do a.lf(!0), (a = Ya(a));
        while (a);
      }
  }
};
// Copyright 2018 Google Inc.  Apache License 2.0
function Za() {
  this.hc = void 0;
  this.group = B.i.yk;
  this.Rb = B.i.Rb;
}
Za.prototype.ua = function() {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  return a;
};
Za.prototype.Z = function(a) {
  this.group = a.group;
};
Za.prototype.dh = function() {
  return !1;
};
Za.prototype.run = function() {};
function $a(a) {
  a = Ia[a.hc] || null;
  if (!a)
    throw Error(
      "Workspace is null. Event must have been generated from real Blockly events."
    );
  return a;
}
function ab(a) {
  ab.m.constructor.call(this);
  this.Ib = a.id;
  this.hc = a.o.id;
}
y(ab, Za);
ab.prototype.ua = function() {
  var a = ab.m.ua.call(this);
  a.blockId = this.Ib;
  return a;
};
ab.prototype.Z = function(a) {
  ab.m.ua.call(this);
  this.Ib = a.blockId;
};
function Ma(a, b, c, e, f) {
  a &&
    (Ma.m.constructor.call(this, a),
    (this.element = b),
    (this.name = c),
    (this.oldValue = e),
    (this.newValue = f));
}
y(Ma, ab);
B.i.ic = Ma;
d = Ma.prototype;
d.type = B.i.zg;
d.ua = function() {
  var a = Ma.m.ua.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.newValue = this.newValue;
  return a;
};
d.Z = function(a) {
  Ma.m.Z.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.newValue = a.newValue;
};
d.dh = function() {
  return this.oldValue == this.newValue;
};
d.run = function(a) {
  var b = Xa($a(this), this.Ib);
  if (b)
    switch (
      (b.qe && b.qe.la(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (b = bb(b, this.name))
          ? (cb(b, a), b.setValue(a))
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        b.cj(a || null);
        break;
      case "collapsed":
        b.hg(a);
        break;
      case "disabled":
        b.lf(a);
        break;
      case "inline":
        b.wh(a);
        break;
      case "mutation":
        var c = "";
        b.ad && (c = (c = b.ad()) && B.D.pc(c));
        if (b.Ne) {
          a = a || "<mutation></mutation>";
          var e = B.D.Kc("<xml>" + a + "</xml>");
          b.Ne(e.firstChild);
        }
        B.i.M(new Ma(b, "mutation", null, c, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.Ib);
};
function Ka(a) {
  a &&
    (Ka.m.constructor.call(this, a),
    (this.xml = a.o.P ? B.D.Sl(a) : B.D.Ke(a)),
    (this.Rf = B.i.eq(a)));
}
y(Ka, ab);
B.i.zj = Ka;
Ka.prototype.type = B.i.Aj;
Ka.prototype.ua = function() {
  var a = Ka.m.ua.call(this);
  a.xml = B.D.pc(this.xml);
  a.ids = this.Rf;
  return a;
};
Ka.prototype.Z = function(a) {
  Ka.m.Z.call(this, a);
  this.xml = B.D.Kc("<xml>" + a.xml + "</xml>").firstChild;
  this.Rf = a.ids;
};
Ka.prototype.run = function(a) {
  var b = $a(this);
  if (a) (a = C("xml")), a.appendChild(this.xml), B.D.fe(a, b);
  else {
    a = 0;
    for (var c; (c = this.Rf[a]); a++) {
      var e = Xa(b, c);
      e
        ? e.v(!1, !1)
        : c == this.Ib &&
          console.warn("Can't uncreate non-existent block: " + c);
    }
  }
};
function La(a) {
  if (a) {
    if (a.getParent()) throw "Connected blocks cannot be deleted.";
    La.m.constructor.call(this, a);
    this.ev = a.o.P ? B.D.Sl(a) : B.D.Ke(a);
    this.Rf = B.i.eq(a);
  }
}
y(La, ab);
B.i.gs = La;
La.prototype.type = B.i.El;
La.prototype.ua = function() {
  var a = La.m.ua.call(this);
  a.ids = this.Rf;
  return a;
};
La.prototype.Z = function(a) {
  La.m.Z.call(this, a);
  this.Rf = a.ids;
};
La.prototype.run = function(a) {
  var b = $a(this);
  if (a) {
    a = 0;
    for (var c; (c = this.Rf[a]); a++) {
      var e = Xa(b, c);
      e
        ? e.v(!1, !1)
        : c == this.Ib && console.warn("Can't delete non-existent block: " + c);
    }
  } else (a = C("xml")), a.appendChild(this.ev), B.D.fe(a, b);
};
function Na(a) {
  a &&
    (Na.m.constructor.call(this, a),
    (a = db(this)),
    (this.Tq = a.ir),
    (this.Sq = a.vq),
    (this.dn = a.rp));
}
y(Na, ab);
B.i.Jh = Na;
d = Na.prototype;
d.type = B.i.Oh;
d.ua = function() {
  var a = Na.m.ua.call(this);
  this.Zf && (a.newParentId = this.Zf);
  this.Yf && (a.newInputName = this.Yf);
  this.cf &&
    (a.newCoordinate = Math.round(this.cf.x) + "," + Math.round(this.cf.y));
  return a;
};
d.Z = function(a) {
  Na.m.Z.call(this, a);
  this.Zf = a.newParentId;
  this.Yf = a.newInputName;
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.cf = new A(parseFloat(a[0]), parseFloat(a[1]))));
};
d.te = function() {
  var a = db(this);
  this.Zf = a.ir;
  this.Yf = a.vq;
  this.cf = a.rp;
};
function db(a) {
  var b = Xa(Ia[a.hc] || null, a.Ib);
  a = {};
  var c = b.getParent();
  if (c) {
    a.ir = c.id;
    a: {
      for (var e = 0, f; (f = c.W[e]); e++)
        if (f.connection && D(f.connection) == b) {
          b = f;
          break a;
        }
      b = null;
    }
    b && (a.vq = b.name);
  } else a.rp = b.ka();
  return a;
}
d.dh = function() {
  return this.Tq == this.Zf && this.Sq == this.Yf && Da(this.dn, this.cf);
};
d.run = function(a) {
  var b = $a(this),
    c = Xa(b, this.Ib);
  if (c) {
    var e = a ? this.Zf : this.Tq,
      f = a ? this.Yf : this.Sq;
    a = a ? this.cf : this.dn;
    var h = null;
    if (e && ((h = Xa(b, e)), !h)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    c.getParent() && eb(c);
    if (a) (f = c.ka()), c.moveBy(a.x - f.x, a.y - f.y);
    else {
      c = c.S || c.X;
      if (f) {
        if ((b = fb(h, f))) var k = b.connection;
      } else c.type == B.Ge && (k = h.R);
      k
        ? c.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.Ib);
};
B.ya = {};
B.ya.mm = 0;
B.ya.ak = null;
B.ya.Qt = function(a) {
  var b = a.o,
    c = a.N();
  b.mc.play("delete");
  a = gb(b, c);
  c = c.cloneNode(!0);
  c.Wv = a.x;
  c.Xv = a.y;
  c.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  E(b).appendChild(c);
  c.Vo = c.getBBox();
  B.ya.Rp(c, b.s, new Date(), b.scale);
};
B.ya.Rp = function(a, b, c, e) {
  var f = (new Date() - c) / 150;
  1 < f
    ? F(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.Wv + (((b ? -1 : 1) * a.Vo.width * e) / 2) * f) +
          "," +
          (a.Xv + a.Vo.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(B.ya.Rp, 10, a, b, c, e));
};
B.ya.vt = function(a) {
  var b = a.o,
    c = b.scale;
  b.mc.play("click");
  if (!(1 > c)) {
    var e = gb(b, a.N());
    a.S
      ? ((e.x += (a.s ? 3 : -3) * c), (e.y += 13 * c))
      : a.X && ((e.x += (a.s ? -23 : 23) * c), (e.y += 3 * c));
    a = B.h.A(
      "circle",
      {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: "none",
        stroke: "#888",
        "stroke-width": 10
      },
      E(b)
    );
    B.ya.pp(a, new Date(), c);
  }
};
B.ya.pp = function(a, b, c) {
  var e = (new Date() - b) / 150;
  1 < e
    ? F(a)
    : (a.setAttribute("r", 25 * e * c),
      (a.style.opacity = 1 - e),
      (B.ya.mm = setTimeout(B.ya.pp, 10, a, b, c)));
};
B.ya.Pt = function(a) {
  a.o.mc.play("disconnect");
  if (!(1 > a.o.scale)) {
    var b = a.tb().height;
    b = (Math.atan(10 / b) / Math.PI) * 180;
    a.s || (b *= -1);
    B.ya.Qp(a.N(), b, new Date());
  }
};
B.ya.Qp = function(a, b, c) {
  var e = (new Date() - c) / 200;
  1 < e
    ? (a.ng = "")
    : ((a.ng =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * b) + ")"),
      (B.ya.ak = a),
      (B.ya.mm = setTimeout(B.ya.Qp, 10, a, b, c)));
  a.setAttribute("transform", a.Ce + a.ng);
};
B.ya.nm = function() {
  if (B.ya.ak) {
    clearTimeout(B.ya.mm);
    var a = B.ya.ak;
    a.ng = "";
    a.setAttribute("transform", a.Ce);
    B.ya.ak = null;
  }
};
function hb(a, b) {
  return 0 == a.lastIndexOf(b, 0);
}
function ib(a) {
  return /^[\s\xa0]*$/.test(a);
}
function jb(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
}
var kb = String.prototype.trim
  ? function(a) {
      return a.trim();
    }
  : function(a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
function lb(a) {
  if (!mb.test(a)) return a;
  -1 != a.indexOf("&") && (a = a.replace(nb, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(ob, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(pb, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(qb, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(rb, "&#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(sb, "&#0;"));
  return a;
}
var nb = /&/g,
  ob = /</g,
  pb = />/g,
  qb = /"/g,
  rb = /'/g,
  sb = /\x00/g,
  mb = /[\x00&<>"']/;
function tb(a) {
  var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
  var c = g.document.createElement("div");
  return a.replace(ub, function(a, f) {
    var e = b[a];
    if (e) return e;
    "#" == f.charAt(0) &&
      ((f = Number("0" + f.substr(1))),
      isNaN(f) || (e = String.fromCharCode(f)));
    e || ((c.innerHTML = a + " "), (e = c.firstChild.nodeValue.slice(0, -1)));
    return (b[a] = e);
  });
}
function vb(a) {
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
var ub = /&([^;\s<&]+);?/g;
function wb(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function xb() {
  return "background-color".replace(/\-([a-z])/g, function(a, b) {
    return b.toUpperCase();
  });
}
function yb(a) {
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
var zb;
a: {
  var Ab = g.navigator;
  if (Ab) {
    var Bb = Ab.userAgent;
    if (Bb) {
      zb = Bb;
      break a;
    }
  }
  zb = "";
}
function Cb(a) {
  return -1 != zb.indexOf(a);
}
function Db(a, b, c) {
  for (var e in a) b.call(c, a[e], e, a);
}
var Eb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
  " "
);
function Fb(a, b) {
  for (var c, e, f = 1; f < arguments.length; f++) {
    e = arguments[f];
    for (c in e) a[c] = e[c];
    for (var h = 0; h < Eb.length; h++)
      (c = Eb[h]), Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
  }
}
function Gb(a) {
  var b = arguments.length;
  if (1 == b && u(arguments[0])) return Gb.apply(null, arguments[0]);
  for (var c = {}, e = 0; e < b; e++) c[arguments[e]] = !0;
  return c;
}
function Hb(a) {
  Hb[" "](a);
  return a;
}
Hb[" "] = ca;
function Ib(a, b) {
  var c = Jb;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
}
var Kb = Cb("Opera"),
  G = Cb("Trident") || Cb("MSIE"),
  Lb = Cb("Edge"),
  H =
    Cb("Gecko") &&
    !(-1 != zb.toLowerCase().indexOf("webkit") && !Cb("Edge")) &&
    !(Cb("Trident") || Cb("MSIE")) &&
    !Cb("Edge"),
  I = -1 != zb.toLowerCase().indexOf("webkit") && !Cb("Edge"),
  Mb = I && Cb("Mobile"),
  Nb = Cb("Macintosh"),
  Ob = Cb("Android"),
  Pb = Cb("iPhone") && !Cb("iPod") && !Cb("iPad"),
  Qb = Cb("iPad");
function Rb() {
  var a = g.document;
  return a ? a.documentMode : void 0;
}
var Sb;
a: {
  var Tb = "",
    Ub = (function() {
      var a = zb;
      if (H) return /rv:([^\);]+)(\)|;)/.exec(a);
      if (Lb) return /Edge\/([\d\.]+)/.exec(a);
      if (G) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (I) return /WebKit\/(\S+)/.exec(a);
      if (Kb) return /(?:Version)[ \/]?(\S+)/.exec(a);
    })();
  Ub && (Tb = Ub ? Ub[1] : "");
  if (G) {
    var Vb = Rb();
    if (null != Vb && Vb > parseFloat(Tb)) {
      Sb = String(Vb);
      break a;
    }
  }
  Sb = Tb;
}
var Jb = {};
function Wb(a) {
  return Ib(a, function() {
    for (
      var b = 0,
        c = kb(String(Sb)).split("."),
        e = kb(String(a)).split("."),
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
          wb(
            0 == k[1].length ? 0 : parseInt(k[1], 10),
            0 == l[1].length ? 0 : parseInt(l[1], 10)
          ) ||
          wb(0 == k[2].length, 0 == l[2].length) ||
          wb(k[2], l[2]);
        k = k[3];
        l = l[3];
      } while (0 == b);
    }
    return 0 <= b;
  });
}
var Xb;
var Yb = g.document;
Xb =
  Yb && G
    ? Rb() || ("CSS1Compat" == Yb.compatMode ? parseInt(Sb, 10) : 5)
    : void 0;
var Zb = !G || 9 <= Number(Xb),
  $b = (!H && !G) || (G && 9 <= Number(Xb)) || (H && Wb("1.9.1")),
  ac = G && !Wb("9");
var bc = {
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
function cc() {
  this.eo = "";
  this.Is = dc;
}
cc.prototype.Se = !0;
cc.prototype.Jd = function() {
  return this.eo;
};
cc.prototype.toString = function() {
  return "Const{" + this.eo + "}";
};
function ec(a) {
  return a instanceof cc && a.constructor === cc && a.Is === dc
    ? a.eo
    : "type_error:Const";
}
var dc = {};
function fc() {
  this.mr = "";
  this.Js = gc;
}
fc.prototype.Se = !0;
fc.prototype.Jd = function() {
  return this.mr;
};
fc.prototype.Lm = !0;
fc.prototype.Tg = function() {
  return 1;
};
var gc = {};
function hc() {
  this.cg = "";
  this.Gs = ic;
}
hc.prototype.Se = !0;
hc.prototype.Jd = function() {
  return this.cg;
};
hc.prototype.Lm = !0;
hc.prototype.Tg = function() {
  return 1;
};
function jc(a) {
  if (a instanceof hc && a.constructor === hc && a.Gs === ic) return a.cg;
  ea(a);
  return "type_error:SafeUrl";
}
var kc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function lc(a) {
  if (a instanceof hc) return a;
  a = a.Se ? a.Jd() : String(a);
  kc.test(a) || (a = "about:invalid#zClosurez");
  return mc(a);
}
var ic = {};
function mc(a) {
  var b = new hc();
  b.cg = a;
  return b;
}
mc("about:blank");
function nc() {
  this.xn = "";
  this.Fs = oc;
}
nc.prototype.Se = !0;
var oc = {};
nc.prototype.Jd = function() {
  return this.xn;
};
nc.prototype.Ek = function(a) {
  this.xn = a;
  return this;
};
var pc = new nc().Ek("");
function qc(a) {
  var b = "",
    c;
  for (c in a) {
    if (!/^[-_a-zA-Z0-9]+$/.test(c))
      throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
    var e = a[c];
    null != e &&
      ((e = u(e) ? ta(e, rc).join(" ") : rc(e)), (b += c + ":" + e + ";"));
  }
  return b ? new nc().Ek(b) : pc;
}
function rc(a) {
  if (a instanceof hc)
    a =
      'url("' +
      jc(a)
        .replace(/</g, "%3c")
        .replace(/[\\"]/g, "\\$&") +
      '")';
  else if (a instanceof cc) a = ec(a);
  else {
    a = String(a);
    var b = a.replace(sc, "$1").replace(tc, "url");
    if ((b = uc.test(b))) {
      for (var c = (b = !0), e = 0; e < a.length; e++) {
        var f = a.charAt(e);
        "'" == f && c ? (b = !b) : '"' == f && b && (c = !c);
      }
      b = b && c;
    }
    a = b ? vc(a) : "zClosurez";
  }
  return a;
}
var uc = /^[-,."'%_!# a-zA-Z0-9]+$/,
  tc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
  sc = /\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;
function vc(a) {
  return a.replace(tc, function(a, c, e, f) {
    var b = "";
    e = e.replace(/^(['"])(.*)\1$/, function(a, c, e) {
      b = c;
      return e;
    });
    a = lc(e).Jd();
    return c + b + a + b + f;
  });
}
function wc() {
  this.cg = "";
  this.Es = xc;
  this.Pp = null;
}
wc.prototype.Lm = !0;
wc.prototype.Tg = function() {
  return this.Pp;
};
wc.prototype.Se = !0;
wc.prototype.Jd = function() {
  return this.cg;
};
function yc(a) {
  if (a instanceof wc && a.constructor === wc && a.Es === xc) return a.cg;
  ea(a);
  return "type_error:SafeHtml";
}
function zc(a) {
  if (a instanceof wc) return a;
  var b = null;
  a.Lm && (b = a.Tg());
  return Ac(lb(a.Se ? a.Jd() : String(a)), b);
}
var Bc = /^[a-zA-Z0-9-]+$/,
  Cc = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0
  },
  Dc = {
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
function Ec(a, b, c) {
  var e = String(a);
  if (!Bc.test(e)) throw Error("Invalid tag name <" + e + ">.");
  if (e.toUpperCase() in Dc)
    throw Error("Tag name <" + e + "> is not allowed for SafeHtml.");
  a = String(a);
  e = null;
  var f = "<" + a,
    h = "";
  if (b)
    for (n in b) {
      if (!Bc.test(n)) throw Error('Invalid attribute name "' + n + '".');
      var k = b[n];
      if (null != k) {
        var l = a;
        var m = n;
        if (k instanceof cc) k = ec(k);
        else if ("style" == m.toLowerCase()) {
          if (!ha(k))
            throw Error(
              'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                typeof k +
                " given: " +
                k
            );
          k instanceof nc || (k = qc(k));
          k instanceof nc && k.constructor === nc && k.Fs === oc
            ? (k = k.xn)
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
          if (m.toLowerCase() in Cc)
            if (k instanceof fc)
              k instanceof fc && k.constructor === fc && k.Js === gc
                ? (k = k.mr)
                : (ea(k), (k = "type_error:TrustedResourceUrl"));
            else if (k instanceof hc) k = jc(k);
            else if (q(k)) k = lc(k).Jd();
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
        k.Se && (k = k.Jd());
        m = m + '="' + lb(String(k)) + '"';
        h += " " + m;
      }
    }
  var n = f + h;
  null != c ? u(c) || (c = [c]) : (c = []);
  !0 === bc[a.toLowerCase()]
    ? (n += ">")
    : ((c = Fc(c)), (n += ">" + yc(c) + "</" + a + ">"), (e = c.Tg()));
  (b = b && b.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
  return Ac(n, e);
}
function Fc(a) {
  function b(a) {
    u(a)
      ? ra(a, b)
      : ((a = zc(a)),
        (e += yc(a)),
        (a = a.Tg()),
        0 == c ? (c = a) : 0 != a && c != a && (c = null));
  }
  var c = 0,
    e = "";
  ra(arguments, b);
  return Ac(e, c);
}
var xc = {};
function Ac(a, b) {
  return new wc().Ek(a, b);
}
wc.prototype.Ek = function(a, b) {
  this.cg = a;
  this.Pp = b;
  return this;
};
Ac("<!DOCTYPE html>", 0);
var Gc = Ac("", 0),
  Hc = Ac("<br>", 0);
function Ic(a, b) {
  a.innerHTML = yc(b);
}
function Jc(a, b) {
  this.width = a;
  this.height = b;
}
d = Jc.prototype;
d.clone = function() {
  return new Jc(this.width, this.height);
};
d.Ws = function() {
  return this.width * this.height;
};
d.aspectRatio = function() {
  return this.width / this.height;
};
d.zq = function() {
  return !this.Ws();
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
  b = t(b) ? b : a;
  this.width *= a;
  this.height *= b;
  return this;
};
function Kc(a) {
  return a ? new Lc(Mc(a)) : pa || (pa = new Lc());
}
function Nc(a, b) {
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
function Oc(a, b) {
  Db(b, function(b, e) {
    b && b.Se && (b = b.Jd());
    "style" == e
      ? (a.style.cssText = b)
      : "class" == e
      ? (a.className = b)
      : "for" == e
      ? (a.htmlFor = b)
      : Pc.hasOwnProperty(e)
      ? a.setAttribute(Pc[e], b)
      : hb(e, "aria-") || hb(e, "data-")
      ? a.setAttribute(e, b)
      : (a[e] = b);
  });
}
var Pc = {
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
function Qc() {
  var a = window.document;
  a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new Jc(a.clientWidth, a.clientHeight);
}
function Sc(a) {
  var b = Tc(a);
  a = a.parentWindow || a.defaultView;
  return G && Wb("10") && a.pageYOffset != b.scrollTop
    ? new A(b.scrollLeft, b.scrollTop)
    : new A(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
}
function Tc(a) {
  return a.scrollingElement
    ? a.scrollingElement
    : I || "CSS1Compat" != a.compatMode
    ? a.body || a.documentElement
    : a.documentElement;
}
function C(a, b, c) {
  return Uc(document, arguments);
}
function Uc(a, b) {
  var c = String(b[0]),
    e = b[1];
  if (!Zb && e && (e.name || e.type)) {
    c = ["<", c];
    e.name && c.push(' name="', lb(e.name), '"');
    if (e.type) {
      c.push(' type="', lb(e.type), '"');
      var f = {};
      Fb(f, e);
      delete f.type;
      e = f;
    }
    c.push(">");
    c = c.join("");
  }
  c = a.createElement(c);
  e &&
    (q(e) ? (c.className = e) : u(e) ? (c.className = e.join(" ")) : Oc(c, e));
  2 < b.length && Vc(a, c, b, 2);
  return c;
}
function Vc(a, b, c, e) {
  function f(c) {
    c && b.appendChild(q(c) ? a.createTextNode(c) : c);
  }
  for (; e < c.length; e++) {
    var h = c[e];
    !fa(h) || (ha(h) && 0 < h.nodeType) ? f(h) : ra(Wc(h) ? za(h) : h, f);
  }
}
function Xc(a) {
  for (var b; (b = a.firstChild); ) a.removeChild(b);
}
function Yc(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
}
function F(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
function Zc(a, b) {
  if (!a || !b) return !1;
  if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
  if ("undefined" != typeof a.compareDocumentPosition)
    return a == b || !!(a.compareDocumentPosition(b) & 16);
  for (; b && a != b; ) b = b.parentNode;
  return b == a;
}
function Mc(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function $c(a, b) {
  if ("textContent" in a) a.textContent = b;
  else if (3 == a.nodeType) a.data = String(b);
  else if (a.firstChild && 3 == a.firstChild.nodeType) {
    for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
    a.firstChild.data = String(b);
  } else Xc(a), a.appendChild(Mc(a).createTextNode(String(b)));
}
var ad = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
  bd = { IMG: " ", BR: "\n" };
function cd(a) {
  return G && !Wb("9")
    ? ((a = a.getAttributeNode("tabindex")), null != a && a.specified)
    : a.hasAttribute("tabindex");
}
function dd(a) {
  a = a.tabIndex;
  return t(a) && 0 <= a && 32768 > a;
}
function ed(a) {
  if (ac && null !== a && "innerText" in a)
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  else {
    var b = [];
    fd(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  ac || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
}
function gd(a) {
  var b = [];
  fd(a, b, !1);
  return b.join("");
}
function fd(a, b, c) {
  if (!(a.nodeName in ad))
    if (3 == a.nodeType)
      c
        ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
        : b.push(a.nodeValue);
    else if (a.nodeName in bd) b.push(bd[a.nodeName]);
    else for (a = a.firstChild; a; ) fd(a, b, c), (a = a.nextSibling);
}
function Wc(a) {
  if (a && "number" == typeof a.length) {
    if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item;
    if (x(a)) return "function" == typeof a.item;
  }
  return !1;
}
function Lc(a) {
  this.kd = a || g.document || document;
}
d = Lc.prototype;
d.Yb = Kc;
d.F = function(a) {
  return q(a) ? this.kd.getElementById(a) : a;
};
d.getElementsByTagName = function(a, b) {
  return (b || this.kd).getElementsByTagName(String(a));
};
d.setProperties = Oc;
d.O = function(a, b, c) {
  return Uc(this.kd, arguments);
};
d.createElement = function(a) {
  return this.kd.createElement(String(a));
};
d.createTextNode = function(a) {
  return this.kd.createTextNode(String(a));
};
d.sp = function(a, b) {
  for (
    var c = this.kd,
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
  Vc(Mc(a), a, arguments, 1);
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
d.vr = Xc;
d.removeNode = F;
d.je = function(a) {
  return $b && void 0 != a.children
    ? a.children
    : sa(a.childNodes, function(a) {
        return 1 == a.nodeType;
      });
};
d.contains = Zc;
d.pe = function(a) {
  var b;
  (b =
    "A" == a.tagName ||
    "INPUT" == a.tagName ||
    "TEXTAREA" == a.tagName ||
    "SELECT" == a.tagName ||
    "BUTTON" == a.tagName
      ? !a.disabled && (!cd(a) || dd(a))
      : cd(a) && dd(a)) && G
    ? ((a =
        !x(a.getBoundingClientRect) || (G && null == a.parentElement)
          ? { height: a.offsetHeight, width: a.offsetWidth }
          : a.getBoundingClientRect()),
      (a = null != a && 0 < a.height && 0 < a.width))
    : (a = b);
  return a;
};
// Copyright 2011 Google Inc.  Apache License 2.0
function hd(a, b) {
  this.w = a;
  this.type = b;
  a.o.Zl &&
    ((this.Wc = a.o.Zl[b]), (this.Vj = a.o.Zl[B.Eg[b]]), (this.Jm = !this.Wc));
}
d = hd.prototype;
d.zb = null;
d.$d = null;
d.Rd = null;
d.yc = 0;
d.Fa = 0;
d.Te = !1;
d.Wc = null;
d.Vj = null;
d.Jm = null;
d.Rj = function(a) {
  var b = this,
    c = b.w,
    e = a.w;
  a.isConnected() && a.disconnect();
  if (b.isConnected()) {
    var f = D(b),
      h = b.Rd;
    b.Rd = null;
    if (f.Wa) (h = B.D.Ke(f)), f.v(), (f = null);
    else if (b.type == B.ab) {
      if (!f.S) throw "Orphan block does not have an output connection.";
      var k = id(e, f);
      k && (f.S.connect(k), (f = null));
    } else if (b.type == B.Ka) {
      if (!f.X) throw "Orphan block does not have a previous connection.";
      for (k = e; k.R; ) {
        var l = Ya(k);
        if (l && !l.Wa) k = l;
        else {
          jd(f.X, k.R) && (k.R.connect(f.X), (f = null));
          break;
        }
      }
    }
    if (f && (b.disconnect(), B.i.Rb)) {
      var m = B.i.$b();
      setTimeout(function() {
        f.o &&
          !f.getParent() &&
          (B.i.T(m), f.S ? kd(f.S, b) : f.X && kd(f.X, b), B.i.T(!1));
      }, B.yj);
    }
    b.Rd = h;
  }
  var n;
  B.i.isEnabled() && (n = new B.i.Jh(e));
  ld(b, a);
  e.kg(c);
  n && (n.te(), B.i.M(n));
};
d.v = function() {
  if (this.isConnected()) throw "Disconnect connection before disposing of it.";
  this.Te && md(this.Wc, this);
  this.Vj = this.Wc = null;
};
function nd(a) {
  return a.type == B.ab || a.type == B.Ka;
}
d.isConnected = function() {
  return !!this.zb;
};
function od(a, b) {
  if (!b) return 3;
  if (nd(a))
    var c = a.w,
      e = b.w;
  else (e = a.w), (c = b.w);
  return c && c == e
    ? 1
    : b.type != B.Eg[a.type]
    ? 2
    : c && e && c.o !== e.o
    ? 5
    : jd(a, b)
    ? c.Wa && !e.Wa
      ? 6
      : 0
    : 4;
}
d.Fk = function(a) {
  if (0 != od(this, a)) return !1;
  if (a.type == B.Fg || a.type == B.Ge)
    if (a.isConnected() || this.isConnected()) return !1;
  return (a.type == B.ab && a.isConnected() && !D(a).Md() && !D(a).Wa) ||
    (this.type == B.Ge && a.isConnected() && !this.w.R && !D(a).Wa && D(a).R) ||
    -1 != B.dk.indexOf(a)
    ? !1
    : !0;
};
d.connect = function(a) {
  if (this.zb != a) {
    switch (od(this, a)) {
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
          (this + " expected " + this.$d + ", found " + a.$d);
      case 6:
        throw "Connecting non-shadow to shadow block.";
      default:
        throw "Unknown connection failure: this should never happen!";
    }
    nd(this) ? this.Rj(a) : a.Rj(this);
  }
};
function ld(a, b) {
  a.zb = b;
  b.zb = a;
}
function pd(a, b) {
  for (var c = !1, e = 0; e < a.W.length; e++) {
    var f = a.W[e].connection;
    if (f && f.type == B.ab && jd(b.S, f)) {
      if (c) return null;
      c = f;
    }
  }
  return c;
}
function id(a, b) {
  for (var c; (c = pd(a, b)); ) if (((a = D(c)), !a || a.Wa)) return c;
  return null;
}
d.disconnect = function() {
  var a = this.zb;
  if (nd(this)) {
    var b = this.w;
    var c = a.w;
    a = this;
  } else (b = a.w), (c = this.w);
  this.lm(b, c);
  a.Gn();
};
d.lm = function(a, b) {
  var c;
  B.i.isEnabled() && (c = new B.i.Jh(b));
  this.zb = this.zb.zb = null;
  b.kg(null);
  c && (c.te(), B.i.M(c));
};
d.Gn = function() {
  var a = this.w,
    b = this.Rd;
  if (a.o && b && B.i.Rb)
    if (((a = B.D.Ng(b, a.o)), a.S)) this.connect(a.S);
    else if (a.X) this.connect(a.X);
    else throw "Child block does not have output or previous statement.";
};
function D(a) {
  return a.isConnected() ? a.zb.w : null;
}
function jd(a, b) {
  if (!a.$d || !b.$d) return !0;
  for (var c = 0; c < a.$d.length; c++)
    if (-1 != b.$d.indexOf(a.$d[c])) return !0;
  return !1;
}
d.Vq = function() {
  this.isConnected() && !jd(this, this.zb) && eb(nd(this) ? D(this) : this.w);
};
d.vh = function(a) {
  a ? (u(a) || (a = [a]), (this.$d = a), this.Vq()) : (this.$d = null);
};
d.Pq = function() {
  return [];
};
d.toString = function() {
  var a = this.w;
  if (a)
    if (a.S == this) var b = "Output Connection of ";
    else if (a.X == this) b = "Previous Connection of ";
    else if (a.R == this) b = "Next Connection of ";
    else if (
      (b = va(
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
  return b + qd(a);
};
function rd(a, b) {
  rd.m.constructor.call(this, a, b);
  this.$k = new A(0, 0);
}
y(rd, hd);
function sd(a, b) {
  var c = a.yc - b.yc;
  a = a.Fa - b.Fa;
  return Math.sqrt(c * c + a * a);
}
function kd(a, b) {
  if (!a.w.o.lb()) {
    var c = td(a.w);
    if (!c.rc) {
      var e = !1;
      if (!c.Md()) {
        c = td(b.w);
        if (!c.Md()) return;
        b = a;
        e = !0;
      }
      var f = B.selected == c;
      f || c.Hg();
      var h = b.yc + B.zc - a.yc;
      a = b.Fa + B.zc - a.Fa;
      e && (a = -a);
      c.s && (h = -h);
      c.moveBy(h, a);
      f || c.eg();
    }
  }
}
d = rd.prototype;
d.moveTo = function(a, b) {
  this.Te && md(this.Wc, this);
  this.yc = a;
  this.Fa = b;
  this.Jm || ud(this.Wc, this);
};
d.moveBy = function(a, b) {
  this.moveTo(this.yc + a, this.Fa + b);
};
function vd(a, b) {
  a.moveTo(b.x + a.$k.x, b.y + a.$k.y);
}
function wd(a, b, c) {
  a.$k.x = b;
  a.$k.y = c;
}
function xd(a) {
  var b = a.zb.yc - a.yc,
    c = a.zb.Fa - a.Fa;
  if (0 != b || 0 != c) {
    a = D(a);
    var e = a.N();
    if (!e) throw "block is not rendered.";
    e = B.h.ac(e);
    a.N().setAttribute(
      "transform",
      "translate(" + (e.x - b) + "," + (e.y - c) + ")"
    );
    yd(a, -b, -c);
  }
}
d.closest = function(a, b) {
  var c = this.Vj;
  if (c.length) {
    var e = this.Fa,
      f = this.yc;
    this.yc = f + b.x;
    this.Fa = e + b.y;
    var h = zd(c, this);
    b = null;
    for (var k = a, l, m = h - 1; 0 <= m && Math.abs(c[m].Fa - this.Fa) <= a; )
      (l = c[m]), this.Fk(l, k) && ((b = l), (k = sd(l, this))), m--;
    for (; h < c.length && Math.abs(c[h].Fa - this.Fa) <= a; )
      (l = c[h]), this.Fk(l, k) && ((b = l), (k = sd(l, this))), h++;
    this.yc = f;
    this.Fa = e;
    a = { connection: b, rr: k };
  } else a = { connection: null, rr: a };
  return a;
};
d.Ck = function() {
  var a =
    this.type == B.ab || this.type == B.Fg
      ? "m 0,0 " + Ad + " v 5"
      : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5";
  var b = this.w.ka();
  hd.tq = B.h.A(
    "path",
    {
      class: "blocklyHighlightedConnectionPath",
      d: a,
      transform:
        "translate(" +
        (this.yc - b.x) +
        "," +
        (this.Fa - b.y) +
        ")" +
        (this.w.s ? " scale(-1 1)" : "")
    },
    this.w.N()
  );
};
function Bd(a) {
  Cd(a, !1);
  var b = [];
  if (a.type != B.ab && a.type != B.Ka) return b;
  if ((a = D(a))) {
    if (a.isCollapsed()) {
      var c = [];
      a.S && c.push(a.S);
      a.R && c.push(a.R);
      a.X && c.push(a.X);
    } else c = a.Fd(!0);
    for (var e = 0; e < c.length; e++) b.push.apply(b, Bd(c[e]));
    b.length || (b[0] = a);
  }
  return b;
}
function Dd() {
  F(hd.tq);
  delete hd.tq;
}
function Cd(a, b) {
  (a.Jm = b) && a.Te ? md(a.Wc, a) : b || a.Te || ud(a.Wc, a);
}
d.Fk = function(a, b) {
  return sd(this, a) > b ? !1 : rd.m.Fk.call(this, a);
};
d.lm = function(a, b) {
  rd.m.lm.call(this, a, b);
  a.P && a.Y();
  b.P && (Ed(b), b.Y());
};
d.Gn = function() {
  var a = this.w,
    b = this.Rd;
  if (a.o && b && B.i.Rb) {
    rd.m.Gn.call(this);
    b = D(this);
    if (!b) throw "Couldn't respawn the shadow block that should exist here.";
    b.Ue();
    b.Y(!1);
    a.P && a.Y();
  }
};
d.Pq = function(a) {
  return Fd(this.Vj, this, a);
};
d.Rj = function(a) {
  rd.m.Rj.call(this, a);
  var b = this.w;
  a = a.w;
  b.P && Ed(b);
  a.P && Ed(a);
  b.P && a.P && (this.type == B.Ka || this.type == B.Ge ? a.Y() : b.Y());
};
d.Vq = function() {
  this.isConnected() &&
    !jd(this, this.zb) &&
    (eb(nd(this) ? D(this) : this.w), this.w.Vb());
};
// Copyright 2017 Google Inc.  Apache License 2.0
function Hd(a) {
  this.sf = B.selected = a;
  this.j = a.o;
  a = this.sf.Fd(!1);
  var b;
  a: {
    for (b = this.sf.R; b; ) {
      var c = D(b);
      if (!c) break a;
      b = c.R;
    }
    b = null;
  }
  b && b != this.sf.R && a.push(b);
  this.Ql = a;
  this.hh = this.Mb = null;
  this.yn = 0;
  this.yf = !1;
}
Hd.prototype.v = function() {
  this.j = this.sf = null;
  this.Ql.length = 0;
  this.hh = this.Mb = null;
};
Hd.prototype.update = function(a, b) {
  var c = this.Mb,
    e = this.Mb;
  this.hh = this.Mb = null;
  this.yn = B.zc;
  for (var f = 0; f < this.Ql.length; f++) {
    var h = this.Ql[f],
      k = h.closest(this.yn, a);
    k.connection && ((this.Mb = k.connection), (this.hh = h), (this.yn = k.rr));
  }
  (a = e != this.Mb) && c && Dd();
  c = !!this.Mb && b != B.uo;
  this.yf = (b = !!b && !this.sf.getParent() && this.sf.Ob()) && !c;
  b && this.Mb && (Dd(), (this.Mb = null));
  !this.yf && a && this.Mb && this.Mb && this.Mb.Ck();
};
function Id(a, b) {
  this.Qa = a;
  this.j = b;
  this.Og = new Hd(this.Qa);
  this.Gf = null;
  this.yf = !1;
  this.Sd = this.Qa.ka();
  b = [];
  a = Ja(a, !1);
  for (var c = 0, e; (e = a[c]); c++) {
    e = Jd(e);
    for (var f = 0; f < e.length; f++)
      b.push({ location: e[f].ah, icon: e[f] });
  }
  this.ck = b;
}
Id.prototype.v = function() {
  this.Ra = this.j = this.Qa = null;
  this.ck.length = 0;
  this.Og && (this.Og.v(), (this.Og = null));
};
function Kd(a, b, c) {
  c = a.nh(c);
  a.Qa.Vk(Ha(a.Sd, c));
  for (var e = 0; e < a.ck.length; e++) {
    var f = a.ck[e];
    Ld(f.icon, Ha(f.location, c));
  }
  a.Gf = Md(a.j, b);
  a.Og.update(c, a.Gf);
  a.yf = a.Og.yf;
  b = a.j.wc;
  a.yf
    ? (a.Qa.ej(!0), a.Gf == B.Fl && b && Nd(b, !0))
    : (a.Qa.ej(!1), b && Nd(b, !1));
}
function Od(a, b, c) {
  Kd(a, b, c);
  a.ck = [];
  B.ya.nm();
  b = a.nh(c);
  a.Qa.Mq(Ha(a.Sd, b));
  c = a.j.wc;
  a.yf ? (c && Pd(c.close, 100, c), a.ji(), a.Qa.v(!1, !0)) : c && c.close();
  a.yf ||
    (yd(a.Qa, b.x, b.y),
    a.Qa.mf(!1),
    (b = a.Og),
    b.Mb &&
      (b.hh.connect(b.Mb),
      b.sf.P && (B.ya.vt((nd(b.hh) ? b.Mb : b.hh).w), Qd(td(b.sf))),
      b.Mb && Dd()),
    a.Qa.Y(),
    a.ji(),
    Rd(a.Qa));
  a.j.xb(!0);
  (b = a.j.V) &&
    B.h.wb(b.jc, a.Qa.Ob() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  B.i.T(!1);
}
Id.prototype.ji = function() {
  var a = new B.i.Jh(this.Qa);
  a.dn = this.Sd;
  a.te();
  B.i.M(a);
};
Id.prototype.nh = function(a) {
  a = new A(a.x / this.j.scale, a.y / this.j.scale);
  this.j.Mi && (a = a.scale(1 / this.j.options.Gc.scale));
  return a;
};
var Sd = !G || 9 <= Number(Xb),
  Td = !G || 9 <= Number(Xb),
  Ud = G && !Wb("9"),
  Vd =
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
  Wd = "PointerEvent" in g,
  Xd =
    "MSPointerEvent" in g && !(!g.navigator || !g.navigator.msPointerEnabled),
  Yd = (function() {
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
function Zd() {
  0 != $d && (ae[ia(this)] = this);
  this.Mg = this.Mg;
  this.re = this.re;
}
var $d = 0,
  ae = {};
Zd.prototype.Mg = !1;
Zd.prototype.v = function() {
  if (!this.Mg && ((this.Mg = !0), this.Ia(), 0 != $d)) {
    var a = ia(this);
    if (0 != $d && this.re && 0 < this.re.length)
      throw Error(
        this +
          " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
      );
    delete ae[a];
  }
};
function be(a, b) {
  a.Mg
    ? aa(void 0)
      ? b.call(void 0)
      : b()
    : (a.re || (a.re = []), a.re.push(aa(void 0) ? na(b, void 0) : b));
}
Zd.prototype.Ia = function() {
  if (this.re) for (; this.re.length; ) this.re.shift()();
};
function ce(a) {
  a && "function" == typeof a.v && a.v();
}
function de(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.dg = !1;
  this.xr = !0;
}
de.prototype.stopPropagation = function() {
  this.dg = !0;
};
de.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.xr = !1;
};
function ee(a) {
  return I ? "webkit" + a : Kb ? "o" + a.toLowerCase() : a.toLowerCase();
}
var fe = {
    Bw: "click",
    jz: "rightclick",
    Lw: "dblclick",
    Cg: "mousedown",
    Dg: "mouseup",
    Nh: "mouseover",
    Mh: "mouseout",
    As: "mousemove",
    ys: "mouseenter",
    zs: "mouseleave",
    Bg: "mousecancel",
    oz: "selectionchange",
    pz: "selectstart",
    Rz: "wheel",
    Dx: "keypress",
    Cx: "keydown",
    Ex: "keyup",
    yw: "blur",
    tx: "focus",
    Mw: "deactivate",
    ux: "focusin",
    vx: "focusout",
    zg: "change",
    gz: "reset",
    nz: "select",
    yz: "submit",
    Ax: "input",
    cz: "propertychange",
    ex: "dragstart",
    Yw: "drag",
    $w: "dragenter",
    bx: "dragover",
    ax: "dragleave",
    kx: "drop",
    Zw: "dragend",
    Gz: "touchstart",
    Fz: "touchmove",
    Ez: "touchend",
    Dz: "touchcancel",
    tw: "beforeunload",
    Gw: "consolemessage",
    Hw: "contextmenu",
    Nw: "devicechange",
    Ow: "devicemotion",
    Pw: "deviceorientation",
    Sw: "DOMContentLoaded",
    px: "error",
    zx: "help",
    Fx: "load",
    Nx: "losecapture",
    Ny: "orientationchange",
    ez: "readystatechange",
    hz: "resize",
    kz: "scroll",
    Iz: "unload",
    zw: "canplay",
    Aw: "canplaythrough",
    mx: "durationchange",
    nx: "emptied",
    ox: "ended",
    Ix: "loadeddata",
    Jx: "loadedmetadata",
    Ry: "pause",
    Sy: "play",
    Ty: "playing",
    dz: "ratechange",
    lz: "seeked",
    mz: "seeking",
    vz: "stalled",
    zz: "suspend",
    Cz: "timeupdate",
    Pz: "volumechange",
    Qz: "waiting",
    uz: "sourceopen",
    sz: "sourceended",
    rz: "sourceclosed",
    fw: "abort",
    Kz: "update",
    Nz: "updatestart",
    Lz: "updateend",
    yx: "hashchange",
    Oy: "pagehide",
    Py: "pageshow",
    bz: "popstate",
    Jw: "copy",
    Qy: "paste",
    Kw: "cut",
    nw: "beforecopy",
    ow: "beforecut",
    rw: "beforepaste",
    ly: "online",
    ky: "offline",
    Px: "message",
    Fw: "connect",
    Bx: "install",
    gw: "activate",
    sx: "fetch",
    wx: "foreignfetch",
    Qx: "messageerror",
    wz: "statechange",
    Mz: "updatefound",
    Iw: "controllerchange",
    lw: ee("AnimationStart"),
    jw: ee("AnimationEnd"),
    kw: ee("AnimationIteration"),
    Hz: ee("TransitionEnd"),
    Vy: "pointerdown",
    az: "pointerup",
    Uy: "pointercancel",
    Yy: "pointermove",
    $y: "pointerover",
    Zy: "pointerout",
    Wy: "pointerenter",
    Xy: "pointerleave",
    xx: "gotpointercapture",
    Ox: "lostpointercapture",
    Rx: "MSGestureChange",
    Sx: "MSGestureEnd",
    Tx: "MSGestureHold",
    Ux: "MSGestureStart",
    Vx: "MSGestureTap",
    Wx: "MSGotPointerCapture",
    Xx: "MSInertiaStart",
    Yx: "MSLostPointerCapture",
    Zx: "MSPointerCancel",
    $x: "MSPointerDown",
    ay: "MSPointerEnter",
    by: "MSPointerHover",
    ey: "MSPointerLeave",
    gy: "MSPointerMove",
    hy: "MSPointerOut",
    iy: "MSPointerOver",
    jy: "MSPointerUp",
    Az: "text",
    Bz: G ? "textinput" : "textInput",
    Dw: "compositionstart",
    Ew: "compositionupdate",
    Cw: "compositionend",
    pw: "beforeinput",
    qx: "exit",
    Gx: "loadabort",
    Hx: "loadcommit",
    Kx: "loadredirect",
    Lx: "loadstart",
    Mx: "loadstop",
    iz: "responsive",
    qz: "sizechanged",
    Jz: "unresponsive",
    Oz: "visibilitychange",
    xz: "storage",
    Xw: "DOMSubtreeModified",
    Tw: "DOMNodeInserted",
    Vw: "DOMNodeRemoved",
    Ww: "DOMNodeRemovedFromDocument",
    Uw: "DOMNodeInsertedIntoDocument",
    Qw: "DOMAttrModified",
    Rw: "DOMCharacterDataModified",
    sw: "beforeprint",
    iw: "afterprint",
    qw: "beforeinstallprompt",
    mw: "appinstalled"
  },
  ge = {
    Cg: Wd ? "pointerdown" : Xd ? "MSPointerDown" : "mousedown",
    Dg: Wd ? "pointerup" : Xd ? "MSPointerUp" : "mouseup",
    Bg: Wd ? "pointercancel" : Xd ? "MSPointerCancel" : "mousecancel",
    As: Wd ? "pointermove" : Xd ? "MSPointerMove" : "mousemove",
    Nh: Wd ? "pointerover" : Xd ? "MSPointerOver" : "mouseover",
    Mh: Wd ? "pointerout" : Xd ? "MSPointerOut" : "mouseout",
    ys: Wd ? "pointerenter" : Xd ? "MSPointerEnter" : "mouseenter",
    zs: Wd ? "pointerleave" : Xd ? "MSPointerLeave" : "mouseleave"
  };
function he(a, b) {
  de.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.rn = !1;
  this.pointerId = 0;
  this.pointerType = "";
  this.Cd = null;
  a && this.$(a, b);
}
y(he, de);
var ie = [1, 4, 2],
  je = { 2: "touch", 3: "pen", 4: "mouse" };
he.prototype.$ = function(a, b) {
  var c = (this.type = a.type),
    e = a.changedTouches ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  if ((b = a.relatedTarget)) {
    if (H) {
      a: {
        try {
          Hb(b.nodeName);
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
    ? ((this.offsetX = I || void 0 !== a.offsetX ? a.offsetX : a.layerX),
      (this.offsetY = I || void 0 !== a.offsetY ? a.offsetY : a.layerY),
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
  this.rn = Nb ? a.metaKey : a.ctrlKey;
  this.pointerId = a.pointerId || 0;
  this.pointerType = q(a.pointerType) ? a.pointerType : je[a.pointerType] || "";
  this.state = a.state;
  this.Cd = a;
  a.defaultPrevented && this.preventDefault();
};
function ke(a) {
  return Sd
    ? 0 == a.Cd.button
    : "click" == a.type
    ? !0
    : !!(a.Cd.button & ie[0]);
}
he.prototype.stopPropagation = function() {
  he.m.stopPropagation.call(this);
  this.Cd.stopPropagation
    ? this.Cd.stopPropagation()
    : (this.Cd.cancelBubble = !0);
};
he.prototype.preventDefault = function() {
  he.m.preventDefault.call(this);
  var a = this.Cd;
  if (a.preventDefault) a.preventDefault();
  else if (((a.returnValue = !1), Ud))
    try {
      if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
    } catch (b) {}
};
var le = "closure_listenable_" + ((1e6 * Math.random()) | 0);
function me(a) {
  return !(!a || !a[le]);
}
var ne = 0;
function oe(a, b, c, e, f) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!e;
  this.Bk = f;
  this.key = ++ne;
  this.sh = this.Kj = !1;
}
function pe(a) {
  a.sh = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.Bk = null;
}
function qe(a) {
  this.src = a;
  this.dc = {};
  this.qj = 0;
}
qe.prototype.add = function(a, b, c, e, f) {
  var h = a.toString();
  a = this.dc[h];
  a || ((a = this.dc[h] = []), this.qj++);
  var k = re(a, b, e, f);
  -1 < k
    ? ((b = a[k]), c || (b.Kj = !1))
    : ((b = new oe(b, this.src, h, !!e, f)), (b.Kj = c), a.push(b));
  return b;
};
qe.prototype.remove = function(a, b, c, e) {
  a = a.toString();
  if (!(a in this.dc)) return !1;
  var f = this.dc[a];
  b = re(f, b, c, e);
  return -1 < b
    ? (pe(f[b]),
      Array.prototype.splice.call(f, b, 1),
      0 == f.length && (delete this.dc[a], this.qj--),
      !0)
    : !1;
};
function se(a, b) {
  var c = b.type;
  c in a.dc &&
    xa(a.dc[c], b) &&
    (pe(b), 0 == a.dc[c].length && (delete a.dc[c], a.qj--));
}
qe.prototype.removeAll = function(a) {
  a = a && a.toString();
  var b = 0,
    c;
  for (c in this.dc)
    if (!a || c == a) {
      for (var e = this.dc[c], f = 0; f < e.length; f++) ++b, pe(e[f]);
      delete this.dc[c];
      this.qj--;
    }
  return b;
};
qe.prototype.oi = function(a, b, c, e) {
  a = this.dc[a.toString()];
  var f = -1;
  a && (f = re(a, b, c, e));
  return -1 < f ? a[f] : null;
};
function re(a, b, c, e) {
  for (var f = 0; f < a.length; ++f) {
    var h = a[f];
    if (!h.sh && h.listener == b && h.capture == !!c && h.Bk == e) return f;
  }
  return -1;
}
var te = "closure_lm_" + ((1e6 * Math.random()) | 0),
  ue = {},
  ve = 0;
function we(a, b, c, e, f) {
  if (e && e.once) return xe(a, b, c, e, f);
  if (u(b)) {
    for (var h = 0; h < b.length; h++) we(a, b[h], c, e, f);
    return null;
  }
  c = ye(c);
  return me(a)
    ? a.ha(b, c, ha(e) ? !!e.capture : !!e, f)
    : ze(a, b, c, !1, e, f);
}
function ze(a, b, c, e, f, h) {
  if (!b) throw Error("Invalid event type");
  var k = ha(f) ? !!f.capture : !!f,
    l = Ae(a);
  l || (a[te] = l = new qe(a));
  c = l.add(b, c, e, k, h);
  if (c.proxy) return c;
  e = Be();
  c.proxy = e;
  e.src = a;
  e.listener = c;
  if (a.addEventListener)
    Yd || (f = k),
      void 0 === f && (f = !1),
      a.addEventListener(b.toString(), e, f);
  else if (a.attachEvent) a.attachEvent(Ce(b.toString()), e);
  else if (a.addListener && a.removeListener) a.addListener(e);
  else throw Error("addEventListener and attachEvent are unavailable.");
  ve++;
  return c;
}
function Be() {
  var a = De,
    b = Td
      ? function(c) {
          return a.call(b.src, b.listener, c);
        }
      : function(c) {
          c = a.call(b.src, b.listener, c);
          if (!c) return c;
        };
  return b;
}
function xe(a, b, c, e, f) {
  if (u(b)) {
    for (var h = 0; h < b.length; h++) xe(a, b[h], c, e, f);
    return null;
  }
  c = ye(c);
  return me(a)
    ? a.Fq(b, c, ha(e) ? !!e.capture : !!e, f)
    : ze(a, b, c, !0, e, f);
}
function Ee(a, b, c, e, f) {
  if (u(b)) for (var h = 0; h < b.length; h++) Ee(a, b[h], c, e, f);
  else
    (e = ha(e) ? !!e.capture : !!e),
      (c = ye(c)),
      me(a)
        ? a.Nc(b, c, e, f)
        : a && (a = Ae(a)) && (b = a.oi(b, c, e, f)) && Fe(b);
}
function Fe(a) {
  if (!t(a) && a && !a.sh) {
    var b = a.src;
    if (me(b)) se(b.ge, a);
    else {
      var c = a.type,
        e = a.proxy;
      b.removeEventListener
        ? b.removeEventListener(c, e, a.capture)
        : b.detachEvent
        ? b.detachEvent(Ce(c), e)
        : b.addListener && b.removeListener && b.removeListener(e);
      ve--;
      (c = Ae(b))
        ? (se(c, a), 0 == c.qj && ((c.src = null), (b[te] = null)))
        : pe(a);
    }
  }
}
function Ce(a) {
  return a in ue ? ue[a] : (ue[a] = "on" + a);
}
function Ge(a, b, c, e) {
  var f = !0;
  if ((a = Ae(a)))
    if ((b = a.dc[b.toString()]))
      for (b = b.concat(), a = 0; a < b.length; a++) {
        var h = b[a];
        h && h.capture == c && !h.sh && ((h = He(h, e)), (f = f && !1 !== h));
      }
  return f;
}
function He(a, b) {
  var c = a.listener,
    e = a.Bk || a.src;
  a.Kj && Fe(a);
  return c.call(e, b);
}
function De(a, b) {
  if (a.sh) return !0;
  if (!Td) {
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
    b = new he(e, this);
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
      for (f = e.length - 1; !b.dg && 0 <= f; f--) {
        b.currentTarget = e[f];
        var h = Ge(e[f], a, !0, b);
        c = c && h;
      }
      for (f = 0; !b.dg && f < e.length; f++)
        (b.currentTarget = e[f]), (h = Ge(e[f], a, !1, b)), (c = c && h);
    }
    return c;
  }
  return He(a, new he(b, this));
}
function Ae(a) {
  a = a[te];
  return a instanceof qe ? a : null;
}
var Ie = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function ye(a) {
  if (x(a)) return a;
  a[Ie] ||
    (a[Ie] = function(b) {
      return a.handleEvent(b);
    });
  return a[Ie];
}
B.Touch = {};
B.Touch.oj = null;
B.Touch.xd = {};
g.PointerEvent
  ? (B.Touch.xd = {
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
  : Vd &&
    (B.Touch.xd = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"]
    });
B.Pk = 0;
B.Xu = function(a, b) {
  B.af();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (B.Pk = setTimeout(function() {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      b && Je(b, a);
    }, B.ws));
};
B.af = function() {
  B.Pk && (clearTimeout(B.Pk), (B.Pk = 0));
};
B.Touch.ee = function() {
  B.Touch.oj = null;
};
B.Touch.Zn = function(a) {
  return !B.Touch.Nu(a) || B.Touch.mt(a);
};
B.Touch.xk = function(a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 != a.changedTouches[0].identifier &&
      null != a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
B.Touch.mt = function(a) {
  var b = B.Touch.xk(a);
  return void 0 != B.Touch.oj && null != B.Touch.oj
    ? B.Touch.oj == b
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((B.Touch.oj = b), !0)
    : !1;
};
B.Touch.Iv = function(a) {
  if (hb(a.type, "touch")) {
    var b = a.changedTouches[0];
    a.clientX = b.clientX;
    a.clientY = b.clientY;
  }
};
B.Touch.Nu = function(a) {
  return hb(a.type, "touch") || hb(a.type, "mouse") || hb(a.type, "pointer");
};
B.Touch.Lk = function(a) {
  return hb(a.type, "touch") || hb(a.type, "pointer");
};
B.Touch.Lv = function(a) {
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
function Ke(a) {
  Ke.m.constructor.call(this);
  this.wf = a.ga();
  this.hc = a.o.id;
}
y(Ke, Za);
Ke.prototype.ua = function() {
  var a = Ke.m.ua.call(this);
  a.varId = this.wf;
  return a;
};
Ke.prototype.Z = function(a) {
  Ke.m.ua.call(this);
  this.wf = a.varId;
};
function Oa(a) {
  a && (Oa.m.constructor.call(this, a), (this.wg = a.type), (this.vg = a.name));
}
y(Oa, Ke);
Oa.prototype.type = B.i.Lo;
Oa.prototype.ua = function() {
  var a = Oa.m.ua.call(this);
  a.varType = this.wg;
  a.varName = this.vg;
  return a;
};
Oa.prototype.Z = function(a) {
  Oa.m.Z.call(this, a);
  this.wg = a.varType;
  this.vg = a.varName;
};
Oa.prototype.run = function(a) {
  var b = $a(this);
  a ? b.Vc(this.vg, this.wg, this.wf) : b.Hf(this.wf);
};
function Qa(a) {
  a && (Qa.m.constructor.call(this, a), (this.wg = a.type), (this.vg = a.name));
}
y(Qa, Ke);
Qa.prototype.type = B.i.Mo;
Qa.prototype.ua = function() {
  var a = Qa.m.ua.call(this);
  a.varType = this.wg;
  a.varName = this.vg;
  return a;
};
Qa.prototype.Z = function(a) {
  Qa.m.Z.call(this, a);
  this.wg = a.varType;
  this.vg = a.varName;
};
Qa.prototype.run = function(a) {
  var b = $a(this);
  a ? b.Hf(this.wf) : b.Vc(this.vg, this.wg, this.wf);
};
function Ra(a, b) {
  a && (Ra.m.constructor.call(this, a), (this.gn = a.name), (this.cn = b));
}
y(Ra, Ke);
Ra.prototype.type = B.i.No;
Ra.prototype.ua = function() {
  var a = Ra.m.ua.call(this);
  a.oldName = this.gn;
  a.newName = this.cn;
  return a;
};
Ra.prototype.Z = function(a) {
  Ra.m.Z.call(this, a);
  this.gn = a.oldName;
  this.cn = a.newName;
};
Ra.prototype.run = function(a) {
  var b = $a(this);
  a ? b.fg(this.wf, this.cn) : b.fg(this.wf, this.gn);
};
function Le(a) {
  this.na = {};
  this.o = a;
}
d = Le.prototype;
d.clear = function() {
  this.na = Object(null);
};
d.Bn = function(a, b) {
  var c = this.md(b, a.type),
    e = Me(this.o);
  B.i.T(!0);
  try {
    if (c && c.ga() != a.ga()) {
      var f = a.type;
      b != c.name && Ne(c, b, e);
      for (b = 0; b < e.length; b++)
        for (
          var h = void 0, k = e[b], l = a.ga(), m = c.ga(), n = 0;
          (h = k.W[n]);
          n++
        )
          for (var p = 0, r; (r = h.Na[p]); p++)
            r.qh() && l == r.getValue() && r.setValue(m);
      B.i.M(new Qa(a));
      this.na[f].splice(this.ti(f).indexOf(a), 1);
    } else Ne(a, b, e);
  } finally {
    B.i.T(!1);
  }
};
d.fg = function(a, b) {
  var c = this.me(a);
  if (!c) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.Bn(c, b);
};
function Ne(a, b, c) {
  B.i.M(new Ra(a, b));
  a.name = b;
  for (b = 0; b < c.length; b++)
    for (var e, f = c[b], h = a, k = 0; (e = f.W[k]); k++)
      for (var l = 0, m; (m = e.Na[l]); l++)
        m.qh() && h.ga() == m.getValue() && m.yb(h.name);
}
d.Vc = function(a, b, c) {
  var e = this.md(a, b);
  if (e) {
    if (c && e.ga() != c)
      throw Error(
        'Variable "' +
          a +
          '" is already in use and its id is "' +
          e.ga() +
          '" which conflicts with the passed in id, "' +
          c +
          '".'
      );
    return e;
  }
  if (c && this.me(c))
    throw Error('Variable id, "' + c + '", is already in use.');
  c = c || B.h.Ed();
  b = b || "";
  e = new Oe(this.o, a, b, c);
  this.na[b] ? this.na[b].push(e) : (this.na[b] = [e]);
  return e;
};
d.Hf = function(a) {
  var b = this.me(a);
  if (b) {
    var c = b.name,
      e = this.Cm(a);
    a = 0;
    for (var f; (f = e[a]); a++)
      if (
        "procedures_defnoreturn" == f.type ||
        "procedures_defreturn" == f.type
      ) {
        a = Pe(f, "NAME");
        c = B.g.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", c).replace(
          "%2",
          a
        );
        B.alert(c);
        return;
      }
    var h = this;
    1 < e.length
      ? ((c = B.g.DELETE_VARIABLE_CONFIRMATION.replace(
          "%1",
          String(e.length)
        ).replace("%2", c)),
        B.confirm(c, function(a) {
          a && h.Yj(b, e);
        }))
      : h.Yj(b, e);
  } else console.warn("Can't delete non-existent variable: " + a);
};
d.Yj = function(a, b) {
  var c = B.i.$b();
  c || B.i.T(!0);
  try {
    for (var e = 0; e < b.length; e++) b[e].v(!0, !1);
    var f = this.na[a.type];
    b = 0;
    for (var h; (h = f[b]); b++)
      if (h.ga() == a.ga()) {
        f.splice(b, 1);
        B.i.M(new Qa(a));
        break;
      }
  } finally {
    c || B.i.T(!1);
  }
};
d.md = function(a, b) {
  if ((b = this.na[b || ""]))
    for (var c = 0, e; (e = b[c]); c++)
      if (e.name.toLowerCase() == a.toLowerCase()) return e;
  return null;
};
d.me = function(a) {
  for (var b = Object.keys(this.na), c = 0; c < b.length; c++)
    for (var e = b[c], f = 0, h; (h = this.na[e][f]); f++)
      if (h.ga() == a) return h;
  return null;
};
d.ti = function(a) {
  return (a = this.na[a || ""]) ? a.slice() : [];
};
d.Bm = function() {
  for (var a = Object.keys(this.na), b = !1, c = 0; c < a.length; c++)
    "" == a[c] && (b = !0);
  b || a.push("");
  return a;
};
d.ie = function() {
  for (var a = [], b = Object.keys(this.na), c = 0; c < b.length; c++)
    a = a.concat(this.na[b[c]]);
  return a;
};
d.Cm = function(a) {
  for (var b = [], c = Me(this.o), e = 0; e < c.length; e++) {
    var f = Qe(c[e]);
    if (f) for (var h = 0; h < f.length; h++) f[h].ga() == a && b.push(c[e]);
  }
  return b;
};
function Re(a) {
  this.jd = a.id;
  this.hc = a.o.id;
  this.group = B.i.yk;
  this.Rb = B.i.Rb;
}
y(Re, Za);
Re.prototype.ua = function() {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.jd && (a.commentId = this.jd);
  return a;
};
Re.prototype.Z = function(a) {
  this.jd = a.commentId;
  this.group = a.group;
};
function Ua(a, b, c) {
  a && (Ua.m.constructor.call(this, a), (this.Rq = b), (this.Xk = c));
}
y(Ua, Re);
d = Ua.prototype;
d.type = B.i.po;
d.ua = function() {
  var a = Ua.m.ua.call(this);
  a.newContents = this.Xk;
  return a;
};
d.Z = function(a) {
  Ua.m.Z.call(this, a);
  this.Xk = a.newValue;
};
d.dh = function() {
  return this.Rq == this.Xk;
};
d.run = function(a) {
  var b = Se($a(this), this.jd);
  b
    ? b.cd(a ? this.Xk : this.Rq)
    : console.warn("Can't change non-existent comment: " + this.jd);
};
function Ta(a) {
  a && (Ta.m.constructor.call(this, a), (this.xml = a.nj()));
}
y(Ta, Re);
Ta.prototype.type = B.i.qo;
Ta.prototype.ua = function() {
  var a = Ta.m.ua.call(this);
  a.xml = B.D.pc(this.xml);
  return a;
};
Ta.prototype.Z = function(a) {
  Ta.m.Z.call(this, a);
  this.xml = B.D.Kc("<xml>" + a.xml + "</xml>").firstChild;
};
Ta.prototype.run = function(a) {
  var b = $a(this);
  a
    ? ((a = C("xml")), a.appendChild(this.xml), B.D.fe(a, b))
    : (b = Se(b, this.jd))
    ? b.v(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + this.jd);
};
function Wa(a) {
  a && (Wa.m.constructor.call(this, a), (this.xml = a.nj()));
}
y(Wa, Re);
Wa.prototype.type = B.i.ro;
Wa.prototype.ua = function() {
  return Wa.m.ua.call(this);
};
Wa.prototype.Z = function(a) {
  Wa.m.Z.call(this, a);
};
Wa.prototype.run = function(a) {
  var b = $a(this);
  a
    ? (b = Se(b, this.jd))
      ? b.v(!1, !1)
      : console.warn("Can't uncreate non-existent comment: " + this.jd)
    : ((a = C("xml")), a.appendChild(this.xml), B.D.fe(a, b));
};
function Va(a) {
  a &&
    (Va.m.constructor.call(this, a),
    (this.Yl = a),
    (this.fn = a.Pc.clone()),
    (this.Xf = null));
}
y(Va, Re);
d = Va.prototype;
d.te = function() {
  if (!this.Yl)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.Xf = this.Yl.Pc.clone();
  this.Yl = null;
};
d.type = B.i.so;
d.ua = function() {
  var a = Va.m.ua.call(this);
  this.Xf &&
    (a.newCoordinate = Math.round(this.Xf.x) + "," + Math.round(this.Xf.y));
  return a;
};
d.Z = function(a) {
  Va.m.Z.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.Xf = new A(parseFloat(a[0]), parseFloat(a[1]))));
};
d.dh = function() {
  return Da(this.fn, this.Xf);
};
d.run = function(a) {
  var b = Se($a(this), this.jd);
  if (b) {
    a = a ? this.Xf : this.fn;
    var c = b.Pc.clone();
    b.moveBy(a.x - c.x, a.y - c.y);
  } else console.warn("Can't move non-existent comment: " + this.jd);
};
function Te(a, b, c, e, f) {
  this.id = f && !Se(a, f) ? f : B.h.Ed();
  a.Dh.push(this);
  a.Pj[this.id] &&
    console.warn(
      'Overriding an existing comment on this workspace, with id "' +
        this.id +
        '"'
    );
  a.Pj[this.id] = this;
  this.Pc = new A(0, 0);
  this.xa = c;
  this.aa = e;
  this.o = a;
  this.s = a.s;
  this.Wi = this.ci = !0;
  this.Cc = b;
  this.xq = !0;
  Ue(this);
}
d = Te.prototype;
d.v = function() {
  if (this.o) {
    B.i.isEnabled() && B.i.M(new Wa(this));
    var a = this.o;
    if (!xa(a.Dh, this))
      throw "Comment not present in workspace's list of top-most comments.";
    delete a.Pj[this.id];
    this.o = null;
  }
};
d.Ug = function() {
  return this.xa;
};
d.Fc = function() {
  return this.aa;
};
d.moveBy = function(a, b) {
  var c = new Va(this);
  this.Pc.translate(a, b);
  c.te();
  B.i.M(c);
};
d.Ob = function() {
  return this.ci && !(this.o && this.o.options.readOnly);
};
d.Qn = function(a) {
  this.ci = a;
};
d.Md = function() {
  return this.Wi && !(this.o && this.o.options.readOnly);
};
d.jg = function(a) {
  this.Wi = a;
};
d.qc = function() {
  return this.Cc;
};
d.cd = function(a) {
  this.Cc != a && (B.i.M(new Ua(this, this.Cc, a)), (this.Cc = a));
};
d.nj = function(a) {
  a = Ve(this, a);
  a.setAttribute("x", Math.round(this.Pc.x));
  a.setAttribute("y", Math.round(this.Pc.y));
  a.setAttribute("h", this.xa);
  a.setAttribute("w", this.aa);
  return a;
};
function Ve(a, b) {
  var c = C("comment");
  b || c.setAttribute("id", a.id);
  c.textContent = a.qc();
  return c;
}
function Ue(a) {
  if (B.i.isEnabled()) {
    var b = B.i.$b();
    b || B.i.T(!0);
    try {
      B.i.M(new Ta(a));
    } finally {
      b || B.i.T(!1);
    }
  }
}
function We(a) {
  var b = a.getAttribute("h"),
    c = a.getAttribute("w");
  return {
    id: a.getAttribute("id"),
    kq: b ? parseInt(b, 10) : 100,
    Zr: c ? parseInt(c, 10) : 100,
    x: parseInt(a.getAttribute("x"), 10),
    y: parseInt(a.getAttribute("y"), 10),
    content: a.textContent
  };
}
// Copyright 2012 Google Inc.  Apache License 2.0
function Xe(a) {
  this.id = B.h.Ed();
  Ia[this.id] = this;
  this.options = a || {};
  this.s = !!this.options.s;
  this.Kd = !!this.options.Kd;
  this.wa = this.options.wa;
  this.Ch = [];
  this.Dh = [];
  this.Pj = Object.create(null);
  this.ec = [];
  this.ug = [];
  this.$i = [];
  this.Rl = Object.create(null);
  this.na = new Le(this);
  this.ph = null;
}
d = Xe.prototype;
d.P = !1;
d.Pm = !1;
d.xs = 1024;
d.v = function() {
  this.ec.length = 0;
  this.clear();
  delete Ia[this.id];
};
function Ye(a, b) {
  if (!xa(a.Ch, b))
    throw "Block not present in workspace's list of top-most blocks.";
}
function J(a, b) {
  var c = [].concat(a.Ch);
  if (b && 1 < c.length) {
    var e = Math.sin((3 * Math.PI) / 180);
    a.s && (e *= -1);
    c.sort(function(a, b) {
      a = a.ka();
      b = b.ka();
      return a.y + e * a.x - (b.y + e * b.x);
    });
  }
  return c;
}
function Ze(a, b) {
  var c = [].concat(a.Dh);
  if (b && 1 < c.length) {
    var e = Math.sin((3 * Math.PI) / 180);
    a.s && (e *= -1);
    c.sort(function(a, b) {
      a = a.ka();
      b = b.ka();
      return a.y + e * a.x - (b.y + e * b.x);
    });
  }
  return c;
}
function Me(a) {
  var b = J(a, !1);
  for (a = 0; a < b.length; a++) b.push.apply(b, b[a].je(!1));
  return b;
}
d.clear = function() {
  this.Pm = !0;
  try {
    var a = B.i.$b();
    for (a || B.i.T(!0); this.Ch.length; ) this.Ch[0].v();
    for (; this.Dh.length; ) this.Dh[this.Dh.length - 1].v();
    a || B.i.T(!1);
    this.na.clear();
    this.ph && this.ph.clear();
  } finally {
    this.Pm = !1;
  }
};
d.fg = function(a, b) {
  this.na.fg(a, b);
};
d.Vc = function(a, b, c) {
  return this.na.Vc(a, b, c);
};
d.Cm = function(a) {
  return this.na.Cm(a);
};
d.Hf = function(a) {
  this.na.Hf(a);
};
d.Yj = function(a, b) {
  this.na.Yj(a, b);
};
d.md = function(a, b) {
  return this.na.md(a, b);
};
d.me = function(a) {
  return this.na.me(a);
};
d.ti = function(a) {
  return this.na.ti(a);
};
d.Bm = function() {
  return this.na.Bm();
};
d.ie = function() {
  return this.na.ie();
};
d.Fc = function() {
  return 0;
};
d.Qq = function(a, b) {
  return new $e(this, a, b);
};
function af(a) {
  return isNaN(a.options.Gq) ? Infinity : a.options.Gq - Me(a).length;
}
d.mo = function(a) {
  var b = a ? this.$i : this.ug,
    c = a ? this.ug : this.$i,
    e = b.pop();
  if (e) {
    for (var f = [e]; b.length && e.group && e.group == b[b.length - 1].group; )
      f.push(b.pop());
    for (b = 0; (e = f[b]); b++) c.push(e);
    f = B.i.filter(f, a);
    B.i.Rb = !1;
    try {
      for (b = 0; (e = f[b]); b++) e.run(a);
    } finally {
      B.i.Rb = !0;
    }
  }
};
d.gp = function() {
  this.ug.length = 0;
  this.$i.length = 0;
  B.i.ot();
};
d.lc = function(a) {
  this.ec.push(a);
  return a;
};
d.gf = function(a) {
  xa(this.ec, a);
};
function Xa(a, b) {
  return a.Rl[b] || null;
}
function Se(a, b) {
  return a.Pj[b] || null;
}
var Ia = Object.create(null);
Xe.prototype.clear = Xe.prototype.clear;
Xe.prototype.clearUndo = Xe.prototype.gp;
Xe.prototype.addChangeListener = Xe.prototype.lc;
Xe.prototype.removeChangeListener = Xe.prototype.gf;
function bf(a, b, c, e, f, h) {
  this.j = a;
  this.Cc = b;
  this.Fr = c;
  c = cf;
  this.j.s && (c = -c);
  this.Xs = (c * Math.PI) / 180;
  a.ud.appendChild(this.Zh(b, !(!f || !h)));
  this.gd = e;
  this.gg && df(this);
  (f && h) ||
    ((b = this.Cc.getBBox()), (f = b.width + 2 * ef), (h = b.height + 2 * ef));
  this.kf(f, h);
  df(this);
  ff(this);
  this.gg = !0;
  a.options.readOnly ||
    (B.J(this.Th, "mousedown", this, this.ct),
    this.pb && B.J(this.pb, "mousedown", this, this.Dn));
}
var ef = 6,
  cf = 20,
  gf = null,
  hf = null;
d = bf.prototype;
d.Cn = null;
function jf() {
  gf && (B.Aa(gf), (gf = null));
  hf && (B.Aa(hf), (hf = null));
}
function kf() {
  B.Touch.ee();
  jf();
}
d.gg = !1;
d.gd = null;
d.rh = 0;
d.aj = 0;
d.aa = 0;
d.xa = 0;
d.Jj = !0;
d.Zh = function(a, b) {
  this.Ac = B.h.A("g", {}, null);
  var c = { filter: "url(#" + this.j.options.Xp + ")" };
  -1 != zb.indexOf("JavaFX") && (c = {});
  c = B.h.A("g", c, this.Ac);
  this.Tl = B.h.A("path", {}, c);
  this.Th = B.h.A(
    "rect",
    { class: "blocklyDraggable", x: 0, y: 0, rx: ef, ry: ef },
    c
  );
  b
    ? ((this.pb = B.h.A(
        "g",
        { class: this.j.s ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.Ac
      )),
      (b = 2 * ef),
      B.h.A(
        "polygon",
        { points: "0,x x,x x,0".replace(/x/g, b.toString()) },
        this.pb
      ),
      B.h.A(
        "line",
        {
          class: "blocklyResizeLine",
          x1: b / 3,
          y1: b - 1,
          x2: b - 1,
          y2: b / 3
        },
        this.pb
      ),
      B.h.A(
        "line",
        {
          class: "blocklyResizeLine",
          x1: (2 * b) / 3,
          y1: b - 1,
          x2: b - 1,
          y2: (2 * b) / 3
        },
        this.pb
      ))
    : (this.pb = null);
  this.Ac.appendChild(a);
  return this.Ac;
};
d.N = function() {
  return this.Ac;
};
function lf(a, b) {
  a.Ac.dataset && (a.Ac.dataset.Ib = b);
}
d.ct = function(a) {
  var b = this.j.Gd(a);
  b && (b.gc || (b.gc = this), (b.uc = a));
};
d.yh = function() {};
d.Ob = function() {
  return !1;
};
d.Dn = function(a) {
  mf(this);
  jf();
  B.h.Ye(a) ||
    (this.j.wl(a, new A(this.j.s ? -this.aa : this.aa, this.xa)),
    (gf = B.J(document, "mouseup", this, kf)),
    (hf = B.J(document, "mousemove", this, this.En)),
    B.Bb());
  a.stopPropagation();
};
d.En = function(a) {
  this.Jj = !1;
  a = nf(this.j, a);
  this.kf(this.j.s ? -a.x : a.x, a.y);
  this.j.s && df(this);
};
function mf(a) {
  var b = a.Ac.parentNode;
  return b.lastChild !== a.Ac ? (b.appendChild(a.Ac), !0) : !1;
}
function df(a) {
  var b = a.gd.x;
  b = a.j.s ? b - (a.rh + a.aa) : b + a.rh;
  a.moveTo(b, a.aj + a.gd.y);
}
d.moveTo = function(a, b) {
  this.Ac.setAttribute("transform", "translate(" + a + "," + b + ")");
};
d.Mf = function() {
  return { width: this.aa, height: this.xa };
};
d.kf = function(a, b) {
  var c = 2 * ef;
  a = Math.max(a, c + 45);
  b = Math.max(b, c + 20);
  this.aa = a;
  this.xa = b;
  this.Th.setAttribute("width", a);
  this.Th.setAttribute("height", b);
  this.pb &&
    (this.j.s
      ? this.pb.setAttribute(
          "transform",
          "translate(" + 2 * ef + "," + (b - c) + ") scale(-1 1)"
        )
      : this.pb.setAttribute(
          "transform",
          "translate(" + (a - c) + "," + (b - c) + ")"
        ));
  if (this.gg) {
    if (this.Jj) {
      a = -this.aa / 4;
      b = -this.xa - 25;
      c = this.j.eb();
      c.va /= this.j.scale;
      c.gb /= this.j.scale;
      var e = this.gd.x;
      this.j.s
        ? e - c.gb - a - this.aa < K
          ? (a = e - c.gb - this.aa - K)
          : e - c.gb - a > c.va && (a = e - c.gb - c.va)
        : e + a < c.gb
        ? (a = c.gb - e)
        : c.gb + c.va < e + a + this.aa + 10 + K &&
          (a = c.gb + c.va - e - this.aa - K);
      this.gd.y + b < c.Vd && (b = this.Fr.getBBox().height);
      this.rh = a;
      this.aj = b;
    }
    df(this);
    ff(this);
  }
  this.Cn && this.Cn();
};
function ff(a) {
  var b = [],
    c = a.aa / 2,
    e = a.xa / 2,
    f = -a.rh,
    h = -a.aj;
  if (c == f && e == h) b.push("M " + c + "," + e);
  else {
    h -= e;
    f -= c;
    a.j.s && (f *= -1);
    var k = Math.sqrt(h * h + f * f),
      l = Math.acos(f / k);
    0 > h && (l = 2 * Math.PI - l);
    var m = l + Math.PI / 2;
    m > 2 * Math.PI && (m -= 2 * Math.PI);
    var n = Math.sin(m),
      p = Math.cos(m),
      r = a.Mf();
    m = (r.width + r.height) / 5;
    m = Math.min(m, r.width, r.height) / 4;
    r = 1 - 8 / k;
    f = c + r * f;
    h = e + r * h;
    r = c + m * p;
    var w = e + m * n;
    c -= m * p;
    e -= m * n;
    n = l + a.Xs;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / 4;
    k = (Math.cos(n) * k) / 4;
    b.push("M" + r + "," + w);
    b.push(
      "C" + (r + k) + "," + (w + l) + " " + f + "," + h + " " + f + "," + h
    );
    b.push(
      "C" + f + "," + h + " " + (c + k) + "," + (e + l) + " " + c + "," + e
    );
  }
  b.push("z");
  a.Tl.setAttribute("d", b.join(" "));
}
d.ve = function(a) {
  this.Th.setAttribute("fill", a);
  this.Tl.setAttribute("fill", a);
};
d.v = function() {
  jf();
  F(this.Ac);
  this.Fr = this.Cc = this.j = this.pb = this.Th = this.Tl = this.Ac = null;
};
d.Vk = function(a, b) {
  a ? a.Be(b.x, b.y) : this.moveTo(b.x, b.y);
  this.rh = this.j.s ? this.gd.x - b.x - this.aa : b.x - this.gd.x;
  this.aj = b.y - this.gd.y;
  ff(this);
};
d.ka = function() {
  return new A(this.gd.x + this.rh, this.gd.y + this.aj);
};
d.Br = function(a) {
  this.Jj = a;
};
function of(a, b, c, e, f) {
  this.u = B.h.A("g", { class: "blocklyComment" }, null);
  this.u.Ce = "";
  this.mj = B.h.A("rect", {
    class: "blocklyCommentRect",
    x: 0,
    y: 0,
    rx: 3,
    ry: 3
  });
  this.u.appendChild(this.mj);
  this.gg = !1;
  this.Ud = B.h.Xe() && !!a.cb;
  of.m.constructor.call(this, a, b, c, e, f);
  this.Y();
}
y(of, Te);
d = of.prototype;
d.v = function() {
  if (this.o) {
    if (B.selected == this) {
      this.uf();
      var a = this.o;
      a.ib && a.ib.cancel();
    }
    B.i.isEnabled() && B.i.M(new Wa(this));
    F(this.u);
    this.rg = this.rf = this.Dc = this.Za = this.mj = this.u = null;
    B.i.disable();
    of.m.v.call(this);
    B.i.enable();
  }
};
d.Ue = function() {
  this.o.options.readOnly ||
    this.rm ||
    (B.J(this.rf, "mousedown", this, this.jr),
    B.J(this.rg, "mousedown", this, this.jr));
  this.rm = !0;
  pf(this);
  this.N().parentNode || this.o.ud.appendChild(this.N());
};
d.jr = function(a) {
  var b = this.o.Gd(a);
  b && (b.gc || (b.gc = this), (b.uc = a));
};
d.yh = function(a) {
  if (!this.o.options.readOnly) {
    var b = [];
    this.Ob() && this.Md() && (b.push(B.ca.st(this)), b.push(B.ca.rt(this)));
    B.ca.show(a, b, this.s);
  }
};
d.select = function() {
  if (B.selected != this) {
    var a = null;
    if (B.selected) {
      a = B.selected.id;
      B.i.disable();
      try {
        B.selected.uf();
      } finally {
        B.i.enable();
      }
    }
    a = new Sa(null, "selected", a, this.id);
    a.hc = this.o.id;
    B.i.M(a);
    B.selected = this;
    this.Hg();
  }
};
d.uf = function() {
  if (B.selected == this) {
    var a = new Sa(null, "selected", this.id, null);
    a.hc = this.o.id;
    B.i.M(a);
    B.selected = null;
    this.eg();
    qf(this);
  }
};
d.Hg = function() {
  B.h.Ua(this.u, "blocklySelected");
  this.Sn();
};
d.eg = function() {
  B.h.wb(this.u, "blocklySelected");
  qf(this);
};
d.ka = function() {
  var a = 0,
    b = 0,
    c = this.Ud ? this.o.cb.$b() : null,
    e = this.N();
  if (e) {
    do {
      var f = B.h.ac(e);
      a += f.x;
      b += f.y;
      this.Ud &&
        this.o.cb.Bd.firstChild == e &&
        ((f = this.o.cb.wk()), (a += f.x), (b += f.y));
      e = e.parentNode;
    } while (e && e != this.o.ud && e != c);
  }
  return (this.Pc = new A(a, b));
};
d.moveBy = function(a, b) {
  var c = new Va(this),
    e = this.ka();
  this.translate(e.x + a, e.y + b);
  this.Pc = new A(e.x + a, e.y + b);
  c.te();
  B.i.M(c);
  rf(this.o);
};
d.translate = function(a, b) {
  this.Pc = new A(a, b);
  this.N().setAttribute("transform", "translate(" + a + "," + b + ")");
};
d.Wk = function() {
  if (this.Ud) {
    var a = this.ka();
    B.h.removeAttribute(this.N(), "transform");
    this.o.cb.Be(a.x, a.y);
    sf(this.o.cb, this.N());
  }
};
d.Mq = function(a) {
  this.Ud && (this.translate(a.x, a.y), this.o.cb.Vh(this.o.Da));
};
d.Vk = function(a, b) {
  a
    ? a.Be(b.x, b.y)
    : ((this.u.Ce = "translate(" + b.x + "," + b.y + ")"),
      this.u.setAttribute("transform", this.u.Ce + this.u.ng));
};
d.moveTo = function(a, b) {
  this.translate(a, b);
};
d.wm = function() {
  var a = this.ka(),
    b = this.tb();
  if (this.s) {
    var c = new A(a.x - b.width, a.y);
    a = new A(a.x, a.y + b.height);
  } else (c = new A(a.x, a.y)), (a = new A(a.x + b.width, a.y + b.height));
  return { Mc: c, hd: a };
};
function pf(a) {
  a.Md() ? B.h.Ua(a.u, "blocklyDraggable") : B.h.wb(a.u, "blocklyDraggable");
}
d.jg = function(a) {
  of.m.jg.call(this, a);
  pf(this);
};
d.mf = function(a) {
  a
    ? ((a = this.N()),
      (a.Ce = ""),
      (a.ng = ""),
      B.h.Ua(this.u, "blocklyDragging"))
    : B.h.wb(this.u, "blocklyDragging");
};
d.N = function() {
  return this.u;
};
d.qc = function() {
  return this.Za ? this.Za.value : this.Cc;
};
d.cd = function(a) {
  of.m.cd.call(this, a);
  this.Za && (this.Za.value = a);
};
d.ej = function(a) {
  a
    ? B.h.Ua(this.u, "blocklyDraggingDelete")
    : B.h.wb(this.u, "blocklyDraggingDelete");
};
d.Br = function() {};
function tf(a, b, c) {
  B.i.disable();
  try {
    var e = We(a),
      f = new of(b, e.content, e.kq, e.Zr, e.id);
    b.P && (f.Ue(), f.Y(!1));
    if (!isNaN(e.x) && !isNaN(e.y))
      if (b.s) {
        var h = c || b.Fc();
        f.moveBy(h - e.x, e.y);
      } else f.moveBy(e.x, e.y);
  } finally {
    B.i.enable();
  }
  Ue(f);
  return f;
}
d.nj = function(a) {
  var b;
  this.o.s && (b = this.o.Fc());
  a = Ve(this, a);
  var c = this.ka();
  a.setAttribute("x", Math.round(this.o.s ? b - c.x : c.x));
  a.setAttribute("y", Math.round(c.y));
  a.setAttribute("h", this.Ug());
  a.setAttribute("w", this.Fc());
  return a;
};
function uf(a, b) {
  this.jb = a;
  this.j = b;
  this.Gf = null;
  this.Cl = !1;
  this.Sd = this.jb.ka();
  this.If = B.h.Xe() && b.cb ? b.cb : null;
}
uf.prototype.v = function() {
  this.If = this.j = this.jb = null;
};
function vf(a, b, c) {
  c = a.nh(c);
  a.jb.Vk(a.If, Ha(a.Sd, c));
  a.jb.Ob() &&
    ((a.Gf = Md(a.j, b)),
    (a.Cl = a.Gf != B.to),
    (b = a.j.wc),
    a.Cl
      ? (a.jb.ej(!0), a.Gf == B.Fl && b && Nd(b, !0))
      : (a.jb.ej(!1), b && Nd(b, !1)));
}
function wf(a, b, c) {
  vf(a, b, c);
  b = a.nh(c);
  b = Ha(a.Sd, b);
  a.jb.moveTo(b.x, b.y);
  b = a.j.wc;
  a.Cl ? (b && Pd(b.close, 100, b), a.ji(), a.jb.v(!1, !0)) : b && b.close();
  a.Cl || (a.If && a.If.Vh(a.j.ud), a.jb.mf && a.jb.mf(!1), a.ji());
  a.j.xb(!0);
  a.j.V &&
    B.h.wb(a.j.V.jc, a.jb.Ob() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  B.i.T(!1);
}
uf.prototype.ji = function() {
  if (this.jb.xq) {
    var a = new Va(this.jb);
    a.fn = this.Sd;
    a.te();
    B.i.M(a);
  }
};
uf.prototype.nh = function(a) {
  a = new A(a.x / this.j.scale, a.y / this.j.scale);
  this.j.Mi && (a = a.scale(1 / this.j.options.Gc.scale));
  return a;
};
uf.prototype.Wk = function() {
  this.jb.moveTo(0, 0);
  this.If.Be(this.Sd.x, this.Sd.y);
  sf(this.If, this.jb.N());
};
B.bA = {};
B.wo = 5;
B.ns = 10;
B.zc = 20;
B.yj = 250;
B.hs = 30;
B.ws = 750;
B.Hs = 100;
B.ls = !0;
B.ss = 0.45;
B.ts = 0.65;
B.Ub = { width: 96, height: 124, url: "sprites.png" };
B.kc = "http://www.w3.org/2000/svg";
B.Fe = "http://www.w3.org/1999/xhtml";
B.ab = 1;
B.Fg = 2;
B.Ka = 3;
B.Ge = 4;
B.Wd = 5;
B.Ih = -1;
B.vj = 0;
B.wj = 1;
B.ix = 0;
B.jx = 1;
B.gx = 1;
B.hx = 2;
B.Eg = [];
B.Eg[B.ab] = B.Fg;
B.Eg[B.Fg] = B.ab;
B.Eg[B.Ka] = B.Ge;
B.Eg[B.Ge] = B.Ka;
B.Ie = 0;
B.Bf = 1;
B.He = 2;
B.wd = 3;
B.to = null;
B.Fl = 1;
B.uo = 2;
B.Ko = "VARIABLE";
B.Ks = "VARIABLE_DYNAMIC";
B.Ho = "PROCEDURE";
B.Io = "RENAME_VARIABLE_ID";
B.vo = "DELETE_VARIABLE_ID";
function Sa(a, b, c, e) {
  Sa.m.constructor.call(this);
  this.Ib = a ? a.id : null;
  this.hc = a ? a.o.id : null;
  this.element = b;
  this.oldValue = c;
  this.newValue = e;
  this.Rb = !1;
}
y(Sa, Za);
Sa.prototype.type = B.i.Hj;
Sa.prototype.ua = function() {
  var a = Sa.m.ua.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.Ib && (a.blockId = this.Ib);
  return a;
};
Sa.prototype.Z = function(a) {
  Sa.m.Z.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.Ib = a.blockId;
};
function xf(a) {
  this.j = a;
  this.Nv = a.eb();
  this.Pv = new A(a.scrollX, a.scrollY);
}
xf.prototype.v = function() {
  this.j = null;
};
xf.prototype.wl = function() {
  B.selected && B.selected.uf();
  yf(this.j);
};
function zf(a, b) {
  var c = a.Nv,
    e = Ha(a.Pv, b);
  b = Math.min(e.x, -c.Bc);
  e = Math.min(e.y, -c.nc);
  b = Math.max(b, c.va - c.Bc - c.oc);
  e = Math.max(e, c.Sa - c.nc - c.Wb);
  b = -b - c.Bc;
  e = -e - c.nc;
  a.Wr(b, e);
}
xf.prototype.Wr = function(a, b) {
  this.j.Xa.set(a, b);
};
function Af(a) {
  Af.m.constructor.call(this, a.ui());
  this.Db = a.Db;
  this.nd = a.nd;
}
y(Af, xf);
Af.prototype.Wr = function(a, b) {
  this.nd ? this.Db.set(a) : this.Db.set(b);
};
B.B = {};
B.B.visible = !1;
B.B.Jg = !1;
B.B.vs = 50;
B.B.Lq = 0;
B.B.ij = 0;
B.B.Um = 0;
B.B.Vm = 0;
B.B.K = null;
B.B.cl = null;
B.B.zo = 0;
B.B.Ao = 10;
B.B.Ds = 10;
B.B.rs = 750;
B.B.Gl = 5;
B.B.ba = null;
B.B.O = function() {
  B.B.ba ||
    ((B.B.ba = C("DIV", "blocklyTooltipDiv")),
    document.body.appendChild(B.B.ba));
};
B.B.Df = function(a) {
  B.rb(a, "mouseover", null, B.B.wv);
  B.rb(a, "mouseout", null, B.B.vv);
  a.addEventListener("mousemove", B.B.uv, !1);
};
B.B.wv = function(a) {
  if (!B.B.Jg) {
    for (a = a.target; !q(a.Lc) && !x(a.Lc); ) a = a.Lc;
    B.B.K != a && (B.B.Ca(), (B.B.cl = null), (B.B.K = a));
    clearTimeout(B.B.Lq);
  }
};
B.B.vv = function() {
  B.B.Jg ||
    ((B.B.Lq = setTimeout(function() {
      B.B.K = null;
      B.B.cl = null;
      B.B.Ca();
    }, 1)),
    clearTimeout(B.B.ij));
};
B.B.uv = function(a) {
  if (B.B.K && B.B.K.Lc && !B.H.U() && !B.B.Jg)
    if (B.B.visible) {
      var b = B.B.Um - a.pageX;
      a = B.B.Vm - a.pageY;
      Math.sqrt(b * b + a * a) > B.B.Ds && B.B.Ca();
    } else
      B.B.cl != B.B.K &&
        (clearTimeout(B.B.ij),
        (B.B.Um = a.pageX),
        (B.B.Vm = a.pageY),
        (B.B.ij = setTimeout(B.B.Jv, B.B.rs)));
};
B.B.Ca = function() {
  B.B.visible &&
    ((B.B.visible = !1), B.B.ba && (B.B.ba.style.display = "none"));
  B.B.ij && clearTimeout(B.B.ij);
};
B.B.block = function() {
  B.B.Ca();
  B.B.Jg = !0;
};
B.B.Yv = function() {
  B.B.Jg = !1;
};
B.B.Jv = function() {
  if (!B.B.Jg && ((B.B.cl = B.B.K), B.B.ba)) {
    Xc(B.B.ba);
    for (var a = B.B.K.Lc; x(a); ) a = a();
    a = B.h.ds(a, B.B.vs);
    a = a.split("\n");
    for (var b = 0; b < a.length; b++) {
      var c = document.createElement("div");
      c.appendChild(document.createTextNode(a[b]));
      B.B.ba.appendChild(c);
    }
    a = B.B.K.s;
    b = Qc();
    B.B.ba.style.direction = a ? "rtl" : "ltr";
    B.B.ba.style.display = "block";
    B.B.visible = !0;
    c = B.B.Um;
    c = a ? c - (B.B.zo + B.B.ba.offsetWidth) : c + B.B.zo;
    var e = B.B.Vm + B.B.Ao;
    e + B.B.ba.offsetHeight > b.height + window.scrollY &&
      (e -= B.B.ba.offsetHeight + 2 * B.B.Ao);
    a
      ? (c = Math.max(B.B.Gl - window.scrollX, c))
      : c + B.B.ba.offsetWidth > b.width + window.scrollX - 2 * B.B.Gl &&
        (c = b.width - B.B.ba.offsetWidth - 2 * B.B.Gl);
    B.B.ba.style.top = e + "px";
    B.B.ba.style.left = c + "px";
  }
};
function Bf(a, b) {
  this.Ra = this.Gb = this.og = this.pg = this.gc = this.Xb = this.Kq = null;
  this.yt = b;
  this.Ki = this.Uf = this.Li = this.Pf = !1;
  this.uc = a;
  this.G = this.xf = this.Yd = this.Zd = this.bl = this.al = null;
  this.Hk = this.qq = !1;
  this.rq = !B.ls;
}
d = Bf.prototype;
d.v = function() {
  B.Touch.ee();
  B.B.Yv();
  this.yt.ib = null;
  this.al && B.Aa(this.al);
  this.bl && B.Aa(this.bl);
  this.G = this.Ra = this.Gb = this.og = this.pg = null;
  this.Yd && (this.Yd.v(), (this.Yd = null));
  this.xf && (this.xf.v(), (this.xf = null));
  this.Zd && (this.Zd.v(), (this.Zd = null));
};
function Cf(a, b) {
  a.Xb = Ga(new A(b.clientX, b.clientY), a.Kq);
  if (a.Pf) var c = !1;
  else
    (c = a.Xb),
      (a.Pf = Math.sqrt(c.x * c.x + c.y * c.y) > (a.G ? B.ns : B.wo)),
      (c = a.Pf);
  if (c) {
    if (a.gc) {
      a.Ki = !0;
      a.Zd = new uf(a.gc, a.Ra);
      c = a.Zd;
      B.i.$b() || B.i.T(!0);
      c.j.xb(!1);
      c.jb.Br(!1);
      c.If && c.Wk();
      c.jb.mf && c.jb.mf(!0);
      var e = c.j.V;
      e &&
        B.h.Ua(e.jc, c.jb.Ob() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
      vf(a.Zd, a.uc, a.Xb);
      c = !0;
    } else c = !1;
    if (!c) {
      if (a.Gb)
        if (
          (a.G
            ? (a.Gb.disabled
                ? (c = !1)
                : !Df(a.G) || a.G.yq(a.Xb)
                ? ((a.Ra = a.G.pa),
                  Ef(a.Ra),
                  B.i.$b() || B.i.T(!0),
                  (a.og = null),
                  (a.Gb = Ff(a.G, a.Gb)),
                  a.Gb.select(),
                  (c = !0))
                : (c = !1),
              (a.Uf = c))
            : a.Gb.Md() && (a.Uf = !0),
          a.Uf)
        ) {
          a.Yd = new Id(a.Gb, a.Ra);
          c = a.Yd;
          e = a.Xb;
          var f = a.rq;
          B.i.$b() || B.i.T(!0);
          c.j.xb(!1);
          B.ya.nm();
          if (c.Qa.getParent() || (f && c.Qa.R && D(c.Qa.R)))
            eb(c.Qa, f),
              (e = c.nh(e)),
              (e = Ha(c.Sd, e)),
              c.Qa.translate(e.x, e.y),
              B.ya.Pt(c.Qa);
          c.Qa.mf(!0);
          c.Qa.Wk();
          (e = c.j.V) &&
            B.h.Ua(
              e.jc,
              c.Qa.Ob() ? "blocklyToolboxDelete" : "blocklyToolboxGrab"
            );
          Kd(a.Yd, a.uc, a.Xb);
          c = !0;
        } else c = !1;
      else c = !1;
      !c &&
        (a.G ? Df(a.G) : a.Ra && a.Ra.Xa) &&
        ((a.xf = a.G ? new Af(a.G) : new xf(a.Ra)), (a.Li = !0), a.xf.wl());
    }
    B.af();
  }
  a.uc = b;
}
d.ei = function(a) {
  B.h.Kk(a)
    ? this.cancel()
    : ((this.qq = !0),
      B.ya.nm(),
      Ef(this.Ra),
      this.Ra.Mi && this.Ra.resize(),
      Gf(this.Ra),
      (this.uc = a),
      B.Bb(!!this.G),
      B.B.block(),
      this.Gb && this.Gb.select(),
      B.h.Ye(a)
        ? Je(this, a)
        : (("touchstart" == a.type.toLowerCase() ||
            ("pointerdown" == a.type.toLowerCase() &&
              "mouse" != a.pointerType)) &&
            B.Xu(a, this),
          (this.Kq = new A(a.clientX, a.clientY)),
          (this.rq = a.altKey || a.ctrlKey || a.metaKey),
          this.Df(a)));
};
d.Df = function(a) {
  this.al = B.J(document, "mousemove", null, this.Ai.bind(this));
  this.bl = B.J(document, "mouseup", null, this.Ak.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
d.Ai = function(a) {
  Cf(this, a);
  this.Li
    ? zf(this.xf, this.Xb)
    : this.Uf
    ? Kd(this.Yd, this.uc, this.Xb)
    : this.Ki && vf(this.Zd, this.uc, this.Xb);
  a.preventDefault();
  a.stopPropagation();
};
d.Ak = function(a) {
  Cf(this, a);
  B.af();
  if (this.Hk) console.log("Trying to end a gesture recursively.");
  else {
    this.Hk = !0;
    if (this.Ki) wf(this.Zd, a, this.Xb);
    else if (this.Uf) Od(this.Yd, a, this.Xb);
    else if (this.Li) {
      var b = this.xf;
      zf(b, this.Xb);
      Hf(b.j);
    } else
      this.gc && !this.Pf
        ? (this.gc.Sn && this.gc.Sn(), this.gc.select && this.gc.select())
        : If(this)
        ? (this.pg.pf(), Jf(this))
        : !this.og || this.Pf || If(this)
        ? this.og ||
          this.gc ||
          this.pg ||
          this.Pf ||
          (B.selected && B.selected.uf())
        : (this.G && this.G.Ig
            ? this.Gb.disabled ||
              (B.i.$b() || B.i.T(!0), Rd(Ff(this.G, this.Gb)))
            : B.i.M(new Sa(this.og, "click", void 0, void 0)),
          Jf(this),
          B.i.T(!1));
    a.preventDefault();
    a.stopPropagation();
    this.v();
  }
};
d.cancel = function() {
  if (!this.Hk) {
    B.af();
    if (this.Ki) wf(this.Zd, this.uc, this.Xb);
    else if (this.Uf) Od(this.Yd, this.uc, this.Xb);
    else if (this.Li) {
      var a = this.xf;
      zf(a, this.Xb);
      Hf(a.j);
    }
    this.v();
  }
};
function Je(a, b) {
  a.Gb
    ? (Jf(a), B.Bb(a.G), a.Gb.yh(b))
    : a.gc
    ? a.gc.yh(b)
    : a.Ra && !a.G && (B.Bb(), a.Ra.yh(b));
  b.preventDefault();
  b.stopPropagation();
  a.v();
}
function Jf(a) {
  a.Gb && !a.G && Qd(a.Gb);
}
function Kf(a, b) {
  a.og || a.gc || ((a.og = b), b.rc && b != td(b) ? Lf(a, td(b)) : Lf(a, b));
}
function Lf(a, b) {
  b.Wa ? Lf(a, b.getParent()) : (a.Gb = b);
}
function If(a) {
  if (a.pg) {
    var b = a.pg;
    b = b.zf && !!b.w && Mf(b.w);
  } else b = !1;
  return b && !a.Pf && (!a.G || !a.G.Ig);
}
d.lb = function() {
  return this.Li || this.Uf || this.Ki;
};
function Nf(a, b, c, e) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = e;
}
d = Nf.prototype;
d.Fc = function() {
  return this.right - this.left;
};
d.Ug = function() {
  return this.bottom - this.top;
};
d.clone = function() {
  return new Nf(this.top, this.right, this.bottom, this.left);
};
d.contains = function(a) {
  return this && a
    ? a instanceof Nf
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
  a instanceof A
    ? ((this.left += a.x),
      (this.right += a.x),
      (this.top += a.y),
      (this.bottom += a.y))
    : ((this.left += a),
      (this.right += a),
      t(b) && ((this.top += b), (this.bottom += b)));
  return this;
};
d.scale = function(a, b) {
  b = t(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= b;
  this.bottom *= b;
  return this;
};
function Of(a, b, c, e) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = e;
}
d = Of.prototype;
d.clone = function() {
  return new Of(this.left, this.top, this.width, this.height);
};
d.contains = function(a) {
  return a instanceof A
    ? a.x >= this.left &&
        a.x <= this.left + this.width &&
        a.y >= this.top &&
        a.y <= this.top + this.height
    : this.left <= a.left &&
        this.left + this.width >= a.left + a.width &&
        this.top <= a.top &&
        this.top + this.height >= a.top + a.height;
};
d.le = function() {
  return new Jc(this.width, this.height);
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
  a instanceof A
    ? ((this.left += a.x), (this.top += a.y))
    : ((this.left += a), t(b) && (this.top += b));
  return this;
};
d.scale = function(a, b) {
  b = t(b) ? b : a;
  this.left *= a;
  this.width *= a;
  this.top *= b;
  this.height *= b;
  return this;
};
var Pf = {};
function Qf(a, b) {
  var c = Mc(a);
  return c.defaultView &&
    c.defaultView.getComputedStyle &&
    (a = c.defaultView.getComputedStyle(a, null))
    ? a[b] || a.getPropertyValue(b) || ""
    : "";
}
function Rf(a, b) {
  return (
    Qf(a, b) ||
    (a.currentStyle ? a.currentStyle[b] : null) ||
    (a.style && a.style[b])
  );
}
function Sf() {
  var a = document,
    b = a.body;
  a = a.documentElement;
  return new A(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop);
}
function Tf(a) {
  try {
    var b = a.getBoundingClientRect();
  } catch (c) {
    return { left: 0, top: 0, right: 0, bottom: 0 };
  }
  G &&
    a.ownerDocument.body &&
    ((a = a.ownerDocument),
    (b.left -= a.documentElement.clientLeft + a.body.clientLeft),
    (b.top -= a.documentElement.clientTop + a.body.clientTop));
  return b;
}
function Uf(a) {
  var b = Mc(a),
    c = new A(0, 0);
  var e = b ? Mc(b) : document;
  e =
    !G || 9 <= Number(Xb) || "CSS1Compat" == Kc(e).kd.compatMode
      ? e.documentElement
      : e.body;
  if (a == e) return c;
  a = Tf(a);
  b = Sc(Kc(b).kd);
  c.x = a.left + b.x;
  c.y = a.top + b.y;
  return c;
}
function Vf(a) {
  "number" == typeof a && (a += "px");
  return a;
}
function Wf(a) {
  var b = Xf;
  if ("none" != Rf(a, "display")) return b(a);
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
function Xf(a) {
  var b = a.offsetWidth,
    c = a.offsetHeight,
    e = I && !b && !c;
  return (aa(b) && !e) || !a.getBoundingClientRect
    ? new Jc(b, c)
    : ((a = Tf(a)), new Jc(a.right - a.left, a.bottom - a.top));
}
function Yf(a, b) {
  a.style.display = b ? "" : "none";
}
var Zf = H ? "MozUserSelect" : I || Lb ? "WebkitUserSelect" : null;
function $f(a, b, c) {
  c = c ? null : a.getElementsByTagName("*");
  if (Zf) {
    if (((b = b ? "none" : ""), a.style && (a.style[Zf] = b), c)) {
      a = 0;
      for (var e; (e = c[a]); a++) e.style && (e.style[Zf] = b);
    }
  } else if (G || Kb)
    if (((b = b ? "on" : ""), a.setAttribute("unselectable", b), c))
      for (a = 0; (e = c[a]); a++) e.setAttribute("unselectable", b);
}
var ag = { thin: 2, medium: 4, thick: 6 };
function bg(a, b) {
  if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  if (c in ag) a = ag[c];
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
function cg(a, b) {
  this.oa = new Jc(0, 25);
  this.setValue(a);
  this.Bl = b;
}
var dg = {};
function eg(a, b) {
  if (!q(a) || ib(a)) throw Error('Invalid field type "' + a + '"');
  if (!ha(b) || !x(b.Z))
    throw Error('Field "' + b + '" must have a fromJson function');
  dg[a] = b;
}
var fg = null,
  gg = 0;
d = cg.prototype;
d.name = void 0;
d.Hq = 50;
d.ra = "";
d.w = null;
d.Ea = !0;
d.Bl = null;
d.zf = !0;
d.Xn = function(a) {
  this.w = a;
};
d.$ = function() {
  this.Ja ||
    ((this.Ja = B.h.A("g", {}, null)),
    this.Ea || (this.Ja.style.display = "none"),
    (this.Tc = B.h.A(
      "rect",
      { rx: 4, ry: 4, x: -5, y: 0, height: 16 },
      this.Ja
    )),
    (this.ta = B.h.A(
      "text",
      { class: "blocklyText", y: this.oa.height - 12.5 },
      this.Ja
    )),
    this.Ee(),
    this.w.N().appendChild(this.Ja),
    (this.Uk = B.J(this.Ja, "mousedown", this, this.se)),
    this.Qd());
};
d.Sf = function() {};
d.v = function() {
  this.Uk && (B.Aa(this.Uk), (this.Uk = null));
  this.w = null;
  F(this.Ja);
  this.Bl = this.Tc = this.ta = this.Ja = null;
};
d.Ee = function() {
  var a = this.Ja;
  this.zf &&
    a &&
    (Mf(this.w)
      ? (B.h.Ua(a, "blocklyEditableText"),
        B.h.wb(a, "blocklyNonEditableText"),
        (this.Ja.style.cursor = this.Bj))
      : (B.h.Ua(a, "blocklyNonEditableText"),
        B.h.wb(a, "blocklyEditableText"),
        (this.Ja.style.cursor = "")));
};
d.U = function() {
  return this.Ea;
};
d.la = function(a) {
  if (this.Ea != a) {
    this.Ea = a;
    var b = this.N();
    b && ((b.style.display = a ? "block" : "none"), this.Qd());
  }
};
d.Wl = function(a) {
  return a;
};
function cb(a, b) {
  var c = a.Wl(b);
  if (null === c) return null;
  void 0 !== c && (b = c);
  if ((c = a.Bl)) {
    a = c.call(a, b);
    if (null === a) return null;
    void 0 !== a && (b = a);
  }
  return b;
}
d.N = function() {
  return this.Ja;
};
d.Qd = function() {
  this.Ea ? ((this.ta.textContent = hg(this)), this.sj()) : (this.oa.width = 0);
};
d.sj = function() {
  var a = ig(this.ta);
  this.Tc && this.Tc.setAttribute("width", a + 10);
  this.oa.width = a;
};
function ig(a) {
  var b = a.textContent + "\n" + a.className.baseVal,
    c;
  if (fg && (c = fg[b])) return c;
  try {
    c = G || Lb ? a.getBBox().width : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  fg && (fg[b] = c);
  return c;
}
function jg() {
  gg++;
  fg || (fg = {});
}
function kg() {
  gg--;
  gg || (fg = null);
}
d.le = function() {
  this.oa.width || this.Qd();
  return this.oa;
};
function lg(a) {
  var b = a.Tc.getBBox(),
    c = b.height * a.w.o.scale;
  b = b.width * a.w.o.scale;
  a = Uf(a.Tc);
  return { top: a.y, bottom: a.y + c, left: a.x, right: a.x + b };
}
function hg(a) {
  var b = a.ra;
  if (!b) return "\u00a0";
  b.length > a.Hq && (b = b.substring(0, a.Hq - 2) + "\u2026");
  b = b.replace(/\s/g, "\u00a0");
  a.w.s && (b += "\u200f");
  return b;
}
d.vb = function() {
  return this.ra;
};
d.yb = function(a) {
  null !== a && ((a = String(a)), a !== this.ra && ((this.ra = a), this.li()));
};
d.li = function() {
  this.oa.width = 0;
  this.w && this.w.P && (this.w.Y(), this.w.Vb());
};
d.getValue = function() {
  return this.vb();
};
d.setValue = function(a) {
  if (null !== a) {
    var b = this.getValue();
    b != a &&
      (this.w &&
        B.i.isEnabled() &&
        B.i.M(new B.i.ic(this.w, "field", this.name, b, a)),
      this.yb(a));
  }
};
d.se = function(a) {
  this.w && this.w.o && (a = this.w.o.Gd(a)) && !a.pg && (a.pg = this);
};
d.dd = function() {};
d.qh = function() {
  return !1;
};
B.h = {};
B.h.removeAttribute = function(a, b) {
  G && Wb("10.0") ? a.setAttribute(b, null) : a.removeAttribute(b);
};
B.h.Ua = function(a, b) {
  var c = a.getAttribute("class") || "";
  if (-1 != (" " + c + " ").indexOf(" " + b + " ")) return !1;
  c && (c += " ");
  a.setAttribute("class", c + b);
  return !0;
};
B.h.wb = function(a, b) {
  var c = a.getAttribute("class");
  if (-1 == (" " + c + " ").indexOf(" " + b + " ")) return !1;
  c = c.split(/\s+/);
  for (var e = 0; e < c.length; e++)
    (c[e] && c[e] != b) || (c.splice(e, 1), e--);
  c.length
    ? a.setAttribute("class", c.join(" "))
    : B.h.removeAttribute(a, "class");
  return !0;
};
B.h.nq = function(a, b) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + b + " ");
};
B.h.dv = function(a) {
  a.preventDefault();
  a.stopPropagation();
};
B.h.Kk = function(a) {
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
B.h.ac = function(a) {
  var b = new A(0, 0),
    c = a.getAttribute("x");
  c && (b.x = parseInt(c, 10));
  if ((c = a.getAttribute("y"))) b.y = parseInt(c, 10);
  if ((c = (c = a.getAttribute("transform")) && c.match(B.h.ac.Ns)))
    (b.x += parseFloat(c[1])), c[3] && (b.y += parseFloat(c[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    ((c = a.match(B.h.ac.Ls)) || (c = a.match(B.h.ac.Ms)),
    c && ((b.x += parseFloat(c[1])), c[3] && (b.y += parseFloat(c[3]))));
  return b;
};
B.h.pk = function(a) {
  for (var b = 0, c = 0; a; ) {
    var e = B.h.ac(a);
    b += e.x;
    c += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
    )
      break;
    a = a.parentNode;
  }
  return new A(b, c);
};
B.h.ac.Ns = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;
B.h.ac.Ms = /transform:\s*translate3d\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
B.h.ac.Ls = /transform:\s*translate\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
B.h.A = function(a, b, c) {
  a = document.createElementNS(B.kc, a);
  for (var e in b) a.setAttribute(e, b[e]);
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
  c && c.appendChild(a);
  return a;
};
B.h.Ye = function(a) {
  return a.ctrlKey && Nb ? !0 : 2 == a.button;
};
B.h.Vi = function(a, b, c) {
  var e = b.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  c || (c = b.getScreenCTM().inverse());
  return e.matrixTransform(c);
};
B.h.Yn = function(a) {
  return a.length
    ? a.reduce(function(a, c) {
        return a.length < c.length ? a : c;
      }).length
    : 0;
};
B.h.lp = function(a, b) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var c = 0;
  b = b || B.h.Yn(a);
  for (var e = 0; e < b; e++) {
    for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return c;
    " " == f && (c = e + 1);
  }
  for (h = 1; h < a.length; h++) if ((f = a[h][e]) && " " != f) return c;
  return b;
};
B.h.mp = function(a, b) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var c = 0;
  b = b || B.h.Yn(a);
  for (var e = 0; e < b; e++) {
    for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
      if (f != a[h].substr(-e - 1, 1)) return c;
    " " == f && (c = e + 1);
  }
  for (h = 1; h < a.length; h++)
    if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c;
  return b;
};
B.h.Tv = function(a) {
  return B.h.lo(a, !0);
};
B.h.Sb = function(a) {
  if (!q(a)) return a;
  a = B.h.lo(a, !1);
  return a.length ? a[0] : "";
};
B.h.ap = function(a) {
  for (var b = B.g, c = /%{(BKY_[A-Z][A-Z0-9_]*)}/gi, e = c.exec(a); e; ) {
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
B.h.lo = function(a, b) {
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
                (l = hb(l, "BKY_") ? l.substring(4) : null) && l in B.g
                  ? ((f = B.g[l]),
                    q(f)
                      ? Array.prototype.push.apply(c, B.h.lo(f, b))
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
B.h.Ed = function() {
  for (var a = B.h.Ed.Hr.length, b = [], c = 0; 20 > c; c++)
    b[c] = B.h.Ed.Hr.charAt(Math.random() * a);
  return b.join("");
};
B.h.Ed.Hr =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
B.h.ds = function(a, b) {
  a = a.split("\n");
  for (var c = 0; c < a.length; c++) a[c] = B.h.dw(a[c], b);
  return a.join("\n");
};
B.h.dw = function(a, b) {
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
    a = B.h.fs(c, a, b);
    e = B.h.oo(c, a, b);
    a = B.h.ew(c, a);
    f++;
  } while (e > h);
  return k;
};
B.h.oo = function(a, b, c) {
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
B.h.fs = function(a, b, c) {
  for (var e = B.h.oo(a, b, c), f, h = 0; h < b.length - 1; h++)
    if (b[h] != b[h + 1]) {
      var k = [].concat(b);
      k[h] = !k[h];
      k[h + 1] = !k[h + 1];
      var l = B.h.oo(a, k, c);
      l > e && ((e = l), (f = k));
    }
  return f ? B.h.fs(a, f, c) : b;
};
B.h.ew = function(a, b) {
  for (var c = [], e = 0; e < a.length; e++)
    c.push(a[e]), void 0 !== b[e] && c.push(b[e] ? "\n" : " ");
  return c.join("");
};
B.h.Xe = function() {
  if (void 0 !== B.h.Xe.Ul) return B.h.Xe.Ul;
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
  B.h.Xe.Ul = "none" !== b;
  return B.h.Xe.Ul;
};
B.h.Ii = function(a, b) {
  var c = b.nextSibling;
  b = b.parentNode;
  if (!b) throw "Reference node has no parent.";
  c ? b.insertBefore(a, c) : b.appendChild(a);
};
B.h.yr = function(a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" === document.readyState) a();
  else
    var b = setInterval(function() {
      "complete" === document.readyState && (clearInterval(b), a());
    }, 10);
};
B.h.dj = function(a, b) {
  a.style.transform = b;
  a.style["-webkit-transform"] = b;
};
B.h.Dm = function() {
  var a = Qc(),
    b = Sf();
  return { right: a.width + b.x, bottom: a.height + b.y, top: b.y, left: b.x };
};
B.h.Eh = {};
B.h.Eh.le = function(a) {
  a = a.F();
  var b = Wf(a);
  b.height = a.scrollHeight;
  return b;
};
B.h.Eh.Ro = function(a, b, c) {
  b.left += c.width;
  b.right += c.width;
  a.left += c.width;
  a.right += c.width;
};
function mg(a) {
  Zd.call(this);
  this.Zg = a;
  this.gh = {};
}
y(mg, Zd);
var ng = [];
d = mg.prototype;
d.ha = function(a, b, c, e) {
  u(b) || (b && (ng[0] = b.toString()), (b = ng));
  for (var f = 0; f < b.length; f++) {
    var h = we(a, b[f], c || this.handleEvent, e || !1, this.Zg || this);
    if (!h) break;
    this.gh[h.key] = h;
  }
  return this;
};
d.Fq = function(a, b, c, e) {
  return og(this, a, b, c, e);
};
function og(a, b, c, e, f, h) {
  if (u(c)) for (var k = 0; k < c.length; k++) og(a, b, c[k], e, f, h);
  else {
    b = xe(b, c, e || a.handleEvent, f, h || a.Zg || a);
    if (!b) return a;
    a.gh[b.key] = b;
  }
  return a;
}
d.Nc = function(a, b, c, e, f) {
  if (u(b)) for (var h = 0; h < b.length; h++) this.Nc(a, b[h], c, e, f);
  else
    (c = c || this.handleEvent),
      (e = ha(e) ? !!e.capture : !!e),
      (f = f || this.Zg || this),
      (c = ye(c)),
      (e = !!e),
      (b = me(a)
        ? a.oi(b, c, e, f)
        : a
        ? (a = Ae(a))
          ? a.oi(b, c, e, f)
          : null
        : null),
      b && (Fe(b), delete this.gh[b.key]);
  return this;
};
d.removeAll = function() {
  Db(
    this.gh,
    function(a, b) {
      this.gh.hasOwnProperty(b) && Fe(a);
    },
    this
  );
  this.gh = {};
};
d.Ia = function() {
  mg.m.Ia.call(this);
  this.removeAll();
};
d.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function pg() {
  Zd.call(this);
  this.ge = new qe(this);
  this.Ps = this;
  this.nn = null;
}
y(pg, Zd);
pg.prototype[le] = !0;
d = pg.prototype;
d.tk = function() {
  return this.nn;
};
d.ql = function(a) {
  this.nn = a;
};
d.addEventListener = function(a, b, c, e) {
  we(this, a, b, c, e);
};
d.removeEventListener = function(a, b, c, e) {
  Ee(this, a, b, c, e);
};
d.dispatchEvent = function(a) {
  var b,
    c = this.tk();
  if (c) for (b = []; c; c = c.tk()) b.push(c);
  c = this.Ps;
  var e = a.type || a;
  if (q(a)) a = new de(a, c);
  else if (a instanceof de) a.target = a.target || c;
  else {
    var f = a;
    a = new de(e, c);
    Fb(a, f);
  }
  f = !0;
  if (b)
    for (var h = b.length - 1; !a.dg && 0 <= h; h--) {
      var k = (a.currentTarget = b[h]);
      f = qg(k, e, !0, a) && f;
    }
  a.dg ||
    ((k = a.currentTarget = c),
    (f = qg(k, e, !0, a) && f),
    a.dg || (f = qg(k, e, !1, a) && f));
  if (b)
    for (h = 0; !a.dg && h < b.length; h++)
      (k = a.currentTarget = b[h]), (f = qg(k, e, !1, a) && f);
  return f;
};
d.Ia = function() {
  pg.m.Ia.call(this);
  this.removeAllListeners();
  this.nn = null;
};
d.ha = function(a, b, c, e) {
  return this.ge.add(String(a), b, !1, c, e);
};
d.Fq = function(a, b, c, e) {
  return this.ge.add(String(a), b, !0, c, e);
};
d.Nc = function(a, b, c, e) {
  return this.ge.remove(String(a), b, c, e);
};
d.removeAllListeners = function(a) {
  return this.ge ? this.ge.removeAll(a) : 0;
};
function qg(a, b, c, e) {
  b = a.ge.dc[String(b)];
  if (!b) return !0;
  b = b.concat();
  for (var f = !0, h = 0; h < b.length; ++h) {
    var k = b[h];
    if (k && !k.sh && k.capture == c) {
      var l = k.listener,
        m = k.Bk || k.src;
      k.Kj && se(a.ge, k);
      f = !1 !== l.call(m, e) && f;
    }
  }
  return f && 0 != e.xr;
}
d.oi = function(a, b, c, e) {
  return this.ge.oi(String(a), b, c, e);
};
function rg() {}
da(rg);
rg.prototype.cv = 0;
function sg(a) {
  pg.call(this);
  this.bk = a || Kc();
  this.uh = tg;
  this.bh = null;
  this.sa = !1;
  this.K = null;
  this.Pe = void 0;
  this.Le = this.Lb = this.Pd = this.an = null;
  this.oh = this.aw = !1;
}
y(sg, pg);
sg.prototype.Fu = rg.Hd();
var tg = null;
function ug(a, b) {
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
d = sg.prototype;
d.ga = function() {
  return this.bh || (this.bh = ":" + (this.Fu.cv++).toString(36));
};
d.F = function() {
  return this.K;
};
function vg(a) {
  a.Pe || (a.Pe = new mg(a));
  return a.Pe;
}
d.kg = function(a) {
  if (this == a) throw Error("Unable to set parent component");
  if (a && this.Pd && this.bh && wg(this.Pd, this.bh) && this.Pd != a)
    throw Error("Unable to set parent component");
  this.Pd = a;
  sg.m.ql.call(this, a);
};
d.getParent = function() {
  return this.Pd;
};
d.ql = function(a) {
  if (this.Pd && this.Pd != a) throw Error("Method not supported");
  sg.m.ql.call(this, a);
};
d.Yb = function() {
  return this.bk;
};
d.O = function() {
  this.K = this.bk.createElement("DIV");
};
d.Y = function(a) {
  this.Qd(a);
};
d.Qd = function(a, b) {
  if (this.sa) throw Error("Component already rendered");
  this.K || this.O();
  a ? a.insertBefore(this.K, b || null) : this.bk.kd.body.appendChild(this.K);
  (this.Pd && !this.Pd.sa) || this.kb();
};
d.kb = function() {
  this.sa = !0;
  xg(this, function(a) {
    !a.sa && a.F() && a.kb();
  });
};
d.Yc = function() {
  xg(this, function(a) {
    a.sa && a.Yc();
  });
  this.Pe && this.Pe.removeAll();
  this.sa = !1;
};
d.Ia = function() {
  this.sa && this.Yc();
  this.Pe && (this.Pe.v(), delete this.Pe);
  xg(this, function(a) {
    a.v();
  });
  !this.aw && this.K && F(this.K);
  this.Pd = this.an = this.K = this.Le = this.Lb = null;
  sg.m.Ia.call(this);
};
d.Rh = function(a, b) {
  this.Gg(a, yg(this), b);
};
d.Gg = function(a, b, c) {
  if (a.sa && (c || !this.sa)) throw Error("Component already rendered");
  if (0 > b || b > yg(this)) throw Error("Child component index out of bounds");
  (this.Le && this.Lb) || ((this.Le = {}), (this.Lb = []));
  if (a.getParent() == this) {
    var e = a.ga();
    this.Le[e] = a;
    xa(this.Lb, a);
  } else {
    e = this.Le;
    var f = a.ga();
    if (null !== e && f in e)
      throw Error('The object already contains the key "' + f + '"');
    e[f] = a;
  }
  a.kg(this);
  Ba(this.Lb, b, 0, a);
  a.sa && this.sa && a.getParent() == this
    ? ((c = this.Ec()),
      (b = c.childNodes[b] || null),
      b != a.F() && c.insertBefore(a.F(), b))
    : c
    ? (this.K || this.O(),
      (b = L(this, b + 1)),
      a.Qd(this.Ec(), b ? b.K : null))
    : this.sa &&
      !a.sa &&
      a.K &&
      a.K.parentNode &&
      1 == a.K.parentNode.nodeType &&
      a.kb();
};
d.Ec = function() {
  return this.K;
};
function zg(a) {
  null == a.uh && (a.uh = "rtl" == Rf(a.sa ? a.K : a.bk.kd.body, "direction"));
  return a.uh;
}
d.xe = function(a) {
  if (this.sa) throw Error("Component already rendered");
  this.uh = a;
};
function Ag(a) {
  return !!a.Lb && 0 != a.Lb.length;
}
function yg(a) {
  return a.Lb ? a.Lb.length : 0;
}
function wg(a, b) {
  a.Le && b
    ? ((a = a.Le), (b = (null !== a && b in a ? a[b] : void 0) || null))
    : (b = null);
  return b;
}
function L(a, b) {
  return a.Lb ? a.Lb[b] || null : null;
}
function xg(a, b, c) {
  a.Lb && ra(a.Lb, b, c);
}
function Bg(a, b) {
  return a.Lb && b ? qa(a.Lb, b) : -1;
}
d.removeChild = function(a, b) {
  if (a) {
    var c = q(a) ? a : a.ga();
    a = wg(this, c);
    if (c && a) {
      var e = this.Le;
      c in e && delete e[c];
      xa(this.Lb, a);
      b && (a.Yc(), a.K && F(a.K));
      a.kg(null);
    }
  }
  if (!a) throw Error("Child is not in parent component");
  return a;
};
d.vr = function(a) {
  for (var b = []; Ag(this); ) b.push(this.removeChild(L(this, 0), a));
  return b;
};
var Cg;
Gb(
  "A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(
    " "
  )
);
function Dg(a, b) {
  b ? a.setAttribute("role", b) : a.removeAttribute("role");
}
function M(a, b, c) {
  u(c) && (c = c.join(" "));
  var e = "aria-" + b;
  "" === c || void 0 == c
    ? (Cg ||
        (Cg = {
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
      (c = Cg),
      b in c ? a.setAttribute(e, c[b]) : a.removeAttribute(e))
    : a.setAttribute(e, c);
}
function Eg(a, b) {
  a = a.getAttribute("aria-" + b);
  return null == a || void 0 == a ? "" : String(a);
}
function Fg(a, b, c, e, f, h) {
  if (I && !Wb("525")) return !0;
  if (Nb && f) return Gg(a);
  if (f && !e) return !1;
  if (!H) {
    t(b) && (b = Hg(b));
    var k = 17 == b || 18 == b || (Nb && 91 == b);
    if (((!c || Nb) && k) || (Nb && 16 == b && (e || h))) return !1;
  }
  if ((I || Lb) && e && c)
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
  if (G && e && b == a) return !1;
  switch (a) {
    case 13:
      return H ? (h || f ? !1 : !(c && e)) : !0;
    case 27:
      return !(I || Lb || H);
  }
  return H && (e || f || h) ? !1 : Gg(a);
}
function Gg(a) {
  if (
    (48 <= a && 57 >= a) ||
    (96 <= a && 106 >= a) ||
    (65 <= a && 90 >= a) ||
    ((I || Lb) && 0 == a)
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
function Hg(a) {
  if (H) a = Ig(a);
  else if (Nb && I)
    switch (a) {
      case 93:
        a = 91;
    }
  return a;
}
function Ig(a) {
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
function Jg(a, b) {
  pg.call(this);
  a && Kg(this, a, b);
}
y(Jg, pg);
d = Jg.prototype;
d.K = null;
d.Mk = null;
d.Qm = null;
d.Nk = null;
d.tc = -1;
d.Ze = -1;
d.Nl = !1;
var Lg = {
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
  Mg = {
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
  Ng = !I || Wb("525"),
  Og = Nb && H;
d = Jg.prototype;
d.qu = function(a) {
  if (I || Lb)
    if (
      (17 == this.tc && !a.ctrlKey) ||
      (18 == this.tc && !a.altKey) ||
      (Nb && 91 == this.tc && !a.metaKey)
    )
      this.Ze = this.tc = -1;
  -1 == this.tc &&
    (a.ctrlKey && 17 != a.keyCode
      ? (this.tc = 17)
      : a.altKey && 18 != a.keyCode
      ? (this.tc = 18)
      : a.metaKey && 91 != a.keyCode && (this.tc = 91));
  Ng && !Fg(a.keyCode, this.tc, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
    ? this.handleEvent(a)
    : ((this.Ze = Hg(a.keyCode)), Og && (this.Nl = a.altKey));
};
d.su = function(a) {
  this.Ze = this.tc = -1;
  this.Nl = a.altKey;
};
d.handleEvent = function(a) {
  var b = a.Cd,
    c = b.altKey;
  if (G && "keypress" == a.type) {
    var e = this.Ze;
    var f = 13 != e && 27 != e ? b.keyCode : 0;
  } else
    (I || Lb) && "keypress" == a.type
      ? ((e = this.Ze),
        (f = 0 <= b.charCode && 63232 > b.charCode && Gg(e) ? b.charCode : 0))
      : Kb && !I
      ? ((e = this.Ze), (f = Gg(e) ? b.keyCode : 0))
      : ((e = b.keyCode || this.Ze),
        (f = b.charCode || 0),
        Og && "keypress" == a.type && (c = this.Nl),
        Nb && 63 == f && 224 == e && (e = 191));
  var h = (e = Hg(e));
  e
    ? 63232 <= e && e in Lg
      ? (h = Lg[e])
      : 25 == e && a.shiftKey && (h = 9)
    : b.keyIdentifier && b.keyIdentifier in Mg && (h = Mg[b.keyIdentifier]);
  (H &&
    Ng &&
    "keypress" == a.type &&
    !Fg(h, this.tc, a.shiftKey, a.ctrlKey, c, a.metaKey)) ||
    ((a = h == this.tc),
    (this.tc = h),
    (b = new Pg(h, f, a, b)),
    (b.altKey = c),
    this.dispatchEvent(b));
};
d.F = function() {
  return this.K;
};
function Kg(a, b, c) {
  a.Nk && a.detach();
  a.K = b;
  a.Mk = we(a.K, "keypress", a, c);
  a.Qm = we(a.K, "keydown", a.qu, c, a);
  a.Nk = we(a.K, "keyup", a.su, c, a);
}
d.detach = function() {
  this.Mk &&
    (Fe(this.Mk),
    Fe(this.Qm),
    Fe(this.Nk),
    (this.Nk = this.Qm = this.Mk = null));
  this.K = null;
  this.Ze = this.tc = -1;
};
d.Ia = function() {
  Jg.m.Ia.call(this);
  this.detach();
};
function Pg(a, b, c, e) {
  he.call(this, e);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c;
}
y(Pg, he);
function Qg(a) {
  if (a.classList) return a.classList;
  a = a.className;
  return (q(a) && a.match(/\S+/g)) || [];
}
function Rg(a, b) {
  return a.classList ? a.classList.contains(b) : wa(Qg(a), b);
}
function Sg(a, b) {
  a.classList
    ? a.classList.add(b)
    : Rg(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
}
function Tg(a, b) {
  if (a.classList)
    ra(b, function(b) {
      Sg(a, b);
    });
  else {
    var c = {};
    ra(Qg(a), function(a) {
      c[a] = !0;
    });
    ra(b, function(a) {
      c[a] = !0;
    });
    a.className = "";
    for (var e in c) a.className += 0 < a.className.length ? " " + e : e;
  }
}
function Ug(a, b) {
  a.classList
    ? a.classList.remove(b)
    : Rg(a, b) &&
      (a.className = sa(Qg(a), function(a) {
        return a != b;
      }).join(" "));
}
function Vg(a, b) {
  a.classList
    ? ra(b, function(b) {
        Ug(a, b);
      })
    : (a.className = sa(Qg(a), function(a) {
        return !wa(b, a);
      }).join(" "));
}
function Wg(a, b) {
  if (!a) throw Error("Invalid class name " + a);
  if (!x(b)) throw Error("Invalid decorator function " + b);
}
var Xg = {};
function Yg(a) {
  this.Uo = a;
}
da(Yg);
d = Yg.prototype;
d.hk = function() {
  return this.Uo;
};
function Zg(a, b) {
  a && (a.tabIndex = b ? 0 : -1);
}
d.O = function(a) {
  return a.Yb().O("DIV", this.ni(a).join(" "));
};
d.Ec = function(a) {
  return a;
};
d.Hi = function(a) {
  a = a.F();
  $f(a, !0, H);
  G && (a.hideFocus = !0);
  var b = this.hk();
  b && Dg(a, b);
};
d.ub = function(a) {
  return a.F();
};
d.Ba = function() {
  return "goog-container";
};
d.ni = function(a) {
  var b = this.Ba(),
    c = [b, a.ag == $g ? b + "-horizontal" : b + "-vertical"];
  a.isEnabled() || c.push(b + "-disabled");
  return c;
};
function ah() {}
var bh;
da(ah);
var ch = {
  button: "pressed",
  checkbox: "checked",
  menuitem: "selected",
  menuitemcheckbox: "checked",
  menuitemradio: "checked",
  radio: "checked",
  tab: "selected",
  treeitem: "selected"
};
d = ah.prototype;
d.hk = function() {};
d.O = function(a) {
  return a.Yb().O("DIV", this.ni(a).join(" "), a.qc());
};
d.Ec = function(a) {
  return a;
};
d.gi = function(a, b, c) {
  if ((a = a.F ? a.F() : a)) {
    var e = [b];
    G && !Wb("7") && ((e = dh(Qg(a), b)), e.push(b));
    (c ? Tg : Vg)(a, e);
  }
};
d.Hi = function(a) {
  zg(a) && this.xe(a.F(), !0);
  a.isEnabled() && this.we(a, a.U());
};
function eh(a, b, c) {
  if ((a = c || a.hk()))
    (c = b.getAttribute("role") || null), a != c && Dg(b, a);
}
function fh(a, b, c) {
  var e = b.To;
  null != e && a.Nn(c, e);
  b.U() || M(c, "hidden", !b.U());
  b.isEnabled() || gh(c, 1, !b.isEnabled());
  b.fb & 8 && gh(c, 8, b.Jk());
  b.fb & 16 && gh(c, 16, !!(b.za & 16));
  b.fb & 64 && gh(c, 64, b.eh());
}
d.Nn = function(a, b) {
  M(a, "label", b);
};
d.Mn = function(a, b) {
  $f(a, !b, !G && !Kb);
};
d.xe = function(a, b) {
  this.gi(a, this.Ba() + "-rtl", b);
};
d.pe = function(a) {
  var b;
  return a.fb & 32 && (b = a.ub()) ? cd(b) && dd(b) : !1;
};
d.we = function(a, b) {
  var c;
  if (a.fb & 32 && (c = a.ub())) {
    if (!b && a.za & 32) {
      try {
        c.blur();
      } catch (e) {}
      a.za & 32 && a.xi(null);
    }
    (cd(c) && dd(c)) != b &&
      ((a = c),
      b
        ? (a.tabIndex = 0)
        : ((a.tabIndex = -1), a.removeAttribute("tabIndex")));
  }
};
d.la = function(a, b) {
  Yf(a, b);
  a && M(a, "hidden", !b);
};
d.td = function(a, b, c) {
  var e = a.F();
  if (e) {
    var f = this.kk(b);
    f && this.gi(a, f, c);
    gh(e, b, c);
  }
};
function gh(a, b, c) {
  bh || (bh = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
  b = bh[b];
  var e = a.getAttribute("role") || null;
  e && ((e = ch[e] || b), (b = "checked" == b || "selected" == b ? e : b));
  b && M(a, b, c);
}
d.cd = function(a, b) {
  var c = this.Ec(a);
  c &&
    (Xc(c),
    b &&
      (q(b)
        ? $c(c, b)
        : ((a = function(a) {
            if (a) {
              var b = Mc(c);
              c.appendChild(q(a) ? b.createTextNode(a) : a);
            }
          }),
          u(b) ? ra(b, a) : !fa(b) || "nodeType" in b ? a(b) : ra(za(b), a))));
};
d.ub = function(a) {
  return a.F();
};
d.Ba = function() {
  return "goog-control";
};
d.ni = function(a) {
  var b = this.Ba(),
    c = [b],
    e = this.Ba();
  e != b && c.push(e);
  b = a.getState();
  for (e = []; b; ) {
    var f = b & -b;
    e.push(this.kk(f));
    b &= ~f;
  }
  c.push.apply(c, e);
  (a = a.Dd) && c.push.apply(c, a);
  G && !Wb("7") && c.push.apply(c, dh(c));
  return c;
};
function dh(a, b) {
  var c = [];
  b && (a = ya(a, [b]));
  ra([], function(e) {
    !ua(e, oa(wa, a)) || (b && !wa(e, b)) || c.push(e.join("_"));
  });
  return c;
}
d.kk = function(a) {
  if (!this.cp) {
    var b = this.Ba();
    b.replace(/\xa0|\s/g, " ");
    this.cp = {
      1: b + "-disabled",
      2: b + "-hover",
      4: b + "-active",
      8: b + "-selected",
      16: b + "-checked",
      32: b + "-focused",
      64: b + "-open"
    };
  }
  return this.cp[a];
};
function N(a, b, c) {
  sg.call(this, c);
  if (!b) {
    b = this.constructor;
    for (var e; b; ) {
      e = ia(b);
      if ((e = Xg[e])) break;
      b = b.m ? b.m.constructor : null;
    }
    b = e ? (x(e.Hd) ? e.Hd() : new e()) : null;
  }
  this.ea = b;
  this.ml(aa(a) ? a : null);
  this.To = null;
}
y(N, sg);
d = N.prototype;
d.Cc = null;
d.za = 0;
d.fb = 39;
d.Pl = 255;
d.qg = 0;
d.Ea = !0;
d.Dd = null;
d.yi = !0;
d.Ml = !1;
d.Cv = null;
d.ub = function() {
  return this.ea.ub(this);
};
d.qk = function() {
  return this.Pb || (this.Pb = new Jg());
};
d.gi = function(a, b) {
  b
    ? a &&
      (this.Dd ? wa(this.Dd, a) || this.Dd.push(a) : (this.Dd = [a]),
      this.ea.gi(this, a, !0))
    : a &&
      this.Dd &&
      xa(this.Dd, a) &&
      (0 == this.Dd.length && (this.Dd = null), this.ea.gi(this, a, !1));
};
d.O = function() {
  var a = this.ea.O(this);
  this.K = a;
  eh(this.ea, a, this.vk());
  this.Ml || this.ea.Mn(a, !1);
  this.U() || this.ea.la(a, !1);
};
d.vk = function() {
  return this.Cv;
};
d.Nn = function(a) {
  this.To = a;
  var b = this.F();
  b && this.ea.Nn(b, a);
};
d.Ec = function() {
  return this.ea.Ec(this.F());
};
d.kb = function() {
  N.m.kb.call(this);
  fh(this.ea, this, this.K);
  this.ea.Hi(this);
  if (this.fb & -2 && (this.yi && hh(this, !0), this.fb & 32)) {
    var a = this.ub();
    if (a) {
      var b = this.qk();
      Kg(b, a);
      vg(this)
        .ha(b, "key", this.$c)
        .ha(a, "focus", this.zk)
        .ha(a, "blur", this.xi);
    }
  }
};
function hh(a, b) {
  var c = a.oh ? ge : fe,
    e = vg(a),
    f = a.F();
  b
    ? (e
        .ha(f, c.Nh, a.zi)
        .ha(f, c.Cg, a.ne)
        .ha(f, [c.Dg, c.Bg], a.Yg)
        .ha(f, c.Mh, a.Gm),
      a.oh && e.ha(f, "gotpointercapture", a.fl),
      a.Xg != ca && e.ha(f, "contextmenu", a.Xg),
      G &&
        (Wb(9) || e.ha(f, "dblclick", a.lq),
        a.Fi || ((a.Fi = new ih(a)), be(a, oa(ce, a.Fi)))))
    : (e
        .Nc(f, c.Nh, a.zi)
        .Nc(f, c.Cg, a.ne)
        .Nc(f, [c.Dg, c.Bg], a.Yg)
        .Nc(f, c.Mh, a.Gm),
      a.oh && e.Nc(f, "gotpointercapture", a.fl),
      a.Xg != ca && e.Nc(f, "contextmenu", a.Xg),
      G && (Wb(9) || e.Nc(f, "dblclick", a.lq), ce(a.Fi), (a.Fi = null)));
}
d.Yc = function() {
  N.m.Yc.call(this);
  this.Pb && this.Pb.detach();
  this.U() && this.isEnabled() && this.ea.we(this, !1);
};
d.Ia = function() {
  N.m.Ia.call(this);
  this.Pb && (this.Pb.v(), delete this.Pb);
  delete this.ea;
  this.Fi = this.Dd = this.Cc = null;
};
d.qc = function() {
  return this.Cc;
};
d.cd = function(a) {
  this.ea.cd(this.F(), a);
  this.ml(a);
};
d.ml = function(a) {
  this.Cc = a;
};
d.jk = function() {
  var a = this.qc();
  if (!a) return "";
  a = q(a) ? a : u(a) ? ta(a, gd).join("") : ed(a);
  return jb(a);
};
d.xe = function(a) {
  N.m.xe.call(this, a);
  var b = this.F();
  b && this.ea.xe(b, a);
};
d.Mn = function(a) {
  this.Ml = a;
  var b = this.F();
  b && this.ea.Mn(b, a);
};
d.U = function() {
  return this.Ea;
};
d.la = function(a, b) {
  return b || (this.Ea != a && this.dispatchEvent(a ? "show" : "hide"))
    ? ((b = this.F()) && this.ea.la(b, a),
      this.isEnabled() && this.ea.we(this, a),
      (this.Ea = a),
      !0)
    : !1;
};
d.isEnabled = function() {
  return !(this.za & 1);
};
d.fj = function(a) {
  var b = this.getParent();
  (b && "function" == typeof b.isEnabled && !b.isEnabled()) ||
    !jh(this, 1, !a) ||
    (a || (this.setActive(!1), this.Fb(!1)),
    this.U() && this.ea.we(this, a),
    this.td(1, !a, !0));
};
d.Fb = function(a) {
  jh(this, 2, a) && this.td(2, a);
};
d.setActive = function(a) {
  jh(this, 4, a) && this.td(4, a);
};
d.Jk = function() {
  return !!(this.za & 8);
};
d.Un = function(a) {
  jh(this, 8, a) && this.td(8, a);
};
function kh(a, b) {
  jh(a, 16, b) && a.td(16, b);
}
d.eh = function() {
  return !!(this.za & 64);
};
function lh(a, b) {
  jh(a, 64, b) && a.td(64, b);
}
d.getState = function() {
  return this.za;
};
d.td = function(a, b, c) {
  c || 1 != a
    ? this.fb & a &&
      b != !!(this.za & a) &&
      (this.ea.td(this, a, b), (this.za = b ? this.za | a : this.za & ~a))
    : this.fj(!b);
};
d.fc = function(a, b) {
  if (this.sa && this.za & a && !b) throw Error("Component already rendered");
  !b && this.za & a && this.td(a, !1);
  this.fb = b ? this.fb | a : this.fb & ~a;
};
function mh(a, b) {
  return !!(a.Pl & b) && !!(a.fb & b);
}
function jh(a, b, c) {
  return (
    !!(a.fb & b) &&
    !!(a.za & b) != c &&
    (!(a.qg & b) || a.dispatchEvent(ug(b, c))) &&
    !a.Mg
  );
}
d.zi = function(a) {
  !nh(a, this.F()) &&
    this.dispatchEvent("enter") &&
    this.isEnabled() &&
    mh(this, 2) &&
    this.Fb(!0);
};
d.Gm = function(a) {
  !nh(a, this.F()) &&
    this.dispatchEvent("leave") &&
    (mh(this, 4) && this.setActive(!1), mh(this, 2) && this.Fb(!1));
};
d.fl = function(a) {
  var b = a.target;
  b.releasePointerCapture && b.releasePointerCapture(a.pointerId);
};
d.Xg = ca;
function nh(a, b) {
  return !!a.relatedTarget && Zc(b, a.relatedTarget);
}
d.ne = function(a) {
  this.isEnabled() &&
    (mh(this, 2) && this.Fb(!0),
    !ke(a) ||
      (I && Nb && a.ctrlKey) ||
      (mh(this, 4) && this.setActive(!0),
      this.ea && this.ea.pe(this) && this.ub().focus()));
  this.Ml || !ke(a) || (I && Nb && a.ctrlKey) || a.preventDefault();
};
d.Yg = function(a) {
  this.isEnabled() &&
    (mh(this, 2) && this.Fb(!0),
    this.za & 4 && this.ef(a) && mh(this, 4) && this.setActive(!1));
};
d.lq = function(a) {
  this.isEnabled() && this.ef(a);
};
d.ef = function(a) {
  mh(this, 16) && kh(this, !(this.za & 16));
  mh(this, 8) && this.Un(!0);
  mh(this, 64) && lh(this, !this.eh());
  var b = new de("action", this);
  a &&
    ((b.altKey = a.altKey),
    (b.ctrlKey = a.ctrlKey),
    (b.metaKey = a.metaKey),
    (b.shiftKey = a.shiftKey),
    (b.rn = a.rn));
  return this.dispatchEvent(b);
};
d.zk = function() {
  mh(this, 32) && jh(this, 32, !0) && this.td(32, !0);
};
d.xi = function() {
  mh(this, 4) && this.setActive(!1);
  mh(this, 32) && jh(this, 32, !1) && this.td(32, !1);
};
d.$c = function(a) {
  return this.U() && this.isEnabled() && this.Of(a)
    ? (a.preventDefault(), a.stopPropagation(), !0)
    : !1;
};
d.Of = function(a) {
  return 13 == a.keyCode && this.ef(a);
};
if (!x(N)) throw Error("Invalid component class " + N);
if (!x(ah)) throw Error("Invalid renderer class " + ah);
var oh = ia(N);
Xg[oh] = ah;
Wg("goog-control", function() {
  return new N(null);
});
function ih(a) {
  Zd.call(this);
  this.Sj = a;
  this.Mj = !1;
  this.Zg = new mg(this);
  be(this, oa(ce, this.Zg));
  a = this.Sj.K;
  this.Zg.ha(a, "mousedown", this.tu)
    .ha(a, "mouseup", this.uu)
    .ha(a, "click", this.lu);
}
y(ih, Zd);
var ph = !G || 9 <= Number(Xb);
ih.prototype.tu = function() {
  this.Mj = !1;
};
ih.prototype.uu = function() {
  this.Mj = !0;
};
function qh(a, b) {
  if (!ph) return (a.button = 0), (a.type = b), a;
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
ih.prototype.lu = function(a) {
  if (this.Mj) this.Mj = !1;
  else {
    var b = a.Cd,
      c = b.button,
      e = b.type,
      f = qh(b, "mousedown");
    this.Sj.ne(new he(f, a.currentTarget));
    f = qh(b, "mouseup");
    this.Sj.Yg(new he(f, a.currentTarget));
    ph || ((b.button = c), (b.type = e));
  }
};
ih.prototype.Ia = function() {
  this.Sj = null;
  ih.m.Ia.call(this);
};
function rh(a, b, c) {
  sg.call(this, c);
  this.ea = b || Yg.Hd();
  this.ag = a || sh;
}
y(rh, sg);
var $g = "horizontal",
  sh = "vertical";
d = rh.prototype;
d.Rm = null;
d.Pb = null;
d.ea = null;
d.ag = null;
d.Ea = !0;
d.Jf = !0;
d.Lf = !0;
d.qa = -1;
d.ob = null;
d.jh = !1;
d.Us = !1;
d.Bv = !0;
d.ce = null;
d.ub = function() {
  return this.Rm || this.ea.ub(this);
};
d.qk = function() {
  return this.Pb || (this.Pb = new Jg(this.ub()));
};
d.O = function() {
  this.K = this.ea.O(this);
};
d.Ec = function() {
  return this.ea.Ec(this.F());
};
d.kb = function() {
  rh.m.kb.call(this);
  xg(
    this,
    function(a) {
      a.sa && th(this, a);
    },
    this
  );
  var a = this.F();
  this.ea.Hi(this);
  this.la(this.Ea, !0);
  var b = this.oh ? ge : fe;
  vg(this)
    .ha(this, "enter", this.Em)
    .ha(this, "highlight", this.pu)
    .ha(this, "unhighlight", this.zu)
    .ha(this, "open", this.vu)
    .ha(this, "close", this.mu)
    .ha(a, b.Cg, this.ne)
    .ha(Mc(a), [b.Dg, b.Bg], this.nu)
    .ha(a, [b.Cg, b.Dg, b.Bg, b.Nh, b.Mh, "contextmenu"], this.ku);
  this.oh && vg(this).ha(a, "gotpointercapture", this.fl);
  this.pe() && uh(this, !0);
};
d.fl = function(a) {
  var b = a.target;
  b.releasePointerCapture && b.releasePointerCapture(a.pointerId);
};
function uh(a, b) {
  var c = vg(a),
    e = a.ub();
  b
    ? c
        .ha(e, "focus", a.zk)
        .ha(e, "blur", a.xi)
        .ha(a.qk(), "key", a.$c)
    : c
        .Nc(e, "focus", a.zk)
        .Nc(e, "blur", a.xi)
        .Nc(a.qk(), "key", a.$c);
}
d.Yc = function() {
  this.Tb(-1);
  this.ob && lh(this.ob, !1);
  this.jh = !1;
  rh.m.Yc.call(this);
};
d.Ia = function() {
  rh.m.Ia.call(this);
  this.Pb && (this.Pb.v(), (this.Pb = null));
  this.ea = this.ob = this.ce = this.Rm = null;
};
d.Em = function() {
  return !0;
};
d.pu = function(a) {
  var b = Bg(this, a.target);
  if (-1 < b && b != this.qa) {
    var c = L(this, this.qa);
    c && c.Fb(!1);
    this.qa = b;
    c = L(this, this.qa);
    this.jh && c.setActive(!0);
    this.Bv &&
      this.ob &&
      c != this.ob &&
      (c.fb & 64 ? lh(c, !0) : lh(this.ob, !1));
  }
  b = this.F();
  null != a.target.F() && M(b, "activedescendant", a.target.F().id);
};
d.zu = function(a) {
  a.target == L(this, this.qa) && (this.qa = -1);
  this.F().removeAttribute("aria-activedescendant");
};
d.vu = function(a) {
  (a = a.target) &&
    a != this.ob &&
    a.getParent() == this &&
    (this.ob && lh(this.ob, !1), (this.ob = a));
};
d.mu = function(a) {
  a.target == this.ob && (this.ob = null);
  var b = this.F(),
    c = a.target.F();
  b &&
    a.target.za & 2 &&
    c &&
    ((a = ""), c && (a = c.id), M(b, "activedescendant", a));
};
d.ne = function(a) {
  this.Jf && (this.jh = !0);
  var b = this.ub();
  b && cd(b) && dd(b) ? b.focus() : a.preventDefault();
};
d.nu = function() {
  this.jh = !1;
};
d.ku = function(a) {
  var b = this.oh ? ge : fe,
    c = vh(this, a.target);
  if (c)
    switch (a.type) {
      case b.Cg:
        c.ne(a);
        break;
      case b.Dg:
      case b.Bg:
        c.Yg(a);
        break;
      case b.Nh:
        c.zi(a);
        break;
      case b.Mh:
        c.Gm(a);
        break;
      case "contextmenu":
        c.Xg(a);
    }
};
function vh(a, b) {
  if (a.ce)
    for (var c = a.F(); b && b !== c; ) {
      var e = b.id;
      if (e in a.ce) return a.ce[e];
      b = b.parentNode;
    }
  return null;
}
d.zk = function() {};
d.xi = function() {
  this.Tb(-1);
  this.jh = !1;
  this.ob && lh(this.ob, !1);
};
d.$c = function(a) {
  return this.isEnabled() &&
    this.U() &&
    (0 != yg(this) || this.Rm) &&
    this.Of(a)
    ? (a.preventDefault(), a.stopPropagation(), !0)
    : !1;
};
d.Of = function(a) {
  var b = L(this, this.qa);
  if (
    (b && "function" == typeof b.$c && b.$c(a)) ||
    (this.ob &&
      this.ob != b &&
      "function" == typeof this.ob.$c &&
      this.ob.$c(a))
  )
    return !0;
  if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
  switch (a.keyCode) {
    case 27:
      if (this.pe()) this.ub().blur();
      else return !1;
      break;
    case 36:
      wh(this);
      break;
    case 35:
      xh(this);
      break;
    case 38:
      if (this.ag == sh) yh(this);
      else return !1;
      break;
    case 37:
      if (this.ag == $g) zg(this) ? zh(this) : yh(this);
      else return !1;
      break;
    case 40:
      if (this.ag == sh) zh(this);
      else return !1;
      break;
    case 39:
      if (this.ag == $g) zg(this) ? yh(this) : zh(this);
      else return !1;
      break;
    default:
      return !1;
  }
  return !0;
};
function th(a, b) {
  var c = b.F();
  c = c.id || (c.id = b.ga());
  a.ce || (a.ce = {});
  a.ce[c] = b;
}
d.Rh = function(a, b) {
  rh.m.Rh.call(this, a, b);
};
d.Gg = function(a, b, c) {
  a.qg |= 2;
  a.qg |= 64;
  (!this.pe() && this.Us) || a.fc(32, !1);
  a.sa && 0 != a.yi && hh(a, !1);
  a.yi = !1;
  var e = a.getParent() == this ? Bg(this, a) : -1;
  rh.m.Gg.call(this, a, b, c);
  a.sa && this.sa && th(this, a);
  a = e;
  -1 == a && (a = yg(this));
  a == this.qa
    ? (this.qa = Math.min(yg(this) - 1, b))
    : a > this.qa && b <= this.qa
    ? this.qa++
    : a < this.qa && b > this.qa && this.qa--;
};
d.removeChild = function(a, b) {
  if ((a = q(a) ? wg(this, a) : a)) {
    var c = Bg(this, a);
    -1 != c &&
      (c == this.qa ? (a.Fb(!1), (this.qa = -1)) : c < this.qa && this.qa--);
    var e = a.F();
    e && e.id && this.ce && ((c = this.ce), (e = e.id), e in c && delete c[e]);
  }
  b = a = rh.m.removeChild.call(this, a, b);
  b.sa && 1 != b.yi && hh(b, !0);
  b.yi = !0;
  return a;
};
d.setOrientation = function(a) {
  if (this.F()) throw Error("Component already rendered");
  this.ag = a;
};
d.U = function() {
  return this.Ea;
};
d.la = function(a, b) {
  if (b || (this.Ea != a && this.dispatchEvent(a ? "show" : "hide"))) {
    this.Ea = a;
    var c = this.F();
    c &&
      (Yf(c, a),
      this.pe() && Zg(this.ub(), this.Jf && this.Ea),
      b || this.dispatchEvent(this.Ea ? "aftershow" : "afterhide"));
    return !0;
  }
  return !1;
};
d.isEnabled = function() {
  return this.Jf;
};
d.fj = function(a) {
  this.Jf != a &&
    this.dispatchEvent(a ? "enable" : "disable") &&
    (a
      ? ((this.Jf = !0),
        xg(this, function(a) {
          a.$r ? delete a.$r : a.fj(!0);
        }))
      : (xg(this, function(a) {
          a.isEnabled() ? a.fj(!1) : (a.$r = !0);
        }),
        (this.jh = this.Jf = !1)),
    this.pe() && Zg(this.ub(), a && this.Ea));
};
d.pe = function() {
  return this.Lf;
};
d.we = function(a) {
  a != this.Lf && this.sa && uh(this, a);
  this.Lf = a;
  this.Jf && this.Ea && Zg(this.ub(), a);
};
d.Tb = function(a) {
  (a = L(this, a)) ? a.Fb(!0) : -1 < this.qa && L(this, this.qa).Fb(!1);
};
d.Fb = function(a) {
  this.Tb(Bg(this, a));
};
function wh(a) {
  Ah(
    a,
    function(a, c) {
      return (a + 1) % c;
    },
    yg(a) - 1
  );
}
function xh(a) {
  Ah(
    a,
    function(a, c) {
      a--;
      return 0 > a ? c - 1 : a;
    },
    0
  );
}
function zh(a) {
  Ah(
    a,
    function(a, c) {
      return (a + 1) % c;
    },
    a.qa
  );
}
function yh(a) {
  Ah(
    a,
    function(a, c) {
      a--;
      return 0 > a ? c - 1 : a;
    },
    a.qa
  );
}
function Ah(a, b, c) {
  c = 0 > c ? Bg(a, a.ob) : c;
  var e = yg(a);
  c = b.call(a, c, e);
  for (var f = 0; f <= e; ) {
    var h = L(a, c);
    if (h && a.Zo(h)) {
      a.Tb(c);
      break;
    }
    f++;
    c = b.call(a, c, e);
  }
}
d.Zo = function(a) {
  return a.U() && a.isEnabled() && !!(a.fb & 2);
};
function Bh() {}
y(Bh, ah);
da(Bh);
Bh.prototype.Ba = function() {
  return "goog-menuheader";
};
function Ch(a, b, c) {
  N.call(this, a, c || Bh.Hd(), b);
  this.fc(1, !1);
  this.fc(2, !1);
  this.fc(4, !1);
  this.fc(32, !1);
  this.za = 1;
}
y(Ch, N);
Wg("goog-menuheader", function() {
  return new Ch(null);
});
function Dh() {
  this.ep = [];
}
y(Dh, ah);
da(Dh);
function Eh(a, b) {
  var c = a.ep[b];
  if (!c) {
    switch (b) {
      case 0:
        c = a.Ba() + "-highlight";
        break;
      case 1:
        c = a.Ba() + "-checkbox";
        break;
      case 2:
        c = a.Ba() + "-content";
    }
    a.ep[b] = c;
  }
  return c;
}
d = Dh.prototype;
d.hk = function() {
  return "menuitem";
};
d.O = function(a) {
  var b = a.Yb().O("DIV", this.ni(a).join(" "), Fh(this, a.qc(), a.Yb()));
  Gh(this, a, b, !!(a.fb & 8) || !!(a.fb & 16));
  return b;
};
d.Ec = function(a) {
  return a && a.firstChild;
};
d.cd = function(a, b) {
  var c = this.Ec(a),
    e = Hh(this, a) ? c.firstChild : null;
  Dh.m.cd.call(this, a, b);
  e && !Hh(this, a) && c.insertBefore(e, c.firstChild || null);
};
function Fh(a, b, c) {
  a = Eh(a, 2);
  return c.O("DIV", a, b);
}
d.Er = function(a, b, c) {
  a && b && Gh(this, a, b, c);
};
d.Pn = function(a, b, c) {
  a && b && Gh(this, a, b, c);
};
function Hh(a, b) {
  return (b = a.Ec(b))
    ? ((b = b.firstChild),
      (a = Eh(a, 1)),
      !!b && ha(b) && 1 == b.nodeType && Rg(b, a))
    : !1;
}
function Gh(a, b, c, e) {
  eh(a, c, b.vk());
  fh(a, b, c);
  e != Hh(a, c) &&
    (e ? Sg(c, "goog-option") : Ug(c, "goog-option"),
    (c = a.Ec(c)),
    e
      ? ((a = Eh(a, 1)),
        c.insertBefore(b.Yb().O("DIV", a), c.firstChild || null))
      : c.removeChild(c.firstChild));
}
d.kk = function(a) {
  switch (a) {
    case 2:
      return Eh(this, 0);
    case 16:
    case 8:
      return "goog-option-selected";
    default:
      return Dh.m.kk.call(this, a);
  }
};
d.Ba = function() {
  return "goog-menuitem";
};
function Ih(a, b, c, e) {
  N.call(this, a, e || Dh.Hd(), c);
  this.setValue(b);
}
y(Ih, N);
d = Ih.prototype;
d.getValue = function() {
  var a = this.an;
  return null != a ? a : this.jk();
};
d.setValue = function(a) {
  this.an = a;
};
d.fc = function(a, b) {
  Ih.m.fc.call(this, a, b);
  switch (a) {
    case 8:
      this.za & 16 && !b && kh(this, !1);
      (a = this.F()) && this.ea.Er(this, a, b);
      break;
    case 16:
      (a = this.F()) && this.ea.Pn(this, a, b);
  }
};
d.Er = function(a) {
  this.fc(8, a);
};
d.Pn = function(a) {
  this.fc(16, a);
};
d.jk = function() {
  var a = this.qc();
  return u(a)
    ? ((a = ta(a, function(a) {
        return ha(a) &&
          1 == a.nodeType &&
          (Rg(a, "goog-menuitem-accel") ||
            Rg(a, "goog-menuitem-mnemonic-separator"))
          ? ""
          : gd(a);
      }).join("")),
      jb(a))
    : Ih.m.jk.call(this);
};
d.Yg = function(a) {
  var b = this.getParent();
  if (b) {
    var c = b.gr;
    b.gr = null;
    if (c && t(a.clientX) && Da(c, new A(a.clientX, a.clientY))) return;
  }
  Ih.m.Yg.call(this, a);
};
d.Of = function(a) {
  return a.keyCode == this.Jq && this.ef(a) ? !0 : Ih.m.Of.call(this, a);
};
d.gu = function() {
  return this.Jq;
};
Wg("goog-menuitem", function() {
  return new Ih(null);
});
Ih.prototype.vk = function() {
  return this.fb & 16
    ? "menuitemcheckbox"
    : this.fb & 8
    ? "menuitemradio"
    : Ih.m.vk.call(this);
};
Ih.prototype.getParent = function() {
  return N.prototype.getParent.call(this);
};
Ih.prototype.tk = function() {
  return N.prototype.tk.call(this);
};
function Jh() {}
y(Jh, ah);
da(Jh);
Jh.prototype.O = function(a) {
  return a.Yb().O("DIV", this.Ba());
};
Jh.prototype.cd = function() {};
Jh.prototype.Ba = function() {
  return "goog-menuseparator";
};
function Kh(a, b) {
  N.call(this, null, a || Jh.Hd(), b);
  this.fc(1, !1);
  this.fc(2, !1);
  this.fc(4, !1);
  this.fc(32, !1);
  this.za = 1;
}
y(Kh, N);
Kh.prototype.kb = function() {
  Kh.m.kb.call(this);
  var a = this.F();
  Dg(a, "separator");
};
Wg("goog-menuseparator", function() {
  return new Kh();
});
function Lh(a) {
  this.Uo = a || "menu";
}
y(Lh, Yg);
da(Lh);
Lh.prototype.Ba = function() {
  return "goog-menu";
};
Lh.prototype.Hi = function(a) {
  Lh.m.Hi.call(this, a);
  a = a.F();
  M(a, "haspopup", "true");
};
Wg("goog-menuseparator", function() {
  return new Kh();
});
function Mh(a, b) {
  rh.call(this, sh, b || Lh.Hd(), a);
  this.we(!1);
}
y(Mh, rh);
d = Mh.prototype;
d.Ij = !0;
d.Vs = !1;
d.Ba = function() {
  return this.ea.Ba();
};
d.removeItem = function(a) {
  (a = this.removeChild(a, !0)) && a.v();
};
d.fq = function(a) {
  return L(this, a);
};
d.setPosition = function(a, b) {
  var c = this.U();
  c || Yf(this.F(), !0);
  var e = this.F(),
    f = a;
  a = Uf(e);
  f instanceof A && ((b = f.y), (f = f.x));
  var h = e.offsetLeft + (f - a.x);
  h instanceof A
    ? ((f = h.x), (b = h.y))
    : ((f = h), (b = e.offsetTop + (Number(b) - a.y)));
  e.style.left = Vf(f);
  e.style.top = Vf(b);
  c || Yf(this.F(), !1);
};
d.hq = function() {
  return this.U() ? Uf(this.F()) : null;
};
d.la = function(a, b, c) {
  (b = Mh.m.la.call(this, a, b)) &&
    a &&
    this.sa &&
    this.Ij &&
    this.ub().focus();
  this.gr = a && c && t(c.clientX) ? new A(c.clientX, c.clientY) : null;
  return b;
};
d.Em = function(a) {
  this.Ij && this.ub().focus();
  return Mh.m.Em.call(this, a);
};
d.Zo = function(a) {
  return (this.Vs || a.isEnabled()) && a.U() && !!(a.fb & 2);
};
d.Of = function(a) {
  var b = Mh.m.Of.call(this, a);
  b ||
    xg(
      this,
      function(c) {
        !b &&
          c.gu &&
          c.Jq == a.keyCode &&
          (this.isEnabled() && this.Fb(c), (b = c.$c(a)));
      },
      this
    );
  return b;
};
d.Tb = function(a) {
  Mh.m.Tb.call(this, a);
  if ((a = L(this, a))) {
    var b = a.F();
    a = this.F() || Tc(document);
    var c = a || Tc(document);
    var e = Uf(b),
      f = Uf(c);
    if (!G || 9 <= Number(Xb)) {
      k = Qf(c, "borderLeftWidth");
      var h = Qf(c, "borderRightWidth");
      l = Qf(c, "borderTopWidth");
      m = Qf(c, "borderBottomWidth");
      h = new Nf(parseFloat(l), parseFloat(h), parseFloat(m), parseFloat(k));
    } else {
      var k = bg(c, "borderLeft");
      h = bg(c, "borderRight");
      var l = bg(c, "borderTop"),
        m = bg(c, "borderBottom");
      h = new Nf(l, h, m, k);
    }
    c == Tc(document)
      ? ((k = e.x - c.scrollLeft),
        (e = e.y - c.scrollTop),
        !G || 10 <= Number(Xb) || ((k += h.left), (e += h.top)))
      : ((k = e.x - f.x - h.left), (e = e.y - f.y - h.top));
    b = Xf(b);
    f = c.clientHeight - b.height;
    h = c.scrollLeft;
    l = c.scrollTop;
    h += Math.min(k, Math.max(k - (c.clientWidth - b.width), 0));
    l += Math.min(e, Math.max(e - f, 0));
    c = new A(h, l);
    a.scrollLeft = c.x;
    a.scrollTop = c.y;
  }
};
function Nh(a, b) {
  x(a) || Oh(a);
  this.Wf = a;
  this.fo = this.un = null;
  a = this.Wf;
  if (u(a)) {
    for (var c = !1, e = 0; e < a.length; e++) {
      var f = a[e][0];
      "string" == typeof f
        ? (a[e][0] = B.h.Sb(f))
        : (null != f.alt && (a[e][0].alt = B.h.Sb(f.alt)), (c = !0));
    }
    if (!(c || 2 > a.length)) {
      f = [];
      for (e = 0; e < a.length; e++) f.push(a[e][0]);
      var h = B.h.Yn(f);
      e = B.h.lp(f, h);
      c = B.h.mp(f, h);
      if ((e || c) && !(h <= e + c)) {
        e && (this.un = f[0].substring(0, e - 1));
        c && (this.fo = f[0].substr(1 - c));
        f = [];
        for (h = 0; h < a.length; h++) {
          var k = a[h][0],
            l = a[h][1];
          k = k.substring(e, k.length - c);
          f[h] = [k, l];
        }
        this.Wf = f;
      }
    }
  }
  a = this.getOptions()[0];
  Nh.m.constructor.call(this, a[1], b);
}
y(Nh, cg);
Nh.Z = function(a) {
  return new Nh(a.options);
};
var Ph = Ob ? "\u25bc" : "\u25be";
d = Nh.prototype;
d.Bj = "default";
d.Ab = "";
d.od = null;
d.Ld = null;
d.$ = function() {
  this.Ja ||
    ((this.Je = B.h.A("tspan", {}, null)),
    this.Je.appendChild(
      document.createTextNode(this.w.s ? Ph + " " : " " + Ph)
    ),
    Nh.m.$.call(this));
};
d.pf = function() {
  B.H.show(this, this.w.s, null);
  var a = new Mh();
  a.xe(this.w.s);
  for (var b = this.getOptions(), c = 0; c < b.length; c++) {
    var e = b[c][0],
      f = b[c][1];
    if ("object" == typeof e) {
      var h = new Image(e.width, e.height);
      h.src = e.src;
      h.alt = e.alt || "";
      e = h;
    }
    e = new Ih(e);
    e.xe(this.w.s);
    e.setValue(f);
    e.Pn(!0);
    a.Rh(e, !0);
    kh(e, f == this.Ab);
  }
  Qh(this, a);
  Rh(a);
  Sh(a);
  b = B.h.Dm();
  c = lg(this);
  this.w.s ? (c.right += 25) : (c.left -= 25);
  this.ai(a);
  f = B.h.Eh.le(a);
  300 < f.height && (f.height = 300);
  this.w.s && B.h.Eh.Ro(b, c, f);
  B.H.sn(b, c, f, this.w.s);
  a.F().focus();
};
function Qh(a, b) {
  we(b, "action", function(b) {
    (b = b.target) && a.Yq(b);
    B.H.Ci(a);
    B.i.T(!1);
  });
}
function Rh(a) {
  vg(a).ha(a.F(), "touchstart", function(a) {
    vh(this, a.target).ne(a);
  });
}
function Sh(a) {
  vg(a).ha(a.F(), "touchend", function(a) {
    vh(this, a.target).ef(a);
  });
}
d.ai = function(a) {
  a.Y(B.H.ba);
  B.h.Ua(a.F(), "blocklyDropdownMenu");
  a.Ij = !0;
  a.we(!0);
};
d.Yq = function(a) {
  a = a.getValue();
  this.w && (a = cb(this, a));
  null !== a && this.setValue(a);
};
d.getOptions = function() {
  if (x(this.Wf)) {
    var a = this.Wf.call(this);
    Oh(a);
    return a;
  }
  return this.Wf;
};
d.getValue = function() {
  return this.Ab;
};
d.setValue = function(a) {
  if (null !== a && a !== this.Ab) {
    this.w &&
      B.i.isEnabled() &&
      B.i.M(new B.i.ic(this.w, "field", this.name, this.Ab, a));
    this.Ab = a;
    for (var b = this.getOptions(), c = 0; c < b.length; c++)
      if (b[c][1] == a) {
        a = b[c][0];
        "object" == typeof a
          ? ((this.Ld = a), (this.ra = a.alt))
          : ((this.Ld = null), (this.ra = a));
        this.li();
        return;
      }
    this.ra = a;
    this.li();
  }
};
d.Qd = function() {
  if (this.Ea) {
    this.w && this.Je && (this.Je.style.fill = this.w.Ad);
    Xc(this.ta);
    F(this.od);
    this.od = null;
    if (this.Ld) {
      this.od = B.h.A(
        "image",
        { y: 5, height: this.Ld.height + "px", width: this.Ld.width + "px" },
        this.Ja
      );
      this.od.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        this.Ld.src
      );
      this.ta.appendChild(this.Je);
      var a = ig(this.Je);
      this.oa.height = Number(this.Ld.height) + 19;
      this.oa.width = Number(this.Ld.width) + a;
      this.w.s
        ? (this.od.setAttribute("x", a), this.ta.setAttribute("x", -1))
        : (this.ta.setAttribute("text-anchor", "end"),
          this.ta.setAttribute("x", this.oa.width + 1));
    } else
      (a = document.createTextNode(hg(this))),
        this.ta.appendChild(a),
        this.w.s
          ? this.ta.insertBefore(this.Je, this.ta.firstChild)
          : this.ta.appendChild(this.Je),
        this.ta.setAttribute("text-anchor", "start"),
        this.ta.setAttribute("x", 0),
        (this.oa.height = 25),
        (this.oa.width = ig(this.ta));
    this.Tc.setAttribute("height", this.oa.height - 9);
    this.Tc.setAttribute("width", this.oa.width + 10);
  } else this.oa.width = 0;
};
d.sj = function() {
  if (this.Ld && (G || Lb)) {
    var a = ig(this.Je);
    a = Number(this.Ld.width) + a + 10;
    this.Tc && this.Tc.setAttribute("width", a);
    this.oa.width = a;
  } else cg.prototype.sj.call(this);
};
d.v = function() {
  B.H.Ci(this);
  Nh.m.v.call(this);
};
function Oh(a) {
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
eg("field_dropdown", Nh);
// Copyright 2013 Google Inc.  Apache License 2.0
B.$a = Object(null);
function Th(a) {
  this.L = a;
}
d = Th.prototype;
d.jp = !0;
d.Jl = 17;
d.Pa = null;
d.ah = null;
function Uh(a) {
  a.cc ||
    ((a.cc = B.h.A("g", { class: "blocklyIconGroup" }, null)),
    a.L.rc && B.h.Ua(a.cc, "blocklyIconGroupReadonly"),
    a.pm(a.cc),
    a.L.N().appendChild(a.cc),
    B.J(a.cc, "mouseup", a, a.Km),
    a.Ee());
}
d.v = function() {
  F(this.cc);
  this.cc = null;
  this.la(!1);
  this.L = null;
};
d.Ee = function() {};
d.U = function() {
  return !!this.Pa;
};
d.Km = function(a) {
  this.L.o.lb() || this.L.rc || B.h.Ye(a) || this.la(!this.U());
};
d.De = function() {
  this.U() && this.Pa.ve(this.L.Ad);
};
function Ld(a, b) {
  a.ah = b;
  a.U() && ((a = a.Pa), (a.gd = b), a.gg && df(a));
}
function Vh(a) {
  var b = a.L.ka(),
    c = B.h.ac(a.cc);
  b = new A(b.x + c.x + a.Jl / 2, b.y + c.y + a.Jl / 2);
  Da(a.ah, b) || Ld(a, b);
}
function Wh(a) {
  Wh.m.constructor.call(this, a);
  Uh(this);
}
y(Wh, Th);
d = Wh.prototype;
d.ra = "";
d.aa = 160;
d.xa = 80;
d.pm = function(a) {
  B.h.A("circle", { class: "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
  B.h.A(
    "path",
    {
      class: "blocklyIconSymbol",
      d:
        "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z"
    },
    a
  );
  B.h.A(
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
d.$h = function() {
  this.Dc = B.h.A("foreignObject", { x: ef, y: ef }, null);
  var a = document.createElementNS(B.Fe, "body");
  a.setAttribute("xmlns", B.Fe);
  a.className = "blocklyMinimalBody";
  var b = document.createElementNS(B.Fe, "textarea");
  b.className = "blocklyCommentTextarea";
  b.setAttribute("dir", this.L.s ? "RTL" : "LTR");
  a.appendChild(b);
  this.Za = b;
  this.Dc.appendChild(a);
  B.J(b, "mouseup", this, this.Sv, !0, !0);
  B.J(b, "wheel", this, function(a) {
    a.stopPropagation();
  });
  B.J(b, "change", this, function() {
    this.ra != b.value &&
      (B.i.M(new B.i.ic(this.L, "comment", null, this.ra, b.value)),
      (this.ra = b.value));
  });
  setTimeout(function() {
    b.focus();
  }, 0);
  return this.Dc;
};
d.Ee = function() {
  this.U() && (this.la(!1), this.la(!0));
  Th.prototype.Ee.call(this);
};
d.il = function() {
  if (this.U()) {
    var a = this.Pa.Mf(),
      b = 2 * ef;
    this.Dc.setAttribute("width", a.width - b);
    this.Dc.setAttribute("height", a.height - b);
    this.Za.style.width = a.width - b - 4 + "px";
    this.Za.style.height = a.height - b - 4 + "px";
  }
};
d.la = function(a) {
  if (a != this.U())
    if (
      (B.i.M(new Sa(this.L, "commentOpen", !a, a)),
      (!Mf(this.L) && !this.Za) || G)
    )
      Xh.prototype.la.call(this, a);
    else {
      var b = this.vb(),
        c = this.Mf();
      a
        ? ((this.Pa = new bf(
            this.L.o,
            this.$h(),
            this.L.ed,
            this.ah,
            this.aa,
            this.xa
          )),
          lf(this.Pa, this.L.id),
          (a = this.il.bind(this)),
          (this.Pa.Cn = a),
          this.De())
        : (this.Pa.v(), (this.Dc = this.Za = this.Pa = null));
      this.yb(b);
      this.kf(c.width, c.height);
    }
};
d.Sv = function() {
  mf(this.Pa) && this.Za.focus();
};
d.Mf = function() {
  return this.U() ? this.Pa.Mf() : { width: this.aa, height: this.xa };
};
d.kf = function(a, b) {
  this.Za ? this.Pa.kf(a, b) : ((this.aa = a), (this.xa = b));
};
d.vb = function() {
  return this.Za ? this.Za.value : this.ra;
};
d.yb = function(a) {
  this.ra != a &&
    (B.i.M(new B.i.ic(this.L, "comment", null, this.ra, a)), (this.ra = a));
  this.Za && (this.Za.value = a);
};
d.v = function() {
  B.i.isEnabled() && this.yb("");
  this.L.Ha = null;
  Th.prototype.v.call(this);
};
function Yh() {}
Yh.prototype = [];
function ud(a, b) {
  if (b.Te) throw "Connection already in database.";
  b.w.rc || (a.splice(zd(a, b), 0, b), (b.Te = !0));
}
function Zh(a, b) {
  if (!a.length) return -1;
  var c = zd(a, b);
  if (c >= a.length) return -1;
  for (var e = b.Fa, f = c; 0 <= f && a[f].Fa == e; ) {
    if (a[f] == b) return f;
    f--;
  }
  for (; c < a.length && a[c].Fa == e; ) {
    if (a[c] == b) return c;
    c++;
  }
  return -1;
}
function zd(a, b) {
  if (!a.length) return 0;
  for (var c = 0, e = a.length; c < e; ) {
    var f = Math.floor((c + e) / 2);
    if (a[f].Fa < b.Fa) c = f + 1;
    else if (a[f].Fa > b.Fa) e = f;
    else {
      c = f;
      break;
    }
  }
  return c;
}
function md(a, b) {
  if (!b.Te) throw "Connection not in database.";
  var c = Zh(a, b);
  if (-1 == c) throw "Unable to find connection in connectionDB.";
  b.Te = !1;
  a.splice(c, 1);
}
function Fd(a, b, c) {
  function e(a) {
    var b = h - f[a].yc,
      e = k - f[a].Fa;
    Math.sqrt(b * b + e * e) <= c && m.push(f[a]);
    return e < c;
  }
  var f = a,
    h = b.yc,
    k = b.Fa;
  a = 0;
  for (var l = (b = f.length - 2); a < l; )
    f[l].Fa < k ? (a = l) : (b = l), (l = Math.floor((a + b) / 2));
  var m = [];
  b = a = l;
  if (f.length) {
    for (; 0 <= a && e(a); ) a--;
    do b++;
    while (b < f.length && e(b));
  }
  return m;
}
function $h(a, b) {
  this.Wg = a;
  this.bo = b.spacing;
  this.Dq = b.length;
  this.Su = (this.Xm = a.firstChild) && this.Xm.nextSibling;
  this.Kv = b.snap;
}
$h.prototype.jf = 1;
$h.prototype.v = function() {
  this.Wg = null;
};
$h.prototype.update = function(a) {
  this.jf = a;
  var b = this.bo * a || 100;
  this.Wg.setAttribute("width", b);
  this.Wg.setAttribute("height", b);
  b = Math.floor(this.bo / 2) + 0.5;
  var c = b - this.Dq / 2,
    e = b + this.Dq / 2;
  b *= a;
  c *= a;
  e *= a;
  ai(this.Xm, a, c, e, b, b);
  ai(this.Su, a, b, b, c, e);
};
function ai(a, b, c, e, f, h) {
  a &&
    (a.setAttribute("stroke-width", b),
    a.setAttribute("x1", c),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", h));
}
$h.prototype.moveTo = function(a, b) {
  this.Wg.setAttribute("x", a);
  this.Wg.setAttribute("y", b);
  (G || Lb) && this.update(this.jf);
};
function bi(a) {
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
    (c = ci(a.toolbox)),
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
  var r = a.toolboxPosition;
  r = "end" === r ? !1 : !0;
  r = p ? (r ? B.Ie : B.Bf) : r == n ? B.wd : B.He;
  var w = a.scrollbars;
  void 0 === w && (w = e);
  var v = a.css;
  void 0 === v && (v = !0);
  var z = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (z = a.media) : a.path && (z = a.path + "media/");
  var Ea = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex;
  this.s = n;
  this.lh = Ea;
  this.collapse = h;
  this.tt = k;
  this.disable = l;
  this.readOnly = b;
  this.Gq = a.maxBlocks || Infinity;
  this.qd = z;
  this.mq = e;
  this.pq = w;
  this.Cu = f;
  this.Bu = m;
  this.Au = v;
  this.Kd = p;
  this.Nd = c;
  b = a.grid || {};
  c = {};
  c.spacing = parseFloat(b.spacing) || 0;
  c.aA = b.colour || "#888";
  c.length = parseFloat(b.length) || 1;
  c.uA = 0 < c.spacing && !!b.snap;
  this.iq = c;
  a = a.zoom || {};
  b = {};
  b.controls = void 0 === a.controls ? !1 : !!a.controls;
  b.bw = void 0 === a.wheel ? !1 : !!a.wheel;
  b.Or = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
  b.Ti = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
  b.Ui = void 0 === a.minScale ? 0.3 : parseFloat(a.minScale);
  b.Hv = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
  this.Hb = b;
  this.wa = r;
}
bi.prototype.Gc = null;
bi.prototype.nf = null;
bi.prototype.eb = null;
function ci(a) {
  a
    ? ("string" != typeof a &&
        ("undefined" == typeof XSLTProcessor && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a && (a = B.D.Kc(a)))
    : (a = null);
  return a;
}
function di(a) {
  this.j = a;
  this.Qe = new ei(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.vf = new ei(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.Yh = B.h.A(
    "rect",
    { height: K, width: K, class: "blocklyScrollbarBackground" },
    null
  );
  B.h.Ii(this.Yh, a.ud);
}
di.prototype.Oa = null;
di.prototype.v = function() {
  F(this.Yh);
  this.Oa = this.j = this.Yh = null;
  this.Qe.v();
  this.Qe = null;
  this.vf.v();
  this.vf = null;
};
di.prototype.resize = function() {
  var a = this.j.eb();
  if (a) {
    var b = !1,
      c = !1;
    this.Oa &&
    this.Oa.va == a.va &&
    this.Oa.Sa == a.Sa &&
    this.Oa.bb == a.bb &&
    this.Oa.Ta == a.Ta
      ? ((this.Oa &&
          this.Oa.oc == a.oc &&
          this.Oa.gb == a.gb &&
          this.Oa.Bc == a.Bc) ||
          (b = !0),
        (this.Oa &&
          this.Oa.Wb == a.Wb &&
          this.Oa.Vd == a.Vd &&
          this.Oa.nc == a.nc) ||
          (c = !0))
      : (c = b = !0);
    b && this.Qe.resize(a);
    c && this.vf.resize(a);
    (this.Oa && this.Oa.va == a.va && this.Oa.Ta == a.Ta) ||
      this.Yh.setAttribute("x", this.vf.vc.x);
    (this.Oa && this.Oa.Sa == a.Sa && this.Oa.bb == a.bb) ||
      this.Yh.setAttribute("y", this.Qe.vc.y);
    this.Oa = a;
  }
};
di.prototype.set = function(a, b) {
  var c = {};
  a *= this.Qe.Qb;
  b *= this.vf.Qb;
  var e = this.vf.bd,
    f = a / this.Qe.bd;
  c.x = isNaN(f) ? 0 : f;
  e = b / e;
  c.y = isNaN(e) ? 0 : e;
  this.j.nf(c);
  fi(this.Qe, a);
  fi(this.vf, b);
};
function ei(a, b, c, e) {
  this.j = a;
  this.mh = c || !1;
  this.Qf = b;
  this.Oa = null;
  this.Zh(e);
  this.vc = new A(0, 0);
  a = K;
  b
    ? (this.Jc.setAttribute("height", a),
      this.Od.setAttribute("height", a),
      this.Td.setAttribute("height", a - 5),
      this.Td.setAttribute("y", 2.5),
      (this.Qi = "width"),
      (this.kr = "x"))
    : (this.Jc.setAttribute("width", a),
      this.Od.setAttribute("width", a),
      this.Td.setAttribute("width", a - 5),
      this.Td.setAttribute("x", 2.5),
      (this.Qi = "height"),
      (this.kr = "y"));
  this.$q = B.J(this.Jc, "mousedown", this, this.qv);
  this.cr = B.J(this.Td, "mousedown", this, this.rv);
}
var gi, hi;
d = ei.prototype;
d.mn = new A(0, 0);
d.Mr = 0;
d.bd = 0;
d.Re = 0;
d.Bi = 0;
d.Oi = !0;
d.Ef = !0;
var K = 15;
Vd && (K = 25);
ei.prototype.v = function() {
  ii();
  B.Aa(this.$q);
  this.$q = null;
  B.Aa(this.cr);
  this.cr = null;
  F(this.Od);
  this.j = this.Td = this.Jc = this.u = this.Od = null;
};
function fi(a, b) {
  a.Bi = b;
  a.Td.setAttribute(a.kr, a.Bi);
}
function ji(a, b) {
  a.bd = b;
  a.Od.setAttribute(a.Qi, a.bd);
  a.Jc.setAttribute(a.Qi, a.bd);
}
di.prototype.ig = function(a) {
  this.Qe.ig(a);
  this.vf.ig(a);
};
function ki(a, b, c) {
  a.vc.x = b;
  a.vc.y = c;
  B.h.dj(
    a.Od,
    "translate(" + (a.vc.x + a.mn.x) + "px," + (a.vc.y + a.mn.y) + "px)"
  );
}
d = ei.prototype;
d.resize = function(a) {
  if (!a && ((a = this.j.eb()), !a)) return;
  var b = this.Oa;
  if (
    !a ||
    !b ||
    a.va != b.va ||
    a.Sa != b.Sa ||
    a.gb != b.gb ||
    a.Vd != b.Vd ||
    a.bb != b.bb ||
    a.Ta != b.Ta ||
    a.oc != b.oc ||
    a.Wb != b.Wb ||
    a.Bc != b.Bc ||
    a.nc != b.nc
  ) {
    this.Oa = a;
    if (this.Qf) {
      b = a.va - 1;
      this.mh && (b -= K);
      ji(this, Math.max(0, b));
      b = a.Ta + 0.5;
      this.mh && this.j.s && (b += K);
      ki(this, b, a.bb + a.Sa - K - 0.5);
      this.mh || this.la(this.bd < a.oc);
      this.Qb = this.bd / a.oc;
      if (-Infinity == this.Qb || Infinity == this.Qb || isNaN(this.Qb))
        this.Qb = 0;
      this.Re = Math.max(0, a.va * this.Qb);
      this.Td.setAttribute(this.Qi, this.Re);
      fi(this, li(this, (a.gb - a.Bc) * this.Qb));
    } else {
      b = a.Sa - 1;
      this.mh && (b -= K);
      ji(this, Math.max(0, b));
      b = a.Ta + 0.5;
      this.j.s || (b += a.va - K - 1);
      ki(this, b, a.bb + 0.5);
      this.mh || this.la(this.bd < a.Wb);
      this.Qb = this.bd / a.Wb;
      if (-Infinity == this.Qb || Infinity == this.Qb || isNaN(this.Qb))
        this.Qb = 0;
      this.Re = Math.max(0, a.Sa * this.Qb);
      this.Td.setAttribute(this.Qi, this.Re);
      fi(this, li(this, (a.Vd - a.nc) * this.Qb));
    }
    mi(this);
  }
};
d.Zh = function(a) {
  var b = "blocklyScrollbar" + (this.Qf ? "Horizontal" : "Vertical");
  a && (b += " " + a);
  this.Od = B.h.A("svg", { class: b }, null);
  this.u = B.h.A("g", {}, this.Od);
  this.Jc = B.h.A("rect", { class: "blocklyScrollbarBackground" }, this.u);
  a = Math.floor((K - 5) / 2);
  this.Td = B.h.A(
    "rect",
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.u
  );
  B.h.Ii(this.Od, E(this.j));
};
d.U = function() {
  return this.Oi;
};
d.ig = function(a) {
  var b = a != this.Ef;
  this.Ef = a;
  b && this.rj();
};
d.la = function(a) {
  var b = a != this.U();
  if (this.mh) throw "Unable to toggle visibility of paired scrollbars.";
  this.Oi = a;
  b && this.rj();
};
d.rj = function() {
  this.Ef && this.U()
    ? this.Od.setAttribute("display", "block")
    : this.Od.setAttribute("display", "none");
};
d.qv = function(a) {
  Gf(this.j);
  B.Touch.ee();
  ii();
  if (B.h.Ye(a)) a.stopPropagation();
  else {
    var b = B.h.Vi(a, E(this.j), ni(this.j));
    b = this.Qf ? b.x : b.y;
    var c = B.h.pk(this.Td);
    c = this.Qf ? c.x : c.y;
    var e = this.Bi,
      f = 0.95 * this.Re;
    b <= c ? (e -= f) : b >= c + this.Re && (e += f);
    fi(this, li(this, e));
    mi(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
d.rv = function(a) {
  Gf(this.j);
  ii();
  B.h.Ye(a)
    ? a.stopPropagation()
    : ((this.Mv = this.Bi),
      yf(this.j),
      (this.Mr = this.Qf ? a.clientX : a.clientY),
      (gi = B.J(document, "mouseup", this, this.xv)),
      (hi = B.J(document, "mousemove", this, this.tv)),
      a.stopPropagation(),
      a.preventDefault());
};
d.tv = function(a) {
  fi(this, li(this, this.Mv + ((this.Qf ? a.clientX : a.clientY) - this.Mr)));
  mi(this);
};
d.xv = function() {
  Hf(this.j);
  B.Touch.ee();
  ii();
};
function ii() {
  B.Bb(!0);
  gi && (B.Aa(gi), (gi = null));
  hi && (B.Aa(hi), (hi = null));
}
function li(a, b) {
  return (b = 0 >= b || isNaN(b) || a.bd < a.Re ? 0 : Math.min(b, a.bd - a.Re));
}
function mi(a) {
  var b = a.Bi / a.bd;
  isNaN(b) && (b = 0);
  var c = {};
  a.Qf ? (c.x = b) : (c.y = b);
  a.j.nf(c);
}
d.set = function(a) {
  fi(this, li(this, a * this.Qb));
  mi(this);
};
function oi(a, b) {
  oi.m.constructor.call(this, a, b);
  this.Ik = !1;
  this.Uc = {};
  this.Lr = this.Zi = 0;
  this.ln = null;
}
y(oi, Bf);
d = oi.prototype;
d.ei = function(a) {
  oi.m.ei.call(this, a);
  !this.Hk && B.Touch.Lk(a) && pi(this, a);
};
d.Df = function(a) {
  this.ln = B.J(document, "mousedown", null, this.xu.bind(this), !0);
  this.al = B.J(document, "mousemove", null, this.Ai.bind(this), !0);
  this.bl = B.J(document, "mouseup", null, this.Ak.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
d.xu = function(a) {
  !this.lb() && B.Touch.Lk(a) && (pi(this, a), this.Ik && B.af());
};
d.Ai = function(a) {
  if (this.lb()) B.Touch.Zn(a) && oi.m.Ai.call(this, a);
  else if (this.Ik) {
    if (B.Touch.Lk(a)) {
      this.Uc[B.Touch.xk(a)] = qi(this, a);
      var b = Object.keys(this.Uc);
      if (2 == b.length) {
        b = Fa(this.Uc[b[0]], this.Uc[b[1]]) / this.Lr;
        if (0 < this.Zi && Infinity > this.Zi) {
          var c = b - this.Zi;
          c = 0 < c ? 5 * c : 6 * c;
          var e = this.Ra,
            f = B.h.Vi(a, E(e), ni(e));
          e.zoom(f.x, f.y, c);
        }
        this.Zi = b;
        a.preventDefault();
      }
    }
    B.af();
  } else oi.m.Ai.call(this, a);
};
d.Ak = function(a) {
  if (B.Touch.Lk(a) && !this.lb()) {
    var b = B.Touch.xk(a);
    this.Uc[b] && delete this.Uc[b];
    2 > Object.keys(this.Uc).length && ((this.Uc = {}), (this.Zi = 0));
  }
  !this.Ik || this.lb()
    ? B.Touch.Zn(a) && oi.m.Ak.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.v());
};
d.v = function() {
  oi.m.v.call(this);
  this.ln && B.Aa(this.ln);
};
function pi(a, b) {
  a.Uc[B.Touch.xk(b)] = qi(a, b);
  var c = Object.keys(a.Uc);
  2 == c.length &&
    ((a.Lr = Fa(a.Uc[c[0]], a.Uc[c[1]])), (a.Ik = !0), b.preventDefault());
}
function qi(a, b) {
  return a.Ra
    ? new A(
        b.pageX ? b.pageX : b.changedTouches[0].pageX,
        b.pageY ? b.pageY : b.changedTouches[0].pageY
      )
    : null;
}
function Pd(a, b, c) {
  if (x(a)) c && (a = na(a, c));
  else if (a && "function" == typeof a.handleEvent) a = na(a.handleEvent, a);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : g.setTimeout(a, b || 0);
}
function ri(a) {
  this.j = a;
}
d = ri.prototype;
d.Cf = 47;
d.xj = 44;
d.Ag = 16;
d.Hl = 20;
d.Lh = 20;
d.Cj = 10;
d.Kl = 0;
d.Ll = 32;
d.eh = !1;
d.u = null;
d.yl = null;
d.Wm = 0;
d.$e = 0;
d.mb = 0;
d.Ae = 0;
d.O = function() {
  this.u = B.h.A("g", { class: "blocklyTrash" }, null);
  var a = String(Math.random()).substring(2);
  var b = B.h.A("clipPath", { id: "blocklyTrashBodyClipPath" + a }, this.u);
  B.h.A("rect", { width: this.Cf, height: this.xj, y: this.Ag }, b);
  B.h
    .A(
      "image",
      {
        width: B.Ub.width,
        x: -this.Kl,
        height: B.Ub.height,
        y: -this.Ll,
        "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")"
      },
      this.u
    )
    .setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      this.j.options.qd + B.Ub.url
    );
  b = B.h.A("clipPath", { id: "blocklyTrashLidClipPath" + a }, this.u);
  B.h.A("rect", { width: this.Cf, height: this.Ag }, b);
  this.yl = B.h.A(
    "image",
    {
      width: B.Ub.width,
      x: -this.Kl,
      height: B.Ub.height,
      y: -this.Ll,
      "clip-path": "url(#blocklyTrashLidClipPath" + a + ")"
    },
    this.u
  );
  this.yl.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    this.j.options.qd + B.Ub.url
  );
  B.J(this.u, "mouseup", this, this.click);
  this.Ol();
  return this.u;
};
d.$ = function(a) {
  this.Sh = this.Hl + a;
  Nd(this, !1);
  return this.Sh + this.xj + this.Ag;
};
d.v = function() {
  this.u && (F(this.u), (this.u = null));
  this.j = this.yl = null;
  g.clearTimeout(this.Wm);
};
d.position = function() {
  var a = this.j.eb();
  a &&
    (this.j.s
      ? ((this.mb = this.Lh + K),
        a.wa == B.He && ((this.mb += a.gk), this.j.V && (this.mb += a.Ta)))
      : ((this.mb = a.va + a.Ta - this.Cf - this.Lh - K),
        a.wa == B.wd && (this.mb -= a.gk)),
    (this.Ae = a.Sa + a.bb - (this.xj + this.Ag) - this.Sh),
    a.wa == B.Bf && (this.Ae -= a.$p),
    this.u.setAttribute(
      "transform",
      "translate(" + this.mb + "," + this.Ae + ")"
    ));
};
d.Rg = function() {
  if (!this.u) return null;
  var a = this.u.getBoundingClientRect();
  return new Of(
    a.left + this.Kl - this.Cj,
    a.top + this.Ll - this.Cj,
    this.Cf + 2 * this.Cj,
    this.Ag + this.xj + 2 * this.Cj
  );
};
function Nd(a, b) {
  a.eh != b && (g.clearTimeout(a.Wm), (a.eh = b), a.Ol());
}
d.Ol = function() {
  this.$e += this.eh ? 0.2 : -0.2;
  this.$e = Math.min(Math.max(this.$e, 0), 1);
  var a = 45 * this.$e;
  this.yl.setAttribute(
    "transform",
    "rotate(" +
      (this.j.s ? -a : a) +
      "," +
      (this.j.s ? 4 : this.Cf - 4) +
      "," +
      (this.Ag - 2) +
      ")"
  );
  this.u.style.opacity = 0.4 + 0.4 * this.$e;
  0 < this.$e && 1 > this.$e && (this.Wm = Pd(this.Ol, 20, this));
};
d.close = function() {
  Nd(this, !1);
};
d.click = function() {
  var a = this.j.Ov - this.j.scrollX,
    b = this.j.Qv - this.j.scrollY;
  Math.sqrt(a * a + b * b) > B.wo || console.log("TODO: Inspect trash.");
};
function Oe(a, b, c, e) {
  this.o = a;
  this.name = b;
  this.type = c || "";
  this.bh = e || B.h.Ed();
  B.i.M(new Oa(this));
}
Oe.prototype.ga = function() {
  return this.bh;
};
function si(a, b) {
  a = String(a.name).toLowerCase();
  b = String(b.name).toLowerCase();
  return a < b ? -1 : a == b ? 0 : 1;
}
B.I = {};
B.I.Ph = B.Ko;
B.I.So = function(a) {
  var b = Me(a);
  a = Object.create(null);
  for (var c = 0; c < b.length; c++) {
    var e = Qe(b[c]);
    if (e)
      for (var f = 0; f < e.length; f++) {
        var h = e[f];
        h.ga() && (a[h.ga()] = h);
      }
  }
  b = [];
  for (var k in a) b.push(a[k]);
  return b;
};
B.I.Tz = function() {
  console.warn(
    "Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub."
  );
};
B.I.Rs = function(a) {
  var b = Me(a);
  a = {};
  for (var c = 0; c < b.length; c++) {
    var e = b[c];
    if (e.eu) {
      e = e.eu();
      for (var f = 0; f < e.length; f++) a[e[f]] = e[f];
    }
  }
  b = [];
  for (var h in a) b.push(a[h]);
  return b;
};
B.I.Oe = function(a) {
  var b = [],
    c = C("button");
  c.setAttribute("text", B.g.NEW_VARIABLE);
  c.setAttribute("callbackKey", "CREATE_VARIABLE");
  ti(a, function(a) {
    B.I.Kg(a.pa);
  });
  b.push(c);
  a = B.I.tm(a);
  return (b = b.concat(a));
};
B.I.tm = function(a) {
  a = a.ti("");
  a.sort(si);
  var b = [];
  if (0 < a.length) {
    var c = a[0];
    if (B.$a.variables_set) {
      var e = B.$a.math_change ? 8 : 24;
      e =
        '<xml><block type="variables_set" gap="' +
        e +
        '">' +
        B.I.Qg(c) +
        "</block></xml>";
      e = B.D.Kc(e).firstChild;
      b.push(e);
    }
    B.$a.math_change &&
      ((e = B.$a.variables_get ? 20 : 8),
      (e =
        '<xml><block type="math_change" gap="' +
        e +
        '">' +
        B.I.Qg(c) +
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>'),
      (e = B.D.Kc(e).firstChild),
      b.push(e));
    for (c = 0; (e = a[c]); c++)
      B.$a.variables_get &&
        ((e =
          '<xml><block type="variables_get" gap="8">' +
          B.I.Qg(e) +
          "</block></xml>"),
        (e = B.D.Kc(e).firstChild),
        b.push(e));
  }
  return b;
};
B.I.cu = function(a) {
  a = a.ie();
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
B.I.Kg = function(a, b, c) {
  function e(c) {
    B.I.pr(B.g.NEW_VARIABLE_TITLE, c, function(c) {
      if (c) {
        var h = B.I.av(c, a);
        if (h) {
          var k = c.toLowerCase();
          if (h.type == f) var n = B.g.VARIABLE_ALREADY_EXISTS.replace("%1", k);
          else
            (n = B.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (n = n.replace("%1", k).replace("%2", h.type));
          B.alert(n, function() {
            e(c);
          });
        } else a.Vc(c, f), b && b(c);
      } else b && b(null);
    });
  }
  var f = c || "";
  e("");
};
ba("Blockly.Variables.createVariableButtonHandler", B.I.Kg);
B.I.Vc = B.I.Kg;
ba("Blockly.Variables.createVariable", B.I.Vc);
B.I.Bn = function(a, b) {
  function c(e) {
    var f = B.g.RENAME_VARIABLE_TITLE.replace("%1", b.name);
    B.I.pr(f, e, function(e) {
      if (e) {
        var f = B.I.bv(e, b.type, a);
        f
          ? ((f = B.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              e.toLowerCase()
            ).replace("%2", f.type)),
            B.alert(f, function() {
              c(e);
            }))
          : a.fg(b.ga(), e);
      }
    });
  }
  c("");
};
B.I.pr = function(a, b, c) {
  B.prompt(a, b, function(a) {
    a &&
      ((a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")),
      a == B.g.RENAME_VARIABLE || a == B.g.NEW_VARIABLE) &&
      (a = null);
    c(a);
  });
};
B.I.bv = function(a, b, c) {
  c = c.na.ie();
  a = a.toLowerCase();
  for (var e = 0, f; (f = c[e]); e++)
    if (f.name.toLowerCase() == a && f.type != b) return f;
  return null;
};
B.I.av = function(a, b) {
  b = b.na.ie();
  a = a.toLowerCase();
  for (var c = 0, e; (e = b[c]); c++) if (e.name.toLowerCase() == a) return e;
  return null;
};
B.I.Qg = function(a) {
  var b = a.type;
  "" == b && (b = "''");
  return (
    '<field name="VAR" id="' +
    a.ga() +
    '" variabletype="' +
    lb(b) +
    '">' +
    lb(a.name) +
    "</field>"
  );
};
B.I.hA = function(a) {
  a = "<xml>" + B.I.Qg(a) + "</xml>";
  return B.D.Kc(a).firstChild;
};
B.I.gq = function(a, b, c, e) {
  var f = B.I.md(a, b, c, e);
  f || (f = B.I.xt(a, b, c, e));
  return f;
};
B.I.md = function(a, b, c, e) {
  var f = a.ph;
  if (b) {
    var h = a.me(b);
    !h && f && (h = f.me(b));
  } else if (c) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    h = a.md(c, e);
    !h && f && (h = f.md(c, e));
  }
  return h;
};
B.I.xt = function(a, b, c, e) {
  var f = a.ph;
  c || (c = B.I.cu(a.oe ? a.tg : a));
  return f ? f.Vc(c, e, b) : a.Vc(c, e, b);
};
B.I.bq = function(a, b) {
  a = a.ie();
  var c = [];
  if (b.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == b.indexOf(f) && c.push(f);
    }
  return c;
};
B.Sc = {};
B.Sc.iv = function(a) {
  B.I.Kg(a.pa, null, "String");
};
B.Sc.hv = function(a) {
  B.I.Kg(a.pa, null, "Number");
};
B.Sc.gv = function(a) {
  B.I.Kg(a.pa, null, "Colour");
};
B.Sc.Oe = function(a) {
  var b = [],
    c = C("button");
  c.setAttribute("text", B.g.NEW_STRING_VARIABLE);
  c.setAttribute("callbackKey", "CREATE_VARIABLE_STRING");
  b.push(c);
  c = C("button");
  c.setAttribute("text", B.g.NEW_NUMBER_VARIABLE);
  c.setAttribute("callbackKey", "CREATE_VARIABLE_NUMBER");
  b.push(c);
  c = C("button");
  c.setAttribute("text", B.g.NEW_COLOUR_VARIABLE);
  c.setAttribute("callbackKey", "CREATE_VARIABLE_COLOUR");
  b.push(c);
  a.Kf.CREATE_VARIABLE_STRING = B.Sc.iv;
  a.Kf.CREATE_VARIABLE_NUMBER = B.Sc.hv;
  a.Kf.CREATE_VARIABLE_COLOUR = B.Sc.gv;
  a = B.Sc.tm(a);
  return (b = b.concat(a));
};
B.Sc.tm = function(a) {
  a = a.ie();
  a.sort(si);
  var b = [];
  if (0 < a.length) {
    if (B.$a.variables_set_dynamic) {
      var c =
        '<xml><block type="variables_set_dynamic" gap="24">' +
        B.I.Qg(a[0]) +
        "</block></xml>";
      c = B.D.Kc(c).firstChild;
      b.push(c);
    }
    if (B.$a.variables_get_dynamic)
      for (var e = 0; (c = a[e]); e++)
        (c =
          '<xml><block type="variables_get_dynamic" gap="8">' +
          B.I.Qg(c) +
          "</block></xml>"),
          (c = B.D.Kc(c).firstChild),
          b.push(c);
  }
  return b;
};
function ui(a) {
  this.on = a;
  this.Qh = Object.create(null);
}
d = ui.prototype;
d.Tm = null;
d.v = function() {
  this.Qh = this.on = null;
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
    e && e.play && (this.Qh[b] = e);
  }
};
d.preload = function() {
  for (var a in this.Qh) {
    var b = this.Qh[a];
    b.volume = 0.01;
    b.play();
    b.pause();
    if (Qb || Pb) break;
  }
};
d.play = function(a, b) {
  var c = this.Qh[a];
  c
    ? ((a = new Date()),
      (null != this.Tm && a - this.Tm < B.Hs) ||
        ((this.Tm = a),
        (c = (Xb && 9 === Xb) || Qb || Ob ? c : c.cloneNode()),
        (c.volume = void 0 === b ? 1 : b),
        c.play()))
    : this.on && this.on.mc.play(a, b);
};
d = of.prototype;
d.tb = function() {
  return { width: this.Fc(), height: this.Ug() };
};
d.Y = function() {
  if (!this.gg) {
    var a = this.tb();
    this.$h();
    this.u.appendChild(this.Dc);
    this.rg = B.h.A("rect", {
      class: "blocklyCommentHandleTarget",
      x: 0,
      y: 0
    });
    this.u.appendChild(this.rg);
    this.rf = B.h.A("rect", {
      class: "blocklyCommentTarget",
      x: 0,
      y: 0,
      rx: 3,
      ry: 3
    });
    this.u.appendChild(this.rf);
    this.pb = B.h.A(
      "g",
      { class: this.s ? "blocklyResizeSW" : "blocklyResizeSE" },
      this.u
    );
    B.h.A(
      "polygon",
      { points: "0,x x,x x,0".replace(/x/g, (8).toString()) },
      this.pb
    );
    B.h.A(
      "line",
      { class: "blocklyResizeLine", x1: 8 / 3, y1: 7, x2: 7, y2: 8 / 3 },
      this.pb
    );
    B.h.A(
      "line",
      { class: "blocklyResizeLine", x1: 16 / 3, y1: 7, x2: 7, y2: 16 / 3 },
      this.pb
    );
    this.Ob() &&
      ((this.Me = B.h.A("g", { class: "blocklyCommentDeleteIcon" }, this.u)),
      (this.Kp = B.h.A(
        "circle",
        { class: "blocklyDeleteIconShape", r: "7", cx: "7.5", cy: "7.5" },
        this.Me
      )),
      B.h.A(
        "line",
        {
          x1: "5",
          y1: "10",
          x2: "10",
          y2: "5",
          stroke: "#fff",
          "stroke-width": "2"
        },
        this.Me
      ),
      B.h.A(
        "line",
        {
          x1: "5",
          y1: "5",
          x2: "10",
          y2: "10",
          stroke: "#fff",
          "stroke-width": "2"
        },
        this.Me
      ));
    vi(this, a.width, a.height);
    this.Za.value = this.Cc;
    this.gg = !0;
    this.pb && B.J(this.pb, "mousedown", this, this.Dn);
    this.Ob() &&
      (B.J(this.Me, "mousedown", this, this.Jt),
      B.J(this.Me, "mouseout", this, this.Kt),
      B.J(this.Me, "mouseup", this, this.Lt));
  }
};
d.$h = function() {
  this.Dc = B.h.A(
    "foreignObject",
    { x: 0, y: 10, class: "blocklyCommentForeignObject" },
    null
  );
  var a = document.createElementNS(B.Fe, "body");
  a.setAttribute("xmlns", B.Fe);
  a.className = "blocklyMinimalBody";
  var b = document.createElementNS(B.Fe, "textarea");
  b.className = "blocklyCommentTextarea";
  b.setAttribute("dir", this.s ? "RTL" : "LTR");
  a.appendChild(b);
  this.Za = b;
  this.Dc.appendChild(a);
  B.J(b, "wheel", this, function(a) {
    a.stopPropagation();
  });
  B.J(b, "change", this, function() {
    this.cd(b.value);
  });
  return this.Dc;
};
d.Dn = function(a) {
  wi(this);
  B.h.Ye(a) ||
    (this.o.wl(a, new A(this.o.s ? -this.aa : this.aa, this.xa)),
    (this.kh = B.J(document, "mouseup", this, this.Ev)),
    (this.kn = B.J(document, "mousemove", this, this.En)),
    B.Bb());
  a.stopPropagation();
};
d.Jt = function(a) {
  B.h.Ua(this.Kp, "blocklyDeleteIconHighlighted");
  a.stopPropagation();
};
d.Kt = function() {
  B.h.wb(this.Kp, "blocklyDeleteIconHighlighted");
};
d.Lt = function(a) {
  this.v(!0, !0);
  a.stopPropagation();
};
function wi(a) {
  a.kh && (B.Aa(a.kh), (a.kh = null));
  a.kn && (B.Aa(a.kn), (a.kn = null));
}
d.Ev = function() {
  B.Touch.ee();
  wi(this);
};
d.En = function(a) {
  this.Jj = !1;
  a = nf(this.o, a);
  vi(this, this.s ? -a.x : a.x, a.y);
};
function vi(a, b, c) {
  b = Math.max(b, 45);
  c = Math.max(c, 30);
  a.aa = b;
  a.xa = c;
  a.mj.setAttribute("width", b);
  a.mj.setAttribute("height", c);
  a.rf.setAttribute("width", b);
  a.rf.setAttribute("height", c);
  a.rg.setAttribute("width", b);
  a.rg.setAttribute("height", 10);
  a.s &&
    (a.mj.setAttribute("transform", "scale(-1 1)"),
    a.rf.setAttribute("transform", "scale(-1 1)"));
  a.pb &&
    (a.s
      ? (a.pb.setAttribute(
          "transform",
          "translate(" + (-b + 8) + "," + (c - 8) + ") scale(-1 1)"
        ),
        a.Me.setAttribute(
          "transform",
          "translate(" + (-b + 8) + ",-8) scale(-1 1)"
        ))
      : (a.pb.setAttribute(
          "transform",
          "translate(" + (b - 8) + "," + (c - 8) + ")"
        ),
        a.Me.setAttribute("transform", "translate(" + (b - 8) + ",-8)")));
  b = a.tb();
  a.Dc.setAttribute("width", b.width);
  a.Dc.setAttribute("height", b.height - 10);
  a.s && a.Dc.setAttribute("x", -b.width);
  a.Za.style.width = b.width - 4 + "px";
  a.Za.style.height = b.height - 4 - 10 + "px";
}
d.Sn = function() {
  var a = this;
  this.ki = !0;
  setTimeout(function() {
    a.Za.focus();
    B.h.Ua(a.u, "blocklyFocused");
    B.h.Ua(a.rf, "blocklyCommentTargetFocused");
    B.h.Ua(a.rg, "blocklyCommentHandleTargetFocused");
  }, 0);
};
function qf(a) {
  a.ki = !1;
  setTimeout(function() {
    a.Za.blur();
    B.h.wb(a.u, "blocklyFocused");
    B.h.wb(a.rf, "blocklyCommentTargetFocused");
    B.h.wb(a.rg, "blocklyCommentHandleTargetFocused");
  }, 0);
}
function xi(a) {
  this.Xh = a;
  this.O();
}
d = xi.prototype;
d.La = null;
d.Bd = null;
d.Xh = null;
d.O = function() {
  this.La ||
    ((this.La = B.h.A(
      "svg",
      {
        xmlns: B.kc,
        "xmlns:html": B.Fe,
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible"
      },
      null
    )),
    this.Xh.appendChild(this.La));
};
d.Be = function(a, b) {
  a = a.toFixed(0);
  b = b.toFixed(0);
  this.La.style.display = "block";
  B.h.dj(this.La, "translate3d(" + a + "px, " + b + "px, 0px)");
};
d.wk = function() {
  return B.h.ac(this.La);
};
d.Vh = function(a) {
  if (!a)
    throw "Couldn't clear and hide the drag surface: missing new surface.";
  var b = this.La.childNodes[0],
    c = this.La.childNodes[1];
  if (
    !(
      b &&
      c &&
      B.h.nq(b, "blocklyBlockCanvas") &&
      B.h.nq(c, "blocklyBubbleCanvas")
    )
  )
    throw "Couldn't clear and hide the drag surface.  A node was missing.";
  null != this.rd ? B.h.Ii(b, this.rd) : a.insertBefore(b, a.firstChild);
  B.h.Ii(c, b);
  this.La.style.display = "none";
  B.h.dj(this.La, "");
  this.rd = null;
};
B.D = {};
B.D.uj = function(a, b) {
  var c = C("xml");
  c.appendChild(B.D.$v(B.I.So(a)));
  for (var e = Ze(a, !0), f = 0, h; (h = e[f]); f++) c.appendChild(h.nj(b));
  a = J(a, !0);
  for (f = 0; (e = a[f]); f++) c.appendChild(B.D.Sl(e, b));
  return c;
};
B.D.$v = function(a) {
  for (var b = C("variables"), c = 0, e; (e = a[c]); c++) {
    var f = C("variable", null, e.name);
    f.setAttribute("type", e.type);
    f.setAttribute("id", e.ga());
    b.appendChild(f);
  }
  return b;
};
B.D.Sl = function(a, b) {
  var c;
  a.o.s && (c = a.o.Fc());
  b = B.D.Ke(a, b);
  var e = a.ka();
  b.setAttribute("x", Math.round(a.o.s ? c - e.x : e.x));
  b.setAttribute("y", Math.round(e.y));
  return b;
};
B.D.Xt = function(a) {
  null == a.getValue() && (a.Sf(), a.getValue());
  var b = a.md();
  if (!b) throw Error("Tried to serialize a variable field with no variable.");
  var c = C("field", null, b.name);
  c.setAttribute("name", a.name);
  c.setAttribute("id", b.ga());
  c.setAttribute("variabletype", b.type);
  return c;
};
B.D.Yt = function(a) {
  if (a.name && a.zf) {
    if (a.qh()) return B.D.Xt(a);
    var b = C("field", null, a.getValue());
    b.setAttribute("name", a.name);
    return b;
  }
  return null;
};
B.D.Ss = function(a, b) {
  for (var c = 0, e; (e = a.W[c]); c++)
    for (var f = 0, h; (h = e.Na[f]); f++) (h = B.D.Yt(h)) && b.appendChild(h);
};
B.D.Ke = function(a, b) {
  var c = C(a.Wa ? "shadow" : "block");
  c.setAttribute("type", a.type);
  b || c.setAttribute("id", a.id);
  if (a.ad) {
    var e = a.ad();
    e && (e.hasChildNodes() || e.hasAttributes()) && c.appendChild(e);
  }
  B.D.Ss(a, c);
  if ((e = a.lk())) {
    e = C("comment", null, e);
    if ("object" == typeof a.Ha) {
      e.setAttribute("pinned", a.Ha.U());
      var f = a.Ha.Mf();
      e.setAttribute("h", f.height);
      e.setAttribute("w", f.width);
    }
    c.appendChild(e);
  }
  a.data && ((e = C("data", null, a.data)), c.appendChild(e));
  f = 0;
  for (var h; (h = a.W[f]); f++) {
    var k,
      l = !0;
    if (h.type != B.Wd) {
      var m = D(h.connection);
      h.type == B.ab
        ? (k = C("value"))
        : h.type == B.Ka && (k = C("statement"));
      e = h.connection.Rd;
      !e || (m && m.Wa) || k.appendChild(B.D.ip(e));
      m && (k.appendChild(B.D.Ke(m, b)), (l = !1));
      k.setAttribute("name", h.name);
      l || c.appendChild(k);
    }
  }
  a.Lu != a.We && c.setAttribute("inline", a.We);
  a.isCollapsed() && c.setAttribute("collapsed", !0);
  a.disabled && c.setAttribute("disabled", !0);
  a.Ob() || a.Wa || c.setAttribute("deletable", !1);
  a.Md() || a.Wa || c.setAttribute("movable", !1);
  Mf(a) || c.setAttribute("editable", !1);
  if ((f = Ya(a))) (k = C("next", null, B.D.Ke(f, b))), c.appendChild(k);
  e = a.R && a.R.Rd;
  !e || (f && f.Wa) || k.appendChild(B.D.ip(e));
  return c;
};
B.D.ip = function(a) {
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
B.D.pc = function(a) {
  return new XMLSerializer().serializeToString(a);
};
B.D.fA = function(a) {
  a = B.D.pc(a).split("<");
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
B.D.Kc = function(a) {
  return new DOMParser().parseFromString(a, "text/xml").firstChild;
};
B.D.$z = function(a, b) {
  b.xb(!1);
  b.clear();
  a = B.D.fe(a, b);
  b.xb(!0);
  return a;
};
B.D.fe = function(a, b) {
  if (a instanceof Xe) {
    var c = a;
    a = b;
    b = c;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  b.s && (e = b.Fc());
  c = [];
  jg();
  var f = a.childNodes.length,
    h = B.i.$b();
  h || B.i.T(!0);
  b.xb && b.xb(!1);
  var k = !0;
  try {
    for (var l = 0; l < f; l++) {
      var m = a.childNodes[l],
        n = m.nodeName.toLowerCase();
      if ("block" == n || ("shadow" == n && !B.i.Rb)) {
        var p = B.D.Ng(m, b);
        c.push(p.id);
        var r = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
          w = m.hasAttribute("y") ? parseInt(m.getAttribute("y"), 10) : 10;
        isNaN(r) || isNaN(w) || p.moveBy(b.s ? e - r : r, w);
        k = !1;
      } else if ("shadow" == n) k = !1;
      else if ("comment" == n)
        if (b.P) tf(m, b, e);
        else {
          var v = m,
            z = b,
            Ea = We(v),
            Rc = new Te(z, Ea.content, Ea.kq, Ea.Zr, Ea.id),
            Pa = parseInt(v.getAttribute("x"), 10),
            Gd = parseInt(v.getAttribute("y"), 10);
          isNaN(Pa) || isNaN(Gd) || Rc.moveBy(Pa, Gd);
          Ue(Rc);
        }
      else if ("variables" == n) {
        if (k) B.D.Ut(m, b);
        else
          throw Error(
            "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
          );
        k = !1;
      }
    }
  } finally {
    h || B.i.T(!1), kg();
  }
  b.xb && b.xb(!0);
  return c;
};
B.D.Uz = function(a, b) {
  if (b.hasOwnProperty("scale")) {
    var c = O;
    try {
      O = 0;
      var e = yi(b);
    } finally {
      O = c;
    }
  }
  a = B.D.fe(a, b);
  if (e && e.height) {
    c = e.y + e.height;
    var f = e.x;
    var h = Infinity,
      k = Infinity;
    for (e = 0; e < a.length; e++) {
      var l = Xa(b, a[e]).ka();
      l.y < k && (k = l.y);
      l.x < h && (h = l.x);
    }
    c = c - k + 10;
    f -= h;
    var m;
    b.s && (m = b.Fc());
    for (e = 0; e < a.length; e++) Xa(b, a[e]).moveBy(b.s ? m - f : f, c);
  }
  return a;
};
B.D.Ng = function(a, b) {
  if (a instanceof Xe) {
    var c = a;
    a = b;
    b = c;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  B.i.disable();
  c = b.ie();
  try {
    var e = B.D.om(a, b),
      f = Ja(e, !1);
    if (b.P) {
      zi(e, !0);
      for (var h = f.length - 1; 0 <= h; h--) f[h].Ue();
      for (h = f.length - 1; 0 <= h; h--) f[h].Y(!1);
      setTimeout(function() {
        e.o && zi(e, !1);
      }, 1);
      Ed(e);
      rf(b);
    } else for (h = f.length - 1; 0 <= h; h--) f[h].Sf();
  } finally {
    B.i.enable();
  }
  if (B.i.isEnabled()) {
    a = B.I.bq(b, c);
    for (h = 0; h < a.length; h++) B.i.M(new Oa(a[h]));
    B.i.M(new B.i.zj(e));
  }
  return e;
};
B.D.Ut = function(a, b) {
  for (var c = 0, e; (e = a.children[c]); c++) {
    var f = e.getAttribute("type"),
      h = e.getAttribute("id");
    e = e.textContent;
    if (null == f) throw Error("Variable with id, " + h + " is without a type");
    b.Vc(e, f, h);
  }
};
B.D.om = function(a, b) {
  var c = null,
    e = a.getAttribute("type"),
    f = a.getAttribute("id");
  c = b.Qq(e, f);
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
          c.Ne && (c.Ne(k), c.Ue && c.Ue());
          break;
        case "comment":
          c.cj(k.textContent);
          var p = k.getAttribute("pinned");
          p &&
            !c.rc &&
            setTimeout(function() {
              c.Ha && c.Ha.la && c.Ha.la("true" == p);
            }, 1);
          h = parseInt(k.getAttribute("w"), 10);
          k = parseInt(k.getAttribute("h"), 10);
          !isNaN(h) && !isNaN(k) && c.Ha && c.Ha.la && c.Ha.kf(h, k);
          break;
        case "data":
          c.data = k.textContent;
          break;
        case "title":
        case "field":
          B.D.Tt(c, m, k);
          break;
        case "value":
        case "statement":
          k = fb(c, m);
          if (!k) {
            console.warn("Ignoring non-existent input " + m + " in block " + e);
            break;
          }
          l && (k.connection.Rd = l);
          h &&
            ((h = B.D.om(h, b)),
            h.S ? k.connection.connect(h.S) : h.X && k.connection.connect(h.X));
          break;
        case "next":
          l && c.R && (c.R.Rd = l);
          h && ((h = B.D.om(h, b)), c.R.connect(h.X));
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  (b = a.getAttribute("inline")) && c.wh("true" == b);
  (b = a.getAttribute("disabled")) && c.lf("true" == b || "disabled" == b);
  (b = a.getAttribute("deletable")) && c.Qn("true" == b);
  (b = a.getAttribute("movable")) && c.jg("true" == b);
  (b = a.getAttribute("editable")) && c.Rn("true" == b);
  (b = a.getAttribute("collapsed")) && c.hg("true" == b);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = c.je(!1);
    for (f = 0; a[f]; f++);
    c.Wn(!0);
  }
  return c;
};
B.D.St = function(a, b, c, e) {
  var f = b.getAttribute("variabletype") || "";
  "''" == f && (f = "");
  a = B.I.gq(a, b.id, c, f);
  if (null != f && f !== a.type)
    throw Error(
      "Serialized variable type with id '" +
        a.ga() +
        "' had type " +
        a.type +
        ", and does not match variable field that references it: " +
        B.D.pc(b) +
        "."
    );
  e.setValue(a.ga());
};
B.D.Tt = function(a, b, c) {
  var e = bb(a, b);
  e
    ? ((a = a.o),
      (b = c.textContent),
      e.qh() ? B.D.St(a, c, b, e) : e.setValue(b))
    : console.warn("Ignoring non-existent field " + b + " in block " + a.type);
};
B.D.Mt = function(a) {
  for (var b = 0, c; (c = a.childNodes[b]); b++)
    if ("next" == c.nodeName.toLowerCase()) {
      a.removeChild(c);
      break;
    }
};
g.Blockly || (g.Blockly = {});
g.Blockly.Xml || (g.Blockly.Xml = {});
g.Blockly.Xml.domToText = B.D.pc;
g.Blockly.Xml.domToWorkspace = B.D.fe;
g.Blockly.Xml.textToDom = B.D.Kc;
g.Blockly.Xml.workspaceToDom = B.D.uj;
// Copyright 2015 Google Inc.  Apache License 2.0
function Ai(a) {
  this.j = a;
}
d = Ai.prototype;
d.Cf = 32;
d.xo = 110;
d.Hl = 20;
d.Lh = 20;
d.u = null;
d.mb = 0;
d.Ae = 0;
d.O = function() {
  this.u = B.h.A("g", { class: "blocklyZoom" }, null);
  var a = String(Math.random()).substring(2);
  Bi(this, a);
  Ci(this, a);
  Di(this, a);
  return this.u;
};
d.$ = function(a) {
  this.Sh = this.Hl + a;
  return this.Sh + this.xo;
};
d.v = function() {
  this.u && (F(this.u), (this.u = null));
  this.j = null;
};
d.position = function() {
  var a = this.j.eb();
  a &&
    (this.j.s
      ? ((this.mb = this.Lh + K),
        a.wa == B.He && ((this.mb += a.gk), this.j.V && (this.mb += a.Ta)))
      : ((this.mb = a.va + a.Ta - this.Cf - this.Lh - K),
        a.wa == B.wd && (this.mb -= a.gk)),
    (this.Ae = a.Sa + a.bb - this.xo - this.Sh),
    a.wa == B.Bf && (this.Ae -= a.$p),
    this.u.setAttribute(
      "transform",
      "translate(" + this.mb + "," + this.Ae + ")"
    ));
};
function Bi(a, b) {
  var c = a.j,
    e = B.h.A("clipPath", { id: "blocklyZoomoutClipPath" + b }, a.u);
  B.h.A("rect", { width: 32, height: 32, y: 77 }, e);
  a = B.h.A(
    "image",
    {
      width: B.Ub.width,
      height: B.Ub.height,
      x: -64,
      y: -15,
      "clip-path": "url(#blocklyZoomoutClipPath" + b + ")"
    },
    a.u
  );
  a.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    c.options.qd + B.Ub.url
  );
  B.J(a, "mousedown", null, function(a) {
    Gf(c);
    Ei(c, -1);
    B.Touch.ee();
    a.stopPropagation();
    a.preventDefault();
  });
}
function Ci(a, b) {
  var c = a.j,
    e = B.h.A("clipPath", { id: "blocklyZoominClipPath" + b }, a.u);
  B.h.A("rect", { width: 32, height: 32, y: 43 }, e);
  a = B.h.A(
    "image",
    {
      width: B.Ub.width,
      height: B.Ub.height,
      x: -32,
      y: -49,
      "clip-path": "url(#blocklyZoominClipPath" + b + ")"
    },
    a.u
  );
  a.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    c.options.qd + B.Ub.url
  );
  B.J(a, "mousedown", null, function(a) {
    Gf(c);
    Ei(c, 1);
    B.Touch.ee();
    a.stopPropagation();
    a.preventDefault();
  });
}
function Di(a, b) {
  var c = a.j,
    e = B.h.A("clipPath", { id: "blocklyZoomresetClipPath" + b }, a.u);
  B.h.A("rect", { width: 32, height: 32 }, e);
  a = B.h.A(
    "image",
    {
      width: B.Ub.width,
      height: B.Ub.height,
      y: -92,
      "clip-path": "url(#blocklyZoomresetClipPath" + b + ")"
    },
    a.u
  );
  a.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    c.options.qd + B.Ub.url
  );
  B.J(a, "mousedown", null, function(a) {
    Gf(c);
    c.setScale(c.options.Hb.Or);
    if (c.Xa) {
      var b = c.eb(),
        e = (b.oc - b.va) / 2;
      c.G && (e -= c.G.aa / 2);
      c.Xa.set(e, (b.Wb - b.Sa) / 2);
    } else console.warn("Tried to scroll a non-scrollable workspace.");
    B.Touch.ee();
    a.stopPropagation();
    a.preventDefault();
  });
}
// Copyright 2014 Google Inc.  Apache License 2.0
function Fi(a, b, c) {
  Fi.m.constructor.call(this, a);
  this.eb = a.eb || Gi;
  this.nf = a.nf || Hi;
  var e = [];
  e[B.ab] = new Yh();
  e[B.Fg] = new Yh();
  e[B.Ka] = new Yh();
  e[B.Ge] = new Yh();
  this.Zl = e;
  b && (this.cb = b);
  c && (this.xg = c);
  this.Al = this.xg && B.h.Xe();
  this.Di = [];
  this.mc = new ui(a.Gc);
  this.Zc = this.options.jq ? new $h(a.jq, a.iq) : null;
  B.I && B.I.Oe && (this.Bh[B.Ko] = B.I.Oe);
  B.Sc && B.Sc.Oe && (this.Bh[B.Ks] = B.Sc.Oe);
  B.Va && B.Va.Oe && (this.Bh[B.Ho] = B.Va.Oe);
}
y(Fi, Xe);
d = Fi.prototype;
d.kl = null;
d.P = !0;
d.oe = !1;
d.Mi = !1;
d.Fn = !0;
d.scrollX = 0;
d.scrollY = 0;
d.Ov = 0;
d.Qv = 0;
d.Tp = null;
d.scale = 1;
d.wc = null;
d.Xa = null;
d.ib = null;
d.cb = null;
d.xg = null;
d.Al = !1;
d.Gk = !1;
d.Nm = null;
d.Bq = null;
d.Kf = {};
d.Bh = {};
d.np = null;
d.tg = null;
d.wq = null;
d.Ji = !0;
function ni(a) {
  if (a.Ji) {
    var b = E(a).getScreenCTM();
    b && ((a.wq = b.inverse()), (a.Ji = !1));
  }
  return a.wq;
}
function gb(a, b) {
  var c = 0,
    e = 0,
    f = 1;
  if (Zc(a.Da, b) || Zc(a.ud, b)) f = a.scale;
  do {
    var h = B.h.ac(b);
    if (b == a.Da || b == a.ud) f = 1;
    c += h.x * f;
    e += h.y * f;
    b = b.parentNode;
  } while (b && b != E(a));
  return new A(c, e);
}
d.O = function(a) {
  this.u = B.h.A("g", { class: "blocklyWorkspace" }, null);
  a &&
    ((this.Jc = B.h.A(
      "rect",
      { height: "100%", width: "100%", class: a },
      this.u
    )),
    "blocklyMainBackground" == a &&
      this.Zc &&
      (this.Jc.style.fill = "url(#" + this.Zc.Wg.id + ")"));
  this.Da = B.h.A("g", { class: "blocklyBlockCanvas" }, this.u);
  this.ud = B.h.A("g", { class: "blocklyBubbleCanvas" }, this.u);
  a = K;
  if (this.options.Cu) {
    this.wc = new ri(this);
    var b = this.wc.O();
    this.u.insertBefore(b, this.Da);
    a = this.wc.$(a);
  }
  this.options.Hb &&
    this.options.Hb.controls &&
    ((this.yg = new Ai(this)),
    (b = this.yg.O()),
    this.u.appendChild(b),
    this.yg.$(a));
  this.oe ||
    (B.J(this.u, "mousedown", this, this.se, !1, !0),
    this.options.Hb &&
      this.options.Hb.bw &&
      B.J(this.u, "wheel", this, this.zv));
  this.options.mq && (this.V = new Ii(this));
  this.Zc && this.Zc.update(this.scale);
  Ji(this);
  return this.u;
};
d.v = function() {
  this.P = !1;
  this.ib && this.ib.cancel();
  Fi.m.v.call(this);
  this.u && (F(this.u), (this.u = null));
  this.ud = this.Da = null;
  this.V && (this.V.v(), (this.V = null));
  this.G && (this.G.v(), (this.G = null));
  this.wc && (this.wc.v(), (this.wc = null));
  this.Xa && (this.Xa.v(), (this.Xa = null));
  this.yg && (this.yg.v(), (this.yg = null));
  this.mc && (this.mc.v(), (this.mc = null));
  this.Zc && (this.Zc.v(), (this.Zc = null));
  this.Bh && (this.Bh = null);
  this.Kf && (this.Kf = null);
  this.options.Gc || F(E(this).parentNode);
  this.kl && (B.Aa(this.kl), (this.kl = null));
};
d.Qq = function(a, b) {
  return new P(this, a, b);
};
function Ki(a, b) {
  var c = {
    di: a.options.di,
    Gc: a,
    s: a.s,
    lh: a.options.lh,
    Kd: a.Kd,
    wa: a.options.wa
  };
  a.G = null;
  a.G = a.Kd ? new Li(c) : new Mi(c);
  a.G.Ig = !1;
  return a.G.O(b);
}
function rf(a) {
  a.Fn && a.P && (a.Xa && a.Xa.resize(), (a.Ji = !0));
}
d.resize = function() {
  this.V && this.V.position();
  this.G && this.G.position();
  this.wc && this.wc.position();
  this.yg && this.yg.position();
  this.Xa && this.Xa.resize();
  this.Ji = !0;
  Ji(this);
};
function Ef(a) {
  var b = Sc(document);
  Da(a.Bq, b) || ((a.Bq = b), (a.Ji = !0), Ji(a));
}
function E(a) {
  if (a.Xo) return a.Xo;
  for (var b = a.u; b; ) {
    if ("svg" == b.tagName) return (a.Xo = b);
    b = b.parentNode;
  }
  return null;
}
d.translate = function(a, b) {
  if (this.Al && this.Gk) this.xg.Be(a, b);
  else {
    var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
    this.Da.setAttribute("transform", c);
    this.ud.setAttribute("transform", c);
  }
  if (this.cb) {
    c = this.cb;
    var e = this.scale;
    c.jf = e;
    c.Bd.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + b.toFixed(0) + ") scale(" + e + ")"
    );
  }
};
function Hf(a) {
  if (a.Al) {
    a.Gk = !1;
    var b = a.xg.wk();
    a.xg.Vh(a.u);
    b = "translate(" + b.x + "," + b.y + ") scale(" + a.scale + ")";
    a.Da.setAttribute("transform", b);
    a.ud.setAttribute("transform", b);
  }
}
function yf(a) {
  if (a.Al && !a.Gk) {
    a.Gk = !0;
    var b = a.Da.previousSibling,
      c = parseInt(E(a).getAttribute("width"), 10),
      e = parseInt(E(a).getAttribute("height"), 10),
      f = B.h.ac(a.Da),
      h = a.xg,
      k = a.Da,
      l = a.ud,
      m = a.scale;
    h.rd = b;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    h.La.setAttribute("width", c);
    h.La.setAttribute("height", e);
    h.La.appendChild(k);
    h.La.appendChild(l);
    h.La.style.display = "block";
    a.xg.Be(f.x, f.y);
  }
}
d.Fc = function() {
  var a = this.eb();
  return a ? a.va / this.scale : 0;
};
d.la = function(a) {
  this.Xa && this.Xa.ig(a);
  (this.G || (this.V && this.V.G)) &&
    (this.G ? this.G : this.V ? this.V.G : null).ig(a);
  E(this).style.display = a ? "block" : "none";
  this.V && (this.V.jc.style.display = a ? "block" : "none");
  a ? (this.Y(), this.V && this.V.position()) : B.Bb(!0);
};
d.Y = function() {
  for (var a = Me(this), b = a.length - 1; 0 <= b; b--) a[b].Y(!1);
};
function Ni(a, b) {
  var c = Q;
  if (void 0 === b) {
    for (var e = 0, f; (f = c.Di[e]); e++) f.Fb(!1);
    c.Di.length = 0;
  }
  if ((f = a ? Xa(c, a) : null))
    (a = void 0 === b || b)
      ? -1 == c.Di.indexOf(f) && c.Di.push(f)
      : xa(c.Di, f),
      f.Fb(a);
}
function Oi(a) {
  var b = B.Wh;
  if (a.P && !(b.getElementsByTagName("block").length >= af(a)))
    if ((a.ib && a.ib.cancel(), "comment" == b.tagName.toLowerCase())) {
      B.i.disable();
      try {
        var c = tf(b, a),
          e = parseInt(b.getAttribute("x"), 10),
          f = parseInt(b.getAttribute("y"), 10);
        isNaN(e) || isNaN(f) || (a.s && (e = -e), c.moveBy(e + 50, f + 50));
      } finally {
        B.i.enable();
      }
      c.select();
    } else {
      B.i.disable();
      try {
        var h = B.D.Ng(b, a),
          k = parseInt(b.getAttribute("x"), 10),
          l = parseInt(b.getAttribute("y"), 10);
        if (!isNaN(k) && !isNaN(l)) {
          a.s && (k = -k);
          do {
            b = !1;
            var m = Me(a);
            c = 0;
            for (var n; (n = m[c]); c++) {
              var p = n.ka();
              if (1 >= Math.abs(k - p.x) && 1 >= Math.abs(l - p.y)) {
                b = !0;
                break;
              }
            }
            if (!b) {
              var r = h.Fd(!1);
              c = 0;
              for (var w; (w = r[c]); c++)
                if (w.closest(B.zc, new A(k, l)).connection) {
                  b = !0;
                  break;
                }
            }
            b && ((k = a.s ? k - B.zc : k + B.zc), (l += 2 * B.zc));
          } while (b);
          h.moveBy(k, l);
        }
      } finally {
        B.i.enable();
      }
      B.i.isEnabled() && !h.Wa && B.i.M(new B.i.zj(h));
      h.select();
    }
}
function Pi(a) {
  if ((a = a.oe ? a.tg : a) && !a.ib && a.V && a.V.G) {
    a = a.V;
    var b = a.fd.Id();
    b && b.yd && a.G.show(b.yd);
  }
}
d.fg = function(a, b) {
  Fi.m.fg.call(this, a, b);
  Pi(this);
};
d.Hf = function(a) {
  Fi.m.Hf.call(this, a);
  Pi(this);
};
d.Vc = function(a, b, c) {
  a = Fi.m.Vc.call(this, a, b, c);
  Pi(this);
  return a;
};
function Ji(a) {
  a.Jp = a.wc && a.u.parentNode ? a.wc.Rg() : null;
  a.Ip = a.G ? a.G.Rg() : a.V ? a.V.Rg() : null;
}
function Md(a, b) {
  b = new A(b.clientX, b.clientY);
  return a.Jp && a.Jp.contains(b)
    ? B.Fl
    : a.Ip && a.Ip.contains(b)
    ? B.uo
    : B.to;
}
d.se = function(a) {
  var b = this.Gd(a);
  b && (b.Ra || (b.Ra = this), (b.uc = a), b.ei(a));
};
d.wl = function(a, b) {
  a = B.h.Vi(a, E(this), ni(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.Tp = Ga(b, a);
};
function nf(a, b) {
  b = B.h.Vi(b, E(a), ni(a));
  b.x /= a.scale;
  b.y /= a.scale;
  return Ha(a.Tp, b);
}
d.lb = function() {
  return null != this.ib && this.ib.lb();
};
d.zv = function(a) {
  this.ib && this.ib.cancel();
  var b = -a.deltaY / 50,
    c = B.h.Vi(a, E(this), ni(this));
  this.zoom(c.x, c.y, b);
  a.preventDefault();
};
function yi(a) {
  var b = J(a, !1);
  a = Ze(a, !1);
  b = b.concat(a);
  if (!b.length) return { x: 0, y: 0, width: 0, height: 0 };
  a = b[0].wm();
  for (var c = 1; c < b.length; c++) {
    var e = b[c].wm();
    e.Mc.x < a.Mc.x && (a.Mc.x = e.Mc.x);
    e.hd.x > a.hd.x && (a.hd.x = e.hd.x);
    e.Mc.y < a.Mc.y && (a.Mc.y = e.Mc.y);
    e.hd.y > a.hd.y && (a.hd.y = e.hd.y);
  }
  return {
    x: a.Mc.x,
    y: a.Mc.y,
    width: a.hd.x - a.Mc.x,
    height: a.hd.y - a.Mc.y
  };
}
d.nt = function() {
  this.xb(!1);
  B.i.T(!0);
  for (var a = J(this, !0), b = 0, c = 0, e; (e = a[c]); c++) {
    var f = e.ka();
    e.moveBy(-f.x, b - f.y);
    Qi(e);
    b = e.ka().y + e.tb().height + 25;
  }
  B.i.T(!1);
  this.xb(!0);
};
d.yh = function(a) {
  function b(a) {
    if (a.Ob()) w = w.concat(Ja(a, !1));
    else {
      a = a.je(!1);
      for (var c = 0; c < a.length; c++) b(a[c]);
    }
  }
  function c() {
    B.i.T(h);
    var a = w.shift();
    a && (a.o ? (a.v(!1, !0), setTimeout(c, 10)) : c());
    B.i.T(!1);
  }
  if (!this.options.readOnly && !this.oe) {
    var e = [],
      f = J(this, !0),
      h = B.h.Ed(),
      k = this,
      l = {};
    l.text = B.g.UNDO;
    l.enabled = 0 < this.ug.length;
    l.sb = this.mo.bind(this, !1);
    e.push(l);
    l = {};
    l.text = B.g.REDO;
    l.enabled = 0 < this.$i.length;
    l.sb = this.mo.bind(this, !0);
    e.push(l);
    this.Xa &&
      ((l = {}),
      (l.text = B.g.CLEAN_UP),
      (l.enabled = 1 < f.length),
      (l.sb = this.nt.bind(this)),
      e.push(l));
    if (this.options.collapse) {
      for (var m = (l = !1), n = 0; n < f.length; n++)
        for (var p = f[n]; p; )
          p.isCollapsed() ? (l = !0) : (m = !0), (p = Ya(p));
      var r = function(a) {
        for (var b = 0, c = 0; c < f.length; c++)
          for (var e = f[c]; e; )
            setTimeout(e.hg.bind(e, a), b), (e = Ya(e)), (b += 10);
      };
      m = { enabled: m };
      m.text = B.g.COLLAPSE_ALL;
      m.sb = function() {
        r(!0);
      };
      e.push(m);
      l = { enabled: l };
      l.text = B.g.EXPAND_ALL;
      l.sb = function() {
        r(!1);
      };
      e.push(l);
    }
    var w = [];
    for (n = 0; n < f.length; n++) b(f[n]);
    l = {
      text:
        1 == w.length
          ? B.g.DELETE_BLOCK
          : B.g.DELETE_X_BLOCKS.replace("%1", String(w.length)),
      enabled: 0 < w.length,
      sb: function() {
        k.ib && k.ib.cancel();
        2 > w.length
          ? c()
          : B.confirm(B.g.DELETE_ALL_BLOCKS.replace("%1", w.length), function(
              a
            ) {
              a && c();
            });
      }
    };
    e.push(l);
    this.np && this.np(e);
    B.ca.show(a, e, this.s);
  }
};
d.Xr = function(a) {
  if ((a = ci(a))) {
    if (!this.options.Nd)
      throw "Existing toolbox is null.  Can't create new toolbox.";
    if (a.getElementsByTagName("category").length) {
      if (!this.V)
        throw "Existing toolbox has no categories.  Can't change mode.";
      this.options.Nd = a;
      this.V.dl(a);
      Ri(this.V);
    } else {
      if (!this.G) throw "Existing toolbox has categories.  Can't change mode.";
      this.options.Nd = a;
      this.G.show(a.childNodes);
    }
  } else if (this.options.Nd) throw "Can't nullify an existing toolbox.";
};
function Gf(a) {
  if (a.options.Gc) Gf(a.options.Gc);
  else {
    B.bf = a;
    document.activeElement && document.activeElement.blur();
    try {
      E(a).focus();
    } catch (b) {
      try {
        E(a).parentNode.setActive();
      } catch (c) {
        E(a).parentNode.focus();
      }
    }
  }
}
d.zoom = function(a, b, c) {
  var e = this.options.Hb.Hv,
    f = this.eb(),
    h = E(this).createSVGPoint();
  h.x = a;
  h.y = b;
  h = h.matrixTransform(this.Da.getCTM().inverse());
  a = h.x;
  b = h.y;
  h = this.Da;
  e = Math.pow(e, c);
  c = this.scale * e;
  c > this.options.Hb.Ti
    ? (e = this.options.Hb.Ti / this.scale)
    : c < this.options.Hb.Ui && (e = this.options.Hb.Ui / this.scale);
  this.scale != c &&
    (this.Xa &&
      ((a = h
        .getCTM()
        .translate(a * (1 - e), b * (1 - e))
        .scale(e)),
      (this.scrollX = a.e - f.Ta),
      (this.scrollY = a.f - f.bb)),
    this.setScale(c));
};
function Ei(a, b) {
  var c = a.eb();
  a.zoom(c.va / 2, c.Sa / 2, b);
}
d.setScale = function(a) {
  this.options.Hb.Ti && a > this.options.Hb.Ti
    ? (a = this.options.Hb.Ti)
    : this.options.Hb.Ui && a < this.options.Hb.Ui && (a = this.options.Hb.Ui);
  this.scale = a;
  this.Zc && this.Zc.update(this.scale);
  this.Xa ? this.Xa.resize() : this.translate(this.scrollX, this.scrollY);
  B.Bb(!1);
  this.G && this.G.zn();
};
function Si(a) {
  var b = 0,
    c = 0;
  a && ((b = a.Fc()), (c = a.Ug()));
  return { width: b, height: c };
}
function Ti(a) {
  var b = yi(a),
    c = a.scale;
  a = b.width * c;
  var e = b.height * c,
    f = b.x * c;
  b = b.y * c;
  return { left: f, top: b, right: f + a, bottom: b + e, width: a, height: e };
}
function Gi() {
  var a = Si(this.V),
    b = Si(this.G),
    c = B.Tr(E(this));
  if (this.V)
    if (this.wa == B.Ie || this.wa == B.Bf) c.height -= a.height;
    else if (this.wa == B.He || this.wa == B.wd) c.width -= a.width;
  if (this.Xa) {
    var e = Ti(this);
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
  } else e = Ti(this);
  f = 0;
  this.V && this.wa == B.He && (f = a.width);
  h = 0;
  this.V && this.wa == B.Ie && (h = a.height);
  return {
    Wb: e.height,
    oc: e.width,
    nc: e.top,
    Bc: e.left,
    Sa: c.height,
    va: c.width,
    Vd: -this.scrollY,
    gb: -this.scrollX,
    bb: h,
    Ta: f,
    wA: a.width,
    vA: a.height,
    gk: b.width,
    $p: b.height,
    wa: this.wa
  };
}
function Hi(a) {
  if (!this.Xa)
    throw "Attempt to set top level workspace scroll without scrollbars.";
  var b = this.eb();
  t(a.x) && (this.scrollX = -b.oc * a.x - b.Bc);
  t(a.y) && (this.scrollY = -b.Wb * a.y - b.nc);
  a = this.scrollX + b.Ta;
  b = this.scrollY + b.bb;
  this.translate(a, b);
  this.Zc && this.Zc.moveTo(a, b);
}
d.xb = function(a) {
  var b = !this.Fn && a;
  this.Fn = a;
  b && rf(this);
};
d.clear = function() {
  this.xb(!1);
  Fi.m.clear.call(this);
  this.xb(!0);
};
function ti(a, b) {
  a.Kf.CREATE_VARIABLE = b;
}
function Ui(a, b) {
  return (a = a.Kf[b]) ? a : null;
}
function Vi(a, b) {
  return (a = a.Bh[b]) ? a : null;
}
d.Gd = function(a) {
  var b =
      "mousedown" == a.type ||
      "touchstart" == a.type ||
      "pointerdown" == a.type,
    c = this.ib;
  return c
    ? b && c.qq
      ? (console.warn("tried to start the same gesture twice"),
        c.cancel(),
        null)
      : c
    : b
    ? (this.ib = new oi(a, this))
    : null;
};
Fi.prototype.setVisible = Fi.prototype.la;
function Wi(a) {
  Wi.m.constructor.call(this, null);
  this.qr = a;
}
y(Wi, Th);
d = Wi.prototype;
d.Hh = 0;
d.tj = 0;
d.pm = function(a) {
  B.h.A(
    "rect",
    { class: "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" },
    a
  );
  B.h.A(
    "path",
    {
      class: "blocklyIconSymbol",
      d:
        "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"
    },
    a
  );
  B.h.A("circle", { class: "blocklyIconShape", r: "2.7", cx: "8", cy: "8" }, a);
};
d.Km = function(a) {
  Mf(this.L) && Th.prototype.Km.call(this, a);
};
d.$h = function() {
  this.kj = B.h.A("svg", { x: ef, y: ef }, null);
  if (this.qr.length)
    for (var a = C("xml"), b = 0, c; (c = this.qr[b]); b++)
      a.appendChild(C("block", { type: c }));
  else a = null;
  a = {
    Nd: a,
    Gc: this.L.o,
    qd: this.L.o.options.qd,
    s: this.L.s,
    wa: this.L.s ? B.wd : B.He,
    Kd: !1,
    eb: this.fu.bind(this),
    nf: null
  };
  this.j = new Fi(a);
  this.j.Mi = !0;
  a = Ki(this.j, "g");
  b = this.j.O("blocklyMutatorBackground");
  b.insertBefore(a, this.j.Da);
  this.kj.appendChild(b);
  return this.kj;
};
d.Ee = function() {
  this.L.rc ||
    (Mf(this.L)
      ? this.cc && B.h.wb(this.cc, "blocklyIconGroupReadonly")
      : (this.la(!1), this.cc && B.h.Ua(this.cc, "blocklyIconGroupReadonly")));
  Th.prototype.Ee.call(this);
};
d.il = function() {
  var a = 2 * ef,
    b = this.j.Da.getBBox();
  var c = this.L.s ? -b.x : b.width + b.x;
  b = b.height + 3 * a;
  if (this.j.G) {
    var e = this.j.G.ke();
    b = Math.max(b, e.Wb + 20);
  }
  c += 3 * a;
  if (Math.abs(this.Hh - c) > a || Math.abs(this.tj - b) > a)
    (this.Hh = c),
      (this.tj = b),
      this.Pa.kf(c + a, b + a),
      this.kj.setAttribute("width", this.Hh),
      this.kj.setAttribute("height", this.tj);
  this.L.s &&
    this.j.Da.setAttribute("transform", "translate(" + this.Hh + ",0)");
  this.j.resize();
};
d.la = function(a) {
  if (a != this.U())
    if ((B.i.M(new Sa(this.L, "mutatorOpen", !a, a)), a)) {
      this.Pa = new bf(this.L.o, this.$h(), this.L.ed, this.ah, null, null);
      lf(this.Pa, this.L.id);
      if ((a = this.j.options.Nd))
        this.j.G.$(this.j), this.j.G.show(a.childNodes);
      this.ue = this.L.Wj(this.j);
      a = Ja(this.ue, !1);
      for (var b = 0, c; (c = a[b]); b++) c.Y();
      this.ue.jg(!1);
      this.ue.Qn(!1);
      this.j.G ? ((a = 2 * this.j.G.ia), (b = this.j.G.aa + a)) : (b = a = 16);
      this.L.s && (b = -b);
      this.ue.moveBy(b, a);
      if (this.L.zr) {
        var e = this;
        this.L.zr(this.ue);
        this.ul = function() {
          e.L.zr(e.ue);
        };
        this.L.o.lc(this.ul);
      }
      this.il();
      this.j.lc(this.cw.bind(this));
      this.De();
    } else
      (this.kj = null),
        this.j.v(),
        (this.ue = this.j = null),
        this.Pa.v(),
        (this.Pa = null),
        (this.tj = this.Hh = 0),
        this.ul && (this.L.o.gf(this.ul), (this.ul = null));
};
d.cw = function() {
  if (!this.j.lb())
    for (var a = J(this.j, !1), b = 0, c; (c = a[b]); b++) {
      var e = c.ka(),
        f = c.tb();
      20 > e.y + f.height && c.moveBy(0, 20 - f.height - e.y);
    }
  if (this.ue.o == this.j) {
    B.i.T(!0);
    c = this.L;
    a = (a = c.ad()) && B.D.pc(a);
    b = c.P;
    c.P = !1;
    c.Qj(this.ue);
    c.P = b;
    c.Ue();
    b = (b = c.ad()) && B.D.pc(b);
    if (a != b) {
      B.i.M(new B.i.ic(c, "mutation", null, a, b));
      var h = B.i.$b();
      setTimeout(function() {
        B.i.T(h);
        c.Vb();
        B.i.T(!1);
      }, B.yj);
    }
    c.P && c.Y();
    this.j.lb() || this.il();
    B.i.T(!1);
  }
};
d.fu = function() {
  return { Sa: this.tj, va: this.Hh, bb: 0, Ta: 0 };
};
d.v = function() {
  this.L.qe = null;
  Th.prototype.v.call(this);
};
g.Blockly || (g.Blockly = {});
g.Blockly.Mutator || (g.Blockly.Mutator = {});
g.Blockly.Mutator.reconnect = function(a, b, c) {
  if (!a || !a.w.o) return !1;
  c = fb(b, c).connection;
  var e = D(a);
  return (e && e != b) || c.zb == a
    ? !1
    : (c.isConnected() && c.disconnect(), c.connect(a), !0);
};
B.ma = {};
B.ma.Dl = {};
B.ma.register = function(a, b) {
  if (!q(a) || ib(a)) throw Error('Error: Invalid extension name "' + a + '"');
  if (B.ma.Dl[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if (!x(b)) throw Error('Error: Extension "' + a + '" must be a function');
  B.ma.Dl[a] = b;
};
B.ma.pA = function(a, b) {
  if (!ha(b)) throw Error('Error: Mixin "' + a + '" must be a object');
  B.ma.register(a, function() {
    Xi(this, b);
  });
};
B.ma.qA = function(a, b, c, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  B.ma.$o(f, b.Ne, "domToMutation");
  B.ma.$o(f, b.ad, "mutationToDom");
  var h = B.ma.bp(b, f);
  if (c && !x(c)) throw Error('Extension "' + a + '" is not a function');
  B.ma.register(a, function() {
    h && this.Dr(new Wi(e));
    Xi(this, b);
    c && c.apply(this);
  });
};
B.ma.apply = function(a, b, c) {
  var e = B.ma.Dl[a];
  if (!x(e)) throw Error('Error: Extension "' + a + '" not found.');
  if (c) B.ma.kt(a, b);
  else var f = B.ma.zm(b);
  e.apply(b);
  if (c) B.ma.ht('Error after applying mutator "' + a + '": ', b);
  else if (!B.ma.$u(f, b))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
B.ma.$o = function(a, b, c) {
  if (!b) throw Error(a + 'missing required property "' + c + '"');
  if ("function" != typeof b)
    throw Error(a + '" required property "' + c + '" must be a function');
};
B.ma.kt = function(a, b) {
  if (B.ma.zm(b).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        b.id
    );
};
B.ma.bp = function(a, b) {
  var c = void 0 !== a.Qj,
    e = void 0 !== a.Wj;
  if (c && e) {
    if ("function" != typeof a.Qj)
      throw Error(b + "compose must be a function.");
    if ("function" != typeof a.Wj)
      throw Error(b + "decompose must be a function.");
    return !0;
  }
  if (c || e)
    throw Error(b + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
B.ma.ht = function(a, b) {
  if ("function" != typeof b.Ne)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof b.ad)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  B.ma.bp(b, a);
};
B.ma.zm = function(a) {
  var b = [];
  void 0 !== a.Ne && b.push(a.Ne);
  void 0 !== a.ad && b.push(a.ad);
  void 0 !== a.Qj && b.push(a.Qj);
  void 0 !== a.Wj && b.push(a.Wj);
  return b;
};
B.ma.$u = function(a, b) {
  b = B.ma.zm(b);
  if (b.length != a.length) return !1;
  for (var c = 0; c < b.length; c++) if (a[c] != b[c]) return !1;
  return !0;
};
B.ma.Wz = function(a, b) {
  var c = [];
  "object" == typeof document &&
    B.h.yr(function() {
      for (var a in b) B.h.ap(b[a]);
    });
  return function() {
    this.type &&
      -1 === c.indexOf(this.type) &&
      (B.ma.jt(this, a, b), c.push(this.type));
    this.dd(
      function() {
        var e = Pe(this, a),
          f = b[e];
        null == f
          ? -1 === c.indexOf(this.type) &&
            ((e = "No tooltip mapping for value " + e + " of field " + a),
            null != this.type && (e += " of block type " + this.type),
            console.warn(e + "."))
          : (f = B.h.Sb(f));
        return f;
      }.bind(this)
    );
  };
};
B.ma.jt = function(a, b, c) {
  var e = bb(a, b);
  if (!x(e.Wf)) {
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
B.ma.Xz = function(a, b) {
  "object" == typeof document &&
    B.h.yr(function() {
      B.h.ap(a);
    });
  return function() {
    this.dd(
      function() {
        var c = bb(this, b);
        return B.h.Sb(a).replace("%1", c ? c.vb() : "");
      }.bind(this)
    );
  };
};
B.ma.Wt = function() {
  this.Vv = this.Lc;
  this.dd(
    function() {
      var a = this.getParent();
      return (a && Yi(a) && a.Lc) || this.Vv;
    }.bind(this)
  );
};
B.ma.register("parent_tooltip_when_inline", B.ma.Wt);
function Zi(a, b) {
  this.oa = new Jc(0, 17.5);
  this.fp = b;
  this.setValue(a);
}
y(Zi, cg);
Zi.Z = function(a) {
  var b = B.h.Sb(a.text);
  return new Zi(b, a["class"]);
};
d = Zi.prototype;
d.zf = !1;
d.$ = function() {
  this.ta ||
    ((this.ta = B.h.A(
      "text",
      { class: "blocklyText", y: this.oa.height - 5 },
      null
    )),
    this.fp && B.h.Ua(this.ta, this.fp),
    this.Ea || (this.ta.style.display = "none"),
    this.w.N().appendChild(this.ta),
    (this.ta.Lc = this.w),
    B.B.Df(this.ta),
    this.Qd());
};
d.v = function() {
  F(this.ta);
  this.ta = null;
};
d.N = function() {
  return this.ta;
};
d.dd = function(a) {
  this.ta.Lc = a;
};
eg("field_label", Zi);
function $i(a, b, c, e) {
  if (a != B.Wd && !b)
    throw "Value inputs and statement inputs must have non-empty name.";
  this.type = a;
  this.name = b;
  this.w = c;
  this.connection = e;
  this.Na = [];
}
d = $i.prototype;
d.align = B.Ih;
d.Ea = !0;
function aj(a, b, c) {
  bj(a, a.Na.length, b, c);
  return a;
}
function bj(a, b, c, e) {
  if (0 > b || b > a.Na.length) throw Error("index " + b + " out of bounds.");
  if (!c && !e) return b;
  q(c) && (c = new Zi(c));
  c.Xn(a.w);
  a.w.P && c.$();
  c.name = e;
  c.un && (b = bj(a, b, c.un));
  a.Na.splice(b, 0, c);
  ++b;
  c.fo && (b = bj(a, b, c.fo));
  a.w.P && (a.w.Y(), a.w.Vb());
  return b;
}
d.U = function() {
  return this.Ea;
};
d.la = function(a) {
  var b = [];
  if (this.Ea == a) return b;
  for (
    var c = (this.Ea = a) ? "block" : "none", e = 0, f;
    (f = this.Na[e]);
    e++
  )
    f.la(a);
  if (this.connection) {
    if (a) b = Bd(this.connection);
    else if (((e = this.connection), Cd(e, !0), e.zb))
      for (e = Ja(D(e), !1), f = 0; f < e.length; f++) {
        for (var h = e[f], k = h.Fd(!0), l = 0; l < k.length; l++) Cd(k[l], !0);
        h = Jd(h);
        for (l = 0; l < h.length; l++) h[l].la(!1);
      }
    if ((e = D(this.connection))) (e.N().style.display = c), a || (e.P = !1);
  }
  return b;
};
d.vh = function(a) {
  if (!this.connection) throw "This input does not have a connection.";
  this.connection.vh(a);
};
d.$ = function() {
  if (this.w.o.P) for (var a = 0; a < this.Na.length; a++) this.Na[a].$();
};
d.v = function() {
  for (var a = 0, b; (b = this.Na[a]); a++) b.v();
  this.connection && this.connection.v();
  this.w = null;
};
function Xh(a) {
  Xh.m.constructor.call(this, a);
  Uh(this);
  this.ra = {};
}
y(Xh, Th);
d = Xh.prototype;
d.jp = !1;
d.pm = function(a) {
  B.h.A(
    "path",
    {
      class: "blocklyIconShape",
      d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    },
    a
  );
  B.h.A(
    "path",
    {
      class: "blocklyIconSymbol",
      d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
    },
    a
  );
  B.h.A(
    "rect",
    { class: "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" },
    a
  );
};
d.la = function(a) {
  if (a != this.U())
    if ((B.i.M(new Sa(this.L, "warningOpen", !a, a)), a)) {
      var b = this.vb();
      a = B.h.A(
        "text",
        { class: "blocklyText blocklyBubbleText", y: ef },
        null
      );
      b = b.split("\n");
      for (var c = 0; c < b.length; c++)
        B.h
          .A("tspan", { dy: "1em", x: ef }, a)
          .appendChild(document.createTextNode(b[c]));
      this.Pa = new bf(this.L.o, a, this.L.ed, this.ah, null, null);
      lf(this.Pa, this.L.id);
      if (this.L.s) {
        b = a.getBBox().width;
        c = 0;
        for (var e; (e = a.childNodes[c]); c++)
          e.setAttribute("text-anchor", "end"), e.setAttribute("x", b + ef);
      }
      this.De();
      a = this.Pa.Mf();
      this.Pa.kf(a.width, a.height);
    } else this.Pa.v(), (this.Pa = null);
};
d.yb = function(a, b) {
  this.ra[b] != a &&
    (a ? (this.ra[b] = a) : delete this.ra[b],
    this.U() && (this.la(!1), this.la(!0)));
};
d.vb = function() {
  var a = [],
    b;
  for (b in this.ra) a.push(this.ra[b]);
  return a.join("\n");
};
d.v = function() {
  this.L.Oc = null;
  Th.prototype.v.call(this);
};
function $e(a, b, c) {
  "undefined" !== typeof cj.prototype[b] &&
    console.warn(
      'FUTURE ERROR: Block prototypeName "' +
        b +
        '" conflicts with Blockly.Generator members. Registering Generators for this block type will incur errors.\nThis name will be DISALLOWED (throwing an error) in future versions of Blockly.'
    );
  this.id = c && !Xa(a, c) ? c : B.h.Ed();
  a.Rl[this.id] = this;
  this.X = this.R = this.S = null;
  this.W = [];
  this.We = void 0;
  this.disabled = !1;
  this.Lc = "";
  this.contextMenu = !0;
  this.df = null;
  this.ae = [];
  this.Wp = this.Wi = this.ci = !0;
  this.zd = this.Wa = !1;
  this.Ha = null;
  this.Pc = new A(0, 0);
  this.o = a;
  this.rc = a.oe;
  this.s = a.s;
  if (b) {
    this.type = b;
    b = B.$a[b];
    for (var e in b) this[e] = b[e];
  }
  a.Ch.push(this);
  x(this.$) && this.$();
  this.Lu = this.We;
  if (B.i.isEnabled()) {
    (a = B.i.$b()) || B.i.T(!0);
    try {
      B.i.M(new B.i.zj(this));
    } finally {
      a || B.i.T(!1);
    }
  }
  if (x(this.onchange)) {
    if ((a = this.onchange) && !x(a))
      throw Error("onchange must be a function.");
    this.Xi && this.o.gf(this.Xi);
    if ((this.onchange = a)) (this.Xi = a.bind(this)), this.o.lc(this.Xi);
  }
}
d = $e.prototype;
d.data = null;
d.Ad = "#000000";
d.v = function(a) {
  if (this.o) {
    this.Xi && this.o.gf(this.Xi);
    eb(this, a);
    B.i.isEnabled() && B.i.M(new B.i.gs(this));
    B.i.disable();
    try {
      this.o && (Ye(this.o, this), delete this.o.Rl[this.id], (this.o = null));
      B.selected == this && (B.selected = null);
      for (var b = this.ae.length - 1; 0 <= b; b--) this.ae[b].v(!1);
      b = 0;
      for (var c; (c = this.W[b]); b++) c.v();
      this.W.length = 0;
      var e = this.Fd(!0);
      for (b = 0; b < e.length; b++) {
        var f = e[b];
        f.isConnected() && f.disconnect();
        e[b].v();
      }
    } finally {
      B.i.enable();
    }
  }
};
d.Sf = function() {
  for (var a = 0, b; (b = this.W[a]); a++)
    for (var c = 0, e; (e = b.Na[c]); c++) e.Sf && e.Sf();
};
function eb(a, b) {
  if (a.S) a.S.isConnected() && a.S.disconnect();
  else if (a.X) {
    var c = null;
    a.X.isConnected() && ((c = a.X.zb), a.X.disconnect());
    var e = Ya(a);
    b && e && ((a = a.R.zb), a.disconnect(), c && jd(c, a) && c.connect(a));
  }
}
d.Fd = function() {
  var a = [];
  this.S && a.push(this.S);
  this.X && a.push(this.X);
  this.R && a.push(this.R);
  for (var b = 0, c; (c = this.W[b]); b++) c.connection && a.push(c.connection);
  return a;
};
d.Vb = function() {
  console.warn(
    "Not expected to reach this bumpNeighbours_ function. The BlockSvg function for bumpNeighbours_ was expected to be called instead."
  );
};
d.getParent = function() {
  return this.df;
};
function dj(a) {
  do {
    var b = a;
    a = a.getParent();
    if (!a) return null;
  } while (Ya(a) == b);
  return a;
}
function Ya(a) {
  return a.R && D(a.R);
}
function td(a) {
  var b = a;
  do (a = b), (b = a.df);
  while (b);
  return a;
}
d.je = function(a) {
  if (!a) return this.ae;
  a = [];
  for (var b = 0, c; (c = this.W[b]); b++)
    c.connection && (c = D(c.connection)) && a.push(c);
  (b = Ya(this)) && a.push(b);
  return a;
};
d.kg = function(a) {
  if (a != this.df) {
    if (this.df) {
      xa(this.df.ae, this);
      if (this.X && this.X.isConnected())
        throw "Still connected to previous block.";
      if (this.S && this.S.isConnected())
        throw "Still connected to parent block.";
      this.df = null;
    } else Ye(this.o, this);
    (this.df = a) ? a.ae.push(this) : this.o.Ch.push(this);
  }
};
function Ja(a, b) {
  var c = [a];
  a = a.je(b);
  for (var e, f = 0; (e = a[f]); f++) c.push.apply(c, Ja(e, b));
  return c;
}
d.Ob = function() {
  return this.ci && !this.Wa && !(this.o && this.o.options.readOnly);
};
d.Qn = function(a) {
  this.ci = a;
};
d.Md = function() {
  return this.Wi && !this.Wa && !(this.o && this.o.options.readOnly);
};
d.jg = function(a) {
  this.Wi = a;
};
d.Wn = function(a) {
  this.Wa = a;
};
function Mf(a) {
  return a.Wp && !(a.o && a.o.options.readOnly);
}
d.Rn = function(a) {
  this.Wp = a;
  a = 0;
  for (var b; (b = this.W[a]); a++)
    for (var c = 0, e; (e = b.Na[c]); c++) e.Ee();
};
function zi(a, b) {
  if (!b && a.isCollapsed()) {
    if ((a.S && Cd(a.S, b), a.X && Cd(a.X, b), a.R)) {
      Cd(a.R, b);
      var c = D(a.R);
      c && zi(c, b);
    }
  } else {
    a = a.Fd(!0);
    for (var e = 0; (c = a[e]); e++) Cd(c, b), nd(c) && (c = D(c)) && zi(c, b);
  }
}
d.dd = function(a) {
  this.Lc = a;
};
d.ve = function(a) {
  var b = q(a) ? B.h.Sb(a) : a,
    c = Number(b);
  if (!isNaN(c) && 0 <= c && 360 >= c) this.Ad = B.uq(c);
  else if (q(b) && /^#[0-9a-fA-F]{6}$/.test(b)) this.Ad = b;
  else
    throw ((c = 'Invalid colour: "' + b + '"'),
    a != b && (c += ' (from "' + a + '")'),
    c);
};
function bb(a, b) {
  for (var c = 0, e; (e = a.W[c]); c++)
    for (var f = 0, h; (h = e.Na[f]); f++) if (h.name === b) return h;
  return null;
}
function Qe(a) {
  for (var b = [], c = 0, e; (e = a.W[c]); c++)
    for (var f = 0, h; (h = e.Na[f]); f++)
      h.qh() && (h = a.o.me(h.getValue())) && b.push(h);
  return b;
}
function Pe(a, b) {
  return (a = bb(a, b)) ? a.getValue() : null;
}
d.lg = function(a, b) {
  a
    ? (void 0 === b && (b = null),
      this.X || (this.X = this.Ri(B.Ge)),
      this.X.vh(b))
    : this.X && (this.X.v(), (this.X = null));
};
d.xh = function(a, b) {
  a
    ? (void 0 === b && (b = null),
      this.R || (this.R = this.Ri(B.Ka)),
      this.R.vh(b))
    : this.R && (this.R.v(), (this.R = null));
};
d.Tn = function(a, b) {
  a
    ? (void 0 === b && (b = null),
      this.S || (this.S = this.Ri(B.Fg)),
      this.S.vh(b))
    : this.S && (this.S.v(), (this.S = null));
};
d.wh = function(a) {
  this.We != a &&
    (B.i.M(new B.i.ic(this, "inline", null, this.We, a)), (this.We = a));
};
function Yi(a) {
  if (void 0 != a.We) return a.We;
  for (var b = 1; b < a.W.length; b++)
    if (a.W[b - 1].type == B.Wd && a.W[b].type == B.Wd) return !1;
  for (b = 1; b < a.W.length; b++)
    if (a.W[b - 1].type == B.ab && a.W[b].type == B.Wd) return !0;
  return !1;
}
d.lf = function(a) {
  this.disabled != a &&
    (B.i.M(new B.i.ic(this, "disabled", null, this.disabled, a)),
    (this.disabled = a));
};
function ej(a) {
  for (a = dj(a); a; ) {
    if (a.disabled) return !0;
    a = dj(a);
  }
  return !1;
}
d.isCollapsed = function() {
  return this.zd;
};
d.hg = function(a) {
  this.zd != a &&
    (B.i.M(new B.i.ic(this, "collapsed", null, this.zd, a)), (this.zd = a));
};
d.toString = function(a, b) {
  var c = [],
    e = b || "?";
  if (this.zd) c.push(fb(this, "_TEMP_COLLAPSED_INPUT").Na[0].ra);
  else
    for (var f = 0, h; (h = this.W[f]); f++) {
      for (var k = 0, l; (l = h.Na[k]); k++)
        l instanceof Nh && !l.getValue() ? c.push(e) : c.push(l.vb());
      h.connection &&
        ((h = D(h.connection)) ? c.push(h.toString(void 0, b)) : c.push(e));
    }
  c = kb(c.join(" ")) || "???";
  a && ((b = c), b.length > a && (b = b.substring(0, a - 3) + "..."), (c = b));
  return c;
};
function fj(a, b) {
  return a.Xd(B.Wd, b || "");
}
function gj(a, b) {
  var c = b.type ? 'Block "' + b.type + '": ' : "";
  if ("colour" in b)
    if (void 0 === b.colour) console.warn(c + "Undefined color value.");
    else {
      var e = b.colour;
      try {
        a.ve(e);
      } catch (v) {
        console.warn(c + "Illegal color value: ", e);
      }
    }
  for (e = 0; void 0 !== b["message" + e]; ) {
    for (
      var f = a,
        h = b["args" + e] || [],
        k = b["lastDummyAlign" + e],
        l = B.h.Tv(b["message" + e]),
        m = [],
        n = 0,
        p = [],
        r = 0;
      r < l.length;
      r++
    ) {
      var w = l[r];
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
        hb(p[p.length - 1].type, "field_")) &&
      ((r = { type: "input_dummy" }), k && (r.align = k), p.push(r));
    k = { LEFT: B.Ih, RIGHT: B.wj, CENTRE: B.vj };
    h = [];
    for (r = 0; r < p.length; r++)
      if (((m = p[r]), "string" == typeof m)) h.push([m, void 0]);
      else {
        l = w = null;
        do
          if (((n = !1), "string" == typeof m)) w = new Zi(m);
          else
            switch (m.type) {
              case "input_value":
                l = f.Xd(B.ab, m.name);
                break;
              case "input_statement":
                l = f.Xd(B.Ka, m.name);
                break;
              case "input_dummy":
                l = fj(f, m.name);
                break;
              default:
                (w = (w = dg[m.type]) ? w.Z(m) : null),
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
          m.check && l.vh(m.check);
          m.align && ((n = l), (n.align = k[m.align]), n.w.P && n.w.Y());
          for (m = 0; m < h.length; m++) aj(l, h[m][0], h[m][1]);
          h.length = 0;
        }
      }
    e++;
  }
  void 0 !== b.inputsInline && a.wh(b.inputsInline);
  void 0 !== b.output && a.Tn(!0, b.output);
  void 0 !== b.previousStatement && a.lg(!0, b.previousStatement);
  void 0 !== b.nextStatement && a.xh(!0, b.nextStatement);
  void 0 !== b.tooltip && ((e = b.tooltip), (e = B.h.Sb(e)), a.dd(e));
  void 0 !== b.enableContextMenu &&
    ((e = b.enableContextMenu), (a.contextMenu = !!e));
  void 0 !== b.helpUrl && ((e = b.helpUrl), (e = B.h.Sb(e)), (a.$g = e));
  q(b.extensions) &&
    (console.warn(
      c +
        "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        b.type +
        "' block."
    ),
    (b.extensions = [b.extensions]));
  void 0 !== b.mutator && B.ma.apply(b.mutator, a, !0);
  if (Array.isArray(b.extensions))
    for (b = b.extensions, e = 0; e < b.length; ++e) B.ma.apply(b[e], a, !1);
}
function Xi(a, b) {
  if (aa(void 0)) throw Error("opt_disableCheck must be a boolean if provided");
  var c = [],
    e;
  for (e in b) void 0 !== a[e] && c.push(e);
  if (c.length)
    throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  for (var f in b) a[f] = b[f];
}
d.Xd = function(a, b) {
  var c = null;
  if (a == B.ab || a == B.Ka) c = this.Ri(a);
  a = new $i(a, b, this, c);
  this.W.push(a);
  return a;
};
d.An = function(a) {
  for (var b = 0, c; (c = this.W[b]); b++)
    if (c.name == a) {
      c.connection &&
        c.connection.isConnected() &&
        ((c.connection.Rd = null), (a = D(c.connection)), a.Wa ? a.v() : eb(a));
      c.v();
      this.W.splice(b, 1);
      break;
    }
};
function fb(a, b) {
  for (var c = 0, e; (e = a.W[c]); c++) if (e.name == b) return e;
  return null;
}
function hj(a, b) {
  return (a = fb(a, b)) && a.connection && D(a.connection);
}
d.lk = function() {
  return this.Ha || "";
};
d.cj = function(a) {
  this.Ha != a &&
    (B.i.M(new B.i.ic(this, "comment", null, this.Ha, a || "")), (this.Ha = a));
};
d.tl = function() {};
d.Dr = function() {};
d.ka = function() {
  return this.Pc;
};
d.moveBy = function(a, b) {
  var c = new B.i.Jh(this);
  this.Pc.translate(a, b);
  c.te();
  B.i.M(c);
};
d.Ri = function(a) {
  return new hd(this, a);
};
function qd(a) {
  var b = a.type ? '"' + a.type + '" block' : "Block";
  a.id && (b += ' (id="' + a.id + '")');
  return b;
}
B.ca = {};
B.ca.Uj = null;
B.ca.Yp = null;
B.ca.show = function(a, b, c) {
  B.H.show(B.ca, c, null);
  if (b.length) {
    var e = B.ca.dl(b, c);
    we(e, "action", B.ca.Ca);
    B.ca.vc(e, a, c);
    setTimeout(function() {
      e.F().focus();
    }, 1);
    B.ca.Uj = null;
  } else B.ca.Ca();
};
B.ca.dl = function(a, b) {
  var c = new Mh();
  c.xe(b);
  for (var e = 0, f; (f = a[e]); e++) {
    var h = new Ih(f.text);
    h.xe(b);
    c.Rh(h, !0);
    h.fj(f.enabled);
    f.enabled &&
      (we(h, "action", f.sb),
      (h.Xg = function() {
        this.dispatchEvent("action");
      }));
  }
  return c;
};
B.ca.vc = function(a, b, c) {
  var e = B.h.Dm();
  b = {
    top: b.clientY + e.top,
    bottom: b.clientY + e.top,
    left: b.clientX + e.left,
    right: b.clientX + e.left
  };
  B.ca.ai(a);
  var f = B.h.Eh.le(a);
  c && B.h.Eh.Ro(e, b, f);
  B.H.sn(e, b, f, c);
  a.F().focus();
};
B.ca.ai = function(a) {
  a.Y(B.H.ba);
  var b = a.F();
  B.h.Ua(b, "blocklyContextMenu");
  B.J(b, "contextmenu", null, B.h.dv);
  a.Ij = !0;
  a.we(!0);
};
B.ca.Ca = function() {
  B.H.Ci(B.ca);
  B.ca.Uj = null;
  B.ca.Yp && B.Aa(B.ca.Yp);
};
B.ca.Zz = function(a, b) {
  return function() {
    B.i.disable();
    try {
      var c = B.D.Ng(b, a.o),
        e = a.ka();
      e.x = a.s ? e.x - B.zc : e.x + B.zc;
      e.y += 2 * B.zc;
      c.moveBy(e.x, e.y);
    } finally {
      B.i.enable();
    }
    B.i.isEnabled() && !c.Wa && B.i.M(new B.i.zj(c));
    c.select();
  };
};
B.ca.$s = function(a) {
  var b = Ja(a, !1).length,
    c = Ya(a);
  c && (b -= Ja(c, !1).length);
  return {
    text:
      1 == b ? B.g.DELETE_BLOCK : B.g.DELETE_X_BLOCKS.replace("%1", String(b)),
    enabled: !0,
    sb: function() {
      B.i.T(!0);
      a.v(!0, !0);
      B.i.T(!1);
    }
  };
};
B.ca.bt = function(a) {
  return {
    enabled: !(x(a.$g) ? !a.$g() : !a.$g),
    text: B.g.HELP,
    sb: function() {
      var b = x(a.$g) ? a.$g() : a.$g;
      b && window.open(b);
    }
  };
};
B.ca.at = function(a) {
  var b = !0;
  Ja(a, !1).length > af(a.o) && (b = !1);
  return {
    text: B.g.DUPLICATE_BLOCK,
    enabled: b,
    sb: function() {
      B.Vp(a);
    }
  };
};
B.ca.Zs = function(a) {
  var b = { enabled: !G };
  a.Ha
    ? ((b.text = B.g.REMOVE_COMMENT),
      (b.sb = function() {
        a.cj(null);
      }))
    : ((b.text = B.g.ADD_COMMENT),
      (b.sb = function() {
        a.cj("");
      }));
  return b;
};
B.ca.rt = function(a) {
  return {
    text: B.g.fz,
    enabled: !0,
    sb: function() {
      B.i.T(!0);
      a.v(!0, !0);
      B.i.T(!1);
    }
  };
};
B.ca.st = function(a) {
  return {
    text: B.g.lx,
    enabled: !0,
    sb: function() {
      B.Vp(a);
    }
  };
};
B.ca.xA = function(a, b) {
  var c = { enabled: !0 };
  c.text = B.g.hw;
  c.sb = function() {
    var c = new of(a, B.g.Sz, 100, 100);
    if (!a.Nm)
      for (var f = a.u; f; ) {
        if (
          -1 !=
          (" " + (f.getAttribute("class") || "") + " ").indexOf(
            " injectionDiv "
          )
        ) {
          a.Nm = f;
          break;
        }
        f = f.parentNode;
      }
    f = a.Nm.getBoundingClientRect();
    f = new A(b.clientX - f.left, b.clientY - f.top);
    var h = B.h.pk(a.Da);
    f = Ga(f, h).scale(1 / a.scale);
    c.moveBy(f.x, f.y);
    a.P && (c.Ue(), c.Y(!1), c.select());
  };
  return c;
};
function P(a, b, c) {
  this.u = B.h.A("g", {}, null);
  this.u.Ce = "";
  this.lj = B.h.A(
    "path",
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.u
  );
  this.ed = B.h.A("path", { class: "blocklyPath" }, this.u);
  this.qf = B.h.A("path", { class: "blocklyPathLight" }, this.u);
  this.ed.Lc = this;
  this.P = !1;
  this.Ud = B.h.Xe() && !!a.cb;
  B.B.Df(this.ed);
  P.m.constructor.call(this, a, b, c);
  this.u.dataset && (this.u.dataset.id = this.id);
}
y(P, $e);
d = P.prototype;
d.height = 0;
d.width = 0;
d.xc = null;
d.Ue = function() {
  for (var a = 0, b; (b = this.W[a]); a++) b.$();
  b = Jd(this);
  for (a = 0; a < b.length; a++) Uh(b[a]);
  this.De();
  pf(this);
  this.o.options.readOnly ||
    this.rm ||
    B.J(this.N(), "mousedown", this, this.se);
  this.rm = !0;
  this.N().parentNode || this.o.Da.appendChild(this.N());
};
d.select = function() {
  if (this.Wa && this.getParent()) this.getParent().select();
  else if (B.selected != this) {
    var a = null;
    if (B.selected) {
      a = B.selected.id;
      B.i.disable();
      try {
        B.selected.uf();
      } finally {
        B.i.enable();
      }
    }
    a = new Sa(null, "selected", a, this.id);
    a.hc = this.o.id;
    B.i.M(a);
    B.selected = this;
    this.Hg();
  }
};
d.uf = function() {
  if (B.selected == this) {
    var a = new Sa(null, "selected", this.id, null);
    a.hc = this.o.id;
    B.i.M(a);
    B.selected = null;
    this.eg();
  }
};
d.qe = null;
d.Ha = null;
d.Oc = null;
function Jd(a) {
  var b = [];
  a.qe && b.push(a.qe);
  a.Ha && b.push(a.Ha);
  a.Oc && b.push(a.Oc);
  return b;
}
d.kg = function(a) {
  var b = this.df;
  if (a != b) {
    jg();
    P.m.kg.call(this, a);
    kg();
    var c = this.N();
    if (!this.o.Pm && c) {
      var e = this.ka();
      a
        ? (a.N().appendChild(c),
          (a = this.ka()),
          yd(this, a.x - e.x, a.y - e.y))
        : b &&
          B.selected != this &&
          (this.o.Da.appendChild(c), this.translate(e.x, e.y));
    }
  }
};
d.ka = function() {
  var a = 0,
    b = 0,
    c = this.Ud ? this.o.cb.$b() : null,
    e = this.N();
  if (e) {
    do {
      var f = B.h.ac(e);
      a += f.x;
      b += f.y;
      this.Ud &&
        this.o.cb.Bd.firstChild == e &&
        ((f = this.o.cb.wk()), (a += f.x), (b += f.y));
      e = e.parentNode;
    } while (e && e != this.o.Da && e != c);
  }
  return new A(a, b);
};
d.moveBy = function(a, b) {
  var c = B.i.isEnabled();
  if (c) var e = new B.i.Jh(this);
  var f = this.ka();
  this.translate(f.x + a, f.y + b);
  yd(this, a, b);
  c && (e.te(), B.i.M(e));
  rf(this.o);
};
d.translate = function(a, b) {
  this.N().setAttribute("transform", "translate(" + a + "," + b + ")");
};
d.Wk = function() {
  if (this.Ud) {
    var a = this.ka();
    B.h.removeAttribute(this.N(), "transform");
    this.o.cb.Be(a.x, a.y);
    sf(this.o.cb, this.N());
  }
};
d.Mq = function(a) {
  this.Ud && (this.translate(a.x, a.y), this.o.cb.Vh(this.o.Da));
};
d.Vk = function(a) {
  this.Ud
    ? this.o.cb.Be(a.x, a.y)
    : ((this.u.Ce = "translate(" + a.x + "," + a.y + ")"),
      this.u.setAttribute("transform", this.u.Ce + this.u.ng));
};
function Qi(a) {
  if (a.o && !a.o.lb() && !a.getParent() && !a.rc) {
    var b = a.o.Zc;
    if (b && b.Kv) {
      var c = b.bo,
        e = c / 2,
        f = a.ka();
      b = Math.round((f.x - e) / c) * c + e - f.x;
      c = Math.round((f.y - e) / c) * c + e - f.y;
      b = Math.round(b);
      c = Math.round(c);
      (0 == b && 0 == c) || a.moveBy(b, c);
    }
  }
}
d.wm = function() {
  var a = this.ka(),
    b = this.S ? O : 0,
    c = this.tb();
  if (this.s) {
    var e = new A(a.x - (c.width - b), a.y);
    a = new A(a.x + b, a.y + c.height);
  } else
    (e = new A(a.x - b, a.y)), (a = new A(a.x + c.width - b, a.y + c.height));
  return { Mc: e, hd: a };
};
d.hg = function(a) {
  if (this.zd != a) {
    for (var b = [], c = 0, e; (e = this.W[c]); c++) b.push.apply(b, e.la(!a));
    if (a) {
      e = Jd(this);
      for (c = 0; c < e.length; c++) e[c].la(!1);
      c = this.toString(B.hs);
      aj(fj(this, "_TEMP_COLLAPSED_INPUT"), c).$();
    } else this.An("_TEMP_COLLAPSED_INPUT"), this.tl(null);
    P.m.hg.call(this, a);
    b.length || (b[0] = this);
    if (this.P) for (c = 0; (a = b[c]); c++) a.Y();
  }
};
d.io = function(a, b) {
  for (var c = [], e = 0, f; (f = this.W[e]); e++) {
    for (var h = 0, k; (k = f.Na[h]); h++) k instanceof ij && c.push(k);
    f.connection && (f = D(f.connection)) && c.push(f);
  }
  a = c.indexOf(a);
  -1 == a && (a = b ? -1 : c.length);
  (c = c[b ? a + 1 : a - 1])
    ? c instanceof cg
      ? c.pf()
      : c.io(null, b)
    : (c = this.getParent()) && c.io(this, b);
};
d.se = function(a) {
  var b = this.o && this.o.Gd(a);
  b && (Kf(b, this), (b.uc = a));
};
d.yh = function(a) {
  if (!this.o.options.readOnly && this.contextMenu) {
    var b = this,
      c = [];
    if (this.Ob() && this.Md() && !b.rc) {
      c.push(B.ca.at(b));
      Mf(this) && !this.zd && this.o.options.tt && c.push(B.ca.Zs(b));
      if (!this.zd)
        for (var e = 1; e < this.W.length; e++)
          if (this.W[e - 1].type != B.Ka && this.W[e].type != B.Ka) {
            e = { enabled: !0 };
            var f = Yi(this);
            e.text = f ? B.g.EXTERNAL_INPUTS : B.g.INLINE_INPUTS;
            e.sb = function() {
              b.wh(!f);
            };
            c.push(e);
            break;
          }
      this.o.options.collapse &&
        (this.zd
          ? ((e = { enabled: !0 }),
            (e.text = B.g.EXPAND_BLOCK),
            (e.sb = function() {
              b.hg(!1);
            }),
            c.push(e))
          : ((e = { enabled: !0 }),
            (e.text = B.g.COLLAPSE_BLOCK),
            (e.sb = function() {
              b.hg(!0);
            }),
            c.push(e)));
      this.o.options.disable &&
        ((e = {
          text: this.disabled ? B.g.ENABLE_BLOCK : B.g.DISABLE_BLOCK,
          enabled: !ej(this),
          sb: function() {
            b.lf(!b.disabled);
          }
        }),
        c.push(e));
      c.push(B.ca.$s(b));
    }
    c.push(B.ca.bt(b));
    this.Gt && this.Gt(c);
    B.ca.show(a, c, this.s);
    B.ca.Uj = this;
  }
};
function yd(a, b, c) {
  if (a.P) {
    for (var e = a.Fd(!1), f = 0; f < e.length; f++) e[f].moveBy(b, c);
    e = Jd(a);
    for (f = 0; f < e.length; f++) Vh(e[f]);
    for (f = 0; f < a.ae.length; f++) yd(a.ae[f], b, c);
  }
}
d.mf = function(a) {
  if (a) {
    var b = this.N();
    b.Ce = "";
    b.ng = "";
    B.dk = B.dk.concat(this.Fd(!0));
    B.h.Ua(this.u, "blocklyDragging");
  } else (B.dk = []), B.h.wb(this.u, "blocklyDragging");
  for (b = 0; b < this.ae.length; b++) this.ae[b].mf(a);
};
d.jg = function(a) {
  P.m.jg.call(this, a);
  pf(this);
};
d.Rn = function(a) {
  P.m.Rn.call(this, a);
  a = Jd(this);
  for (var b = 0; b < a.length; b++) a[b].Ee();
};
d.Wn = function(a) {
  P.m.Wn.call(this, a);
  this.De();
};
d.N = function() {
  return this.u;
};
d.v = function(a, b) {
  if (this.o) {
    B.B.Ca();
    jg();
    var c = this.o;
    if (B.selected == this) {
      this.uf();
      var e = this.o;
      e.ib && e.ib.cancel();
    }
    B.ca.Uj == this && B.ca.Ca();
    b && this.P && (eb(this, a), B.ya.Qt(this));
    this.P = !1;
    if (this.xc) {
      for (var f in this.xc) clearTimeout(this.xc[f]);
      this.xc = null;
    }
    B.i.disable();
    try {
      var h = Jd(this);
      for (b = 0; b < h.length; b++) h[b].v();
    } finally {
      B.i.enable();
    }
    P.m.v.call(this, a);
    F(this.u);
    rf(c);
    this.lj = this.qf = this.ed = this.u = null;
    kg();
  }
};
d.De = function() {
  if (!this.disabled) {
    var a = this.Ad,
      b = jj(a);
    if (this.Wa)
      (b = kj([255, 255, 255], b, 0.6)),
        (a = lj(b)),
        (this.qf.style.display = "none"),
        this.lj.setAttribute("fill", a);
    else {
      this.qf.style.display = "";
      var c = lj(kj([255, 255, 255], b, 0.3));
      b = lj(kj([0, 0, 0], b, 0.2));
      this.qf.setAttribute("stroke", c);
      this.lj.setAttribute("fill", b);
    }
    this.ed.setAttribute("fill", a);
    a = Jd(this);
    for (c = 0; c < a.length; c++) a[c].De();
    for (a = 0; (c = this.W[a]); a++) {
      b = 0;
      for (var e; (e = c.Na[b]); b++) e.li();
    }
  }
};
function Ed(a) {
  a.disabled || ej(a)
    ? B.h.Ua(a.u, "blocklyDisabled") &&
      a.ed.setAttribute("fill", "url(#" + a.o.options.di + ")")
    : B.h.wb(a.u, "blocklyDisabled") && a.De();
  a = a.je(!1);
  for (var b = 0, c; (c = a[b]); b++) Ed(c);
}
d.lk = function() {
  return this.Ha
    ? this.Ha.vb()
        .replace(/\s+$/, "")
        .replace(/ +\n/g, "\n")
    : "";
};
d.cj = function(a) {
  var b = !1;
  q(a)
    ? (this.Ha || ((this.Ha = new Wh(this)), (b = !0)), this.Ha.yb(a))
    : this.Ha && (this.Ha.v(), (b = !0));
  b && this.P && (this.Y(), this.Vb());
};
d.tl = function(a, b) {
  this.xc || (this.xc = Object.create(null));
  var c = b || "";
  if (c) this.xc[c] && (clearTimeout(this.xc[c]), delete this.xc[c]);
  else for (var e in this.xc) clearTimeout(this.xc[e]), delete this.xc[e];
  if (this.o.lb()) {
    var f = this;
    this.xc[c] = setTimeout(function() {
      f.o && (delete f.xc[c], f.tl(a, c));
    }, 100);
  } else {
    this.rc && (a = null);
    b = dj(this);
    for (e = null; b; ) b.isCollapsed() && (e = b), (b = dj(b));
    e && e.tl(a, "collapsed " + this.id + " " + c);
    b = !1;
    q(a)
      ? (this.Oc || ((this.Oc = new Xh(this)), (b = !0)), this.Oc.yb(a, c))
      : this.Oc && !c
      ? (this.Oc.v(), (b = !0))
      : this.Oc &&
        ((b = this.Oc.vb()),
        this.Oc.yb("", c),
        (e = this.Oc.vb()) || this.Oc.v(),
        (b = b != e));
    b && this.P && (this.Y(), this.Vb());
  }
};
d.Dr = function(a) {
  this.qe && this.qe !== a && this.qe.v();
  a && ((a.L = this), (this.qe = a), Uh(a));
};
d.lf = function(a) {
  this.disabled != a && (P.m.lf.call(this, a), this.P && Ed(this));
};
d.Fb = function(a) {
  this.P &&
    (a
      ? (this.ed.setAttribute("filter", "url(#" + this.o.options.Xp + ")"),
        (this.qf.style.display = "none"))
      : (B.h.removeAttribute(this.ed, "filter"), delete this.qf.style.display));
};
d.Hg = function() {
  B.h.Ua(this.u, "blocklySelected");
};
d.eg = function() {
  B.h.wb(this.u, "blocklySelected");
};
d.ej = function(a) {
  a
    ? B.h.Ua(this.u, "blocklyDraggingDelete")
    : B.h.wb(this.u, "blocklyDraggingDelete");
};
d.ve = function(a) {
  P.m.ve.call(this, a);
  this.P && this.De();
};
function Qd(a) {
  do {
    var b = a.N();
    b.parentNode.appendChild(b);
    a = a.getParent();
  } while (a);
}
d.lg = function(a, b) {
  P.m.lg.call(this, a, b);
  this.P && (this.Y(), this.Vb());
};
d.xh = function(a, b) {
  P.m.xh.call(this, a, b);
  this.P && (this.Y(), this.Vb());
};
d.Tn = function(a, b) {
  P.m.Tn.call(this, a, b);
  this.P && (this.Y(), this.Vb());
};
d.wh = function(a) {
  P.m.wh.call(this, a);
  this.P && (this.Y(), this.Vb());
};
d.An = function(a, b) {
  P.m.An.call(this, a, b);
  this.P && (this.Y(), this.Vb());
};
d.Xd = function(a, b) {
  a = P.m.Xd.call(this, a, b);
  this.P && (this.Y(), this.Vb());
  return a;
};
d.Fd = function(a) {
  var b = [];
  if (a || this.P)
    if (
      (this.S && b.push(this.S),
      this.X && b.push(this.X),
      this.R && b.push(this.R),
      a || !this.zd)
    ) {
      a = 0;
      for (var c; (c = this.W[a]); a++) c.connection && b.push(c.connection);
    }
  return b;
};
d.Ri = function(a) {
  return new rd(this, a);
};
d.Vb = function() {
  if (this.o && !this.o.lb()) {
    var a = td(this);
    if (!a.rc)
      for (var b = this.Fd(!1), c = 0, e; (e = b[c]); c++) {
        e.isConnected() && nd(e) && D(e).Vb();
        for (var f = e.Pq(B.zc), h = 0, k; (k = f[h]); h++)
          (e.isConnected() && k.isConnected()) ||
            (td(k.w) != a && (nd(e) ? kd(k, e) : kd(e, k)));
      }
  }
};
function Rd(a) {
  var b = B.i.$b();
  setTimeout(function() {
    B.i.T(b);
    Qi(a);
    B.i.T(!1);
  }, B.yj / 2);
  setTimeout(function() {
    B.i.T(b);
    a.Vb();
    B.i.T(!1);
  }, B.yj);
}
var O = 8,
  mj = 7.5 * (1 - Math.SQRT1_2) + 0.5,
  nj = 8.5 * (1 - Math.SQRT1_2) - 0.5,
  Ad = "v 5 c 0,10 -" + O + ",-8 -" + O + ",7.5 s " + O + ",-2.5 " + O + ",7.5",
  oj =
    "v 6.5 m -" +
    0.97 * O +
    ",3 q -" +
    0.05 * O +
    ",10 " +
    0.3 * O +
    ",9.5 m " +
    0.67 * O +
    ",-1.9 v 1.4",
  pj = "m " + mj + "," + mj,
  qj = "a 8,8 0 0,0 " + (-nj - 0.5) + "," + (8 - nj),
  rj = "a 8.5,8.5 0 0,0 " + (8 - nj) + "," + (nj + 0.5);
P.prototype.tb = function() {
  var a = this.height,
    b = this.width,
    c = Ya(this);
  c
    ? ((c = c.tb()), (a += c.height - 4), (b = Math.max(b, c.width)))
    : this.R || this.S || (a += 2);
  return { height: a, width: b };
};
P.prototype.Y = function(a) {
  jg();
  this.P = !0;
  var b = 10;
  this.s && (b = -b);
  for (var c = Jd(this), e = 0; e < c.length; e++) {
    var f = c[e];
    if (f.jp && f.L.isCollapsed()) f.cc.setAttribute("display", "none");
    else {
      f.cc.setAttribute("display", "block");
      var h = f.Jl;
      f.L.s && (b -= h);
      f.cc.setAttribute("transform", "translate(" + b + ",5)");
      Vh(f);
      b = f.L.s ? b - 10 : b + (h + 10);
    }
  }
  var k = (b += this.s ? 10 : -10),
    l = this.W;
  c = [];
  c.qb = k + 20;
  if (this.X || this.R) c.qb = Math.max(c.qb, 40);
  f = e = 0;
  for (
    var m = (h = !1),
      n = !1,
      p = void 0,
      r = Yi(this) && !this.isCollapsed(),
      w = 0,
      v;
    (v = l[w]);
    w++
  )
    if (v.U()) {
      if (r && p && p != B.Ka && v.type != B.Ka) var z = c[c.length - 1];
      else
        (p = v.type),
          (z = []),
          (z.type = r && v.type != B.Ka ? -1 : v.type),
          (z.height = 0),
          c.push(z);
      z.push(v);
      v.hf = 25;
      v.Cb = r && v.type == B.ab ? O + 12.5 : 0;
      if (v.connection && v.connection.isConnected()) {
        var Ea = D(v.connection).tb();
        v.hf = Math.max(v.hf, Ea.height);
        v.Cb = Math.max(v.Cb, Ea.width);
      }
      r || w != l.length - 1
        ? !r && v.type == B.ab && l[w + 1] && l[w + 1].type == B.Ka && v.hf--
        : v.hf--;
      z.height = Math.max(z.height, v.hf);
      v.ld = 0;
      1 == c.length && (v.ld += this.s ? -k : k);
      Ea = !1;
      for (var Rc = 0, Pa; (Pa = v.Na[Rc]); Rc++) {
        0 != Rc && (v.ld += 10);
        var Gd = Pa.le();
        Pa.Cb = Gd.width;
        Pa.hl = Ea && Pa.zf ? 10 : 0;
        v.ld += Pa.Cb + Pa.hl;
        z.height = Math.max(z.height, Gd.height);
        Ea = Pa.zf;
      }
      -1 != z.type &&
        (z.type == B.Ka
          ? ((m = !0), (f = Math.max(f, v.ld)))
          : (z.type == B.ab ? (h = !0) : z.type == B.Wd && (n = !0),
            (e = Math.max(e, v.ld))));
    }
  for (k = 0; (z = c[k]); k++)
    if (((z.Ur = !1), -1 == z.type))
      for (l = 0; (v = z[l]); l++)
        if (v.type == B.ab) {
          z.height += 10;
          z.Ur = !0;
          break;
        }
  c.xl = 20 + f;
  m && (c.qb = Math.max(c.qb, c.xl + 30));
  h
    ? (c.qb = Math.max(c.qb, e + 20 + O))
    : n && (c.qb = Math.max(c.qb, e + 20));
  c.Du = h;
  c.lA = m;
  c.kA = n;
  f = b;
  this.Nr = !1;
  this.height = 0;
  this.S
    ? (this.co = this.vl = !0)
    : ((this.co = this.vl = !1),
      this.X && (b = D(this.X)) && Ya(b) == this && (this.vl = !0),
      Ya(this) && (this.co = !0));
  h = [];
  m = [];
  b = [];
  e = [];
  n = c.qb;
  this.vl
    ? (h.push("m 0,0"),
      b.push("m 0.5,0.5"),
      this.Nr &&
        (h.push("c 30,-15 70,-15 100,0"),
        b.push(
          this.s
            ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7"
            : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"
        )))
    : (h.push("m 0,8"),
      b.push(this.s ? pj : "m 0.5,7.5"),
      h.push("A 8,8 0 0,1 8,0"),
      b.push("A 7.5,7.5 0 0,1 8,0.5"));
  this.X &&
    (h.push("H", 15),
    b.push("H", 15),
    h.push("l 6,4 3,0 6,-4"),
    b.push("l 6,4 3,0 6,-4"),
    wd(this.X, this.s ? -30 : 30, 0));
  h.push("H", n);
  b.push("H", n - 0.5);
  this.width = n;
  for (v = n = 0; (z = c[v]); v++) {
    p = 10;
    0 == v && (p += this.s ? -f : f);
    b.push("M", c.qb - 0.5 + "," + (n + 0.5));
    if (this.isCollapsed())
      (k = z[0]),
        (r = n),
        sj(this, k.Na, p, r),
        h.push("l 8,0 0,4 8,4 -16,8 8,4"),
        b.push("h 8"),
        (k = z.height - 20),
        h.push("v", k),
        this.s &&
          (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"),
          b.push("v", k - 0.7)),
        (this.width += 15);
    else if (-1 == z.type) {
      for (l = 0; (k = z[l]); l++)
        (r = n),
          z.Ur && (r += 5),
          (p = sj(this, k.Na, p, r)),
          k.type != B.Wd && (p += k.Cb + 10),
          k.type == B.ab &&
            (m.push("M", p - 10 + "," + (n + 5)),
            m.push("h", O - 2 - k.Cb),
            m.push(Ad),
            m.push("v", k.hf + 1 - 20),
            m.push("h", k.Cb + 2 - O),
            m.push("z"),
            this.s
              ? (e.push("M", p - 10 - 2.5 + O - k.Cb + "," + (n + 5 + 0.5)),
                e.push(oj),
                e.push("v", k.hf - 20 + 2.5),
                e.push("h", k.Cb - O + 2))
              : (e.push("M", p - 10 + 0.5 + "," + (n + 5 + 0.5)),
                e.push("v", k.hf + 1),
                e.push("h", O - 2 - k.Cb),
                e.push("M", p - k.Cb - 10 + 0.9 + "," + (n + 5 + 20 - 0.7)),
                e.push("l", 0.46 * O + ",-2.1")),
            (r = this.s ? -p - O + 10 + k.Cb + 1 : p + O - 10 - k.Cb - 1),
            (w = n + 5 + 1),
            wd(k.connection, r, w));
      p = Math.max(p, c.qb);
      this.width = Math.max(this.width, p);
      h.push("H", p);
      b.push("H", p - 0.5);
      h.push("v", z.height);
      this.s && b.push("v", z.height - 1);
    } else
      z.type == B.ab
        ? ((k = z[0]),
          (r = n),
          k.align != B.Ih &&
            ((l = c.qb - k.ld - O - 20),
            k.align == B.wj ? (p += l) : k.align == B.vj && (p += l / 2)),
          sj(this, k.Na, p, r),
          h.push(Ad),
          (l = z.height - 20),
          h.push("v", l),
          this.s
            ? (b.push(oj), b.push("v", l + 0.5))
            : (b.push("M", c.qb - 5 + "," + (n + 20 - 0.7)),
              b.push("l", 0.46 * O + ",-2.1")),
          (r = this.s ? -c.qb - 1 : c.qb + 1),
          wd(k.connection, r, n),
          k.connection.isConnected() &&
            (this.width = Math.max(
              this.width,
              c.qb + D(k.connection).tb().width - O + 1
            )))
        : z.type == B.Wd
        ? ((k = z[0]),
          (r = n),
          k.align != B.Ih &&
            ((l = c.qb - k.ld - 20),
            c.Du && (l -= O),
            k.align == B.wj ? (p += l) : k.align == B.vj && (p += l / 2)),
          sj(this, k.Na, p, r),
          h.push("v", z.height),
          this.s && b.push("v", z.height - 1))
        : z.type == B.Ka &&
          ((k = z[0]),
          0 == v && (h.push("v", 10), this.s && b.push("v", 9), (n += 10)),
          (r = n),
          k.align != B.Ih &&
            ((l = c.xl - k.ld - 20),
            k.align == B.wj ? (p += l) : k.align == B.vj && (p += l / 2)),
          sj(this, k.Na, p, r),
          (p = c.xl + 30),
          h.push("H", p),
          h.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"),
          h.push("v", z.height - 16),
          h.push("a 8,8 0 0,0 8,8"),
          h.push("H", c.qb),
          this.s
            ? (b.push("M", p - 30 + nj + "," + (n + nj)),
              b.push(qj),
              b.push("v", z.height - 16),
              b.push("a 8.5,8.5 0 0,0 8.5,8.5"))
            : (b.push("M", p - 30 + nj + "," + (n + z.height - nj)),
              b.push(rj)),
          b.push("H", c.qb - 0.5),
          (r = this.s ? -p : p + 1),
          wd(k.connection, r, n + 1),
          k.connection.isConnected() &&
            (this.width = Math.max(
              this.width,
              c.xl + D(k.connection).tb().width
            )),
          v == c.length - 1 || c[v + 1].type == B.Ka) &&
          (h.push("v", 10), this.s && b.push("v", 9), (n += 10));
    n += z.height;
  }
  c.length || ((n = 25), h.push("V", n), this.s && b.push("V", n - 1));
  c = n;
  this.height += c + 1;
  this.R &&
    (h.push("H", 30 + (this.s ? 0.5 : -0.5) + " l -6,4 -3,0 -6,-4"),
    wd(this.R, this.s ? -30 : 30, c + 1),
    (this.height += 4));
  this.co
    ? (h.push("H 0"), this.s || b.push("M", "0.5," + (c - 0.5)))
    : (h.push("H", 8),
      h.push("a", "8,8 0 0,1 -8,-8"),
      this.s ||
        (b.push("M", mj + "," + (c - mj)),
        b.push("A", "7.5,7.5 0 0,1 0.5," + (c - 8))));
  this.S
    ? (wd(this.S, 0, 0),
      h.push("V", 20),
      h.push(
        "c 0,-10 -" + O + ",8 -" + O + ",-7.5 s " + O + ",2.5 " + O + ",-7.5"
      ),
      this.s
        ? (b.push("M", -0.25 * O + ",8.4"), b.push("l", -0.45 * O + ",-2.1"))
        : (b.push("V", 18.5),
          b.push("m", -0.92 * O + ",-0.5 q " + -0.19 * O + ",-5.5 0,-11"),
          b.push("m", 0.92 * O + ",1 V 0.5 H 1")),
      (this.width += O))
    : this.s || (this.vl ? b.push("V", 0.5) : b.push("V", 8));
  h.push("z");
  c = h.join(" ") + "\n" + m.join(" ");
  this.ed.setAttribute("d", c);
  this.lj.setAttribute("d", c);
  c = b.join(" ") + "\n" + e.join(" ");
  this.qf.setAttribute("d", c);
  this.s &&
    (this.ed.setAttribute("transform", "scale(-1 1)"),
    this.qf.setAttribute("transform", "scale(-1 1)"),
    this.lj.setAttribute("transform", "translate(1,1) scale(-1 1)"));
  c = this.ka();
  this.X && vd(this.X, c);
  this.S && vd(this.S, c);
  for (b = 0; b < this.W.length; b++)
    if ((e = this.W[b].connection)) vd(e, c), e.isConnected() && xd(e);
  this.R && (vd(this.R, c), this.R.isConnected() && xd(this.R));
  !1 !== a && ((a = this.getParent()) ? a.Y(!0) : rf(this.o));
  kg();
};
function sj(a, b, c, e) {
  e += 5;
  a.s && (c = -c);
  for (var f = 0, h; (h = b[f]); f++) {
    var k = h.N();
    k &&
      (a.s
        ? ((c -= h.hl + h.Cb),
          k.setAttribute("transform", "translate(" + c + "," + e + ")"),
          h.Cb && (c -= 10))
        : (k.setAttribute(
            "transform",
            "translate(" + (c + h.hl) + "," + e + ")"
          ),
          h.Cb && (c += h.hl + h.Cb + 10)));
  }
  return a.s ? -c : c;
}
B.g = {};
function ij(a, b) {
  ij.m.constructor.call(this, a, b);
}
y(ij, cg);
ij.Z = function(a) {
  var b = B.h.Sb(a.text);
  b = new ij(b, a["class"]);
  "boolean" === typeof a.spellcheck && (b.Ir = a.spellcheck);
  return b;
};
var tj = null;
d = ij.prototype;
d.Bj = "text";
d.Ir = !0;
d.v = function() {
  B.H.Ci(this);
  ij.m.v.call(this);
};
d.setValue = function(a) {
  if (null !== a) {
    if (this.w) {
      var b = cb(this, a);
      null !== b && (a = b);
    }
    cg.prototype.setValue.call(this, a);
  }
};
d.yb = function(a) {
  null !== a &&
    ((a = String(a)),
    a !== this.ra &&
      (this.w &&
        B.i.isEnabled() &&
        B.i.M(new B.i.ic(this.w, "field", this.name, this.ra, a)),
      cg.prototype.yb.call(this, a)));
};
d.pf = function(a) {
  this.j = this.w.o;
  a = a || !1;
  if (!a && (Mb || Ob || Qb)) uj(this);
  else {
    B.H.show(this, this.w.s, vj(this));
    var b = B.H.ba,
      c = C("INPUT", "blocklyHtmlInput");
    c.setAttribute("spellcheck", this.Ir);
    var e = 11 * this.j.scale + "pt";
    b.style.fontSize = e;
    c.style.fontSize = e;
    tj = c;
    b.appendChild(c);
    c.value = c.defaultValue = this.ra;
    c.Uq = null;
    wj(this);
    this.jl();
    a || (c.focus(), c.select());
    c.mv = B.J(c, "keydown", this, this.kv);
    c.pv = B.J(c, "keyup", this, this.Xq);
    c.ov = B.J(c, "keypress", this, this.Xq);
    c.er = this.jl.bind(this);
    this.j.lc(c.er);
  }
};
function uj(a) {
  B.prompt(B.g.CHANGE_VALUE_TITLE, a.ra, function(b) {
    a.w && (b = cb(a, b));
    a.setValue(b);
  });
}
d.kv = function(a) {
  var b = tj;
  13 == a.keyCode
    ? B.H.Ca()
    : 27 == a.keyCode
    ? ((b.value = b.defaultValue), B.H.Ca())
    : 9 == a.keyCode &&
      (B.H.Ca(), this.w.io(this, !a.shiftKey), a.preventDefault());
};
d.Xq = function() {
  var a = tj,
    b = a.value;
  b !== a.Uq ? ((a.Uq = b), this.setValue(b), wj(this)) : I && this.w.Y();
  this.jl();
  B.sg(this.w.o);
};
function wj(a) {
  var b = !0,
    c = tj;
  a.w && (b = cb(a, c.value));
  null === b
    ? B.h.Ua(c, "blocklyInvalidInput")
    : B.h.wb(c, "blocklyInvalidInput");
}
d.jl = function() {
  var a = B.H.ba,
    b = lg(this);
  a.style.width = b.right - b.left + "px";
  a.style.height = b.bottom - b.top + "px";
  b = new A(this.w.s ? b.right - a.offsetWidth : b.left, b.top);
  b.y += 1;
  H && B.H.ba.style.top && (--b.x, --b.y);
  I && (b.y -= 3);
  a.style.left = b.x + "px";
  a.style.top = b.y + "px";
};
function vj(a) {
  return function() {
    var b = tj,
      c = tj,
      e = c.value;
    a.w &&
      ((e = cb(a, e)), null === e ? (e = c.defaultValue) : a.jv && a.jv(e));
    a.yb(e);
    a.w.P && a.w.Y();
    B.Aa(b.mv);
    B.Aa(b.pv);
    B.Aa(b.ov);
    a.j.gf(b.er);
    tj = null;
    B.i.T(!1);
    b = B.H.ba.style;
    b.width = "auto";
    b.height = "auto";
    b.fontSize = "";
  };
}
eg("field_input", ij);
function xj(a, b) {
  this.ho = B.h.A("tspan", {}, null);
  this.ho.appendChild(document.createTextNode("\u00b0"));
  a = a && !isNaN(a) ? String(a) : "0";
  xj.m.constructor.call(this, a, b);
}
y(xj, ij);
xj.Z = function(a) {
  return new xj(a.angle);
};
d = xj.prototype;
d.Qd = function() {
  this.Ea
    ? ((this.ta.textContent = hg(this)),
      this.w.s
        ? this.ta.insertBefore(this.ho, this.ta.firstChild)
        : this.ta.appendChild(this.ho),
      this.sj())
    : (this.oa.width = 0);
};
d.Lg = function() {
  var a = this;
  return function() {
    xj.m.Lg.call(a)();
    a.mi = null;
    a.hp && B.Aa(a.hp);
    a.Nq && B.Aa(a.Nq);
    a.Oq && B.Aa(a.Oq);
  };
};
d.pf = function() {
  xj.m.pf.call(this, Mb || Ob || Qb);
  var a = B.H.ba;
  if (a.firstChild) {
    a = B.h.A(
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
    var b = B.h.A(
      "circle",
      { cx: 50, cy: 50, r: 49, class: "blocklyAngleCircle" },
      a
    );
    this.mi = B.h.A("path", { class: "blocklyAngleGauge" }, a);
    this.Eq = B.h.A("line", { x1: 50, y1: 50, class: "blocklyAngleLine" }, a);
    for (var c = 0; 360 > c; c += 15)
      B.h.A(
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
    this.hp = B.rb(a, "click", this, B.H.Ca);
    this.Nq = B.rb(b, "mousemove", this, this.dr);
    this.Oq = B.rb(this.mi, "mousemove", this, this.dr);
    yj(this);
  }
};
d.dr = function(a) {
  var b = this.mi.ownerSVGElement.getBoundingClientRect(),
    c = a.clientX - b.left - 50;
  a = a.clientY - b.top - 50;
  b = Math.atan(-a / c);
  isNaN(b) ||
    ((b = (180 * b) / Math.PI),
    0 > c ? (b += 180) : 0 < a && (b += 360),
    (b = 15 * Math.round((b - 0) / 15)),
    (b = cb(this, b)),
    (tj.value = b),
    this.setValue(b),
    wj(this),
    this.jl());
};
d.yb = function(a) {
  xj.m.yb.call(this, a);
  this.ta && (yj(this), (this.oa.width = 0));
};
function yj(a) {
  if (a.mi) {
    var b = ((Number(a.vb()) + 0) * Math.PI) / 180,
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
    a.mi.setAttribute("d", c.join(""));
    a.Eq.setAttribute("x2", e);
    a.Eq.setAttribute("y2", f);
  }
}
d.Wl = function(a) {
  if (null === a) return null;
  a = parseFloat(a || 0);
  if (isNaN(a)) return null;
  a %= 360;
  0 > a && (a += 360);
  360 < a && (a -= 360);
  return String(a);
};
eg("field_angle", xj);
function zj(a, b) {
  zj.m.constructor.call(this, "", b);
  this.setValue(a);
}
y(zj, cg);
zj.Z = function(a) {
  return new zj(a.checked ? "TRUE" : "FALSE");
};
d = zj.prototype;
d.Bj = "default";
d.$ = function() {
  this.Ja ||
    (zj.m.$.call(this),
    (this.Lj = B.h.A(
      "text",
      { class: "blocklyText blocklyCheckbox", x: -3, y: 14 },
      this.Ja
    )),
    this.Lj.appendChild(document.createTextNode("\u2713")),
    (this.Lj.style.display = this.za ? "block" : "none"));
};
d.getValue = function() {
  return String(this.za).toUpperCase();
};
d.setValue = function(a) {
  a = "string" == typeof a ? "TRUE" == a.toUpperCase() : !!a;
  this.za !== a &&
    (this.w &&
      B.i.isEnabled() &&
      B.i.M(new B.i.ic(this.w, "field", this.name, this.za, a)),
    (this.za = a),
    this.Lj && (this.Lj.style.display = a ? "block" : "none"));
};
d.pf = function() {
  var a = !this.za;
  this.w && (a = cb(this, a));
  null !== a && this.setValue(String(a).toUpperCase());
};
eg("field_checkbox", zj);
var Aj = {
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
function Bj(a) {
  var b = {};
  a = String(a);
  var c = "#" == a.charAt(0) ? a : "#" + a;
  if (Cj.test(c)) return (b.Hm = Dj(c)), (b.type = "hex"), b;
  a: {
    var e = a.match(Ej);
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
  if (c.length) return (b.Hm = lj(c)), (b.type = "rgb"), b;
  if (Aj && (c = Aj[a.toLowerCase()])) return (b.Hm = c), (b.type = "named"), b;
  throw Error(a + " is not a valid color string");
}
var Fj = /#(.)(.)(.)/;
function Dj(a) {
  if (!Cj.test(a)) throw Error("'" + a + "' is not a valid hex color");
  4 == a.length && (a = a.replace(Fj, "#$1$1$2$2$3$3"));
  return a.toLowerCase();
}
function jj(a) {
  a = Dj(a);
  return [
    parseInt(a.substr(1, 2), 16),
    parseInt(a.substr(3, 2), 16),
    parseInt(a.substr(5, 2), 16)
  ];
}
function lj(a) {
  var b = a[0],
    c = a[1];
  a = a[2];
  b = Number(b);
  c = Number(c);
  a = Number(a);
  if (b != (b & 255) || c != (c & 255) || a != (a & 255))
    throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
  b = Gj(b.toString(16));
  c = Gj(c.toString(16));
  a = Gj(a.toString(16));
  return "#" + b + c + a;
}
var Cj = /^#(?:[0-9a-f]{3}){1,2}$/i,
  Ej = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Gj(a) {
  return 1 == a.length ? "0" + a : a;
}
function kj(a, b, c) {
  c = Math.min(Math.max(c, 0), 1);
  return [
    Math.round(c * a[0] + (1 - c) * b[0]),
    Math.round(c * a[1] + (1 - c) * b[1]),
    Math.round(c * a[2] + (1 - c) * b[2])
  ];
}
var Hj =
  "StopIteration" in g
    ? g.StopIteration
    : { message: "StopIteration", stack: "" };
function Ij() {}
Ij.prototype.next = function() {
  throw Hj;
};
Ij.prototype.Oo = function() {
  return this;
};
function Jj(a) {
  if (a instanceof Ij) return a;
  if ("function" == typeof a.Oo) return a.Oo();
  if (fa(a)) {
    var b = 0,
      c = new Ij();
    c.next = function() {
      for (;;) {
        if (b >= a.length) throw Hj;
        if (b in a) return a[b++];
        b++;
      }
    };
    return c;
  }
  throw Error("Not implemented");
}
function Kj(a) {
  try {
    return Jj(a).next();
  } catch (b) {
    if (b != Hj) throw b;
    return null;
  }
}
function Lj(a, b, c, e, f) {
  this.Hc = !!b;
  this.node = null;
  this.ye = 0;
  this.Pr = !1;
  this.qp = !c;
  a && this.setPosition(a, e);
  this.depth = void 0 != f ? f : this.ye || 0;
  this.Hc && (this.depth *= -1);
}
y(Lj, Ij);
Lj.prototype.setPosition = function(a, b, c) {
  if ((this.node = a))
    this.ye = t(b) ? b : 1 != this.node.nodeType ? 0 : this.Hc ? -1 : 1;
  t(c) && (this.depth = c);
};
Lj.prototype.clone = function() {
  return new Lj(this.node, this.Hc, !this.qp, this.ye, this.depth);
};
Lj.prototype.next = function() {
  if (this.Pr) {
    if (!this.node || (this.qp && 0 == this.depth)) throw Hj;
    var a = this.node;
    var b = this.Hc ? -1 : 1;
    if (this.ye == b) {
      var c = this.Hc ? a.lastChild : a.firstChild;
      c ? this.setPosition(c) : this.setPosition(a, -1 * b);
    } else
      (c = this.Hc ? a.previousSibling : a.nextSibling)
        ? this.setPosition(c)
        : this.setPosition(a.parentNode, -1 * b);
    this.depth += this.ye * (this.Hc ? -1 : 1);
  } else this.Pr = !0;
  a = this.node;
  if (!this.node) throw Hj;
  return a;
};
Lj.prototype.splice = function(a) {
  var b = this.node,
    c = this.Hc ? 1 : -1;
  this.ye == c &&
    ((this.ye = -1 * c), (this.depth += this.ye * (this.Hc ? -1 : 1)));
  this.Hc = !this.Hc;
  Lj.prototype.next.call(this);
  this.Hc = !this.Hc;
  c = fa(arguments[0]) ? arguments[0] : arguments;
  for (var e = c.length - 1; 0 <= e; e--) Yc(c[e], b);
  F(b);
};
function Mj(a, b, c, e) {
  Lj.call(this, a, b, c, null, e);
}
y(Mj, Lj);
Mj.prototype.next = function() {
  do Mj.m.next.call(this);
  while (-1 == this.ye);
  return this.node;
};
function Nj() {}
y(Nj, ah);
da(Nj);
var Oj = 0;
Nj.prototype.O = function(a) {
  var b = this.ni(a);
  a = a.Yb().O("DIV", b, Pj(this, a.qc(), a.le(), a.Yb()));
  Dg(a, "grid");
  return a;
};
function Pj(a, b, c, e) {
  for (var f = [], h = 0, k = 0; h < c.height; h++) {
    for (var l = [], m = 0; m < c.width; m++) {
      var n = b && b[k++];
      l.push(Qj(a, n, e));
    }
    f.push(Rj(a, l, e));
  }
  return a.sp(f, e);
}
Nj.prototype.sp = function(a, b) {
  a = b.O("TABLE", this.Ba() + "-table", b.O("TBODY", this.Ba() + "-body", a));
  a.cellSpacing = "0";
  a.cellPadding = "0";
  return a;
};
function Rj(a, b, c) {
  a = c.O("TR", a.Ba() + "-row", b);
  Dg(a, "row");
  return a;
}
function Qj(a, b, c) {
  a = c.O("TD", { class: a.Ba() + "-cell", id: a.Ba() + "-cell-" + Oj++ }, b);
  Dg(a, "gridcell");
  M(a, "selected", !1);
  if (!ed(a) && !Eg(a, "label")) {
    var e;
    b = new Mj(a);
    for (c = ""; !c && (e = Kj(b)); )
      1 == e.nodeType && (c = Eg(e, "label") || e.title);
    (e = c) && M(a, "label", e);
  }
  return a;
}
Nj.prototype.cd = function(a, b) {
  if (a) {
    var c = Nc(this.Ba() + "-body", a)[0];
    if (c) {
      var e = 0;
      ra(c.rows, function(a) {
        ra(a.cells, function(a) {
          Xc(a);
          if (b) {
            var c = b[e++];
            c && a.appendChild(c);
          }
        });
      });
      if (e < b.length) {
        for (
          var f = [], h = Kc(a), k = c.rows[0].cells.length;
          e < b.length;

        ) {
          var l = b[e++];
          f.push(Qj(this, l, h));
          f.length == k &&
            ((l = Rj(this, f, h)), c.appendChild(l), (f.length = 0));
        }
        if (0 < f.length) {
          for (; f.length < k; ) f.push(Qj(this, "", h));
          l = Rj(this, f, h);
          c.appendChild(l);
        }
      }
    }
    $f(a, !0, H);
  }
};
function Sj(a, b, c) {
  for (b = b.F(); c && 1 == c.nodeType && c != b; ) {
    if ("TD" == c.tagName && Rg(c, a.Ba() + "-cell")) return c.firstChild;
    c = c.parentNode;
  }
  return null;
}
Nj.prototype.Ba = function() {
  return "goog-palette";
};
function Tj(a) {
  pg.call(this);
  this.fh = [];
  Uj(this, a);
}
y(Tj, pg);
d = Tj.prototype;
d.Ya = null;
d.Ln = null;
d.fq = function(a) {
  return this.fh[a] || null;
};
function Uj(a, b) {
  b &&
    (ra(
      b,
      function(a) {
        this.bj(a, !1);
      },
      a
    ),
    Aa(a.fh, b));
}
d.removeItem = function(a) {
  a &&
    xa(this.fh, a) &&
    a == this.Ya &&
    ((this.Ya = null), this.dispatchEvent("select"));
};
d.Id = function() {
  return this.Ya;
};
d.Ic = function(a) {
  a != this.Ya && (this.bj(this.Ya, !1), (this.Ya = a), this.bj(a, !0));
  this.dispatchEvent("select");
};
d.ri = function() {
  var a = this.Ya;
  return a ? qa(this.fh, a) : -1;
};
d.gj = function(a) {
  this.Ic(this.fq(a));
};
d.clear = function() {
  var a = this.fh;
  if (!u(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
  a.length = 0;
  this.Ya = null;
};
d.Ia = function() {
  Tj.m.Ia.call(this);
  delete this.fh;
  this.Ya = null;
};
d.bj = function(a, b) {
  a &&
    ("function" == typeof this.Ln
      ? this.Ln(a, b)
      : "function" == typeof a.Un && a.Un(b));
};
function Vj(a, b, c) {
  N.call(this, a, b || Nj.Hd(), c);
  this.Pl &= -89;
  this.bi = new Wj();
  this.bi.ql(this);
  this.Sm = -1;
}
y(Vj, N);
d = Vj.prototype;
d.oa = null;
d.qa = -1;
d.Eb = null;
d.Ia = function() {
  Vj.m.Ia.call(this);
  this.Eb && (this.Eb.v(), (this.Eb = null));
  this.oa = null;
  this.bi.v();
};
d.ml = function(a) {
  Vj.m.ml.call(this, a);
  Xj(this);
  this.Eb
    ? (this.Eb.clear(), Uj(this.Eb, a))
    : ((this.Eb = new Tj(a)),
      (a = na(this.bj, this)),
      (this.Eb.Ln = a),
      vg(this).ha(this.Eb, "select", this.wu));
  this.qa = -1;
};
d.jk = function() {
  return "";
};
d.zi = function(a) {
  Vj.m.zi.call(this, a);
  var b = Sj(this.ea, this, a.target);
  (b && a.relatedTarget && Zc(b, a.relatedTarget)) ||
    (b != Yj(this) && Zj(this, b));
};
d.ne = function(a) {
  Vj.m.ne.call(this, a);
  this.za & 4 &&
    ((a = Sj(this.ea, this, a.target)), a != Yj(this) && Zj(this, a));
};
d.ef = function(a) {
  var b = Yj(this);
  return b
    ? (a &&
        (this.Id() ? "mouseup" != a.type || Sj(this.ea, this, a.target) : 1) &&
        this.Ic(b),
      Vj.m.ef.call(this, a))
    : !1;
};
d.$c = function(a) {
  var b = this.qc();
  b = b ? b.length : 0;
  var c = this.oa.width;
  if (0 == b || !this.isEnabled()) return !1;
  if (13 == a.keyCode || 32 == a.keyCode) return this.ef(a);
  if (36 == a.keyCode) return this.Tb(0), !0;
  if (35 == a.keyCode) return this.Tb(b - 1), !0;
  var e = 0 > this.qa ? this.ri() : this.qa;
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
d.wu = function() {};
d.le = function() {
  return this.oa;
};
d.rl = function(a) {
  if (this.F()) throw Error("Component already rendered");
  this.oa = t(a) ? new Jc(a, void 0) : a;
  Xj(this);
};
function Yj(a) {
  var b = a.qc();
  return b && b[a.qa];
}
d.Tb = function(a) {
  a != this.qa &&
    (ak(this, this.qa, !1),
    (this.Sm = this.qa),
    (this.qa = a),
    ak(this, a, !0),
    this.dispatchEvent("a"));
};
function Zj(a, b) {
  var c = a.qc();
  a.Tb(c && b ? qa(c, b) : -1);
}
d.ri = function() {
  return this.Eb ? this.Eb.ri() : -1;
};
d.Id = function() {
  return this.Eb ? this.Eb.Id() : null;
};
d.gj = function(a) {
  this.Eb && this.Eb.gj(a);
};
d.Ic = function(a) {
  this.Eb && this.Eb.Ic(a);
};
function ak(a, b, c) {
  if (a.F()) {
    var e = a.qc();
    if (e && 0 <= b && b < e.length) {
      var f = (f = Yj(a)) ? f.parentNode : null;
      a.bi.F() != f && (a.bi.K = f);
      f = a.bi;
      f.Fb(c);
      !!(f.za & 2) == c &&
        ((f = a.ea), (b = e[b])) &&
        ((b = b ? b.parentNode : null),
        (e = f.Ba() + "-cell-hover"),
        c ? Sg(b, e) : Ug(b, e),
        c
          ? M(a.K, "activedescendant", b.id)
          : b.id == Eg(a.K, "activedescendant") &&
            a.K.removeAttribute("aria-activedescendant"));
    }
  }
}
d.Fb = function(a) {
  a && -1 == this.qa ? this.Tb(-1 < this.Sm ? this.Sm : 0) : a || this.Tb(-1);
  Vj.m.Fb.call(this, a);
};
d.bj = function(a, b) {
  if (this.F() && a) {
    a = a.parentNode;
    var c = this.ea.Ba() + "-cell-selected";
    b ? Sg(a, c) : Ug(a, c);
    M(a, "selected", b);
  }
};
function Xj(a) {
  var b = a.qc();
  if (b)
    if (a.oa && a.oa.width) {
      if (
        ((b = Math.ceil(b.length / a.oa.width)),
        !t(a.oa.height) || a.oa.height < b)
      )
        a.oa.height = b;
    } else (b = Math.ceil(Math.sqrt(b.length))), (a.oa = new Jc(b, b));
  else a.oa = new Jc(0, 0);
}
function Wj() {
  N.call(this, null);
  this.qg |= 2;
}
y(Wj, N);
function bk(a, b, c) {
  this.Oj = a || [];
  Vj.call(this, null, b || Nj.Hd(), c);
  this.ll(this.Oj);
}
y(bk, Vj);
d = bk.prototype;
d.Zk = null;
d.Ok = null;
d.ll = function(a) {
  this.Oj = a;
  this.Zk = this.Ok = null;
  this.cd(ck(this));
};
d.Am = function() {
  var a = this.Id();
  if (a) {
    var b = a.style[xb()];
    if ("undefined" !== typeof b) a = b;
    else {
      b = a.style;
      var c = Pf["background-color"];
      if (!c) {
        var e = xb();
        c = e;
        void 0 === a.style[e] &&
          ((e =
            (I ? "Webkit" : H ? "Moz" : G ? "ms" : Kb ? "O" : null) + yb(e)),
          void 0 !== a.style[e] && (c = e));
        Pf["background-color"] = c;
      }
      a = b[c] || "";
    }
    return dk(a);
  }
  return null;
};
d.Vn = function(a) {
  a = dk(a);
  this.Zk ||
    (this.Zk = ta(this.Oj, function(a) {
      return dk(a);
    }));
  this.gj(a ? qa(this.Zk, a) : -1);
};
function ck(a) {
  return ta(
    a.Oj,
    function(a, c) {
      var b = this.Yb().O("DIV", {
        class: this.ea.Ba() + "-colorswatch",
        style: "background-color:" + a
      });
      b.title =
        this.Ok && this.Ok[c]
          ? this.Ok[c]
          : "#" == a.charAt(0)
          ? "RGB (" + jj(a).join(", ") + ")"
          : a;
      return b;
    },
    a
  );
}
function dk(a) {
  if (a)
    try {
      return Bj(a).Hm;
    } catch (b) {}
  return null;
}
function ek(a, b) {
  sg.call(this, a);
  this.Ga = b || null;
  vg(this).ha(this, "action", this.fv);
}
y(ek, sg);
d = ek.prototype;
d.Lf = !0;
d.ll = function(a) {
  this.Ga ? this.Ga.ll(a) : fk(this, a);
};
d.rl = function(a) {
  this.Ga || fk(this, []);
  this.Ga.rl(a);
};
d.le = function() {
  return this.Ga ? this.Ga.le() : null;
};
d.ri = function() {
  return this.Ga ? this.Ga.ri() : -1;
};
d.gj = function(a) {
  this.Ga && this.Ga.gj(a);
};
d.Am = function() {
  return this.Ga ? this.Ga.Am() : null;
};
d.Vn = function(a) {
  this.Ga && this.Ga.Vn(a);
};
d.pe = function() {
  return this.Lf;
};
d.we = function(a) {
  this.Lf = a;
  this.Ga && this.Ga.fc(32, a);
};
d.kb = function() {
  ek.m.kb.call(this);
  this.Ga && this.Ga.Y(this.F());
  this.F().unselectable = "on";
};
d.Ia = function() {
  ek.m.Ia.call(this);
  this.Ga && (this.Ga.v(), (this.Ga = null));
};
d.focus = function() {
  this.Ga && this.Ga.F().focus();
};
d.fv = function(a) {
  a.stopPropagation();
  this.dispatchEvent("change");
};
function fk(a, b) {
  b = new bk(b, null, a.Yb());
  b.rl(5);
  b.fc(32, a.Lf);
  a.Rh(b);
  a.Ga = b;
  a.sa && a.Ga.Y(a.F());
}
var gk = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(
  " "
);
function hk(a, b) {
  hk.m.constructor.call(this, a, b);
  this.yb("\u00a0\u00a0\u00a0");
}
var ik;
y(hk, cg);
hk.Z = function(a) {
  return new hk(a.colour);
};
d = hk.prototype;
d.qt = null;
d.kp = 0;
d.$ = function() {
  hk.m.$.call(this);
  this.Tc.style.fillOpacity = 1;
  this.setValue(this.getValue());
};
d.Bj = "default";
d.v = function() {
  B.H.Ci(this);
  hk.m.v.call(this);
};
d.getValue = function() {
  return this.Ad;
};
d.setValue = function(a) {
  this.w &&
    B.i.isEnabled() &&
    this.Ad != a &&
    B.i.M(new B.i.ic(this.w, "field", this.name, this.Ad, a));
  this.Ad = a;
  this.Tc && (this.Tc.style.fill = a);
};
d.vb = function() {
  var a = this.Ad,
    b = a.match(/^#(.)\1(.)\2(.)\3$/);
  b && (a = "#" + b[1] + b[2] + b[3]);
  return a;
};
d.setColumns = function(a) {
  this.kp = a;
  return this;
};
d.pf = function() {
  B.H.show(this, this.w.s, jk);
  var a = B.h.Dm(),
    b = lg(this),
    c = this.ai(),
    e = Wf(c.F());
  B.H.sn(a, b, e, this.w.s);
  var f = this;
  ik = we(c, "change", function(a) {
    a = a.target.Am() || "#000000";
    B.H.Ca();
    f.w && (a = cb(f, a));
    null !== a && f.setValue(a);
  });
};
d.ai = function() {
  var a = new ek();
  a.rl(this.kp || 7);
  a.ll(this.qt || gk);
  a.Y(B.H.ba);
  a.Vn(this.getValue());
  return a;
};
function jk() {
  ik && Fe(ik);
  B.i.T(!1);
}
eg("field_colour", hk);
function kk(a, b, c, e, f) {
  this.w = null;
  this.xa = Number(c);
  this.aa = Number(b);
  this.oa = new Jc(this.aa, this.xa + 10);
  this.ra = e || "";
  this.setValue(a);
  "function" == typeof f && (this.Xl = f);
}
y(kk, cg);
kk.Z = function(a) {
  var b = B.h.Sb(a.src),
    c = Number(B.h.Sb(a.width)),
    e = Number(B.h.Sb(a.height));
  a = B.h.Sb(a.alt);
  return new kk(b, c, e, a);
};
d = kk.prototype;
d.zf = !1;
d.$ = function() {
  this.Ja ||
    ((this.Ja = B.h.A("g", {}, null)),
    this.Ea || (this.Ja.style.display = "none"),
    (this.od = B.h.A(
      "image",
      { height: this.xa + "px", width: this.aa + "px" },
      this.Ja
    )),
    this.setValue(this.Jr),
    this.w.N().appendChild(this.Ja),
    this.dd(this.w),
    B.B.Df(this.od),
    this.Xl && (this.Uk = B.J(this.Ja, "mousedown", this, this.se)));
};
d.v = function() {
  F(this.Ja);
  this.od = this.Ja = null;
};
d.dd = function(a) {
  this.od.Lc = a;
};
d.getValue = function() {
  return this.Jr;
};
d.setValue = function(a) {
  null !== a &&
    ((this.Jr = a),
    this.od &&
      this.od.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        a || ""
      ));
};
d.yb = function(a) {
  null !== a && (this.ra = a);
};
d.Qd = function() {};
d.li = function() {};
d.sj = function() {};
d.pf = function() {
  this.Xl && this.Xl(this);
};
eg("field_image", kk);
function lk(a, b, c, e, f) {
  a = a && !isNaN(a) ? String(a) : "0";
  lk.m.constructor.call(this, a, f);
  a = parseFloat(e);
  this.tn = isNaN(a) ? 0 : a;
  b = parseFloat(b);
  this.Zu = isNaN(b) ? -Infinity : b;
  c = parseFloat(c);
  this.Yu = isNaN(c) ? Infinity : c;
  this.setValue(cb(this, this.getValue()));
}
y(lk, ij);
lk.Z = function(a) {
  return new lk(a.value, a.min, a.max, a.precision);
};
lk.prototype.Wl = function(a) {
  if (null === a) return null;
  a = String(a);
  a = a.replace(/O/gi, "0");
  a = a.replace(/,/g, "");
  a = parseFloat(a || 0);
  if (isNaN(a)) return null;
  this.tn && isFinite(a) && (a = Math.round(a / this.tn) * this.tn);
  a = Math.min(Math.max(a, this.Zu), this.Yu);
  return String(a);
};
eg("field_number", lk);
function mk(a, b, c, e) {
  this.Wf = nk;
  this.oa = new Jc(0, 25);
  this.Bl = b;
  this.It = a || "";
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
  this.Ht = a;
  this.Zv = c;
  this.Ab = null;
}
y(mk, Nh);
mk.Z = function(a) {
  var b = B.h.Sb(a.variable);
  return new mk(b, null, a.variableTypes, a.defaultType);
};
d = mk.prototype;
d.$ = function() {
  this.Ja || (mk.m.$.call(this), this.Sf());
};
d.Sf = function() {
  if (!this.vd) {
    this.j = this.w.o;
    var a = B.I.gq(this.j, null, this.It, this.Ht);
    B.i.disable();
    try {
      this.setValue(a.ga());
    } finally {
      B.i.enable();
    }
  }
};
d.v = function() {
  mk.m.v.call(this);
  this.na = this.j = null;
};
d.Xn = function(a) {
  mk.m.Xn.call(this, a);
};
d.getValue = function() {
  return this.vd ? this.vd.ga() : null;
};
d.vb = function() {
  return this.vd ? this.vd.name : "";
};
d.md = function() {
  return this.vd;
};
d.setValue = function(a) {
  var b = B.I.md(this.w.o, a);
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
    B.i.isEnabled() &&
    ((c = this.vd ? this.vd.ga() : null),
    B.i.M(new B.i.ic(this.w, "field", this.name, c, a)));
  this.vd = b;
  this.Ab = a;
  this.yb(b.name);
};
function ok(a) {
  var b = a.Zv;
  if (null === b && a.w) return a.w.o.Bm();
  b = b || [""];
  if (0 == b.length)
    throw ((a = a.vb()),
    Error("'variableTypes' of field variable " + a + " was an empty list"));
  return b;
}
function nk() {
  if (!this.vd)
    throw Error(
      "Tried to call dropdownCreate on a variable field with no variable selected."
    );
  var a = this.vb(),
    b = null;
  this.w && (b = this.w.o);
  var c = [];
  if (b)
    for (var e = ok(this), f = 0; f < e.length; f++) c = c.concat(b.ti(e[f]));
  c.sort(si);
  b = [];
  for (f = 0; f < c.length; f++) b[f] = [c[f].name, c[f].ga()];
  b.push([B.g.RENAME_VARIABLE, B.Io]);
  B.g.DELETE_VARIABLE && b.push([B.g.DELETE_VARIABLE.replace("%1", a), B.vo]);
  return b;
}
d.Yq = function(a) {
  a = a.getValue();
  if (this.w && this.w.o) {
    var b = this.w.o;
    if (a == B.Io) {
      B.I.Bn(b, this.vd);
      return;
    }
    if (a == B.vo) {
      b.Hf(this.vd.ga());
      return;
    }
  }
  this.setValue(a);
};
d.qh = function() {
  return !0;
};
eg("field_variable", mk);
function cj() {}
d = cj.prototype;
d.yo = null;
d.Jo = null;
d.us = "  ";
d.js = 60;
d.Gj = [];
function pk() {
  var a = B.C,
    b = Q;
  b ||
    (console.warn("No workspace specified in workspaceToCode call.  Guessing."),
    (b = B.Vg()));
  var c = [];
  a.$(b);
  b = J(b, !0);
  for (var e = 0, f; (f = b[e]); e++) {
    var h = qk(a, f);
    u(h) && (h = h[0]);
    h && (f.S && (h = a.Ar(h)), c.push(h));
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
  if (b.disabled) return qk(a, Ya(b));
  var c = a[b.type].call(b, b);
  if (u(c)) return [a.Jn(b, c[0]), c[1]];
  if (q(c)) {
    var e = b.id.replace(/\$/g, "$$$$");
    a.Jo && (c = a.Jo.replace(/%1/g, "'" + e + "'") + c);
    return a.Jn(b, c);
  }
  if (null === c) return "";
}
function sk(a, b, c) {
  var e = B.C;
  a = hj(a, b);
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
    for (f = !0, h = 0; h < e.Gj.length; h++)
      if (e.Gj[h][0] == c && e.Gj[h][1] == b) {
        f = !1;
        break;
      }
  f && (a = "(" + a + ")");
  return a;
}
function tk(a, b) {
  var c = B.C;
  a = hj(a, b);
  (a = qk(c, a)) && (a = rk(a, c.us));
  return a;
}
d.Il = "";
function uk(a) {
  var b = B.C;
  b.Il += a + ",";
}
d.$ = function() {};
d.Jn = function(a, b) {
  return b;
};
d.finish = function(a) {
  return a;
};
d.Ar = function(a) {
  return a;
};
function vk() {
  var a = B.C.Il;
  this.Yr = "";
  this.wr = Object.create(null);
  if (a) {
    a = a.split(",");
    for (var b = 0; b < a.length; b++) this.wr[a[b]] = !0;
  }
  this.reset();
}
vk.prototype.reset = function() {
  this.Wc = Object.create(null);
  this.Hp = Object.create(null);
  this.na = null;
};
vk.prototype.getName = function(a, b) {
  if (b == B.I.Ph) {
    var c = a;
    this.na
      ? (c = (c = this.na.me(c)) ? c.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the folowing code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (c = null));
    c && (a = c);
  }
  c = a.toLowerCase() + "_" + b;
  var e = b == B.I.Ph || "DEVELOPER_VARIABLE" == b ? this.Yr : "";
  if (c in this.Wc) return e + this.Wc[c];
  a
    ? ((a = encodeURI(a.replace(/ /g, "_")).replace(/[^\w]/g, "_")),
      -1 != "0123456789".indexOf(a[0]) && (a = "my_" + a))
    : (a = "unnamed");
  for (var f = ""; this.Hp[a + f] || a + f in this.wr; ) f = f ? f + 1 : 2;
  a += f;
  this.Hp[a] = !0;
  b = (b == B.I.Ph || "DEVELOPER_VARIABLE" == b ? this.Yr : "") + a;
  this.Wc[c] = b.substr(e.length);
  return b;
};
B.Va = {};
B.Va.Ph = B.Ho;
B.Va.Ts = function(a) {
  a = Me(a);
  for (var b = [], c = [], e = 0; e < a.length; e++)
    if (a[e].Nf) {
      var f = a[e].Nf();
      f && (f[2] ? b.push(f) : c.push(f));
    }
  c.sort(B.Va.nr);
  b.sort(B.Va.nr);
  return [c, b];
};
B.Va.nr = function(a, b) {
  return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
};
B.Va.Zt = function(a, b) {
  if (b.rc) return a;
  for (; !B.Va.Mu(a, b.o, b); ) {
    var c = a.match(/^(.*?)(\d+)$/);
    a = c ? c[1] + (parseInt(c[2], 10) + 1) : a + "2";
  }
  return a;
};
B.Va.Mu = function(a, b, c) {
  return !B.Va.Ou(a, b, c);
};
B.Va.Ou = function(a, b, c) {
  b = Me(b);
  for (var e = 0; e < b.length; e++)
    if (b[e] != c && b[e].Nf && b[e].Nf()[0].toLowerCase() == a.toLowerCase())
      return !0;
  return !1;
};
B.Va.rA = function(a) {
  a = a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  var b = B.Va.Zt(a, this.w),
    c = this.ra;
  if (c != a && c != b) {
    a = Me(this.w.o);
    for (var e = 0; e < a.length; e++) a[e].Dv && a[e].Dv(c, b);
  }
  return b;
};
B.Va.Oe = function(a) {
  function b(a, b) {
    for (var e = 0; e < a.length; e++) {
      var f = a[e][0],
        h = a[e][1],
        k = C("block");
      k.setAttribute("type", b);
      k.setAttribute("gap", 16);
      var r = C("mutation");
      r.setAttribute("name", f);
      k.appendChild(r);
      for (f = 0; f < h.length; f++) {
        var w = C("arg");
        w.setAttribute("name", h[f]);
        r.appendChild(w);
      }
      c.push(k);
    }
  }
  var c = [];
  if (B.$a.procedures_defnoreturn) {
    var e = C("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = C("field", null, B.g.PROCEDURES_DEFNORETURN_PROCEDURE);
    f.setAttribute("name", "NAME");
    e.appendChild(f);
    c.push(e);
  }
  B.$a.procedures_defreturn &&
    ((e = C("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = C("field", null, B.g.PROCEDURES_DEFRETURN_PROCEDURE)),
    f.setAttribute("name", "NAME"),
    e.appendChild(f),
    c.push(e));
  B.$a.procedures_ifreturn &&
    ((e = C("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    c.push(e));
  c.length && c[c.length - 1].setAttribute("gap", 24);
  a = B.Va.Ts(a);
  b(a[0], "procedures_callnoreturn");
  b(a[1], "procedures_callreturn");
  return c;
};
B.Va.du = function(a, b) {
  var c = [];
  b = Me(b);
  for (var e = 0; e < b.length; e++)
    if (b[e].iu) {
      var f = b[e].iu();
      f && f.toLowerCase() == a.toLowerCase() && c.push(b[e]);
    }
  return c;
};
B.Va.mA = function(a) {
  var b = B.i.Rb,
    c = a.Nf()[0],
    e = a.ad(!0);
  a = B.Va.du(c, a.o);
  c = 0;
  for (var f; (f = a[c]); c++) {
    var h = f.ad();
    h = h && B.D.pc(h);
    f.Ne(e);
    var k = f.ad();
    k = k && B.D.pc(k);
    h != k &&
      ((B.i.Rb = !1),
      B.i.M(new B.i.ic(f, "mutation", null, h, k)),
      (B.i.Rb = b));
  }
};
B.Va.jA = function(a, b) {
  b = J(b, !1);
  for (var c = 0; c < b.length; c++)
    if (b[c].Nf) {
      var e = b[c].Nf();
      if (e && e[0].toLowerCase() == a.toLowerCase()) return b[c];
    }
  return null;
};
function wk(a, b, c, e) {
  this.j = a;
  this.pa = b;
  this.ra = c.getAttribute("text");
  this.vc = new A(0, 0);
  this.Vf = e;
  this.Vl = null;
  a = c.getAttribute("callbackKey");
  this.Vf && a
    ? console.warn("Labels should not have callbacks. Label text: " + this.ra)
    : this.Vf || (a && Ui(b, a))
    ? (this.Vl = Ui(b, a))
    : console.warn("Buttons should have callbacks. Button text: " + this.ra);
  this.vp = c.getAttribute("web-class") || null;
}
d = wk.prototype;
d.width = 0;
d.height = 0;
d.kh = null;
d.O = function() {
  var a = this.Vf ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
  this.vp && (a += " " + this.vp);
  this.u = B.h.A("g", { class: a }, this.j.Da);
  if (!this.Vf)
    var b = B.h.A(
      "rect",
      { class: "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 },
      this.u
    );
  a = B.h.A(
    "rect",
    {
      class: this.Vf
        ? "blocklyFlyoutLabelBackground"
        : "blocklyFlyoutButtonBackground",
      rx: 4,
      ry: 4
    },
    this.u
  );
  var c = B.h.A(
    "text",
    {
      class: this.Vf ? "blocklyFlyoutLabelText" : "blocklyText",
      x: 0,
      y: 0,
      "text-anchor": "middle"
    },
    this.u
  );
  c.textContent = this.ra;
  this.width = ig(c);
  this.height = 20;
  this.Vf ||
    ((this.width += 10),
    b.setAttribute("width", this.width),
    b.setAttribute("height", this.height));
  a.setAttribute("width", this.width);
  a.setAttribute("height", this.height);
  c.setAttribute("x", this.width / 2);
  c.setAttribute("y", this.height - 5);
  xk(this);
  B.J(this.u, "mouseup", this, this.yv);
  return this.u;
};
d.show = function() {
  xk(this);
  this.u.setAttribute("display", "block");
};
function xk(a) {
  a.u.setAttribute("transform", "translate(" + a.vc.x + "," + a.vc.y + ")");
}
d.moveTo = function(a, b) {
  this.vc.x = a;
  this.vc.y = b;
  xk(this);
};
d.hq = function() {
  return this.vc;
};
d.v = function() {
  this.kh && B.Aa(this.kh);
  this.u && (F(this.u), (this.u = null));
  this.pa = this.j = null;
};
d.yv = function(a) {
  (a = this.pa.Gd(a)) && a.cancel();
  this.Vl && this.Vl(this);
};
function yk(a) {
  a.eb = this.ke.bind(this);
  a.nf = this.ol.bind(this);
  this.j = new Fi(a);
  this.j.oe = !0;
  this.s = !!a.s;
  this.ze = a.wa;
  this.qm = [];
  this.Tk = [];
  this.Uh = [];
  this.ec = [];
  this.qn = [];
}
d = yk.prototype;
d.Ig = !0;
d.Oi = !1;
d.Ef = !0;
d.ia = 8;
d.Rc = yk.prototype.ia;
d.ps = 3 * yk.prototype.Rc;
d.qs = 3 * yk.prototype.Rc;
d.Af = 2;
d.aa = 0;
d.xa = 0;
d.Sp = 70;
d.O = function(a) {
  this.u = B.h.A(a, { class: "blocklyFlyout", style: "display: none" }, null);
  this.Jc = B.h.A("path", { class: "blocklyFlyoutBackground" }, this.u);
  this.u.appendChild(this.j.O());
  return this.u;
};
d.$ = function(a) {
  this.pa = a;
  this.j.tg = a;
  this.Db = new ei(this.j, this.nd, !1, "blocklyFlyoutScrollbar");
  this.Ca();
  Array.prototype.push.apply(this.qm, B.J(this.u, "wheel", this, this.bs));
  this.Ig || ((this.ek = this.sm.bind(this)), this.pa.lc(this.ek));
  Array.prototype.push.apply(this.qm, B.J(this.Jc, "mousedown", this, this.se));
  this.j.Gd = this.pa.Gd.bind(this.pa);
  this.j.na = this.pa.na;
  a = this.j;
  a.ph = new Le(a);
};
d.v = function() {
  this.Ca();
  B.Aa(this.qm);
  this.ek && (this.pa.gf(this.ek), (this.ek = null));
  this.Db && (this.Db.v(), (this.Db = null));
  this.j && ((this.j.tg = null), this.j.v(), (this.j = null));
  this.u && (F(this.u), (this.u = null));
  this.pa = this.Jc = null;
};
d.Fc = function() {
  return this.aa;
};
d.Ug = function() {
  return this.xa;
};
d.ui = function() {
  return this.j;
};
d.U = function() {
  return this.Oi;
};
d.la = function(a) {
  var b = a != this.U();
  this.Oi = a;
  b && this.rj();
};
d.ig = function(a) {
  var b = a != this.Ef;
  this.Ef = a;
  b && this.rj();
};
d.rj = function() {
  var a = this.Ef ? this.U() : !1;
  this.u.style.display = a ? "block" : "none";
  this.Db.ig(a);
};
function zk(a, b, c, e, f) {
  a.u.setAttribute("width", b);
  a.u.setAttribute("height", c);
  "svg" == a.u.tagName
    ? B.h.dj(a.u, "translate(" + e + "px," + f + "px)")
    : a.u.setAttribute("transform", "translate(" + e + "," + f + ")");
  a.Db && ((a.Db.mn = new A(e, f)), a.Db.resize());
}
d.Ca = function() {
  if (this.U()) {
    this.la(!1);
    for (var a = 0, b; (b = this.ec[a]); a++) B.Aa(b);
    this.ec.length = 0;
    this.ff && (this.j.gf(this.ff), (this.ff = null));
  }
};
d.show = function(a) {
  this.j.xb(!1);
  this.Ca();
  Ak(this);
  "string" == typeof a && (a = Vi(this.j.tg, a)(this.j.tg));
  this.la(!0);
  for (var b = [], c = [], e = (this.qn.length = 0), f; (f = a[e]); e++)
    if (f.tagName) {
      var h = f.tagName.toUpperCase(),
        k = this.nd ? this.ps : this.qs;
      if ("BLOCK" == h)
        (h = B.D.Ng(f, this.j)),
          h.disabled && this.qn.push(h),
          b.push({ type: "block", block: h }),
          (f = parseInt(f.getAttribute("gap"), 10)),
          c.push(isNaN(f) ? k : f);
      else if ("SEP" == f.tagName.toUpperCase())
        (f = parseInt(f.getAttribute("gap"), 10)),
          !isNaN(f) && 0 < c.length ? (c[c.length - 1] = f) : c.push(k);
      else if ("BUTTON" == h || "LABEL" == h)
        (f = new wk(this.j, this.pa, f, "LABEL" == h)),
          b.push({ type: "button", button: f }),
          c.push(k);
    }
  this.Cq(b, c);
  this.ec.push(
    B.J(this.Jc, "mouseover", this, function() {
      for (var a = J(this.j, !1), b = 0, c; (c = a[b]); b++) c.eg();
    })
  );
  this.nd ? (this.xa = 0) : (this.aa = 0);
  this.j.xb(!0);
  this.zn();
  this.sm();
  this.position();
  this.ff = this.zn.bind(this);
  this.j.lc(this.ff);
};
function Ak(a) {
  for (var b = J(a.j, !1), c = 0, e; (e = b[c]); c++) e.o == a.j && e.v(!1, !1);
  for (c = 0; c < a.Tk.length; c++) (b = a.Tk[c]) && F(b);
  for (c = a.Tk.length = 0; (b = a.Uh[c]); c++) b.v();
  a.Uh.length = 0;
  a.j.ph.clear();
}
function Bk(a, b, c, e) {
  a.ec.push(B.J(b, "mousedown", null, Ck(a, c)));
  a.ec.push(B.J(e, "mousedown", null, Ck(a, c)));
  a.ec.push(B.rb(b, "mouseover", c, c.Hg));
  a.ec.push(B.rb(b, "mouseout", c, c.eg));
  a.ec.push(B.rb(e, "mouseover", c, c.Hg));
  a.ec.push(B.rb(e, "mouseout", c, c.eg));
}
function Ck(a, b) {
  return function(c) {
    var e = a.pa.Gd(c);
    e &&
      (Kf(e, b),
      e.G || (e.G = a),
      e.Ra || (e.Ra = a.ui()),
      (e.uc = c),
      e.ei(c));
  };
}
d.se = function(a) {
  var b = this.pa.Gd(a);
  b && (b.G || (b.G = this), b.Ra || (b.Ra = this.ui()), (b.uc = a), b.ei(a));
};
function Ff(a, b) {
  var c = null;
  B.i.disable();
  var e = a.pa.ie();
  a.pa.xb(!1);
  try {
    var f = a.pa;
    if (!b.N()) throw "oldBlock is not rendered.";
    var h = B.D.Ke(b);
    f.xb(!1);
    var k = B.D.Ng(h, f);
    if (!k.N()) throw "block is not rendered.";
    var l = B.h.pk(f.Da),
      m = B.h.pk(a.j.Da),
      n = b.ka().scale(a.j.scale),
      p = Ga(Ha(m, n), l).scale(1 / f.scale);
    k.moveBy(p.x, p.y);
    c = k;
    B.Bb();
  } finally {
    B.i.enable();
  }
  b = B.I.bq(a.pa, e);
  if (B.i.isEnabled())
    for (B.i.T(!0), B.i.M(new Ka(c)), e = 0; e < b.length; e++)
      B.i.M(new Oa(b[e]));
  a.Ig ? a.Ca() : a.sm();
  return c;
}
function Dk(a, b, c, e) {
  var f = b.O();
  b.moveTo(c, e);
  b.show();
  a.ec.push(B.J(f, "mousedown", a, a.se));
  a.Uh.push(b);
}
function Ek(a, b, c, e, f, h) {
  c = B.h.A(
    "rect",
    { "fill-opacity": 0, x: c, y: e, height: f.height, width: f.width },
    null
  );
  c.Lc = b;
  B.B.Df(c);
  a.j.Da.insertBefore(c, b.N());
  b.fk = c;
  return (a.Tk[h] = c);
}
function Fk(a, b, c) {
  var e = c.tb();
  b.setAttribute("width", e.width);
  b.setAttribute("height", e.height);
  var f = c.Nr ? 15 : 0;
  f && c.moveBy(0, f);
  f = c.S ? O : 0;
  c = c.ka();
  b.setAttribute("y", c.y);
  b.setAttribute("x", a.s ? c.x - e.width + f : c.x - f);
}
d.sm = function() {
  for (var a = af(this.pa), b = J(this.j, !1), c = 0, e; (e = b[c]); c++)
    if (-1 == this.qn.indexOf(e)) {
      var f = Ja(e, !1);
      e.lf(f.length > a);
    }
};
d.zn = function() {
  this.ff && this.j.gf(this.ff);
  this.ur();
  this.ff && this.j.lc(this.ff);
};
function Df(a) {
  return a.Db ? a.Db.U() : !1;
}
function Li(a) {
  a.eb = this.ke.bind(this);
  a.nf = this.ol.bind(this);
  Li.m.constructor.call(this, a);
  this.nd = !0;
}
y(Li, yk);
d = Li.prototype;
d.ke = function() {
  if (!this.U()) return null;
  try {
    var a = this.j.Da.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var b = this.Af,
    c = this.Af;
  this.ze == B.Bf && (b = 0);
  var e = this.xa;
  this.ze == B.Ie && (e -= this.Af);
  return {
    Sa: e,
    va: this.aa - 2 * this.Af,
    Wb: (a.height + 2 * this.Rc) * this.j.scale,
    oc: (a.width + 2 * this.Rc) * this.j.scale,
    Vd: -this.j.scrollY,
    gb: -this.j.scrollX,
    nc: a.y,
    Bc: a.x,
    bb: b,
    Ta: c
  };
};
d.ol = function(a) {
  var b = this.ke();
  b &&
    (t(a.x) && (this.j.scrollX = -b.oc * a.x),
    this.j.translate(this.j.scrollX + b.Ta, this.j.scrollY + b.bb));
};
d.position = function() {
  if (this.U()) {
    var a = this.pa.eb();
    if (a) {
      this.aa = a.va;
      this.On(a.va - 2 * this.ia, this.xa - this.ia);
      var b = a.Ta,
        c = a.bb;
      this.ze == B.Bf && (c += a.Sa - this.xa);
      zk(this, this.aa, this.xa, b, c);
    }
  }
};
d.On = function(a, b) {
  var c = this.ze == B.Ie,
    e = ["M 0," + (c ? 0 : this.ia)];
  c
    ? (e.push("h", a + 2 * this.ia),
      e.push("v", b),
      e.push("a", this.ia, this.ia, 0, 0, 1, -this.ia, this.ia),
      e.push("h", -1 * a),
      e.push("a", this.ia, this.ia, 0, 0, 1, -this.ia, -this.ia))
    : (e.push("a", this.ia, this.ia, 0, 0, 1, this.ia, -this.ia),
      e.push("h", a),
      e.push("a", this.ia, this.ia, 0, 0, 1, this.ia, this.ia),
      e.push("v", b),
      e.push("h", -a - 2 * this.ia));
  e.push("z");
  this.Jc.setAttribute("d", e.join(" "));
};
d.In = function() {
  this.Db.set(this.s ? Infinity : 0);
};
d.bs = function(a) {
  var b = a.deltaX;
  if (b) {
    H && 1 === a.deltaMode && (b *= 10);
    var c = this.ke();
    b = c.gb + b;
    b = Math.min(b, c.oc - c.va);
    b = Math.max(b, 0);
    this.Db.set(b);
    B.H.Ca();
  }
  a.preventDefault();
  a.stopPropagation();
};
d.Cq = function(a, b) {
  this.j.scale = this.pa.scale;
  var c = this.Rc,
    e = this.s ? c : c + O;
  this.s && (a = a.reverse());
  for (var f = 0, h; (h = a[f]); f++)
    if ("block" == h.type) {
      h = h.block;
      for (var k = Ja(h, !1), l = 0, m; (m = k[l]); l++) m.rc = !0;
      h.Y();
      k = h.N();
      l = h.tb();
      m = h.S ? O : 0;
      m = this.s ? e + l.width : e + m;
      h.moveBy(m, c);
      m = Ek(this, h, m, c, l, f);
      e += l.width + b[f];
      Bk(this, k, h, m);
    } else
      "button" == h.type &&
        (Dk(this, h.button, e, c), (e += h.button.width + b[f]));
};
d.yq = function(a) {
  a = (Math.atan2(a.y, a.x) / Math.PI) * 180;
  var b = this.Sp;
  return (a < 90 + b && a > 90 - b) || (a > -90 - b && a < -90 + b) ? !0 : !1;
};
d.Rg = function() {
  if (!this.u) return null;
  var a = this.u.getBoundingClientRect(),
    b = a.top;
  a = a.height;
  if (this.ze == B.Ie) return new Of(-1e9, b - 1e9, 2e9, 1e9 + a);
  if (this.ze == B.Bf) return new Of(-1e9, b, 2e9, 1e9 + a);
};
d.ur = function() {
  this.j.scale = this.pa.scale;
  for (var a = 0, b = J(this.j, !1), c = 0, e; (e = b[c]); c++)
    a = Math.max(a, e.tb().height);
  a += 1.5 * this.Rc;
  a *= this.j.scale;
  a += K;
  if (this.xa != a) {
    for (c = 0; (e = b[c]); c++) e.fk && Fk(this, e.fk, e);
    this.xa = a;
    this.pa.resize();
  }
};
function Mi(a) {
  a.eb = this.ke.bind(this);
  a.nf = this.ol.bind(this);
  Mi.m.constructor.call(this, a);
  this.nd = !1;
}
y(Mi, yk);
d = Mi.prototype;
d.ke = function() {
  if (!this.U()) return null;
  try {
    var a = this.j.Da.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var b = this.Af,
    c = this.xa - 2 * this.Af,
    e = this.aa;
  this.s || (e -= this.Af);
  return {
    Sa: c,
    va: e,
    Wb: a.height * this.j.scale + 2 * this.Rc,
    oc: a.width * this.j.scale + 2 * this.Rc,
    Vd: -this.j.scrollY + a.y,
    gb: -this.j.scrollX,
    nc: a.y,
    Bc: a.x,
    bb: b,
    Ta: 0
  };
};
d.ol = function(a) {
  var b = this.ke();
  b &&
    (t(a.y) && (this.j.scrollY = -b.Wb * a.y),
    this.j.translate(this.j.scrollX + b.Ta, this.j.scrollY + b.bb));
};
d.position = function() {
  if (this.U()) {
    var a = this.pa.eb();
    if (a) {
      this.xa = a.Sa;
      this.On(this.aa - this.ia, a.Sa - 2 * this.ia);
      var b = a.bb,
        c = a.Ta;
      this.ze == B.wd && (this.Ru = c += a.va - this.aa);
      zk(this, this.aa, this.xa, c, b);
    }
  }
};
d.On = function(a, b) {
  var c = this.ze == B.wd,
    e = a + this.ia;
  e = ["M " + (c ? e : 0) + ",0"];
  e.push("h", c ? -a : a);
  e.push(
    "a",
    this.ia,
    this.ia,
    0,
    0,
    c ? 0 : 1,
    c ? -this.ia : this.ia,
    this.ia
  );
  e.push("v", Math.max(0, b));
  e.push(
    "a",
    this.ia,
    this.ia,
    0,
    0,
    c ? 0 : 1,
    c ? this.ia : -this.ia,
    this.ia
  );
  e.push("h", c ? a : -a);
  e.push("z");
  this.Jc.setAttribute("d", e.join(" "));
};
d.In = function() {
  this.Db.set(0);
};
d.bs = function(a) {
  var b = a.deltaY;
  if (b) {
    H && 1 === a.deltaMode && (b *= 10);
    var c = this.ke();
    b = c.Vd - c.nc + b;
    b = Math.min(b, c.Wb - c.Sa);
    b = Math.max(b, 0);
    this.Db.set(b);
    B.H.Ca();
  }
  a.preventDefault();
  a.stopPropagation();
};
d.Cq = function(a, b) {
  this.j.scale = this.pa.scale;
  for (var c = this.Rc, e = this.s ? c : c + O, f = 0, h; (h = a[f]); f++)
    if ("block" == h.type) {
      h = h.block;
      for (var k = Ja(h, !1), l = 0, m; (m = k[l]); l++) m.rc = !0;
      h.Y();
      k = h.N();
      l = h.tb();
      h.moveBy(e, c);
      m = Ek(this, h, this.s ? e - l.width : e, c, l, f);
      Bk(this, k, h, m);
      c += l.height + b[f];
    } else
      "button" == h.type &&
        (Dk(this, h.button, e, c), (c += h.button.height + b[f]));
};
d.yq = function(a) {
  a = (Math.atan2(a.y, a.x) / Math.PI) * 180;
  var b = this.Sp;
  return (a < b && a > -b) || a < -180 + b || a > 180 - b ? !0 : !1;
};
d.Rg = function() {
  if (!this.u) return null;
  var a = this.u.getBoundingClientRect(),
    b = a.left;
  a = a.width;
  if (this.ze == B.He) return new Of(b - 1e9, -1e9, 1e9 + a, 2e9);
  if (H && this.pa && this.pa.Mi) {
    var c = this.pa.u.getBoundingClientRect().x;
    10 > Math.abs(c - b) && (b += this.Ru * this.pa.options.Gc.scale);
  }
  return new Of(b, -1e9, 1e9 + a, 2e9);
};
d.ur = function() {
  this.j.scale = this.pa.scale;
  for (var a = 0, b = J(this.j, !1), c = 0, e; (e = b[c]); c++) {
    var f = e.tb().width;
    e.S && (f -= O);
    a = Math.max(a, f);
  }
  for (c = 0; (e = this.Uh[c]); c++) a = Math.max(a, e.width);
  a += 1.5 * this.Rc + O;
  a *= this.j.scale;
  a += K;
  if (this.aa != a) {
    for (c = 0; (e = b[c]); c++)
      this.s &&
        ((f = e.ka().x), e.moveBy(a / this.j.scale - this.Rc - O - f, 0)),
        e.fk && Fk(this, e.fk, e);
    if (this.s)
      for (c = 0; (e = this.Uh[c]); c++)
        (b = e.hq().y), e.moveTo(a / this.j.scale - e.width - this.Rc - O, b);
    this.aa = a;
    this.pa.resize();
  }
};
function Gk(a) {
  pg.call(this);
  this.K = a;
  a = G ? "focusout" : "blur";
  this.Tu = we(this.K, G ? "focusin" : "focus", this, !G);
  this.Uu = we(this.K, a, this, !G);
}
y(Gk, pg);
Gk.prototype.handleEvent = function(a) {
  var b = new he(a.Cd);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  this.dispatchEvent(b);
};
Gk.prototype.Ia = function() {
  Gk.m.Ia.call(this);
  Fe(this.Tu);
  Fe(this.Uu);
  delete this.K;
};
function Hk(a, b) {
  null != a && this.append.apply(this, arguments);
}
d = Hk.prototype;
d.hb = "";
d.set = function(a) {
  this.hb = "" + a;
};
d.append = function(a, b, c) {
  this.hb += String(a);
  if (null != b)
    for (var e = 1; e < arguments.length; e++) this.hb += arguments[e];
  return this;
};
d.clear = function() {
  this.hb = "";
};
d.toString = function() {
  return this.hb;
};
function Ik(a, b, c) {
  sg.call(this, c);
  this.Ma = b || Jk;
  a instanceof wc ||
    ((a = zc(a)), (a = Ac(yc(a).replace(/(\r\n|\r|\n)/g, "<br>"), a.Tg())));
  this.Ei = a;
  this.ii = this.Kn = !1;
  this.Uv = null;
  this.Qs = Gc;
  this.Ni = !0;
  this.Zj = -1;
}
y(Ik, sg);
var Kk = {};
d = Ik.prototype;
d.Ia = function() {
  Ik.m.Ia.call(this);
  this.tf && (this.tf.removeNode(this), (this.tf = null));
  this.K = null;
};
d.Dk = function() {
  var a = this.F();
  if (a) {
    var b = Lk(this);
    b && !b.id && (b.id = this.ga() + ".label");
    Dg(a, "treeitem");
    M(a, "selected", !1);
    M(a, "level", this.Sg());
    b && M(a, "labelledby", b.id);
    (b = this.nk()) && Dg(b, "presentation");
    (b = this.mk()) && Dg(b, "presentation");
    if ((b = Mk(this)))
      if ((Dg(b, "group"), b.hasChildNodes()))
        for (M(a, "expanded", !1), a = yg(this), b = 1; b <= a; b++) {
          var c = L(this, b - 1).F();
          M(c, "setsize", a);
          M(c, "posinset", b);
        }
  }
};
d.O = function() {
  var a = this.Yb();
  var b = this.zl();
  var c = a.kd;
  a = c.createElement("DIV");
  G ? (Ic(a, Fc(Hc, b)), a.removeChild(a.firstChild)) : Ic(a, b);
  if (1 == a.childNodes.length) b = a.removeChild(a.firstChild);
  else
    for (b = c.createDocumentFragment(); a.firstChild; )
      b.appendChild(a.firstChild);
  this.K = b;
};
d.kb = function() {
  Ik.m.kb.call(this);
  Kk[this.ga()] = this;
  this.Dk();
};
d.Yc = function() {
  Ik.m.Yc.call(this);
  delete Kk[this.ga()];
};
d.Gg = function(a, b) {
  var c = L(this, b - 1),
    e = L(this, b);
  Ik.m.Gg.call(this, a, b);
  a.rd = c;
  a.pd = e;
  c ? (c.pd = a) : (this.Zp = a);
  e ? (e.rd = a) : (this.Aq = a);
  (b = this.bc()) && Nk(a, b);
  Ok(a, this.Sg() + 1);
  if ((b = this.F()))
    if ((this.Fh(), M(b, "expanded", this.Zb()), this.Zb())) {
      b = Mk(this);
      a.F() || a.O();
      var f = a.F(),
        h = e && e.F();
      b.insertBefore(f, h);
      this.sa && a.kb();
      e || (c ? c.Fh() : (Yf(b, !0), this.sd(this.Zb())));
    }
};
d.add = function(a, b) {
  a.getParent() && a.getParent().removeChild(a);
  this.Gg(a, b ? Bg(this, b) : yg(this));
  return a;
};
d.removeChild = function(a) {
  var b = this.bc(),
    c = b ? b.Id() : null;
  if (c == a || a.contains(c))
    b.hasFocus() ? (this.select(), Pd(this.Av, 10, this)) : this.select();
  Ik.m.removeChild.call(this, a);
  this.Aq == a && (this.Aq = a.rd);
  this.Zp == a && (this.Zp = a.pd);
  a.rd && (a.rd.pd = a.pd);
  a.pd && (a.pd.rd = a.rd);
  c = !a.pd;
  a.tf = null;
  a.Zj = -1;
  if (b && (b.removeNode(a), this.sa)) {
    b = Mk(this);
    if (a.sa) {
      var e = a.F();
      b.removeChild(e);
      a.Yc();
    }
    c && (c = L(this, yg(this) - 1)) && c.Fh();
    Ag(this) ||
      ((b.style.display = "none"),
      this.Fh(),
      (this.nk().className = this.ik()),
      (c = this.F()) && c.removeAttribute("aria-expanded"));
  }
  return a;
};
d.remove = Ik.prototype.removeChild;
d.Av = function() {
  this.select();
};
d.Sg = function() {
  var a = this.Zj;
  0 > a && ((a = (a = this.getParent()) ? a.Sg() + 1 : 0), Ok(this, a));
  return a;
};
function Ok(a, b) {
  if (b != a.Zj) {
    a.Zj = b;
    var c = Pk(a);
    if (c) {
      var e = Qk(a) + "px";
      zg(a) ? (c.style.paddingRight = e) : (c.style.paddingLeft = e);
    }
    xg(a, function(a) {
      Ok(a, b + 1);
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
d.je = function() {
  var a = [];
  xg(this, function(b) {
    a.push(b);
  });
  return a;
};
d.Jk = function() {
  return this.Kn;
};
d.select = function() {
  var a = this.bc();
  a && a.Ic(this);
};
function Rk(a, b) {
  if (a.Kn != b) {
    a.Kn = b;
    Sk(a);
    var c = a.F();
    c &&
      (M(c, "selected", b),
      b && ((b = a.bc().F()), M(b, "activedescendant", a.ga())));
  }
}
d.Zb = function() {
  return this.ii;
};
d.sd = function(a) {
  var b = a != this.ii;
  if (!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) {
    this.ii = a;
    var c = this.bc();
    var e = this.F();
    if (Ag(this)) {
      if ((!a && c && this.contains(c.Id()) && this.select(), e)) {
        if ((c = Mk(this)))
          if (
            (Yf(c, a), M(e, "expanded", a), a && this.sa && !c.hasChildNodes())
          ) {
            var f = [];
            xg(this, function(a) {
              f.push(a.zl());
            });
            Ic(c, Fc(f));
            xg(this, function(a) {
              a.kb();
            });
          }
        this.Fh();
      }
    } else (c = Mk(this)) && Yf(c, !1);
    e && (this.nk().className = this.ik());
    b && this.dispatchEvent(a ? "expand" : "collapse");
  }
};
d.toggle = function() {
  this.sd(!this.Zb());
};
d.expand = function() {
  this.sd(!0);
};
d.collapse = function() {
  this.sd(!1);
};
d.Hn = function() {
  var a = this.getParent();
  a && (a.sd(!0), a.Hn());
};
d.zl = function() {
  var a = this.bc(),
    b = !a.hj || (a == this.getParent() && !a.ao) ? this.Ma.up : this.Ma.tp;
  a = this.Zb() && Ag(this);
  b = { class: b, style: Tk(this) };
  var c = [];
  a &&
    xg(this, function(a) {
      c.push(a.zl());
    });
  a = Ec("div", b, c);
  return Ec("div", { class: this.Ma.Dp, id: this.ga() }, [Uk(this), a]);
};
function Qk(a) {
  return Math.max(0, (a.Sg() - 1) * a.Ma.Mm);
}
function Uk(a) {
  var b = {};
  b["padding-" + (zg(a) ? "right" : "left")] = Qk(a) + "px";
  b = { class: a.pi(), style: b };
  var c = a.ym(),
    e = Ec("span", { style: { display: "inline-block" }, class: a.ik() }),
    f = Ec("span", { class: a.Ma.Ep, title: a.Uv || null }, a.Ei);
  a = Fc(f, Ec("span", {}, a.Qs));
  return Ec("div", b, [c, e, a]);
}
d.pi = function() {
  return this.Ma.fm + (this.Jk() ? " " + this.Ma.Gp : "");
};
d.ym = function() {
  return Ec("span", {
    type: "expand",
    style: { display: "inline-block" },
    class: Vk(this)
  });
};
function Vk(a) {
  var b = a.bc(),
    c = !b.hj || (b == a.getParent() && !b.ao),
    e = a.Ma,
    f = new Hk();
  f.append(e.Ff, " ", e.zt, " ");
  if (Ag(a)) {
    var h = 0;
    b.$n && a.Ni && (h = a.Zb() ? 2 : 1);
    c || (h = a.pd ? h + 8 : h + 4);
    switch (h) {
      case 1:
        f.append(e.Dt);
        break;
      case 2:
        f.append(e.Ct);
        break;
      case 4:
        f.append(e.zp);
        break;
      case 5:
        f.append(e.Bt);
        break;
      case 6:
        f.append(e.At);
        break;
      case 8:
        f.append(e.Ap);
        break;
      case 9:
        f.append(e.Ft);
        break;
      case 10:
        f.append(e.Et);
        break;
      default:
        f.append(e.yp);
    }
  } else c ? f.append(e.yp) : a.pd ? f.append(e.Ap) : f.append(e.zp);
  return f.toString();
}
function Tk(a) {
  var b = a.Zb() && Ag(a);
  return qc({ "background-position": Wk(a), display: b ? null : "none" });
}
function Wk(a) {
  return (a.pd ? (a.Sg() - 1) * a.Ma.Mm : "-100") + "px 0";
}
d.F = function() {
  var a = Ik.m.F.call(this);
  a || (this.K = a = this.Yb().F(this.ga()));
  return a;
};
function Pk(a) {
  return (a = a.F()) ? a.firstChild : null;
}
d.mk = function() {
  var a = Pk(this);
  return a ? a.firstChild : null;
};
d.nk = function() {
  var a = Pk(this);
  return a ? a.childNodes[1] : null;
};
function Lk(a) {
  return (a = Pk(a)) && a.lastChild ? a.lastChild.previousSibling : null;
}
function Mk(a) {
  return (a = a.F()) ? a.lastChild : null;
}
d.yb = function(a) {
  this.Ei = a = zc(a);
  var b = Lk(this);
  b && Ic(b, a);
  (a = this.bc()) && Xk(a, this);
};
d.vb = function() {
  var a = yc(this.Ei);
  return -1 != a.indexOf("&") ? ("document" in g ? tb(a) : vb(a)) : a;
};
function Sk(a) {
  var b = Pk(a);
  b && (b.className = a.pi());
}
d.Fh = function() {
  var a = this.mk();
  a && (a.className = Vk(this));
  if ((a = Mk(this))) a.style.backgroundPosition = Wk(this);
};
d.Zq = function(a) {
  "expand" == a.target.getAttribute("type") && Ag(this)
    ? this.Ni && this.toggle()
    : (this.select(), Sk(this));
};
d.hn = function(a) {
  a.preventDefault();
};
d.Wq = function(a) {
  ("expand" == a.target.getAttribute("type") && Ag(this)) ||
    (this.Ni && this.toggle());
};
d.jn = function(a) {
  var b = !0;
  switch (a.keyCode) {
    case 39:
      if (a.altKey) break;
      Ag(this) && (this.Zb() ? L(this, 0).select() : this.sd(!0));
      break;
    case 37:
      if (a.altKey) break;
      if (Ag(this) && this.Zb() && this.Ni) this.sd(!1);
      else {
        var c = this.getParent(),
          e = this.bc();
        c && (e.mg || c != e) && c.select();
      }
      break;
    case 40:
      a: if (Ag(this) && this.Zb()) c = L(this, 0);
      else {
        for (c = this; c != this.bc(); ) {
          e = c.pd;
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
      c = this.rd;
      null != c
        ? (c = Yk(c))
        : ((c = this.getParent()),
          (e = this.bc()),
          (c = (!e.mg && c == e) || this == e ? null : c));
      c && c.select();
      break;
    default:
      b = !1;
  }
  b && (a.preventDefault(), (e = this.bc()) && e.pj.clear());
  return b;
};
function Yk(a) {
  return a.Zb() && Ag(a) ? Yk(L(a, yg(a) - 1)) : a;
}
function Nk(a, b) {
  a.tf != b &&
    ((a.tf = b),
    Xk(b, a),
    xg(a, function(a) {
      Nk(a, b);
    }));
}
var Jk = {
  Mm: 19,
  Fp: "goog-tree-root goog-tree-item",
  Cp: "goog-tree-hide-root",
  Dp: "goog-tree-item",
  tp: "goog-tree-children",
  up: "goog-tree-children-nolines",
  fm: "goog-tree-row",
  Ep: "goog-tree-item-label",
  Ff: "goog-tree-icon",
  zt: "goog-tree-expand-icon",
  Dt: "goog-tree-expand-icon-plus",
  Ct: "goog-tree-expand-icon-minus",
  Ft: "goog-tree-expand-icon-tplus",
  Et: "goog-tree-expand-icon-tminus",
  Bt: "goog-tree-expand-icon-lplus",
  At: "goog-tree-expand-icon-lminus",
  Ap: "goog-tree-expand-icon-t",
  zp: "goog-tree-expand-icon-l",
  yp: "goog-tree-expand-icon-blank",
  dm: "goog-tree-expanded-folder-icon",
  wp: "goog-tree-collapsed-folder-icon",
  em: "goog-tree-file-icon",
  Bp: "goog-tree-expanded-folder-icon",
  xp: "goog-tree-collapsed-folder-icon",
  Gp: "selected"
};
function Zk(a, b, c) {
  Ik.call(this, a, b, c);
}
y(Zk, Ik);
Zk.prototype.bc = function() {
  if (this.tf) return this.tf;
  var a = this.getParent();
  return a && (a = a.bc()) ? (Nk(this, a), a) : null;
};
Zk.prototype.ik = function() {
  var a = this.Zb(),
    b = this.Vt;
  if (a && b) return b;
  b = this.Eu;
  if (!a && b) return b;
  b = this.Ma;
  if (Ag(this)) {
    if (a && b.dm) return b.Ff + " " + b.dm;
    if (!a && b.wp) return b.Ff + " " + b.wp;
  } else if (b.em) return b.Ff + " " + b.em;
  return "";
};
function $k(a) {
  if (a.si && "function" == typeof a.si) return a.si();
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
function al(a) {
  this.Ab = void 0;
  this.Kb = {};
  if (a) {
    if (a.rk && "function" == typeof a.rk) var b = a.rk();
    else if (a.si && "function" == typeof a.si) b = void 0;
    else if (fa(a) || q(a)) {
      b = [];
      for (var c = a.length, e = 0; e < c; e++) b.push(e);
    } else for (e in ((b = []), (c = 0), a)) b[c++] = e;
    a = $k(a);
    for (c = 0; c < b.length; c++) this.set(b[c], a[c]);
  }
}
d = al.prototype;
d.set = function(a, b) {
  bl(this, a, b, !1);
};
d.add = function(a, b) {
  bl(this, a, b, !0);
};
function bl(a, b, c, e) {
  for (var f = 0; f < b.length; f++) {
    var h = b.charAt(f);
    a.Kb[h] || (a.Kb[h] = new al());
    a = a.Kb[h];
  }
  if (e && void 0 !== a.Ab)
    throw Error('The collection already contains the key "' + b + '"');
  a.Ab = c;
}
d.get = function(a) {
  a: {
    for (var b = this, c = 0; c < a.length; c++)
      if (((b = b.Kb[a.charAt(c)]), !b)) {
        a = void 0;
        break a;
      }
    a = b;
  }
  return a ? a.Ab : void 0;
};
d.si = function() {
  var a = [];
  cl(this, a);
  return a;
};
function cl(a, b) {
  void 0 !== a.Ab && b.push(a.Ab);
  for (var c in a.Kb) cl(a.Kb[c], b);
}
d.rk = function(a) {
  var b = [];
  if (a) {
    for (var c = this, e = 0; e < a.length; e++) {
      var f = a.charAt(e);
      if (!c.Kb[f]) return [];
      c = c.Kb[f];
    }
    dl(c, a, b);
  } else dl(this, "", b);
  return b;
};
function dl(a, b, c) {
  void 0 !== a.Ab && c.push(b);
  for (var e in a.Kb) dl(a.Kb[e], b + e, c);
}
d.clear = function() {
  this.Kb = {};
  this.Ab = void 0;
};
d.remove = function(a) {
  for (var b = this, c = [], e = 0; e < a.length; e++) {
    var f = a.charAt(e);
    if (!b.Kb[f])
      throw Error('The collection does not have the key "' + a + '"');
    c.push([b, f]);
    b = b.Kb[f];
  }
  a = b.Ab;
  for (delete b.Ab; 0 < c.length; )
    if (((f = c.pop()), (b = f[0]), (f = f[1]), b.Kb[f].zq())) delete b.Kb[f];
    else break;
  return a;
};
d.clone = function() {
  return new al(this);
};
d.zq = function() {
  var a;
  if ((a = void 0 === this.Ab))
    a: {
      for (var b in this.Kb) {
        a = !1;
        break a;
      }
      a = !0;
    }
  return a;
};
function el() {
  this.$f = new al();
  this.hb = "";
  this.Sk = this.$m = null;
  this.ih = this.Si = 0;
}
function fl(a, b) {
  var c = b.vb();
  if (c && !ib(null == c ? "" : String(c))) {
    c = c.toLowerCase();
    var e = a.$f.get(c);
    if (e) {
      for (var f = yg(b), h = 0; h < f; h++) fl(a, L(b, h));
      xa(e, b);
      e.length || a.$f.remove(c);
    }
  }
}
function gl(a, b) {
  var c = !1;
  (b = a.$f.rk(b)) &&
    b.length &&
    ((a.ih = 0), (a.Si = 0), (c = a.$f.get(b[0])), (c = hl(a, c))) &&
    (a.$m = b);
  return c;
}
function hl(a, b) {
  if (b) {
    if (a.ih < b.length) {
      var c = b[a.ih];
      a.Sk = b;
    }
    c && (c.Hn(), c.select());
  }
  return !!c;
}
el.prototype.clear = function() {
  this.hb = "";
};
function il(a, b, c) {
  Ik.call(this, a, b, c);
  this.ii = !0;
  Rk(this, !0);
  this.Ya = this;
  this.pj = new el();
  this.um = this.Pb = null;
  this.ki = !1;
  this.au = null;
  this.ao = this.mg = this.$n = this.hj = !0;
  if (G)
    try {
      document.execCommand("BackgroundImageCache", !1, !0);
    } catch (e) {}
}
y(il, Ik);
d = il.prototype;
d.bc = function() {
  return this;
};
d.Sg = function() {
  return 0;
};
d.Hn = function() {};
d.ou = function() {
  this.ki = !0;
  Sg(this.F(), "focused");
  this.Ya && this.Ya.select();
};
d.ju = function() {
  this.ki = !1;
  Ug(this.F(), "focused");
};
d.hasFocus = function() {
  return this.ki;
};
d.Zb = function() {
  return !this.mg || il.m.Zb.call(this);
};
d.sd = function(a) {
  this.mg ? il.m.sd.call(this, a) : (this.ii = a);
};
d.ym = function() {
  return Gc;
};
d.nk = function() {
  var a = Pk(this);
  return a ? a.firstChild : null;
};
d.mk = function() {
  return null;
};
d.Fh = function() {};
d.pi = function() {
  return il.m.pi.call(this) + (this.mg ? "" : " " + this.Ma.Cp);
};
d.ik = function() {
  var a = this.Zb(),
    b = this.Vt;
  if (a && b) return b;
  b = this.Eu;
  if (!a && b) return b;
  b = this.Ma;
  return a && b.Bp ? b.Ff + " " + b.Bp : !a && b.xp ? b.Ff + " " + b.xp : "";
};
d.Ic = function(a) {
  if (this.Ya != a) {
    var b = !1;
    this.Ya && ((b = this.Ya == this.au), Rk(this.Ya, !1));
    if ((this.Ya = a)) Rk(a, !0), b && a.select();
    this.dispatchEvent("change");
  }
};
d.Id = function() {
  return this.Ya;
};
function jl(a) {
  0 != a.hj && ((a.hj = !1), a.sa && kl(a));
}
function kl(a) {
  function b(a) {
    var h = Mk(a);
    if (h) {
      var l = !e || (c == a.getParent() && !f) ? a.Ma.up : a.Ma.tp;
      h.className = l;
      if ((h = a.mk())) h.className = Vk(a);
    }
    xg(a, b);
  }
  var c = a,
    e = c.hj,
    f = c.ao;
  b(a);
}
function ll(a) {
  0 != a.$n && ((a.$n = !1), a.sa && kl(a));
}
function ml(a) {
  if (0 != a.mg) {
    a.mg = !1;
    if (a.sa) {
      var b = Pk(a);
      b && (b.className = a.pi());
    }
    a.Id() == a && L(a, 0) && a.Ic(L(a, 0));
  }
}
d.Dk = function() {
  il.m.Dk.call(this);
  var a = this.F();
  Dg(a, "tree");
  M(a, "labelledby", Lk(this).id);
};
d.kb = function() {
  il.m.kb.call(this);
  var a = this.F();
  a.className = this.Ma.Fp;
  a.setAttribute("hideFocus", "true");
  a = this.F();
  a.tabIndex = 0;
  var b = (this.Pb = new Jg(a)),
    c = (this.um = new Gk(a));
  vg(this)
    .ha(c, "focusout", this.ju)
    .ha(c, "focusin", this.ou)
    .ha(b, "key", this.$c)
    .ha(a, "mousedown", this.Fm)
    .ha(a, "click", this.Fm)
    .ha(a, "dblclick", this.Fm);
  this.Dk();
};
d.Yc = function() {
  il.m.Yc.call(this);
  this.Pb.v();
  this.Pb = null;
  this.um.v();
  this.um = null;
};
d.Fm = function(a) {
  var b = nl(this, a);
  if (b)
    switch (a.type) {
      case "mousedown":
        b.Zq(a);
        break;
      case "click":
        b.hn(a);
        break;
      case "dblclick":
        b.Wq(a);
    }
};
d.$c = function(a) {
  var b = this.pj;
  var c = !1;
  switch (a.keyCode) {
    case 40:
    case 38:
      if (a.ctrlKey) {
        c = 40 == a.keyCode ? 1 : -1;
        var e = b.$m;
        if (e) {
          var f = null,
            h = !1;
          if (b.Sk) {
            var k = b.ih + c;
            0 <= k && k < b.Sk.length ? ((b.ih = k), (f = b.Sk)) : (h = !0);
          }
          f ||
            ((k = b.Si + c),
            0 <= k && k < e.length && (b.Si = k),
            e.length > b.Si && (f = b.$f.get(e[b.Si])),
            f && f.length && h && (b.ih = -1 == c ? f.length - 1 : 0));
          hl(b, f) && (b.$m = e);
        }
        c = !0;
      }
      break;
    case 8:
      e = b.hb.length - 1;
      c = !0;
      0 < e
        ? ((b.hb = b.hb.substring(0, e)), gl(b, b.hb))
        : 0 == e
        ? (b.hb = "")
        : (c = !1);
      break;
    case 27:
      (b.hb = ""), (c = !0);
  }
  (b = c || (this.Ya && this.Ya.jn(a))) ||
    ((b = this.pj),
    (c = !1),
    a.ctrlKey ||
      a.altKey ||
      ((e = String.fromCharCode(a.charCode || a.keyCode).toLowerCase()),
      ((1 == e.length && " " <= e && "~" >= e) ||
        ("\u0080" <= e && "\ufffd" >= e)) &&
        (" " != e || b.hb) &&
        ((b.hb += e), (c = gl(b, b.hb)))),
    (b = c));
  b && a.preventDefault();
  return b;
};
function nl(a, b) {
  for (var c = b.target; null != c; ) {
    if ((b = Kk[c.id])) return b;
    if (c == a.F()) break;
    c = c.parentNode;
  }
  return null;
}
d.createNode = function(a) {
  return new Zk(a || Gc, this.Ma, this.Yb());
};
function Xk(a, b) {
  a = a.pj;
  var c = b.vb();
  if (c && !ib(null == c ? "" : String(c))) {
    c = c.toLowerCase();
    var e = a.$f.get(c);
    e ? e.push(b) : a.$f.set(c, [b]);
  }
}
d.removeNode = function(a) {
  fl(this.pj, a);
};
function Ii(a) {
  this.j = a;
  this.s = a.options.s;
  this.nd = a.options.Kd;
  this.wa = a.options.wa;
  this.Ma = {
    Mm: 19,
    Fp: "blocklyTreeRoot",
    Cp: "blocklyHidden",
    Dp: "",
    fm: "blocklyTreeRow",
    Ep: "blocklyTreeLabel",
    Ff: "blocklyTreeIcon",
    dm: "blocklyTreeIconOpen",
    em: "blocklyTreeIconNone",
    Gp: "blocklyTreeSelected"
  };
  this.Vr = { fm: "blocklyTreeSeparator" };
  this.nd &&
    ((this.Ma.cssTreeRow += a.s
      ? " blocklyHorizontalTreeRtl"
      : " blocklyHorizontalTree"),
    (this.Vr.cssTreeRow =
      "blocklyTreeSeparatorHorizontal " +
      (a.s ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree")),
    (this.Ma.cssTreeIcon = ""));
}
d = Ii.prototype;
d.width = 0;
d.height = 0;
d.Pi = null;
d.$ = function() {
  var a = this.j,
    b = E(this.j);
  this.jc = C("DIV", "blocklyToolboxDiv");
  this.jc.setAttribute("dir", a.s ? "RTL" : "LTR");
  b.parentNode.insertBefore(this.jc, b);
  B.J(
    this.jc,
    "mousedown",
    this,
    function(a) {
      B.h.Ye(a) || a.target == this.jc ? B.Bb(!1) : B.Bb(!0);
      B.Touch.ee();
    },
    !1,
    !0
  );
  b = {
    di: a.options.di,
    Gc: a,
    s: a.s,
    lh: a.options.lh,
    Kd: a.Kd,
    wa: a.options.wa
  };
  this.G = null;
  this.G = a.Kd ? new Li(b) : new Mi(b);
  Yc(this.G.O("svg"), E(this.j));
  this.G.$(a);
  this.Ma.cleardotPath = a.options.qd + "1x1.gif";
  this.Ma.cssCollapsedFolderIcon =
    "blocklyTreeIconClosed" + (a.s ? "Rtl" : "Ltr");
  this.fd = b = new ol(this, this.Ma);
  ml(b);
  jl(b);
  ll(b);
  b.Ic(null);
  a = this.dl(a.options.Nd);
  b.Y(this.jc);
  a && b.Ic(a);
  Ri(this);
  this.position();
};
d.v = function() {
  this.G.v();
  this.fd.v();
  F(this.jc);
  this.Pi = this.j = null;
};
d.Fc = function() {
  return this.width;
};
d.Ug = function() {
  return this.height;
};
d.position = function() {
  var a = this.jc;
  if (a) {
    var b = E(this.j);
    b = B.Tr(b);
    this.nd
      ? ((a.style.left = "0"),
        (a.style.height = "auto"),
        (a.style.width = b.width + "px"),
        (this.height = a.offsetHeight),
        this.wa == B.Ie ? (a.style.top = "0") : (a.style.bottom = "0"))
      : (this.wa == B.wd ? (a.style.right = "0") : (a.style.left = "0"),
        (a.style.height = b.height + "px"),
        (this.width = a.offsetWidth));
    this.G.position();
  }
};
d.dl = function(a) {
  this.fd.vr();
  this.fd.yd = [];
  this.oq = !1;
  a = pl(this, a, this.fd, this.j.options.qd);
  if (this.fd.yd.length)
    throw "Toolbox cannot have both blocks and categories in the root level.";
  rf(this.j);
  return a;
};
function pl(a, b, c, e) {
  for (var f = null, h = null, k = 0, l; (l = b.childNodes[k]); k++)
    if (l.tagName)
      switch (l.tagName.toUpperCase()) {
        case "CATEGORY":
          h = B.h.Sb(l.getAttribute("name"));
          h = a.fd.createNode(h);
          h.yd = [];
          c.add(h);
          var m = l.getAttribute("custom");
          m ? (h.yd = m) : (m = pl(a, l, h, e)) && (f = m);
          m = B.h.Sb(l.getAttribute("colour"));
          q(m)
            ? ((h.Im = /^#[0-9a-fA-F]{6}$/.test(m) ? m : B.uq(Number(m))),
              (a.oq = !0))
            : (h.Im = "");
          "true" == l.getAttribute("expanded")
            ? (h.yd.length && (f = h), h.sd(!0))
            : h.sd(!1);
          h = l;
          break;
        case "SEP":
          h &&
            ("CATEGORY" == h.tagName.toUpperCase()
              ? c.add(new ql(a.Vr))
              : ((l = parseFloat(l.getAttribute("gap"))),
                !isNaN(l) && h && h.setAttribute("gap", l)));
          break;
        case "BLOCK":
        case "SHADOW":
        case "LABEL":
        case "BUTTON":
          c.yd.push(l), (h = l);
      }
  return f;
}
function Ri(a, b) {
  b = (b || a.fd).je(!1);
  for (var c = 0, e; (e = b[c]); c++) {
    var f = Pk(e);
    if (f) {
      var h = a.oq ? "8px solid " + (e.Im || "#ddd") : "none";
      a.j.s ? (f.style.borderRight = h) : (f.style.borderLeft = h);
    }
    Ri(a, e);
  }
}
d.Rg = function() {
  if (!this.jc) return null;
  var a = this.jc.getBoundingClientRect(),
    b = a.left,
    c = a.top,
    e = a.width;
  a = a.height;
  return this.wa == B.He
    ? new Of(-1e7, -1e7, 1e7 + b + e, 2e7)
    : this.wa == B.wd
    ? new Of(b, -1e7, 1e7 + e, 2e7)
    : this.wa == B.Ie
    ? new Of(-1e7, -1e7, 2e7, 1e7 + c + a)
    : new Of(0, c, 2e7, 1e7 + e);
};
function ol(a, b) {
  this.V = a;
  il.call(this, Gc, b);
}
y(ol, il);
ol.prototype.kb = function() {
  ol.m.kb.call(this);
  if (Vd) {
    var a = this.F();
    B.J(a, "touchend", this, this.yu);
  }
};
ol.prototype.yu = function(a) {
  var b = nl(this, a);
  b &&
    "touchend" === a.type &&
    setTimeout(function() {
      b.hn(a);
    }, 1);
};
ol.prototype.createNode = function(a) {
  a = a ? zc(a) : Gc;
  return new rl(this.V, a, this.Ma, this.Yb());
};
ol.prototype.Ic = function(a) {
  var b = this.V;
  if (a != this.Ya && a != b.fd) {
    b.Pi && (Pk(b.Pi).style.backgroundColor = "");
    if (a) {
      var c = a.Im || "#57e";
      Pk(a).style.backgroundColor = c;
      Ri(b, a);
    }
    c = this.Id();
    il.prototype.Ic.call(this, a);
    a && a.yd && a.yd.length
      ? (b.G.show(a.yd), b.Pi != a && b.G.In())
      : b.G.Ca();
    c != a &&
      c != this &&
      ((c = new Sa(null, "category", c && yc(c.Ei), a && yc(a.Ei))),
      (c.hc = b.j.id),
      B.i.M(c));
    a && (b.Pi = a);
  }
};
function rl(a, b, c, e) {
  Ik.call(this, b, c, e);
  a &&
    ((b = function() {
      B.sg(a.j);
    }),
    we(a.fd, "expand", b),
    we(a.fd, "collapse", b));
}
y(rl, Zk);
d = rl.prototype;
d.ym = function() {
  return Ec("span");
};
d.hn = function() {
  Ag(this) && this.Ni
    ? (this.toggle(), this.select())
    : this.Jk()
    ? this.bc().Ic(null)
    : this.select();
  Sk(this);
};
d.Zq = function() {};
d.Wq = function() {};
d.jn = function(a) {
  if (this.tf.V.nd) {
    var b = {};
    b[39] = this.uh ? 38 : 40;
    b[37] = this.uh ? 40 : 38;
    b[38] = 37;
    b[40] = 39;
    a.keyCode = b[a.keyCode] || a.keyCode;
  }
  return rl.m.jn.call(this, a);
};
function ql(a) {
  rl.call(this, null, Gc, a);
}
y(ql, rl);
B.Qc = {};
B.Qc.cA = "";
B.Qc.Sr = null;
B.Qc.Iq = "";
B.Qc.Ve = function(a, b) {
  if (!B.Qc.Sr) {
    var c = ".blocklyDraggable {}\n";
    a && ((c += B.Qc.ks.join("\n")), B.os && (c += B.os.CSS.join("\n")));
    B.Qc.Iq = b.replace(/[\\\/]$/, "");
    c = c.replace(/<<<PATH>>>/g, B.Qc.Iq);
    a = document.createElement("style");
    document.head.insertBefore(a, document.head.firstChild);
    a.appendChild(document.createTextNode(c));
    B.Qc.Sr = a.sheet;
  }
};
B.Qc.tA = function() {
  console.warn(
    "Deprecated call to Blockly.Css.setCursor.See https://github.com/google/blockly/issues/981 for context"
  );
};
B.Qc.ks = [
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
B.H = {};
B.H.ba = null;
B.H.Yi = null;
B.H.Lg = null;
B.H.O = function() {
  B.H.ba ||
    ((B.H.ba = C("DIV", "blocklyWidgetDiv")),
    document.body.appendChild(B.H.ba));
};
B.H.show = function(a, b, c) {
  B.H.Ca();
  B.H.Yi = a;
  B.H.Lg = c;
  B.H.ba.style.top = Sf().y + "px";
  B.H.ba.style.direction = b ? "rtl" : "ltr";
  B.H.ba.style.display = "block";
};
B.H.Ca = function() {
  B.H.Yi &&
    ((B.H.Yi = null),
    (B.H.ba.style.display = "none"),
    (B.H.ba.style.left = ""),
    (B.H.ba.style.top = ""),
    B.H.Lg && B.H.Lg(),
    (B.H.Lg = null),
    Xc(B.H.ba));
};
B.H.U = function() {
  return !!B.H.Yi;
};
B.H.Ci = function(a) {
  B.H.Yi == a && B.H.Ca();
};
B.H.position = function(a, b, c, e, f) {
  b < e.y && (b = e.y);
  f ? a > c.width + e.x && (a = c.width + e.x) : a < e.x && (a = e.x);
  B.H.lr(a, b, c.height);
};
B.H.lr = function(a, b, c) {
  B.H.ba.style.left = a + "px";
  B.H.ba.style.top = b + "px";
  B.H.ba.style.height = c + "px";
};
B.H.sn = function(a, b, c, e) {
  B.H.lr(B.H.dt(a, b, c, e), B.H.et(a, b, c), c.height);
};
B.H.dt = function(a, b, c, e) {
  if (e)
    return (
      (b = Math.max(b.right - c.width, a.left)), Math.min(b, a.right - c.width)
    );
  b = Math.min(b.left, a.right - c.width);
  return Math.max(b, a.left);
};
B.H.et = function(a, b, c) {
  return b.bottom + c.height >= a.bottom ? b.top - c.height : b.bottom;
};
function sl(a) {
  this.Xh = a;
  this.O();
}
d = sl.prototype;
d.La = null;
d.Bd = null;
d.Xh = null;
d.jf = 1;
d.jj = null;
d.O = function() {
  this.La ||
    ((this.La = B.h.A(
      "svg",
      {
        xmlns: B.kc,
        "xmlns:html": B.Fe,
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        class: "blocklyBlockDragSurface"
      },
      this.Xh
    )),
    (this.Bd = B.h.A("g", {}, this.La)));
};
function sf(a, b) {
  a.Bd.appendChild(b);
  a.La.style.display = "block";
  a.jj = new A(0, 0);
}
d.Be = function(a, b) {
  this.jj = new A(a * this.jf, b * this.jf);
  a = this.jj.x;
  b = this.jj.y;
  a = a.toFixed(0);
  b = b.toFixed(0);
  this.La.style.display = "block";
  B.h.dj(this.La, "translate3d(" + a + "px, " + b + "px, 0px)");
};
d.wk = function() {
  var a = B.h.ac(this.La);
  return new A(a.x / this.jf, a.y / this.jf);
};
d.$b = function() {
  return this.Bd;
};
d.Vh = function(a) {
  a
    ? a.appendChild(this.Bd.firstChild)
    : this.Bd.removeChild(this.Bd.firstChild);
  this.La.style.display = "none";
  this.jj = null;
};
B.Ve = function(a, b) {
  B.gt();
  q(a) && (a = document.getElementById(a) || document.querySelector(a));
  if (!Zc(document, a)) throw "Error: container is not in current document.";
  b = new bi(b || {});
  var c = C("DIV", "injectionDiv");
  a.appendChild(c);
  a = B.Zh(c, b);
  var e = new sl(c);
  c = new xi(c);
  b = B.wt(a, b, e, c);
  B.Iu(b);
  B.bf = b;
  B.sg(b);
  return b;
};
B.Zh = function(a, b) {
  a.setAttribute("dir", "LTR");
  tg = b.s;
  B.Qc.Ve(b.Au, b.qd);
  a = B.h.A(
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
  var c = B.h.A("defs", {}, a),
    e = String(Math.random()).substring(2),
    f = B.h.A("filter", { id: "blocklyEmbossFilter" + e }, c);
  B.h.A(
    "feGaussianBlur",
    { in: "SourceAlpha", stdDeviation: 1, result: "blur" },
    f
  );
  var h = B.h.A(
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
  B.h.A("fePointLight", { x: -5e3, y: -1e4, z: 2e4 }, h);
  B.h.A(
    "feComposite",
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    f
  );
  B.h.A(
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
  b.Xp = f.id;
  f = B.h.A(
    "pattern",
    {
      id: "blocklyDisabledPattern" + e,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10
    },
    c
  );
  B.h.A("rect", { width: 10, height: 10, fill: "#aaa" }, f);
  B.h.A("path", { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, f);
  b.di = f.id;
  f = b.iq;
  c = B.h.A(
    "pattern",
    { id: "blocklyGridPattern" + e, patternUnits: "userSpaceOnUse" },
    c
  );
  0 < f.length && 0 < f.spacing
    ? (B.h.A("line", { stroke: f.colour }, c),
      1 < f.length && B.h.A("line", { stroke: f.colour }, c))
    : B.h.A("line", {}, c);
  b.jq = c;
  return a;
};
B.wt = function(a, b, c, e) {
  b.Gc = null;
  var f = new Fi(b, c, e);
  f.scale = b.Hb.Or;
  a.appendChild(f.O("blocklyMainBackground"));
  !b.mq && b.Nd && ((c = Ki(f, "svg")), B.h.Ii(c, a));
  f.translate(0, 0);
  B.bf = f;
  b.readOnly ||
    b.pq ||
    f.lc(function() {
      if (!f.lb()) {
        var a = f.eb(),
          c = a.gb + a.Ta,
          e = a.Vd + a.bb;
        if (
          a.nc < e ||
          a.nc + a.Wb > a.Sa + e ||
          a.Bc < (b.s ? a.gb : c) ||
          a.Bc + a.oc > (b.s ? a.va : a.va + c)
        )
          for (var m = J(f, !1), n = 0, p; (p = m[n]); n++) {
            var r = p.ka(),
              w = p.tb(),
              v = e + 25 - w.height - r.y;
            0 < v && p.moveBy(0, v);
            v = e + a.Sa - 25 - r.y;
            0 > v && p.moveBy(0, v);
            v = 25 + c - r.x - (b.s ? 0 : w.width);
            0 < v && p.moveBy(v, 0);
            r = c + a.va - 25 - r.x + (b.s ? w.width : 0);
            0 > r && p.moveBy(r, 0);
          }
      }
    });
  B.sg(f);
  B.H.O();
  B.B.O();
  return f;
};
B.Iu = function(a) {
  var b = a.options,
    c = E(a);
  B.J(c.parentNode, "contextmenu", null, function(a) {
    B.h.Kk(a) || a.preventDefault();
  });
  c = B.J(window, "resize", null, function() {
    B.Bb(!0);
    B.sg(a);
  });
  a.kl = c;
  B.Ve.Ys();
  b.Nd &&
    (a.V
      ? a.V.$(a)
      : a.G &&
        (a.G.$(a),
        a.G.show(b.Nd.childNodes),
        a.G.In(),
        (a.scrollX = a.G.aa),
        b.wa == B.wd && (a.scrollX *= -1),
        a.translate(a.scrollX, 0)));
  b.pq && ((a.Xa = new di(a)), a.Xa.resize());
  b.Bu && B.Ve.Wu(b.qd, a);
};
B.Ve.Ys = function() {
  B.Rt ||
    (B.J(document, "keydown", null, B.nv),
    B.rb(document, "touchend", null, B.af),
    B.rb(document, "touchcancel", null, B.af),
    Qb &&
      B.J(window, "orientationchange", document, function() {
        B.sg(B.Vg());
      }));
  B.Rt = !0;
};
B.Ve.Wu = function(a, b) {
  function c() {
    for (; f.length; ) B.Aa(f.pop());
    e.preload();
  }
  var e = b.mc;
  e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
  e.load(
    [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"],
    "disconnect"
  );
  e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
  var f = [];
  f.push(B.J(document, "mousemove", null, c, !0));
  f.push(B.J(document, "touchstart", null, c, !0));
};
B.Xr = function(a) {
  console.warn(
    "Deprecated call to Blockly.updateToolbox, use workspace.updateToolbox instead."
  );
  B.Vg().Xr(a);
};
B.bf = null;
B.selected = null;
B.dk = [];
B.Wh = null;
B.Nj = null;
B.Yz = null;
B.uq = function(a) {
  var b = B.ss,
    c = 255 * B.ts,
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
  return lj([Math.floor(e), Math.floor(f), Math.floor(h)]);
};
B.Tr = function(a) {
  return { width: a.Yo, height: a.Wo };
};
B.sA = function(a) {
  rf(a);
};
B.sg = function(a) {
  for (; a.options.Gc; ) a = a.options.Gc;
  var b = E(a),
    c = b.parentNode;
  if (c) {
    var e = c.offsetWidth;
    c = c.offsetHeight;
    b.Yo != e && (b.setAttribute("width", e + "px"), (b.Yo = e));
    b.Wo != c && (b.setAttribute("height", c + "px"), (b.Wo = c));
    a.resize();
  }
};
B.nv = function(a) {
  if (!B.bf.options.readOnly && !B.h.Kk(a)) {
    var b = !1;
    if (27 == a.keyCode) B.Bb();
    else if (8 == a.keyCode || 46 == a.keyCode) {
      a.preventDefault();
      if (B.bf.lb()) return;
      B.selected && B.selected.Ob() && (b = !0);
    } else if (a.altKey || a.ctrlKey || a.metaKey) {
      if (B.bf.lb()) return;
      B.selected &&
        B.selected.Ob() &&
        B.selected.Md() &&
        (67 == a.keyCode
          ? (B.Bb(), B.bm(B.selected))
          : 88 != a.keyCode || B.selected.o.oe || (B.bm(B.selected), (b = !0)));
      86 == a.keyCode
        ? B.Wh && (B.i.T(!0), (a = B.Nj), a.oe && (a = a.tg), Oi(a), B.i.T(!1))
        : 90 == a.keyCode && (B.Bb(), B.bf.mo(a.shiftKey));
    }
    b &&
      !B.selected.o.oe &&
      (B.i.T(!0), B.Bb(), B.selected.v(!0, !0), B.i.T(!1));
  }
};
B.bm = function(a) {
  if (a.xq) var b = a.nj();
  else {
    b = B.D.Ke(a);
    B.D.Mt(b);
    var c = a.ka();
    b.setAttribute("x", a.s ? -c.x : c.x);
    b.setAttribute("y", c.y);
  }
  B.Wh = b;
  B.Nj = a.o;
};
B.Vp = function(a) {
  var b = B.Wh,
    c = B.Nj;
  B.bm(a);
  Oi(a.o);
  B.Wh = b;
  B.Nj = c;
};
B.nA = function(a) {
  B.h.Kk(a) || a.preventDefault();
};
B.Bb = function(a) {
  B.B.Ca();
  B.H.Ca();
  a || ((a = B.Vg()), a.V && a.V.G && a.V.G.Ig && a.V.fd.Ic(null));
};
B.lc = function(a) {
  console.warn(
    "Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead."
  );
  return B.Vg().lc(a);
};
B.Vg = function() {
  return B.bf;
};
B.alert = function(a, b) {
  window.alert(a);
  b && b();
};
B.confirm = function(a, b) {
  b(window.confirm(a));
};
B.prompt = function(a, b, c) {
  c(window.prompt(a, b));
};
B.Qu = function(a) {
  return function() {
    gj(this, a);
  };
};
B.dA = function(a) {
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
        : (B.$a[e] &&
            console.warn(
              "Block definition #" +
                b +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (B.$a[e] = { $: B.Qu(c) }));
    } else
      console.warn(
        "Block definition #" + b + " in JSON array is " + c + ". Skipping."
      );
  }
};
B.J = function(a, b, c, e, f, h) {
  function k(a) {
    var b = !f;
    a = B.Touch.Lv(a);
    for (var h = 0, k; (k = a[h]); h++)
      if (!b || B.Touch.Zn(k)) B.Touch.Iv(k), c ? e.call(c, k) : e(k), (l = !0);
  }
  var l = !1,
    m = [];
  if (g.PointerEvent && b in B.Touch.xd)
    for (var n = 0, p; (p = B.Touch.xd[b][n]); n++)
      a.addEventListener(p, k, !1), m.push([a, p, k]);
  else if ((a.addEventListener(b, k, !1), m.push([a, b, k]), b in B.Touch.xd)) {
    var r = function(a) {
      k(a);
      var b = !h;
      l && b && a.preventDefault();
    };
    for (n = 0; (p = B.Touch.xd[b][n]); n++)
      a.addEventListener(p, r, !1), m.push([a, p, r]);
  }
  return m;
};
B.rb = function(a, b, c, e) {
  function f(a) {
    c ? e.call(c, a) : e(a);
  }
  var h = [],
    k = g.window;
  if (k && k.PointerEvent && b in B.Touch.xd) {
    k = 0;
    for (var l; (l = B.Touch.xd[b][k]); k++)
      a.addEventListener(l, f, !1), h.push([a, l, f]);
  } else if (
    (a.addEventListener(b, f, !1), h.push([a, b, f]), b in B.Touch.xd)
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
    for (k = 0; (l = B.Touch.xd[b][k]); k++)
      a.addEventListener(l, m, !1), h.push([a, l, m]);
  }
  return h;
};
B.Aa = function(a) {
  for (; a.length; ) {
    var b = a.pop();
    b[0].removeEventListener(b[1], b[2], !1);
  }
};
B.Pu = function(a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
B.gt = function() {
  B.Jb("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  B.Jb("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  B.Jb("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  B.Jb("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  B.Jb("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  B.Jb("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  B.Jb("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  B.Jb("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  B.Jb("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  B.Jb("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  B.Jb("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  B.Jb("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  B.Jb("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  B.Jb("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  B.Jb("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  B.Jb("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
B.Jb = function(a, b, c) {
  for (var e = "Blockly", f = B, h = 0; h < b.length; ++h)
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
g.Blockly.getMainWorkspace = B.Vg;
g.Blockly.addChangeListener = B.lc;
function tl(a, b) {
  var c = a.className;
  c = (q(c) && c.match(/\S+/g)) || [];
  for (var e = Ca(arguments, 1), f = 0; f < e.length; f++)
    wa(c, e[f]) || c.push(e[f]);
  c = c.join(" ");
  a.className = c;
}
var ul = {
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
  vl = "ace ar fa he mzn ps".split(" "),
  wl = window.BlocklyGamesLang,
  xl = window.BlocklyGamesLanguages,
  yl = !!window.location.pathname.match(/\.html$/),
  Q = null;
function zl(a, b, c) {
  var e = Number;
  a = (a = window.location.search.match(new RegExp("[?&]" + a + "=([^&]+)")))
    ? decodeURIComponent(a[1].replace(/\+/g, "%20"))
    : "NaN";
  e = e(a);
  return isNaN(e) ? b : Math.min(Math.max(b, e), c);
}
var R = zl("level", 1, 10);
function Al() {
  document.title = document.getElementById("title").textContent;
  document.dir = -1 != vl.indexOf(wl) ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", wl);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var b = [], c = 0; c < xl.length; c++) {
      var e = xl[c];
      b.push([ul[e], e]);
    }
    b.sort(function(a, b) {
      return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
    });
    for (c = a.options.length = 0; c < b.length; c++) {
      var f = b[c];
      e = f[1];
      f = new Option(f[0], e);
      e == wl && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (c = 1; 10 >= c; c++)
    (a = document.getElementById("level" + c)),
      (b = !!Bl(c)),
      a && b && tl(a, "level_done");
  (c = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(Cl, 1);
}
function Bl(a) {
  var b = Dl;
  try {
    var c = window.localStorage[b + a];
  } catch (e) {}
  return c;
}
function S(a) {
  var b;
  (b = document.getElementById(a))
    ? ((b = b.textContent), (b = b.replace(/\\n/g, "\n")))
    : (b = null);
  return null === b ? "[Unknown message: " + a + "]" : b;
}
function El(a, b) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", b, !0);
  a.addEventListener("touchend", b, !0);
}
function Cl() {
  if (!yl) {
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
B.g.gA = {};
B.g.ADD_COMMENT = "A\u00f1adir comentario";
B.g.CANNOT_DELETE_VARIABLE_PROCEDURE =
  'No se puede eliminar la variable "%1" porque es parte de la definici\u00f3n de la funci\u00f3n "%2"';
B.g.CHANGE_VALUE_TITLE = "Cambiar el valor:";
B.g.CLEAN_UP = "Limpiar los bloques";
B.g.COLLAPSE_ALL = "Contraer bloques";
B.g.COLLAPSE_BLOCK = "Contraer bloque";
B.g.COLOUR_BLEND_COLOUR1 = "color 1";
B.g.COLOUR_BLEND_COLOUR2 = "color 2";
B.g.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";
B.g.COLOUR_BLEND_RATIO = "proporci\u00f3n";
B.g.COLOUR_BLEND_TITLE = "combinar";
B.g.COLOUR_BLEND_TOOLTIP =
  "Combina dos colores con una proporci\u00f3n determinada (0,0\u20131,0).";
B.g.COLOUR_PICKER_HELPURL = "https://es.wikipedia.org/wiki/Color";
B.g.COLOUR_PICKER_TOOLTIP = "Elige un color de la paleta.";
B.g.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
B.g.COLOUR_RANDOM_TITLE = "color aleatorio";
B.g.COLOUR_RANDOM_TOOLTIP = "Elige un color al azar.";
B.g.COLOUR_RGB_BLUE = "azul";
B.g.COLOUR_RGB_GREEN = "verde";
B.g.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";
B.g.COLOUR_RGB_RED = "rojo";
B.g.COLOUR_RGB_TITLE = "colorear con";
B.g.COLOUR_RGB_TOOLTIP =
  "Crea un color con cantidades espec\u00edficas de rojo, verde y azul. Todos los valores deben encontrarse entre 0 y 100.";
B.g.CONTROLS_FLOW_STATEMENTS_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
B.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "romper el bucle";
B.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE =
  "continuar con la siguiente iteraci\u00f3n del bucle";
B.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Romper el bucle que lo contiene.";
B.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE =
  "Saltar el resto de este bucle, y continuar con la siguiente iteraci\u00f3n.";
B.g.CONTROLS_FLOW_STATEMENTS_WARNING =
  "Atenci\u00f3n: este bloque puede usarse solamente dentro de un bucle.";
B.g.CONTROLS_FOREACH_HELPURL = "https://es.wikipedia.org/wiki/Foreach";
B.g.CONTROLS_FOREACH_TITLE = "para cada elemento %1 en la lista %2";
B.g.CONTROLS_FOREACH_TOOLTIP =
  "Para cada elemento en una lista, establecer la variable '%1' al elemento y luego hacer algunas declaraciones.";
B.g.CONTROLS_FOR_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#count-with";
B.g.CONTROLS_FOR_TITLE = "contar con %1 desde %2 hasta %3 de a %4";
B.g.CONTROLS_FOR_TOOLTIP =
  'Hacer que la variable "%1" tome los valores desde el n\u00famero de inicio hasta el n\u00famero final, contando con el intervalo especificado, y hacer los bloques especificados.';
B.g.CONTROLS_IF_ELSEIF_TOOLTIP = "Agregar una condici\u00f3n a este bloque.";
B.g.CONTROLS_IF_ELSE_TOOLTIP =
  "Agregar una condici\u00f3n general final a este bloque.";
B.g.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
B.g.CONTROLS_IF_IF_TOOLTIP =
  "Agregar, eliminar o reordenar las secciones para reconfigurar este bloque.";
B.g.CONTROLS_IF_MSG_ELSE = "sino";
B.g.CONTROLS_IF_MSG_ELSEIF = "sino si";
B.g.CONTROLS_IF_MSG_IF = "si";
B.g.CONTROLS_IF_TOOLTIP_1 =
  "Si un valor es verdadero, entonces hacer algunas declaraciones.";
B.g.CONTROLS_IF_TOOLTIP_2 =
  "Si un valor es verdadero, entonces hacer el primer bloque de declaraciones.  De lo contrario, hacer el segundo bloque de declaraciones.";
B.g.CONTROLS_IF_TOOLTIP_3 =
  "Si el primer valor es verdadero, entonces hacer el primer bloque de declaraciones. De lo contrario, si el segundo valor es verdadero, hacer el segundo bloque de declaraciones.";
B.g.CONTROLS_IF_TOOLTIP_4 =
  "Si el primer valor es verdadero, entonces hacer el primer bloque de declaraciones. De lo contrario, si el segundo valor es verdadero, hacer el segundo bloque de declaraciones. Si ninguno de los valores son verdaderos, hacer el \u00faltimo bloque de declaraciones.";
B.g.CONTROLS_REPEAT_HELPURL = "https://es.wikipedia.org/wiki/Bucle_for";
B.g.CONTROLS_REPEAT_INPUT_DO = "hacer";
B.g.CONTROLS_REPEAT_TITLE = "repetir %1 veces";
B.g.CONTROLS_REPEAT_TOOLTIP = "Hacer algunas declaraciones varias veces.";
B.g.CONTROLS_WHILEUNTIL_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#repeat";
B.g.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repetir hasta";
B.g.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repetir mientras";
B.g.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL =
  "Mientras un valor sea falso, entonces hacer algunas declaraciones.";
B.g.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE =
  "Mientras un valor sea verdadero, entonces hacer algunas declaraciones.";
B.g.DELETE_ALL_BLOCKS = "\u00bfEliminar todos los %1 bloques?";
B.g.DELETE_BLOCK = "Eliminar bloque";
B.g.DELETE_VARIABLE = 'Borrar la variable "%1"';
B.g.DELETE_VARIABLE_CONFIRMATION = '\u00bfBorrar %1 usos de la variable "%2"?';
B.g.DELETE_X_BLOCKS = "Eliminar %1 bloques";
B.g.DISABLE_BLOCK = "Desactivar bloque";
B.g.DUPLICATE_BLOCK = "Duplicar";
B.g.DUPLICATE_COMMENT = "Duplicar comentario";
B.g.ENABLE_BLOCK = "Activar bloque";
B.g.EXPAND_ALL = "Expandir bloques";
B.g.EXPAND_BLOCK = "Expandir bloque";
B.g.EXTERNAL_INPUTS = "Entradas externas";
B.g.HELP = "Ayuda";
B.g.INLINE_INPUTS = "Entradas en l\u00ednea";
B.g.IOS_CANCEL = "Cancelar";
B.g.IOS_ERROR = "Error";
B.g.IOS_OK = "Aceptar";
B.g.IOS_PROCEDURES_ADD_INPUT = "+ A\u00f1adir entrada";
B.g.IOS_PROCEDURES_ALLOW_STATEMENTS = "Permitir declaraciones";
B.g.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR =
  "Esta funci\u00f3n tiene entradas duplicadas.";
B.g.IOS_PROCEDURES_INPUTS = "ENTRADAS";
B.g.IOS_VARIABLES_ADD_BUTTON = "A\u00f1adir";
B.g.IOS_VARIABLES_ADD_VARIABLE = "+ A\u00f1adir variable";
B.g.IOS_VARIABLES_DELETE_BUTTON = "Borrar";
B.g.IOS_VARIABLES_EMPTY_NAME_ERROR =
  "No puedes usar un nombre de variable vac\u00edo.";
B.g.IOS_VARIABLES_RENAME_BUTTON = "Renombrar";
B.g.IOS_VARIABLES_VARIABLE_NAME = "Nombre de la variable";
B.g.LISTS_CREATE_EMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-empty-list";
B.g.LISTS_CREATE_EMPTY_TITLE = "crear lista vac\u00eda";
B.g.LISTS_CREATE_EMPTY_TOOLTIP =
  "Devuelve una lista, de longitud 0, sin ning\u00fan dato";
B.g.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "lista";
B.g.LISTS_CREATE_WITH_CONTAINER_TOOLTIP =
  "Agregar, eliminar o reorganizar las secciones para reconfigurar este bloque de lista.";
B.g.LISTS_CREATE_WITH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
B.g.LISTS_CREATE_WITH_INPUT_WITH = "crear lista con";
B.g.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Agregar un elemento a la lista.";
B.g.LISTS_CREATE_WITH_TOOLTIP =
  "Crear una lista con cualquier n\u00famero de elementos.";
B.g.LISTS_GET_INDEX_FIRST = "primero";
B.g.LISTS_GET_INDEX_FROM_END = "# del final";
B.g.LISTS_GET_INDEX_FROM_START = "#";
B.g.LISTS_GET_INDEX_GET = "obtener";
B.g.LISTS_GET_INDEX_GET_REMOVE = "obtener y eliminar";
B.g.LISTS_GET_INDEX_LAST = "\u00faltimo";
B.g.LISTS_GET_INDEX_RANDOM = "aleatorio";
B.g.LISTS_GET_INDEX_REMOVE = "eliminar";
B.g.LISTS_GET_INDEX_TAIL = "";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_FIRST =
  "Devuelve el primer elemento de una lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM =
  "Devuelve el elemento en la posici\u00f3n especificada en una lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_LAST =
  "Devuelve el \u00faltimo elemento de una lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM =
  "Devuelve un elemento aleatorio en una lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST =
  "Elimina y devuelve el primer elemento de una lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM =
  "Elimina y devuelve el elemento en la posici\u00f3n especificada en una lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST =
  "Elimina y devuelve el \u00faltimo elemento de una lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM =
  "Elimina y devuelve un elemento aleatorio en una lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST =
  "Elimina el primer elemento de una lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM =
  "Elimina el elemento en la posici\u00f3n especificada en una lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST =
  "Elimina el \u00faltimo elemento de una lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM =
  "Elimina un elemento aleatorio en una lista.";
B.g.LISTS_GET_SUBLIST_END_FROM_END = "hasta # del final";
B.g.LISTS_GET_SUBLIST_END_FROM_START = "hasta #";
B.g.LISTS_GET_SUBLIST_END_LAST = "hasta el \u00faltimo";
B.g.LISTS_GET_SUBLIST_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
B.g.LISTS_GET_SUBLIST_START_FIRST = "obtener sublista desde el primero";
B.g.LISTS_GET_SUBLIST_START_FROM_END = "obtener sublista desde # del final";
B.g.LISTS_GET_SUBLIST_START_FROM_START = "obtener sublista desde #";
B.g.LISTS_GET_SUBLIST_TAIL = "";
B.g.LISTS_GET_SUBLIST_TOOLTIP =
  "Crea una copia de la parte especificada de una lista.";
B.g.LISTS_INDEX_FROM_END_TOOLTIP = "%1 es el \u00faltimo elemento.";
B.g.LISTS_INDEX_FROM_START_TOOLTIP = "%1 es el primer elemento.";
B.g.LISTS_INDEX_OF_FIRST = "encontrar la primera aparici\u00f3n del elemento";
B.g.LISTS_INDEX_OF_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
B.g.LISTS_INDEX_OF_LAST =
  "encontrar la \u00faltima aparici\u00f3n del elemento";
B.g.LISTS_INDEX_OF_TOOLTIP =
  "Devuelve el \u00edndice de la primera/\u00faltima aparici\u00f3n del elemento en la lista. Devuelve %1 si el elemento no se encuentra.";
B.g.LISTS_INLIST = "en la lista";
B.g.LISTS_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#is-empty";
B.g.LISTS_ISEMPTY_TITLE = "%1 est\u00e1 vac\u00eda";
B.g.LISTS_ISEMPTY_TOOLTIP =
  "Devuelve verdadero si la lista est\u00e1 vac\u00eda.";
B.g.LISTS_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#length-of";
B.g.LISTS_LENGTH_TITLE = "longitud de %1";
B.g.LISTS_LENGTH_TOOLTIP = "Devuelve la longitud de una lista.";
B.g.LISTS_REPEAT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
B.g.LISTS_REPEAT_TITLE = "crear lista con el elemento %1 repetido %2 veces";
B.g.LISTS_REPEAT_TOOLTIP =
  "Crea una lista que consta de un valor dado repetido el n\u00famero de veces especificado.";
B.g.LISTS_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
B.g.LISTS_REVERSE_MESSAGE0 = "invertir %1";
B.g.LISTS_REVERSE_TOOLTIP = "Invertir una copia de una lista.";
B.g.LISTS_SET_INDEX_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#in-list--set";
B.g.LISTS_SET_INDEX_INPUT_TO = "como";
B.g.LISTS_SET_INDEX_INSERT = "insertar en";
B.g.LISTS_SET_INDEX_SET = "establecer";
B.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST =
  "Inserta el elemento al inicio de una lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM =
  "Inserta el elemento en la posici\u00f3n especificada en una lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST =
  "A\u00f1ade el elemento al final de una lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM =
  "Inserta el elemento aleatoriamente en una lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_SET_FIRST =
  "Establece el primer elemento de una lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM =
  "Establece el elemento en la posici\u00f3n especificada en una lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_SET_LAST =
  "Establece el \u00faltimo elemento de una lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM =
  "Establece un elemento aleatorio en una lista.";
B.g.LISTS_SORT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
B.g.LISTS_SORT_ORDER_ASCENDING = "ascendente";
B.g.LISTS_SORT_ORDER_DESCENDING = "descendente";
B.g.LISTS_SORT_TITLE = "orden %1 %2 %3";
B.g.LISTS_SORT_TOOLTIP = "Ordenar una copia de una lista.";
B.g.LISTS_SORT_TYPE_IGNORECASE =
  "alfab\u00e9tico, ignorar may\u00fascula/min\u00fascula";
B.g.LISTS_SORT_TYPE_NUMERIC = "num\u00e9rico";
B.g.LISTS_SORT_TYPE_TEXT = "alfab\u00e9tico";
B.g.LISTS_SPLIT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
B.g.LISTS_SPLIT_LIST_FROM_TEXT = "hacer lista a partir de texto";
B.g.LISTS_SPLIT_TEXT_FROM_LIST = "hacer texto a partir de lista";
B.g.LISTS_SPLIT_TOOLTIP_JOIN =
  "Unir una lista de textos en un solo texto, separado por un delimitador.";
B.g.LISTS_SPLIT_TOOLTIP_SPLIT =
  "Dividir el texto en una lista de textos, separando en cada delimitador.";
B.g.LISTS_SPLIT_WITH_DELIMITER = "con delimitador";
B.g.LOGIC_BOOLEAN_FALSE = "falso";
B.g.LOGIC_BOOLEAN_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#values";
B.g.LOGIC_BOOLEAN_TOOLTIP = "Devuelve verdadero o falso.";
B.g.LOGIC_BOOLEAN_TRUE = "verdadero";
B.g.LOGIC_COMPARE_HELPURL =
  "https://es.wikipedia.org/wiki/Desigualdad_matem\u00e1tica";
B.g.LOGIC_COMPARE_TOOLTIP_EQ =
  "Devuelve verdadero si ambas entradas son iguales.";
B.g.LOGIC_COMPARE_TOOLTIP_GT =
  "Devuelve verdadero si la primera entrada es mayor que la segunda entrada.";
B.g.LOGIC_COMPARE_TOOLTIP_GTE =
  "Devuelve verdadero si la primera entrada es mayor o igual a la segunda entrada.";
B.g.LOGIC_COMPARE_TOOLTIP_LT =
  "Devuelve verdadero si la primera entrada es menor que la segunda entrada.";
B.g.LOGIC_COMPARE_TOOLTIP_LTE =
  "Devuelve verdadero si la primera entrada es menor que o igual a la segunda entrada.";
B.g.LOGIC_COMPARE_TOOLTIP_NEQ =
  "Devuelve verdadero si ambas entradas son distintas.";
B.g.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
B.g.LOGIC_NEGATE_TITLE = "no %1";
B.g.LOGIC_NEGATE_TOOLTIP =
  "Devuelve verdadero si la entrada es falsa. Devuelve falso si la entrada es verdadera.";
B.g.LOGIC_NULL = "nulo";
B.g.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
B.g.LOGIC_NULL_TOOLTIP = "Devuelve nulo.";
B.g.LOGIC_OPERATION_AND = "y";
B.g.LOGIC_OPERATION_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#logical-operations";
B.g.LOGIC_OPERATION_OR = "o";
B.g.LOGIC_OPERATION_TOOLTIP_AND =
  "Devuelve verdadero si ambas entradas son verdaderas.";
B.g.LOGIC_OPERATION_TOOLTIP_OR =
  "Devuelve verdadero si al menos una de las entradas es verdadera.";
B.g.LOGIC_TERNARY_CONDITION = "prueba";
B.g.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
B.g.LOGIC_TERNARY_IF_FALSE = "si es falso";
B.g.LOGIC_TERNARY_IF_TRUE = "si es verdadero";
B.g.LOGIC_TERNARY_TOOLTIP =
  'Comprueba la condici\u00f3n en "prueba". Si la condici\u00f3n es verdadera, devuelve el valor "si es verdadero"; de lo contrario, devuelve el valor "si es falso".';
B.g.MATH_ADDITION_SYMBOL = "+";
B.g.MATH_ARITHMETIC_HELPURL = "https://es.wikipedia.org/wiki/Aritm\u00e9tica";
B.g.MATH_ARITHMETIC_TOOLTIP_ADD = "Devuelve la suma de ambos n\u00fameros.";
B.g.MATH_ARITHMETIC_TOOLTIP_DIVIDE =
  "Devuelve el cociente de ambos n\u00fameros.";
B.g.MATH_ARITHMETIC_TOOLTIP_MINUS =
  "Devuelve la diferencia de ambos n\u00fameros.";
B.g.MATH_ARITHMETIC_TOOLTIP_MULTIPLY =
  "Devuelve el producto de ambos n\u00fameros.";
B.g.MATH_ARITHMETIC_TOOLTIP_POWER =
  "Devuelve el primer n\u00famero elevado a la potencia del segundo.";
B.g.MATH_CHANGE_HELPURL =
  "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
B.g.MATH_CHANGE_TITLE = "a\u00f1adir %2 a %1";
B.g.MATH_CHANGE_TOOLTIP =
  "A\u00f1adir un n\u00famero a la variable \u00ab%1\u00bb.";
B.g.MATH_CONSTANT_HELPURL =
  "https://es.wikipedia.org/wiki/Anexo:Constantes_matem\u00e1ticas";
B.g.MATH_CONSTANT_TOOLTIP =
  "Devuelve una de las constantes comunes: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026) o \u221e (infinito).";
B.g.MATH_CONSTRAIN_HELPURL =
  "https://en.wikipedia.org/wiki/Clamping_(graphics)";
B.g.MATH_CONSTRAIN_TITLE = "limitar %1 entre %2 y %3";
B.g.MATH_CONSTRAIN_TOOLTIP =
  "Limitar un n\u00famero entre los l\u00edmites especificados (inclusive).";
B.g.MATH_DIVISION_SYMBOL = "\u00f7";
B.g.MATH_IS_DIVISIBLE_BY = "es divisible por";
B.g.MATH_IS_EVEN = "es par";
B.g.MATH_IS_NEGATIVE = "es negativo";
B.g.MATH_IS_ODD = "es impar";
B.g.MATH_IS_POSITIVE = "es positivo";
B.g.MATH_IS_PRIME = "es primo";
B.g.MATH_IS_TOOLTIP =
  "Comprueba si un n\u00famero es par, impar, primo, entero, positivo, negativo, o si es divisible por un n\u00famero determinado. Devuelve verdadero o falso.";
B.g.MATH_IS_WHOLE = "es entero";
B.g.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
B.g.MATH_MODULO_TITLE = "resto de %1 \u00f7 %2";
B.g.MATH_MODULO_TOOLTIP = "Devuelve el resto al dividir los dos n\u00fameros.";
B.g.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
B.g.MATH_NUMBER_HELPURL = "https://es.wikipedia.org/wiki/N\u00famero";
B.g.MATH_NUMBER_TOOLTIP = "Un n\u00famero.";
B.g.MATH_ONLIST_HELPURL = "";
B.g.MATH_ONLIST_OPERATOR_AVERAGE = "promedio de la lista";
B.g.MATH_ONLIST_OPERATOR_MAX = "m\u00e1ximo de la lista";
B.g.MATH_ONLIST_OPERATOR_MEDIAN = "mediana de la lista";
B.g.MATH_ONLIST_OPERATOR_MIN = "m\u00ednimo de la lista";
B.g.MATH_ONLIST_OPERATOR_MODE = "modas de la lista";
B.g.MATH_ONLIST_OPERATOR_RANDOM = "elemento aleatorio de la lista";
B.g.MATH_ONLIST_OPERATOR_STD_DEV = "desviaci\u00f3n est\u00e1ndar de la lista";
B.g.MATH_ONLIST_OPERATOR_SUM = "suma de la lista";
B.g.MATH_ONLIST_TOOLTIP_AVERAGE =
  "Devuelve el promedio (media aritm\u00e9tica) de los valores num\u00e9ricos en la lista.";
B.g.MATH_ONLIST_TOOLTIP_MAX =
  "Devuelve el n\u00famero m\u00e1s grande en la lista.";
B.g.MATH_ONLIST_TOOLTIP_MEDIAN = "Devuelve la mediana en la lista.";
B.g.MATH_ONLIST_TOOLTIP_MIN =
  "Devuelve el n\u00famero m\u00e1s peque\u00f1o en la lista.";
B.g.MATH_ONLIST_TOOLTIP_MODE =
  "Devuelve una lista de los elementos m\u00e1s comunes en la lista.";
B.g.MATH_ONLIST_TOOLTIP_RANDOM = "Devuelve un elemento aleatorio de la lista.";
B.g.MATH_ONLIST_TOOLTIP_STD_DEV =
  "Devuelve la desviaci\u00f3n est\u00e1ndar de la lista.";
B.g.MATH_ONLIST_TOOLTIP_SUM =
  "Devuelve la suma de todos los n\u00fameros en la lista.";
B.g.MATH_POWER_SYMBOL = "^";
B.g.MATH_RANDOM_FLOAT_HELPURL =
  "https://es.wikipedia.org/wiki/Generador_de_n\u00fameros_aleatorios";
B.g.MATH_RANDOM_FLOAT_TITLE_RANDOM = "fracci\u00f3n aleatoria";
B.g.MATH_RANDOM_FLOAT_TOOLTIP =
  "Devuelve una fracci\u00f3n aleatoria entre 0,0 (ambos inclusive) y 1.0 (exclusivo).";
B.g.MATH_RANDOM_INT_HELPURL =
  "https://es.wikipedia.org/wiki/Generador_de_n\u00fameros_aleatorios";
B.g.MATH_RANDOM_INT_TITLE = "entero aleatorio de %1 a %2";
B.g.MATH_RANDOM_INT_TOOLTIP =
  "Devuelve un entero aleatorio entre los dos l\u00edmites especificados, inclusive.";
B.g.MATH_ROUND_HELPURL = "https://es.wikipedia.org/wiki/Redondeo";
B.g.MATH_ROUND_OPERATOR_ROUND = "redondear";
B.g.MATH_ROUND_OPERATOR_ROUNDDOWN = "redondear a la baja";
B.g.MATH_ROUND_OPERATOR_ROUNDUP = "redondear al alza";
B.g.MATH_ROUND_TOOLTIP = "Redondear un n\u00famero al alza o a la baja.";
B.g.MATH_SINGLE_HELPURL = "https://es.wikipedia.org/wiki/Ra%C3%ADz_cuadrada";
B.g.MATH_SINGLE_OP_ABSOLUTE = "absoluto";
B.g.MATH_SINGLE_OP_ROOT = "ra\u00edz cuadrada";
B.g.MATH_SINGLE_TOOLTIP_ABS = "Devuelve el valor absoluto de un n\u00famero.";
B.g.MATH_SINGLE_TOOLTIP_EXP = "Devuelve e a la potencia de un n\u00famero.";
B.g.MATH_SINGLE_TOOLTIP_LN = "Devuelve el logaritmo natural de un n\u00famero.";
B.g.MATH_SINGLE_TOOLTIP_LOG10 =
  "Devuelve el logaritmo base 10 de un n\u00famero.";
B.g.MATH_SINGLE_TOOLTIP_NEG = "Devuelve la negaci\u00f3n de un n\u00famero.";
B.g.MATH_SINGLE_TOOLTIP_POW10 = "Devuelve 10 a la potencia de un n\u00famero.";
B.g.MATH_SINGLE_TOOLTIP_ROOT =
  "Devuelve la ra\u00edz cuadrada de un n\u00famero.";
B.g.MATH_SUBTRACTION_SYMBOL = "-";
B.g.MATH_TRIG_ACOS = "acos";
B.g.MATH_TRIG_ASIN = "asin";
B.g.MATH_TRIG_ATAN = "atan";
B.g.MATH_TRIG_COS = "cos";
B.g.MATH_TRIG_HELPURL =
  "https://es.wikipedia.org/wiki/Funci\u00f3n_trigonom\u00e9trica";
B.g.MATH_TRIG_SIN = "sin";
B.g.MATH_TRIG_TAN = "tan";
B.g.MATH_TRIG_TOOLTIP_ACOS = "Devuelve el arcocoseno de un n\u00famero.";
B.g.MATH_TRIG_TOOLTIP_ASIN = "Devuelve el arcoseno de un n\u00famero.";
B.g.MATH_TRIG_TOOLTIP_ATAN = "Devuelve el arcotangente de un n\u00famero.";
B.g.MATH_TRIG_TOOLTIP_COS = "Devuelve el coseno de un grado (no radi\u00e1n).";
B.g.MATH_TRIG_TOOLTIP_SIN = "Devuelve el seno de un grado (no radi\u00e1n).";
B.g.MATH_TRIG_TOOLTIP_TAN =
  "Devuelve la tangente de un grado (no radi\u00e1n).";
B.g.NEW_COLOUR_VARIABLE = "Create colour variable...";
B.g.NEW_NUMBER_VARIABLE = "Create number variable...";
B.g.NEW_STRING_VARIABLE = "Create string variable...";
B.g.NEW_VARIABLE = "Crear variable\u2026";
B.g.NEW_VARIABLE_TITLE = "Nombre de variable nueva:";
B.g.NEW_VARIABLE_TYPE_TITLE = "New variable type:";
B.g.ORDINAL_NUMBER_SUFFIX = "";
B.g.PROCEDURES_ALLOW_STATEMENTS = "permitir declaraciones";
B.g.PROCEDURES_BEFORE_PARAMS = "con:";
B.g.PROCEDURES_CALLNORETURN_HELPURL = "https://es.wikipedia.org/wiki/Subrutina";
B.g.PROCEDURES_CALLNORETURN_TOOLTIP =
  "Ejecuta la funci\u00f3n definida por el usuario '%1'.";
B.g.PROCEDURES_CALLRETURN_HELPURL = "https://es.wikipedia.org/wiki/Subrutina";
B.g.PROCEDURES_CALLRETURN_TOOLTIP =
  "Ejecuta la funci\u00f3n definida por el usuario '%1' y usa su salida.";
B.g.PROCEDURES_CALL_BEFORE_PARAMS = "con:";
B.g.PROCEDURES_CREATE_DO = "Crear '%1'";
B.g.PROCEDURES_DEFNORETURN_COMMENT = "Describe esta funci\u00f3n...";
B.g.PROCEDURES_DEFNORETURN_DO = "";
B.g.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
B.g.PROCEDURES_DEFNORETURN_PROCEDURE = "hacer algo";
B.g.PROCEDURES_DEFNORETURN_TITLE = "para";
B.g.PROCEDURES_DEFNORETURN_TOOLTIP = "Crea una funci\u00f3n sin salida.";
B.g.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
B.g.PROCEDURES_DEFRETURN_RETURN = "devuelve";
B.g.PROCEDURES_DEFRETURN_TOOLTIP = "Crea una funci\u00f3n con una salida.";
B.g.PROCEDURES_DEF_DUPLICATE_WARNING =
  "Advertencia: Esta funci\u00f3n tiene par\u00e1metros duplicados.";
B.g.PROCEDURES_HIGHLIGHT_DEF = "Destacar definici\u00f3n de la funci\u00f3n";
B.g.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
B.g.PROCEDURES_IFRETURN_TOOLTIP =
  "Si un valor es verdadero, entonces devuelve un segundo valor.";
B.g.PROCEDURES_IFRETURN_WARNING =
  "Advertencia: Este bloque solo puede ser utilizado dentro de la definici\u00f3n de una funci\u00f3n.";
B.g.PROCEDURES_MUTATORARG_TITLE = "nombre de entrada:";
B.g.PROCEDURES_MUTATORARG_TOOLTIP =
  "A\u00f1adir una entrada a la funci\u00f3n.";
B.g.PROCEDURES_MUTATORCONTAINER_TITLE = "entradas";
B.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP =
  "A\u00f1adir, eliminar o reordenar entradas para esta funci\u00f3n.";
B.g.REDO = "Rehacer";
B.g.REMOVE_COMMENT = "Eliminar comentario";
B.g.RENAME_VARIABLE = "Renombrar la variable\u2026";
B.g.RENAME_VARIABLE_TITLE = "Renombrar todas las variables \u00ab%1\u00bb a:";
B.g.TEXT_APPEND_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-modification";
B.g.TEXT_APPEND_TITLE = "a %1 a\u00f1ade el texto %2";
B.g.TEXT_APPEND_TOOLTIP = "A\u00f1adir texto a la variable '%1'.";
B.g.TEXT_CHANGECASE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
B.g.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "a min\u00fasculas";
B.g.TEXT_CHANGECASE_OPERATOR_TITLECASE = "a May\u00fasculas Cada Palabra";
B.g.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "a MAY\u00daSCULAS";
B.g.TEXT_CHANGECASE_TOOLTIP =
  "Devuelve una copia del texto en un tama\u00f1o diferente.";
B.g.TEXT_CHARAT_FIRST = "obtener la primera letra";
B.g.TEXT_CHARAT_FROM_END = "obtener la letra # del final";
B.g.TEXT_CHARAT_FROM_START = "obtener la letra #";
B.g.TEXT_CHARAT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#extracting-text";
B.g.TEXT_CHARAT_LAST = "obtener la \u00faltima letra";
B.g.TEXT_CHARAT_RANDOM = "obtener letra aleatoria";
B.g.TEXT_CHARAT_TAIL = "";
B.g.TEXT_CHARAT_TITLE = "en el texto %1 %2";
B.g.TEXT_CHARAT_TOOLTIP = "Devuelve la letra en la posici\u00f3n especificada.";
B.g.TEXT_COUNT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#counting-substrings";
B.g.TEXT_COUNT_MESSAGE0 = "contar %1 en %2";
B.g.TEXT_COUNT_TOOLTIP = "Cuantas veces aparece un texto dentro de otro texto.";
B.g.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Agregar un elemento al texto.";
B.g.TEXT_CREATE_JOIN_TITLE_JOIN = "unir";
B.g.TEXT_CREATE_JOIN_TOOLTIP =
  "Agregar, eliminar o reordenar las secciones para reconfigurar este bloque de texto.";
B.g.TEXT_GET_SUBSTRING_END_FROM_END = "hasta la letra # del final";
B.g.TEXT_GET_SUBSTRING_END_FROM_START = "hasta la letra #";
B.g.TEXT_GET_SUBSTRING_END_LAST = "hasta la \u00faltima letra";
B.g.TEXT_GET_SUBSTRING_HELPURL =
  "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
B.g.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "en el texto";
B.g.TEXT_GET_SUBSTRING_START_FIRST = "obtener subcadena desde la primera letra";
B.g.TEXT_GET_SUBSTRING_START_FROM_END =
  "obtener subcadena desde la letra # del final";
B.g.TEXT_GET_SUBSTRING_START_FROM_START = "obtener subcadena desde la letra #";
B.g.TEXT_GET_SUBSTRING_TAIL = "";
B.g.TEXT_GET_SUBSTRING_TOOLTIP =
  "Devuelve una porci\u00f3n determinada del texto.";
B.g.TEXT_INDEXOF_HELPURL =
  "https://github.com/google/blockly/wiki/Text#finding-text";
B.g.TEXT_INDEXOF_OPERATOR_FIRST =
  "encontrar la primera aparici\u00f3n del texto";
B.g.TEXT_INDEXOF_OPERATOR_LAST =
  "encontrar la \u00faltima aparici\u00f3n del texto";
B.g.TEXT_INDEXOF_TITLE = "en el texto %1 %2 %3";
B.g.TEXT_INDEXOF_TOOLTIP =
  "Devuelve el \u00edndice de la primera/\u00faltima aparici\u00f3n del primer texto en el segundo texto. Devuelve %1 si el texto no se encuentra.";
B.g.TEXT_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
B.g.TEXT_ISEMPTY_TITLE = "%1 est\u00e1 vac\u00edo";
B.g.TEXT_ISEMPTY_TOOLTIP =
  "Devuelve verdadero si el texto proporcionado est\u00e1 vac\u00edo.";
B.g.TEXT_JOIN_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-creation";
B.g.TEXT_JOIN_TITLE_CREATEWITH = "crear texto con";
B.g.TEXT_JOIN_TOOLTIP =
  "Crear un fragmento de texto al unir cualquier n\u00famero de elementos.";
B.g.TEXT_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-modification";
B.g.TEXT_LENGTH_TITLE = "longitud de %1";
B.g.TEXT_LENGTH_TOOLTIP =
  "Devuelve el n\u00famero de letras (espacios incluidos) del texto proporcionado.";
B.g.TEXT_PRINT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#printing-text";
B.g.TEXT_PRINT_TITLE = "imprimir %1";
B.g.TEXT_PRINT_TOOLTIP =
  "Imprimir el texto, n\u00famero u otro valor especificado.";
B.g.TEXT_PROMPT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
B.g.TEXT_PROMPT_TOOLTIP_NUMBER = "Solicitar al usuario un n\u00famero.";
B.g.TEXT_PROMPT_TOOLTIP_TEXT = "Solicitar al usuario un texto.";
B.g.TEXT_PROMPT_TYPE_NUMBER = "solicitar n\u00famero con el mensaje";
B.g.TEXT_PROMPT_TYPE_TEXT = "solicitar texto con el mensaje";
B.g.TEXT_REPLACE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#replacing-substrings";
B.g.TEXT_REPLACE_MESSAGE0 = "reemplazar %1 con %2 en %3";
B.g.TEXT_REPLACE_TOOLTIP =
  "Reemplazar todas las veces que un texto dentro de otro texto.";
B.g.TEXT_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#reversing-text";
B.g.TEXT_REVERSE_MESSAGE0 = "invertir %1";
B.g.TEXT_REVERSE_TOOLTIP = "Invierte el orden de los caracteres en el texto.";
B.g.TEXT_TEXT_HELPURL = "https://es.wikipedia.org/wiki/Cadena_de_caracteres";
B.g.TEXT_TEXT_TOOLTIP = "Una letra, palabra o l\u00ednea de texto.";
B.g.TEXT_TRIM_HELPURL =
  "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
B.g.TEXT_TRIM_OPERATOR_BOTH = "quitar espacios de ambos lados de";
B.g.TEXT_TRIM_OPERATOR_LEFT = "quitar espacios iniciales de";
B.g.TEXT_TRIM_OPERATOR_RIGHT = "quitar espacios finales de";
B.g.TEXT_TRIM_TOOLTIP =
  "Devuelve una copia del texto sin los espacios de uno o ambos extremos.";
B.g.TODAY = "Hoy";
B.g.UNDO = "Deshacer";
B.g.VARIABLES_DEFAULT_NAME = "elemento";
B.g.VARIABLES_GET_CREATE_SET = "Crear 'establecer %1'";
B.g.VARIABLES_GET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#get";
B.g.VARIABLES_GET_TOOLTIP = "Devuelve el valor de esta variable.";
B.g.VARIABLES_SET = "establecer %1 a %2";
B.g.VARIABLES_SET_CREATE_GET = "Crear 'obtener %1'";
B.g.VARIABLES_SET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#set";
B.g.VARIABLES_SET_TOOLTIP =
  "Establece esta variable para que sea igual a la entrada.";
B.g.VARIABLE_ALREADY_EXISTS = 'Ya existe una variable llamada "%1".';
B.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE =
  "Ya existe una variable nombrada '%1' para otra variable del tipo: '%2'.";
B.g.WORKSPACE_COMMENT_DEFAULT_TEXT = "Di algo\u2026";
B.g.PROCEDURES_DEFRETURN_TITLE = B.g.PROCEDURES_DEFNORETURN_TITLE;
B.g.CONTROLS_IF_IF_TITLE_IF = B.g.CONTROLS_IF_MSG_IF;
B.g.CONTROLS_WHILEUNTIL_INPUT_DO = B.g.CONTROLS_REPEAT_INPUT_DO;
B.g.CONTROLS_IF_MSG_THEN = B.g.CONTROLS_REPEAT_INPUT_DO;
B.g.CONTROLS_IF_ELSE_TITLE_ELSE = B.g.CONTROLS_IF_MSG_ELSE;
B.g.PROCEDURES_DEFRETURN_PROCEDURE = B.g.PROCEDURES_DEFNORETURN_PROCEDURE;
B.g.LISTS_GET_SUBLIST_INPUT_IN_LIST = B.g.LISTS_INLIST;
B.g.LISTS_GET_INDEX_INPUT_IN_LIST = B.g.LISTS_INLIST;
B.g.MATH_CHANGE_TITLE_ITEM = B.g.VARIABLES_DEFAULT_NAME;
B.g.PROCEDURES_DEFRETURN_DO = B.g.PROCEDURES_DEFNORETURN_DO;
B.g.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = B.g.CONTROLS_IF_MSG_ELSEIF;
B.g.LISTS_GET_INDEX_HELPURL = B.g.LISTS_INDEX_OF_HELPURL;
B.g.CONTROLS_FOREACH_INPUT_DO = B.g.CONTROLS_REPEAT_INPUT_DO;
B.g.LISTS_SET_INDEX_INPUT_IN_LIST = B.g.LISTS_INLIST;
B.g.CONTROLS_FOR_INPUT_DO = B.g.CONTROLS_REPEAT_INPUT_DO;
B.g.LISTS_CREATE_WITH_ITEM_TITLE = B.g.VARIABLES_DEFAULT_NAME;
B.g.TEXT_APPEND_VARIABLE = B.g.VARIABLES_DEFAULT_NAME;
B.g.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = B.g.VARIABLES_DEFAULT_NAME;
B.g.LISTS_INDEX_OF_INPUT_IN_LIST = B.g.LISTS_INLIST;
B.g.PROCEDURES_DEFRETURN_COMMENT = B.g.PROCEDURES_DEFNORETURN_COMMENT;
B.g.MATH_HUE = "230";
B.g.LOOPS_HUE = "120";
B.g.LISTS_HUE = "260";
B.g.LOGIC_HUE = "210";
B.g.VARIABLES_HUE = "330";
B.g.TEXTS_HUE = "160";
B.g.PROCEDURES_HUE = "290";
B.g.COLOUR_HUE = "20";
B.g.VARIABLES_DYNAMIC_HUE = "310";
var U = {
  Pg: null,
  $: function() {
    Al();
    var a = document.getElementById("linkButton");
    "BlocklyStorage" in window
      ? ((BlocklyStorage.HTTPREQUEST_ERROR = S("Games_httpRequestError")),
        (BlocklyStorage.LINK_ALERT = S("Games_linkAlert")),
        (BlocklyStorage.HASH_ERROR = S("Games_hashError")),
        (BlocklyStorage.XML_ERROR = S("Games_xmlError")),
        (BlocklyStorage.alert = T.Rr.bind(T, a)),
        a && El(a, BlocklyStorage.link))
      : a && (a.style.display = "none");
    (a = document.getElementById("languageMenu")) &&
      a.addEventListener("change", U.ft, !0);
    B.$a && (B.$a.Bs = !1);
    B.C && (B.C.Bs = !1);
  },
  Vu: function(a, b) {
    if ("BlocklyStorage" in window && 1 < window.location.hash.length)
      BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    else {
      var c = null;
      try {
        c = window.sessionStorage.Ym;
      } catch (h) {}
      c && delete window.sessionStorage.Ym;
      var e = Bl(R),
        f = b && Bl(R - 1);
      f && "function" == typeof b && (f = b(f));
      (a = c || e || f || a) && U.Cr(a);
    }
  },
  Cr: function(a) {
    U.Pg
      ? U.Pg.setValue(a, -1)
      : ((a = B.D.Kc(a)), Q.clear(), B.D.fe(a, Q), Q.gp());
  },
  xm: function() {
    if (U.Pg) var a = U.Pg.getValue();
    else {
      a = B.D.uj(Q, !0);
      if (1 == J(Q, !1).length && a.querySelector) {
        var b = a.querySelector("block");
        b && (b.removeAttribute("x"), b.removeAttribute("y"));
      }
      a = B.D.pc(a);
    }
    return a;
  },
  ui: function() {
    return Q;
  },
  Gv: function() {
    window.localStorage && (window.localStorage[Dl + R] = U.xm());
  },
  Gi: function() {
    window.location = (yl ? "index.html" : "./") + "?lang=" + wl;
  },
  ft: function() {
    if (window.sessionStorage) {
      if (U.Pg) var a = U.Pg.getValue();
      else (a = B.D.uj(Q)), (a = B.D.pc(a));
      window.sessionStorage.Ym = a;
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
  Yk: function() {
    10 > R
      ? (window.location =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?lang=" +
          wl +
          "&level=" +
          (R + 1))
      : U.Gi();
  },
  Ck: function(a, b) {
    if (a) {
      var c = a.match(/^block_id_([^']+)$/);
      c && (a = c[1]);
    }
    Ni(a, b);
  },
  Ku: function(a, b) {
    a = document.getElementById(a);
    a.firstChild ||
      ((a = B.Ve(a, { rtl: -1 != vl.indexOf(wl), readOnly: !0 })),
      "string" != typeof b && (b = b.join("")),
      B.D.fe(B.D.Kc(b), a));
  },
  Rv: function(a) {
    return a
      .replace(/(,\s*)?'block_id_[^']+'\)/g, ")")
      .replace(/[\s\xa0]+$/, "");
  },
  Xc: function(a) {
    if (
      ("click" == a.type &&
        "touchend" == U.Xc.wn &&
        U.Xc.vn + 2e3 > Date.now()) ||
      (U.Xc.wn == a.type && U.Xc.vn + 400 > Date.now())
    )
      return a.preventDefault(), a.stopPropagation(), !0;
    U.Xc.wn = a.type;
    U.Xc.vn = Date.now();
    return !1;
  }
};
U.Xc.wn = null;
U.Xc.vn = 0;
U.Gu = function() {
  var a = document.createElement("script");
  a.setAttribute("type", "text/javascript");
  a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
  document.head.appendChild(a);
};
U.Hu = function() {
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
window.BlocklyInterface = U;
U.setCode = U.Cr;
U.getCode = U.xm;
U.getWorkspace = U.ui;
var T = {
  Tf: !1,
  Mp: null,
  $j: null,
  zh: function(a, b, c, e, f, h) {
    function k() {
      T.Tf &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    T.Tf && T.Nb(!1);
    B.Bb(!0);
    T.Tf = !0;
    T.Mp = b;
    T.$j = h;
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
      (T.gm = B.rb(e, "mousedown", null, T.Nt)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    c && b ? (T.Rk(b, !1, 0.2), T.Rk(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  Np: 0,
  Op: 0,
  Nt: function(a) {
    T.jm();
    if (!B.h.Ye(a)) {
      var b = document.getElementById("dialog");
      T.Np = b.offsetLeft - a.clientX;
      T.Op = b.offsetTop - a.clientY;
      T.im = B.rb(document, "mouseup", null, T.jm);
      T.hm = B.rb(document, "mousemove", null, T.Ot);
      a.stopPropagation();
    }
  },
  Ot: function(a) {
    var b = document.getElementById("dialog"),
      c = T.Np + a.clientX;
    a = T.Op + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - b.offsetHeight);
    c = Math.max(c, 0);
    c = Math.min(c, window.innerWidth - b.offsetWidth);
    b.style.left = c + "px";
    b.style.top = a + "px";
  },
  jm: function() {
    T.im && (B.Aa(T.im), (T.im = null));
    T.hm && (B.Aa(T.hm), (T.hm = null));
  },
  Nb: function(a) {
    function b() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (T.Tf) {
      T.jm();
      T.gm && (B.Aa(T.gm), (T.gm = null));
      T.Tf = !1;
      T.$j && T.$j();
      T.$j = null;
      var c = !1 === a ? null : T.Mp;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      c && a ? (T.Rk(a, !1, 0.8), T.Rk(c, !0, 0.2), setTimeout(b, 175)) : b();
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
  Rk: function(a, b, c) {
    function e() {
      f.style.width = h.width + "px";
      f.style.height = h.height + "px";
      f.style.left = h.x + "px";
      f.style.top = h.y + "px";
      f.style.opacity = c;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        h = T.cq(a);
      b
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  cq: function(a) {
    var b = Uf(a);
    b = { x: b.x, y: b.y };
    a.getBBox
      ? ((a = a.getBBox()), (b.height = a.height), (b.width = a.width))
      : ((b.height = a.offsetHeight), (b.width = a.offsetWidth));
    return b;
  },
  Rr: function(a, b) {
    var c = document.getElementById("containerStorage");
    c.textContent = "";
    b = b.split("\n");
    for (var e = 0; e < b.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(b[e]));
      c.appendChild(f);
    }
    c = document.getElementById("dialogStorage");
    T.zh(c, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, T.Qr);
    T.Kr();
  },
  Qo: function() {
    if (!Bl(R))
      if (T.Tf || Q.lb()) setTimeout(T.Qo, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          b = document.getElementById("abortCancel");
        b.addEventListener("click", T.Nb, !0);
        b.addEventListener("touchend", T.Nb, !0);
        b = document.getElementById("abortOk");
        b.addEventListener("click", U.Gi, !0);
        b.addEventListener("touchend", U.Gi, !0);
        T.zh(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function() {
            document.body.removeEventListener("keydown", T.Po, !0);
          }
        );
        document.body.addEventListener("keydown", T.Po, !0);
      }
  },
  Gr: function() {
    document.getElementById("galleryXml").value = U.xm();
    var a = document.getElementById("galleryDialog");
    if (!T.Gr.Fv) {
      var b = document.getElementById("galleryCancel");
      b.addEventListener("click", T.Nb, !0);
      b.addEventListener("touchend", T.Nb, !0);
      b = document.getElementById("galleryOk");
      b.addEventListener("click", T.vm, !0);
      b.addEventListener("touchend", T.vm, !0);
      T.Gr.Fv = !0;
    }
    b = document.getElementById("submitButton");
    T.zh(a, b, !0, !0, { width: "40%", left: "30%", top: "3em" }, function() {
      document.body.removeEventListener("keydown", T.aq, !0);
    });
    document.body.addEventListener("keydown", T.aq, !0);
    setTimeout(function() {
      document.getElementById("galleryTitle").focus();
    }, 250);
  },
  ut: function() {
    var a = document.getElementById("dialogDone");
    if (Q) {
      var b = document.getElementById("dialogLinesText");
      b.textContent = "";
      var c = pk();
      c = U.Rv(c);
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
          ? S("Games_linesOfCode1")
          : S("Games_linesOfCode2").replace("%1", String(e));
      b.appendChild(document.createTextNode(c));
    }
    c =
      10 > R
        ? S("Games_nextLevel").replace("%1", String(R + 1))
        : S("Games_finalLevel");
    b = document.getElementById("doneCancel");
    b.addEventListener("click", T.Nb, !0);
    b.addEventListener("touchend", T.Nb, !0);
    b = document.getElementById("doneOk");
    b.addEventListener("click", U.Yk, !0);
    b.addEventListener("touchend", U.Yk, !0);
    T.zh(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function() {
        document.body.removeEventListener("keydown", T.op, !0);
      }
    );
    document.body.addEventListener("keydown", T.op, !0);
    document.getElementById("dialogDoneText").textContent = c;
  },
  Lp: function(a) {
    !T.Tf ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (T.Nb(!0), a.stopPropagation(), a.preventDefault());
  },
  Kr: function() {
    document.body.addEventListener("keydown", T.Lp, !0);
  },
  Qr: function() {
    document.body.removeEventListener("keydown", T.Lp, !0);
  },
  op: function(a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      T.Nb(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && U.Yk();
  },
  Po: function(a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      T.Nb(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && U.Gi();
  },
  aq: function(a) {
    27 == a.keyCode ? T.Nb(!0) : 13 == a.keyCode && T.vm();
  },
  vm: function() {
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
              ? S("Games_submitted")
              : S("Games_httpRequestError") + "\nStatus: " + f.status;
          T.Rr(null, a);
        }
      };
      f.send(b.join("&"));
      T.Nb(!0);
    } else (a.value = ""), a.focus();
  }
};
window.BlocklyDialogs = T;
T.hideDialog = T.Nb;
// Copyright 2012 Google Inc.  Apache License 2.0
B.C = new cj();
uk(
  "Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan"
);
B.C.oy = 0;
B.C.Hy = 1.1;
B.C.Fj = 1.2;
B.C.Ej = 2;
B.C.Ey = 3;
B.C.yy = 3;
B.C.sy = 4.1;
B.C.Ky = 4.2;
B.C.Go = 4.3;
B.C.Co = 4.4;
B.C.Jy = 4.5;
B.C.Ly = 4.6;
B.C.zy = 4.7;
B.C.py = 4.8;
B.C.Cy = 5;
B.C.Eo = 5.1;
B.C.Ay = 5.2;
B.C.Gy = 5.3;
B.C.Fo = 6.1;
B.C.Dj = 6.2;
B.C.uy = 7;
B.C.Iy = 8;
B.C.Dy = 8;
B.C.Fy = 8;
B.C.By = 9;
B.C.qy = 10;
B.C.vy = 11;
B.C.ty = 12;
B.C.Bo = 13;
B.C.Do = 14;
B.C.xy = 15;
B.C.ny = 16;
B.C.My = 17;
B.C.wy = 18;
B.C.Cs = 99;
B.C.Gj = [
  [B.C.Ej, B.C.Fj],
  [B.C.Ej, B.C.Ej],
  [B.C.Fj, B.C.Fj],
  [B.C.Fj, B.C.Ej],
  [B.C.Co, B.C.Co],
  [B.C.Eo, B.C.Eo],
  [B.C.Dj, B.C.Dj],
  [B.C.Bo, B.C.Bo],
  [B.C.Do, B.C.Do]
];
B.C.$ = function(a) {
  B.C.Xj = Object.create(null);
  B.C.bu = Object.create(null);
  B.C.Gh ? B.C.Gh.reset() : (B.C.Gh = new vk());
  B.C.Gh.na = a.na;
  for (var b = [], c = B.I.Rs(a), e = 0; e < c.length; e++)
    b.push(B.C.Gh.getName(c[e], "DEVELOPER_VARIABLE"));
  a = B.I.So(a);
  for (e = 0; e < a.length; e++) b.push(B.C.Gh.getName(a[e].ga(), B.I.Ph));
  b.length && (B.C.Xj.variables = "var " + b.join(", ") + ";");
};
B.C.finish = function(a) {
  var b = [],
    c;
  for (c in B.C.Xj) b.push(B.C.Xj[c]);
  delete B.C.Xj;
  delete B.C.bu;
  B.C.Gh.reset();
  return b.join("\n\n") + "\n\n\n" + a;
};
B.C.Ar = function(a) {
  return a + ";\n";
};
B.C.oA = function(a) {
  a = a
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\\n")
    .replace(/'/g, "\\'");
  return "'" + a + "'";
};
B.C.Jn = function(a, b) {
  var c = "";
  if (!a.S || !a.S.zb) {
    var e = a.lk();
    (e = B.h.ds(e, B.C.js - 3)) &&
      (c = a.Nf
        ? c + ("/**\n" + rk(e + "\n", " * ") + " */\n")
        : c + rk(e + "\n", "// "));
    for (var f = 0; f < a.W.length; f++)
      if (a.W[f].type == B.ab) {
        var h = D(a.W[f].connection);
        if (h) {
          e = [];
          h = Ja(h, !0);
          for (var k = 0; k < h.length; k++) {
            var l = h[k].lk();
            l && e.push(l);
          }
          e.length && e.push("");
          (e = e.join("\n")) && (c += rk(e, "// "));
        }
      }
  }
  a = a.R && D(a.R);
  a = qk(B.C, a);
  return c + b + a;
};
B.C.iA = function(a, b, c, e, f) {
  c = c || 0;
  f = f || B.C.Cs;
  a.o.options.lh && c--;
  var h = a.o.options.lh ? "1" : "0";
  a =
    0 < c
      ? sk(a, b, B.C.Dj) || h
      : 0 > c
      ? sk(a, b, B.C.Fo) || h
      : e
      ? sk(a, b, B.C.Go) || h
      : sk(a, b, f) || h;
  if (B.Pu(a)) (a = parseFloat(a) + c), e && (a = -a);
  else {
    if (0 < c) {
      a = a + " + " + c;
      var k = B.C.Dj;
    } else 0 > c && ((a = a + " - " + -c), (k = B.C.Fo));
    e && ((a = c ? "-(" + a + ")" : "-" + a), (k = B.C.Go));
    k = Math.floor(k);
    f = Math.floor(f);
    k && f >= k && (a = "(" + a + ")");
  }
  return a;
};
var Fl = {},
  V,
  Gl,
  Hl,
  W,
  X,
  Y,
  Il;
B.$a.maze_moveForward = {
  $: function() {
    gj(this, {
      message0: S("Maze_moveForward"),
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: S("Maze_moveForwardTooltip")
    });
  }
};
B.C.maze_moveForward = function(a) {
  return "moveForward('block_id_" + a.id + "');\n";
};
B.$a.maze_turn = {
  $: function() {
    var a = [
      [S("Maze_turnLeft"), "turnLeft"],
      [S("Maze_turnRight"), "turnRight"]
    ];
    a[0][0] += " \u21ba";
    a[1][0] += " \u21bb";
    this.ve(290);
    aj(fj(this), new Nh(a), "DIR");
    this.lg(!0);
    this.xh(!0);
    this.dd(S("Maze_turnTooltip"));
  }
};
B.C.maze_turn = function(a) {
  return Pe(a, "DIR") + "('block_id_" + a.id + "');\n";
};
B.$a.maze_if = {
  $: function() {
    var a = [
      [S("Maze_pathAhead"), "isPathForward"],
      [S("Maze_pathLeft"), "isPathLeft"],
      [S("Maze_pathRight"), "isPathRight"]
    ];
    a[1][0] += " \u21ba";
    a[2][0] += " \u21bb";
    this.ve(210);
    aj(fj(this), new Nh(a), "DIR");
    aj(this.Xd(B.Ka, "DO"), S("Maze_doCode"));
    this.dd(S("Maze_ifTooltip"));
    this.lg(!0);
    this.xh(!0);
  }
};
B.C.maze_if = function(a) {
  var b = Pe(a, "DIR") + "('block_id_" + a.id + "')";
  a = tk(a, "DO");
  return "if (" + b + ") {\n" + a + "}\n";
};
B.$a.maze_ifElse = {
  $: function() {
    var a = [
      [S("Maze_pathAhead"), "isPathForward"],
      [S("Maze_pathLeft"), "isPathLeft"],
      [S("Maze_pathRight"), "isPathRight"]
    ];
    a[1][0] += " \u21ba";
    a[2][0] += " \u21bb";
    this.ve(210);
    aj(fj(this), new Nh(a), "DIR");
    aj(this.Xd(B.Ka, "DO"), S("Maze_doCode"));
    aj(this.Xd(B.Ka, "ELSE"), S("Maze_elseCode"));
    this.dd(S("Maze_ifelseTooltip"));
    this.lg(!0);
    this.xh(!0);
  }
};
B.C.maze_ifElse = function(a) {
  var b = Pe(a, "DIR") + "('block_id_" + a.id + "')",
    c = tk(a, "DO");
  a = tk(a, "ELSE");
  return "if (" + b + ") {\n" + c + "} else {\n" + a + "}\n";
};
B.$a.maze_forever = {
  $: function() {
    this.ve(120);
    aj(aj(fj(this), S("Maze_repeatUntil")), new kk(Jl.Qk, 12, 16));
    aj(this.Xd(B.Ka, "DO"), S("Maze_doCode"));
    this.lg(!0);
    this.dd(S("Maze_whileTooltip"));
  }
};
B.C.maze_forever = function(a) {
  var b = tk(a, "DO");
  B.C.yo && (b = B.C.yo.replace(/%1/g, "'block_id_" + a.id + "'") + b);
  return "while (notDone()) {\n" + b + "}\n";
};
var Kl = {},
  Ll = {};
function Ml() {
  throw Error("Do not instantiate directly");
}
Ml.prototype.$l = null;
Ml.prototype.qc = function() {
  return this.content;
};
Ml.prototype.toString = function() {
  return this.content;
};
Ml.prototype.zl = function() {
  if (this.am === Ll) return zc(this.toString());
  if (this.am !== Kl)
    throw Error("Sanitized content was not of kind TEXT or HTML.");
  return Ac(this.toString(), this.$l || null);
};
function Nl(a) {
  if (null != a)
    switch (a.$l) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function Ol() {
  Ml.call(this);
}
y(Ol, Ml);
Ol.prototype.am = Kl;
function Pl(a) {
  return null != a && a.am === Kl
    ? a
    : Ql(String(String(a)).replace(Rl, Sl), Nl(a));
}
var Ql = (function(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, e) {
      var c = new b();
      c.content = String(a);
      void 0 !== e && (c.$l = e);
      return c;
    };
  })(Ol),
  Tl = {
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
function Sl(a) {
  return Tl[a];
}
var Rl = /[\x00\x22\x26\x27\x3c\x3e]/g;
function Ul() {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Aceptar</button></div>';
}
function Vl() {
  var a = Wl,
    b =
      '<nav style="width: 100%; margin-bottom:20px;"><a href="../index.html"><figure><img src="maze/logo.png"></figure></a><h1>BLOCK&#8217;S</h1><h1></h1></nav><div style="display: none"><span id="Games_name">Robgam Games</span><span id="Games_puzzle">Rompecabezas</span><span id="Games_maze">Laberinto</span><span id="Games_bird">P\u00e1jaro</span><span id="Games_turtle">Tortuga</span><span id="Games_movie">Pel\u00edcula</span><span id="Games_music">M\u00fasica</span><span id="Games_pondTutor">Tutor del estanque</span><span id="Games_pond">Estanque</span><span id="Games_genetics">Gen\u00e9tica</span><span id="Games_linesOfCode1">Resolviste este nivel con 1 l\u00ednea de JavaScript:</span><span id="Games_linesOfCode2">Resolviste este nivel con %1 l\u00edneas de JavaScript:</span><span id="Games_nextLevel">\u00bfEst\u00e1s listo/a para el nivel %1?</span><span id="Games_finalLevel">\u00bfEst\u00e1s listo/a para el siguiente desaf\u00edo?</span><span id="Games_submitTitle">T\u00edtulo:</span><span id="Games_linkTooltip">Guardar y enlazar a los bloques.</span><span id="Games_runTooltip">Ejecutar el programa que escribiste.</span><span id="Games_runProgram">Ejecutar el programa</span><span id="Games_resetTooltip">Detener el programa y restablecer el nivel.</span><span id="Games_resetProgram">Restablecer</span><span id="Games_help">Ayuda</span><span id="Games_dialogOk">Aceptar</span><span id="Games_dialogCancel">Cancelar</span><span id="Games_catLogic">L\u00f3gica</span><span id="Games_catLoops">Bucles</span><span id="Games_catMath">Matem\u00e1ticas</span><span id="Games_catText">Texto</span><span id="Games_catLists">Listas</span><span id="Games_catColour">Color</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Funciones</span><span id="Games_httpRequestError">Hubo un problema con la petici\u00f3n.</span><span id="Games_linkAlert">Comparte tus bloques con este enlace:\n\n%1</span><span id="Games_hashError">\u00ab%1\u00bb no corresponde con ning\u00fan programa guardado.</span><span id="Games_xmlError">No se pudo cargar el archivo guardado.  \u00bfQuiz\u00e1 fue creado con otra versi\u00f3n de Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">texto</span><span id="Games_breakLink">Una vez que comiences la edici\u00f3n de JavaScript, no podr\u00e1s volver a la edici\u00f3n de bloques. \u00bfEst\u00e1s seguro?</span><span id="Games_blocks">Bloques</div></div><div style="display: none"><span id="Maze_moveForward">avanzar</span><span id="Maze_turnLeft">girar a la izquierda</span><span id="Maze_turnRight">girar a la derecha</span><span id="Maze_doCode">hacer</span><span id="Maze_elseCode">sino</span><span id="Maze_helpIfElse">Los bloques \'si-sino\' hacen una cosa o la otra.</span><span id="Maze_pathAhead">si hay camino enfrente</span><span id="Maze_pathLeft">si hay camino a la izquierda</span><span id="Maze_pathRight">si hay camino a la derecha</span><span id="Maze_repeatUntil">repetir hasta</span><span id="Maze_moveForwardTooltip">Mueve al jugador un cuadro hacia delante.</span><span id="Maze_turnTooltip">Gira al jugador a izquierda o derecha 90 grados.</span><span id="Maze_ifTooltip">Si hay un camino en la direcci\u00f3n especificada, \\nentonces ejecuta unas acciones. </span><span id="Maze_ifelseTooltip">Si hay un camino en la direcci\u00f3n especificada, \\nentonces ejecuta el primer bloque de acciones. \\nSino, haz el segundo bloque de acciones. </span><span id="Maze_whileTooltip">Repite las acciones contenidas hasta alcanzar el \\npunto final. </span><span id="Maze_capacity0">Te quedan %0 bloques.</span><span id="Maze_capacity1">Te queda %1 bloque.</span><span id="Maze_capacity2">Te quedan %2 bloques.</span></div><table width="100%"><tr><td><h1>' +
      ('<div class="niveles"> <span style="display:none;" id="title">' +
        (yl
          ? '<a style="display:none;" href="maze.html?lang=' + Pl(wl) + '">'
          : '<a href="./?lang=' + Pl(wl) + '">') +
        "Robgam Games</a> : " +
        Pl({ appName: "Laberinto" }.appName) +
        "</span>");
  a = "&skin=" + Pl(a);
  for (var c = " &nbsp; ", e = 1; 11 > e; e++)
    c +=
      " " +
      (e == R
        ? '<span class="level_number level_done" id="level' +
          Pl(e) +
          '">' +
          Pl(e) +
          "</span>"
        : 10 == e
        ? '<a class="level_number" id="level' +
          Pl(e) +
          '" href="?lang=' +
          Pl(wl) +
          "&level=" +
          Pl(e) +
          Pl(a) +
          '">' +
          Pl(e) +
          "</a>"
        : '<a class="level_dot" id="level' +
          Pl(e) +
          '" href="?lang=' +
          Pl(wl) +
          "&level=" +
          Pl(e) +
          Pl(a) +
          '"></a>');
  return (
    b +
    c +
    '</h1></div></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Guardar y enlazar a los bloques."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Hace que el jugador haga lo que dicen los bloques."><img src="common/1x1.gif" class="run icon21"> Ejecutar el programa</button><button id="resetButton" class="primary" style="display: none" title="Poner al jugador de nuevo al comienzo del \\nlaberinto. "><img src="common/1x1.gif" class="stop icon21"> Restablecer</button></td></tr></table>' +
    ('<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' +
      (2 < R
        ? '<block type="maze_forever"></block>' +
          (6 == R
            ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>'
            : 6 < R
            ? '<block type="maze_if"></block>' +
              (8 < R ? '<block type="maze_ifElse"></block>' : "")
            : "")
        : "") +
      "</xml>") +
    '<div id="blockly"></div><div id="pegmanMenu"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u00a1Felicitaciones!</div><div id="dialogLinesText" style="font-size: large; margin: 1em; display:none;"></div><pre id="containerCode" style="display: none;"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancelar</button><button id="doneOk" class="secondary">Aceptar</button></div></div><div id="dialogAbort" class="dialogHiddenContent">Este nivel es extremadamente dif\u00edcil. \u00bfDeseas saltearlo e ir al siguiente nivel? Siempre puedes regresar m\u00e1s adelante.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancelar</button><button id="abortOk" class="secondary">Aceptar</button></div></div>' +
    ('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' +
      Ul() +
      "</div>") +
    (1 == R
      ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Une un par de bloques \'avanzar\' para ayudarme a llegar a la meta.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>En este nivel, necesitas unir los bloques en el espacio de trabajo en blanco.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Ejecuta tu programa para ver qu\u00e9 pasa.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>'
      : 2 == R
      ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Tu programa no resolvi\u00f3 el laberinto. Presiona "Reiniciar" e intenta otra vez.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>'
      : 3 == R || 4 == R
      ? (3 == R
          ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Llega al final de este camino usando tan s\u00f3lo dos bloques. Utiliza \'repetir\' para ejecutar un bloque m\u00e1s de una vez.</td><td><img src="common/help.png"></td></tr></table></div>'
          : "") +
        '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Has usado todos los bloques para este nivel. Para crear un bloque nuevo, primero debes eliminar un bloque existente.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Puedes usar m\u00e1s de un bloque dentro de un bloque \'repetir\'.</td><td><img src="common/help.png"></td></tr></table></div>'
      : 5 == R
      ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Elige a tu jugador favorito en este men\u00fa.</td><td><img src="maze/help_up.png"></td></tr></table></div>'
      : 6 == R
      ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Un bloque \'si\' har\u00e1 algo solamente si la condici\u00f3n es verdadera. Intenta girar a la izquierda si hay camino a la izquierda.</td><td><img src="common/help.png"></td></tr></table></div>'
      : 7 == R
      ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Pulsa en %1 en el bloque \u00absi\u00bb para cambiar su condici\u00f3n.</td><td><img src="common/help.png"></td></tr></table></div>'
      : 9 == R
      ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Los bloques \'si-sino\' hacen una cosa o la otra.</td><td><img src="common/help.png"></td></tr></table></div>'
      : 10 == R
      ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u00bfPuedes resolver este complicado laberinto? Intenta seguir la pared de la izquierda. \u00a1Solo para programadores avanzados!' +
        Ul() +
        "</td></tr></table></div>"
      : "")
  );
}
var Dl = "maze";
U.Yk = function() {
  10 > R
    ? (window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?lang=" +
        wl +
        "&level=" +
        (R + 1) +
        "&skin=" +
        Wl)
    : U.Gi();
};
var Xl = [void 0, Infinity, Infinity, 2, 5, 5, 5, 5, 10, 7, 10][R],
  Yl = [
    {
      Ah: "maze/pegman.png",
      jo: "maze/tiles_pegman.png",
      Qk: "maze/marker.png",
      background: !1,
      wi: !1,
      Zm: "#000",
      no: ["maze/win.mp3", "maze/win.ogg"],
      cm: ["maze/fail_pegman.mp3", "maze/fail_pegman.ogg"],
      Tj: 1
    },
    {
      Ah: "maze/astro.png",
      jo: "maze/tiles_astro.png",
      Qk: "maze/marker.png",
      background: "maze/bg_astro.jpg",
      wi: !1,
      Zm: "#fff",
      no: ["maze/win.mp3", "maze/win.ogg"],
      cm: ["maze/fail_astro.mp3", "maze/fail_astro.ogg"],
      Tj: 2
    },
    {
      Ah: "maze/panda.png",
      jo: "maze/tiles_panda.png",
      Qk: "maze/marker.png",
      background: "maze/bg_panda.jpg",
      wi: !1,
      Zm: "#000",
      no: ["maze/win.mp3", "maze/win.ogg"],
      cm: ["maze/fail_panda.mp3", "maze/fail_panda.ogg"],
      Tj: 3
    }
  ],
  Wl = zl("skin", 0, Yl.length),
  Jl = Yl[Wl],
  Zl = [
    void 0,
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 1, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 3, 0, 0, 0],
      [0, 0, 2, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 1, 1, 1, 1, 3, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 3, 1, 0],
      [0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0],
      [0, 2, 1, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 2, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 3, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 2, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0],
      [0, 2, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0],
      [0, 1, 1, 3, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0],
      [0, 1, 1, 1, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 1, 0, 0],
      [0, 2, 1, 1, 0, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [3, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 1, 0],
      [1, 1, 1, 1, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 3, 0, 1, 0],
      [0, 1, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 0, 1, 0],
      [0, 2, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ]
  ][R],
  $l = Zl.length,
  am = Zl[0].length,
  bm = 50 * am,
  cm = 50 * $l,
  dm = 0,
  Z = [],
  em = {
    10010: [4, 0],
    10001: [3, 3],
    11e3: [0, 1],
    10100: [0, 2],
    11010: [4, 1],
    10101: [3, 2],
    10110: [0, 0],
    10011: [2, 0],
    11001: [4, 2],
    11100: [2, 3],
    11110: [1, 1],
    10111: [1, 0],
    11011: [2, 1],
    11101: [1, 2],
    11111: [2, 2],
    null0: [4, 3],
    null1: [3, 0],
    null2: [3, 1],
    null3: [0, 3],
    null4: [1, 3]
  };
function fm() {
  function a(a, b) {
    return 0 > a || a >= am || 0 > b || b >= $l
      ? "0"
      : 0 == Zl[b][a]
      ? "0"
      : "1";
  }
  var b = document.getElementById("svgMaze"),
    c = 50 * Math.max($l, am);
  b.setAttribute("viewBox", "0 0 " + c + " " + c);
  c = document.createElementNS(B.kc, "rect");
  c.setAttribute("width", bm);
  c.setAttribute("height", cm);
  c.setAttribute("fill", "#F1EEE7");
  c.setAttribute("stroke-width", 1);
  c.setAttribute("stroke", "#CCB");
  b.appendChild(c);
  if (Jl.background) {
    var e = document.createElementNS(B.kc, "image");
    e.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      Jl.background
    );
    e.setAttribute("height", cm);
    e.setAttribute("width", bm);
    e.setAttribute("x", 0);
    e.setAttribute("y", 0);
    b.appendChild(e);
  }
  if (Jl.wi) {
    for (c = 0; c < $l; c++) {
      var f = document.createElementNS(B.kc, "line");
      f.setAttribute("y1", 50 * c + 25.5);
      f.setAttribute("x2", bm);
      f.setAttribute("y2", 50 * c + 25.5);
      f.setAttribute("stroke", Jl.wi);
      f.setAttribute("stroke-width", 1);
      b.appendChild(f);
    }
    for (c = 0; c < am; c++)
      (f = document.createElementNS(B.kc, "line")),
        f.setAttribute("x1", 50 * c + 25.5),
        f.setAttribute("x2", 50 * c + 25.5),
        f.setAttribute("y2", cm),
        f.setAttribute("stroke", Jl.wi),
        f.setAttribute("stroke-width", 1),
        b.appendChild(f);
  }
  for (f = c = 0; f < $l; f++)
    for (var h = 0; h < am; h++) {
      var k = a(h, f) + a(h, f - 1) + a(h + 1, f) + a(h, f + 1) + a(h - 1, f);
      em[k] ||
        (k =
          "00000" == k && 0.3 < Math.random()
            ? "null0"
            : "null" + Math.floor(1 + 4 * Math.random()));
      var l = em[k][0];
      k = em[k][1];
      var m = document.createElementNS(B.kc, "clipPath");
      m.setAttribute("id", "tileClipPath" + c);
      e = document.createElementNS(B.kc, "rect");
      e.setAttribute("width", 50);
      e.setAttribute("height", 50);
      e.setAttribute("x", 50 * h);
      e.setAttribute("y", 50 * f);
      m.appendChild(e);
      b.appendChild(m);
      e = document.createElementNS(B.kc, "image");
      e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Jl.jo);
      e.setAttribute("height", 200);
      e.setAttribute("width", 250);
      e.setAttribute("clip-path", "url(#tileClipPath" + c + ")");
      e.setAttribute("x", 50 * (h - l));
      e.setAttribute("y", 50 * (f - k));
      b.appendChild(e);
      c++;
    }
  c = document.createElementNS(B.kc, "image");
  c.setAttribute("id", "finish");
  c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Jl.Qk);
  c.setAttribute("height", 34);
  c.setAttribute("width", 20);
  b.appendChild(c);
  c = document.createElementNS(B.kc, "clipPath");
  c.setAttribute("id", "pegmanClipPath");
  e = document.createElementNS(B.kc, "rect");
  e.setAttribute("id", "clipRect");
  e.setAttribute("width", 49);
  e.setAttribute("height", 52);
  c.appendChild(e);
  b.appendChild(c);
  c = document.createElementNS(B.kc, "image");
  c.setAttribute("id", "pegman");
  c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Jl.Ah);
  c.setAttribute("height", 52);
  c.setAttribute("width", 1029);
  c.setAttribute("clip-path", "url(#pegmanClipPath)");
  b.appendChild(c);
}
function gm(a) {
  if (!((a && a.type == B.i.Hj) || Q.lb() || 1 == dm || Bl(R))) {
    a = -1 != vl.indexOf(wl);
    var b = B.D.pc(B.D.uj(Q)),
      c = J(Q.G.j, !0),
      e = null,
      f = null,
      h = null;
    if (1 == R)
      2 > Me(Q).length
        ? ((e = document.getElementById("dialogHelpStack")),
          (h = { width: "370px", top: "130px" }),
          (h[a ? "right" : "left"] = "215px"),
          (f = c[0].N()))
        : ((c = J(Q, !0)),
          1 < c.length
            ? (U.Ku(
                "sampleOneTopBlock",
                '<xml>;<block type="maze_moveForward" x="10" y="10">;<next>;<block type="maze_moveForward"></block>;</next>;</block>;</xml>'.split(
                  ";"
                )
              ),
              (e = document.getElementById("dialogHelpOneTopBlock")),
              (h = { width: "360px", top: "120px" }),
              (h[a ? "right" : "left"] = "225px"),
              (f = c[0].N()))
            : 0 == dm &&
              ((e = document.getElementById("dialogHelpRun")),
              (h = { width: "360px", top: "410px" }),
              (h[a ? "right" : "left"] = "400px"),
              (f = document.getElementById("runButton"))));
    else if (2 == R)
      0 != dm &&
        "none" == document.getElementById("runButton").style.display &&
        ((e = document.getElementById("dialogHelpReset")),
        (h = { width: "360px", top: "410px" }),
        (h[a ? "right" : "left"] = "400px"),
        (f = document.getElementById("resetButton")));
    else if (3 == R)
      -1 == b.indexOf("maze_forever") &&
        (0 == af(Q)
          ? ((e = document.getElementById("dialogHelpCapacity")),
            (h = { width: "430px", top: "310px" }),
            (h[a ? "right" : "left"] = "50px"),
            (f = document.getElementById("capacityBubble")))
          : ((e = document.getElementById("dialogHelpRepeat")),
            (h = { width: "360px", top: "360px" }),
            (h[a ? "right" : "left"] = "425px"),
            (f = c[3].N())));
    else if (4 == R)
      if (
        0 == af(Q) &&
        (-1 == b.indexOf("maze_forever") || 1 < J(Q, !1).length)
      )
        (e = document.getElementById("dialogHelpCapacity")),
          (h = { width: "430px", top: "310px" }),
          (h[a ? "right" : "left"] = "50px"),
          (f = document.getElementById("capacityBubble"));
      else {
        b = !0;
        for (var k = Me(Q), l = 0; l < k.length; l++) {
          var m = k[l];
          if ("maze_forever" == m.type) {
            for (var n = 0; m; )
              (m = m.je()), (m = m.length ? m[0] : null), n++;
            if (2 < n) {
              b = !1;
              break;
            }
          }
        }
        b &&
          ((e = document.getElementById("dialogHelpRepeatMany")),
          (h = { width: "360px", top: "360px" }),
          (h[a ? "right" : "left"] = "425px"),
          (f = c[3].N()));
      }
    else if (5 == R)
      0 != Wl ||
        hm.Os ||
        ((e = document.getElementById("dialogHelpSkins")),
        (h = { width: "360px", top: "60px" }),
        (h[a ? "left" : "right"] = "20px"),
        (f = document.getElementById("pegmanButton")));
    else if (6 == R)
      -1 == b.indexOf("maze_if") &&
        ((e = document.getElementById("dialogHelpIf")),
        (h = { width: "360px", top: "430px" }),
        (h[a ? "right" : "left"] = "425px"),
        (f = c[4].N()));
    else if (7 == R) {
      if (!gm.Ju) {
        k = document.createElement("span");
        k.className = "helpMenuFake";
        l = [S("Maze_pathAhead"), S("Maze_pathLeft"), S("Maze_pathRight")];
        n = B.h.lp(l);
        m = B.h.mp(l);
        k.textContent = (m ? l[0].slice(n, -m) : l[0].substring(n)) + " " + Ph;
        n = document.getElementById("helpMenuText");
        l = n.textContent;
        n.textContent = "";
        m = l.split(/%\d/);
        for (l = 0; l < m.length; l++)
          n.appendChild(document.createTextNode(m[l])),
            l != m.length - 1 && n.appendChild(k.cloneNode(!0));
        gm.Ju = !0;
      }
      -1 == b.indexOf("isPathRight") &&
        ((e = document.getElementById("dialogHelpMenu")),
        (h = { width: "360px", top: "430px" }),
        (h[a ? "right" : "left"] = "425px"),
        (f = c[4].N()));
    } else
      9 == R &&
        -1 == b.indexOf("maze_ifElse") &&
        ((e = document.getElementById("dialogHelpIfElse")),
        (h = { width: "360px", top: "305px" }),
        (h[a ? "right" : "left"] = "425px"),
        (f = c[5].N()));
    e
      ? e.parentNode != document.getElementById("dialog") &&
        T.zh(e, f, !0, !1, h, null)
      : T.Nb(!1);
  }
}
function hm(a) {
  var b = document.getElementById("pegmanMenu");
  "block" == b.style.display
    ? im(a)
    : U.Xc(a) ||
      ((a = document.getElementById("pegmanButton")),
      a.classList.add("buttonHover"),
      (b.style.top = a.offsetTop + a.offsetHeight + "px"),
      (b.style.left = a.offsetLeft + "px"),
      (b.style.display = "block"),
      (Fl.pn = B.rb(document.body, "mousedown", null, im)),
      (b = document.getElementById("dialogHelpSkins")) &&
        "dialogHiddenContent" != b.className &&
        T.Nb(!1),
      (hm.Os = !0));
}
function im(a) {
  U.Xc(a) ||
    ((document.getElementById("pegmanMenu").style.display = "none"),
    document.getElementById("pegmanButton").classList.remove("buttonHover"),
    Fl.pn && (B.Aa(Fl.pn), delete Fl.pn));
}
function jm(a) {
  for (var b = 0; b < Z.length; b++) window.clearTimeout(Z[b]);
  Z = [];
  W = Gl.x;
  X = Gl.y;
  a
    ? ((Y = 2),
      km(!1),
      Z.push(
        setTimeout(function() {
          V = 100;
          lm([W, X, 4 * Y - 4]);
          Y++;
        }, 5 * V)
      ))
    : ((Y = 1), mm(W, X, 4 * Y));
  b = document.getElementById("finish");
  b.setAttribute("x", 50 * (Hl.x + 0.5) - b.getAttribute("width") / 2);
  b.setAttribute("y", 50 * (Hl.y + 0.6) - b.getAttribute("height"));
  b = document.getElementById("look");
  b.style.display = "none";
  b.parentNode.appendChild(b);
  a = b.getElementsByTagName("path");
  b = 0;
  for (var c; (c = a[b]); b++) c.setAttribute("stroke", Jl.Zm);
}
function nm(a) {
  if (!U.Xc(a))
    if ((T.Nb(!1), 1 == R && 1 < J(Q, !1).length && 1 != dm && !Bl(R))) gm();
    else {
      a = document.getElementById("runButton");
      var b = document.getElementById("resetButton");
      b.style.minWidth || (b.style.minWidth = a.offsetWidth + "px");
      a.style.display = "none";
      b.style.display = "inline";
      jm(!1);
      om();
    }
}
function pm(a) {
  U.Xc(a) ||
    ((document.getElementById("runButton").style.display = "inline"),
    (document.getElementById("resetButton").style.display = "none"),
    Ni(null),
    jm(!1),
    gm());
}
function qm(a, b) {
  var c = function(a) {
    rm(0, a);
  };
  a.setProperty(b, "moveForward", a.createNativeFunction(c));
  c = function(a) {
    rm(2, a);
  };
  a.setProperty(b, "moveBackward", a.createNativeFunction(c));
  c = function(a) {
    sm(0, a);
  };
  a.setProperty(b, "turnLeft", a.createNativeFunction(c));
  c = function(a) {
    sm(1, a);
  };
  a.setProperty(b, "turnRight", a.createNativeFunction(c));
  c = function(a) {
    return tm(0, a);
  };
  a.setProperty(b, "isPathForward", a.createNativeFunction(c));
  c = function(a) {
    return tm(1, a);
  };
  a.setProperty(b, "isPathRight", a.createNativeFunction(c));
  c = function(a) {
    return tm(2, a);
  };
  a.setProperty(b, "isPathBackward", a.createNativeFunction(c));
  c = function(a) {
    return tm(3, a);
  };
  a.setProperty(b, "isPathLeft", a.createNativeFunction(c));
  a.setProperty(
    b,
    "notDone",
    a.createNativeFunction(function() {
      return W != Hl.x || X != Hl.y;
    })
  );
}
function om() {
  if ("Interpreter" in window) {
    Il = [];
    B.selected && B.selected.uf();
    var a = pk();
    dm = 0;
    a = new Interpreter(a, qm);
    try {
      for (var b = 1e4; a.step(); ) if (0 == b--) throw Infinity;
      dm = W != Hl.x || X != Hl.y ? -1 : 1;
    } catch (c) {
      Infinity === c ? (dm = 2) : !1 === c ? (dm = -2) : ((dm = -2), alert(c));
    }
    1 == dm ? ((V = 100), Il.push(["finish", null])) : (V = 150);
    jm(!1);
    Z.push(setTimeout(um, 100));
  } else setTimeout(om, 250);
}
function um() {
  var a = Il.shift();
  if (a) {
    U.Ck(a[1]);
    switch (a[0]) {
      case "north":
        lm([W, X - 1, 4 * Y]);
        X--;
        break;
      case "east":
        lm([W + 1, X, 4 * Y]);
        W++;
        break;
      case "south":
        lm([W, X + 1, 4 * Y]);
        X++;
        break;
      case "west":
        lm([W - 1, X, 4 * Y]);
        W--;
        break;
      case "look_north":
        vm(0);
        break;
      case "look_east":
        vm(1);
        break;
      case "look_south":
        vm(2);
        break;
      case "look_west":
        vm(3);
        break;
      case "fail_forward":
        wm(!0);
        break;
      case "fail_backward":
        wm(!1);
        break;
      case "left":
        lm([W, X, 4 * Y - 4]);
        Y = xm(Y - 1);
        break;
      case "right":
        lm([W, X, 4 * Y + 4]);
        Y = xm(Y + 1);
        break;
      case "finish":
        km(!0), U.Gv(), setTimeout(T.ut, 1e3);
    }
    Z.push(setTimeout(um, 5 * V));
  } else U.Ck(null), gm();
}
function ym(a) {
  if (
    "dialogHiddenContent" != document.getElementById("dialogDone").className
  ) {
    var b = document.getElementById("pegSpin"),
      c = T.cq(b),
      e = a.clientX - (c.x + c.width / 2 - window.pageXOffset);
    a = Math.atan((a.clientY - (c.y + c.height / 2 - window.pageYOffset)) / e);
    a = (a / Math.PI) * 180;
    e = Math.round(((0 < e ? a + 90 : a + 270) / 360) * 16);
    16 == e && (e = 15);
    b.style.backgroundPosition = 49 * -e + "px 0px";
  }
}
function lm(a) {
  var b = [W, X, 4 * Y],
    c = [(a[0] - b[0]) / 4, (a[1] - b[1]) / 4, (a[2] - b[2]) / 4];
  mm(b[0] + c[0], b[1] + c[1], zm(b[2] + c[2]));
  Z.push(
    setTimeout(function() {
      mm(b[0] + 2 * c[0], b[1] + 2 * c[1], zm(b[2] + 2 * c[2]));
    }, V)
  );
  Z.push(
    setTimeout(function() {
      mm(b[0] + 3 * c[0], b[1] + 3 * c[1], zm(b[2] + 3 * c[2]));
    }, 2 * V)
  );
  Z.push(
    setTimeout(function() {
      mm(a[0], a[1], zm(a[2]));
    }, 3 * V)
  );
}
function wm(a) {
  var b = 0,
    c = 0;
  switch (Y) {
    case 0:
      c = -1;
      break;
    case 1:
      b = 1;
      break;
    case 2:
      c = 1;
      break;
    case 3:
      b = -1;
  }
  a || ((b = -b), (c = -c));
  if (1 == Jl.Tj) {
    b /= 4;
    c /= 4;
    var e = zm(4 * Y);
    mm(W + b, X + c, e);
    Q.mc.play("fail", 0.5);
    Z.push(
      setTimeout(function() {
        mm(W, X, e);
      }, V)
    );
    Z.push(
      setTimeout(function() {
        mm(W + b, X + c, e);
        Q.mc.play("fail", 0.5);
      }, 2 * V)
    );
    Z.push(
      setTimeout(function() {
        mm(W, X, e);
      }, 3 * V)
    );
  } else {
    var f = 10 * (Math.random() - 0.5),
      h = (Math.random() - 0.5) / 2;
    b += (Math.random() - 0.5) / 4;
    c += (Math.random() - 0.5) / 4;
    b /= 8;
    c /= 8;
    var k = 0;
    3 == Jl.Tj && (k = 0.01);
    Z.push(
      setTimeout(function() {
        Q.mc.play("fail", 0.5);
      }, 2 * V)
    );
    a = function(a) {
      return function() {
        mm(W + b * a, X + c * a, zm(4 * Y + h * a), f * a);
        c += k;
      };
    };
    for (var l = 1; 100 > l; l++) Z.push(setTimeout(a(l), (V * l) / 2));
  }
}
function km(a) {
  var b = zm(4 * Y);
  mm(W, X, 16);
  a && Q.mc.play("win", 0.5);
  V = 150;
  Z.push(
    setTimeout(function() {
      mm(W, X, 18);
    }, V)
  );
  Z.push(
    setTimeout(function() {
      mm(W, X, 16);
    }, 2 * V)
  );
  Z.push(
    setTimeout(function() {
      mm(W, X, b);
    }, 3 * V)
  );
}
function mm(a, b, c, e) {
  var f = document.getElementById("pegman");
  f.setAttribute("x", 50 * a - 49 * c + 1);
  f.setAttribute("y", 50 * (b + 0.5) - 26 - 8);
  e
    ? f.setAttribute(
        "transform",
        "rotate(" + e + ", " + (50 * a + 25) + ", " + (50 * b + 25) + ")"
      )
    : f.setAttribute("transform", "rotate(0, 0, 0)");
  b = document.getElementById("clipRect");
  b.setAttribute("x", 50 * a + 1);
  b.setAttribute("y", f.getAttribute("y"));
}
function vm(a) {
  var b = W,
    c = X;
  switch (a) {
    case 0:
      b += 0.5;
      break;
    case 1:
      b += 1;
      c += 0.5;
      break;
    case 2:
      b += 0.5;
      c += 1;
      break;
    case 3:
      c += 0.5;
  }
  b *= 50;
  c *= 50;
  var e = 90 * a - 45;
  a = document.getElementById("look");
  a.setAttribute(
    "transform",
    "translate(" + b + ", " + c + ") rotate(" + e + " 0 0) scale(.4)"
  );
  b = a.getElementsByTagName("path");
  a.style.display = "inline";
  for (c = 0; (a = b[c]); c++) Am(a, V * c);
}
function Am(a, b) {
  Z.push(
    setTimeout(function() {
      a.style.display = "inline";
      setTimeout(function() {
        a.style.display = "none";
      }, 2 * V);
    }, b)
  );
}
function xm(a) {
  a = Math.round(a) % 4;
  0 > a && (a += 4);
  return a;
}
function zm(a) {
  a = Math.round(a) % 16;
  0 > a && (a += 16);
  return a;
}
function rm(a, b) {
  if (!tm(a, null))
    throw (Il.push(["fail_" + (a ? "backward" : "forward"), b]), !1);
  switch (xm(Y + a)) {
    case 0:
      X--;
      var c = "north";
      break;
    case 1:
      W++;
      c = "east";
      break;
    case 2:
      X++;
      c = "south";
      break;
    case 3:
      W--, (c = "west");
  }
  Il.push([c, b]);
}
function sm(a, b) {
  a ? (Y++, Il.push(["right", b])) : (Y--, Il.push(["left", b]));
  Y = xm(Y);
}
function tm(a, b) {
  switch (xm(Y + a)) {
    case 0:
      var c = Zl[X - 1] && Zl[X - 1][W];
      var e = "look_north";
      break;
    case 1:
      c = Zl[X][W + 1];
      e = "look_east";
      break;
    case 2:
      c = Zl[X + 1] && Zl[X + 1][W];
      e = "look_south";
      break;
    case 3:
      (c = Zl[X][W - 1]), (e = "look_west");
  }
  b && Il.push([e, b]);
  return 0 !== c && void 0 !== c;
}
window.addEventListener("load", function() {
  function a() {
    l.style.top = Math.max(10, m.offsetTop - window.pageYOffset) + "px";
    l.style.left = k ? "10px" : "420px";
    l.style.width = window.innerWidth - 440 + "px";
  }
  function b(a) {
    return function() {
      if (window.sessionStorage) {
        var b = B.D.uj(Q);
        b = B.D.pc(b);
        window.sessionStorage.Ym = b;
      }
      window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?lang=" +
        wl +
        "&level=" +
        R +
        "&skin=" +
        a;
    };
  }
  document.body.innerHTML = Vl();
  U.$();
  document.querySelector("#pegmanButton>img").style.backgroundImage =
    "url(" + Jl.Ah + ")";
  for (var c = document.getElementById("pegmanMenu"), e = 0; e < Yl.length; e++)
    if (e != Wl) {
      var f = document.createElement("div"),
        h = document.createElement("img");
      h.src = "common/1x1.gif";
      h.style.backgroundImage = "url(" + Yl[e].Ah + ")";
      f.appendChild(h);
      c.appendChild(f);
      B.rb(f, "mousedown", null, b(e));
    }
  B.rb(window, "resize", null, im);
  c = document.getElementById("pegmanButton");
  B.rb(c, "mousedown", null, hm);
  document
    .getElementById("pegmanButtonArrow")
    .appendChild(document.createTextNode(Ph));
  var k = -1 != vl.indexOf(wl),
    l = document.getElementById("blockly"),
    m = document.getElementById("visualization");
  window.addEventListener("scroll", function() {
    a(null);
    B.sg(Q);
  });
  window.addEventListener("resize", a);
  a(null);
  c = document.getElementById("toolbox");
  Q = B.Ve("blockly", {
    media: "third-party/blockly/media/",
    maxBlocks: Xl,
    rtl: k,
    toolbox: c,
    trashcan: !0,
    zoom: { startScale: 1 + (1 - R / 10) / 3 }
  });
  Q.mc.load(Jl.no, "win");
  Q.mc.load(Jl.cm, "fail");
  uk(
    "moveForward,moveBackward,turnRight,turnLeft,isPathForward,isPathRight,isPathBackward,isPathLeft"
  );
  fm();
  U.Vu(
    '<xml>  <block movable="' +
      (1 != R) +
      '" type="maze_moveForward" x="70" y="70"></block></xml>',
    !1
  );
  for (c = 0; c < $l; c++)
    for (e = 0; e < am; e++)
      2 == Zl[c][e]
        ? (Gl = { x: e, y: c })
        : 3 == Zl[c][e] && (Hl = { x: e, y: c });
  jm(!0);
  Q.lc(function() {
    var a = af(Q),
      b = document.getElementById("capacity");
    if (Infinity == a) b.style.display = "none";
    else {
      b.style.display = "inline";
      b.innerHTML = "";
      a = Number(a);
      var c = document.createElement("span");
      c.className = "capacityNumber";
      c.appendChild(document.createTextNode(a));
      a = (0 == a
        ? S("Maze_capacity0")
        : 1 == a
        ? S("Maze_capacity1")
        : S("Maze_capacity2")
      ).split(/%\d/);
      for (var e = 0; e < a.length; e++)
        b.appendChild(document.createTextNode(a[e])),
          e != a.length - 1 && b.appendChild(c.cloneNode(!0));
    }
  });
  document.body.addEventListener("mousemove", ym, !0);
  El("runButton", nm);
  El("resetButton", pm);
  1 == R && (B.zc *= 2);
  10 == R
    ? Bl(R) ||
      ((c = document.getElementById("dialogHelpWallFollow")),
      T.zh(c, null, !1, !0, { width: "30%", left: "35%", top: "12em" }, T.Qr),
      T.Kr(),
      setTimeout(T.Qo, 3e5))
    : setTimeout(function() {
        Q.lc(gm);
        gm();
      }, 5e3);
  c = document.getElementById("dialogDoneButtons");
  e = document.createElement("img");
  e.id = "pegSpin";
  e.src = "common/1x1.gif";
  e.style.backgroundImage = "url(" + Jl.Ah + ")";
  c.parentNode.insertBefore(e, c);
  setTimeout(U.Gu, 1);
  setTimeout(U.Hu, 1);
});
