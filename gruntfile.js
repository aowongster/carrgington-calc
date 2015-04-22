module.exports = function(grunt) {
    'use strict';

    var _js = {
        app: ['app/js/*.js'],
        grunt: ['gruntfile.js']
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: true
            },
            build: {
                src: _js.app,
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            all: _js.app.concat(_js.grunt)
        },
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            },
            watch: {
                configFile: 'test/karma.conf.js'
            }
        },
        watch: {
            all: {
                files: _js.app.concat(_js.grunt),
                tasks: ['jshint']
            }
        }
    });

    // loading tasks the hard way
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-shell');

    // registering tasks the hard way
    grunt.registerTask('build',[
        'jshint',
        'uglify',
        'karma:unit'
    ]);

    grunt.registerTask('travis-ci',['build']);

    // default
    grunt.registerTask('default', ['build']);
};