// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,t,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,c=parseInt(t,10),!isFinite(c)){if(!n(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(t=(-c).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=c.toString(e),c||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function N(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=N(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var M,R=Math.sqrt,Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),q=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",B=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return q.call(r);n=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return q.call(r)}return t=q.call(r),e?r[z]=n:delete r[z],t}:function(r){return q.call(r)},D="function"==typeof Uint32Array,J="function"==typeof Uint32Array?Uint32Array:null,K="function"==typeof Uint32Array?Uint32Array:void 0;M=function(){var r,e,n;if("function"!=typeof J)return!1;try{e=new J(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(D&&n instanceof Uint32Array||"[object Uint32Array]"===B(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,rr=M,er="function"==typeof Float64Array,nr="function"==typeof Float64Array?Float64Array:null,tr="function"==typeof Float64Array?Float64Array:void 0;Q=function(){var r,e,n;if("function"!=typeof nr)return!1;try{e=new nr([1,3.14,-3.14,NaN]),n=e,r=(er&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir,ar=Q,or="function"==typeof Uint8Array,cr="function"==typeof Uint8Array?Uint8Array:null,ur="function"==typeof Uint8Array?Uint8Array:void 0;ir=function(){var r,e,n;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,256,257]),n=e,r=(or&&n instanceof Uint8Array||"[object Uint8Array]"===B(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,sr=ir,lr="function"==typeof Uint16Array,pr="function"==typeof Uint16Array?Uint16Array:null,yr="function"==typeof Uint16Array?Uint16Array:void 0;fr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(lr&&n instanceof Uint16Array||"[object Uint16Array]"===B(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,dr={uint16:fr,uint8:sr};(gr=new dr.uint16(1))[0]=4660;var hr=52===new dr.uint8(gr.buffer)[0],vr=!0===hr?1:0,wr=new ar(1),br=new rr(wr.buffer);function mr(r){return wr[0]=r,br[vr]}var Ar=!0===hr?1:0,Nr=new ar(1),_r=new rr(Nr.buffer),Er=1023,Ur=Number.NEGATIVE_INFINITY,Ir=.6931471803691238,Sr=1.9082149292705877e-10,xr=1048575;function kr(r){var e,n,t,i,a,o,c,u,f,s,l,p;return 0===r?Ur:P(r)||r<0?NaN:(a=0,(n=mr(r))<1048576&&(a-=54,n=mr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-Er|0,a+=(u=614244+(n&=xr)&1048576|0)>>20|0,c=(r=function(r,e){return Nr[0]=r,_r[Ar]=e>>>0,Nr[0]}(r,n|1072693248^u))-1,(xr&2+n)<3?0===c?0===a?0:a*Ir+a*Sr:(o=c*c*(.5-.3333333333333333*c),0===a?c-o:a*Ir-(o-a*Sr-c)):(u=n-398458|0,f=440401-n|0,i=(l=(p=(s=c/(2+c))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-s*(e+o)):a*Ir-(e-(s*(e+o)+a*Sr)-c)):0===a?c-s*(c-o):a*Ir-(s*(c-o)-a*Sr-c))))}var Fr=Number.POSITIVE_INFINITY;function jr(r){var e,n,t,i,a;return P(r)?NaN:1===r?Fr:-1===r?Ur:0===r?r:r>1||r<-1?NaN:(r<0?(e=-1,n=-r):(e=1,n=r),t=1-n,n<=.5?(i=n*(n+10),a=function(r){var e,n;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(e=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,n=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(e=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),n=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),e/n)}(n),e*(.08913147449493408*i+i*a)):t>=.25?(i=R(-2*kr(t)),a=function(r){var e,n;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(e=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,n=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(e=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,n=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),e/n)}(t-=.25),e*(i/(2.249481201171875+a))):(t=R(-kr(t)))<3?(a=function(r){var e,n;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(e=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(e=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),e/n)}(t-1.125),e*(.807220458984375*t+a*t)):t<6?(a=function(r){var e,n;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(e=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(e=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),e/n)}(t-3),e*(.9399557113647461*t+a*t)):(a=function(r){var e,n;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(e=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(e=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),n=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),e/n)}(t-6),e*(.9836282730102539*t+a*t)))}var Tr=Math.sqrt;function Or(r,e,n){return P(e)||P(n)||P(r)||n<0||r<0||r>1?NaN:0===n?e:e+n*Tr(2)*jr(2*r-1)}function Vr(r){return function(){return r}}L((function(r,e){return P(r)||r<0||r>1?NaN:e}),"factory",(function(r){return P(r)?Vr(NaN):function(e){return P(e)||e<0||e>1?NaN:r}})),L(Or,"factory",(function(r,e){var n,t;return P(r)||P(e)||e<0?Vr(NaN):(n=r,t=e*Tr(2),function(r){return P(r)||r<0||r>1?NaN:n+t*jr(2*r-1)})}));var $r,Gr,Hr=Math.floor,Wr=Math.ceil;function Cr(r){return r<0?Wr(r):Hr(r)}function Lr(r){return r===Fr||r===Ur}!0===hr?($r=1,Gr=0):($r=0,Gr=1);var Pr,Mr,Rr={HIGH:$r,LOW:Gr},Zr=new ar(1),qr=new rr(Zr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,e,n,t){return Zr[0]=r,e[t]=qr[Xr],e[t+n]=qr[Yr],e}function Br(r){return zr(r,[0,0],1,0)}L(Br,"assign",zr),!0===hr?(Pr=1,Mr=0):(Pr=0,Mr=1);var Dr={HIGH:Pr,LOW:Mr},Jr=new ar(1),Kr=new rr(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e){return Kr[Qr]=r,Kr[re]=e,Jr[0]}var ne=[0,0];function te(r,e,n,t){return P(r)||Lr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return te(r,[0,0],1,0)}),"assign",te);var ie=[0,0],ae=[0,0];function oe(r,e){var n,t,i,a,o,c;return 0===e||0===r||P(r)||Lr(r)?r:(te(r,ie,1,0),e+=ie[1],e+=function(r){var e=mr(r);return(e=(2146435072&e)>>>20)-Er|0}(r=ie[0]),e<-1074?(i=0,a=r,Br.assign(i,ne,1,0),o=ne[0],o&=2147483647,c=mr(a),ee(o|=c&=2147483648,ne[1])):e>1023?r<0?Ur:Fr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Br.assign(r,ae,1,0),n=ae[0],n&=2148532223,t*ee(n|=e+Er<<20,ae[1])))}var ce=1.4426950408889634,ue=1/(1<<28);function fe(r){var e;return P(r)||r===Fr?r:r===Ur?0:r>709.782712893384?Fr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ue?1+r:function(r,e,n){var t,i,a,o;return oe(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=Cr(r<0?ce*r-.5:ce*r+.5)),1.9082149292705877e-10*e,e)}function se(r,e,n){return P(e)||P(n)||P(r)||n<=0||r<0||r>1?NaN:fe(e+n*Or(r,0,1))}return L(se,"factory",(function(r,e){return P(r)||P(e)||e<=0?Vr(NaN):function(n){return P(n)||n<0||n>1?NaN:fe(r+e*Or(n,0,1))}})),se},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=e();
//# sourceMappingURL=browser.js.map