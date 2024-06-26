const database = include('/databaseConnection');


async function getAllUsers() {
	let sqlQuery = `
		SELECT pet_id
		FROM pet;
	`;
	
	try {
		const results = await database.query(sqlQuery);
		console.log(results[0]);
		return results[0];
	}
	catch (err) {
		console.log("Error selecting from todo table");
		console.log(err);
		return null;
	}
}


module.exports = {getAllUsers}
