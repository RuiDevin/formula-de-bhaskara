let bt = document.querySelector('#bt')
let tres = document.querySelector('#tres')
let res = document.querySelector('#res')

bt.addEventListener('click',clicar)

function clicar() {
    let va = Number(prompt('qual e valor de a')) //valor de a
    let vb = Number(prompt('qual e valor de b')) //valor de b
    let vc = Number(prompt('qual e valor de c')) //valor de c
    let vd = Number(vb**2) - (4*va*vc)// valor de delta ???

    res.innerHTML = `<p id="res"> valor calculando foi <strong>&Delta; = ${vb} x + ${vc} = 0 </strong></p>
    <p> O calculo realiazdo sera <strong>&Delta; = ${vb}²- 4 . ${va} . ${vc}</strong><p>
    <p>O valor calculado foi <strong>&Delta; = ${vd}</strong><p>`

}


