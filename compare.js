function compare()
{
    let str1 = document.getElementById("str1").value 
    let str2 = document.getElementById("str2").value
    let result = ''

    result += str1 === str2
    ? "Strings are EQUAL using 'STRICTLY EQUAL(===)' operator"
    : "Strings are NOT EQUAL using 'STRICTLY EQUAL(===)' operator"

    result += str1.localeCompare(str2)===0
    ? `<br> Strings are EQUAL using the 'localeCompare()' function`
    : `<br> Strings are NOT EQUAL using the 'localeCompare()' function`

    result += str1.toLowerCase() === str2.toLowerCase()
    ? `<br> Strings are EQUAL, ignoring 'CASE SENSITIVITY'`
    : `<br> Strings are NOT EQUAL, after ignoring 'CASE SENSITIVITY'`

    document.getElementById("result").innerHTML = result
}
