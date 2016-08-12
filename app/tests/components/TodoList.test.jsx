var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList',() => {
  it ('should exist', () => {
    expect(TodoList).toExist();
  })

  it ('should render one todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something'
    }, {
      id: 2,
      text: 'Do something else'
    }]
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(2);
  });
});
