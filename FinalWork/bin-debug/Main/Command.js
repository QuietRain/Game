var CommandList = (function () {
    function CommandList() {
        this._list = [];
        this._frozen = false;
    }
    var d = __define,c=CommandList,p=c.prototype;
    p.addCommand = function (command) {
        this._list.push(command);
    };
    p.cancel = function () {
        var _this = this;
        var command = this.currentCommand;
        if (command) {
            this._frozen = true;
            egret.setTimeout(function () {
                if (_this._frozen) {
                    _this._frozen = false;
                }
            }, this, 2000);
            command.cancel(function () {
                _this._frozen = false;
            });
            this._list = [];
        }
    };
    p.execute = function () {
        var _this = this;
        if (this._frozen) {
            egret.setTimeout(this.execute, this, 100);
            return;
        }
        var command = this._list.shift();
        this.currentCommand = command;
        if (command) {
            console.log("执行下一命令", command);
            command.execute(function () {
                _this.execute();
            });
        }
        else {
            console.log("全部命令执行完毕");
        }
    };
    return CommandList;
}());
egret.registerClass(CommandList,'CommandList');
var WalkCommand = (function () {
    function WalkCommand(x, y) {
        this.x = x;
        this.y = y;
    }
    var d = __define,c=WalkCommand,p=c.prototype;
    p.execute = function (callback) {
        GameMap.getCurrentScene().moveTo(this.x, this.y, function () {
            callback();
        });
    };
    p.cancel = function (callback) {
        GameMap.getCurrentScene().stopMove(function () {
            callback();
        });
    };
    return WalkCommand;
}());
egret.registerClass(WalkCommand,'WalkCommand',["Command"]);
var TalkCommand = (function () {
    function TalkCommand(npc) {
        this.npc = npc;
    }
    var d = __define,c=TalkCommand,p=c.prototype;
    p.execute = function (callback) {
        this.npc.NPCtalk(function () {
            callback();
        });
    };
    p.cancel = function (callback) {
    };
    return TalkCommand;
}());
egret.registerClass(TalkCommand,'TalkCommand',["Command"]);
var FightCommand = (function () {
    function FightCommand(Monster) {
        this.Monster = Monster;
    }
    var d = __define,c=FightCommand,p=c.prototype;
    p.execute = function (callback) {
        this.Monster.killmonster(function () {
            callback();
        });
    };
    p.cancel = function (callback) {
    };
    return FightCommand;
}());
egret.registerClass(FightCommand,'FightCommand',["Command"]);
//# sourceMappingURL=Command.js.map