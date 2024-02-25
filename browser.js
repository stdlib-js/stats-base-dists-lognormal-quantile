// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,t,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,c=parseInt(t,10),!isFinite(c)){if(!n(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(t=(-c).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=c.toString(e),c||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,v,"e"),t=l.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,y,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,N=isNaN,_=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,u,f,s,l,p,y,g,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))u+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,N(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,y=t.width,g=t.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),u+=t.arg||"",f+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(S(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function k(r){var e,n;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C,L=Math.sqrt,P="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),M=Object.prototype.toString,R=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"",X=P&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return M.call(r);n=r[q],a=q,e=null!=(i=r)&&R.call(i,a);try{r[q]=void 0}catch(e){return M.call(r)}return t=M.call(r),e?r[q]=n:delete r[q],t}:function(r){return M.call(r)},Y="function"==typeof Uint32Array,z="function"==typeof Uint32Array?Uint32Array:null,B="function"==typeof Uint32Array?Uint32Array:void 0;C=function(){var r,e,n;if("function"!=typeof z)return!1;try{e=new z(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Y&&n instanceof Uint32Array||"[object Uint32Array]"===X(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?B:function(){throw new Error("not implemented")};var D,J=C,K="function"==typeof Float64Array,Q="function"==typeof Float64Array?Float64Array:null,rr="function"==typeof Float64Array?Float64Array:void 0;D=function(){var r,e,n;if("function"!=typeof Q)return!1;try{e=new Q([1,3.14,-3.14,NaN]),n=e,r=(K&&n instanceof Float64Array||"[object Float64Array]"===X(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er,nr=D,tr="function"==typeof Uint8Array,ir="function"==typeof Uint8Array?Uint8Array:null,ar="function"==typeof Uint8Array?Uint8Array:void 0;er=function(){var r,e,n;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,256,257]),n=e,r=(tr&&n instanceof Uint8Array||"[object Uint8Array]"===X(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,cr=er,ur="function"==typeof Uint16Array,fr="function"==typeof Uint16Array?Uint16Array:null,sr="function"==typeof Uint16Array?Uint16Array:void 0;or=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(ur&&n instanceof Uint16Array||"[object Uint16Array]"===X(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr={uint16:or,uint8:cr};(lr=new pr.uint16(1))[0]=4660;var yr=52===new pr.uint8(lr.buffer)[0],gr=!0===yr?1:0,dr=new nr(1),hr=new J(dr.buffer);function vr(r){return dr[0]=r,hr[gr]}var wr=!0===yr?1:0,br=new nr(1),mr=new J(br.buffer),Ar=1023,Nr=Number.NEGATIVE_INFINITY,_r=.6931471803691238,Er=1.9082149292705877e-10,Ur=0x40000000000000,Ir=.3333333333333333,Sr=1048575,xr=2146435072,kr=1048576,Fr=1072693248;function jr(r){var e,n,t,i,a,o,c,u,f,s,l,p;return 0===r?Nr:W(r)||r<0?NaN:(a=0,(n=vr(r))<kr&&(a-=54,n=vr(r*=Ur)),n>=xr?r+r:(a+=(n>>20)-Ar|0,a+=(u=614244+(n&=Sr)&1048576|0)>>20|0,c=(r=function(r,e){return br[0]=r,mr[wr]=e>>>0,br[0]}(r,n|u^Fr))-1,(Sr&2+n)<3?0===c?0===a?0:a*_r+a*Er:(o=c*c*(.5-Ir*c),0===a?c-o:a*_r-(o-a*Er-c)):(u=n-398458|0,f=440401-n|0,i=(l=(p=(s=c/(2+c))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-s*(e+o)):a*_r-(e-(s*(e+o)+a*Er)-c)):0===a?c-s*(c-o):a*_r-(s*(c-o)-a*Er-c))))}var Tr=Number.POSITIVE_INFINITY,Or=.08913147449493408,Vr=2.249481201171875,$r=.807220458984375,Gr=.9399557113647461,Hr=.9836282730102539;function Wr(r){var e,n,t,i,a;return W(r)?NaN:1===r?Tr:-1===r?Nr:0===r?r:r>1||r<-1?NaN:(r<0?(e=-1,n=-r):(e=1,n=r),t=1-n,n<=.5?(i=n*(n+10),a=function(r){var e,n;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(e=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,n=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(e=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),n=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),e/n)}(n),e*(i*Or+i*a)):t>=.25?(i=L(-2*jr(t)),a=function(r){var e,n;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(e=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,n=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(e=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,n=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),e/n)}(t-=.25),e*(i/(Vr+a))):(t=L(-jr(t)))<3?(a=function(r){var e,n;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(e=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(e=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),e/n)}(t-1.125),e*($r*t+a*t)):t<6?(a=function(r){var e,n;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(e=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(e=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),e/n)}(t-3),e*(Gr*t+a*t)):(a=function(r){var e,n;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(e=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(e=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),n=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),e/n)}(t-6),e*(Hr*t+a*t)))}var Cr=Math.sqrt;function Lr(r,e,n){return W(e)||W(n)||W(r)||n<0||r<0||r>1?NaN:0===n?e:e+n*Cr(2)*Wr(2*r-1)}function Pr(r){return function(){return r}}H((function(r,e){return W(r)||r<0||r>1?NaN:e}),"factory",(function(r){return W(r)?Pr(NaN):function(e){return W(e)||e<0||e>1?NaN:r}})),H(Lr,"factory",(function(r,e){var n,t;return W(r)||W(e)||e<0?Pr(NaN):(n=r,t=e*Cr(2),function(r){return W(r)||r<0||r>1?NaN:n+t*Wr(2*r-1)})}));var Mr=Math.floor,Rr=Math.ceil;function Zr(r){return r<0?Rr(r):Mr(r)}var qr=1023,Xr=-1023,Yr=-1074;function zr(r){return r===Tr||r===Nr}var Br,Dr,Jr=2147483648,Kr=2147483647;!0===yr?(Br=1,Dr=0):(Br=0,Dr=1);var Qr,re,ee={HIGH:Br,LOW:Dr},ne=new nr(1),te=new J(ne.buffer),ie=ee.HIGH,ae=ee.LOW;function oe(r,e,n,t){return ne[0]=r,e[t]=te[ie],e[t+n]=te[ae],e}function ce(r){return oe(r,[0,0],1,0)}H(ce,"assign",oe),!0===yr?(Qr=1,re=0):(Qr=0,re=1);var ue={HIGH:Qr,LOW:re},fe=new nr(1),se=new J(fe.buffer),le=ue.HIGH,pe=ue.LOW;function ye(r,e){return se[le]=r,se[pe]=e,fe[0]}var ge=[0,0],de=22250738585072014e-324,he=4503599627370496;function ve(r,e,n,t){return W(r)||zr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<de?(e[t]=r*he,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return ve(r,[0,0],1,0)}),"assign",ve);var we=2146435072,be=2220446049250313e-31,me=2148532223,Ae=[0,0],Ne=[0,0];function _e(r,e){var n,t,i,a,o,c;return 0===e||0===r||W(r)||zr(r)?r:(ve(r,Ae,1,0),r=Ae[0],e+=Ae[1],e+=function(r){var e=vr(r);return(e=(e&we)>>>20)-Ar|0}(r),e<Yr?(i=0,a=r,ce.assign(i,ge,1,0),o=ge[0],o&=Kr,c=vr(a),ye(o|=c&=Jr,ge[1])):e>qr?r<0?Nr:Tr:(e<=Xr?(e+=52,t=be):t=1,ce.assign(r,Ne,1,0),n=Ne[0],n&=me,t*ye(n|=e+Ar<<20,Ne[1])))}var Ee=.6931471803691238,Ue=1.9082149292705877e-10,Ie=1.4426950408889634,Se=709.782712893384,xe=-745.1332191019411,ke=1/(1<<28),Fe=-ke;function je(r){var e;return W(r)||r===Tr?r:r===Nr?0:r>Se?Tr:r<xe?0:r>Fe&&r<ke?1+r:function(r,e,n){var t,i,a,o;return _e(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=Zr(r<0?Ie*r-.5:Ie*r+.5))*Ee,e*Ue,e)}function Te(r,e,n){return W(e)||W(n)||W(r)||n<=0||r<0||r>1?NaN:je(e+n*Lr(r,0,1))}return H(Te,"factory",(function(r,e){return W(r)||W(e)||e<=0?Pr(NaN):function(n){return W(n)||n<0||n>1?NaN:je(r+e*Lr(n,0,1))}})),Te},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=e();
//# sourceMappingURL=browser.js.map
