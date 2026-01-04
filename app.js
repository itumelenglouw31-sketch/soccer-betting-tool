const leagues = {
  "Premier League": [
    "Arsenal","Aston Villa","Bournemouth","Brentford","Brighton",
    "Burnley","Chelsea","Crystal Palace","Everton","Fulham",
    "Liverpool","Luton Town","Man City","Man United",
    "Newcastle","Nottingham Forest","Sheffield United",
    "Tottenham","West Ham","Wolves"
  ],

  "La Liga": [
    "Real Madrid","Barcelona","Atletico Madrid","Sevilla","Valencia",
    "Villarreal","Real Sociedad","Athletic Bilbao","Real Betis",
    "Osasuna","Getafe","Celta Vigo","Granada","Alaves",
    "Mallorca","Las Palmas","Cadiz","Girona","Rayo Vallecano","Almeria"
  ],

  "Serie A": [
    "Inter","AC Milan","Juventus","Napoli","Roma","Lazio",
    "Atalanta","Fiorentina","Bologna","Torino","Monza",
    "Genoa","Udinese","Cagliari","Verona","Empoli",
    "Frosinone","Lecce","Salernitana","Sassuolo"
  ],

  "Bundesliga": [
    "Bayern Munich","Borussia Dortmund","RB Leipzig",
    "Bayer Leverkusen","Stuttgart","Eintracht Frankfurt",
    "Wolfsburg","Hoffenheim","Freiburg","Augsburg",
    "Mainz","Union Berlin","Werder Bremen","Bochum",
    "Heidenheim","Darmstadt","Koln","Mönchengladbach"
  ],

  "Ligue 1": [
    "PSG","Marseille","Monaco","Lyon","Nice","Lille",
    "Rennes","Lens","Montpellier","Nantes","Reims",
    "Strasbourg","Toulouse","Brest","Metz","Clermont",
    "Lorient","Le Havre"
  ]
};

const leagueSelect = document.getElementById("league");
const teamA = document.getElementById("teamA");
const teamB = document.getElementById("teamB");
const result = document.getElementById("result");

Object.keys(leagues).forEach(league => {
  leagueSelect.innerHTML += `<option>${league}</option>`;
});

function loadTeams() {
  teamA.innerHTML = "";
  teamB.innerHTML = "";
  leagues[leagueSelect.value].forEach(team => {
    teamA.innerHTML += `<option>${team}</option>`;
    teamB.innerHTML += `<option>${team}</option>`;
  });
}

leagueSelect.onchange = loadTeams;
loadTeams();

function analyze() {
  result.innerHTML = `
    <h3>${teamA.value} vs ${teamB.value}</h3>
    <p>Straight Win: ${teamA.value}</p>
    <p>Double Chance: 1X</p>
    <p>Over 1.5 Goals: YES</p>
    <p>Corners: 8–12</p>
    <p>Cards: 3–6</p>
    <strong>Confidence: HIGH</strong>
  `;
    }
