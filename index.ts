interface Array<T> {
    myArrayAugmentation: number;
}

interface Object {
    myObjectAugmentation: number;
}

const array = [].myArrayAugmentation
const object = {}.myObjectAugmentation