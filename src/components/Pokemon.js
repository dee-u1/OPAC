import React from 'react';

class Pokemon extends React.Component{
    render(){
        return(
            <tr>
                <td key={this.props.PokemonName}>
                    <p>{this.props.PokemonName}</p>
                </td>
                <td>
                    <img src={this.props.PokemonImage} alt="pokemon" />
                </td>
                <td>
                    <p>{this.props.PokemonType}</p>
                </td>
            </tr>
        );
    }
}

export default Pokemon;