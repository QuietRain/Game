var StateMachine = (function () {
    function StateMachine(locked, _player, rongqi, stand, moveR, moveL, fight) {
        this.timeOnEnterFrame = 0; //进入帧时间
        this.locked = 0;
        this.stand = stand;
        this.moveR = moveR;
        this.moveL = moveL;
        this.fight = fight;
        this.moveR.gotoAndPlay(1, -1);
        this.moveL.gotoAndPlay(1, -1);
        this.fight.gotoAndPlay(1, -1);
        this.stand.gotoAndPlay(1, -1);
        this.model = rongqi;
        this.model.addChild(this.stand);
        this.model.addChild(this.moveR);
        this.model.addChild(this.moveL);
        this.model.addChild(this.fight);
        this.StandState = new PlayerStandState(_player, this, "stand");
        this.MoveState = new PlayerMoveState(_player, this, "move");
        this.FightState = new PlayerFightState(_player, this, "fight");
        if (_player == null) {
        }
        this.currentState = this.StandState;
        this.moveR.alpha = 0;
        this.moveL.alpha = 0;
        this.fight.alpha = 0;
        this.onEnter();
        this.currentX = this.model.x;
        this.currentY = this.model.y;
    }
    var d = __define,c=StateMachine,p=c.prototype;
    p.onEnter = function () {
        this.currentState.onEnter();
    };
    p.onExit = function () {
        this.currentState.onExit();
    };
    p.setState = function (stateName, state) {
        // if (this.currentState.getname() != stateName) {
        this.currentState.onExit();
        this.currentState = state;
        this.currentState.onEnter();
        // }
    };
    return StateMachine;
}());
egret.registerClass(StateMachine,'StateMachine');
////////////////////////////////////////////移动状态
var PlayerMoveState = (function () {
    function PlayerMoveState(player, stateMachine, name) {
        this._statename = name;
        //    console.log("PlayerMoveState constructor");
        this._StateMachine = stateMachine;
        this._player = player;
    }
    var d = __define,c=PlayerMoveState,p=c.prototype;
    p.onEnter = function () {
        if (this._StateMachine.endX >= this._StateMachine.currentX) {
            this._StateMachine.moveR.alpha = 1;
            this._currentmove = this._StateMachine.moveR;
        }
        else {
            this._StateMachine.moveL.alpha = 1;
            this._currentmove = this._StateMachine.moveL;
        }
    };
    p.onExit = function () {
        this._currentmove.alpha = 0;
        //this._StateMachine.currentState = this._StateMachine.StandState;
    };
    p.getname = function () {
        return this._statename;
    };
    return PlayerMoveState;
}());
egret.registerClass(PlayerMoveState,'PlayerMoveState',["State"]);
////////////////////////////////////站立状态
var PlayerStandState = (function () {
    function PlayerStandState(player, stateMachine, name) {
        this._statename = name;
        //  console.log("PlayerStandState constructor");
        this._StateMachine = stateMachine;
        this._player = player;
    }
    var d = __define,c=PlayerStandState,p=c.prototype;
    p.onEnter = function () {
        //console.log(this._statename + "onEnter");
        this._StateMachine.stand.alpha = 1;
    };
    p.onExit = function () {
        //console.log(this._statename + "onExit");
        this._StateMachine.stand.alpha = 0;
        //this._StateMachine.currentState = this._StateMachine.MoveState;
    };
    p.getname = function () {
        return this._statename;
    };
    return PlayerStandState;
}());
egret.registerClass(PlayerStandState,'PlayerStandState',["State"]);
////////////////////////////////////战斗状态
var PlayerFightState = (function () {
    function PlayerFightState(player, stateMachine, name) {
        this._statename = name;
        //  console.log("PlayerStandState constructor");
        this._StateMachine = stateMachine;
        this._player = player;
    }
    var d = __define,c=PlayerFightState,p=c.prototype;
    p.onEnter = function () {
        //console.log(this._statename + "onEnter");
        this._StateMachine.fight.alpha = 1;
    };
    p.onExit = function () {
        //console.log(this._statename + "onExit");
        this._StateMachine.fight.alpha = 0;
        //this._StateMachine.currentState = this._StateMachine.StandState;
    };
    p.getname = function () {
        return this._statename;
    };
    return PlayerFightState;
}());
egret.registerClass(PlayerFightState,'PlayerFightState',["State"]);
//# sourceMappingURL=StateMachine.js.map