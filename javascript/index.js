
const tickets = [
    ['Paris', 'Skopje'],
    ['Zurich', 'Amsterdam'],
    ['Prague', 'Zurich'],
    ['Barcelona', 'Berlin'],
    ['Kiev', 'Prague'],
    ['Skopje', 'Paris'],
    ['Amsterdam', 'Barcelona'],
    ['Berlin', 'Kiev'],
    ['Berlin', 'Amsterdam']
  ];
  
  const startCity = 'Kiev';
  const visited = new Set();
  const route = [];
  
  function dfs(city) {
    visited.add(city);
    route.push(city);
  
    for (const ticket of tickets) {
      const [from, to] = ticket;
  
      if (from === city && !visited.has(to)) {
        dfs(to);
      }
    }
  }
  
  dfs(startCity);
  
  console.log(route.join("->")); // Output: [ 'Kiev', 'Prague', 'Zurich', 'Amsterdam', 'Barcelona', 'Berlin' ]
  