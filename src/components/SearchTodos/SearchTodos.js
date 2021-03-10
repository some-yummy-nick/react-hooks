import {useState} from "react";

import "./Todos.scss";
import {useDebounce} from "../../hooks/useDebounce";

export const SearchTodos = () => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");
    const debouncedSearch = useDebounce(search, 500);

    function search(query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?title=${query}`)
            .then(response => response.json())
            .then(json => {
                setTodos(json);
            })
    }

    const onChange = e => {
        const value = e.target.value;
        setValue(value);
        debouncedSearch(value);
    };

    return (
        <div className="todos">
            <input className="todos__input" value={value} onChange={onChange} type="text"/>
            {todos.map(todo =>
                <div className="todos__item" key={"todo" + todo.id}>{todo.id}. {todo.title}</div>
            )}
        </div>
    );
};

export default SearchTodos;
