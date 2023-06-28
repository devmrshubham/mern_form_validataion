/* eslint-disable eqeqeq */
import  { useEffect, useState } from 'react'
import { Apis } from '../services/Api'


const AddBlog = () => {

    const [msg,setMsg] = useState("");
    const [flag,setFlag] = useState(0)
    const [token,setToken] = useState("")
   
    

    const SubmitForm = (e) =>{
    e.preventDefault()

   
    const data = {
       title:e.target.title.value,
       desc:e.target.desc.value
       
    }

    const response = new Apis().addBlog(data ,token)
    
    response.then((success)=>{
        // console.log(success)
        setMsg(success.data.message)
      
        // eslint-disable-next-line eqeqeq
        if(success.data.status==1){
            e.target.reset()
            setFlag(1)
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

    useEffect(()=>{

        let token = localStorage.getItem("token")
        if(token==undefined){
            token=""
        }

        setToken(token)


    },[])

    
    

  return (
    <div className= " w-[600px]   rounded  mx-auto  shadow-xl border-2 p-8 mt-10 ">
        <div className="  w-full">
            <div className=" text-red-500 text-2xl  font-bold text-center">Add Blog </div>
            <div className={`  text-${flag==0?"red":"green"}-500`}>{msg}</div>
            <form onSubmit={SubmitForm} className="min-h-[200px] flex flex-col gap-y-6 pb-4" >
               
                <div className="">
                    <label className="font-bold" htmlFor="title">Title :</label>
                    <input type="text" name="title" placeholder='Enter Your title' id='title' 
                    className=" outline-none border px-4 shadow py-1 w-full" />
                </div>
              
                <div className="">
                    <label className="font-bold" htmlFor="desc">Description :</label>
                    <textarea className=" w-[100%] min-h-[250px] outline-none border p-4  max-h-[350px] resize-y " name="desc" id="desc"></textarea>
                </div>
            
                <div className="">
                    <button className="px-6 py-2 text-black rounded bg-green-400">Submit</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default AddBlog
