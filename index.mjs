// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-quantile@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";function r(t,i,r){return e(i)||e(r)||e(t)||r<=0||t<0||t>1?NaN:n(i+r*s(t,0,1))}function d(t,r){return e(t)||e(r)||r<=0?i(NaN):function(i){if(e(i)||i<0||i>1)return NaN;return n(t+r*s(i,0,1))}}t(r,"factory",d);export{r as default,d as factory};
//# sourceMappingURL=index.mjs.map
