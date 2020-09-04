import React, { Component } from 'react';

class formHandle extends Component {
  constructor () {
    super()

    this.state = {
      firstname: '',
      lastname: '',
      name: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.setState({
      name: `${this.state.firstname} ${this.state.lastname}`
    })

    this.state.firstname = ''
    this.state.lastname = ''
  }
  
  render(){
    const {name} = this.state
    return(
      <div className="container mt-4">   
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Learn React</div>
              <div className="card-body">
                <form onSubmit={this.submitHandler}>
                  <div className="mb-4">
                    <label htmlFor="firstname" className="forn-label mb-2">Firstname</label>

                    <input type="text" name="firstname" id="firstname" className="form-control" value={this.state.firstname} onChange={this.changeHandler} />

                    <label htmlFor="lastname" className="forn-label mb-2">Lastname</label>

                    <input type="text" name="lastname" id="lastname" className="form-control" value={this.state.lastname} onChange={this.changeHandler} />

                  </div>

                  <button type="submit" className="btn btn-primary btn-block">Show</button>
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
}

export default formHandle;