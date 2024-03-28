const is_render = process.env.IS_RENDER || false;
const password = encodeURIComponent("n!?hTMRsJ2GNPM*");
const dbConfigRender = `mysql://freedb_cwan_main:${password}@sql.freedb.tech/freedb_comp2350-week2-A00970304`;
const dbConfigLocal = "mysql://root:Coding@626929a44@localhost/pets_week10";

const databaseConnectionString = is_render ? dbConfigRender : dbConfigLocal;

module.exports = databaseConnectionString;
