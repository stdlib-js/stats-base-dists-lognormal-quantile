"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=i(function(h,q){
var s=require('@stdlib/stats-base-dists-normal-quantile/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-exp/dist');function l(e,r,t){return u(r)||u(t)||u(e)||t<=0||e<0||e>1?NaN:N(r+t*s(e,0,1))}q.exports=l
});var v=i(function(j,c){
var x=require('@stdlib/utils-constant-function/dist'),y=require('@stdlib/stats-base-dists-normal-quantile/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-exp/dist');function F(e,r){if(a(e)||a(r)||r<=0)return x(NaN);return t;function t(n){return a(n)||n<0||n>1?NaN:d(e+r*y(n,0,1))}}c.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=o(),R=v();O(f,"factory",R);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
