export function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit format
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2-digit format
    
    return `${year}-${month}-${day}`;
}