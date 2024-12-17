import { EnvValidator } from "env-protector";

const envValidator = new EnvValidator({
  HUGGINGFACE_API_KEY: {
    type: "pattern",
    required: true,
    pattern: /^hf_[a-zA-Z0-9]+$/,
    message:
      "The Hugging Face API key must start with 'hf_' followed by alphanumeric characters",
  },
  MODEL_NAME: {
    type: "string",
    required: true,
    default: "facebook/bart-large-cnn",
    message: "Model name is required",
  },
  MAX_LENGTH: {
    type: "number",
    required: true,
    min: 50,
    max: 500,
    default: 100,
    message: "The maximum length must be between 50 and 500",
  },
});

const { validatedEnv, isValid } = envValidator.validate();

if (!isValid) {
  throw new Error("Invalid environment variables");
}

export const env = validatedEnv;
