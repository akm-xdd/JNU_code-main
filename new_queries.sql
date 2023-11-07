-- Creating covid data SCHEMA
CREATE SCHEMA covid_data;

-- Creating covid_data_malignancy table
CREATE TABLE covid_data.covid_data_malignancy
(
    jnu_id integer NOT NULL,
    icmr_id text,
    clinical_id character varying(256),
    age text,
    age_in text,
    gender text,
    patient_category text,
    state_residence text,
    district_residence text,
    lab_id text,
    date_sample_collection text,
    date_sample_received text,
    date_of_sample_tested text,
    symptoms text,
    underlying_medical_condition text,
    testing_kit_used text,
    egene_screening text,
    ct_value_screening text,
    rdrp_confirmatory text,
    ct_value_rdrp text,
    orf1b_confirmatory text,
    ct_value_orf1b text,
    final_test_result text,
    entry_date text,
    updated_on text,
    CONSTRAINT covid_data_malignancy_pkey PRIMARY KEY (jnu_id),
    CONSTRAINT malignancy_clinical_id UNIQUE (clinical_id)
)

-- Creating covid_data_non_malignancy table
CREATE TABLE covid_data.covid_data_non_malignancy
(
    jnu_id integer NOT NULL,
    icmr_id text,
    clinical_id character varying(256),
    age text,
    age_in text,
    gender text,
    patient_category text,
    state_residence text,
    district_residence text,
    lab_id text,
    date_sample_collection text,
    date_sample_received text,
    date_of_sample_tested text,
    symptoms text,
    underlying_medical_condition text,
    testing_kit_used text,
    egene_screening text,
    ct_value_screening text,
    rdrp_confirmatory text,
    ct_value_rdrp text,
    orf1b_confirmatory text,
    ct_value_orf1b text,
    final_test_result text,
    entry_date text,
    updated_on text,
    CONSTRAINT covid_data_non_malignancy_pkey PRIMARY KEY (jnu_id),
    CONSTRAINT non_malignancy_clinical_id UNIQUE (clinical_id)
)


-- Creating covid_data_combodata table
CREATE TABLE covid_data.covid_data_combodata
(
    jnu_id integer NOT NULL,
    icmr_id text,
    clinical_id character varying(256),
    age text,
    age_in text,
    gender text,
    patient_category text,
    state_residence text,
    district_residence text,
    lab_id text,
    date_sample_collection text,
    date_sample_received text,
    date_of_sample_tested text,
    symptoms text,
    underlying_medical_condition text,
    testing_kit_used text,
    egene_screening text,
    ct_value_screening text,
    rdrp_confirmatory text,
    ct_value_rdrp text,
    orf1b_confirmatory text,
    ct_value_orf1b text,
    final_test_result text,
    entry_date text,
    updated_on text,
    CONSTRAINT covid_data_combodata_pkey PRIMARY KEY (jnu_id),
    CONSTRAINT combodata_clinical_id UNIQUE (clinical_id)
)




-- Creating SCHEMA for covid_patient
CREATE SCHEMA covid_patient;

-- Creating covid patient table
CREATE TABLE covid_patient.covid
(
    jnu_id integer NOT NULL,
    icmr_id text,
    clinical_id character varying(256),
    age text,
    age_in text,
    gender text,
    patient_category text,
    state_residence text,
    district_residence text,
    lab_id text,
    date_sample_collection text,
    date_sample_received text,
    date_of_sample_tested text,
    symptoms text,
    underlying_medical_condition text,
    testing_kit_used text,
    egene_screening text,
    ct_value_screening text,
    rdrp_confirmatory text,
    ct_value_rdrp text,
    orf1b_confirmatory text,
    ct_value_orf1b text,
    final_test_result text,
    entry_date text,
    updated_on text,
    CONSTRAINT covid_pkey PRIMARY KEY (jnu_id),
    CONSTRAINT covid_clinical_id UNIQUE (clinical_id)
)

-- Creating non covid patient table
CREATE TABLE covid_patient.non_covid
(
    jnu_id integer NOT NULL,
    icmr_id text,
    clinical_id character varying(256),
    age text,
    age_in text,
    gender text,
    patient_category text,
    state_residence text,
    district_residence text,
    lab_id text,
    date_sample_collection text,
    date_sample_received text,
    date_of_sample_tested text,
    symptoms text,
    underlying_medical_condition text,
    testing_kit_used text,
    egene_screening text,
    ct_value_screening text,
    rdrp_confirmatory text,
    ct_value_rdrp text,
    orf1b_confirmatory text,
    ct_value_orf1b text,
    final_test_result text,
    entry_date text,
    updated_on text,
    CONSTRAINT non_covid_pkey PRIMARY KEY (jnu_id),
    CONSTRAINT non_covid_clinical_id UNIQUE (clinical_id)
)

-- Creating covid none patient table
CREATE TABLE covid_patient.covid_none
(
    jnu_id integer NOT NULL,
    icmr_id text,
    clinical_id character varying(256),
    age text,
    age_in text,
    gender text,
    patient_category text,
    state_residence text,
    district_residence text,
    lab_id text,
    date_sample_collection text,
    date_sample_received text,
    date_of_sample_tested text,
    symptoms text,
    underlying_medical_condition text,
    testing_kit_used text,
    egene_screening text,
    ct_value_screening text,
    rdrp_confirmatory text,
    ct_value_rdrp text,
    orf1b_confirmatory text,
    ct_value_orf1b text,
    final_test_result text,
    entry_date text,
    updated_on text,
    CONSTRAINT covid_none_pkey PRIMARY KEY (jnu_id),
    CONSTRAINT covid_none_clinical_id UNIQUE (clinical_id)
)



-- Not Null Medical Condition
select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL);


-- Only malignancy
select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(underlying_medical_condition) ilike 'malignancy';
-- Putting data to the table
insert into covid_data.covid_data_malignancy select * from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(underlying_medical_condition) ilike 'malignancy';


-- Only Non malignancy
select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(underlying_medical_condition) not ilike '%malignancy%';
-- Putting the values into the table
insert into covid_data.covid_data_non_malignancy select * from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(underlying_medical_condition) not ilike '%malignancy%';


-- Combodata
select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(underlying_medical_condition) ilike '%malignancy%' and (trim(underlying_medical_condition) not ilike 'malignancy');
-- Putting the values into the table
insert into covid_data.covid_data_combodata select * from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(underlying_medical_condition) ilike '%malignancy%' and (trim(underlying_medical_condition) not ilike 'malignancy');


-- Result negative
select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(final_test_result) ilike '%negative%';
-- Putting the values into the table
insert into covid_patient.non_covid select * from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(final_test_result) ilike '%negative%';


-- Result Positive
select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(final_test_result) ilike '%positive%';
-- Putting the values into the table
insert into covid_patient.covid select * from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND trim(final_test_result) ilike '%positive%';


-- Result None
select count(*) from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND not (trim(final_test_result) ilike '%positive%' or (trim(final_test_result) ilike '%negative%'));
-- Putting the values into the table
insert into covid_patient.covid_none select * from covid_data.patientData where (underlying_medical_condition IS NOT NULL) AND not (trim(final_test_result) ilike '%positive%' or (trim(final_test_result) ilike '%negative%'));


-- month wise count
select count(*) from covid_patient.non_covid where date_part('month', CAST(entry_date AS TIMESTAMP)) = 7;

-- State Wise Count
select count(*) from covid_patient.non_covid where date_part('month', CAST(entry_date AS TIMESTAMP)) = 7 AND trim(state_residence) ilike 'jharkhand';

-- District Wise Count
select count(*) from covid_patient.non_covid where date_part('month', CAST(entry_date AS TIMESTAMP)) = 7 AND trim(state_residence) ilike 'jharkhand' AND trim(district_residence) ilike 'jamtara';

-- Gender Wise Count
select count(*) from covid_patient.non_covid where date_part('month', CAST(entry_date AS TIMESTAMP)) = 7 AND trim(state_residence) ilike 'jharkhand' AND trim(district_residence) ilike 'jamtara' AND trim(gender) ilike 'm';

-- Age group count
select count(*) from covid_patient.non_covid where date_part('month', CAST(entry_date AS TIMESTAMP)) = 7 AND trim(state_residence) ilike 'jharkhand' AND trim(district_residence) ilike 'jamtara' AND trim(gender) ilike 'm' AND (25 <= CAST(age AS INTEGER) AND CAST(age AS INTEGER) < 50);


