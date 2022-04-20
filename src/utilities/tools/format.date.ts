export const today = new Date();
export const localDate = (date:Date) => {
    // USAGE EXAMPLE => localDate(YOURDATEHERE)
    let newDate = new Date(date);
    let dates = newDate.toDateString();
    let times = newDate.toLocaleTimeString();
    return dates + times
}
