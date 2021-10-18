import { useState } from 'react';
import {
  Tab,
  Tabs,
} from '@mui/material';
import {
  fpodBaseCalculation,
  fpodMainYear,
  fpodBranchYear,
  fpodStemYear,
  fpodHiddenStem,
  fpodBranchStemofDayHour,
  fpodFlowerOfRomance,
  fpodTravellingStar,
  fpodStemTableSama,
  fpodStemTableCombi,
  fpodStemTableClash,
  fpodStemTablePolarity,
  fpodBranchTableCombi2,
  fpodBranchTableCombi3,
  fpodBranchTableChiong,
  fpodBranchTablePenalty,
  fpodBranchTableEarthPenalty,
  fpodBranchTableSelfClash,
  fpodBranchTableIngratitudeClash,
  fpodBranchTableConflict,
} from '../calculation/FPoDCalculation';
import { TabPanel, a11yProps } from './TablePanel';

const FinancialAndLuckTable = (props) => {
  const gender = props.gender;
  const userDateData = props.userDateData;
  const dateOfBirth = userDateData.getDate();
  const monthOfBirth = userDateData.getMonth() + 1;
  const yearOfBirth = userDateData.getFullYear();
  const hourOfBirth = userDateData.getHours();
  const minuteOfBirth = userDateData.getMinutes();
  const timeZone = props.timeZone;

  const baseCalculation = fpodBaseCalculation(
    dateOfBirth,
    monthOfBirth,
    yearOfBirth,
    hourOfBirth,
    minuteOfBirth,
    timeZone
  );
  const mainYear = fpodMainYear(
    baseCalculation.lunarBase,
    monthOfBirth,
    yearOfBirth
  );

  const branchStemofDayHour = fpodBranchStemofDayHour(
    baseCalculation.fpodBCVarFive,
    hourOfBirth,
    minuteOfBirth
  );

  const branchYear = fpodBranchYear(mainYear);
  const stemYear = fpodStemYear(mainYear, gender);
  const hiddenStemYear = fpodHiddenStem(branchYear.yobBranch);

  const flowerOfRomance = fpodFlowerOfRomance(
    branchStemofDayHour.dobBranch,
    branchYear.yobBranch
  );
  const travellingStar = fpodTravellingStar(
    branchStemofDayHour.dobBranch,
    branchYear.yobBranch
  );
  const stemTableSama = fpodStemTableSama(stemYear.yobStem);
  const stemTableCombi = fpodStemTableCombi(stemYear.yobStem);
  const stemTableClash = fpodStemTableClash(stemYear.yobStem);
  const stemTablePolarity = fpodStemTablePolarity(stemYear.yobStem);
  const branchTableCombi2 = fpodBranchTableCombi2(branchYear.yobBranch);
  const branchTableCombi3 = fpodBranchTableCombi3(branchYear.yobBranch);
  const branchTableChiong = fpodBranchTableChiong(branchYear.yobBranch);
  const branchTablePenalty = fpodBranchTablePenalty(branchYear.yobBranch);
  const branchTableEarthPenalty = fpodBranchTableEarthPenalty(
    branchYear.yobBranch
  );
  const branchTableSelfClash = fpodBranchTableSelfClash(branchYear.yobBranch);
  const branchTableIngratitudeClash = fpodBranchTableIngratitudeClash(
    branchYear.yobBranch
  );
  const branchTableConflict = fpodBranchTableConflict(branchYear.yobBranch);
  const hiddenStemTableSama = fpodStemTableSama(
    fpodHiddenStem(branchYear.yobBranch)
  );
  const hiddenStemTableCombi = fpodStemTableCombi(
    fpodHiddenStem(branchYear.yobBranch)
  );
  const hiddenStemTableClash = fpodStemTableClash(
    fpodHiddenStem(branchYear.yobBranch)
  );
  const hiddenStemTablePolarity = fpodStemTablePolarity(
    fpodHiddenStem(branchYear.yobBranch)
  );

  const [tabValue, setTabValue] = useState(0);
  const tabChangeHandler = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={tabChangeHandler}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
      >
        <Tab label="Attributes" {...a11yProps(0)} />
        <Tab label="Stem" {...a11yProps(1)} />
        <Tab label="Branch" {...a11yProps(2)} />
        <Tab label="Hidden Stem" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <p>Stem: {stemYear.yobStem}</p>
        <p>Branch: {branchYear.yobBranch}</p>
        <p>Hidden Stem: {hiddenStemYear}</p>
        <p>
          Flower of Romance:{' '}
          {flowerOfRomance.flowerOfRomanceDoB +
            ' & ' +
            flowerOfRomance.flowerOfRomanceYoB}
        </p>
        <p>
          Travelling Star:{' '}
          {travellingStar.travellingStarDoB +
            ' & ' +
            travellingStar.travellingStarYoB}
        </p>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <p>Sama: {stemTableSama}</p>
        <p>Combi: {stemTableCombi}</p>
        <p>Clash: {stemTableClash}</p>
        <p>Polarity: {stemTablePolarity}</p>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <p>Combi2: {branchTableCombi2}</p>
        <p>Combi3: {branchTableCombi3}</p>
        <p>Chiong: {branchTableChiong}</p>
        <p>Penalty: {branchTablePenalty}</p>
        <p>Earth Penalty: {branchTableEarthPenalty}</p>
        <p>Self Clash: {branchTableSelfClash}</p>
        <p>Ingratitude Clash: {branchTableIngratitudeClash}</p>
        <p>Conflict: {branchTableConflict}</p>
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <p>Sama: {hiddenStemTableSama}</p>
        <p>Combi: {hiddenStemTableCombi}</p>
        <p>Clash: {hiddenStemTableClash}</p>
        <p>Polarity: {hiddenStemTablePolarity}</p>
      </TabPanel>
    </div>
  );
};

export default FinancialAndLuckTable;
