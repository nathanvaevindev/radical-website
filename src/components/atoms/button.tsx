import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

type BaseProps = {
  variant?: Variant;
  size?: Size;
};

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
    href: string;
  };

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-smaragd text-white hover:bg-smaragd-dark active:scale-95 shadow-[0_0_0_0_transparent] hover:shadow-glow-smaragd",
  secondary:
    "bg-surface-light text-heading hover:bg-surface-border active:scale-95",
  ghost:
    "bg-transparent text-heading hover:bg-surface-light active:scale-95",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
};

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return "href" in props;
}

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md" } = props;

  const classes = [
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-150",
    "focus-visible:ring-2 focus-visible:ring-smaragd focus-visible:ring-offset-2 focus-visible:ring-offset-page",
    variantStyles[variant],
    sizeStyles[size],
  ].join(" ");

  if (isLinkProps(props)) {
    const { variant: _v, size: _s, ...linkRest } = props;
    return <Link className={classes} {...linkRest} />;
  }

  const { variant: _v, size: _s, ...buttonRest } = props;
  return <button className={classes} {...buttonRest} />;
}
