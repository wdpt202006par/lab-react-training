import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    like: 0,
    color: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };

  addClick = (event) => {
    let addLike = this.state.like;
    this.setState({
      like: addLike + 1,
    });
  };

  render() {
    const randomIndex = Math.floor(Math.random() * this.state.color.length);
    return (
      <div>
        <button
          onClick={(event) => this.addClick()}
          style={{
            backgroundColor: this.state.color[randomIndex],
            color: 'purple',
          }}
        >
          {this.state.like} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
