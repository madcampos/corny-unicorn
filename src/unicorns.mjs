import { randomUUID } from 'crypto';

const UNICORN_TYPES = [
	'pegasus',
	'unicorn',
	'alicorn',
	'narwhal',
	'rhino',
	'horse',
	'special'
];

const UNICORN_SIZES = [
	'tiny',
	'small',
	'medium',
	'large',
	'huge',
	'humongous'
];

/**
 * @param {import('../db/db').Unicorn} possibleUnicorn
 */
function validateUnicorn(possibleUnicorn) {
	if (!possibleUnicorn.name) {
		throw new Error('name is required');
	}

	if (!possibleUnicorn.favorite_color) {
		throw new Error('favorite_color is required');
	}

	if (!possibleUnicorn.birthday || !new Date(possibleUnicorn.birthday).getTime()) {
		throw new Error('birthday is required');
	}

	if (!UNICORN_TYPES.includes(possibleUnicorn.type)) {
		throw new Error(`type must be one of ${UNICORN_TYPES.join(', ')}`);
	}

	if (!UNICORN_SIZES.includes(possibleUnicorn.size)) {
		throw new Error(`size must be one of ${UNICORN_SIZES.join(', ')}`);
	}

	if (!possibleUnicorn.horse_power || Number.isNaN(possibleUnicorn.horse_power)) {
		throw new Error('horse_power is required and must be a number');
	}

	if (!possibleUnicorn.cuteness || Number.isNaN(possibleUnicorn.cuteness)) {
		throw new Error('cuteness is required and must be a number');
	}

	if (!possibleUnicorn.magic || Number.isNaN(possibleUnicorn.magic)) {
		throw new Error('magic is required and must be a number');
	}
}

/**
 * @param {import('hono').Context} context
 * @param {import('knex').Knex} db
 */
export async function getUnicornsList(context, db) {
	const unicorns = await db('unicorns').select('*');

	return context.json(unicorns);
}

/**
 * @param {import('hono').Context} context
 * @param {import('knex').Knex} db
 */
export async function getUnicorn(context, db) {
	const unicorn = await db('unicorns').where('id', context.req.param('id')).first();

	return context.json(unicorn);
}

/**
 * @param {import('hono').Context} context
 * @param {import('knex').Knex} db
 */
export async function updateUnicorn(context, db) {
	const possibleUnicorn = context.req.body;

	try {
		validateUnicorn(possibleUnicorn);
	} catch (error) {
		return context.json({
			error: error.message
		}, 400);
	}

	const unicorn = await db('unicorns').where('id', context.req.param('id')).update({
		...possibleUnicorn,
		updated_at: new Date().toISOString()
	});

	return context.json(unicorn);
}

/**
 * @param {import('hono').Context} context
 * @param {import('knex').Knex} db
 */
export async function createUnicorn(context, db) {
	const possibleUnicorn = context.req.body;

	try {
		validateUnicorn(possibleUnicorn);
	} catch (error) {
		return context.json({
			error: error.message
		}, 400);
	}

	const unicorn = await db('unicorns').insert({
		...possibleUnicorn,
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		id: randomUUID()
	});

	return context.json(unicorn);
}
