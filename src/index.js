import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// class randomizes colors based on rgb values
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
    // set to randomize color on mouseover event
    render() {
      return (
        <div className="square" onMouseOver={this.randomColor}>
          {/* TODO */}
        </div>
      );
    }
}
//  for loop to create squares
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

  