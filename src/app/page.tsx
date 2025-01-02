import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div>
      <h1>Progress</h1>
      <Progress value={33} />
    </div>
  );
}
