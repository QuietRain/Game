class Jewel {
	properties: Properties;
	jewel_bitmap: egret.Bitmap;
	constructor(Level: number, configId: number) {
		this.properties = new Properties(Level);
		for (var pro of JewelConfig) {
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
		this.jewel_bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			if (User.user.statemachine.locked) {
				console.log("jewel被点击了");
				var displayFactory = new DisplayFacory();
				displayFactory.createPropertyPanel(this.properties, GameMap.gamemap.Stage, 700, 300);
			}
        }, this);
	}

}
