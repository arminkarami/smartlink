import React, {useEffect, useState} from 'react';
import Slider from "../../components/home/slider/slider";
import NavBar from "../../components/navbar/NavBar";
import HowItWorks from "../../components/home/HowItWorks";
import Features from "../../components/home/Features";
import {getPosts} from "../../api/GetPost";
import Posts from "../../components/home/Posts";


function Post() {
    return null;
}

export default function Home() {

    const [posts, setPosts] = useState([])
    const fetchPostsData = async () => {
        const posts = await getPosts()
        setPosts([...posts])
    }
    useEffect(() => {
        fetchPostsData()
    }, []);

    return (
        <div id="home">
            <NavBar/>
            <main>
                <Slider/>
                {(posts.length>0 && <HowItWorks data={posts[0]}/>)}
                <Features/>
                {(posts.length>0 && <Posts data={posts.slice(1)}/>)}
            </main>
        </div>
    )
}

