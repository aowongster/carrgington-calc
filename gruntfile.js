module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: true
            },
            build: {
                src: 'src/*.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            all: ['gruntfile.js', 'src/*.js']
        }
    });

    // loading tasks the hard way
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-shell');

    // registering tasks the hard way
    grunt.registerTask('build',[
        'jshint',
        'uglify'
    ]);

    grunt.registerTask('travis-ci',['build']);

    // default
    grunt.registerTask('default', ['build']);
};