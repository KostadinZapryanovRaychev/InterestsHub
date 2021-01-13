import React , {useState} from 'react';





const Contact =()=> {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return (
        <div style={{backgroundImage: "url(https://image.shutterstock.com/z/stock-photo-contact-us-email-contact-call-message-landing-page-background-cover-page-icon-766338316.jpg)", backgroundSize: 'cover' , backgroundPosition: 'center' }}>
     
      <h1 style={{color:"white"}}>Don't hesitate to ask</h1>

     <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={{color:"white"}}>Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email" style={{color:"white"}}>E-mail:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message" style={{color:"white"}}>Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit">{status}</button>
      </form>

      <p>.</p>
      <p>.</p>
     
     

      <h2 style={{color:"white"}}>No, there are no stupid questions , only non asked ! </h2>

      </div>
    );

}
export default Contact;


//   <div  style={{backgroundImage: "url(https://image.shutterstock.com/z/stock-photo-contact-us-email-contact-call-message-landing-page-background-cover-page-icon-766338316.jpg)", backgroundSize: 'cover' , backgroundPosition: 'center' }}>
                              
//     </div>
    
//       );
