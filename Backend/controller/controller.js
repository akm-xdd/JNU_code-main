// const { urlencoded } = require("express");
const db = require("../db/db");

// GENERAL QUERY STARTS HERE

// http://localhost:4200/getCount
// All rows count in the table "patientData"
exports.getCount = async (req, res) => {
    try {

        const SQLQuery = 'SELECT COUNT(*) FROM covid_data.patientData';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        })
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Describe/Table
// Describe table "patientData" data-types according to MySQL documentation
//NOT WORKING IN PSQL
exports.getDescribeTable = async (req, res) => {
    try {

        const SQLQuery = 'DESCRIBE covid_data.patientData';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State/District
// gives the count of malignancy in states 
exports.getMedicalConditionAllMalignancyCountStateDistrict = async (req, res) => {
    try {
        const SQLQuery = "SELECT COUNT(*) AS count, district_residence FROM covid_data.patientData WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%cancer%' OR underlying_medical_condition LIKE '%chemo%') AND state_residence = 'Delhi'AND (final_test_result like 'positive' or 'yes') GROUP BY district_residence;";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred', error: err });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// DISTRICT QUERY STARTS HERE

// SELECT COUNT(*) AS count, district_residence FROM covid_data.patientData WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%') AND state_residence = 'Telangana' GROUP BY district_residence;
// http://localhost:4200/get/Malignant/Count/State/Delhi
// correct gender count in a particular state in the table "patientData"
exports.getMalignantCountStateResidence = async (req, res) => {
    try {
        const stateResidence = req.params.state_residence;
        const SQLQuery = "SELECT COUNT(*) AS count, district_residence FROM covid_data.patientData WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%') AND state_residence = 'Delhi' AND (final_test_result = 'positive' OR final_test_result = 'yes') GROUP BY district_residence;";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// // http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State/state_residence=
// // gives the count of malignancy in states 
// exports.getMedicalConditionAllMalignancyCountStateResidence = async (req, res) => {
//     try {
//         const SQLQuery = "SELECT COUNT(*) AS count, state_residence FROM patientData WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%chemo%') AND state_residence = 'Delhi';";
//         db.query(SQLQuery, (err, result) => {
//             if (err) {
//                 console.error('Error executing query:', err);
//                 return res.status(500).json({ message: 'An error occurred' });
//             }
//             return res.send(result);
//         });
//     }
//     catch (error) {
//         return res.status(500).json({ message: error.message })
//     }
// };



// http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State/Delhi
exports.getMedicalConditionAllMalignancyCountStateResidence = async (req, res) => {
    try {
        const stateResidence = req.params.state_residence;
        const SQLQuery = "SELECT COUNT(*) AS count, state_residence FROM patientData WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%') AND state_residence = ? AND (final_test_result = 'positive' OR final_test_result = 'yes') GROUP BY state_residence;";
        
        db.query(SQLQuery, [stateResidence], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



// SELECT state_residence, COUNT(*) AS malignancy_count FROM  covid_data.patientData WHERE underlying_medical_condition = 'Malignancy' GROUP BY state_residence;
// http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State
// gives the count of malignancy in states 
// NOT WORKING
exports.getMedicalConditionAllMalignancyCountState = async (req, res) => {
    try {
        // const SQLQuery = "SELECT state_residence, COUNT(*) AS malignancy_count FROM covid_data.patientData WHERE underlying_medical_condition IN ('Malignancy', 'Cancer', 'Chemo') GROUP BY state_residence;";
        const SQLQuery = "SELECT state_residence, COUNT(*) AS malignancy_count FROM covid_data.patientData WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%') AND (final_test_result = 'positive' OR final_test_result = 'yes') GROUP BY state_residence;";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


//MALIGNANCY QUERY STARTS HERE

// http://localhost:4200/get/MedicalCondition/All/Malignancy/Count
exports.getMedicalConditionAllMalignancyCount = async (req, res) => {
    try {
        const SQLQuery = "SELECT COUNT(*) AS condition_count FROM covid_data.malignancy_table WHERE (final_test_result = 'positive' OR final_test_result = 'yes');";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/MedicalCondition/All/Malignancy/Data
// all the feilds having "all Malignancy"
exports.getMedicalConditionAllMalignancyData = async (req, res) => {
    try {
        const SQLQuery = 'select count(*) from covid_data.patientData where underlying_medical_condition in (select distinct(underlying_medical_condition) from covid_data.patientData where underlying_medical_condition like "%Malignancy%") AND (final_test_result = "positive" OR final_test_result = "yes");'
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/MedicalCondition/Only/Malignancy/Data/Count
// ALL feilds "count" having "only Malignancy" (sara data "count" "only Malignancy" wala )
exports.getMedicalConditionOnlyMalignancyDataCount = async (req, res) => {
    try {
        const SQLQuery = 'SELECT COUNT(*) FROM covid_data.patientData WHERE underlying_medical_condition = "Malignancy" AND (final_test_result = "positive" OR final_test_result = "yes");';

        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/MedicalCondition/Only/Malignancy/Data
// ALL feilds having "only Malignancy" (sara data "only Malignancy" wala )
exports.getMedicalConditionOnlyMalignancyData = async (req, res) => {
    try {
        const SQLQuery = 'select * from covid_data.patientData where underlying_medical_condition in (select distinct(underlying_medical_condition) from covid_data.patientData where underlying_medical_condition = "Malignancy")  AND (final_test_result = "positive" OR final_test_result = "yes");';

        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/MedicalCondition/All/Malignancy/Feilds
// ALL THE COLUMN FEILDS HAVING "MALIGNANCY" as word (jo bhi column mei malignancy jaisa word h, wo sb "column" aare h)
exports.getMedicalConditionAllMalignancyFeilds = async (req, res) => {
    try {
        const SQLQuery = 'select distinct(underlying_medical_condition) from covid_data.patientData where underlying_medical_condition like "%Malignancy%"  AND (final_test_result = "positive" OR final_test_result = "yes");';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/MedicalCondition
// ALL Entries of medical conditions
exports.getMedicalCondition = async (req, res) => {
    try {
        const SQLQuery = `select distinct(state_residence) from covid_data.patientData ;`;
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        })
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


// AGE QUERY STARTS HERE

// http://localhost:4200/get/Age
// All AGE in the table " covid_data.patientData"
exports.getAge = async (req, res) => {
    try {

        const SQLQuery = 'select distinct(age) from covid_data.patientData;';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        })
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


// SELECT age_range, COUNT(*) AS count FROM (SELECT CASE WHEN age BETWEEN 1 AND 18 THEN '1-18' WHEN age BETWEEN 19 AND 40 THEN '19-40' WHEN age BETWEEN 41 AND 60 THEN '41-60' WHEN age BETWEEN 61 AND 100 THEN '61-100' WHEN age > 100 THEN CONCAT(FLOOR(age / 365), ' years ', MOD(age, 365) DIV 30, ' months ', MOD(age, 30), ' days') END AS age_range, age FROM covid_data.patientData WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%') AND age <= 100 AND age IS NOT NULL AND age <> '' AND state_residence = 'Delhi') subquery GROUP BY age_range ORDER BY age_range;
// http://localhost:4200/get/Age/Range/Malignancy/State/Delhi
// correct gender count in a particular state in the table "patientData"
exports.getAgeRangeMalignancyState = async (req, res) => {
    try {
        const stateResidence = req.params.state_residence;
        const SQLQuery = "SELECT age_range, COUNT(*) AS count FROM (SELECT CASE WHEN age BETWEEN 1 AND 18 THEN '1-18' WHEN age BETWEEN 19 AND 40 THEN '19-40' WHEN age BETWEEN 41 AND 60 THEN '41-60' WHEN age BETWEEN 61 AND 100 THEN '61-100' WHEN age > 100 THEN CONCAT(FLOOR(age / 365), ' years ', MOD(age, 365) DIV 30, ' months ', MOD(age, 30), ' days') END AS age_range, age FROM covid_data.patientData WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%') AND age <= 100 AND age IS NOT NULL AND age <> '' AND state_residence = ?  AND (final_test_result = 'positive' OR final_test_result = 'yes')) subquery GROUP BY age_range ORDER BY age_range;";
        db.query(SQLQuery, [stateResidence], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// http://localhost:4200/get/Age/Range/Malignancy
// SQL query to get count the number of age data (present in the "age" column) in a range of every 10  who are malignant (present in column "underlying_medical _condition") in covid_data.patientData table. (if age goes above 100 convert it into months and days and then embed in query) excluding unknown values--   covid_data.patientData"
exports.getAgeRangeMalignancy = async (req, res) => {
    try {
        const SQLQuery = "SELECT age_range, COUNT(*) AS count FROM (SELECT CASE WHEN age BETWEEN 1 AND 18 THEN '1-18' WHEN age BETWEEN 19 AND 40 THEN '19-40' WHEN age BETWEEN 41 AND 60 THEN '41-60' WHEN age BETWEEN 61 AND 100 THEN '61-100' WHEN age > 100 THEN CONCAT(FLOOR(age / 365), ' years ', MOD(age, 365) DIV 30, ' months ', MOD(age, 30), ' days') END AS age_range, age FROM covid_data.patientData WHERE underlying_medical_condition = 'Malignancy' AND age <= 100 AND age IS NOT NULL AND age <> '' AND (final_test_result = 'positive' OR final_test_result = 'yes')) subquery GROUP BY age_range ORDER BY age_range;";
        // const SQLQuery = "SELECT age_range, COUNT(*) AS count FROM ( SELECT CASE WHEN age BETWEEN 1 AND 18 THEN '1-18' WHEN age BETWEEN 19 AND 40 THEN '19-40' WHEN age BETWEEN 41 AND 60 THEN '41-60' WHEN age BETWEEN 61 AND 100 THEN '61-100' WHEN age > 100 THEN CONCAT(FLOOR(age / 365), ' years ', MOD(age, 365) DIV 30, ' months ', MOD(age, 30), ' days') END AS age_range, age FROM covid_data.patientData WHERE underlying_medical_condition = 'Malignancy' AND age <= 100 AND age IS NOT NULL) subquery GROUP BY age_range ORDER BY age_range;";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred', error: err });
            }
            return res.send(result.rows);
        })
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
// SELECT CASE
//    WHEN age BETWEEN 1 AND 18 THEN '1-18'
//    WHEN age BETWEEN 19 AND 40 THEN '19-40'
//    WHEN age BETWEEN 41 AND 60 THEN '41-60'
//    WHEN age BETWEEN 61 AND 100 THEN '61-100'
//    WHEN age > 100 THEN CONCAT(FLOOR(age / 365), ' years ', MOD(age, 365) DIV 30, ' months ', MOD(age, 30), ' days')
//  END AS age_range, COUNT(*) AS count FROM covid_data.patientData WHERE underlying_medical_condition = 'Malignancy'
//  AND age <= 100 -- Exclude ages greater than 100
//  AND age IS NOT NULL -- Exclude NULL age values
// GROUP BY age_range ORDER BY age_range;


// // GENDER TABLE QUERY

// http://localhost:4200/get/Gender
// All gender in the table "patientData"
exports.getGender = async (req, res) => {
    try {

        const SQLQuery = 'select distinct(gender) from covid_data.patientData;';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};



// http://localhost:4200/get/Gender/All/Count
// count of all gender from " covid_data.patientData" 
exports.getGenderAllCount = async (req, res) => {
    try {
        console.log('i am in controller')
        const SQLQuery = 'SELECT gender, COUNT(*) AS count FROM  covid_data.patientData GROUP BY gender;';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        })
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// SELECT gender, COUNT(*) AS count FROM  covid_data.patientData WHERE gender IN ('M', 'F', 'T') AND underlying_medical_condition LIKE '%malignancy%' GROUP BY gender;
// SELECT gender, COUNT(*) AS count FROM  covid_data.patientData WHERE gender IN ("M", "F", "T") GROUP BY gender;
// http://localhost:4200/get/Gender/All/count/Correct
// count of only correct gender from " covid_data.patientData" excluding 'N', "", '2'
exports.getGenderAllcountCorrect = async (req, res) => {
    try {

        // const SQLQuery = 'SELECT gender, COUNT(*) AS count FROM  covid_data.patientData WHERE gender NOT IN ("N", "2", "") GROUP BY gender;';
        // const SQLQuery = 'SELECT gender, COUNT(*) AS count FROM  covid_data.patientData WHERE gender IN ("M", "F", "T") GROUP BY gender;';
        const SQLQuery = "SELECT gender, COUNT(*) AS count FROM covid_data.patientData WHERE gender IN ('M', 'F', 'T') AND underlying_medical_condition LIKE '%malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%'  AND (final_test_result = 'positive' OR final_test_result = 'yes') GROUP BY gender ;";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// SELECT gender, COUNT(*) AS count FROM covid_data.patientData WHERE gender IN ('M', 'F', 'T') AND (underlying_medical_condition LIKE '%malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%') AND state_residence = 'Delhi' GROUP BY gender;
// http://localhost:4200/get/Gender/Count/State/Delhi
// correct gender count in a particular state in the table "patientData"
exports.getGenderCountStateResidence = async (req, res) => {
    try {
        const stateResidence = req.params.state_residence;
        const SQLQuery = "SELECT gender, COUNT(*) AS count FROM covid_data.patientData WHERE gender IN ('M', 'F', 'T') AND (underlying_medical_condition LIKE '%malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%') AND state_residence = ? AND (final_test_result = 'positive' OR final_test_result = 'yes') GROUP BY gender;";
        db.query(SQLQuery, [stateResidence], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Gender/M/Count
// only gender "M" in the table "patientData"
exports.getGenderMCount = async (req, res) => {
    try {

        const SQLQuery = `select count(*) as 'M-Count' from covid_data.patientData where gender = "M"  AND (final_test_result = 'positive' OR final_test_result = 'yes');`;
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Gender/F/Count
// only gender "F" in the table "patientData"
exports.getGenderFCount = async (req, res) => {
    try {

        const SQLQuery = `select count(*) as 'F-Count' from covid_data.patientData where gender = "F"  AND (final_test_result = 'positive' OR final_test_result = 'yes');`;        ;
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};




// http://localhost:4200/get/Gender/N/count
// only gender "N" in the table "patientData"
exports.getGenderNcount = async (req, res) => {
    try {

        const SQLQuery = 'select count(*) from covid_data.patientData where gender = "N";';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Gender/No/Count
// only gender " " in the table "patientData"
exports.getGenderNoCount = async (req, res) => {
    try {

        const SQLQuery = 'select count(*) from covid_data.patientData where gender = "";';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Gender/T/Count
// only gender "T" in the table "patientData"
exports.getGenderTCount = async (req, res) => {
    try {

        const SQLQuery = 'select count(*) from covid_data.patientData where gender = "T";';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Gender/2/Count
// only gender "2" in the table "patientData"
exports.getGender2Count = async (req, res) => {
    try {

        const SQLQuery = 'select count(*) from covid_data.patientData where gender = "2";';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};





// http://localhost:4200/getCount
// All rows count in the table "patientData" or get all count of the data 


// http://localhost:4200/get/Count/covid/positive
// count of the data where final_rest_result is "positive". (without TrueNAT)
exports.getCountCovidPositive = async (req, res) => {
    try {

        const SQLQuery = 'select count(*) from covid_data.patientData where final_test_result="Positive";';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Count/covid/negative
// count of the data where final_rest_result is "positive". (without TrueNAT)
exports.getCountCovidNegative = async (req, res) => {
    try {

        const SQLQuery = "SELECT COUNT(*) AS count FROM covid_data.patientData WHERE final_test_result != 'Positive';";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// SELECT COUNT(*) AS count FROM covid_data.patientData WHERE final_test_result = 'Positive' AND (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%');
// http://localhost:4200/get/Count/covid/Malignancy
// count of the data where final_rest_result is "positive" and malignant positive. (without TrueNAT)
exports.getCountCovidMalignancy = async (req, res) => {
    try {

        const SQLQuery = "SELECT COUNT(*) AS count FROM covid_data.patientData WHERE final_test_result = 'Positive' AND (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%');";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Count/covid/Malignancy/Negative
// count of the data where final_rest_result is "positive" and malignant negative. (without TrueNAT)
exports.getCountCovidMalignancyNegative = async (req, res) => {
    try {

        const SQLQuery = "SELECT COUNT(*) AS count FROM covid_data.patientData WHERE final_test_result = 'Positive' AND not (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%');";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Count/covid/Negative/Malignancy
// count of the data where final_rest_result is "negative" and malignant positive. (without TrueNAT)
exports.getCountCovidNegativeMalignancy = async (req, res) => {
    try {

        const SQLQuery = "SELECT COUNT(*) AS count FROM covid_data.patientData WHERE final_test_result != 'Positive' AND (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%');";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Count/covid/Negative/Malignancy/Negative
// count of the data where final_rest_result is "negative" and malignant negative. (without TrueNAT)
exports.getCountCovidNegativeMalignancyNegative = async (req, res) => {
    try {

        const SQLQuery = "SELECT COUNT(*) AS count FROM covid_data.patientData WHERE final_test_result != 'Positive' AND not (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%');";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result.rows);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};