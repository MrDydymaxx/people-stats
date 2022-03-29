import React from 'react';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import PieChart from 'highcharts-react-official';

const Gender = () => {
  const maleNumber = useSelector((state) => state.stats.userManNumber);
  const femaleNumber = useSelector((state) => state.stats.userWomanNumber);
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    title: {
      text: 'Percentage and number of users by gender'
    },
    tooltip: {
      pointFormat:
        '{series.name}: <br>{point.percentage:.1f} %<br>Number: {point.y}'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format:
            '<b>{point.name}</b>:<br>{point.percentage:.1f} %<br>Number: {point.y}'
        },
        innerSize: 100,
        depth: 45
      }
    },
    series: [
      {
        data: [
          {
            name: 'Female',
            y: femaleNumber,
            color: 'rgb(241, 92, 128)'
          },
          {
            name: 'Male',
            y: maleNumber,
            color: 'rgb(124, 181, 236)'
          }
        ]
      }
    ]
  };

  return <PieChart highcharts={Highcharts} options={options} />;
};

export default Gender;
