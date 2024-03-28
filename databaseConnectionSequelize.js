const is_render = process.env.IS_RENDER || false;
const password = encodeURIComponent("qE%6DmaDpeKvTpj");
const dbConfigRender = `mysql://freedb_2351_main:${password}@sql.freedb.tech/freedb_comp2350-week2-A01301050`;
const dbConfigLocal = "mysql://root:Coding@626929a44@localhost/pets_week10";

const databaseConnectionString = is_render ? dbConfigRender : dbConfigLocal;

module.exports = databaseConnectionString;
