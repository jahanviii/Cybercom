-- one to many-- 
-- one customer many products
-- one category multiple product
CREATE TABLE Categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE Products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    product_description TEXT,
    product_price DECIMAL(10, 2) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);
INSERT INTO Categories (category_name) VALUES
('Clothing'),
('Books');

INSERT INTO Products (product_name, product_description, product_price, category_id) VALUES
('Tshirt', 'Comfort cloth', 599.99, 1), 
('Shirt', 'cloth', 699.99, 1), 
('asd', 'book', 900.00, 2),
('ikigai', 'book', 999.99, 2);

SELECT 
    Categories.category_name, 
    Products.product_name, 
    Products.product_description, 
    Products.product_price
FROM 
    Categories
INNER JOIN 
    Products ON Categories.category_id = Products.category_id;