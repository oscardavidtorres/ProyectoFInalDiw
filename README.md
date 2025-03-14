# Proyecto Final DIW - OneGoal

## Descripción
El Proyecto Final del módulo de Diseño de Interfaces Web consiste en diseñar y desarrollar un sitio web de apuestas deportivas con un fuerte enfoque social. A diferencia de las casas de apuestas tradicionales, esta plataforma incorpora un sistema de "Pools" que permite a los usuarios crear o unirse a apuestas grupales, compitiendo directamente contra otras personas.

### Características principales

- **Sistema de Pools**: 
  - Los usuarios pueden crear o unirse a apuestas grupales.
  - En caso de acertar el resultado de un partido, el usuario ganador recibirá la suma de dinero de los demás participantes.
  - Si hay varios ganadores, el premio se divide equitativamente entre ellos.

- **Sección de Equipos**:
  - Los usuarios pueden unirse a la comunidad de su equipo favorito.
  - Beneficios exclusivos, misiones y rankings internos basados en el desempeño dentro de la plataforma (independiente de la clasificación real del equipo en su liga).

- **Sistema de Desafíos y Recompensas**:
  - Misiones diarias y desafíos especiales que otorgan experiencia, puntos y logros.
  - Los logros pueden mostrarse en el perfil del usuario.

- **Publicaciones y Historias**:
  - Similar a las historias de redes sociales, permite compartir logros y experiencias con amigos y seguidores.

- **Modo Competitivo y Ranking**:
  - Un modo de apuestas donde los usuarios compiten por puntos para ascender en el ranking.
  - Ayuda a mejorar la clasificación del equipo dentro de la plataforma.

En resumen, **OneGoal** es una plataforma de apuestas deportivas con un enfoque social, donde los usuarios pueden competir, conocer gente afín, formar comunidades y ganar dinero a través del sistema de Pools.
### Tecnologias usadas
Se ha usado para el diseño y desarrollo de las interfaces de esta pagina web Figma para el diseño.
Html,CSS para la creacion de la pagina web ademas del uso de git y github para el control de versiones

## Instalacion e instrucciones de Uso
Este proyecto no requiere de ninguna instalacion al menos en esta version 0 de momento todo lo que se tiene que hacer es entrar a la web principal y para acceder al resto de contenido lo que hay que hacer es darle al boton "IniciarSesion/registro" donde accederemos a iniciar sesion de ahi le daremos a que no tenemos una cuenta para mas adelante acceder al registro registrarnos y acceder a la pagina Inicial donde podremos ir navegando a gusto propio. Las secciones Social, Equipo siguen en desarrollo al igual que la busqueda y los botones de filtro de busqueda como puede ser el Global

## Licencia

Este proyecto está licenciado bajo la [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).  
Eres libre de compartir, modificar y utilizar este trabajo con la condición de dar el crédito correspondiente.
Para más información sobre el uso y atribuciones de este proyecto, consulta el archivo LICENSE.

## Versiones
Actualmente esta es la version 0 del proyecto pero se continuara trabajando en este a lo largo del tiempo y mejorando los elementos para que se vea mejor ademas de añadir paginas web que estan pendientes o funcionalidades no incluidas aun
## Versión 1

En esta versión, he implementado varias mejoras visuales y animaciones:

- **Animaciones en botones:** Los botones del header y de las páginas principales ahora cambian de color con una transición suave de `0.3s`.
- **Notificaciones:** El botón de notificaciones comienza a parpadear `20 segundos` después de cargar la página, simulando la llegada de una notificación.
- **Spinner de carga:** Se ha añadido un spinner de `1 segundo` al cargar la página, acompañado de un efecto *slide-in* para los elementos más importantes.
- **Validación en la creación de apuestas:** Si se intenta crear una apuesta vacía, los campos vacíos se agitan (*shake effect*) para indicar el error.
- **Interacción con apuestas:** Al pasar el cursor sobre una apuesta:
  - Se eleva ligeramente.
  - Se resalta con un borde azul de `2px`, destacando la tarjeta seleccionada.

Ademas del asistente de Ia en las paginas principales que estara botando y cambiara cada poco tiempo a otra imagen que simula el pestañeo de este balon.

## Versión 2  

En esta versión, hemos mejorado la estructura del código reemplazando `divs` por elementos semánticos como `section` y `article`. Además, optimizamos la accesibilidad utilizando `title` y `aria-label`.  

También aplicamos estilos CSS para resaltar los enlaces con un recuadro al navegar con `tab`, facilitando la identificación del foco y mejorando la usabilidad.  

Utilizamos las herramientas de desarrollo de Google, como Lighthouse, para evaluar la accesibilidad, logrando una puntuación superior a 95.  

Asimismo, aseguramos que todas las imágenes tengan texto alternativo y corregimos errores en los tamaños de tipografía para mejorar la legibilidad.
