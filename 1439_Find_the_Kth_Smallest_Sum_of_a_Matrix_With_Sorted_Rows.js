const kthSmallest = (mat, k) => {
  const priorityQueue = [];

  let cur = mat.reduce((acc, a) => acc + a[0], 0);
  let pointers = Array(mat.length).fill(0);

  priorityQueue.push([cur, pointers]);
  let seen = [];

  let result;

  for (let i = 0; i < k; i++) {
    let [acc, pointers] = priorityQueue.shift();

    for (let j = 0; j < pointers.length; j++) {
      let pointer = pointers[j];

      if (pointer !== mat[0].length - 1) {
        let temp_pointers = [...pointers];

        temp_pointers[j] = pointer + 1;

        if (!seen.some(pointer => temp_pointers.every((v, i) => v === pointer[i]))) {
          let value = acc + mat[j][pointer + 1] - mat[j][pointer];

          seen.push(temp_pointers);

          priorityQueue.push([value, temp_pointers]);
          priorityQueue.sort((a, b) => a[0] - b[0]);
        }
      }
    }

    result = acc;
  }

  return result;
};
