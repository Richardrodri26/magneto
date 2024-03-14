import { cn } from "@/lib/utils"
import { LabelStatusVariantTypes, TagVariants, labelStatusVariants, tagVariants } from "./variants"
import { CSSProperties } from "react"

interface ITagProps {
    variants: TagVariants
    title: string
    className?: string
    styles?: CSSProperties
    textStyles?: CSSProperties
}

export const Tag = ({ variants, title, className, styles, textStyles }: ITagProps) => {
    return (
        <div style={styles} className={cn(tagVariants(variants), className)}>
            <p style={textStyles}>{title}</p>
        </div>
    )
}
