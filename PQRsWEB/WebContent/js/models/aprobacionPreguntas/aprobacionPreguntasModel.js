// Model for Tbaprobacionpreguntas entity 
/**
 * 
 */
define([
   //librerias javascript
  'underscore',
  'backbone'
  
], function(_,Backbone) {//se extienden todos los métodos y atributos de la clase Backbone.Model en el modelo actual.
    var aprobacionPreguntasModel = Backbone.Model.extend({
    	
      // valores predeterminados del modelo actual
      urlRoot: "http://localhost:9080/PQRsWEB/webresources/edu.poli.proyecto.test.tbaprobacionpreguntas",//direccion url de cada modelo y coleccion
      idAttribute: 'idaprobacionpregunta',
      defaults: {
          idestado: ""
      },
      
      
      toViewJson: function () {//contiene métodos para la creación y manipulación de objetos JSON como cadenas, objeto valor, 
    	   var result = this.toJSON();//Objeto valor es una cadena, número, booleano, nulo, objeto o arreglo
    	                             // displayName property is used to render item in the list//se utiliza para procesar un elemento en una lista
          result.displayName = this.get('idaprobacionpregunta');//devuelve un arreglo cuyos elementos correspondientes 
                                                               //a las propiedades enumerables que seencuentran directamente en el object result.
          return result;ntos correspondientes 
      },
      sync: function (method, model, options) {
          options || (options = {});
          var errorHandler = {
              error: function (jqXHR, textStatus, errorThrown) {// código de manejo de errores,configurados en el servidor REST.
                  // TODO: put your error handling code here
                  // If you use the JS client from the different domain
                  // (f.e. locally) then Cross-origin resource sharing 
                  // headers has to be set on the REST server side.
                  // Otherwise the JS client has to be copied into the
                  // some (f.e. the same) Web project on the same domain
                  alert('Unable to fulfil the request');// Muestra notificación como una alerta
              }}
          
          if (method == 'create') {
              options.url = 'http://localhost:9080/PQRsWEB/webresources/edu.poli.proyecto.test.tbaprobacionpreguntas';
          }
          var result = Backbone.sync(method, model, _.extend(options, errorHandler));
          return result;
      }
      
      
  });
  

  return aprobacionPreguntasModel;

});