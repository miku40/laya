import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;

class Sprite_DisplayImage{
    
        constructor(){
            Laya.init(480, 800);
            Laya.stage.scaleMode = "showall";
            var ape = new Laya.Sprite();
            //Loading our monkey
            ape.loadImage("../laya/assets/puke/heitao.jpg");
    
            Laya.stage.addChild(ape);
        }
    }
    new Sprite_DisplayImage();