const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const routes = require('./routes/routes');
const axios=require("axios");
const allowedOrigins = ["http://localhost:3001", "http://localhost:3000","http://localhost:3000/email","localhost"]; // Add your actual domain here




const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const app = express();



const cookieParser=require("cookie-parser")
app.use(cookieParser());
app.use(bodyParser.json());





const session = require('express-session');
const MongoStore = require('connect-mongo');


const port = 2000; // Change as needed

// Connect to MongoDB
mongoose.connect('mongodb+srv://Ashwin:Ashwin%40123@cluster0.5str1hu.mongodb.net/Verbello');

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["POST","GET","PUT"],
  credentials: true, // Allow credentials (cookies)
  // credentials: 'include',
};

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(cors(corsOptions));

axios.default.withCredentials = true;

app.use(express.json());



// Configure express-session and connect-mongo for session management
// app.use(session({
//   secret: '1965', // Change this to a secure secret key
//   resave: false,
//   saveUninitialized: false,
//   store: MongoStore.create({
//     mongoUrl: 'mongodb://localhost:27017/Final_Project',

//   }),
//   cookie: { maxAge: 1000 * 60 * 60 * 24 }, // Session cookie lasts for 1 day
// }));

app.use(
  session({
    name: "cookie.sid",
    secret: "key777",
    secure: false,
    maxAge: 1000 * 60 * 60 * 7,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://Ashwin:Ashwin%40123@cluster0.5str1hu.mongodb.net/Verbello",
    }),
  })
);

// Custom middleware to check if the user is authenticated
// const authenticateUser = (req, res, next) => {
//   if (req.session && req.session.user) {
//     // User is authenticated
//     next();
//   } else {
//     // User is not authenticated
//     res.status(401).json({ error: 'Unauthorized' });
//   }
// };






// Use the user router
app.use('/api', routes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
