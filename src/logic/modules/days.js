const bodyCopy = `<b>Update! Scott Morrison has recently been spotted doing a softball interview on SkyNews.</b>
<br/>A very big thank you to everyone who worked tirelessly to find him.`;

function updateTime() {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const hours = 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(2021, 6, 12, 17, 0);
    const secondDate = new Date();
    const diffDays = Math.floor(Math.abs((firstDate - secondDate) / oneDay));
    const diffHoursRaw = Math.abs((firstDate - secondDate) / hours);
    const diffHours = Math.abs(Math.floor(diffHoursRaw - diffDays * 24));
    const hoursLabel = diffHours === 1 ? 'hour' : 'hours';
    const daysLabel = diffDays === 1 ? 'day' : 'days';
    document.getElementById(
        'timeSince'
    ).innerHTML = `<u>${diffDays} ${daysLabel} and ${diffHours} ${hoursLabel}</u>`;
    const bodyCopyDOM = document.getElementById('bodyCopy');
    if (diffHoursRaw <= 24) {
        bodyCopyDOM.innerHTML = bodyCopy;
        bodyCopyDOM.style.display = 'visible';
    } else {
        bodyCopyDOM.style.display = 'none';
    }
}

export { updateTime };
