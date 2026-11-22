/** @license Apache-2.0 */

'use strict';

/**
* Create a function for applying a strided function to a provided ndarray.
*
* @module @stdlib/ndarray-base-unary-strided1d-dispatch-factory
*
* @example
* var base = require( '@stdlib/stats-base-ndarray-cumax' );
* var dtypes = require( '@stdlib/ndarray-dtypes' );
* var ndarray2array = require( '@stdlib/ndarray-to-array' );
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var factory = require( '@stdlib/ndarray-base-unary-strided1d-dispatch-factory' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'same',
*     'casting': 'none'
* };
*
* var table = {
*     'default': base
* };
* var cumax = factory( table, [ idt ], odt, policies );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var y = cumax( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ -1.0, 2.0, 2.0 ]
*
* @example
* var base = require( '@stdlib/stats-base-ndarray-cumax' );
* var dtypes = require( '@stdlib/ndarray-dtypes' );
* var ndarray2array = require( '@stdlib/ndarray-to-array' );
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var factory = require( '@stdlib/ndarray-base-unary-strided1d-dispatch-factory' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'same',
*     'casting': 'none'
* };
*
* var table = {
*     'default': base
* };
* var cumax = factory( table, [ idt ], odt, policies );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 0.0, 0.0, 0.0 ];
* var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
*
* var out = cumax.assign( x, y );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ -1.0, 2.0, 2.0 ]
*
* var bool = ( out === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign" }
