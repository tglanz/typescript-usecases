import { Observable } from 'rxjs';

export const range = (count: number): Observable<number> => Observable.create(observer => {
    new Array(count).fill(undefined).forEach((_, idx) => {
        observer.next(idx);
    })

    observer.complete();
});