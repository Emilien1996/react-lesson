import React,{useState} from "react";
import SignUpinfo from "./signup";
import PersonalInfo from "./personal";
import join from "./join.png"
export default function Form (){
    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo/>
        }else if (page === 1) {
            return <SignUpinfo/>
        }else {
            return <h1>Hello</h1>
        }
    }
    const [page,setPage] = useState(0)
    const FormTitles = ["Sign up","Personal info"]
    return (
        <div className="form">
            <div className="form-conatiner"></div>
            <div className="header">
                <h1>{FormTitles[page]}</h1>
                <img src={join} alt="join"/>
            </div>
            <div className="body">
                {PageDisplay()}
            </div>
            <div className="footer">
                <button className="button"
               hidden = {page === FormTitles.length - 1}
                 onClick={()=> {
                    setPage((currPage)=>currPage + 1)}}>Sign in</button>
            </div>
        </div>
    )
}