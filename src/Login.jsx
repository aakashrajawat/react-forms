import React,{useState} from 'react';
import './Login.css'


function App() {
  const [first_name,setName] = useState("");
  const [inputs,setInputs] = useState({
    last_name:"",
    email:""

  });
  
  //Only for first_name
  function handleChange(event){
      setName(event.target.value);
  }

  function handleSubmit(event){
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
    event.preventDefault();
    console.log(inputs);
  }
    return(
        
        <div className='signup-form'>
          
        <form className='form' onSubmit={handleSubmit}>
          <h2>Welcome {first_name} {inputs.last_name}</h2>
          
            <div className='form-group'>
              <div className='row'>
                  <div className='col first-child'>
                    <input onChange={handleChange} type="text" class="form-control " name="first_name" placeholder="First Name" required="required" ></input>
                  </div>
                  <div className='col last-child'>
                  <input onChange={handleSubmit} type="text" class="form-control " name="last_name" placeholder="Last Name" required="required" value={inputs.last_name}></input>
                  </div>
              </div>
            </div>
            <div className='form-group'>
            <input onChange={handleSubmit} type="email" class="form-control" name="email" placeholder="Email" required="required" value={inputs.email}></input>
            </div>
            <p className='confirmation'>Email Confirmation will be sent to {inputs.email}</p>
            <div className='form-group'>
            <input type="password" class="form-control" name="email" placeholder="Password" required="required"></input>
            </div>

           

            <div className='form-group'>
              <label>
              <input type="checkbox" required="required"></input>I accept the <a href = 'index'> terms & conditions</a>
              </label>
            </div>
            
            <div className='form-group'>
              <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
            </div>

        </form>
        </div>
    );

}

export default App;