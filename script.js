const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// // 1. Print Developers
// function printDeveloper() {}

// // 2. Add Data
// function addData() {}

// // 3. Remove Admins
// function removeAdmin() {}

// // 4. Concatenate Array
// function concatenateArray() {}

// // 5. Average Age
// function averageAge() {}

// // 6. Age Check
// function checkAgeAbove25() {}

// // 7. Unique Professions
// function uniqueProfessions() {}

// // 8. Sort by Age
// function sortByAge() {}

// // 9. Update Profession
// function updateJohnsProfession() {}

// // 10. Profession Count
// function getTotalProfessions() {}
// 1. Print Developers
function printDeveloper() {
  // console.log(data); 
  data.forEach(
    (person)=>{
      if(person.profession==="developer"){
        console.log(person)
      }
    }
  )
}
printDeveloper();

// 2. Add Data
function addData() {
  //Collect data from user through prompt
  let newname = prompt("Enter the name:");
  let newage = parseInt(prompt("Enter the age:"));
  let newprofession = prompt("Enter the profession:");
  console.log(newname,newage,newprofession);
  data.push({
    name:newname,
   age: newage,
   profession: newprofession,

  })
  console.log(data);


  // // Now we will check whether user provided valid input or not
  // if(name && !isNaN(age) && profession){
  //   //Create a new data object object with the collected data
  //   const newData={name,age,profession};
  //   //Add the new data object to the data Array
  //   data.push(newData);
  //   //Log a message to confirm addition
  //   console.log("Data added",newData);

  // }
  // else{
  //   console.log("Invalid Input.Data not added.")
  // }

}

// // 3. Remove Admins
// function removeAdmin() {
//   //Create a new Array to store non-admin object
//   const newData = [];
//   //Now loop through the existing data array
//   for(let i =0;i<data.length;i++){
//     //Check if the current person's proffesiion is not admin
//     if(data[i].proffession !=="admin"){
//       newData.push(data[i]);
//     }
//   }
//   //now update the data array with new array containing non admins
//   data = newData;
//   console.log("Admin removed",Data);
// }
// 3. Remove Admins
function removeAdmin() {
  // Create a new array with non-admin objects using filter

  data = data.filter((person) => person.profession !== "admin");

  // Log a message to confirm the removal
  console.log("Admins removed:", filteredData);
}


// 4. Concatenate Array
function concatenateArray() {
  const array1 = [1,2,3];
  const array2 = [4,5,6];
  const concatenatedArray = array1.concat(array2);
  console.log("Concatenated Array", concatenatedArray);
}

// 5. Average Age
function averageAge() {
  let avgval =0;
  // for(let i =0;i<data.length;i++){
  //   totalAge+=data[i].age;
  data.forEach((person)=>{
    avgval+=person.age;

  })
  console.log(avgval/data.length);

  }
//   const averageAge = totalAge/data.length;
//   console.log("Average age",averageAge);
// }
// averageAge();

// 6. Age Check
function checkAgeAbove25() {
 let status=false;
 data.forEach(person=>{
  if(person.age>25){
    status=true;
  }
 })
}

// 7. Unique Professions
function uniqueProfessions() {
  //create an empty object to store unique profession
  const uniqueProfessions ={}
  for(let i =0;i<data.length;i++){
const profession = data[i].profession;
uniqueProfessions[profession] = true;
  }
  const uniqueProfessionsArray=Object.keys(uniqueProfessions);
  console.log("Unique Profession",uniqueProfessionsArray);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b) =>a.age - b.age);
  console.log("Sorted by Age Ascending",data);
}

// 9. Update Profession
function updateJohnsProfession() {
  //Loop through the data array to find John professin and update his profession
  for(let i =0;i<data.length;i++){
    if(data[i].name ==="John"){
      data[i].profession ="manager";
      break;
    }
  }
  console.log("John's Updated Profession",data);
}

// 10. Profession Count
function getTotalProfessions() {
  //getTotalProfessions
  let developerCount =0;
  let adminCount =0;
  for(let i =0;i<data.length;i++){
    const profession = data[i].profession;
    if(profession ==="developer"){
      developerCount++;
    }
    else if(profession ==="admin"){
      adminCount++;
    }
  }
  console.log("Total Developers",developerCount);
  console.log("Total Admins",adminCount);
}
