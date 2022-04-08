import React from "react"
export default function SignUpinfo(){
const handleSubmit = (e) => {
    e.preventDefault()
fetch('http://intern-2022.arpify.com/form',{
    method: 'POST',
    headers: {"Content-Type": "multipart/form-data"}
})
.catch(err => console.log(err))
}


return <form className="registrform" onSubmit={handleSubmit}>
        <legend>Sign up</legend>
        <label>Firstname <input type="text" id="firstname" placeholder="firstname"/></label><br></br>
<label>Lastname <input type="text" placeholder="lastname"/></label><br/>
<label>Birthday <input type="date" placeholder="BirtDay"/></label><br/>
<label>Gender <select>  
    <option>Male</option>
    <option>Female</option> 
</select>
</label> <br/>
<label>Add photo <input type="file"></input></label><br/>
<label>Add file <input type="file"></input></label><br/>
<button className="sub" type="submit" >Sign in</button>
    </form>
}