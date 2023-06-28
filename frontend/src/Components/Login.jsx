/* eslint-disable eqeqeq */
import  { useState } from 'react'
import { Apis } from '../services/Api'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [msg,setMsg] = useState("");
    const [flag,setFlag] = useState(0)
    const Navigate = useNavigate();
    

    const SubmitForm = (e) =>{
    e.preventDefault()

    const data = {
       email:e.target.email.value,
       password:e.target.password.value
       
    }

    const response = new Apis().Login(data)
    
    response.then((success)=>{
   

        localStorage.setItem("token",success.data.token)
        setMsg(success.data.message)
      
        // eslint-disable-next-line eqeqeq
        if(success.data.status==1){
            e.target.reset()
            setFlag(1)
            Navigate("/blog")
        }else{
            setFlag(0)
            
        }
        setTimeout(() => {
            setMsg("")
            
        }, 3000);

      
        
    }).catch((error)=>{
        // console.log(error)
        setMsg(error.data.message)
      
       
        

    })
   
    }
  return (
    <div className= " w-[600px]   rounded  mx-auto  shadow-xl border-2 p-8 mt-10 ">
        <div className="  w-full">
            <div className=" text-red-500 text-2xl  font-bold text-center">Login</div>
            <div className={`  text-${flag==0?"red":"green"}-500`}>{msg}</div>
            <form onSubmit={SubmitForm} className="min-h-[200px] flex flex-col gap-y-6 pb-4" >
               
                <div className="">
                    <label className="font-bold" htmlFor="email">Email :</label>
                    <input type="email" name="email" placeholder='Enter Your Email' id='email' 
                    className=" outline-none border px-4 shadow py-1 w-full" />
                </div>
              
                <div className="">
                    <label className="font-bold" htmlFor="password">Password :</label>
                    <input type="password" name="password"  placeholder='Enter Your Password' id='password' 
                    className=" outline-none border px-4 shadow py-1 w-full" />
                </div>
            
                <div className="">
                    <button className="px-6 py-2 text-black rounded bg-green-400">Submit</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login
