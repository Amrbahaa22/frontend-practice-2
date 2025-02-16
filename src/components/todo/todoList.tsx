import { TodoItem } from "./todoItem";
import { useSelector, useDispatch } from "react-redux";


import { TTodo } from "../../types/data";

import { toggleTodo } from "./slice/todoSlice";
import { VisibilityFilter } from "../visibilityFilter/visibilityFilterSlice";
import { RootState } from "../../redux/store";


const getVisibleTodos = (todos: TTodo[], filter: VisibilityFilter) => {
    switch (filter) {
        case VisibilityFilter.ShowAll:
            return todos;
        case VisibilityFilter.ShowCompleted:
            return todos.filter(t => t.completed);
        case VisibilityFilter.ShowActive:
            return todos.filter(t => !t.completed);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

export default function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) =>
        getVisibleTodos(state.todos, state.visibilityFilter)
    );
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onClick={() => dispatch(toggleTodo(todo.id))}
                />
            ))}
        </ul>
    );
}
