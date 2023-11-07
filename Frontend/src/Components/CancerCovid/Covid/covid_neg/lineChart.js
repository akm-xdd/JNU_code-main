import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const [genderChartData, setGenderChartData] = useState([]);

  const genderDataURL = 'http://localhost:4200/get/Gender/All/count/Correct/Covid/Malignancy';

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
  }, [genderDataURL]);

  // Extract unique months and years from the data
  const uniqueMonths = Array.from(
    new Set(genderChartData?.map(x => x.month_year))
  );

  const genderData = {
    labels: uniqueMonths, // Display unique months and years as labels
    datasets: [
      {
        label: 'M',
        data: uniqueMonths.map(month =>
          genderChartData
            ?.filter(x => x.gender === 'M' && x.month_year === month)
            .map(x => x.count)[0]
        ),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
      },
      {
        label: 'F',
        data: uniqueMonths.map(month =>
          genderChartData
            ?.filter(x => x.gender === 'F' && x.month_year === month)
            .map(x => x.count)[0]
        ),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
      },
      {
        label: 'T',
        data: uniqueMonths.map(month =>
          genderChartData
            ?.filter(x => x.gender === 'T' && x.month_year === month)
            .map(x => x.count)[0]
        ),
        backgroundColor: 'rgb(0,0,0,0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { display: false },
      },
    },
    plugins: {
        tooltip: {
          enabled: true,
          callbacks: {
            label: (context) => {
              const datasetIndex = context.datasetIndex;
              const dataIndex = context.dataIndex;
              const gender = genderChartData[datasetIndex].gender;
              const count = genderChartData[datasetIndex].count[dataIndex];
    
              let label = `${gender} Count: ${context.parsed.y}`;
              return label;
            },
          },
        },
      },
    legend: {
      labels: {
        fontSize: 16,
      },
    },
  };

  return (
    <>
      
        <div style={{ fontFamily: "Calibri", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}}>
          <h4 className="text-center"><em>Gender Count by Month and Year</em></h4>
          <Line data={genderData} height={270} options={chartOptions} />
        </div>
        
    </>
  );
};

export default LineChart;