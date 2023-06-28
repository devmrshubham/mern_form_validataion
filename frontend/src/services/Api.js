/* eslint-disable eqeqeq */
import axios from "axios"
const Url = "http://localhost:5000"




class Apis{

    registaration = (data) => {

        return new Promise((resolve,rejected)=>{

            axios.post(`${Url}/user`,{...data})
            .then((success)=>{
                resolve(
                    success
                )
            }).catch((error)=>{
                rejected(error.message)
            })

        })

    }

    Login = (data) => {

        return new Promise(async(resolve,rejected)=>{

             await axios.post(`${Url}/user/login`,{...data})
            .then((success)=>{
                resolve(
                    success
                )
            }).catch((error)=>{
                rejected(error.message)
            })

        })

    }

    

    addBlog = (data,token) => {
            
            return new Promise((resolve,rejected)=>{

              axios.post(`${Url}/blog`,{...data,},{headers:{Authorization:token}})
            .then((success)=>{
                resolve(
                    success
                )
            }).catch((error)=>{
                rejected(error.message)
            })

        })

    }


}

export {Apis}