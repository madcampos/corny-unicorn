import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import knex from 'knex';

import { createUnicorn, getUnicorn, getUnicornsList, updateUnicorn } from './unicorns.mjs';

const app = new Hono();
const db = knex({
	client: 'sqlite3',
	connection: {
		filename: './db/db.sqlite'
	}
});

//Static files
app.use('/*', serveStatic({ root: './assets' }));

// API routes
// CRUD => unicorns
app.get('/api/unicorns', async (context) => getUnicornsList(context, db));

app.get('/api/unicorns/:id', async (context) => getUnicorn(context, db));

app.post('/api/unicorns', async (context) => createUnicorn(context, db));

app.patch('/api/unicorns/:id', async (context) => updateUnicorn(context, db));

// CRUD => appointments

serve(app);
