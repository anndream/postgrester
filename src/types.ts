export type PostgrestOptions = {
  baseUri: string;
};

export interface PostgrestContructor {
  new (options: PostgrestOptions): PostgrestInterface;
}
export interface PostgrestInterface {
  and: this;
  or: this;
  not: this;

  delete(path: string): Promise<void>;
  eq(column: string, value: boolean | number | string | null, withQuotes?: boolean): this;
  get<T = any>(path: string, withLength?: boolean): Promise<{ data: T; pagesLength: number }>;
  ilike(column: string, value: string): this;
  in(column: string, values: (number | string)[], withQuotes?: boolean): this;
  is(column: string, value: boolean | null): this;
  like(column: string, value: string): this;
  orderBy(column: string, isDesc?: boolean): this;
  page(pageIndex: number, limit?: number): this;
  patch(path: string, data: Object): Promise<void>;
  post(path: string, data: Object): Promise<void>;
  select(selector: string): this;
}