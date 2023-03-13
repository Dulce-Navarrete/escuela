"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _Productos = _interopRequireDefault(require("../models/Productos"));
var _asignaturaController = require("../controllers/asignaturaController");
var _profesorController = require("../controllers/profesorController");
var _alumnoController = require("../controllers/alumnoController");
var router = (0, _express.Router)();

//PRODUCTOS
router.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var productos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Productos["default"].find().lean();
        case 2:
          productos = _context.sent;
          res.render("index", {
            productos: productos
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

//Agregar productos
router.post("/productos/agregar", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var productos;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          productos = (0, _Productos["default"])(req.body);
          _context2.next = 4;
          return productos.save();
        case 4:
          res.redirect("/");
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

//A buscar por id
router.get("/update/:id", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var productos;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _Productos["default"].findById(req.params.id).lean();
        case 3:
          productos = _context3.sent;
          res.render("editar", {
            productos: productos
          });
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
//ACTUALIZA
router.post("/update/:id", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return _Productos["default"].findByIdAndUpdate(id, req.body);
        case 3:
          res.redirect("/");
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
//eliminar
router.get("/delete/:id", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return _Productos["default"].findByIdAndDelete(id);
        case 3:
          res.redirect("/");
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

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