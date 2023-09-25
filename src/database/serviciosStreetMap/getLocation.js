
const getLocation = (ubicacion) => {
  return new Promise((resolve, reject) => {
    fetch(`https://nominatim.openstreetmap.org/search.php?q=${ubicacion}&format=jsonv2`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const displayName = data[0].display_name;
        resolve(displayName);
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
        reject(error);
      });
  });
};

module.exports = getLocation;
