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
    fpodTenYearPillar,
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
    fpodAgeRange,
    fpodSolarYearRange,
    fpodElementAndAnimalSignSixtyYearsCycle,
} from '../calculation/FPoDCalculation';
import { createLuckAndFinanceHundredYearsData } from '../data/dataCreation';

const HundredYearPillarTable = (props) => {
  const gender = props.gender;
  const userDateData = props.userDateData;
  const dateOfBirth = userDateData.getDate();
  const monthOfBirth = userDateData.getMonth() + 1;
  const yearOfBirth = userDateData.getFullYear();
  const hourOfBirth = userDateData.getHours();
  const minuteOfBirth = userDateData.getMinutes();
  const timeZone = props.timeZone;
  const luckAndFinanceHundredYearsTableRow = [];

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
  const luckPillarBase = fpodLuckPillarBase(
    baseCalculation.lunarBase,
    stemYear.stemYear,
    stemYear.genderBender
  );
  const branchStemofDayHour = fpodBranchStemofDayHour(
    baseCalculation.fpodBCVarFive,
    hourOfBirth,
    minuteOfBirth
  );
  const tenYearPillar = fpodTenYearPillar(luckPillarBase.luckPillarBaseYear);
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

  let ageRange = [];
  let ageRangeArray = [];
  let solarYearRange = [];
  let solarYearRangeArray = [];
  let j = 0;

  let i = 0;
  while (i < 10) {
    ageRange.push(fpodAgeRange(tenYearPillar[i]));
    solarYearRange.push(fpodSolarYearRange(tenYearPillar[i], yearOfBirth));
    i += 1;
  }

  i = 0;
  while (i < 10) {
    j = 0;
    while (j < 10) {
      ageRangeArray.push(ageRange[i][j]);
      j += 1;
    }
    i += 1;
  }

  i = 0;
  while (i < 10) {
    j = 0;
    while (j < 10) {
      solarYearRangeArray.push(solarYearRange[i][j]);
      j += 1;
    }
    i += 1;
  }

  let elementAndAnimalSignSixtyYearsCycle = [];
  j = 0;
  i = 0;
  while (j < 10) {
    while (i < 10) {
      elementAndAnimalSignSixtyYearsCycle.push(
        fpodElementAndAnimalSignSixtyYearsCycle(Number(solarYearRange[j][i]))
      );
      i += 1;
    }
    i = 0;
    j += 1;
  }

  let flowerOfRomanceAndTravellingStar = [];
  i = 0;
  while (i < 100) {
    flowerOfRomanceAndTravellingStar.push("-");
    if (
      elementAndAnimalSignSixtyYearsCycle[i][1].includes(
        flowerOfRomance.flowerOfRomanceDoB
      ) ||
      elementAndAnimalSignSixtyYearsCycle[i][1].includes(
        flowerOfRomance.flowerOfRomanceYoB
      )
    ) {
      flowerOfRomanceAndTravellingStar.pop();
      flowerOfRomanceAndTravellingStar.push("FoR");
    }
    if (
      elementAndAnimalSignSixtyYearsCycle[i][1].includes(
        travellingStar.travellingStarDoB
      ) ||
      elementAndAnimalSignSixtyYearsCycle[i][1].includes(
        travellingStar.travellingStarYoB
      )
    ) {
      flowerOfRomanceAndTravellingStar.pop();
      flowerOfRomanceAndTravellingStar.push("TS");
    }
    i += 1;
  }

  let luckAndCalamityTableArray = [];
  i = 0;
  while (i < 100) {
    let luckAndCalamityTable = [];

    if (stemTableSama.includes(elementAndAnimalSignSixtyYearsCycle[i][0])) {
      luckAndCalamityTable.push("Sama");
    }
    if (stemTableCombi.includes(elementAndAnimalSignSixtyYearsCycle[i][0])) {
      luckAndCalamityTable.push("Combi");
    }
    if (stemTableClash.includes(elementAndAnimalSignSixtyYearsCycle[i][0])) {
      luckAndCalamityTable.push("Clash");
    }
    if (stemTablePolarity.includes(elementAndAnimalSignSixtyYearsCycle[i][0])) {
      luckAndCalamityTable.push("Polarity");
    }
    if (branchTableCombi2.includes(elementAndAnimalSignSixtyYearsCycle[i][1])) {
      luckAndCalamityTable.push("Combi2");
    }
    if (branchTableCombi3.includes(elementAndAnimalSignSixtyYearsCycle[i][1])) {
      luckAndCalamityTable.push("Combi3");
    }
    if (branchTableChiong.includes(elementAndAnimalSignSixtyYearsCycle[i][1])) {
      luckAndCalamityTable.push("Chiong");
    }
    if (
      branchTablePenalty.includes(elementAndAnimalSignSixtyYearsCycle[i][1])
    ) {
      luckAndCalamityTable.push("Penalty");
    }
    if (
      branchTableEarthPenalty.includes(
        elementAndAnimalSignSixtyYearsCycle[i][1]
      )
    ) {
      luckAndCalamityTable.push("Earth Penalty");
    }
    if (
      branchTableSelfClash.includes(elementAndAnimalSignSixtyYearsCycle[i][1])
    ) {
      luckAndCalamityTable.push("Self Clash");
    }
    if (
      branchTableIngratitudeClash.includes(
        elementAndAnimalSignSixtyYearsCycle[i][1]
      )
    ) {
      luckAndCalamityTable.push("Ingratitude Clash");
    }
    if (
      branchTableConflict.includes(elementAndAnimalSignSixtyYearsCycle[i][1])
    ) {
      luckAndCalamityTable.push("Conflict");
    }
    if (
      hiddenStemTableSama.includes(elementAndAnimalSignSixtyYearsCycle[i][0])
    ) {
      luckAndCalamityTable.push("Sama");
    }
    if (
      hiddenStemTableCombi.includes(elementAndAnimalSignSixtyYearsCycle[i][0])
    ) {
      luckAndCalamityTable.push("Combi");
    }
    if (
      hiddenStemTableClash.includes(elementAndAnimalSignSixtyYearsCycle[i][0])
    ) {
      luckAndCalamityTable.push("Clash");
    }
    if (
      hiddenStemTablePolarity.includes(
        elementAndAnimalSignSixtyYearsCycle[i][0]
      )
    ) {
      luckAndCalamityTable.push("Polarity");
    }

    if (luckAndCalamityTable.length === 0) {
      luckAndCalamityTable.push("-");
      luckAndCalamityTable.push("-");
    }
    if (luckAndCalamityTable.length === 1) {
      luckAndCalamityTable.push("-");
    }
    if (luckAndCalamityTable.length === 3) {
      luckAndCalamityTable.push("nooooo");
    }

    luckAndCalamityTableArray.push(luckAndCalamityTable);
    i += 1;
  }
  i = 0;
  while (i < 100) {
    luckAndFinanceHundredYearsTableRow.push(
      createLuckAndFinanceHundredYearsData(
        ageRangeArray[i],
        solarYearRangeArray[i],
        elementAndAnimalSignSixtyYearsCycle[i][0],
        elementAndAnimalSignSixtyYearsCycle[i][1],
        flowerOfRomanceAndTravellingStar[i],
        luckAndCalamityTableArray[i][0],
        luckAndCalamityTableArray[i][1]
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
            <TableCell>Year</TableCell>
            <TableCell>Element</TableCell>
            <TableCell>Sign</TableCell>
            <TableCell>FoR/TS</TableCell>
            <TableCell>Luck Calamity I</TableCell>
            <TableCell>Luck Calamity II</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {luckAndFinanceHundredYearsTableRow.map((row) => (
            <TableRow
              key={row.age}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.age}
              </TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.element}</TableCell>
              <TableCell>{row.sign}</TableCell>
              <TableCell>{row.forts}</TableCell>
              <TableCell>{row.luckCalamityOne}</TableCell>
              <TableCell>{row.luckCalamityTwo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HundredYearPillarTable;
