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
  const stake = 100; // default stake
  const confidence = Math.floor(Math.random()*4)+7; // 7-10
  const corners = Math.floor(Math.random()*6)+7; // 7-12
  const cards = Math.floor(Math.random()*4)+2; // 2-5
  const btts = Math.random() > 0.4 ? "Yes" : "No";

  result.innerHTML = `
    <h3>${teamA.value} vs ${teamB.value}</h3>
    <p>Straight Win: ${confidence>=9?teamA.value:"Tight Game"}</p>
    <p>Double Chance: ${confidence>=7?"12":"1X"}</p>
    <p>Over 1.5 Goals: YES</p>
    <p>BTTS: ${btts}</p>
    <p>Corners: ${corners}</p>
    <p>Cards: ${cards}</p>
    <p>Stake Suggestion: R${stake}</p>
    <strong>Confidence Score: ${confidence}/10</strong>
  `;
}

function preset(type) {
  let stake, confidence, corners, cards, btts;

  switch(type) {
    case "Quick Pick":
      stake = 50; confidence = 7; corners=8; cards=3; btts="Yes"; break;
    case "Value Bet":
      stake = 100; confidence = 8; corners=9; cards=4; btts="Yes"; break;
    case "High Confidence":
      stake = 150; confidence = 9; corners=10; cards=4; btts="Yes"; break;
  }

  result.innerHTML = `
    <h3>${teamA.value} vs ${teamB.value} (${type})</h3>
    <p>Straight Win: ${confidence>=9?teamA.value:"Tight Game"}</p>
    <p>Double Chance: ${confidence>=7?"12":"1X"}</p>
    <p>Over 1.5 Goals: YES</p>
    <p>BTTS: ${btts}</p>
    <p>Corners: ${corners}</p>
    <p>Cards: ${cards}</p>
    <p>Stake Suggestion: R${stake}</p>
    <strong>Confidence Score: ${confidence}/10</strong>
  `;
}
