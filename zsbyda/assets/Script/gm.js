/** !#en this.was module.exports
 *  !#zh  游戏的文字提示，等
 * @module obj
 */
var obj= require("Common");
cc.Class({
    extends: cc.Component,

    properties: {
        kapaipr: [cc.Prefab],
        weizhi: [cc.Node],
        
        qipan: cc.Node,
        kp_zj: cc.Node,
        kp_zj_xl: cc.Node,
        kp_zj_xl_cd: cc.Node,
        kp_zj_xl: cc.Node,
        kp_zj_xl_cd: cc.Node,


        jiantou_node: cc.Node,
        booboo_node: cc.Node,
        zhansha_node: cc.Node,

        block: cc.Prefab,

        guanqia1: [cc.Float],
        guanqia2: [cc.Float],
        guanqia3: [cc.Float],
        guanqia4: [cc.Float],
        guanqia5: [cc.Float],
        guanqia6: [cc.Float],
        guanqia7: [cc.Float],
        guanqia8: [cc.Float],
        guanqia9: [cc.Float],
        guanqia10: [cc.Float],
        guanqia11: [cc.Float],
        guanqia_shuzu:[],

        sp_kx: 1,

        spriteFrame: {
            default: null,
            type: cc.SpriteFrame
        },
        
        bg: cc.Sprite,
        

        
        gameOverMenu: cc.Node,
        gamelive: cc.Node,
        juqing: cc.Node,
        tx_bosslx: cc.Node,
        tx_bosslx_pai: cc.Node,
        bgm: cc.Node,
        tx_xipaiyy: cc.Node,
        //: cc.Node,
        jn_spriteFrame1: {
            default: null,
            type: cc.SpriteFrame
        },
        jn_spriteFrame2: {
            default: null,
            type: cc.SpriteFrame
        },
        jn_spriteFrame3: {
            default: null,
            type: cc.SpriteFrame
        },
        jn_spriteFrame4: {
            default: null,
            type: cc.SpriteFrame
        },
    },

    // use this for initialization
    onLoad: function () {
        this.guanqia1 = [0,1,8,10,12,12,15,15,15,15,17,17,17];
        this.guanqia2 = [0,1,2,8,9,10,12,12,15,15,15,15,17,17,17];
        this.guanqia3 = [0,1,2,3,8,9,10,12,13,14,15,15,15,15,17,17,17];
        this.guanqia4 = [0,1,2,3,4,15,15,15,15,17,17,17,8,9,10,12,13,14];
        this.guanqia5 = [0,1,2,3,4,5,15,15,15,15,17,17,17,8,9,10,11,12,13,14];
        this.guanqia6 = [0,1,2,3,4,5,15,15,15,15,17,17,17,8,9,10,11,12,13,14];
        this.guanqia7 = [0,1,2,3,4,5,6,15,15,15,15,17,17,17,8,9,10,11,12,13,14];
        this.guanqia8 = [0,1,2,3,4,5,6,15,15,15,15,17,17,17,8,9,10,11,12,13,14];
        this.guanqia9 = [0,1,2,3,4,5,6,7,15,15,15,15,17,17,17,8,9,10,11,12,13,14];
        this.guanqia10 = [0,1,2,3,4,5,6,7,15,15,15,15,17,17,17,8,9,10,11,12,13,14];
        this.guanqia11 = [0,1,2,3,4,5,6,7,15,15,15,15,17,17,17,8,9,10,11,12,13,14];
        this.guanqia_shuzu = [this.guanqia1,this.guanqia2,this.guanqia3,this.guanqia4,this.guanqia5,this.guanqia6,this.guanqia7,this.guanqia8,this.guanqia9,this.guanqia10,this.guanqia11];
        
        this.zhangjie_sykp = cc.find("Canvas/youxi/zhuangtai/zhangjie_sykp");
        this.zhangjie_jizhang = cc.find("Canvas/youxi/zhuangtai/zhangjie_jizhang");
        this.zhangjie_pj_boss = cc.find("Canvas/youxi/zhuangtai/pj_boss");
        this.zhangjie_sykp.getComponent(cc.Label).string = obj.guanqia_syks[obj.guanqia_dq];
        this.zhangjie_jizhang.getComponent(cc.Label).string = obj.guanqia_dq+1;

        //初始主角的索引
        // obj.zj_sy = 4;
        // this.addBlock();
        
    },
    qqstart: function() {
        
        obj.zj_sy = 4;
        //obj.guanqia_syks = 10;
        this.int_addBlock();
        //初始关卡文字
        obj.wz_sy = 0;
        this.juqing.getComponent("jq_wenzi").jq_dianji();
        
    },
    jq_start: function() {
        var action2 = cc.moveTo(0.1, 820, 0);
        this.juqing.runAction(action2);
        //初始关卡文字
        obj.wz_sy = 0;
        this.juqing.getComponent("jq_wenzi").jq_dianji();
        
    },
    restart: function() {
        
        //初始化主角的武器
        this.kp_zj.getChildByName('kapaics_jineng').active = false;
        this.kp_zj.getChildByName('sj_wq').active = false;
        //游戏胜利初始化
        //关卡更新
        this.zhangjie_jizhang.getComponent(cc.Label).string = obj.guanqia_dq+1;
        //初始化剩余卡牌
        obj.guanqia_syks = [18,20,22,24,26,28,30,32,34,36,38];
        this.zhangjie_sykp.active = true;
        this.zhangjie_pj_boss.active = false;
        //剩余卡牌初始化
        this.zhangjie_sykp.getComponent(cc.Label).string = obj.guanqia_syks[obj.guanqia_dq];
        //游戏胜利初始化
        //清空卡牌
        this.kp_zj.parent = this.weizhi[9];
        
        for(var i=0;i<9;i++){
            this.weizhi[i].destroyAllChildren();
        };
        obj.zj_sy = 4;
        this.kp_zj.parent = this.weizhi[4];
        
        this.kp_zj.getChildByName('sj_xl').getComponent(cc.Label).string = 10;
        this.kp_zj.getChildByName('sj_wq').getComponent(cc.Label).string = 0;
        //弹窗归位
        //this.juqing.x= 2000;
        this.gamelive.x= 2000;
        this.gameOverMenu.x= 2000;
        this.sp_kx = 0;
        
    },
    restart_yxsb: function() {
        //游戏失败初始化
        //关卡更新
        this.zhangjie_jizhang.getComponent(cc.Label).string = obj.guanqia_dq+1;
        //初始关卡
        obj.guanqia_dq = 0;
        this.zhangjie_sykp.getComponent(cc.Label).string = obj.guanqia_syks[obj.guanqia_dq];
        this.zhangjie_jizhang.getComponent(cc.Label).string = obj.guanqia_dq+1;
        //初始化剩余卡牌
        obj.guanqia_syks = [18,20,22,24,26,28,30,32,34,36,38];
        this.zhangjie_sykp.active = true;
        this.zhangjie_pj_boss.active = false;
    },
    getEmptyLocations: function() {
        // 空闲的位置
        var emptyLocations = [];
        for (var i = 0; i < 9; i++){
            
            if (this.weizhi[i].childrenCount == 0) {
                emptyLocations.push(i);
            }
        }
        return emptyLocations;
        
    },
    int_addBlock: function() {
        // 空闲的位置
        var emptyLocations = this.getEmptyLocations();
        ////cc.log("1空闲位置"+emptyLocations);
        
        
        //上牌空隙
        var suiji_sy = Math.floor(Math.random() * this.guanqia_shuzu[obj.guanqia_dq].length)
        var suiji = this.guanqia_shuzu[obj.guanqia_dq][suiji_sy];
        cc.log(this.guanqia_shuzu[obj.guanqia_dq]);
        cc.log(suiji_sy,suiji);
        cc.log(obj.guanqia_dq);
        var b = cc.instantiate(this.kapaipr[suiji]);
        //随机变换血量
        var b_xl = parseInt(b.getChildByName('sj_xl').getComponent(cc.Label).string);
        b.getChildByName('sj_xl').getComponent(cc.Label).string = b_xl + Math.floor(Math.random() *4 -3);
        var p1 = Math.floor(Math.random() * emptyLocations.length);
        p1 = emptyLocations[p1];
        this.weizhi[p1].addChild(b);
        this.weizhi[p1].children[0].getComponent('kp_donghua').start_donghua(p1,this.sp_kx/1.5);
        this.sp_kx++;
        var emptyLocations2 = this.getEmptyLocations();
        /// 没有空位了
        if (emptyLocations2.length != 0) {
            this.int_addBlock();
            
        }else{
            /// 洗牌音效
            //间隔几秒  重复次数  延迟
            this.schedule(function() {
                this.tx_xipaiyy.getComponent(cc.AudioSource).play();
            }, 0.22, 8, 0);
            
        };

        //遍历特殊卡牌状态
        this.walks();
    },
    
    addBlock: function() {
        
        // 空闲的位置
        var emptyLocations = this.getEmptyLocations();
        ////cc.log("1空闲位置"+emptyLocations);
        /// 没有空位了
        //上牌空隙
        var suiji_sy = Math.floor(Math.random() * this.guanqia_shuzu[obj.guanqia_dq].length)
        var suiji = this.guanqia_shuzu[obj.guanqia_dq][suiji_sy];
        //var suiji = this.guanqia_shuzu[obj.guanqia_dq][6];
        cc.log(this.guanqia_shuzu[obj.guanqia_dq]);
        cc.log(suiji_sy);
        cc.log(suiji);
        //boss卡牌出现
        if(obj.guanqia_syks[obj.guanqia_dq] == 0){
            suiji = this.pd_bosslx();
            this.tx_bosslx_dh(suiji);
        }
        //判断boss是否来袭
        
        //复制预制体
        var b = cc.instantiate(this.kapaipr[suiji]);
        //随机变换血量
        var b_xl = parseInt(b.getChildByName('sj_xl').getComponent(cc.Label).string);
        b.getChildByName('sj_xl').getComponent(cc.Label).string = b_xl + Math.floor(Math.random() *4 -3);
        var p1 = Math.floor(Math.random() * emptyLocations.length);
        p1 = emptyLocations[p1];
        //b.getChildByName('New Label').getComponent(cc.Label).string = p1;
        this.weizhi[p1].addChild(b);
        this.weizhi[p1].children[0].getComponent('kp_donghua').start_donghua(p1,1);
        

        //遍历特殊卡牌状态
        this.walks();
        
        //return true;
    },
    add_jl_Block: function(x) {
        
        var suiji = this.guanqia1[Math.floor(Math.random() * this.guanqia1.length)];
        //如果是陷阱卡 立刻换成别的
        if( suiji== 15){
            suiji = 8;
        }
        var b = cc.instantiate(this.kapaipr[suiji]);
        //b.getChildByName('New Label').getComponent(cc.Label).string = p1;
        this.weizhi[x].addChild(b);
        this.weizhi[x].children[0].getComponent('kp_donghua').start_donghua(x,1);
        
        
        //return true;
    },
    jisuan_shuju: function(kp_sj_sy, kp_sj_lx, kp_sj_xl, kp_sj_wq, kp_sj_jb, kp_sj_yh) {
        //计算节点层级
        this.kp_cengji();

        
        //cc.log("2索引"+kp_sj_sy,"2序列"+kp_sj_lx,"2血量"+kp_sj_xl,"2武器"+kp_sj_wq,"2金币"+kp_sj_jb,"2御魂"+kp_sj_yh);
        var zj_sj_wq = parseInt(this.kp_zj.getChildByName('sj_wq').getComponent(cc.Label).string);
        var zj_sj_xl = parseInt(this.kp_zj.getChildByName('sj_xl').getComponent(cc.Label).string);

        if(kp_sj_lx == 1||kp_sj_lx == 10||kp_sj_lx == 100){
            //播放音效
            this.bgm.getChildByName('gongji').getComponent(cc.AudioSource).play();
            //z p 都有武器
            if(kp_sj_wq>0 && zj_sj_wq>0 ){
            	if (zj_sj_wq>kp_sj_wq) {
            		this.kp_zj.getChildByName('sj_wq').getComponent(cc.Label).string = zj_sj_wq - parseInt(kp_sj_wq);
                    this.weizhi[kp_sj_sy].children[0].getChildByName('sj_wq').getComponent(cc.Label).string = 0;
                    //破甲音效
                     
                    
            	}else if(zj_sj_wq<kp_sj_wq){
            		this.tx_yc_jineng();
            		this.kp_zj.getChildByName('sj_wq').getComponent(cc.Label).string =  0;
            		this.weizhi[kp_sj_sy].children[0].getChildByName('sj_wq').getComponent(cc.Label).string = parseInt(kp_sj_wq)- zj_sj_wq;
                    //破甲音效
                     

                }else if(zj_sj_wq == kp_sj_wq){
                	this.tx_yc_jineng();
            		this.kp_zj.getChildByName('sj_wq').getComponent(cc.Label).string =  0;
            		
                    this.weizhi[kp_sj_sy].children[0].getChildByName('sj_wq').getComponent(cc.Label).string = 0;
                    //破甲音效
                     
                };
                this.tx_zj(kp_sj_sy,kp_sj_wq);
            	//cc.log("我执行了普通卡3");
            	return;
            };
            //p 有武器  
            if(kp_sj_wq>0&&kp_sj_wq>zj_sj_xl){
            		this.kp_zj.getChildByName('sj_xl').getComponent(cc.Label).string = 0;
            		this.weizhi[kp_sj_sy].children[0].getChildByName('sj_wq').getComponent(cc.Label).string = parseInt(kp_sj_wq)- zj_sj_xl;
                    //cc.log("我执行了普通卡7");
                    this.tx_zj(kp_sj_sy,zj_sj_xl);
                    return;
            		//游戏结束
            }else if(kp_sj_wq>0&&kp_sj_wq<zj_sj_xl){
                    //cc.log("我执行了普通卡2");
                    this.tx_zj(kp_sj_sy,kp_sj_wq);
            		this.kp_zj.getChildByName('sj_xl').getComponent(cc.Label).string = zj_sj_xl - parseInt(kp_sj_wq);
                    this.weizhi[kp_sj_sy].children[0].getChildByName('sj_wq').getComponent(cc.Label).string = 0 ;
                    //破甲音效
                     
                    return;
            //z 有武器  
            }else if(zj_sj_wq>0&&zj_sj_wq>kp_sj_xl){
                    this.kp_zj.getChildByName('sj_wq').getComponent(cc.Label).string = zj_sj_wq - parseInt(kp_sj_xl);
                    this.bgm.getChildByName('tx_kapi_siwang').getComponent(cc.AudioSource).play();
                    //cc.log("我把敌人吃了3");
                    this.tx_zhansha(kp_sj_sy);
                    //this.tx_zj(kp_sj_sy);
                    if(kp_sj_lx == 100){
                        //cc.log("游戏胜利");
                        this.youxi_jq();
                        return;
                    };

                    //return;
            //z 有武器
            }else if(zj_sj_wq>0&&zj_sj_wq<kp_sj_xl){
            		this.tx_yc_jineng();
                    //cc.log("我执行了普通卡 ");
                    this.tx_zj(kp_sj_sy,zj_sj_wq);
            		this.kp_zj.getChildByName('sj_wq').getComponent(cc.Label).string = 0;
            		this.weizhi[kp_sj_sy].children[0].getChildByName('sj_xl').getComponent(cc.Label).string = parseInt(kp_sj_xl)- zj_sj_wq  ;
                    //破甲音效
                     
                    return;
            }else if(zj_sj_wq>0&&zj_sj_wq == kp_sj_xl){
            		this.tx_yc_jineng();
                    //cc.log("我执行了普通卡 ");
                    this.tx_zj(kp_sj_sy,zj_sj_wq);
            		this.kp_zj.getChildByName('sj_wq').getComponent(cc.Label).string = 0;
            		this.weizhi[kp_sj_sy].children[0].getChildByName('sj_xl').getComponent(cc.Label).string = 0 ;
            		return;
            }
            // zp 都没有武器
            if(kp_sj_wq==0 && zj_sj_wq==0 && kp_sj_xl>zj_sj_xl ){
            	this.kp_zj.getChildByName('sj_xl').getComponent(cc.Label).string = 0;
            	this.weizhi[kp_sj_sy].children[0].getChildByName('sj_xl').getComponent(cc.Label).string =  parseInt(kp_sj_xl)- zj_sj_xl;
            	
                //cc.log("游戏结束");
                //游戏结束动画
                var action1 = cc.fadeTo(0.01, 0);
                var action2 = cc.moveTo(0.01, 820, 0);
                var action3 = cc.fadeTo(0.6, 255);

                this.gameOverMenu.runAction(cc.sequence(action1,action2,action3));
                
            	return;
            }else if(kp_sj_wq==0 && zj_sj_wq==0 &&kp_sj_xl<zj_sj_xl){
            	this.weizhi[kp_sj_sy].children[0].getChildByName('sj_xl').getComponent(cc.Label).string = 0 ;
                this.kp_zj.getChildByName('sj_xl').getComponent(cc.Label).string = zj_sj_xl - parseInt(kp_sj_xl);
                this.bgm.getChildByName('tx_kapi_siwang').getComponent(cc.AudioSource).play();
                //cc.log("我把敌人吃了");
                this.tx_zhansha(kp_sj_sy);
                if(kp_sj_lx == 100){
                    //cc.log("游戏胜利");
                    this.youxi_jq();
                    return;
                };
            }else if(kp_sj_wq==0 && zj_sj_wq==0 &&kp_sj_xl==zj_sj_xl){
            	this.weizhi[kp_sj_sy].children[0].getChildByName('sj_xl').getComponent(cc.Label).string = 0 ;
                this.kp_zj.getChildByName('sj_xl').getComponent(cc.Label).string = 0;
                this.bgm.getChildByName('tx_kapi_siwang').getComponent(cc.AudioSource).play();
                //cc.log("我把敌人吃了2");
                //特效 斩杀
                this.tx_zhansha(kp_sj_sy);
                if(kp_sj_lx == 100){
                    //cc.log("游戏胜利");
                    this.youxi_jq();
                    return;
                };
            }

            //是否击杀有奖励金币
            var aa = Math.floor(Math.random() * 2);
            if(aa == 1){
                this.schedule(function() {
                    this.weizhi[kp_sj_sy].destroyAllChildren();
                    this.weizhi[kp_sj_sy].addChild(cc.instantiate(this.kapaipr[8]));
                }, 0, 0,0.6);
                
                return;
            }
        };
        
        
        
        //this.kp_zj.getChildByName('sj_xl').getComponent(cc.Label).string = zj_sj_xl - parseInt(kp_sj_xl);
        //奖励卡牌
        if(kp_sj_lx == 20){
        	var zj_sj_jb = parseInt(this.kp_zj.getChildByName('sj_jb').getComponent(cc.Label).string);
        	this.kp_zj.getChildByName('sj_jb').getComponent(cc.Label).string = zj_sj_jb + parseInt(kp_sj_jb);
        };

        if(kp_sj_lx == 21){
        	var zj_sj_yh = parseInt(this.kp_zj.getChildByName('sj_yh').getComponent(cc.Label).string);
        	this.kp_zj.getChildByName('sj_yh').getComponent(cc.Label).string = zj_sj_yh + parseInt(kp_sj_yh);
        };
        if(kp_sj_lx == 22){
            this.weizhi[kp_sj_sy].destroyAllChildren();
            this.add_jl_Block(kp_sj_sy,);
            return;
        };

        if(kp_sj_lx == 40||kp_sj_lx == 41||kp_sj_lx == 42||kp_sj_lx == 43){
        	this.tx_xs_jineng();
            this.kp_zj.getChildByName('kapaics_jineng').getComponent(cc.Animation).play();
            this.kp_zj.getChildByName('sj_wq').getComponent(cc.Animation).play();
        	var aa = this.kp_zj.getChildByName('kapaics_jineng').getComponent(cc.Sprite);
        	this.kp_zj.getChildByName('sj_wq').getComponent(cc.Label).string = kp_sj_wq;
            if(kp_sj_lx == 40){
            	aa.spriteFrame = this.jn_spriteFrame1;
            }else if(kp_sj_lx == 41){
            	aa.spriteFrame = this.jn_spriteFrame2;
            }else if(kp_sj_lx == 42){
            	aa.spriteFrame = this.jn_spriteFrame3;
            }else if(kp_sj_lx == 43){
            	aa.spriteFrame = this.jn_spriteFrame4;
            }
            
        };
        //加血卡牌
        if(kp_sj_lx == 3){
        	if(zj_sj_xl + parseInt(kp_sj_xl) >=10){
        		this.kp_zj.getChildByName('sj_xl').getComponent(cc.Label).string = 10 ;
        	}else{
        		this.kp_zj.getChildByName('sj_xl').getComponent(cc.Label).string = zj_sj_xl + parseInt(kp_sj_xl) ;
            }
            var action1 = cc.scaleTo(0.1, 1.4);
            var action2 = cc.scaleTo(0.2, 1.4);
            var action3 = cc.scaleTo(0.1, 1);

            this.kp_zj_xl.runAction(cc.sequence(action1,action2,action3));
            this.kp_zj_xl_cd.runAction(cc.sequence(action1,action2,action3));
        	

        };
        

        var zj_sj_yh = parseInt(this.kp_zj.getChildByName('sj_yh').getComponent(cc.Label).string);
        this.kp_zj.getChildByName('sj_yh').getComponent(cc.Label).string = zj_sj_yh + parseInt(kp_sj_yh);
        //卡牌移动
        this.weizhi[kp_sj_sy].children[0].runAction(cc.fadeTo(0.6,0));
        this.schedule(function() {
            this.kapai_yidong(kp_sj_sy);
        }, 0, 0,0.6);
        
    },
    kapai_yidong: function(kp_sj_sy) {
        
        //交换父节点
        // //cc.log(kp_sj_sy+"新的")
        // //cc.log(this.kp_zj.parent.wz_sy+"新的")
        //主角移动动画
        //计算后置卡牌 
        var aa = obj.zj_sy*2-kp_sj_sy;
        //cc.log(aa);
        var z_x = this.kp_zj.parent.x;
        var z_y = this.kp_zj.parent.y;
        var k_x = this.weizhi[kp_sj_sy].x;
        var k_y = this.weizhi[kp_sj_sy].y;
        var h_x =0;
        var h_y =0;
        if(this.weizhi[obj.zj_sy*2 - kp_sj_sy]||this.weizhi[obj.zj_sy*2 - kp_sj_sy]){
            var h_x =this.weizhi[obj.zj_sy*2 - kp_sj_sy].x;
            var h_y =this.weizhi[obj.zj_sy*2 - kp_sj_sy].y;
        }
        
        //主角交换位置
        this.weizhi[kp_sj_sy].destroyAllChildren();
        this.kp_zj.parent = this.weizhi[kp_sj_sy];
        //主角交换位置动画
        this.kp_zj.x = z_x -k_x;
        this.kp_zj.y =  z_y-k_y;
        var action0 = cc.scaleTo(0.4, 1.06);
        var action1 = cc.scaleTo(0.05, 1);
        var action2 = cc.moveBy(0.1, 0, 0);
        var action3 = cc.moveTo(0.3, 0, 0);

        action2.easing(cc.easeIn(1.0));
        this.kp_zj.runAction(cc.sequence(action0,action1));
        this.kp_zj.runAction(cc.sequence(action2,action3));
        //this.tx_booboo(kp_sj_sy);

        
        
        

       

        //计算后方的卡牌    y=2x-z
        //改变爸爸
        // var aa = obj.zj_sy*2-kp_sj_sy;
        // //cc.log(aa);
        if( obj.zj_sy==1||obj.zj_sy==3||obj.zj_sy==4||obj.zj_sy==5||obj.zj_sy==7 ){
            if( kp_sj_sy!=4){
                this.weizhi[obj.zj_sy*2 - kp_sj_sy].children[0].parent = this.weizhi[obj.zj_sy];
                //主角在  正中心 往外面走 交换位置动画
                this.weizhi[obj.zj_sy].children[0].x = h_x - z_x;
                this.weizhi[obj.zj_sy].children[0].y = h_y - z_y;
                var action0 = cc.moveBy(0.2, 0, 0);
                var action1 = cc.moveTo(0.3, 0, 0);
                action1.easing(cc.easeIn(1.0));
                this.weizhi[obj.zj_sy].children[0].runAction(cc.sequence(action0,action1));

            }else if(obj.zj_sy==1 && kp_sj_sy==4){
                //主角在  外面 往走 正中心 交换位置动画
                this.weizhi[0].children[0].parent = this.weizhi[1];

                this.weizhi[1].children[0].x = this.weizhi[0].x - this.weizhi[1].x;
                this.weizhi[1].children[0].y = this.weizhi[0].y - this.weizhi[1].y;
                var action0 = cc.moveBy(0.2, 0, 0);
                var action1 = cc.moveTo(0.3, 0, 0);
                action1.easing(cc.easeIn(1.0));
                this.weizhi[1].children[0].runAction(cc.sequence(action0,action1));

            }else if(obj.zj_sy==3 && kp_sj_sy==4){
                //主角在  外面 往走 正中心 交换位置动画
                this.weizhi[6].children[0].parent = this.weizhi[3];

                this.weizhi[3].children[0].x = this.weizhi[6].x - this.weizhi[3].x;
                this.weizhi[3].children[0].y = this.weizhi[6].y - this.weizhi[3].y;
                var action0 = cc.moveBy(0.2, 0, 0);
                var action1 = cc.moveTo(0.3, 0, 0);
                action1.easing(cc.easeIn(1.0));
                this.weizhi[3].children[0].runAction(cc.sequence(action0,action1));

            }else if(obj.zj_sy==5 && kp_sj_sy==4){
                //主角在  外面 往走 正中心 交换位置动画
                this.weizhi[2].children[0].parent = this.weizhi[5];

                this.weizhi[5].children[0].x = this.weizhi[2].x - this.weizhi[5].x;
                this.weizhi[5].children[0].y = this.weizhi[2].y - this.weizhi[5].y;
                var action0 = cc.moveBy(0.2, 0, 0);
                var action1 = cc.moveTo(0.3, 0, 0);
                action1.easing(cc.easeIn(1.0));
                this.weizhi[5].children[0].runAction(cc.sequence(action0,action1));

            }else if(obj.zj_sy==7 && kp_sj_sy==4){
                //主角在  外面 往走 正中心 交换位置动画
                this.weizhi[8].children[0].parent = this.weizhi[7];

                this.weizhi[7].children[0].x = this.weizhi[8].x - this.weizhi[7].x;
                this.weizhi[7].children[0].y = this.weizhi[8].y - this.weizhi[7].y;
                var action0 = cc.moveBy(0.2, 0, 0);
                var action1 = cc.moveTo(0.3, 0, 0);
                action1.easing(cc.easeIn(1.0));
                this.weizhi[7].children[0].runAction(cc.sequence(action0,action1));

            };
            ////cc.log(aa);
            //交换父节点
             
        }else if(obj.zj_sy==0||obj.zj_sy==2||obj.zj_sy==6||obj.zj_sy==8){
            if( obj.zj_sy==0 && kp_sj_sy==1){
                //主角 0  配角 1  
                this.weizhi[3].children[0].parent = this.weizhi[0];
                this.weizhi[6].children[0].parent = this.weizhi[3];
                this.donghua_kapai(0,3,6);
                



            }else if(obj.zj_sy==0 && kp_sj_sy==3){
                this.weizhi[1].children[0].parent = this.weizhi[0];
                this.weizhi[2].children[0].parent = this.weizhi[1];

                this.donghua_kapai(0,1,2);

            }else if(obj.zj_sy==2 && kp_sj_sy==1){
                this.weizhi[5].children[0].parent = this.weizhi[2];
                this.weizhi[8].children[0].parent = this.weizhi[5];

                this.donghua_kapai(2,5,8);
                
            }else if(obj.zj_sy==2 && kp_sj_sy==5){
                this.weizhi[1].children[0].parent = this.weizhi[2];
                this.weizhi[0].children[0].parent = this.weizhi[1];
                this.donghua_kapai(2,1,0);
            }else if(obj.zj_sy==8 && kp_sj_sy==5){
                this.weizhi[6].children[0].parent = this.weizhi[7];
                this.weizhi[7].children[0].parent = this.weizhi[8];
                this.donghua_kapai(8,7,6);
            }else if(obj.zj_sy==8 && kp_sj_sy==7){
                this.weizhi[5].children[0].parent = this.weizhi[8];
                this.weizhi[2].children[0].parent = this.weizhi[5];
                this.donghua_kapai(8,5,2);
            }else if(obj.zj_sy==6 && kp_sj_sy==3){
                this.weizhi[7].children[0].parent = this.weizhi[6];
                this.weizhi[8].children[0].parent = this.weizhi[7];
                this.donghua_kapai(6,7,8);
            }else if(obj.zj_sy==6 && kp_sj_sy==7){
                this.weizhi[3].children[0].parent = this.weizhi[6];
                this.weizhi[0].children[0].parent = this.weizhi[3];
                this.donghua_kapai(6,3,0);
            }
        };
        

        //即使广播zj的索引
        obj.zj_sy = parseInt(this.kp_zj.parent.name);

        //箭头动画
        this.kp_zj.getComponent('jiantou_weizhi').jiantou_dh(obj.zj_sy);
        //计算节点层级
        this.kp_cengji();
        this.addBlock();
        //剩余卡牌
        if(obj.guanqia_syks[obj.guanqia_dq] == 0){
            //防止boss重复出现
            obj.guanqia_syks[obj.guanqia_dq] = -1;
            this.zhangjie_sykp.active = false;
            this.zhangjie_pj_boss.active = true;
        }else{
            //var shengyuys = obj.guanqia_syks[obj.guanqia_dq];
            this.zhangjie_sykp.getComponent(cc.Label).string = obj.guanqia_syks[obj.guanqia_dq]--;
            obj.guanqia_syks[obj.guanqia_dq] = obj.guanqia_syks[obj.guanqia_dq]--;
        };
        
        //箭头节点动画
        //this.jiantou_node.getComponent('jiantou_weizhi').cxsy_ww(this);
    },


    walks: function() {
    	//this.kp_zj.getChildByName('kaipai_zj_lj').getComponent(cc.Sprite).spriteFrame.setTexture('resources/kaipai_sj_xxbf1.png');
    	for (var i = 0; i <= 8; i++) {
    		var aa = this.weizhi[i].children[0];
    		var bb = parseInt(aa.getChildByName('sj_lx').getComponent(cc.Label).string);
    		if(bb == 10){
                aa.getComponent('kp_xxbf').cxsy_ww(this);
            }

            aa.getChildByName('kaipai_bai').opacity = 0;
        }
        var op1 = obj.zj_sy-1;
        var op2 = obj.zj_sy+1;
        var op3 = obj.zj_sy-3;
        var op4 = obj.zj_sy+3;
        if(op1 == 5){
        	op1 = -100;
        }
        if(op1 == 2){
        	op1 = -100;
        }
        if(op2 == 6){
        	op2 = 100;
        }
        if(op2 == 3){
        	op2 = 100;
        }
        

        if(op1>-1){
            this.weizhi[op1].children[0].getChildByName('kaipai_bai').opacity = 80;
        }
        if(op2<9){
            this.weizhi[op2].children[0].getChildByName('kaipai_bai').opacity = 80;
        }
        if(op3>-1){
            this.weizhi[op3].children[0].getChildByName('kaipai_bai').opacity = 80;
        }
        if(op4<9){
            this.weizhi[op4].children[0].getChildByName('kaipai_bai').opacity = 80;
        }
       
        
    },

    donghua_kapai: function(x,y,z) {
    	//this.kp_zj.getChildByName('kaipai_zj_lj').getComponent(cc.Sprite).spriteFrame.setTexture('resources/kaipai_sj_xxbf1.png');
    	

        this.weizhi[x].children[0].x = this.weizhi[y].x - this.weizhi[x].x;
        this.weizhi[x].children[0].y = this.weizhi[y].y - this.weizhi[x].y;
        this.weizhi[y].children[0].x = this.weizhi[z].x - this.weizhi[y].x;
        this.weizhi[y].children[0].y = this.weizhi[z].y - this.weizhi[y].y;
        var action0 = cc.moveBy(0.1, 0, 0);
        var action1 = cc.moveTo(0.4, 0, 0);
        var action2 = cc.moveBy(0.1, 0, 0);
        var action3 = cc.moveTo(0.4, 0, 0);
        action1.easing(cc.easeIn(1.0));
        this.weizhi[x].children[0].runAction(cc.sequence(action0,action1));
        this.weizhi[y].children[0].runAction(cc.sequence(action2,action3));
        
    },
    tx_zj: function(pj_sy,pj_sh) {
    	//this.kp_zj.getChildByName('kaipai_zj_lj').getComponent(cc.Sprite).spriteFrame.setTexture('resources/kaipai_sj_xxbf1.png');
        var yd_x = this.weizhi[pj_sy].x -this.weizhi[obj.zj_sy].x;
        var yd_y = this.weizhi[pj_sy].y-this.weizhi[obj.zj_sy].y;
        var action0 = cc.moveTo(0.15, yd_x, yd_y);
        var action1 = cc.moveTo(0.05, 0, 0);
        action1.easing(cc.easeIn(1.0));
        this.kp_zj.runAction(cc.sequence(action0,action1));

        this.tx_booboo(pj_sy,pj_sh);

        //this.weizhi[y].children[0].runAction(cc.sequence(action2,action3));
        
    },
    tx_booboo: function(pj_sy,pj_sh) {
    	

        this.booboo_node.x = this.weizhi[pj_sy].x;
        this.booboo_node.y = this.weizhi[pj_sy].y+80;
        var action2 = cc.fadeTo(0.1, 255);
        var action3 = cc.fadeTo(1, 255);
        var action4 = cc.fadeTo(0.5, 0);

        var action5 = cc.scaleTo(0.1, 0.9);
        var action6 = cc.scaleTo(0.1, 1);
        var action7 = cc.scaleTo(0.1, 0.9);
        var action8 = cc.scaleTo(0.1, 1);
        this.booboo_node.runAction(cc.sequence(action2,action3,action4));
        this.booboo_node.runAction(cc.sequence(action5,action6,action7,action8));
        this.booboo_node.getChildByName('New Label').getComponent(cc.Label).string = pj_sh;

        //this.weizhi[y].children[0].runAction(cc.sequence(action2,action3));
        
    },
    tx_zhansha: function(pj_sy) {
    	

        this.zhansha_node.x = this.weizhi[pj_sy].x+20;
        this.zhansha_node.y = this.weizhi[pj_sy].y+60;
        var action2 = cc.fadeTo(0.1, 255);
        var action3 = cc.fadeTo(0.4, 255);
        var action4 = cc.fadeTo(0.2, 0);

        var action5 = cc.scaleTo(0.1, 0.9);
        var action6 = cc.scaleTo(0.1, 1);
        var action7 = cc.scaleTo(0.1, 0.9);
        var action8 = cc.scaleTo(0.1, 1);
        this.zhansha_node.runAction(cc.sequence(action2,action3,action4));
        this.zhansha_node.runAction(cc.sequence(action5,action6,action7,action8));

        //this.weizhi[y].children[0].runAction(cc.sequence(action2,action3));
        
    },
    kp_cengji: function(pj_sy,pj_sh) {
    	for(var i=0;i<9;i++){
            this.weizhi[i].zIndex=1;
        };
        this.kp_zj.parent.zIndex = 9;
        
        
    },
    //游戏胜利下一个关卡
    youxi_jq: function() {
        //
        //音效
        this.bgm.getChildByName('vos_boss1').getComponent(cc.AudioSource).play();
        //间隔几秒  重复次数  延迟
        this.schedule(function() {
            this.restart();
        }, 0, 0, 4);
        
        //下一个关卡
    	obj.guanqia_dq++;
        var action0 = cc.fadeTo(0.01, 0);            
        var action1 = cc.moveTo(0.01, 820, 0);
        var action2 = cc.fadeTo(2, 0); 
        var action3 = cc.fadeTo(0.6, 255);

        this.juqing.runAction(cc.sequence(action0,action1,action2,action3));
        
        //初始关卡文字
        obj.wz_sy = 0;
        this.juqing.getComponent("jq_wenzi").jq_dianji();
        
        
        
        
        
    },
    pd_bosslx: function() {
            var suiji;
            if(obj.guanqia_dq == 0){
                suiji = 16;
            }else if(obj.guanqia_dq == 1){
                suiji = 18;
            }else if(obj.guanqia_dq == 2){
                suiji = 19;
            }else if(obj.guanqia_dq == 3){
                suiji = 20;
            }else if(obj.guanqia_dq == 4){
                suiji = 21;
            }else if(obj.guanqia_dq == 5){
                suiji = 22;
            }else if(obj.guanqia_dq == 6){
                suiji = 23;
            }else if(obj.guanqia_dq == 7){
                suiji = 24;
            }else if(obj.guanqia_dq == 8){
                suiji = 25;
            }else if(obj.guanqia_dq == 9){
                suiji = 26;
            }else if(obj.guanqia_dq == 10){
                suiji = 27;
            }else if(obj.guanqia_dq == 11){
                suiji = 28;
            }
            

            
            return suiji;

    },
    tx_bosslx_dh: function(suiji) {
        this.bgm.getChildByName('tx_kapi_bosscome').getComponent(cc.AudioSource).play();
    	
        var b = cc.instantiate(this.kapaipr[suiji]);   
        this.tx_bosslx.opacity = 0;
        this.tx_bosslx_pai.addChild(b);         
        var action1 = cc.moveTo(0.01, 820, 0);
        var action2 = cc.fadeTo(0.3, 255);
        var action3 = cc.moveTo(3, 820, 0);
        var action4 = cc.fadeTo(0.3, 0);
        var action5 = cc.moveTo(0.01, 4000, 0);
        this.tx_bosslx.runAction(cc.sequence(action1,action2,action3,action4,action5));
    },
    tx_yc_jineng: function(suiji) {
    	
        this.kp_zj.getChildByName('sj_wq').active = false;
        this.kp_zj.getChildByName('kapaics_jineng').active = false;
    },
    tx_xs_jineng: function(suiji) {
    	
        this.kp_zj.getChildByName('sj_wq').active = true;
        this.kp_zj.getChildByName('kapaics_jineng').active = true;
    },

    // called every frame
    update: function (dt) {
        
    },
});
