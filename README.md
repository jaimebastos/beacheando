## Express + maps integration Beacheando



| HTTP Method 	| URI path      	        | Description                                    	| JSON 	|
|-------------	|---------------	        |------------------------------------------------	|---------	|
| GET         	| `/`                   	| Portada de la web        	                            | |
| GET         	| `/nacional` 	            | Muestra el índice de playas nacionales de la BBDD	| |
| GET         	| `/internacional` 	| Muestra el índice de playas internacionales de la BBDD
| GET        	| `/crear` 	| Muestra el formulario para crear una playa	| |
| POST         	| `/crear` 	| Guarda en la BBDD una playa	| |
| GET         	| `/info/:id` 	    | Muestra los detalles de cada playa.|  |
| GET         	| `/eliminar?id=id` 	    | Elimina una playa de la BBDD|  |
| GET         	| `/editar?id=id`	    | Muestra el formulario para editar una playa.|  |
| POST         	| `/editar?id=id` 	    | Envía los cambios a la BBDD|  |
| GET         	| `/registro` 	    | Muestra el formulario para registrarse|  |
| POST        	| `/registro` 	    | Envía los datos del nuevo usuario a la BBDD|  |
| GET         	| `/inicio-sesion` 	    | Muestra el formulario para registrarse|  |
| POST        	| `/inicio-sesion` 	    | Envía los datos del usuario a la BBDD|  |
| GET         	| `/cerrar-sesion`	    | Cierra la sesión del usuario|  |

