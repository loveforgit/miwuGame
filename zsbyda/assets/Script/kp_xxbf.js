var obj= require("Common"); //调用DataMng.js
cc.Class({
    extends: cc.Component,

    properties: {
        spriteFrame1: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame2: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame3: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame4: {
            default: null,
            type: cc.SpriteFrame
        },
        cs_gq :0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //this.cs_gq= obj.guanqia_syks;
        //this.cxsy_ww();
    },

    start () {

    },
    cxsy_ww: function() {
        this.node.getChildByName('sj_xl').getComponent(cc.Label).string = 0;
        if(this.cs_gq%4+1 == 1){
            
            this.node.getChildByName('kaipai_xj_xxbf').getComponent(cc.Sprite).spriteFrame = this.spriteFrame1;
            if(parseInt(this.node.parent.name)-obj.zj_sy == -1){
                this.node.getChildByName('sj_xl').getComponent(cc.Label).string = 2;
            }
            this.cs_gq++;
        }else if(this.cs_gq%4+1 == 2){
            this.node.getChildByName('kaipai_xj_xxbf').getComponent(cc.Sprite).spriteFrame = this.spriteFrame2;
            if(parseInt(this.node.parent.name)-obj.zj_sy == -3){
                this.node.getChildByName('sj_xl').getComponent(cc.Label).string = 2;
            }
            this.cs_gq++;
        }else if(this.cs_gq%4+1 == 3){
            this.node.getChildByName('kaipai_xj_xxbf').getComponent(cc.Sprite).spriteFrame = this.spriteFrame3;
            if(parseInt(this.node.parent.name)-obj.zj_sy == 1){
                this.node.getChildByName('sj_xl').getComponent(cc.Label).string = 2;
            }
            this.cs_gq++;
        }else if(this.cs_gq%4+1 == 4){
            this.node.getChildByName('kaipai_xj_xxbf').getComponent(cc.Sprite).spriteFrame = this.spriteFrame4;
            if(parseInt(this.node.parent.name)-obj.zj_sy == 3){
                this.node.getChildByName('sj_xl').getComponent(cc.Label).string = 2;
            }
            this.cs_gq++;
            // var self = this;
            // cc.loader.loadRes("kaipai_sj_xxbf4", cc.SpriteFrame, function (err, spriteFrame) {
            //     self.spriteFrame = spriteFrame;
            // });
            // aa.getChildByName('kaipai_xj_xxbf').getComponent(cc.Sprite).spriteFrame = this.spriteFrame;
        };

        

        
    },
    // update (dt) {},
});
