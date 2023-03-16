function add(event)
{

    {
        event.preventDefault()
    }


    let a1 = document.getElementById('a1').value
        a1 = Number(a1)
    let a2 = document.getElementById('a2').value
        a2 = Number(a2)
    let a3 = document.getElementById('a3').value
        a3 = Number(a3)
    let a4 = document.getElementById('a4').value
        a4 = Number(a4)
    let a5 = document.getElementById('a5').value
        a5 = Number(a5)
    let a6 = document.getElementById('a6').value
        a6 = Number(a6)
    let a7 = document.getElementById('a7').value
        a7 = Number(a7)
    let a8 = document.getElementById('a8').value
        a8 = Number(a8)
    let a9 = document.getElementById('a9').value
        a9 = Number(a9)

    let FirstValues = [a1, a2, a3, a4, a5, a6, a7, a8, a9]

    let b1 = document.getElementById('b1').value
        b1 = Number(b1)
    let b2 = document.getElementById('b2').value
        b2 = Number(b2)
    let b3 = document.getElementById('b3').value
        b3 = Number(b3)
    let b4 = document.getElementById('b4').value
        b4 = Number(b4)
    let b5 = document.getElementById('b5').value
        b5 = Number(b5)
    let b6 = document.getElementById('b6').value
        b6 = Number(b6)
    let b7 = document.getElementById('b7').value
        b7 = Number(b7)
    let b8 = document.getElementById('b8').value
        b8 = Number(b8)
    let b9 = document.getElementById('b9').value
        b9 = Number(b9)

    let SecondValues = [b1, b2, b3, b4, b5, b6, b7, b8, b9]

    c1 = FirstValues[0] + SecondValues[0]
    c2 = FirstValues[1] + SecondValues[1]
    c3 = FirstValues[2] + SecondValues[2]
    c4 = FirstValues[3] + SecondValues[3]
    c5 = FirstValues[4] + SecondValues[4]
    c6 = FirstValues[5] + SecondValues[5]
    c7 = FirstValues[6] + SecondValues[6]
    c8 = FirstValues[7] + SecondValues[7]
    c9 = FirstValues[8] + SecondValues[8]

    document.getElementById('c1').innerHTML = c1
    document.getElementById('c2').innerHTML = c2
    document.getElementById('c3').innerHTML = c3
    document.getElementById('c4').innerHTML = c4
    document.getElementById('c5').innerHTML = c5
    document.getElementById('c6').innerHTML = c6
    document.getElementById('c7').innerHTML = c7
    document.getElementById('c8').innerHTML = c8
    document.getElementById('c9').innerHTML = c9
    
}