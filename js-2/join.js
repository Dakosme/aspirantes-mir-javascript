function join(arr) {
    if (arr.length === 0) {
      return '';
    }
  
    let result = '';
  
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
  
      if (i !== arr.length - 1) {
        result += ' ';
      }
    }
  
    return result;
  }

const array = ['Hola', 'mundo','Make it Real'];
const joinedString = join(array);
console.log(joinedString);