$(document).ready(start());

function start(){
  $('#submitButton').on('click', testFunction);
}

function testFunction(){
  console.log('hi');
}
class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 );
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log( employees );

for(let i = 0; i < employees.length; i++){
  console.log(employeeComp(employees[i]));
}


function employeeComp(employee){
  let bonusPercentage = bonusCalculator(employee);
  let totalBonus = (bonusPercentage/100) * parseInt(employee.annualSalary);
  let totalCompensation = Math.round(totalBonus + parseInt(employee.annualSalary));

  let employeeBonus = {
    name : employee.name,
    bonusPercentage : bonusPercentage,
    totalCompensation : totalCompensation,
    totalBonus : totalBonus
  };

  return employeeBonus;

}




function bonusCalculator(employee){
  let bonus = 0;

  if(employee.employeeNumber.length === 4){
    bonus+= 5;
  }

  if(parseInt(employee.annualSalary) > 65000){
    bonus--;
  }

  if(employee.reviewRating <= 2){
    bonus = 0;
  }else if(employee.reviewRating == 3){
    bonus+=4;
  }else if (employee.reviewRating == 4){
    bonus+=6;
  }else if (employee.reviewRating == 5){
    bonus+=10;
  }


  if(bonus >= 13){
    bonus=13;
  }

  return bonus;
}