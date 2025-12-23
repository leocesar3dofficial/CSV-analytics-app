export default function KPICard({ label, value, icon: Icon, colorClass }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <p className="text-3xl font-bold text-gray-900">
            {typeof value === 'number' 
              ? value.toLocaleString(undefined, { maximumFractionDigits: 2 }) 
              : value}
          </p>
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClass}`}>
          <Icon className={colorClass.includes('blue') ? 'text-blue-600' : 
                          colorClass.includes('green') ? 'text-green-600' : 
                          'text-purple-600'} />
        </div>
      </div>
    </div>
  );
}