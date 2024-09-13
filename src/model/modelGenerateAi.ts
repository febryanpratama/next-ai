// To parse this data:
//
//   import { Convert, ModelGenerateAI } from "./file";
//
//   const modelGenerateAI = Convert.toModelGenerateAI(json);

export interface ModelGenerateAI {
  code: number;
  status: boolean;
  message: string;
  result: Result;
}

export interface Result {
  id: number;
  prompt: string;
  response: string;
  jsonResponse: null;
  createdAt: Date;
  updatedAt: Date;
}

// Converts JSON strings to/from your types
export class ConvertToModelGenerateAi {
  public static toModelGenerateAI(json: string): ModelGenerateAI {
    return JSON.parse(json);
  }

  public static modelGenerateAIToJson(value: ModelGenerateAI): string {
    return JSON.stringify(value);
  }
}
