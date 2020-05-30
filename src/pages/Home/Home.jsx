import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Nav } from "../../components/Nav/Nav";
import { Footer } from "../../components/Footer/Footer";
import { PostPreviewList } from "../../components/PostPreviewList/PostPreviewList";


export const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts([{id: 1, title: "Man must explore, and this is exploration at its greatest", subtitle: "Problems look mighty small from 150 miles up", author:"Start Bootstrap", publication_date: "September 24, 2020"},
                  {id: 2, title: "I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.", subtitle: "A fancy subtitle.", author:"Start Bootstrap",  publication_date: "September 18, 2020"},
                  {id: 3, title: "Science has not yet mastered prophecy.", subtitle: "We predict too much for the next year and yet far too little for the next ten.", author: "Start Bootstrap", publication_date: "August 24, 2020"},
                  {id: 4, title: "Failure is not an option.", subtitle: " Many say exploration is part of our destiny, but it’s actually our duty to future generations.", author: "Start Bootstrap", publication_date: "July 8, 2020"}])
    }, []);    

    return (
        <>
        <Nav />
           <Header imgName="home-bg" title="Clean Blog" subtitle="A Blog Theme by Start Bootstrap"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <PostPreviewList posts={posts} />
                        </div>
                    </div>
                </div>
            <hr />
        <Footer />
       </>
    )
}

