module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_KEY,
    "database": process.env.MYSQL_DBNAME,
    "host": process.env.MYSQL_HOST,
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "Jul@1989",
    "database": "mediger",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.JAWSDBUSER,
    "password": process.env.JAWSDBPW,
    "database": process.env.JAWSDBDB,
    "host": process.env.JAWSDBHOST,
    "port": 3306,
    "dialect": "mysql"
  }
}
