const taglines = [
    `That's about how long it takes for <a href="https://www.abc.net.au/news/2021-07-11/kevin-rudd-australia-covid-pfizer-vaccine-supply-senior-execs/100284902">a former PM to negotiate a new vaccine rollout.</a>`,
    `That's about how long it takes to <a href="https://www.theguardian.com/australia-news/2021/mar/23/coalition-staffer-sacked-for-alleged-sex-act-on-female-mps-desk-was-longtime-liberal-aide">wipe down a parliamentary desk.`,
    `That's about how long it takes to <a href="https://www.smh.com.au/national/nsw/year-12-students-at-st-joseph-s-college-given-pfizer-vaccination-20210706-p587bd.html">Vaccinate a cohort of private school boys.</a>`,
];

const ranArr = (arr) => arr[Math.floor(Math.random() * arr.length)];

function updateTagline() {
    const taglineDOM = document.getElementById("tagLine");
    const tagline = ranArr(taglines)
    taglineDOM.innerHTML = tagline;
}

export { updateTagline };
