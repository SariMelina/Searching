 import * as fs from "fs";
interface Ayuda {
  Buscar(value:number):boolean;
}

class BusquedaBinaria implements Ayuda{
  private arreglo:number[];
  constructor(ayuda:number[]) {
    this.arreglo = ayuda;
  }

  public Buscar(value:number):boolean{
    this.arreglo.sort();
    let Esta: boolean = false;
    let primix:number = 0;
    let last:number = this.arreglo.length - 1;
    let pos:number = 0;
    while(primix <= last && !Esta){   
      let puntoMedio:number = Math.floor((primix + last)/2)   
      if(this.arreglo[puntoMedio]==value){
        Esta = true;   
        pos = puntoMedio;             
      }else{
        if(value < this.arreglo[puntoMedio]){
          last = puntoMedio -1;
        }else{
          primix = puntoMedio + 1;
        }
      }
    }
    console.log(`BUSQUEDA BINARIA.\n\n[${this.arreglo}] \n\nENCONTRADO: ${Esta}\nPOSICION: ${pos+1}`);
    return Esta;
  }  
} 

class BusquedaLineal implements Ayuda{
  private arreglo:number[];
  constructor (ayuda:number[]){
    this.arreglo = ayuda;
  }

  public Buscar(valor:number):boolean {
    let Esta:boolean=false
    let pos:number=0;
    for(let i=0; i< this.arreglo.length; i++){
      if(this.arreglo[i]== valor){
        pos=i;
        console.log(valor);
        Esta=true;
      }
    }
    console.log(`BUSQUEDA LINEAL.\n\n[${this.arreglo}] \n\nENCONTRADO: ${Esta}\nPOSICION: ${pos+1}`);
    return Esta
  }
}

class Searcher {
  private logger: Ayuda;

  constructor(logger: Ayuda) {
    this.logger = logger;
  }

  search(value: number): boolean {
    if (Number.isInteger(value)) {
      this.logger.Buscar(value);
      return false;
    }
    return true;
  }
}
const ayuda:number[] = [3,6,3,4,8,5]
const xd: BusquedaBinaria = new BusquedaBinaria(ayuda);
const val: Searcher = new Searcher(xd);
val.search(8);




/*
interface BaseLogger {
  log(error: string);
}

class EmailLogger implements BaseLogger {
  constructor(public email: string) {}

  public log(error: string) {
    console.log(`Enviando un email a ${this.email}, error: ${error}`);
  }
}


class ConsoleLogger implements BaseLogger {
  log(error: string) {
    console.log(error);
  }
}

class Validator {
  private logger: BaseLogger;

  constructor(logger: BaseLogger) {
    this.logger = logger;
  }

  isInteger(value: string): boolean {
    if (!Number.isNaN(value)) {
      this.logger.log("You should pass a number");
      return false;
    }
    if (!Number.isInteger(value)) {
      this.logger.log("It is not an integer");
      return false;
    }
    return true;
  }
}

const fileLogger: EmailLogger = new EmailLogger("admin@adc.com");
const val: Validator = new Validator(fileLogger);

val.isInteger("i"); */