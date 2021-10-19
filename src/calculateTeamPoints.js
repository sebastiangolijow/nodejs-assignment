// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]

const players = [
  {
      "team": "red",
      "name": "john",
      "points": 10,
      "isActive": false
  },
  {
      "team": "red",
      "name": "mike",
      "points": 20,
      "isActive": true
  },
  {
      "team": "blue",
      "name": "mike",
      "points": 10,
      "isActive": true
  },
  {
      "team": "green",
      "name": "carl",
      "points": 15,
      "isActive": true
  },
  {
      "team": "green",
      "name": "jose",
      "points": 25,
      "isActive": true
  },
  {
      "team": "red",
      "name": "sue",
      "isActive": false,
      "points": 35
  }
]


const calculateTeamPoints = (players) => {
  let result = [{team:'red', points:0}, {team:'green', points:0}, {team:'blue', points:0}, ];
  for (var i = 0; i < result.length; i++){
    players.map(item => {
      if(item.isActive === true){
        if(item.team === result[i].team){
          result[i].points += item.points
        }
      }
    })
  }
  return result.sort(function (a, b) {
    if (a.points < b.points) {
      return 1;
    }
    if (a.points > b.points) {
      return -1;
    }
    return 0;
  });
}


console.log(calculateTeamPoints(players));
