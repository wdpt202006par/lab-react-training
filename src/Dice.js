import React, { Component } from 'react';

class Dice extends Component {
    state={
        dice:this.props.dice
    }

    clickDice=(event)=>{
        const timer = setTimeout(() => {
            const randomly= Math.floor(Math.random()*6)+1
            const newImg= `/img/dice${randomly}.png`
            this.setState({dice: newImg})
        }, 1000);
        this.setState({dice: '/img/dice-empty.png'})
        return () => clearTimeout(timer);
    }
    render() {
        return (
            <div>
                <img style={{height: '150px'}} src={this.state.dice} onClick={this.clickDice}/>
            </div>
        );
    }
}

export default Dice;