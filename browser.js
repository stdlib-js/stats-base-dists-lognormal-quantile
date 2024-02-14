// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function a(r,t,e){var a=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,a&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=a(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=a(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function A(r){var t,n,a=parseFloat(r.arg);if(!isFinite(a)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);a=r.arg}switch(r.specifier){case"e":case"E":n=a.toExponential(r.precision);break;case"f":case"F":n=a.toFixed(r.precision);break;case"g":case"G":f(a)<1e-4?((t=r.precision)>0&&(t-=1),n=a.toExponential(t)):n=a.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,w,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,d,"e-0$1"),r.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,v,"$1.e")),a>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function N(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var F=String.fromCharCode,I=isNaN,E=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,e,n,i,o,f,l,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(u(n=r[p]))f+=n;else{if(t=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,I(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!I(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(o)?String(n.arg):F(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=N(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function j(r){var t,e,n,a;for(e=[],a=0,n=S.exec(r);n;)(t=r.slice(a,S.lastIndex-n[0].length)).length&&e.push(t),e.push(U(n)),a=S.lastIndex,n=S.exec(r);return(t=r.slice(a)).length&&e.push(t),e}function x(r){return"string"==typeof r}function V(r){var t,e;if(!x(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[j(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return T.apply(null,t)}var k=Object.prototype,O=k.toString,G=k.__defineGetter__,H=k.__defineSetter__,P=k.__lookupGetter__,W=k.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((a="value"in e)&&(P.call(r,t)||W.call(r,t)?(n=r.__proto__,r.__proto__=k,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,o="set"in e,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),o&&H&&H.call(r,t,e.set),r};function L(r,t,e){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Y(r){return r!=r}var C,M=Math.sqrt,R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Z=Object.prototype.toString,q=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"",B=R&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,a,i;if(null==r)return Z.call(r);e=r[z],i=z,t=null!=(a=r)&&q.call(a,i);try{r[z]=void 0}catch(t){return Z.call(r)}return n=Z.call(r),t?r[z]=e:delete r[z],n}:function(r){return Z.call(r)},D="function"==typeof Uint32Array,J="function"==typeof Uint32Array?Uint32Array:null,K="function"==typeof Uint32Array?Uint32Array:void 0;C=function(){var r,t,e;if("function"!=typeof J)return!1;try{t=new J(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(D&&e instanceof Uint32Array||"[object Uint32Array]"===B(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,rr=C,tr="function"==typeof Float64Array,er="function"==typeof Float64Array?Float64Array:null,nr="function"==typeof Float64Array?Float64Array:void 0;Q=function(){var r,t,e;if("function"!=typeof er)return!1;try{t=new er([1,3.14,-3.14,NaN]),e=t,r=(tr&&e instanceof Float64Array||"[object Float64Array]"===B(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ar,ir=Q,or="function"==typeof Uint8Array,cr="function"==typeof Uint8Array?Uint8Array:null,ur="function"==typeof Uint8Array?Uint8Array:void 0;ar=function(){var r,t,e;if("function"!=typeof cr)return!1;try{t=new cr(t=[1,3.14,-3.14,256,257]),e=t,r=(or&&e instanceof Uint8Array||"[object Uint8Array]"===B(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,lr=ar,pr="function"==typeof Uint16Array,sr="function"==typeof Uint16Array?Uint16Array:null,yr="function"==typeof Uint16Array?Uint16Array:void 0;fr=function(){var r,t,e;if("function"!=typeof sr)return!1;try{t=new sr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(pr&&e instanceof Uint16Array||"[object Uint16Array]"===B(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr,gr={uint16:fr,uint8:lr};(dr=new gr.uint16(1))[0]=4660;var vr=52===new gr.uint8(dr.buffer)[0],hr=!0===vr?1:0,wr=new ir(1),br=new rr(wr.buffer);function Ar(r){return wr[0]=r,br[hr]}var mr,Nr="function"==typeof Float64Array,Fr="function"==typeof Float64Array?Float64Array:null,Ir="function"==typeof Float64Array?Float64Array:void 0;mr=function(){var r,t,e;if("function"!=typeof Fr)return!1;try{t=new Fr([1,3.14,-3.14,NaN]),e=t,r=(Nr&&e instanceof Float64Array||"[object Float64Array]"===B(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var Er=!0===vr?1:0,_r=new mr(1),Tr=new rr(_r.buffer),Sr=1023,Ur=Number,jr=Ur.NEGATIVE_INFINITY,xr=.6931471803691238,Vr=1.9082149292705877e-10,kr=1048575;function Or(r){var t,e,n,a,i,o,c,u,f,l,p,s;return 0===r?jr:Y(r)||r<0?NaN:(i=0,(e=Ar(r))<1048576&&(i-=54,e=Ar(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-Sr|0,i+=(u=614244+(e&=kr)&1048576|0)>>20|0,c=(r=function(r,t){return _r[0]=r,Tr[Er]=t>>>0,_r[0]}(r,e|1072693248^u))-1,(kr&2+e)<3?0===c?0===i?0:i*xr+i*Vr:(o=c*c*(.5-.3333333333333333*c),0===i?c-o:i*xr-(o-i*Vr-c)):(u=e-398458|0,f=440401-e|0,a=(p=(s=(l=c/(2+c))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),n=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=n+a,(u|=f)>0?(t=.5*c*c,0===i?c-(t-l*(t+o)):i*xr-(t-(l*(t+o)+i*Vr)-c)):0===i?c-l*(c-o):i*xr-(l*(c-o)-i*Vr-c))))}var Gr=Number.POSITIVE_INFINITY;function Hr(r){var t,e,n,a,i;return Y(r)?NaN:1===r?Gr:-1===r?jr:0===r?r:r>1||r<-1?NaN:(r<0?(t=-1,e=-r):(t=1,e=r),n=1-e,e<=.5?(a=e*(e+10),i=function(r){var t,e;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(t=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,e=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(t=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),e=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),t/e)}(e),t*(.08913147449493408*a+a*i)):n>=.25?(a=M(-2*Or(n)),i=function(r){var t,e;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(t=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,e=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(t=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,e=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),t/e)}(n-=.25),t*(a/(2.249481201171875+i))):(n=M(-Or(n)))<3?(i=function(r){var t,e;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(t=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,e=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(t=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,e=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),t/e)}(n-1.125),t*(.807220458984375*n+i*n)):n<6?(i=function(r){var t,e;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(t=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,e=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(t=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),e=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),t/e)}(n-3),t*(.9399557113647461*n+i*n)):(i=function(r){var t,e;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(t=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,e=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(t=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),e=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),t/e)}(n-6),t*(.9836282730102539*n+i*n)))}var Pr=Math.sqrt;function Wr(r,t,e){return Y(t)||Y(e)||Y(r)||e<0||r<0||r>1?NaN:0===e?t:t+e*Pr(2)*Hr(2*r-1)}function $r(r){return function(){return r}}L((function(r,t){return Y(r)||r<0||r>1?NaN:t}),"factory",(function(r){return Y(r)?$r(NaN):function(t){return Y(t)||t<0||t>1?NaN:r}})),L(Wr,"factory",(function(r,t){var e,n;return Y(r)||Y(t)||t<0?$r(NaN):(e=r,n=t*Pr(2),function(r){return Y(r)||r<0||r>1?NaN:e+n*Hr(2*r-1)})}));var Lr=Math.floor,Yr=Math.ceil;function Cr(r){return r<0?Yr(r):Lr(r)}var Mr=Ur.NEGATIVE_INFINITY,Rr=Number.POSITIVE_INFINITY,Zr=Number.POSITIVE_INFINITY,qr=Ur.NEGATIVE_INFINITY,Xr=Number.POSITIVE_INFINITY,zr=Ur.NEGATIVE_INFINITY;function Br(r){return r===Xr||r===zr}var Dr,Jr,Kr,Qr="function"==typeof Float64Array,rt="function"==typeof Float64Array?Float64Array:null,tt="function"==typeof Float64Array?Float64Array:void 0;Dr=function(){var r,t,e;if("function"!=typeof rt)return!1;try{t=new rt([1,3.14,-3.14,NaN]),e=t,r=(Qr&&e instanceof Float64Array||"[object Float64Array]"===B(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?tt:function(){throw new Error("not implemented")},!0===vr?(Jr=1,Kr=0):(Jr=0,Kr=1);var et={HIGH:Jr,LOW:Kr},nt=new Dr(1),at=new rr(nt.buffer),it=et.HIGH,ot=et.LOW;function ct(r,t,e,n){return nt[0]=r,t[n]=at[it],t[n+e]=at[ot],t}function ut(r){return ct(r,[0,0],1,0)}L(ut,"assign",ct);var ft,lt,pt,st="function"==typeof Float64Array,yt="function"==typeof Float64Array?Float64Array:null,dt="function"==typeof Float64Array?Float64Array:void 0;ft=function(){var r,t,e;if("function"!=typeof yt)return!1;try{t=new yt([1,3.14,-3.14,NaN]),e=t,r=(st&&e instanceof Float64Array||"[object Float64Array]"===B(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?dt:function(){throw new Error("not implemented")},!0===vr?(lt=1,pt=0):(lt=0,pt=1);var gt={HIGH:lt,LOW:pt},vt=new ft(1),ht=new rr(vt.buffer),wt=gt.HIGH,bt=gt.LOW;function At(r,t){return ht[wt]=r,ht[bt]=t,vt[0]}var mt=[0,0];function Nt(r,t,e,n){return Y(r)||Br(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}L((function(r){return Nt(r,[0,0],1,0)}),"assign",Nt);var Ft,It,Et,_t="function"==typeof Float64Array,Tt="function"==typeof Float64Array?Float64Array:null,St="function"==typeof Float64Array?Float64Array:void 0;Ft=function(){var r,t,e;if("function"!=typeof Tt)return!1;try{t=new Tt([1,3.14,-3.14,NaN]),e=t,r=(_t&&e instanceof Float64Array||"[object Float64Array]"===B(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?St:function(){throw new Error("not implemented")},!0===vr?(It=1,Et=0):(It=0,Et=1);var Ut={HIGH:It,LOW:Et},jt=new Ft(1),xt=new rr(jt.buffer),Vt=Ut.HIGH,kt=Ut.LOW;function Ot(r,t,e,n){return jt[0]=r,t[n]=xt[Vt],t[n+e]=xt[kt],t}function Gt(r){return Ot(r,[0,0],1,0)}L(Gt,"assign",Ot);var Ht=[0,0],Pt=[0,0];function Wt(r,t){var e,n,a,i,o,c;return 0===t||0===r||Y(r)||Br(r)?r:(Nt(r,Ht,1,0),t+=Ht[1],t+=function(r){var t=Ar(r);return(t=(2146435072&t)>>>20)-Sr|0}(r=Ht[0]),t<-1074?(a=0,i=r,ut.assign(a,mt,1,0),o=mt[0],o&=2147483647,c=Ar(i),At(o|=c&=2147483648,mt[1])):t>1023?r<0?qr:Zr:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,Gt.assign(r,Pt,1,0),e=Pt[0],e&=2148532223,n*At(e|=t+Sr<<20,Pt[1])))}var $t=1.4426950408889634,Lt=1/(1<<28);function Yt(r){var t;return Y(r)||r===Rr?r:r===Mr?0:r>709.782712893384?Rr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Lt?1+r:function(r,t,e){var n,a,i,o;return Wt(1-(t-(n=r-t)*(i=n-(a=n*n)*(0===(o=a)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-.6931471803691238*(t=Cr(r<0?$t*r-.5:$t*r+.5)),1.9082149292705877e-10*t,t)}function Ct(r,t,e){return Y(t)||Y(e)||Y(r)||e<=0||r<0||r>1?NaN:Yt(t+e*Wr(r,0,1))}return L(Ct,"factory",(function(r,t){return Y(r)||Y(t)||t<=0?$r(NaN):function(e){return Y(e)||e<0||e>1?NaN:Yt(r+t*Wr(e,0,1))}})),Ct},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=t();
//# sourceMappingURL=browser.js.map
