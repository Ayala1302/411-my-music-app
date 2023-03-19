import * as React from "react";
// import'./App.css';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
    return `${value}°C`;
  }

export default function Dashboard() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgb(79, 68, 245)" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>
      <h1>Welcome User!</h1>
      <div>
        <h4>Online Mode</h4>
        <p> Is this application connect to internet?</p>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <div>
        <h4>Master Volume</h4>
        <p> Overrides all other sound settings in this application</p>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks={true}
            min={0}
            max={100}
          />
          <Slider
            defaultValue={30}
            step={10}
            marks
            min={0}
            max={100}
            disabled
          />
        </Box>
      </div>
      <div>
        <h4>Sound Quality</h4>
        <p>Manually control the music quality in event of poor connection</p>
      </div>
    </Box>
  );
}
