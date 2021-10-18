export const animalSign = [
    "Pig",
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
    "Rat",
  ];

 export const elementSign= [
    "-Water",
    "+Wood",
    "-Wood",
    "+Fire",
    "-Fire",
    "+Earth",
    "-Earth",
    "+Metal",
    "-Metal",
    "+Water",
    "-Water",
  ];

  //list to map Animal Sign based on Element Sign to calculate stem and hidden stem (Table 5)
export const elementToAnimalSignStem = [
    [elementSign[0], animalSign[1]],
    [elementSign[6], animalSign[2] + " & " + animalSign[8]],
    [elementSign[1], animalSign[3]],
    [elementSign[2], animalSign[4]],
    [elementSign[5], animalSign[5] + " & " + animalSign[11]],
    [elementSign[3], animalSign[6]],
    [elementSign[4], animalSign[7]],
    [elementSign[7], animalSign[9]],
    [elementSign[8], animalSign[10]],
    [elementSign[9], animalSign[0]],
  ];

  //list to map Element Sign based on Animal Sign to calculate stem and hidden stem (Table 5)
export const animalSignToHiddenStem = [
    [animalSign[0], elementSign[9], elementSign[1], ""],
    [animalSign[1], elementSign[0], "", ""],
    [animalSign[2], elementSign[6], elementSign[0], elementSign[8]],
    [animalSign[3], elementSign[1], elementSign[3], elementSign[5]],
    [animalSign[4], elementSign[2], "", ""],
    [animalSign[5], elementSign[5], elementSign[2], elementSign[0]],
    [animalSign[6], elementSign[3], elementSign[5], elementSign[7]],
    [animalSign[7], elementSign[4], elementSign[6], ""],
    [animalSign[8], elementSign[6], elementSign[4], elementSign[2]],
    [animalSign[9], elementSign[7], elementSign[9], elementSign[5]],
    [animalSign[10], elementSign[8], "", ""],
    [animalSign[11], elementSign[5], elementSign[8], elementSign[4]],
  ];

//list to determine Flower of Romance and Travelling Star
export const flowerOfRomanceAndTravellingStar= [
    [animalSign[3], animalSign[7], animalSign[11], animalSign[4], animalSign[9]],
    [animalSign[0], animalSign[4], animalSign[8], animalSign[1], animalSign[6]],
    [animalSign[9], animalSign[1], animalSign[5], animalSign[10], animalSign[3]],
    [animalSign[6], animalSign[10], animalSign[2], animalSign[7], animalSign[0]],
  ];
  
  //ist to determine Animal Sign Combination 2 and Combination 3, Chiong, Penalty, Earth Penalty,
  //SelfClash, Ingratitude Clash and Conflict
export const animalSignCombi2 = [
    [animalSign[1], animalSign[2]],
    [animalSign[3], animalSign[0]],
    [animalSign[4], animalSign[11]],
    [animalSign[5], animalSign[10]],
    [animalSign[6], animalSign[9]],
    [animalSign[7], animalSign[8]],
  ];
export const animalSignCombi3 = [
    [animalSign[0], animalSign[4], animalSign[8]],
    [animalSign[3], animalSign[7], animalSign[11]],
    [animalSign[9], animalSign[1], animalSign[5]],
    [animalSign[6], animalSign[10], animalSign[2]],
  ];
 export const animalSignChiong = [
    [animalSign[1], animalSign[7]],
    [animalSign[2], animalSign[8]],
    [animalSign[3], animalSign[9]],
    [animalSign[4], animalSign[10]],
    [animalSign[5], animalSign[11]],
    [animalSign[6], animalSign[0]],
  ];
export const animalSignPenalty = [animalSign[3], animalSign[6], animalSign[9]];

export const animalSignEarthPenalty = [
    animalSign[2],
    animalSign[8],
    animalSign[11],
  ];
 export const animalSignSelfClash = [
    animalSign[5],
    animalSign[7],
    animalSign[10],
    animalSign[0],
  ];
export  const animalSignIngratitudeClash = [animalSign[1], animalSign[4]];

 export const animalSignConflict = [
    [animalSign[1], animalSign[8]],
    [animalSign[2], animalSign[7]],
    [animalSign[3], animalSign[6]],
    [animalSign[4], animalSign[5]],
    [animalSign[9], animalSign[0]],
    [animalSign[10], animalSign[11]],
  ];
  
  //list to determine Element Sign Combination, Clash and Polarity
 export const elementSignCombi = [
    [elementSign[1], elementSign[6]],
    [elementSign[2], elementSign[7]],
    [elementSign[3], elementSign[8]],
    [elementSign[4], elementSign[9]],
    [elementSign[5], elementSign[0]],
  ];
 export const elementSignClash = [
    [elementSign[1], elementSign[7]],
    [elementSign[2], elementSign[8]],
    [elementSign[3], elementSign[9]],
    [elementSign[4], elementSign[0]],
  ];
 export const elementSignPolarity = [
    [elementSign[1], elementSign[2]],
    [elementSign[3], elementSign[4]],
    [elementSign[5], elementSign[6]],
    [elementSign[7], elementSign[8]],
    [elementSign[9], elementSign[10]],
  ];
  
  //list of Animal Sign and Element Sign to calculate 60-year cycles
 export const sixtyCyclesOfAnimalSign = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  
 export const sixtyCyclesOfElementSign = [
    "+Wood",
    "-Wood",
    "+Fire",
    "-Fire",
    "+Earth",
    "-Earth",
    "+Metal",
    "-Metal",
    "+Water",
    "-Water",
  ];
