# Unexpected VSCode Intellisense Behavior in TypeScript with Object interface augmentation
When augmenting the interface for `Object`, augmentations are not shown as suggestions when the cursor is placed over a valid JavaScript object.
This is certainly a very niche use case (most developers probably would be hesitant to prototype-pollute `Object`)