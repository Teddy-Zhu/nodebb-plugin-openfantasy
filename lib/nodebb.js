"use strict";

/*
* There really isn't any standard with regards to how best to interact with NodeBB modules.
* I'm going to try storing references here - hopefully it's clean and practical.
*/

var NodeBB = {};

NodeBB = {
	db:  require.main.require('./src/database'),
	user: require.main.require('./src/user')
};
module.exports = NodeBB;
