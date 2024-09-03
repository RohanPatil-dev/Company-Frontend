import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DashboardChart = () => {
    const [chartData, setChartData] = useState({
        categories: [],
        totalData: [],
        closedData: []
    });

    const token = localStorage.getItem("uid");

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/project/getAllData', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                const data = response.data.msg;

                const departments = ['Strategy', 'Finance', 'Quality', 'Maintainance', 'Stores', 'HR'];

                const totalData = [];
                const closedData = [];

                departments.forEach(department => {
                    const total = data.filter(item => item.Department === department).length;
                    const closed = data.filter(item => item.Department === department && item.Status === 'Closed').length;
                    totalData.push(total);
                    closedData.push(closed);
                });

                setChartData({
                    categories: departments,
                    totalData,
                    closedData
                });

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [token]);

    const options = {
        chart: {
            type: 'column',
            style: {
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }
        },
        title: {
            text: '',
            align: 'left'
        },
        xAxis: {
            categories: chartData.categories,
            crosshair: true,
            accessibility: {
                description: 'Departments'
            }
        },
        yAxis: {
            tickPositions: [0, 5, 10, 15, 20],
        },
        tooltip: {
            valueSuffix: ' projects'
        },
        series: [
            {
                name: 'Total',
                data: chartData.totalData,
                color: '#034694'
            },
            {
                name: 'Closed',
                data: chartData.closedData,
                color: '#4cbb17'
            }
        ]
    };

    return (
        <div>
            <p className='ml-5 graph-name'>Department wise - Total Vs Closed</p>

            <div className='graph'>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </div>
    );
};

export default DashboardChart;
