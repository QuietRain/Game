
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"bin-debug/Gamemp/AStar.js",
	"bin-debug/Gamemp/GameMap.js",
	"bin-debug/Gamemp/_Node.js",
	"bin-debug/Main/Command.js",
	"bin-debug/Main/LoadingUI.js",
	"bin-debug/Main/Main.js",
	"bin-debug/Main/StateMachine.js",
	"bin-debug/Panel/DialoguePanel.js",
	"bin-debug/Panel/DisplayFactory.js",
	"bin-debug/Panel/TaskPanel.js",
	"bin-debug/Property.js",
	"bin-debug/Task/EventEmitter.js",
	"bin-debug/Task/TaskCondition.js",
	"bin-debug/Task/KillMonsterTaskCondition.js",
	"bin-debug/Task/NPCTalkCondition.js",
	"bin-debug/Task/Task.js",
	"bin-debug/Task/TaskService.js",
	"bin-debug/User/config.js",
	"bin-debug/User/Equipment.js",
	"bin-debug/User/Hero.js",
	"bin-debug/User/Jewel.js",
	"bin-debug/User/Monstor.js",
	"bin-debug/User/NPC.js",
	"bin-debug/User/User.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 1500,
		contentHeight: 1000,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};