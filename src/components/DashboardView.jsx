import { DollarSign, TrendingUp, AlertCircle, Filter } from 'lucide-react';
import KPICard from './KPICard';
import ChartSection from './ChartSection';

export default function DashboardView({ metrics, flags, chartData, onViewData, onViewRules, onLoadOtherDataSet }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Executive Dashboard</h1>
            <div className="flex gap-2">
              <button
                onClick={onViewData}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View Data
              </button>
              <button
                onClick={onViewRules}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Configure Rules
              </button>
              <button
                onClick={onLoadOtherDataSet}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
              >
                Load Other Data Set
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(metrics).map(([key, value], idx) => (
            <KPICard
              key={key}
              label={key}
              value={value}
              icon={idx % 3 === 0 ? DollarSign : idx % 3 === 1 ? TrendingUp : Filter}
              colorClass={idx % 3 === 0 ? 'bg-blue-100' : idx % 3 === 1 ? 'bg-green-100' : 'bg-purple-100'}
            />
          ))}
        </div>

        {/* Flags */}
        {flags.length > 0 && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded">
            <div className="flex items-center">
              <AlertCircle className="text-red-600 mr-3" />
              <div>
                <h3 className="text-red-800 font-semibold">Flagged Items: {flags.length}</h3>
                <p className="text-red-700 text-sm mt-1">
                  {flags.slice(0, 3).map(f => f._flag).join(', ')}
                  {flags.length > 3 && '...'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Charts */}
        {chartData.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartSection data={chartData} type="bar" title="Bar Chart Analysis" />
            <ChartSection data={chartData} type="line" title="Trend Analysis" />
          </div>
        )}
      </div>
    </div>
  );
}