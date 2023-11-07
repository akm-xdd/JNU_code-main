const { application } = require('express');
const axios = require('axios');
const express = require('express');
const router=express.Router(); 


const {

    // GENERAL API
    getCount,
    getDescribeTable,
    getMedicalConditionAllMalignancyData,
    getAgeCovid,



    // MALIGNNACY API
    
    
    
    getMedicalConditionOnlyMalignancyData,
    getMedicalConditionAllMalignancyFeilds,
    getMedicalCondition,

    // AGE API
     
    
    

    // GENDER APIs
    getGender,
    getGenderAllCount,
    
    getGenderMCount,
    getGenderFCount,
    getGenderNcount,
    getGenderNoCount,
    getGenderTCount,
    getGender2Count,
    


    // ABOUT COVID DATA (WITHOUT TRUENAT)


    getCountCovidPositive,
    getCountCovidNegative,
    getCountCovidMalignancy,
    getCountCovidNegativeMalignancy,
    getCountCovidMalignancyNegative,
    getCountCovidNegativeMalignancyNegative,


    // STATE API
    getMedicalConditionAllMalignancyCountStateDistrict,
    
    
    
    // COVID + malignancy +
    GenderAllcountCovidPos,
    


} = require ('../controller/general') 


const{
    notnull,
    onlymalig,
    onlynonmalig,
    combodata,
    resnegative,
    respositive,
    resnone,
    monthwise,
    statewise,
    distwise,
    genderwise,
    agegroup,
} = require('../controller/newroutes')

const {

    getGenderAllcountCorrect,
    getMedicalConditionAllMalignancyCount,
    
    getMedicalConditionOnlyMalignancyDataCount,
    getMalignantCountStateResidence,
    getMedicalConditionAllMalignancyCountStateResidence,
    MapCovMalStateCount,
    getAge,
    getAgeRangeMalignancyState,
    getAgeRangeMalignancy,
    getGenderCountStateResidence,


} = require ('../controller/covMal') 

// GENERAL API
router.get("/getCount",getCount);
router.get("/get/Describe/Table",getDescribeTable);

// MAP COVID+ MAL+ STATE COUNT
router.get("/Map/Cov/Mal/State/Count", MapCovMalStateCount);
router.get("/get/Age/Covid",getAgeCovid);


// MALIGNANCY and COVID API
router.get("/get/MedicalCondition/All/Malignancy/Count",getMedicalConditionAllMalignancyCount);
router.get("/get/MedicalCondition/All/Malignancy/Data",getMedicalConditionAllMalignancyData);
router.get("/get/MedicalCondition/Only/Malignancy/Data/Count",getMedicalConditionOnlyMalignancyDataCount);
router.get("/get/MedicalCondition/Only/Malignancy/Data",getMedicalConditionOnlyMalignancyData);
router.get("/get/MedicalCondition/All/Malignancy/Feilds",getMedicalConditionAllMalignancyFeilds);
router.get("/get/MedicalCondition",getMedicalCondition);



// AGE API
router.get("/get/Age",getAge);
router.get("/get/Age/Range/Malignancy", getAgeRangeMalignancy);
router.get("/get/Age/Range/Malignancy/State/:state_residence",getAgeRangeMalignancyState);


// GENDER APIs
router.get("/get/Gender/2/Count",getGender2Count);
router.get("/get/Gender/T/Count",getGenderTCount);
router.get("/get/Gender/No/Count",getGenderNoCount);
router.get("/get/Gender/N/count",getGenderNcount);
router.get("/get/Gender/F/Count",getGenderFCount);
router.get("/get/Gender/M/Count",getGenderMCount);
router.get("/get/Gender/All/count/Correct",getGenderAllcountCorrect);
router.get("/get/Gender/All/Count",getGenderAllCount);
router.get("/get/Gender",getGender);
router.get("/get/Gender/Count/State/:state_residence",getGenderCountStateResidence);

// STATE API
router.get("/get/MedicalCondition/All/Malignancy/Count/State/District", getMedicalConditionAllMalignancyCountStateDistrict);
router.get("/get/MedicalCondition/All/Malignancy/Count/State/:state_residence", getMedicalConditionAllMalignancyCountStateResidence);
// DISTRICT API
router.get("/get/Malignant/Count/State/:state_residence", getMalignantCountStateResidence);


// ABOUT COVID DATA(WITHOUT TRUENAT)
router.get("/get/Count/covid/positive", getCountCovidPositive);
router.get("/get/Count/covid/negative", getCountCovidNegative);
router.get("/get/Count/covid/Malignancy", getCountCovidMalignancy)
router.get("/get/Count/covid/Negative/Malignancy",getCountCovidNegativeMalignancy);
router.get("/get/Count/covid/Malignancy/Negative",getCountCovidMalignancyNegative);
router.get("/get/Count/covid/Negative/Malignancy/Negative",getCountCovidNegativeMalignancyNegative);


// COVID API


//New Routes
router.get("/get/Count/covid/notnull", notnull);
router.get("/get/Count/covid/onlymalig", onlymalig);
router.get("/get/Count/covid/onlynonmalig", onlynonmalig); 
router.get("/get/Count/covid/combodata", combodata);
router.get("/get/Count/covid/resnegative", resnegative);
router.get("/get/Count/covid/respositive", respositive);
router.get("/get/Count/covid/resnone", resnone);

//
router.get("/get/Count/covid/monthwise", monthwise);
router.get("/get/Count/covid/statewise", statewise);
router.get("/get/Count/covid/distwise", distwise);
router.get("/get/Count/covid/genderwise", genderwise);
router.get("/get/Count/covid/agegroup", agegroup);




router.get("/Gender/All/count/Covid/Pos",GenderAllcountCovidPos);
module.exports=router