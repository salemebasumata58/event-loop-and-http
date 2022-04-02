const express= require('express');
const app = express();
app.use(logger)

app.get("/", (req, res) => {
    console.log("abs")
    res.send("Hello");
    // return res.send("Hello")
});
app.get("/books", (req, res) => {
    console.log("Fetching All books");
    const status =[
    {
        id: 1,
        book: "The Christmas Pig",
        author: "JK Rowling",
    },
    {
        id: 2,
        book: "Whereabouts",
        author: "Jhumpa Lahiri",
    },
    {
        id: 3,
        book: "Believe-What Life and Cricket Taught Me",
        author: "Suresh Raina",
    },
    {
        id: 4 ,
        book: "The Braille edition of the book Exam Warriors",
        author: "Narendra Modi",
    }
]

res.send(status);
});
app.get("/libraries",checkPermission, (req, res) => {
    console.log("Fetching All libraries");
    const status =[
    {
        id: 1,
        library:"l1"
    },
    {
        id: 2,
        library:"l2"
    },
    {
        id: 3,
        library:"l3"
    },
    
]
res.send(status);
});
app.get("/authors", (req, res) => {
    console.log("Fetching All authors");
    const status =[
    {
        id: 1,
        author: "a1"
    },
    {
        id: 2,
        author: "a2"
    },
    {
        id: 3,
        author: "a3"
    },
    
]

res.send(status);
});
function logger(req, res, next){
    // res.send
    console.log("i am logger");
    next();
}
const checkPermission =(req, res, next) => {
    const name =req.body.name;
    if(name=="authors");
   { next();

}}


app.listen(5003, () => {
    console.log("listning to port 5003");
});