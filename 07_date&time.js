let now = new Date();
console.log('Current Date and Time:', now);

// extracting components
/*
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // Months are zero-based
console.log("Date:", now.getDate());

console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
*/


// days of the week
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// console.log("Day of the Week:", days[now.getDay()]);

console.log("timestamp:", now.getDate());

// formatting date
let formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
console.log("Formatted Date (DD/MM/YYYY):", formattedDate);

//yesterday's date
let yesterday = new Date(now);
yesterday.setDate(now.getDate() - 1);
console.log("Yesterday's Date:", yesterday.toDateString());

//today's date
let today = new Date(now);
console.log("Today's Date:", today.toDateString());

// tomorrow's date
let tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
console.log("Tomorrow's Date:", tomorrow.toDateString());



