import * as PIXI from 'pixi.js'
import { Assets } from './asset'

export class Game {

    pixi: PIXI.Application
    loader: PIXI.Loader
    backgroundImage: PIXI.Sprite

    music:HTMLAudioElement
    woef:HTMLAudioElement

    constructor() {


        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;


        this.pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight })
        document.body.appendChild(this.pixi.view)

        this.loader = new Assets(this)

    }

    doneLoading() {

        this.backgroundImage = new PIXI.Sprite(this.loader.resources["earth"].texture!)

        this.backgroundImage.scale.set(2)
        this.pixi.stage.addChild(this.backgroundImage)
        
        let dogBark = this.loader.resources["barking"].data!
        this.woef = dogBark

        let musicSound = this.loader.resources["beginaudio"].data!
        this.music = musicSound

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))


    }


    onKeyDown(e: KeyboardEvent): any {
        
        switch (e.key.toUpperCase()) {
            case "A":
                this.music.play()
                break
            case "D":
                if (this.woef.paused) {
                    this.woef.play();
                }else{
                    this.woef.currentTime = 0
                }
        }

    }





}