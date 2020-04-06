// edabit easy assignment #1 //

//creating a function will addup the input number up to the no 10 //


function addUp(num:number) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

  console.log(addUp(4));

  //------------------------------------------------------------------------//
  
// edabit easy assignment #2 //
//// Create a function that takes a number or string , then when you enter a number tells you you passed in a number , and when you enter a string it will tell you that you passed in a string //

const unionTypeFunction =(a: string | number )=>{
    if (typeof a === "string"){
        console.log('you passed in a string ');

    }else if (typeof a === "number"){
        console.log("you passed in number");

    }
}
 unionTypeFunction(3);
 unionTypeFunction('hello world');

//-----------------------------------------------------------------------------------//

// etabit medium assignment #1 //




// make a function to calaculate the area of triangel , 



function areaOfTriangle ( Height: number, Base : number )
{

    
    
    return ((Height * Base) / 2);


}


console.log(areaOfTriangle(5,6));

//---------------------------------------------------------------//

//edabit Meduim Assignment #2 ----------------

function getBudgets(array: string | any[]) {

	var sum =0 /* i declare var  sum with inital value of 0 */ 

    for (let i=0; i <array.length; i++) /* then i will loop inside the array length to make sure covering all the objects inside the array*/

    {

		sum +=array[i].budget /* now it will add all the budget elements values inside each object together to get th sum during looping inside each object in the array*/

	}

	return sum /* now it will retrun the value of the sum after do complete loop */



}



/* now time to test the function */

  

  let arrayOneTest =[

    { name: "Mahmoud", age: 39, budget: 88000 },

    { name: "Panyet",  age: 32, budget: 68000 },

    { name: "Panyoot",  age: 22, budget:24000 }

  ];

/* i used spread operstor to get the array ready to use in th function*/

let arrayTwoTest=[...arrayOneTest];



console.log(arrayTwoTest);



/* now i am using the function to get the total budget*/

console.log("The Total Budget is :"+getBudgets(arrayTwoTest)+"CAD");
