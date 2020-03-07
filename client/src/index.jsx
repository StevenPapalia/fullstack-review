import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  // grabTop25
  grabTop25() {
    // get to server
    console.log(`grabing the top 25`);
    $.ajax({
      method: "GET",
      url: "/repos",
      success: (data) => {
        this.setState({
          repos: data
        }, () => console.log(this.state.repos))
      },
      error: (err) => console.log(err)
    })
    // pass state to movieList
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      method: "POST",
      url: "/repos",
      data: JSON.stringify({user: term}),
      contentType: "application/json",
      success: (data) =>  {
        console.log('boutta call top25');
        this.grabTop25();
      },
      error: (err) => console.log(err)
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));