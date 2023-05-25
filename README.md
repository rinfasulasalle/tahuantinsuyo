# Página HTML para Visualizar Mapa Tahuantinsuyo

## Introducción
¡Hola a todos! En esta ocasión, quiero explicarles el código de una página HTML que muestra un mapa interactivo. Este código utiliza la biblioteca OpenLayers y es generado por la herramienta QGIS2Web para visualizar datos geoespaciales. 

## Descripción del código
Aquí tienes una explicación línea por línea del código:

```html
<!doctype html>
<html lang="en">
    <head>
        <!-- Metadatos y configuraciones del documento -->
    </head>
    <body>
        <!-- Contenido de la página -->
    </body>
</html>
```

Estas líneas de código son el esqueleto básico de un documento HTML. 

```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
```

Estas líneas definen metadatos y configuraciones para el documento HTML, como la codificación de caracteres, la compatibilidad con diferentes navegadores y la configuración para aplicaciones web móviles.

```html
<link rel="stylesheet" href="./resources/ol.css">
<link rel="stylesheet" href="resources/fontawesome-all.min.css">
<link rel="stylesheet" href="./resources/ol-layerswitcher.css">
<link rel="stylesheet" href="./resources/qgis2web.css">
```

Estas líneas de código importan archivos CSS necesarios para dar estilo a la página y a los elementos del mapa.

```html
<style>
    /* Estilos personalizados */
</style>
```

Esta sección permite definir estilos CSS personalizados para la página.

```html
<h1>
    Integrantes: Johanna Stephanie Garate Cardenas, Roger Infa Sanchez, Jose Alfredo Grados Chuquitaype, Patrick Leopoldo Paredes Neira
</h1>
```

Aquí se muestra un encabezado `<h1>` que contiene los nombres de los integrantes del proyecto.

```html
<div id="map">
    <!-- Contenido del mapa -->
</div>
```

En esta sección se crea un contenedor `<div>` con el identificador "map" donde se mostrará el mapa interactivo.

```html
<script src="resources/qgis2web_expressions.js"></script>
<script src="resources/polyfills.js"></script>
<script src="./resources/functions.js"></script>
<script src="./resources/ol.js"></script>
<script src="./resources/ol-layerswitcher.js"></script>
```

Estas líneas de código importan archivos JavaScript necesarios para el funcionamiento del mapa y las capas.

```html
<script src="layers/Sudamrica_1.js"></script>
<script src="layers/HIDROGRAFIA_2.js"></script>
<script src="layers/CIUDADESIMPORTANTES_3.js"></script>
<script src="layers/COLLASUYO_4.js"></script>
<script src="layers/CONTISUYO_5.js"></script>
<script src="layers/CHINCHAYSUYO_6.js"></script>
<script src="layers/ANTISUYO_7.js"></script>
<script src="layers/CUSCO_8.js"></script>
```

Estas líneas de código importan los archivos JavaScript que definen las capas y estilos del mapa.

```html
<script src="styles/Sudamrica_1

_style.js"></script>
<script src="styles/HIDROGRAFIA_2_style.js"></script>
<script src="styles/CIUDADESIMPORTANTES_3_style.js"></script>
<script src="styles/COLLASUYO_4_style.js"></script>
<script src="styles/CONTISUYO_5_style.js"></script>
<script src="styles/CHINCHAYSUYO_6_style.js"></script>
<script src="styles/ANTISUYO_7_style.js"></script>
<script src="styles/CUSCO_8_style.js"></script>
```

Estas líneas de código importan los archivos JavaScript que definen los estilos de las capas del mapa.

```html
<script src="./layers/layers.js" type="text/javascript"></script>
<script src="./resources/Autolinker.min.js"></script>
<script src="./resources/qgis2web.js"></script>
```

Estas líneas de código importan archivos JavaScript adicionales que ayudan a la funcionalidad y el comportamiento del mapa.

## Conclusión
En resumen, este código HTML representa una página web que muestra un mapa interactivo generado a partir de datos geoespaciales. Utiliza la biblioteca OpenLayers y la herramienta QGIS2Web para lograrlo. Espero que esta explicación haya sido clara y te haya ayudado a entender el funcionamiento de este código. ¡Gracias por su atención!
