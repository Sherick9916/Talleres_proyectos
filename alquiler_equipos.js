class Equipo {
    constructor(nombre, precioVenta, precioAlquiler, disponible) {
        this._nombre = nombre;
        this._precioVenta = precioVenta;
        this._precioAlquiler = precioAlquiler;
        this._disponible = disponible;
    }

    get nombre() {
        return this._nombre;
    }

    get precioVenta() {
        return this._precioVenta;
    }

    get precioAlquiler() {
        return this._precioAlquiler;
    }

    get disponible() {
        return this._disponible;
    }

    set disponible(value) {
        this._disponible = value;
    }
}

class Persona {
    constructor(nombre, tipoPersona) {
        this._nombre = nombre;
        this._tipoPersona = tipoPersona;
    }

    get nombre() {
        return this._nombre;
    }

    get tipoPersona() {
        return this._tipoPersona;
    }
}

class Almacen {
    constructor() {
        this._ventas = [];
        this._alquileres = [];
    }

    venderEquipo(equipo, persona) {
        if (equipo.disponible) {
            equipo.disponible = false;
            this._ventas.push({equipo, persona});
            return equipo.precioVenta;
        }
        return 0;
    }

    alquilarEquipo(equipo, persona) {
        if (equipo.disponible) {
            equipo.disponible = false;
            this._alquileres.push({equipo, persona});
            return equipo.precioAlquiler;
        }
        return 0;
    }

    calcularIngresos() {
        let ingresosVentas = this._ventas.reduce((total, venta) => total + venta.equipo.precioVenta, 0);
        let ingresosAlquileres = this._alquileres.reduce((total, alquiler) => total + alquiler.equipo.precioAlquiler, 0);
        return ingresosVentas + ingresosAlquileres;
    }
}

// Ejemplo de uso
const almacen = new Almacen();
const equipo1 = new Equipo(`Equipo 1`, 100, 10, true);
const equipo2 = new Equipo(`Equipo 2`, 200, 20, true);
const persona1 = new Persona(`Persona 1`, `natural`);
const persona2 = new Persona(`Persona 2`, `juridica`);

almacen.venderEquipo(equipo1, persona1);
almacen.alquilarEquipo(equipo2, persona2);
console.log(`Ingresos totales:`, almacen.calcularIngresos());