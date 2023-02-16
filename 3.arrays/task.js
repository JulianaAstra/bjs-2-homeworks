function compareArrays(arr1, arr2) {
    if (arr1.length < arr2.length) {
        let newArr2 = arr1.slice();
        arr1 = arr2;
        arr2 = newArr2;
      }
    
      return arr1.every((elem, index) => elem === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  let filtered = users.filter(man => man.gender === gender);
  return filtered.reduce((acc, item) => acc + item.age/filtered.length, 0); 
};

