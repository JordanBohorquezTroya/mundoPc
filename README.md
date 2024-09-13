# **Descripción del Código**

Este código utiliza la Programación Orientada a Objetos (POO) para modelar un sistema de gestión de dispositivos informáticos. El sistema incluye dispositivos de entrada (ratones y teclados), monitores y computadoras. A continuación se detalla el funcionamiento y los conceptos detrás de cada clase.

#### **1. Clase `DispositivoEntrada`**

-   **Propósito:**  
    Representa un dispositivo de entrada genérico, como un ratón o teclado, con atributos básicos como el tipo de entrada y la marca.
    
-   **Atributos:**
    
    -   `_tipoEntrada` (private): Tipo de entrada del dispositivo (e.g., USB, Bluetooth).
    -   `_marca` (private): Marca del dispositivo.
-   **Métodos:**
    
    -   **`get` y `set`** para `tipoEntrada` y `marca`: Permiten acceder y modificar los valores de estos atributos.
    
    
    
			   class DispositivoEntrada {
				    constructor(tipoEntrada, marca) {
			        this._tipoEntrada = tipoEntrada;
			        this._marca = marca;
				    }
				    get tipoEntrada() {
				        return this._tipoEntrada;
				    }
				    set tipoEntrada(tipoEntrada) {
				        this._tipoEntrada = tipoEntrada;
				    }
				    get marca() {
				        return this._marca;
				    }
				    set marca(marca) {
			        this._marca = marca;
				    }
				}


    

#### **2. Clase `Raton`**

-   **Propósito:**  
    Extiende `DispositivoEntrada` para representar un ratón, con un identificador único.
    
-   **Atributos:**
    
    -   `_idRaton` (private): Identificador único para cada ratón.
-   **Métodos:**
    
    -   **Constructor:** Llama al constructor de la clase base (`super`) y asigna un identificador único incrementando un contador estático (`contadorRatones`).
    -   **`toString()`:** Devuelve una cadena con la representación del ratón.
    
 
    
		    class Raton extends DispositivoEntrada {
			    static contadorRatones = 0;
			    constructor(tipoEntrada, marca) {
			        super(tipoEntrada, marca);
			        this._idRaton = ++Raton.contadorRatones;
			    }
			    get idRaton() {
			       return this._idRaton;
				}
			    toString() {
			        return `RATON: [ idRaton: ${this._idRaton}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca}]`;
			    }
			}

    

#### **3. Clase `Teclado`**

-   **Propósito:**  
    Similar a `Raton`, pero para teclados.
    
-   **Atributos:**
    
    -   `_idTeclado` (private): Identificador único para cada teclado.
-   **Métodos:**
    
    -   **Constructor:** Asigna un identificador único para cada teclado.
    -   **`toString()`:** Devuelve una cadena con la representación del teclado.
    
  
    
			class Teclado extends DispositivoEntrada {
			        static contadorTeclados = 0;
			        constructor(tipoEntrada, marca) {
			        super(tipoEntrada, marca);
			         this._idTeclado = ++Teclado.contadorTeclados;
			        }
			        get idTeclado() {
			            return this._idTeclado;
			        }
			        toString() {
			       return `TECLADO [idTeclado: ${this._idTeclado}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca}]`;
			        }
		    }`` 
    

#### **4. Clase `Monitor`**

-   **Propósito:**  
    Representa un monitor con atributos como marca y tamaño.
    
-   **Atributos:**
    
    -   `_idMonitor` (private): Identificador único para cada monitor.
    -   `_marca` (private): Marca del monitor.
    -   `_tamaño` (private): Tamaño del monitor en pulgadas.
-   **Métodos:**
    
    -   **Constructor:** Asigna un identificador único y establece marca y tamaño.
    -   **`toString()`:** Devuelve una cadena con la representación del monitor.
    
   
			    class Monitor {
			        static contadorMonitores = 0;
			        constructor(marca, tamaño) {
			            this._idMonitor = ++Monitor.contadorMonitores;
			            this._marca = marca;
			            this._tamaño = tamaño;
			        }
		        get idMonitor() {
	            return this._idMonitor;
		        }
		        get marca() {
		            return this._marca;
		        }
		       set marca(marca) {
		            this._marca = marca;
		       }
		       get tamaño() {
		           return this._tamaño;
		       }
		       set tamaño(tamaño) {
	            this._tamaño = tamaño;
		        }
		        toString() {
		            return `MONITOR: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
		        }
		    }`` 
    

#### **5. Clase `Computadora`**

-   **Propósito:**  
    Representa una computadora compuesta por un ratón, teclado y monitor.
    
-   **Atributos:**
    
    -   `_idComputadora` (private): Identificador único para cada computadora.
    -   `_nombre` (private): Nombre de la computadora.
    -   `_raton` (private): Objeto de la clase `Raton`.
    -   `_teclado` (private): Objeto de la clase `Teclado`.
    -   `_monitor` (private): Objeto de la clase `Monitor`.
-   **Métodos:**
    
    -   **Constructor:** Asigna un identificador único y establece el nombre y los componentes (ratón, teclado, monitor).
    -   **`toString()`:** Devuelve una cadena con la representación de la computadora y sus componentes.
    

    
			   class Computadora {
			        static contadorComputadoras = 0;
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
			            return `COMPUTADORA ${this._idComputadora}: ${this._nombre} \n${this._monitor} \n${this._raton} \n${this._teclado}`;
			        }
			    }`` 
    

#### **6. Clase `Orden`**

-   **Propósito:**  
    Representa una orden de compra que puede contener varias computadoras.
    
-   **Atributos:**
    
    -   `_idOrden` (private): Identificador único para cada orden.
    -   `_computadoras` (private): Array que contiene objetos de la clase `Computadora`.
-   **Métodos:**
    
    -   **`agregarComputadora(computadora)`:** Añade una computadora al array `_computadoras`.
    -   **`mostrarComputadoras()`:** Muestra la información de todas las computadoras en la orden.
    
 
    
    
    
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
		    }`` 
    

### **Instancias y Uso**

-   Se crean instancias de `Raton`, `Teclado`, `Monitor`, y `Computadora`.
-   Las computadoras se agregan a órdenes, y se muestra la información de cada orden utilizando `mostrarComputadoras()`.

Este enfoque permite gestionar dispositivos y computadoras de manera modular y extensible, facilitando la manipulación y visualización de datos en el sistema.
