
var Month, date, Year, Operaction;

Actual_Year = new Date().getFullYear();

Month = prompt("Write your month : ");
date = prompt("Write your date : ");
Year = parseInt(prompt("Write your year : "));

Operaction = Actual_Year - Year;

document.write("You were born on ", date, " of ", Month, " the ", Year, " and you're ", Operaction, "years old");