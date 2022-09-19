var number = parseInt(prompt('Enter a given number'));
var temp = number;
var sum = 0;
var lastDigit;
while (temp) {
    lastDigit = temp % 10;
    sum=sum+lastDigit;
    temp=(temp-lastDigit)/10;

}
console.log('Sum of given number');
console.log(sum);