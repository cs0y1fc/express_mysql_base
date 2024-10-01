

-- TODO: Crear la tabla de productos

drop schema if exists productos_db;
CREATE DATABASE productos_db;
use productos_db;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio DECIMAL(10, 2),
    stock INT,
    createdAtTime DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES 
('Laptop', 'Portátil de alta gama con 16GB de RAM y 512GB SSD', 1200.99, 10),
('Smartphone', 'Teléfono inteligente con pantalla OLED de 6 pulgadas', 699.50, 25),
('Audífonos', 'Audífonos inalámbricos con cancelación de ruido', 199.99, 50),
('Monitor', 'Monitor 4K de 27 pulgadas con alta precisión de color', 349.00, 15);

select * from productos;