/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	incrmax = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-incrmax', function tests() {

	it( 'should export a function', function test() {
		expect( incrmax ).to.be.a( 'function' );
	});

	it( 'should return a function', function test() {
		expect( incrmax() ).to.be.a( 'function' );
	});

	it( 'should initialize to null', function test() {
		var max = incrmax();
		assert.isNull( max() );
	});

	it( 'should compute a maximum value incrementally', function test() {
		var data,
			N,
			max,
			expected,
			actual;

		data = [ 2, 3, 2, 4, 3, 4 ];
		N = data.length;

		expected = new Array( N );
		actual = new Array( N );

		max = incrmax();

		for ( var i = 0; i < N; i++ ) {
			expected[ i ] = calc( data.slice( 0, i+1 ) );
			actual[ i ] = max( data[ i ] );
		}

		assert.deepEqual( actual, expected );

		function calc( arr ) {
			var N = arr.length,
				max = arr[ 0 ];
			for ( var i = 1; i < N; i++ ) {
				if ( arr[ i ] > max ) {
					max = arr[ i ];
				}
			}
			return max;
		}
	});

	it( 'should return the current max if provided no arguments', function test() {
		var data = [ 2, 3, 1 ],
			max = incrmax();
		for ( var i = 0; i < data.length; i++ ) {
			max( data[ i ] );
		}
		assert.strictEqual( max(), 3 );
	});

});
