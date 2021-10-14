// converts from celcius to fahrenheit and vice versa

function tempConverter(degree, unit) {
  if (unit.includes("el")) {
    return Math.round(((degree * 9) / 5 + 32) * 10) / 10 + " °F";
  } else if (unit.includes("ahr")) {
    return Math.round((((degree - 32) * 5) / 9) * 10) / 10 + " °C";
  } else {
    console.log("Please enter a temperature and temperature unit.");
  }
}
