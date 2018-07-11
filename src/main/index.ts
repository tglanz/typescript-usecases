import * as streams from '../second-entry/streams';
import * as generators from '../second-entry/generators';
import setTimeoutAsync from '../second-entry/setTimeoutAsync';

const main = async () => {

    const data = {
        message: 'this is some message'
    };

    console.log({
        ...data,
        prop: 'it was spread'
    });

    console.log("async await");
    await setTimeoutAsync(1000);

    console.log("range using generators");
    for (let val of generators.range(5)){
        console.log(val);
    }

    console.log("range using streams");
    streams.range(5).subscribe(console.log);
};

main()
    .then(() => console.log("done"))
    .catch(error => console.error("error", error));