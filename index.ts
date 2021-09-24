class Departamento {
    nombreDepto: string;
    constructor(nombreDepto: string) {
        this.nombreDepto = nombreDepto
    }
    getName() {
        return this.nombreDepto
    }
}

class Piso {
    nombre: string;
    deptoAdd: Departamento[] = [] // cuando inicialice el array depto, inicializamelo como vacio;
    constructor(nombrePiso) {
        this.nombre = nombrePiso
    }
    pushDepartamento(depto: Departamento) {
        return this.deptoAdd.push(depto)
    }
    getDepartamentos() {
        return this.deptoAdd;
    }
}

class Edificio {
    piso: Piso[]
    constructor(piso: Piso[]) {
        this.piso = piso
    }
    addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
        const encontrarPiso = this.piso.find((item) => item.nombre == nombreDePiso);
        return encontrarPiso.pushDepartamento(departamento)

    }
    getDepartamentosByPiso(nombreDePiso: string) {
        const mostrarDepto = this.piso.find((item) => item.nombre == nombreDePiso);
        return mostrarDepto.getDepartamentos()
    }
}

function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

    if (
        Array.isArray(deptosEmpty) &&
        deptosEmpty.length == 0 &&
        deptos.length == 3 &&
        deptos[2].getName() == "depto tres"
    ) {
        console.log("testClaseBandaApartment passed");
    } else {
        throw "testClaseBandaApartment not passed";
    }
}

function main() {
    testClaseEdificio();
    console.log("un cambio");
}
main();
