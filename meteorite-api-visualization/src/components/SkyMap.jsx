import React, { Component } from 'react';
import Chart from 'chart.js';
import { formatCoordinates } from '../utils';

export default class SkyMap extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'scatter',
      data: {
        datasets: [
          {
            backgroundColor: 'darkgray',
            label: 'Scatter Graph of Meteorites',
            data: formatCoordinates(this.props.data)
          }
        ],
        options: {
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                let label = data.datasets[tooltipItem.datasetIndex].label || '';

                if (label) {
                  label += ': ';
                }
                label += Math.round(tooltipItem.yLabel * 100) / 100;
                return label;
              }
            }
          },
          layout: {
            padding: {
              top: 15,
              left: 15,
              right: 15,
              bottom: 15
            }
          }
        }
      }
    });
  }
  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
