import React, {useState} from "react"

const Form = ({allNews}) =>{
    return(
    <div style={{
        display:"flex"
    }}>
        <form>
            <h4>Please enter your email below</h4>
            <input type="text" placeholder="Email"/>
            <button>Send</button>
        </form>

        <ShowCaseNews chosenNews={[]}/>
    </div>
    )
}

const ShowCaseNews = ({chosenNews}) =>{
    return(
        <div>Pictures of the interesting news</div>
        
    )
}

export default Form