// for class based 
// import React, { Component } from 'react'
// import Spiner from './Spiner.gif'

// export class Spinner extends Component {
//   static propTypes = {

//   }

//   render() {
//     return (
//       <div className='text-center'> 
//         <img src={Spiner} alt="loading" />
        
//       </div>
//     )
//   }
// }

// export default Spinner




// function based component
import React from 'react'
import Spiner from './Spiner.gif'

export const Spinner = ()=> {
    return (
      <div className='text-center'> 
        <img src={Spiner} alt="loading" />
        
      </div>
    )
}
export default Spinner;