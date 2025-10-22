import Card from '../../ui/Card';

export default function StatsCard({ 
  title, 
  value, 
  change, 
  icon, 
  trend = 'up' 
}) {
  const trendColor = trend === 'up' ? 'text-green-600' : 'text-red-600';
  const trendIcon = trend === 'up' ? '↗️' : '↘️';
  
  return (
    <Card className="text-center">
      <div className="flex items-center justify-between">
        <div className="text-left">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${trendColor}`}>
              {trendIcon} {change}
            </p>
          )}
        </div>
        {icon && (
          <div className="text-3xl opacity-80">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}