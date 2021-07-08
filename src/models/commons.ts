export interface Header {
  title: string;
  colspan?: number;
}

export interface Table {
  headers: Header[];
  items: any[];
  isLoading: boolean;
}
