import React, {Component} from 'react';
import Input from './input';
import HiChart from './Hi';
import Navbar from './Navbar'



class Home extends Component{
    constructor(){
        super();
        this.state={
          
        }
      }
      
     
    render(){
        return(
            <div>
        <Navbar/>        

        <Input/>
        

        

         {/* <HiChart/> */}
       
            </div>
        )
    }

}

    export default Home;