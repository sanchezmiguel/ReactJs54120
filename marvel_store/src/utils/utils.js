// Function to normalize text for URL
export function normalizeText(text) {
    return text.normalize("NFD") // Normalize the string to decompose combined graphemes into the base graphemes and diacritical marks
        .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
        .toLowerCase() // Convert to lower case
        .replace(/ /g, '-') // Replace spaces with hyphens
        .replace(/[^\w-]+/g, ''); // Remove all non-word chars except hyphens
}
