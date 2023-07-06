function verificaVazio() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  if (value1 === '' || value2 === '') {
    throw new Error('Preencha os campos para realizar a soma');
  }
}

function verificaNumerico() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const number1 = Number(value1);
  const number2 = Number(value2);
  console.log(typeof number1, typeof number2);
  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    throw new Error('Informe dois números para realizar a soma');
  }
}

function calculateSum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;

  const value3 = document.getElementById('value1');

  try {
    verificaVazio();
    verificaNumerico();
    return Number(value1) + Number(value2);
  } catch (error) {
    return error.message;
  } finally {
    value3.value = '';
    document.getElementById('value2').value = '';
  }
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  const result = calculateSum();
  displayResult(result);
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
