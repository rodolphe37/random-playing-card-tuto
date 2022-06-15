const useRandomValueFromArray = () => {
  let alreadyDone = [];

  const randomValueFromArray = (myArray) => {
    if (alreadyDone.length === 0) {
      for (let i = 0; i < myArray.length; i++) alreadyDone.push(i);
    }
    let randomValueIndex = Math.floor(Math.random() * alreadyDone.length);
    let indexOfItemInMyArray = alreadyDone[randomValueIndex];

    alreadyDone.splice(randomValueIndex, 1);

    return myArray[indexOfItemInMyArray];
  };
  return {
    randomValueFromArray,
  };
};

export default useRandomValueFromArray;
