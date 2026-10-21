"use strict";
const acomodadores = [
  {id:1, rol:"", nombre:"Angel Zuñiga", telefono:"83663888", congregacion:"Naranjito", nombramiento:"", marca:"", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A9","A11"], turno:"08-12"},
  {id:2, rol:"", nombre:"Alvaro Solano", telefono:"84784617", congregacion:"P.Quepo", nombramiento:"", marca:"Sí", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A10"], turno:"08-12"},
  {id:3, rol:"", nombre:"Geiner Zuñiga", telefono:"85103153", congregacion:"P.Quepo", nombramiento:"", marca:"", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A12"], turno:"08-12"},
  {id:4, rol:"", nombre:"Marcos Gomez", telefono:"83620809", congregacion:"P.Quepo", nombramiento:"", marca:"Sí", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A29"], turno:"08-12"},
  {id:5, rol:"CAPITÁN", nombre:"Roy Azofeifa", telefono:"83335665", congregacion:"Paquita", nombramiento:"Siervo", marca:"", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A30"], turno:"08-12"},
  {id:6, rol:"", nombre:"Miguel mendez", telefono:"88851764", congregacion:"Paquita", nombramiento:"", marca:"", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A31"], turno:"08-12"},
  {id:7, rol:"", nombre:"Jose Luis Gabouardi", telefono:"84431653", congregacion:"Las mesas", nombramiento:"", marca:"Sí", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A32"], turno:"08-12"},
  {id:8, rol:"", nombre:"Henry Valverde", telefono:"85030559", congregacion:"Las mesas", nombramiento:"", marca:"Sí", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A10"], turno:"12-16"},
  {id:9, rol:"", nombre:"kelvin Espinoza", telefono:"87750398", congregacion:"Las mesas", nombramiento:"", marca:"Sí", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A12"], turno:"12-16"},
  {id:10, rol:"", nombre:"Carlos Fernadez", telefono:"85687689", congregacion:"Vista B. Quepo", nombramiento:"Anciano", marca:"", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A9","A11"], turno:"12-16"},
  {id:11, rol:"", nombre:"Gerardo Núñez", telefono:"83960794", congregacion:"Vista B. Quepo", nombramiento:"Siervo", marca:"", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A30","A32"], turno:"12-16"},
  {id:12, rol:"", nombre:"Eugenio Quiros", telefono:"70805875", congregacion:"Pedregal Cajón", nombramiento:"", marca:"", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A29"], turno:"12-16"},
  {id:13, rol:"", nombre:"Jorge Rodriguez", telefono:"60708056", congregacion:"Pedregal Cajón", nombramiento:"", marca:"", responsable:"Roy Azofeifa", codigo:"E,F.", areas:["A31"], turno:"12-16"}
];
acomodadores.forEach(p=>p.horarioOriginal=p.turno==="08-12"?"8AM A 12PM":"12PM A 4PM");