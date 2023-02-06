// Your code here
const myTable = document.getElementById('the-table')
const myAddRow = document.getElementById('add-row')
const mySelector = document.getElementsByTagName('select')[0]

let chosenColor = 'red'
function makeTD(){
    
    const myTD = document.createElement('td')
    return myTD
}

function makeRow(){
    const myRow = document.createElement('tr')
    for(let i = 0; i < 20; i++){
        myRow.append(makeTD())
    }
    myTable.append(myRow)
}

function colorize(clickEvent){
    myTD = clickEvent.target
    if(myTD.matches('td')){
        myTD.className = chosenColor
    }

}

function changeColor(clickEvent){

    chosenColor = clickEvent.target.value
}


mySelector.addEventListener('change',changeColor)
myAddRow.addEventListener('click',makeRow)
myTable.addEventListener('click', colorize)
