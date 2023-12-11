import generateNormalDistributionTable from "../util/normDistTable.js"

export function clickCellHandler(e) {
    const pValueChart = document.querySelector('.p-value-bg')
    const selectedCell = document.querySelector('.selected')
    selectedCell?.classList.remove('selected')
    pValueChart.style.width = parseFloat(e.target.id.split('-')[1]) * 100 + '%'
    
    e.target.classList.add('selected')
}

export function negCheckBoxClick(e) {
    if (e.target.checked) generateNormalDistributionTable(true)
    else generateNormalDistributionTable(false)
}