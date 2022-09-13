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
        <div style={
            {width:"100%", 
            minHeight:"80px", 
            backgroundColor:"rgb(180, 180, 180)"}
        }>
            <form class="newsForm">
                <button type="button" onClick={event =>{handleNews(event, "Sports")}} class="color-sports">Sports</button>
                <button type="button" onClick={event =>{handleNews(event, "Technology")}} class="color-technology">Technology</button>
                <button type="button" onClick={event =>{handleNews(event, "International")}} class="color-international">International</button>
                <button type="button" onClick={event =>{handleNews(event, "Local")}} class="color-local">Local</button>
                <button type="button" onClick={event =>{handleNews(event, "Politics")}} class="color-politics">Politics</button>
            </form>
        </div>

        <ShowCaseNews chosenNews={allNews}/>
    </div>)
}

const ShowCaseNews = ({chosenNews}) =>{
    return(
        <div class="newsCards">
            {chosenNews.map(item =>{
                let className = "color-"
                let content = ""
                switch(item){
                    case "Sports":
                    className += "sports"
                    content = "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam consequat ipsum enim, eu tempor eros tempor imperdiet."
                    break

                    case "Technology":
                        className += "technology"
                        content = "Etiam tincidunt lacinia ex, vel tempus libero tempor vitae. Cras sapien leo, malesuada mollis massa non, gravida ultrices leo. Suspendisse eu arcu accumsan, placerat felis quis, vehicula justo. Nulla sit amet elementum purus. Donec varius ac lectus quis pellentesque. Morbi sed ante vel nulla aliquet mollis et in magna. Nulla massa ex, semper ac scelerisque at, sollicitudin nec nibh."
                        break

                    case "International":
                    className += "international"
                    content = "Phasellus elementum augue congue, faucibus nunc eget, convallis magna."
                    break

                    case "Local":
                    className += "local"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus risus et metus vestibulum, in suscipit lorem venenatis."
                    break

                    case "Politics":
                    className += "politics"
                    content = "Sed ultricies varius metus, sed molestie est molestie sit amet."
                    break

                    default:
                        className = ""
                    break
                }
                
                return(
                    <div class={className}>
                        <h3>{item}</h3>
                        <p>
                            {content}
                        </p>
                    </div>
                ) 
                })}
        </div>
    )
}

export default Topics