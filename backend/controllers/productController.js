const { Client } = require('pg');

// PostgreSQL bağlantı ayarları
const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

client.connect();

// Ürün ekleme
const addProduct = async (req, res) => {
    const { name, price, quantity, category } = req.body;
    try {
        const query = `
            INSERT INTO products (name, price, quantity, category) 
            VALUES ($1, $2, $3, $4)
        `;
        await client.query(query, [name, price, quantity, category]);
        res.status(200).send('Product added successfully');
    } catch (error) {
        console.error('Error adding product: ', error);
        res.status(500).send('Error adding product');
    }
};

// Satış verilerini kategoriye göre almak
const getSalesData = async (req, res) => {
    try {
        const result = await client.query(`
            SELECT category, SUM(price * quantity) 
            FROM products
            GROUP BY category
        `);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching sales data: ', error);
        res.status(500).send('Error fetching sales data');
    }
};

module.exports = { addProduct, getSalesData };
