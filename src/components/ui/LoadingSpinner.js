export default function LoadingSpinner({ 
  size = 'md', 
  color = 'blue' 
}) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  
  const colors = {
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    white: 'border-white'
  };
  
  return (
    <div className={`${sizes[size]} border-2 ${colors[color]} border-t-transparent rounded-full animate-spin`}></div>
  );
}