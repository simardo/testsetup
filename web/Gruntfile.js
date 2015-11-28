module.exports = function (grunt) { 
    "use strict";
    
    grunt.initConfig({
        ts: {
            dev: { 
                src: ["app/**/*.ts"], 
                watch: 'app'
            },
            build: { 
                src: ["app/**/*.ts"], 
            },
            options: {
                module: "amd",
                target: "es5"
            }
        }
    });
    
    grunt.loadNpmTasks("grunt-ts"); 
    grunt.registerTask("default", ["ts:dev"]); 
}