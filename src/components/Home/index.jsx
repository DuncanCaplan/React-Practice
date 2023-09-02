import React from "react";
import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName("Luigi");
        setAge(26);
    };
    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>
                {name} is {age}
            </p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Home;
