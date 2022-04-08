import React from "react"
let mydata = {
  firstname: "Emil",
  lastname: "Ghazaryan",
  birthDay: new Date('1996,1,11'),
  gender: "male"
}

export default class Comp1 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
postid: null
    }
  }
  componentDidMount() {
    fetch("http://intern-2022.arpify.com/init", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mydata)
    })
    .then(response => response.json())
    .then(data => this.setState = ({
      postid : data
    }))
    .catch(err => console.log(err))

  }
 
  render() {
    const {postid} = this.state
    return (
      <div>
        <h1>{postid}</h1>
     
      </div>
    )
  }
}
