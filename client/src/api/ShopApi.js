export function sendCart(values,userName) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(values);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(values),
      redirect: "follow",
    };
  
    return fetch(`http://localhost:8082/api/shop/confirmOrder/${userName}`, requestOptions)
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
  }