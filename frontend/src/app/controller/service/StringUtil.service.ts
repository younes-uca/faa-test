import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class StringUtilService {
    public isEmpty(value: any): boolean {
        if (value instanceof Array) {
            return value === null || value.length === 0;
        } else {
            return value === null || value === undefined || value.toString() === '';
        }
    }

    public isNotEmpty(value: any): boolean {
        return !this.isEmpty(value);
    }
}
