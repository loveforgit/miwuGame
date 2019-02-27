cc.Class({
    extends: cc.Component,

    properties: {
        zz_bg: cc.Node,
        ks_youxi: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
   //点击播放按钮时播放动画
    startst () {
        //防止按钮重复点击  报错
        //间隔几秒  重复次数  延迟
        this.ks_youxi.getComponent(cc.Button).interactable = false;
        this.schedule(function() {
            this.ks_youxi.getComponent(cc.Button).interactable = true;
        }, 0, 0, 0.6);
        //var action0 = cc.fadeTo(0.8, 255);
        var action1 = cc.moveTo(0.5, 0, 0);
        var action2 = cc.moveTo(0.6, 820, 0);
        //this.zongnobe1.runAction(cc.sequence(action0,action1,action2));
        this.node.runAction(cc.sequence(action1,action2));
        var action3 = cc.fadeTo(0.5, 0);
        var action4 = cc.fadeTo(1, 0);
        var action5 = cc.fadeTo(0.6, 255);
        this.zz_bg.runAction(cc.sequence(action3,action4,action5));
        //this.yezi_anima.getComponent(cc.Animation).play();
    },
    startst_fanhui () {
        //var action0 = cc.fadeTo(0.8, 255);
        //var action1 = cc.fadeTo(0.5, 0);
        var action2 = cc.moveTo(1, 0, 0);
        //this.zongnobe1.runAction(cc.sequence(action0,action1,action2));
        this.node.runAction(action2);
        //this.yezi_anima.getComponent(cc.Animation).play();
    },

    // update (dt) {},
});
