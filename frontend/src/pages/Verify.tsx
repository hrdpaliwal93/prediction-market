import { useState } from "react";


const Verify = () => {
    const [verifyCode, setverifyCode] = useState("");
  
    function handleSubmit(e){
      e.preventDefault();
      console.log(phoneNumber)
    }

  return (
     <form action="" onSubmit={handleSubmit}
      className=''>
        <h3>verify code</h3>
        <input className='border rounded' type="text"  value={verifyCode} onChange={(e)=>setverifyCode(e.target.value)}/>
        <button type='submit' className='bg-purple-300 border rounded w-14'>Verify</button>
      </form>
    
  );
};

export default Verify;