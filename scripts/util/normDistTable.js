import { clickCellHandler } from '../eventHandler/eventController.js'

// Function to calculate the cumulative distribution function (CDF) of the standard normal distribution
function standardNormalCDF(x) {
  return 0.5 * (1 + math.erf(x / Math.sqrt(2)))
}

let rowPositive = ''
for (let z = 0; z <= 4.1; z += 0.1) {
  rowPositive += `<tr><th>${z.toFixed(2)}</th>`
  // Dynamically generate cells for probabilities
  for (let i = 0; i <= 0.09; i += 0.01) {
    const probability = standardNormalCDF(z + i).toFixed(4)
    rowPositive += `<td id="p-${probability}" class="p-cell">${probability}</td>`
  }

  rowPositive += `<th>${z.toFixed(2)}</th></tr>`
}

let rowNegative = ''
for (let z = -4.0; z <= 0.1; z += 0.1) {
  rowNegative += `<tr><th>${z.toFixed(2)}</th>`
  // Dynamically generate cells for probabilities
  for (let i = 0; i >= -0.09; i -= 0.01) {
    const probability = standardNormalCDF(z + i).toFixed(4)
    rowNegative += `<td id="p-${probability}" class="p-cell">${probability}</td>`
  }

  rowNegative += `<th>${z.toFixed(2)}</th></tr>`
}

// Function to generate the normal distribution table
function generateNormalDistributionTable(negative = false) {
  const tableBody = document.getElementById('distributionTableBody')
  tableBody.innerHTML = negative ? rowNegative : rowPositive

  const pCells = document.querySelectorAll('.p-cell')
  pCells.forEach((pCell) => {
    pCell.addEventListener('click', clickCellHandler)
  })
}

export default generateNormalDistributionTable
