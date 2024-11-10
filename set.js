

function union()
{
    let setA = new Set(document.getElementById('setA').value.split(",").map(item => item.trim()))
    let setB = new Set(document.getElementById("setB").value.split(",").map(item => item.trim()))
    let union = new Set([...setA, ...setB])
    document.getElementById("union").innerHTML = `Union of A and B: [${[...union]}]`
}

function intersection()
{
    let setA = new Set(document.getElementById('setA').value.split(",").map(item => item.trim()))
    let setB = new Set(document.getElementById("setB").value.split(",").map(item => item.trim()))
    let intersection = new Set([...setA].filter(item => setB.has(item)))
    document.getElementById("intersection").innerHTML = `Intersection of A and B: [${[...intersection]}]`
}

function difference()
{
    let setA = new Set(document.getElementById('setA').value.split(",").map(item => item.trim()))
    let setB = new Set(document.getElementById("setB").value.split(",").map(item => item.trim()))
    let difference = new Set([...setA].filter(item => !setB.has(item)))
    document.getElementById('difference').innerHTML = `Difference A-B: [${[...difference]}]`
}