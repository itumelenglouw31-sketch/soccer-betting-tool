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
  ],
  "PSL": [
    "Mamelodi Sundowns","Orlando Pirates","Kaizer Chiefs",
    "SuperSport United","Cape Town City","Sekhukhune United",
    "Stellenbosch","Golden Arrows","Richards Bay","TS Galaxy",
    "Polokwane City","Royal AM","Moroka Swallows","Chippa United",
    "AmaZulu","Maritzburg United"
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
  const confWin = Number(document.getElementById("confWin").value);
  const confDouble = Number(document.getElementById("confDouble").value);
  const confOver = Number(document.getElementById("confOver").value);
  const confBTTS = Number(document.getElementById("confBTTS").value);
  const confCorners = Number(document.getElementById("confCorners").value);
  const confCards = Number(document.getElementById("confCards").value);
  const stake = 100;

  result.innerHTML = `
    <h3>${teamA.value} vs ${teamB.value}</h3>
    <p>Straight Win: ${teamA.value} (${confWin}%)</p>
    <p>Double Chance: 1X (${confDouble}%)</p>
    <p>Over 1.5 Goals: YES (${confOver}%)</p>
    <p>BTTS: ${confBTTS}%</p>
    <p>Corners: ${confCorners}%</p>
    <p>Cards: ${confCards}%</p>
    <p>Stake Suggestion: R${stake}</p>
  `;
}

function preset(type){
  switch(type){
    case "Quick Pick":
      document.getElementById("confWin").value = 80;
      document.getElementById("confDouble").value = 70;
      document.getElementById("confOver").value = 90;
      document.getElementById("confBTTS").value = 60;
      document.getElementById("confCorners").value = 50;
      document.getElementById("confCards").value = 40;
      break;
    case "Value Bet":
      document.getElementById("confWin").value = 85;
      document.getElementById("confDouble").value = 75;
      document.getElementById("confOver").value = 95;
      document.getElementById("confBTTS").value = 70;
      document.getElementById("confCorners").value = 55;
      document.getElementById("confCards").value = 45;
      break;
    case "High Confidence":
      document.getElementById("confWin").value = 90;
      document.getElementById("confDouble").value = 85;
      document.getElementById("confOver").value = 95;
      document.getElementById("confBTTS").value = 80;
      document.getElementById("confCorners").value = 60;
      document.getElementById("confCards").value = 50;
      break;
  }
  analyze();
    }
