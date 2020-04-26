const res = document.getElementById('res');

document.getElementById('btns').addEventListener('click', function (event) {
  const button = event.target || event.srcElement;
  buttonClick(button);
});

function buttonClick(button) {
  switch (button.id) {
    case 'btn0':
      res.innerHTML += '0';
      break;
    case 'btn1':
      res.innerHTML += '1';
      break;
    case 'btnClr':
      res.innerHTML = "";
      break;
    case 'btnEql':
      if (res.innerHTML.length === 0 || res.innerHTML.endsWith('+' || '-' || '*' || '/')) {
        return;
      }

      const [operand1, operator, operand2] = res.innerHTML.split(/\b/);
      const [n1, n2] = [parseInt(operand1, 2), parseInt(operand2, 2)];

      res.innerHTML =  eval(n1 + operator + n2).toString(2).toString(2);
      break;
    case 'btnSum':
      res.innerHTML += '+';
      break;
    case 'btnSub':
      res.innerHTML += "-";
      break;
    case 'btnMul':
      res.innerHTML += "*";
      break;
    case 'btnDiv':
      res.innerHTML += "/";
      break;
  }

}


