import React from 'react';

const Player = (props)  =>{
    return(
        <div>
            <p>Player Name {props.PlayerName}</p>
            <p>Player Jersey No. {props.PlayerNumber}</p>                
        </div>
    );
}

// class Player extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p>Player Name {this.props.PlayerName}</p>
//                 <p>Player Jersey No. {this.props.PlayerNumber}</p>                
//             </div>
//         );
//     }
// }

export default Player;