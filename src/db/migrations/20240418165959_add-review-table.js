/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const knex = require('knex')(require('../../../knexfile.js'));
const path = require('path');

const sqlPathUp = './sql/20240418165959_add-review-table-up.sql';
const sqlPathDown = './sql/20240418165959_add-review-table-down.sql';

// New change
exports.up = async function () {
  const sql = fs.readFileSync(path.resolve(__dirname, sqlPathUp), 'utf-8');
  await knex.raw(sql);
};

// Rollback
exports.down = async function () {
  const sql = fs.readFileSync(path.resolve(__dirname, sqlPathDown), 'utf-8');
  await knex.raw(sql);
};
