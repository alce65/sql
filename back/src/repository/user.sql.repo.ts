import { dbSqlConnect } from '../db/db.connect';
import { User } from '../entities/user';
import { Repository } from './repository';

const CONNECTION = await dbSqlConnect();

export class UserSqlRepo implements Repository<User> {
  connection: any;
  constructor() {
    this.connection = CONNECTION;
  }

  getAll(): Promise<any[]> {
    return this.connection.query('SELECT * FROM users');
  }
  getById(id: string): Promise<any> {
    // NUNCA - INYECCION DE SQL
    // return this.connection.query(`SELECT * FROM users WHERE id = ${id}`);

    return this.connection.query('SELECT * FROM users WHERE id = ?', [id]);
  }
  search?({ key, value }: { key: string; value: unknown }): Promise<any[]> {
    return this.connection.query(`SELECT * FROM users WHERE ? = ?`, [
      key,
      value,
    ]);
  }
  create(newData: Omit<any, 'id'>): Promise<any> {
    return this.connection.query('INSERT INTO users SET ?', [newData]);
  }
  update(id: any, newData: Partial<any>): Promise<any> {
    return this.connection.query('UPDATE users SET ? WHERE id = ?', [
      newData,
      id,
    ]);
  }
  delete(id: any): Promise<void> {
    return this.connection.query('DELETE FROM users WHERE id = ?', [id]);
  }
}
