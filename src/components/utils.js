export function formatNumber(num) {
    if (num >= 10000000) {
        return (num / 10000000).toFixed(1) + 'Cr'; // Crores
    } else if (num >= 100000) {
        return (num / 100000).toFixed(1) + 'L'; // Lakhs
    } else {
        return num.toString(); // Less than a lakh
    }
}

export function timeAgo(newDate) {
    const date = new Date(newDate); // Parse the ISO date
    const now = new Date();
    const secondsAgo = Math.floor((now - date) / 1000);

    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const weeksAgo = Math.floor(daysAgo / 7);
    const monthsAgo = Math.floor(daysAgo / 30); // Approximation
    const yearsAgo = Math.floor(daysAgo / 365); // Approximation

    if (secondsAgo < 60) {
        return `${secondsAgo} secs ago`;
    } else if (minutesAgo < 60) {
        return `${minutesAgo} mins ago`;
    } else if (hoursAgo < 24) {
        return `${hoursAgo} hrs ago`;
    } else if (daysAgo < 7) {
        return `${daysAgo} days ago`;
    } else if (weeksAgo < 4) {
        return `${weeksAgo} weeks ago`;
    } else if (monthsAgo < 12) {
        return `${monthsAgo} months ago`;
    } else {
        return `${yearsAgo} years ago`;
    }
}