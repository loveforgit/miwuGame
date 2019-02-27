var obj= require("Common"); //调用DataMng.js
cc.Class({
    extends: cc.Component,

    properties: {
        game_jiaoben: cc.Node,
        sj_lx : 0,  //类型
        sj_xl : 0,  //血量
        sj_wq :0,  //攻击
        sj_jb :0,  //金币
        sj_yh :0,  //御魂
        wz_sy:4
    },


    onLoad () {
        this.game_jiaoben = cc.find("Canvas");
        this.tx_dainjikpyy = cc.find("Canvas/yinxiao/tx_dainjikpyy");
        this.tx_kapai_jinb20 = cc.find("Canvas/yinxiao/tx_kapai_jinb20");
        this.tx_kapai_baoxiang22 = cc.find("Canvas/yinxiao/tx_kapai_baoxiang22");
        this.tx_kapi_wuqi40 = cc.find("Canvas/yinxiao/tx_kapi_wuqi40");
        // var target= this.node.getComponent(cc.Button).target;
        // if(target==null){
        //     console.log("this.node have target");
        //     this.node.getComponent(cc.Button).target=this.node;
        // }
        //.wz_sy = parseInt(this.kp_zj.parent.name);
    },

    start () {
    },
    cz_syy: function() {
        
        //cc.log("大傻逼");
        
    },
    cz_sy: function() {
        //防止按钮重复点击  报错
        //间隔几秒  重复次数  延迟
        this.node.getComponent(cc.Button).interactable = false;
        this.schedule(function() {
            this.node.getComponent(cc.Button).interactable = true;
        }, 0, 0, 0.6);
        //音效
        this.tx_dainjikpyy.getComponent(cc.AudioSource).play();

        var tx_lx=this.node.getChildByName('sj_lx').getComponent(cc.Label).string;
        if(tx_lx == 20){
            this.tx_kapai_jinb20.getComponent(cc.AudioSource).play();
        }
        if(tx_lx == 21){
            this.tx_kapai_jinb20.getComponent(cc.AudioSource).play();
        }
        if(tx_lx == 22){
            this.tx_kapai_baoxiang22.getComponent(cc.AudioSource).play();
        }
        if(tx_lx == 40||tx_lx == 41||tx_lx == 42||tx_lx == 43){
            this.tx_kapi_wuqi40.getComponent(cc.AudioSource).play();
        }

        var action1 = cc.moveBy(0.2, 0, 10);
        var action2 = cc.moveTo(0.2, 0, 0);
        this.node.runAction(cc.sequence(action1,action2));
        
        // 空闲的位置
        //cc.log(parseInt(this.node.parent.name),obj.zj_sy);
        //cc.log(this.node.name);
        //cc.find("Canvas/qipan").getComponent('zj_gb').cxsy();
        this.cz_fanxiang();
    },
    cz_fanxiang: function() {
        if(parseInt(this.node.parent.name)-obj.zj_sy == -3){
            //cc.log("上");
            this.hq_sj();
        }else if(parseInt(this.node.parent.name)-obj.zj_sy == 3){
            //cc.log("下");
            this.hq_sj();
        }else if(parseInt(this.node.parent.name)-obj.zj_sy == -1&&obj.zj_sy != 3&&obj.zj_sy != 6){
            //cc.log("左");
            this.hq_sj();
        }else if(parseInt(this.node.parent.name)-obj.zj_sy == 1&&obj.zj_sy != 2&&obj.zj_sy != 5){
            //cc.log("右");
            this.hq_sj();
        };
    },
    hq_sj: function() {
            this.sj_lx = 0;  //类型
            this.sj_xl = 0;  //血量
            this.sj_wq = 0;  //攻击
            this.sj_jb = 0;  //金币
            this.sj_yh = 0;  //御魂
            //sj_new=this.node.getChildByName('New Label').getComponent(cc.Label).string;
            
            if(this.node.getChildByName('sj_lx')){
                this.sj_lx=this.node.getChildByName('sj_lx').getComponent(cc.Label).string;
            };
            if(this.node.getChildByName('sj_xl')){
                this.sj_xl=this.node.getChildByName('sj_xl').getComponent(cc.Label).string;
            };
            if(this.node.getChildByName('sj_wq')){
                this.sj_wq=this.node.getChildByName('sj_wq').getComponent(cc.Label).string;
            };
            if(this.node.getChildByName('sj_jb')){
                this.sj_jb=this.node.getChildByName('sj_jb').getComponent(cc.Label).string;
            };
            if(this.node.getChildByName('sj_yh')){
                this.sj_yh=this.node.getChildByName('sj_yh').getComponent(cc.Label).string;
            };
            
            this.game_jiaoben.getComponent('gm').jisuan_shuju(parseInt(this.node.parent.name),this.sj_lx,this.sj_xl,this.sj_wq,this.sj_jb,this.sj_yh);
            //cc.log("索引"+parseInt(this.node.parent.name),"序列"+this.sj_lx,"血量"+this.sj_xl,"武器"+this.sj_wq,"金币"+this.sj_jb,"御魂"+this.sj_yh);
    },

    // update (dt) {},
});
