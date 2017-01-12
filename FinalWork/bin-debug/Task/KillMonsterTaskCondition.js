var KillMonsterTaskCondition = (function (_super) {
    __extends(KillMonsterTaskCondition, _super);
    function KillMonsterTaskCondition(monsterNumber) {
        _super.call(this);
        this.monsterNumber = monsterNumber;
    }
    var d = __define,c=KillMonsterTaskCondition,p=c.prototype;
    p.onAccept = function (task) {
        if (task.getcurrent() == currentStatus.NOT_CONTINUABLE) {
            task.setcurrent(currentStatus.CONTINUABLE);
        }
        else if (task.getcurrent() >= currentStatus.CONTINUABLE) {
            task.setcurrent((task.getcurrent() + 1));
        }
    };
    p.onSubmit = function (task) {
        task.setcurrent(currentStatus.FINISH);
    };
    return KillMonsterTaskCondition;
}(TaskCondition));
egret.registerClass(KillMonsterTaskCondition,'KillMonsterTaskCondition');
//# sourceMappingURL=KillMonsterTaskCondition.js.map