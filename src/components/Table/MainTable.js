import {
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import {
  fpodBaseCalculation,
  fpodMainYear,
  fpodBranchYear,
  fpodStemYear,
  fpodHiddenStem,
  fpodLuckPillarBase,
  fpodBranchStemofDayHour,
} from '../calculation/FPoDCalculation';
import { createMainTableData } from '../data/dataCreation';

const MainTable = (props) => {
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
  const branchYear = fpodBranchYear(mainYear);
  const stemYear = fpodStemYear(mainYear, gender);
  const hiddenStemYear = fpodHiddenStem(branchYear.yobBranch);
  const luckPillarBase = fpodLuckPillarBase(
    baseCalculation.lunarBase,
    stemYear.stemYear,
    stemYear.genderBender
  );
  const hiddenStemMonth = fpodHiddenStem(luckPillarBase.mobBranch);
  const branchStemofDayHour = fpodBranchStemofDayHour(
    baseCalculation.fpodBCVarFive,
    hourOfBirth,
    minuteOfBirth
  );
  const hiddenStemDay = fpodHiddenStem(branchStemofDayHour.dobBranch);
  const hiddenStemHour = fpodHiddenStem(branchStemofDayHour.hobBranch);

  const fpodMainTableRow = [
    createMainTableData(
      'Stem',
      branchStemofDayHour.hobStem,
      branchStemofDayHour.dobStem,
      luckPillarBase.mobStem,
      stemYear.yobStem
    ),
    createMainTableData(
      'Branch',
      branchStemofDayHour.hobBranch,
      branchStemofDayHour.dobBranch,
      luckPillarBase.mobBranch,
      branchYear.yobBranch
    ),
    createMainTableData(
      'Hidden Stem',
      hiddenStemHour,
      hiddenStemDay,
      hiddenStemMonth,
      hiddenStemYear
    ),
  ];
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>FPoD</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Day</TableCell>
            <TableCell>Month</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fpodMainTableRow.map((row) => (
            <TableRow
              key={row.fpod}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fpod}
              </TableCell>
              <TableCell>{row.hour}</TableCell>
              <TableCell>{row.day}</TableCell>
              <TableCell>{row.month}</TableCell>
              <TableCell>{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
