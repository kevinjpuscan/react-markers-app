export default () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        resolve(position.coords);
      });
    } else {
      reject("Geolocation no active");
    }
  });
};
