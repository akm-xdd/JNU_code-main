import React, { useState, useEffect } from 'react';
import { PolarArea } from 'react-chartjs-2';

const PieChart = () => {

    const [ageChartData, setAgeChartData] = useState([]);
    const ageDataURL = 'http://localhost:4200/get/Age/Covid';

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
                    console.log(data);
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

        fetchData(ageDataURL, setAgeChartData);
    }, [ageDataURL]);


    const ageData = {
        labels: ageChartData?.map(x => x.Age),
        datasets: [{
            label: `${ageChartData?.length} Count in Age Dataset`,
            data: ageChartData?.map(x => parseInt(x.Count)),
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

    const ageOptions = {
        maintainAspectRatio: true,
        scales: {
            r: {
                grid: { display: true },
                angleLines: { display: true }
            }
        },
        plugins: {

            tooltip: {
                enabled: true,
                callbacks: {
                  label: function(context) {
                    let label = '';
                    if (context.dataset) {
                      label = `Count: ${context.dataset.data[context.dataIndex]}`;
                    }
                    return label;
                  }
                }
              }
        },
        legend: {
            labels: {
                position: 'top',
                fontSize: 12
            },
            title: {
                display: true,
                text: 'Chart.js Polar Area Chart With Centered Point Labels'
            }
        }
    };

    

    return (
        <>
            
                <div style={{ fontFamily: "Calibri", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
                    <h4 className="text-center"><em>Age Count</em></h4>
                    <PolarArea data={ageData} height={220} 
                    options={ageOptions} />
                </div>
                
        </>
    );
};

export default PieChart;