module.exports = function (grunt) { 
    "use strict";
    
    grunt.initConfig({
        ts: {
            dev: { 
                src: ["*.ts", "services/**/*.ts"],          // The source typescript files, http://gruntjs.com/configuring-tasks#files
                watch: "services" 
            },
            build: { 
                src: ["*.ts", "services/**/*.ts"],          // The source typescript files, http://gruntjs.com/configuring-tasks#files 
            },
            options: {
                module: "commonjs",
                target: "es5"
            }
        }
    });
    
    grunt.loadNpmTasks("grunt-ts"); 
    grunt.registerTask("default", ["ts:dev"]); 
}