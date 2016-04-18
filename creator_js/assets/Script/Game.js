cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        starsLayer: {
            default: null,
            type: cc.Node
        },
        starsLabel: {
            default: null,
            type: cc.Label
        },
        starPrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function () {
        this.offsetCount = 60;
        this.offsets = [];
        for (var i = 0; i < this.offsetCount; i++) {
            this.offsets[i] = {
                x: Math.sin(i * 6 * Math.PI / 180) * 4,
                y: Math.cos(i * 6 * Math.PI / 180) * 4
            };
        }

        this.maxStars = 3000;
        this.starsCountOffset = 100;
        this.stars = [];
        this.stepsCount = 120;
        this.steps = this.stepsCount;
        
        console.log("START");
        
        cc.director.setDisplayStats(true);
    },

    addStars:function (count) {
        var size = cc.winSize;
        for (var i = 0; i < count; i++) {
            var star = cc.instantiate(this.starPrefab);
            var pos = {
                x: (Math.random() - 0.5) * size.width,
                y: (Math.random() - 0.5) * size.height,
                i: Math.floor(Math.random() * this.offsetCount),
                o: Math.floor(Math.random() * 256),
                oi: 1,
                offsets: this.offsets,
                offsetCount: this.offsetCount
            };
            var offset = this.offsets[pos.i];
            star.setPosition(pos.x + offset.x, pos.y + offset.y);
            star.setOpacity(pos.o);
            star.getComponent("Star").pos = pos;
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

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.steps++;
        if (this.steps >= this.stepsCount) {
            if (this.starsCountOffset > 0) {
                this.addStars(this.starsCountOffset);
            } else {
                this.removeStars(-this.starsCountOffset);
            }
            this.steps = 0;
            this.starsLabel.string = this.stars.length.toString() + " stars";
        }
    }
});
