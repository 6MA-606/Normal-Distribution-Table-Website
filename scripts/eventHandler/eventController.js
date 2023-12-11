import generateNormalDistributionTable from "../util/normDistTable.js"

export function clickCellHandler(e) {
    const pValueChart = document.querySelector('.p-value-bg')
    const selectedCell = document.querySelector('.selected')
    selectedCell?.classList.remove('selected')
    pValueChart.style.width = parseFloat(e.target.id.split('-')[1]) * 100 + '%'
    
    e.target.classList.add('selected')
}

export function negCheckBoxHandler(e) {
    if (e.target.checked) generateNormalDistributionTable(true)
    else generateNormalDistributionTable(false)
}

export function zValueInputHandler(e) {
    const z = e.target.value.length > 4 ? parseFloat(e.target.value).toFixed(2) : e.target.value
    console.log(z)

    const pCells = document.querySelectorAll('.p-cell')

    pCells.forEach((pCell) => {
        // console.log(pCell.dataset.z)
        if (pCell.dataset.zValue.startsWith(z) && z !== '') {
            pCell.classList.add('found')
            // console.log(pCell)
        } else {
            pCell.classList.remove('found')
        }
    })

    const foundCells = document.querySelector('.found')
    foundCells?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}