// App.jsx is root component of application - first to be rendered to the DOM
import { NavBar, Home } from "./components";

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
};

export default App;
