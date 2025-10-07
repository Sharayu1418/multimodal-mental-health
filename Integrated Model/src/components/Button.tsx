interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger';
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-lg disabled:opacity-50';
  const variantClasses = {
    primary: 'bg-green-500 text-white hover:bg-green-600',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return <button className={combinedClasses} {...props} />;
}