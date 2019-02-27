var obj= require("Common"); //调用DataMng.js
cc.Class({
    extends: cc.Component,

    properties: {
        bgm: cc.Node,
        tx_yidongzhuozi: {
            default: null,
            type: cc.AudioClip,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //间隔几秒  重复次数  延迟
        this.schedule(function() {
            this.bgm_bf();
        }, 0, 0, 6);
        
    },

    start () {

    },
    // init: function(x) {
        
        
        
    // },
    bgm_bf: function() {
        //cc.log("音效播放了");
        this.node.getComponent(cc.AudioSource).play();
    },
    tx_kaishiyy: function() {
        this.node.getChildByName('kaishi_yy').getComponent(cc.AudioSource).play();
    },
    tx_yidngzhuozi: function() {
        this.node.getChildByName('tx_yidngzhuozi').getComponent(cc.AudioSource).play();
    },
    tx_juqingyy: function() {
        this.node.getChildByName('tx_juqingyy').getComponent(cc.AudioSource).play();
    },
    
    // update (dt) {},
});
