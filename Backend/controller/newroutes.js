const db = require("../db/db");

exports.notnull = async (req, res) => {
  try {
    const SQLQuery = `select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL);
        `;
    db.query(SQLQuery, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
      return res.send(result.rows);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.onlymalig = async (req, res) => {
  try {
    const SQLQuery = `select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(underlying_medical_condition) ilike 'malignancy';`;
    db.query(SQLQuery, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
      return res.send(result.rows);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.onlynonmalig = async (req, res) => {
  try {
    const SQLQuery = `select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(underlying_medical_condition) not ilike '%malignancy%';
        `;
    db.query(SQLQuery, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
      return res.send(result.rows);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.combodata = async (req, res) => {
  try {
    const SQLQuery = `select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(underlying_medical_condition) ilike '%malignancy%' and (trim(underlying_medical_condition) not ilike 'malignancy');
        `;
    db.query(SQLQuery, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
      return res.send(result.rows);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.resnegative = async (req, res) => {
  try {
    const SQLQuery = `select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(final_test_result) ilike '%negative%';
    `;
    db.query(SQLQuery, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
      return res.send(result.rows);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.respositive = async (req, res) => {
  try {
    const SQLQuery = `select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(final_test_result) ilike '%positive%';
    `;
    db.query(SQLQuery, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
      return res.send(result.rows);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.resnone = async (req, res) => {
  try {
    const SQLQuery = `select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND not (trim(final_test_result) ilike '%positive%' or (trim(final_test_result) ilike '%negative%'));
    `;
    db.query(SQLQuery, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
      return res.send(result.rows);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.monthwise = async (req, res) => {
  try {
    const SQLQuery = `select count(*) from covid_patient.non_covid where date_part('month', CAST(entry_date AS TIMESTAMP)) = 7;
    `;
    db.query(SQLQuery, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
      return res.send(result.rows);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.statewise = async (req, res) => {
  try {
    const SQLQuery = `select count(*) from covid_patient.non_covid where date_part('month', CAST(entry_date AS TIMESTAMP)) = 7 AND trim(state_residence) ilike 'jharkhand';
    `;
    db.query(SQLQuery, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
      return res.send(result.rows);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.distwise = async (req, res) => {
  try {
    const SQLQuery = `select count(*) from covid_patient.non_covid where date_part('month', CAST(entry_date AS TIMESTAMP)) = 7 AND trim(state_residence) ilike 'jharkhand' AND trim(district_residence) ilike 'jamtara';
    `;
    db.query(SQLQuery, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
      return res.send(result.rows);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.genderwise = async (req, res) => {
  try {
    const SQLQuery = `select count(*) from covid_patient.non_covid where date_part('month', CAST(entry_date AS TIMESTAMP)) = 7 AND trim(state_residence) ilike 'jharkhand' AND trim(district_residence) ilike 'jamtara' AND trim(gender) ilike 'm';
    `;
    db.query(SQLQuery, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
      return res.send(result.rows);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.agegroup = async (req, res) => {
  try {
    const SQLQuery = `select count(*) from covid_patient.non_covid where date_part('month', CAST(entry_date AS TIMESTAMP)) = 7 AND trim(state_residence) ilike 'jharkhand' AND trim(district_residence) ilike 'jamtara' AND trim(gender) ilike 'm' AND (25 <= CAST(age AS INTEGER) AND CAST(age AS INTEGER) < 50);
    `;
    db.query(SQLQuery, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
      return res.send(result.rows);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* notnull,
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
agegroup,*/
