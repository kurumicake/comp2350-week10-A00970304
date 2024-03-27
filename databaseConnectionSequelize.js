// Convert IS_RENDER environment variable to a boolean correctly
const isRender = process.env.IS_RENDER === 'true';

// Fixed whitespace issues in the connection string
const dbConfigRender = "mysql://freedb_cwan_main:n!?hTMRsJ2GNPM*@sql.freedb.tech:3306/freedb_comp2350-week2-A00970304";

const dbConfigLocal = "mysql://root:Coding@626929a44@localhost/pets_week10";

// Declare databaseConnectionString outside of if-else scope
let databaseConnectionString;

if (isRender) {
    databaseConnectionString = dbConfigRender;
} else {
    databaseConnectionString = dbConfigLocal;
}

module.exports = databaseConnectionString;
