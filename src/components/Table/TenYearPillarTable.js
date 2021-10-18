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
  fpodStemYear,
  fpodLuckPillarBase,
  fpodTenYearPillar,
  fpodTenYearPillarStem,
  fpodTenYearPillarBranchAndHiddenStem,
} from '../calculation/FPoDCalculation';
import { createTYPData } from '../data/dataCreation';

const TenYearPillarTable = (props) => {
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
  const stemYear = fpodStemYear(mainYear, gender);
  const luckPillarBase = fpodLuckPillarBase(
    baseCalculation.lunarBase,
    stemYear.stemYear,
    stemYear.genderBender
  );

  const tenYearPillar = fpodTenYearPillar(luckPillarBase.luckPillarBaseYear);
  const tenYearPillarStem = fpodTenYearPillarStem(
    luckPillarBase.stemMonth,
    stemYear.genderBender
  );
  const tenYearPillarBranchAndHiddenStem = fpodTenYearPillarBranchAndHiddenStem(
    luckPillarBase.luckPillarBase,
    stemYear.genderBender
  );

  const tenYearPillarBranch =
    tenYearPillarBranchAndHiddenStem.tenYearPillarBranch;
  const tenYearPillarHiddenStem =
    tenYearPillarBranchAndHiddenStem.tenYearPillarHiddenStem;

  const fpodTYPTableRow = [];
  let i = 0;
  while (i < 10) {
    fpodTYPTableRow.push(
      createTYPData(
        tenYearPillar[i],
        tenYearPillarStem[i],
        tenYearPillarBranch[i],
        tenYearPillarHiddenStem[i]
      )
    );
    i += 1;
  }
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Age</TableCell>
            <TableCell>Stem</TableCell>
            <TableCell>Branch</TableCell>
            <TableCell>Hidden Stem</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fpodTYPTableRow.map((row) => (
            <TableRow
              key={row.age}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.age}
              </TableCell>
              <TableCell>{row.stem}</TableCell>
              <TableCell>{row.branch}</TableCell>
              <TableCell>{row.hiddenStem}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TenYearPillarTable;
