interface Array<T> {
    myArrayAugmentation: number;
}

interface Object {
    myObjectAugmentation: number;
}

// Using the <Trigger Suggest> command (Ctrl-Space), I see .myArrayAugmentation suggested
// But not .myObjectAugmentation
const array = [].myArrayAugmentation
const arrayAccessObject = [].myObjectAugmentation

// Using the <Trigger Suggest> command, I do not see anything suggested
const object = {}.myObjectAugmentation

// However, the file does compile!