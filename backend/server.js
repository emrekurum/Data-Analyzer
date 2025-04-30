require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const app = express();
const port = 5000;

app.use(express.json()); // JSON veri alabilmek için

// API Rotalarını Bağla
app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
