import { readFileSync } from 'fs';
import sharp from 'sharp';
import { randoSequence } from '@nastyox/rando.js'

const takeFace = {}

const template = `
<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<!-- background -->
<!-- eyes -->
<!-- nose -->
<!-- mouth -->
</svg>
`


function getRandomName() {
    const takeName = {}
    const NFTName = []
    const adjectivesRandomized = randoSequence(['modern', 'mysterious', 'obnoxious', 'panicky', 'spotless', 'vivacious', 'busy', 'defiant', 'disturbed', 'distinct', 'lonely', 'stupid', 'awful', 'arrogant', 'fragile', 'powerful'])
    const namesRandomized = randoSequence(['James', 'Blake', 'Kyle', 'Drew', 'Taylor', 'Kennedy', 'Jordan', 'Parker', 'Avery', 'Ryan', 'Brooklyn', 'Cameron', 'Logan', 'Emerson', 'Charlie', 'Austin'])

    for(let j of adjectivesRandomized) {
        for(let k of namesRandomized) {
            if (j.index === k.index) {
                NFTName.push(`${k.value} ${j.value}`)
            }
        }
    }
    for (let name of NFTName) takeName[name] = name;
    return takeName
}

function layerFace(name) {
    const src = readFileSync(`./layers/${name}.svg`, 'utf-8');
    console.log(src);
}

layerFace('eyes-1')

async function createNFTImage() {
    try {
        const test = await sharp('./layers/eyes-1.svg').png().toFile('./test/eyes-1-png.png')
        console.log(test)
    } catch (err) {
        console.log(err)
    }
}

await createNFTImage();