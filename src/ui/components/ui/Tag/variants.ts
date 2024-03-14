import { cva, type VariantProps } from "class-variance-authority";
 
// "text-sm font-medium font-['Work Sans'] leading-tight

export const tagVariants = cva("px-2 py-1  rounded justify-center items-center gap-2.5 flex [&>p]:text-sm [&>p]:font-medium [&>p]:leading-tight", {
  variants: {
    variant: {
      yellow: "bg-amber-100 [&>p]:text-yellow-700 ",
      green: "bg-green-100 [&>p]:text-lime-700",
      red: "bg-red-200 [&>p]:text-red-700",
      blue: "bg-blue-100 [&>p]:text-blue-600",
      orange: "bg-[#FFD8D1] [&>p]:text-util-orange-dark",
      blank: "bg-zinc-100 [&>p]:text-zinc-600",
      purple: "bg-primary-lila-light [&>p]:text-primary-purple"
    },
  },
  defaultVariants: {
    variant: "blank",
  },
});

export interface TagVariants extends VariantProps<typeof tagVariants> {}

export const labelStatusVariants = cva('flex items-center gap-2.5', {
  variants: {
    variant: {
      blank: '[&>svg]:stroke-[#E4E2DF] fill-white [&>p]:text-[#8D8D8D]',
      low: '[&>svg]:fill-util-gold-light',
      medium: '[&>svg]:fill-util-gold-light',
      high: '[&>svg]:fill-[#BD2E2E]',
    },
  },
  defaultVariants: {
    variant: 'low',
  },
});

export interface LabelStatusVariantTypes extends VariantProps<typeof labelStatusVariants> {}
 