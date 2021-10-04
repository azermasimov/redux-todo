import React, { Fragment } from 'react';
import ToDo from './ToDo';
import './App.css';
import { connect } from 'react-redux';
import { changeInput, addTodo, clearAll } from '../actions';

const App = ({todo, changeInput, addTodo, clearAll }) => {
    return(
        <Fragment>
            <div className="ui form two column centered grid container">
                <h1 style={{margin: 40, fontSize: 40}}>Todos App</h1>
                <div className="two column centered row segment">
                    <form className="ui form grid column" 
                        onSubmit={(e) => {
                            e.preventDefault();
                            addTodo(todo)
                            changeInput("");
                        }}>
                        <input
                            type="text"
                            className="left floated fourteen wide column" 
                            placeholder="Type your task here!" 
                            value={todo} 
                            onChange={(e) => changeInput(e.target.value)} 
                        />
                        <div className="right floated two wide column">
                            <i className="plus square outline icon" 
                                onClick={() => {
                                    addTodo(todo);
                                    changeInput("");
                                }}
                            ></i>
                        </div>
                    </form>
                </div>
                <div className="ui grid column">
                    <ToDo />
                    <button onClick={clearAll} className="ui button right floated">Clear All</button>
                </div>
            </div>
        </Fragment>
        );
    }

const mapStateToProps = (state) => {
    return { todo: state.todo }
};

export default connect(mapStateToProps, { changeInput, addTodo, clearAll })(App);