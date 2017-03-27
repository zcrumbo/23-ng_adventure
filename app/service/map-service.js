'use strict';

const angular = require('angular');
const prettyBigAdventure = angular.module('prettyBigAdventure');

prettyBigAdventure.factory('mapService', ['$log', mapService]);

function mapService ($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    field: {
      desc: 'You are in an open field',
      north: 'cliffs',
      south: 'forest',
      east: 'foothills',
      west: 'river',
      display: require('../display/wizard.txt')
    },
    cliffs: {
      desc: 'You are at the cliffs. A big bird flies by',
      south: 'field',
      display: require('../display/cliffs.txt')
    },
    forest: {
      desc: 'You come to a forest. It\'s kinda spooky',
      north: 'field',
      south: 'path'
    },
    foothills: {
      desc: 'The terrain becomes mountainous',
      west: 'field',
    },
    river: {
      desc: 'A wide, swift river',
      east: 'field',
      south: 'overlook'
    },
    overlook: {
      desc: 'You come to a rocky overlook on a bend in the river',
      north: 'river'
    },
    path: {
      desc: 'There is a path, but the way is shut',
    }
  };

  return service;
}
