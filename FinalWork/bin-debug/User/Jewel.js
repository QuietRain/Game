var Jewel = (function () {
    function Jewel(Level, configId) {
        var _this = this;
        this.properties = new Properties(Level);
        for (var _i = 0, JewelConfig_1 = JewelConfig; _i < JewelConfig_1.length; _i++) {
            var pro = JewelConfig_1[_i];
            if (pro.configId == configId) {
                this.jewel_bitmap = new egret.Bitmap();
                this.jewel_bitmap.texture = RES.getRes(pro.picture);
                this.properties.AddFromConfig(pro);
                break;
            }
            else {
                console.log("没找到JewelConfig的文件, 位于Jewel类");
            }
        }
        this.jewel_bitmap.touchEnabled = true;
        this.jewel_bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (User.user.statemachine.locked) {
                console.log("jewel被点击了");
                var displayFactory = new DisplayFacory();
                displayFactory.createPropertyPanel(_this.properties, GameMap.gamemap.Stage, 700, 300);
            }
        }, this);
    }
    var d = __define,c=Jewel,p=c.prototype;
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=Jewel.js.map