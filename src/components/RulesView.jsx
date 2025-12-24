export default function RulesView({ rules, onRulesChange, onBackToDashboard }) {
  return (
    <div className="min-h-screen bg-dark-primary">
      <div className="bg-dark-secondary shadow-lg border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-dark-primary bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Business Rules
            </h1>
            <button
              onClick={onBackToDashboard}
              className="btn-primary"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-dark-secondary rounded-lg shadow-lg p-6 border border-dark card-glow">
          <h3 className="text-lg font-semibold mb-4 text-dark-primary">Rule Configuration (JSON)</h3>
          <textarea
            value={JSON.stringify(rules, null, 2)}
            onChange={(e) => {
              try {
                onRulesChange(JSON.parse(e.target.value));
              } catch (err) {
                // Invalid JSON, don't update
              }
            }}
            className="w-full h-96 font-mono text-sm bg-slate-900 text-slate-200 border border-slate-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <div className="mt-4 p-4 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-700/50">
            <h4 className="font-semibold text-indigo-300 mb-2">Rule Types:</h4>
            <ul className="text-sm text-indigo-200 space-y-1">
              <li><strong className="text-indigo-300">sum:</strong> Sum all values in a field</li>
              <li><strong className="text-indigo-300">average:</strong> Calculate average of a field</li>
              <li><strong className="text-indigo-300">count:</strong> Count total records</li>
              <li><strong className="text-indigo-300">flag:</strong> Flag rows matching a condition (e.g., "revenue &lt; 0")</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}