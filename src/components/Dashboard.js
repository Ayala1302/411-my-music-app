import * as React from "react";
import "../App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function Dashboard() {
  const [checked, setChecked] = React.useState(true);
  const [volume, setVolume] = React.useState(20);
  const [quality, setQuality] = React.useState(2);

  const [notifications] = React.useState([]);

  const handleChecked = () => {
    setChecked(!checked);
    handleChecked(!checked);
  };

  const handleNotifications = (notifications) => {
    console.log(notifications);
  };

  React.useEffect(() => {
    handleNotifications(notifications);
  }, [notifications]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClick = (event) => {
    event.target.value > 3 || event.target.value === 0 ? setVolume(event.target.value) : setQuality(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="mainbox">
      <AppBar position="static" sx={{ backgroundColor: "rgb(79, 68, 245)" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>
      <h1>Welcome User!</h1>
      <div className="boxes">

        <Card>
          <Box className="box">
            <h4>Online Mode</h4>
            <p> Is this application connect to internet?</p>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
        </Card>

        <Card>
          <Box className="box">
            <h4>Master Volume</h4>
            <p> Overrides all other sound settings in this application</p>
            <Slider
              aria-label="Temperature"
              defaultValue={20}
              valueLabelDisplay="auto"
              step={10}
              marks={true}
              min={0}
              max={100}
              onChange={handleClick}
            />
          </Box>
        </Card>

        <Card>
          <Box className="box">
            <h4>Sound Quality</h4>
            <p>
              Manually control the music quality in event of poor connection
            </p>
            <FormControl fullWidth>
              <InputLabel style={{ marginBottom: "50%" }}> Quality </InputLabel>
              <Select labelId="soundQuality" onChange={handleClick}>
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Normal</MenuItem>
                <MenuItem value={3}>High</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Card>
      </div>

      <div className="notifications">
        <h3>Notifications</h3>
        <p>{volume >= 80 && "Listening to music at a high volume could cause long-term hearing loss."}</p>
        <p>{checked === false && "Your application is offline. You won't be able to share or stream music to other devices."}</p>
        <p>{quality === 1 && "Music quality is degraded. Increase quality if your connection allows it."}</p>
      </div>
    </Box>
  );
}
