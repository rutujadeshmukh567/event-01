import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { light } from '@material-ui/core/styles/createPalette';
import { LineWeightTwoTone } from '@material-ui/icons';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  root: {
       '& > *': {
        margin: theme.spacing(1),
         width: '700px',
         left:'auto',
        right:'auto',
        fontColor:'black',

  paper: {
        display: 'flex',
        border: `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
    },
  container: {
       display: 'flex',
       flexWrap: 'wrap',
    },
  textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  divider: {
        margin: theme.spacing(1, 0.5),
    },

    },
  },
}));
export default function BasicTextFields() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  
  return (
 
  <form className={classes.root} noValidate autoComplete="off">
      <div class='container row'>
         <div class="col-md-8">
            <h3 class="createEvent" style={{paddingTop:'15px',paddingBottom:'15px',position:'relative',fontFamily:'Fira Sans',fontWeight:'bold',fontColor:'blue'}}>Create Event</h3>
            <button style={{height:'30px',width:"70px",color:"white",backgroundColor:"#003366",borderRadius:'5px',marginTop:'-60px',position:'absolute',right:'80px',marginRight:'20px',fontWeight:'bolder'}}>Create</button>
            <button style={{height:'30px',width:"70px",backgroundColor:"grey",borderRadius:'5px',marginTop:'-60px',position:'absolute',right:'20px',fontWeight:'bolder'}}>Cancel</button>
         </div>
      </div>
      <hr style={{width:'100%',marginTop:'20px'}}></hr>
      <InputLabel id="demo-simple-select-required-label" style={{marginLeft:'300px',marginTop:'20px'}}>Add Event In*</InputLabel>
        
      <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          onChange={handleChange}
          className={classes.selectEmpty}
          style={{marginLeft:'300px'}}
         
        >
          _<MenuItem value="">
            <em>None</em>
          </MenuItem>
      </Select>
            <br></br>

       {/*--------------upload image part------------------- */}

      <div>
          <input name="upload" type="image" src="./upload.png" style={{height:'110px',width:'120px',marginLeft:'290px',marginBottom:'-30px'}}/>
      </div>
          <br></br>
             <TextField id="standard-basic"style={{marginLeft:'300px',marginTop:'20px'}} label="Title*" />
       
             <InputLabel id="demo-simple-select-required-label" style={{marginLeft:'300px',marginBottom:'-20px',marginTop:'20px'}}>Categories*</InputLabel>
      <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          onChange={handleChange}
          className={classes.selectEmpty}
          style={{marginLeft:'300px'}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
      </Select>
        
        
                <TextField id="standard-basic" label="Short Summary*"style={{marginLeft:'300px',fontFamily:'Fira Sans'}} />
                <InputLabel id="demo-simple-select-required-label" style={{marginLeft:'300px',color:'black'}}>Type: &nbsp;Public </InputLabel>
                <TextField id="standard-basic" style={{marginLeft:'300px',fontFamily:'Fira Sans'}} label="Registeration Site" />
                <h4  style={{ fontWeight:"normal",marginLeft:'300px'}}>Is this a virtual event? &nbsp; &nbsp; Yes   </h4>
        <div style={{marginLeft:'520px',marginTop:'-35px'}} >
       
                <Switch
                  checked={state.checkedB}
                 onChange={handleChange}
                 color="primary"
                 name="checkedB"
                 inputProps={{ 'aria-label': 'primary checkbox' }}
        
      />  
      </div> 
       
                <TextField id="standard-basic" label="Online link" style={{marginLeft:'300px',top:'-20px'}}/>
               <p style={{marginLeft:'300px',marginTop:'20px',color:'grey',marginBottom:'30px'}}>Select Timezone*</p>
      <select className="timeZone" style={{marginLeft:'300px',borderTop:'none',borderLeft:'none',borderRight:'none',marginTop:'20px',color:'grey',marginBottom:'-50px',fontFamily:'Fira Sans'}}>
	               <option timeZoneId="1"   >(GMT+5:30) Pune</option>
	               <option timeZoneId="2"   >(GMT+6:00) Mumbai</option>
	               <option timeZoneId="3"  >(GMT+7:30) Nagpur</option>
	               <option timeZoneId="4"  >(GMT+8:00) Aurangabad</option>
	               <option timeZoneId="5"  >(GMT+9:30) Dhule</option>
	               <option timeZoneId="6"  >(GMT+10:00) Satara</option>
     </select>											
		<div className="startDatePicker"  style={{marginLeft:"150px",position:'relative',top:'50px',left:'150px',fontFamily:'Fira Sans',marginBottom:'25px'}}>
       <TextField
          id="date"
          label="Start Date*"
          type="date"
        
          className={classes.textField}
          InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
    <div className="endDatePicker"  style={{marginLeft:"300px",top:'60px',position:'relative',fontFamily:'Fira Sans'}}>
        <TextField
        id="date"
        label="End Date*"
        type="date"
       
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>

    <div className="startTime" style={{marginLeft:"620px",position:'relative',top:'-75px',fontFamily:'Fira Sans'}}>
            <TextField
                  id="time"
                  label="Start Time*"
                  type="time"
                  defaultValue="09:00"
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
               }}
                   inputProps={{
                   step: 300, // 5 min
                }}
            /> 
      </div>  

      <div className="endTime"style={{marginLeft:"620px",position:'relative',top:'-54px',fontFamily:'Fira Sans'}}>
            <TextField
                  id="time"
                  label="End Time*"
                  type="time"
                  defaultValue="17:00"
                  className={classes.textField}
                      InputLabelProps={{
                     shrink: true,
                  }}
                    inputProps={{
                        step: 300, // 5 min
                   }}
            /> 
      </div>

      {/*----------Textarea starts here--------*/}
           <h3 style={{marginLeft:'300px',marginTop:'-35px',fontWeight:'inherit'}}>Textarea Here :- </h3>
               <textarea id="wmd-input"
                                  name="postText"
                                  class="bodyField"
                                  data-post-type-id="2"
                                  cols="92" rows="15"
                                  tabindex="101"
                                  data-min-length=""
                                  style={{marginLeft:'300px',fontFamily:'Fira Sans',marginBottom:'20px'}}
              >
                </textarea>
       <div>
         <input name="upload" type="image" src="./clickhere.png" style={{height:'200px',width:'700px',marginLeft:'300px',fontFamily:'Fira Sans'}} multiple/>
      </div>
      
        <p style={{color:'grey',fontFamily:'Fira Sans',marginLeft:'400px',marginTop:'50px',fontWeight:'bold'}}> Use option on the top right section of the scrren to save your changes</p>
        <hr style={{width:'100%',marginBottom:'50px',marginTop:'30px'}}></hr>    
    </form>
    
   
  );
}
