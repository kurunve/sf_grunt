module.exports = function(grunt) {
 
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    antretrieve: {
        options: {
                //useEnv: true,
                version: '30.0',
                maxPoll: 100,
                pollWaitMillis: 10000,
                root: 'src/'
            },
        all: {
                options: {
                    serverurl: 'https://login.salesforce.com',
                    existingPackage: true,
                    retrieveTarget: 'tmp',
                    user: process.env.SF_LOGIN,
          	    pass: process.env.SF_PASS+process.env.SF_TOKEN
                }
            }
    },
    antdeploy:{
        options: {
                //useEnv: true,
                version: '30.0',
                maxPoll: 100,
                pollWaitMillis: 10000,
                root: 'src/',
                user: process.env.SF_LOGIN,
          	pass: process.env.SF_PASS+process.env.SF_TOKEN,
                serverurl: 'https://login.salesforce.com',
                existingPackage: true,
            },
        all: {
                options: {
                    runAllTests: false
                }
        },
        allwithtests: {
                options: {
                     runAllTests: true
                }
        },
        validateall: {
                options: {
                    runAllTests: false,
                    checkOnly: true
                }
        },
        validateallwithtests: {
                options: {
                    runAllTests: true,
                    checkOnly: true
                }
        }
    },
    mkdir: {
        tmp: {
            options: {
                mode: 0700,
                create: ['tmp']
            }
        }
    },
    copy: {
        all: {
            expand: true,
            cwd: 'tmp/',
            src: '**',
            dest: 'src/'
        }
    },
    clean: {
	    tmp: ['tmp']
    }
  });



  grunt.loadNpmTasks('grunt-ant-sfdc');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  
  grunt.registerTask('ololoev', 'Write the required salesforce metadata', function() {
    grunt.log.writeln('Writing metadata...');
    grunt.log.writeln('Writing metadata...');
    grunt.log.writeln('Writing metadata...');
  });
  
  grunt.registerTask('test2', ['mkdir:tmp','ololoev','clean:tmp']);
  grunt.registerTask('pullall', ['mkdir:tmp','antretrieve:all','copy:all','clean:tmp']);
  grunt.registerTask('saveall', ['antdeploy:all']);
  grunt.registerTask('saveallwithtests', ['antdeploy:allwithtests']);
  grunt.registerTask('validateall', ['antdeploy:validateall']);
  grunt.registerTask('validateallwithtests', ['antdeploy:validateallwithtests']);
};
