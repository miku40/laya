var test = ui.test.TestPageUI;
var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var Sprite_DisplayImage = /** @class */ (function () {
    function Sprite_DisplayImage() {
        Laya.init(480, 800);
        Laya.stage.scaleMode = "showall";
        var ape = new Laya.Sprite();
        //Loading our monkey
        ape.loadImage("../laya/assets/puke/heitao.jpg");
        Laya.stage.addChild(ape);
    }
    return Sprite_DisplayImage;
}());
new Sprite_DisplayImage();
//# sourceMappingURL=LayaUISample.js.map