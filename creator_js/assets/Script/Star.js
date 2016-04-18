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
    },

    // use this for initialization
    onLoad: function () {
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var pos = this.pos;
        var offset = pos.offsets[pos.i];
        var offsetCount = pos.offsetCount;
        
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

        this.node.setPosition(cc.p(pos.x + offset.x, pos.y + offset.y));
        this.node.setOpacity(pos.o);
    }
});
