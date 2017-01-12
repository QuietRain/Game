var NPCTalkCondition = (function (_super) {
    __extends(NPCTalkCondition, _super);
    function NPCTalkCondition() {
        _super.call(this);
    }
    var d = __define,c=NPCTalkCondition,p=c.prototype;
    p.onAccept = function (task) {
        if (task.getcurrent() == currentStatus.NOT_CONTINUABLE) {
            task.setcurrent(currentStatus.CONTINUABLE);
        }
        if (task.getcurrent() >= currentStatus.CONTINUABLE) {
            task.setcurrent(task.getcurrent() + 1);
        }
    };
    p.onSubmit = function (task) {
        task.setcurrent(currentStatus.FINISH);
    };
    return NPCTalkCondition;
}(TaskCondition));
egret.registerClass(NPCTalkCondition,'NPCTalkCondition');
//# sourceMappingURL=NPCTalkCondition.js.map