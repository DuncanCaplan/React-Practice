import React from "react";

const Home = () => {
    const handleClick = (name, e) => {
        console.log(`Hello, ${name}`, e);
    };
    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={e => handleClick("Bing", e)}>Click me</button>
        </div>
    );
};

export default Home;
