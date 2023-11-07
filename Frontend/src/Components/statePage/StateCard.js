import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';




const StateCard = (props) => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (props.stateResidence) {
      fetchData();
    }
  }, [props.stateResidence]);

// http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State/Delhi
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State/${props.stateResidence}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }finally {
      setIsLoading(false);
    }
  };

  

  return (
    <>
    {/* <div style = {{backgroundColor:props.Mode==='dark'?'#24527a':'#c86b85', color:props.Mode==='dark'?'#e7eaf6':'#132743', borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569'}}>
      <h2>State Residence: {props.stateResidence}</h2>
      
      
      {data && (
        <div style = {{backgroundColor:props.Mode==='dark'?'#24527a':'#c86b85', color:props.Mode==='dark'?'#e7eaf6':'#132743' , borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569'}}>
          <h2 >Data</h2>
          <pre style = {{backgroundColor:props.Mode==='dark'?'#24527a':'#c86b85', color:props.Mode==='dark'?'#e7eaf6':'#132743' , borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569'}}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div> */}
    {/* Middle bar */}
    <div className='container py-3 square rounded-9 border-2 h-100' >
                        <Card className=" mx-2 square rounded-9 border-3 " 
                        style={{ 
                          borderColor: props.Mode === 'dark' ? '#c86b85' : '#c86b85', 
                          textAlign: "center", 
                          fontFamily:"URW Chancery L, cursive"}}>
                            <Card.Body >
                            <h2>State Residence: {props.stateResidence}</h2>
          {isLoading && <p>Loading...</p>}
          {data && !isLoading && data.length > 0 ? (
            <div>
              <h4>Count: {data[0].count}</h4>
            </div>
          ) : (
            <p>No data available</p>
          )}
            </Card.Body>
                                
                        </Card>
                    </div>


                    
  </>

  );
};

export default StateCard;