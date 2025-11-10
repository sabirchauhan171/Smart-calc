let a = 20;
let b = 10;

let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;

console.log("Addition: " + add);
console.log("Subtraction: " + sub);
console.log("Multiplication: " + mul);
console.log("Division: " + div);

let x = 5, y = 10;
console.log("Before Swap: x=" + x + ", y=" + y);

let temp = x;
x = y;
y = temp;

console.log("After Swap: x=" + x + ", y=" + y);

let marks = 85;
let grade = "A"; 
console.log("Marks: " + marks + " | Grade: " + grade);


let price = 500;
let quantity = 3;
let total = price * quantity;
let discount = (10 / 100) * total; 
let netAmount = total - discount;

console.log("Bill Calculation:");
console.log("Price: " + price);
console.log("Quantity: " + quantity);
console.log("Total: " + total);
console.log("Discount: " + discount);
console.log("Net Amount: " + netAmount);

let P = 10000;  
let R = 5;      
let T = 2;      
let SI = (P * R * T) / 100;
console.log("Simple Interest = " + SI);

let basic = 15000;
let hra = (20 / 100) * basic;
let da = (10 / 100) * basic;
let gross = basic + hra + da;

console.log("Employee Salary Calculation:");
console.log("Basic: " + basic);
console.log("HRA: " + hra);
console.log("DA: " + da);
console.log("Gross Salary: " + gross);

document.write("<h3>📋 Results in Document</h3>");
document.write("Addition: " + add + "<br>");
document.write("Net Bill Amount: " + netAmount + "<br>");
document.write("Simple Interest: " + SI + "<br>");
document.write("Gross Salary: " + gross + "<br>");

alert("Swapping Done! x=" + x + " y=" + y);

document.getElementById("output").innerHTML = `
  <h2>📊 Summary (Using innerHTML)</h2>
  <p>Addition: ${add}</p>
  <p>Bill Total: ${total}</p>
  <p>Net Amount: ${netAmount}</p>
  <p>Simple Interest: ${SI}</p>
  <p>Gross Salary: ${gross}</p>
`;
