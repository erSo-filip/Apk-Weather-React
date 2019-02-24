import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class Wykres extends Component{
  constructor(props){
    super(props);
    this.state = {
        chartData:{
            labels: props.wykres.list
                            .slice(0, 8)
                            .map(w => (new Date(w.dt_txt).getHours()+':'+new Date(w.dt_txt).getMinutes()+new Date(w.dt_txt).getMinutes())),
            datasets:[
              {
                label: "W stopniach Celsjusza",

                data:props.wykres.list
                    .slice(0, 8)
                    .map(w => (Math.round(w.main.temp))),
               
                    backgroundColor:[
                        'rgb(107, 161, 231)',
                      ],
                    borderWidth:2,
                    borderColor:'rgba(0, 255, 255, 0.589)',
                      
              }
            ]
          }
    }
  }
  
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Wykres temperatury w ciągu 24 godzin',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />     
    </div>
    )
  }
}

export default Wykres;