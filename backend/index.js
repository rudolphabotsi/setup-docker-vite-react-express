const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello, World!'); 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
