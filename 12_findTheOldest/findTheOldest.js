const findTheOldest = function (people) {
  //Get the current year
  const currentYear = newDate().getFullYear(); //getFullYear() - returns e.g. 1965 and new Dat() - Fri Oct 11 2024 09:47:25 GMT+0200 (Central European Summer Time)
  // Method reduce to find the oldest person
  return people.reduce((oldest, person) => {
    const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    return age > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
