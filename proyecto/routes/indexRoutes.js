"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _asignaturaController = require("../controllers/asignaturaController");
var _profesorController = require("../controllers/profesorController");
var _alumnoController = require("../controllers/alumnoController");
var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.render("index");
});

//ALUMNOS
router.get('/alumnos/agregar', _alumnoController.renderAlumnos);

//Alumnos agregar
router.post("/alumnos/agregar", _alumnoController.createAlumnos);

// BUSCAR POR ID
router.get("/update/alumnos/:id", _alumnoController.renderEditAlumnos);

//ACTUALIZA
router.post("/update/alumnos/:id", _alumnoController.updateAlumnos);

//ELIMINA
router.get("/delete/alumnos/:id", _alumnoController.deleteAlumnos);

//status 
router.get("/status/alumnos/:id", _alumnoController.statusAlumnos);

//ASIGNATURAS

router.get('/asignaturas/agregar', _asignaturaController.renderAsignaturas);

//agregar asignatura
router.post("/asignaturas/agregar", _asignaturaController.createAsignaturas);

//EDITAR ASIGANTURA  POR ID
router.get("/update/asignaturas/:id", _asignaturaController.renderEditAsignaturas);
//ACTUALIZA
router.post("/update/asignaturas/:id", _asignaturaController.updateAsignaturas);

//elimina
router.get("/delete/asignaturas/:id", _asignaturaController.deleteAsignaturas);

//status
router.get("/status/asignaturas/:id", _asignaturaController.statusAsignaturas);

//Profesores

router.get('/profesores/agregar', _profesorController.renderProfesores);

//agregar profesores
router.post("/profesores/agregar", _profesorController.createProfesores);

//EDITAR profesores  POR ID
router.get("/update/profesores/:id", _profesorController.renderEditProfesores);

//ACTUALIZA
router.post("/update/profesores/:id", _profesorController.updateProfesores);

//elimina
router.get("/delete/profesores/:id", _profesorController.deleteProfesores);

//status
router.get("/status/profesores/:id", _profesorController.statusProfesores);
var _default = router;
exports["default"] = _default;