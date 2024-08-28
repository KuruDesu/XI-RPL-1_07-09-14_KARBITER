function showPopup(profileIndex) {
    const profileInfo = [
        {
            nama: "I Kadek Ardha Wijaya Kusuma",
            asal: "Klungkung",
            alamat: "Jln Batuyang Gg Kakak Tua Matahari no 7",
            ttl: "Denpasar, 7 Juli 2008",
            agama: "Hindu",
            golonganDarah: "O",
            hobi: "Bermain Game",
            umur: "16 tahun",
            jurusan: "Rekayasa Perangkat Lunah",
            ekstrakurikuler: "Basket",
            tinggiBadan: "169 cm",
            beratBadan: "50 kg",
            noTelepon: "081339399023",
            asalSD: "SDN 6 Sanur",
            asalSMP: "SMP Wisata Sanur",
            gender: "Laki-laki",
            gameFavorit: "FC Mobile",
            email: "ardhawijaya1@gmail.com",
            tiktok: "@ardha778",
            citaCita: "Programer"
        },
        {
            nama: "I Gede Bagus Dira Nugraha",
            asal: "Denpasar",
            alamat: "Jln,damai,Perumahan Graha mandiri,Dalung,Kuta utara",
            ttl: "Denpasar, 17 Juni 2008",
            agama: "Hindu",
            golonganDarah: "B",
            hobi: "Bermain Game dan tidur",
            umur: "16 tahun",
            jurusan: "Rekayasa Perangkat Lunah",
            ekstrakurikuler: "Muay thai",
            tinggiBadan: "172 cm",
            beratBadan: "54 kg",
            noTelepon: "085695441637",
            asalSD: "SDN 12 Padangsambian",
            asalSMP: "SMP Bintang Persada",
            gendert: "Laki-laki",
            gameFavorit: "Mobile Legend",
            email: "zeventhz@gmail.com",
            tiktok: "@descham_",
            citaCita: "UI Designer"
        },
        {
            nama: "I Gede Angga Pradita",
            asal: "Jembrana",
            alamat: "Jl Bakung II No. 9",
            ttl: "Jembrana, 31 Januari 2008",
            agama: "Hindu",
            golonganDarah: "O",
            hobi: "Baca light novel",
            umur: "16 tahun",
            jurusan: "Rekayasa Perangkat Lunah",
            ekstrakurikuler: "Desain grafis",
            tinggiBadan: "170 cm",
            beratBadan: "40 kg",
            noTelepon: "0895392341700",
            asalSD: "SDN 3 Kesiman",
            asalSMP: "SMP PGRI 2 Denpasar",
            gender: "Laki-laki",
            gameFavorit: "Minecraft dan roblox",
            email: "anjayp271@gmail.com",
            tiktok: "@onlykurumi",
            citaCita: "Web developer"
        }
    ];

    const info = profileInfo[profileIndex - 1];
    const popupInfo = `
        <table>
            <tr><th>Nama</th><td>${info.nama}</td></tr>
            <tr><th>Asal</th><td>${info.asal}</td></tr>
            <tr><th>Alamat</th><td>${info.alamat}</td></tr>
            <tr><th>Tempat Tanggal Lahir</th><td>${info.ttl}</td></tr>
            <tr><th>Agama</th><td>${info.agama}</td></tr>
            <tr><th>Golongan Darah</th><td>${info.golonganDarah}</td></tr>
            <tr><th>Hobi</th><td>${info.hobi}</td></tr>
            <tr><th>Umur</th><td>${info.umur}</td></tr>
            <tr><th>Jurusan</th><td>${info.jurusan}</td></tr>
            <tr><th>Ekstrakurikuler</th><td>${info.ekstrakurikuler}</td></tr>
            <tr><th>Tinggi Badan</th><td>${info.tinggiBadan}</td></tr>
            <tr><th>Berat Badan</th><td>${info.beratBadan}</td></tr>
            <tr><th>No Telepon</th><td>${info.noTelepon}</td></tr>
            <tr><th>Asal SD</th><td>${info.asalSD}</td></tr>
            <tr><th>Asal SMP</th><td>${info.asalSMP}</td></tr>
            <tr><th>Gender</th><td>${info.gender}</td></tr>
            <tr><th>Game Favorit</th><td>${info.gameFavorit}</td></tr>
            <tr><th>Email</th><td>${info.email}</td></tr>
            <tr><th>Tiktok</th><td>${info.tiktok}</td></tr>
            <tr><th>Cita-Cita</th><td>${info.citaCita}</td></tr>
        </table>
    `;

    document.getElementById('popup-info').innerHTML = popupInfo;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
