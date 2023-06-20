import { FC } from "react";
import { 
    Card, 
    CardContent, 
    Typography, 
    Button, 
    CardActions,
    TextField,
    Box
} from '@mui/material';
import { useHistory } from "react-router-dom";

interface LeadDetailsProps {
    location: {
        state: {
            row: {
                id: number; 
                name: string; 
                email: string; 
                phone: string; 
                status: number; 
                notes: string;
            }
        }
    }
}

const LeadDetails:FC<LeadDetailsProps> = (props) => {
    const history = useHistory();
    const row = props.location.state.row; // Retrieve row from Link.

    return(
        <div style={{backgroundColor: "#EAEEF3", padding: "80px"}}>
          <Card sx={{ maxWidth: 650 }} style={{margin: "auto"}} >
            <CardContent>
              <Typography variant="h2" gutterBottom>
                {row.name + " Details"}
              </Typography>
              <hr></hr>
              <Box sx={{width: 550, maxWidth: '80%', margin: "30px 0px"}}>
                <TextField
                  margin="normal"
                  id="filled-multiline-flexible"
                  label="Lead Notes"
                  multiline
                  fullWidth
                  maxRows={5}
                  variant="filled"
                  value={row.notes}
                />
              </Box>
              <Typography variant="h5" gutterBottom>
                {"Status: " + row.status}
              </Typography>
            </CardContent>
            <CardActions style={{display: "block"}}>
              <Button onClick={() => {}}
              variant="outlined"
              style={{display: "block", marginLeft: "9px"}} 
              size="large"
              >
              Phone: {row.phone ? row.phone: "No Number"}
              </Button>
              <Button onClick={() => {}}
              variant="outlined"
              style={{display: "block", marginTop: "30px"}} 
              size="large"
              >
              Email: {row.email ? row.email: "No Email"}
              </Button>
              <Button onClick={() => history.goBack()} 
              variant="contained" 
              style={{display: "block", marginTop: "30px", marginBottom: "20px"}} 
              size="medium">
              Back to Leads
              </Button>
            </CardActions>
          </Card>
        </div>
    );
} 

export default LeadDetails;