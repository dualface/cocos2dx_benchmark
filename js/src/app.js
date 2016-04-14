
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        this.offsetCount = 60;
        this.offsets = [];
        for (var i = 0; i < 60; i++) {
            this.offsets[i] = {
                x: Math.sin(i * 6 * Math.PI / 180) * 4,
                y: Math.cos(i * 6 * Math.PI / 180) * 4
            };
        }

        var size = cc.winSize;

        this.pos = [];
        this.stars = [];
        for (var i = 0; i < 1500; i++) {
            var star = new cc.Sprite("res/star.png");
            var pos = {
                x: Math.random() * size.width,
                y: Math.random() * size.height,
                i: Math.floor(Math.random() * this.offsetCount),
                o: Math.floor(Math.random() * 256),
                oi: 1
            };
            var offset = this.offsets[pos.i];
            star.setPosition(pos.x + offset.x, pos.y + offset.y);
            star.setOpacity(pos.o);
            this.addChild(star);

            this.stars[i] = star;
            this.pos[i] = pos;
        }

        this.scheduleUpdate();

        return true;
    },
    update:function (dt) {
        var count = this.stars.length;
        var offsetCount = this.offsetCount;
        for (var i = 0; i < count; i++) {
            var pos = this.pos[i];
            var offset = this.offsets[pos.i];
            pos.i++;
            pos.i %= offsetCount;
            pos.o += pos.oi;
            if (pos.o > 255) {
                pos.o = 255;
                pos.oi = -pos.oi;
            } else if (pos.o < 0) {
                pos.o = 0;
                pos.oi = -pos.oi;
            }

            var star = this.stars[i];
            star.setPosition(pos.x + offset.x, pos.y + offset.y);
            star.setOpacity(pos.o);
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

