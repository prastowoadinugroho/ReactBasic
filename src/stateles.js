import React, { useState } from 'react';

function App(){
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [name, setName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    setName(`${firstname} ${lastname}`)
    setFirstname('')
    setLastname('')
  }

  return (
    <div className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card-header">Learn React Function</div>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="mb-4">
                  <label htmlFor="firstname" className="form-label">Firstname</label>

                  <input type="text" name="firstname" id="firstname" className="form-control"
                  value={firstname} onChange={(e) => setFirstname (e.target.value)}/>
                </div>
                <div className="mb-4">
                  <label htmlFor="lastname" className="form-label">Lastname</label>

                  <input type="text" name="lastname" id="lastname" className="form-control" value={lastname} onChange={(e) => setLastname (e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-block btn-primary">Show</button>
              </form>
            </div>
            <div className="card-footer">
              My Name is { name ? name : '...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App