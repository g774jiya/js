function generateTable()
{
    let num = parseInt(document.getElementById('num').value)
    let output = ''

        for(let i = 1; i <= 10; i++)
        {
            output += `${num} x ${i} = ${num*i}<br>`
        }


    document.getElementById('output').innerHTML = output
}

