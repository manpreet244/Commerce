import React, {useState} from 'react';
import './Contact.css';
import Navbar from '../components/Navbar';
import { db } from '../firebase';
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('contacts').add({
            name: name,
            email: email,
            message: message, 
        })
            .then(() => {
                alert("Thanks for contacting us!");
            })
            .catch(error => {
                alert(error.message);
            });
        setName("");
        setEmail("");
        setEmail("");
    }
    
    
    
    
    
    
    
    
    
    

    return (
        <div >
            <Navbar/>
            <form  className="form"onSubmit={handleSubmit}>
                <h1 className="text-4xl  text-purple-800">Contact Us</h1>
                <label >
                    Name
                </label>
                <input placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <label>
                    Email
                    
                </label>
                <input placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label>
                    Message
                </label>
                <textarea placeholder="Write Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}></textarea>
  <center>   <button type="submit">SUBMIT</button></center>
            </form>
            
        </div>
     
    );
}






export default Contact;




