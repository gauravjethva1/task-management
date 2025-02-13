import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { cn } from '../../utils/helpers/cn'

interface TextInputProps<T extends FieldValues>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: Path<T>
  register: UseFormRegister<T>
  label: string
  error?: FieldError
  className?: string
  required?: boolean
}

const TextInput = <T extends FieldValues>({
  name,
  register,
  error,
  label = '',
  placeholder = '',
  className = '',
  disabled = false,
  ...props
}: TextInputProps<T>) => {
  return (
    <div className="relative w-full">
      <label className="text-gray-0 text-sm font-medium" htmlFor={name}>
        {label}
      </label>

      {/* Input Field */}
      <input
        id={name}
        className={cn(
          'text-gray-100 h-10 w-full mt-1 border border-gray-800 bg-gray-800 px-3 rounded-md appearance-none text-sm focus:outline-none outline-none focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-600',
          {
            'border-error-100': error,
            'border-gray-600': !error,
            'cursor-not-allowed bg-gray-200': disabled,
          },
          className,
        )}
        placeholder={placeholder || `Enter ${label}`}
        disabled={disabled}
        {...props}
        {...register(name)}
      />

      {error && <p className="text-error-100 text-xs">{error.message}</p>}
    </div>
  )
}

export default TextInput
