import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    randomColor(event) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + r + "," + g + "," + b + ")";
        console.log(bgColor)
        let currentBox = event.target
        currentBox.style.backgroundColor = bgColor
    }
    render() {
      return (
        <div className="square" onMouseOver={this.randomColor}>
          {/* TODO */}
        </div>
      );
    }
}
function Main (){
    const squares = []
    for (let i = 0; i < 108; i++)
    {
        squares.push(<Square/>)
    }
    return ( 
        <div>
            {squares}
        </div>
    );
}
  ReactDOM.render(
   <Main></Main>,
    document.getElementById('root')
);

  