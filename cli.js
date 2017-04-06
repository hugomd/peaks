#!/usr/bin/env node
const meow = require('meow');
const peaks = require('./');

const cli = meow({
	help: [
		'Examples',
		'  $ peaks',
		'  Madrisa',
    '',
		'  $ peaks --all',
		'  Madrisa',
		'  Rhinerhorn',
		'  Jakobshorn',
		'  ...',
		'',
		'Options',
		'  --all  Get all peak names instead of a random name'
	]
});

console.log(cli.flags.all ? peaks.all.join('\n') : peaks.random());
