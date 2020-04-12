{// Wrong ✖
  class MySqlConnection {
    connection(): any {...}
  }

  class MongoDbConnection {
    connection(): any {...}
  }

  class User {
    db: any;

    constructor(dbConnection: MySqlConnection) {
      this.db = dbConnection;
    }
  }

  const dbConnection = new MySqlConnection();
  const user = new User(dbConnection);
}
// -------------------------------------------------------------------- //

{
  // Right ✔
  interface DbConnection {
    connection(): any;
  }

  class MySqlConnection implements DbConnection {
    connection(): any {...}
  }

  class MongoDbConnection implements DbConnection {
    connection(): any {...}
  }

  class User {
    db: any;

    constructor(dbConnection: DbConnection) {
      this.db = dbConnection;
    }
  }

  const dbConnection = new MySqlConnection();
  const user = new User(dbConnection);
}