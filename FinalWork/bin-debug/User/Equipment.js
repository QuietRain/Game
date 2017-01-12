var Equipment = (function () {
    function Equipment(Level, configId) {
        var _this = this;
        this.jewels = []; //宝石
        this.properties = new Properties(Level);
        for (var _i = 0, EquipmentConfig_1 = EquipmentConfig; _i < EquipmentConfig_1.length; _i++) {
            var pro = EquipmentConfig_1[_i];
            if (pro.configId == configId) {
                this.equipment_bitmap = new egret.Bitmap();
                this.equipment_bitmap.texture = RES.getRes(pro.picture);
                this.properties.AddFromConfig(pro);
                break;
            }
            else {
                console.log("没找到EquipmentConfig的文件, 位于Equipment类");
            }
        }
        this.equipment_bitmap.touchEnabled = true;
        this.equipment_bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (User.user.statemachine.locked) {
                console.log("equipment被点击了");
                var displayFactory = new DisplayFacory();
                displayFactory.createPropertyPanel(_this.properties, GameMap.gamemap.Stage, 600, 300);
            }
        }, this);
    }
    var d = __define,c=Equipment,p=c.prototype;
    p.Addjewel = function (jewel) {
        this.jewels.push(jewel);
    };
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map