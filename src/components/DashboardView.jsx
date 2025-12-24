import { DollarSign, TrendingUp, AlertCircle, Filter } from 'lucide-react';
import KPICard from './KPICard';
import ChartSection from './ChartSection';

export default function DashboardView({ metrics, flags, chartData, onViewData, onViewRules, onLoadOtherDataSet }) {
  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Header */}
      <div className="bg-dark-secondary shadow-lg border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-dark-primary bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Executive Dashboard
            </h1>
            <div className="flex gap-2">
              <button
                onClick={onViewData}
                className="btn-primary"
              >
                View Data
              </button>
              <button
                onClick={onViewRules}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/30"
              >
                Configure Rules
              </button>
              <button
                onClick={onLoadOtherDataSet}
                className="px-4 py-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-all border border-slate-600"
              >
                Load Other Dataset
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
              colorClass={idx % 3 === 0 ? 'from-blue-500 to-cyan-500' : idx % 3 === 1 ? 'from-green-500 to-emerald-500' : 'from-purple-500 to-pink-500'}
            />
          ))}
        </div>

        {/* Flags */}
        {flags.length > 0 && (
          <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 border-l-4 border-red-500 p-4 mb-8 rounded-lg backdrop-blur-sm">
            <div className="flex items-center">
              <AlertCircle className="text-red-400 mr-3 w-6 h-6" />
              <div>
                <h3 className="text-red-300 font-semibold text-lg">Flagged Items: {flags.length}</h3>
                <p className="text-red-200 text-sm mt-1">
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