import React, {useState} from "react"


//const allNews = ["sports", "technology", "international", "local", "politics"]



const Form = () =>{
    const [name, setName] = useState("")
    const [allNews, setAllNews] = useState([])

    const handleNews = (event, news) =>{
        const newNews = [...allNews]
        const found = newNews.includes(news)
        console.log(found)
        console.log(allNews)
        if(found){
            const index = newNews.indexOf(news)
            newNews.splice(index, 1);
        }else{
            newNews.push(news)
        }
        console.log(allNews)
        setAllNews(newNews)
    }

    return(
    <div style={{
        display:"flex"
    }}>

        <form>
            <h4>Please enter your email below</h4>
            <input type="text" placeholder="Email"/>
            <button type="button">Send</button>
            <div>
                <button type="button" onClick={event =>{handleNews(event, "sports")}}>Sports</button>
                <button type="button" onClick={event =>{handleNews(event, "technology")}}>Technology</button>
                <button type="button" onClick={event =>{handleNews(event, "international")}}>International</button>
                <button type="button" onClick={event =>{handleNews(event, "local")}}>Local</button>
                <button type="button" onClick={event =>{handleNews(event, "politics")}}>Politics</button>
            </div>


        </form>

        <ShowCaseNews chosenNews={allNews}/>
    </div>
    )
}

const ShowCaseNews = ({chosenNews}) =>{
    return(
        <div>
            {chosenNews.map(item => <div>{item}</div>)}
        </div>
    )
}

export default Form