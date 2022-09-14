import { Component } from 'react';
import './App.css';
import Data from './MOCK_DATA.json';

import Search from './searchPanel/Search';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Data,
    }
  }

  render() {
    const {data} = this.state;
    console.log(1);

    return (
      <div className='App'>
        <Search data={data} />
      </div>
    );
  }
  
}

export default App;
