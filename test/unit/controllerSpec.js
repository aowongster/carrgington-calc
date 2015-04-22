'use strict'

describe('Carrington Controllers', function(){

    beforeEach(module('carringtonCalc'));

    describe('CalcCtrl', function() {
        var scope, ctrl;

        beforeEach(inject(function($rootScope, $controller){

            scope = $rootScope.$new();
            ctrl = $controller('CalcCtrl', {$scope: scope})
        }));
        it('dummy should be true', function() {
            expect(true);
        });


    });
});