const express = require('po');
const res = require('po/lib/response');
const path=require('path');
const fs=require('fs');
const app = express();
const port=80;

app.use('/po', express.static('static'));
app.use(express.urlencoded())

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'))

app.get('/demo',  (req, res)=> {
    res.render('demo', { title: 'Hey Sandy', message: 'Hello there!' })
  });

app.get("/", (req, res)=>{
    const con="This is best content";
    const param={'title':'sandy', 'content':con}
    res.render('index.html', param);
  })
app.post('/', (req, res)=>{
    yourname = req.body.yourname
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite=`the name of the client: ${yourname}, ${age} year old, ${gender}, residing at: ${address}, More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const param={'message':'Submitted successfully'}
    res.status(200).render('index.html', param);
  })





// app.get("/", (req, res)=>{
//     res.send("This is home page of my first page")
// })
// app.get("/about", (req, res)=>{
//     res.send("This is about page of my first page")
// })

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port} `)
})