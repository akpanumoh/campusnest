import { useParams } from "react-router-dom";

export default function EditRoommatePostPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Edit roommate post</h1>

      <p className="mt-2 text-muted-foreground">
        Update your roommate post and accommodation information.
      </p>

      <p className="mt-4 text-xs text-muted-foreground">Post ID: {id}</p>
    </div>
  );
}
