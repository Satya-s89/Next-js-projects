export default function Card({ 
  title, 
  subtitle, 
  children, 
  actions, 
  variant = 'default',
  className = '' 
}) {
  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg border border-gray-100',
    bordered: 'bg-white border-2 border-gray-300'
  };
  
  return (
    <div className={`rounded-lg p-6 ${variants[variant]} ${className}`}>
      {(title || subtitle || actions) && (
        <div className="flex justify-between items-start mb-4">
          <div>
            {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
          </div>
          {actions && <div className="flex space-x-2">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
}