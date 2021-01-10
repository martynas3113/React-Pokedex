import React, { Component } from 'react';
import Card from '../cards/cards'
import './pokedex.css'

 class Pokedex extends Component {
    
    render() {
        const pokecard = 
        this.props.pokedata.map((poke) =>
        <Card key={poke.name} id={poke.id} name={poke.name} type={poke.type} base_experience={poke.base_experience}/>
        )
        const winner = this.props.isWinner
        return (
            <div className='pokedex'>
                <p className="pokedex-exp">Total experience: {this.props.exp}</p>
                <p style={winner ? {color:'green'} : {color:'red'}} className="pokedex-state">{winner ? 'WINNER!' : 'LOSER!'} </p>
                <div className='pokedex-cards'>  
                {pokecard}
                </div>
            </div>
        )
    }
}

export default Pokedex
