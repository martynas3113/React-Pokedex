import './cards.css';


import React, { Component } from 'react'

 class Card extends Component {
     idConverter(id){
        if(id<10){
            return `00${id}`
        }
        else if(id>10 && id<100){
            return `0${id}`
        }
        else{
            return id
        }
     }
    render() {
        
        return (
            <div className='card'>
            <h3 className='card-name'>{this.props.name}</h3>
            <img className='card-img' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.idConverter(this.props.id)}.png`} alt={this.props.name}/>
            <p className='card-type'>Type: {this.props.type}</p>
            <p className='card-exp'>EXP: {this.props.base_experience}</p>
            </div>
        )
    }
}

export default Card

