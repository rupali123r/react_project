import { useState } from "react";

function List() {


  const [firstName, setFirstName] = useState("rohit");
 
  
  

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }



  function hello() {
    if (firstName == '') {
      alert('please enter number');
    }

   
  }

  return (
    <>

      <div className="container-fluid mt-5 p-5 bg-white">

        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">

              <div className="col-lg-12 mt-3">
                <label for="exampleInputEmail1" class="form-label">Enter your fullname</label><br></br>
                <input type="text" name="firstName" onChange={handleFirstNameChange} value={firstName}></input>
              </div>

              

              <button type="button" className="mt-4 p-1 btn btn-success" onClick={hello}>Click Here</button>

              {/* {firstName} */}
              {/* {lastname} */}

            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

    </>

  );
}
export default List;