import axios from "axios";
import "./Todos.scss";
import useRequest from "../../hooks/useRequest";

export const RequestTodos = () => {
    const [todos, loading, error] = useRequest(fetchTodos);

    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
    }

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>Произошла ошибка</h1>
    }

    return (
        <div className="todos">
            {todos && todos.map(todo =>
                <div className="todos__item" key={"todo" + todo.id}>{todo.id}. {todo.title}</div>
            )}
        </div>
    );
};

export default RequestTodos;
