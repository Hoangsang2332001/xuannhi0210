import React, { Component } from "react";
import {Prompt} from 'react-router-dom';
class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      ischeck: false,
    }
  }

  onClick = (ischeck) =>{
    this.setState({
      ischeck: ischeck,
    })
  }
  render() {
    var {ischeck} =this.state;
    return (
        <div>
          Đây là trang liên hệ <br/>

          
          <button type="button" className="btn btn-info"   onClick={()=>this.onClick(false)}>Cho phép</button> <br/>
          <button type="button" className="btn btn-danger" onClick={()=>this.onClick(true)}>Không cho phép</button>
          
          <Prompt
            when = {ischeck}
            message = {location => (`Bạn có chắc đi đến ${location.pathname}`)}
          />
        </div>
    );
  }
}

export default Contact;
