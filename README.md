# Unexpected VSCode Intellisense Behavior in TypeScript with Object interface augmentation
When augmenting the interface for `Object`, augmentations are not shown as suggestions when the cursor is placed over a valid JavaScript object.
This is certainly a very niche use case (most developers probably would be hesitant to prototype-pollute `Object`)

https://github.com/hubol/ts-intellisense-repro/blob/30f2844f587b2d1faa041fe79b34ef16d4cde97b/index.ts#L1-L16