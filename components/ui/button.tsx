import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl hover:scale-105': variant === 'default',
            'bg-accent-500 text-black hover:bg-accent-600 shadow-lg hover:shadow-xl hover:scale-105 font-bold': variant === 'secondary',
            'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white': variant === 'outline',
            'hover:bg-gray-100 text-gray-700': variant === 'ghost',
            'h-11 px-8 py-2 text-base': size === 'default',
            'h-9 px-4 py-1 text-sm': size === 'sm',
            'h-14 px-10 py-3 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

