let members = JSON.parse(localStorage.getItem("members")) || [];

// TAMPIL DATA
function tampilkanData(filter="") {
    const table = document.getElementById("dataMember");
    if (!table) return;

    table.innerHTML = "";

    let filtered = members.filter(m => 
        m.nama.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach((m, i) => {
        table.innerHTML += `
            <tr>
                <td>${m.nama}</td>
                <td>${m.email}</td>
                <td>${m.minat}</td>
                <td><button onclick="hapus(${i})">❌</button></td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = members.length;
}

// TAMBAH
function tambahData(e) {
    e.preventDefault();

    let nama = namaInput.value;
    let email = emailInput.value;
    let minat = minatInput.value;

    members.push({nama, email, minat});
    localStorage.setItem("members", JSON.stringify(members));

    alert("🔥 Member baru ditambahkan!");
    formMember.reset();
}

// HAPUS
function hapus(i) {
    members.splice(i,1);
    localStorage.setItem("members", JSON.stringify(members));
    tampilkanData();
}

// SEARCH
function searchData() {
    let val = document.getElementById("search").value;
    tampilkanData(val);
}

// DARK MODE
function toggleDark() {
    document.body.classList.toggle("dark");
}

// MULTIMEDIA
function playAudio() {
    audio.play();
}
function pauseAudio() {
    audio.pause();
}
function gantiGambar() {
    gambar.src = "https://picsum.photos/300?random=" + Math.random();
}