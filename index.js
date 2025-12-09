import express, { response } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//challenge 1.

app.get('/user', (req, res) => {
    res.json([
        {id:1, name: "sushant"},
        {id:2, name:"rounak"}
    ])
})

//challenge 2.

let user = [];

app.post('/post-user', (req, res) => {
    user.push({"name": "rohit"})
    res.send("user Added")
})

//challenge 3.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});