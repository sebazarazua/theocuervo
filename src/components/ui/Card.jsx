export default function Card({ 
  children, 
  className = '',
  variant = 'default',
  ...props 
}) {
  const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300';
  
  const variants = {
    default: 'bg-white border border-medical-gray hover:shadow-lg',
    elevated: 'bg-white shadow-md hover:shadow-xl',
    minimal: 'bg-medical-light border border-transparent',
  };
  
  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
