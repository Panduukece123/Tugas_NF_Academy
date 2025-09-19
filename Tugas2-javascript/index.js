let gajiPokok = 0;
const jabatan = document.getElementById("value-jabatan").innerText;
const status = document.querySelector("tbody tr td:last-child").innerText; 
const valueGaji = document.getElementById("value-gaji");

if (jabatan === "Manajer"){
    gajiPokok = 15000000
}else if(jabatan === "Asisten Manajer"){
    gajiPokok = 10000000
}else if (jabatan === "Staff"){
    gajiPokok = 5000000
}else{
    gajiPokok = "Jabatan Tidak difinisikan"
}

let tunjanganJabatan = 0.15*gajiPokok;
let bpjs= 0.1*gajiPokok;
let tunjanganKeluarga = status==="Menikah"? 0.2*gajiPokok:0;

let totalGaji = gajiPokok+tunjanganJabatan+tunjanganKeluarga-bpjs;

valueGaji.innerText = `Rp ${totalGaji}`