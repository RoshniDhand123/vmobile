const getGreeting = () => {
  var day = new Date();
  var hr = day.getHours();
  if (hr >= 0 && hr < 12) {
    return "Morning";
  } else if (hr >= 12 && hr <= 17) {
    return "Afternoon";
  } else {
    return "Evening";
  }
};
export { getGreeting };
