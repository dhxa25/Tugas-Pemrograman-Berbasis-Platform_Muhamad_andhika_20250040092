let motoGP = [
    {
        circuit: "Losail",
        location: "Qatar",
        winner: {
            firstName: "Andrea",
            lastName: "Dovizioso",
            country: "Italy"
        }
    },
    {
        circuit: "Autodromo",
        location: "Argentine",
        winner: {
            firstName: "Cal",
            lastName: "Crutchlow",
            country: "UK"
        }
    },
    {
        circuit: "De Jerez",
        location: "Spain",
        winner: {
            firstName: "Valentino",
            lastName: "Rossi",
            country: "Italy"
        }
    },
    {
        circuit: "Mugello",
        location: "Italy",
        winner: {
            firstName: "Andrea",
            lastName: "Dovizioso",
            country: "Italy"
        }
    }
];

// Mengelompokkan data berdasarkan negara pemenang
let groupedWinners = {};

for (let i = 0; i < motoGP.length; i++) {
    let country = motoGP[i].winner.country;
    let winnerName = motoGP[i].winner.firstName + " " + motoGP[i].winner.lastName;

    if (!groupedWinners[country]) {
        groupedWinners[country] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    groupedWinners[country].winningCircuits.push({
        name: winnerName,
        winLocation: motoGP[i].circuit + ", " + motoGP[i].location
    });

    groupedWinners[country].totalWin++;
}

console.log(JSON.stringify(groupedWinners, null, 2));