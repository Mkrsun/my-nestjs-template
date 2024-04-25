import { mssqlPoolRO, mssqlPoolRW } from './mssql.pool';
import { DbRepository } from '../dbRepository';

export class MssqlRepository implements DbRepository {
  escapeQuery = (query: string): string => {
    return query
      .replaceAll('\n', '')
      .replaceAll('\t', '')
      .replaceAll('*', '')
      .replaceAll(';', '');
  };
  executeQueryRO = async (query: string): Promise<any> => {
    try {
      const request = mssqlPoolRO.request();
      const escapedQuery = this.escapeQuery(query);
      await mssqlPoolRW.connect();
      const result = await request.query(escapedQuery);
      return result.recordset;
    } catch (error) {
      throw new Error('Error interno del servidor - pool request failed');
    }
  };

  executeQueryRW = async (query: string, values: any[]): Promise<any> => {
    try {
      const request = mssqlPoolRW.request();
      if (values && values.length > 0) {
        values.forEach((value, index) => {
          request.input(`param${index}`, value);
        });
      }
      const queryCleaned = this.escapeQuery(query);
      await mssqlPoolRW.connect();
      const result = await request.query(queryCleaned);
      return result.recordset;
    } catch (error) {
      throw new Error('Error interno del servidor - pool request failed');
    }
  };
}
