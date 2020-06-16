import React from 'react';
import './App.css';
import Axios from 'axios';

interface IState {
  testData?: string
}

class App extends React.Component<{}, IState>{
  constructor(props: {}) {
    super(props);
    this.state = {
      testData: undefined
    }
  }

  async componentDidMount(): Promise<void> {
    const response = await Axios.get('api/list', {
      params: {
        name: 'SomeTestName'
      }
    });
    this.setState({testData: response.data});
  }

  render(): React.ReactNode {
    return <div>{this.state.testData || 'Loading...'}</div>;
  }
}

export default App;
