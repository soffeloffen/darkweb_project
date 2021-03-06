/*
GET to retrieve a resource;
PUT to change the state of or update a resource, which can be an object, file or block;
POST to create that resource; and
DELETE to remove it.
*/

const express = require('express');

const app = express(); 

const passportProduct = [
    {id: 1, country: "Malta", price: 200},
    {id: 2, country: "UK", price: 9000}
]

/*Get all passport products*/ 
app.get('/api(products', (req, res) => {
    res.send(passportProduct)
});

/* 
Define a parameter such as id 
Get specific product by id 
*/
app.get('/api(products:id', (req, res) => {
    resource.send(req.params.id); // 1 simple method
    const prod = passportProduct.find(c => c.id == parseInt(req.params.id)); //2 best method 
});

/*LISTENING TO GET REQUEST - dynamic port variable*/ 
const port = process.env.PORT || 3000; //if no port is given, use 3000
app.listen(port, () => console.log(`listening on ${port}`));




