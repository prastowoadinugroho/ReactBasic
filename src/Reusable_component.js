import React from 'react';
import Card from './component/card';

function App(){
  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card content = {{ 
              imageUrl: "http://placekitten.com/g/300/200",
              title: "First Post",
              published: "06 Feb 2020"
             }}
            />
          </div>
          <div className="col-md-4">
            <Card content = {{ 
              imageUrl: "http://placekitten.com/300/200",
              title: "First Post",
              published: "06 Feb 2020"
             }}
            />
          </div>
          {/* <div className="col-md-4">
            <Card
              imageUrl="http://placekitten.com/300/200"
              title="Second Post"
              published="07 Feb 2020"
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App 