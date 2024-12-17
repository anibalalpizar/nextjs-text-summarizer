export interface SummaryResponse {
  success: boolean;
  summary?: string;
  error?: string;
}

export interface SummaryResultProps {
  summary: string;
}

export interface CharacterLimitedTextareaProps {
  maxChars: number;
  placeholder: string;
  name: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
}
