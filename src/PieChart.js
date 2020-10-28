import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Project Progress',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
     
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class PieChart extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Project Progress per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

      
      </div>
    );
  }
}