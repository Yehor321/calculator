const btn = document.querySelector('#rr')
const cle = document.querySelector('#c')

btn.addEventListener('click', function () {
    const x = Number(document.querySelector('#x').value)
    const y = Number(document.querySelector('#y').value)
    const res = document.querySelector('#result')
    const opreation = document.querySelector('select').value
    let result = null
    if(opreation == '+'){
        result = x+y
    }
    if(opreation == '-'){
        result = x-y
    }
    if(opreation == '*'){
        result = x*y
    }
    if(opreation == '/'){
        result = x/y
    }
    res.value = result
})

cle.addEventListener('click', function () {
    document.querySelector("#x").value = "";
    document.querySelector("#y").value = "";
    document.querySelector("#result").value = "";
})








