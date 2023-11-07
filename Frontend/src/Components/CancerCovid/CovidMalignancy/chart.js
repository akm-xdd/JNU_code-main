// for both the charts


import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const BarChart = () => {
  const [genderChartData, setGenderChartData] = useState([]);
  const [ageChartData, setAgeChartData] = useState([]);


  const genderDataURL = 'http://localhost:4200/get/Gender/All/count/Correct';
  const ageDataURL = 'http://localhost:4200/get/Age/Range/Malignancy';

  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setData(data);
          console.log('Data fetched successfully:', url);
          console.log(data);
        } else {
          console.log('Failed to fetch data:', response.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(genderDataURL, setGenderChartData);
    fetchData(ageDataURL, setAgeChartData);
  }, [genderDataURL, ageDataURL]);


  
  const genderData = {
    labels: genderChartData?.map(x => x.gender),
    datasets: [{
      barPercentage: 0.5,
      maxBarThickness: 40,
      minBarLength: 2,
      label: `${genderChartData?.length} Count  in Gender Dataset`,
      data: genderChartData?.map(x => x.count),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  const ageData = {
    labels: ageChartData?.map(x => x.age_range),
    datasets: [{
      barPercentage: 0.5,
      maxBarThickness: 40,
      minBarLength: 2,
      label: `${ageChartData?.length} Count in Age Dataset`,
      data: ageChartData?.map(x => x.count),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  const genderOptions = {
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: { display: false }
      },
      y: {
        beginAtZero: true,
        grid: { display: false }
      }
    },
    plugins: {
      canvasBackgroundColor: {id:''},
      tooltip: {
        events: ['mousemove'],
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = `Count: ${context.parsed.y}`;
            return label;
          },
        }
      },
      
    },
    legend: {
      labels: {
        fontSize: 60
      }
    },
    
  };

  const ageOptions = {
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: { display: false }
      },
      y: {
        beginAtZero: true,
        grid: { display: false }
      }
    },
    plugins: {
      tooltip: {
        events: ['mousemove'],
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = `Count: ${context.parsed.y}`;
            return label;
          },
        }
      },
    },
    legend: {
      labels: {
        fontSize: 60
      }
    },
  };

  return (
    <>
    
      <div className="row justify-content-center">
        <div className="col mx-2 my-2" style={{ fontFamily: "Calibri", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}}>
          <h4 className="text-center"><em>On the basis of Gender</em></h4>
          <Bar
            data={genderData}
            height={200}
            options={genderOptions}
          />
        </div>
        <div className="col mx-2 my-2" style={{ fontFamily: "Calibri", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
          <h4 className="text-center"><em>On the basis of Age</em></h4>
          <Bar
            data={ageData}
            height={200}
            options={ageOptions}
          />
        </div>
      </div>   
      
    </>
  );
};

export default BarChart;