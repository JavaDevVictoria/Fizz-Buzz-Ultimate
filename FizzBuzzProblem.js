//Create an object called FizzBuzzPlus

var FizzBuzzPlus = 
{
    isFizzBuzzie: function(value)
    {
        if (value % 3 === 0  || value % 5 === 0)
        {
            if (value % 3 === 0 && value % 5 ===0)
            {
                return false;
            }
            else
            {
               return true; 
            }        
        }
        else
        {
            return false;
        }
    },
    getFizzBuzzSum : function(value)
    {
        var sum = 0;
        for(i=value-1;i<isFizzBuzzie;i--)
        {
            if (this.isFizzBuzzie(i)) {
             sum += i;
            }
        }
        return sum;
    },
    getFizzBuzzCount : function(value)
    {
        var count = 0;
        for(i=0;i<value;i++)
        {
            if (this.isFizzBuzzie(i)===true) {
            count++;
            }
        }
        return count;
    },
    getFizzBuzzAverage : function(value)
    {
      var sum = this.getFizzBuzzSum(value);
      var count = this.getFizzBuzzCount(value);
      var average = (sum / count);
      return average;
    }
};

//create the following functions:

// isFizzBuzzie
// return true if the provided value is
// a multiple of 3 or 5 but not both 3 and 5.
// otherwise it returns false
// arguments: number - integer
// returns: true or false - boolean 

//getFizzBuzzSum
//returns the sum of all the numbers below the valueimum provided 
//which are multiples of 3 or 5 but not both
//arguments: number - valueimum value for search
//returns: number - sum of the numbers below the valueimum which are multiples of 3 or 5 but not both

//getFizzBuzzCount
//returns the count of all the numbers below the valueimum provided 
//which are multiples of 3 or 5 but not both
//arguments: number - valueimum value for search
//returns: number - count of the numbers below the valueimum whihch are multiples of 3 or 5 but not both

//getFizzBuzzAverage
//returns the average(sum/count) of all the numbers below the valueimum provided 
//which are multiples of 3 or 5 but not both
//arguments: number - valueimum value for search
//returns: number - average(sum/count) of the numbers below the valueimum whihch are multiples of 3 or 5 but not both

