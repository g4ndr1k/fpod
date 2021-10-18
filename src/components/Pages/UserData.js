import { useState, useContext } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Select,
  MenuItem,
  useTheme,
  IconButton,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import darkLightModeContext from '../context/darklightmode-context';

const UserDataInput = (props) => {
  const theme = useTheme();
  const darklightmode = useContext(darkLightModeContext);
  const [genderValue, setGenderValue] = useState('F');
  const [dateValue, setDateValue] = useState('1976-05-31');
  const [timeValue, setTimeValue] = useState('10:10');

  const onGenderSelectHandler = (event) => {
    setGenderValue(event.target.value);
  };
  const onDateSelectHandler = (event) => {
    setDateValue(event.target.value);
  };

  const onTimeSelectHandler = (event) => {
    setTimeValue(event.target.value);
  };

  const onUpdateButtonHandler = () => {
    props.update(genderValue, dateValue, timeValue);
  };

  return (
    <Card width="100%">
      <CardContent>
        <Select
          value={genderValue}
          label="Gender"
          onChange={onGenderSelectHandler}
          size="small"
        >
          <MenuItem value={'F'}>Female</MenuItem>
          <MenuItem value={'M'}>Male</MenuItem>
        </Select>
        <TextField
          label="Birthdate"
          type="date"
          defaultValue={dateValue}
          onChange={onDateSelectHandler}
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Birthtime"
          type="time"
          defaultValue={timeValue}
          onChange={onTimeSelectHandler}
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          // 5 minutes
          inputProps={{
            step: 300,
          }}
        />
        <IconButton
          sx={{ ml: 1 }}
          onClick={darklightmode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness4Icon />
          ) : (
            <Brightness7Icon />
          )}
        </IconButton>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={onUpdateButtonHandler}
        >
          Update
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserDataInput;

/* <Select
          value={timeZoneValue}
          label="Time Zone"
          onChange={onTimeZoneSelectHandler}
          size="small"
        >
          <MenuItem value={-8}>(UTC-08:00) Pacific Time </MenuItem>
          <MenuItem value={-7}>(UTC-07:00) Mountain Time </MenuItem>
          <MenuItem value={-8}>(UTC-06:00) Central Time </MenuItem>
          <MenuItem value={6}>(UTC+06:00) Dhaka </MenuItem>
          <MenuItem value={7}>(UTC+07:00) Jakarta</MenuItem>
          <MenuItem value={8}>(UTC+08:00) Singapore </MenuItem>
    </Select> */
