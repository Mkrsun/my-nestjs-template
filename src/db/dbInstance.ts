import { DbRepository } from './dbRepository';
import { MssqlRepository } from './mssql/mssql.repository.impl';

const dbRepositoryInstance: DbRepository = new MssqlRepository();

export { dbRepositoryInstance };
