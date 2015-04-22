'use strict';

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
        it('should set the default rotations to 0', function(){
            expect(scope.rotations).toBe(0);
        });
        it('should set the default date to be October 14th, 1853', function(){
            expect(scope.dateString).toEqual(new Date("October 14, 1853"));
        });
    });
});