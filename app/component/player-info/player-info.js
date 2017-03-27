'use strict';

const angular = require('angular');
const prettyBigAdventure = angular.module('prettyBigAdventure');

prettyBigAdventure.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl'
});

prettyBigAdventure.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);

function PlayerInfoController($log, playerService) {
  $log.debug('PlayerInfoController', this);
  this.player = playerService.player;
  this.prop = 'hello there';
}