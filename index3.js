class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }
    get tipoEntrada(){
        return this._tipoEntrada
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }
}



class Raton extends DispositivoEntrada{
    static contadorRatones = 0
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton
    }
    toString(){
        return `RATON: [ idRaton: ${this._idRaton}, tipoEntrada:  ${this.tipoEntrada}, marca: ${this.marca}]`
    }
}
let raton1 = new Raton("USB", "LOGITECH")


 
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados
    }
    get idTeclado(){
        return this._idTeclado
    }
    toString(){
        return `TECLADO [idTeclado: ${this._idTeclado}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca}] `
    }

}
let teclado1 = new Teclado("USB", "DELL")


class Monitor{
    static contadorMonitores = 0
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores
        this._marca = marca
        this._tamaño = tamaño  
    }
    get idMonito(){
        return this._idMonitor
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }

    get tamaño(){
        return this._tamaño
    }
    set tamaño(tamaño){
        this._tamaño = tamaño
    }

    toString(){
        return `MONITOR: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`
    }
}
let monitor1 = new Monitor("LG", 200)


class Computadora{
    static contadorComputadoras = 0
    constructor(nombre, raton, teclado, monitor) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._raton = raton;
        this._teclado = teclado;
        this._monitor = monitor;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get raton() {
        return this._raton;
    }

    set raton(raton) {
        this._raton = raton;
    }

    get teclado() {
        return this._teclado;
    }

    set teclado(teclado) {
        this._teclado = teclado;
    }

    get monitor() {
        return this._monitor;
    }

    set monitor(monitor) {
        this._monitor = monitor;
    }

    toString() {
        return `COMPUTADORA ${this._idComputadora}: ${this._nombre} \n${this._monitor} \n${this._raton} \n${this._teclado}`
}}


let computadora5 = new Computadora("HP", monitor1, raton1, teclado1)
let computadora2 = new Computadora("PC GAMER2", raton1, teclado1, monitor1)



class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarComputadoras() {
        let computadorasOrden = '';
        for (let computadora of this._computadoras) {
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadora: ${computadorasOrden}`);
    }
}


let orden1 = new Orden();
orden1.agregarComputadora(computadora2)
orden1.mostrarComputadoras()
let orden2 = new Orden()
orden2.agregarComputadora(computadora2)
orden2.mostrarComputadoras()
