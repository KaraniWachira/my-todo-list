import ToDoItem from "./ToDoItem";


function ToDoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todo added"}
            {todos.map(todo => {
                return (
                    <ToDoItem {...todo} key={todo.id} 
                    toggleTodo={toggleTodo} deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}

export default ToDoList;