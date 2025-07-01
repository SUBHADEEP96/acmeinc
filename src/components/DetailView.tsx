import { useLocation, useNavigate } from "react-router-dom";
import type { Location } from "react-router-dom";

interface DetailState {
  item: { [key: string]: any };
}

export default function DetailView() {
  const location = useLocation() as Location & { state: DetailState | null };
  const navigate = useNavigate();

  if (!location.state || !location.state.item) {
    navigate("/");
    return null;
  }

  const { item } = location.state;

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        Back
      </button>
      <div className="bg-white p-4 border border-gray-200 rounded">
        {Object.entries(item).map(([key, value]) => (
          <div key={key} className="mb-2">
            <span className="font-semibold">{key}: </span>
            <span>{String(value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
