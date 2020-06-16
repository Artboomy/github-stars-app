import React from 'react';
import './App.css';
import Axios from 'axios';
import {IRepositoryInfo} from "./types/declarations";
import List from "./components/List";
import 'semantic-ui-css/semantic.min.css'

interface IState {
  items: IRepositoryInfo[] | null
}

class App extends React.Component<{}, IState>{
  constructor(props: {}) {
    super(props);
    this.state = {
      items: null
    }
  }

  async componentDidMount(): Promise<void> {
    const response = await Axios.get('api/list', {});
    console.info(response.data);
    this.setState({items: response.data});
  }

  render(): React.ReactNode {
    const items = this.state.items;
    return (
       <div>
         <div>Список самых популярных JS-репозиториев</div>
         {items ? <List items={items}/> : 'Loading'}
       </div>
    );
  }
}

export default App;
