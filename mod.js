// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,u=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,y,l;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,l="set"in t,v&&(y||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,n,t.get),l&&u&&u.call(r,n,t.set),r},y=n()?c:v;var l=function(r,n,t){y(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Math.sqrt;var N=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return N&&"symbol"==typeof Symbol.toStringTag},A=Object.prototype.toString,_=A;var m=function(r){return _.call(r)},d=Object.prototype.hasOwnProperty;var h=function(r,n){return null!=r&&d.call(r,n)},s="function"==typeof Symbol?Symbol.toStringTag:"",U=h,j=s,g=A;var I=m,O=function(r){var n,t,e;if(null==r)return g.call(r);t=r[j],n=U(r,j);try{r[j]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[j]=t:delete r[j],e},S=w()?O:I,E=S,F="function"==typeof Uint32Array;var H="function"==typeof Uint32Array?Uint32Array:null,T=function(r){return F&&r instanceof Uint32Array||"[object Uint32Array]"===E(r)},G=H;var P=function(){var r,n;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,4294967296,4294967297]),r=T(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var L="function"==typeof Uint32Array?Uint32Array:void 0,M=function(){throw new Error("not implemented")},V=P()?L:M,W=S,x="function"==typeof Float64Array;var k="function"==typeof Float64Array?Float64Array:null,Y=function(r){return x&&r instanceof Float64Array||"[object Float64Array]"===W(r)},q=k;var C=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q([1,3.14,-3.14,NaN]),r=Y(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},D=C()?z:B,J=S,K="function"==typeof Uint8Array;var Q="function"==typeof Uint8Array?Uint8Array:null,R=function(r){return K&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)},X=Q;var Z=function(){var r,n;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,256,257]),r=R(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var $="function"==typeof Uint8Array?Uint8Array:void 0,rr=function(){throw new Error("not implemented")},nr=Z()?$:rr,tr=S,er="function"==typeof Uint16Array;var or="function"==typeof Uint16Array?Uint16Array:null,ar=function(r){return er&&r instanceof Uint16Array||"[object Uint16Array]"===tr(r)},ur=or;var ir=function(){var r,n;if("function"!=typeof ur)return!1;try{n=new ur(n=[1,3.14,-3.14,65536,65537]),r=ar(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var fr,cr="function"==typeof Uint16Array?Uint16Array:void 0,vr=function(){throw new Error("not implemented")},yr={uint16:ir()?cr:vr,uint8:nr};(fr=new yr.uint16(1))[0]=4660;var lr=52===new yr.uint8(fr.buffer)[0],pr=V,br=!0===lr?1:0,Nr=new D(1),wr=new pr(Nr.buffer);var Ar=function(r){return Nr[0]=r,wr[br]},_r=V,mr=!0===lr?1:0,dr=new D(1),hr=new _r(dr.buffer);var sr=function(r,n){return dr[0]=r,hr[mr]=n>>>0,dr[0]},Ur=sr,jr=Number.NEGATIVE_INFINITY;var gr=Ar,Ir=Ur,Or=p,Sr=jr,Er=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Fr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Hr=.6931471803691238,Tr=1.9082149292705877e-10;var Gr=function(r){var n,t,e,o,a,u,i,f,c,v,y;return 0===r?Sr:Or(r)||r<0?NaN:(o=0,(t=gr(r))<1048576&&(o-=54,t=gr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(i=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=Ir(r,t|1072693248^i))-1,(1048575&2+t)<3?0===u?0===o?0:o*Hr+o*Tr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Hr-(a-o*Tr-u)):(i=t-398458|0,f=440401-t|0,e=(v=(y=(c=u/(2+u))*c)*y)*Er(v),a=y*Fr(v)+e,(i|=f)>0?(n=.5*u*u,0===o?u-(n-c*(n+a)):o*Hr-(n-(c*(n+a)+o*Tr)-u)):0===o?u-c*(u-a):o*Hr-(c*(u-a)-o*Tr-u))))},Pr=Number.POSITIVE_INFINITY;var Lr=p,Mr=b,Vr=Gr,Wr=Pr,xr=jr,kr=function(r){var n,t;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(n=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,t=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),t=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/t)},Yr=function(r){var n,t;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(n=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,t=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,t=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/t)},qr=function(r){var n,t;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(n=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(n=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),n/t)},Cr=function(r){var n,t;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(n=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(n=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),n/t)},zr=function(r){var n,t;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(n=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(n=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),t=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),n/t)};var Br=function(r){var n,t,e,o;return Lr(r)?NaN:1===r?Wr:-1===r?xr:0===r?r:r>1||r<-1?NaN:(r<0?(n=-1,t=-r):(n=1,t=r),e=1-t,t<=.5?n*(.08913147449493408*(o=t*(t+10))+o*kr(t)):e>=.25?n*((o=Mr(-2*Vr(e)))/(2.249481201171875+Yr(e-=.25))):(e=Mr(-Vr(e)))<3?n*(.807220458984375*e+qr(e-1.125)*e):e<6?n*(.9399557113647461*e+Cr(e-3)*e):n*(.9836282730102539*e+zr(e-6)*e))},Dr=Br,Jr=p,Kr=b;var Qr=function(r,n,t){return Jr(n)||Jr(t)||Jr(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*Kr(2)*Dr(2*r-1)};var Rr=function(r){return function(){return r}},Xr=p;var Zr=Rr,$r=p;var rn=function(r,n){return Xr(r)||r<0||r>1?NaN:n};l(rn,"factory",(function(r){return $r(r)?Zr(NaN):function(n){if($r(n)||n<0||n>1)return NaN;return r}}));var nn=Rr,tn=rn.factory,en=Br,on=p,an=b;var un=Qr;l(un,"factory",(function(r,n){var t,e;return on(r)||on(n)||n<0?nn(NaN):(0===n&&tn(r),t=r,e=n*an(2),function(r){if(on(r)||r<0||r>1)return NaN;return t+e*en(2*r-1)})}));var fn=un,cn=Math.floor,vn=Math.ceil,yn=cn,ln=vn;var pn=function(r){return r<0?ln(r):yn(r)},bn=Pr,Nn=jr;var wn,An,_n=function(r){return r===bn||r===Nn};!0===lr?(wn=1,An=0):(wn=0,An=1);var mn=V,dn={HIGH:wn,LOW:An},hn=new D(1),sn=new mn(hn.buffer),Un=dn.HIGH,jn=dn.LOW;var gn=function(r,n){return hn[0]=n,r[0]=sn[Un],r[1]=sn[jn],r};var In,On,Sn=function(r,n){return 1===arguments.length?gn([0,0],r):gn(r,n)};!0===lr?(In=1,On=0):(In=0,On=1);var En=V,Fn={HIGH:In,LOW:On},Hn=new D(1),Tn=new En(Hn.buffer),Gn=Fn.HIGH,Pn=Fn.LOW;var Ln=function(r,n){return Tn[Gn]=r,Tn[Pn]=n,Hn[0]},Mn=Sn,Vn=Ar,Wn=Ln,xn=[0,0];var kn=_n,Yn=p,qn=function(r){return Math.abs(r)};var Cn=function(r,n){return Yn(n)||kn(n)?(r[0]=n,r[1]=0,r):0!==n&&qn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var zn=Ar;var Bn=function(r){var n=zn(r);return(n=(2146435072&n)>>>20)-1023|0},Dn=Pr,Jn=jr,Kn=p,Qn=_n,Rn=function(r,n){var t,e;return Mn(xn,r),t=xn[0],t&=2147483647,e=Vn(n),Wn(t|=e&=2147483648,xn[1])},Xn=function(r,n){return 1===arguments.length?Cn([0,0],r):Cn(r,n)},Zn=Bn,$n=Sn,rt=Ln,nt=[0,0],tt=[0,0];var et=function(r,n){var t,e;return 0===n||0===r||Kn(r)||Qn(r)?r:(Xn(nt,r),n+=nt[1],(n+=Zn(r=nt[0]))<-1074?Rn(0,r):n>1023?r<0?Jn:Dn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,$n(tt,r),t=tt[0],t&=2148532223,e*rt(t|=n+1023<<20,tt[1])))};var ot=et,at=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ut=p,it=pn,ft=jr,ct=Pr,vt=function(r,n,t){var e,o,a;return a=(e=r-n)-(o=e*e)*at(o),ot(1-(n-e*a/(2-a)-r),t)};var yt=function(r){var n;return ut(r)||r===ct?r:r===ft?0:r>709.782712893384?ct:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=it(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),vt(r-.6931471803691238*n,1.9082149292705877e-10*n,n))};function lt(r,n,t){return p(n)||p(t)||p(r)||t<=0||r<0||r>1?NaN:yt(n+t*fn(r,0,1))}function pt(r,n){return p(r)||p(n)||n<=0?Rr(NaN):function(t){if(p(t)||t<0||t>1)return NaN;return yt(r+n*fn(t,0,1))}}l(lt,"factory",pt);export{lt as default,pt as factory};
//# sourceMappingURL=mod.js.map
