import * as moment from "moment";

export const days = () => {
    var a = moment([2007, 0, 29]);
    var b = moment([2007, 0, 28]);
    const days = a.diff(b, "days");
    console.log(days);
};
