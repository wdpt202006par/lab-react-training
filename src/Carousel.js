import React, { Component } from 'react'

export default class Carousel extends Component {
    state={
        img:this.props.imgs[0],
        index:0
    }
    clickLeft=(e)=>{
        const i = this.state.index-1
        this.state.index > 0 ?
        this.setState({img: this.props.imgs[i], index:i})
        :
        this.setState({img: this.props.imgs[3], index:3})

    }
    clickRight=()=>{
        const i = this.state.index+1
        this.state.index < 3 ?
        this.setState({img: this.props.imgs[i], index:i})
        :
        this.setState({img: this.props.imgs[0], index:0})
    }
    render() {
        return (
            <div>
                <img style={{height: '200px'}} src={this.state.img} />
                <button onClick={this.clickLeft}>Left</button>
                <button onClick={this.clickRight}>Right</button>
            </div>
        )
    }
}
