import React, { Component } from 'react';
import './App.css';
import Form from './componenty/Main/Form';
import Result from './componenty/Main/Result';
import Day1 from './componenty/Extra/Day1';
import Day2 from './componenty/Extra/Day2';
import Day3 from './componenty/Extra/Day3';
class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    temp: '',
    press: '',
    wind: '',
    err: false,
    icon: '',
    humidity: '',

    icon1: '',
    temp1: '',
    date1: '',

    icon2: '',
    temp2: '',
    date2: '',

    icon3: '',
    temp3: '',
    date3: '',
  }
  InputChange = a => {
    this.setState({
        value: a.target.value
    })
  }

  Szukaj = a => {
    a.preventDefault()


   const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=216a9e8c3d7e5f5f8bfa2d08aed0f892&units=metric`;

   const API1 = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&appid=216a9e8c3d7e5f5f8bfa2d08aed0f892&units=metric`;

   fetch(API)
   .then(response => {
     if(response.ok){
       return response
     }
     throw Error("NICE TRY")
   })
   .then(response => response.json())
    .then(data => {
    // console.log(data)
    const days = ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];
    const time = new Date()
    let text = '';
    function formattime(dt) {
      var godzina = dt.getHours();
      var minuta = dt.getMinutes();
      var tyg = dt.getDay();
      text = days[tyg] + ", " + godzina + ":" + minuta;
      return text;
     }
    this.setState({
      err: false,
      date: formattime(time),
      city: this.state.value,
      temp: data.main.temp,
      press: data.main.pressure,
      wind: data.wind.speed,
      humidity: data.main.humidity,
      icon: data.weather[0].icon,
    })
  })
 .catch(err => {
  console.log(err);
   
  this.setState(prevState => ({
    err: true,
    city: prevState.value
  }))
 })


   fetch(API1)
   .then(response => {
     if(response.ok){
       return response
     }
     throw Error("NICE TRY")
   })
   .then(response => response.json())
    .then(data => {
    // console.log(data)
    const days = ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];
    const time1 = new Date()
    let text = '';
    function formattime1(dt) {
      var tyg = dt.getDay();
      text = days[(tyg+1)%7];
      return text;
     }
     function formattime2(dt) {
      var tyg = dt.getDay();
      text = days[(tyg+2)%7];
      return text;
     }
     function formattime3(dt) {
      var tyg = dt.getDay();
      text = days[(tyg+3)%7];
      return text;
     }
    this.setState({
      err: false,
      city: this.state.value,

      icon1: data.list[8].weather[0].icon,
      temp1: data.list[8].main.temp,
      date1: formattime1(time1),

      icon2: data.list[16].weather[0].icon,
      temp2: data.list[16].main.temp,
      date2: formattime2(time1),

      icon3: data.list[24].weather[0].icon,
      temp3: data.list[24].main.temp,
      date3: formattime3(time1),
     })
    })
   .catch(err => {
    console.log(err);
     
    this.setState(prevState => ({
      err: true,
      city: prevState.value
    }))
   })}
  

   componentDidUpdate(prevProps, prevState) {
    if(this.state.value.length === 0 || this.state.value.length === 1 || this.state.value.length === 2) return
    if(prevState.value !== this.state.value){
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=216a9e8c3d7e5f5f8bfa2d08aed0f892&units=metric`;

   const API1 = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&appid=216a9e8c3d7e5f5f8bfa2d08aed0f892&units=metric`;

   fetch(API)
   .then(response => {
     if(response.ok){
       return response
     }
     throw Error("NICE TRY")
   })
   .then(response => response.json())
    .then(data => {
    // console.log(data)
    const days = ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];
    const time = new Date()
    let text = '';
    function formattime(dt) {
      var godzina = dt.getHours();
      var minuta = dt.getMinutes();
      var tyg = dt.getDay();
      text = days[tyg] + ", " + godzina + ":" + minuta;
      return text;
     }
    this.setState({
      err: false,
      date: formattime(time),
      city: this.state.value,
      temp: data.main.temp,
      press: data.main.pressure,
      wind: data.wind.speed,
      humidity: data.main.humidity,
      icon: data.weather[0].icon,
    })
  })
 .catch(err => {
  console.log(err);
   
  this.setState(prevState => ({
    err: true,
    city: prevState.value
  }))
 })


   fetch(API1)
   .then(response => {
     if(response.ok){
       return response
     }
     throw Error("NICE TRY")
   })
   .then(response => response.json())
    .then(data => {
    // console.log(data)
    const days = ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];
    const time1 = new Date()
    let text = '';
    function formattime1(dt) {
      var tyg = dt.getDay();
      text = days[(tyg+1)%7];
      return text;
     }
     function formattime2(dt) {
      var tyg = dt.getDay();
      text = days[(tyg+2)%7];
      return text;
     }
     function formattime3(dt) {
      var tyg = dt.getDay();
      text = days[(tyg+3)%7];
      return text;
     }
    this.setState({
      err: false,
      city: this.state.value,

      icon1: data.list[8].weather[0].icon,
      temp1: data.list[8].main.temp,
      date1: formattime1(time1),

      icon2: data.list[16].weather[0].icon,
      temp2: data.list[16].main.temp,
      date2: formattime2(time1),

      icon3: data.list[24].weather[0].icon,
      temp3: data.list[24].main.temp,
      date3: formattime3(time1),
     })
    })
   .catch(err => {
    console.log(err);
     
    this.setState(prevState => ({
      err: true,
      city: prevState.value
    }))
   })
    }

   }

  render() {
    return (
      <div className="App">
      <div className="Nav">
      <button className="lupa"><div class="icone lupa"></div></button>
      <Form 
      text={this.state.value}  
      change={this.InputChange}
      submit={this.Szukaj}
      />
      
      </div>
      <Result weather={this.state}/> 
      <div className="day">
      <Day1 weather={this.state}/>
      <Day2 weather={this.state}/>
      <Day3 weather={this.state}/>     
      </div>
      </div>
    );
  }
}

export default App;
