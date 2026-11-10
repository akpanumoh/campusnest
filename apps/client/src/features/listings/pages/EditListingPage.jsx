import { useParams } from "react-router-dom";

export default function EditListingPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Edit accommodation</h1>

      <p className="mt-2 text-muted-foreground">
        Update your accommodation details, pricing and photos.
      </p>

      <p className="mt-4 text-xs text-muted-foreground">Listing ID: {id}</p>
    </div>
  );
}
