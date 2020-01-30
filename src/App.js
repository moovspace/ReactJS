import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

// Switch - display only correct page without error
// NavLink - actiwe linc style

// Main page
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Todos from './components/Todos'
import AddItem from './components/AddItem'

// Router pages
import About from './components/pages/About'
import PostId from './components/pages/PostId'
import Error from './components/pages/Error'

class App extends React.Component {
  state = {
    todos: [
      {id: 1, title: "Hello 1", completed: false},
      {id: 2, title: "Hello 2", completed: false},
      {id: 3, title: "Hello 3", completed: false},
      {id: 4, title: "Hello 4", completed: false},
      {id: 5, title: "Hello 5", completed: false},
      {id: 6, title: "Hello 6", completed: false}
    ]
  }

  // React after component loaded
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
    .then((res) => res.json()) // Promise
    .then((json) => {
      // Set component state
      this.setState({
        todos: json.filter((todo) => {
          // Remove userId from todo object
          return todo = delete todo.userId
        })
      })
    })
    .catch((err) => {
      console.log(err)
    });
  }

  // Toggle todo completed
  mDone = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
    console.log("From App.js Done id:", id);
  }

  mDelete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
    console.log("From App.js Delete id: ", id);
  }

  mAddItem = (title) => {
    const item = {
      id: new Date().getUTCMilliseconds(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, item]
    });

    console.log("From App.js Add id: ", title);    
  }

  render() {
    return (      
        <Router>
          <div className="App">
            <Header />

            <Switch>
              
              <Route exact path="/" render={
                props => (
                  <React.Fragment>
                    <AddItem  mAddItem={this.mAddItem} />
                    <Todos todos={this.state.todos} mDone={this.mDone} mDelete={this.mDelete} />
                  </React.Fragment>
                )
              } />

              <Route path="/about" component={About} />
              <Route path="/post/:postid/image/:imageid" component={PostId} />              
              <Route path="/:error" component={Error} />

            </Switch>

            <Footer />
          </div>
        </Router>      
    );
  }
}
export default App;
