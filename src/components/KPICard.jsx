export default function KPICard({ label, value, icon: Icon, colorClass }) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg p-6 border border-slate-700 card-glow transition-all hover:border-indigo-500/50">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400 mb-1 uppercase tracking-wide">{label}</p>
          <p className="text-3xl font-bold text-slate-100">
            {typeof value === 'number' 
              ? value.toLocaleString(undefined, { maximumFractionDigits: 2 }) 
              : value}
          </p>
        </div>
        <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${colorClass} shadow-lg`}>
          <Icon className="text-white w-7 h-7" />
        </div>
      </div>
    </div>
  );
}