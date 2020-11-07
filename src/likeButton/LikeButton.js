import React, { Component } from 'react'

export default class LikeButton extends Component {
    state={
        like:0,
        color:['purple','blue','green','yellow','orange','red']
    }
    addLike=(event)=> {
        let copyLike= this.state.like
        copyLike++

        this.setState({ like:copyLike})
    }
    
    render() {
        return (
            <button style={{backgroundColor:this.state.color[Math.floor(Math.random()*6)]}} onClick={this.addLike}>
                 {this.state.like} Like
            </button>
        )
    }
}
