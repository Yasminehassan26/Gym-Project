export function getProfileInfo(values,userName) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(values);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(values),
      redirect: "follow",
    };

    return fetch("http://localhost:8082/api/user/profile/mena", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
  
  export function getPrograms(values,userName) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(values);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(values),
      redirect: "follow",
    };
  
    return fetch(`http://localhost:8082/api/trainee/follow-up/${userName}`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }

  export function getSession(values,userName) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(values);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(values),
      redirect: "follow",
    };
  
    return fetch(`http://localhost:8082/api/trainee/sessions/${userName}`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }

  export function updateUser(values,userName) {
   var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(values),
          redirect: "follow",
        };

        return fetch(`http://localhost:8082/api/user/update-profile/${userName}`, requestOptions)
          .then((response) => response.json())
          .catch((error) => console.log("error", error));
  }