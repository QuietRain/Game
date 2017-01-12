var GameMap = (function () {
    function GameMap(stage) {
        this.Cols = 10;
        this.Rows = 10;
        this.Boxsize = 100;
        this.Stage = stage;
        this._map = [
            //第0行
            { image: "Ground_png", node: new _Node(0, 0, true) },
            { image: "Ground_png", node: new _Node(1, 0, true) },
            { image: "Wall_png", node: new _Node(2, 0, false) },
            { image: "Wall_png", node: new _Node(3, 0, false) },
            { image: "Wall_png", node: new _Node(4, 0, false) },
            { image: "Wall_png", node: new _Node(5, 0, false) },
            { image: "Wall_png", node: new _Node(6, 0, false) },
            { image: "Wall_png", node: new _Node(7, 0, false) },
            { image: "Wall_png", node: new _Node(8, 0, false) },
            { image: "Wall_png", node: new _Node(9, 0, false) },
            //第1行
            { image: "Wall_png", node: new _Node(0, 1, false) },
            { image: "Ground_png", node: new _Node(1, 1, true) },
            { image: "Wall_png", node: new _Node(2, 1, false) },
            { image: "Ground_png", node: new _Node(3, 1, true) },
            { image: "Ground_png", node: new _Node(4, 1, true) },
            { image: "Ground_png", node: new _Node(5, 1, true) },
            { image: "Ground_png", node: new _Node(6, 1, true) },
            { image: "Ground_png", node: new _Node(7, 1, true) },
            { image: "Ground_png", node: new _Node(8, 1, true) },
            { image: "Ground_png", node: new _Node(9, 1, false) },
            //第2行
            { image: "Wall_png", node: new _Node(0, 2, false) },
            { image: "Ground_png", node: new _Node(1, 2, true) },
            { image: "Wall_png", node: new _Node(2, 2, false) },
            { image: "Ground_png", node: new _Node(3, 2, true) },
            { image: "Ground_png", node: new _Node(4, 2, true) },
            { image: "Ground_png", node: new _Node(5, 2, true) },
            { image: "Ground_png", node: new _Node(6, 2, true) },
            { image: "Ground_png", node: new _Node(7, 2, true) },
            { image: "Ground_png", node: new _Node(8, 2, true) },
            { image: "Wall_png", node: new _Node(9, 2, false) },
            //第3行
            { image: "Wall_png", node: new _Node(0, 3, false) },
            { image: "Ground_png", node: new _Node(1, 3, true) },
            { image: "Wall_png", node: new _Node(2, 3, false) },
            { image: "Ground_png", node: new _Node(3, 3, true) },
            { image: "Ground_png", node: new _Node(4, 3, true) },
            { image: "Ground_png", node: new _Node(5, 3, true) },
            { image: "Ground_png", node: new _Node(6, 3, true) },
            { image: "Ground_png", node: new _Node(7, 3, true) },
            { image: "Ground_png", node: new _Node(8, 3, true) },
            { image: "Wall_png", node: new _Node(9, 3, false) },
            //第4行
            { image: "Wall_png", node: new _Node(0, 4, false) },
            { image: "Ground_png", node: new _Node(1, 4, true) },
            { image: "Ground_png", node: new _Node(2, 4, true) },
            { image: "Ground_png", node: new _Node(3, 4, true) },
            { image: "Ground_png", node: new _Node(4, 4, true) },
            { image: "Ground_png", node: new _Node(5, 4, true) },
            { image: "Wall_png", node: new _Node(6, 4, false) },
            { image: "Ground_png", node: new _Node(7, 4, true) },
            { image: "Ground_png", node: new _Node(8, 4, true) },
            { image: "Wall_png", node: new _Node(9, 4, false) },
            //第5行
            { image: "Ground_png", node: new _Node(0, 5, false) },
            { image: "Ground_png", node: new _Node(1, 5, true) },
            { image: "Ground_png", node: new _Node(2, 5, true) },
            { image: "Ground_png", node: new _Node(3, 5, true) },
            { image: "Ground_png", node: new _Node(4, 5, true) },
            { image: "Ground_png", node: new _Node(5, 5, true) },
            { image: "Wall_png", node: new _Node(6, 5, false) },
            { image: "Ground_png", node: new _Node(7, 5, true) },
            { image: "Ground_png", node: new _Node(8, 5, true) },
            { image: "Wall_png", node: new _Node(9, 5, false) },
            //第6行
            { image: "Wall_png", node: new _Node(0, 6, false) },
            { image: "Ground_png", node: new _Node(1, 6, true) },
            { image: "Wall_png", node: new _Node(2, 6, false) },
            { image: "Wall_png", node: new _Node(3, 6, false) },
            { image: "Wall_png", node: new _Node(4, 6, false) },
            { image: "Wall_png", node: new _Node(5, 6, false) },
            { image: "Wall_png", node: new _Node(6, 6, false) },
            { image: "Ground_png", node: new _Node(7, 6, true) },
            { image: "Ground_png", node: new _Node(8, 6, true) },
            { image: "Wall_png", node: new _Node(9, 6, false) },
            //第7行
            { image: "Wall_png", node: new _Node(0, 7, false) },
            { image: "Ground_png", node: new _Node(1, 7, true) },
            { image: "Ground_png", node: new _Node(2, 7, true) },
            { image: "Ground_png", node: new _Node(3, 7, true) },
            { image: "Ground_png", node: new _Node(4, 7, true) },
            { image: "Ground_png", node: new _Node(5, 7, true) },
            { image: "Wall_png", node: new _Node(6, 7, false) },
            { image: "Ground_png", node: new _Node(7, 7, true) },
            { image: "Ground_png", node: new _Node(8, 7, true) },
            { image: "Wall_png", node: new _Node(9, 7, false) },
            //第8行
            { image: "Wall_png", node: new _Node(0, 8, false) },
            { image: "Ground_png", node: new _Node(1, 8, true) },
            { image: "Ground_png", node: new _Node(2, 8, true) },
            { image: "Wall_png", node: new _Node(3, 8, false) },
            { image: "Ground_png", node: new _Node(4, 8, true) },
            { image: "Ground_png", node: new _Node(5, 8, true) },
            { image: "Wall_png", node: new _Node(6, 8, false) },
            { image: "Ground_png", node: new _Node(7, 8, true) },
            { image: "Ground_png", node: new _Node(8, 8, true) },
            { image: "Wall_png", node: new _Node(9, 8, false) },
            //第9行
            { image: "Wall_png", node: new _Node(0, 9, false) },
            { image: "Wall_png", node: new _Node(1, 9, false) },
            { image: "Wall_png", node: new _Node(2, 9, false) },
            { image: "Wall_png", node: new _Node(3, 9, false) },
            { image: "Wall_png", node: new _Node(4, 9, false) },
            { image: "Wall_png", node: new _Node(5, 9, false) },
            { image: "Wall_png", node: new _Node(6, 9, false) },
            { image: "Wall_png", node: new _Node(7, 9, false) },
            { image: "Ground_png", node: new _Node(8, 9, true) },
            { image: "Wall_png", node: new _Node(9, 9, false) },
        ];
        //var grid = new aster.Grid(8,8);
        var container = new egret.DisplayObjectContainer();
        for (var i = 0; i < this._map.length; i++) {
            var tile = this._map[i];
            var bm = new egret.Bitmap();
            bm.texture = RES.getRes(tile.image);
            bm.x = tile.node.x * this.Boxsize;
            bm.y = tile.node.y * this.Boxsize;
            bm.touchEnabled = tile.node.walkable;
            bm.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                if (User.user.statemachine.locked == 0) {
                    if (User.user.List) {
                        User.user.List.cancel();
                        User.user.List.addCommand(new WalkCommand(e.stageX, e.stageY));
                        User.user.List.execute();
                    }
                }
            }, this);
            this.Stage.addChild(bm);
        }
    }
    var d = __define,c=GameMap,p=c.prototype;
    p.getNode = function (x, y) {
        var result = this._map[y * this.Rows + x].node;
        return result;
    };
    GameMap.replaceScene = function (map) {
        GameMap.gamemap = map;
    };
    GameMap.getCurrentScene = function () {
        return GameMap.gamemap;
    };
    p.stopMove = function (callback) {
        clearInterval(this.interval);
        callback();
    };
    p.moveTo = function (x, y, callback) {
        var _this = this;
        egret.stopTick(moveFunction, this);
        clearInterval(this.interval);
        var _statemachine = User.user.statemachine;
        var startXpos = Math.floor(_statemachine.currentX / this.Boxsize); //起点的格子（行和列数）
        var startYpos = Math.floor(_statemachine.currentY / this.Boxsize);
        var endXpos = Math.floor(x / this.Boxsize); //终点的格子（行和列数）
        var endYpos = Math.floor(y / this.Boxsize);
        var astar = new AStar(this);
        if (astar.findPath(this.getNode(startXpos, startYpos), this.getNode(endXpos, endYpos)) &&
            !((startXpos == endXpos) && (startYpos == endYpos))) {
            //当终点可达到时：
            // astar._path.map((tile) => {                    //console正确数组
            //     console.log(`x:${tile.x},y:${tile.y}`)
            // });
            // console.log("start")
            var pathLength = astar._path.length;
            var i = 2;
            var pos = astar._path.shift();
            pos = astar._path.shift();
            this.interval = setInterval(function () {
                var Hypotenuse = 0; //斜边长，弦长
                _statemachine.endX = Math.floor(pos.x * _this.Boxsize);
                _statemachine.endY = Math.floor(pos.y * _this.Boxsize);
                var dx = _statemachine.endX - _statemachine.model.x;
                var dy = _statemachine.endY - _statemachine.model.y;
                _statemachine.setState("move", User.user.statemachine.MoveState);
                Hypotenuse = Math.pow(dx * dx + dy * dy, 1 / 2);
                var Ratiox = dx / Hypotenuse;
                var Ratioy = dy / Hypotenuse;
                _statemachine.Ratiox = Ratiox;
                _statemachine.Ratioy = Ratioy;
                _statemachine.timeOnEnterFrame = egret.getTimer();
                egret.startTick(moveFunction, _this);
            }, 50);
        }
        else {
            callback(); //回调
            return;
        }
        function moveFunction() {
            var nowTime = Math.floor(egret.getTimer());
            var passTime = nowTime - _statemachine.timeOnEnterFrame;
            var speed = 0.4;
            _statemachine.model.x += passTime * speed * _statemachine.Ratiox;
            _statemachine.model.y += passTime * speed * _statemachine.Ratioy;
            _statemachine.timeOnEnterFrame = egret.getTimer();
            if (_statemachine.model.y - _statemachine.endY < 10 && _statemachine.model.y - _statemachine.endY > -10 &&
                _statemachine.model.x - _statemachine.endX < 10 && _statemachine.model.x - _statemachine.endX > -10) {
                egret.stopTick(moveFunction, this);
                _statemachine.setState("stand", User.user.statemachine.StandState);
                _statemachine.model.x = _statemachine.endX;
                _statemachine.model.y = _statemachine.endY;
                _statemachine.currentX = _statemachine.model.x;
                _statemachine.currentY = _statemachine.model.y;
                pos = astar._path.shift();
                if (i == pathLength) {
                    clearInterval(this.interval);
                    i = 1;
                    console.log("end");
                    callback(); //回调
                    return;
                }
                i++;
            }
            return false;
        }
    };
    return GameMap;
}());
egret.registerClass(GameMap,'GameMap');
//# sourceMappingURL=GameMap.js.map