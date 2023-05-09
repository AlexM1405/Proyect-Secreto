class Soccer {
    constructor(team, league, stadium, coach) {
      this.team = team;
      this.league = league;
      this.stadium = stadium;
      this.coach = coach;
      this.players = [];
    }
  
    addPlayer(player) {
      this.players.push(player);
    }
  
    removePlayer(player) {
      this.players = this.players.filter(p => p !== player);
    }
  
    getTeamInfo() {
      return `The ${this.team} is a professional soccer team in the ${this.league} league. The team plays their home matches at ${this.stadium} and is coached by ${this.coach}.`;
    }
  
    getPlayerNames() {
      return this.players.map(p => p.name);
    }
  
    getAverageAge() {
      const totalAge = this.players.reduce((acc, cur) => acc + cur.age, 0);
      return totalAge / this.players.length;
    }
  }
  
  class Player {
    constructor(name, age, position, number) {
      this.name = name;
      this.age = age;
      this.position = position;
      this.number = number;
    }
  
    getInfo() {
      return `${this.name} is a ${this.age}-year-old ${this.position} who wears the number ${this.number}.`;
    }
  }
  