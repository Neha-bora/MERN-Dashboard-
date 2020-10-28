// with canvasjs

import React, { Component } from 'react';
import CanvasJSReact from './assets/js/canvasjs.react'

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BarChart extends Component {
	render() {
		const options = {
			title: {
				text: 'Basic Column Chart in React',
			},
			data: [
				{
					type: 'column',
					dataPoints: [
						{ label: 'Apple', y: 10 },
						{ label: 'Orange', y: 15 },
						{ label: 'Banana', y: 25 },
						{ label: 'Mango', y: 30 },
						{ label: 'Grape', y: 28 },
					],
				},
			],
		};

		return (
			<div>
				<CanvasJSChart
					options={options}
					/* onRef = {ref => this.chart = ref} */
				/>
			</div>
		);
	}
}

export default BarChart;


// With Chart.js

// import React from 'react';
// import {Bar} from 'react-chartjs-2';

// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

// export default class BarChart extends React.Component {
//   render() {
//     return (
//       <div>
//         <Bar
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               // fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//     );
//   }
// }