import mysql from 'mysql2/promise';
const db = await mysql.createConnection({
    host: "localhost",
    "user": "root",
    password: "hrdpaliwal",
    database: "hardik"
});
console.log(await db.execute("show tables"));
//# sourceMappingURL=index.js.map