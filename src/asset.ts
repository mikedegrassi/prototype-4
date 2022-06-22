import * as PIXI from 'pixi.js'
import { Game } from './game'

import music from 'url:./sounds/best-time-112194.mp3'
import blaf from 'url:./sounds/dog.mp3'
import earthreal from "./images/earthreal.jpeg"

type AssetFile = { name: string, url: string }

export class Assets extends PIXI.Loader {

    // private game: Game
    private assets: AssetFile[] = []

    constructor(game: Game) {
        super()
        
        this.assets = [

            {name: 'earth', url: earthreal},
            {name: 'beginaudio', url: music},
            {name: 'barking', url: blaf}
            
        ]

        this.assets.forEach(asset => {
            this.add(asset.name, asset.url)
        })

        this.onError.add((arg) => { console.error(arg) })
        this.onProgress.add((loader) => this.showProgress(loader))
        this.load(() => game.doneLoading())
    }

    private showProgress(loader) {
        console.log(`Loading ${loader.progress}%`)
    }
}