import { FC, useState } from "react";
import LeadGrid from "../LeadGrid/LeadGrid";
import { 
    Typography, 
    FormGroup, 
    FormControlLabel,
    Switch
 } from "@mui/material";
import { IRow } from "../IApiData/IApiData";

interface MainProps {
    rows: IRow[] | null;
    thirdParty: boolean;
    setRows: any; 
    setThirdParty: any;
}



const Main:FC<MainProps> = (props) => {
    const [ checked, setChecked ] = useState(props.thirdParty);

    const handleChange = () => {
        // Toggles the checked and thirdParty states.
        props.setThirdParty((prevState: boolean) => {
            setChecked(!prevState);
            return !prevState;
        })
    }
    return(
        <div style={{paddingBottom: "30px"}}>
          <Typography style={{textAlign: "center", margin: "70px auto"}} variant="h2" gutterBottom>
            Dashboard
          </Typography>
          { /* Brian TODO: Add a material ui search component here:  */}
          { /* Probably want to use this component: https://mui.com/material-ui/react-autocomplete/#search-input  */}
          { /* Note this component is based on the Autocomplete component and just adds the freeSolo prop  */}

          { /* REQUIREMENTS:  */}
          { /* The search component should look modern and elegant - probably rounded corners with a magnifying glass in the right hand corner.  */}
          { /* The search component requires a YouTube ID to be search for.  */}
          { /* When an ID is entered and the search is triggered, there should be an onSearch method that makes an API call.  */}
          { /* The API call will take the ID as input and return a set of objects. For now we can just make a call to a local api (localhost:8081) that also returns nothing).  */}



        
        </div>
    );
}

export default Main;




// Add later:

{/* { props.rows ? <LeadGrid setRows={props.setRows} rows={props.rows}/> : <h2>No Data Found</h2> } */}
          {/* <FormGroup style={{padding: "20px"}}>
            <FormControlLabel checked={checked} onChange={handleChange} control={<Switch />} label="Use 3rd Party Data." />
          </FormGroup> */}