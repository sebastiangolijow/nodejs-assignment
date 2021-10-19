// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]

const players = require('./__tests__/__data__/players.json')

function eliminarObjetosDuplicados(arr, prop) {
  var nuevoArray = [];
  var lookup  = {};

  for (var i in arr) {
      lookup[arr[i][prop]] = arr[i];
  }

  for (i in lookup) {
      nuevoArray.push(lookup[i]);
  }

  return nuevoArray;
}

const calculateTeamPoints = (players) => {
  let result = [];
    players.map(item => {
      if(item.isActive === true){
        result.push({team: item.team, points: 0})
        result.map(value => {
          if(item.team === value.team){
            value.points += item.points
          }
        })
      }
    })
  return  eliminarObjetosDuplicados(result, 'team');
}; 

console.log(calculateTeamPoints(players));

