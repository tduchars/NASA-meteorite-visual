const { formatCoordinates } = require('../index');
describe('formatCoordinates()', () => {
  it('renames keys for single object', () => {
    const meteorites = [
      {
        name: 'Aachen',
        id: '1',
        nametype: 'Valid',
        recclass: 'L5',
        mass: '21',
        fall: 'Fell',
        year: '1880-01-01T00:00:00.000',
        reclat: '50.775000',
        reclong: '6.083330',
        geolocation: {
          latitude: '50.775',
          longitude: '6.08333'
        }
      }
    ];
    expect(formatCoordinates(meteorites)).toEqual([
      {
        y: 50.775,
        x: 6.08333
      }
    ]);
  });
  it('renames keys for mutiple objects', () => {
    const meteorites = [
      {
        name: 'Aachen',
        id: '1',
        nametype: 'Valid',
        recclass: 'L5',
        mass: '21',
        fall: 'Fell',
        year: '1880-01-01T00:00:00.000',
        reclat: '50.775000',
        reclong: '6.083330',
        geolocation: {
          latitude: '50.775',
          longitude: '6.08333'
        }
      },
      {
        name: 'Aarhus',
        id: '2',
        nametype: 'Valid',
        recclass: 'H6',
        mass: '720',
        fall: 'Fell',
        year: '1951-01-01T00:00:00.000',
        reclat: '56.183330',
        reclong: '10.233330',
        geolocation: {
          latitude: '56.18333',
          longitude: '10.23333'
        }
      },
      {
        name: 'Abee',
        id: '6',
        nametype: 'Valid',
        recclass: 'EH4',
        mass: '107000',
        fall: 'Fell',
        year: '1952-01-01T00:00:00.000',
        reclat: '54.216670',
        reclong: '-113.000000',
        geolocation: {
          latitude: '54.21667',
          longitude: '-113.0'
        }
      }
    ];
    expect(formatCoordinates(meteorites)).toEqual([
      {
        y: 50.775,
        x: 6.08333
      },
      {
        y: 56.18333,
        x: 10.23333
      },
      {
        y: 54.21667,
        x: -113.0
      }
    ]);
  });
  it('returns null for longitude and latitude when not passed longitude or latitude', () => {
    const meteorites = [
      {
        name: 'Aachen',
        id: '1',
        nametype: 'Valid',
        recclass: 'L5',
        mass: '21',
        fall: 'Fell',
        year: '1880-01-01T00:00:00.000',
        geolocation: {}
      }
    ];
    expect(formatCoordinates(meteorites)).toEqual([
      {
        y: null,
        x: null
      }
    ]);
  });
});
