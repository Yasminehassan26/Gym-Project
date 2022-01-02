import React  from 'react';

function Cards({item:{firstName,lastName, email, id}}) {
    return (
      <div className="conatiner">
        <div className="col-sm-4 my-2" >
      <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
        <div className="card-body">
        <h5 className="card-title text-center h2">first : {firstName}</h5>
        <h5 className="card-title text-center h2">last : {lastName}</h5>
          
          <h6 className="card-subtitle mb-2 text-muted text-center">email :{email}</h6>
          <p className="card-text">{id}</p>
        </div>
      </div>
    </div>
    </div>
    );
    }
  export default Cards;