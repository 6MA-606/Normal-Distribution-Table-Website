import { negCheckBoxClick } from "./eventHandler/eventController.js"
import generateNormalDistributionTable from "./util/normDistTable.js"

// const pValueInput = document.getElementById('p-value')
// const pValueShow = document.querySelector('#p-input-group>div .value')
// const pValueChart = document.querySelector('.p-value-bg')

// pValueInput.addEventListener('input', (e) => {
//     pValueShow.textContent = e.target.value
//     pValueChart.style.width = parseFloat(e.target.value) * 100 + '%'
// })

const negCheckBox = document.getElementById('negCheckBox')
negCheckBox.addEventListener('input', negCheckBoxClick)
generateNormalDistributionTable()