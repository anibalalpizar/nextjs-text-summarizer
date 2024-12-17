import type { SummaryResultProps } from "@/types/summary";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SummaryResult({ summary }: SummaryResultProps) {
  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Summary Result:</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed">{summary}</p>
      </CardContent>
    </Card>
  );
}
