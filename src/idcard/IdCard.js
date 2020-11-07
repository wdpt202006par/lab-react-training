import React from 'react';


class IdCard extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.picture} alt=""></img>
                <p> First name: {this.props.firstName} </p>
                <p> Last name: {this.props.lastName} </p>
                <p> Gender: {this.props.gender} </p>
                <p> Height: {this.props.height} </p>
                <p> Birth: {this.props.birth.toDateString()} </p>
            </div>
        )
    }
}

export default IdCard;