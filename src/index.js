const express = require('express')
// const bodyParser = require('body-parser')

const cors = require('cors')


const app = express()

app.use(express.static('public'))

app.use(express.urlencoded()) //Content-Type: application/x-www-form-urlencoded


app.use(express.json())//Content-Type: application/json;

app.use(cors())


app.get('/get_1',(req,res)=>{
  // res.setHeader('Access-Control-Allow-Origin','*')
  // res.setHeader('Access-Control-Allow-Origin','http://www.baidu.com')

  console.log(req.query);
  let obj = req.query;
  obj._time = Date.now();
  res.json(obj)
})


app.post('/post_1',(req,res)=>{
  let obj = req.body;
  obj._time = Date.now();
  res.json(obj)
})


app.listen(3000,()=>{
  console.log('server on port 3000');
})
