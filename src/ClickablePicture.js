import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state={
        img:this.props.img
    }
    clickImage=(e)=>{
        this.state.img=== this.props.img ?
        this.setState({img: this.props.imgClicked})
        :
        this.setState({img: this.props.img})

    }
        
        
        render() {
        return (
            <div>
                <img src={this.state.img} onClick={this.clickImage}/>
            </div>
        )
    }
}
