export const getAge = dob => {
  const diff = Date.now() - new Date(dob).getTime(); // dob e.g. "2020-01-11"
  const age = new Date(diff).getUTCFullYear() - 1970;
  return age > 0 ? age : 0;
};

export const getRandomArrayItems = (array, numOfItems) => {
  // Shuffle array
  const shuffled = array.sort(() => 0.5 - Math.random());
  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, numOfItems);
  return selected;
};
