import React, {useState} from "react"

const Form = () =>{
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return(
    <div className="card-inset">
        <form style={{margin:"auto"}}>
            <h3>Please enter your email below if you are interested in recieving more news</h3>
            <div id="textZone" style={{display:"flex", marginBottom:"20px"}}>
                <textarea id="additionalText" type="text" placeholder="You may include a message with your registration request" style={
                        {
                        margin:"auto",
                        width:"300px",
                        height:"80px",
                        border:"1px solid rgb(116, 116, 116)",
                        borderRadius:"5px"
                        }
                    }
                />
            </div>
            <div id="emailZone" className="inputBtn" style={{margin:"auto"}}>
                <input id="emailText" type="text" placeholder="Email"/>
                <button type="button" onClick={() =>{
                    if(document.getElementById("emailText").value !== ""){
                        setEmail(document.getElementById("emailText").value)
                        setMessage(document.getElementById("additionalText").value)
                        document.getElementById("emailZone").style.display = "none"
                        document.getElementById("textZone").style.display = "none"
                    }
                    document.getElementById("emailConfirmation").style.display = "flex"
                    document.getElementById("emailConfirmation").style.flexDirection = "row"
                    }}>Send
                </button>
            </div>
            <div id="emailConfirmation" style={
                {display: "none",
                margin:"auto",
                fontWeight:"600",
                width:"fit-content" }
            }>
                    {email === "" ? 
                    (<p>No email address entered</p>) :
                    (<span style={{maxWidth:"400px"}}>
                        <p>If it exists, we have sent a mail to the address: "{email}"</p>
                        {message !== "" && 
                        <p style={{fontWeight:"normal", wordWrap:"break-word"}}>And we have recieved your message: "{message}"</p>
                        }
                    </span>)
                    }
                    
            </div>
        </form >
    </div>
    )
}

export default Form