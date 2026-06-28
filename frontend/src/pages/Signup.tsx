import {  useState } from 'react';
import account from '../config';
import {ID} from 'appwrite'
const Signup = () => {

  const [phoneNumber, setphoneNumber] = useState("");

  //@ts-ignore
  async function   handleSubmit(e) {
    
    e.preventDefault();

    try{
      const otp = account.createPhoneToken({
        //@ts-ignore
         userId: ID.unique(), // Fallback ID if the user is completely new
            phone: phoneNumber 
      })
      console.log(otp);
    }catch(e){
      console.log(e)
    }
    
  }
  return (
    
      <form action="" onSubmit={handleSubmit}
      className=''>
        <h3>Enter your phone number</h3>
        <input className='border rounded' type="tel " placeholder='+123456789' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}/>
        <button type='submit' className='bg-purple-300 border rounded w-14'>Submit</button>
      </form>
    
  );
};

export default Signup;