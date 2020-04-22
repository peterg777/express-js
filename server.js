const express = require('express');
const path = require('path');
const fs = require('fs');
let app = express();
app.use((req, res, next) => {
    console.log(req.method + ' ' + req.url)
    next()
})
app.use(express.static('public'))
app.get('/test', (req, res) => {
    res.send('hello from the web server side!!!!!!!!!!');

});

app.use(express.urlencoded({extended:false}))
// app.use(express.json())
app.post("/formsubmission", (req, res) => {
    
    let name = req.body.name;
    let email = req.body.email;
    let formData = {
           name,
           email
    }; //adds submitted firstName and lastName to formData
    console.log(formData)
    fs.readFile(path.join(__dirname, "./formsubmissions.json"), (err, data) => {
        if (err) console.log(err); //log errors
        let parsedData = JSON.parse(data); //data that is parsed into JSON is called parsedData
        parsedData.push(formData); //pushes parsedData into array
        fs.writeFile(
            path.join(__dirname, "./formsubmissions.json"),
            JSON.stringify(parsedData),
            err => {
                if (err) console.log(err);
                res.send(parsedData);
            }
        );
    }
    );
});

app.listen(3000, () => console.log('server running on port 3000'));

