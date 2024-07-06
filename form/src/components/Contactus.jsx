import React, { useState } from 'react'

export default function Contactus() {
    //javascript
    //use state for  two checkboxes to check they have been checked
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
// function to handle check event
const handleChange=(event)=>{
// name is used to extract the value of the name of the clicked checkbox.by destructuring the element
    const { name } = event.target;
    setSelectedCheckbox(name);
  };
  //usestate for other form inputs
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')
  //since its just one  just toogle between true and false
  const [accept, setAccept] = useState(false)


  //handle submit to the local storage and creating a variable to handle all state variables
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstname,
      lastname,
      email,
      accept,
      message,
      selectedCheckbox
    };
    //json to parse in to string
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Form Data Saved:', formData);
  };

  
  

  return (
    <form className='Container' method='post'>
        {/*h2heading */}
       <div className='h2div'>
          <h2>Contact us</h2>
       </div>
       {/*name inputs */}
       <div className='namediv'>
           <div className='firstname'>
           <label htmlFor="fname">FirstName*</label>
          <input className='name' type="text"  required id='fname' min='4' placeholder='Enter your first name' value={firstname} onChange={(e)=>setfirstname(e.target.value)} />
          </div>
          <div className='lastname'>
        <label htmlFor="Lname">LastName*</label>
          <input className='name' type="text" required id='Lname' min='4' placeholder='Enter ur last name'value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
        </div>
       </div>
       {/*email input */}
       <div className='email'>
        <label htmlFor="email">EmailAdress</label>
        <input className='emailinput' type="email" id='email' placeholder='johndoe@gmail.com' value={email} onChange={(e)=>setemail(e.target.value)} />
       </div>
       {/*a query checkbox divs */}
            <div class="form-check">
                <h6>Query Type*</h6>
                <div className='checkme'>
                <div className='checkenclose'>
                {/*using name properties to track  which box has been checked by equating it to the selecter function  handle change to handle  the event */}
              <input type="checkbox" name='checkbox1' className='checkbox1' checked={selectedCheckbox==='checkbox1'} onChange={handleChange}/>
              <label>General Enquiry</label>
              </div> 
              <div className='checkenclose'>
              <input type="checkbox" name='checkbox2' className='checkbox2' checked={selectedCheckbox==='checkbox2'}onChange={handleChange} />
              <label>Support Request</label>
              </div>
              </div> 
            </div>
            {/*textbox that acccepts user suggestions */}
                <div className='message'>
                    <label htmlFor="message"className='messagelabel' >Message*</label>
                    <textarea name="message" id="message" value={message} onChange={(e)=>setmessage(e.target.value)} ></textarea>
                </div>
                {/*terms and conditions checkbox */}
                <div className='termsandconditions'>
                    <input type="checkbox"checked={accept}  onChange={(e)=>setAccept(e.target.checked)}/>
                    <label htmlFor="terms" className='consent'>I consent to being contacted by the team*</label>
                </div>
                {/*a submit button to submit the contact form */}
                <div className='submitbtn'>
                    <button type='submit'onClick ={handleSubmit}>Submit</button>
                </div>
     
    </form>
  );
};
