'use strict';

// INCREMENTAL MAX //

/**
* FUNCTION: incrmax()
*	Returns a method to compute the maximum value incrementally.
*
* @returns {Function} method to compute the max incrementally
*/
function incrmax() {
	var max = null;
	/**
	* FUNCTION: incrmax( [value] )
	*	If a `value` is provided, updates and returns the updated max. If no `value` is provided, returns the current max.
	*
	* @param {Number} [value] - value used to update the max
	* @returns {Number|Null} max value or null
	*/
	return function incrmax( x ) {
		if ( !arguments.length ) {
			return max;
		}
		if ( x > max || max === null ) {
			max = x;
		}
		return max;
	};
} // end FUNCTION incrmax()


// EXPORTS //

module.exports = incrmax;
