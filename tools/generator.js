var SequelizeAuto = require('sequelize-auto')
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var auto = new SequelizeAuto(config.database, config.username, config.password);

auto.run(function (err) {
  if (err) throw err;

//   console.log(auto.tables); // table list
  for(table in auto.tables)
  {
      console.log("Table name : " + table);
        //
  }
  console.log(auto.foreignKeys); // foreign key list
});

// With options:
// var auto = new SequelizeAuto('database', 'user', 'pass', {
//     host: 'localhost',
//     dialect: 'mysql',
//     directory: false, // prevents the program from writing to disk
//     port: 'port',
//     additional: {
//         timestamps: false
//         //...
//     },
//     tables: ['table1', 'table2', 'table3']
//     //...
// })

console.log("Generating controllers for entities with get APIs.....")
