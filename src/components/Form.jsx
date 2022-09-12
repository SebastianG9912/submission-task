import React, {useState} from "react"

const Form = () =>{
    const [email, setEmail] = useState("")
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
    <div style={{
        display:"flex"
    }}>

        <form>
            <h4>Please enter your email below</h4>
            <div id="emailZone">
                <input id="emailText" type="text" placeholder="Email"/>
                <button type="button" onClick={() =>{
                    setEmail(document.getElementById("emailText").value)
                    document.getElementById("emailText").value = ""
                    document.getElementById("emailZone").hidden = true
                    document.getElementById("emailConfirmation").style.display = "block"
                    }}>Send
                </button>
            </div>
            <div id="emailConfirmation" style={{display: "none"}}>
                    We have sent a mail to the address: {email}
            </div>
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