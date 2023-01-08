# Módulo de autenticación
* Este módulo se encarga de manejar la autenticación del usuario en la aplicación. Se compone de las siguientes carpetas:

> directives: contiene las directivas creadas especialmente para la autenticación del usuario al iniciar sesión.

> form: tiene un formulario reutilizable de registro e inicio de sesión que son utilizados por los módulos de sign-in y sign-up dependiendo del caso de uso.

> services: incluye los servicios de autenticación para validar el inicio de sesión y un interceptor para obtener el token y guardarlo en los headers.

# Modulo de paginas
*El módulo Pages contiene el componente show-subscribed, el cual muestra los datos de la API una vez se hayan gestionado los consumos correspondientes. En el futuro, este módulo podría incluir más componentes que muestren diferentes tipos de información obtenida de la API.

# Módulo shared
* Este módulo tiene varios archivos compartidos de en todo el proyecto e incluye:

> Carpeta CONSTANTS: almacena acciones de movimiento para las rutas y los endpoints de la API.

> Carpeta INTERFACES: organiza la data a consumir y mostrar.

> Carpeta NAVBAR: barra de navegación transversal para moverse en las rutas.

>Carpeta SERVICES: contiene el request.service, encargado de manejar y administrar las peticiones HTTP realizadas.




# RUTAS Archivo AppRoutingModule

* '': redirige a '/show-subscribed', con una coincidencia de ruta completa.
* 'show-subscribed': carga el módulo ShowSubscribedModule mediante lazy loading y se aplican los guardias de activación y desactivación PermissionsGuard y ExitGuard.
* 'sign-in': carga el módulo SignInModule mediante lazy loading.
* 'sign-up': carga el módulo SignUpModule mediante lazy loading.
* '**': redirige a '/show-subscribed', con una coincidencia de ruta completa.

# ¿Quieres probar el proyecto?
* El proyecto acualmente se puede clonar y probar directamente con ng serve de forma local
