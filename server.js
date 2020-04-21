const express = require('express');
const path = require('path');
const fs = require('fs');
const formSubmit = path.join(__dirname, '../formsubmissions.json')
let app = express();
app.use((req,res,next)=> {
    console.log(req.method + ' ' + req.url)
    next()
})
app.use(express.static('public'))
app.get('/test', (req, res) => {
    res.send('hello from the web server side!!!!!!!!!!');
  
});


//     let formValue = JSON.stringify(req.body)
//     fs.writeFile(formSubmit, formValue, (err) => {
//         if (err) {console.log(err);} 
//    })
//     res.send('Information Received!!!!');


app.listen(3000,() => console.log('server running on port 3000') );

