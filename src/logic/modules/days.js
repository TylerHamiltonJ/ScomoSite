function updateTime() {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const hours = 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(2021, 6, 8, 3, 50);
    const secondDate = new Date();
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    const diffHoursRaw = Math.abs((firstDate - secondDate) / hours);
    const diffHours = Math.abs(Math.round(diffHoursRaw - diffDays * 24))
    const hoursLabel = diffHours === 1 ? 'hour' : 'hours'
    const daysLabel = diffDays === 1 ? 'day' : 'days'
    document.getElementById("timeSince").innerHTML = `<u>${diffDays} ${daysLabel} and ${diffHours} ${hoursLabel}</u>`;
}

export { updateTime };
