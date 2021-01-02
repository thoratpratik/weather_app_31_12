import React,{ Component } from "react";
import { TextField } from '@material-ui/core'; 

class input extends Component {
    render() {
      return (
        <div>
              <TextField id="standard-secondary" label="Standard secondary" color="secondary" />

        </div>
      );
    }
  }

export default input;