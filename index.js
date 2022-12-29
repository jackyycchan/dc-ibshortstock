var Client = require('ftp');
var fs = require('fs');
var moment = require('moment');

var c = new Client();
var numOfFilesD = 0;
var numOfFilesL = 0;
var date = moment().format('YYYYMMDD');
var dest = 'src/' + date + '/';

var isClose = function() {
    if (numOfFilesD == numOfFilesL) {
        console.log('end');
        c.end();
    } else {
        console.log('continue');
    }
}

var getFile = function(fileName) {
    c.get(fileName, function(err, stream) {
      if (err) throw err;
      stream.once('close', function() {
            numOfFilesD++;
            isClose();
            console.log(fileName);
      });
      stream.pipe(fs.createWriteStream(dest + fileName));
    });
};

c.on('ready', function() {
    c.list(function(err, list) {
      if (err) throw err;

      numOfFilesL = list.length;

      if (!fs.existsSync(dest)){
          fs.mkdirSync(dest);
      }

      for(file of list) {
        getFile(file.name);
      }

      c.end();
    });
});

// connect to localhost:21 as anonymous
c.connect({
    'host' : 'ftp3.interactivebrokers.com',
    'user' : 'shortstock'
});
