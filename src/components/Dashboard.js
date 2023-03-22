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
  const [online, setOnline] = React.useState(false);
  const [volume, setVolume] = React.useState(20);
  const [quality, setQuality] = React.useState(2);

  // Create a state variable in the Dashboard component called notifications and make it an empty array. When any other piece of state changes (online, volume, quality) update the notifications array with the corresponding messages.
  const [notifications, setNotifications] = React.useState([]);

  const handleChecked = () => {
    setChecked(!checked);
    handleChecked(!checked);
  };

  const handleOnline = () => {
    setOnline(!online);
    handleOnline(!online);
  };

  const handleVolume = (event, newVolume) => {
    setVolume(newVolume);
    handleVolume(newVolume);
  };

  const handleQuality = (event) => {
    setQuality(event.target.quality);
    handleQuality(event.target.quality);
  };

  const handleNotifications = (notifications) => {
    console.log(notifications);
  };

  React.useEffect(() => {
    if (checked === false) {
      setNotifications([
        ...notifications,
        "Your application is offline. You won't be able to share or stream music to other devices.",
      ]);
    }
    if (volume > 80) {
      setNotifications([
        ...notifications,
        "Listening to music at a high volume could cause long-term hearing loss.",
      ]);
    }
    if (quality === 1) {
      setNotifications([
        ...notifications,
        "Music quality is degraded. Increase quality if your connection allows it.",
      ]);
    }
  }, [checked, volume, quality]);

  React.useEffect(() => {
    handleNotifications(notifications);
  }, [notifications]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
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
              // onClick={handleOnline}
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

              // onChange={handleVolume}
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
              <Select labelId="soundQuality">
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
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>
    </Box>
  );
}
