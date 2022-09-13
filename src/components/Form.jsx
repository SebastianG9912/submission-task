import React, {useState} from "react"

const Form = () =>{
    const [email, setEmail] = useState("")
    
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
        </form >
    </div>
    )
}



export default Form