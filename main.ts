input.onButtonPressed(Button.A, function () {
    for (let Index = 0; Index <= 9; Index++) {
        basic.showNumber(rutas[Index])
    }
})
input.onButtonPressed(Button.B, function () {
    let Index = 0
    fila = 0
    filacorta = rutas[Index]
    minuto_corta = rutas[Index]
    for (let index2 = 0; index2 <= 1999; index2++) {
        if (fila == 1999) {
            basic.showString("La mejor ruta es:    ")
            basic.showNumber(filacorta)
            basic.showString("El tiempo es:    ")
            basic.showNumber(minuto_corta)
        } else if (minuto_corta > rutas[Index]) {
            minuto_corta = rutas[Index]
            filacorta = fila
        } else {
            fila = fila + 1
        }
    }
})
let minuto_corta = 0
let filacorta = 0
let fila = 0
let rutas: number[] = []
let suma = 0
let vrandom = 25
rutas = [2000]
for (let index3 = 0; index3 <= 1999; index3++) {
    vrandom = 5 * vrandom % 2000
    rutas[index3] = (vrandom + 100) / 100
}
