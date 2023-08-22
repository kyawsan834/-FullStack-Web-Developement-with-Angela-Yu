//jshint esversion:6

const fs = require("fs");

var superheros = require("superheros");

var supervillian = require("supervillians");

fs.copyFileSync("file1.txt", "file2.txt");

var mySuperheroName = superheros.random();

var myVillianName = supervillian.random();

console.log(mySuperheroName);

console.log(myVillianName);