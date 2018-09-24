import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select-plus/dist/react-select-plus.css';




class AddSelect extends Component{


  
    state = {
        selectedOption: '',
      }

      //function to handle selected values

      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
      }
   



    render(){
        
        const { name }=this.props; 
        const { data }=this.props; 
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        

       
        
        
        
        return(
         
            <div className="add-form">
            <label for="exampleFormControlInput1">Choose item to add</label>
                {/* <span class="input-group-text" id="inputGroup-sizing-default">{name}</span> */}
                <Select
                    placeholder={name}
                    name={name}
                    value={value}
                    onChange={this.handleChange}
                    options={data}
                />
            </div>
        )
    }
}
export default AddSelect;