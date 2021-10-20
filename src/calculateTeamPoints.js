// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]
const players = require('./__tests__/__data__/players.json')

const calculateTeamPoints = (players) => {
  const result = []
  players.forEach(player => {
    const teamExists = result.find((item) => { return item.team === player.team })
    if (!teamExists) { result.push({ team: player.team, points: 0 }) }
  })
  /* Queda temporariamente [{points: 0,team: "red"},{points: 0,team: "blue"},{points: 0, team: "green"}] */
  players.forEach(player => {
    if (player.isActive) {
      for (const item of result) {
        /* Por cada equipo sumo los puntos  */
        if (item.team === player.team) {
          item.points += player.points
        }
      }
    }
  })
  return result.sort(function (a, b) {
    if (a.points < b.points) {
      return 1
    }
    if (a.points > b.points) {
      return -1
    }
    return 0
  })
}

console.log(calculateTeamPoints(players))

module.exports = {
  calculateTeamPoints
}
