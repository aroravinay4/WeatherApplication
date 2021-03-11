import moment from 'moment';

const utils = {
    toCelsius: (kelvinTemp) => {
        let celsiusTemp = kelvinTemp - 273.15;
        celsiusTemp = Math.round(celsiusTemp);
        return celsiusTemp;
    },
    dateToFormat: (dateString) => {
        let dateFormat = moment(dateString).format('DD MMM YY');
        return dateFormat;
    }
}

export default utils;

