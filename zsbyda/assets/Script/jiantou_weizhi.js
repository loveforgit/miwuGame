var obj= require("Common"); //调用DataMng.js
cc.Class({
    extends: cc.Component,

    properties: {
        zj_node: {
            default: null,
            type: cc.Node
        },
        jiantou_node: {
            default: null,
            type: cc.Node
        },
        jt_node1: cc.Node,
        jt_node2: cc.Node,
        jt_node3: cc.Node,
        jt_node4: cc.Node,
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //this.cs_gq= obj.guanqia_syks;
        //this.cxsy_ww();
    },

    start () {

    },
    jiantou_dh: function(x) {
        //cc.log("尖头"+x);
        if(x == 0){
            this.jiantou_dh_you();
            this.jiantou_dh_xia();
        }else if(x == 1){
            this.jiantou_dh_zuo();
            this.jiantou_dh_you();
            this.jiantou_dh_xia();
        }else if(x == 2){
            this.jiantou_dh_zuo();
            this.jiantou_dh_xia();
        }else if(x == 3){
            this.jiantou_dh_shang();
            this.jiantou_dh_you();
            this.jiantou_dh_xia();
        }else if(x == 4){
            this.jiantou_dh_shang();
            this.jiantou_dh_you();
            this.jiantou_dh_zuo();
            this.jiantou_dh_xia();
        }else if(x == 5){
            this.jiantou_dh_shang();
            //this.jiantou_dh_you();
            this.jiantou_dh_zuo();
            this.jiantou_dh_xia();
        }else if(x == 6){
            this.jiantou_dh_shang();
            this.jiantou_dh_you();
            //this.jiantou_dh_zuo();
            //this.jiantou_dh_xia();
        }else if(x == 7){
            this.jiantou_dh_shang();
            this.jiantou_dh_you();
            this.jiantou_dh_zuo();
            //this.jiantou_dh_xia();
        }else if(x == 8){
            this.jiantou_dh_shang();
            //this.jiantou_dh_you();
            this.jiantou_dh_zuo();
            //this.jiantou_dh_xia();
        }

       
        //this.jiantou_node.getComponent(cc.Animation).play();
        
    },
    jiantou_dh_zuo: function() {
        var action1 = cc.moveBy(0.2, -10, 0);
        var action2 = cc.moveBy(0.2, 10, 0);
        var action3 = cc.moveBy(0.2, -10, 0);
        var action4 = cc.moveBy(0.2, 10, 0);
        var action5 = cc.fadeTo(0.1, 255);
        var action6 = cc.fadeTo(1, 255);
        var action7 = cc.fadeTo(0.7, 0);
        this.jt_node1.runAction(cc.sequence(action5,action6,action7));
        this.jt_node1.runAction(cc.sequence(action1,action2,action3,action4));

       
        //this.jiantou_node.getComponent(cc.Animation).play();
        
    },
    jiantou_dh_you: function() {
        //cc.log("尖头有");
        var action1 = cc.moveBy(0.2, 10, 0);
        var action2 = cc.moveBy(0.2, -10, 0);
        var action3 = cc.moveBy(0.2, 10, 0);
        var action4 = cc.moveBy(0.2, -10, 0);
        var action5 = cc.fadeTo(0.1, 255);
        var action6 = cc.fadeTo(1, 255);
        var action7 = cc.fadeTo(0.7, 0);
        this.jt_node2.runAction(cc.sequence(action5,action6,action7));
        this.jt_node2.runAction(cc.sequence(action1,action2,action3,action4));

       
        //this.jiantou_node.getComponent(cc.Animation).play();
        
    },
    jiantou_dh_xia: function() {
        var action1 = cc.moveBy(0.2, 0, -10);
        var action2 = cc.moveBy(0.2, 0, 10);
        var action3 = cc.moveBy(0.2, 0, -10);
        var action4 = cc.moveBy(0.2, 0, 10);
        var action5 = cc.fadeTo(0.1, 255);
        var action6 = cc.fadeTo(1, 255);
        var action7 = cc.fadeTo(0.7, 0);
        this.jt_node3.runAction(cc.sequence(action5,action6,action7));
        this.jt_node3.runAction(cc.sequence(action1,action2,action3,action4));

       
        //this.jiantou_node.getComponent(cc.Animation).play();
        
    },
    jiantou_dh_shang: function() {
        var action1 = cc.moveBy(0.2, 0, 10);
        var action2 = cc.moveBy(0.2, 0, -10);
        var action3 = cc.moveBy(0.2, 0, 10);
        var action4 = cc.moveBy(0.2, 0, -10);
        var action5 = cc.fadeTo(0.1, 255);
        var action6 = cc.fadeTo(1, 255);
        var action7 = cc.fadeTo(0.7, 0);
        this.jt_node4.runAction(cc.sequence(action5,action6,action7));
        this.jt_node4.runAction(cc.sequence(action1,action2,action3,action4));

       
        //this.jiantou_node.getComponent(cc.Animation).play();
        
    },
    update (dt) {
        
    },
});
