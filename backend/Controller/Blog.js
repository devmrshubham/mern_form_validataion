const Blog = require("../Model/Blog");


class BlogController {

    Getdata =  (id) =>{
        return new Promise( async (resolve,rejected)=>{
            
            try {

                if(id !== undefined){
                    let data = await Blog.findById({_id:id})
                    resolve({
                        blog:data,
                        status:1
                    })
                }else{
                    let data = await Blog.find()
                    resolve({
                        blog:data,
                        status:1
                    })
                }
                
            } catch (error) {

                rejected({
                    message:"Internal server error",
                    status:0
                })
                
            }
        })
       
    }

    AddData = (data) =>{
        return new Promise((resolve,rejeted)=>{
            try {

                const newBlog = new Blog(
                    {
                        title:data.title,
                        desc:data.desc
                    }
                )

                newBlog.save()
                .then(
                    (success)=>{
                        resolve({
                            message:"Data Added successfully",
                            blog:newBlog,
                            status:1
                        })
                    }
                )
                .catch(
                    (error) =>{
                        resolve({
                            message:"Unable to add data",
                            status:0
                        })
                    }
                )
                
            } catch (error) {

                rejeted({
                    message:error.message,
                    status:0
                })
                
            }
        })
    }

    DeleteData = (id) =>{
        return new Promise( (resolve,rejected)=>{
             try {

                Blog.deleteOne({_id:id})
                .then((success)=>{
                    resolve({
                        message:"data deleted successfully",
                        status:1
                    })
                }).catch((error)=>{
                    resolve({
                        message:"data not deleted",
                        status:0
                    })
                })
                
             } catch (error) {
                 
                rejected({
                    message:"Internal server error",
                    status:0
                })
             }
        })
    }

    UpdateData = (id,data) =>{

        return new Promise((resolve,rejected)=>{

            try {
                Blog.findByIdAndUpdate(id,{...data})
                .then((success)=>{
                    resolve(
                        {
                            message:"Data Updated succesfully",
                            status:1
                        }
                    )
                }).catch((error)=>{
                    rejected(
                        {
                            message:"data not Updated",
                            status:0
                        }
                    )
                })
            } catch (error) {
                
                rejected({
                    message:"Internal server error",
                    status:0
                })
            }
        })

       
    }
  
}

module.exports = { BlogController };
