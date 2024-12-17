"use server";

import type { SummaryResponse } from "@/types/summary";
import { HfInference } from "@huggingface/inference";
import { HUGGINGFACE_API_KEY, MODEL_NAME, MAX_LENGTH } from "@/config/api";
import { sumarizeTextSchema } from "@/lib/validations/summary";

const hf = new HfInference(HUGGINGFACE_API_KEY);

export const sumarizeText = async (text: string): Promise<SummaryResponse> => {
  const { success, error } = sumarizeTextSchema.safeParse({ text });

  if (!success) {
    return {
      error: error.errors[0].message,
      success: false,
    };
  }

  try {
    const summary = await hf.summarization({
      model: MODEL_NAME,
      inputs: text,
      parameters: {
        max_length: MAX_LENGTH,
      },
    });

    return {
      summary: summary.summary_text,
      success: true,
    };
  } catch (error) {
    console.error("SumarizeText error", error);
    return {
      error: "An error occurred while summarizing the text",
      success: false,
    };
  }
};
