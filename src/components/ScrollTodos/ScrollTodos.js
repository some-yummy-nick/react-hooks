import {useState, useRef} from "react";

import "./Todos.scss";
import {useScroll} from "../../hooks/useScroll";

export const ScrollTodos = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 20;
    const parentRef = useRef();
    const childRef = useRef();
    useScroll(document.querySelector('html'), childRef, () => fetchTodos(page, limit));

    function fetchTodos(page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1);
            })
    }


    return (
        <div className="todos" ref={parentRef}>
            {todos.map(todo =>
                <div className="todos__item" key={"todo" + todo.id}>{todo.id}. {todo.title}</div>
            )}
            <div ref={childRef} style={{height: 20}}/>
        </div>
    );
};

export default ScrollTodos;
