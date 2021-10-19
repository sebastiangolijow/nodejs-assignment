const {calculateTeamPoints} = require('../calculateTeamPoints')
const { expect } = require('chai')

describe('calculateTeamPoints', () => {
  it('it should be a function', () => {
    expect(calculateTeamPoints).to.be.a('function')
  });
  test('it should  aggregates points by team, and sorts teams in descending order by total points.', () => {
    const players = [
      {
        'team': 'red',
        'name': 'john',
        'points': 10,
        'isActive': false
      },
      {
        'team': 'red',
        'name': 'mike',
        'points': 20,
        'isActive': true
      },
      {
        'team': 'blue',
        'name': 'mike',
        'points': 10,
        'isActive': true
      },
      {
        'team': 'green',
        'name': 'carl',
        'points': 15,
        'isActive': true
      },
      {
        'team': 'green',
        'name': 'jose',
        'points': 25,
        'isActive': true
      },
      {
        'team': 'red',
        'name': 'sue',
        'isActive': false,
        'points': 35
      }
    ]
    const output = [{ team: 'green', points: 40 }, { team: 'red', points: 20 }, { team: 'blue', points: 10 }]
    expect(calculateTeamPoints(players)).equal(output)
  })
})
