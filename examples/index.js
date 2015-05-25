'use strict';

var incrmax = require( './../lib' );

// Initialize a method to calculate the maximum value incrementally:
var max = incrmax();

// Simulate some data...
var value, m;

console.log( '\nValue\tMax\n' );

for ( var i = 0; i < 100; i++ ) {

	value = Math.random() * 100;
	m = max( value );

	console.log( '%d\t%d', value.toFixed( 4 ), m.toFixed( 4 ) );
}

// Final maximum value:
console.log( '\nFinal max is %d...\n', max() );
