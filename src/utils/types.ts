export type InitialLoadedData = { error: boolean; name: string };

type DataFileAssigned = {
  person_name: string;
  status: string;
};

export type DataFileSingle = {
  assigned_to: DataFileAssigned[];
  description: string;
  priority: string;
  received_date: string;
  status: string;
  work_order_id: number;
};

export type DataResponse = {
  current_page: number;
  data: DataFileSingle[];
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
};
export type DataFile = {
  exec_time: number;
  response: DataResponse;
};
