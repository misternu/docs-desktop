import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import entries from '../assets/entries';
import '../assets/css/App.css';

class App extends Component {
  state = {
    search: '',
    selected: '',
    entries: entries.slice()
  };

  searchChange = event => {
    const search = event.target.value;
    this.setState({ search });
  };

  clickOption = name => {
    this.setState({ selected: name });
  };

  render() {
    return (
      <div>
        <Sidebar
          search={this.state.search}
          searchChange={this.searchChange}
          clickOption={this.clickOption}
          selected={this.state.selected}
          entries={this.state.entries}
        />
        <Content selected={this.state.selected} entries={this.state.entries} />
      </div>
    );
  }
}

export default App;
