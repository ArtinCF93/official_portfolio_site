import React, {useRef} from 'react';
import prtImg from '../files/Me_3.jpg'
import emailjs from 'emailjs-com';


class ContactView extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             telephone: '',
             message: '',
        }
    }

    handlenameChange = (event) => { //when you assign a handler to an onchange event, the event itself is passed as a paramter to the handler
        //event.target.value extracts the input element.
        this.setState({
            name: event.target.value
        })
    }

    handleemailChange = (event) => { //when you assign a handler to an onchange event, the event itself is passed as a paramter to the handler
        //event.target.value extracts the input element.
        this.setState({
            email: event.target.value
        })
    }

    handletelChange = (event) => { //when you assign a handler to an onchange event, the event itself is passed as a paramter to the handler
        //event.target.value extracts the input element.
        this.setState({
            telephone: event.target.value
        })
    }

    handlemessChange = (event) => { //when you assign a handler to an onchange event, the event itself is passed as a paramter to the handler
        //event.target.value extracts the input element.
        this.setState({
            message: event.target.value
        })
    }

    sendEmail = (e) => {
        let form = useRef();
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_dysjzjt', form.current, 'user_eV3xUwWIj93WfbDwVx5cv')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    
  render() {

    return(
    <div>
        <div className="container">
            <h1>Contact Me</h1>
            <hr />
            <p>Hard work is a Journey, but worth the Reward. Lets Talk!</p>
            <br /><br />
            <img src={prtImg} alt="Portrait" className="profile_portrait" />
            <br /><br /><br />
            <h3>For Inquiries</h3>
            Email me at<br />
            <a href="mailto:Toojool@gmail.com">Toojool@gmail.com</a>
        </div>
<br />
<br />
<div className="container">
    <form onSubmit={this.sendEmail}>
        <label>Name</label><br />
  <input type="text" value={this.state.name} onChange={this.handlenameChange}/>
<br />
<br />
        <label>Email</label><br />
<input type="email" value={this.state.email} onChange={this.handleemailChange} required />
<br />
<br />
        <label>Telephone</label><br />
        <input type="tel" pattern="\d{3}\d{3}\d{4}" value={this.state.telephone} onChange={this.handletelChange} required />
<br />
<br />
        <label>Message</label><br />
        <textarea maxLength="300" value={this.state.message} onChange={this.handlemessChange}></textarea>
<br />
<br />
        <input type="submit" value="Send message" />
      </form>
</div>
    </div>
    );
  }
}

export default ContactView