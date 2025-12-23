export default function RulesView({ rules, onRulesChange, onBackToDashboard }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Business Rules</h1>
            <button
              onClick={onBackToDashboard}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Rule Configuration (JSON)</h3>
          <textarea
            value={JSON.stringify(rules, null, 2)}
            onChange={(e) => {
              try {
                onRulesChange(JSON.parse(e.target.value));
              } catch (err) {
                // Invalid JSON, don't update
              }
            }}
            className="w-full h-96 font-mono text-sm border rounded p-4"
          />
          <div className="mt-4 p-4 bg-blue-50 rounded">
            <h4 className="font-semibold text-blue-900 mb-2">Rule Types:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li><strong>sum:</strong> Sum all values in a field</li>
              <li><strong>average:</strong> Calculate average of a field</li>
              <li><strong>count:</strong> Count total records</li>
              <li><strong>flag:</strong> Flag rows matching a condition (e.g., "revenue &lt; 0")</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}