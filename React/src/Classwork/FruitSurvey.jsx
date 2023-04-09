import React, {Component} from "react";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
const Fruit = [{label:"Apple"},{label:"Banana"},{label:"Cherry"},{label:"Durian"},{label:"Elderberry"}];

function Submit()
{
    const name=document.getElementById("outlined-basic").value
    const fruit=document.getElementById("combo-box-demo").value
    alert("Hello "+name+",!Your favourite fruit is "+fruit+".")
}

function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      data-testid="autocomplete"
      id="combo-box-demo"
      options={Fruit}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose a Fruit" />}
    />
  );
}
export class FruitSurvey extends Component {
    render()
    {
        return (
        <div>
            <center>
            <br></br>
            <TextField id="outlined-basic" label="Name" variant="outlined" data-testid="name"/>     
            <br></br> 
            <br></br>
            <ComboBox/>    
            <br></br> 
            <br></br>
            <Button variant="contained" data-testid="button" onClick={Submit}>SUBMIT</Button>
        </center>
        </div>
        );
    }
};

export default FruitSurvey;