# AmadeusApp


## Como Levantar la Aplicación

Una vez que el repositorio haya sido clonado localmente, ejecute "ng serve -o" en la terminal de vscode para levantar la app. Para poder recibir información de la API necesita un BEARER TOKEN (Puede encontrar más información sobre como obtener este token de la API de Amadeus aqui: https://developers.amadeus.com/self-service/apis-docs/guides/authorization-262. Una vez tenga el bearer token, asegurese de incluirlo en el archivo app/hoteles/services/authHelper.ts para poder recibir la información correctamente. 

## Funciones
La aplicación es muy simple, tras iniciar sesión, el usuario podrá ver un listado de hoteles en Madrid y luego filtrar la lista ya sea por hoteles de 3 estrellas o 4 estrellas. 

