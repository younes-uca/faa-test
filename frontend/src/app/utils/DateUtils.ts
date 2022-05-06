export class DateUtils {
    public static pad(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }

    public static toString(date) {
        return date.getFullYear() +
            '-' + this.pad(date.getMonth() + 1) +
            '-' + this.pad(date.getDate()) +
            'T' + this.pad(date.getHours()) +
            ':' + this.pad(date.getMinutes()) +
            ':' + this.pad(date.getSeconds()) +
            '.' + (date.getMilliseconds() / 1000).toFixed(3).slice(2, 5) +
            'Z';
    };


    public static toDate(date: any): Date {
        return new Date(this.toString(date).split('T')[0]);
    }

}


