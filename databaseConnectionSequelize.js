const is_render = process.env.IS_RENDER === 'true'; // Ensures that is_render is a boolean
const password = encodeURIComponent("n!?hTMRsJ2GNPM*");
const dbConfigQoddi = `mysql://freedb_cwan_main:${password}@sql.freedb.tech/freedb_comp2350-week2-A00970304`;
const dbConfigLocal = "mysql://root:Coding@626929a44@localhost/pets_week10";

// Uses ternary operator to set the database connection string based on the environment
const databaseConnectionString = is_render ? dbConfigRender : dbConfigLocal;

module.exports = databaseConnectionString;
