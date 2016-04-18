
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        this.starsLayer = new cc.Node();
        this.addChild(this.starsLayer);

        var layer = new cc.LayerColor(cc.color(200, 200, 200, 200), 200, 40);
        layer.setPosition(cc.winSize.width / 2 - 100, cc.winSize.height / 2 - 40);
        this.addChild(layer);

        this.starsLabel = new cc.LabelTTF("0 stars", "sans", 24);
        this.starsLabel.setColor(cc.color(0, 0, 0, 255));
        this.starsLabel.setPosition(100, 20);
        layer.addChild(this.starsLabel);

        this.offsetCount = 60;
        this.offsets = [];
        for (var i = 0; i < 60; i++) {
            this.offsets[i] = {
                x: Math.sin(i * 6 * Math.PI / 180) * 4,
                y: Math.cos(i * 6 * Math.PI / 180) * 4
            };
        }

        this.maxStars = 6000;
        this.starsCountOffset = 500;
        this.stars = [];
        this.stepsCount = 120;
        this.steps = this.stepsCount;
        this.scheduleUpdate();

        console.log("START");

        return true;
    },

    addStars:function (count) {
        var size = cc.winSize;
        for (var i = 0; i < count; i++) {
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
            star.pos = pos;
            this.starsLayer.addChild(star);

            this.stars.push(star);
        }
        if (this.stars.length >= this.maxStars) {
            this.starsCountOffset = -this.starsCountOffset;
        }
    },

    removeStars:function (count) {
        while (count > 0 && this.stars.length > 0) {
            var star = this.stars.pop();
            this.starsLayer.removeChild(star);
            count--;
        }

        if (this.stars.length <= 0) {
            this.starsCountOffset = -this.starsCountOffset;
        }
    },

    update:function (dt) {
        this.steps++;
        if (this.steps >= this.stepsCount) {
            if (this.starsCountOffset > 0) {
                this.addStars(this.starsCountOffset);
            } else {
                this.removeStars(-this.starsCountOffset);
            }
            this.steps = 0;
            this.starsLabel.setString(this.stars.length.toString() + " stars");
        }

        var count = this.stars.length;
        for (var i = 0; i < count; i++) {
            this.updateStar(this.stars[i]);
        }
    },

    updateStar:function (star) {
        var pos = star.pos;
        var offset = this.offsets[pos.i];
        var offsetCount = this.offsetCount;

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

        star.setPosition(pos.x + offset.x, pos.y + offset.y);
        star.setOpacity(pos.o);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

