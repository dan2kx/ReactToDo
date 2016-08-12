var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [{
        id: 1,
        text: "eat food"
      }, {
        id: 2,
        text: "drink beer"
      }, {
        id: 3,
        text: 'play video games'
      }, {
        id: 4,
        text: 'message Jess'
      }]
    };
  },
  render: function(){
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
   )
  }
});

module.exports = TodoApp
