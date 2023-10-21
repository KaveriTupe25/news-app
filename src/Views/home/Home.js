import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

//1e845e600d5848c293edaa518e0fa128
export default function Home() {
    const [news, setNews] = useState([])

    const loadNews = async() => {
        const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2023-10-20&to=2023-10-20&sortBy=popularity&apiKey=1e845e600d5848c293edaa518e0fa128")
        console.log(response.data.articles)
    }
    useEffect(() => {
        loadNews()
    }, [])

    return ( <
        div >
        <
        h1 > Home < /h1>  {
        news.map((newsArticle, index) => {

            const { author, title, description, url, urlToImage, publishedAt, content } = newsArticle
            return ( <
                div >
                <
                img src = { urlToImage }
                alt = ""
                className = 'news-article-img' / >
                <
                /div>
            )
        })
    }

    <
    /
    div >
)
}