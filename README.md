# Conversor de monedas
Mini proyecto para el ramo de Desarrollo de Software  
Para ver la página web después de clonar el repositorio hay que ejecutar el comando `npm install` el cual instalará las dependencias y después `npm run dev` para ver la página web en un entorno local.

## Integrantes
- Alfredo Hernández
- Valentina Manríquez
- Simón Jiménez

## Funcionalidades Principales
- Conversor de Monedas: Permite al usuario ingresar una cantidad y seleccionar dos monedas (moneda de origen y moneda de destino). El sistema se conecta a una API externa para realizar la conversión y devolver el valor en la moneda deseada.
- Artistas Destacados y Fun Facts: Además de la conversión, se muestran datos culturales como artistas famosos o hechos interesantes (fun facts) sobre el país de la moneda seleccionada. Esta sección cambia automáticamente cada 10 segundos o puede ser controlada manualmente con flechas.

## Componentes Principales
- ConvertForm.js: Este componente gestiona la lógica del conversor de monedas. El usuario selecciona la moneda de origen y destino, ingresa el monto y obtiene el valor convertido usando la API de intercambio de divisas.
- FunFact.js: Aquí es donde se muestran los datos culturales relacionados con el país de la moneda. Los artistas destacados o fun facts cambian automáticamente cada 10 segundos, y el usuario puede navegar entre ellos manualmente con flechas de control. Este componente está diseñado para proporcionar una capa adicional de contexto e información interesante sobre los países.
- route.js (API endpoint): Este archivo es el encargado de manejar las solicitudes a la API externa para obtener la tasa de conversión actual. Valida las monedas ingresadas por el usuario, realiza la petición a la API y devuelve el valor convertido para ser mostrado en el frontend.

## Aclaración cambio idea principal
Realizamos un cambio en la idea original de agregar un gráfico de las monedas en el proceso de conversión. Durante la implementación del gráfico, nos dimos cuenta de que este requería una gran cantidad de datos históricos que no eran factibles de obtener sin recurrir a otra API. Al explorar diferentes APIs de conversión de monedas, observamos que para que los gráficos fueran realmente funcionales, era necesario realizar muchas solicitudes, pero debido a las limitaciones en la cantidad de requests permitidas por la versión gratuita de la API, decidimos pasar de esta opción. En su lugar, optamos por otra: incluir datos históricos relevantes y destacar artistas importantes de la región o país de origen de la moneda. 
