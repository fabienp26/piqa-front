export type Event = {
  id: number;
  type: string;
  data: Record<string, unknown>;
  created_at: string;
};