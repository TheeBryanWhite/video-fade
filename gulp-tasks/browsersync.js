const pkg = require('../package.json');
const browserSync = require('browser-sync').create();

const initialize = function(){
    browserSync.init({
    	proxy: pkg.config.hostname,
        notify:    false,
        ghost:     false,
    });
}

const reload = function(done){
    browserSync.reload();
    done();
}

module.exports = { initialize, reload, stream: browserSync.stream }
