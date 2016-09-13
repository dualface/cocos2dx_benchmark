
class FrameSize {
    constructor() {
        this.center = new PIXI.Point();
        this.width = 0;
        this.height = 0;
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.rendererWidth = 0;
        this.rendererHeight = 0;
        this.rendererScaleX = 0;
        this.rendererScaleY = 0;
    }
}


class Director {
    constructor(config) {
        console.log('[Director] create instance');

        if (!config.width) {
            config.width = 960;
        }
        if (!config.height) {
            config.height = 640;
        }
        if (!config.policy) {
            config.policy = 'SHOW_ALL';
        }

        this._start = false;
        this._scaleConfig = config;

        this._stage = new PIXI.Container();
        this._scene = null;

        this._timestamp = 0;
        this._updateCall = null;
        this._lastSeconds = 0;
        this._tickCount = 0;

        this.size = new FrameSize();

        this._renderer = PIXI.autoDetectRenderer(config.width, config.height, {backgroundColor: 0xf00});
        this._renderer.view.style.position = 'absolute';
        document.body.appendChild(this._renderer.view);

        var frameWidth = $(window).width();
        var frameHeight = $(window).height();
        this.setFrameSize(frameWidth, frameHeight);

        var left = frameWidth / 2 - this.size.rendererWidth / 2 + 'px';
        var top = frameHeight / 2 - this.size.rendererHeight / 2 + 'px';
        this._renderer.view.style.left = left;
        this._renderer.view.style.top = top;

        // stats
        this._stats = new Stats();
        document.body.appendChild(this._stats.dom);
        this._stats.dom.style.position = 'absolute';
        this._stats.dom.style.top = '0px';
    }

    getRenderer() {
        return this._renderer;
    }

    getStats() {
        return this._stats;
    }

    getRunningScene() {
        return this._scene;
    }

    runWithScene(scene) {
        scene.position.set(0, 0);
        this._stage.removeChildren();
        this._scene = scene;
        this._stage.addChild(scene);
    }

    start() {
        if (!this._start) {
            this._start = true;
            this._timestamp = 0;
            this._updateCall = this._update.bind(this);
            requestAnimationFrame(this._updateCall);
        }
    }

    stop() {
        if (this._start) {
            this._start = false;
            this._updateCall = null;
        }
    }

    setFrameSize(frameWidth, frameHeight) {
        var scaleX = 1;
        var scaleY = 1;
        var width = frameWidth;
        var height = frameHeight;
        var config = this._scaleConfig;

        switch (this._scaleConfig.policy) {
            case 'FIXED_HEIGHT':
                scaleX = scaleY = frameHeight / config.height;
                break;
            case 'FIXED_WIDTH':
                scaleX = scaleY = frameWidth / config.width;
                break;
            case 'SHOW_ALL':
            default:
                scaleX = frameWidth / config.width;
                scaleY = frameHeight / config.height;
        }

        this._stage.scale.set(scaleX, scaleY);
        this._renderer.resize(width, height);

        var viewWidth = width / scaleX;
        var viewHeight = height / scaleY;
        this.size.center.x = viewWidth / 2;
        this.size.center.y = viewHeight / 2;
        this.size.left = 0;
        this.size.width = this.size.right = viewWidth;
        this.size.top = 0;
        this.size.height = this.size.bottom = viewHeight;

        this.size.rendererWidth = width;
        this.size.rendererHeight = height;
        this.size.rendererScaleX = scaleX;
        this.size.rendererScaleY = scaleY;

        console.log(this.size);
    }

    _update(current) {
        if (!this._start) return;

        if (this._stats) this._stats.begin();

        var dt = (this._timestamp) ? (current - this._timestamp) / 1000 : 1.0 / 60.0;
        this._lastSeconds += dt;
        if (this._lastSeconds >= 1.0) {
            this._lastSeconds -= 1.0;
            this._tickCount++;
            // console.log('[Director] tick ' + this._tickCount.toString());
        }

        this._scene.update(dt);
        this._timestamp = current;
        this._renderer.render(this._stage);

        if (this._stats) this._stats.end();
        requestAnimationFrame(this._updateCall);

    }

}

