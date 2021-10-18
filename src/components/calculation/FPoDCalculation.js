import {
  animalSign,
  elementSign,
  elementToAnimalSignStem,
  animalSignToHiddenStem,
  flowerOfRomanceAndTravellingStar,
  animalSignCombi2,
  animalSignCombi3,
  animalSignChiong,
  animalSignPenalty,
  animalSignEarthPenalty,
  animalSignSelfClash,
  animalSignIngratitudeClash,
  animalSignConflict,
  elementSignCombi,
  elementSignClash,
  elementSignPolarity,
  sixtyCyclesOfAnimalSign,
  sixtyCyclesOfElementSign,
} from '../data/animalSignAndElementData';

export function fpodBaseCalculation(
  dateOfBirth,
  monthOfBirth,
  yearOfBirth,
  hourOfBirth,
  minuteOfBirth,
  timezone
) {
  let fpodBCVarOne = 0;

  if (monthOfBirth - 9 < 0) {
    fpodBCVarOne = -1;
  } else {
    fpodBCVarOne = 1;
  }

  // based on ancient wisdom calculation wkwkwkwkwk
  let fpodBCHour = hourOfBirth + minuteOfBirth / 60;

  let fpodBCVarTwo =
    -1 *
    Math.floor((7 * (Math.floor((monthOfBirth + 9) / 12) + yearOfBirth)) / 4);

  let fpodBCVarThree = Math.abs(monthOfBirth - 9);

  let fpodBCVarFour = Math.floor(
    yearOfBirth + fpodBCVarOne * Math.floor(fpodBCVarThree / 7)
  );

  fpodBCVarFour =
    -1 * Math.floor(((Math.floor(fpodBCVarFour / 100) + 1) * 3) / 4);

  fpodBCVarTwo =
    fpodBCVarTwo +
    Math.floor((275 * monthOfBirth) / 9) +
    dateOfBirth +
    1 * fpodBCVarFour;

  fpodBCVarTwo = fpodBCVarTwo + 1721027 + 2 * 1 + 367 * yearOfBirth - 0.5;

  let fpodBCVarFive = fpodBCVarTwo + fpodBCHour / 24;

  fpodBCVarTwo = fpodBCVarTwo + fpodBCHour / 24 - timezone / 24;

  let fpodBCVarSix = (fpodBCVarTwo - 2451545) / 36525;

  let fpodBCVarSeven = (2 * Math.PI) / 360;

  let fpodBCVarEight =
    357.5291 +
    35999.0503 * fpodBCVarSix -
    0.0001559 * fpodBCVarSix * fpodBCVarSix -
    0.00000048 * fpodBCVarSix * fpodBCVarSix * fpodBCVarSix;

  let fpodBCVarNine =
    280.46645 +
    36000.76983 * fpodBCVarSix +
    0.0003032 * fpodBCVarSix * fpodBCVarSix;

  let fpodBCVarTen =
    (1.9146 -
      0.004817 * fpodBCVarSix -
      0.000014 * fpodBCVarSix * fpodBCVarSix) *
    Math.sin(fpodBCVarSeven * fpodBCVarEight);

  fpodBCVarTen =
    fpodBCVarTen +
    (0.019993 - 0.000101 * fpodBCVarSix) *
      Math.sin(fpodBCVarSeven * 2 * fpodBCVarEight) +
    0.00029 * Math.sin(fpodBCVarSeven * 3 * fpodBCVarEight);

  let lunarBase = fpodBCVarNine + fpodBCVarTen;

  while (lunarBase > 360) {
    lunarBase -= 360;
  }

  while (lunarBase < 0) {
    lunarBase += 360;
  }

  return { lunarBase, fpodBCVarFive };
}

export function fpodMainYear(lunarBase, monthOfBirth, yearOfBirth) {
  let mainYear;
  if (lunarBase < 315 && (monthOfBirth === 1 || monthOfBirth === 2)) {
    mainYear = yearOfBirth - 4;
  } else {
    mainYear = yearOfBirth - 3;
  }
  return mainYear;
}

export function fpodBranchYear(mainYear) {
  let branchYear = mainYear;
  while (branchYear > 12) {
    branchYear -= 12;
  }
  let yobBranch = animalSign[branchYear];
  return { yobBranch, branchYear };
}

export function fpodStemYear(mainYear, gender) {
  let stemYear = mainYear;

  while (stemYear > 10) {
    stemYear -= 10;
  }
  let yobStem = elementSign[stemYear];

  let genderBender;

  if (gender === 'F') {
    genderBender = -1;
  } else {
    genderBender = 1;
  }

  if (
    stemYear === 0 ||
    stemYear === 2 ||
    stemYear === 4 ||
    stemYear === 6 ||
    stemYear === 8 ||
    stemYear === 10
  ) {
    genderBender = -1 * genderBender;
  } else {
    genderBender = 1 * genderBender;
  }

  return { yobStem, stemYear, genderBender };
}

export function fpodHiddenStem(relatedAnimalSign) {
  let i = 0;
  let tempArray = [];
  let hiddenStem = [];
  let hiddenStemReturnValue = '';
  while (i < 12) {
    tempArray = animalSignToHiddenStem[i].slice(0, 2);
    if (tempArray.includes(relatedAnimalSign)) {
      hiddenStem = animalSignToHiddenStem[i].slice(1, 2);
      hiddenStemReturnValue = hiddenStem[0];
    }
    i += 1;
  }
  return hiddenStemReturnValue;
}

export function fpodLuckPillarBase(lunarBase, stemYear, genderBender) {
  let stemMonth = 1;
  let luckPillarBase = 1;
  let luckPillarBaseYear = 1;
  let mobBranch = '';
  let mobStem = '';

  let i = 0;
  while (i < 6) {
    if (stemYear === i || stemYear === i + 5) {
      stemMonth += i * 2;
    }
    if (stemMonth > 10) {
      stemMonth -= 10;
    }
    i += 1;
  }

  if (lunarBase >= 315 && lunarBase < 345) {
    mobBranch = animalSign[3];
    luckPillarBase = 3;
    if (genderBender === 1) {
      luckPillarBaseYear = (345 - lunarBase) / 3;
    } else {
      luckPillarBaseYear = (lunarBase - 315) / 3;
    }
  }

  if (lunarBase >= 345 || lunarBase < 15) {
    stemMonth += 1;
    mobBranch = animalSign[4];
    luckPillarBase = 4;
    if (genderBender === 1) {
      luckPillarBaseYear = (375 - lunarBase) / 3;
    } else {
      luckPillarBaseYear = (lunarBase - 345) / 3;
    }
    if (luckPillarBaseYear > 11) {
      luckPillarBaseYear -= 120;
    }
    if (luckPillarBaseYear < 0) {
      luckPillarBaseYear += 120;
    }
  }

  let moreThan = 15;
  let lessThan = 45;
  i = 2;
  while (lessThan < 255) {
    if (lunarBase >= moreThan && lunarBase < lessThan) {
      stemMonth += i;
      mobBranch = animalSign[i + 3];
      luckPillarBase = i + 3;
      if (genderBender === 1) {
        luckPillarBaseYear = (lessThan - lunarBase) / 3;
      } else {
        luckPillarBaseYear = (lunarBase - moreThan) / 3;
      }
    }
    moreThan += 30;
    lessThan += 30;
    i += 1;
  }

  if (lunarBase >= 255 && lunarBase < 285) {
    stemMonth += 10;
    mobBranch = animalSign[1];
    luckPillarBase = 1;
    if (genderBender === 1) {
      luckPillarBaseYear = (285 - lunarBase) / 3;
    } else {
      luckPillarBaseYear = (lunarBase - 255) / 3;
    }
  }

  if (lunarBase >= 285 && lunarBase < 315) {
    stemMonth += 11;
    mobBranch = animalSign[2];
    luckPillarBase = 2;
    if (genderBender === 1) {
      luckPillarBaseYear = (315 - lunarBase) / 3;
    } else {
      luckPillarBaseYear = (lunarBase - 285) / 3;
    }
  }
  if (stemMonth > 10) {
    stemMonth -= 10;
  }

  mobStem = elementSign[stemMonth];
  luckPillarBaseYear = Math.floor(luckPillarBaseYear);

  return { mobBranch, mobStem, luckPillarBase, luckPillarBaseYear, stemMonth };
}

export function fpodBranchStemofDayHour(
  fpodBCVarFive,
  hourofBirth,
  minuteofBirth
) {
  let hour = hourofBirth + minuteofBirth / 60;
  let branchDay =
    Math.floor(
      fpodBCVarFive - 12 * Math.floor((fpodBCVarFive + 0.5) / 12) + 0.5
    ) + 2;
  let dobBranch = animalSign[branchDay];
  let hobBranch = '';
  let hobStem = '';
  let stemDayStr;
  let stemDayNbr;
  let stemDay;
  stemDayNbr = Math.floor(fpodBCVarFive + 0.5);
  stemDayStr = stemDayNbr.toString();
  stemDayStr = stemDayStr.slice(6, 7);
  stemDay = parseInt(stemDayStr);
  let dobStem = elementSign[stemDay];

  let branchHour = 1;
  let bhVarOne = 1; //hs0
  let bhVarTwo = 0; //hs1
  let i = 1;
  while (i < 5) {
    if (stemDay === i || stemDay === i + 5) {
      bhVarTwo = bhVarOne;
    }
    bhVarOne += 2;
    i += 1;
  }
  if (stemDay === 0 || stemDay === 5) {
    bhVarTwo = 9;
  }
  if (hour === 23 || (hour > 23 && hour < 24)) {
    bhVarTwo += 2;
  }
  if (
    hour === 23 ||
    (hour > 23 && hour < 24) ||
    hour === 0 ||
    (hour > 0 && hour < 1) ||
    hour === 24
  ) {
    hobBranch = animalSign[branchHour];
  }

  branchHour += 1;
  i = 1;
  while (i < 23) {
    if (hour === i || (hour > i && hour < i + 2)) {
      hobBranch = animalSign[branchHour];
      bhVarTwo = bhVarTwo + branchHour - 1;
    }
    i += 1;
    branchHour += 1;
    i += 1;
  }

  if (bhVarTwo > 10) {
    bhVarTwo -= 10;
  }
  hobStem = elementSign[bhVarTwo];

  return { dobBranch, dobStem, hobBranch, hobStem };
}

export function fpodTenYearPillar(luckPillarBaseYear) {
  let tenYearPillar = [];
  let i = 0;
  while (i < 10) {
    tenYearPillar.push(luckPillarBaseYear);
    luckPillarBaseYear += 10;
    i += 1;
  }
  return tenYearPillar;
}

export function fpodTenYearPillarStem(stemMonth, genderBender) {
  let tenYearPillarStem = [];
  let i = 0;
  while (i < 10) {
    stemMonth += genderBender;
    if (stemMonth > 10 || stemMonth < 0) {
      stemMonth = stemMonth - 10 * genderBender;
    }
    tenYearPillarStem.push(elementSign[stemMonth]);
    i += 1;
  }
  return tenYearPillarStem;
}

function HiddenStem(animalSign) {
  let i = 0;
  let tempArray;
  let hiddenStemArray;
  let hiddenStem = '';
  while (i < 12) {
    tempArray = animalSignToHiddenStem[i].slice(0, 2);
    if (tempArray.includes(animalSign)) {
      hiddenStemArray = [animalSignToHiddenStem[i][1]];
      hiddenStem = hiddenStemArray[0];
    }
    i += 1;
  }
  return hiddenStem;
}

export function fpodTenYearPillarBranchAndHiddenStem(
  luckPillarBase,
  genderBender
) {
  let tenYearPillarBranch = [];
  let tenYearPillarHiddenStem = [];
  let i = 0;
  while (i < 10) {
    luckPillarBase += genderBender;
    if (luckPillarBase > 12 || luckPillarBase < 0) {
      luckPillarBase = luckPillarBase - 12 * genderBender;
    }
    tenYearPillarBranch.push(animalSign[luckPillarBase]);
    tenYearPillarHiddenStem.push(HiddenStem(animalSign[luckPillarBase]));
    i += 1;
  }
  return { tenYearPillarBranch, tenYearPillarHiddenStem };
}

function FlowerOfRomanceAndTravellingStar(animalSign) {
  let i = 0;
  let tempArray;
  let flowerOfRomanceAndTravellingStarReturnArray = [];
  while (i < 4) {
    tempArray = flowerOfRomanceAndTravellingStar[i].slice(0, 3);
    if (tempArray.includes(animalSign)) {
      flowerOfRomanceAndTravellingStarReturnArray = [
        flowerOfRomanceAndTravellingStar[i][3],
        flowerOfRomanceAndTravellingStar[i][4],
      ];
    }
    i += 1;
  }
  return flowerOfRomanceAndTravellingStarReturnArray;
}

export function fpodFlowerOfRomance(dobBranch, yobBranch) {
  const flowerOfRomanceDoB = FlowerOfRomanceAndTravellingStar(dobBranch)[0];
  const flowerOfRomanceYoB = FlowerOfRomanceAndTravellingStar(yobBranch)[0];
  return { flowerOfRomanceDoB, flowerOfRomanceYoB };
}

export function fpodTravellingStar(dobBranch, yobBranch) {
  const travellingStarDoB = FlowerOfRomanceAndTravellingStar(dobBranch)[1];
  const travellingStarYoB = FlowerOfRomanceAndTravellingStar(yobBranch)[1];
  return { travellingStarDoB, travellingStarYoB };
}

export function fpodStemTableSama(elementSign) {
  let hiddenStemTable = '';
  let i = 0;
  while (i < 10) {
    if (elementToAnimalSignStem[i].includes(elementSign)) {
      const hiddenStemTableArray = [elementToAnimalSignStem[i][1]];
      hiddenStemTable = hiddenStemTableArray[0];
    }
    i += 1;
  }
  const stemTableSama = elementSign + '/' + hiddenStemTable;
  return stemTableSama;
}

export function fpodStemTableCombi(elementSign) {
  let stemTableCombiArray = [];
  let stemTableCombi = '-';
  let i = 0;
  while (i < 5) {
    if (elementSignCombi[i].includes(elementSign)) {
      stemTableCombiArray = [elementSignCombi[i][0], elementSignCombi[i][1]];
      for (let j = 0; j < stemTableCombiArray.length; j++) {
        if (stemTableCombiArray[j] === elementSign) {
          stemTableCombiArray.splice(j, 1);
        }
      }
      stemTableCombi = stemTableCombiArray[0];
    }
    i += 1;
  }
  let hiddenStemTableArray = [];
  let hiddenStemTable = '.';
  i = 0;
  while (i < 10) {
    if (elementToAnimalSignStem[i].includes(stemTableCombi)) {
      hiddenStemTableArray = [elementToAnimalSignStem[i][1]];
      hiddenStemTable = hiddenStemTableArray[0];
    }
    i += 1;
  }
  if (hiddenStemTable !== '.') {
    stemTableCombi = stemTableCombi + '/' + hiddenStemTable;
  }
  return stemTableCombi;
}

export function fpodStemTableClash(elementSign) {
  let stemTableClashArray = [];
  let stemTableClash = '-';
  let i = 0;
  while (i < 4) {
    if (elementSignClash[i].includes(elementSign)) {
      stemTableClashArray = [elementSignClash[i][0], elementSignClash[i][1]];
      for (let j = 0; j < stemTableClashArray.length; j++) {
        if (stemTableClashArray[j] === elementSign) {
          stemTableClashArray.splice(j, 1);
        }
      }
      stemTableClash = stemTableClashArray[0];
    }
    i += 1;
  }
  let hiddenStemTableArray = [];
  let hiddenStemTable = '.';
  i = 0;
  while (i < 10) {
    if (elementToAnimalSignStem[i].includes(stemTableClash)) {
      hiddenStemTableArray = [elementToAnimalSignStem[i][1]];
      hiddenStemTable = hiddenStemTableArray[0];
    }
    i += 1;
  }
  if (hiddenStemTable !== '.') {
    stemTableClash = stemTableClash + '/' + hiddenStemTable;
  }
  return stemTableClash;
}

export function fpodStemTablePolarity(elementSign) {
  let stemTablePolarityArray = [];
  let stemTablePolarity = '-';
  let i = 0;
  while (i < 5) {
    if (elementSignPolarity[i].includes(elementSign)) {
      stemTablePolarityArray = [
        elementSignPolarity[i][0],
        elementSignPolarity[i][1],
      ];
      for (let j = 0; j < stemTablePolarityArray.length; j++) {
        if (stemTablePolarityArray[j] === elementSign) {
          stemTablePolarityArray.splice(j, 1);
        }
      }
      stemTablePolarity = stemTablePolarityArray[0];
    }
    i += 1;
  }
  let hiddenStemTableArray = [];
  let hiddenStemTable = '.';
  i = 0;
  while (i < 10) {
    if (elementToAnimalSignStem[i].includes(stemTablePolarity)) {
      hiddenStemTableArray = [elementToAnimalSignStem[i][1]];
      hiddenStemTable = hiddenStemTableArray[0];
    }
    i += 1;
  }
  if (hiddenStemTable !== '.') {
    stemTablePolarity = stemTablePolarity + '/' + hiddenStemTable;
  }
  return stemTablePolarity;
}

export function fpodBranchTableCombi2(animalSign) {
  let branchTableCombi2Array = [];
  let branchTableCombi2 = '-';
  let i = 0;
  while (i < 6) {
    if (animalSignCombi2[i].includes(animalSign)) {
      branchTableCombi2Array = [animalSignCombi2[i][0], animalSignCombi2[i][1]];
      for (let j = 0; j < branchTableCombi2Array.length; j++) {
        if (branchTableCombi2Array[j] === animalSign) {
          branchTableCombi2Array.splice(j, 1);
        }
      }
      branchTableCombi2 = branchTableCombi2Array[0];
    }
    i += 1;
  }
  return branchTableCombi2;
}

export function fpodBranchTableCombi3(animalSign) {
  let branchTableCombi3Array = [];
  let branchTableCombi3 = '-';
  let i = 0;
  while (i < 4) {
    if (animalSignCombi3[i].includes(animalSign)) {
      branchTableCombi3Array = [
        animalSignCombi3[i][0],
        animalSignCombi3[i][1],
        animalSignCombi3[i][2],
      ];
      for (let j = 0; j < branchTableCombi3Array.length; j++) {
        if (branchTableCombi3Array[j] === animalSign) {
          branchTableCombi3Array.splice(j, 1);
        }
      }
      branchTableCombi3 =
        branchTableCombi3Array[0] + ', ' + branchTableCombi3Array[1];
    }
    i += 1;
  }
  return branchTableCombi3;
}

export function fpodBranchTableChiong(animalSign) {
  let branchTableChiongArray = [];
  let branchTableChiong = '-';
  let i = 0;
  while (i < 6) {
    if (animalSignChiong[i].includes(animalSign)) {
      branchTableChiongArray = [animalSignChiong[i][0], animalSignChiong[i][1]];
      for (let j = 0; j < branchTableChiongArray.length; j++) {
        if (branchTableChiongArray[j] === animalSign) {
          branchTableChiongArray.splice(j, 1);
        }
      }
      branchTableChiong = branchTableChiongArray[0];
    }
    i += 1;
  }
  return branchTableChiong;
}

export function fpodBranchTablePenalty(animalSign) {
  let branchTablePenaltyArray = [];
  let branchTablePenalty = '-';
  if (animalSignPenalty.includes(animalSign)) {
    branchTablePenaltyArray = [
      animalSignPenalty[0],
      animalSignPenalty[1],
      animalSignPenalty[2],
    ];
    for (let j = 0; j < branchTablePenaltyArray.length; j++) {
      if (branchTablePenaltyArray[j] === animalSign) {
        branchTablePenaltyArray.splice(j, 1);
      }
    }
    branchTablePenalty =
      branchTablePenaltyArray[0] + ', ' + branchTablePenaltyArray[1];
  }
  return branchTablePenalty;
}

export function fpodBranchTableEarthPenalty(animalSign) {
  let branchTableEarthPenaltyArray = [];
  let branchTableEarthPenalty = '-';
  if (animalSignEarthPenalty.includes(animalSign)) {
    branchTableEarthPenaltyArray = [
      animalSignEarthPenalty[0],
      animalSignEarthPenalty[1],
      animalSignEarthPenalty[2],
    ];
    for (let j = 0; j < branchTableEarthPenaltyArray.length; j++) {
      if (branchTableEarthPenaltyArray[j] === animalSign) {
        branchTableEarthPenaltyArray.splice(j, 1);
      }
    }
    branchTableEarthPenalty =
      branchTableEarthPenaltyArray[0] + ', ' + branchTableEarthPenaltyArray[1];
  }
  return branchTableEarthPenalty;
}

export function fpodBranchTableSelfClash(animalSign) {
  let branchTableSelfClash = '-';
  if (animalSignSelfClash.includes(animalSign)) {
    branchTableSelfClash = animalSign;
  }
  return branchTableSelfClash;
}

export function fpodBranchTableIngratitudeClash(animalSign) {
  let branchTableIngratitudeClashArray = [];
  let branchTableIngratitudeClash = '-';
  if (animalSignIngratitudeClash.includes(animalSign)) {
    branchTableIngratitudeClashArray = [
      animalSignIngratitudeClash[0],
      animalSignIngratitudeClash[1],
    ];
    for (let j = 0; j < branchTableIngratitudeClashArray.length; j++) {
      if (branchTableIngratitudeClashArray[j] === animalSign) {
        branchTableIngratitudeClashArray.splice(j, 1);
      }
    }
    branchTableIngratitudeClash = branchTableIngratitudeClashArray[0];
  }
  return branchTableIngratitudeClash;
}

export function fpodBranchTableConflict(animalSign) {
  let branchTableConflictArray = [];
  let branchTableConflict = '-';
  let i = 0;
  while (i < 6) {
    if (animalSignConflict[i].includes(animalSign)) {
      branchTableConflictArray = [
        animalSignConflict[i][0],
        animalSignConflict[i][1],
      ];
      for (let j = 0; j < branchTableConflictArray.length; j++) {
        if (branchTableConflictArray[j] === animalSign) {
          branchTableConflictArray.splice(j, 1);
        }
      }
      branchTableConflict = branchTableConflictArray[0];
    }
    i += 1;
  }
  return branchTableConflict;
}

export function fpodAgeRange(startedAge) {
  let ageRange = [];
  let i = 0;
  while (i < 10) {
    ageRange.push(startedAge.toString());
    startedAge += 1;
    i += 1;
  }
  return ageRange;
}

export function fpodSolarYearRange(startedAge, yearofBirth) {
  let solarYearRange = [];
  let i = 0;
  while (i < 10) {
    solarYearRange.push((startedAge + yearofBirth).toString());
    startedAge += 1;
    i += 1;
  }
  return solarYearRange;
}

//create 60 year cycles list, base year is 1945, no need to calculate someone older than this sudah bau tanah hahaha, 176 iterations
const sixtyCycles = [];
let baseYear = 1945;
let sixtyElement = 1;
let sixtyAnimalSign = 9;
while (baseYear < 2221) {
  sixtyCycles.push([
    baseYear.toString(),
    sixtyCyclesOfElementSign[sixtyElement],
    sixtyCyclesOfAnimalSign[sixtyAnimalSign],
  ]);
  baseYear += 1;
  sixtyElement += 1;
  sixtyAnimalSign += 1;
  if (sixtyElement === 10) {
    sixtyElement = 0;
  }
  if (sixtyAnimalSign === 12) {
    sixtyAnimalSign = 0;
  }
}

export function fpodElementAndAnimalSignSixtyYearsCycle(solarYear) {
  let elementAndAnimalSignSixtyYearsCycle = [];
  let i = 0;
  while (i < 276) {
    if (sixtyCycles[i][0].includes(solarYear.toString())) {
      elementAndAnimalSignSixtyYearsCycle = [
        sixtyCycles[i][1],
        sixtyCycles[i][2],
      ];
    }
    i += 1;
  }
  return elementAndAnimalSignSixtyYearsCycle;
}
