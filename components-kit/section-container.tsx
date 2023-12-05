import { VariantProps, cva } from "class-variance-authority";
import { FC, ReactNode, memo } from "react";

const variants = cva("px-4 lg:px-8 flow-root py-8", {
  variants: {
    background: {
      coffee: "bg-coffee-50",
      white: "bg-white",
      brand: "bg-brand",
    },
  },
  defaultVariants: {
    background: "",
  },
});

type Props = VariantProps<typeof variants> & {
  children: ReactNode;
  /**
   * Indique si la section utilisera un container ou si elle prendra toute la largeur de la page
   */
  fullWidth?: boolean;
  /**
   * Définit quelle balise HTML utiliser pour la section
   * @default div
   */
  as?: "div" | "main";
  /**
   * ID HTML optionnel
   */
  id?: string;
  /**
   * Classes HTML optionnelles à appliquer sur la balise qui englobe le `children
   */
  wrapperClassName?: string;
  /**
   * Classes HTML optionnelles à appliquer sur la section
   */
  className?: string;
};

/**
 * Container de section à utiliser pour démarquer les différentes sections. 
 */
const SectionContainer: FC<Props> = memo(function ({
  as: Comp = "div",
  id,
  wrapperClassName = "",
  className = '',
  children,
  fullWidth = false,
  ...props
}) {
  return (
    <Comp id={id} className={`${variants(props)} ${className}`}>
      <div className={`${fullWidth ? '' : 'container mx-auto'} ${wrapperClassName}`}>
        {children}
      </div>
    </Comp>
  );
});

SectionContainer.displayName = "SectionContainer";
export { SectionContainer };
