const is_render = process.env.IS_RENDER || false;
const dbConfigRender = "mysql://freedb_cwan_main:n!?hTMRsJ2GNPM*@sql.freedb.tech:3306/freedb_comp2350-week2-A00970304";
const dbConfigLocal = "mysql://root:Password@localhost/pets_week10";
if (is_render) {
var databaseConnectionString = dbConfigRender;
}
else {
var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;