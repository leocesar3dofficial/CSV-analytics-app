import { Upload, TrendingUp } from 'lucide-react';

export default function UploadView({ onFileUpload }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="bg-white rounded-lg shadow-xl p-12 max-w-2xl w-full">
        <div className="text-center mb-8">
          <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CSV Analytics Platform</h1>
          <p className="text-gray-600">Import, process, and visualize your business data</p>
        </div>

        <label className="block">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition cursor-pointer">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg text-gray-700 mb-2">Drop your CSV file here or click to browse</p>
            <p className="text-sm text-gray-500">Supports any CSV format with headers</p>
            <input
              type="file"
              accept=".csv"
              onChange={onFileUpload}
              className="hidden"
            />
          </div>
        </label>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-3">Features:</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>✓ Automatic data parsing and validation</li>
            <li>✓ Custom business rules and calculations</li>
            <li>✓ Executive KPI dashboards</li>
            <li>✓ Interactive charts and filters</li>
            <li>✓ Anomaly detection and flagging</li>
          </ul>
        </div>
      </div>
    </div>
  );
}