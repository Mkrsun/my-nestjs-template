export abstract class DbRepository {
  abstract executeQueryRO(query: string): Promise<any>;
  abstract executeQueryRW(query: string, placeholders?: any[]): Promise<any>;
}
