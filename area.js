function circle()
{
    let radius = document.getElementById('circle').value
    document.getElementById("display1").innerHTML="Area of circle is: "+ Math.PI * radius * radius + " square metres"
}

function triangle()
{
    let base = document.getElementById("base").value
    let height = document.getElementById("height").value
    document.getElementById("display2").innerHTML="Area of triangle is: "+ 0.5*base*height+ " square metres"
}

function rectangle()
{
    let length = document.getElementById("length").value
    let breadth = document.getElementById("breadth").value
    document.getElementById('display3').innerHTML ="Area of rectangle is: "+ length * breadth+ " square metres"
}