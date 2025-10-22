export default function Input({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error, 
  label, 
  required = false,
  className = '' 
}) {
  const inputClasses = `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
  } ${className}`;
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${inputClasses} min-h-[100px] resize-vertical`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}