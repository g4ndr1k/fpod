import { Card, CardContent, Divider } from '@mui/material';
import MainTable from '../Table/MainTable';
import TenYearPillarTable from '../Table/TenYearPillarTable';
import FinancialAndLuckTable from '../Table/FinancialAndLuckTable';
import HundredYearPillarTable from '../Table/HundredYearPillarTable';

const FourPillarsOfDestinyMain = (props) => {
  const gender = props.gender;
  const userDateData = new Date(props.date + ' ' + props.time);
  const timeZone = 7;
  
  return (
    <Card>
      <CardContent>
        <Divider variant="middle" textAlign="left">
          Four Pillars of Destiny
        </Divider>
        <MainTable
          gender={gender}
          userDateData={userDateData}
          timeZone={timeZone}
        />
      </CardContent>
      <CardContent>
        <Divider variant="middle" textAlign="left">
          Ten Year Pillars of Destiny
        </Divider>
        <TenYearPillarTable
          gender={gender}
          userDateData={userDateData}
          timeZone={timeZone}
        />
      </CardContent>
      <CardContent>
        <Divider variant="middle" textAlign="left">
          Financial and Luck
        </Divider>
        <FinancialAndLuckTable
          gender={gender}
          userDateData={userDateData}
          timeZone={timeZone}
        />
      </CardContent>
      <CardContent>
        <Divider variant="middle" textAlign="left">
          Flower of Romance, Travelling Star & Luck/Calamity
        </Divider>
        <HundredYearPillarTable
          gender={gender}
          userDateData={userDateData}
          timeZone={timeZone}
        />
      </CardContent>
    </Card>
  );
};

export default FourPillarsOfDestinyMain;
