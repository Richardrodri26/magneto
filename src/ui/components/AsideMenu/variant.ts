import { Variant, Variants } from "framer-motion";

export const menuNavVariants: Variants = {
    "open": (open: boolean) => {
        let currentVariant: Variant = {
            position: "absolute",
            zIndex: 100,
            backgroundColor: "#e7e5e4",
            transition: {
                duration: 0.25
            }
        }

        if (!open) {
            currentVariant.margin = 10
            currentVariant.width = 56
            currentVariant.borderRadius = '5px'
            currentVariant.height = 'auto';
            currentVariant.zIndex = 1
        } else {
            currentVariant.width = 300
            currentVariant.margin = 0
            currentVariant.height = 'calc(100vh - 112px)'
            currentVariant.zIndex = 100
        }

        return currentVariant
    }
}