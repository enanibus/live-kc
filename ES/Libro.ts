interface Autor {
  autor_nombre: string;
  autor_apellido: string;
}

class Libro implements Autor {
  autor_nombre;
  autor_apellido;
  private titulo: string;

  constructor(autor, titulo) {
      this.autor_nombre = autor;
      this.titulo = titulo;
  }

  mostrar() {
      console.log(this);
  }
}

class LibroTecnico extends Libro {
  categoria: string;
  constructor(autor, titulo, categoria= 'Informatica') {
      super(autor, titulo);
      this.categoria = categoria;
  }

  mostrar() {
    super.mostrar();
    console.log('Libro tecnico');
  }
}

let libro = new LibroTecnico('Pepe Perez', 'Angular');
libro.mostrar();
