
var Month, date, Year, Operaction;

Actual_Year = new Date().getFullYear();

Month = prompt("Write your month : ");
date  = prompt("Write your date : ");
Year  = parseInt(prompt("Write your year : "));

Operaction = Actual_Year - Year;

document.write("Tu naciste el ", date, " de ", Month, " el ", Year, " y tienes ", Operaction);