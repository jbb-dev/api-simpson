import React, {Component} from 'react'
import './Quote.css'



class Quote extends Component {
    constructor(props) {
       super(props)
       this.state={
           count : 0
       }
    }

    render(){
        return (
            <>
            <div className="character">
                
                <img alt="" src={this.props.informations.image}></img>
                
                <div className="character-details">
                    <h1>{this.props.informations.character}</h1>
                    <h2>{`"${this.props.informations.quote}"`}</h2>
                </div>
            </div>
            </>
        )}
}

export default Quote