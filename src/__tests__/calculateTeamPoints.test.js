const { calculateTeamPoints } = require('../calculateTeamPoints')
const { expect } = require('chai')

describe('calculateTeamPoints', () => {
  it('it should be a function', () => {
    expect(calculateTeamPoints).to.be.a('function')
  })
  const players = [
    {
      team: 'red',
      name: 'john',
      points: 10,
      isActive: false
    },
    {
      team: 'red',
      name: 'mike',
      points: 20,
      isActive: true
    },
    {
      team: 'blue',
      name: 'mike',
      points: 10,
      isActive: true
    },
    {
      team: 'green',
      name: 'carl',
      points: 15,
      isActive: true
    },
    {
      team: 'green',
      name: 'jose',
      points: 25,
      isActive: true
    },
    {
      team: 'red',
      name: 'sue',
      isActive: false,
      points: 35
    }
  ]
  it('it return an array of 3', () => {
    expect(calculateTeamPoints(players)).to.have.length(3)
  })
})
