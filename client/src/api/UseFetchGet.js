// import{useState,useEffect}from 'react';

// const useFetchGet =(url,id)=>{
// const abortCont = new AbortController();
// const [blogs, setBlogs] = useState(null);
// const[isPending,setIsPending]=useState(true);
// const[error,setError]=useState(null);

//   useEffect(()=>{
//       requestOtions={
//           method:"GEt",
//           rederict:"follow",
//           body:JSON.stringfy(id)
//       };
//    fetch(url,requestOtions)
//     .then(res => {
//         if(!res.ok){
//             throw Error ("couldn't fetch the data for the current resource");
//         }
//         return res.json();
//     })
//     .then(data =>{
//         setIsPending(false)
//         setBlogs(data)
//         setError(null);
//     })
//     .catch(err => {
//         if(err.name==='AbortError'){
//             console.log('fetched aborted')
//         }else{
//         setIsPending(false);
//         setError(err.message);}
//     })

// return () => abortCont.abort();
// },[url])
// return {blogs,isPending,error};
// }
// export default useFetch;

export function SignIn() {
    var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
    
      fetch(
        "http://localhost:8081/api/auth/get-user-question/noha"
      )
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.log("error", error));
  }
