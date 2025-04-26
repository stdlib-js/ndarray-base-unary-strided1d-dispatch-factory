<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# unaryStrided1dDispatchFactory

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a function for applying a strided function an input ndarray.



<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
import unaryStrided1dDispatchFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory@esm/index.mjs';
```

#### unaryStrided1dDispatchFactory( table, idtypes, odtypes, policies )

Returns a function for applying a strided function an input ndarray.

<!-- eslint-disable id-length -->

```javascript
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-cumax@esm/index.mjs';

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policies = {
    'output': 'same',
    'casting': 'none'
};

var unary = unaryStrided1dDispatchFactory( table, [ dtypes ], dtypes, policies );
```

The function has the following parameters:

-   **table**: strided function dispatch table. Must have the following properties:

    -   **default**: default strided function which should be invoked when provided ndarrays have data types which do not have a corresponding specialized implementation.

    A dispatch table may have the following additional properties:

    -   **types**: one-dimensional list of ndarray data types describing specialized input and output ndarray argument signatures. Only the input and output ndarray argument data types should be specified. Additional ndarray argument data types should be omitted and are not considered during dispatch. The length of `types` must equal the number of strided functions specified by `fcns` multiplied by two (i.e., for every pair of input-output ndarray data types, there must be a corresponding strided function in `fcns`).
    -   **fcns**: list of strided functions which are specific to specialized input and output ndarray argument signatures.

-   **idtypes**: list containing lists of supported input data types for each input ndarray argument.

-   **odtypes**: list of supported output data types.

-   **policies**: dispatch policies. Must have the following properties:

    -   **output**: output data type [policy][@stdlib/ndarray/output-dtype-policies].
    -   **casting**: input ndarray casting [policy][@stdlib/ndarray/input-casting-policies].

#### unary( x\[, ...args]\[, options] )

Applies a strided function to a provided input ndarray.

<!-- eslint-disable id-length -->

```javascript
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@esm/index.mjs';
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-cumax@esm/index.mjs';

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policies = {
    'output': 'same',
    'casting': 'none'
};

var unary = unaryStrided1dDispatchFactory( table, [ dtypes ], dtypes, policies );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var y = unary( x );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ -1.0, 2.0, 2.0 ]
```

The function has the following parameters:

-   **x**: input ndarray.
-   **...args**: additional input ndarray arguments (_optional_).
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dims**: list of dimensions over which to perform operation.
-   **dtype**: output ndarray data type. Setting this option, overrides the output data type policy.

By default, the function returns an ndarray having a data type determined by the output data type policy. To override the default behavior, set the `dtype` option.

<!-- eslint-disable id-length -->

```javascript
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@esm/index.mjs';
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-cumax@esm/index.mjs';
import getDType from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@esm/index.mjs';

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policies = {
    'output': 'same',
    'casting': 'none'
};

var unary = unaryStrided1dDispatchFactory( table, [ dtypes ], dtypes, policies );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var y = unary( x, {
    'dtype': 'float64'
});
// returns <ndarray>

var dt = getDType( y );
// returns 'float64'
```

#### unary.assign( x\[, ...args], out\[, options] )

Applies a strided function to a provided input ndarray and assigns results to a provided output ndarray.

<!-- eslint-disable id-length -->

```javascript
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-cumax@esm/index.mjs';
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@esm/index.mjs';

var idt = dtypes( 'real_and_generic' );
var odt = idt;
var policies = {
    'output': 'same',
    'casting': 'none'
};

var table = {
    'default': base
};
var unary = unaryStrided1dDispatchFactory( table, [ idt ], odt, policies );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var ybuf = [ 0.0, 0.0, 0.0 ];
var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );

var out = unary.assign( x, y );
// returns <ndarray>

var arr = ndarray2array( out );
// returns [ -1.0, 2.0, 2.0 ]

var bool = ( out === y );
// returns true
```

The method has the following parameters:

-   **x**: input ndarray.
-   **args**: additional input ndarray arguments (_optional_).
-   **out**: output ndarray.
-   **options**: function options (_optional_).

The method accepts the following options:

-   **dims**: list of dimensions over which to perform operation.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A strided function should have the following signature:

    ```text
    f( arrays )
    ```

    where

    -   **arrays**: array containing an input and an output ndarray, followed by any additional ndarray arguments.

-   The output data type policy only applies to the function returned by the main function. For the `assign` method, the output ndarray is allowed to have any data type.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length, max-len, array-element-newline -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import dcumax from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-dcumax@esm/index.mjs';
import scumax from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-scumax@esm/index.mjs';
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-cumax@esm/index.mjs';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@esm/index.mjs';
import dtype from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs';
import unaryStrided1dDispatchFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory@esm/index.mjs';

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_and_generic' );

// Define dispatch policies:
var policies = {
    'output': 'same',
    'casting': 'none'
};

// Define a dispatch table:
var table = {
    'types': [
        'float64', 'float64', // input, output
        'float32', 'float32'  // input, output
    ],
    'fcns': [
        dcumax,
        scumax
    ],
    'default': base
};

// Create an interface for performing an operation:
var cumax = unaryStrided1dDispatchFactory( table, [ idt ], odt, policies );

// Generate an array of random numbers:
var xbuf = discreteUniform( 25, -10, 10, {
    'dtype': 'generic'
});

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 5, 5 ], [ 5, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

// Perform operation:
var y = cumax( x, {
    'dims': [ 0 ]
});

// Resolve the output array data type:
var dt = dtype( y );
console.log( dt );

// Print the results:
console.log( ndarray2array( y ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-unary-strided1d-dispatch-factory.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-unary-strided1d-dispatch-factory

[test-image]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/main/LICENSE

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray-output-dtype-policies/tree/esm

[@stdlib/ndarray/input-casting-policies]: https://github.com/stdlib-js/ndarray-input-casting-policies/tree/esm

</section>

<!-- /.links -->
