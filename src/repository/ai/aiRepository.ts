import { post } from "@/src/core/api/baseApi";
import { ConvertToModelGenerateAi } from "@/src/model/modelGenerateAi";

export const generateAiTextFirst = async (
  prompt: string,
): Promise<any | null> => {
  const resp = await post("/generate/text", {
    prompt: prompt,
  });

  if (resp === null) {
    return null;
  }

  return ConvertToModelGenerateAi.toModelGenerateAI(JSON.stringify(resp));
};
