import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
//import io from 'socket.io-client';
//const socket = io('http://localhost:3000');

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  title = 'dashboard';
  bar:any;
  pie: any;
  doughnut: any;
  line:any;
  //data1 = [];

  showFirst: boolean = false;
  showSecond: boolean = false;
  showThird: boolean = false;
  showFourth:  boolean = false;

  constructor() { }

  ngOnInit() {

    this.doughnutChart();

    // socket.on('data1', (res) => {
    //   this.updateChartData(this.chart, res, 0);
    //   this.updateChartData(this.doughnut,res.slice(0,5), 0);
    // })

    // socket.on('data2', (res) => {
    //   this.updateChartData(this.chart, res, 1);
    // })

    let options = {
      aspectRatio: 1,
      legend: false,
      tooltips: false,

      elements: {
        point: {
          borderWidth: function (context) {
            return Math.min(Math.max(1, context.datasetIndex + 1), 8);
          },
          hoverBackgroundColor: 'transparent',
          hoverBorderColor: function (context) {
            return "red";
          },
          hoverBorderWidth: function (context) {
            var value = context.dataset.data[context.dataIndex];
            return Math.round(8 * value.v / 1000);
          },
          radius: function (context) {
            var value = context.dataset.data[context.dataIndex];
            var size = context.chart.width;
            var base = Math.abs(value.v) / 1000;
            return (size / 24) * base;
          }
        }
      }
      
    };
   
  }

  doughnutChart(){
    this.showFirst = true;
    this.showSecond = false;
    this.showThird = false;
    this.showFourth = false;

    this.doughnut =  new Chart('doughnut',{
      type: 'doughnut',
      options: {
        layout: {
          padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
          }
      },
        responsive: false,
        title: {
          display: true,
          text: 'Doughnut Chart'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
        },
      //   scales: {
      //     yAxes: [{
      //         ticks: {
      //             beginAtZero:true
      //         }
      //     }]
      // }
      },
      data: {
				datasets: [{
					data: [45,10,5,25,15],
					backgroundColor: ["red","orange","yellow","green","blue"],
					label: 'Dataset 1'
				}],
				labels: ['Red','Orange','Yellow','Green','Blue']
			}
    })
    
  }

  barChart(){

    this.showFirst = false;
    this.showSecond = true;
    this.showThird = false;
    this.showFourth = false;

    this.bar = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: false,
        title: {
          display: true,
          text: 'Combo Bar and line Chart'
        },
      },
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets: [
          {
            type: 'bar',
            label: 'My First dataset',
            data: [243, 156, 365, 30, 156, 265, 356, 543],
            backgroundColor: 'rgba(255,0,255,0.4)',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false,
          },
          {
            type: 'bar',
            label: 'My Second dataset',
            data: [243, 156, 365, 30, 156, 265, 356, 543].reverse(),
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: true,
          }
        ]
      }
    });
  }

  pieChart(){
    this.showThird = true;
    this.showFirst = false;
    this.showSecond = false;
    this.showFourth = false;

    this.pie = new Chart('pie',{
      type: 'pie',
      options: {
        responsive: false,
        title: {
          display: true,
          text: 'Pie Chart'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
        },
      //   scales: {
      //     yAxes: [{
      //         ticks: {
      //             beginAtZero:true
      //         }
      //     }]
      // }
      },
      data: {
				datasets: [{
					data: [45,10,5,25,15].reverse(),
					backgroundColor: ["red","orange","yellow","green","blue"],
					label: 'Dataset 1'
				}],
				labels: ['Red','Orange','Yellow','Green','Blue']
      },
      
    })

  }

  lineChart(){
    this.showThird = false;
    this.showFirst = false;
    this.showSecond = false;
    this.showFourth = true;

    this.line = new Chart('line', {
      type: 'line',
    data: {
     labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
     datasets: [{
         label: 'Number of Items Sold in Months',
         data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
         fill:true,
         lineTension:0.2,
         borderColor:"red",
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Line Chart",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
  }

//   addData(chart, label, data) {
//     chart.data.labels.push(label);
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
//     chart.update();
// }

// removeData(chart) {
//     chart.data.labels.pop();
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.pop();
//     });
//     chart.update();
// }

// updateChartData(chart, data, dataSetIndex){
//   chart.data.datasets[dataSetIndex].data = data;
//   chart.update();
// }

}
