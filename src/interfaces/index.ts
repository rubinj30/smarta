export * from "./buses";

export interface Position {
  latitude: number | undefined;
  longitude: number | undefined;
  timestamp?: number | undefined;
  accuracy?: number | undefined;
  speed?: number | null;
  error?: any;
  errorMessage?: string | undefined;
}

export type WindowSize = "small" | "medium" | "large";
