type MovingJobProps = {
    job: {
        customerName: string;
        customerPhoneNumber: string;
        customerEmail: string;
        loadAddressLine1: string;
        loadAddressLine2: string | null;
        unloadAddressLine1: string;
        unloadAddressLine2: string | null;
        notes: string | null;
        id: string;
    }
}

function MovingJobCard({ job }: MovingJobProps) {
  const { customerName, customerPhoneNumber, customerEmail, loadAddressLine1, loadAddressLine2, unloadAddressLine1, unloadAddressLine2, notes } = job;

  // Format addresses, omitting null values
  const loadAddress = loadAddressLine2 ? `${loadAddressLine1}, ${loadAddressLine2}` : loadAddressLine1;
  const unloadAddress = unloadAddressLine2 ? `${unloadAddressLine1}, ${unloadAddressLine2}` : unloadAddressLine1;

  return (
    <div
      className="p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 max-w-sm mx-auto sm:max-w-md"
    >
      <h3 className="text-lg font-semibold text-black mb-2">
      {customerName}
      </h3>
      <p className="text-sm text-black mb-1">
        <span className="font-medium">Phone:</span> {customerPhoneNumber}
      </p>
      <p className="text-sm text-black mb-1">
        <span className="font-medium">Email:</span> {customerEmail}
      </p>
      <p className="text-sm text-black mb-1">
        <span className="font-medium">Load Address:</span> {loadAddress}
      </p>
      <p className="text-sm text-black mb-1">
        <span className="font-medium">Unload Address:</span> {unloadAddress}
      </p>
      <p className="text-sm text-black mb-4">
        <span className="font-medium">Notes:</span> {notes}
      </p>
      <button
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
      >
        Contact Customer
      </button>
    </div>
  );
};

export default MovingJobCard;