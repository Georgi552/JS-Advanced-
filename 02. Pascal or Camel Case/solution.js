function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = ''
  if (convention == "Camel Case"){
    let camel2 = text.toLowerCase();
    let camel = camel2.split(' ');
    for (const el of camel) {
      if (el == camel[0]) {
        result += el[0]
      } else {
        result += el[0].toUpperCase();
      }
      for (let i = 1; i < el.length ; i++) {
        result += el[i]
      }
    }
  } 
  else if (convention == "Pascal Case"){
    let paskal2 = text.toLowerCase();
    let paskal = paskal2.split(' ');
    for (const el of paskal) {
      result += el[0].toUpperCase();
      for (let i = 1; i < el.length ; i++) {
        result += el[i]
      }
    }
  } 
  else {
    result = 'Error!'
  }
  document.getElementById('result').textContent = result
  
}