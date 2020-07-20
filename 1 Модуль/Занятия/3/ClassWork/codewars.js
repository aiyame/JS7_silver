 let summ = 0;
 while (true){
  const userAnswer = prompt('Enter a number');
  if (userAnswer === null){
    break;
  }
  const number = parseInt(userAnswer);
   if (!isNaN(number)) {
     summ += number;
   }
 }

 alert(summ);
