import { useEffect } from "react";

const UseFetchPost = (url, data) => {

  var requestOptions = {
    method: "POST",
    body: data,
    redirect: "follow",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  //   useEffect(()=>{
  //     //  var row = JSON.stringify(data);
  //       var requestOtions={
  //           method:"Post",
  //           rederict:"follow",
  //           body: data,
  //       };
  //    fetch(url,requestOtions)
  //     .then(res => {
  //         if(!res.ok){
  //             throw Error ("couldn't fetch the data for the current resource");
  //         }
  //         return res.json();
  //     })

  //     .catch(err => {
  //         if(err.name==='AbortError'){
  //             console.log('fetched aborted')
  //         }
  //     })

  // return () => abortCont.abort();
  // },[url])
};
export default UseFetchPost;
