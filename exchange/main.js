const table = document.querySelector('table')

const getData = async () => {
    const response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
    const data = await response.json();

    const body = document.createElement('tbody')

    for (let i = 0; i < data.length; i ++) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${data[i].Cur_Abbreviation}</td><td>${data[i].Cur_Name}</td><td>${data[i].Cur_Scale}</td><td>${data[i].Cur_OfficialRate}</td>`

        body.append(row);
    }

    table.append(body)
} 

document.addEventListener('DOMContentLoaded', getData);
