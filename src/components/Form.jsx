import React, {useState} from "react"

const Form = () =>{
    const [email, setEmail] = useState("")

    return(
    <div style={{display:"flex"}}>
        <form style={{margin:"auto"}}>
            <h3>Please enter your email below if you are interested in recieving more news</h3>
            <div id="emailZone" class="inputBtn" style={{margin:"auto"}}>
                <input id="emailText" type="text" placeholder="Email"/>
                <button type="button" onClick={() =>{
                    setEmail(document.getElementById("emailText").value)
                    if(document.getElementById("emailText").value !== "")
                        document.getElementById("emailZone").style.display = "none"
                    document.getElementById("emailConfirmation").style.display = "block"
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
                    (<p>If it exists, we have sent a mail to the address: {email}</p>)
                    }
            </div>
        </form >
    </div>
    )
}

export default Form