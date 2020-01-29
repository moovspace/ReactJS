import React from 'react';
import './App.css';

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Todos from './components/Todos'
import AddItem from './components/AddItem'

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
      id: new Date().getMilliseconds(),
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
      <div className="App">      
        
        <Header />

        <AddItem  mAddItem={this.mAddItem} />

        <Todos todos={this.state.todos} mDone={this.mDone} mDelete={this.mDelete} />

        <Footer />

      </div>
    );
  }
}
export default App;
