export * from "./buses";

export interface Position {
  latitude: number | undefined;
  longitude: number | undefined;
  timestamp: number | undefined;
  accuracy: number | undefined;
  errorMessage: string | undefined;
}
