"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { sumarizeText } from "@/actions";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CharacterLimitedTextarea } from "@/components/CharacterLimitedTextarea";
import { SummaryResult } from "@/components/SummaryResult";

function SummaryForm() {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");

  const maxChars = 300;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { success, summary } = await sumarizeText(text);

      if (success && summary) setSummary(summary);
      else throw new Error("Error al generar el resumen");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSummary("");
    setText("");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Text Summarization Tool
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <CharacterLimitedTextarea
            maxChars={maxChars}
            placeholder="Ingresa el texto a resumir (máximo 300 palabras)"
            name="text"
            id="text"
            value={text}
            onChange={setText}
          />
          <div className="flex space-x-2">
            <Button
              type="submit"
              disabled={loading || text.length === 0}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Making summary...
                </>
              ) : (
                "Resumir"
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </form>

        {summary && !loading && <SummaryResult summary={summary} />}
      </CardContent>
    </Card>
  );
}

export default SummaryForm;
