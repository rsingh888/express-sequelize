var SequelizeAuto = require('sequelize-auto')
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
// var auto = new SequelizeAuto(config.database, config.username, config.password);
var fs = require('fs');
var Mustache = require('Mustache');

// auto.run(function (err) {
//   if (err) throw err;

// //   console.log(auto.tables); // table list
//   for(table in auto.tables)
//   {
//       console.log("Table name : " + table);
//       var object_to_render = {modelName: table};
//       fs.readFile("../routes/model.mst", function (err, data) {
//         if (err) throw err;
//         var output = Mustache.render(data.toString(), object_to_render);
      
//         fs.writeFile("./../routes/"+table+".js", output, { flag: 'wx' }, function(err) {
//           if(err) {
//               return console.log(err);
//           }
//           console.log("The file was saved!");
//         }); 
//       });
//   }
//   console.log(auto.foreignKeys); // foreign key list
// });

// With options:
var auto = new SequelizeAuto(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    directory: './../models', // prevents the program from writing to disk
    port: config.port,
    // output: './../models',
    additional: {
      timestamps: false
        //...
    },
    // tables: ['city', 'country', 'countrylanguage']
    //...
})
auto.run(function (err) {
  if (err) throw err;

  // console.log(auto.tables); // table list
  for(table in auto.tables)
  {
    (function(table) {
      console.log("Table name : " + table);
      var object_to_render = {modelName: table};
      fs.readFile("../templates/model.mst", function (err, data) {
        if (err) throw err;
        var output = Mustache.render(data.toString(), object_to_render);
      
        fs.writeFile("./../routes/"+table+".js", output, { flag: 'w' }, function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("./../routes/"+table+".js" + "-------The file was saved!");
        });
      });

        fs.readFile("./../templates/app.mst", function (err, data) {
          if (err) throw err;
          var output = Mustache.render(data.toString(), object_to_render);
          
         
          fs.appendFile('./../app.js', output, {position: 22},function (err) {
            if (err) throw err;
            console.log('Saved!');
          }); 
      });
    })(table);
  }
  // console.log(auto.foreignKeys); // foreign key list
});

console.log("Generating controllers for entities with get APIs.....")
