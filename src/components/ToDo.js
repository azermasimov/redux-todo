import './ToDo.css';
import { connect } from 'react-redux';
import { completeTodo, removeTodo } from '../actions'

const ToDo = (props) => {
    return (
        <div className="ui segment">
            {
                props.todos.map((item, index) => {
                    return(
                        <div key={index} className="">
                            <div className="ui grid">
                                <div className="left floated five wide column">
                                    <div className="ui checkbox">
                                        <input type="checkbox" onChange={() => props.completeTodo(index)} />
                                        <label>
                                            {item.isCompleted === true ? <del>{item.todo}</del> : item.todo}
                                        </label>
                                    </div>
                                </div>
                                <div className="right floated five wide column" onClick={() => props.removeTodo(index)} >
                                    <i className="times circle outline icon"></i>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return { todos: state.todos }
}

export default connect(mapStateToProps, { completeTodo, removeTodo })(ToDo);