const express = require('express');
const router = express.Router();
const path = require('path');
const logger = require('morgan');
const multer = require('multer');
const app = express();
const upload = multer({dest:'./public/uploads'})

const port = 3001;

// Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Static files
app.use("/static",express.static(path.join(__dirname,"public")));

// Application level middleware
const loggerMiddleware = (req,res,next) => {
    console.log(`${new Date()} ---Request [${req.method}] --- Url [${req.url}]`);
    next();
}

app.use(loggerMiddleware)

// Third party middleware
app.use(logger('combined'))

app.use('/api/users',router);



// Router-level middleware
const fakeAuth = (req,res,next) => {
    const authStatus = true;
    if(authStatus){
        console.log('Auth Status :',authStatus);
        next();
    }
    else{
        res.status(401);
        throw new Error('users');
    }
}

const getUsers = (req,res) => {
    res.json({message : "Get all users"})
}

const createUser = (req,res) => {
    console.log("This is the request body recieved from client: ", req.body)
    res.json({message : "Create a user"})
}

router.use(fakeAuth);
router.route('/').get(getUsers).post(createUser);

// Error-handling Middleware
const errorhandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    switch (statusCode) {
        case 401:
            res.json({
                title : 'Unauthorized',
                message : err.message,
            })
            break;
        case 404:
            res.json({
                title : 'Not found',
                message : err.message,
            })
            break;
        case 500:
            res.json({
                title : 'Server error',
                message : err.message,
            })
            break;
    
        default:
            break;
    }
}

app.post('./upload',upload.single('image'),(req,res,next) => {
    console.log(req.file,req.body);
    res.send(req.file);
} , (err,req,res,next) => {
    res.status(400).send({err : err.message})
})

app.all('*',(req,res) => {
    res.status(400);
    throw new Error('Route not found');
})

// app.get('/',(req,res) => {
//     res.json({message : "Hello World"})
// })

// app.get('/users',(req,res) => {
//     res.json({message : `Get all the users`})
// })

// app.get('/users/:id',(req,res) => {
//     res.json({message : `Get User  with id : ${req.params.id}`})
// })

// app.post('/users/',(req,res) => {
//     res.json({message : `Create new user`})
// })

// app.put('/users/:id',(req,res) => {
//     res.json({message : `Update user with id : ${req.params.id}`})
// })

// app.delete('/users/:id',(req,res) => {
//     res.json({message : `Delete user with id : ${req.params.id}`})
// })

app.use(errorhandler);

app.listen(port , (req,res,next) => {
    console.log(`Example app listening : ${port}`);
})

