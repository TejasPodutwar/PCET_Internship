let root, headings, data;

/* example: 
    const root = document.getElementById('coursera_faculty_table')
*/
function addOrderedTable(root, headings, data) {
    if(headings.length - 1 != data[0].length) {
        return;
    }
    const tbl = document.createElement('table');
    tbl.className = 'table table-borderless table-bordered table-hover table-responsive'

    var thead = tbl.createTHead();
    thead.className = 'text-center'

    let tr = thead.insertRow(0);
    tr.className = 'table-primary'
    for(let i = 0; i < headings.length; i++) {
        let cell = tr.insertCell();
        cell.innerHTML = headings[i];
        cell.style.fontWeight = 800; // bold
    }

    const tbody = tbl.createTBody();
    tbody.className = 'text-center'
    for(let row = 0; row < data.length; row++) {
        // tr
        let tr = tbody.insertRow();
        
        // sr. no.
        let cell = tr.insertCell();
        cell.innerHTML = row+1;
        // let cell = row + 1;

        for(let i = 0; i < headings.length - 1; i++) {
            let cell = tr.insertCell();
            cell.innerHTML = data[row][i];
        }
    }

    root.appendChild(tbl);
}