export function firstLetterUppercase(name: string) {
    const formattedText = name.trim().charAt(0).toUpperCase() + name.slice(1)

    return formattedText
}