/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable('users', (table) => {
        table.increments('id')
            .primary();
        table.varchar('username', 255)
            .notNullable();
        table.string('profile_bio');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable('users');
};
