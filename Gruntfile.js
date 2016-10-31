module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: [ 'src/js/libs/bxslider.js', 'src/js/libs/wow.min.js', 'src/js/libs/skrollr.js' , 'src/js/libs/scrollit.js', 'src/js/global.js'], //input
        dest: './build/js/global.min.js' //output
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed', //compressed, expanded…,
          sourcemap: true
        },
        files: {
          'src/scss/prebuild/style.css': 'src/scss/style.scss',
        }
      }
    },

    autoprefixer: {
    options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'src/scss/prebuild/style.css',
        dest: './build/css'
      }
    },

    connect: {
      server: {
        options: {
          port: 8765,
          livereload: true,
          open: true,
          base: ['./build'],
          middleware: function(connect, options) {
            var middlewares;
            middlewares = [];
            middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]']));
            options.base.forEach(function(base) {
              return middlewares.push(connect["static"](base));
            });
            return middlewares;
          }
        }
      }
    },

    imagemin: {
       dynamic: {
        files: [{
          expand: true,
          cwd: 'src/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: './build/images'
        }]
      }
    },


    criticalcss: {
      custom: {
        options: {
            url: "http://www.boilingtap.com",
            width: 1300,
            height: 1200,
            outputfile: "critical.css",
            filename: "style.css",
        }
      }
    },

    grunticon: {
      myIcons: {
        files: [{
            expand: true,
            cwd: 'src/images/svg',
            src: ['*.svg'],
            dest: "./build/images"
        }],
        options: {
          pngfolder: "/",
          pngpath: "./build/images"
        }
      }
    },

    svgstore: {
      options: {
        prefix: "",
        cleanup: false,
        svg:{
          style: "display:none;"
        }
      },
      default : {
        files: {
          './build/images/svg-defs.svg': ['src/images/svg/*.svg'],
        },
      },
    },

    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    'build/css/*.css',
                    'build/*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './build'
            }
        }
    },

    watch:{
       options: {
          livereload: true,
        },
        scripts: {
          files: ['src/js/**/*.js'],
          tasks: ['uglify'],
          options: {
            spawn: false,
          }
        },


        css: {
          files: ['src/scss/**/*.scss'],
          tasks: ['sass', 'autoprefixer'],
          options: {
            spawn: false,
          }
        },
        images: {
          files: ['src/images/**/*.{png,jpg,gif}', 'src/images/*.{png,jpg,gif}'],
          tasks: ['imagemin'],
          options: {
            spawn: false,
          }
        },
        html:{
          files: ['./**/*.html'],
          tasks: [],
          options: {
            spawn: false
          }
        }
      },

      jshint: {
        all: ['js/*.js']
      }


  });

  // Load the tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-svgstore');
  // grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-grunticon');
  modRewrite = require('connect-modrewrite');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['sass','uglify' ,'jshint','connect' ,'autoprefixer','browserSync', 'watch']);
  // grunt.registerTask('critical', ['criticalcss', 'svgstore' , 'grunticon:myIcons' ]);
  // grunt.registerTask('svg', ['svgstore']);
  // grunt.registerTask('grunticon', ['grunticon:myIcons']);
// 'svgstore',

};

// 'imagemin'
