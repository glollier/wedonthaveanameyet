import React, { Component } from 'react';
import Chart from "react-apexcharts";

class ColumnChart extends Component {
	constructor(props) {

        super(props);
        this.state = {
			options: {
				theme: {
				  monochrome: {
					enabled: true,
					color: '#d851b9',
					shadeTo: 'light',
					shadeIntensity: 0.65
				  }
				},
				 chart: {
						height: 500,
						type: 'bar',
					  	foreColor: '#ffffff'
					},
					xaxis: {
		        labels: {
		            show: false,
							}
						},
					tooltip: {
						fillSeriesColor:true,
						x:{
							show:false
						}
					},
					plotOptions: {
						bar: {
							horizontal: false,
							columnWidth: '60%',
							endingShape: 'rounded'
						},
					},
					dataLabels: {
						enabled: true
					},
					stroke: {
						show: true,
						width: 2,
						colors: ['transparent']
					}

				},
				series: this.seriesCreator.bind(this)(this.props),
		}
	}
	seriesCreator(props){
		let tab = []
		let temp = []
		Object.keys(props).map((key, index) => {
			  return tab.push(props[key])
			})
		for(let i=0;i<tab[0].length;i++){
			temp[i] = {
				name:tab[1][i],
				data: [tab[0][i]]
			}
		}
		tab = temp
		return tab
	}

  render() {
  	return (
  		<div>
  		  <div className="barChart d-flex justify-content-center align-items-center">
  				<Chart options={this.state.options} series={this.state.series}  type="bar" height="300px" />
  			</div>
  		</div>
  	)
  }
}


export default ColumnChart
