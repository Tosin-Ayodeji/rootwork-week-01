const age = 21; 
const score = 86; 
const hasLaptop = true; 
const hasInternet = true;
const completedApplication = true;

 if (
    age >= 18 &&
    score >= 60 &&
    completedApplication &&
    hasLaptop &&
    hasInternet &&
    score >= 85
 ) {console.log("Priority candidate")}
else if (
    age >= 18 &&   
    completedApplication &&
    hasLaptop &&
    hasInternet &&
    score >= 60
) {console.log("Eligible")}
else {console.log("Not eligible")}