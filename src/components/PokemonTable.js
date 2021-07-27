import React from "react";
import Pokemon from './Pokemon.js';

class PokemonTable extends React.Component{
    state = {
        score: 1
    }

    addScore = (num) => {
        //score++;
        this.setState({score: this.state.score + num});
        console.log(this.state.score);
    }

    render(){  

        //let score = 1;

        

        return (
            <div>
                {this.state.score}
                <button onClick={() => this.addScore(5)}>+</button>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.BodyItems.map((item) => {
                            return <Pokemon
                                key={item.id}
                                PokemonName={item.name} 
                                PokemonImage={item.image} 
                                PokemonType={item.type} 
                                />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default PokemonTable;