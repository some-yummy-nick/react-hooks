import {Inputs} from "./components/Inputs";
import {Hover} from "./components/Hover/Hover";
import {ScrollTodos} from "./components/ScrollTodos/ScrollTodos";
import {SearchTodos} from "./components/SearchTodos/SearchTodos";
import "./app.scss";
import RequestTodos from "./components/RequestTodos/RequestTodos";

export function App() {

    return (
        <div className="app">
            <Inputs/>
            <Hover/>
            <RequestTodos/>
            <div className="app__todos">
                <div className="app__todo">
                    <ScrollTodos/>
                </div>
                <div className="app__todo">
                    <SearchTodos/>
                </div>
            </div>
        </div>
    );
}

export default App;
