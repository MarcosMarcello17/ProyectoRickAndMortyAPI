# ProyectoRickAndMortyAPI

Desarrollar una aplicación para dispositivos móviles que permite visualizar los personajes de la
serie Rick & Morty
La aplicación debe cumplir la siguiente funcionalidad:
  ● Visualizar los personajes de Rick & Morty
  ● Ver el detalle de cada personaje.
  ● Poder filtrar los personajes
  ● Importar personajes al dispositivo móvil.
  ● Administrar los Favs (personajes importados).
  ● Animar acciones de Importación y Administración.
  ● Utilizar arquitectura Redux.

Detalle de la funcionalidad
  Visualizar los personajes
    Mostrar los personajes en un listado (Flatlist) paginado.
    Los request se deben ir realizando a medida que se va llegando al final del listado actual.
    El diseño del listado puede ser en vertical u horizontal.
    Se recomienda mostrar poca información del personaje (por ejemplo foto y nombre).
    
  Ver el detalle de cada personaje
    Al tocar en un personaje del listado se debe mostrar toda la información relacionada a este, por medio de un pop-up (modal).
    Poder filtrar los personajes
    Poder filtrar los personajes utilizando los filtros disponibles en la API. No se debe filtrar de forma local en el dispositivo. Sino pasando los filtros a la API y mostrando el resultado.
    Filtros disponibles:
      ● name: filter by the given name.
      ● status: filter by the given status (alive, dead or unknown).
      ● species: filter by the given species.
      ● type: filter by the given type.
      ● gender: filter by the given gender (female, male, genderless or unknown).
      Para los casos de valores fijos como status y gender, no se permite ingresar texto libre, se debe presentar las opciones disponibles.

  Importar personajes al dispositivo móvil.
      ●  En la pantalla de visualización de personajes se debe poder agregar a favoritos (importar) un personaje del listado. El listado original no debe mostrar personajes ya importados. 
      Al momento de realizar la acción, la misma debe dar feedback al usuario por medio de una animación, sacando la tarjeta del listado.

  Administrar los favs (personajes importados).
    Los personajes importados se deben mostrar en otra pantalla y se pueden realizar las siguientes acciones:
      ● Eliminar personajes de favs: Se pueden eliminar personajes de los favoritos, la acción hace que el personaje se vuelva a visualizar en el listado original. 
        Esta acción debe disparar una animación que de feedback al usuario.
      ● Agregar comentarios a la tarjeta del personaje: Se debe poder agregar un comentario a cada uno de los personajes importados.
  Animar acciones de Importación y Administración.
      ● Las acciones indicadas previamente deben incluir una animación acorde a la acción que se está realizando.
  Utilizar arquitectura Redux.
      ● Todas las acciones que se realizan en la app deben trabajar con una arquitectura Redux.


