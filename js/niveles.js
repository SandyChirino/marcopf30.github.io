//Sube aqui 2 niveles que hayas creado en forma de matriz como se muesta en el siguiente ejemplo


/* ----------------------------------Ejemplo--------------------------------------------------*/

//Niveles de Marco Pérez
var escenario = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,2,2,0,0,0,2,2,2,2,0,0,2,2,0],
  [0,0,2,2,2,2,2,0,0,2,0,0,2,0,0],
  [0,0,2,0,0,0,2,2,0,2,2,2,2,0,0],
  [0,0,2,2,2,0,0,2,0,0,0,2,0,0,0],
  [0,2,2,0,0,0,0,2,0,0,0,2,0,0,0],
  [0,0,2,0,0,0,2,2,2,0,0,2,2,2,0],
  [0,2,2,2,0,0,2,0,0,0,1,0,0,2,0],
  [0,2,2,3,0,0,2,0,0,2,2,2,2,2,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

var escenario2 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,2,2,0,0,0,2,2,2,2,0,0,2,2,0],
  [0,0,2,2,2,2,2,0,0,2,0,0,2,0,0],
  [0,0,2,0,0,0,2,2,0,2,2,2,2,0,0],
  [0,0,2,2,2,0,0,2,0,0,0,2,0,0,0],
  [0,2,2,0,0,0,0,2,0,0,0,2,0,0,0],
  [0,0,2,0,0,0,2,2,2,0,0,2,2,2,0],
  [0,2,2,2,0,0,2,0,0,0,1,0,0,2,0],
  [0,2,2,3,0,0,2,0,0,2,2,2,2,2,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

/* ----------------------------------Termina Ejemplo--------------------------------------------------*/

/* Ariel Omar Méndez Valverde
var escenario_1 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,2,0,0,0,0,0,2,0,0,0,2,0,2,0],
  [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
  [0,2,0,0,0,0,2,0,0,0,0,2,0,2,0],
  [0,2,0,0,0,0,2,0,0,0,0,2,0,2,0],
  [0,2,0,0,0,0,2,2,2,2,0,2,0,2,0],
  [0,2,0,0,0,0,0,0,0,0,0,2,0,2,0],
  [0,2,0,0,1,0,0,0,0,0,0,2,2,2,0],
  [0,2,2,2,2,2,0,0,0,3,2,2,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]  

var escenario_2 = [
  [2,0,2,2,2,2,2,2,2,2,2,2,2,0,0],
  [2,0,2,0,0,0,0,0,0,0,0,0,2,0,0],
  [2,0,2,2,2,0,0,0,2,2,2,2,2,0,0],
  [2,2,2,0,2,0,0,0,0,0,2,0,2,0,0],
  [0,2,0,2,2,0,0,0,0,0,2,0,2,0,3],
  [0,2,0,0,0,1,0,0,2,0,2,0,2,0,2],
  [0,2,0,2,2,2,0,0,2,0,0,0,2,0,2],
  [0,2,2,2,0,2,0,0,2,2,2,2,2,2,2],
  [0,0,0,2,2,2,0,2,2,0,2,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0]
]   */



/* ----------------------------------ESCENARIOS--------------------------------------------------*/

//Niveles de Gustavo Hernández
var escenario = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,2,0,2,2,2,0,1,2,2,2,2,2,2,0],
  [0,2,0,2,0,2,0,0,0,0,0,0,0,2,0],
  [0,2,2,2,0,2,2,2,2,2,0,2,2,2,0],
  [0,2,0,2,0,0,0,2,0,2,2,2,0,2,0],
  [0,2,0,2,2,2,0,2,0,0,0,0,0,2,0],
  [0,2,0,0,0,2,0,2,0,2,2,2,2,2,0],
  [0,2,0,3,0,2,0,2,0,2,0,0,0,0,0],
  [0,2,2,2,0,2,2,2,0,2,2,2,2,2,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

var escenario2 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,2,0,2,2,2,2,2,2,2,2,2,2,2,0],
  [0,2,0,2,0,0,0,2,0,0,0,2,0,2,0],
  [0,2,2,2,0,2,2,2,2,2,0,2,0,2,0],
  [0,2,0,0,0,2,0,0,0,2,2,2,0,2,0],
  [0,2,2,2,0,2,0,3,0,0,0,0,0,2,0],
  [0,0,0,2,0,2,0,2,2,2,2,2,0,2,0],
  [0,1,0,2,0,2,0,0,0,0,0,2,0,2,0],
  [0,2,2,2,0,2,2,2,2,2,2,2,0,2,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

/*------------------------------------------------------------------------------------------------------*/
