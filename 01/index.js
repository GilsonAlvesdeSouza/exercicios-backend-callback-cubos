const resultado = (num) => {
  let i = 1;
  let result = "";
  while (i <= 10) {
    result += `${num} + ${i} = ${num + i} \n`;
    i++;
  }
  return result;
};

function tabuada(num, callback) {
  return callback(num);
}


console.log(tabuada(5, resultado));