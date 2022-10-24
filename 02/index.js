const mutiplicationTable = (values, callback) => {
  return callback(values);
};

const callbackMultiplicationTable = (values) => {
  let result = '';

  for (value of values) {
    let count = 0;
    while (count <= 10) {
      result += `${value} X ${count} = ${value * count} \n`;
      count++;
    }
    result += '--------------- \n\n';
  }

  return result;
};


console.log(mutiplicationTable([1, 5, 2], callbackMultiplicationTable));

