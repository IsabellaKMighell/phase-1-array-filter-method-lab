// Code your solution here
function findMatching(driversNames, string){
    return driversNames.filter(function(driver){
        return driver.toLowerCase() === string.toLowerCase()})
}

//fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(driversNames, string){
   return driversNames.filter((driver) => driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
}
         
//matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. 
//The function should return each element whose name property matches the provided string argument.
function matchName(driversRecords, driverNames){
   return driversRecords.filter( driversRecord => driversRecord.name === driverNames)
}