cc.Class({
    extends: cc.Component,

    properties: {
       
    },
    onLoad () {
        this.node.opacity = 255;
    },

    start_donghua (x,y) {

        if(x == 0){
            var action1 = cc.moveBy(0.00001, 177, 464);
            var action2 = cc.moveBy(0.3*y, 177, 464);
            var action3 = cc.moveTo(0.6, 0, 0);
            action3.easing(cc.easeOut(3.0));
            this.node.runAction(cc.sequence(action1,action2,action3));
            this.node.runAction(action2);
            var action4 = cc.fadeTo(0.00001, 0);
            var action5 = cc.fadeTo(0.3*y, 0);
            var action6 = cc.fadeTo(1, 255);
            this.node.runAction(cc.sequence(action4,action5,action6));
        }else if(x == 1){
            var action1 = cc.moveBy(0.00001, 0, 464);
            var action2 = cc.moveBy(0.3*y, 0, 464);
            var action3 = cc.moveTo(0.6, 0, 0);
            action3.easing(cc.easeOut(3.0));
            this.node.runAction(cc.sequence(action1,action2,action3));
            this.node.runAction(action2);
            var action4 = cc.fadeTo(0.00001, 464);
            var action5 = cc.fadeTo(0.3*y, 0);
            var action6 = cc.fadeTo(1, 255);
            this.node.runAction(cc.sequence(action4,action5,action6));
        }else if(x == 2){
            var action1 = cc.moveBy(0.00001, -180, 464);
            var action2 = cc.moveBy(0.3*y,-180, 464);
            var action3 = cc.moveTo(0.6, 0, 0);
            action3.easing(cc.easeOut(3.0));
            this.node.runAction(cc.sequence(action1,action2,action3));
            this.node.runAction(action2);
            var action4 = cc.fadeTo(0.00001, 0);
            var action5 = cc.fadeTo(0.3*y, 0);
            var action6 = cc.fadeTo(1, 255);
            this.node.runAction(cc.sequence(action4,action5,action6));
        }else if(x == 3){
            var action1 = cc.moveBy(0.00001, 185, 745);
            var action2 = cc.moveBy(0.3*y, 185, 745);
            var action3 = cc.moveTo(0.6, 0, 0);
            action3.easing(cc.easeOut(3.0));
            this.node.runAction(cc.sequence(action1,action2,action3));
            this.node.runAction(action2);
            var action4 = cc.fadeTo(0.00001, 0);
            var action5 = cc.fadeTo(0.3*y, 0);
            var action6 = cc.fadeTo(1, 255);
            this.node.runAction(cc.sequence(action4,action5,action6));
        }else if(x == 4){
            var action1 = cc.moveBy(0.00001, 0, 745);
            var action2 = cc.moveBy(0.3*y, 0, 745);
            var action3 = cc.moveTo(0.6, 0, 0);
            action3.easing(cc.easeOut(3.0));
            this.node.runAction(cc.sequence(action1,action2,action3));
            this.node.runAction(action2);
            var action4 = cc.fadeTo(0.00001, 0);
            var action5 = cc.fadeTo(0.3*y, 0);
            var action6 = cc.fadeTo(1, 255);
            this.node.runAction(cc.sequence(action4,action5,action6));
        }else if(x == 5){
            var action1 = cc.moveBy(0.00001, -185, 745);
            var action2 = cc.moveBy(0.3*y, -185, 745);
            var action3 = cc.moveTo(0.6, 0, 0);
            action3.easing(cc.easeOut(3.0));
            this.node.runAction(cc.sequence(action1,action2,action3));
            this.node.runAction(action2);
            var action4 = cc.fadeTo(0.00001, 0);
            var action5 = cc.fadeTo(0.3*y, 0);
            var action6 = cc.fadeTo(1, 255);
            this.node.runAction(cc.sequence(action4,action5,action6));
        }else if(x == 6){
            var action1 = cc.moveBy(0.00001, 203, 1032);
            var action2 = cc.moveBy(0.3*y, 203, 1032);
            var action3 = cc.moveTo(0.6, 0, 0);
            action3.easing(cc.easeOut(3.0));
            this.node.runAction(cc.sequence(action1,action2,action3));
            this.node.runAction(action2);
            var action4 = cc.fadeTo(0.00001, 0);
            var action5 = cc.fadeTo(0.3*y, 0);
            var action6 = cc.fadeTo(1, 255);
            this.node.runAction(cc.sequence(action4,action5,action6));
        }else if(x == 7){
            var action1 = cc.moveBy(0.00001, 0, 1032);
            var action2 = cc.moveBy(0.3*y,0, 1032);
            var action3 = cc.moveTo(0.6, 0, 0);
            action3.easing(cc.easeOut(3.0));
            this.node.runAction(cc.sequence(action1,action2,action3));
            this.node.runAction(action2);
            var action4 = cc.fadeTo(0.00001, 0);
            var action5 = cc.fadeTo(0.3*y, 0);
            var action6 = cc.fadeTo(1, 255);
            this.node.runAction(cc.sequence(action4,action5,action6));
        }else if(x == 8){
            var action1 = cc.moveBy(0.00001, -203, 1032);
            var action2 = cc.moveBy(0.3*y, -203, 1032);
            var action3 = cc.moveTo(0.6, 0, 0);
            action3.easing(cc.easeOut(3.0));
            this.node.runAction(cc.sequence(action1,action2,action3));
            this.node.runAction(action2);
            var action4 = cc.fadeTo(0.00001, 0);
            var action5 = cc.fadeTo(0.3*y, 0);
            var action6 = cc.fadeTo(1, 255);
            this.node.runAction(cc.sequence(action4,action5,action6));
        }
        
    },

    // update (dt) {},
});
