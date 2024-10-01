import express from 'express';
const router = new express.Router();
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";


// import database connection
import connection from '../database/connection.js';

// TODO: Crear las rutas para el CRUD productos. Validar los datos:
// - Que llegue el objecto por el body
// - Que llegue con las props adecuadas
// - Que lleguen los valores de las prop adecuadas

router.get('/productos', async (req, res) => {
    try {
      const sql = 'SELECT * FROM products';
      const [result] = await connection.query(sql);
      return res.json(result);
    } catch (err) {
      console.log(err);
    }
});
  




export default router;