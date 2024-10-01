// importa el paquete express de "node_modules"
import express from 'express';

// TODO: Desarrollar parte server: APIRest con un CRUD de productos (4 campos incluyendo a PK)

// import routes
import ejemplosRoutes from "./routes/ejemplos.routes";
import userRoutes from "./routes/crud.productos.routes";

const server = new express();

server.use(express.json());

server.use("/api/v1", ejemplosRoutes, userRoutes);


server.listen(3000, () => {
    console.log(`Servidor escuchando por el puerto 3000`)
});