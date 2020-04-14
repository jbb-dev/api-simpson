import React from 'react';
import './App.css'
import Quote from './Quote'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count : 0,
      quote : 'salut les copains',
      character : '',
      image : ''
    }
  }

  componentDidMount() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    
      .then(data=>{
        console.log(data)
        this.setState({
          count : this.state.count + 1,
          quote : data[0].quote,
          character : data[0].character,
          image : data[0].image
          })})
    }

  render() {
  return (
    <div className="App">
      <Quote informations={this.state} />
      <div className="bonus">
            
            <button className={this.state.count > 1 ? 'v2' : 'v1'} onClick={()=> {this.componentDidMount()}}>
                <h1>{this.state.count < 2 ? 'Clique-ici' : 'Look at my ass !!'}</h1>
            </button> 
            <h1>{this.state.count}</h1>               
          
        </div>
    </div>
  )};
}

export default App;
