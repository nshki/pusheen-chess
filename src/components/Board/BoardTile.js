import React, { Component } from 'react';

class BoardTile extends Component {
  render() {
    return (
      <div className="board__tile">
        {this.props.children}
      </div>
    );
  }
}

export default BoardTile;
