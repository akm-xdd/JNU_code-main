const userRoutes=require('./routes/routes')
const express = require('express');
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors({
  origin:"*",
  credentials: true,
}))
const db = require('./db/db');



// // http://localhost:4200/MedicalCondition/All/Malignancy/Count/
// app.get('/MedicalCondition/All/Malignancy/Count', (req, res) => {
//   try{
    
//     // const SQLQuery = 'SELECT COUNT(*) FROM PATIENTDATA';
//     // const SQLQuery = 'DESCRIBE PATIENTDATA';
//     // const SQLQuery = 'select distinct(underlying_medical_condition) from patientdata;';
//     // const SQLQuery = 'select distinct(underlying_medical_condition) from patientdata where underlying_medical_condition like "%Malignancy%";';
//     // const SQLQuery = 'SELECT COUNT(*) FROM patientdata WHERE underlying_medical_condition = "Malignancy";';
//     // const SQLQuery = 'select * from patientdata where underlying_medical_condition in (select distinct(underlying_medical_condition) from patientdata where underlying_medical_condition = "Malignancy");';
//     // const SQLQuery = 'SELECT COUNT(*) FROM patientdata WHERE underlying_medical_condition = "Malignancy";';
//     // const SQLQuery = 'select count(*) from patientdata where underlying_medical_condition in (select distinct(underlying_medical_condition) from patientdata where underlying_medical_condition like "%Malignancy%");'
//     const SQLQuery = 'select count(*) from patientdata where underlying_medical_condition in (select distinct(underlying_medical_condition) from patientdata where underlying_medical_condition like "%Malignancy%");'
//         db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/MedicalCondition/All/Malignancy/Data
// // all the feilds having "all Malignancy"
// app.get('/MedicalCondition/All/Malignancy/Data', (req, res) => {
//   try{
//     const SQLQuery = 'select * from patientdata where underlying_medical_condition in (select distinct(underlying_medical_condition) from patientdata where underlying_medical_condition like "%Malignancy%");'
//         db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/MedicalCondition/Only/Malignancy/Data/Count/
// // ALL feilds "count" having "only Malignancy" (sara data "count" "only Malignancy" wala )
// // [{"count(*)": 57}]
// app.get('/MedicalCondition/Only/Malignancy/Data/Count', (req, res) => {
//   try{
//     const SQLQuery = 'SELECT COUNT(*) FROM patientdata WHERE underlying_medical_condition = "Malignancy";';
    
//         db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/MedicalCondition/Only/Malignancy/Data/
// // ALL feilds having "only Malignancy" (sara data "only Malignancy" wala )
// app.get('/MedicalCondition/Only/Malignancy/Data', (req, res) => {
//   try{
//     const SQLQuery = 'select * from patientdata where underlying_medical_condition in (select distinct(underlying_medical_condition) from patientdata where underlying_medical_condition = "Malignancy");';
    
//         db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/MedicalCondition/All/Malignancy/feilds
// // ALL THE COLUMN FEILDS HAVING "MALIGNANCY" as word (jo bhi column mei malignancy jaisa word h, wo sb "column" aare h)
// app.get('/MedicalCondition/All/Malignancy/feilds', (req, res) => {
//   try{
//     const SQLQuery = 'select distinct(underlying_medical_condition) from patientdata where underlying_medical_condition like "%Malignancy%";';
//         db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/MedicalCondition
// // ALL Entries of medical conditions
// app.get('/MedicalCondition/', (req, res) => {
//   try{
    
//     // const SQLQuery = 'SELECT COUNT(*) FROM PATIENTDATA';
//     // const SQLQuery = 'DESCRIBE PATIENTDATA';
//     const SQLQuery = 'select distinct(underlying_medical_condition) from patientdata;';
//         db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


//GENERAL QUERY STARTS HERE 

// // http://localhost:4200/describe/table
// // Describe table "patientdata" data-types according to MySQL documentation
// app.get('/describe/table', (req, res) => {
//   try{
    
//     const SQLQuery = 'DESCRIBE PATIENTDATA';
//          db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/count
// // All rows count in the table "patientdata"
// app.get('/count', (req, res) => {
//   try{
    
//     const SQLQuery = 'SELECT COUNT(*) FROM PATIENTDATA';
//          db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });

// AGE QUERY STARTS HERE


// // http://localhost:4200/age
// // All ages in the table "patientdata"
// app.get('/age', (req, res) => {
//   try{
    
//     const SQLQuery = 'select distinct(age) from patientdata;';
//          db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// GENDER TABLE QUERY

// // http://localhost:4200/gender
// // All gender in the table "patientdata"
// app.get('/gender', (req, res) => {
//   try{
    
//     const SQLQuery = 'select distinct(gender) from patientdata;';
//          db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/gender/All/count
// // count of all gender from "project1.patientdata" 
// app.get('/gender/All/count', (req, res) => {
//   try{
    
//     const SQLQuery = 'SELECT gender, COUNT(*) AS count FROM project1.patientdata GROUP BY gender;';
//          db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/gender/All/count/correct
// // count of only correct gender from "project1.patientdata" excluding 'N', "", '2'
// app.get('/gender/All/count/correct', (req, res) => {
//   try{
    
//     const SQLQuery = 'SELECT gender, COUNT(*) AS count FROM project1.patientdata WHERE gender NOT IN ("N", "2", "") GROUP BY gender;';
//          db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });



// // http://localhost:4200/gender/M/count
// // only gender "M" in the table "patientdata"
// app.get('/gender/M/count', (req, res) => {
//   try{
    
//     const SQLQuery = 'select count(*) from patientdata where gender = "M";';
//          db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/gender/F/count
// // only gender "F" in the table "patientdata"
// app.get('/gender/F/count', (req, res) => {
//   try{
    
//     const SQLQuery = 'select count(*) from patientdata where gender = "F";';
//          db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/gender/N/count
// // only gender "N" in the table "patientdata"
// app.get('/gender/N/count', (req, res) => {
//   try{
    
//     const SQLQuery = 'select count(*) from patientdata where gender = "N";';
//          db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/gender/no/count
// // only gender " " in the table "patientdata"
// app.get('/gender/no/count', (req, res) => {
//   try{
    
//     const SQLQuery = 'select count(*) from patientdata where gender = "";';
//          db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/gender/T/count
// // only gender "T" in the table "patientdata"
// app.get('/gender/T/count', (req, res) => {
//   try{
    
//     const SQLQuery = 'select count(*) from patientdata where gender = "T";';
//          db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });


// // http://localhost:4200/gender/2/count
// // only gender "2" in the table "patientdata"
// app.get('/gender/2/count', (req, res) => {
//   try{
    
//     const SQLQuery = 'select count(*) from patientdata where gender = "2";';
//          db.query(SQLQuery, (err, result) => {
//             if (err){return res.json(err);}
//             return res.send(result);
//         });
//       }
//       catch(error){
//         return res.status(500).json({message: error.message})    
//     }      
// });






// Connection starts Here

db.connect((error) => {
    if (error) {
      console.error('Error connecting to PostgreSQL database:', error);
      
    } else {
      console.log('Connected to PostgreSQL database!');
        
        
    }});


app.use("/",userRoutes) 
// db.end();


// Listening to the port 4200
app.listen(4200,()=>{
    console.log( "server connected on port " + 4200 );
}
);

