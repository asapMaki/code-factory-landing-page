import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Button Variants Configuration
 * Uses class-variance-authority (cva) to define different button styles
 * This allows for consistent button styling throughout the application
 * while providing flexibility for different contexts
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary button style - used for main actions
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // Destructive button style - used for delete/cancel actions
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Outline button style - used for secondary actions
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // Secondary button style - used for less important actions
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Ghost button style - minimal visual presence until hovered
        ghost: "hover:bg-accent hover:text-accent-foreground",
        // Link button style - appears as a text link
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // Default size for most buttons
        default: "h-10 px-4 py-2",
        // Small size for compact UIs
        sm: "h-9 rounded-md px-3",
        // Large size for prominent actions
        lg: "h-11 rounded-md px-8",
        // Icon-only button (square)
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * Button Props Interface
 * Extends the standard HTML button attributes with our custom variants
 * @property asChild - When true, the component will render its children directly
 * @property variant - The visual style variant of the button
 * @property size - The size variant of the button
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * Button Component
 * A reusable button component with various style variants
 * Used throughout the services pages for calls-to-action
 *
 * @param className - Additional CSS classes
 * @param variant - The button style variant
 * @param size - The button size variant
 * @param asChild - When true, renders children directly (using Radix UI Slot)
 * @param props - All other button HTML attributes
 * @param ref - React ref forwarded to the button element
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Use Slot from Radix UI when asChild is true, otherwise use a regular button
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
