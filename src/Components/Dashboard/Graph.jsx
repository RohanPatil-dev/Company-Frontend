import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DashboardChart = () => {
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
            categories: ['STR', 'FIN', 'QLT', 'MAN', 'STO', 'HR'],
            crosshair: true,
            accessibility: {
                description: 'Countries'
            }
        },
        yAxis: {
            tickPositions: [0, 5, 10, 15, 20],

        },
        tooltip: {
            valueSuffix: ' (1000 MT)'
        },
        series: [
            {
                name: 'Total',
                data: [18, 16, 12, 14, 10, 8],
                color: '#034694'
            },
            {
                name: 'Closed',
                data: [15, 14, 10, 12, 8, 5],
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
}

export default DashboardChart;
