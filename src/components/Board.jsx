import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';

function Square(props) {
  const { value, onClick } = props;
  return (
    <button type="submit" className="square" onClick={onClick} data-testid="square-button">
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.oneOf(['X', 'O', null]),
  onClick: PropTypes.func,
};

Square.defaultProps = {
  value: null,
  onClick: () => {},
};

class Board extends React.Component {
  renderSquare(i) {
    const { squares, onClick } = this.props;
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(Square.propTypes.value),
  onClick: PropTypes.func,
};

Board.defaultProps = {
  squares: Array(9).fill(null),
  onClick: () => {},
};

export default Board;
