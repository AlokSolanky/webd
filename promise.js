const blogs =[];

//Do not touch these functions below at all
function create1stBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG1'});
            resolve(blogs);
        }, 3000)
    }) 
}

//Do not touch these functions below at all
function create2ndBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG2'});
            resolve(blogs)
        }, 2000)
    }) 
}


function deleteBlog(){
   //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
   //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
   
   const pr = new Promise(function(res,rej){
       if(blogs.length<=0)
       {
           rej("ERROR");
       }
       else{
           let bl = blogs[blogs.length-1];
           blogs.pop();
           res(bl);
       }
   });
   return pr;
}

function updateLastUserActivityTime(blogs)
{
    const pr = new Promise((res,rej)=>
    {
        setTimeout(function(){
            let blog = blogs[blogs.length-1];
            blog.lastTime = new Date();
            res(blog)
        },1000);
    })
    return pr;
}
//Call the function in the right way so that we can get the desired output
// create1stBlog()
//     create2ndBlog()
//         deleteBlog()
//              deleteBlog()
//                  deleteBlog()
                 
                 
                 
create1stBlog().then((blogs)=>{
    return updateLastUserActivityTime(blogs)
}).then(()=>
{
    return create2ndBlog();
}).then((blogs)=>
{
    return updateLastUserActivityTime(blogs)
})
.then(()=>
{
    return deleteBlog();
}).
then((el)=>
{
    console.log(el.lastTime);
    return deleteBlog();
}).then((el)=>
{
    console.log(el.lastTime);
    return deleteBlog();
}).catch((err)=>
{
    console.log(err);
})




