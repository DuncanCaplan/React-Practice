// App.jsx is root component of application - first to be rendered to the DOM
import { NavBar, Home } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<Home />} />
                    <Route path="/create" element={<Home />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
