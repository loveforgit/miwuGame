cc.Class({
    extends: cc.Component,

    properties: {
        wz_wenzi: cc.Node,
        wz_name: cc.Node,
        guanqia1: [],
        guanqia1_name: [],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.guanqia1_name = [
        "龙介",
        "龙介",
        "龙介",
        "姑姑",
        "姑姑",
        "姑姑",
        "姑姑",
        ];
        this.guanqia1 = [
        "“一切都要从那个夜晚一个女人开始说起。”",
        "“那时候我六岁，正心烦意乱的在街上游荡，”",
        "“那个女人叫住了我…”",
        "“姐姐怀上一个人孩子，”",
        "“虽然他已经有了老婆，孩子。”",
        "“并且让我打掉，但是我依然很爱她，”",
        "“我好苦恼，我应该和继续交往么…”",
        ];
        this.jq_dianji();
    },

    start () {

    },
    jq_dianji: function() {
        if(obj.wz_sy == this.guanqia1.length){
            var action1 = cc.fadeTo(1, 0);
            var action2 = cc.moveTo(0.1, 2000, 0);
            //this.zongnobe1.runAction(cc.sequence(action0,action1,action2));
            this.node.runAction(cc.sequence(action1,action2));
            cc.find("Canvas").getComponent('gm').qqstart();
            return;
        }
        this.jq_xiatc(obj.wz_sy);
        obj.wz_sy++;
        
        
    },
    jq_xiatc: function(i) {

        this.wz_name.getComponent(cc.Label).string = this.guanqia1_name[i];
        this.wz_wenzi.getComponent(cc.Label).string = this.guanqia1[i];
        
    },
    // update (dt) {},
});
