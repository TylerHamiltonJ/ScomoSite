const bodyCopy =
    '<b>Update! We briefly heard Scott Morrison on the radio, where he was asked what does "S‑O‑R‑R‑Y" spell. <a href="https://www.kiis1011.com.au/lifestyle/jase-demands-apology-from-pm-scott-morrison-after-nightmare-vaccine-rollout/">He didn\'t answer.</a> If anyone has any clues on his whereabouts, please get in touch.</b>';

const schedule = [new Date(2021, 6, 12, 17, 0), new Date(2021, 6, 16, 15, 30)];

const sighting = new Date(2021, 6, 21, 8, 0);

const findTimeBetween = (firstDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const hours = 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const secondDate = new Date();
    const diffDays = Math.floor(Math.abs((firstDate - secondDate) / oneDay));
    const diffHoursRaw = Math.abs((firstDate - secondDate) / hours);
    const diffHours = Math.abs(Math.floor(diffHoursRaw - diffDays * 24));
    return { diffDays, diffHoursRaw, diffHours };
};

const getMostRecentConference = () => {
    const sorted = schedule
        .sort(function(a, b) {
            return b - a;
        })
        .filter((f) => {
            return f - new Date() <= 0;
        });
    return sorted[0];
};

function updateTime() {
    const lastConference = findTimeBetween(getMostRecentConference());
    const lastSighting = findTimeBetween(sighting);
    console.log(lastSighting);
    const hoursLabel = lastConference.diffHours === 1 ? 'hour' : 'hours';
    const daysLabel = lastConference.diffDays === 1 ? 'day' : 'days';
    document.getElementById(
        'timeSince'
    ).innerHTML = `<u>${lastConference.diffDays} ${daysLabel} and ${lastConference.diffHours} ${hoursLabel}</u>`;
    const bodyCopyDOM = document.getElementById('bodyCopy');
    if (lastConference.diffHoursRaw <= 24 || lastSighting.diffHoursRaw <= 24) {
        bodyCopyDOM.innerHTML = bodyCopy;
        bodyCopyDOM.style.display = 'visible';
    } else {
        bodyCopyDOM.style.display = 'none';
    }
    if (lastConference.diffHoursRaw < 1) {
        const tagLineDOM = document.getElementById('tagLine');
        tagLineDOM.style.display = 'none';
    }
}

export { updateTime };
