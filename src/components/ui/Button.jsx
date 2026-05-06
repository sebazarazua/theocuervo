export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) {
  const baseStyles = 'font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-medical-dark text-white hover:bg-medical-accent focus:ring-medical-dark',
    secondary: 'bg-medical-gray text-medical-dark hover:bg-gray-300 focus:ring-medical-gray',
    outline: 'border-2 border-medical-dark text-medical-dark hover:bg-medical-light focus:ring-medical-dark',
    whatsapp: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-600',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
