import { defineRecipe } from "@chakra-ui/react"


// -------------
// ------------- BUTTON RECIPE
// -------------
export const buttonRecipe = defineRecipe({
    base: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s",
    },
    variants: {
        visual: {
            solid: { bg: "gray.100", color: "black.500" },
            outline: { borderWidth: "1px", borderColor: "gray.200", bg: "transparent" },
            ghost: { bg: "transparent" },
            // Nuovo stile personalizzato
            dark: { bg: "black.100", color: "white" },
        },
        size: {
            sm: { padding: "4px 8px", fontSize: "12px", height: "32px" },
            md: { padding: "8px 16px", fontSize: "14px", height: "40px" },
            lg: { padding: "12px 24px", fontSize: "16px", height: "48px" },
        },
        rounded: {
            none: { borderRadius: "0" },
            sm: { borderRadius: "0.125rem" },
            md: { borderRadius: "0.375rem" },
            lg: { borderRadius: "0.5rem" },
            full: { borderRadius: "9999px" },
        },
    },
    defaultVariants: {
        visual: "solid",
        size: "md",
        rounded: "md",
    },
})