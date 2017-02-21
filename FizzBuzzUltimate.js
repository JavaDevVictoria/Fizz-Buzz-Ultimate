// Add an else statement in case the number is divisible by 5. 

maximum = prompt("Enter a number");

// for the numbers 1 through whatever number the user enters,
for (i=1; i<=maximum; i++) { 
  
  // if the number is divisible by 3, write "Fizz"
  if ( i % 3 === 0 ) { 
    if ( i % 5 === 0)
    {
      console.log("FizzBuzz");
    }  
    else
    {  
      console.log("Fizz");
    }
  }
  
  // if the number is divisible by 5, write "Buzz"
  else if (i % 5 === 0)
  {
    console.log("Buzz");
  }
  
  // otherwise, write just the number
  else {
    console.log(i);
  }
}
