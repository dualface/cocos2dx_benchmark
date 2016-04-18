
/** The main namespace of Cocos2d-JS, all engine core classes, functions, properties and constants are defined in this namespace */
declare module cc {	
	/** Init Debug setting. 
	*/
	export function _initDebugSetting(mode : DebugMode) : void;	
	/** Outputs an error message to the Cocos Creator Console (editor) or Web Console (runtime).
	- In Cocos Creator, error is red.
	- In Chrome, error have a red icon along with red message text.
	@param obj A JavaScript string containing zero or more substitution strings.
	@param subst JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output. 
	*/
	export function error(obj : any, subst : any) : void;	
	/** Outputs a warning message to the Cocos Creator Console (editor) or Web Console (runtime).
	- In Cocos Creator, warning is yellow.
	- In Chrome, warning have a yellow warning icon with the message text.
	@param obj A JavaScript string containing zero or more substitution strings.
	@param subst JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output. 
	*/
	export function warn(obj : any, subst : any) : void;	
	/** Outputs a message to the Cocos Creator Console (editor) or Web Console (runtime).
	@param obj A JavaScript string containing zero or more substitution strings.
	@param subst JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output. 
	*/
	export function log(obj : any, subst : any) : void;	
	/** Outputs an informational message to the Cocos Creator Console (editor) or Web Console (runtime).
	- In Cocos Creator, info is blue.
	- In Firefox and Chrome, a small "i" icon is displayed next to these items in the Web Console's log.
	@param obj A JavaScript string containing zero or more substitution strings.
	@param subst JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output. 
	*/
	export function info(obj : any, subst : any) : void;	
	/** !#en
	Creates the speed action which changes the speed of an action, making it take longer (speed > 1)
	or less (speed < 1) time. <br/>
	Useful to simulate 'slow motion' or 'fast forward' effect.
	!#zh 修改目标动作的速率。
	
	@example 
	```js
	// change the target action speed;
	var action = cc.scaleTo(0.2, 1, 0.6);
	var newAction = cc.speed(action, 0.5);
	``` 
	*/
	export function speed(action : ActionInterval, speed : number) : Action;	
	/** !#en Create a follow action which makes its target follows another node.
	!#zh 追踪目标节点的位置。
	
	@example 
	```js
	// example
	// creates the action with a set boundary
	var followAction = cc.follow(targetNode, cc.rect(0, 0, screenWidth * 2 - 100, screenHeight));
	node.runAction(followAction);
	
	// creates the action with no boundary set
	var followAction = cc.follow(targetNode);
	node.runAction(followAction);
	``` 
	*/
	export function follow(followedNode : Node, rect : Rect) : Action;	
	/** !#en Creates an action with a Cardinal Spline array of points and tension.
	!#zh 按基数样条曲线轨迹移动到目标位置。
	@param points array of control points
	
	@example 
	```js
	//create a cc.CardinalSplineTo
	var action1 = cc.cardinalSplineTo(3, array, 0);
	``` 
	*/
	export function cardinalSplineTo(duration : number, points : any[], tension : number) : ActionInterval;	
	/** !#en Creates an action with a Cardinal Spline array of points and tension.
	!#zh 按基数样条曲线轨迹移动指定的距离。 
	*/
	export function cardinalSplineBy(duration : number, points : any[], tension : number) : ActionInterval;	
	/** !#en Creates an action with a Cardinal Spline array of points and tension.
	!#zh 按 Catmull Rom 样条曲线轨迹移动到目标位置。
	
	@example 
	```js
	var action1 = cc.catmullRomTo(3, array);
	``` 
	*/
	export function catmullRomTo(dt : number, points : any[]) : ActionInterval;	
	/** !#en Creates an action with a Cardinal Spline array of points and tension.
	!#zh 按 Catmull Rom 样条曲线轨迹移动指定的距离。
	
	@example 
	```js
	var action1 = cc.catmullRomBy(3, array);
	``` 
	*/
	export function catmullRomBy(dt : number, points : any[]) : ActionInterval;	
	/** !#en
	Creates the action easing object with the rate parameter. <br />
	From slow to fast.
	!#zh 创建 easeIn 缓动对象，由慢到快。
	
	@example 
	```js
	// example
	action.easing(cc.easeIn(3.0));
	``` 
	*/
	export function easeIn(rate : number) : any;	
	/** !#en
	Creates the action easing object with the rate parameter. <br />
	From fast to slow.
	!#zh 创建 easeOut 缓动对象，由快到慢。
	
	@example 
	```js
	// example
	action.easing(cc.easeOut(3.0));
	``` 
	*/
	export function easeOut(rate : number) : any;	
	/** !#en
	Creates the action easing object with the rate parameter. <br />
	Slow to fast then to slow.
	!#zh 创建 easeInOut 缓动对象，慢到快，然后慢。
	
	@example 
	```js
	//The new usage
	action.easing(cc.easeInOut(3.0));
	``` 
	*/
	export function easeInOut(rate : number) : any;	
	/** !#en
	Creates the action easing object with the rate parameter. <br />
	Reference easeInExpo: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeExponentialIn 缓动对象。<br />
	EaseExponentialIn 是按指数函数缓动进入的动作。<br />
	参考 easeInExpo：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeExponentialIn());
	``` 
	*/
	export function easeExponentialIn() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeOutExpo: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeExponentialOut 缓动对象。<br />
	EaseExponentialOut 是按指数函数缓动退出的动作。<br />
	参考 easeOutExpo：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeExponentialOut());
	``` 
	*/
	export function easeExponentialOut() : any;	
	/** !#en
	Creates an EaseExponentialInOut action easing object. <br />
	Reference easeInOutExpo: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeExponentialInOut 缓动对象。<br />
	EaseExponentialInOut 是按指数函数缓动进入并退出的动作。<br />
	参考 easeInOutExpo：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeExponentialInOut());
	``` 
	*/
	export function easeExponentialInOut() : any;	
	/** !#en
	Creates an EaseSineIn action. <br />
	Reference easeInSine: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 EaseSineIn 缓动对象。<br />
	EaseSineIn 是按正弦函数缓动进入的动作。<br />
	参考 easeInSine：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeSineIn());
	``` 
	*/
	export function easeSineIn() : any;	
	/** !#en
	Creates an EaseSineOut action easing object. <br />
	Reference easeOutSine: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 EaseSineOut 缓动对象。<br />
	EaseSineIn 是按正弦函数缓动退出的动作。<br />
	参考 easeOutSine：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeSineOut());
	``` 
	*/
	export function easeSineOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeInOutSine: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeSineInOut 缓动对象。<br />
	EaseSineIn 是按正弦函数缓动进入并退出的动作。<br />
	参考 easeInOutSine：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeSineInOut());
	``` 
	*/
	export function easeSineInOut() : any;	
	/** !#en
	Creates the action easing obejct with the period in radians (default is 0.3). <br />
	Reference easeInElastic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeElasticIn 缓动对象。<br />
	EaseElasticIn 是按弹性曲线缓动进入的动作。<br />
	参数 easeInElastic：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeElasticIn(3.0));
	``` 
	*/
	export function easeElasticIn(period : number) : any;	
	/** !#en
	Creates the action easing object with the period in radians (default is 0.3). <br />
	Reference easeOutElastic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeElasticOut 缓动对象。<br />
	EaseElasticOut 是按弹性曲线缓动退出的动作。<br />
	参考 easeOutElastic：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeElasticOut(3.0));
	``` 
	*/
	export function easeElasticOut(period : number) : any;	
	/** !#en
	Creates the action easing object with the period in radians (default is 0.3). <br />
	Reference easeInOutElastic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeElasticInOut 缓动对象。<br />
	EaseElasticInOut 是按弹性曲线缓动进入并退出的动作。<br />
	参考 easeInOutElastic：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeElasticInOut(3.0));
	``` 
	*/
	export function easeElasticInOut(period : number) : any;	
	/** !#en
	Creates the action easing object. <br />
	Eased bounce effect at the beginning.
	!#zh
	创建 easeBounceIn 缓动对象。<br />
	EaseBounceIn 是按弹跳动作缓动进入的动作。
	
	@example 
	```js
	// example
	action.easing(cc.easeBounceIn());
	``` 
	*/
	export function easeBounceIn() : any;	
	/** !#en
	Creates the action easing object. <br />
	Eased bounce effect at the ending.
	!#zh
	创建 easeBounceOut 缓动对象。<br />
	EaseBounceOut 是按弹跳动作缓动退出的动作。
	
	@example 
	```js
	// example
	action.easing(cc.easeBounceOut());
	``` 
	*/
	export function easeBounceOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	Eased bounce effect at the begining and ending.
	!#zh
	创建 easeBounceInOut 缓动对象。<br />
	EaseBounceInOut 是按弹跳动作缓动进入并退出的动作。
	
	@example 
	```js
	// example
	action.easing(cc.easeBounceInOut());
	``` 
	*/
	export function easeBounceInOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	In the opposite direction to move slowly, and then accelerated to the right direction.
	!#zh
	创建 easeBackIn 缓动对象。<br />
	easeBackIn 是在相反的方向缓慢移动，然后加速到正确的方向。<br />
	
	@example 
	```js
	// example
	action.easing(cc.easeBackIn());
	``` 
	*/
	export function easeBackIn() : any;	
	/** !#en
	Creates the action easing object. <br />
	Fast moving more than the finish, and then slowly back to the finish.
	!#zh
	创建 easeBackOut 缓动对象。<br />
	easeBackOut 快速移动超出目标，然后慢慢回到目标点。
	
	@example 
	```js
	// example
	action.easing(cc.easeBackOut());
	``` 
	*/
	export function easeBackOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	Begining of cc.EaseBackIn. Ending of cc.EaseBackOut.
	!#zh
	创建 easeBackInOut 缓动对象。<br />
	
	@example 
	```js
	// example
	action.easing(cc.easeBackInOut());
	``` 
	*/
	export function easeBackInOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	Into the 4 reference point. <br />
	To calculate the motion curve.
	!#zh
	创建 easeBezierAction 缓动对象。<br />
	EaseBezierAction 是按贝塞尔曲线缓动的动作。
	@param p0 The first bezier parameter
	@param p1 The second bezier parameter
	@param p2 The third bezier parameter
	@param p3 The fourth bezier parameter
	
	@example 
	```js
	// example
	action.easing(cc.easeBezierAction(0.5, 0.5, 1.0, 1.0));
	``` 
	*/
	export function easeBezierAction(p0 : number, p1 : number, p2 : number, p3 : number) : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeInQuad: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeQuadraticActionIn 缓动对象。<br />
	EaseQuadraticIn是按二次函数缓动进入的动作。<br />
	参考 easeInQuad：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuadraticActionIn());
	``` 
	*/
	export function easeQuadraticActionIn() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeOutQuad: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeQuadraticActionOut 缓动对象。<br />
	EaseQuadraticOut 是按二次函数缓动退出的动作。<br />
	参考 easeOutQuad：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuadraticActionOut());
	``` 
	*/
	export function easeQuadraticActionOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeInOutQuad: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeQuadraticActionInOut 缓动对象。<br />
	EaseQuadraticInOut 是按二次函数缓动进入并退出的动作。<br />
	参考 easeInOutQuad：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuadraticActionInOut());
	``` 
	*/
	export function easeQuadraticActionInOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeIntQuart: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeQuarticActionIn 缓动对象。<br />
	EaseQuarticIn 是按四次函数缓动进入的动作。<br />
	参考 easeIntQuart：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuarticActionIn());
	``` 
	*/
	export function easeQuarticActionIn() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeOutQuart: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeQuarticActionOut 缓动对象。<br />
	EaseQuarticOut 是按四次函数缓动退出的动作。<br />
	参考 easeOutQuart：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.QuarticActionOut());
	``` 
	*/
	export function easeQuarticActionOut() : any;	
	/** !#en
	Creates the action easing object.  <br />
	Reference easeInOutQuart: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeQuarticActionInOut 缓动对象。<br />
	EaseQuarticInOut 是按四次函数缓动进入并退出的动作。<br />
	参考 easeInOutQuart：http://www.zhihu.com/question/21981571/answer/19925418 
	*/
	export function easeQuarticActionInOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeInQuint: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeQuinticActionIn 缓动对象。<br />
	EaseQuinticIn 是按五次函数缓动进的动作。<br />
	参考 easeInQuint：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuinticActionIn());
	``` 
	*/
	export function easeQuinticActionIn() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeOutQuint: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeQuinticActionOut 缓动对象。<br />
	EaseQuinticOut 是按五次函数缓动退出的动作
	参考 easeOutQuint：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuadraticActionOut());
	``` 
	*/
	export function easeQuinticActionOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeInOutQuint: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeQuinticActionInOut 缓动对象。<br />
	EaseQuinticInOut是按五次函数缓动进入并退出的动作。<br />
	参考 easeInOutQuint：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuinticActionInOut());
	``` 
	*/
	export function easeQuinticActionInOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeInCirc: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeCircleActionIn 缓动对象。<br />
	EaseCircleIn是按圆形曲线缓动进入的动作。<br />
	参考 easeInCirc：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeCircleActionIn());
	``` 
	*/
	export function easeCircleActionIn() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeOutCirc: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeCircleActionOut 缓动对象。<br />
	EaseCircleOut是按圆形曲线缓动退出的动作。<br />
	参考 easeOutCirc：http://www.zhihu.com/question/21981571/answer/19925418 
	*/
	export function easeCircleActionOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeInOutCirc: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeCircleActionInOut 缓动对象。<br />
	EaseCircleInOut 是按圆形曲线缓动进入并退出的动作。<br />
	参考 easeInOutCirc：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeCircleActionInOut());
	``` 
	*/
	export function easeCircleActionInOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeInCubic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeCubicActionIn 缓动对象。<br />
	EaseCubicIn 是按三次函数缓动进入的动作。<br />
	参考 easeInCubic：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeCubicActionIn());
	``` 
	*/
	export function easeCubicActionIn() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeOutCubic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeCubicActionOut 缓动对象。<br />
	EaseCubicOut 是按三次函数缓动退出的动作。<br />
	参考 easeOutCubic：http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeCubicActionOut());
	``` 
	*/
	export function easeCubicActionOut() : any;	
	/** !#en
	Creates the action easing object. <br />
	Reference easeInOutCubic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	!#zh
	创建 easeCubicActionInOut 缓动对象。<br />
	EaseCubicInOut是按三次函数缓动进入并退出的动作。<br />
	参考 easeInOutCubic：http://www.zhihu.com/question/21981571/answer/19925418 
	*/
	export function easeCubicActionInOut() : any;	
	/** !#en Show the Node.
	!#zh 立即显示。
	
	@example 
	```js
	// example
	var showAction = cc.show();
	``` 
	*/
	export function show() : ActionInstant;	
	/** !#en Hide the node.
	!#zh 立即隐藏。
	
	@example 
	```js
	// example
	var hideAction = cc.hide();
	``` 
	*/
	export function hide() : ActionInstant;	
	/** !#en Toggles the visibility of a node.
	!#zh 显隐状态切换。
	
	@example 
	```js
	// example
	var toggleVisibilityAction = cc.toggleVisibility();
	``` 
	*/
	export function toggleVisibility() : ActionInstant;	
	/** !#en Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
	!#zh 从父节点移除自身。
	
	@example 
	```js
	// example
	var removeSelfAction = cc.removeSelf();
	``` 
	*/
	export function removeSelf(isNeedCleanUp : boolean) : ActionInstant;	
	/** !#en Create a FlipX action to flip or unflip the target.
	!#zh X轴翻转。
	@param flip Indicate whether the target should be flipped or not
	
	@example 
	```js
	var flipXAction = cc.flipX(true);
	``` 
	*/
	export function flipX(flip : boolean) : ActionInstant;	
	/** !#en Create a FlipY action to flip or unflip the target.
	!#zh Y轴翻转。
	
	@example 
	```js
	var flipYAction = cc.flipY(true);
	``` 
	*/
	export function flipY(flip : boolean) : ActionInstant;	
	/** !#en Creates a Place action with a position.
	!#zh 放置在目标位置。
	
	@example 
	```js
	// example
	var placeAction = cc.place(cc.p(200, 200));
	var placeAction = cc.place(200, 200);
	``` 
	*/
	export function place(pos : Vec2|number, y? : number) : ActionInstant;	
	/** !#en Creates the action with the callback.
	!#zh 执行回调函数。
	@param data data for function, it accepts all data types.
	
	@example 
	```js
	// example
	// CallFunc without data
	var finish = cc.callFunc(this.removeSprite, this);
	
	// CallFunc with data
	var finish = cc.callFunc(this.removeFromParentAndCleanup, this._grossini,  true);
	``` 
	*/
	export function callFunc(selector : Function, selectorTarget? : any|void, data? : any|void) : ActionInstant;	
	/** !#en
	Helper constructor to create an array of sequenceable actions
	The created action will run actions sequentially, one after another.
	!#zh 顺序执行动作，创建的动作将按顺序依次运行。
	
	@example 
	```js
	// example
	// create sequence with actions
	var seq = cc.sequence(act1, act2);
	
	// create sequence with array
	var seq = cc.sequence(actArray);
	todo: It should be use new
	``` 
	*/
	export function sequence(tempArray : any[]|FiniteTimeAction) : ActionInterval;	
	/** !#en Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30)
	!#zh 重复动作，可以按一定次数重复一个动，如果想永远重复一个动作请使用 repeatForever 动作来完成。
	
	@example 
	```js
	// example
	var rep = cc.repeat(cc.sequence(jump2, jump1), 5);
	``` 
	*/
	export function repeat(action : FiniteTimeAction, times : number) : ActionInterval;	
	/** !#en Create a acton which repeat forever
	!#zh 永远地重复一个动作，有限次数内重复一个动作请使用 repeat 动作。
	
	@example 
	```js
	// example
	var repeat = cc.repeatForever(cc.rotateBy(1.0, 360));
	``` 
	*/
	export function repeatForever(action : FiniteTimeAction) : ActionInterval;	
	/** !#en Create a spawn action which runs several actions in parallel.
	!#zh 同步执行动作，同步执行一组动作。
	
	@example 
	```js
	// example
	var action = cc.spawn(cc.jumpBy(2, cc.p(300, 0), 50, 4), cc.rotateBy(2, 720));
	todo:It should be the direct use new
	``` 
	*/
	export function spawn(tempArray : any[]|FiniteTimeAction) : FiniteTimeAction;	
	/** !#en
	Rotates a Node object to a certain angle by modifying its rotation property. <br/>
	The direction will be decided by the shortest angle.
	!#zh 旋转到目标角度，通过逐帧修改它的 rotation 属性，旋转方向将由最短的角度决定。
	@param duration duration in seconds
	@param deltaAngleX deltaAngleX in degrees.
	@param deltaAngleY deltaAngleY in degrees.
	
	@example 
	```js
	// example
	var rotateTo = cc.rotateTo(2, 61.0);
	``` 
	*/
	export function rotateTo(duration : number, deltaAngleX : number, deltaAngleY? : number) : ActionInterval;	
	/** !#en
	Rotates a Node object clockwise a number of degrees by modifying its rotation property.
	Relative to its properties to modify.
	!#zh 旋转指定的角度。
	@param duration duration in seconds
	@param deltaAngleX deltaAngleX in degrees
	@param deltaAngleY deltaAngleY in degrees
	
	@example 
	```js
	// example
	var actionBy = cc.rotateBy(2, 360);
	``` 
	*/
	export function rotateBy(duration : number, deltaAngleX : number, deltaAngleY? : number) : ActionInterval;	
	/** !#en
	Moves a Node object x,y pixels by modifying its position property.                                  <br/>
	x and y are relative to the position of the object.                                                     <br/>
	Several MoveBy actions can be concurrently called, and the resulting                                  <br/>
	movement will be the sum of individual movements.
	!#zh 移动指定的距离。
	@param duration duration in seconds
	
	@example 
	```js
	// example
	var actionTo = cc.moveBy(2, cc.p(windowSize.width - 40, windowSize.height - 40));
	``` 
	*/
	export function moveBy(duration : number, deltaPos : Vec2|number, deltaY : number) : ActionInterval;	
	/** !#en
	Moves a Node object to the position x,y. x and y are absolute coordinates by modifying its position property. <br/>
	Several MoveTo actions can be concurrently called, and the resulting                                            <br/>
	movement will be the sum of individual movements.
	!#zh 移动到目标位置。
	@param duration duration in seconds
	
	@example 
	```js
	// example
	var actionBy = cc.moveTo(2, cc.p(80, 80));
	``` 
	*/
	export function moveTo(duration : number, position : Vec2, y : number) : ActionInterval;	
	/** !#en
	Create a action which skews a Node object to given angles by modifying its skewX and skewY properties.
	Changes to the specified value.
	!#zh 偏斜到目标角度。
	@param t time in seconds
	
	@example 
	```js
	// example
	var actionTo = cc.skewTo(2, 37.2, -37.2);
	``` 
	*/
	export function skewTo(t : number, sx : number, sy : number) : ActionInterval;	
	/** !#en
	Skews a Node object by skewX and skewY degrees. <br />
	Relative to its property modification.
	!#zh 偏斜指定的角度。
	@param t time in seconds
	@param sx sx skew in degrees for X axis
	@param sy sy skew in degrees for Y axis
	
	@example 
	```js
	// example
	var actionBy = cc.skewBy(2, 0, -90);
	``` 
	*/
	export function skewBy(t : number, sx : number, sy : number) : ActionInterval;	
	/** !#en
	Moves a Node object simulating a parabolic jump movement by modifying it's position property.
	Relative to its movement.
	!#zh 用跳跃的方式移动指定的距离。
	
	@example 
	```js
	// example
	var actionBy = cc.jumpBy(2, cc.p(300, 0), 50, 4);
	var actionBy = cc.jumpBy(2, 300, 0, 50, 4);
	``` 
	*/
	export function jumpBy(duration : number, position : Vec2|number, y? : number, height : number, jumps : number) : ActionInterval;	
	/** !#en
	Moves a Node object to a parabolic position simulating a jump movement by modifying its position property. <br />
	Jump to the specified location.
	!#zh 用跳跃的方式移动到目标位置。
	
	@example 
	```js
	// example
	var actionTo = cc.jumpTo(2, cc.p(300, 300), 50, 4);
	var actionTo = cc.jumpTo(2, 300, 300, 50, 4);
	``` 
	*/
	export function jumpTo(duration : number, position : Vec2|number, y? : number, height : number, jumps : number) : ActionInterval;	
	/** !#en
	An action that moves the target with a cubic Bezier curve by a certain distance.
	Relative to its movement.
	!#zh 按贝赛尔曲线轨迹移动指定的距离。
	@param t time in seconds
	@param c Array of points
	
	@example 
	```js
	// example
	var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
	var bezierForward = cc.bezierBy(3, bezier);
	``` 
	*/
	export function bezierBy(t : number, c : any[]) : ActionInterval;	
	/** !#en An action that moves the target with a cubic Bezier curve to a destination point.
	!#zh 按贝赛尔曲线轨迹移动到目标位置。
	@param c array of points
	
	@example 
	```js
	// example
	var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
	var bezierTo = cc.bezierTo(2, bezier);
	``` 
	*/
	export function bezierTo(t : number, c : any[]) : ActionInterval;	
	/** !#en Scales a Node object to a zoom factor by modifying it's scale property.
	!#zh 将节点大小缩放到指定的倍数。
	@param sx scale parameter in X
	@param sy scale parameter in Y, if Null equal to sx
	
	@example 
	```js
	// example
	// It scales to 0.5 in both X and Y.
	var actionTo = cc.scaleTo(2, 0.5);
	
	// It scales to 0.5 in x and 2 in Y
	var actionTo = cc.scaleTo(2, 0.5, 2);
	``` 
	*/
	export function scaleTo(duration : number, sx : number, sy? : number) : ActionInterval;	
	/** !#en
	Scales a Node object a zoom factor by modifying it's scale property.
	Relative to its changes.
	!#zh 按指定的倍数缩放节点大小。
	@param duration duration in seconds
	@param sx sx  scale parameter in X
	@param sy sy scale parameter in Y, if Null equal to sx
	
	@example 
	```js
	// example without sy, it scales by 2 both in X and Y
	var actionBy = cc.scaleBy(2, 2);
	
	//example with sy, it scales by 0.25 in X and 4.5 in Y
	var actionBy2 = cc.scaleBy(2, 0.25, 4.5);
	``` 
	*/
	export function scaleBy(duration : number, sx : number, sy? : number|void) : ActionInterval;	
	/** !#en Blinks a Node object by modifying it's visible property.
	!#zh 闪烁（基于透明度）。
	@param duration duration in seconds
	@param blinks blinks in times
	
	@example 
	```js
	// example
	var action = cc.blink(2, 10);
	``` 
	*/
	export function blink(duration : number, blinks : number) : ActionInterval;	
	/** !#en
	Fades an object that implements the cc.RGBAProtocol protocol.
	It modifies the opacity from the current value to a custom one.
	!#zh 修改透明度到指定值。
	@param opacity 0-255, 0 is transparent
	
	@example 
	```js
	// example
	var action = cc.fadeTo(1.0, 0);
	``` 
	*/
	export function fadeTo(duration : number, opacity : number) : ActionInterval;	
	/** !#en Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.
	!#zh 渐显效果。
	@param duration duration in seconds
	
	@example 
	```js
	//example
	var action = cc.fadeIn(1.0);
	``` 
	*/
	export function fadeIn(duration : number) : ActionInterval;	
	/** !#en Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
	!#zh 渐隐效果。
	@param d duration in seconds
	
	@example 
	```js
	// example
	var action = cc.fadeOut(1.0);
	``` 
	*/
	export function fadeOut(d : number) : ActionInterval;	
	/** !#en Tints a Node that implements the cc.NodeRGB protocol from current tint to a custom one.
	!#zh 修改颜色到指定值。
	@param red 0-255
	@param green 0-255
	@param blue 0-255
	
	@example 
	```js
	// example
	var action = cc.tintTo(2, 255, 0, 255);
	``` 
	*/
	export function tintTo(duration : number, red : number, green : number, blue : number) : ActionInterval;	
	/** !#en
	Tints a Node that implements the cc.NodeRGB protocol from current tint to a custom one.
	Relative to their own color change.
	!#zh 按照指定的增量修改颜色。
	@param duration duration in seconds
	
	@example 
	```js
	// example
	var action = cc.tintBy(2, -127, -255, -127);
	``` 
	*/
	export function tintBy(duration : number, deltaRed : number, deltaGreen : number, deltaBlue : number) : ActionInterval;	
	/** !#en Delays the action a certain amount of seconds.
	!#en 延迟指定的时间量。
	@param d duration in seconds
	
	@example 
	```js
	// example
	var delay = cc.delayTime(1);
	``` 
	*/
	export function delayTime(d : number) : ActionInterval;	
	/** !#en Executes an action in reverse order, from time=duration to time=0.
	!#zh 反转目标动作的时间轴。
	
	@example 
	```js
	// example
	 var reverse = cc.reverseTime(this);
	``` 
	*/
	export function reverseTime(action : FiniteTimeAction) : ActionInterval;	
	/** !#en Create an action with the specified action and forced target.
	!#zh 用已有动作和一个新的目标节点创建动作。 
	*/
	export function targetedAction(target : Node, action : FiniteTimeAction) : ActionInterval;	
	/** Constructor 
	*/
	export function HashElement() : void;	
	/** !#en cc.view is the shared view object.
	!#zh cc.view 是全局的视图对象。 */
	export var view : View;	
	/** !#en Director
	!#zh 导演类。 */
	export var director : Director;	
	/** !#en cc.winSize is the alias object for the size of the current game window.
	!#zh cc.winSize 为当前的游戏窗口的大小。 */
	export var winSize : Size;	
	export var game : Game;	
	/** Checks whether subclass is child of superclass or equals to superclass 
	*/
	export function isChildClassOf(subclass : Function, superclass : Function) : boolean;	
	/** !#en Defines a CCClass using the given specification, please see [Class](/en/scripting/class/) for details.
	!#zh 定义一个 CCClass，传入参数必须是一个包含类型参数的字面量对象，具体用法请查阅[类型定义](/zh/scripting/class/)。
	
	@example 
	```js
	// define base class
	var Node = cc.Class();
	
	// define sub class
	var Sprite = cc.Class({
	name: 'Sprite',
	extends: Node,
	ctor: function () {
	this.url = "";
	this.id = 0;
	},
	
	properties {
	width: {
	default: 128,
	type: 'Integer',
	tooltip: 'The width of sprite'
	},
	height: 128,
	size: {
	get: function () {
	return cc.v2(this.width, this.height);
	}
	}
	},
	
	load: function () {
	// load this.url
	};
	});
	
	// instantiate
	
	var obj = new Sprite();
	obj.url = 'sprite.png';
	obj.load();
	
	// define static member
	
	Sprite.count = 0;
	Sprite.getBounds = function (spriteList) {
	// ...
	};
	``` 
	*/
	export function Class(options : { name? : string; extends? : Function; ctor? : Function; properties? : any; statics? : any; mixins? : Function[]; editor? : any; update? : Function; lateUpdate? : Function; onLoad? : Function; start? : Function; onEnable? : Function; onDisable? : Function; onDestroy? : Function; onFocusInEditor? : Function; onLostFocusInEditor? : Function; onRestore? : Function; _getLocalBounds? : Function; }) : Function;	
	/** whether enable accelerometer event 
	*/
	export function setAccelerometerEnabled(isEnable : boolean) : void;	
	/** set accelerometer interval value 
	*/
	export function setAccelerometerInterval(interval : number) : void;	
	/** !#en Checks whether the object is non-nil and not yet destroyed.
	!#zh 检查该对象是否不为 null 并且尚未销毁。
	
	@example 
	```js
	cc.log(cc.isValid(target));
	``` 
	*/
	export function isValid(value : any) : boolean;	
	/** Specify that the input value must be integer in Inspector.
	Also used to indicates that the elements in array should be type integer. */
	export var Integer : string;	
	/** Indicates that the elements in array should be type double. */
	export var Float : string;	
	/** Indicates that the elements in array should be type boolean. */
	export var Boolean : string;	
	/** Indicates that the elements in array should be type string. */
	export var String : string;	
	/** !#en Deserialize json to cc.Asset
	!#zh 将 JSON 反序列化为对象实例。
	
	当指定了 target 选项时，如果 target 引用的其它 asset 的 uuid 不变，则不会改变 target 对 asset 的引用，
	也不会将 uuid 保存到 result 对象中。
	@param data the serialized cc.Asset json string or json object.
	@param result additional loading result 
	*/
	export function deserialize(data : string|any, result? : Details, options? : any) : any;	
	/** !#en Clones the object original and returns the clone.
	
	See [Clone exists Entity](/en/scripting/create-destroy-entities/#instantiate)
	
	!#zh 复制给定的对象
	
	详细用法可参考[复制已有Entity](/zh/scripting/create-destroy-entities/#instantiate)
	
	Instantiate 时，function 和 dom 等非可序列化对象会直接保留原有引用，Asset 会直接进行浅拷贝，可序列化类型会进行深拷贝。
	<del>对于 Entity / Component 等 Scene Object，如果对方也会被一起 Instantiate，则重定向到新的引用，否则保留为原来的引用。</del>
	@param original An existing object that you want to make a copy of. 
	*/
	export function instantiate(original : any) : any;	
	/** Finds a node by hierarchy path, the path is case-sensitive.
	It will traverse the hierarchy by splitting the path using '/' character.
	This function will still returns the node even if it is inactive.
	It is recommended to not use this function every frame instead cache the result at startup. 
	*/
	export function find(path : string, referenceNode? : Node) : Node;	
	/** !#en
	Define an enum type. <br/>
	If a enum item has a value of -1, it will be given an Integer number according to it's order in the list.<br/>
	Otherwise it will use the value specified by user who writes the enum definition.
	
	!#zh
	定义一个枚举类型。<br/>
	用户可以把枚举值设为任意的整数，如果设为 -1，系统将会分配为上一个枚举值 + 1。
	@param obj a JavaScript literal object containing enum names and values
	
	@example 
	```js
	var WrapMode = cc.Enum({
	    Repeat: -1,
	    Clamp: -1
	});
	
	// Texture.WrapMode.Repeat == 0
	// Texture.WrapMode.Clamp == 1
	// Texture.WrapMode[0] == "Repeat"
	// Texture.WrapMode[1] == "Clamp"
	
	var FlagType = cc.Enum({
	    Flag1: 1,
	    Flag2: 2,
	    Flag3: 4,
	    Flag4: 8,
	});
	
	var AtlasSizeList = cc.Enum({
	    128: 128,
	    256: 256,
	    512: 512,
	    1024: 1024,
	});
	``` 
	*/
	export function Enum(obj : any) : any;	
	/** !#en
	The convenience method to create a new {{#crossLink "Color/Color:method"}}cc.Color{{/crossLink}}
	Alpha channel is optional. Default value is 255.
	
	!#zh
	通过该方法来创建一个新的 {{#crossLink "Color/Color:method"}}cc.Color{{/crossLink}} 对象。
	Alpha 通道是可选的。默认值是 255。
	
	@example 
	```js
	-----------------------
	// 1. All channels seperately as parameters
	var color1 = new cc.Color(255, 255, 255, 255);
	// 2. Convert a hex string to a color
	var color2 = new cc.Color("#000000");
	// 3. An color object as parameter
	var color3 = new cc.Color({r: 255, g: 255, b: 255, a: 255});
	
	``` 
	*/
	export function color(r? : number, g? : number, b? : number, a? : number) : Color;	
	/** !#en returns true if both ccColor3B are equal. Otherwise it returns false.
	!#zh 判断两个颜色对象的 RGB 部分是否相等，不比较透明度。
	
	@example 
	```js
	cc.log(cc.colorEqual(cc.Color.RED, new cc.Color(255, 0, 0))); // true
	``` 
	*/
	export function colorEqual(color1: (r: number, g: number, b: number, a: number) => void, color2: (r: number, g: number, b: number, a: number) => void) : boolean;	
	/** !#en
	convert a string of color for style to Color.
	e.g. "#ff06ff"  to : cc.color(255,6,255)。
	!#zh 16 进制转换为 Color
	
	@example 
	```js
	cc.hexToColor("#FFFF33"); // Color {r: 255, g: 255, b: 51, a: 255};
	``` 
	*/
	export function hexToColor(hex : string) : Color;	
	/** !#en
	convert Color to a string of color for style.
	e.g.  cc.color(255,6,255)  to : "#ff06ff"
	!#zh Color 转换为 16进制。
	
	@example 
	```js
	var color = new cc.Color(255, 6, 255)
	cc.colorToHex(color); // #ff06ff;
	``` 
	*/
	export function colorToHex(color: (r: number, g: number, b: number, a: number) => void) : string;	
	/** !#en Returns opposite of Vec2.
	!#zh 返回相反的向量。
	
	@example 
	```js
	cc.pNeg(cc.v2(10, 10));// Vec2 {x: -10, y: -10};
	``` 
	*/
	export function pNeg(point : Vec2) : Vec2;	
	/** !#en Calculates sum of two points.
	!#zh 返回两个向量的和。
	
	@example 
	```js
	cc.pAdd(cc.v2(1, 1), cc.v2(2, 2));// Vec2 {x: 3, y: 3};
	``` 
	*/
	export function pAdd(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** !#en Calculates difference of two points.
	!#zh 返回两个向量的差。
	
	@example 
	```js
	cc.pSub(cc.v2(20, 20), cc.v2(5, 5)); // Vec2 {x: 15, y: 15};
	``` 
	*/
	export function pSub(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** !#en Returns point multiplied by given factor.
	!#zh 向量缩放。
	
	@example 
	```js
	cc.pMult(cc.v2(5, 5), 4); // Vec2 {x: 20, y: 20};
	``` 
	*/
	export function pMult(point : Vec2, floatVar : number) : Vec2;	
	/** !#en Calculates midpoint between two points.
	!#zh 两个向量之间的中心点。
	
	@example 
	```js
	cc.pMidpoint(cc.v2(10, 10), cc.v2(5, 5)); // Vec2 {x: 7.5, y: 7.5};
	``` 
	*/
	export function pMidpoint(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** !#en Calculates dot product of two points.
	!#zh 两个向量之间进行点乘。
	
	@example 
	```js
	cc.pDot(cc.v2(20, 20), cc.v2(5, 5)); // 200;
	``` 
	*/
	export function pDot(v1 : Vec2, v2 : Vec2) : number;	
	/** !#en Calculates cross product of two points.
	!#zh 两个向量之间进行叉乘。
	
	@example 
	```js
	cc.pCross(cc.v2(20, 20), cc.v2(5, 5)); // 0;
	``` 
	*/
	export function pCross(v1 : Vec2, v2 : Vec2) : number;	
	/** !#en Calculates perpendicular of v, rotated 90 degrees counter-clockwise -- cross(v, perp(v)) greater than 0.
	!#zh 返回逆时针旋转 90 度后的新向量。
	
	@example 
	```js
	cc.pPerp(cc.v2(20, 20)); // Vec2 {x: -20, y: 20};
	``` 
	*/
	export function pPerp(point : Vec2) : Vec2;	
	/** !#en Calculates perpendicular of v, rotated 90 degrees clockwise -- cross(v, rperp(v)) smaller than 0.
	!#zh 将指定向量顺时针旋转 90 度并返回。
	
	@example 
	```js
	cc.pRPerp(cc.v2(20, 20)); // Vec2 {x: 20, y: -20};
	``` 
	*/
	export function pRPerp(point : Vec2) : Vec2;	
	/** !#en Calculates the projection of v1 over v2.
	!#zh 返回 v1 在 v2 上的投影向量。
	
	@example 
	```js
	var v1 = cc.v2(20, 20);
	var v2 = cc.v2(5, 5);
	cc.pProject(v1, v2); // Vec2 {x: 20, y: 20};
	``` 
	*/
	export function pProject(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** !#en Calculates the square length of a cc.Vec2 (not calling sqrt() ).
	!#zh 返回指定向量长度的平方。
	
	@example 
	```js
	cc.pLengthSQ(cc.v2(20, 20)); // 800;
	``` 
	*/
	export function pLengthSQ(v : Vec2) : number;	
	/** !#en Calculates the square distance between two points (not calling sqrt() ).
	!#zh 返回两个点之间距离的平方。
	
	@example 
	```js
	var point1 = cc.v2(20, 20);
	var point2 = cc.v2(5, 5);
	cc.pDistanceSQ(point1, point2); // 450;
	``` 
	*/
	export function pDistanceSQ(point1 : Vec2, point2 : Vec2) : number;	
	/** !#en Calculates distance between point an origin.
	!#zh 返回指定向量的长度.
	
	@example 
	```js
	cc.pLength(cc.v2(20, 20)); // 28.284271247461902;
	``` 
	*/
	export function pLength(v : Vec2) : number;	
	/** !#en Calculates the distance between two points.
	!#zh 返回指定 2 个向量之间的距离。
	
	@example 
	```js
	var v1 = cc.v2(20, 20);
	var v2 = cc.v2(5, 5);
	cc.pDistance(v1, v2); // 21.213203435596427;
	``` 
	*/
	export function pDistance(v1 : Vec2, v2 : Vec2) : number;	
	/** !#en Returns this vector with a magnitude of 1.
	!#zh 返回一个长度为 1 的标准化过后的向量。
	
	@example 
	```js
	cc.pNormalize(cc.v2(20, 20)); // Vec2 {x: 0.7071067811865475, y: 0.7071067811865475};
	``` 
	*/
	export function pNormalize(v : Vec2) : Vec2;	
	/** !#en Converts radians to a normalized vector.
	!#zh 将弧度转换为一个标准化后的向量，返回坐标 x = cos(a) , y = sin(a)。
	
	@example 
	```js
	cc.pForAngle(20); // Vec2 {x: 0.40808206181339196, y: 0.9129452507276277};
	``` 
	*/
	export function pForAngle(a : number) : Vec2;	
	/** !#en Converts a vector to radians.
	!#zh 返回指定向量的弧度。
	
	@example 
	```js
	cc.pToAngle(cc.v2(20, 20)); // 0.7853981633974483;
	``` 
	*/
	export function pToAngle(v : Vec2) : number;	
	/** !#en Clamp a value between from and to.
	!#zh
	限定浮点数的最大最小值。<br/>
	数值大于 max_inclusive 则返回 max_inclusive。<br/>
	数值小于 min_inclusive 则返回 min_inclusive。<br/>
	否则返回自身。
	
	@example 
	```js
	var v1 = cc.clampf(20, 0, 20); // 20;
	var v2 = cc.clampf(-1, 0, 20); //  0;
	var v3 = cc.clampf(10, 0, 20); // 10;
	``` 
	*/
	export function clampf(value : number, min_inclusive : number, max_inclusive : number) : number;	
	/** !#en Clamp a value between 0 and 1.
	!#zh 限定浮点数的取值范围为 0 ~ 1 之间。
	
	@example 
	```js
	var v1 = cc.clampf(20);  // 1;
	var v2 = cc.clampf(-1);  // 0;
	var v3 = cc.clampf(0.5); // 0.5;
	``` 
	*/
	export function clamp01(value : number) : number;	
	/** !#en Clamp a point between from and to.
	!#zh
	返回指定限制区域后的向量。<br/>
	向量大于 max_inclusive 则返回 max_inclusive。<br/>
	向量小于 min_inclusive 则返回 min_inclusive。<br/>
	否则返回自身。
	
	@example 
	```js
	var min_inclusive = cc.v2(0, 0);
	var max_inclusive = cc.v2(20, 20);
	var v1 = cc.pClamp(cc.v2(20, 20), min_inclusive, max_inclusive); // Vec2 {x: 20, y: 20};
	var v2 = cc.pClamp(cc.v2(0, 0), min_inclusive, max_inclusive);   // Vec2 {x: 0, y: 0};
	var v3 = cc.pClamp(cc.v2(10, 10), min_inclusive, max_inclusive); // Vec2 {x: 10, y: 10};
	``` 
	*/
	export function pClamp(p : Vec2, min_inclusive : Vec2, max_inclusive : Vec2) : Vec2;	
	/** !#en Quickly convert cc.Size to a cc.Vec2.
	!#zh 快速转换 cc.Size 为 cc.Vec2。
	
	@example 
	```js
	cc.pFromSize(new cc.size(20, 20)); // Vec2 {x: 20, y: 20};
	``` 
	*/
	export function pFromSize(s : Size) : Vec2;	
	/** !#en
	Run a math operation function on each point component <br />
	Math.abs, Math.fllor, Math.ceil, Math.round.
	!#zh 通过运行指定的数学运算函数来计算指定的向量。
	
	@example 
	```js
	cc.pCompOp(cc.p(-10, -10), Math.abs); // Vec2 {x: 10, y: 10};
	``` 
	*/
	export function pCompOp(p : Vec2, opFunc : Function) : Vec2;	
	/** !#en
	Linear Interpolation between two points a and b.<br />
	alpha == 0 ? a <br />
	alpha == 1 ? b <br />
	otherwise a value between a..b.
	!#zh
	两个点 A 和 B 之间的线性插值。 <br />
	alpha == 0 ? a <br />
	alpha == 1 ? b <br />
	否则这个数值在 a ~ b 之间。
	
	@example 
	```js
	cc.pLerp(cc.v2(20, 20), cc.v2(5, 5), 0.5); // Vec2 {x: 12.5, y: 12.5};
	``` 
	*/
	export function pLerp(a : Vec2, b : Vec2, alpha : number) : Vec2;	
	/** !#en TODO
	!#zh
	近似判断两个点是否相等。<br/>
	判断 2 个向量是否在指定数值的范围之内，如果在则返回 true，反之则返回 false。
	
	@example 
	```js
	var a = cc.v2(20, 20);
	var b = cc.v2(5, 5);
	var b1 = cc.pFuzzyEqual(a, b, 10); // false;
	var b2 = cc.pFuzzyEqual(a, b, 18); // true;
	``` 
	*/
	export function pFuzzyEqual(a : Vec2, b : Vec2, variance : number) : boolean;	
	/** !#en Multiplies a nd b components, a.x*b.x, a.y*b.y.
	!#zh 计算两个向量的每个分量的乘积， a.x * b.x, a.y * b.y。
	
	@example 
	```js
	cc.pCompMult(acc.v2(20, 20), cc.v2(5, 5)); // Vec2 {x: 100, y: 100};
	``` 
	*/
	export function pCompMult(a : Vec2, b : Vec2) : Vec2;	
	/** !#en TODO
	!#zh 返回两个向量之间带正负号的弧度。 
	*/
	export function pAngleSigned(a : Vec2, b : Vec2) : number;	
	/** !#en TODO
	!#zh 获取当前向量与指定向量之间的弧度角。 
	*/
	export function pAngle(a : Vec2, b : Vec2) : number;	
	/** !#en Rotates a point counter clockwise by the angle around a pivot.
	!#zh 返回给定向量围绕指定轴心顺时针旋转一定弧度后的结果。
	@param v v is the point to rotate
	@param pivot pivot is the pivot, naturally
	@param angle angle is the angle of rotation cw in radians 
	*/
	export function pRotateByAngle(v : Vec2, pivot : Vec2, angle : number) : Vec2;	
	/** !#en
	A general line-line intersection test
	indicating successful intersection of a line<br />
	note that to truly test intersection for segments we have to make<br />
	sure that s & t lie within [0..1] and for rays, make sure s & t > 0<br />
	the hit point is        p3 + t * (p4 - p3);<br />
	the hit point also is    p1 + s * (p2 - p1);
	!#zh
	返回 A 为起点 B 为终点线段 1 所在直线和 C 为起点 D 为终点线段 2 所在的直线是否相交，<br />
	如果相交返回 true，反之则为 false，参数 retP 是返回交点在线段 1、线段 2 上的比例。
	@param A A is the startpoint for the first line P1 = (p1 - p2).
	@param B B is the endpoint for the first line P1 = (p1 - p2).
	@param C C is the startpoint for the second line P2 = (p3 - p4).
	@param D D is the endpoint for the second line P2 = (p3 - p4).
	@param retP retP.x is the range for a hitpoint in P1 (pa = p1 + s*(p2 - p1)), <br />
	retP.y is the range for a hitpoint in P3 (pa = p2 + t*(p4 - p3)). 
	*/
	export function pLineIntersect(A : Vec2, B : Vec2, C : Vec2, D : Vec2, retP : Vec2) : boolean;	
	/** !#en ccpSegmentIntersect return YES if Segment A-B intersects with segment C-D.
	!#zh 返回线段 A - B 和线段 C - D 是否相交。 
	*/
	export function pSegmentIntersect(A : Vec2, B : Vec2, C : Vec2, D : Vec2) : boolean;	
	/** !#en ccpIntersectPoint return the intersection point of line A-B, C-D.
	!#zh 返回线段 A - B 和线段 C - D 的交点。 
	*/
	export function pIntersectPoint(A : Vec2, B : Vec2, C : Vec2, D : Vec2) : Vec2;	
	/** !#en check to see if both points are equal.
	!#zh 检查指定的 2 个向量是否相等。
	@param A A ccp a
	@param B B ccp b to be compared 
	*/
	export function pSameAs(A : Vec2, B : Vec2) : boolean;	
	/** !#en sets the position of the point to 0.
	!#zh 设置指定向量归 0。 
	*/
	export function pZeroIn(v : Vec2) : void;	
	/** !#en copies the position of one point to another.
	!#zh 令 v1 向量等同于 v2。 
	*/
	export function pIn(v1 : Vec2, v2 : Vec2) : void;	
	/** !#en multiplies the point with the given factor (inplace).
	!#zh 向量缩放，结果保存到第一个向量。 
	*/
	export function pMultIn(point : Vec2, floatVar : number) : void;	
	/** !#en subtracts one point from another (inplace).
	!#zh 向量减法，结果保存到第一个向量。 
	*/
	export function pSubIn(v1 : Vec2, v2 : Vec2) : void;	
	/** !#en adds one point to another (inplace).
	!#zh 向量加法，结果保存到第一个向量。 
	*/
	export function pAddIn(v1 : Vec2, v2 : Vec2) : void;	
	/** !#en normalizes the point (inplace).
	!#zh 规范化 v 向量，设置 v 向量长度为 1。 
	*/
	export function pNormalizeIn(v : Vec2) : void;	
	/** !#en
	The convenience method to create a new Rect.
	see {{#crossLink "Rect/Rect:method"}}cc.Rect{{/crossLink}}
	!#zh
	该方法用来快速创建一个新的矩形。{{#crossLink "Rect/Rect:method"}}cc.Rect{{/crossLink}}
	
	@example 
	```js
	var a = new cc.rect(0 , 0, 10, 0);
	``` 
	*/
	export function rect(x? : Number[]|number, y? : number, w? : number, h? : number) : Rect;	
	/** !#en Check whether a rect's value equals to another.
	!#zh 判断两个矩形是否相等。
	@param rect1 !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	@param rect2 !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(0, 0, 10, 10);
	var b = new cc.rect(0, 0, 5, 5);
	cc.rectEqualToRect(a, b); // false;
	var c = new cc.rect(0, 0, 5, 5);
	cc.rectEqualToRect(b, c); // true;
	``` 
	*/
	export function rectEqualToRect(rect1: (x: number, y: number, w: number, h: number) => void, rect2: (x: number, y: number, w: number, h: number) => void) : boolean;	
	/** !#en Check whether the rect1 contains rect2.
	!#zh
	检查 rect1 矩形是否包含 rect2 矩形。 <br/>
	注意：如果要允许 rect1 和 rect2 的边界重合，应该用 cc.rectOverlapsRect
	@param rect1 !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	@param rect2 !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(0, 0, 20, 20);
	var b = new cc.rect(10, 10, 20, 20);
	cc.rectContainsRect(a, b); // true;
	``` 
	*/
	export function rectContainsRect(rect1: (x: number, y: number, w: number, h: number) => void, rect2: (x: number, y: number, w: number, h: number) => void) : boolean;	
	/** !#en Returns the rightmost x-value of a rect.
	!#zh 返回矩形在 x 轴上的最大值
	@param rect !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(10, 0, 20, 20);
	cc.rectGetMaxX(a); // 30;
	``` 
	*/
	export function rectGetMaxX(rect: (x: number, y: number, w: number, h: number) => void) : number;	
	/** !#en Return the midpoint x-value of a rect.
	!#zh 返回矩形在 x 轴上的中点。
	@param rect !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(10, 0, 20, 20);
	cc.rectGetMidX(a); // 20;
	``` 
	*/
	export function rectGetMidX(rect: (x: number, y: number, w: number, h: number) => void) : number;	
	/** !#en Returns the leftmost x-value of a rect.
	!#zh 返回矩形在 x 轴上的最小值。
	@param rect !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(10, 0, 20, 20);
	cc.rectGetMinX(a); // 10;
	``` 
	*/
	export function rectGetMinX(rect: (x: number, y: number, w: number, h: number) => void) : number;	
	/** !#en Return the topmost y-value of a rect.
	!#zh 返回矩形在 y 轴上的最大值。
	@param rect !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(0, 10, 20, 20);
	cc.rectGetMaxY(a); // 30;
	``` 
	*/
	export function rectGetMaxY(rect: (x: number, y: number, w: number, h: number) => void) : number;	
	/** !#en Return the midpoint y-value of `rect'.
	!#zh 返回矩形在 y 轴上的中点。
	@param rect !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(0, 10, 20, 20);
	cc.rectGetMidY(a); // 20;
	``` 
	*/
	export function rectGetMidY(rect: (x: number, y: number, w: number, h: number) => void) : number;	
	/** !#en Return the bottommost y-value of a rect.
	!#zh 返回矩形在 y 轴上的最小值。
	@param rect !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(0, 10, 20, 20);
	cc.rectGetMinY(a); // 10;
	``` 
	*/
	export function rectGetMinY(rect: (x: number, y: number, w: number, h: number) => void) : number;	
	/** !#en Check whether a rect contains a point.
	!#zh 检查一个矩形是否包含某个坐标点。
	@param rect !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(0, 10, 20, 20);
	var b = cc.v2(0, 10, 10, 10);
	cc.rectContainsPoint(a, b); // true;
	``` 
	*/
	export function rectContainsPoint(rect: (x: number, y: number, w: number, h: number) => void, point : Vec2) : boolean;	
	/** !#en Check whether a rect intersect with another.
	!#zh 检查一个矩形是否与另一个相交。
	@param rectA !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	@param rectB !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(0, 10, 20, 20);
	var b = new cc.rect(0, 10, 10, 10);
	cc.rectIntersectsRect(a, b); // true;
	``` 
	*/
	export function rectIntersectsRect(rectA: (x: number, y: number, w: number, h: number) => void, rectB: (x: number, y: number, w: number, h: number) => void) : boolean;	
	/** !#en Check whether a rect overlaps another.
	!#zh 检查一个矩形是否重叠另一个。
	@param rectA !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	@param rectB !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(0, 10, 20, 20);
	var b = new cc.rect(0, 10, 10, 10);
	cc.rectOverlapsRect(a, b); // true;
	``` 
	*/
	export function rectOverlapsRect(rectA: (x: number, y: number, w: number, h: number) => void, rectB: (x: number, y: number, w: number, h: number) => void) : boolean;	
	/** !#en Returns the smallest rectangle that contains the two source rectangles.
	!#zh 返回一个包含两个指定矩形的最小矩形。
	@param rectA !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	@param rectB !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(0, 10, 20, 20);
	var b = new cc.rect(0, 10, 10, 10);
	cc.rectUnion(a, b); // Rect {x: 0, y: 10, width: 20, height: 20};
	``` 
	*/
	export function rectUnion(rectA: (x: number, y: number, w: number, h: number) => void, rectB: (x: number, y: number, w: number, h: number) => void) : Rect;	
	/** !#en Returns the overlapping portion of 2 rectangles.
	!#zh 返回 2 个矩形重叠的部分。
	@param rectA !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	@param rectB !#en
	Constructor of cc.Rect class.
	see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
	!#zh
	cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
	
	@example 
	```js
	var a = new cc.rect(0, 10, 20, 20);
	var b = new cc.rect(0, 10, 10, 10);
	cc.rectIntersection(a, b); // Rect {x: 0, y: 10, width: 10, height: 10};
	``` 
	*/
	export function rectUnion(rectA: (x: number, y: number, w: number, h: number) => void, rectB: (x: number, y: number, w: number, h: number) => void) : Rect;	
	export function V3F_C4B_T2F_QuadZero() : V3F_C4B_T2F_Quad;	
	/**  
	*/
	export function V3F_C4B_T2F_QuadCopy(sourceQuad: (tl: V3F_C4B_T2F, bl: V3F_C4B_T2F, tr: V3F_C4B_T2F, br: V3F_C4B_T2F, arrayBuffer: any[], offset: number) => void) : V3F_C4B_T2F_Quad;	
	/**  
	*/
	export function V3F_C4B_T2F_QuadsCopy(sourceQuads : any[]) : any[];	
	/** !#en The convenience method to create a new {{#crossLink "Vec2"}}cc.Vec2{{/crossLink}}.
	!#zh 通过该简便的函数进行创建 {{#crossLink "Vec2"}}cc.Vec2{{/crossLink}} 对象。
	
	@example 
	```js
	var v1 = cc.v2();
	var v2 = cc.v2(0, 0);
	var v3 = cc.v2(v2);
	var v4 = cc.v2({x: 100, y: 100});
	``` 
	*/
	export function v2(x? : number|any, y? : number) : Vec2;	
	/** !#en The convenience method to creates a new {{#crossLink "Vec2"}}cc.Vec2{{/crossLink}}.
	!#zh 通过该简便的函数进行创建 {{#crossLink "Vec2"}}cc.Vec2{{/crossLink}} 对象。
	@param x a Number or a size object
	
	@example 
	```js
	var point1 = cc.p();
	var point2 = cc.p(100, 100);
	var point3 = cc.p(point2);
	var point4 = cc.p({x: 100, y: 100});
	``` 
	*/
	export function p(x? : number|any, y? : number) : Vec2;	
	/** !#en Check whether a point's value equals to another.
	!#zh 判断两个向量是否相等。
	@param point1 !#en
	Constructor
	see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
	!#zh
	构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
	@param point2 !#en
	Constructor
	see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
	!#zh
	构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}} 
	*/
	export function pointEqualToPoint(point1: (x: number, y: number) => void, point2: (x: number, y: number) => void) : boolean;	
	/** Enum for debug modes. */
	export enum DebugMode {		
		NONE = 0,
		INFO = 0,
		WARN = 0,
		ERROR = 0,
		INFO_FOR_WEB_PAGE = 0,
		WARN_FOR_WEB_PAGE = 0,
		ERROR_FOR_WEB_PAGE = 0,	
	}		
		/** !#en Base class cc.Action for action classes.
		!#zh Action 类是所有动作类型的基类。 */
		export class Action {		
		/** !#en
		to copy object with deep copy.
		returns a clone of action.
		!#zh 返回一个克隆的动作。 
		*/
		clone() : Action;		
		/** !#en
		return true if the action has finished.
		!#zh 如果动作已完成就返回 true。 
		*/
		isDone() : boolean;		
		/** !#en get the target.
		!#zh 获取当前目标节点。 
		*/
		getTarget() : Node;		
		/** !#en The action will modify the target properties.
		!#zh 设置目标节点。 
		*/
		setTarget(target : Node) : void;		
		/** !#en get the original target.
		!#zh 获取原始目标节点。 
		*/
		getOriginalTarget() : Node;		
		/** !#en get tag number.
		!#zh 获取用于识别动作的标签。 
		*/
		getTag() : number;		
		/** !#en set tag number.
		!#zh 设置标签，用于识别动作。 
		*/
		setTag(tag : number) : void;		
		/** !#en Default Action tag.
		!#zh 默认动作标签。 */
		TAG_INVALID : number;	
	}		
		/** !#en
		Base class actions that do have a finite time duration. <br/>
		Possible actions: <br/>
		- An action with a duration of 0 seconds. <br/>
		- An action with a duration of 35.5 seconds.
		
		Infinite time actions are valid
		!#zh 有限时间动作，这种动作拥有时长 duration 属性。 */
		export class FiniteTimeAction extends Action {		
		/** !#en get duration of the action. (seconds).
		!#zh 获取动作以秒为单位的持续时间。 
		*/
		getDuration() : number;		
		/** !#en set duration of the action. (seconds).
		!#zh 设置动作以秒为单位的持续时间。 
		*/
		setDuration(duration : number) : void;		
		/** !#en
		Returns a reversed action. <br />
		For example: <br />
		- The action will be x coordinates of 0 move to 100. <br />
		- The reversed action will be x of 100 move to 0.
		- Will be rewritten
		!#zh 返回一个新的动作，执行与原动作完全相反的动作。 
		*/
		reverse() : void;		
		/** !#en
		to copy object with deep copy.
		returns a clone of action.
		!#zh 返回一个克隆的动作。 
		*/
		clone() : FiniteTimeAction;	
	}		
		/** !#en Base class for Easing actions.
		!#zh 所有缓动动作基类，用于修饰 ActionInterval。 */
		export class ActionEase extends ActionInterval {	
	}		
		/** !#en Base class for Easing actions with rate parameters
		!#zh 拥有速率属性的缓动动作基类。 */
		export class EaseRateAction extends ActionEase {	
	}		
		/** !#en Ease Elastic abstract class.
		!#zh 弹性缓动动作基类。 */
		export class EaseElastic extends ActionEase {	
	}		
		/** !#en cc.EaseBounce abstract class.
		!#zh 反弹缓动动作基类。 */
		export class EaseBounce extends ActionEase {	
	}		
		/** !#en Instant actions are immediate actions. They don't have a duration like the ActionInterval actions.
		!#zh 即时动作，这种动作立即就会执行，继承自 FiniteTimeAction。 */
		export class ActionInstant extends FiniteTimeAction {	
	}		
		/** !#en
		<p> An interval action is an action that takes place within a certain period of time. <br/>
		It has an start time, and a finish time. The finish time is the parameter<br/>
		duration plus the start time.</p>
		
		<p>These CCActionInterval actions have some interesting properties, like:<br/>
		- They can run normally (default)  <br/>
		- They can run reversed with the reverse method   <br/>
		- They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p>
		
		<p>For example, you can simulate a Ping Pong effect running the action normally and<br/>
		then running it again in Reverse mode. </p>
		!#zh 时间间隔动作，这种动作在已定时间内完成，继承 FiniteTimeAction。 */
		export class ActionInterval extends FiniteTimeAction {		
		/** !#en Implementation of ease motion.
		!#zh 缓动运动。
		
		@example 
		
		action.easeing(cc.easeIn(3.0));,```js
		action.easeing(cc.easeIn(3.0));
		``` 
		*/
		easing(easeObj : any) : ActionInterval;		
		/** !#en
		Repeats an action a number of times.
		To repeat an action forever use the CCRepeatForever action.
		!#zh 重复动作可以按一定次数重复一个动作，使用 RepeatForever 动作来永远重复一个动作。 
		*/
		repeat(times : void) : ActionInterval;		
		/** !#en
		Repeats an action for ever.  <br/>
		To repeat the an action for a limited number of times use the Repeat action. <br/>
		!#zh 永远地重复一个动作，有限次数内重复一个动作请使用 Repeat 动作。 
		*/
		repeatForever() : ActionInterval;	
	}		
		/** !#en cc.audioEngine is the singleton object, it provide simple audio APIs.
		!#zn
		cc.audioengine是单例对象。<br/>
		主要用来播放背景音乐和音效，背景音乐同一时间只能播放一个，而音效则可以同时播放多个。<br/>
		注意：<br/>
		在 Android 系统浏览器上，不同浏览器，不同版本的效果不尽相同。<br/>
		比如说：大多数浏览器都需要用户物理交互才可以开始播放音效，有一些不支持 WebAudio，<br/>
		有一些不支持多音轨播放。总之如果对音乐依赖比较强，请做尽可能多的测试。 */
		export class audioEngine {		
		/** !#en Play music.
		!#zh
		播放指定音乐，并可以设置是否循环播放。<br/>
		注意：音乐播放接口不支持多音轨，同一时间只能播放一个音乐。
		@param url The path of the music file without filename extension.
		@param loop Whether the music loop or not.
		
		@example 
		```js
		//example
		cc.audioEngine.playMusic(path, false);
		``` 
		*/
		playMusic(url : string, loop : boolean) : void;		
		/** !#en Stop playing music.
		!#zh 停止当前音乐。
		@param releaseData If release the music data or not.As default value is false.
		
		@example 
		```js
		//example
		cc.audioEngine.stopMusic();
		``` 
		*/
		stopMusic(releaseData? : boolean) : void;		
		/** !#en Pause playing music.
		!#zh 暂停正在播放音乐。
		
		@example 
		```js
		//example
		cc.audioEngine.pauseMusic();
		``` 
		*/
		pauseMusic() : void;		
		/** !#en Resume playing music.
		!#zh 恢复音乐播放。
		
		@example 
		```js
		//example
		cc.audioEngine.resumeMusic();
		``` 
		*/
		resumeMusic() : void;		
		/** !#en Rewind playing music.
		!#zh 从头开始重新播放当前音乐。
		
		@example 
		```js
		//example
		cc.audioEngine.rewindMusic();
		``` 
		*/
		rewindMusic() : void;		
		/** !#en The volume of the music max value is 1.0,the min value is 0.0 .
		!#zh 获取音量（0.0 ~ 1.0）。
		
		@example 
		```js
		//example
		var volume = cc.audioEngine.getMusicVolume();
		``` 
		*/
		getMusicVolume() : number;		
		/** !#en Set the volume of music.
		!#zh 设置音量（0.0 ~ 1.0）。
		@param volume Volume must be in 0.0~1.0 .
		
		@example 
		```js
		//example
		cc.audioEngine.setMusicVolume(0.5);
		``` 
		*/
		setMusicVolume(volume : number) : void;		
		/** !#en Whether the music is playing.
		!#zh 音乐是否正在播放。
		
		@example 
		```js
		//example
		 if (cc.audioEngine.isMusicPlaying()) {
		     cc.log("music is playing");
		 }
		 else {
		     cc.log("music is not playing");
		 }
		``` 
		*/
		isMusicPlaying() : boolean;		
		/** !#en Play sound effect.
		!#zh
		播放指定音效，并可以设置是否循环播放。<br/>
		注意：在部分不支持多音轨的浏览器上，这个接口会失效，请使用 playMusic
		@param url The path of the sound effect with filename extension.
		@param loop Whether to loop the effect playing, default value is false
		
		@example 
		```js
		//example
		var soundId = cc.audioEngine.playEffect(path);
		``` 
		*/
		playEffect(url : string, loop : boolean) : number;		
		/** !#en Set the volume of sound effects.
		!#zh 设置音效音量（0.0 ~ 1.0）。
		@param volume Volume must be in 0.0~1.0 .
		
		@example 
		```js
		//example
		cc.audioEngine.setEffectsVolume(0.5);
		``` 
		*/
		setEffectsVolume(volume : number) : void;		
		/** !#en The volume of the effects max value is 1.0,the min value is 0.0 .
		!#zh 获取音效音量（0.0 ~ 1.0）。
		
		@example 
		```js
		//example
		var effectVolume = cc.audioEngine.getEffectsVolume();
		``` 
		*/
		getEffectsVolume() : number;		
		/** !#en Pause playing sound effect.
		!#zh 暂停指定的音效。
		@param audio The return value of function playEffect.
		
		@example 
		```js
		//example
		cc.audioEngine.pauseEffect(audioID);
		``` 
		*/
		pauseEffect(audio : number) : void;		
		/** !#en Pause all playing sound effect.
		!#zh 暂停现在正在播放的所有音效。
		
		@example 
		```js
		//example
		cc.audioEngine.pauseAllEffects();
		``` 
		*/
		pauseAllEffects() : void;		
		/** !#en Resume playing sound effect.
		!#zh 恢复播放指定的音效。
		@param audioID The return value of function playEffect. 
		*/
		resumeEffect(audioID : number) : void;		
		/** !#en Resume all playing sound effect.
		!#zh 恢复播放所有之前暂停的所有音效。
		
		@example 
		```js
		//example
		cc.audioEngine.resumeAllEffects();
		``` 
		*/
		resumeAllEffects() : void;		
		/** !#en Stop playing sound effect.
		!#zh 停止播放指定音效。
		@param audioID The return value of function playEffect.
		
		@example 
		```js
		//example
		cc.audioEngine.stopEffect(audioID);
		``` 
		*/
		stopEffect(audioID : number) : void;		
		/** !#en Stop all playing sound effects.
		!#zh 停止正在播放的所有音效。
		
		@example 
		```js
		//example
		cc.audioEngine.stopAllEffects();
		``` 
		*/
		stopAllEffects() : void;		
		/** !#en Unload the preloaded effect from internal buffer.
		!#zh 卸载预加载的音效。
		
		@example 
		```js
		//example
		cc.audioEngine.unloadEffect(EFFECT_FILE);
		``` 
		*/
		unloadEffect(url : string) : void;		
		/** !#en End music and effects.
		!#zh 停止所有音乐和音效的播放。 
		*/
		end() : void;	
	}		
		/** !#en Class for animation data handling.
		!#zh 动画剪辑，用于存储动画数据。 */
		export class AnimationClip extends Asset {		
		constructor();		
		/** !#en Duration of this animation.
		!#zh 动画的持续时间。 */
		duration : number;		
		/** !#en FrameRate of this animation.
		!#zh 动画的帧速率。 */
		sample : number;		
		/** !#en Speed of this animation.
		!#zh 动画的播放速度。 */
		speed : number;		
		/** !#en WrapMode of this animation.
		!#zh 动画的循环模式。 */
		wrapMode : WrapMode;		
		/** !#en Curve data.
		!#zh 曲线数据。 */
		curveData : any;		
		/** !#en Event data.
		!#zh 事件数据。 */
		events : any[];	
	}		
		/** !#en
		The AnimationState gives full control over animation playback process.
		In most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control.
		!#zh
		AnimationState 完全控制动画播放过程。<br/>
		大多数情况下 动画组件 是足够和易于使用的。如果您需要更多的动画控制接口，请使用 AnimationState。 */
		export class AnimationState extends AnimationNode {		
		constructor();		
		/**  
		*/
		AnimationState(clip : AnimationClip, name? : string) : AnimationState;		
		/** !#en The clip that is being played by this animation state.
		!#zh 此动画状态正在播放的剪辑。 */
		clip : AnimationClip;		
		/** !#en The name of the playing animation.
		!#zh 动画的名字 */
		name : string;	
	}		
		/** undefined */
		export class Playable {		
		constructor();		
		/** !#en Is playing or paused in play mode?
		!#zh 当前是否正在播放。 */
		isPlaying : boolean;		
		/** !#en Is currently paused? This can be true even if in edit mode(isPlaying == false).
		!#zh 当前是否正在暂停 */
		isPaused : boolean;		
		/** !#en Play this animation.
		!#zh 播放动画。 
		*/
		play() : void;		
		/** !#en Stop this animation.
		!#zh 停止动画播放。 
		*/
		stop() : void;		
		/** !#en Pause this animation.
		!#zh 暂停动画。 
		*/
		pause() : void;		
		/** !#en Resume this animation.
		!#zh 重新播放动画。 
		*/
		resume() : void;		
		/** !#en Perform a single frame step.
		!#zh 执行一帧动画。 
		*/
		step() : void;	
	}	
	/** !#en Specifies how time is treated when it is outside of the keyframe range of an Animation.
	!#zh 动画使用的循环模式。 */
	export enum WrapMode {		
		Default = 0,
		Normal = 0,
		Reverse = 0,
		Loop = 0,
		LoopReverse = 0,
		PingPong = 0,
		PingPongReverse = 0,	
	}		
		/** !#en The abstract interface for all playing animation.
		!#zh 所有播放动画的抽象接口。 */
		export class AnimationNodeBase extends Playable {		
		constructor();		
		/** !#en The curves list.
		!#zh 曲线列表。 */
		curves : AnimCurve[];		
		/** !#en The start delay which represents the number of seconds from an animation's start time to the start of
		the active interval.
		!#zh 延迟多少秒播放。 */
		delay : number;		
		/** !#en The animation's iteration count property.
		
		A real number greater than or equal to zero (including positive infinity) representing the number of times
		to repeat the animation node.
		
		Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
		calculations.
		
		!#zh 迭代次数，指动画播放多少次后结束, normalize time。 如 2.5（2次半） */
		repeatCount : number;		
		/** !#en The iteration duration of this animation in seconds. (length)
		!#zh 单次动画的持续时间，秒。 */
		duration : number;		
		/** !#en The animation's playback speed. 1 is normal playback speed.
		!#zh 播放速率。 */
		speed : number;		
		/** !#en Wrapping mode of the playing animation.
		!#zh 动画循环方式。 */
		wrapMode : WrapMode;		
		/** !#en The current time of this animation in seconds.
		!#zh 动画当前的时间，秒。 */
		time : number;	
	}		
		/** !#en Render the TMX layer.
		!#zh 渲染 TMX layer。 */
		export class TiledLayer extends _SGComponent {		
		/** !#en Gets the layer name.
		!#zh 获取层的名称。
		
		@example 
		```js
		var layerName = tiledLayer.getLayerName();
		cc.log(layerName);
		``` 
		*/
		getLayerName() : string;		
		/** !#en Set the layer name.
		!#zh 设置层的名称
		
		@example 
		```js
		tiledLayer.setLayerName("New Layer");
		``` 
		*/
		SetLayerName(layerName : string) : void;		
		/** !#en Return the value for the specific property name.
		!#zh 获取指定属性名的值。
		
		@example 
		```js
		var property = tiledLayer.getProperty("info");
		cc.log(property);
		``` 
		*/
		getProperty(propertyName : string) : any;		
		/** !#en Returns the position in pixels of a given tile coordinate.
		!#zh 获取指定 tile 的像素坐标。
		@param pos position or x
		
		@example 
		```js
		var pos = tiledLayer.getPositionAt(cc.v2(0, 0));
		cc.log("Pos: " + pos);
		var pos = tiledLayer.getPositionAt(0, 0);
		cc.log("Pos: " + pos);
		``` 
		*/
		getPositionAt(pos : Vec2|number, y? : number) : Vec2;		
		/** !#en Removes a tile at given tile coordinate.
		!#zh 删除指定坐标上的 tile。
		@param pos position or x
		
		@example 
		```js
		tiledLayer.removeTileAt(cc.v2(0, 0));
		tiledLayer.removeTileAt(0, 0);
		``` 
		*/
		removeTileAt(pos : Vec2|number, y? : number) : void;		
		/** !#en
		Sets the tile gid (gid = tile global id) at a given tile coordinate.<br />
		The Tile GID can be obtained by using the method "tileGIDAt" or by using the TMX editor . Tileset Mgr +1.<br />
		If a tile is already placed at that position, then it will be removed.
		!#zh
		设置给定坐标的 tile 的 gid (gid = tile 全局 id)，
		tile 的 GID 可以使用方法 “tileGIDAt” 来获得。<br />
		如果一个 tile 已经放在那个位置，那么它将被删除。
		@param posOrX position or x
		@param flagsOrY flags or y
		
		@example 
		```js
		tiledLayer.setTileGID(1001, 10, 10, 1)
		``` 
		*/
		setTileGID(gid : number, posOrX : Vec2|number, flagsOrY : number, flags? : number) : void;		
		/** !#en
		Returns the tile gid at a given tile coordinate. <br />
		if it returns 0, it means that the tile is empty. <br />
		This method requires the the tile map has not been previously released (eg. don't call layer.releaseMap())<br />
		!#zh
		通过给定的 tile 坐标、flags（可选）返回 tile 的 GID. <br />
		如果它返回 0，则表示该 tile 为空。<br />
		该方法要求 tile 地图之前没有被释放过(如：没有调用过layer.releaseMap()).
		@param pos or x
		
		@example 
		```js
		var tileGid = tiledLayer.getTileGIDAt(0, 0);
		``` 
		*/
		getTileGIDAt(pos : Vec2|number, y? : number) : number;		
		/** !#en
		Returns the tile (_ccsg.Sprite) at a given a tile coordinate. <br/>
		The returned _ccsg.Sprite will be already added to the _ccsg.TMXLayer. Don't add it again.<br/>
		The _ccsg.Sprite can be treated like any other _ccsg.Sprite: rotated, scaled, translated, opacity, color, etc. <br/>
		You can remove either by calling: <br/>
		- layer.removeChild(sprite, cleanup); <br/>
		- or layer.removeTileAt(ccp(x,y));
		!#zh
		通过指定的 tile 坐标获取对应的 tile(Sprite)。 返回的 tile(Sprite) 应是已经添加到 TMXLayer，请不要重复添加。<br/>
		这个 tile(Sprite) 如同其他的 Sprite 一样，可以旋转、缩放、翻转、透明化、设置颜色等。<br/>
		你可以通过调用以下方法来对它进行删除:<br/>
		1. layer.removeChild(sprite, cleanup);<br/>
		2. 或 layer.removeTileAt(cc.v2(x,y));
		@param pos or x
		
		@example 
		```js
		var title = tiledLayer.getTileAt(100, 100);
		cc.log(title);
		``` 
		*/
		getTileAt(pos : Vec2|number, y? : number) : _ccsg.Sprite;		
		/** !#en
		Dealloc the map that contains the tile position from memory. <br />
		Unless you want to know at runtime the tiles positions, you can safely call this method. <br />
		If you are going to call layer.getTileGIDAt() then, don't release the map.
		!#zh
		从内存中释放包含 tile 位置信息的地图。<br />
		除了在运行时想要知道 tiles 的位置信息外，你都可安全的调用此方法。<br />
		如果你之后还要调用 layer.tileGIDAt(), 请不要释放地图.
		
		@example 
		```js
		tiledLayer.releaseMap();
		``` 
		*/
		releaseMap() : void;		
		/** !#en Sets the untransformed size of the _ccsg.TMXLayer.
		!#zh 设置未转换的 layer 大小。
		@param size The untransformed size of the _ccsg.TMXLayer or The untransformed size's width of the TMXLayer.
		@param height The untransformed size's height of the _ccsg.TMXLayer.
		
		@example 
		```js
		tiledLayer.setContentSize(100, 100);
		``` 
		*/
		setContentSize(size : Size|number, height? : number) : void;		
		/** !#en Return texture of cc.SpriteBatchNode.
		!#zh 获取纹理。
		
		@example 
		```js
		var texture = tiledLayer.getTexture();
		cc.log("Texture: " + texture);
		``` 
		*/
		getTexture() : Texture2D;		
		/** !#en Set the texture of cc.SpriteBatchNode.
		!#zh 设置纹理。
		
		@example 
		```js
		tiledLayer.setTexture(texture);
		``` 
		*/
		setTexture(texture : Texture2D) : void;		
		/** !#en Gets layer size.
		!#zh 获得层大小。
		
		@example 
		```js
		var size = tiledLayer.getLayerSize();
		cc.log("layer size: " + size);
		``` 
		*/
		getLayerSize() : Size;		
		/** !#en Set layer size.
		!#zh 设置层大小。
		
		@example 
		```js
		tiledLayer.setLayerSize(new cc.size(5, 5));
		``` 
		*/
		setLayerSize(layerSize : Size) : void;		
		/** !#en Size of the map's tile (could be different from the tile's size).
		!#zh 获取 tile 的大小( tile 的大小可能会有所不同)。
		
		@example 
		```js
		var mapTileSize = tiledLayer.getMapTileSize();
		cc.log("MapTile size: " + mapTileSize);
		``` 
		*/
		getMapTileSize() : Size;		
		/** !#en Set the map tile size.
		!#zh 设置 tile 的大小。
		
		@example 
		```js
		tiledLayer.setMapTileSize(new cc.size(10, 10));
		``` 
		*/
		setMapTileSize(tileSize : Size) : void;		
		/** !#en Pointer to the map of tiles.
		!#zh 获取地图 tiles。
		
		@example 
		```js
		var tiles = tiledLayer.getTiles();
		``` 
		*/
		getTiles() : any[];		
		/** !#en Pointer to the map of tiles.
		!#zh 设置地图 tiles
		
		@example 
		```js
		tiledLayer.setTiles(tiles);
		``` 
		*/
		setTiles(tiles : any[]) : void;		
		/** !#en Tile set information for the layer.
		!#zh 获取 layer 的 Tileset 信息。
		
		@example 
		```js
		var tileset = tiledLayer.getTileset();
		``` 
		*/
		getTileset() : TMXTilesetInfo;		
		/** !#en Tile set information for the layer.
		!#zh 设置 layer 的 Tileset 信息。
		
		@example 
		```js
		tiledLayer.getTileset(tileset);
		``` 
		*/
		setTileset(tileset : TMXTilesetInfo) : void;		
		/** !#en Layer orientation, which is the same as the map orientation.
		!#zh 获取 Layer 方向(同地图方向)。
		
		@example 
		```js
		var orientation = tiledLayer.getLayerOrientation();
		cc.log("Layer Orientation: " + orientation);
		``` 
		*/
		getLayerOrientation() : number;		
		/** !#en Layer orientation, which is the same as the map orientation.
		!#zh 设置 Layer 方向(同地图方向)。
		
		@example 
		```js
		tiledLayer.setLayerOrientation(TiledMap.Orientation.ORTHO);
		``` 
		*/
		setLayerOrientation(orientation : TiledMap.Orientation) : void;		
		/** !#en properties from the layer. They can be added using Tiled.
		!#zh 获取 layer 的属性，可以使用 Tiled 编辑器添加属性。
		
		@example 
		```js
		var properties = tiledLayer.getProperties();
		cc.log("Properties: " + properties);
		``` 
		*/
		getProperties() : any[];		
		/** !#en properties from the layer. They can be added using Tiled.
		!#zh 设置层属性。
		
		@example 
		```js
		tiledLayer.setLayerOrientation(properties);
		``` 
		*/
		setProperties(properties : any[]) : void;	
	}		
		/** !#en Renders a TMX Tile Map in the scene.
		!#zh 在场景中渲染一个 tmx 格式的 Tile Map。 */
		export class TiledMap extends Component {		
		/** !#en The tmx file.
		!#zh tmx 文件。 */
		tmxFile : string;		
		/** !#en The event handler to be called when the map is loaded.
		!#zh 在加载在地图时要调用的事件处理程序。 */
		mapLoaded : Component.EventHandler;		
		/** !#en Gets the map size.
		!#zh 获取地图大小。
		
		@example 
		```js
		var mapSize = tiledMap.getMapSize();
		cc.log("Map Size: " + mapSize);
		``` 
		*/
		getMapSize() : Size;		
		/** !#en Set the map size.
		!#zh 设置地图大小。
		
		@example 
		```js
		tiledMap.setMapSize(new cc.size(960, 640));
		``` 
		*/
		setMapSize(mapSize : Size) : void;		
		/** !#en Gets the tile size.
		!#zh 获取地图背景中 tile 元素的大小。
		
		@example 
		```js
		var tileSize = tiledMap.getTileSize();
		cc.log("Tile Size: " + tileSize);
		``` 
		*/
		getTileSize() : Size;		
		/** !#en Set the tile size.
		!#zh 设置地图背景中 tile 元素的大小。
		
		@example 
		```js
		tiledMap.setTileSize(new cc.size(10, 10));
		``` 
		*/
		setTileSize(tileSize : Size) : void;		
		/** !#en map orientation.
		!#zh 获取地图方向。
		
		@example 
		```js
		var mapOrientation = tiledMap.getMapOrientation();
		cc.log("Map Orientation: " + mapOrientation);
		``` 
		*/
		getMapOrientation() : number;		
		/** !#en map orientation.
		!#zh 设置地图方向。
		
		@example 
		```js
		tiledMap.setMapOrientation(TiledMap.Orientation.ORTHO);
		``` 
		*/
		setMapOrientation(orientation : TiledMap.Orientation) : void;		
		/** !#en object groups.
		!#zh 获取所有的对象层。
		
		@example 
		```js
		var objGroups = titledMap.getObjectGroups();
		for (var i = 0; i < objGroups.length; ++i) {
		    cc.log("obj: " + objGroups[i]);
		}
		``` 
		*/
		getObjectGroups() : any[];		
		/** !#en object groups.
		!#zh 设置所有的对象层。
		
		@example 
		```js
		titledMap.setObjectGroups(groups);
		``` 
		*/
		setObjectGroups(groups : any[]) : void;		
		/** !#en Gets the map properties.
		!#zh 获取地图的属性。
		
		@example 
		```js
		var properties = titledMap.getProperties();
		for (var i = 0; i < properties.length; ++i) {
		    cc.log("Properties: " + properties[i]);
		}
		``` 
		*/
		getProperties() : any[];		
		/** !#en Set the map properties.
		!#zh 设置地图的属性。
		
		@example 
		```js
		titledMap.setProperties(properties);
		``` 
		*/
		setProperties(properties : any[]) : void;		
		/** !#en Return All layers array.
		!#zh 返回包含所有 layer 的数组。
		
		@example 
		```js
		var layers = titledMap.allLayers();
		for (var i = 0; i < layers.length; ++i) {
		    cc.log("Layers: " + layers[i]);
		}
		``` 
		*/
		allLayers() : Node[];		
		/** !#en return the cc.TiledLayer for the specific layer.
		!#zh 获取指定名称的 layer。
		
		@example 
		```js
		var layer = titledMap.getLayer("Player");
		cc.log(layer);
		``` 
		*/
		getLayer(layerName : string) : TiledLayer;		
		/** !#en Return the TMXObjectGroup for the specific group.
		!#zh 获取指定的 TMXObjectGroup。
		
		@example 
		```js
		var group = titledMap.getObjectGroup("Players");
		cc.log("ObjectGroup: " + group);
		``` 
		*/
		getObjectGroup(groupName : string) : TMXObjectGroup;		
		/** !#en Return the value for the specific property name.
		!#zh 通过属性名称，获取指定的属性。
		
		@example 
		```js
		var property = titledMap.getProperty("info");
		cc.log("Property: " + property);
		``` 
		*/
		getProperty(propertyName : string) : string;		
		/** !#en Return properties dictionary for tile GID.
		!#zh 通过 GID ，获取指定的属性。
		
		@example 
		```js
		var properties = titledMap.getPropertiesForGID(GID);
		cc.log("Properties: " + properties);
		``` 
		*/
		getPropertiesForGID(GID : number) : any;	
	}		
		/** Particle System base class. <br/>
		Attributes of a Particle System:<br/>
		 - emmision rate of the particles<br/>
		 - Gravity Mode (Mode A): <br/>
		 - gravity <br/>
		 - direction <br/>
		 - speed +-  variance <br/>
		 - tangential acceleration +- variance<br/>
		 - radial acceleration +- variance<br/>
		 - Radius Mode (Mode B):      <br/>
		 - startRadius +- variance    <br/>
		 - endRadius +- variance      <br/>
		 - rotate +- variance         <br/>
		 - Properties common to all modes: <br/>
		 - life +- life variance      <br/>
		 - start spin +- variance     <br/>
		 - end spin +- variance       <br/>
		 - start size +- variance     <br/>
		 - end size +- variance       <br/>
		 - start color +- variance    <br/>
		 - end color +- variance      <br/>
		 - life +- variance           <br/>
		 - blending function          <br/>
		 - texture                    <br/>
		<br/>
		cocos2d also supports particles generated by Particle Designer (http://particledesigner.71squared.com/).<br/>
		'Radius Mode' in Particle Designer uses a fixed emit rate of 30 hz. Since that can't be guarateed in cocos2d,  <br/>
		cocos2d uses a another approach, but the results are almost identical.<br/>
		cocos2d supports all the variables used by Particle Designer plus a bit more:  <br/>
		 - spinning particles (supported when using ParticleSystem)       <br/>
		 - tangential acceleration (Gravity mode)                               <br/>
		 - radial acceleration (Gravity mode)                                   <br/>
		 - radius direction (Radius mode) (Particle Designer supports outwards to inwards direction only) <br/>
		It is possible to customize any of the above mentioned properties in runtime. Example:   <br/> */
		export class ParticleSystem extends cc._RendererUnderSG {		
		/** !#en Play particle in edit mode.
		!#zh 在编辑器模式下预览粒子，启用后选中粒子时，粒子将自动播放。 */
		preview : boolean;		
		/** !#en
		If set custom to true, then use custom properties insteadof read particle file.
		!#zh 是否自定义粒子属性。 */
		custom : boolean;		
		/** !#en The plist file.
		!#zh plist 格式的粒子配置文件。 */
		file : string;		
		/** . */
		texture : Texture2D;		
		/** !#en Current quantity of particles that are being simulated.
		!#zh 当前播放的粒子数量。 */
		particleCount : number;		
		/** !#en Specify the source Blend Factor.
		!#zh 指定原图混合模式。 */
		srcBlendFactor : BlendFactor;		
		/** !#en Specify the destination Blend Factor.
		!#zh 指定目标的混合模式。 */
		dstBlendFactor : BlendFactor;		
		/** !#en If set to true, the particle system will automatically start playing on onLoad.
		!#zh 如果设置为 true 运行时会自动发射粒子。 */
		playOnLoad : boolean;		
		/** !#en Indicate whether the owner node will be auto-removed when it has no particles left.
		!#zh 粒子播放完毕后自动销毁所在的节点。 */
		autoRemoveOnFinish : boolean;		
		/** !#en Indicate whether the particle system is activated.
		!#zh 是否激活粒子。 */
		active : boolean;		
		/** !#en Maximum particles of the system.
		!#zh 粒子最大数量。 */
		totalParticles : number;		
		/** !#en How many seconds the emitter wil run. -1 means 'forever'.
		!#zh 发射器生存时间，单位秒，-1表示持续发射。 */
		duration : number;		
		/** !#en Emission rate of the particles.
		!#zh 每秒发射的粒子数目。 */
		emissionRate : number;		
		/** !#en Life of each particle setter.
		!#zh 粒子的运行时间。 */
		life : number;		
		/** !#en Variation of life.
		!#zh 粒子的运行时间变化范围。 */
		lifeVar : number;		
		/** !#en Start color of each particle.
		!#zh 粒子初始颜色。 */
		startColor : Color;		
		/** !#en Variation of the start color.
		!#zh 粒子初始颜色变化范围。 */
		startColorVar : Color;		
		/** !#en Ending color of each particle.
		!#zh 粒子结束颜色。 */
		endColor : Color;		
		/** !#en Variation of the end color.
		!#zh 粒子结束颜色变化范围。 */
		endColorVar : Color;		
		/** !#en Angle of each particle setter.
		!#zh 粒子角度。 */
		angle : number;		
		/** !#en Variation of angle of each particle setter.
		!#zh 粒子角度变化范围。 */
		angleVar : number;		
		/** !#en Start size in pixels of each particle.
		!#zh 粒子的初始大小。 */
		startSize : number;		
		/** !#en Variation of start size in pixels.
		!#zh 粒子初始大小的变化范围。 */
		startSizeVar : number;		
		/** !#en End size in pixels of each particle.
		!#zh 粒子结束时的大小。 */
		endSize : number;		
		/** !#en Variation of end size in pixels.
		!#zh 粒子结束大小的变化范围。 */
		endSizeVar : number;		
		/** !#en Start angle of each particle.
		!#zh 粒子开始自旋角度。 */
		startSpin : number;		
		/** !#en Variation of start angle.
		!#zh 粒子开始自旋角度变化范围。 */
		startSpinVar : number;		
		/** !#en End angle of each particle.
		!#zh 粒子结束自旋角度。 */
		endSpin : number;		
		/** !#en Variation of end angle.
		!#zh 粒子结束自旋角度变化范围。 */
		endSpinVar : number;		
		/** !#en Source position of the emitter.
		!#zh 发射器位置。 */
		sourcePos : Vec2;		
		/** !#en Variation of source position.
		!#zh 发射器位置的变化范围。（横向和纵向） */
		posVar : Vec2;		
		/** !#en Particles movement type.
		!#zh 粒子位置类型。 */
		positionType : ParticleSystem.PositionType;		
		/** !#en Particles emitter modes.
		!#zh 发射器类型。 */
		emitterMode : ParticleSystem.EmitterMode;		
		/** !#en Gravity of the emitter.
		!#zh 重力。 */
		gravity : Vec2;		
		/** !#en Speed of the emitter.
		!#zh 速度。 */
		speed : number;		
		/** !#en Variation of the speed.
		!#zh 速度变化范围。 */
		speedVar : number;		
		/** !#en Tangential acceleration of each particle. Only available in 'Gravity' mode.
		!#zh 每个粒子的切向加速度，即垂直于重力方向的加速度，只有在重力模式下可用。 */
		tangentialAccel : number;		
		/** !#en Variation of the tangential acceleration.
		!#zh 每个粒子的切向加速度变化范围。 */
		tangentialAccelVar : number;		
		/** !#en Acceleration of each particle. Only available in 'Gravity' mode.
		!#zh 粒子径向加速度，即平行于重力方向的加速度，只有在重力模式下可用。 */
		radialAccel : number;		
		/** !#en Variation of the radial acceleration.
		!#zh 粒子径向加速度变化范围。 */
		radialAccelVar : number;		
		/** !#en Indicate whether the rotation of each particle equals to its direction. Only available in 'Gravity' mode.
		!#zh 每个粒子的旋转是否等于其方向，只有在重力模式下可用。 */
		rotationIsDir : boolean;		
		/** !#en Starting radius of the particles. Only available in 'Radius' mode.
		!#zh 初始半径，表示粒子出生时相对发射器的距离，只有在半径模式下可用。 */
		startRadius : number;		
		/** !#en Variation of the starting radius.
		!#zh 初始半径变化范围。 */
		startRadiusVar : number;		
		/** !#en Ending radius of the particles. Only available in 'Radius' mode.
		!#zh 结束半径，只有在半径模式下可用。 */
		endRadius : number;		
		/** !#en Variation of the ending radius.
		!#zh 结束半径变化范围。 */
		endRadiusVar : number;		
		/** !#en Number of degress to rotate a particle around the source pos per second. Only available in 'Radius' mode.
		!#zh 粒子每秒围绕起始点的旋转角度，只有在半径模式下可用。 */
		rotatePerS : number;		
		/** !#en Variation of the degress to rotate a particle around the source pos per second.
		!#zh 粒子每秒围绕起始点的旋转角度变化范围。 */
		rotatePerSVar : number;		
		/** !#en The Particle emitter lives forever.
		!#zh 表示发射器永久存在 */
		DURATION_INFINITY : number;		
		/** !#en The starting size of the particle is equal to the ending size.
		!#zh 表示粒子的起始大小等于结束大小。 */
		START_SIZE_EQUAL_TO_END_SIZE : number;		
		/** !#en The starting radius of the particle is equal to the ending radius.
		!#zh 表示粒子的起始半径等于结束半径。 */
		START_RADIUS_EQUAL_TO_END_RADIUS : number;		
		/** !#en Add a particle to the emitter.
		!#zh 添加一个粒子到发射器中。 
		*/
		addParticle() : boolean;		
		/** !#en Stop emitting particles. Running particles will continue to run until they die.
		!#zh 停止发射器发射粒子，发射出去的粒子将继续运行，直至粒子生命结束。
		
		@example 
		```js
		// stop particle system.
		myParticleSystem.stopSystem();
		``` 
		*/
		stopSystem() : void;		
		/** !#en Kill all living particles.
		!#zh 杀死所有存在的粒子，然后重新启动粒子发射器。
		
		@example 
		```js
		// play particle system.
		myParticleSystem.resetSystem();
		``` 
		*/
		resetSystem() : void;		
		/** !#en Whether or not the system is full.
		!#zh 发射器中粒子是否大于等于设置的总粒子数量。 
		*/
		isFull() : boolean;		
		/** !#en
		<p> Sets a new CCSpriteFrame as particle.</br>
		WARNING: this method is experimental. Use setTextureWithRect instead.
		</p>
		!#zh
		<p> 设置一个新的精灵帧为粒子。</br>
		警告：这个函数只是试验，请使用 setTextureWithRect 实现。
		</p> 
		*/
		setDisplayFrame(spriteFrame : SpriteFrame) : void;		
		/** !#en Sets a new texture with a rect. The rect is in texture position and size.
		!#zh 设置一张新贴图和关联的矩形。 
		*/
		setTextureWithRect(texture : Texture2D, rect : Rect) : void;	
	}		
		/** cc.ActionManager is a class that can manage actions.<br/>
		Normally you won't need to use this class directly. 99% of the cases you will use the CCNode interface,
		which uses this class's singleton object.
		But there are some cases where you might need to use this class. <br/>
		Examples:<br/>
		- When you want to run an action where the target is different from a CCNode.<br/>
		- When you want to pause / resume the actions<br/> */
		export class ActionManager {		
		/** If the target is already present, then the action will be added to the existing target.
		If the target is not present, a new instance of this target will be created either paused or not, and the action will be added to the newly created target.
		When the target is paused, the queued actions won't be 'ticked'. 
		*/
		addAction(action : Action, target : Node, paused : boolean) : void;		
		/** Removes all actions from all the targets. 
		*/
		removeAllActions() : void;		
		/** All the actions that belongs to the target will be removed. 
		*/
		removeAllActionsFromTarget(target : any, forceDelete : boolean) : void;		
		/**  
		*/
		removeAction(action : Action) : void;		
		/**  
		*/
		removeActionByTag(tag : number, target : any) : void;		
		/**  
		*/
		getActionByTag(tag : number, target : any) : Action;		
		/** Composable actions are counted as 1 action. <br/>
		Example: <br/>
		- If you are running 1 Sequence of 7 actions, it will return 1. <br/>
		- If you are running 7 Sequences of 2 actions, it will return 7. 
		*/
		numberOfRunningActionsInTarget(target : any) : number;		
		/**  
		*/
		pauseTarget(target : any) : void;		
		/**  
		*/
		resumeTarget(target : any) : void;		
		/** Pauses all running actions, returning a list of targets whose actions were paused. 
		*/
		pauseAllRunningActions() : any[];		
		/** Resume a set of targets (convenience function to reverse a pauseAllRunningActions or pauseTargets call) 
		*/
		resumeTargets(targetsToResume : any[]) : void;		
		/** Pause a set of targets 
		*/
		pauseTargets(targetsToPause : any[]) : void;		
		/** because it uses this, so it can not be static 
		*/
		purgeSharedManager() : void;		
		/** 
		@param dt delta time in seconds 
		*/
		update(dt : number) : void;	
	}		
		/** <p>
		   ATTENTION: USE cc.director INSTEAD OF cc.Director.<br/>
		   cc.director is a singleton object which manage your game's logic flow.<br/>
		   Since the cc.director is a singleton, you don't need to call any constructor or create functions,<br/>
		   the standard way to use it is by calling:<br/>
		     - cc.director.methodName(); <br/>
		
		   It creates and handle the main Window and manages how and when to execute the Scenes.<br/>
		   <br/>
		   The cc.director is also responsible for:<br/>
		     - initializing the OpenGL context<br/>
		     - setting the OpenGL pixel format (default on is RGB565)<br/>
		     - setting the OpenGL pixel format (default on is RGB565)<br/>
		     - setting the OpenGL buffer depth (default one is 0-bit)<br/>
		- setting the color for clear screen (default one is BLACK)<br/>
		     - setting the projection (default one is 3D)<br/>
		     - setting the orientation (default one is Portrait)<br/>
		     <br/>
		   <br/>
		   The cc.director also sets the default OpenGL context:<br/>
		     - GL_TEXTURE_2D is enabled<br/>
		     - GL_VERTEX_ARRAY is enabled<br/>
		     - GL_COLOR_ARRAY is enabled<br/>
		     - GL_TEXTURE_COORD_ARRAY is enabled<br/>
		</p>
		<p>
		  cc.director also synchronizes timers with the refresh rate of the display.<br/>
		  Features and Limitations:<br/>
		     - Scheduled timers & drawing are synchronizes with the refresh rate of the display<br/>
		     - Only supports animation intervals of 1/60 1/30 & 1/15<br/>
		</p> */
		export class Director {		
		/** Converts a view coordinate to an WebGL coordinate<br/>
		Useful to convert (multi) touches coordinates to the current layout (portrait or landscape)<br/>
		Implementation can be found in CCDirectorWebGL. 
		*/
		convertToGL(uiPoint : Vec2) : Vec2;		
		/** Converts an WebGL coordinate to a view coordinate<br/>
		Useful to convert node points to window points for calls such as glScissor<br/>
		Implementation can be found in CCDirectorWebGL. 
		*/
		convertToUI(glPoint : Vec2) : Vec2;		
		/** Returns the size in pixels of the surface. It could be different than the screen size.<br/>
		High-res devices might have a higher surface size than the screen size. 
		*/
		getContentScaleFactor() : number;		
		/** This object will be visited after the main scene is visited.<br/>
		This object MUST implement the "visit" selector.<br/>
		Useful to hook a notification object. 
		*/
		getNotificationNode() : Node;		
		/** Returns the size of the WebGL view in points.<br/>
		It takes into account any possible rotation (device orientation) of the window. 
		*/
		getWinSize() : Size;		
		/** Returns the size of the OpenGL view in pixels.<br/>
		It takes into account any possible rotation (device orientation) of the window.<br/>
		On Mac winSize and winSizeInPixels return the same value. 
		*/
		getWinSizeInPixels() : Size;		
		/** Returns the visible size of the running scene. 
		*/
		getVisibleSize() : Size;		
		/** Returns the visible origin of the running scene. 
		*/
		getVisibleOrigin() : Vec2;		
		/** Returns the z eye, only available in WebGL mode. 
		*/
		getZEye() : number;		
		/** Pause the director's ticker 
		*/
		pause() : void;		
		/** Suspends the execution of the running scene, pushing it on the stack of suspended scenes.<br/>
		The new scene will be executed.<br/>
		Try to avoid big stacks of pushed scenes to reduce memory allocation.<br/>
		ONLY call it if there is a running scene. 
		*/
		pushScene(scene : Scene) : void;		
		/** Run a scene. Replaces the running scene with a new one or enter the first scene.
		The new scene will be launched immediately.
		@param scene The need run scene.
		@param onBeforeLoadScene The function invoked at the scene before loading.
		@param onLaunched The function invoked at the scene after launch. 
		*/
		runScene(scene : Scene, onBeforeLoadScene? : Function, onLaunched? : Function) : void;		
		/** Run a scene. Replaces the running scene with a new one or enter the first scene.
		The new scene will be launched at the end of the current frame.
		@param scene The need run scene.
		@param onBeforeLoadScene The function invoked at the scene before loading.
		@param onLaunched The function invoked at the scene after launch. 
		*/
		runScene(scene : Scene, onBeforeLoadScene? : Function, onLaunched? : Function) : void;		
		/** Loads the scene by its name.
		@param sceneName The name of the scene to load.
		@param onLaunched callback, will be called after scene launched. 
		*/
		loadScene(sceneName : string, onLaunched? : Function) : boolean;		
		/** Resume director after pause, if the current scene is not paused, nothing will happen. 
		*/
		resume() : void;		
		/** Enables or disables WebGL depth test.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js 
		*/
		setDepthTest(on : boolean) : void;		
		/** set color for clear screen.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js 
		*/
		setClearColor(clearColor : Color) : void;		
		/** Sets the view, where everything is rendered, do not call this function.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. 
		*/
		setOpenGLView(openGLView : View) : void;		
		/** Sets an OpenGL projection.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. 
		*/
		setProjection(projection : number) : void;		
		/** Update the view port.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. 
		*/
		setViewport() : void;		
		/** Get the View, where everything is rendered.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. 
		*/
		getOpenGLView() : View;		
		/** Sets an OpenGL projection.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. 
		*/
		getProjection() : number;		
		/** Enables/disables OpenGL alpha blending.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. 
		*/
		setAlphaBlending(on : boolean) : void;		
		/** Returns whether or not the replaced scene will receive the cleanup message.<br>
		If the new scene is pushed, then the old scene won't receive the "cleanup" message.<br/>
		If the new scene replaces the old one, the it will receive the "cleanup" message. 
		*/
		isSendCleanupToScene() : boolean;		
		/** Returns current logic Scene.
		
		@example 
		```js
		// This will help you to get the Canvas node in scene
		 cc.director.getScene().getChildByName('Canvas');
		``` 
		*/
		getScene() : Scene;		
		/** Returns the FPS value. 
		*/
		getAnimationInterval() : number;		
		/** Returns whether or not to display the FPS informations. 
		*/
		isDisplayStats() : boolean;		
		/** Sets whether display the FPS on the bottom-left corner. 
		*/
		setDisplayStats(displayStats : boolean) : void;		
		/** Returns seconds per frame. 
		*/
		getSecondsPerFrame() : number;		
		/** Returns whether next delta time equals to zero 
		*/
		isNextDeltaTimeZero() : boolean;		
		/** Returns whether or not the Director is paused 
		*/
		isPaused() : boolean;		
		/** Returns how many frames were called since the director started 
		*/
		getTotalFrames() : number;		
		/** Returns the cc.Scheduler associated with this director. 
		*/
		getScheduler() : Scheduler;		
		/** Sets the cc.Scheduler associated with this director. 
		*/
		setScheduler(scheduler : Scheduler) : void;		
		/** Returns the cc.ActionManager associated with this director. 
		*/
		getActionManager() : ActionManager;		
		/** Sets the cc.ActionManager associated with this director. 
		*/
		setActionManager(actionManager : ActionManager) : void;		
		/** Returns the cc.AnimationManager associated with this director. 
		*/
		getAnimationManager() : AnimationManager;		
		/** Returns the delta time since last frame. 
		*/
		getDeltaTime() : number;	
	}		
		/** !#en cc.game is the singleton object for game related functions.
		!#zh cc.game 是 Game 的实例，用来驱动整个游戏。 */
		export class Game {		
		/** !#en The outer frame of the game canvas, parent of cc.container.
		!#zh 游戏画布的外框，cc.container 的父类。 */
		frame : any;		
		/** !#en The container of game canvas, equals to cc.container.
		!#zh 游戏画布的容器。 */
		container : any;		
		/** !#en The canvas of the game, equals to cc._canvas.
		!#zh 游戏的画布。 */
		canvas : any;		
		/** !#en
		The current game configuration, including:<br/>
		1. debugMode<br/>
		     "debugMode" possible values :<br/>
		     0 - No message will be printed.                                                      <br/>
		     1 - cc.error, cc.assert, cc.warn, cc.log will print in console.                      <br/>
		     2 - cc.error, cc.assert, cc.warn will print in console.                              <br/>
		     3 - cc.error, cc.assert will print in console.                                       <br/>
		     4 - cc.error, cc.assert, cc.warn, cc.log will print on canvas, available only on web.<br/>
		     5 - cc.error, cc.assert, cc.warn will print on canvas, available only on web.        <br/>
		     6 - cc.error, cc.assert will print on canvas, available only on web.                 <br/>
		2. showFPS<br/>
		     Left bottom corner fps information will show when "showFPS" equals true, otherwise it will be hide.<br/>
		3. frameRate<br/>
		     "frameRate" set the wanted frame rate for your game, but the real fps depends on your game implementation and the running environment.<br/>
		4. id<br/>
		     "gameCanvas" sets the id of your canvas element on the web page, it's useful only on web.<br/>
		5. renderMode<br/>
		     "renderMode" sets the renderer type, only useful on web :<br/>
		     0 - Automatically chosen by engine<br/>
		     1 - Forced to use canvas renderer<br/>
		     2 - Forced to use WebGL renderer, but this will be ignored on mobile browsers<br/>
		6. scenes<br/>
		     "scenes" include available scenes in the current bundle.<br/>
		<br/>
		Please DO NOT modify this object directly, it won't have any effect.<br/>
		!#zh
		当前的游戏配置，包括：                                                                  <br/>
		1. debugMode（debug 模式，但是在浏览器中这个选项会被忽略）                                <br/>
		     "debugMode" 各种设置选项的意义。                                                   <br/>
		         0 - 没有消息被打印出来。                                                       <br/>
		         1 - cc.error，cc.assert，cc.warn，cc.log 将打印在 console 中。                  <br/>
		         2 - cc.error，cc.assert，cc.warn 将打印在 console 中。                          <br/>
		         3 - cc.error，cc.assert 将打印在 console 中。                                   <br/>
		         4 - cc.error，cc.assert，cc.warn，cc.log 将打印在 canvas 中（仅适用于 web 端）。 <br/>
		         5 - cc.error，cc.assert，cc.warn 将打印在 canvas 中（仅适用于 web 端）。         <br/>
		         6 - cc.error，cc.assert 将打印在 canvas 中（仅适用于 web 端）。                  <br/>
		2. showFPS（显示 FPS）                                                            <br/>
		     当 showFPS 为 true 的时候界面的左下角将显示 fps 的信息，否则被隐藏。              <br/>
		3. frameRate (帧率)                                                              <br/>
		     “frameRate” 设置想要的帧率你的游戏，但真正的FPS取决于你的游戏实现和运行环境。      <br/>
		4. id                                                                            <br/>
		     "gameCanvas" Web 页面上的 Canvas Element ID，仅适用于 web 端。                         <br/>
		5. renderMode（渲染模式）                                                         <br/>
		     “renderMode” 设置渲染器类型，仅适用于 web 端：                              <br/>
		         0 - 通过引擎自动选择。                                                     <br/>
		         1 - 强制使用 canvas 渲染。
		         2 - 强制使用 WebGL 渲染，但是在部分 Android 浏览器中这个选项会被忽略。     <br/>
		6. scenes                                                                         <br/>
		     “scenes” 当前包中可用场景。                                                   <br/>
		<br/>
		注意：请不要直接修改这个对象，它不会有任何效果。 */
		config : any;		
		/** !#en Callback when the scripts of engine have been load.
		!#zh 当引擎完成启动后的回调函数。 
		*/
		onStart() : void;		
		/** !#en Callback when game exits.
		!#zh 当游戏结束后的回调函数。 
		*/
		onStop() : void;		
		/** !#en Set frameRate of game.
		!#zh 设置游戏帧率。 
		*/
		setFrameRate(frameRate : number) : void;		
		/** !#en Run the game frame by frame.
		!#zh 执行一帧游戏循环。 
		*/
		step() : void;		
		/** !#en Pause the game.
		!#zh 暂停游戏。 
		*/
		pause() : void;		
		/** !#en Resume the game from pause.
		!#zh 继续游戏 
		*/
		resume() : void;		
		/** !#en Check whether the game is paused.
		!#zh 判断游戏是否暂停。 
		*/
		isPaused() : boolean;		
		/** !#en Restart game.
		!#zh 重新开始游戏 
		*/
		restart() : void;		
		/** !#en Prepare game.
		!#zh 准备引擎，请不要直接调用这个函数。 
		*/
		prepare(cb : Function) : void;		
		/** !#en Run game with configuration object and onStart function.
		!#zh 运行游戏，并且指定引擎配置和 onStart 的回调。
		@param config Pass configuration object or onStart function
		@param onStart function to be executed after game initialized 
		*/
		run(config? : any|Function, onStart? : Function) : void;		
		/** !#en
		Add a persistent root node to the game, the persistent node won't be destroyed during scene transition.<br/>
		The target node must be placed in the root level of hierarchy, otherwise this API won't have any effect.
		!#zh
		声明常驻根节点，该节点不会被在场景切换中被销毁。<br/>
		目标节点必须位于为层级的根节点，否则无效。
		@param node The node to be made persistent 
		*/
		addPersistRootNode(node : Node) : void;		
		/** !#en Remove a persistent root node.
		!#zh 取消常驻根节点。
		@param node The node to be removed from persistent node list 
		*/
		removePersistRootNode(node : Node) : void;		
		/** !#en Check whether the node is a persistent root node.
		!#zh 检查节点是否是常驻根节点。
		@param node The node to be checked 
		*/
		isPersistRootNode(node : Node) : boolean;	
	}		
		/** !#en
		Class of all entities in Cocos Creator scenes.<br/>
		Node also inherits from {{#crossLink "EventTarget"}}Event Target{{/crossLink}}, it permits Node to dispatch events.
		For events supported by Node, please refer to {{#crossLink "Node.EventType"}}{{/crossLink}}
		!#zh
		Cocos Creator 场景中的所有节点类。节点也继承了 {{#crossLink "EventTarget"}}EventTarget{{/crossLink}}，它允许节点发送事件。<br/>
		支持的节点事件，请参阅 {{#crossLink "Node.EventType"}}{{/crossLink}}。 */
		export class Node extends _BaseNode {		
		/** !#en
		The local active state of this node.<br/>
		Note that a Node may be inactive because a parent is not active, even if this returns true.<br/>
		Use {{#crossLink "Node/activeInHierarchy:property"}}{{/crossLink}} if you want to check if the Node is actually treated as active in the scene.
		!#zh
		当前节点的自身激活状态。<br/>
		值得注意的是，一个节点的父节点如果不被激活，那么即使它自身设为激活，它仍然无法激活。<br/>
		如果你想检查节点在场景中实际的激活状态可以使用 {{#crossLink "Node/activeInHierarchy:property"}}{{/crossLink}}。 */
		active : boolean;		
		/** !#en Indicates whether this node is active in the scene.
		!#zh 表示此节点是否在场景中激活。 */
		activeInHierarchy : boolean;		
		/** !#en
		Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
		You can also get component in the node by passing in the name of the script.
		!#zh
		获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
		传入参数也可以是脚本的名称。
		
		@example 
		```js
		// get sprite component.
		var sprite = node.getComponent(cc.Sprite);
		// get custom test calss.
		var test = node.getComponent("Test");
		``` 
		*/
		getComponent(typeOrClassName : Function|string) : Component;		
		/** !#en Returns all components of supplied type in the node.
		!#zh 返回节点上指定类型的所有组件。
		
		@example 
		```js
		var sprites = node.getComponents(cc.Sprite);
		var tests = node.getComponents("Test");
		``` 
		*/
		getComponents(typeOrClassName : Function|string) : Component[];		
		/** !#en Returns the component of supplied type in any of its children using depth first search.
		!#zh 递归查找所有子节点中第一个匹配指定类型的组件。
		
		@example 
		```js
		var sprite = node.getComponentInChildren(cc.Sprite);
		var Test = node.getComponentInChildren("Test");
		``` 
		*/
		getComponentInChildren(typeOrClassName : Function|string) : Component;		
		/** !#en Returns all components of supplied type in any of its children.
		!#zh 递归查找所有子节点中指定类型的组件。
		
		@example 
		```js
		var sprites = node.getComponentsInChildren(cc.Sprite);
		var tests = node.getComponentsInChildren("Test");
		``` 
		*/
		getComponentsInChildren(typeOrClassName : Function|string) : Component[];		
		/** !#en Adds a component class to the node. You can also add component to node by passing in the name of the script.
		!#zh 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。
		@param typeOrClassName The constructor or the class name of the component to add
		
		@example 
		```js
		var sprite = node.addComponent(cc.Sprite);
		var test = node.addComponent("Test");
		``` 
		*/
		addComponent(typeOrClassName : Function|string) : Component;		
		/** !#en
		Removes a component identified by the given name or removes the component object given.
		You can also use component.destroy() if you already have the reference.
		!#zh
		删除节点上的指定组件，传入参数可以是一个组件构造函数或组件名，也可以是已经获得的组件引用。
		如果你已经获得组件引用，你也可以直接调用 component.destroy()
		@param component The need remove component.
		
		@example 
		```js
		node.removeComponent(cc.Sprite);
		var Test = require("Test");
		node.removeComponent(Test);
		``` 
		*/
		removeComponent(component : string|Function|Component) : void;		
		/** !#en
		Register a callback of a specific event type on Node.<br/>
		Use this method to register touch or mouse event permit propagation based on scene graph,
		you can propagate the event to the parents or swallow it by calling stopPropagation on the event.<br/>
		It's the recommended way to register touch/mouse event for Node,
		please do not use cc.eventManager directly for Node.
		!#zh
		在节点上注册指定类型的回调函数，也可以设置 target 用于绑定响应函数的调用者。<br/>
		同时您可以将事件派发到父节点或者通过调用 stopPropagation 拦截它。<br/>
		推荐使用这种方式来监听节点上的触摸或鼠标事件，请不要在节点上直接使用 cc.eventManager。
		@param type A string representing the event type to listen for.
		@param callback The callback that will be invoked when the event is dispatched.
		                             The callback is ignored if it is a duplicate (the callbacks are unique).
		@param target The target to invoke the callback, can be null
		
		@example 
		```js
		// add Node Touch Event
		node.on(cc.Node.EventType.TOUCH_START, callback, this.node);
		node.on(cc.Node.EventType.TOUCH_MOVE, callback, this.node);
		node.on(cc.Node.EventType.TOUCH_END, callback, this.node);
		node.on(cc.Node.EventType.TOUCH_CANCEL, callback, this.node);
		``` 
		*/
		on(type : string, callback: (param: Event) => void, target? : any) : Function;		
		/** !#en
		Removes the callback previously registered with the same type, callback, target and or useCapture.
		This method is merely an alias to removeEventListener.
		!#zh 删除之前与同类型，回调，目标或 useCapture 注册的回调。
		@param type A string representing the event type being removed.
		@param callback The callback to remove.
		@param target The target to invoke the callback, if it's not given, only callback without target will be removed
		
		@example 
		```js
		// remove Node TOUCH_START Event.
		node.on(cc.Node.EventType.TOUCH_START, callback, this.node);
		node.off(cc.Node.EventType.TOUCH_START, callback, this.node);
		``` 
		*/
		off(type : string, callback : Function, target? : any) : void;		
		/** !#en Removes all callbacks previously registered with the same target.
		!#zh 移除目标上的所有注册事件。
		@param target The target to be searched for all related callbacks
		
		@example 
		```js
		node.targetOff(target);
		``` 
		*/
		targetOff(target : any) : void;		
		/** !#en
		Executes an action, and returns the action that is executed.<br/>
		The node becomes the action's target. Refer to cc.Action's getTarget()<br/>
		Calling runAction while the node is not active won't have any effect.
		!#zh
		执行并返回该执行的动作。该节点将会变成动作的目标。<br/>
		调用 runAction 时，节点自身处于不激活状态将不会有任何效果。
		
		@example 
		```js
		var action = cc.scaleTo(0.2, 1, 0.6);
		node.runAction(action);
		``` 
		*/
		runAction(action : Action) : Action;		
		/** !#en Stops and removes all actions from the running action list .
		!#zh 停止并且移除所有正在运行的动作列表。
		
		@example 
		```js
		node.stopAllActions();
		``` 
		*/
		stopAllActions() : void;		
		/** !#en Stops and removes an action from the running action list.
		!#zh 停止并移除指定的动作。
		@param action An action object to be removed.
		
		@example 
		```js
		var action = cc.scaleTo(0.2, 1, 0.6);
		node.stopAction(action);
		``` 
		*/
		stopAction(action : Action) : void;		
		/** !#en Removes an action from the running action list by its tag.
		!#zh 停止并且移除指定标签的动作。
		@param tag A tag that indicates the action to be removed.
		
		@example 
		```js
		node.stopAction(1);
		``` 
		*/
		stopActionByTag(tag : number) : void;		
		/** !#en Returns an action from the running action list by its tag.
		!#zh 通过标签获取指定动作。
		
		@example 
		```js
		var action = node.getActionByTag(1);
		``` 
		*/
		getActionByTag(tag : number) : Action;		
		/** !#en
		Returns the numbers of actions that are running plus the ones that are schedule to run (actions in actionsToAdd and actions arrays).<br/>
		   Composable actions are counted as 1 action. Example:<br/>
		   If you are running 1 Sequence of 7 actions, it will return 1. <br/>
		   If you are running 7 Sequences of 2 actions, it will return 7.</p>
		!#zh
		获取运行着的动作加上正在调度运行的动作的总数。<br/>
		例如：<br/>
		- 如果你正在运行 7 个动作中的 1 个 Sequence，它将返回 1。<br/>
		- 如果你正在运行 2 个动作中的 7 个 Sequence，它将返回 7。<br/>
		
		@example 
		```js
		var count = node.getNumberOfRunningActions();
		cc.log("Running Action Count: " + count);
		``` 
		*/
		getNumberOfRunningActions() : number;	
	}		
		/** !#en
		cc.Scene is a subclass of cc.Node that is used only as an abstract concept.<br/>
		cc.Scene and cc.Node are almost identical with the difference that users can not modify cc.Scene manually.
		!#zh
		cc.Scene 是 cc.Node 的子类，仅作为一个抽象的概念。<br/>
		cc.Scene 和 cc.Node 有点不同，用户不应直接修改 cc.Scene。 */
		export class Scene extends _BaseNode {	
	}		
		/** !#en
		Scheduler is responsible of triggering the scheduled callbacks.<br/>
		You should not use NSTimer. Instead use this class.<br/>
		<br/>
		There are 2 different types of callbacks (selectors):<br/>
		    - update callback: the 'update' callback will be called every frame. You can customize the priority.<br/>
		    - custom callback: A custom callback will be called every frame, or with a custom interval of time<br/>
		<br/>
		The 'custom selectors' should be avoided when possible. It is faster,
		and consumes less memory to use the 'update callback'. *
		!#zh
		Scheduler 是负责触发回调函数的类。<br/>
		通常情况下，建议使用 cc.director.getScheduler() 来获取系统定时器。<br/>
		有两种不同类型的定时器：<br/>
		    - update 定时器：每一帧都会触发。您可以自定义优先级。<br/>
		    - 自定义定时器：自定义定时器可以每一帧或者自定义的时间间隔触发。<br/>
		如果希望每帧都触发，应该使用 update 定时器，使用 update 定时器更快，而且消耗更少的内存。 */
		export class Scheduler {		
		/** !#en
		Modifies the time of all scheduled callbacks.<br/>
		You can use this property to create a 'slow motion' or 'fast forward' effect.<br/>
		Default is 1.0. To create a 'slow motion' effect, use values below 1.0.<br/>
		To create a 'fast forward' effect, use values higher than 1.0.<br/>
		Note：It will affect EVERY scheduled selector / action.
		!#zh
		设置时间间隔的缩放比例。<br/>
		您可以使用这个方法来创建一个 “slow motion（慢动作）” 或 “fast forward（快进）” 的效果。<br/>
		默认是 1.0。要创建一个 “slow motion（慢动作）” 效果,使用值低于 1.0。<br/>
		要使用 “fast forward（快进）” 效果，使用值大于 1.0。<br/>
		注意：它影响该 Scheduler 下管理的所有定时器。 
		*/
		setTimeScale(timeScale : number) : void;		
		/** !#en Returns time scale of scheduler.
		!#zh 获取时间间隔的缩放比例。 
		*/
		getTimeScale() : number;		
		/** !#en 'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.)
		!#zh update 调度函数。(不应该直接调用这个方法，除非完全了解这么做的结果)
		@param dt delta time 
		*/
		update(dt : number) : void;		
		/** !#en
		<p>
		  The scheduled method will be called every 'interval' seconds.</br>
		  If paused is YES, then it won't be called until it is resumed.<br/>
		  If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.<br/>
		  If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.<br/>
		  repeat let the action be repeated repeat + 1 times, use cc.macro.REPEAT_FOREVER to let the action run continuously<br/>
		  delay is the amount of time the action will wait before it'll start<br/>
		</p>
		!#zh
		指定回调函数，调用对象等信息来添加一个新的定时器。</br>
		当时间间隔达到指定值时，设置的回调函数将会被调用。</br>
		如果 paused 值为 true，那么直到 resume 被调用才开始计时。</br>
		如果 interval 值为 0，那么回调函数每一帧都会被调用，但如果是这样，
		建议使用 scheduleUpdateForTarget 代替。</br>
		如果回调函数已经被定时器使用，那么只会更新之前定时器的时间间隔参数，不会设置新的定时器。<br/>
		repeat 值可以让定时器触发 repeat + 1 次，使用 cc.macro.REPEAT_FOREVER
		可以让定时器一直循环触发。<br/>
		delay 值指定延迟时间，定时器会在延迟指定的时间之后开始计时。
		
		@example 
		```js
		//register a schedule to scheduler
		var scheduler = cc.director.getScheduler();
		scheduler.scheduleCallbackForTarget(this, function, interval, repeat, delay, !this._isRunning);
		
		``` 
		*/
		scheduleCallbackForTarget(target : any, callback_fn : Function, interval : number, repeat : number, delay : number, paused : boolean) : void;		
		/** !#en The schedule
		!#zh 定时器
		
		@example 
		```js
		//register a schedule to scheduler
		cc.director.getScheduler().schedule(callback, this, interval, !this._isRunning);
		
		``` 
		*/
		schedule(callback : Function, target : any, interval : number, repeat : number, delay : number, paused : boolean) : void;		
		/** !#en
		Schedules the update callback for a given target,
		the callback will be invoked every frame after schedule started.
		!#zh
		使用指定的优先级为指定的对象设置 update 定时器。
		update 定时器每一帧都会被触发。优先级的值越低，定时器被触发的越早。 
		*/
		scheduleUpdate(target : any, priority : number, paused : boolean, updateFunc : Function) : void;		
		/** !#en
		Unschedules a callback for a callback and a given target.
		If you want to unschedule the "update", use `unscheudleUpdate()`
		!#zh
		根据指定的回调函数和调用对象。
		如果需要取消 update 定时器，请使用 unscheudleUpdate()。
		@param callback The callback to be unscheduled
		@param target The target bound to the callback. 
		*/
		unschedule(callback : Function, target : any) : void;		
		/** !#en Unschedules the update callback for a given target.
		!#zh 取消指定对象的 update 定时器。
		@param target The target to be unscheduled. 
		*/
		unscheduleUpdate(target : any) : void;		
		/** !#en
		Unschedules all scheduled callbacks for a given target.
		This also includes the "update" callback.
		!#zh 取消指定对象的所有定时器，包括 update 定时器。
		@param target The target to be unscheduled. 
		*/
		unscheduleAllForTarget(target : any) : void;		
		/** !#en
		Unschedules all scheduled callbacks from all targets including the system callbacks.<br/>
		You should NEVER call this method, unless you know what you are doing.
		!#zh
		取消所有对象的所有定时器，包括系统定时器。<br/>
		不用调用此函数，除非你确定你在做什么。 
		*/
		unscheduleAll() : void;		
		/** !#en
		Unschedules all callbacks from all targets with a minimum priority.<br/>
		You should only call this with `PRIORITY_NON_SYSTEM_MIN` or higher.
		!#zh
		取消所有优先级的值大于指定优先级的定时器。<br/>
		你应该只取消优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。
		@param minPriority The minimum priority of selector to be unscheduled. Which means, all selectors which
		       priority is higher than minPriority will be unscheduled. 
		*/
		unscheduleAllWithMinPriority(minPriority : number) : void;		
		/** !#en Checks whether a callback for a given target is scheduled.
		!#zh 检查指定的回调函数和回调对象组合是否存在定时器。
		@param callback The callback to check.
		@param target The target of the callback. 
		*/
		isScheduled(callback : Function, target : any) : boolean;		
		/** !#en
		Pause all selectors from all targets.<br/>
		You should NEVER call this method, unless you know what you are doing.
		!#zh
		暂停所有对象的所有定时器。<br/>
		不要调用这个方法，除非你知道你正在做什么。 
		*/
		pauseAllTargets() : void;		
		/** !#en
		Pause all selectors from all targets with a minimum priority. <br/>
		You should only call this with kCCPriorityNonSystemMin or higher.
		!#zh
		暂停所有优先级的值大于指定优先级的定时器。<br/>
		你应该只暂停优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。 
		*/
		pauseAllTargetsWithMinPriority(minPriority : number) : void;		
		/** !#en
		Resume selectors on a set of targets.<br/>
		This can be useful for undoing a call to pauseAllCallbacks.
		!#zh
		恢复指定数组中所有对象的定时器。<br/>
		这个函数是 pauseAllCallbacks 的逆操作。 
		*/
		resumeTargets(targetsToResume : any[]) : void;		
		/** !#en
		Pauses the target.<br/>
		All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.<br/>
		If the target is not present, nothing happens.
		!#zh
		暂停指定对象的定时器。<br/>
		指定对象的所有定时器都会被暂停。<br/>
		如果指定的对象没有定时器，什么也不会发生。 
		*/
		pauseTarget(target : any) : void;		
		/** !#en
		Resumes the target.<br/>
		The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.<br/>
		If the target is not present, nothing happens.
		!#zh
		恢复指定对象的所有定时器。<br/>
		指定对象的所有定时器将继续工作。<br/>
		如果指定的对象没有定时器，什么也不会发生。 
		*/
		resumeTarget(target : any) : void;		
		/** !#en Returns whether or not the target is paused.
		!#zh 返回指定对象的定时器是否暂停了。 
		*/
		isTargetPaused(target : any) : boolean;		
		/** !#en
		Schedules the 'update' callback_fn for a given target with a given priority.<br/>
		The 'update' callback_fn will be called every frame.<br/>
		The lower the priority, the earlier it is called.
		!#zh
		为指定对象设置 update 定时器。<br/>
		update 定时器每一帧都会被调用。<br/>
		优先级的值越低，越早被调用。
		
		@example 
		```js
		//register this object to scheduler
		var scheduler = cc.director.getScheduler();
		scheduler.scheduleUpdateForTarget(this, priority, !this._isRunning );
		
		``` 
		*/
		scheduleUpdateForTarget(target : any, priority : number, paused : boolean) : void;		
		/** !#en
		Unschedule a callback function for a given target.<br/>
		If you want to unschedule the "update", use unscheudleUpdateForTarget.
		!#zh
		根据指定的回调函数和调用对象对象取消相应的定时器。<br/>
		如果需要取消 update 定时器，请使用 unscheudleUpdateForTarget()。
		@param callback callback[Function] or key[String]
		
		@example 
		```js
		//unschedule a callback of target
		var scheduler = cc.director.getScheduler();
		scheduler.unscheduleCallbackForTarget(this, callback);
		
		``` 
		*/
		unscheduleCallbackForTarget(target : any, callback : Function) : void;		
		/** !#en Unschedules the update callback function for a given target.
		!#zh 取消指定对象的所有定时器。
		
		@example 
		```js
		//unschedules the "update" method.
		var scheduler = cc.director.getScheduler();
		scheduler.unscheduleUpdateForTarget(this);
		
		``` 
		*/
		unscheduleUpdateForTarget(target : any) : void;		
		/** !#en
		Unschedules all function callbacks for a given target.<br/>
		This also includes the "update" callback function.
		!#zh 取消指定对象的所有定时器，包括 update 定时器。 
		*/
		unscheduleAllCallbacksForTarget(target : any) : void;		
		/** !#en
		Unschedules all function callbacks from all targets. <br/>
		You should NEVER call this method, unless you know what you are doing.
		!#zh
		取消所有对象的所有定时器。<br/>
		不要调用这个方法，除非你知道你正在做什么。 
		*/
		unscheduleAllCallbacks() : void;		
		/** !#en
		Unschedules all function callbacks from all targets with a minimum priority.<br/>
		You should only call this with kCCPriorityNonSystemMin or higher.
		!#zh
		取消所有优先级的值大于指定优先级的所有对象的所有定时器。<br/>
		你应该只暂停优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。 
		*/
		unscheduleAllCallbacksWithMinPriority(minPriority : number) : void;		
		/** !#en Priority level reserved for system services.
		!#zh 系统服务的优先级。 */
		PRIORITY_SYSTEM : number;		
		/** !#en Minimum priority level for user scheduling.
		!#zh 用户调度最低优先级。 */
		PRIORITY_NON_SYSTEM : number;	
	}		
		/** <p>
		 cc.pool is a singleton object serves as an object cache pool.<br/>
		 It can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>
		 Some common use case is :<br/>
		     1. Bullets in game (die very soon, massive creation and recreation, no side effect on other objects)<br/>
		     2. Blocks in candy crash (massive creation and recreation)<br/>
		     etc...
		</p> */
		export class pool {		
		/** Put the obj in pool.
		@param obj The need put in pool object.
		
		@example 
		```js
		---------------------------------
		var sp = new _ccsg.Sprite("a.png");
		this.addChild(sp);
		cc.pool.putInPool(sp);
		cc.pool.getFromPool(_ccsg.Sprite, "a.png");
		
		``` 
		*/
		putInPool(obj : any) : void;		
		/** Check if this kind of obj has already in pool.
		@param objClass The check object class. 
		*/
		hasObject(objClass : any) : boolean;		
		/** Remove the obj if you want to delete it. 
		*/
		removeObject() : void;		
		/** Get the obj from pool. 
		*/
		getFromPool() : any;		
		/** Remove all objs in pool and reset the pool. 
		*/
		drainAllPools() : void;	
	}		
		/** !#en
		Base class for handling assets used in Fireball. This class can be instantiate.
		
		You may want to override:<br/>
		- createNode<br/>
		- cc.Object._serialize<br/>
		- cc.Object._deserialize<br/>
		!#zh
		资源基类，该类可以被实例化。<br/>
		
		您可能需要重写：<br/>
		- createNode <br/>
		- cc.Object._serialize<br/>
		- cc.Object._deserialize<br/> */
		export class Asset extends RawAsset {		
		constructor();		
		/** !#en
		Returns the url of this asset's first raw file, if none of rawFile exists,
		it will returns an empty string.
		!#zh 返回该资源的原始文件的 URL，如果不支持 RAW 文件，它将返回一个空字符串。 */
		rawUrl : string;		
		/** !#en
		Returns the url of this asset's raw files, if none of rawFile exists,
		it will returns an empty array.
		!#zh 返回该资源的原文件的 URL 数组，如果不支持 RAW 文件，它将返回一个空数组。 */
		rawUrls : String[];		
		/** !#en
		Create a new node using this asset in the scene.<br/>
		If this type of asset dont have its corresponding node type, this method should be null.
		!#zh
		使用该资产在场景中创建一个新节点。<br/>
		如果这类资产没有相应的节点类型，该方法应该是空的。 
		*/
		createNode(callback: (error: string, node: any) => void) : void;	
	}		
		/** !#en Class for audio data handling.
		!#zh 音频资源类。 */
		export class AudioClip extends RawAsset {		
		constructor();	
	}		
		/** !#en Class for BitmapFont handling.
		!#zh 位图字体资源类。 */
		export class BitmapFont extends RawAsset {		
		constructor();	
	}		
		/** !#en Class for Font handling.
		!#zh 字体资源类。 */
		export class Font extends RawAsset {		
		constructor();	
	}		
		/** !#en Class for prefab handling.
		!#zh 预制资源类。 */
		export class Prefab extends Asset {		
		constructor();	
	}		
		/** !#en
		The base class for registering asset types.
		
		You may want to override:
		- createNode (static)
		!#zh
		注册用的资源基类。<br/>
		你可能要重写：<br/>
		- createNode (static) */
		export class RawAsset extends CCObject {		
		/** !#en
		Create a new node in the scene.<br/>
		If this type of asset dont have its corresponding node type, this method should be null.
		!#zh
		在场景中创建一个新节点。<br/>
		如果这类资源没有相应的节点类型，该方法应该是空的。 
		*/
		createNodeByInfo(Info : any, callback: (error: string, node: any) => void) : void;	
	}		
		/** !#en Class for scene handling.
		!#zh 场景资源类。 */
		export class SceneAsset extends Asset {		
		constructor();	
	}		
		/** !#en Class for script handling.
		!#zh Script 资源类。 */
		export class _Script extends Asset {		
		constructor();	
	}		
		/** !#en Class for JavaScript handling.
		!#zh JavaScript 资源类。 */
		export class _JavaScript extends Asset {		
		constructor();	
	}		
		/** !#en Class for coffee script handling.
		!#zh CoffeeScript 资源类。 */
		export class CoffeeScript extends Asset {		
		constructor();	
	}		
		/** !#en Class for sprite atlas handling.
		!#zh 精灵图集资源类。 */
		export class SpriteAtlas extends RawAsset {		
		constructor();		
		/** Returns the texture of the sprite atlas 
		*/
		getTexture() : cc.Texture2D;		
		/** Returns the sprite frame correspond to the given key in sprite atlas. 
		*/
		getSpriteFrame(key : string) : cc.SpriteFrame;	
	}		
		/** !#en Class for TTFFont handling.
		!#zh TTF 字体资源类。 */
		export class TTFFont extends Asset {		
		constructor();	
	}		
		/** !#en Class for text file.
		!#zh 文本资源类。 */
		export class TextAsset extends Asset {		
		constructor();	
	}		
		/** !#en The animation component is used to play back animations.
		!#zh Animation 组件用于播放动画。你能指定动画剪辑到动画组件并从脚本控制播放。 */
		export class Animation extends CCComponent {		
		/** !#en Animation will play the default clip when start game.
		!#zh 在勾选自动播放或调用 play() 时默认播放的动画剪辑。 */
		defaultClip : AnimationClip;		
		/** !#en Current played clip.
		!#zh 当前播放的动画剪辑。 */
		currentClip : AnimationClip;		
		/** !#en Whether the animation should auto play the default clip when start game.
		!#zh 是否在运行游戏后自动播放默认动画剪辑。 */
		playOnLoad : boolean;		
		/** !#en Get all the clips used in this animation.
		!#zh 获取动画组件上的所有动画剪辑。 
		*/
		getClips() : AnimationClip[];		
		/** !#en Plays an animation and stop other animations.
		!#zh 播放当前或者指定的动画，并且停止当前正在播放动画。
		@param name The name of animation to play. If no name is supplied then the default animation will be played.
		@param startTime play an animation from startTime
		
		@example 
		```js
		var animCtrl = this.node.getComponent(cc.Animation);
		animCtrl.play("linear");
		``` 
		*/
		play(name? : string, startTime? : number) : AnimationState;		
		/** !#en
		Plays an additive animation, it will not stop other animations.
		If there are other animations playing, then will play several animations at the same time.
		!#zh 播放当前或者指定的动画（将不会停止当前播放的动画）。
		@param name The name of animation to play. If no name is supplied then the default animation will be played.
		@param startTime play an animation from startTime
		
		@example 
		```js
		// linear_1 and linear_2 at the same time playing.
		var animCtrl = this.node.getComponent(cc.Animation);
		animCtrl.playAdditive("linear_1");
		animCtrl.playAdditive("linear_2");
		``` 
		*/
		playAdditive(name? : string, startTime? : number) : AnimationState;		
		/** !#en Stops an animation named name. If no name is supplied then stops all playing animations that were started with this Animation. <br/>
		Stopping an animation also Rewinds it to the Start.
		!#zh 停止当前或者指定的动画。如果没有指定名字，则停止所有动画。
		@param name The animation to stop, if not supplied then stops all playing animations. 
		*/
		stop(name? : string) : void;		
		/** !#en Pauses an animation named name. If no name is supplied then pauses all playing animations that were started with this Animation.
		!#zh 暂停当前或者指定的动画。如果没有指定名字，则暂停当前正在播放的动画。
		@param name The animation to pauses, if not supplied then pauses all playing animations. 
		*/
		pause(name? : string) : void;		
		/** !#en Resumes an animation named name. If no name is supplied then resumes all paused animations that were started with this Animation.
		!#zh 重新播放指定的动画，如果没有指定名字，则重新播放当前正在播放的动画。
		@param name The animation to resumes, if not supplied then resumes all paused animations. 
		*/
		resume(name? : string) : void;		
		/** !#en Make an animation named name go to the specified time. If no name is supplied then make all animations go to the specified time.
		!#zh 设置指定动画的播放时间。如果没有指定名字，则设置所有动画的播放时间。
		@param time The time to go to
		@param name Specified animation name, if not supplied then make all animations go to the time. 
		*/
		setCurrentTime(time? : number, name? : string) : void;		
		/** !#en Returns the animation state named name. If no animation with the specified name, the function will return null.
		!#zh 获取当前或者指定的动画状态，如果未找到指定动画剪辑则返回 null。 
		*/
		getAnimationState(name : string) : AnimationState;		
		/** !#en Adds a clip to the animation with name newName. If a clip with that name already exists it will be replaced with the new clip.
		!#zh 添加动画剪辑，并且可以重新设置该动画剪辑的名称。
		@param clip the clip to add 
		*/
		addClip(clip : AnimationClip, newName? : string) : AnimationState;		
		/** !#en Remove clip from the animation list. This will remove the clip and any animation states based on it.
		!#zh
		从动画列表中移除指定的动画剪辑，<br/>
		如果动画剪辑正在播放并且 force 参数为 true，这会停止该动画剪辑，然后在移除该动画剪辑，反之为 false，则会停止该动画。
		@param force If force is true, then will always remove the clip and any animation states based on it. 
		*/
		removeClip(clip : AnimationClip, force : boolean) : void;		
		/** !#en
		Samples animations at the current state.<br/>
		This is useful when you explicitly want to set up some animation state, and sample it once.
		!#zh 对当前动画进行采样。你可以手动将动画设置到某一个状态，然后采样一次。 
		*/
		sample() : void;	
	}		
		/** !#en Audio Source.
		!#zh 音频源组件，能对音频剪辑。 */
		export class AudioSource extends Component {		
		/** !#en Is the audio source playing (Read Only).
		!#zh 该音频剪辑是否正播放（只读）。 */
		isPlaying : boolean;		
		/** !#en The clip of the audio source.
		!#zh 默认要播放的音频剪辑。 */
		clip : AudioClip;		
		/** !#en The volume of the audio source.
		!#zh 音频源的音量（0.0 ~ 1.0）。 */
		volume : number;		
		/** !#en Is the audio source mute?
		!#zh 是否静音音频源。Mute 是设置音量为 0，取消静音是恢复原来的音量。 */
		mute : boolean;		
		/** !#en Is the audio source looping?
		!#zh 音频源是否循环播放？ */
		loop : boolean;		
		/** !#en If set to true, the audio source will automatically start playing on onLoad.
		!#zh 如果设置为true，音频源将在 onLoad 时自动播放。 */
		playOnLoad : boolean;		
		/** !#en Plays the clip.
		!#zh 播放音频剪辑。 
		*/
		play() : void;		
		/** !#en Stops the clip.
		!#zh 停止当前音频剪辑。 
		*/
		stop() : void;		
		/** !#en Pause the clip.
		!#zh 暂停当前音频剪辑。 
		*/
		pause() : void;		
		/** !#en Resume the clip.
		!#zh 恢复播放。 
		*/
		resume() : void;		
		/** !#en Rewind playing music.
		!#zh 从头开始播放。 
		*/
		rewind() : void;	
	}		
		/** !#en
		Button has 3 Transition types
		When Button state changed:
		 If Transition type is Button.Transition.NONE, Button will do nothing
		 If Transition type is Button.Transition.COLOR, Button will change target's color
		 If Transition type is Button.Transition.SPRITE, Button will change target Sprite's sprite
		
		Button will trigger 5 events:
		 Button.EVENT_TOUCH_DOWN
		 Button.EVENT_TOUCH_UP
		 Button.EVENT_HOVER_IN
		 Button.EVENT_HOVER_MOVE
		 Button.EVENT_HOVER_OUT
		
		!#zh
		按钮组件。可以被按下,或者点击。</br>
		
		按钮可以通过修改 Transition 来设置按钮状态过渡的方式：</br>
		  -Button.Transition.NONE   // 不做任何过渡</br>
		  -Button.Transition.COLOR  // 进行颜色之间过渡</br>
		  -Button.Transition.SPRITE // 进行精灵之间过渡</br>
		
		按钮可以绑定事件（但是必须要在按钮的 Node 上才能绑定事件）：</br>
		  // 以下事件可以在全平台上都触发</br>
		  -cc.Node.EventType.TOUCH_START  // 按下时事件</br>
		  -cc.Node.EventType.TOUCH_Move   // 按住移动后事件</br>
		  -cc.Node.EventType.TOUCH_END    // 按下后松开后事件</br>
		  -cc.Node.EventType.TOUCH_CANCEL // 按下取消事件</br>
		  // 以下事件只在 PC 平台上触发</br>
		  -cc.Node.EventType.MOUSE_DOWN  // 鼠标按下时事件</br>
		  -cc.Node.EventType.MOUSE_MOVE  // 鼠标按住移动后事件</br>
		  -cc.Node.EventType.MOUSE_ENTER // 鼠标进入目标事件</br>
		  -cc.Node.EventType.MOUSE_LEAVE // 鼠标离开目标事件</br>
		  -cc.Node.EventType.MOUSE_UP    // 鼠标松开事件</br>
		  -cc.Node.EventType.MOUSE_WHEEL // 鼠标滚轮事件</br> */
		export class Button extends Component {		
		/** !#en
		Whether the Button is disabled.
		If true, the Button will trigger event and do transition.
		!#zh
		按钮事件是否被响应，如果为 false，则按钮将被禁用。 */
		interactable : boolean;		
		/** !#en Transition type
		!#zh 按钮状态改变时过渡方式。 */
		transition : Button.Transition;		
		/** !#en Normal state color.
		!#zh 普通状态下按钮所显示的颜色。 */
		normalColor : Color;		
		/** !#en Pressed state color
		!#zh 按下状态时按钮所显示的颜色。 */
		pressedColor : Color;		
		/** !#en Hover state color
		!#zh 悬停状态下按钮所显示的颜色。 */
		hoverColor : Color;		
		/** !#en Disabled state color
		!#zh 禁用状态下按钮所显示的颜色。 */
		disabledColor : Color;		
		/** !#en Color transition duration
		!#zh 颜色过渡时所需时间 */
		duration : number;		
		/** !#en Normal state sprite
		!#zh 普通状态下按钮所显示的 Sprite 。 */
		normalSprite : SpriteFrame;		
		/** !#en Pressed state sprite
		!#zh 按下状态时按钮所显示的 Sprite 。 */
		pressedSprite : SpriteFrame;		
		/** !#en Hover state sprite
		!#zh 悬停状态下按钮所显示的 Sprite 。 */
		hoverSprite : SpriteFrame;		
		/** !#en Disabled state sprite
		!#zh 禁用状态下按钮所显示的 Sprite 。 */
		disabledSprite : SpriteFrame;		
		/** !#en
		Transition target.
		When Button state changed:
		 If Transition type is Button.Transition.NONE, Button will do nothing
		 If Transition type is Button.Transition.COLOR, Button will change target's color
		 If Transition type is Button.Transition.SPRITE, Button will change target Sprite's sprite
		!#zh
		需要过渡的目标。
		当前按钮状态改变有：
		-如果 Transition type 选择 Button.Transition.NONE，按钮不做任何过渡。
		-如果 Transition type 选择 Button.Transition.COLOR，按钮会对目标颜色进行颜色之间的过渡。
		-如果 Transition type 选择 Button.Transition.NONE，按钮会对目标 Sprite 进行 Sprite 之间的过渡。 */
		target : Node;		
		/** !#en If Button is clicked, it will trigger event's handler
		!#zh 按钮的点击事件列表。 */
		clickEvents : Component.EventHandler[];	
	}		
		/** !#zh: 作为 UI 根节点，为所有子节点提供视窗四边的位置信息以供对齐，另外提供屏幕适配策略接口，方便从编辑器设置。
		注：由于本节点的尺寸会跟随屏幕拉伸，所以 anchorPoint 只支持 (0.5, 0.5)，否则适配不同屏幕时坐标会有偏差。 */
		export class Canvas extends Component {		
		/** Current active canvas, the scene should only have one active canvas at the same time. */
		instance : Canvas;		
		/** The desigin resolution for current scene. */
		designResolution : cc.Size;		
		/** !#zh: 是否优先将设计分辨率高度撑满视图高度 */
		fitHeight : boolean;		
		/** !#zh: 是否优先将设计分辨率宽度撑满视图宽度 */
		fitWidth : boolean;	
	}		
		/** !#en
		Base class for everything attached to Node(Entity).<br/>
		<br/>
		NOTE: Not allowed to use construction parameters for Component's subclasses,
		      because Component is created by the engine.
		!#zh
		所有附加到节点的基类。<br/>
		<br/>
		注意：不允许使用组件的子类构造参数，因为组件是由引擎创建的。 */
		export class Component extends Object {		
		constructor();		
		/** !#en The node this component is attached to. A component is always attached to a node.
		!#zh 该组件被附加到的节点。组件总会附加到一个节点。 */
		node : Node;		
		/** !#en The uuid for editor.
		!#zh 组件的 uuid，用于编辑器。 */
		uuid : string;		
		/** !#en indicates whether this component is enabled or not.
		!#zh 表示该组件自身是否启用。 */
		enabled : boolean;		
		/** !#en indicates whether this component is enabled and its node is also active in the hierarchy.
		!#zh 表示该组件是否被启用并且所在的节点也处于激活状态。。 */
		enabledInHierarchy : boolean;		
		/** !#en TODO
		!#zh onLoad 是否被调用。 */
		_isOnLoadCalled : boolean;		
		/** !#en Update is called every frame, if the Component is enabled.
		!#zh 如果该组件启用，则每帧调用 update。 
		*/
		update() : void;		
		/** !#en LateUpdate is called every frame, if the Component is enabled.
		!#zh 如果该组件启用，则每帧调用 LateUpdate。 
		*/
		lateUpdate() : void;		
		/** !#en When attaching to an active node or its node first activated.
		!#zh 当附加到一个激活的节点上或者其节点第一次激活时候调用。 
		*/
		onLoad() : void;		
		/** !#en Called before all scripts' update if the Component is enabled.
		!#zh 如果该组件启用，则在所有组件的 update 之前调用。 
		*/
		start() : void;		
		/** !#en Called when this component becomes enabled and its node is active.
		!#zh 当该组件被启用，并且它的节点也激活时。 
		*/
		onEnable() : void;		
		/** !#en Called when this component becomes disabled or its node becomes inactive.
		!#zh 当该组件被禁用或节点变为无效时调用。 
		*/
		onDisable() : void;		
		/** !#en Called when this component will be destroyed.
		!#zh 当该组件被销毁时调用 
		*/
		onDestroy() : void;		
		onFocusInEditor() : void;		
		onLostFocusInEditor() : void;		
		/** !#en Adds a component class to the node. You can also add component to node by passing in the name of the script.
		!#zh 向节点添加一个组件类，你还可以通过传入脚本的名称来添加组件。
		@param typeOrTypename the constructor or the class name of the component to add
		
		@example 
		```js
		var sprite = node.addComponent(cc.Sprite);
		var test = node.addComponent("Test");
		``` 
		*/
		addComponent(typeOrTypename : Function|string) : Component;		
		/** !#en
		Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
		You can also get component in the node by passing in the name of the script.
		!#zh
		获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
		传入参数也可以是脚本的名称。
		
		@example 
		```js
		// get sprite component.
		var sprite = node.getComponent(cc.Sprite);
		// get custom test calss.
		var test = node.getComponent("Test");
		``` 
		*/
		getComponent(typeOrClassName : Function|string) : Component;		
		/** !#en Returns all components of supplied Type in the node.
		!#zh 返回节点上指定类型的所有组件。
		
		@example 
		```js
		var sprites = node.getComponents(cc.Sprite);
		var tests = node.getComponents("Test");
		``` 
		*/
		getComponents(typeOrClassName : Function|string) : Component[];		
		/** !#en Returns the component of supplied type in any of its children using depth first search.
		!#zh 递归查找所有子节点中第一个匹配指定类型的组件。
		
		@example 
		```js
		var sprite = node.getComponentInChildren(cc.Sprite);
		var Test = node.getComponentInChildren("Test");
		``` 
		*/
		getComponentInChildren(typeOrClassName : Function|string) : Component;		
		/** !#en Returns the components of supplied type in any of its children using depth first search.
		!#zh 递归查找所有子节点中指定类型的组件。
		
		@example 
		```js
		var sprites = node.getComponentsInChildren(cc.Sprite);
		var tests = node.getComponentsInChildren("Test");
		``` 
		*/
		getComponentsInChildren(typeOrClassName : Function|string) : Component[];		
		/** !#en
		If the component's bounding box is different from the node's, you can implement this method to supply
		a custom axis aligned bounding box (AABB), so the editor's scene view can perform hit test properly.
		!#zh
		如果组件的包围盒与节点不同，您可以实现该方法以提供自定义的轴向对齐的包围盒（AABB），
		以便编辑器的场景视图可以正确地执行点选测试。
		@param out_rect the Rect to receive the bounding box 
		*/
		_getLocalBounds(out_rect : Rect) : void;		
		/** !#en
		onRestore is called after the user clicks the Reset item in the Inspector's context menu or performs
		an undo operation on this component.<br/>
		<br/>
		If the component contains the "internal state", short for "temporary member variables which not included<br/>
		in its CCClass properties", then you may need to implement this function.<br/>
		<br/>
		The editor will call the getset accessors of your component to record/restore the component's state<br/>
		for undo/redo operation. However, in extreme cases, it may not works well. Then you should implement<br/>
		this function to manually synchronize your component's "internal states" with its public properties.<br/>
		Once you implement this function, all the getset accessors of your component will not be called when<br/>
		the user performs an undo/redo operation. Which means that only the properties with default value<br/>
		will be recorded or restored by editor.<br/>
		<br/>
		Similarly, the editor may failed to reset your component correctly in extreme cases. Then if you need<br/>
		to support the reset menu, you should manually synchronize your component's "internal states" with its<br/>
		properties in this function. Once you implement this function, all the getset accessors of your component<br/>
		will not be called during reset operation. Which means that only the properties with default value<br/>
		will be reset by editor.
		
		This function is only called in editor mode.
		!#zh
		onRestore 是用户在检查器菜单点击 Reset 时，对此组件执行撤消操作后调用的。<br/>
		<br/>
		如果组件包含了“内部状态”（不在 CCClass 属性中定义的临时成员变量），那么你可能需要实现该方法。<br/>
		<br/>
		编辑器执行撤销/重做操作时，将调用组件的 get set 来录制和还原组件的状态。
		然而，在极端的情况下，它可能无法良好运作。<br/>
		那么你就应该实现这个方法，手动根据组件的属性同步“内部状态”。
		一旦你实现这个方法，当用户撤销或重做时，组件的所有 get set 都不会再被调用。
		这意味着仅仅指定了默认值的属性将被编辑器记录和还原。<br/>
		<br/>
		同样的，编辑可能无法在极端情况下正确地重置您的组件。<br/>
		于是如果你需要支持组件重置菜单，你需要在该方法中手工同步组件属性到“内部状态”。<br/>
		一旦你实现这个方法，组件的所有 get set 都不会在重置操作时被调用。
		这意味着仅仅指定了默认值的属性将被编辑器重置。
		<br/>
		此方法仅在编辑器下会被调用。 
		*/
		onRestore() : void;		
		/** !#en
		Schedules a custom selector.<br/>
		If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.
		!#zh
		调度一个自定义的回调函数。<br/>
		如果回调函数已调度，那么将不会重复调度它，只会更新时间间隔参数。
		@param callback The callback function
		@param interval Tick interval in seconds. 0 means tick every frame. If interval = 0, it's recommended to use scheduleUpdate() instead.
		@param repeat The selector will be executed (repeat + 1) times, you can use kCCRepeatForever for tick infinitely.
		@param delay The amount of time that the first tick will wait before execution.
		
		@example 
		```js
		var squashAction = cc.scaleTo(0.2, 1, 0.6);
		this.seq = cc.sequence(squashAction);
		``` 
		*/
		schedule(callback : Function, interval? : number, repeat? : number, delay? : number) : void;		
		/** !#en Schedules a callback function that runs only once, with a delay of 0 or larger.
		!#zh 调度一个只运行一次的回调函数，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。
		@param callback A function wrapped as a selector
		@param delay The amount of time that the first tick will wait before execution.
		
		@example 
		```js
		var squashAction = cc.scaleTo(0.2, 1, 0.6);
		this.seq = cc.scheduleOnce(squashAction);
		``` 
		*/
		scheduleOnce(callback : Function, delay? : number) : void;		
		/** !#en Unschedules a custom callback function.
		!#zh 取消调度一个自定义的回调函数。
		@param callback_fn A function wrapped as a selector
		
		@example 
		```js
		this.unschedule(_callback);
		``` 
		*/
		unschedule(callback_fn : Function) : void;		
		/** !#en
		unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.<br/>
		Actions are not affected by this method.
		!#zh 取消调度所有已调度的回调函数：定制的回调函数以及 'update' 回调函数。动作不受此方法影响。
		
		@example 
		```js
		this.unscheduleAllCallbacks();
		``` 
		*/
		unscheduleAllCallbacks() : void;	
	}		
		/** !#en cc.EditBox is a component for inputing text, you can use it to gather small amounts of text from users.
		!#zh EditBox 组件，用于获取用户的输入文本。 */
		export class EditBox extends _RendererUnderSG {		
		/** !#en Input string of EditBox.
		!#zh 输入框的初始输入内容，如果为空则会显示占位符的文本。 */
		string : string;		
		/** !#en The background image of EditBox.
		!#zh 输入框的背景图片 */
		backGroundImage : SpriteFrame;		
		/** !#en
		The return key type of EditBox.
		Note: it is meaningless for web platforms and desktop platforms.
		!#zh
		指定移动设备上面回车按钮的样式。
		注意：这个选项对 web 平台与 desktop 平台无效。 */
		returnType : EditBox.KeyboardReturnType;		
		/** !#en Set the input flags that are to be applied to the EditBox.
		!#zh 指定输入标志位，可以指定输入方式为密码或者单词首字母大写。 */
		inputFlag : EditBox.InputFlag;		
		/** !#en
		Set the input mode of the edit box.
		If you pass ANY, it will create a multiline EditBox.
		!#zh
		指定输入模式: ANY表示多行输入，其它都是单行输入，移动平台上还可以指定键盘样式。 */
		inputMode : EditBox.InputMode;		
		/** !#en Font size of the input text.
		!#zh 输入框文本的字体大小 */
		fontSize : number;		
		/** !#en Change the lineHeight of displayed text.
		!#zh 输入框文本的行高。 */
		lineHeight : number;		
		/** !#en Font color of the input text.
		!#zh 输入框文本的颜色。 */
		fontColor : Color;		
		/** !#en The display text of placeholder.
		!#zh 输入框占位符的文本内容。 */
		placeholder : string;		
		/** !#en The font size of placeholder.
		!#zh 输入框占位符的字体大小。 */
		placeholderFontSize : number;		
		/** !#en The font color of placeholder.
		!#zh 输入框最大允许输入的字符个数。 */
		placeholderFontColor : Color;		
		/** !#en The maximize input length of EditBox.
		!#zh 输入框最大允许输入的字符个数。 */
		maxLength : number;		
		/** !#en The event handler to be called when EditBox began to edit text.
		!#zh 开始编辑文本输入框触发的事件回调。 */
		editingDidBegin : Component.EventHandler;		
		/** !#en The event handler to be called when EditBox text changes.
		!#zh 编辑文本输入框时触发的事件回调。 */
		textChanged : Component.EventHandler;		
		/** !#en The event handler to be called when EditBox edit ends.
		!#zh 结束编辑文本输入框时触发的事件回调。 */
		editingDidEnded : Component.EventHandler;	
	}		
		/** !#en The Label Component.
		!#zh 文字标签组件 */
		export class Label extends _RendererUnderSG {		
		/** !#en Content string of label.
		!#zh 标签显示的文本内容。 */
		string : string;		
		/** !#en Horizontal Alignment of label.
		!#zh 文本内容的水平对齐方式。 */
		horizontalAlign : Label.TextAlignment;		
		/** !#en Vertical Alignment of label.
		!#zh 文本内容的垂直对齐方式。 */
		verticalAlign : Label.VerticalTextAlignment;		
		/** !#en Font size of label.
		!#zh 文本字体大小。 */
		fontSize : number;		
		/** !#en Line Height of label.
		!#zh 文本行高。 */
		lineHeight : number;		
		/** !#en Overflow of label.
		!#zh 文字显示超出范围时的处理方式。 */
		overFlow : Label.Overflow;		
		/** !#en Whether auto wrap label when string width is large than label width.
		!#zh 是否自动换行。 */
		enableWrapText : boolean;		
		/** !#en The font URL of label.
		!#zh 文本字体的 url。 */
		file : string;		
		/** !#en Whether use system font name or not.
		!#zh 是否使用系统字体。 */
		isSystemFontUsed : boolean;	
	}		
		/** !#en The Layout is a container component, use it to arrange child elements easily.
		!#zh Layout 组件相当于一个容器，能自动对它的所有子节点进行统一排版。 */
		export class Layout extends Component {		
		/** !#en The layout type.
		!#zh 布局类型 */
		type : Layout.Type;		
		/** !#en
		The are three resize modes for Layout.
		None, resize Container and resize children.
		!#zh 缩放模式 */
		resizeMode : Layout.ResizeMode;		
		/** !#en The cell size for grid layout.
		!#zh 每个格子的大小，只有布局类型为 GRID 的时候才有效。 */
		cellSize : Size;		
		/** !#en
		The start axis for grid layout. If you choose horizontal, then children will layout horizontally at first,
		and then break line on demand. Choose vertical if you want to layout vertically at first .
		!#zh 起始轴方向类型，可进行水平和垂直布局排列，只有布局类型为 GRID 的时候才有效。 */
		startAxis : Layout.AxisDirection;		
		/** !#en The padding of layout, it only effect the layout in one direction.
		!#zh 容器内边距，只会在布局方向上生效。 */
		padding : number;		
		/** !#en The distance in x-axis between each element in layout.
		!#zh 子节点之间的水平间距。 */
		spacingX : number;		
		/** !#en The distance in y-axis between each element in layout.
		!#zh 子节点之间的垂直间距。 */
		spacingY : number;		
		/** !#en
		Only take effect in Vertical layout mode.
		This option changes the start element's positioning.
		!#zh 垂直排列子节点的方向。 */
		verticalDirection : Layout.VerticalDirection;		
		/** !#en
		Only take effect in Horizontal layout mode.
		This option changes the start element's positioning.
		!#zh 水平排列子节点的方向。 */
		horizontalDirection : Layout.HorizontalDirection;	
	}		
		/** undefined */
		export class Mask extends _RendererInSG {	
	}		
		/** !#en
		Visual indicator of progress in some operation.
		Displays a bar to the user representing how far the operation has progressed.
		!#zh
		进度条组件，可用于显示加载资源时的进度。 */
		export class ProgressBar extends Component {		
		/** !#en The targeted Sprite which will be changed progressively.
		!#zh 用来显示进度条比例的 Sprite 对象。 */
		barSprite : Sprite;		
		/** !#en The progress mode, there are two modes supported now: horizontal and vertical.
		!#zh 进度条的模式 */
		mode : ProgressBar.Mode;		
		/** !#en The total width or height of the bar sprite.
		!#zh 进度条实际的总长度 */
		totalLength : number;		
		/** !#en The current progress of the bar sprite. The valid value is between 0-1.
		!#zh 当前进度值，该数值的区间是 0-1 之间。 */
		progress : number;		
		/** !#en Whether reverse the progress direction of the bar sprite.
		!#zh 进度条是否进行反方向变化。 */
		reverse : boolean;	
	}		
		/** Rendering component in scene graph.
		Maintains a node which will be the scene graph of component's Node. */
		export class _RendererInSG extends _SGComponent {	
	}		
		/** The base rendering component which will attach a leaf node to the cocos2d scene graph. */
		export class _RendererUnderSG extends _SGComponent {	
	}		
		/** The base class for all rendering component in scene graph.
		
		You should override:
		- _createSgNode
		- _initSgNode */
		export class _SGComponent extends Component {	
	}		
		/** !#en
		The Scrollbar control allows the user to scroll an image or other view that is too large to see completely
		!#zh 滚动条组件 */
		export class Scrollbar extends Component {		
		/** !#en The "handle" part of the scrollbar.
		!#zh 作为当前滚动区域位置显示的滑块 Sprite。 */
		handle : cc.Sprite;		
		/** !#en The direction of scrollbar.
		!#zh ScrollBar 的滚动方向。 */
		direction : Scrollbar.Direction;		
		/** !#en Whehter enable auto hide or not.
		!#zh 是否在没有滚动动作时自动隐藏 ScrollBar。 */
		enableAutoHide : boolean;		
		/** !#en
		The time to hide scrollbar when scroll finished.
		Note: This value is only useful when enableAutoHide is true.
		!#zh
		没有滚动动作后经过多久会自动隐藏。
		注意：只要当 “enableAutoHide” 为 true 时，才有效。 */
		autoHideTime : number;	
	}		
		/** !#en
		Layout container for a view hierarchy that can be scrolled by the user,
		allowing it to be larger than the physical display.
		
		!#zh
		滚动视图组件 */
		export class ScrollView extends Component {		
		/** !#en This is a reference to the UI element to be scrolled.
		!#zh 可滚动展示内容的节点。 */
		content : Node;		
		/** !#en Enable horizontal scroll.
		!#zh 是否开启水平滚动。 */
		horizontal : boolean;		
		/** !#en Enable vertical scroll.
		!#zh 是否开启垂直滚动。 */
		vertical : boolean;		
		/** !#en When inertia is set, the content will continue to move when touch ended.
		!#zh 是否开启滚动惯性。 */
		inertia : boolean;		
		/** !#en
		It determines how quickly the content stop moving. A value of 1 will stop the movement immediately.
		A value of 0 will never stop the movement until it reaches to the boundary of scrollview.
		!#zh
		开启惯性后，在用户停止触摸后滚动多快停止，0表示永不停止，1表示立刻停止。 */
		brake : number;		
		/** !#en When elastic is set, the content will be bounce back when move out of boundary.
		!#zh 是否允许滚动内容超过边界，并在停止触摸后回弹。 */
		elastic : boolean;		
		/** !#en The elapse time of bouncing back. A value of 0 will bounce back immediately.
		!#zh 回弹持续的时间，0 表示将立即反弹。 */
		bounceDuration : number;		
		/** !#en The horizontal scrollbar reference.
		!#zh 水平滚动的 ScrollBar。 */
		horizontalScrollBar : Scrollbar;		
		/** !#en The vertical scrollbar reference.
		!#zh 垂直滚动的 ScrollBar。 */
		verticalScrollBar : Scrollbar;		
		/** !#en Scroll the content to the bottom boundary of ScrollView.
		!#zh 视图内容将在规定时间内滚动到视图底部。
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the bottom boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true.
		
		@example 
		```js
		// Scroll to the bottom of the view.
		scrollView.scrollToBottom(0.1);
		``` 
		*/
		scrollToBottom(timeInSecond? : number, attenuated? : boolean) : void;		
		/** !#en Scroll the content to the top boundary of ScrollView.
		!#zh 视图内容将在规定时间内滚动到视图顶部。
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the top boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true.
		
		@example 
		```js
		// Scroll to the top of the view.
		scrollView.scrollToTop(0.1);
		``` 
		*/
		scrollToTop(timeInSecond? : number, attenuated? : boolean) : void;		
		/** !#en Scroll the content to the left boundary of ScrollView.
		!#zh 视图内容将在规定时间内滚动到视图左边。
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the left boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true.
		
		@example 
		```js
		// Scroll to the left of the view.
		scrollView.scrollToLeft(0.1);
		``` 
		*/
		scrollToLeft(timeInSecond? : number, attenuated? : boolean) : void;		
		/** !#en Scroll the content to the right boundary of ScrollView.
		!#zh 视图内容将在规定时间内滚动到视图右边。
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the right boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true.
		
		@example 
		```js
		// Scroll to the right of the view.
		scrollView.scrollToRight(0.1);
		``` 
		*/
		scrollToRight(timeInSecond? : number, attenuated? : boolean) : void;		
		/** !#en Scroll the content to the top left boundary of ScrollView.
		!#zh 视图内容将在规定时间内滚动到视图左上角。
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the top left boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true.
		
		@example 
		```js
		// Scroll to the upper left corner of the view.
		scrollView.scrollToTopLeft(0.1);
		``` 
		*/
		scrollToTopLeft(timeInSecond? : number, attenuated? : boolean) : void;		
		/** !#en Scroll the content to the top right boundary of ScrollView.
		!#zh 视图内容将在规定时间内滚动到视图右上角。
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the top right boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true.
		
		@example 
		```js
		// Scroll to the top right corner of the view.
		scrollView.scrollToTopRight(0.1);
		``` 
		*/
		scrollToTopRight(timeInSecond? : number, attenuated? : boolean) : void;		
		/** !#en Scroll the content to the bottom left boundary of ScrollView.
		!#zh 视图内容将在规定时间内滚动到视图左下角。
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the bottom left boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true.
		
		@example 
		```js
		// Scroll to the lower left corner of the view.
		scrollView.scrollToBottomLeft(0.1);
		``` 
		*/
		scrollToBottomLeft(timeInSecond? : number, attenuated? : boolean) : void;		
		/** !#en Scroll the content to the bottom right boundary of ScrollView.
		!#zh 视图内容将在规定时间内滚动到视图右下角。
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the bottom right boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true.
		
		@example 
		```js
		// Scroll to the lower right corner of the view.
		scrollView.scrollToBottomRight(0.1);
		``` 
		*/
		scrollToBottomRight(timeInSecond? : number, attenuated? : boolean) : void;		
		/** !#en Scroll the content to the horizontal percent position of ScrollView.
		!#zh 视图内容在规定时间内将滚动到 ScrollView 水平方向的百分比位置上。
		@param percent A value between 0 and 1.
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the horizontal percent position of ScrollView immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true.
		
		@example 
		```js
		// Scroll to middle position.
		scrollView.scrollToBottomRight(0.5, 0.1);
		``` 
		*/
		scrollToPercentHorizontal(percent : number, timeInSecond? : number, attenuated? : boolean) : void;		
		/** !#en Scroll the content to the percent position of ScrollView in any direction.
		!#zh 视图内容在规定时间内进行垂直方向和水平方向的滚动，并且滚动到指定百分比位置上。
		@param anchor A point which will be clamp between cc.p(0,0) and cc.p(1,1).
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the percent position of ScrollView immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true.
		
		@example 
		```js
		// Vertical scroll to the bottom of the view.
		scrollView.scrollTo(cc.p(0, 1), 0.1);
		
		// Horizontal scroll to view right.
		scrollView.scrollTo(cc.p(1, 0), 0.1);
		``` 
		*/
		scrollTo(anchor : Vec2, timeInSecond? : number, attenuated? : boolean) : void;		
		/** !#en Scroll the content to the vertical percent position of ScrollView.
		!#zh 视图内容在规定时间内滚动到 ScrollView 垂直方向的百分比位置上。
		@param percent A value between 0 and 1.
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the vertical percent position of ScrollView immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true.
		// Scroll to middle position.
		scrollView.scrollToPercentVertical(0.5, 0.1); 
		*/
		scrollToPercentVertical(percent : number, timeInSecond? : number, attenuated? : boolean) : void;		
		/** !#en Modify the content position.
		!#zh 设置当前视图内容的坐标点。
		@param position The position in content's parent space. 
		*/
		setContentPosition(position : Vec2) : void;		
		/** !#en Query the content's position in its parent space.
		!#zh 获取当前视图内容的坐标点。 
		*/
		getContentPosition() : Position;	
	}		
		/** !#en Renders a sprite in the scene.
		!#zh 该组件用于在场景中渲染精灵。 */
		export class Sprite extends _RendererUnderSG {		
		/** !#en The sprite frame of the sprite.
		!#zh 精灵的精灵帧 */
		spriteFrame : SpriteFrame;		
		/** !#en The sprite render type.
		!#zh 精灵渲染类型 */
		type : Sprite.SpriteType;		
		/** !#en
		The fill type, This will only have any effect if the "type" is set to “cc.Sprite.Type.FILLED”.
		!#zh
		精灵填充类型，仅渲染类型设置为 cc.Sprite.SpriteType.FILLED 时有效。 */
		fillType : Sprite.FillType;		
		/** !#en
		The fill Center, This will only have any effect if the "type" is set to “cc.Sprite.Type.FILLED”.
		!#zh
		填充中心点，仅渲染类型设置为 cc.Sprite.SpriteType.FILLED 时有效。 */
		fillCenter : Vec2;		
		/** !#en
		The fill Start, This will only have any effect if the "type" is set to “cc.Sprite.Type.FILLED”.
		!#zh
		填充起始点，仅渲染类型设置为 cc.Sprite.SpriteType.FILLED 时有效。 */
		fillStart : number;		
		/** !#en
		The fill Range, This will only have any effect if the "type" is set to “cc.Sprite.Type.FILLED”.
		!#zh
		填充范围，仅渲染类型设置为 cc.Sprite.SpriteType.FILLED 时有效。 */
		fillRange : number;		
		/** !#en specify the frame is trimmed or not.
		!#zh 是否使用裁剪模式 */
		trim : boolean;		
		/** !#en specify the source Blend Factor.
		!#zh 指定原图的混合模式 */
		srcBlendFactor : BlendFactor;		
		/** !#en specify the destination Blend Factor.
		!#zh 指定目标的混合模式 */
		dstBlendFactor : BlendFactor;		
		/** !#en specify the size tracing mode.
		!#zh 精灵尺寸调整模式 */
		sizeMode : Sprite.SizeMode;		
		/** !#en Sets whether the sprite is visible or not.
		!#zh 设置精灵是否可见
		
		@example 
		```js
		sprite.setVisible(false);
		``` 
		*/
		setVisible(visible : boolean) : void;		
		/** !#en Query the sprite's original size.
		!#zh 获取精灵原始大小
		
		@example 
		```js
		var originalSize = sprite.getOriginalSize();
		cc.log("Original Size:" + originalSize);
		``` 
		*/
		getOriginalSize() : Size;		
		/** !#en Change the left sprite's cap inset.
		!#zh 设置精灵左边框-用于九宫格。
		@param insetLeft The values to use for the cap inset.
		
		@example 
		```js
		sprite.setInsetLeft(5);
		``` 
		*/
		setInsetLeft(insetLeft : number) : void;		
		/** !#en Query the left sprite's cap inset.
		!#zh 获取精灵左边框
		
		@example 
		```js
		var insetLeft = sprite.getInsetLeft();
		cc.log("Inset Left:" + insetLeft);
		``` 
		*/
		getInsetLeft() : number;		
		/** !#en Change the top sprite's cap inset.
		!#zh 设置精灵上边框-用于九宫格。
		@param insetTop The values to use for the cap inset.
		
		@example 
		```js
		sprite.setInsetTop(5);
		``` 
		*/
		setInsetTop(insetTop : number) : void;		
		/** !#en Query the top sprite's cap inset.
		!#zh 获取精灵上边框。
		
		@example 
		```js
		var insetTop = sprite.getInsetTop();
		cc.log("Inset Top:" + insetTop);
		``` 
		*/
		getInsetTop() : number;		
		/** !#en Change the right sprite's cap inset.
		!#zh 设置精灵右边框-用于九宫格。
		@param insetRight The values to use for the cap inset.
		
		@example 
		```js
		sprite.setInsetRight(5);
		``` 
		*/
		setInsetRight(insetRight : number) : void;		
		/** !#en Query the right sprite's cap inset.
		!#zh 获取精灵右边框。
		
		@example 
		```js
		var insetRight = sprite.getInsetRight();
		cc.log("Inset Right:" + insetRight);
		``` 
		*/
		getInsetRight() : number;		
		/** !#en Change the bottom sprite's cap inset.
		!#zh 设置精灵下边框-用于九宫格。
		@param bottomInset The values to use for the cap inset.
		
		@example 
		```js
		sprite.setInsetBottom(5);
		``` 
		*/
		setInsetBottom(bottomInset : number) : void;		
		/** !#en Query the bottom sprite's cap inset.
		!#zh 获取精灵下边框。
		
		@example 
		```js
		var insetBottom = sprite.getInsetBottom();
		cc.log("Inset Bottom:" + insetBottom);
		``` 
		*/
		getInsetBottom() : number;	
	}		
		/** !#en
		Stores and manipulate the anchoring based on its parent.
		Widget are used for GUI but can also be used for other things.
		!#zh
		Widget 组件，用于设置和适配其相对于父节点的边距，Widget 通常被用于 UI 界面，也可以用于其他地方。 */
		export class Widget extends Component {		
		/** !#en Whether to align the top.
		!#zh 是否对齐上边。 */
		isAlignTop : boolean;		
		/** !#en
		Vertically aligns the midpoint, This will open the other vertical alignment options cancel.
		!#zh
		是否垂直方向对齐中点，开启此项会将垂直方向其他对齐选项取消。 */
		isAlignVerticalCenter : boolean;		
		/** !#en Whether to align the bottom.
		!#zh 是否对齐下边。 */
		isAlignBottom : boolean;		
		/** !#en Whether to align the left.
		!#zh 是否对齐左边 */
		isAlignLeft : boolean;		
		/** !#en
		Horizontal aligns the midpoint. This will open the other horizontal alignment options canceled.
		!#zh
		是否水平方向对齐中点，开启此选项会将水平方向其他对齐选项取消。 */
		isAlignHorizontalCenter : boolean;		
		/** !#en Whether to align the right.
		!#zh 是否对齐右边。 */
		isAlignRight : boolean;		
		/** !#en
		Whether the stretched horizontally, when enable the left and right alignment will be stretched horizontally,
		the width setting is invalid (read only).
		!#zh
		当前是否水平拉伸。当同时启用左右对齐时，节点将会被水平拉伸，此时节点的宽度只读。 */
		isStretchWidth : boolean;		
		/** !#en
		Whether the stretched vertically, when enable the left and right alignment will be stretched vertically,
		then height setting is invalid (read only)
		!#zh
		当前是否垂直拉伸。当同时启用上下对齐时，节点将会被垂直拉伸，此时节点的高度只读。 */
		isStretchHeight : boolean;		
		/** !#en
		The margins between the top of this node and the top of parent node,
		the value can be negative, Only available in 'isAlignTop' open.
		!#zh
		本节点顶边和父节点顶边的距离，可填写负值，只有在 isAlignTop 开启时才有作用。 */
		top : number;		
		/** !#en
		The margins between the bottom of this node and the bottom of parent node,
		the value can be negative, Only available in 'isAlignBottom' open.
		!#zh
		本节点底边和父节点底边的距离，可填写负值，只有在 isAlignBottom 开启时才有作用。 */
		bottom : number;		
		/** !#en
		The margins between the left of this node and the left of parent node,
		the value can be negative, Only available in 'isAlignLeft' open.
		!#zh
		本节点左边和父节点左边的距离，可填写负值，只有在 isAlignLeft 开启时才有作用。 */
		left : number;		
		/** !#en
		The margins between the right of this node and the right of parent node,
		the value can be negative, Only available in 'isAlignRight' open.
		!#zh
		本节点右边和父节点右边的距离，可填写负值，只有在 isAlignRight 开启时才有作用。 */
		right : number;		
		/** !#en
		If true, top is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's height.
		!#zh
		如果为 true，"top" 将会以像素作为边距，否则将会以相对父物体高度的百分比（0 到 1）作为边距。 */
		isAbsoluteTop : boolean;		
		/** !#en
		If true, bottom is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's height.
		!#zh
		如果为 true，"bottom" 将会以像素作为边距，否则将会以相对父物体高度的百分比（0 到 1）作为边距。 */
		isAbsoluteBottom : boolean;		
		/** !#en
		If true, left is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's width.
		!#zh
		如果为 true，"left" 将会以像素作为边距，否则将会以相对父物体宽度的百分比（0 到 1）作为边距。 */
		isAbsoluteLeft : boolean;		
		/** !#en
		If true, right is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's width.
		!#zh
		如果为 true，"right" 将会以像素作为边距，否则将会以相对父物体宽度的百分比（0 到 1）作为边距。 */
		isAbsoluteRight : boolean;		
		/** !#en TODO
		!#zh
		开启后仅会在 onEnable 的当帧结束时对齐一次，然后立刻禁用当前组件。
		这样便于脚本或动画继续控制当前节点。
		注意：onEnable 时所在的那一帧仍然会进行对齐。 */
		isAlignOnce : boolean;	
	}		
		/** !#en
		EventTarget is an object to which an event is dispatched when something has occurred.
		Entity are the most common event targets, but other objects can be event targets too.
		
		Event targets are an important part of the Fireball event model.
		The event target serves as the focal point for how events flow through the scene graph.
		When an event such as a mouse click or a keypress occurs, Fireball dispatches an event object
		into the event flow from the root of the hierarchy. The event object then makes its way through
		the scene graph until it reaches the event target, at which point it begins its return trip through
		the scene graph. This round-trip journey to the event target is conceptually divided into three phases:
		- The capture phase comprises the journey from the root to the last node before the event target's node
		- The target phase comprises only the event target node
		- The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the tree
		See also: http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
		
		Event targets can implement the following methods:
		 - _getCapturingTargets
		 - _getBubblingTargets
		
		!#zh
		事件目标是事件触发时，分派的事件对象，Node 是最常见的事件目标，
		但是其他对象也可以是事件目标。<br/> */
		export class EventTarget {		
		/** !#en
		Register an callback of a specific event type on the EventTarget.
		This method is merely an alias to addEventListener.
		!#zh
		注册事件目标的特定事件类型回调，仅仅是 addEventListener 的别名。
		@param type A string representing the event type to listen for.
		@param callback The callback that will be invoked when the event is dispatched.
		                             The callback is ignored if it is a duplicate (the callbacks are unique).
		@param target The target to invoke the callback, can be null
		@param useCapture When set to true, the capture argument prevents callback
		                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
		                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
		                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.
		
		@example 
		```js
		node.on(cc.Node.EventType.TOUCH_END, function (event) {
		    cc.log("this is callback");
		}, node);
		``` 
		*/
		on(type : string, callback: (param: Event) => void, target : any, useCapture : boolean) : Function;		
		/** !#en
		Removes the callback previously registered with the same type, callback, target and or useCapture.
		This method is merely an alias to removeEventListener.
		!#zh
		删除之前与同类型，回调，目标或 useCapture 注册的回调，仅仅是 removeEventListener 的别名。
		@param type A string representing the event type being removed.
		@param callback The callback to remove.
		@param target The target to invoke the callback, if it's not given, only callback without target will be removed
		@param useCapture Specifies whether the callback being removed was registered as a capturing callback or not.
		                             If not specified, useCapture defaults to false. If a callback was registered twice,
		                             one with capture and one without, each must be removed separately. Removal of a capturing callback
		                             does not affect a non-capturing version of the same listener, and vice versa.
		
		@example 
		```js
		// register touchEnd eventListener
		var touchEnd = node.on(cc.Node.EventType.TOUCH_END, function (event) {
		    cc.log("this is callback");
		}, node);
		// remove touchEnd eventListener
		node.off(cc.Node.EventType.TOUCH_END, touchEnd, node);
		``` 
		*/
		off(type : string, callback : Function, target : any, useCapture : boolean) : void;		
		/** !#en Removes all callbacks previously registered with the same target.
		!#zh 删除指定目标上的所有注册回调。
		@param target The target to be searched for all related callbacks 
		*/
		targetOff(target : any) : void;		
		/** !#en
		Register an callback of a specific event type on the EventTarget,
		the callback will remove itself after the first time it is triggered.
		!#zh
		注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
		@param type A string representing the event type to listen for.
		@param callback The callback that will be invoked when the event is dispatched.
		                             The callback is ignored if it is a duplicate (the callbacks are unique).
		@param target The target to invoke the callback, can be null
		@param useCapture When set to true, the capture argument prevents callback
		                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
		                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
		                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.
		
		@example 
		```js
		node.once(cc.Node.EventType.TOUCH_END, function (event) {
		    cc.log("this is callback");
		}, node);
		``` 
		*/
		once(type : string, callback: (param: Event) => void, target : any, useCapture : boolean) : void;		
		/** !#en
		Dispatches an event into the event flow.
		The event target is the EventTarget object upon which the dispatchEvent() method is called.
		!#zh 分发事件到事件流中。
		@param event The Event object that is dispatched into the event flow 
		*/
		dispatchEvent(event : Event) : boolean;		
		/** !#en
		Send an event to this object directly, this method will not propagate the event to any other objects.
		The event will be created from the supplied message, you can get the "detail" argument from event.detail.
		!#zh
		该对象直接发送事件， 这种方法不会对事件传播到任何其他对象。
		@param message the message to send
		@param detail whatever argument the message needs 
		*/
		emit(message : string, detail? : any) : void;	
	}		
		/** !#en Base class of all kinds of events.
		!#zh 包含事件相关信息的对象。 */
		export class Event {		
		constructor();		
		/** 
		@param type The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
		@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
		*/
		Event(type : string, bubbles : boolean) : Event;		
		/** !#en The name of the event (case-sensitive), e.g. "click", "fire", or "submit".
		!#zh 事件类型。 */
		type : string;		
		/** !#en Indicate whether the event bubbles up through the tree or not.
		!#zh 表示该事件是否进行冒泡。 */
		bubbles : boolean;		
		/** !#en A reference to the target to which the event was originally dispatched.
		!#zh 最初事件触发的目标 */
		target : any;		
		/** !#en A reference to the currently registered target for the event.
		!#zh 当前目标 */
		currentTarget : any;		
		/** !#en
		Indicates which phase of the event flow is currently being evaluated.
		Returns an integer value represented by 4 constants:
		 - Event.NONE = 0
		 - Event.CAPTURING_PHASE = 1
		 - Event.AT_TARGET = 2
		 - Event.BUBBLING_PHASE = 3
		The phases are explained in the [section 3.1, Event dispatch and DOM event flow]
		(http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), of the DOM Level 3 Events specification.
		!#zh 事件阶段 */
		eventPhase : number;		
		/** !#en Reset the event for being stored in the object pool.
		!#zh 重置对象池中存储的事件。 
		*/
		unuse() : string;		
		/** !#en Reuse the event for being used again by the object pool.
		!#zh 用于对象池再次使用的事件。 
		*/
		reuse() : string;		
		/** !#en
		If invoked when the cancelable attribute value is true, signals to the operation that caused event to be dispatched that it needs to be canceled.
		!#zh 捕获阶段时，阻止传递给最终目标。 
		*/
		preventDefault() : void;		
		/** !#en Stops propagation for current event.
		!#zh 停止传递当前事件。 
		*/
		stopPropagation() : void;		
		/** !#en Stops propagation for current event immediately,
		the event won't even be dispatched to the listeners attached in the current target.
		!#zh 立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。 
		*/
		stopPropagationImmediate() : void;		
		/** !#en Checks whether the event has been stopped.
		!#zh 检查该事件是否已经停止传递. 
		*/
		isStopped() : boolean;		
		/** !#en
		<p>
		    Gets current target of the event                                                            <br/>
		    note: It only be available when the event listener is associated with node.                <br/>
		         It returns 0 when the listener is associated with fixed priority.
		</p>
		!#zh 获取当前目标节点 
		*/
		getCurrentTarget() : Node;		
		/** !#en Gets the event type.
		!#zh 获取事件类型 
		*/
		getType() : string;		
		/** !#en Code for event without type.
		!#zh 没有类型的事件 */
		NO_TYPE : string;		
		/** !#en Events not currently dispatched are in this phase
		!#zh 尚未派发事件阶段 */
		NONE : number;		
		/** !#en
		The capturing phase comprises the journey from the root to the last node before the event target's node
		see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
		!#zh 捕获阶段，包括事件目标节点之前从根节点到最后一个节点的过程。 */
		CAPTURING_PHASE : number;		
		/** !#en
		The target phase comprises only the event target node
		see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
		!#zh 目标阶段仅包括事件目标节点。 */
		AT_TARGET : number;		
		/** !#en
		The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the hierarchy
		see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
		!#zh 冒泡阶段， 包括回程遇到到层次根节点的任何后续节点。 */
		BUBBLING_PHASE : number;	
	}		
		/** Loader for resource loading process. It's a singleton object. */
		export class loader extends Pipeline {		
		/** The downloader in cc.loader's pipeline, it's by default the first pipe.
		It's used to download files with several handlers: pure text, image, script, audio, font, uuid.
		You can add your own download function with addDownloadHandlers */
		downloader : any;		
		/** The downloader in cc.loader's pipeline, it's by default the second pipe.
		It's used to parse downloaded content with several handlers: JSON, image, plist, fnt, uuid.
		You can add your own download function with addLoadHandlers */
		loader : any;		
		/** Add custom supported types handler or modify existing type handler for download process.
		@param extMap Custom supported types with corresponded handler
		
		@example 
		```js
		cc.loader.addDownloadHandlers({
		     // This will match all url with `.scene` extension or all url with `scene` type
		     'scene' : function (url, callback) {}
		 });
		``` 
		*/
		addDownloadHandlers(extMap : any) : void;		
		/** Add custom supported types handler or modify existing type handler for load process.
		@param extMap Custom supported types with corresponded handler
		
		@example 
		```js
		cc.loader.addLoadHandlers({
		     // This will match all url with `.scene` extension or all url with `scene` type
		     'scene' : function (url, callback) {}
		 });
		``` 
		*/
		addLoadHandlers(extMap : any) : void;		
		/** Load resources with a progression callback and a complete callback.
		The progression callback is the same as Pipeline's {{#crossLink "Pipeline/onProgress:method"}}onProgress{{/crossLink}}
		The complete callback is almost the same as Pipeline's {{#crossLink "Pipeline/onComplete:method"}}onComplete{{/crossLink}}
		The only difference is when user pass a single url as resources, the complete callback will set its result directly as the second parameter.
		@param resources Url list in an array
		@param progressCallback Callback invoked when progression change
		@param completeCallback Callback invoked when all resources loaded
		
		@example 
		```js
		cc.loader.load('a.png', function (err, tex) {
		    cc.log('Result should be a texture: ' + (tex instanceof cc.Texture2D));
		});
		
		cc.loader.load('http://example.com/a.png', function (err, tex) {
		    cc.log('Should load a texture from external url: ' + (tex instanceof cc.Texture2D));
		});
		
		cc.loader.load({id: 'http://example.com/getImageREST?file=a.png', type: 'png'}, function (err, tex) {
		    cc.log('Should load a texture from RESTful API by specify the type: ' + (tex instanceof cc.Texture2D));
		});
		
		cc.loader.load(['a.png', 'b.json'], function (errors, results) {
		    if (errors) {
		        for (var i = 0; i < errors.length; i++) {
		            cc.log('Error url [' + errors[i] + ']: ' + results.getError(errors[i]));
		        }
		    }
		    var aTex = results.getContent('a.png');
		    var bJsonObj = results.getContent('b.json');
		});
		``` 
		*/
		load(resources : string|any[], progressCallback? : Function, completeCallback : Function) : void;		
		/** Load resources from the "resources" folder inside the "assets" folder of your project.<br>
		<br>
		Note: All asset urls in Creator use forward slashes, urls using backslashes will not work.
		@param url Url of the target resource.
		                       The url is relative to the "resources" folder, extensions must be omitted.
		@param completeCallback Callback invoked when the resource loaded.
		
		@example 
		```js
		// load the sprite frame (project/assets/resources/imgs/cocos.png/cocos) from resources folder with no extension
		cc.loader.loadRes('imgs/cocos/cocos', function (err, spriteFrame) {
		    if (err) {
		        cc.error(err.message || err);
		        return;
		    }
		    cc.log('Result should be a sprite frame: ' + ( spriteFrame instanceof cc.SpriteFrame));
		});
		``` 
		*/
		loadRes(url : string, completeCallback: (error: Error, resource: any) => void) : void;		
		/** Get resource data by id. <br>
		When you load resources with {{#crossLink "loader/load:method"}}{{/crossLink}} or {{#crossLink "loader/loadRes:method"}}{{/crossLink}},
		the url will be the unique identity of the resource.
		After loaded, you can acquire them by passing the url to this API. 
		*/
		getRes(url : string) : any;		
		/** Release the cache of resource by url. 
		*/
		release(url : string) : void;		
		/** Release the loaded cache of asset. 
		*/
		releaseAsset(asset : Asset) : void;		
		/** Release the cache of resource which loaded by {{#crossLink "loader/loadRes:method"}}{{/crossLink}}. 
		*/
		releaseRes(url : string) : void;		
		/** Resource cache of all resources. 
		*/
		releaseAll() : void;	
	}		
		/** AssetTable is used to find asset's uuid by url */
		export class AssetTable {		
		constructor();		
		/** Returns all asset paths in the table. 
		*/
		getAllPaths() : string[];	
	}		
		/** LoadingItems is the manager of items in pipeline.
		It hold a map of items, each entry in the map is a url to object key value pair.
		Each item always contains the following property:
		- id: The identification of the item, usually it's identical to url
		- url: The url
		- type: The type, it's the extension name of the url by default, could be specified manually too
		- error: The error happened in pipeline will be stored in this property
		- content: The content processed by the pipeline, the final result will also be stored in this property
		- complete: The flag indicate whether the item is completed by the pipeline
		- states: An object stores the states of each pipe the item go through, the state can be: Pipeline.ItemState.WORKING | Pipeline.ItemState.ERROR | Pipeline.ItemState.COMPLETE
		
		Item can hold other custom properties */
		export class LoadingItems extends CallbacksInvoker {		
		/** The map of all items */
		map : any;		
		/** The map of completed items */
		completed : any;		
		/** Total count of all items */
		totalCount : number;		
		/** Total count of completed items */
		completedCount : number;		
		/** Add a listener for an item, the callback will be invoked when the item is completed.
		@param callback can be null
		@param target can be null 
		*/
		addListener(key : string, callback : Function, target : any) : boolean;		
		/** Check if the specified key has any registered callback.
		If a callback is also specified, it will only return true if the callback is registered. 
		*/
		hasListener(key : string, callback? : Function, target? : any) : boolean;		
		/** Removes a listener.
		It will only remove when key, callback, target all match correctly. 
		*/
		remove(key : string, callback : Function, target : any) : boolean;		
		/** Removes all callbacks registered in a certain event type or all callbacks registered with a certain target
		@param key The event key to be removed or the target to be removed 
		*/
		removeAllListeners(key : string|any) : void;	
	}		
		/** A pipeline describes a sequence of manipulations, each manipulation is called a pipe.
		It's designed for loading process, so items should be urls, and the url will be the identity of each item during the process.
		A list of items can flow in the pipeline and it will output the results of all pipes.
		They flow in the pipeline like water in tubes, they go through pipe by pipe separately.
		Finally all items will flow out the pipeline and the process is finished. */
		export class Pipeline {		
		/** Constructor, pass an array of pipes to construct a new Pipeline, the pipes will be chained in the given order.
		A pipe is an object which must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.
		It can also include `async` property to identify whether it's an asynchronous process.
		
		@example 
		```js
		var pipeline = new Pipeline([
		     {
		         id: 'Downloader',
		         handle: function (item, callback) {},
		         async: true
		     },
		     {id: 'Parser', handle: function (item) {}, async: false}
		 ]);
		``` 
		*/
		Pipeline(pipes : any[]) : void;		
		/** Insert a new pipe at the given index of the pipeline.
		A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.
		@param pipe The pipe to be inserted
		@param index The index to insert 
		*/
		insertPipe(pipe : any, index : number) : void;		
		/** Add a new pipe at the end of the pipeline.
		A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.
		@param pipe The pipe to be appended 
		*/
		appendPipe(pipe : any) : void;		
		/** Let new items flow into the pipeline.
		Each item can be a simple url string or an object,
		if it's an object, it must contain `id` property.
		You can specify its type by `type` property, by default, the type is the extension name in `src`.
		By adding a `skips` property including pipe ids, you can skip these pipe.
		The object can contain any supplementary property as you want.
		
		@example 
		```js
		pipeline.flowIn([
		     'res/Background.png',
		     {
		         id: 'res/scene.json',
		         type: 'scene',
		         name: 'scene',
		         skips: ['Downloader']
		     }
		 ]);
		``` 
		*/
		flowIn(urlList : any[]) : any[];		
		/** Let new items flow into the pipeline and give a callback when the list of items are all completed.
		This is for loading dependencies for an existing item in flow, usually used in a pipe logic.
		For example, we have a loader for scene configuration file in JSON, the scene will only be fully loaded
		after all its dependencies are loaded, then you will need to use function to flow in all dependencies
		found in the configuration file, and finish the loader pipe only after all dependencies are loaded (in the callback). 
		*/
		flowInDeps(urlList : any[], callback : Function) : any[];		
		/** Copy the item states from one source item to all destination items.
		It's quite useful when a pipe generate new items from one source item,
		then you should flowIn these generated items into pipeline,
		but you probably want them to skip all pipes the source item already go through,
		you can achieve it with this API.
		
		For example, an unzip pipe will generate more items, but you won't want them to pass unzip or download pipe again.
		@param srcItem The source item
		@param dstItems A single destination item or an array of destination items 
		*/
		copyItemStates(srcItem : any, dstItems : any[]|any) : void;		
		/** Returns whether the pipeline is flowing (contains item) currently. 
		*/
		isFlowing() : boolean;		
		/** Returns all items in pipeline. 
		*/
		getItems() : LoadingItems;		
		/** Returns an item in pipeline. 
		*/
		getItems() : LoadingItems;		
		/** Removes an item in pipeline, no matter it's in progress or completed. 
		*/
		removeItem() : boolean;		
		/** Clear the current pipeline, this function will clean up the items. 
		*/
		clear() : void;		
		/** This is a callback which will be invoked while an item flow out the pipeline, you should overwrite this function.
		@param completedCount The number of the items that are already completed.
		@param totalCount The total number of the items.
		@param item The latest item which flow out the pipeline.
		
		@example 
		```js
		pipeline.onProgress = function (completedCount, totalCount, item) {
		     var progress = (100 * completedCount / totalCount).toFixed(2);
		     cc.log(progress + '%');
		 }
		``` 
		*/
		onProgress(completedCount : number, totalCount : number, item : any) : void;		
		/** This is a callback which will be invoked while all items flow out the pipeline, you should overwirte this function.
		@param error All errored urls will be stored in this array, if no error happened, then it will be null
		@param items All items.
		
		@example 
		```js
		pipeline.onComplete = function (error, items) {
		     if (error)
		         cc.log('Completed with ' + error.length + ' errors');
		     else
		         cc.log('Completed ' + items.totalCount + ' items');
		 }
		``` 
		*/
		onComplete(error : any[], items : LoadingItems) : void;	
	}		
		/** A cc.SpriteFrame has:<br/>
		 - texture: A cc.Texture2D that will be used by the _ccsg.Sprite<br/>
		 - rectangle: A rectangle of the texture<br/>
		<br/>
		You can modify the frame of a _ccsg.Sprite by doing:<br/> */
		export class SpriteFrame extends Asset {		
		constructor();		
		/** Constructor of SpriteFrame class
		@param rotated Whether the frame is rotated in the texture
		@param offset The offset of the frame in the texture
		@param originalSize The size of the frame in the texture
		
		@example 
		```js
		// ----------------------------------------------------
		// 1. Create a cc.SpriteFrame with image path
		var url = cc.url.raw('resources/textures/grossini_dance.png');
		var frame1 = new cc.SpriteFrame(url, cc.Rect(0, 0, 90, 128));
		
		// ----------------------------------------------------
		// 2. Create a cc.SpriteFrame with a texture, rect, rotated, offset and originalSize in pixels.
		var url = cc.url.raw('resources/textures/grossini_dance.png');
		var texture = cc.textureCache.addImage(url);
		var frame1 = new cc.SpriteFrame(texture, cc.Rect(0, 0, 90, 128));
		var frame2 = new cc.SpriteFrame(texture, cc.Rect(0, 0, 90, 128), false, 0, cc.Size(90, 128));
		
		// ----------------------------------------------------
		// 3. load a cc.SpriteFrame with image path (Recommend)
		var url = 'resources://test assets/PurpleMonster.png/PurpleMonster';
		var self = this;
		cc.loader.load(url, function (err, spriteFrame) {
		        var node = new cc.Node("New Sprite");
		        var sprite = node.addComponent(cc.Sprite);
		        sprite.spriteFrame = spriteFrame;
		        node.parent = self.node
		    }
		);
		
		``` 
		*/
		SpriteFrame(filename? : string|Texture2D, rect? : Rect, rotated? : boolean, offset? : Vec2, originalSize? : Size) : void;		
		/** Top border of the sprite */
		insetTop : number;		
		/** Bottom border of the sprite */
		insetBottom : number;		
		/** Left border of the sprite */
		insetLeft : number;		
		/** Right border of the sprite */
		insetRight : number;		
		/** Returns whether the texture have been loaded 
		*/
		textureLoaded() : boolean;		
		/** Add a event listener for texture loaded event. 
		*/
		addLoadedEventListener(callback : Function, target : any) : void;		
		/** Returns whether the sprite frame is rotated in the texture. 
		*/
		isRotated() : boolean;		
		/** Set whether the sprite frame is rotated in the texture. 
		*/
		setRotated(bRotated : boolean) : void;		
		/** Returns the rect of the sprite frame in the texture. 
		*/
		getRect() : Rect;		
		/** Sets the rect of the sprite frame in the texture. 
		*/
		setRect(rect : Rect) : void;		
		/** Returns the original size of the trimmed image. 
		*/
		getOriginalSize() : Size;		
		/** Sets the original size of the trimmed image. 
		*/
		setOriginalSize(size : Size) : void;		
		/** Returns the texture of the frame. 
		*/
		getTexture() : Texture2D;		
		/** Sets the texture of the frame, the texture is retained automatically. 
		*/
		_refreshTexture(texture : Texture2D) : void;		
		/** Returns the offset of the frame in the texture. 
		*/
		getOffset() : Vec2;		
		/** Sets the offset of the frame in the texture. 
		*/
		setOffset(offsets : Vec2) : void;		
		/** Clone the sprite frame. 
		*/
		clone() : SpriteFrame;		
		/** Initializes SpriteFrame with Texture, rect, rotated, offset and originalSize in pixels.<br/>
		Please pass parameters to the constructor to initialize the sprite, do not call this function yourself. 
		*/
		initWithTexture(texture : string|Texture2D, rect? : Rect, rotated? : boolean, offset? : Vec2, originalSize? : Size) : boolean;		
		/** Copy the sprite frame 
		*/
		copyWithZone() : SpriteFrame;		
		/** Copy the sprite frame 
		*/
		copy() : SpriteFrame;	
	}		
		/** !#en
		<p>
		    The base class of event listener.                                                                        <br/>
		    If you need custom listener which with different callback, you need to inherit this class.               <br/>
		    For instance, you could refer to EventListenerAcceleration, EventListenerKeyboard,                       <br/>
		     EventListenerTouchOneByOne, EventListenerCustom.
		</p>
		
		!#zh
		封装用户的事件处理逻辑。
		注意：这是一个抽象类，开发者不应该直接实例化这个类，请参考 {{#crossLink "EventListener/create:method"}}cc.EventListener.create{{/crossLink}}。 */
		export class EventListener {		
		/** Constructor 
		*/
		EventListener(type : number, listenerID : number, callback : number) : EventListner;		
		/** !#en Checks whether the listener is available.
		!#zh 检测监听器是否有效 
		*/
		checkAvailable() : boolean;		
		/** !#en Clones the listener, its subclasses have to override this method.
		!#zh 克隆监听器,它的子类必须重写此方法。 
		*/
		clone() : EventListener;		
		/** !#en Enables or disables the listener
		!#zh 启用或禁用监听器。 
		*/
		setEnabled(enabled : boolean) : void;		
		/** !#en Checks whether the listener is enabled
		!#zh 检查监听器是否可用。 
		*/
		isEnabled() : boolean;		
		/** !#en The type code of unknown event listener.
		!#zh 未知的事件监听器类型 */
		UNKNOWN : number;		
		/** !#en The type code of keyboard event listener.
		!#zh 键盘事件监听器类型 */
		KEYBOARD : number;		
		/** !#en The type code of focus event listener.
		!#zh 加速器事件监听器类型 */
		ACCELERATION : number;		
		/** !#en
		Create a EventListener object with configuration including the event type, handlers and other parameters.
		In handlers, this refer to the event listener object itself.
		You can also pass custom parameters in the configuration object,
		all custom parameters will be polyfilled into the event listener object and can be accessed in handlers.
		!#zh 通过指定不同的 Event 对象来设置想要创建的事件监听器。
		@param argObj a json object
		
		@example 
		```js
		// Create KEYBOARD EventListener.
		cc.EventListener.create({
		    event: cc.EventListener.KEYBOARD,
		    onKeyPressed: function (keyCode, event) {
		        cc.log('pressed key: ' + keyCode);
		    },
		    onKeyReleased: function (keyCode, event) {
		        cc.log('released key: ' + keyCode);
		    }
		});
		
		// Create ACCELERATION EventListener.
		cc.EventListener.create({
		    event: cc.EventListener.ACCELERATION,
		    callback: function (acc, event) {
		        cc.log('acc: ' + keyCode);
		    }
		});
		``` 
		*/
		create(argObj : any) : EventListener;	
	}		
		/** !#en
		<p>
		 cc.eventManager is a singleton object which manages event listener subscriptions and event dispatching. <br/>
		                                                                                                             <br/>
		 The EventListener list is managed in such way so that event listeners can be added and removed          <br/>
		 while events are being dispatched.
		</p>
		!#zh
		事件管理器，它主要管理事件监听器注册和派发系统事件。
		原始设计中，它支持鼠标，触摸，键盘，陀螺仪和自定义事件。
		在 Creator 的设计中，鼠标，触摸和自定义事件的监听和派发请参考 http://cocos.com/docs/creator/scripting/events.html。 */
		export class eventManager {		
		/** !#en Pauses all listeners which are associated the specified target.
		!#zh 暂停传入的 node 相关的所有监听器的事件响应。 
		*/
		pauseTarget(node : Node, recursive : boolean) : void;		
		/** !#en Resumes all listeners which are associated the specified target.
		!#zh 恢复传入的 node 相关的所有监听器的事件响应。 
		*/
		resumeTarget(node : Node, recursive : boolean) : void;		
		/** !#en
		<p>
		Adds a event listener for a specified event.<br/>
		if the parameter "nodeOrPriority" is a node,
		it means to add a event listener for a specified event with the priority of scene graph.<br/>
		if the parameter "nodeOrPriority" is a Number,
		it means to add a event listener for a specified event with the fixed priority.<br/>
		</p>
		!#zh
		将事件监听器添加到事件管理器中。<br/>
		如果参数 “nodeOrPriority” 是节点，优先级由 node 的渲染顺序决定，显示在上层的节点将优先收到事件。<br/>
		如果参数 “nodeOrPriority” 是数字，优先级则固定为该参数的数值，数字越小，优先级越高。<br/>
		@param listener The listener of a specified event or a object of some event parameters.
		@param nodeOrPriority The priority of the listener is based on the draw order of this node or fixedPriority The fixed priority of the listener. 
		*/
		addListener(listener : EventListener|any, nodeOrPriority : Node|number) : EventListener;		
		/** !#en Remove a listener.
		!#zh 移除一个已添加的监听器。
		@param listener an event listener or a registered node target
		
		@example 
		```js
		
		// 1. remove eventManager add Listener;
		var mouseListener1 = cc.eventManager.addListener({
		    event: cc.EventListener.MOUSE,
		    onMouseDown:  function(keyCode, event){ },
		    onMouseUp: function(keyCode, event){ },
		    onMouseMove: function () { },
		    onMouseScroll: function () { }
		}, node);
		
		cc.eventManager.removeListener(mouseListener1);
		
		// 2. remove eventListener create Listener;
		var mouseListener2 = cc.EventListener.create({
		    event: cc.EventListener.MOUSE,
		    onMouseDown:  function(keyCode, event){ },
		    onMouseUp: function(keyCode, event){ },
		    onMouseMove: function () { },
		    onMouseScroll: function () { }
		});
		
		cc.eventManager.removeListener(mouseListener2);
		
		``` 
		*/
		removeListener(listener: (type: number, listenerID: number, callback: number) => void) : void;		
		/** !#en Removes all listeners with the same event listener type or removes all listeners of a node.
		!#zh
		移除注册到 eventManager 中指定类型的所有事件监听器。<br/>
		1. 如果传入的第一个参数类型是 Node，那么事件管理器将移除与该对象相关的所有事件监听器。
		（如果第二参数 recursive 是 true 的话，就会连同该对象的子控件上所有的事件监听器也一并移除）<br/>
		2. 如果传入的第一个参数类型是 Number（该类型 EventListener 中定义的事件类型），
		那么事件管理器将移除该类型的所有事件监听器。<br/>
		
		下列是目前存在监听器类型：       <br/>
		cc.EventListener.UNKNOWN       <br/>
		cc.EventListener.KEYBOARD      <br/>
		cc.EventListener.ACCELERATION，<br/>
		@param listenerType listenerType or a node 
		*/
		removeListeners(listenerType : number|Node, recursive : boolean) : void;		
		/** !#en Removes all listeners
		!#zh 移除所有事件监听器。 
		*/
		removeAllListeners() : void;		
		/** !#en Sets listener's priority with fixed value.
		!#zh 设置 FixedPriority 类型监听器的优先级。
		@param listener Constructor 
		*/
		setPriority(listener: (type: number, listenerID: number, callback: number) => void, fixedPriority : number) : void;		
		/** !#en Whether to enable dispatching events
		!#zh 启用或禁用事件管理器，禁用后不会分发任何事件。 
		*/
		setEnabled(enabled : boolean) : void;		
		/** !#en Checks whether dispatching events is enabled
		!#zh 检测事件管理器是否启用。 
		*/
		isEnabled() : boolean;	
	}		
		/** !#en The touch event class
		!#zh 封装了触摸相关的信息。 */
		export class Touch {		
		/** !#en Returns the current touch location in OpenGL coordinates.、
		!#zh 获取当前触点位置。 
		*/
		getLocation() : Vec2;		
		/** !#en Returns X axis location value.
		!#zh 获取当前触点 X 轴位置。 
		*/
		getLocationX() : number;		
		/** !#en Returns Y axis location value.
		!#zh 获取当前触点 Y 轴位置。 
		*/
		getLocationY() : number;		
		/** !#en Returns the previous touch location in OpenGL coordinates.
		!#zh 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。 
		*/
		getPreviousLocation() : Vec2;		
		/** !#en Returns the start touch location in OpenGL coordinates.
		!#zh 获获取触点落下时的位置对象，对象包含 x 和 y 属性。 
		*/
		getStartLocation() : Vec2;		
		/** !#en Returns the delta distance from the previous touche to the current one in screen coordinates.
		!#zh 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。 
		*/
		getDelta() : Vec2;		
		/** !#en Returns the current touch location in screen coordinates.
		!#zh 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。 
		*/
		getLocationInView() : Vec2;		
		/** !#en Returns the previous touch location in screen coordinates.
		!#zh 获取触点在上一次事件时在游戏窗口中的位置对象，对象包含 x 和 y 属性。 
		*/
		getPreviousLocationInView() : Vec2;		
		/** !#en Returns the start touch location in screen coordinates.
		!#zh 获取触点落下时在游戏窗口中的位置对象，对象包含 x 和 y 属性。 
		*/
		getStartLocationInView() : Vec2;		
		/** !#en Returns the id of cc.Touch.
		!#zh 触点的标识 ID，可以用来在多点触摸中跟踪触点。 
		*/
		getID() : number;		
		/** !#en Sets information to touch.
		!#zh 设置触摸相关的信息。用于监控触摸事件。 
		*/
		setTouchInfo(id : number, x : number, y : number) : void;	
	}		
		/** The asset library which managing loading/unloading assets in project. */
		export class AssetLibrary {		
		/**  
		*/
		queryAssetInfo(uuid : string, callback: (error: Error, url: string, raw: boolean, ctorInEditor: Function) => void) : void;		
		/** init the asset library 
		*/
		init(options : { libraryPath : string; mountPaths : any; rawAssets? : any; rawAssetsBase? : string; }) : void;	
	}		
		/** undefined */
		export class _ComponentAttributes {		
		constructor();		
		/** Automatically add required component as a dependency. */
		requireComponent : Component;		
		/** If specified to a type, prevents Component of the same type (or subtype) to be added more than once to a Node. */
		disallowMultiple : Component;		
		/** The menu path to register a component to the editors "Component" menu. Eg. "Rendering/Camera". */
		menu : string;		
		/** Makes a component execute in edit mode.
		By default, all components are only executed in play mode,
		which means they will not have their callback functions executed while the Editor is in edit mode. */
		executeInEditMode : boolean;		
		/** This property is only available if executeInEditMode is true.
		If specified, the editor's scene view will keep updating this node in 60 fps when it is selected,
		otherwise, it will update only if necessary. */
		playOnFocus : boolean;		
		/** Specifying the url of the custom html to draw the component in inspector. */
		inspector : string;		
		/** Specifying the url of the icon to display in inspector. */
		icon : string;		
		/** The custom documentation URL */
		help : string;	
	}		
		/** <p>
		 This class manages all events of input. include: touch, mouse, accelerometer, keyboard                                       <br/>
		</p> */
		export class inputManager {		
		/**  
		*/
		handleTouchesBegin(touches : any[]) : void;		
		/**  
		*/
		handleTouchesMove(touches : any[]) : void;		
		/**  
		*/
		handleTouchesEnd(touches : any[]) : void;		
		/**  
		*/
		handleTouchesCancel(touches : any[]) : void;		
		/**  
		*/
		getSetOfTouchesEndOrCancel(touches : any[]) : any[];		
		/**  
		*/
		getHTMLElementPosition(element : HTMLElement) : any;		
		/**  
		*/
		getPreTouch(touch : Touch) : Touch;		
		/**  
		*/
		setPreTouch(touch : Touch) : void;		
		/**  
		*/
		getTouchByXY(tx : number, ty : number, pos : Vec2) : Touch;		
		/**  
		*/
		getTouchByXY(location : Vec2, pos : Vec2, eventType : number) : Event.EventMouse;		
		/**  
		*/
		getPointByEvent(event : Touch, pos : Vec2) : Vec2;		
		/**  
		*/
		getTouchesByEvent(event : Touch, pos : Vec2) : any[];		
		/**  
		*/
		registerSystemEvent(element : HTMLElement) : void;		
		/**  
		*/
		update(dt : number) : void;	
	}	
	/** Key map for keyboard event */
	export enum KEY {		
		none = 0,
		back = 0,
		menu = 0,
		backspace = 0,
		tab = 0,
		enter = 0,
		shift = 0,
		ctrl = 0,
		alt = 0,
		pause = 0,
		capslock = 0,
		escape = 0,
		space = 0,
		pageup = 0,
		pagedown = 0,
		end = 0,
		home = 0,
		left = 0,
		up = 0,
		right = 0,
		down = 0,
		select = 0,
		insert = 0,
		Delete = 0,
		a = 0,
		b = 0,
		c = 0,
		d = 0,
		e = 0,
		f = 0,
		g = 0,
		h = 0,
		i = 0,
		j = 0,
		k = 0,
		l = 0,
		m = 0,
		n = 0,
		o = 0,
		p = 0,
		q = 0,
		r = 0,
		s = 0,
		t = 0,
		u = 0,
		v = 0,
		w = 0,
		x = 0,
		y = 0,
		z = 0,
		num0 = 0,
		num1 = 0,
		num2 = 0,
		num3 = 0,
		num4 = 0,
		num5 = 0,
		num6 = 0,
		num7 = 0,
		num8 = 0,
		num9 = 0,
		'*' = 0,
		'+' = 0,
		'-' = 0,
		numdel = 0,
		'/' = 0,
		f1 = 0,
		f2 = 0,
		f3 = 0,
		f4 = 0,
		f5 = 0,
		f6 = 0,
		f7 = 0,
		f8 = 0,
		f9 = 0,
		f10 = 0,
		f11 = 0,
		f12 = 0,
		numlock = 0,
		scrolllock = 0,
		';' = 0,
		semicolon = 0,
		equal = 0,
		'=' = 0,
		',' = 0,
		comma = 0,
		dash = 0,
		'.' = 0,
		period = 0,
		forwardslash = 0,
		grave = 0,
		'[' = 0,
		openbracket = 0,
		backslash = 0,
		']' = 0,
		closebracket = 0,
		quote = 0,
		dpadLeft = 0,
		dpadRight = 0,
		dpadUp = 0,
		dpadDown = 0,
		dpadCenter = 0,	
	}	
	/** Image formats */
	export enum ImageFormat {		
		JPG = 0,
		PNG = 0,
		TIFF = 0,
		WEBP = 0,
		PVR = 0,
		ETC = 0,
		S3TC = 0,
		ATITC = 0,
		TGA = 0,
		RAWDATA = 0,
		UNKNOWN = 0,
		getImageFormatByData = 0,	
	}	
	/** Predefined constants */
	export enum Macro {		
		INVALID_INDEX = 0,
		NODE_TAG_INVALID = 0,
		PI = 0,
		PI2 = 0,
		FLT_MAX = 0,
		FLT_MIN = 0,
		RAD = 0,
		DEG = 0,
		UINT_MAX = 0,
		REPEAT_FOREVER = 0,
		FLT_EPSILON = 0,
		ONE = 0,
		ZERO = 0,
		SRC_ALPHA = 0,
		SRC_ALPHA_SATURATE = 0,
		SRC_COLOR = 0,
		DST_ALPHA = 0,
		DST_COLOR = 0,
		ONE_MINUS_SRC_ALPHA = 0,
		ONE_MINUS_SRC_COLOR = 0,
		ONE_MINUS_DST_ALPHA = 0,
		ONE_MINUS_DST_COLOR = 0,
		ONE_MINUS_CONSTANT_ALPHA = 0,
		ONE_MINUS_CONSTANT_COLOR = 0,
		LINEAR = 0,
		BLEND_DST = 0,
		WEB_ORIENTATION_PORTRAIT = 0,
		WEB_ORIENTATION_LANDSCAPE_LEFT = 0,
		WEB_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 0,
		WEB_ORIENTATION_LANDSCAPE_RIGHT = 0,
		DEVICE_ORIENTATION_PORTRAIT = 0,
		DEVICE_ORIENTATION_LANDSCAPE_LEFT = 0,
		DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 0,
		DEVICE_ORIENTATION_LANDSCAPE_RIGHT = 0,
		DEVICE_MAX_ORIENTATIONS = 0,
		VERTEX_ATTRIB_FLAG_NONE = 0,
		VERTEX_ATTRIB_FLAG_POSITION = 0,
		VERTEX_ATTRIB_FLAG_COLOR = 0,
		VERTEX_ATTRIB_FLAG_TEX_COORDS = 0,
		VERTEX_ATTRIB_FLAG_POS_COLOR_TEX = 0,
		GL_ALL = 0,
		VERTEX_ATTRIB_POSITION = 0,
		VERTEX_ATTRIB_COLOR = 0,
		VERTEX_ATTRIB_TEX_COORDS = 0,
		VERTEX_ATTRIB_MAX = 0,
		UNIFORM_PMATRIX = 0,
		UNIFORM_MVMATRIX = 0,
		UNIFORM_MVPMATRIX = 0,
		UNIFORM_TIME = 0,
		UNIFORM_SINTIME = 0,
		UNIFORM_COSTIME = 0,
		UNIFORM_RANDOM01 = 0,
		UNIFORM_SAMPLER = 0,
		UNIFORM_MAX = 0,
		SHADER_POSITION_TEXTURECOLOR = 0,
		SHADER_POSITION_TEXTURECOLORALPHATEST = 0,
		SHADER_POSITION_COLOR = 0,
		SHADER_POSITION_TEXTURE = 0,
		SHADER_POSITION_TEXTURE_UCOLOR = 0,
		SHADER_POSITION_TEXTUREA8COLOR = 0,
		SHADER_POSITION_UCOLOR = 0,
		SHADER_POSITION_LENGTHTEXTURECOLOR = 0,
		UNIFORM_PMATRIX_S = 0,
		UNIFORM_MVMATRIX_S = 0,
		UNIFORM_MVPMATRIX_S = 0,
		UNIFORM_TIME_S = 0,
		UNIFORM_SINTIME_S = 0,
		UNIFORM_COSTIME_S = 0,
		UNIFORM_RANDOM01_S = 0,
		UNIFORM_SAMPLER_S = 0,
		UNIFORM_ALPHA_TEST_VALUE_S = 0,
		ATTRIBUTE_NAME_COLOR = 0,
		ATTRIBUTE_NAME_POSITION = 0,
		ATTRIBUTE_NAME_TEX_COORD = 0,
		ITEM_SIZE = 0,
		CURRENT_ITEM = 0,
		ZOOM_ACTION_TAG = 0,
		NORMAL_TAG = 0,
		SELECTED_TAG = 0,
		DISABLE_TAG = 0,
		FIX_ARTIFACTS_BY_STRECHING_TEXEL = 0,
		DIRECTOR_STATS_POSITION = 0,
		DIRECTOR_FPS_INTERVAL = 0,
		COCOSNODE_RENDER_SUBPIXEL = 0,
		SPRITEBATCHNODE_RENDER_SUBPIXEL = 0,
		AUTO_PREMULTIPLIED_ALPHA_FOR_PNG = 0,
		OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA = 0,
		TEXTURE_ATLAS_USE_TRIANGLE_STRIP = 0,
		TEXTURE_ATLAS_USE_VAO = 0,
		USE_LA88_LABELS = 0,
		SPRITE_DEBUG_DRAW = 0,
		LABELBMFONT_DEBUG_DRAW = 0,
		LABELATLAS_DEBUG_DRAW = 0,
		ENABLE_STACKABLE_ACTIONS = 0,
		ENABLE_GL_STATE_CACHE = 0,
		BLEND_SRC = 0,
		lerp = 0,
		rand = 0,
		randomMinus1To1 = 0,
		random0To1 = 0,
		degreesToRadians = 0,
		radiansToDegrees = 0,
		nodeDrawSetup = 0,
		incrementGLDraws = 0,
		checkGLErrorDebug = 0,	
	}		
		/** The base class of most of all the objects in Fireball. */
		export class Object {		
		constructor();		
		/** !#en The name of the object.
		!#zh 该对象的名称。 */
		name : string;		
		/** !#en Indicates whether the object is not yet destroyed.
		!#zh 表示该对象是否可用（被销毁后将不可用）。 */
		isValid : boolean;		
		/** !#en
		Destroy this Object, and release all its own references to other objects.<br/>
		<br/>
		After destroy, this CCObject is not usable any more.<br/>
		You can use cc.isValid(obj) (or obj.isValid if obj is non-nil) to check whether the object is destroyed before
		accessing it.
		!#zh
		销毁该对象，并释放所有它对其它对象的引用。<br/>
		销毁后，CCObject 不再可用。<br/>
		您可以在访问对象之前使用 cc.isValid(obj)（或 obj.isValid 如果 obj 不为 null）来检查对象是否已被销毁。
		
		@example 
		```js
		obj.destroy();
		``` 
		*/
		destroy() : boolean;		
		/** !#en
		In fact, Object's "destroy" will not trigger the destruct operation in Firebal Editor.
		The destruct operation will be executed by Undo system later.
		!#zh
		事实上，对象的 “destroy” 不会在编辑器中触发析构操作，
		析构操作将在 Undo 系统中延后执行。
		
		@example 
		```js
		cc.log(obj.realDestroyInEditor());
		``` 
		*/
		realDestroyInEditor() : void;	
	}		
		/** Bit mask that controls object states. */
		export class Flags {		
		/** !#en The object will not be saved.
		!#zh 该对象将不会被保存。 */
		DontSave : number;		
		/** !#en The object will not be saved when building a player.
		!#zh 构建项目时，该对象将不会被保存。 */
		EditorOnly : number;		
		/** !#en
		Hide in game and hierarchy.
		This flag is readonly, it can only be used as an argument of scene.addEntity() or Entity.createWithFlags().
		!#zh
		在游戏和层级中隐藏该对象。<br/>
		该标记只读，它只能被用作 scene.addEntity()的一个参数。 */
		HideInGame : number;		
		/** !#en This flag is readonly, it can only be used as an argument of scene.addEntity() or Entity.createWithFlags().
		!#zh 该标记只读，它只能被用作 scene.addEntity()的一个参数。 */
		HideInEditor : number;		
		/** !#en
		Hide in game view, hierarchy, and scene view... etc.
		This flag is readonly, it can only be used as an argument of scene.addEntity() or Entity.createWithFlags().
		!#zh
		在游戏视图，层级，场景视图等等...中隐藏该对象。
		该标记只读，它只能被用作 scene.addEntity()的一个参数。 */
		Hide : number;	
	}		
		/** The fullscreen API provides an easy way for web content to be presented using the user's entire screen.
		It's invalid on safari, QQbrowser and android browser */
		export class screen {		
		/** initialize 
		*/
		init() : void;		
		/** return true if it's full now. 
		*/
		fullScreen() : boolean;		
		/** change the screen to full mode. 
		*/
		requestFullScreen(element : Element, onFullScreenChange : Function) : void;		
		/** exit the full mode. 
		*/
		exitFullScreen() : boolean;		
		/** Automatically request full screen with a touch/click event 
		*/
		autoFullScreen(element : Element, onFullScreenChange : Function) : void;	
	}		
		/** System variables */
		export class sys {		
		/** English language code */
		LANGUAGE_ENGLISH : string;		
		/** Chinese language code */
		LANGUAGE_CHINESE : string;		
		/** French language code */
		LANGUAGE_FRENCH : string;		
		/** Italian language code */
		LANGUAGE_ITALIAN : string;		
		/** German language code */
		LANGUAGE_GERMAN : string;		
		/** Spanish language code */
		LANGUAGE_SPANISH : string;		
		/** Spanish language code */
		LANGUAGE_DUTCH : string;		
		/** Russian language code */
		LANGUAGE_RUSSIAN : string;		
		/** Korean language code */
		LANGUAGE_KOREAN : string;		
		/** Japanese language code */
		LANGUAGE_JAPANESE : string;		
		/** Hungarian language code */
		LANGUAGE_HUNGARIAN : string;		
		/** Portuguese language code */
		LANGUAGE_PORTUGUESE : string;		
		/** Arabic language code */
		LANGUAGE_ARABIC : string;		
		/** Norwegian language code */
		LANGUAGE_NORWEGIAN : string;		
		/** Polish language code */
		LANGUAGE_POLISH : string;		
		/** Unknown language code */
		LANGUAGE_UNKNOWN : string;		
		OS_IOS : string;		
		OS_ANDROID : string;		
		OS_WINDOWS : string;		
		OS_MARMALADE : string;		
		OS_LINUX : string;		
		OS_BADA : string;		
		OS_BLACKBERRY : string;		
		OS_OSX : string;		
		OS_WP8 : string;		
		OS_WINRT : string;		
		OS_UNKNOWN : string;		
		UNKNOWN : number;		
		WIN32 : number;		
		LINUX : number;		
		MACOS : number;		
		ANDROID : number;		
		IOS : number;		
		IPAD : number;		
		BLACKBERRY : number;		
		NACL : number;		
		EMSCRIPTEN : number;		
		TIZEN : number;		
		WINRT : number;		
		WP8 : number;		
		MOBILE_BROWSER : number;		
		DESKTOP_BROWSER : number;		
		/** Indicates whether executes in editor's window process (Electron's renderer context) */
		EDITOR_PAGE : number;		
		/** Indicates whether executes in editor's main process (Electron's browser context) */
		EDITOR_CORE : number;		
		/** BROWSER_TYPE_WECHAT */
		BROWSER_TYPE_WECHAT : string;		
		BROWSER_TYPE_ANDROID : string;		
		BROWSER_TYPE_IE : string;		
		BROWSER_TYPE_QQ : string;		
		BROWSER_TYPE_MOBILE_QQ : string;		
		BROWSER_TYPE_UC : string;		
		BROWSER_TYPE_360 : string;		
		BROWSER_TYPE_BAIDU_APP : string;		
		BROWSER_TYPE_BAIDU : string;		
		BROWSER_TYPE_MAXTHON : string;		
		BROWSER_TYPE_OPERA : string;		
		BROWSER_TYPE_OUPENG : string;		
		BROWSER_TYPE_MIUI : string;		
		BROWSER_TYPE_FIREFOX : string;		
		BROWSER_TYPE_SAFARI : string;		
		BROWSER_TYPE_CHROME : string;		
		BROWSER_TYPE_LIEBAO : string;		
		BROWSER_TYPE_QZONE : string;		
		BROWSER_TYPE_SOUGOU : string;		
		BROWSER_TYPE_UNKNOWN : string;		
		/** Is native ? This is set to be true in jsb auto. */
		isNative : boolean;		
		/** Is web browser ? */
		isBrowser : boolean;		
		/** Indicate whether system is mobile system */
		isMobile : boolean;		
		/** Indicate the running platform */
		platform : number;		
		/** Indicate the current language of the running system */
		language : string;		
		/** Indicate the running os name */
		os : string;		
		/** Indicate the running browser type */
		browserType : string;		
		/** Indicate the running browser version */
		browserVersion : number;		
		/** Indicate the real pixel resolution of the whole game window */
		windowPixelResolution : number;		
		/** cc.sys.localStorage is a local storage component. */
		localStorage : any;		
		/** The capabilities of the current platform */
		capabilities : any;		
		/** Forces the garbage collection, only available in JSB 
		*/
		garbageCollect() : void;		
		/** Dumps rooted objects, only available in JSB 
		*/
		dumpRoot() : void;		
		/** Restart the JS VM, only available in JSB 
		*/
		restartVM() : void;		
		/** Clean a script in the JS VM, only available in JSB 
		*/
		cleanScript(jsfile : string) : void;		
		/** Check whether an object is valid,
		In web engine, it will return true if the object exist
		In native engine, it will return true if the JS object and the correspond native object are both valid 
		*/
		isObjectValid(obj : any) : boolean;		
		/** Dump system informations 
		*/
		dump() : void;		
		/** Open a url in browser 
		*/
		openURL(url : string) : void;	
	}		
		/** cc.view is the singleton object which represents the game window.<br/>
		It's main task include: <br/>
		 - Apply the design resolution policy<br/>
		 - Provide interaction with the window, like resize event on web, retina display support, etc...<br/>
		 - Manage the game view port which can be different with the window<br/>
		 - Manage the content scale and translation<br/>
		<br/>
		Since the cc.view is a singleton, you don't need to call any constructor or create functions,<br/>
		the standard way to use it is by calling:<br/>
		 - cc.view.methodName(); <br/> */
		export class View {		
		/** <p>
		Sets view's target-densitydpi for android mobile browser. it can be set to:           <br/>
		  1. cc.macro.DENSITYDPI_DEVICE, value is "device-dpi"                                      <br/>
		  2. cc.macro.DENSITYDPI_HIGH, value is "high-dpi"  (default value)                         <br/>
		  3. cc.macro.DENSITYDPI_MEDIUM, value is "medium-dpi" (browser's default value)            <br/>
		  4. cc.macro.DENSITYDPI_LOW, value is "low-dpi"                                            <br/>
		  5. Custom value, e.g: "480"                                                         <br/>
		</p> 
		*/
		setTargetDensityDPI(densityDPI : string) : void;		
		/** Returns the current target-densitydpi value of cc.view. 
		*/
		getTargetDensityDPI() : string;		
		/** Sets whether resize canvas automatically when browser's size changed.<br/>
		Useful only on web.
		@param enabled Whether enable automatic resize with browser's resize event 
		*/
		resizeWithBrowserSize(enabled : boolean) : void;		
		/** Sets the callback function for cc.view's resize action,<br/>
		this callback will be invoked before applying resolution policy, <br/>
		so you can do any additional modifications within the callback.<br/>
		Useful only on web.
		@param callback The callback function 
		*/
		setResizeCallback(callback : Function|void) : void;		
		/** Sets whether the engine modify the "viewport" meta in your web page.<br/>
		It's enabled by default, we strongly suggest you not to disable it.<br/>
		And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden<br/>
		Only useful on web
		@param enabled Enable automatic modification to "viewport" meta 
		*/
		adjustViewPort(enabled : boolean) : void;		
		/** Retina support is enabled by default for Apple device but disabled for other devices,<br/>
		it takes effect only when you called setDesignResolutionPolicy<br/>
		Only useful on web
		@param enabled Enable or disable retina display 
		*/
		enableRetina(enabled : boolean) : void;		
		/** Check whether retina display is enabled.<br/>
		Only useful on web 
		*/
		isRetinaEnabled() : boolean;		
		/** If enabled, the application will try automatically to enter full screen mode on mobile devices<br/>
		You can pass true as parameter to enable it and disable it by passing false.<br/>
		Only useful on web
		@param enabled Enable or disable auto full screen on mobile devices 
		*/
		enableAutoFullScreen(enabled : boolean) : void;		
		/** Check whether auto full screen is enabled.<br/>
		Only useful on web 
		*/
		isAutoFullScreenEnabled() : boolean;		
		/** Get whether render system is ready(no matter opengl or canvas),<br/>
		this name is for the compatibility with cocos2d-x, subclass must implement this method. 
		*/
		isOpenGLReady() : boolean;		
		/** Open or close IME keyboard , subclass must implement this method. 
		*/
		setIMEKeyboardState(isOpen : boolean) : void;		
		/** Sets the resolution translate on View. 
		*/
		setContentTranslateLeftTop(offsetLeft : number, offsetTop : number) : void;		
		/** Returns the resolution translate on View 
		*/
		getContentTranslateLeftTop() : Size;		
		/** Not support on native.<br/>
		On web, it sets the size of the canvas. 
		*/
		setCanvasSize(width : number, height : number) : void;		
		/** Returns the canvas size of the view.<br/>
		On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
		On web, it returns the size of the canvas element. 
		*/
		getCanvasSize() : Size;		
		/** Returns the frame size of the view.<br/>
		On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
		On web, it returns the size of the canvas's outer DOM element. 
		*/
		getFrameSize() : Size;		
		/** On native, it sets the frame size of view.<br/>
		On web, it sets the size of the canvas's outer DOM element. 
		*/
		setFrameSize(width : number, height : number) : void;		
		/** Returns the visible area size of the view port. 
		*/
		getVisibleSize() : Size;		
		/** Returns the visible area size of the view port. 
		*/
		getVisibleSizeInPixel() : Size;		
		/** Returns the visible origin of the view port. 
		*/
		getVisibleOrigin() : Vec2;		
		/** Returns the visible origin of the view port. 
		*/
		getVisibleOriginInPixel() : Vec2;		
		/** Returns whether developer can set content's scale factor. 
		*/
		canSetContentScaleFactor() : boolean;		
		/** Returns the current resolution policy 
		*/
		getResolutionPolicy() : ResolutionPolicy;		
		/** Sets the current resolution policy 
		*/
		setResolutionPolicy(resolutionPolicy : ResolutionPolicy|number) : void;		
		/** Sets the resolution policy with designed view size in points.<br/>
		The resolution policy include: <br/>
		[1] ResolutionExactFit       Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.<br/>
		[2] ResolutionNoBorder       Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.<br/>
		[3] ResolutionShowAll        Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.<br/>
		[4] ResolutionFixedHeight    Scale the content's height to screen's height and proportionally scale its width<br/>
		[5] ResolutionFixedWidth     Scale the content's width to screen's width and proportionally scale its height<br/>
		[cc.ResolutionPolicy]        [Web only feature] Custom resolution policy, constructed by cc.ResolutionPolicy<br/>
		@param width Design resolution width.
		@param height Design resolution height.
		@param resolutionPolicy The resolution policy desired 
		*/
		setDesignResolutionSize(width : number, height : number, resolutionPolicy : ResolutionPolicy|number) : void;		
		/** Returns the designed size for the view.
		Default resolution size is the same as 'getFrameSize'. 
		*/
		getDesignResolutionSize() : Size;		
		/** Sets the container to desired pixel resolution and fit the game content to it.
		This function is very useful for adaptation in mobile browsers.
		In some HD android devices, the resolution is very high, but its browser performance may not be very good.
		In this case, enabling retina display is very costy and not suggested, and if retina is disabled, the image may be blurry.
		But this API can be helpful to set a desired pixel resolution which is in between.
		This API will do the following:
		    1. Set viewport's width to the desired width in pixel
		    2. Set body width to the exact pixel resolution
		    3. The resolution policy will be reset with designed view size in points.
		@param width Design resolution width.
		@param height Design resolution height.
		@param resolutionPolicy The resolution policy desired 
		*/
		setRealPixelResolution(width : number, height : number, resolutionPolicy : ResolutionPolicy|number) : void;		
		/** Sets view port rectangle with points.
		@param w width
		@param h height 
		*/
		setViewPortInPoints(x : number, y : number, w : number, h : number) : void;		
		/** Sets Scissor rectangle with points. 
		*/
		setScissorInPoints(x : number, y : number, w : number, h : number) : void;		
		/** Returns whether GL_SCISSOR_TEST is enable 
		*/
		isScissorEnabled() : boolean;		
		/** Returns the current scissor rectangle 
		*/
		getScissorRect() : Rect;		
		/** Sets the name of the view 
		*/
		setViewName(viewName : string) : void;		
		/** Returns the name of the view 
		*/
		getViewName() : string;		
		/** Returns the view port rectangle. 
		*/
		getViewPortRect() : Rect;		
		/** Returns scale factor of the horizontal direction (X axis). 
		*/
		getScaleX() : number;		
		/** Returns scale factor of the vertical direction (Y axis). 
		*/
		getScaleY() : number;		
		/** Returns device pixel ratio for retina display. 
		*/
		getDevicePixelRatio() : number;		
		/** Returns the real location in view for a translation based on a related position
		@param tx The X axis translation
		@param ty The Y axis translation
		@param relatedPos The related position object including "left", "top", "width", "height" informations 
		*/
		convertToLocationInView(tx : number, ty : number, relatedPos : any) : Vec2;	
	}		
		/** <p>cc.ContainerStrategy class is the root strategy class of container's scale strategy,
		it controls the behavior of how to scale the cc.container and cc.game.canvas object</p> */
		export class ContainerStrategy {		
		/** Manipulation before appling the strategy
		@param view The target view 
		*/
		preApply(view : View) : void;		
		/** Function to apply this strategy 
		*/
		apply(view : View, designedResolution : Size) : void;		
		/** Manipulation after applying the strategy
		@param view The target view 
		*/
		postApply(view : View) : void;	
	}		
		/** <p>cc.ContentStrategy class is the root strategy class of content's scale strategy,
		it controls the behavior of how to scale the scene and setup the viewport for the game</p> */
		export class ContentStrategy {		
		/** Manipulation before applying the strategy
		@param view The target view 
		*/
		preApply(view : View) : void;		
		/** Function to apply this strategy
		The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
		The target view can then apply these value to itself, it's preferred not to modify directly its private variables 
		*/
		apply(view : View, designedResolution : Size) : any;		
		/** Manipulation after applying the strategy
		@param view The target view 
		*/
		postApply(view : View) : void;	
	}		
		/** undefined */
		export class EqualToFrame extends ContainerStrategy {	
	}		
		/** undefined */
		export class ProportionalToFrame extends ContainerStrategy {	
	}		
		/** undefined */
		export class EqualToWindow extends EqualToFrame {	
	}		
		/** undefined */
		export class ProportionalToWindow extends ProportionalToFrame {	
	}		
		/** undefined */
		export class OriginalContainer extends ContainerStrategy {	
	}		
		/** <p>cc.ResolutionPolicy class is the root strategy class of scale strategy,
		its main task is to maintain the compatibility with Cocos2d-x</p> */
		export class ResolutionPolicy {		
		/** 
		@param containerStg The container strategy
		@param contentStg The content strategy 
		*/
		ResolutionPolicy(containerStg : ContainerStrategy, contentStg : ContentStrategy) : void;		
		/** Manipulation before applying the resolution policy
		@param view The target view 
		*/
		preApply(view : View) : void;		
		/** Function to apply this resolution policy
		The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
		The target view can then apply these value to itself, it's preferred not to modify directly its private variables
		@param view The target view
		@param designedResolution The user defined design resolution 
		*/
		apply(view : View, designedResolution : Size) : any;		
		/** Manipulation after appyling the strategy
		@param view The target view 
		*/
		postApply(view : View) : void;		
		/** Setup the container's scale strategy 
		*/
		setContainerStrategy(containerStg : ContainerStrategy) : void;		
		/** Setup the content's scale strategy 
		*/
		setContentStrategy(contentStg : ContentStrategy) : void;		
		/** The entire application is visible in the specified area without trying to preserve the original aspect ratio.<br/>
		Distortion can occur, and the application may appear stretched or compressed. */
		EXACT_FIT : number;		
		/** The entire application fills the specified area, without distortion but possibly with some cropping,<br/>
		while maintaining the original aspect ratio of the application. */
		NO_BORDER : number;		
		/** The entire application is visible in the specified area without distortion while maintaining the original<br/>
		aspect ratio of the application. Borders can appear on two sides of the application. */
		SHOW_ALL : number;		
		/** The application takes the height of the design resolution size and modifies the width of the internal<br/>
		canvas so that it fits the aspect ratio of the device<br/>
		no distortion will occur however you must make sure your application works on different<br/>
		aspect ratios */
		FIXED_HEIGHT : number;		
		/** The application takes the width of the design resolution size and modifies the height of the internal<br/>
		canvas so that it fits the aspect ratio of the device<br/>
		no distortion will occur however you must make sure your application works on different<br/>
		aspect ratios */
		FIXED_WIDTH : number;		
		/** Unknow policy */
		UNKNOWN : number;	
	}		
		/** cc.visibleRect is a singleton object which defines the actual visible rect of the current view,
		it should represent the same rect as cc.view.getViewportRect() */
		export class visibleRect {		
		/** initialize 
		*/
		init(visibleRect : Rect) : void;		
		/** Top left coordinate of the screen related to the game scene. */
		topLeft : Vec2;		
		/** Top right coordinate of the screen related to the game scene. */
		topRight : Vec2;		
		/** Top center coordinate of the screen related to the game scene. */
		top : Vec2;		
		/** Bottom left coordinate of the screen related to the game scene. */
		bottomLeft : Vec2;		
		/** Bottom right coordinate of the screen related to the game scene. */
		bottomRight : Vec2;		
		/** Bottom center coordinate of the screen related to the game scene. */
		bottom : Vec2;		
		/** Center coordinate of the screen related to the game scene. */
		center : Vec2;		
		/** Left center coordinate of the screen related to the game scene. */
		left : Vec2;		
		/** Right center coordinate of the screen related to the game scene. */
		right : Vec2;		
		/** Width of the screen. */
		width : number;		
		/** Height of the screen. */
		height : number;	
	}		
		/** The CallbacksHandler is an abstract class that can register and unregister callbacks by key.
		Subclasses should implement their own methods about how to invoke the callbacks. */
		export class _CallbacksHandler {		
		constructor();		
		/** 
		@param target can be null 
		*/
		add(key : string, callback : Function, target? : any) : boolean;		
		/** Check if the specified key has any registered callback. If a callback is also specified,
		it will only return true if the callback is registered. 
		*/
		has(key : string, callback? : Function, target? : any) : boolean;		
		/** Removes all callbacks registered in a certain event type or all callbacks registered with a certain target
		@param key The event key to be removed or the target to be removed 
		*/
		removeAll(key : string|any) : void;		
		/**  
		*/
		remove(key : string, callback : Function, target : any) : boolean;	
	}		
		/** The callbacks invoker to handle and invoke callbacks by key */
		export class CallbacksInvoker extends _CallbacksHandler {		
		constructor();		
		/**  
		*/
		invoke(key : string, p1? : any, p2? : any, p3? : any, p4? : any, p5? : any) : void;		
		/**  
		*/
		invokeAndRemove(key : string, p1? : any, p2? : any, p3? : any, p4? : any, p5? : any) : void;		
		/** 
		@param remove remove callbacks after invoked 
		*/
		bindKey(key : string, remove? : boolean) : Function;	
	}		
		/** !#en Contains information collected during deserialization
		!#zh 包含反序列化时的一些信息 */
		export class Details {		
		constructor();		
		/** list of the depends assets' uuid */
		uuidList : String[];		
		/** the obj list whose field needs to load asset by uuid */
		uuidObjList : any[];		
		/** the corresponding field name which referenced to the asset */
		uuidPropList : String[];		
		/** the corresponding field name which referenced to the raw object */
		rawProp : string;		
		reset() : void;		
		/**  
		*/
		getUuidOf(obj : any, propName : string) : string;		
		/**  
		*/
		assignAssetsBy(getter : Function) : boolean;		
		/**  
		*/
		push(obj : any, propName : string, uuid : string) : void;	
	}		
		/** undefined */
		export class url {		
		/** Returns the url of raw assets, you will only need this if the raw asset is inside the "resources" folder.
		
		@example 
		```js
		---
		var url = cc.url.raw("textures/myTexture.png");
		console.log(url);   // "resources/raw/textures/myTexture.png"
		
		``` 
		*/
		raw(url : string) : string;		
		/** Returns the url of builtin raw assets. This method can only used in editor.
		
		@example 
		```js
		---
		var url = cc.url.builtinRaw("textures/myTexture.png");
		console.log(url);   // "resources/default-raw/textures/myTexture.png"
		
		``` 
		*/
		builtinRaw(url : string) : string;	
	}		
		/** A base node for CCNode and CCEScene, it will:
		- provide the same api with origin cocos2d rendering node (SGNode)
		- maintains properties of the internal SGNode
		- retain and release the SGNode
		- serialize datas for SGNode (but SGNode itself will not being serialized)
		- notifications if some properties changed
		- define some interfaces shares between CCNode and CCEScene */
		export class _BaseNode extends Object {		
		/** !#en Name of node.
		!#zh 该节点名称。 */
		name : string;		
		/** !#en The parent of the node.
		!#zh 该节点的父节点。 */
		parent : Node;		
		/** !#en The uuid for editor, will be stripped before building project.
		!#zh 用于编辑器使用的 uuid，在构建项目之前将会被剔除。 */
		uuid : string;		
		/** !#en Skew x
		!#zh 该节点 Y 轴倾斜角度。 */
		skewX : number;		
		/** !#en Skew y
		!#zh 该节点 X 轴倾斜角度。 */
		skewY : number;		
		/** !#en Z order in depth which stands for the drawing order.
		!#zh 该节点渲染排序的 Z 轴深度。 */
		zIndex : number;		
		/** !#en Rotation of node.
		!#zh 该节点旋转角度。 */
		rotation : number;		
		/** !#en Rotation on x axis.
		!#zh 该节点 X 轴旋转角度。 */
		rotationX : number;		
		/** !#en Rotation on y axis.
		!#zh 该节点 Y 轴旋转角度。 */
		rotationY : number;		
		/** !#en Scale on x axis.
		!#zh 节点 X 轴缩放。 */
		scaleX : number;		
		/** !#en Scale on y axis.
		!#zh 节点 Y 轴缩放。 */
		scaleY : number;		
		/** !#en x axis position of node.
		!#zh 节点 X 轴坐标。 */
		x : number;		
		/** !#en y axis position of node.
		!#zh 节点 Y 轴坐标。 */
		y : number;		
		/** !#en All children nodes.
		!#zh 节点的所有子节点。 */
		children : Node[];		
		/** !#en All children nodes.
		!#zh 节点的子节点数量。 */
		childrenCount : number;		
		/** !#en Anchor point's position on x axis.
		!#zh 节点 X 轴锚点位置。 */
		anchorX : number;		
		/** !#en Anchor point's position on y axis.
		!#zh 节点 Y 轴锚点位置。 */
		anchorY : number;		
		/** !#en Width of node.
		!#zh 节点宽度。 */
		width : number;		
		/** !#en Height of node.
		!#zh 节点高度。 */
		height : number;		
		/** !#en Tag of node.
		!#zh 节点标签。 */
		tag : number;		
		/** !#en Opacity of node, default value is 255.
		!#zh 节点透明度，默认值为 255。 */
		opacity : number;		
		/** !#en Indicate whether node's opacity value affect its child nodes, default value is false.
		!#zh 节点的不透明度值是否影响其子节点，默认值为 false。 */
		cascadeOpacity : boolean;		
		/** !#en Color of node, default value is white: (255, 255, 255).
		!#zh 节点颜色。默认为白色，数值为：（255，255，255）。 */
		color : Color;		
		/** !#en
		Properties configuration function </br>
		All properties in attrs will be set to the node, </br>
		when the setter of the node is available, </br>
		the property will be set via setter function.</br>
		!#zh 属性配置函数。在 attrs 的所有属性将被设置为节点属性。
		@param attrs Properties to be set to node
		
		@example 
		```js
		var attrs = { key: 0, num: 100 };
		node.attr(attrs);
		``` 
		*/
		attr(attrs : any) : void;		
		/** !#en
		Defines the oder in which the nodes are renderer.
		Nodes that have a Global Z Order lower, are renderer first.
		<br/>
		In case two or more nodes have the same Global Z Order, the oder is not guaranteed.
		The only exception if the Nodes have a Global Z Order == 0. In that case, the Scene Graph order is used.
		<br/>
		By default, all nodes have a Global Z Order = 0. That means that by default, the Scene Graph order is used to render the nodes.
		<br/>
		Global Z Order is useful when you need to render nodes in an order different than the Scene Graph order.
		<br/>
		Limitations: Global Z Order can't be used used by Nodes that have SpriteBatchNode as one of their ancestors.
		And if ClippingNode is one of the ancestors, then "global Z order" will be relative to the ClippingNode.
		!#zh
		定义节点的渲染顺序。
		节点具有全局 Z 顺序，顺序越小的节点，最先渲染。
		</br>
		假设两个或者更多的节点拥有相同的全局 Z 顺序，那么渲染顺序无法保证。
		唯一的例外是如果节点的全局 Z 顺序为零，那么场景中的顺序是可以使用默认的。
		</br>
		所有的节点全局 Z 顺序都是零。这就是说，默认使用场景中的顺序来渲染节点。
		</br>
		全局 Z 顺序是非常有用的当你需要渲染节点按照不同的顺序而不是场景顺序。
		</br>
		局限性: 全局 Z 顺序不能够被拥有继承 “SpriteBatchNode” 的节点使用。
		并且如果 “ClippingNode” 是其中之一的上代，那么 “global Z order” 将会和 “ClippingNode” 有关。
		
		@example 
		```js
		node.setGlobalZOrder(0);
		``` 
		*/
		setGlobalZOrder(globalZOrder : number) : void;		
		/** !#en Return the Node's Global Z Order.
		!#zh 获取节点的全局 Z 顺序。
		
		@example 
		```js
		cc.log("Global Z Order: " + node.getGlobalZOrder());
		``` 
		*/
		getGlobalZOrder() : number;		
		/** !#en
		Returns the scale factor of the node.
		Assertion will fail when _scaleX != _scaleY.
		!#zh 获取节点的缩放。当 X 轴和 Y 轴有相同的缩放数值时。
		
		@example 
		```js
		cc.log("Node Scale: " + node.getScale());
		``` 
		*/
		getScale() : number;		
		/** !#en Sets the scale factor of the node. 1.0 is the default scale factor. This function can modify the X and Y scale at the same time.
		!#zh 设置节点的缩放比例，默认值为 1.0。这个函数可以在同一时间修改 X 和 Y 缩放。
		@param scale scaleX or scale
		
		@example 
		```js
		node.setScale(cc.v2(1, 1));
		node.setScale(1, 1);
		``` 
		*/
		setScale(scale : number|Vec2, scaleY? : number) : void;		
		/** !#en Returns a copy of the position (x,y) of the node in cocos2d coordinates. (0,0) is the left-bottom corner.
		!#zh 获取在父节点坐标系中节点的位置（ x , y ）。
		
		@example 
		```js
		cc.log("Node Position: " + node.getPosition());
		``` 
		*/
		getPosition() : Vec2;		
		/** !#en
		Changes the position (x,y) of the node in cocos2d coordinates.<br/>
		The original point (0,0) is at the left-bottom corner of screen.<br/>
		Usually we use cc.v2(x,y) to compose CCVec2 object.<br/>
		and Passing two numbers (x,y) is more efficient than passing CCPoint object.
		!#zh
		设置节点在父坐标系中的位置。<br/>
		可以通过 2 种方式设置坐标点：<br/>
		1.传入 cc.v2(x, y) 类型为 cc.Vec2 的对象。<br/>
		2.传入 2 个数值 x 和 y。
		@param newPosOrxValue The position (x,y) of the node in coordinates or the X coordinate for position
		@param yValue Y coordinate for position
		
		@example 
		```js
		node.setPosition(cc.v2(0, 0));
		node.setPosition(0, 0);
		
		``` 
		*/
		setPosition(newPosOrxValue : Vec2|number, yValue? : number) : void;		
		/** !#en
		Returns a copy of the anchor point.<br/>
		Anchor point is the point around which all transformations and positioning manipulations take place.<br/>
		It's like a pin in the node where it is "attached" to its parent. <br/>
		The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner. <br/>
		But you can use values higher than (1,1) and lower than (0,0) too.  <br/>
		The default anchor point is (0.5,0.5), so it starts at the center of the node.
		!#zh
		获取节点锚点，用百分比表示。<br/>
		锚点应用于所有变换和坐标点的操作，它就像在节点上连接其父节点的大头针。<br/>
		锚点是标准化的，就像百分比一样。(0，0) 表示左下角，(1，1) 表示右上角。<br/>
		但是你可以使用比（1，1）更高的值或者比（0，0）更低的值。<br/>
		默认的锚点是（0.5，0.5），因此它开始于节点的中心位置。<br/>
		注意：Creator 中的锚点仅用于定位所在的节点，子节点的定位不受影响。
		
		@example 
		```js
		cc.log("Node AnchorPoint: " + node.getAnchorPoint());
		``` 
		*/
		getAnchorPoint() : Vec2;		
		/** !#en
		Sets the anchor point in percent. <br/>
		anchor point is the point around which all transformations and positioning manipulations take place. <br/>
		It's like a pin in the node where it is "attached" to its parent. <br/>
		The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.<br/>
		But you can use values higher than (1,1) and lower than (0,0) too.<br/>
		The default anchor point is (0.5,0.5), so it starts at the center of the node.
		!#zh
		设置锚点的百分比。<br/>
		锚点应用于所有变换和坐标点的操作，它就像在节点上连接其父节点的大头针。<br/>
		锚点是标准化的，就像百分比一样。(0，0) 表示左下角，(1，1) 表示右上角。<br/>
		但是你可以使用比（1，1）更高的值或者比（0，0）更低的值。<br/>
		默认的锚点是（0.5，0.5），因此它开始于节点的中心位置。<br/>
		注意：Creator 中的锚点仅用于定位所在的节点，子节点的定位不受影响。
		@param point The anchor point of node or The x axis anchor of node.
		@param y The y axis anchor of node.
		
		@example 
		```js
		node.setAnchorPoint(cc.v2(1, 1));
		node.setAnchorPoint(1, 1);
		``` 
		*/
		setAnchorPoint(point : Vec2|number, y? : number) : void;		
		/** !#en
		Returns a copy of the anchor point in absolute pixels.  <br/>
		you can only read it. If you wish to modify it, use setAnchorPoint.
		!#zh
		返回锚点的绝对像素位置。<br/>
		你只能读它。如果您要修改它，使用 setAnchorPoint。
		
		@example 
		```js
		cc.log("AnchorPointInPoints: " + node.getAnchorPointInPoints());
		``` 
		*/
		getAnchorPointInPoints() : Vec2;		
		/** !#en
		Returns a copy the untransformed size of the node. <br/>
		The contentSize remains the same no matter the node is scaled or rotated.<br/>
		All nodes has a size. Layer and Scene has the same size of the screen by default. <br/>
		!#zh 获取节点自身大小，不受该节点是否被缩放或者旋转的影响。
		@param ignoreSizeProvider true if you need to get the original size of the node
		
		@example 
		```js
		cc.log("Content Size: " + node.getContentSize());
		``` 
		*/
		getContentSize(ignoreSizeProvider? : boolean) : Size;		
		/** !#en
		Sets the untransformed size of the node.<br/>
		The contentSize remains the same no matter the node is scaled or rotated.<br/>
		All nodes has a size. Layer and Scene has the same size of the screen.
		!#zh 设置节点原始大小，不受该节点是否被缩放或者旋转的影响。
		@param size The untransformed size of the node or The untransformed size's width of the node.
		@param height The untransformed size's height of the node.
		
		@example 
		```js
		node.setContentSize(cc.size(100, 100));
		node.setContentSize(100, 100);
		``` 
		*/
		setContentSize(size : Size|number, height? : number) : void;		
		/** !#en
		Returns a "local" axis aligned bounding box of the node. <br/>
		The returned box is relative only to its parent.
		!#zh 返回父节坐标系下的轴向对齐的包围盒。
		
		@example 
		```js
		var boundingBox = node.getBoundingBox();
		``` 
		*/
		getBoundingBox() : Rect;		
		/** !#en Stops all running actions and schedulers.
		!#zh 停止所有正在播放的动作和计时器。
		
		@example 
		```js
		node.cleanup();
		``` 
		*/
		cleanup() : void;		
		/** !#en Returns a child from the container given its tag.
		!#zh 通过标签获取节点的子节点。
		@param aTag An identifier to find the child node.
		
		@example 
		```js
		var child = node.getChildByTag(1001);
		``` 
		*/
		getChildByTag(aTag : number) : Node;		
		/** !#en Returns a child from the container given its uuid.
		!#zh 通过 uuid 获取节点的子节点。
		@param uuid The uuid to find the child node.
		
		@example 
		```js
		var child = node.getChildByUuid(uuid);
		``` 
		*/
		getChildByUuid(uuid : string) : Node;		
		/** !#en Returns a child from the container given its name.
		!#zh 通过名称获取节点的子节点。
		@param name A name to find the child node.
		
		@example 
		```js
		var child = node.getChildByName("Test Node");
		``` 
		*/
		getChildByName(name : string) : Node;		
		/** !#en
		"add" logic MUST only be in this method <br/>
		!#zh
		添加子节点，并且可以修改该节点的 局部 Z 顺序和标签。
		@param child A child node
		@param localZOrder Z order for drawing priority. Please refer to setZOrder(int)
		@param tag An integer or a name to identify the node easily. Please refer to setTag(int) and setName(string)
		
		@example 
		```js
		node.addChild(newNode, 1, 1001);
		``` 
		*/
		addChild(child : Node, localZOrder? : number, tag? : number|string) : void;		
		/** !#en
		Remove itself from its parent node. If cleanup is true, then also remove all actions and callbacks. <br/>
		If the cleanup parameter is not passed, it will force a cleanup. <br/>
		If the node orphan, then nothing happens.
		!#zh
		从父节点中删除一个节点。cleanup 参数为 true，那么在这个节点上所有的动作和回调都会被删除，反之则不会。<br/>
		如果不传入 cleanup 参数，默认是 true 的。<br/>
		如果这个节点是一个孤节点，那么什么都不会发生。
		@param cleanup true if all actions and callbacks on this node should be removed, false otherwise.
		
		@example 
		```js
		node.removeFromParent();
		node.removeFromParent(false);
		``` 
		*/
		removeFromParent(cleanup? : boolean) : void;		
		/** !#en
		Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter. </p>
		If the cleanup parameter is not passed, it will force a cleanup. <br/>
		"remove" logic MUST only be on this method  <br/>
		If a class wants to extend the 'removeChild' behavior it only needs <br/>
		to override this method.
		!#zh
		移除节点中指定的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
		如果 cleanup 参数不传入，默认为 true 表示清理。<br/>
		@param child The child node which will be removed.
		@param cleanup true if all running actions and callbacks on the child node will be cleanup, false otherwise.
		
		@example 
		```js
		node.removeChild(newNode);
		node.removeChild(newNode, false);
		``` 
		*/
		removeChild(child : Node, cleanup? : boolean) : void;		
		/** !#en
		Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
		If the cleanup parameter is not passed, it will force a cleanup. <br/>
		!#zh
		通过标签移除节点中指定的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
		如果 cleanup 参数不传入，默认为 true 表示清理。
		@param tag An integer number that identifies a child node
		@param cleanup true if all running actions and callbacks on the child node will be cleanup, false otherwise.
		
		@example 
		```js
		node.removeChildByTag(1001);
		node.removeChildByTag(1001, false);
		``` 
		*/
		removeChildByTag(tag : number, cleanup? : boolean) : void;		
		/** !#en
		Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter. <br/>
		If the cleanup parameter is not passed, it will force a cleanup.
		!#zh
		移除节点所有的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
		如果 cleanup 参数不传入，默认为 true 表示清理。
		@param cleanup true if all running actions on all children nodes should be cleanup, false otherwise.
		
		@example 
		```js
		node.removeAllChildren();
		node.removeAllChildren(false);
		``` 
		*/
		removeAllChildren(cleanup? : boolean) : void;		
		/** !#en
		Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.<br/>
		The matrix is in Pixels. The returned transform is readonly and cannot be changed.
		!#zh
		返回将父节点的坐标系转换成节点（局部）的空间坐标系的矩阵。<br/>
		该矩阵以像素为单位。返回的矩阵是只读的，不能更改。
		
		@example 
		```js
		var affineTransform = node.getParentToNodeTransform();
		``` 
		*/
		getParentToNodeTransform() : AffineTransform;		
		/** !#en Returns the world affine transform matrix. The matrix is in Pixels.
		!#zh 返回节点到世界坐标系的仿射变换矩阵。矩阵单位是像素。
		
		@example 
		```js
		var affineTransform = node.getNodeToWorldTransform();
		``` 
		*/
		getNodeToWorldTransform() : AffineTransform;		
		/** !#en
		Returns the world affine transform matrix. The matrix is in Pixels.<br/>
		This method is AR (Anchor Relative).
		!#zh
		返回节点到世界坐标仿射变换矩阵。矩阵单位是像素。<br/>
		该方法基于节点坐标。
		
		@example 
		```js
		var mat = node.getNodeToWorldTransformAR();
		``` 
		*/
		getNodeToWorldTransformAR() : AffineTransform;		
		/** !#en Returns the inverse world affine transform matrix. The matrix is in Pixels.
		!#en 返回世界坐标系到节点坐标系的逆矩阵。
		
		@example 
		```js
		var affineTransform = node.getWorldToNodeTransform();
		``` 
		*/
		getWorldToNodeTransform() : AffineTransform;		
		/** !#en Converts a Point to node (local) space coordinates. The result is in Vec2.
		!#zh 将一个点转换到节点 (局部) 坐标系。结果以 Vec2 为单位。
		
		@example 
		```js
		var newVec2 = node.convertToNodeSpace(cc.v2(100, 100));
		``` 
		*/
		convertToNodeSpace(worldPoint : Vec2) : Vec2;		
		/** !#en Converts a Point to world space coordinates. The result is in Points.
		!#zh 将一个点转换到世界空间坐标系。结果以 Vec2 为单位。
		
		@example 
		```js
		var newVec2 = node.convertToWorldSpace(cc.v2(100, 100));
		``` 
		*/
		convertToWorldSpace(nodePoint : Vec2) : Vec2;		
		/** !#en
		Converts a Point to node (local) space coordinates. The result is in Points.<br/>
		treating the returned/received node point as anchor relative.
		!#zh
		将一个点转换到节点 (局部) 空间坐标系。结果以 Vec2 为单位。<br/>
		返回值将基于节点坐标。
		
		@example 
		```js
		var newVec2 = node.convertToNodeSpaceAR(cc.v2(100, 100));
		``` 
		*/
		convertToNodeSpaceAR(worldPoint : Vec2) : Vec2;		
		/** !#en
		Converts a local Point to world space coordinates.The result is in Points.<br/>
		treating the returned/received node point as anchor relative.
		!#zh
		将一个点转换到世界空间坐标系。结果以 Vec2 为单位。<br/>
		返回值将基于节点坐标。
		
		@example 
		```js
		var newVec2 = node.convertToWorldSpaceAR(cc.v2(100, 100));
		``` 
		*/
		convertToWorldSpaceAR(nodePoint : Vec2) : Vec2;		
		/** !#en convenience methods which take a cc.Touch instead of cc.Vec2.
		!#zh 将触摸点转换成本地坐标系中位置。
		@param touch The touch object
		
		@example 
		```js
		var newVec2 = node.convertTouchToNodeSpace(touch);
		``` 
		*/
		convertTouchToNodeSpace(touch : Touch) : Vec2;		
		/** !#en converts a cc.Touch (world coordinates) into a local coordinate. This method is AR (Anchor Relative).
		!#zh 转换一个 cc.Touch（世界坐标）到一个局部坐标，该方法基于节点坐标。
		@param touch The touch object
		
		@example 
		```js
		var newVec2 = node.convertTouchToNodeSpaceAR(touch);
		``` 
		*/
		convertTouchToNodeSpaceAR(touch : Touch) : Vec2;		
		/** !#en
		Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
		The matrix is in Pixels.
		!#zh 返回这个将节点（局部）的空间坐标系转换成父节点的空间坐标系的矩阵。这个矩阵以像素为单位。
		
		@example 
		```js
		var affineTransform = node.getNodeToParentTransform();
		``` 
		*/
		getNodeToParentTransform() : AffineTransform;		
		/** !#en
		Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
		The matrix is in Pixels.<br/>
		This method is AR (Anchor Relative).
		!#zh
		返回这个将节点（局部）的空间坐标系转换成父节点的空间坐标系的矩阵。<br/>
		这个矩阵以像素为单位。<br/>
		该方法基于节点坐标。
		
		@example 
		```js
		var affineTransform = node.getNodeToParentTransformAR();
		``` 
		*/
		getNodeToParentTransformAR() : AffineTransform;		
		/** !#en
		Returns a "world" axis aligned bounding box of the node.<br/>
		The bounding box contains self and active children's world bounding box.
		!#zh
		返回节点在世界坐标系下的对齐轴向的包围盒（AABB）。<br/>
		该边框包含自身和已激活的子节点的世界边框。
		
		@example 
		```js
		var newRect = node.getBoundingBoxToWorld();
		``` 
		*/
		getBoundingBoxToWorld() : Rect;		
		/** !#en
		Returns the displayed opacity of Node,
		the difference between displayed opacity and opacity is that displayed opacity is calculated based on opacity and parent node's opacity when cascade opacity enabled.
		!#zh
		获取节点显示透明度，
		显示透明度和透明度之间的不同之处在于当启用级连透明度时，
		显示透明度是基于自身透明度和父节点透明度计算的。
		
		@example 
		```js
		var displayOpacity = node.getDisplayedOpacity();
		``` 
		*/
		getDisplayedOpacity() : number;		
		/** !#en
		Returns the displayed color of Node,
		the difference between displayed color and color is that displayed color is calculated based on color and parent node's color when cascade color enabled.
		!#zh
		获取节点的显示透明度，
		显示透明度和透明度之间的不同之处在于显示透明度是基于透明度和父节点透明度启用级连透明度时计算的。
		
		@example 
		```js
		var displayColor = node.getDisplayedColor();
		``` 
		*/
		getDisplayedColor() : Color;		
		/** !#en
		Set whether color should be changed with the opacity value,
		useless in ccsg.Node, but this function is override in some class to have such behavior.
		!#zh 设置更改透明度时是否修改RGB值，
		
		@example 
		```js
		node.setOpacityModifyRGB(true);
		``` 
		*/
		setOpacityModifyRGB(opacityValue : boolean) : void;		
		/** !#en Get whether color should be changed with the opacity value.
		!#zh 更改透明度时是否修改RGB值。
		
		@example 
		```js
		var hasChange = node.isOpacityModifyRGB();
		``` 
		*/
		isOpacityModifyRGB() : boolean;		
		/** !#en Get the sibling index.
		!#zh 获取同级索引。
		
		@example 
		```js
		var index = node.getSiblingIndex();
		``` 
		*/
		getSiblingIndex() : number;		
		/** !#en Set the sibling index of this node.
		!#zh 设置节点同级索引。
		
		@example 
		```js
		node.setSiblingIndex(1);
		``` 
		*/
		setSiblingIndex(index : number) : void;		
		/** !#en Is this node a child of the given node?
		!#zh 是否是指定节点的子节点？
		
		@example 
		```js
		node.isChildOf(newNode);
		``` 
		*/
		isChildOf(parent : Node) : boolean;		
		/** !#en Sorts the children array depends on children's zIndex and arrivalOrder,
		normally you won't need to invoke this function.
		!#zh 根据子节点的 zIndex 和 arrivalOrder 进行排序，正常情况下开发者不需要手动调用这个函数。 
		*/
		sortAllChildren() : void;		
		/** !#en position of node.
		!#zh 节点相对父节点的坐标。 */
		position : Vec2;		
		/** !#en Scale of node.
		!#zh 节点缩放 */
		scale : number;		
		/** !#en Returns the x axis position of the node in cocos2d coordinates.
		!#zh 获取节点 X 轴坐标。
		
		@example 
		```js
		var posX = node.getPositionX();
		``` 
		*/
		getPositionX() : number;		
		/** !#en Sets the x axis position of the node in cocos2d coordinates.
		!#zh 设置节点 X 轴坐标。
		
		@example 
		```js
		node.setPositionX(1);
		``` 
		*/
		setPositionX(x : number) : void;		
		/** !#en Returns the y axis position of the node in cocos2d coordinates.
		!#zh 获取节点 Y 轴坐标。
		
		@example 
		```js
		var posY = node.getPositionY();
		``` 
		*/
		getPositionY() : number;		
		/** !#en Sets the y axis position of the node in cocos2d coordinates.
		!#zh 设置节点 Y 轴坐标。
		@param y The new position in y axis
		
		@example 
		```js
		node.setPositionY(100);
		``` 
		*/
		setPositionY(y : number) : void;		
		/** !#en Returns the local Z order of this node.
		!#zh 获取节点局部 Z 轴顺序。
		
		@example 
		```js
		var localZorder = node.getLocalZOrder();
		``` 
		*/
		getLocalZOrder() : number;		
		/** !#en
		LocalZOrder is the 'key' used to sort the node relative to its siblings.                                        <br/>
		                                                                                                                <br/>
		The Node's parent will sort all its children based ont the LocalZOrder value.                                   <br/>
		If two nodes have the same LocalZOrder, then the node that was added first to the children's array              <br/>
		will be in front of the other node in the array.                                                                <br/>
		Also, the Scene Graph is traversed using the "In-Order" tree traversal algorithm ( http://en.wikipedia.org/wiki/Tree_traversal#In-order ) <br/>
		And Nodes that have LocalZOder values smaller than 0 are the "left" subtree <br/>
		While Nodes with LocalZOder greater than 0 are the "right" subtree.
		!#zh
		LocalZOrder 是 “key” (关键)来分辨节点和它兄弟节点的相关性。
		父节点将会通过 LocalZOrder 的值来分辨所有的子节点。
		如果两个节点有同样的 LocalZOrder，那么先加入子节点数组的节点将会显示在后加入的节点的前面。
		同样的，场景图使用 “In-Order（按顺序）” 遍历数算法来遍历
		( http://en.wikipedia.org/wiki/Tree_traversal#In-order ) 并且拥有小于 0 的 LocalZOrder 的值的节点是 “ left ” 子树（左子树）
		所以拥有大于 0 的 LocalZOrder 的值得节点是 “ right ”子树（右子树）。
		
		@example 
		```js
		node.setLocalZOrder(1);
		``` 
		*/
		setLocalZOrder(localZOrder : number) : void;		
		/** !#en Returns whether node's opacity value affect its child nodes.
		!#zh 返回节点的不透明度值是否影响其子节点。
		
		@example 
		```js
		cc.log(node.isCascadeOpacityEnabled());
		``` 
		*/
		isCascadeOpacityEnabled() : boolean;		
		/** !#en Enable or disable cascade opacity, if cascade enabled, child nodes' opacity will be the multiplication of parent opacity and its own opacity.
		!#zh 启用或禁用级连不透明度，如果级连启用，子节点的不透明度将是父不透明度乘上它自己的不透明度。
		
		@example 
		```js
		node.setCascadeOpacityEnabled(true);
		``` 
		*/
		setCascadeOpacityEnabled(cascadeOpacityEnabled : boolean) : void;		
		/** !#en Enable or disable cascade color, if cascade enabled, child nodes' opacity will be the cascade value of parent color and its own color.
		!#zh 启用或禁用级连颜色，如果级连启用，子节点的颜色将是父颜色和它自己的颜色的级连值。
		
		@example 
		```js
		node.setCascadeColorEnabled(true);
		``` 
		*/
		setCascadeColorEnabled(cascadeColorEnabled : boolean) : void;	
	}		
		/** <p>
		This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.                                    <br/>
		The created cc.Texture2D object will always have power-of-two dimensions.                                                <br/>
		Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions <br/>
		 i.e. "contentSize" != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).                                           <br/>
		Be aware that the content of the generated textures will be upside-down! </p> */
		export class Texture2D extends RawAsset {		
		/** Get width in pixels. 
		*/
		getPixelWidth() : number;		
		/** Get height of in pixels. 
		*/
		getPixelHeight() : number;		
		/** Get content size. 
		*/
		getContentSize() : Size;		
		/** Get content size in pixels. 
		*/
		getContentSizeInPixels() : Size;		
		/** Init with HTML element.
		
		@example 
		```js
		var img = new Image();
		img.src = dataURL;
		texture.initWithElement(img);
		texture.handleLoadedTexture();
		``` 
		*/
		initWithElement(element : HTMLImageElement|HTMLCanvasElement) : void;		
		/** Intializes with a texture2d with data. 
		*/
		initWithData(data : any[], pixelFormat : number, pixelsWide : number, pixelsHigh : number, contentSize : Size) : boolean;		
		/** Initializes a texture from a UIImage object.
		Extensions to make it easy to create a CCTexture2D object from an image file.
		Note that RGBA type textures will have their alpha premultiplied - use the blending mode (gl.ONE, gl.ONE_MINUS_SRC_ALPHA). 
		*/
		initWithImage(uiImage : HTMLImageElement) : boolean;		
		/** HTMLElement Object getter. 
		*/
		getHtmlElementObj() : HTMLImageElement;		
		/** Check whether texture is loaded. 
		*/
		isLoaded() : boolean;		
		/** Handler of texture loaded event. 
		*/
		handleLoadedTexture(premultiplied? : boolean) : void;		
		/** Description of cc.Texture2D. 
		*/
		description() : string;		
		/** Release texture. 
		*/
		releaseTexture() : void;		
		/** Pixel format of the texture. 
		*/
		getPixelFormat() : number;		
		/** Whether or not the texture has their Alpha premultiplied,
		support only in WebGl rendering mode. 
		*/
		hasPremultipliedAlpha() : boolean;		
		/** Whether or not use mipmap, support only in WebGl rendering mode. 
		*/
		hasMipmaps() : boolean;		
		/** Sets the min filter, mag filter, wrap s and wrap t texture parameters. <br/>
		If the texture size is NPOT (non power of 2), then in can only use gl.CLAMP_TO_EDGE in gl.TEXTURE_WRAP_{S,T}.
		@param texParams texParams object or minFilter 
		*/
		setTexParameters(texParams : any|number, magFilter? : number, wrapS? : Texture2D.WrapMode, wrapT? : Texture2D.WrapMode) : void;		
		/** WebGLTexture Object. */
		name : WebGLTexture;		
		/** Pixel format of the texture. */
		pixelFormat : number;		
		/** Width in pixels. */
		pixelWidth : number;		
		/** Height in pixels. */
		pixelHeight : number;		
		/** Content width in points. */
		width : number;		
		/** Content height in points. */
		height : number;	
	}		
		/** <p>A class that implements a Texture Atlas. <br />
		Supported features: <br />
		The atlas file can be a PNG, JPG. <br />
		Quads can be updated in runtime <br />
		Quads can be added in runtime <br />
		Quads can be removed in runtime <br />
		Quads can be re-ordered in runtime <br />
		The TextureAtlas capacity can be increased or decreased in runtime.</p> */
		export class TextureAtlas {		
		constructor();		
		/** <p>Creates a TextureAtlas with an filename and with an initial capacity for Quads. <br />
		The TextureAtlas capacity can be increased in runtime. </p>
		Constructor of cc.TextureAtlas
		
		@example 
		```js
		--------------------------
		1. //creates a TextureAtlas with  filename
		var textureAtlas = new cc.TextureAtlas("res/hello.png", 3);
		
		2. //creates a TextureAtlas with texture
		var texture = cc.textureCache.addImage("hello.png");
		var textureAtlas = new cc.TextureAtlas(texture, 3);
		
		``` 
		*/
		TextureAtlas(fileName : string|Texture2D, capacity : number) : void;		
		/** Quantity of quads that are going to be drawn. 
		*/
		getTotalQuads() : number;		
		/** Quantity of quads that can be stored with the current texture atlas size. 
		*/
		getCapacity() : number;		
		/** Texture of the texture atlas. 
		*/
		getTexture() : Image;		
		/** Set texture for texture atlas. 
		*/
		setTexture(texture : Image) : void;		
		/** specify if the array buffer of the VBO needs to be updated. 
		*/
		setDirty(dirty : boolean) : void;		
		/** whether or not the array buffer of the VBO needs to be updated. 
		*/
		isDirty() : boolean;		
		/** Quads that are going to be rendered. 
		*/
		getQuads() : any[];		
		/**  
		*/
		setQuads(quads : any[]) : void;		
		/** <p>Initializes a TextureAtlas with a filename and with a certain capacity for Quads.<br />
		The TextureAtlas capacity can be increased in runtime.<br />
		WARNING: Do not reinitialize the TextureAtlas because it will leak memory. </p>
		
		@example 
		```js
		--------------------------------------------------
		var textureAtlas = new cc.TextureAtlas();
		textureAtlas.initWithTexture("hello.png", 3);
		
		``` 
		*/
		initWithFile(file : string, capacity : number) : boolean;		
		/** <p>Initializes a TextureAtlas with a previously initialized Texture2D object, and<br />
		with an initial capacity for Quads.<br />
		The TextureAtlas capacity can be increased in runtime.<br />
		WARNING: Do not reinitialize the TextureAtlas because it will leak memory</p>
		
		@example 
		```js
		---------------------------
		var texture = cc.textureCache.addImage("hello.png");
		var textureAtlas = new cc.TextureAtlas();
		textureAtlas.initWithTexture(texture, 3);
		
		``` 
		*/
		initWithTexture(texture : Image, capacity : number) : boolean;		
		/** <p>Updates a Quad (texture, vertex and color) at a certain index <br />
		index must be between 0 and the atlas capacity - 1 </p> 
		*/
		updateQuad(quad : V3F_C4B_T2F_Quad, index : number) : void;		
		/** <p>Inserts a Quad (texture, vertex and color) at a certain index<br />
		index must be between 0 and the atlas capacity - 1 </p> 
		*/
		insertQuad(quad : V3F_C4B_T2F_Quad, index : number) : void;		
		/** <p>
		     Inserts a c array of quads at a given index                                           <br />
		     index must be between 0 and the atlas capacity - 1                                    <br />
		     this method doesn't enlarge the array when amount + index > totalQuads                <br />
		</p> 
		*/
		insertQuads(quads : any[], index : number, amount : number) : void;		
		/** <p>Removes the quad that is located at a certain index and inserts it at a new index <br />
		This operation is faster than removing and inserting in a quad in 2 different steps</p> 
		*/
		insertQuadFromIndex(fromIndex : number, newIndex : number) : void;		
		/** <p>Removes a quad at a given index number.<br />
		The capacity remains the same, but the total number of quads to be drawn is reduced in 1 </p> 
		*/
		removeQuadAtIndex(index : number) : void;		
		/** Removes a given number of quads at a given index. 
		*/
		removeQuadsAtIndex(index : number, amount : number) : void;		
		/** <p>Removes all Quads. <br />
		The TextureAtlas capacity remains untouched. No memory is freed.<br />
		The total number of quads to be drawn will be 0</p> 
		*/
		removeAllQuads() : void;		
		/** <p>Resize the capacity of the CCTextureAtlas.<br />
		The new capacity can be lower or higher than the current one<br />
		It returns YES if the resize was successful. <br />
		If it fails to resize the capacity it will return NO with a new capacity of 0. <br />
		no used for js</p> 
		*/
		resizeCapacity(newCapacity : number) : boolean;		
		/** Used internally by CCParticleBatchNode                                    <br/>
		don't use this unless you know what you're doing. 
		*/
		increaseTotalQuadsWith(amount : number) : void;		
		/** Moves an amount of quads from oldIndex at newIndex. 
		*/
		moveQuadsFromIndex(oldIndex : number, amount : number, newIndex : number) : void;		
		/** Ensures that after a realloc quads are still empty                                <br/>
		Used internally by CCParticleBatchNode. 
		*/
		fillWithEmptyQuadsFromIndex(index : number, amount : number) : void;		
		/** <p>Draws n quads from an index (offset). <br />
		n + start can't be greater than the capacity of the atlas</p> 
		*/
		drawNumberOfQuads(n : number, start : number) : void;		
		/** Indicates whether or not the array buffer of the VBO needs to be updated. */
		dirty : boolean;		
		/** Image texture for cc.TextureAtlas. */
		texture : Image;		
		/** Quantity of quads that can be stored with the current texture atlas size. */
		capacity : number;		
		/** Quantity of quads that are going to be drawn. */
		totalQuads : number;		
		/** Quads that are going to be rendered. */
		quads : any[];	
	}		
		/** cc.textureCache is a singleton object, it's the global cache for cc.Texture2D */
		export class textureCache {		
		/** Description 
		*/
		description() : string;		
		/** Returns an already created texture. Returns null if the texture doesn't exist.
		
		@example 
		```js
		------------------
		var key = cc.textureCache.textureForKey("hello.png");
		
		``` 
		*/
		textureForKey(textureKeyName : string) : Texture2D;		
		/** Returns an already created texture. Returns null if the texture doesn't exist.
		
		@example 
		```js
		------------------
		var key = cc.textureCache.getTextureForKey("hello.png");
		
		``` 
		*/
		getTextureForKey(textureKeyName : string) : Texture2D;		
		/** 
		
		@example 
		```js
		---------
		var key = cc.textureCache.getKeyByTexture(texture);
		
		``` 
		*/
		getKeyByTexture(texture : Image) : string;		
		/** 
		
		@example 
		```js
		---------------
		var cacheTextureForColor = cc.textureCache.getTextureColors(texture);
		
		``` 
		*/
		getTextureColors(texture : Image) : any[];		
		/** <p>Purges the dictionary of loaded textures. <br />
		Call this method if you receive the "Memory Warning"  <br />
		In the short term: it will free some resources preventing your app from being killed  <br />
		In the medium term: it will allocate more resources <br />
		In the long term: it will be the same</p>
		
		@example 
		```js
		--------
		cc.textureCache.removeAllTextures();
		
		``` 
		*/
		removeAllTextures() : void;		
		/** Deletes a texture from the cache given a texture.
		
		@example 
		```js
		-----
		cc.textureCache.removeTexture(texture);
		
		``` 
		*/
		removeTexture(texture : Image) : void;		
		/** Deletes a texture from the cache given a its key name.
		
		@example 
		```js
		------
		cc.textureCache.removeTexture("hello.png");
		
		``` 
		*/
		removeTextureForKey(textureKeyName : string) : void;		
		/** <p>Returns a Texture2D object given an file image <br />
		If the file image was not previously loaded, it will create a new Texture2D <br />
		 object and it will return it. It will use the filename as a key.<br />
		Otherwise it will return a reference of a previously loaded image. <br />
		Supported image extensions: .png, .jpg, .gif</p>
		
		@example 
		```js
		----
		cc.textureCache.addImage("hello.png");
		
		``` 
		*/
		addImage(url : string, cb : Function, target : any) : Texture2D;		
		/** Cache the image data. 
		*/
		cacheImage(path : string, texture : Image|HTMLImageElement|HTMLCanvasElement) : void;		
		/** <p>Returns a Texture2D object given an UIImage image<br />
		If the image was not previously loaded, it will create a new Texture2D object and it will return it.<br />
		Otherwise it will return a reference of a previously loaded image<br />
		The "key" parameter will be used as the "key" for the cache.<br />
		If "key" is null, then a new texture will be created each time.</p> 
		*/
		addUIImage(image : HTMLImageElement|HTMLCanvasElement, key : string) : Texture2D;	
	}		
		/** !#en
		cc.AffineTransform class represent an affine transform matrix. It's composed basically by translation, rotation, scale transformations.<br/>
		Please do not use its constructor directly, use cc.affineTransformMake alias function instead.
		!#zh
		cc.AffineTransform 类代表一个仿射变换矩阵。它基本上是由平移旋转，缩放转变所组成。<br/>
		请不要直接使用它的构造，请使用 cc.affineTransformMake 函数代替。 */
		export class AffineTransform {		
		/** !#en Create a cc.AffineTransform object with all contents in the matrix.
		!#zh 用在矩阵中的所有内容创建一个 cc.AffineTransform 对象。 
		*/
		affineTransformMake(a : number, b : number, c : number, d : number, tx : number, ty : number) : AffineTransform;		
		/** !#en Clone a cc.AffineTransform object from the specified transform.
		!#zh 克隆指定的 cc.AffineTransform 对象。 
		*/
		affineTransformClone(t : AffineTransform) : AffineTransform;		
		/** !#en Apply the affine transformation on a point.
		!#zh 对一个点应用矩阵变换。
		@param point or x.
		@param transOrY transform matrix or y.
		@param t transform matrix or y. 
		*/
		pointApplyAffineTransform(point : Vec2|number, transOrY : AffineTransform|number, t : AffineTransform) : Vec2;		
		/** !#en Apply the affine transformation on a size.
		!#zh 应用 Size 到仿射变换矩阵上。 
		*/
		sizeApplyAffineTransform(size : Size, t : AffineTransform) : Size;		
		/** !#en
		Create a identity transformation matrix: <br/>
		[ 1, 0, 0, <br/>
		  0, 1, 0 ]
		!#zh
		单位矩阵：<br/>
		[ 1, 0, 0, <br/>
		  0, 1, 0 ] 
		*/
		affineTransformMakeIdentity() : AffineTransform;		
		/** !#en Apply the affine transformation on a rect.
		!#zh 应用 Rect 到仿射变换矩阵上。 
		*/
		rectApplyAffineTransform(rect : Rect, anAffineTransform : AffineTransform) : Rect;		
		/** !#en Create a new affine transformation with a base transformation matrix and a translation based on it.
		!#zh 基于一个基础矩阵加上一个平移操作来创建一个新的矩阵。
		@param t The base affine transform object.
		@param tx The translation on x axis.
		@param ty The translation on y axis. 
		*/
		affineTransformTranslate(t : AffineTransform, tx : number, ty : number) : AffineTransform;		
		/** !#en Create a new affine transformation with a base transformation matrix and a scale based on it.
		!#zh 创建一个基础变换矩阵，并在此基础上进行了 Scale 仿射变换。
		@param t The base affine transform object.
		@param sx The scale on x axis.
		@param sy The scale on y axis. 
		*/
		affineTransformScale(t : AffineTransform, sx : number, sy : number) : AffineTransform;		
		/** !#en Create a new affine transformation with a base transformation matrix and a rotation based on it.
		!#zh 创建一个基础变换矩阵，并在此基础上进行了 Rotation 仿射变换。
		@param aTransform The base affine transform object.
		@param anAngle The angle to rotate. 
		*/
		affineTransformRotate(aTransform : AffineTransform, anAngle : number) : AffineTransform;		
		/** !#en
		Concatenate a transform matrix to another and return the result:<br/>
		t' = t1 * t2
		!#zh 拼接两个矩阵，并返回结果：<br/>
		t' = t1 * t2
		@param t1 The first transform object.
		@param t2 The transform object to concatenate. 
		*/
		affineTransformConcat(t1 : AffineTransform, t2 : AffineTransform) : AffineTransform;		
		/** !#en
		Concatenate a transform matrix to another<br/>
		The results are reflected in the first matrix.<br/>
		t' = t1 * t2
		!#zh
		拼接两个矩阵，将结果保存到第一个矩阵。<br/>
		t' = t1 * t2
		@param t1 The first transform object.
		@param t2 The transform object to concatenate. 
		*/
		affineTransformConcatIn(t1 : AffineTransform, t2 : AffineTransform) : AffineTransform;		
		/** !#en Return true if an affine transform equals to another, false otherwise.
		!#zh 判断两个矩阵是否相等。 
		*/
		affineTransformEqualToTransform(t1 : AffineTransform, t2 : AffineTransform) : boolean;		
		/** !#en Get the invert transform of an AffineTransform object.
		!#zh 求逆矩阵。 
		*/
		affineTransformInvert(t : AffineTransform) : AffineTransform;	
	}		
		/** !#en
		Representation of RGBA colors.
		
		Each color component is a floating point value with a range from 0 to 255.
		
		You can also use the convenience method {{#crossLink "cc/color:method"}}cc.color{{/crossLink}} to create a new Color.
		
		!#zh
		cc.Color 用于表示颜色。
		
		它包含 RGBA 四个以浮点数保存的颜色分量，每个的值都在 0 到 255 之间。
		
		您也可以通过使用 {{#crossLink "cc/color:method"}}cc.color{{/crossLink}} 的便捷方法来创建一个新的 Color。 */
		export class Color extends ValueType {		
		/** 
		@param r red component of the color, default value is 0.
		@param g green component of the color, defualt value is 0.
		@param b blue component of the color, default value is 0.
		@param a alpha component of the color, default value is 255. 
		*/
		Color(r? : number, g? : number, b? : number, a? : number) : Color;		
		/** !#en Solid white, RGBA is [255, 255, 255, 255].
		!#zh 纯白色，RGBA 是 [255, 255, 255, 255]。 */
		WHITE : Color;		
		/** !#en Solid black, RGBA is [0, 0, 0, 255].
		!#zh 纯黑色，RGBA 是 [0, 0, 0, 255]。 */
		BLACK : Color;		
		/** !#en Transparent, RGBA is [0, 0, 0, 0].
		!#zh 透明，RGBA 是 [0, 0, 0, 0]。 */
		TRANSPARENT : Color;		
		/** !#en Grey, RGBA is [127.5, 127.5, 127.5].
		!#zh 灰色，RGBA 是 [127.5, 127.5, 127.5]。 */
		GRAY : Color;		
		/** !#en Solid red, RGBA is [255, 0, 0].
		!#zh 纯红色，RGBA 是 [255, 0, 0]。 */
		RED : Color;		
		/** !#en Solid green, RGBA is [0, 255, 0].
		!#zh 纯绿色，RGBA 是 [0, 255, 0]。 */
		GREEN : Color;		
		/** !#en Solid blue, RGBA is [0, 0, 255].
		!#zh 纯蓝色，RGBA 是 [0, 0, 255]。 */
		BLUE : Color;		
		/** !#en Yellow, RGBA is [255, 235, 4].
		!#zh 黄色，RGBA 是 [255, 235, 4]。 */
		YELLOW : Color;		
		/** !#en Orange, RGBA is [255, 127, 0].
		!#zh 橙色，RGBA 是 [255, 127, 0]。 */
		ORANGE : Color;		
		/** !#en Cyan, RGBA is [0, 255, 255].
		!#zh 青色，RGBA 是 [0, 255, 255]。 */
		CYAN : Color;		
		/** !#en Magenta, RGBA is [255, 0, 255].
		!#zh 洋红色（品红色），RGBA 是 [255, 0, 255]。 */
		MAGENTA : Color;		
		/** !#en Clone a new color from the current color.
		!#zh 克隆当前颜色。
		
		@example 
		```js
		var color = new cc.Color();
		var newColor = color.clone();// Color {r: 0, g: 0, b: 0, a: 255}
		``` 
		*/
		clone() : Color;		
		/** !#en TODO
		!#zh 判断两个颜色是否相等。
		
		@example 
		```js
		var color1 = cc.Color.WHITE;
		var color2 = new cc.Color(255, 255, 255);
		cc.log(color1.equals(color2)); // true;
		color2 = cc.Color.RED;
		cc.log(color2.equals(color1)); // false;
		``` 
		*/
		equals(other: (r: number, g: number, b: number, a: number) => void) : boolean;		
		/** !#en TODO
		!#zh 线性插值
		@param ratio the interpolation coefficient.
		@param out optional, the receiving vector.
		
		@example 
		```js
		// Converts a white color to a black one trough time.
		update: function (dt) {
		    var color = this.node.color;
		    if (color.equals(cc.Color.BLACK)) {
		        return;
		    }
		    this.ratio += dt * 0.1;
		    this.node.color = cc.Color.WHITE.lerp(cc.Color.BLACK, ratio);
		}
		
		``` 
		*/
		lerp(to: (r: number, g: number, b: number, a: number) => void, ratio : number, out: (r: number, g: number, b: number, a: number) => void) : Color;		
		/** !#en TODO
		!#zh 转换为方便阅读的字符串。
		
		@example 
		```js
		var color = cc.Color.WHITE;
		color.toString(); // "rgba(255, 255, 255, 255)"
		``` 
		*/
		toString() : string;		
		/** !#en TODO
		!#zh 设置当前的红色值，并返回当前对象。
		@param red the new Red component.
		
		@example 
		```js
		var color = new cc.Color();
		color.setR(255); // Color {r: 255, g: 0, b: 0, a: 255}
		``` 
		*/
		setR(red : number) : Color;		
		/** !#en TODO
		!#zh 设置当前的绿色值，并返回当前对象。
		@param green the new Green component.
		
		@example 
		```js
		var color = new cc.Color();
		color.setG(255); // Color {r: 0, g: 255, b: 0, a: 255}
		``` 
		*/
		setG(green : number) : Color;		
		/** !#en TODO
		!#zh 设置当前的蓝色值，并返回当前对象。
		@param blue the new Blue component.
		
		@example 
		```js
		var color = new cc.Color();
		color.setB(255); // Color {r: 0, g: 0, b: 255, a: 255}
		``` 
		*/
		setB(blue : number) : Color;		
		/** !#en TODO
		!#zh 设置当前的透明度，并返回当前对象。
		@param alpha the new Alpha component.
		
		@example 
		```js
		var color = new cc.Color();
		color.setA(0); // Color {r: 0, g: 0, b: 0, a: 0}
		``` 
		*/
		setA(alpha : number) : Color;		
		/** !#en TODO
		!#zh 转换为 CSS 格式。
		@param opt "rgba", "rgb", "#rgb" or "#rrggbb".
		
		@example 
		```js
		var color = cc.Color.BLACK;
		color.toCSS();          // "#000";
		color.toCSS("rgba");    // "rgba(0,0,0,1.00)";
		color.toCSS("rgb");     // "rgba(0,0,0)";
		color.toCSS("#rgb");    // "#000";
		color.toCSS("#rrggbb"); // "#000000";
		``` 
		*/
		toCSS(opt : string) : string;		
		/** !#en Clamp this color to make all components between 0 to 255。
		!#zh 限制颜色数值，在 0 到 255 之间。
		
		@example 
		```js
		var color = new cc.Color(1000, 0, 0, 255);
		color.clamp();
		cc.log(color); // (255, 0, 0, 255)
		``` 
		*/
		clamp() : void;		
		/** !#en TODO
		!#zh 读取 16 进制。
		
		@example 
		```js
		var color = cc.Color.BLACK;
		color.fromHEX("#FFFF33"); // Color {r: 255, g: 255, b: 51, a: 255};
		``` 
		*/
		fromHEX(hexString : string) : Color;		
		/** !#en TODO
		!#zh 转换为 16 进制。
		@param fmt "#rgb" or "#rrggbb".
		
		@example 
		```js
		var color = cc.Color.BLACK;
		color.toHEX("#rgb");     // "000";
		color.toHEX("#rrggbb");  // "000000";
		``` 
		*/
		toHEX(fmt : string) : string;		
		/** !#en Convert to 24bit rgb value.
		!#zh 转换为 24bit 的 RGB 值。
		
		@example 
		```js
		var color = cc.Color.YELLOW;
		color.toRGBValue(); // 16771844;
		``` 
		*/
		toRGBValue() : number;		
		/** !#en TODO
		!#zh 读取 HSV（色彩模型）格式。
		
		@example 
		```js
		var color = cc.Color.YELLOW;
		color.fromHSV(0, 0, 1); // Color {r: 255, g: 255, b: 255, a: 255};
		``` 
		*/
		fromHSV(h : number, s : number, v : number) : Color;		
		/** !#en TODO
		!#zh 转换为 HSV（色彩模型）格式。
		
		@example 
		```js
		var color = cc.Color.YELLOW;
		color.toHSV(); // Object {h: 0.1533864541832669, s: 0.9843137254901961, v: 1};
		``` 
		*/
		toHSV() : any;		
		/** !#en TODO
		!#zh RGB 转换为 HSV。
		@param r red, must be [0, 255].
		@param g red, must be [0, 255].
		@param b red, must be [0, 255].
		
		@example 
		```js
		cc.Color.rgb2hsv(255, 255, 255); // Object {h: 0, s: 0, v: 1};
		``` 
		*/
		rgb2hsv(r : number, g : number, b : number) : any;		
		/** !#en TODO
		!#zh HSV 转换为 RGB。
		
		@example 
		```js
		cc.Color.hsv2rgb(0, 0, 1); // Object {r: 255, g: 255, b: 255};
		``` 
		*/
		hsv2rgb(h : number, s : number, v : number) : any;	
	}		
		/** !#en A 2D rectangle defined by x, y position and width, height.
		!#zh 通过位置和宽高定义的 2D 矩形。 */
		export class Rect extends ValueType {		
		/** !#en
		Constructor of cc.Rect class.
		see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
		!#zh
		cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。 
		*/
		Rect(x? : number, y? : number, w? : number, h? : number) : Rect;		
		/** !#en Creates a rectangle from two coordinate values.
		!#zh 根据指定 2 个坐标创建出一个矩形区域。
		
		@example 
		```js
		cc.Rect.fromMinMax(cc.v2(10, 10), cc.v2(20, 20)); // Rect {x: 10, y: 10, width: 10, height: 10};
		``` 
		*/
		fromMinMax(v1 : Vec2, v2 : Vec2) : Rect;		
		/** !#en Checks if rect contains.
		!#zh
		判断 2 个矩形是否有包含。<br/>
		返回 1 为 a 包含 b，如果 -1 为 b 包含 a,
		0 这则都不包含。
		@param a Rect a
		@param b Rect b
		
		@example 
		```js
		var a = new cc.rect(0, 0, 10, 10);
		var b = new cc.rect(5, 5, 5, 5);
		var c = new cc.rect(20, 20, 10, 10);
		cc.Rect.contain(a, b); //  1;
		cc.Rect.contain(b, a); // -1;
		cc.Rect.contain(a, c); //  0;
		``` 
		*/
		contain(a: (x: number, y: number, w: number, h: number) => void, b: (x: number, y: number, w: number, h: number) => void) : number;		
		/** !#en TODO
		!#zh 克隆一个新的 Rect。
		
		@example 
		```js
		var a = new cc.rect(0, 0, 10, 10);
		a.clone();// Rect {x: 0, y: 0, width: 10, height: 10}
		``` 
		*/
		clone() : Rect;		
		/** !#en TODO
		!#zh 是否等于指定的矩形。
		@param other !#en
		Constructor of cc.Rect class.
		see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
		!#zh
		cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
		
		@example 
		```js
		var a = new cc.rect(0, 0, 10, 10);
		var b = new cc.rect(0, 0, 10, 10);
		a.equals(b);// true;
		``` 
		*/
		equals(other: (x: number, y: number, w: number, h: number) => void) : boolean;		
		/** !#en TODO
		!#zh 线性插值
		@param to !#en
		Constructor of cc.Rect class.
		see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
		!#zh
		cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
		@param ratio the interpolation coefficient.
		@param out optional, the receiving vector.
		
		@example 
		```js
		var a = new cc.rect(0, 0, 10, 10);
		var b = new cc.rect(50, 50, 100, 100);
		update (dt) {
		   // method 1;
		   var c = a.lerp(b, dt * 0.1);
		   // method 2;
		   a.lerp(b, dt * 0.1, c);
		}
		``` 
		*/
		lerp(to: (x: number, y: number, w: number, h: number) => void, ratio : number, out: (x: number, y: number, w: number, h: number) => void) : Rect;		
		/** !#en TODO
		!#zh 转换为方便阅读的字符串
		
		@example 
		```js
		var a = new cc.rect(0, 0, 10, 10);
		a.toString();// "(0.00, 0.00, 10.00, 10.00)";
		``` 
		*/
		toString() : string;		
		/** !#en TODO
		!#zh 矩形 x 轴上的最小值。 */
		xMin : number;		
		/** !#en TODO
		!#zh 矩形 y 轴上的最小值。 */
		yMin : number;		
		/** !#en TODO
		!#zh 矩形 x 轴上的最大值。 */
		xMax : number;		
		/** !#en TODO
		!#zh 矩形 y 轴上的最大值。 */
		yMax : number;		
		/** !#en TODO
		!#zh 矩形的中心点。 */
		center : number;		
		/** !#en TODO
		!#zh 矩形的大小。 */
		size : Size;		
		/** !#en TODO
		!#zh 当前矩形与指定矩形是否相交。
		@param rect !#en
		Constructor of cc.Rect class.
		see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
		!#zh
		cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
		
		@example 
		```js
		var a = new cc.rect(0, 0, 10, 10);
		var b = new cc.rect(0, 0, 20, 20);
		a.intersects(b);// true
		``` 
		*/
		intersects(rect: (x: number, y: number, w: number, h: number) => void) : void;		
		/** !#en TODO
		!#zh 当前矩形是否包含指定坐标点。
		Returns true if the point inside this rectangle.
		
		@example 
		```js
		var a = new cc.rect(0, 0, 10, 10);
		var b = new cc.v2(0, 5);
		a.contains(b);// true
		``` 
		*/
		contains(point : Vec2) : void;		
		/** !#en Returns true if the other rect totally inside this rectangle.
		!#zh 当前矩形是否包含指定矩形。
		@param rect !#en
		Constructor of cc.Rect class.
		see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
		!#zh
		cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
		
		@example 
		```js
		var a = new cc.rect(0, 0, 10, 10);
		var b = new cc.rect(0, 0, 20, 20);
		a.containsRect(b);// true
		``` 
		*/
		containsRect(rect: (x: number, y: number, w: number, h: number) => void) : void;	
	}		
		/** !#en
		cc.Size is the class for size object,<br/>
		please do not use its constructor to create sizes,<br/>
		use {{#crossLink "cc/size:method"}}{{/crossLink}} alias function instead.<br/>
		It will be deprecated soon, please use cc.Vec2 instead.
		
		!#zh
		cc.Size 是 size 对象的类。<br/>
		请不要使用它的构造函数创建的 size，<br/>
		使用 {{#crossLink "cc/size:method"}}{{/crossLink}} 别名函数。<br/>
		它不久将被取消，请使用cc.Vec2代替。 */
		export class Size {		
		/**  
		*/
		Size(width : number, height : number) : Size;		
		/** !#en return a Size object with width = 0 and height = 0.
		!#zh 返回一个宽度为 0 和高度为 0 的 Size 对象。 */
		ZERO : Size;		
		/** !#en TODO
		!#zh 克隆 size 对象。
		
		@example 
		```js
		var a = new cc.size(10, 10);
		a.clone();// return Size {width: 0, height: 0};
		``` 
		*/
		clone() : Size;		
		/** !#en TODO
		!#zh 当前 Size 对象是否等于指定 Size 对象。
		
		@example 
		```js
		var a = new cc.size(10, 10);
		a.equals(new cc.size(10, 10));// return true;
		``` 
		*/
		equals(other: (width: number, height: number) => void) : boolean;		
		/** !#en TODO
		!#zh 线性插值。
		@param to !#en
		Constructor of cc.Rect class.
		see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
		!#zh
		cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
		@param ratio the interpolation coefficient.
		@param out optional, the receiving vector.
		
		@example 
		```js
		var a = new cc.size(10, 10);
		var b = new cc.rect(50, 50, 100, 100);
		update (dt) {
		   // method 1;
		   var c = a.lerp(b, dt * 0.1);
		   // method 2;
		   a.lerp(b, dt * 0.1, c);
		}
		``` 
		*/
		lerp(to: (x: number, y: number, w: number, h: number) => void, ratio : number, out: (width: number, height: number) => void) : Size;		
		/** !#en TODO
		!#zh 转换为方便阅读的字符串。
		
		@example 
		```js
		var a = new cc.size(10, 10);
		a.toString();// return "(10.00, 10.00)";
		``` 
		*/
		toString() : string;		
		/** !#en
		Helper function that creates a cc.Size.<br/>
		Please use cc.p or cc.v2 instead, it will soon replace cc.Size.
		!#zh
		创建一个 cc.Size 对象的帮助函数。<br/>
		注意：可以使用 cc.p 或者是 cc.v2 代替，它们将很快取代 cc.Size。
		@param w width or a size object
		@param h height
		
		@example 
		```js
		var size1 = cc.size();
		var size2 = cc.size(100,100);
		var size3 = cc.size(size2);
		var size4 = cc.size({width: 100, height: 100});
		
		``` 
		*/
		size(w : number|Size, h : number) : Size;		
		/** !#en Check whether a point's value equals to another.
		!#zh 检查 Size 对象是否等于另一个。
		
		@example 
		```js
		var a = new cc.size(10, 10);
		var b = new cc.size(10, 10);
		cc.sizeEqualToSize(a, b);// return true;
		var b = new cc.size(5, 10);
		cc.sizeEqualToSize(a, b);// return false;
		``` 
		*/
		sizeEqualToSize(size1: (width: number, height: number) => void, size2: (width: number, height: number) => void) : boolean;	
	}		
		/** !#en the device accelerometer reports values for each axis in units of g-force.
		!#zh 设备重力传感器传递的各个轴的数据。 */
		export class Acceleration {		
		constructor();		
		/**  
		*/
		Acceleration(x : number, y : number, z : number, timestamp : number) : Acceleration;	
	}		
		/** !#en Blend Function used for textures.
		!#zh 图像的混合方式。 */
		export class BlendFunc {		
		constructor();		
		/** 
		@param src1 source blend function
		@param dst1 destination blend function 
		*/
		BlendFunc(src1 : number, dst1 : number) : BlendFunc;	
	}	
	/** !#en
	Enum for blend factor
	Refer to: http://www.andersriggelsen.dk/glblendfunc.php
	!#zh
	混合因子
	可参考: http://www.andersriggelsen.dk/glblendfunc.php */
	export enum BlendFactor {		
		ONE = 0,
		ZERO = 0,
		SRC_ALPHA = 0,
		SRC_COLOR = 0,
		DST_ALPHA = 0,
		DST_COLOR = 0,
		ONE_MINUS_SRC_ALPHA = 0,
		ONE_MINUS_SRC_COLOR = 0,
		ONE_MINUS_DST_ALPHA = 0,
		ONE_MINUS_DST_COLOR = 0,
		blendFuncDisable = 0,	
	}		
		/** Common usage:
		
		var fontDef = new cc.FontDefinition();
		fontDef.fontName = "Arial";
		fontDef.fontSize = 12;
		...
		
		OR using inline definition usefull for constructor injection
		
		var fontDef = new cc.FontDefinition({
		 fontName: "Arial",
		 fontSize: 12
		}); */
		export class FontDefinition {		
		constructor();		
		/** !#en TODO
		!#zh 定义字体基本属性的结构体。
		@param properties (OPTIONAL) Allow inline FontDefinition 
		*/
		FontDefinition(properties : any) : FontDefinition;	
	}		
		/** undefined */
		export class WebGLColor {		
		constructor();		
		/**  
		*/
		WebGLColor(r : number, g : number, b : number, a : number, arrayBuffer : any[], offset : number) : WebGLColor;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** undefined */
		export class Vertex2F {		
		/**  
		*/
		Vertex2F(x : number, y : number, arrayBuffer : any[], offset : number) : Vertex2F;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** undefined */
		export class Vertex3F {		
		constructor();		
		/**  
		*/
		Vertex3F(x : number, y : number, z : number, arrayBuffer : any[], offset : number) : Vertex3F;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** undefined */
		export class Tex2F {		
		constructor();		
		/**  
		*/
		Tex2F(u : number, v : number, arrayBuffer : any[], offset : number) : Tex2F;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** undefined */
		export class Quad2 {		
		constructor();		
		/**  
		*/
		Quad2(tl: (x: number, y: number, arrayBuffer: any[], offset: number) => void, tr: (x: number, y: number, arrayBuffer: any[], offset: number) => void, bl: (x: number, y: number, arrayBuffer: any[], offset: number) => void, br: (x: number, y: number, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : Quad2;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** A 3D Quad. 4 * 3 floats */
		export class Quad3 {		
		/**  
		*/
		Quad3(bl1: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void, br1: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void, tl1: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void, tr1: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void) : Quad3;	
	}		
		/** undefined */
		export class V3F_C4B_T2F {		
		constructor();		
		/**  
		*/
		V3F_C4B_T2F(vertices: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void, colors: (r: number, g: number, b: number, a: number) => void, texCoords: (u: number, v: number, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : V3F_C4B_T2F;		
		BYTES_PER_ELEMENT() : void;	
	}		
		/** undefined */
		export class V3F_C4B_T2F_Quad {		
		constructor();		
		/**  
		*/
		V3F_C4B_T2F_Quad(tl: (vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, bl: (vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, tr: (vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, br: (vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : V3F_C4B_T2F_Quad;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** undefined */
		export class V2F_C4B_T2F {		
		constructor();		
		/**  
		*/
		V2F_C4B_T2F(vertices: (x: number, y: number, arrayBuffer: any[], offset: number) => void, colors: (r: number, g: number, b: number, a: number) => void, texCoords: (u: number, v: number, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : V2F_C4B_T2F;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** undefined */
		export class V2F_C4B_T2F_Triangle {		
		constructor();		
		/**  
		*/
		V2F_C4B_T2F_Triangle(a: (vertices: Vertex2F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, b: (vertices: Vertex2F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, c: (vertices: Vertex2F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : V2F_C4B_T2F_Triangle;	
	}		
		/** !#en The base class of all value types.
		!#zh 所有值类型的基类。 */
		export class ValueType {		
		constructor();		
		/** !#en This method returns an exact copy of current value.
		!#zh 克隆当前值，该方法返回一个新对象，新对象的值和原对象相等。 
		*/
		clone() : ValueType;		
		/** !#en Compares this object with the other one.
		!#zh 当前对象是否等于指定对象。 
		*/
		equals(other : ValueType) : boolean;		
		/** !#en TODO
		!#zh 转换为方便阅读的字符串。 
		*/
		toString() : string;		
		/** !#en
		Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
		When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to.
		!#zh
		线性插值。<br/>
		当 ratio = 0 时返回自身，ratio = 1 时返回目标，ratio = 0.5 返回自身和目标的平均值。。
		@param to the to value
		@param ratio the interpolation coefficient 
		*/
		lerp(to : ValueType, ratio : number) : ValueType;	
	}		
		/** !#en Representation of 2D vectors and points.
		!#zh 表示 2D 向量和坐标 */
		export class Vec2 extends ValueType {		
		constructor();		
		/** !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}} 
		*/
		Vec2(x? : number, y? : number) : Vec2;		
		/** !#en clone a Vec2 value
		!#zh 克隆一个 Vec2 值 
		*/
		clone() : Vec2;		
		/** !#en TODO
		!#zh 设置向量值。
		@param newValue !#en new value to set. !#zh 要设置的新值 
		*/
		set(newValue: (x: number, y: number) => void) : Vec2;		
		/** !#en TODO
		!#zh 当前的向量是否与指定的向量相等。
		@param other !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}} 
		*/
		equals(other: (x: number, y: number) => void) : boolean;		
		/** !#en TODO
		!#zh 转换为方便阅读的字符串。 
		*/
		toString() : string;		
		/** !#en TODO
		!#zh 线性插值。
		@param to !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		@param ratio the interpolation coefficient
		@param out optional, the receiving vector 
		*/
		lerp(to: (x: number, y: number) => void, ratio : number, out: (x: number, y: number) => void) : Vec2;		
		/** !#en Adds this vector. If you want to save result to another vector, use add() instead.
		!#zh 向量加法。如果你想保存结果到另一个向量，使用 add() 代替。
		@param vector !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.addSelf(cc.v2(5, 5));// return Vec2 {x: 15, y: 15};
		``` 
		*/
		addSelf(vector: (x: number, y: number) => void) : Vec2;		
		/** !#en Adds two vectors, and returns the new result.
		!#zh 向量加法，并返回新结果。
		@param vector !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		@param out optional, the receiving vector
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.add(cc.v2(5, 5));      // return Vec2 {x: 15, y: 15};
		var v1;
		v.add(cc.v2(5, 5), v1);  // return Vec2 {x: 15, y: 15};
		``` 
		*/
		add(vector: (x: number, y: number) => void, out: (x: number, y: number) => void) : Vec2;		
		/** !#en Subtracts one vector from this. If you want to save result to another vector, use sub() instead.
		!#zh 向量减法。如果你想保存结果到另一个向量，可使用 sub() 代替。
		@param vector !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.subSelf(cc.v2(5, 5));// return Vec2 {x: 5, y: 5};
		``` 
		*/
		subSelf(vector: (x: number, y: number) => void) : Vec2;		
		/** !#en Subtracts one vector from this, and returns the new result.
		!#zh 向量减法，并返回新结果。
		@param vector !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		@param out optional, the receiving vector
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.sub(cc.v2(5, 5));      // return Vec2 {x: 5, y: 5};
		var v1;
		v.sub(cc.v2(5, 5), v1);  // return Vec2 {x: 5, y: 5};
		``` 
		*/
		sub(vector: (x: number, y: number) => void, out: (x: number, y: number) => void) : Vec2;		
		/** !#en Multiplies this by a number. If you want to save result to another vector, use mul() instead.
		!#zh 缩放当前向量。如果你想结果保存到另一个向量，可使用 mul() 代替。
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.mulSelf(5);// return Vec2 {x: 50, y: 50};
		``` 
		*/
		mulSelf(num : number) : Vec2;		
		/** !#en Multiplies by a number, and returns the new result.
		!#zh 缩放当前向量，并返回新结果。
		@param out optional, the receiving vector
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.mul(5);      // return Vec2 {x: 50, y: 50};
		var v1;
		v.mul(5, v1);  // return Vec2 {x: 50, y: 50};
		``` 
		*/
		mul(num : number, out: (x: number, y: number) => void) : Vec2;		
		/** !#en Multiplies two vectors.
		!#zh 分量相乘。
		@param vector !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.scaleSelf(cc.v2(5, 5));// return Vec2 {x: 50, y: 50};
		``` 
		*/
		scaleSelf(vector: (x: number, y: number) => void) : Vec2;		
		/** !#en Multiplies two vectors, and returns the new result.
		!#zh 分量相乘，并返回新的结果。
		@param vector !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		@param out optional, the receiving vector
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.scale(cc.v2(5, 5));      // return Vec2 {x: 50, y: 50};
		var v1;
		v.scale(cc.v2(5, 5), v1);  // return Vec2 {x: 50, y: 50};
		``` 
		*/
		scale(vector: (x: number, y: number) => void, out: (x: number, y: number) => void) : Vec2;		
		/** !#en Divides by a number. If you want to save result to another vector, use div() instead.
		!#zh 向量除法。如果你想结果保存到另一个向量，可使用 div() 代替。
		@param vector !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.divSelf(5); // return Vec2 {x: 2, y: 2};
		``` 
		*/
		divSelf(vector: (x: number, y: number) => void) : Vec2;		
		/** !#en Divides by a number, and returns the new result.
		!#zh 向量除法，并返回新的结果。
		@param vector !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		@param out optional, the receiving vector
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.div(5);      // return Vec2 {x: 2, y: 2};
		var v1;
		v.div(5, v1);  // return Vec2 {x: 2, y: 2};
		``` 
		*/
		div(vector: (x: number, y: number) => void, out: (x: number, y: number) => void) : Vec2;		
		/** !#en Negates the components. If you want to save result to another vector, use neg() instead.
		!#zh 向量取反。如果你想结果保存到另一个向量，可使用 neg() 代替。
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.negSelf(); // return Vec2 {x: -10, y: -10};
		``` 
		*/
		negSelf() : Vec2;		
		/** !#en Negates the components, and returns the new result.
		!#zh 返回取反后的新向量。
		@param out optional, the receiving vector
		
		@example 
		```js
		var v = cc.v2(10, 10);
		var v1;
		v.neg(v1);  // return Vec2 {x: -10, y: -10};
		``` 
		*/
		neg(out: (x: number, y: number) => void) : Vec2;		
		/** !#en Dot product
		!#zh 当前向量与指定向量进行点乘。
		@param vector !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.dot(cc.v2(5, 5)); // return 100;
		``` 
		*/
		dot(vector: (x: number, y: number) => void) : number;		
		/** !#en Cross product
		!#zh 当前向量与指定向量进行叉乘。
		@param vector !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.cross(cc.v2(5, 5)); // return 0;
		``` 
		*/
		cross(vector: (x: number, y: number) => void) : number;		
		/** !#en Returns the length of this vector.
		!#zh 返回该向量的长度。
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.mag(); // return 14.142135623730951;
		``` 
		*/
		mag() : number;		
		/** !#en Returns the squared length of this vector.
		!#zh 返回该向量的长度平方。
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.magSqr(); // return 200;
		``` 
		*/
		magSqr() : number;		
		/** !#en Make the length of this vector to 1.
		!#zh 向量归一化，让这个向量的长度为 1。
		
		@example 
		```js
		var v = cc.v2(10, 10);
		v.normalizeSelf(); // return Vec2 {x: 0.7071067811865475, y: 0.7071067811865475};
		``` 
		*/
		normalizeSelf() : Vec2;		
		/** !#en
		Returns this vector with a magnitude of 1.<br/>
		<br/>
		Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function.
		!#zh
		返回归一化后的向量。<br/>
		<br/>
		注意，当前向量不变，并返回一个新的归一化向量。如果你想来归一化当前向量，可使用 normalizeSelf 函数。
		@param out optional, the receiving vector 
		*/
		normalize(out: (x: number, y: number) => void) : Vec2;		
		/** !#en Get angle in radian between this and vector.
		!#zh 夹角的弧度。
		@param vector !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}} 
		*/
		angle(vector: (x: number, y: number) => void) : number;		
		/** !#en Get angle in radian between this and vector with direction.
		!#zh 带方向的夹角的弧度。
		@param vector !#en
		Constructor
		see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
		!#zh
		构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}} 
		*/
		signAngle(vector: (x: number, y: number) => void) : number;		
		/** !#en rotate
		!#zh 返回旋转给定弧度后的新向量。
		@param out optional, the receiving vector 
		*/
		rotate(radians : number, out: (x: number, y: number) => void) : Vec2;		
		/** !#en rotate self
		!#zh 按指定弧度旋转向量。 
		*/
		rotateSelf(radians : number) : Vec2;		
		/** !#en return a Vec2 object with x = 1 and y = 1.
		!#zh 新 Vec2 对象。 */
		ONE : Vec2;		
		/** !#en return a Vec2 object with x = 0 and y = 0.
		!#zh 返回 x = 0 和 y = 0 的 Vec2 对象。 */
		ZERO : Vec2;		
		/** !#en return a Vec2 object with x = 0 and y = 1.
		!#zh 返回 x = 0 和 y = 1 的 Vec2 对象。 */
		up : Vec2;		
		/** !#en return a Vec2 object with x = 1 and y = 0.
		!#zh 返回 x = 1 和 y = 0 的 Vec2 对象。 */
		RIGHT : Vec2;	
	}	
	
	/****************************************************
	* TiledMap
	*****************************************************/
	
	export module TiledMap {		
		/** !#en The orientation of tiled map.
		!#zh Tiled Map 地图方向。 */
		export enum Orientation {			
			ORTHO = 0,
			HEX = 0,
			ISO = 0,
			NONE = 0,
			MAP = 0,
			LAYER = 0,
			OBJECTGROUP = 0,
			OBJECT = 0,
			TILE = 0,
			HORIZONTAL = 0,
			VERTICAL = 0,
			DIAGONAL = 0,
			FLIPPED_ALL = 0,
			FLIPPED_MASK = 0,		
		}	
	}	
	
	/****************************************************
	* ParticleSystem
	*****************************************************/
	
	export module ParticleSystem {		
		/** !#en Enum for emitter modes
		!#zh 发射模式 */
		export enum EmitterMode {			
			GRAVITY = 0,
			RADIUS = 0,		
		}	
	}	
	
	/****************************************************
	* ParticleSystem
	*****************************************************/
	
	export module ParticleSystem {		
		/** !#en Enum for particles movement type.
		!#zh 粒子位置类型 */
		export enum PositionType {			
			FREE = 0,
			RELATIVE = 0,
			GROUPED = 0,		
		}	
	}	
	
	/****************************************************
	* Node
	*****************************************************/
	
	export module Node {		
		/** !#en The event type supported by Node
		!#zh Node 支持的事件类型 */
		export enum EventType {			
			TOUCH_START = 0,
			TOUCH_MOVE = 0,
			TOUCH_END = 0,
			TOUCH_CANCEL = 0,
			MOUSE_DOWN = 0,
			MOUSE_MOVE = 0,
			MOUSE_ENTER = 0,
			MOUSE_LEAVE = 0,
			MOUSE_UP = 0,
			MOUSE_WHEEL = 0,		
		}	
	}	
	
	/****************************************************
	* Button
	*****************************************************/
	
	export module Button {		
		/** !#en Enum for transition type.
		!#zh 过渡类型 */
		export enum Transition {			
			NONE = 0,
			COLOR = 0,
			SPRITE = 0,		
		}	
	}	
	
	/****************************************************
	* Component
	*****************************************************/
	
	export module Component {			
			/** !#en
			Component will register a event to target component's handler.
			And it will trigger the handler when a certain event occurs.
			
			!@zh
			“EventHandler” 类用来设置场景中的事件回调，
			该类允许用户设置回调目标节点，目标组件名，组件方法名，
			并可通过 emit 方法调用目标函数。 */
			export class EventHandler {			
			/** !#en Event target
			!#zh 目标节点 */
			target : Node;			
			/** !#en Component name
			!#zh 目标组件名 */
			component : string;			
			/** !#en Event handler
			!#zh 响应事件函数名 */
			handler : string;			
			/**  
			*/
			emitEvents(events : Component.EventHandler[], params : any) : void;			
			/** !#en Emit event with params
			!#zh 触发目标组件上的指定 handler 函数，该参数是回调函数的参数值（可不填）。
			
			@example 
			```js
			// Call Function
			var eventHandler = cc.Component.EventHandler(target, "MainMenu", "OnClick");
			eventHandler.emit("This is the argument to the callback function!");
			``` 
			*/
			emit(params : any) : void;		
		}	
	}	
	
	/****************************************************
	* EditBox
	*****************************************************/
	
	export module EditBox {		
		/** !#en Enum for keyboard return types
		!#zh 键盘的返回键类型 */
		export enum KeyboardReturnType {			
			DEFAULT = 0,
			DONE = 0,
			SEND = 0,
			SEARCH = 0,
			GO = 0,		
		}	
	}	
	
	/****************************************************
	* EditBox
	*****************************************************/
	
	export module EditBox {		
		/** !#en The EditBox's InputMode defines the type of text that the user is allowed to enter.
		!#zh 输入模式 */
		export enum InputMode {			
			ANY = 0,
			EMAIL_ADDR = 0,
			NUMERIC = 0,
			PHONE_NUMBER = 0,
			URL = 0,
			DECIMAL = 0,
			SINGLE_LINE = 0,		
		}	
	}	
	
	/****************************************************
	* EditBox
	*****************************************************/
	
	export module EditBox {		
		/** !#en Enum for the EditBox's input flags
		!#zh 定义了一些用于设置文本显示和文本格式化的标志位。 */
		export enum InputFlag {			
			PASSWORD = 0,
			SENSITIVE = 0,
			INITIAL_CAPS_WORD = 0,
			INITIAL_CAPS_SENTENCE = 0,
			INITIAL_CAPS_ALL_CHARACTERS = 0,		
		}	
	}	
	
	/****************************************************
	* Label
	*****************************************************/
	
	export module Label {		
		/** !#en Enum for Overflow.
		!#zh Overflow 类型 */
		export enum Overflow {			
			NONE = 0,
			CLAMP = 0,
			SHRINK = 0,
			RESIZE_HEIGHT = 0,		
		}	
	}	
	
	/****************************************************
	* Label
	*****************************************************/
	
	export module Label {		
		/** !#en Enum for font type.
		!#zh Type 类型 */
		export enum Type {			
			TTF = 0,
			BMFont = 0,
			SystemFont = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** !#en Enum for Layout type
		!#zh 布局类型 */
		export enum Type {			
			NONE = 0,
			HORIZONTAL = 0,
			VERTICAL = 0,
			GRID = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** !#en Enum for Layout Resize Mode
		!#zh 缩放模式 */
		export enum ResizeMode {			
			NONE = 0,
			CONTAINER = 0,
			CHILDREN = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** !#en Enum for Grid Layout start axis direction.
		!#zh 布局轴向，只用于 GRID 布局。 */
		export enum AxisDirection {			
			HORIZONTAL = 0,
			VERTICAL = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** !#en Enum for vertical layout direction.
		!#zh 垂直方向布局方式 */
		export enum VerticalDirection {			
			BOTTOM_TO_TOP = 0,
			TOP_TO_BOTTOM = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** !#en Enum for horizontal layout direction.
		!#zh 水平方向布局方式 */
		export enum HorizontalDirection {			
			LEFT_TO_RIGHT = 0,
			RIGHT_TO_LEFT = 0,		
		}	
	}	
	
	/****************************************************
	* ProgressBar
	*****************************************************/
	
	export module ProgressBar {		
		/** !#en Enum for ProgressBar mode
		!#zh 进度条模式 */
		export enum Mode {			
			HORIZONTAL = 0,
			VERTICAL = 0,
			FILLED = 0,		
		}	
	}	
	
	/****************************************************
	* Scrollbar
	*****************************************************/
	
	export module Scrollbar {		
		/** Enum for Scrollbar direction */
		export enum Direction {			
			HORIZONTAL = 0,
			VERTICAL = 0,		
		}	
	}	
	
	/****************************************************
	* Sprite
	*****************************************************/
	
	export module Sprite {		
		/** !#en Enum for sprite type.
		!#zh Sprite 类型 */
		export enum SpriteType {			
			SIMPLE = 0,
			SLICED = 0,
			TILED = 0,
			FILLED = 0,		
		}	
	}	
	
	/****************************************************
	* Sprite
	*****************************************************/
	
	export module Sprite {		
		/** !#en Enum for fill type.
		!#zh 填充类型 */
		export enum FillType {			
			HORIZONTAL = 0,
			VERTICAL = 0,
			RADIAL = 0,		
		}	
	}	
	
	/****************************************************
	* Sprite
	*****************************************************/
	
	export module Sprite {		
		/** !#en Sprite Size can track trimmed size, raw size or none.
		!#zh 精灵尺寸调整模式 */
		export enum SizeMode {			
			CUSTOM = 0,
			TRIMMED = 0,
			RAW = 0,		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {			
			/** !#en The Custom event
			!#zh 自定义事件 */
			export class EventCustom extends Event {			
			constructor();			
			/** 
			@param type The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
			@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
			*/
			EventCustom(type : string, bubbles : boolean) : EventCustom;			
			/** !#en A reference to the detailed data of the event
			!#zh 事件的详细数据 */
			detail : any;			
			/** !#en Sets user data
			!#zh 设置用户数据 
			*/
			setUserData(data : any) : void;			
			/** !#en Gets user data
			!#zh 获取用户数据 
			*/
			getUserData() : any;			
			/** !#en Gets event name
			!#zh 获取事件名称 
			*/
			getEventName() : string;		
		}	
	}	
	
	/****************************************************
	* Pipeline
	*****************************************************/
	
	export module Pipeline {			
			/** The downloader pipe, it can download several types of files:
			1. Text
			2. Image
			3. Script
			4. Audio
			All unknown type will be downloaded as plain text.
			You can pass custom supported types in the constructor. */
			export class Downloader {			
			/** Constructor of Downloader, you can pass custom supported types.
			@param extMap Custom supported types with corresponded handler
			
			@example 
			```js
			var downloader = new Downloader({
			     // This will match all url with `.scene` extension or all url with `scene` type
			     'scene' : function (url, callback) {}
			 });
			``` 
			*/
			Downloader(extMap : any) : void;			
			/** Add custom supported types handler or modify existing type handler.
			@param extMap Custom supported types with corresponded handler 
			*/
			addHandlers(extMap : any) : void;		
		}	
	}	
	
	/****************************************************
	* Pipeline
	*****************************************************/
	
	export module Pipeline {			
			/** The loader pipe, it can load several types of files:
			1. Images
			2. JSON
			3. Plist
			4. Audio
			5. Font
			6. Cocos Creator scene
			It will not interfere with items of unknown type.
			You can pass custom supported types in the constructor. */
			export class Loader {			
			/** Constructor of Loader, you can pass custom supported types.
			@param extMap Custom supported types with corresponded handler
			
			@example 
			```js
			var loader = new Loader({
			     // This will match all url with `.scene` extension or all url with `scene` type
			     'scene' : function (url, callback) {}
			 });
			``` 
			*/
			Loader(extMap : any) : void;			
			/** Add custom supported types handler or modify existing type handler.
			@param extMap Custom supported types with corresponded handler 
			*/
			addHandlers(extMap : any) : void;		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {			
			/** !#en The mouse event
			!#zh 鼠标事件类型 */
			export class EventMouse extends Event {			
			/** 
			@param eventType The mouse event type, UP, DOWN, MOVE, CANCELED
			@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
			*/
			constructor(eventType : number, bubbles? : boolean);			
			/** !#en Sets scroll data.
			!#zh 设置鼠标的滚动数据。 
			*/
			setScrollData(scrollX : number, scrollY : number) : void;			
			/** !#en Returns the x axis scroll value.
			!#zh 获取鼠标滚动的X轴距离，只有滚动时才有效。 
			*/
			getScrollX() : number;			
			/** !#en Returns the y axis scroll value.
			!#zh 获取滚轮滚动的 Y 轴距离，只有滚动时才有效。 
			*/
			getScrollY() : number;			
			/** !#en Sets cursor location.
			!#zh 设置当前鼠标位置。 
			*/
			setLocation(x : number, y : number) : void;			
			/** !#en Returns cursor location.
			!#zh 获取鼠标位置对象，对象包含 x 和 y 属性。 
			*/
			getLocation() : Vec2;			
			/** !#en Returns the current cursor location in screen coordinates.
			!#zh 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。 
			*/
			getLocationInView() : Vec2;			
			/** !#en Returns the previous touch location.
			!#zh 获取鼠标点击在上一次事件时的位置对象，对象包含 x 和 y 属性。 
			*/
			getPreviousLocation() : Vec2;			
			/** !#en Returns the delta distance from the previous location to current location.
			!#zh 获取鼠标距离上一次事件移动的距离对象，对象包含 x 和 y 属性。 
			*/
			getDelta() : Vec2;			
			/** !#en Returns the X axis delta distance from the previous location to current location.
			!#zh 获取鼠标距离上一次事件移动的 X 轴距离。 
			*/
			getDeltaX() : number;			
			/** !#en Returns the Y axis delta distance from the previous location to current location.
			!#zh 获取鼠标距离上一次事件移动的 Y 轴距离。 
			*/
			getDeltaY() : number;			
			/** !#en Sets mouse button.
			!#zh 设置鼠标按键。 
			*/
			setButton(button : number) : void;			
			/** !#en Returns mouse button.
			!#zh 获取鼠标按键。 
			*/
			getButton() : number;			
			/** !#en Returns location X axis data.
			!#zh 获取鼠标当前位置 X 轴。 
			*/
			getLocationX() : number;			
			/** !#en Returns location Y axis data.
			!#zh 获取鼠标当前位置 Y 轴。 
			*/
			getLocationY() : number;		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {			
			/** !#en The touch event
			!#zh 触摸事件 */
			export class EventTouch extends Event {			
			/** 
			@param touchArr The array of the touches
			@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
			*/
			constructor(touchArr : any[], bubbles : boolean);			
			/** !#en Returns event code.
			!#zh 获取事件类型。 
			*/
			getEventCode() : number;			
			/** !#en Returns touches of event.
			!#zh 获取触摸点的列表。 
			*/
			getTouches() : any[];			
			/** !#en Sets touch location.
			!#zh 设置当前触点位置 
			*/
			setLocation(x : number, y : number) : void;			
			/** !#en Returns touch location.
			!#zh 获取触点位置。 
			*/
			getLocation() : Vec2;			
			/** !#en Returns the current touch location in screen coordinates.
			!#zh 获取当前触点在游戏窗口中的位置。 
			*/
			getLocationInView() : Vec2;			
			/** !#en Returns the previous touch location.
			!#zh 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。 
			*/
			getPreviousLocation() : Vec2;			
			/** !#en Returns the start touch location.
			!#zh 获获取触点落下时的位置对象，对象包含 x 和 y 属性。 
			*/
			getStartLocation() : Vec2;			
			/** !#en Returns the id of cc.Touch.
			!#zh 触点的标识 ID，可以用来在多点触摸中跟踪触点。 
			*/
			getID() : number;			
			/** !#en Returns the delta distance from the previous location to current location.
			!#zh 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。 
			*/
			getDelta() : Vec2;			
			/** !#en Returns the X axis delta distance from the previous location to current location.
			!#zh 获取触点距离上一次事件移动的 x 轴距离。 
			*/
			getDeltaX() : number;			
			/** !#en Returns the Y axis delta distance from the previous location to current location.
			!#zh 获取触点距离上一次事件移动的 y 轴距离。 
			*/
			getDeltaY() : number;			
			/** !#en Returns location X axis data.
			!#zh 获取当前触点 X 轴位置。 
			*/
			getLocationX() : number;			
			/** !#en Returns location Y axis data.
			!#zh 获取当前触点 Y 轴位置。 
			*/
			getLocationY() : number;		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {			
			/** !#en The acceleration event
			!#zh 加速度事件 */
			export class EventAcceleration extends Event {			
			/** 
			@param acc The acceleration
			@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
			*/
			constructor(acc : any, bubbles : boolean);		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {			
			/** !#en The keyboard event
			!#zh 键盘事件 */
			export class EventKeyboard extends Event {			
			/** 
			@param keyCode The key code of which triggered this event
			@param isPressed A boolean indicating whether the key have been pressed
			@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
			*/
			constructor(keyCode : number, isPressed : boolean, bubbles : boolean);		
		}	
	}	
	
	/****************************************************
	* Texture2D
	*****************************************************/
	
	export module Texture2D {		
		/** The texture wrap mode */
		export enum WrapMode {			
			REPEAT = 0,
			CLAMP_TO_EDGE = 0,
			MIRRORED_REPEAT = 0,		
		}	
	}	
	
	/****************************************************
	* Label
	*****************************************************/
	
	export module Label {		
		/** !#en Enum for text alignment.
		!#zh 文本对齐类型 */
		export enum TextAlignment {			
			LEFT = 0,
			CENTER = 0,
			RIGHT = 0,		
		}	
	}	
	
	/****************************************************
	* Label
	*****************************************************/
	
	export module Label {		
		/** !#en Enum for vertical text alignment.
		!#zh 文本垂直对齐类型 */
		export enum VerticalTextAlignment {			
			TOP = 0,
			CENTER = 0,
			BOTTOM = 0,		
		}	
	}
}
/** !#en
The global main namespace of Spine, all classes, functions,
properties and constants of Spine are defined in this namespace
!#zh
Spine 的全局的命名空间，
与 Spine 相关的所有的类，函数，属性，常量都在这个命名空间中定义。 */
declare module sp {	
	/** !#en
	The official spine runtime.<br/>
	See http://en.esotericsoftware.com/spine-using-runtimes
	!#zh
	官方 Spine Runtime。<br/>
	可查看 Spine 官方文档 http://en.esotericsoftware.com/spine-using-runtimes */
	export var spine : any;		
		/** !#en
		The skeleton of Spine <br/>
		<br/>
		(Skeleton has a reference to a SkeletonData and stores the state for skeleton instance,
		which consists of the current pose's bone SRT, slot colors, and which slot attachments are visible. <br/>
		Multiple skeletons can use the same SkeletonData which includes all animations, skins, and attachments.) <br/>
		!#zh
		Spine 骨骼动画 <br/>
		<br/>
		(Skeleton 具有对骨骼数据的引用并且存储了骨骼实例的状态，
		它由当前的骨骼动作，slot 颜色，和可见的 slot attachments 组成。<br/>
		多个 Skeleton 可以使用相同的骨骼数据，其中包括所有的动画，皮肤和 attachments。 */
		export class Skeleton extends cc._RendererUnderSG {		
		constructor();		
		/** !#en
		The skeleton data contains the skeleton information (bind pose bones, slots, draw order,
		attachments, skins, etc) and animations but does not hold any state.<br/>
		Multiple skeletons can share the same skeleton data.
		!#zh
		骨骼数据包含了骨骼信息（绑定骨骼动作，slots，渲染顺序，
		attachments，皮肤等等）和动画但不持有任何状态。<br/>
		多个 Skeleton 可以共用相同的骨骼数据。 */
		skeletonData : SkeletonData;		
		/** !#en The name of default skin.
		!#zh 默认的皮肤名称。 */
		defaultSkin : string;		
		/** !#en The name of default animation.
		!#zh 默认的动画名称。 */
		defaultAnimation : string;		
		/** !#en The name of current playing animation.
		!#zh 当前播放的动画名称。 */
		animation : string;		
		_defaultSkinIndex : number;		
		/** !#en TODO
		!#zh 是否循环播放当前骨骼动画。 */
		loop : boolean;		
		/** !#en The time scale of this skeleton.
		!#zh 当前骨骼中所有动画的时间缩放率。 */
		timeScale : number;		
		/** !#en Indicates whether open debug slots.
		!#zh 是否显示 slot 的 debug 信息。 */
		debugSlots : boolean;		
		/** !#en Indicates whether open debug bones.
		!#zh 是否显示 bone 的 debug 信息。 */
		debugBones : boolean;		
		/** !#en Sets the bones and slots to the setup pose.
		!#zh 还原到起始动作 
		*/
		setToSetupPose() : void;		
		/** !#en
		Sets the bones to the setup pose,
		using the values from the `BoneData` list in the `SkeletonData`.
		!#zh
		设置 bone 到起始动作
		使用 SkeletonData 中的 BoneData 列表中的值。 
		*/
		setBonesToSetupPose() : void;		
		/** !#en
		Sets the slots to the setup pose,
		using the values from the `SlotData` list in the `SkeletonData`.
		!#zh
		设置 slot 到起始动作。
		使用 SkeletonData 中的 SlotData 列表中的值。 
		*/
		setSlotsToSetupPose() : void;		
		/** !#en
		Finds a bone by name.
		This does a string comparison for every bone.
		!#zh
		通过名称查找 bone。
		这里对每个 bone 的名称进行了对比。 
		*/
		findBone(boneName : string) : spine.Bone;		
		/** !#en
		Finds a slot by name.
		This does a string comparison for every slot.
		!#zh
		通过名称查找 slot。
		这里对每个 slot 的名称进行了比较。 
		*/
		findSlot(slotName : string) : spine.Slot;		
		/** !#en
		Finds a skin by name and makes it the active skin.
		This does a string comparison for every skin.
		Note that setting the skin does not change which attachments are visible.
		!#zh
		按名称查找皮肤，激活该皮肤。
		这里对每个皮肤的名称进行了比较。
		注意：设置皮肤不会改变 attachment 的可见性。。 
		*/
		setSkin(skinName : string) : spine.Skin;		
		/** !#en
		Returns the attachment for the slot and attachment name.
		The skeleton looks first in its skin, then in the skeleton data’s default skin.
		!#zh
		通过 slot 和 attachment 的名称获取 attachment。
		Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。 
		*/
		getAttachment(slotName : string, attachmentName : string) : spine.RegionAttachment;		
		/** !#en
		Sets the attachment for the slot and attachment name.
		The skeleton looks first in its skin, then in the skeleton data’s default skin.
		!#zh
		通过 slot 和 attachment 的名字来设置 attachment。
		Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。 
		*/
		setAttachment(slotName : string, attachmentName : string) : void;		
		/** !#en Sets skeleton data to sp.Skeleton.
		!#zh 设置 Skeleton 中的 Skeleton Data。 
		*/
		setSkeletonData(skeletonData : spine.SkeletonData, ownsSkeletonData : spine.SkeletonData) : void;		
		/** !#en Sets animation state data.
		!#zh 设置动画状态数据。 
		*/
		setAnimationStateData(stateData : spine.AnimationStateData) : void;		
		/** !#en
		Mix applies all keyframe values,
		interpolated for the specified time and mixed with the current values.
		!#zh 为所有关键帧设定混合及混合时间（从当前值开始差值）。 
		*/
		setMix(fromAnimation : string, toAnimation : string, duration : number) : void;		
		/** !#en Sets event listener.
		!#zh 设置动画事件监听器。 
		*/
		setAnimationListener(target : any, callback : Function) : void;		
		/** !#en Set the current animation. Any queued animations are cleared.
		!#zh 设置当前动画。队列中的任何的动画将被清除。 
		*/
		setAnimation(trackIndex : number, name : string, loop : boolean) : spine.TrackEntry;		
		/** !#en Adds an animation to be played delay seconds after the current or last queued animation.
		!#zh 添加一个动画到动画队列尾部，还可以延迟指定的秒数。 
		*/
		addAnimation(trackIndex : number, name : string, loop : boolean, delay? : number) : spine.TrackEntry;		
		/** !#en Returns track entry by trackIndex.
		!#zh 通过 track 索引获取 TrackEntry。 
		*/
		getCurrent(trackIndex : void) : spine.TrackEntry;		
		/** !#en Clears all tracks of animation state.
		!#zh 清除所有 track 的动画状态。 
		*/
		clearTracks() : void;		
		/** !#en Clears track of animation state by trackIndex.
		!#zh 清除出指定 track 的动画状态。 
		*/
		clearTrack(trackIndex : number) : void;		
		/** !#en Set the start event listener.
		!#zh 用来设置开始播放动画的事件监听。 
		*/
		setStartListener(listener : Function) : void;		
		/** !#en Set the end event listener.
		!#zh 用来设置动画播放完后的事件监听。 
		*/
		setEndListener(listener : Function) : void;	
	}		
		/** !#en The skeleton data of spine.
		!#zh Spine 的 骨骼数据。 */
		export class SkeletonData extends cc.Asset {		
		/** !#en See http://en.esotericsoftware.com/spine-json-format
		!#zh 可查看 Spine 官方文档 http://zh.esotericsoftware.com/spine-json-format */
		skeletonJson : any;		
		atlasText : string;		
		textures : Texture2D;		
		/** !#en
		A scale can be specified on the JSON or binary loader which will scale the bone positions,
		image sizes, and animation translations.
		This can be useful when using different sized images than were used when designing the skeleton
		in Spine. For example, if using images that are half the size than were used in Spine,
		a scale of 0.5 can be used. This is commonly used for games that can run with either low or high
		resolution texture atlases.
		see http://en.esotericsoftware.com/spine-using-runtimes#Scaling
		!#zh 可查看 Spine 官方文档： http://zh.esotericsoftware.com/spine-using-runtimes#Scaling */
		scale : number;		
		/** !#en Get the included SkeletonData used in spine runtime.
		!#zh 获取 Spine Runtime 使用的 SkeletonData。 
		*/
		getRuntimeData(quiet? : boolean) : spine.SkeletonData;	
	}	
	/** !#en The event type of spine skeleton animation.
	!#zh 骨骼动画事件类型。 */
	export enum AnimationEventType {		
		START = 0,
		END = 0,
		COMPLETE = 0,
		EVENT = 0,	
	}
}
/** This module provides some JavaScript utilities.
All members can be accessed with cc.js */
declare module js {	
	/** Check the obj whether is function or not 
	*/
	export function isFunction(obj : any) : boolean;	
	/** Check the obj whether is number or not 
	*/
	export function isNumber(obj : any) : boolean;	
	/** Check the obj whether is string or not 
	*/
	export function isString(obj : any) : boolean;	
	/** Check the obj whether is array or not 
	*/
	export function isArray(obj : any) : boolean;	
	/** Check the obj whether is undefined or not 
	*/
	export function isUndefined(obj : any) : boolean;	
	/** Check the obj whether is object or not 
	*/
	export function isObject(obj : any) : boolean;	
	/** copy all properties not defined in obj from arguments[1...n]
	@param obj object to extend its properties
	@param sourceObj source object to copy properties from 
	*/
	export function addon(obj : any, sourceObj : any) : any;	
	/** copy all properties from arguments[1...n] to obj 
	*/
	export function mixin(obj : any, sourceObj : any) : any;	
	/** Derive the class from the supplied base class.
	Both classes are just native javascript constructors, not created by cc.Class, so
	usually you will want to inherit using {{#crossLink "cc/Class:method"}}cc.Class {{/crossLink}} instead.
	@param base the baseclass to inherit 
	*/
	export function extend(cls : Function, base : Function) : Function;	
	/** Removes all enumerable properties from object 
	*/
	export function clear(obj : any) : void;	
	/** Get property descriptor in object and all its ancestors 
	*/
	export function getPropertyDescriptor(obj : any, name : string) : any;	
	/** Get class name of the object, if object is just a {} (and which class named 'Object'), it will return null.
	(modified from <a href="http://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class">the code from this stackoverflow post</a>)
	@param obj instance or constructor 
	*/
	export function getClassName(obj : any|Function) : string;	
	/** Register the class by specified name manually 
	*/
	export function setClassName(className : string, constructor : Function) : void;	
	/** Unregister a class from fireball.
	
	If you dont need a registered class anymore, you should unregister the class so that Fireball will not keep its reference anymore.
	Please note that its still your responsibility to free other references to the class.
	@param constructor the class you will want to unregister, any number of classes can be added 
	*/
	export function unregisterClass(constructor : Function) : void;	
	/** Get the registered class by name 
	*/
	export function getClassByName(classname : string) : Function;	
	/** Define get set accessor, just help to call Object.defineProperty(...) 
	*/
	export function getset(obj : any, prop : string, getter : Function, setter : Function, enumerable? : boolean) : void;	
	/** Define get accessor, just help to call Object.defineProperty(...) 
	*/
	export function get(obj : any, prop : string, getter : Function, enumerable? : boolean) : void;	
	/** Define set accessor, just help to call Object.defineProperty(...) 
	*/
	export function set(obj : any, prop : string, setter : Function, enumerable? : boolean) : void;	
	/** Defines a polyfill field for obsoleted codes.
	@param obj YourObject or YourClass.prototype
	@param obsoleted "OldParam" or "YourClass.OldParam"
	@param newPropName "NewParam" 
	*/
	export function obsolete(obj : any, obsoleted : string, newPropName : string, writable? : boolean) : void;	
	/** Defines all polyfill fields for obsoleted codes corresponding to the enumerable properties of props.
	@param obj YourObject or YourClass.prototype
	@param objName "YourObject" or "YourClass" 
	*/
	export function obsoletes(obj : any, objName : any, props : any, writable? : boolean) : void;	
	/** A string tool to construct a string with format string.
	for example:
	     cc.js.formatStr("a: %d, b: %b", a, b);
	     cc.js.formatStr(a, b, c); 
	*/
	export function formatStr() : string;		
		/** undefined */
		export class array {		
		/** Removes the first occurrence of a specific object from the array. 
		*/
		remove(array : any[], value : any) : boolean;		
		/** Removes the array item at the specified index. 
		*/
		removeAt(array : any[], index : number) : void;		
		/** Determines whether the array contains a specific value. 
		*/
		contains(array : any[], value : any) : boolean;		
		/** Verify array's Type 
		*/
		verifyType(array : any[], type : Function) : boolean;		
		/** Removes from array all values in minusArr. For each Value in minusArr, the first matching instance in array will be removed.
		@param array Source Array
		@param minusArr minus Array 
		*/
		removeArray(array : any[], minusArr : any[]) : void;		
		/** Inserts some objects at index 
		*/
		appendObjectsAt(array : any[], addObjs : any[], index : number) : any[];		
		/** Copy an array's item to a new array (its performance is better than Array.slice) 
		*/
		copy(array : any[]) : any[];		
		/** Exact same function as Array.prototype.indexOf.
		HACK: ugliy hack for Baidu mobile browser compatibility,
		stupid Baidu guys modify Array.prototype.indexOf for all pages loaded,
		their version changes strict comparison to non-strict comparison,
		it also ignores the second parameter of the original API,
		and this will cause event handler enter infinite loop.
		Baidu developers, if you ever see this documentation,
		here is the standard: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
		Seriously !
		@param searchElement Element to locate in the array.
		@param fromIndex The index to start the search at 
		*/
		indexOf(searchElement : any, fromIndex? : number) : number;	
	}
}