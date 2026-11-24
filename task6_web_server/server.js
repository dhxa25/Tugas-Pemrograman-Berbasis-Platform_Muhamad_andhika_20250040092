
const http = require("http");

// Data MotoGP
const motoGP = [
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

// Mengambil informasi penting
function formatData(data) {
    return data.map(item => ({
        circuit: item.circuit,
        location: item.location,
        winner: item.winner.firstName + " " + item.winner.lastName,
        country: item.winner.country
    }));
}

// Membuat tampilan HTML berbentuk list
function buatList(data, judul) {
    let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${judul}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 30px;
                }

                h1 {
                    color: #333;
                }

                li {
                    margin-bottom: 20px;
                    line-height: 1.8;
                }
            </style>
        </head>
        <body>
            <h1>${judul}</h1>
            <ul>
    `;

    for (let i = 0; i < data.length; i++) {
        html += `
            <li>
                <strong>Circuit:</strong> ${data[i].circuit}<br>
                <strong>Location:</strong> ${data[i].location}<br>
                <strong>Winner:</strong> ${data[i].winner}<br>
                <strong>Country:</strong> ${data[i].country}
            </li>
        `;
    }

    html += `
            </ul>
        </body>
        </html>
    `;

    return html;
}

// Membuat Web Server
const server = http.createServer((req, res) => {
    let result;

    // Menampilkan seluruh data JSON
    if (req.url === "/") {
        result = motoGP;

    // Menampilkan data circuit
    } else if (req.url === "/circuit") {
        let circuits = motoGP.map(item => item.circuit);

        let html = "<h1>Daftar Circuit MotoGP</h1><ul>";

        for (let i = 0; i < circuits.length; i++) {
            html += `<li>${circuits[i]}</li>`;
        }

        html += "</ul>";

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(html);
        return;

    // Menampilkan data dalam bentuk list
    } else if (req.url === "/pretty") {
        result = formatData(motoGP);

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(buatList(result, "Data MotoGP"));
        return;

    // Mengelompokkan berdasarkan negara
    } else if (req.url === "/country") {
        result = {};

        for (let i = 0; i < motoGP.length; i++) {
            let country = motoGP[i].winner.country;

            if (!result[country]) {
                result[country] = [];
            }

            result[country].push(motoGP[i]);
        }

    // Mengelompokkan berdasarkan nama pemenang
    } else if (req.url === "/name") {
        result = {};

        for (let i = 0; i < motoGP.length; i++) {
            let name = motoGP[i].winner.firstName + " " +
                       motoGP[i].winner.lastName;

            if (!result[name]) {
                result[name] = [];
            }

            result[name].push(motoGP[i]);
        }

    // URL tidak ditemukan
    } else {
        res.writeHead(400, {
            "Content-Type": "text/plain; charset=utf-8"
        });

        res.end("Bad Request");
        return;
    }

    // Mengirim response JSON
    res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8"
    });

    res.end(JSON.stringify(result, null, 4));
});

// Menjalankan server
server.listen(8000, () => {
    console.log("Server berjalan di http://localhost:8000");
});
