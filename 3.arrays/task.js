function compareArrays(arr1, arr2) {
      return arr1.length === arr2.length && arr1.every((elem, index) => elem === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  let filtered = users.filter(man => man.gender === gender);
  return filtered.reduce((acc, item) => acc + item.age/filtered.length, 0); 
};

