import { ClipboardList } from "lucide-react";

const EmptyState = ({ title, description, action }) => {
  return (
    <div className="text-center p-8">
      <ClipboardList className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
      {action && (
        <div className="mt-6">
          <button type="button" className="btn btn-primary">
            {action}
          </button>
        </div>
      )}
    </div>
  );
};

export default EmptyState;
