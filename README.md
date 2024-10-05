# Conversor de monedas
Mini proyecto para el ramo de Desarrollo de Software  
Para ver la página web después de clonar el repositorio hay que ejecutar el comando `npm install` el cual instalará las dependencias y después `npm run dev` para ver la página web en un entorno local.

## Integrantes
- Alfredo Hernández
- Valentina Manríquez
- Simón Jiménez

## Aclaración cambio idea principal
Realizamos un cambio en la idea original de agregar un gráfico de las monedas en el proceso de conversión. Durante la implementación del gráfico, nos dimos cuenta de que este requería una gran cantidad de datos históricos que no eran factibles de obtener sin recurrir a otra API. Al explorar diferentes APIs de conversión de monedas, observamos que para que los gráficos fueran realmente funcionales, era necesario realizar muchas solicitudes, pero debido a las limitaciones en la cantidad de requests permitidas por la versión gratuita de la API, decidimos pasar de esta opción. En su lugar, optamos por otra: incluir datos históricos relevantes y destacar artistas importantes de la región o país de origen de la moneda. 