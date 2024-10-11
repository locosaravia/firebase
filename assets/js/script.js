window.addEventListener("load",()=>{
    console.log("hola 👻")
    document.getElementById("btnagregar").addEventListener("click",()=>{
        console.log("me electrocutaste  ")

        let ePelicula = document.getElementById("pelicula");
        let eDirector = document.getElementById("director");
        let eAnio = document.getElementById("anio");
        let eValoracion = document.getElementById("valoracion");
        let eGenero = document.getElementById("genero");
        let eMayoredad = document.getElementById("mayoredad");

        let vPelicula = ePelicula.value;
        let vDirector = eDirector.value;
        let vAnio = eAnio.value;
        let vValoracion = eValoracion.value;
        let vGenero = eGenero.value;
        let vMayoredad =eMayoredad.Checked;


        console.log(vPelicula)
        console.log(vDirector)
        console.log(vAnio)
        console.log(vValoracion)
        console.log(vGenero)
        console.log(vMayoredad)

        let pelicula = {
            pelicula: vPelicula,
            Director: vDirector,
            Anio: vAnio,
            Valoracion: vValoracion,
            Genero: vGenero,
            MayorEdad: vMayoredad
        };
        console.log(pelicula)







    })
})

