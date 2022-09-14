import { Component } from 'react';

class Increment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            click: 0,
            plus: 0,
            minus: 0,
        };
    
    increment = () => {
    this.setState(() => ({
        click: this.state.click + 1,
        plus: this.state.plus + 1,
    }));
    }

    decrement = () => {
    this.setState({
        click: this.state.click + 1,
        minus: this.state.minus - 1,
    });
    }

    render() {
        const {click, plus, minus} = this.state;

        return (
          <div>
            <h1>Click me</h1>
            <h2>Count's click {click}</h2>
            <h2>Count's plus {plus}</h2>
            <h2>Count's minus {minus}</h2>
            <button onClick={this.increment} className="btn">+</button>
            <button onClick={this.decrement} className="btn">-</button>
          </div>
        );
      }
    }
}

export default Increment;