import React from 'react';

class HelloWorld extends React.Component{
    render(){
        //const myName = "Mary";
        let isAnonymous = true;
        const items = ["rice", "chicken", "cookies"];
        return(
            <div>
                <p>{this.props.test}</p>
                
                {isAnonymous ? 'anonymous' : 'x'}
                <ol>
                    {items.map(item => { 
                        return <li>{item}</li>
                    })}
                </ol>
                {items}
            </div>
        );
    }
}

export default HelloWorld;