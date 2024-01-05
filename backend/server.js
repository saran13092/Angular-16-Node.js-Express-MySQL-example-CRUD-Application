// const express=require('express');
// const mysql=require('mysql2');
// const bodyparser=require('body-parser');
// const cors=require('cors');

// const app=express();
// const port=3000;
// app.use (bodyparser.json());
// app.use(cors());

// const db=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'password',
//     database:'cars'

// });

// db.connect((err)=>{
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log('connect successfully');
//     }  
// });

// app.post('/postdata',(req,res)=>{
//     const {brand,price,color}=req.body;
//     console.log(req.body);
//     db.query('insert into cars(brand,price,color)values(?,?,?)',[brand,price,color],(error,result,field)=>{
//         if(error){
//             console.error(error);
//             res.status(500).send('insert error');
//         }
//         else {
//             res.status(200).send(req.body);
//         }
//     });
// });

// app.get('/getAll', (req, res) => {
//     db.query('select * from cars', (error, results, fields) => {
//         if (error) {
//             console.error('getAll error');
//             res.status(500).send('error');
//         }
//         else {
//             res.status(200).send(results);
//         }
//     });
// });

// app.get('/getById/:id', (req, res) => {
//     const id  = req.params.id;

//     db.query('select * from cars where id=?', [id], (error, results, fields) => {
//         if (error) {
//             console.error('getById is error');
//             res.status(500).send('error');
//         }
//         else {
//             if (results.length == 0) {
//                 res.status(404).send('Student not found');
//             }
//             else{
//                 res.status(200).send(results[0]);
//             }
//         }
//     });
// });

// app.delete('/deleteById/:id', (req, res) => {
//     const { id } = req.params;

//     db.query('delete from cars where id=?', [id], (error, results, fields) => {
//         if (error) {
//             console.error('deleteById is error');
//             res.status(500).send('error');
//         }
//         else {
//             console.log('Deleted Sucessfully');
//             res.status(200).send(req.params);
//         }
//     });
// });

// app.put('/update/:id', (req, res) => {
//     const { id } = req.params;
//     const { brand, price, color } = req.body;

//     db.query('update cars set brand=?,price=?,color=? where id=?', [brand, price, color, id], (error, results, fields) => {
//         if (error) {
//             console.error('error showing while updata data');
//             res.status(500).send("error statement");
//         }
//         else {
//             res.status(200).send(req.body);
//         }
//     });
// });

// app.listen(3000);






const express = require('express');
const mysql = require('mysql2');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MySQL successfully');

        // Create the database if it doesn't exist
        db.query('CREATE DATABASE IF NOT EXISTS cars', (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Database "cars" created or already exists');

                // Use the "cars" database
                db.query('USE cars', (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        // Create the "cars" table if it doesn't exist
                        const createTableQuery = `
                            CREATE TABLE IF NOT EXISTS cars (
                                id INT AUTO_INCREMENT PRIMARY KEY,
                                brand VARCHAR(255) NOT NULL,
                                price DECIMAL(10, 2) NOT NULL,
                                color VARCHAR(50) NOT NULL
                            )
                        `;
                        db.query(createTableQuery, (err) => {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('Table "cars" created or already exists');
                            }
                        });
                    }
                });
            }
        });
    }
});

app.post('/postdata', (req, res) => {
    const { brand, price, color } = req.body;
    console.log(req.body);

    db.query('insert into cars(brand, price, color) values(?, ?, ?)', [brand, price, color], (error, result, field) => {
        if (error) {
            console.error(error);
            res.status(500).send('insert error');
        } else {
            res.status(200).send(req.body);
        }
    });
});

app.get('/getAll', (req, res) => {
    db.query('select * from cars', (error, results, fields) => {
        if (error) {
            console.error('getAll error');
            res.status(500).send('error');
        } else {
            res.status(200).send(results);
        }
    });
});

app.get('/getById/:id', (req, res) => {
    const id  = req.params.id;

    db.query('select * from cars where id=?', [id], (error, results, fields) => {
        if (error) {
            console.error('getById is error');
            res.status(500).send('error');
        }
        else {
            if (results.length == 0) {
                res.status(404).send('Student not found');
            }
            else{
                res.status(200).send(results[0]);
            }
        }
    });
});

app.delete('/deleteById/:id', (req, res) => {
    const { id } = req.params;

    db.query('delete from cars where id=?', [id], (error, results, fields) => {
        if (error) {
            console.error('deleteById is error');
            res.status(500).send('error');
        }
        else {
            console.log('Deleted Sucessfully');
            res.status(200).send(req.params);
        }
    });
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { brand, price, color } = req.body;

    db.query('update cars set brand=?,price=?,color=? where id=?', [brand, price, color, id], (error, results, fields) => {
        if (error) {
            console.error('error showing while updata data');
            res.status(500).send("error statement");
        }
        else {
            res.status(200).send(req.body);
        }
    });
});

// Add your other routes here...
app.listen(3000);
