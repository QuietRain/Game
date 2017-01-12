//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene(): void {
        /*
              地图和命令表
        */
        var gamemap = new GameMap(this);
        GameMap.replaceScene(gamemap);


        /*
              动画
        */
        var standdata = RES.getRes("stand_json");
        var standtxtr = RES.getRes("stand_png");
        var mc_stand_Factory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(standdata, standtxtr);
        var mc_stand: egret.MovieClip = new egret.MovieClip(mc_stand_Factory.generateMovieClipData("stand"));
        // this.addChild(mc1);
        mc_stand.scaleX = 0.7;
        mc_stand.scaleY = 0.7;

        var moveRdata = RES.getRes("move_right_json");
        var moveRtxtr = RES.getRes("move_right_png");
        var mc_moveR_Factory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(moveRdata, moveRtxtr);
        var mc_moveR: egret.MovieClip = new egret.MovieClip(mc_moveR_Factory.generateMovieClipData("move"));
        // this.addChild(mc2);
        mc_moveR.scaleX = 0.7;
        mc_moveR.scaleY = 0.7;


        var fightdata = RES.getRes("fight_json");
        var fighttxtr = RES.getRes("fight_png");
        var mc_fight_Factory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(fightdata, fighttxtr);
        var mc_fight: egret.MovieClip = new egret.MovieClip(mc_fight_Factory.generateMovieClipData("fight"));
        // this.addChild(mc3);
        mc_fight.scaleX = 0.7;
        mc_fight.scaleY = 0.7;


        var moveLdata = RES.getRes("move_left_json");
        var moveLtxtr = RES.getRes("move_left_png");
        var mc_moveL_Factory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(moveLdata, moveLtxtr);
        var mc_moveL: egret.MovieClip = new egret.MovieClip(mc_moveL_Factory.generateMovieClipData("move_left"));
        // mc_moveL.gotoAndPlay(0,-1);
        // this.addChild(mc_moveL);
        mc_moveL.scaleX = 0.7;
        mc_moveL.scaleY = 0.7;

        /*
            角色与状态机
        
        */

        var model: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        var statemachine = new StateMachine(false, this, model, mc_stand, mc_moveR, mc_moveL, mc_fight);
        this.addChild(model);
        var user = new User(statemachine, 1);


        /*
              英雄装备宝石   
              
        */



        var hero1 = new Hero(true, 34, 1001);

        var equip = new Equipment(15, 901);

        var jewel = new Jewel(3, 801);
        // equip.Addjewel(jewel);//加入宝石
        // hero1.AddEquipment(equip);//加入装备
        user.AddHero(hero1);//加入英雄


        /*
            任务service
        */
        var taskservice = new TaskService();

        /*
             NPC
        */
        var displayFactory = new DisplayFacory();

        var npc0dialoguePanel = new DialoguePanel("npc_0", this, statemachine);
        var npc1dialoguePanel = new DialoguePanel("npc_1", this, statemachine);
        npc0dialoguePanel.x = (this.width - npc0dialoguePanel.width) / 2;
        npc0dialoguePanel.y = (this.height - npc0dialoguePanel.height) / 2;
        npc1dialoguePanel.x = (this.width - npc0dialoguePanel.width) / 2;
        npc1dialoguePanel.y = (this.height - npc0dialoguePanel.height) / 2;

        var Npc0 = new NPC(this, "npc_0", "Npc1_png", "tanhao_png", "wenhao2_png", "wenhao_png", npc0dialoguePanel, 1, 5);
        displayFactory.createMonsterModel(Npc0, 0.6, this, 0 * gamemap.Boxsize, 5 * gamemap.Boxsize);

        var Npc1 = new NPC(this, "npc_1", "Npc2_png", "tanhao_png", "wenhao2_png", "wenhao_png", npc1dialoguePanel, 8, 1);
        displayFactory.createMonsterModel(Npc1, 0.6, this, 9 * gamemap.Boxsize, 1 * gamemap.Boxsize);

        /*
             任务
        */
        var npcTalkCondition = new NPCTalkCondition();
        var killMonsterTaskCondition = new KillMonsterTaskCondition(1);


        var task1: Task = new Task("task1", "新手教程", "与另一个NPC见面", "npc_0", "npc_1", 1, npcTalkCondition, taskservice, "task2");
        var task2: Task = new Task("task2", "杀敌", "击杀10个敌人", "npc_1", "npc_1", 2, killMonsterTaskCondition, taskservice);

        task1.status = TaskStatus.ACCEPTABLE;
        var taskPanel: TaskPanel = new TaskPanel(this);
        this.addChild(taskPanel);
        taskPanel.x = 1050
        taskPanel.y = 300

        taskservice.addObserver(Npc0);
        taskservice.addObserver(Npc1);
        taskservice.addObserver(taskPanel);

        taskservice.addTask(task1);
        taskservice.addTask(task2);

        var Monster = this.createBitmapByName("_monster_png");
        var MonsterButton = new Monstor(Monster, 1, 8000, 1400, 3, 7);
        displayFactory.createMonsterModel(MonsterButton, 1, this, 4 * gamemap.Boxsize, 7 * gamemap.Boxsize);

        //属性按钮
        var PropertyButton_bitmap = this.createBitmapByName("Button_png");
        var panel_bitmap = this.createBitmapByName("属性文件_jpg");
        var PropertyButton = displayFactory.createPropertyButton(PropertyButton_bitmap, panel_bitmap, this, User.user.heroes[0], 60, 300);
        this.addChild(PropertyButton);
        PropertyButton.x = 1200;
        PropertyButton.y = 800;

        //宝箱按钮
        var box_bitmap = this.createBitmapByName("box_png");
        box_bitmap.x = 8 * gamemap.Boxsize;
        box_bitmap.y = 9 * gamemap.Boxsize;
        this.addChild(box_bitmap);
        box_bitmap.touchEnabled = true;
        box_bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            // User.user.List.cancel();
            // User.user.List.addCommand(new WalkCommand(8 * GameMap.gamemap.Boxsize, 8 * GameMap.gamemap.Boxsize));
            // User.user.List.execute();

            equip.Addjewel(jewel);//加入宝石
            hero1.AddEquipment(equip);//加入装备

            box_bitmap.alpha = 0;
            box_bitmap.touchEnabled = false;

        }, this)



    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}
