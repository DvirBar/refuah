export const dateInPast = (date: Date): boolean => {
    return new Date(date) < new Date();
};