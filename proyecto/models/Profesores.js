"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var profesorEsquema = new _mongoose.Schema({
  RFC: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  nombre: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  paterno: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  materno: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  fechaNacimiento: {
    type: Date,
    required: true,
    unique: false,
    trim: true
  },
  direccion: {
    type: String,
    required: true
  },
  celular: {
    type: String,
    required: true
  },
  profesion: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  numeroEmpleado: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  opcion: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)("Profesores", profesorEsquema);
exports["default"] = _default;