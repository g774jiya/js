function reverse11()
{
    let str = document.getElementById('string').value 
    document.getElementById('result1').innerHTML = str.split("").reverse().join("")
}

function pallindrome()
{
    let str = document.getElementById("string").value 
    document.getElementById('result2').innerHTML = str === str.split("").reverse().join("")
    ? "Yes, The String is Pallindrome"
    : "No, The String is not Pallindrome"
}

function replace()
{
    let str = document.getElementById("string").value
    let char = document.getElementById("char").value
    let pos = document.getElementById('pos').value -1

    document.getElementById("result3").innerHTML = pos >= 0 && pos < str.length
    ? str.slice(0,pos) + char + str.slice(pos + 1)
    : "Enter A Valid Position"
}