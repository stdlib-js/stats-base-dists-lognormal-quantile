<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Lognormal][lognormal-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [lognormal][lognormal-distribution] random variable is

<!-- <equation class="equation" label="eq:quantile_function" align="center" raw="Q(p;\mu,\sigma)=\exp\left( \mu + \sigma \Phi^{-1}(p) \right )" alt="Quantile function for a lognormal distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;\mu,\sigma)=\exp\left( \mu + \sigma \Phi^{-1}(p) \right )" data-equation="eq:quantile_function">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/lognormal/quantile/docs/img/equation_quantile_function.svg" alt="Quantile function for a lognormal distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p < 1`, where `mu` is the location parameter and `sigma > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-lognormal-quantile
```

</section>

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats-base-dists-lognormal-quantile' );
```

#### quantile( p, mu, sigma )

Evaluates the [quantile function][quantile-function] for a [lognormal][lognormal-distribution] distribution with parameters `mu` (location parameter) and `sigma` (scale parameter).

```javascript
var y = quantile( 0.5, 0.0, 1.0 );
// returns 1.0

y = quantile( 0.5, 4.0, 1.0 );
// returns ~54.598

y = quantile( 0.8, 4.0, 1.0 );
// returns ~126.675

y = quantile( 0.8, 4.0, 4.0 );
// returns ~1582.063
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.0, 1.0 );
// returns NaN

y = quantile( -0.1, 0.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 0.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 0.0, -1.0 );
// returns NaN

y = quantile( 0.4, 0.0, 0.0 );
// returns NaN
```

#### quantile.factory( mu, sigma )

Returns a function for evaluating the [quantile function][quantile-function] of a [lognormal][lognormal-distribution] distribution with parameters `mu` and `sigma`.

```javascript
var myquantile = quantile.factory( 4.0, 2.0 );

var y = myquantile( 0.2 );
// returns ~10.143

y = myquantile( 0.8 );
// returns ~293.901
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var quantile = require( '@stdlib/stats-base-dists-lognormal-quantile' );

var sigma;
var mu;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    mu = (randu() * 10.0) - 5.0;
    sigma = randu() * 20.0;
    y = quantile( p, mu, sigma );
    console.log( 'p: %d, µ: %d, σ: %d, Q(p;µ,σ): %d', p.toFixed( 4 ), mu.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-lognormal-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-lognormal-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-lognormal-quantile/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-lognormal-quantile/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-lognormal-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-lognormal-quantile?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-lognormal-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-lognormal-quantile/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-lognormal-quantile/main/LICENSE

[lognormal-distribution]: https://en.wikipedia.org/wiki/Lognormal_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->