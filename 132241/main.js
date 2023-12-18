document.querySelector(".btn").addEventListener("click", () => {
  //Your Code

  const input = document.querySelector('.input').value;
  const result = document.querySelector('.result');

  let arr = input.split("");
  let dots = [];

  arr.forEach(element => {
    dots.push(+obj[element])
  });

  const sum = dots.reduce((partialSum, a) => partialSum + a, 0);

  result.innerHTML = sum
});
