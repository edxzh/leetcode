const canConstruct = (ransomNote, magazine) => {
  const ransomNoteArr = ransomNote.split('').sort();
  const magazineArr = magazine.split('').sort();

  let i = 0;
  let j = 0;

  while (i <= ransomNoteArr.length) {
    const magazineLetter = magazineArr[j];
    const ransomNoteLetter = ransomNoteArr[i];

    if (!magazineLetter) return false;

    if (magazineLetter < ransomNoteLetter) {
      j++;
    } else if (magazineLetter > ransomNoteLetter) {
      return false;
    } else {
      i++;
      j++;
    }
  }

  return true;
};
