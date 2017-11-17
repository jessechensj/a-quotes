var express = require("express");

var session = require("express-session");

var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/anonymous_quotes_db');

var QuoteSchema = new mongoose.Schema({
    content: {type: String, required: true},
    created_at: Date
   });
mongoose.model('Quote', QuoteSchema); 

var Quote = mongoose.model('Quote') 

var bodyParser = require('body-Parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(session({secret: 'key'}));

const path = require('path'); 

app.use(express.static(path.join(__dirname, '/notes/dist')));


app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('index')
});


app.post('/create', (req, res, next)=>{
        var quote = new Quote({content:req.body.content, created_at: new Date()});
        
            quote.save(function(err){
                if(err){
                    console.log('something went wrong with creation');
                }
                else{
                    console.log('success');
                }
            })
        
});


app.get('/quotes', (req, res, next)=>{
    console.log('in get all quotes');
    Quote.find({}, function(err, data) {
        if(err){
            console.log('something went wrong');
        }
        else{
            res.json(data);
        }
    });
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});


app.listen(8000, function(){
    console.log("listening on 8000");
})