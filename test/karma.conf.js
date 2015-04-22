module.exports = function(config){
    config.set({

        basePath : '../',

        files : [
            'app/js/**/*.js',
            'test/unit/**/*.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};