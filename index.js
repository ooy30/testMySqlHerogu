const express = require('express');
const app = express();

const mysql = require('mysql');
const cors = require('cors');
const { connect } = require('http2');

const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
   user :"root",
   host :"localhost",
   password :"Ooyeve30",
   database: "new_schema",
  insecureAuth : true

},(err) =>{
    console.log(err);
})

app.get('/db',(req,res) => {
    db.query("SELECT * FROM new_schema.new_table",(err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.get('/',(req,res) => {
    res.json({result :"ok",data :[1,2,3,4,4]})
})

app.listen(PORT,()=>{
    console.log('Server Run',PORT);
    // connection.connect((err,result)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //         res.send(result);
    //     }
    // })
})