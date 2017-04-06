import test from 'ava';
import m from './';

test(t => {
	t.true(m.all.length > 0);
	t.truthy(m.random());
	t.is(m.all[0], 'Tete Blanche');
});
