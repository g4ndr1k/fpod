import { useState, useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Divider  } from '@mui/material';
import darkLightModeContext from './components/context/darklightmode-context';
import UserDataInput from './components/Pages/UserData';
import FourPillarsOfDestinyMain from './components/Pages/FourPillarsOfDestiny';

function App() {
  const [mode, setMode] = useState('light');
  const darkLightMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  const [genderValue, setGenderValue] = useState('F');
  const [dateValue, setDateValue] = useState('1976-05-31');
  const [timeValue, setTimeValue] = useState('10:10');

  const updateHandler = (gender, date, time) => {
    setGenderValue(gender);
    setDateValue(date);
    setTimeValue(time);
    console.log('app comp updated => ', genderValue, dateValue, timeValue);
  };
  return (
    <darkLightModeContext.Provider value={darkLightMode} >
      <ThemeProvider theme={theme} >
      <CssBaseline />
      <Divider variant="middle" textAlign="left">
          Personal Data 
        </Divider> 
      <UserDataInput update={updateHandler} />
      <FourPillarsOfDestinyMain gender={genderValue} date={dateValue} time={timeValue} />
      </ThemeProvider>
    </darkLightModeContext.Provider>
  );
}

export default App;
