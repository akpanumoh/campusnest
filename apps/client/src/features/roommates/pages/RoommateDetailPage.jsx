import { useParams } from "react-router-dom";

export default function RoommateDetailPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Roommate post details</h1>

      <p className="mt-2 text-muted-foreground">
        View this student's roommate request and available accommodation
        details.
      </p>

      <p className="mt-4 text-xs text-muted-foreground">Post ID: {id}</p>
    </div>
  );
}
