import mysql from "mysql2/promise";

// TODO: Añadir la conexión a MySQL

const dataConnection = {
    host: "localhost",
    user: "root",
    password: "",
    database: "productos_db"
}

try {
    var connection = await mysql.createConnection(dataConnection);
    console.log("Conexion a base de datos ´´productos_db´´ MySQL establecida correctamente.");    
} catch (error) {
    console.log(error);    
}

export default connection;