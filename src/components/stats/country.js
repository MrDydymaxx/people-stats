import React from 'react';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import PieChart from 'highcharts-react-official';

const Gender = () => {
  const numberUserByCountry = useSelector(
    (state) => state.stats.userByCountryNumber
  );

  const data = [];
  Object.entries(numberUserByCountry).forEach((entry) => {
    const [key, value] = entry;
    data.push({ name: key, y: value });
  });

  // We need here to configure our charts options to display datas
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
      text: 'Percentage and number of users per country'
    },
    tooltip: {
      pointFormat: '<br>{point.percentage:.1f} %<br>Nombre: {point.y}'
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
        data
      }
    ]
  };
  // Then we return the PieChart that we will call inside the home page
  return <PieChart highcharts={Highcharts} options={options} />;
};

export default Gender;
