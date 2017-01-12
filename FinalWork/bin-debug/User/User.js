var User = (function () {
    function User(statemachine, level) {
        // pet: Pet;
        this.heroes = [];
        this.statemachine = statemachine;
        this.level = level;
        this.List = new CommandList();
        if (!User.user) {
            User.user = this;
        }
        return User.user;
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "heroesInTeam"
        //高阶属性写法
        ,function () {
            return this.heroes.filter(function (hero) { return hero.isInTeam; }); //过滤器，过滤所有在队伍中的英雄isInteam
        }
    );
    p.AddHero = function (hero) {
        this.heroes.push(hero);
    };
    return User;
}());
egret.registerClass(User,'User');
//# sourceMappingURL=User.js.map