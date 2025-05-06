export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface Map {
  id: string;
  name: string;
  width: number;
  height: number;
  createdAt: Date;
}
