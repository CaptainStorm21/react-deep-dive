const express = require ('express');
const app = express();

//import routes
const authRoutes = require ('./routes/auth');

//middleware
app.use('/api', authRoutes);

const port = process.env.port || 8000;
app.listen(port, () =>{
  console.log(`YAY! API is running on ${port}`);
})