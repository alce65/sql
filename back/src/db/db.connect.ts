import mysql from 'mysql2/promise';

export const dbConnect = () => {
  const user = process.env.DB_USER;
  const passwd = process.env.DB_PASSWD;
  const host = process.env.DB_HOST || 'cluster0.p2bwofa.mongodb.net';
  const db_name = process.env.DB_NAME || 'Curso_2023_Q3';
  const uri = `mongodb+srv://${user}:${passwd}@${host}/${db_name}?retryWrites=true&w=majority`;

  // return mongoose.connect(uri);
};

export const dbSqlConnect = () => {
  const connectionData = {
    host: process.env.DB_HOST || 'localhost:3306',
    user: process.env.DB_USER || 'root',
    passwd: process.env.DB_PASSWD || '65@Alces',
    database: process.env.DB_NAME || 'sample',
  };

  return mysql.createConnection(connectionData);
};

// - host (-h)
// - port (-P) default 3306
// - user (-u) root / user siempre con acceso por consola habilitado
// - passwd (-p)
// - db_name (-D)
