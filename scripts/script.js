const courses = {'ACIT 1420':'Introduction to Systems Administration','ACIT 1620':'Fundamental Web Technologies','ACIT 1630':'Database Systems'};

let code = prompt("Please enter the course code number (4 digit code only:");

    
while(isNaN(Number(code)) || code.length !== 4){
    alert('Invalid code!');
    code = prompt("Please enter the course code number (4 digit code only:");
}

   
