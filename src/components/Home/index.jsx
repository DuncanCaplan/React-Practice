import React from "react";
import { useState, useEffect } from "react";
import BlogList from "../BlogList";
import axios from "axios";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);

    const handleDelete = id => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        setTimeout(() => {
            axios.get("http://localhost:8000/blogs").then(res => {
                console.log(res.data);
                setBlogs(res.data);
                setIsPending(false);
            });
        }, 500);
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
};

export default Home;
