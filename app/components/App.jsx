import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import '../assets/css/App.css';

const fakeEntries = [
  { name: 'foo', description: 'this is what foo does' },
  { name: 'bar', description: 'this is what bar does' },
  { name: 'baz', description: 'this is what baz does' },
  { name: 'bing', description: 'this is what bing does' },
  { name: 'bang', description: 'this is what bang does' },
  { name: 'bop', description: 'this is what bop does' },
  { name: 'bippity', description: 'this is what bippity does' },
  { name: 'boppity', description: 'this is what boppity does' },
  { name: 'boo', description: 'this is what boo does' }
];

class App extends Component {
  state = {
    search: '',
    selected: ''
  };

  searchChange = event => {
    const search = event.target.value;
    this.setState({ search });
  };
  clickOption = name => {
    this.setState({ selected: name });
  };
  render() {
    const term = this.state.search;
    const optionNames = fakeEntries.filter(o => o.name.includes(term)).map(o => o.name);
    let content;
    if (this.state.selected !== '') {
      const entry = fakeEntries.find(e => e.name === this.state.selected);
      content = <Content name={entry.name} description={entry.description} />;
    } else {
      content = <div className="content" />;
    }
    return (
      <div>
        <Sidebar
          options={optionNames}
          search={term}
          searchChange={this.searchChange}
          clickOption={this.clickOption}
          selected={this.state.selected}
        />
        {content}
      </div>
    );
  }
}

export default App;
