import React, { Component } from 'react';
import Pokedex from '../pokedex';
import './pokegame.css'



class Pokegame extends Component {
    static defaultProps = {
        pokedata: [
            {id: 4, name: 'Charmander', type: 'Fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'Water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'Bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'Flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'Electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'Normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'Poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'Normal', base_experience: 65}
          ]
     }
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokedata]
        
        while(hand1.length<hand2.length){
            let randomIndex = Math.floor(Math.random() * hand2.length)
            hand1.push(hand2[randomIndex])
            hand2.splice(randomIndex,1)
        }
        
        let exp1 = hand1.reduce((exp, pokedata)=> exp+ pokedata.base_experience, 0)
        let exp2 = hand2.reduce((exp, pokedata)=> exp+ pokedata.base_experience, 0)
        
        return (
            <div className='pokegame'>
                <Pokedex exp={exp1} className='dexTop' pokedata={hand1} isWinner={exp1 > exp2} />
                <Pokedex exp={exp2} className='dexBot' pokedata={hand2} isWinner={exp2 > exp1} />
            </div>
        )
    }
}

export default Pokegame
