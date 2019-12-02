exports.getMeteors = (query = '') => {
  let formatted = '';
  if (query) {
    formatted = '?name=' + query;
  }
  return fetch(
    `https://data.nasa.gov/resource/gh4g-9sfh.json${formatted}`
  ).then(data => {
    return data.json();
  });
};

exports.formatCoordinates = arr => {
  const data = arr.map(meteorite => {
    let location = {};
    location.x = +meteorite.reclong;
    location.y = +meteorite.reclat;
    if (!location.y || !location.x) {
      location.x = null;
      location.y = null;
    }
    return location;
  });

  return data;
};
