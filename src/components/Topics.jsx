import React, {useState} from "react"

const Topics = () =>{
    const [allNews, setAllNews] = useState([])

    const handleNews = (event, news) =>{
        const newNews = [...allNews]
        const found = newNews.includes(news)
        if(found){
            const index = newNews.indexOf(news)
            newNews.splice(index, 1);
        }else{
            newNews.push(news)
        }
        setAllNews(newNews)
    }

    return(
    <div>
        <form>
            <div>
                <button type="button" onClick={event =>{handleNews(event, "sports")}}>Sports</button>
                <button type="button" onClick={event =>{handleNews(event, "technology")}}>Technology</button>
                <button type="button" onClick={event =>{handleNews(event, "international")}}>International</button>
                <button type="button" onClick={event =>{handleNews(event, "local")}}>Local</button>
                <button type="button" onClick={event =>{handleNews(event, "politics")}}>Politics</button>
            </div>
        </form>

        <ShowCaseNews chosenNews={allNews}/>
    </div>)
}

const ShowCaseNews = ({chosenNews}) =>{
    return(
        <div>
            {chosenNews.map(item => <div>{item}</div>)}
        </div>
    )
}

export default Topics