var obj= require("Common"); //调用DataMng.js
cc.Class({
    extends: cc.Component,

    properties: {
        wz_wenzi: cc.Node,
        wz_name: cc.Node,
        wz_ys: cc.Node,
        tx_renwutixing: cc.Node,
        tx_jinxingyouxi: cc.Node,
        guanqia:[],
        // guanqia1_name: [],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        this.guanqia = [
        obj.guanqia1,
        obj.guanqia2,
        obj.guanqia3,
        obj.guanqia4,
        obj.guanqia5,
        obj.guanqia6,
        obj.guanqia7,
        obj.guanqia8,
        obj.guanqia9,
        obj.guanqia10,
        obj.guanqia11,
        ];
        // this.guanqia1 = [
        // "“一切都要从那个夜晚一个女人开始说起。”",
        // "“那时候我六岁，正心烦意乱的在街上游荡，”",
        // "“那个女人叫住了我…”",
        // "“姐姐怀上一个人孩子，”",
        // "“虽然他已经有了老婆，孩子。”",
        // "“并且让我打掉，但是我依然很爱她，”",
        // "“我好苦恼，我应该和继续交往么…”",
        // ];

        this.jq_dianji();
    },

    start () {

    },
    // init: function(x) {
        
        
        
    // },
    jq_dianji: function() {
        if(obj.wz_sy == this.guanqia[obj.guanqia_dq].length - 2){
            this.tx_jinxingyouxi.getComponent(cc.AudioSource).play();
        }
        if(obj.wz_sy == this.guanqia[obj.guanqia_dq].length - 1){
            this.tx_renwutixing.getComponent(cc.AudioSource).play();
        }
        if(obj.wz_sy == this.guanqia[obj.guanqia_dq].length){
            var action1 = cc.fadeTo(1, 0);
            var action2 = cc.moveTo(0.1, 2000, 0);
            var action3 = cc.fadeTo(1, 255);
            this.node.runAction(cc.sequence(action1,action2,action3));
            
            cc.find("Canvas").getComponent('gm').qqstart();
            
            this.jq_xiatc(0);
            
            return;
        }
        this.jq_xiatc(obj.wz_sy);
        obj.wz_sy++;
        
        
    },
    jq_xiatc: function(i) {

        this.wz_name.getComponent(cc.Label).string = this.guanqia[obj.guanqia_dq][i].name;
        this.wz_wenzi.getComponent(cc.Label).string = this.guanqia[obj.guanqia_dq][i].nr;
        this.wz_ys.getComponent(cc.Label).string = this.guanqia[obj.guanqia_dq][i].ys;
        
    },
    // update (dt) {},
});
