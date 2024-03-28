const is_render = process.env.IS_RENDER === 'true'; // Ensures that is_render is a boolean
"mysql://freedb_comp2350_main:XFZSr3p6c25m@qb@sql.freedb.tech/freedb_comp2350-A01363804";
const dbConfigLocal = "mysql://root:Coding@626929a44@localhost/pets_week10";

// Uses ternary operator to set the database connection string based on the environment
const databaseConnectionString = is_render ? dbConfigRender : dbConfigLocal;

module.exports = databaseConnectionString;
