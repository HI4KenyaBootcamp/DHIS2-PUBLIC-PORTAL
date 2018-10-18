import React, {Component} from 'react';
import Input from './input';
import HiChart from './Hi';
import Navbar from './Navbar'
import Posts from './test'



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
        
        <Posts/>
        

         {/* <HiChart/> */}
       
            </div>
        )
    }

}

    export default Home;