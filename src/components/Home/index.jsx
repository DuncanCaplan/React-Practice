import React from "react";
import { useState, useEffect } from "react";
import BlogList from "../BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "Lake Louise - Canada",
            body: "Skiing in Lake Louise, nestled in the Canadian Rockies, offers a thrilling experience amidst stunning natural beauty. With diverse terrain catering to all skill levels, world-class snow conditions, and some of North America's longest runs, it's a paradise for skiers and snowboarders alike. Families will find beginner-friendly areas and childcare options, while après-ski activities and wildlife sightings enhance the overall experience. Easily accessible from Banff and Calgary, Lake Louise is a must-visit destination for those seeking a memorable winter adventure.",
            author: "Duncan",
            id: 1,
        },
        {
            title: "Pas de la Casa - Andorra",
            body: "Skiing in Pas de la Casa, located in the Grandvalira ski area of Andorra, offers an exhilarating experience with a focus on affordability and vibrant apres-ski culture. Skiers and snowboarders can enjoy a wide range of terrain suitable for all levels, along with excellent snow conditions. The resort features long, well-groomed runs, terrain parks for freestyle enthusiasts, and plenty of opportunities for off-piste adventures. Pas de la Casa is known for its lively nightlife scene, making it a popular choice for younger and budget-conscious travelers. With easy access to neighboring resorts and a variety of dining and entertainment options, it's a bustling and accessible destination for winter sports enthusiasts.",
            author: "Charlie",
            id: 2,
        },
        {
            title: "Nozawa Onsen - Japan",
            body: "Skiing in Nozawa Onsen, Japan, offers a unique and culturally immersive experience. The resort, nestled in the Japanese Alps, provides skiers and snowboarders with diverse terrain suitable for all skill levels, from beginners to experts. Nozawa Onsen is renowned for its abundant, high-quality powder snow, ensuring exceptional conditions throughout the season. Beyond the slopes, visitors can soak in the traditional hot springs (onsen), explore the charming village with its historic architecture, and savor delicious Japanese cuisine. The resort's rich cultural heritage and welcoming atmosphere make it a fantastic choice for those seeking a blend of world-class skiing and authentic Japanese hospitality.",
            author: "Duncan",
            id: 3,
        },
    ]);

    useEffect(() => {
        console.log("BING");
    });

    const handleDelete = id => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
};

export default Home;
