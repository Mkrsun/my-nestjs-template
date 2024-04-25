import { ConnectionPool } from 'mssql';
import { config } from './mssql.config';

export const mssqlPoolRO: ConnectionPool = new ConnectionPool(config);
export const mssqlPoolRW: ConnectionPool = new ConnectionPool(config);
