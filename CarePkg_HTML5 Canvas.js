(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"CarePkg_HTML5 Canvas_atlas_1", frames: [[1470,0,367,978],[0,0,1468,654]]},
		{name:"CarePkg_HTML5 Canvas_atlas_2", frames: [[736,0,734,1950],[0,0,734,1956]]},
		{name:"CarePkg_HTML5 Canvas_atlas_3", frames: [[740,0,736,1956],[0,0,738,1956]]},
		{name:"CarePkg_HTML5 Canvas_atlas_4", frames: [[0,0,1976,1394]]},
		{name:"CarePkg_HTML5 Canvas_atlas_5", frames: [[0,0,1466,1956]]},
		{name:"CarePkg_HTML5 Canvas_atlas_6", frames: [[0,0,1472,1954]]},
		{name:"CarePkg_HTML5 Canvas_atlas_7", frames: [[0,0,1974,1628]]},
		{name:"CarePkg_HTML5 Canvas_atlas_8", frames: [[0,0,1974,1858]]},
		{name:"CarePkg_HTML5 Canvas_atlas_9", frames: [[0,0,1872,1984]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.backcenter = function() {
	this.initialize(ss["CarePkg_HTML5 Canvas_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["CarePkg_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.insert1 = function() {
	this.initialize(ss["CarePkg_HTML5 Canvas_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.insert2 = function() {
	this.initialize(ss["CarePkg_HTML5 Canvas_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.insert3 = function() {
	this.initialize(ss["CarePkg_HTML5 Canvas_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.insert4 = function() {
	this.initialize(ss["CarePkg_HTML5 Canvas_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.insert5 = function() {
	this.initialize(img.insert5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1872,2204);


(lib.insert6 = function() {
	this.initialize(img.insert6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1872,2422);


(lib.insidecenter = function() {
	this.initialize(ss["CarePkg_HTML5 Canvas_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.insideleft = function() {
	this.initialize(ss["CarePkg_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.insideright = function() {
	this.initialize(ss["CarePkg_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.outleft = function() {
	this.initialize(ss["CarePkg_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.outright = function() {
	this.initialize(ss["CarePkg_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pocket = function() {
	this.initialize(ss["CarePkg_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Tween56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-368,-489);

	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-184.5,-489)).s().p("Egc0BMaMAAAiYzMA5pAAAMAAACYzg")
	}.bind(this);
	this.shape.setTransform(183.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-368,-489,736,978);


(lib.Tween47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert1();
	this.instance.setTransform(-355.8,-251,0.3602,0.3602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.8,-251,711.7,502.1);


(lib.Tween46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert1();
	this.instance.setTransform(-355.85,-251.05,0.3602,0.3602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.8,-251,711.6,502);


(lib.Tween45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert1();
	this.instance.setTransform(-355.8,-251,0.3602,0.3602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.8,-251,711.7,502.1);


(lib.Tween44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert2();
	this.instance.setTransform(-355.6,-293.3,0.3603,0.3603);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-293.3,711.3,586.6);


(lib.Tween43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert2();
	this.instance.setTransform(-355.65,-293.3,0.3603,0.3603);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-293.3,711.2,586.6);


(lib.Tween42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert2();
	this.instance.setTransform(-355.6,-293.3,0.3603,0.3603);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-293.3,711.3,586.6);


(lib.Tween41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert3();
	this.instance.setTransform(-355.95,-335.05,0.3607,0.3607);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.9,-335,711.9,670.1);


(lib.Tween40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert3();
	this.instance.setTransform(-356,-335.05,0.3607,0.3607);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356,-335,712,670.1);


(lib.Tween39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert3();
	this.instance.setTransform(-355.95,-335.05,0.3607,0.3607);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.9,-335,711.9,670.1);


(lib.Tween38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert4();
	this.instance.setTransform(-355.85,-377.1,0.3802,0.3802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.8,-377.1,711.7,754.3);


(lib.Tween37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert4();
	this.instance.setTransform(-355.85,-377.15,0.3802,0.3802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.8,-377.1,711.7,754.2);


(lib.Tween36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert4();
	this.instance.setTransform(-355.85,-377.1,0.3802,0.3802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.8,-377.1,711.7,754.3);


(lib.Tween35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert5();
	this.instance.setTransform(-355.65,-418.7,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-418.7,711.3,837.5);


(lib.Tween34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert5();
	this.instance.setTransform(-355.65,-418.75,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-418.7,711.3,837.4);


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert5();
	this.instance.setTransform(-355.65,-418.7,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-418.7,711.3,837.5);


(lib.Tween32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert6();
	this.instance.setTransform(-355.65,-460.15,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-460.1,711.3,920.3);


(lib.Tween31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert6();
	this.instance.setTransform(-355.65,-460.15,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-460.1,711.3,920.3);


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insert6();
	this.instance.setTransform(-355.65,-460.15,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-460.1,711.3,920.3);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,-489);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-489,367,978);


(lib.rightPanelButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-184,-489)).s().p("EgcvBMaMAAAiYzMA5fAAAMAAACYzg")
	}.bind(this);
	this.shape.setTransform(0,-489);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-978,368,978);


(lib.leftPanelButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-183.5,-487.5)).s().p("EgcqBMLMAAAiYVMA5VAAAMAAACYVg")
	}.bind(this);
	this.shape.setTransform(0,-487.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.5,-975,367,975);


(lib.folderBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.backcenter();
	this.instance.setTransform(-368,-978.4,0.5021,0.5002);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(-368,-978.4);

	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-184.5,-489)).s().p("Egc0BMaMAAAiYzMA5pAAAMAAACYzg")
	}.bind(this);
	this.shape.setTransform(183.5,-489.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-368,-978.4,736,978.4);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween45("synched",0);

	this.instance_1 = new lib.Tween46("synched",0);
	this.instance_1.setTransform(-0.15,-69.95);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween47("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},39).to({state:[{t:this.instance_2}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-0.15,y:-69.95},39).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},39).to({_off:true,x:0,y:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356,-321,711.9,572.1);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween42("synched",0);

	this.instance_1 = new lib.Tween43("synched",0);
	this.instance_1.setTransform(-0.35,-69.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween44("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},39).to({state:[{t:this.instance_2}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-0.35,y:-69.7},39).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},39).to({_off:true,x:0,y:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356,-363,711.7,656.3);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween39("synched",0);

	this.instance_1 = new lib.Tween40("synched",0);
	this.instance_1.setTransform(0,-69.95);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween41("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},39).to({state:[{t:this.instance_2}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-69.95},39).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},39).to({_off:true,y:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356,-405,712,740.1);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween36("synched",0);

	this.instance_1 = new lib.Tween37("synched",0);
	this.instance_1.setTransform(-0.15,-69.85);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween38("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},39).to({state:[{t:this.instance_2}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-0.15,y:-69.85},39).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},39).to({_off:true,x:0,y:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356,-447,711.9,824.2);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween33("synched",0);

	this.instance_1 = new lib.Tween34("synched",0);
	this.instance_1.setTransform(-0.35,-70.25);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween35("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},39).to({state:[{t:this.instance_2}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-0.35,y:-70.25},39).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},39).to({_off:true,x:0,y:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356,-489,711.7,907.8);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween30("synched",0,false);

	this.instance_1 = new lib.Tween31("synched",0);
	this.instance_1.setTransform(-0.35,-89.85);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween32("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},39).to({state:[{t:this.instance_2}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-0.35,y:-89.85},39).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},39).to({_off:true,x:0,y:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356,-550,711.7,1010.2);


(lib.insert6button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.insert6button = new lib.Tween19("synched",0);
	this.insert6button.name = "insert6button";
	this.insert6button.setTransform(0,-251.05);

	this.timeline.addTween(cjs.Tween.get(this.insert6button).wait(1).to({mode:"independent"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.8,-502,711.7,502);


(lib.insert5button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.insert5button = new lib.Tween16("synched",0);
	this.insert5button.name = "insert5button";
	this.insert5button.setTransform(0,-293.3);

	this.timeline.addTween(cjs.Tween.get(this.insert5button).wait(1).to({mode:"independent"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-586.6,711.3,586.6);


(lib.insert4button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.insert4btn = new lib.Tween13("synched",0);
	this.insert4btn.name = "insert4btn";
	this.insert4btn.setTransform(0,-335.05);

	this.timeline.addTween(cjs.Tween.get(this.insert4btn).wait(1).to({mode:"independent"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.9,-670.1,711.9,670.1);


(lib.insert3button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.insert3button = new lib.Tween10("synched",0);
	this.insert3button.name = "insert3button";
	this.insert3button.setTransform(0,-377.15);

	this.timeline.addTween(cjs.Tween.get(this.insert3button).wait(1).to({mode:"independent"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.8,-754.2,711.7,754.2);


(lib.insert2button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.insert2button = new lib.Tween7("synched",0);
	this.insert2button.name = "insert2button";
	this.insert2button.setTransform(0,-418.75);

	this.timeline.addTween(cjs.Tween.get(this.insert2button).wait(1).to({mode:"independent"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-837.4,711.3,837.4);


(lib.insert1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(0,-460.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-920.3,711.3,920.3);


(lib.folderFront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween56("synched",0);
	this.instance.setTransform(0,-489);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-368,-978,736,978);


(lib.closingFolder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// right_panel
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.007,0.063,0,0.5,-2.7,-512.3)).s().p("EgAaBIxMAAAiYzIA1HSMAAACYzg")
	}.bind(this);
	this.shape.setTransform(370.3,162.675);

	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(0.006,0.063,0,0.5,-2.2,-512.3)).s().p("EgAVBIxMAAAiYzIArHSMAAACYzg")
	}.bind(this);
	this.shape_1.setTransform(374.125,162.675);

	this.shape_2 = new cjs.Shape();
	var sprImg_shape_2 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_2.onload = function(){
		this.shape_2.graphics.bf(sprImg_shape_2, null, new cjs.Matrix2D(0.043,0.059,0,0.5,-15.7,-510.6)).s().p("EgCcBJCMAAAiY0IE5GxMAAACY0g")
	}.bind(this);
	this.shape_2.setTransform(357.325,164.35);

	this.shape_3 = new cjs.Shape();
	var sprImg_shape_3 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_3.onload = function(){
		this.shape_3.graphics.bf(sprImg_shape_3, null, new cjs.Matrix2D(0.078,0.054,0,0.5,-28.7,-509)).s().p("EgEeBJSMAAAiYzII9GQMAAACYzg")
	}.bind(this);
	this.shape_3.setTransform(344.325,166);

	this.shape_4 = new cjs.Shape();
	var sprImg_shape_4 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_4.onload = function(){
		this.shape_4.graphics.bf(sprImg_shape_4, null, new cjs.Matrix2D(0.113,0.05,0,0.5,-41.6,-507.3)).s().p("EgGfBJjMAAAiYzIM/FuMAAACYzg")
	}.bind(this);
	this.shape_4.setTransform(331.35,167.675);

	this.shape_5 = new cjs.Shape();
	var sprImg_shape_5 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_5.onload = function(){
		this.shape_5.graphics.bf(sprImg_shape_5, null, new cjs.Matrix2D(0.148,0.045,0,0.5,-54.6,-505.7)).s().p("EgIiBJzMAAAiYzIREFOMAAACYzg")
	}.bind(this);
	this.shape_5.setTransform(318.35,169.325);

	this.shape_6 = new cjs.Shape();
	var sprImg_shape_6 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_6.onload = function(){
		this.shape_6.graphics.bf(sprImg_shape_6, null, new cjs.Matrix2D(0.183,0.041,0,0.5,-67.6,-504)).s().p("EgKjBKEMAAAiYzIVHEsMAAACYzg")
	}.bind(this);
	this.shape_6.setTransform(305.375,171);

	this.shape_7 = new cjs.Shape();
	var sprImg_shape_7 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_7.onload = function(){
		this.shape_7.graphics.bf(sprImg_shape_7, null, new cjs.Matrix2D(0.218,0.036,0,0.5,-80.6,-502.3)).s().p("EgMlBKVMAAAiYzIZLEKMAAACYzg")
	}.bind(this);
	this.shape_7.setTransform(292.4,172.675);

	this.shape_8 = new cjs.Shape();
	var sprImg_shape_8 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_8.onload = function(){
		this.shape_8.graphics.bf(sprImg_shape_8, null, new cjs.Matrix2D(0.254,0.032,0,0.5,-93.6,-500.7)).s().p("EgOnBKlMAAAiYzIdPDqMAAACYzg")
	}.bind(this);
	this.shape_8.setTransform(279.4,174.325);

	this.shape_9 = new cjs.Shape();
	var sprImg_shape_9 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_9.onload = function(){
		this.shape_9.graphics.bf(sprImg_shape_9, null, new cjs.Matrix2D(0.289,0.027,0,0.5,-106.6,-499)).s().p("EgQpBK2MAAAiYzMAhTADIMAAACYzg")
	}.bind(this);
	this.shape_9.setTransform(266.425,176);

	this.shape_10 = new cjs.Shape();
	var sprImg_shape_10 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_10.onload = function(){
		this.shape_10.graphics.bf(sprImg_shape_10, null, new cjs.Matrix2D(0.324,0.023,0,0.5,-119.6,-497.3)).s().p("EgSrBLGMAAAiYyMAlXACmMAAACY0g")
	}.bind(this);
	this.shape_10.setTransform(253.425,177.65);

	this.shape_11 = new cjs.Shape();
	var sprImg_shape_11 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_11.onload = function(){
		this.shape_11.graphics.bf(sprImg_shape_11, null, new cjs.Matrix2D(0.359,0.018,0,0.5,-132.5,-495.7)).s().p("EgUsBLXMAAAiYzMApZACGMAAACYzg")
	}.bind(this);
	this.shape_11.setTransform(240.45,179.325);

	this.shape_12 = new cjs.Shape();
	var sprImg_shape_12 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_12.onload = function(){
		this.shape_12.graphics.bf(sprImg_shape_12, null, new cjs.Matrix2D(0.394,0.014,0,0.5,-145.5,-494)).s().p("EgWuBLoMAAAiYzMAtdABkMAAACYzg")
	}.bind(this);
	this.shape_12.setTransform(227.475,181);

	this.shape_13 = new cjs.Shape();
	var sprImg_shape_13 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_13.onload = function(){
		this.shape_13.graphics.bf(sprImg_shape_13, null, new cjs.Matrix2D(0.43,0.009,0,0.5,-158.5,-492.3)).s().p("EgYwBL5MAAAiYzMAxhABCMAAACYzg")
	}.bind(this);
	this.shape_13.setTransform(214.475,182.675);

	this.shape_14 = new cjs.Shape();
	var sprImg_shape_14 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_14.onload = function(){
		this.shape_14.graphics.bf(sprImg_shape_14, null, new cjs.Matrix2D(0.465,0.005,0,0.5,-171.5,-490.7)).s().p("EgayBMJMAAAiYzMA1lAAiMAAACYzg")
	}.bind(this);
	this.shape_14.setTransform(201.5,184.325);

	this.shape_15 = new cjs.Shape();
	var sprImg_shape_15 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_15.onload = function(){
		this.shape_15.graphics.bf(sprImg_shape_15, null, new cjs.Matrix2D(0.5,0,0,0.5,-184.5,-489)).s().p("Egc0BMaMAAAiYzMA5pAAAMAAACYzg")
	}.bind(this);
	this.shape_15.setTransform(188.5,186);

	this.instance = new lib.folderBack("synched",0);
	this.instance.setTransform(5,186.2,0.0323,1,0,0,0,0,-489.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({scaleX:1},4).wait(1));

	// open_right
	this.shape_16 = new cjs.Shape();
	var sprImg_shape_16 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_16.onload = function(){
		this.shape_16.graphics.bf(sprImg_shape_16, null, new cjs.Matrix2D(0.5,0,0,0.5,-184,-489)).s().p("EgcvBMaMAAAiYzMA5fAAAMAAACYzg")
	}.bind(this);
	this.shape_16.setTransform(557,186);

	this.shape_17 = new cjs.Shape();
	var sprImg_shape_17 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_17.onload = function(){
		this.shape_17.graphics.bf(sprImg_shape_17, null, new cjs.Matrix2D(0.455,-0.007,0,0.5,-167.3,-486.6)).s().p("EgaJhMBMA0SgAwMAAACYzMg0SAAwg")
	}.bind(this);
	this.shape_17.setTransform(540.35,183.6);

	this.shape_18 = new cjs.Shape();
	var sprImg_shape_18 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_18.onload = function(){
		this.shape_18.graphics.bf(sprImg_shape_18, null, new cjs.Matrix2D(0.409,-0.013,0,0.5,-150.7,-484.2)).s().p("EgXihLpMAvFgBgMAAACYzMgvFABgg")
	}.bind(this);
	this.shape_18.setTransform(523.675,181.2);

	this.shape_19 = new cjs.Shape();
	var sprImg_shape_19 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_19.onload = function(){
		this.shape_19.graphics.bf(sprImg_shape_19, null, new cjs.Matrix2D(0.364,-0.02,0,0.5,-134,-481.8)).s().p("EgU7hLRMAp3gCQMAAACYzMgp3ACQg")
	}.bind(this);
	this.shape_19.setTransform(507.025,178.8);

	this.shape_20 = new cjs.Shape();
	var sprImg_shape_20 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_20.onload = function(){
		this.shape_20.graphics.bf(sprImg_shape_20, null, new cjs.Matrix2D(0.319,-0.026,0,0.5,-117.3,-479.4)).s().p("EgSVhK5MAkqgDAMAAACYzMgkqADAg")
	}.bind(this);
	this.shape_20.setTransform(490.35,176.4);

	this.shape_21 = new cjs.Shape();
	var sprImg_shape_21 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_21.onload = function(){
		this.shape_21.graphics.bf(sprImg_shape_21, null, new cjs.Matrix2D(0.274,-0.033,0,0.5,-100.7,-477)).s().p("EgPuhKhIfdjwMAAACYzI/dDwg")
	}.bind(this);
	this.shape_21.setTransform(473.725,174.05);

	this.shape_22 = new cjs.Shape();
	var sprImg_shape_22 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_22.onload = function(){
		this.shape_22.graphics.bf(sprImg_shape_22, null, new cjs.Matrix2D(0.228,-0.039,0,0.5,-84.1,-474.6)).s().p("EgNHhKJIaPkgMAAACYzI6PEgg")
	}.bind(this);
	this.shape_22.setTransform(457.075,171.65);

	this.shape_23 = new cjs.Shape();
	var sprImg_shape_23 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_23.onload = function(){
		this.shape_23.graphics.bf(sprImg_shape_23, null, new cjs.Matrix2D(0.183,-0.046,0,0.5,-67.4,-472.2)).s().p("EgKhhJxIVDlQMAAACYzI1DFQg")
	}.bind(this);
	this.shape_23.setTransform(440.4,169.25);

	this.shape_24 = new cjs.Shape();
	var sprImg_shape_24 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_24.onload = function(){
		this.shape_24.graphics.bf(sprImg_shape_24, null, new cjs.Matrix2D(0.138,-0.052,0,0.5,-50.7,-469.8)).s().p("EgH6hJZIP1mAMAAACYzIv1GAg")
	}.bind(this);
	this.shape_24.setTransform(423.75,166.85);

	this.shape_25 = new cjs.Shape();
	var sprImg_shape_25 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_25.onload = function(){
		this.shape_25.graphics.bf(sprImg_shape_25, null, new cjs.Matrix2D(0.092,-0.059,0,0.5,-34.1,-467.4)).s().p("EgFThJBIKnmwMAAACYzIqnGwg")
	}.bind(this);
	this.shape_25.setTransform(407.075,164.45);

	this.shape_26 = new cjs.Shape();
	var sprImg_shape_26 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_26.onload = function(){
		this.shape_26.graphics.bf(sprImg_shape_26, null, new cjs.Matrix2D(0.047,-0.065,0,0.5,-17.4,-465)).s().p("EgCthIpIFbngMAAACYzIlbHgg")
	}.bind(this);
	this.shape_26.setTransform(390.425,162.05);

	this.shape_27 = new cjs.Shape();
	var sprImg_shape_27 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_27.onload = function(){
		this.shape_27.graphics.bf(sprImg_shape_27, null, new cjs.Matrix2D(0.024,-0.065,0,0.5,-8.7,-465)).s().p("EgBWhIpICtngMAAACYzIitHgg")
	}.bind(this);
	this.shape_27.setTransform(381.8,162.05);

	this.shape_28 = new cjs.Shape();
	var sprImg_shape_28 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_28.onload = function(){
		this.shape_28.graphics.bf(sprImg_shape_28, null, new cjs.Matrix2D(0.006,-0.065,0,0.5,-2.1,-465)).s().p("EgAUhIpIApngMAAACYzIgpHgg")
	}.bind(this);
	this.shape_28.setTransform(374.3,162.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).to({state:[]},15).wait(11));

	// left_panel
	this.shape_29 = new cjs.Shape();
	var sprImg_shape_29 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_29.onload = function(){
		this.shape_29.graphics.bf(sprImg_shape_29, null, new cjs.Matrix2D(0.023,-0.118,0,1,-4.2,-467.3)).s().p("EgAphJAIBTmyMAAACYzIhTGyg")
	}.bind(this);
	this.shape_29.setTransform(-358.725,163);

	this.shape_30 = new cjs.Shape();
	var sprImg_shape_30 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_30.onload = function(){
		this.shape_30.graphics.bf(sprImg_shape_30, null, new cjs.Matrix2D(0.098,-0.109,0,1,-18,-469)).s().p("EgCzhJRIFnmQMAAACYzIlnGQg")
	}.bind(this);
	this.shape_30.setTransform(-344.925,164.775);

	this.shape_31 = new cjs.Shape();
	var sprImg_shape_31 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_31.onload = function(){
		this.shape_31.graphics.bf(sprImg_shape_31, null, new cjs.Matrix2D(0.173,-0.1,0,1,-31.8,-470.6)).s().p("EgE8hJiIJ5lvMAAACY0Ip5Fvg")
	}.bind(this);
	this.shape_31.setTransform(-331.15,166.55);

	this.shape_32 = new cjs.Shape();
	var sprImg_shape_32 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_32.onload = function(){
		this.shape_32.graphics.bf(sprImg_shape_32, null, new cjs.Matrix2D(0.248,-0.091,0,1,-45.6,-472.3)).s().p("EgHGhJyIONlOMAAACYzIuNFOg")
	}.bind(this);
	this.shape_32.setTransform(-317.35,168.3);

	this.shape_33 = new cjs.Shape();
	var sprImg_shape_33 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_33.onload = function(){
		this.shape_33.graphics.bf(sprImg_shape_33, null, new cjs.Matrix2D(0.323,-0.082,0,1,-59.3,-474)).s().p("EgJRhKDISiksMAAACYzIyiEsg")
	}.bind(this);
	this.shape_33.setTransform(-303.6,170.075);

	this.shape_34 = new cjs.Shape();
	var sprImg_shape_34 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_34.onload = function(){
		this.shape_34.graphics.bf(sprImg_shape_34, null, new cjs.Matrix2D(0.399,-0.073,0,1,-73.1,-475.6)).s().p("EgLbhKUIW3kKMAAACYyI23ELg")
	}.bind(this);
	this.shape_34.setTransform(-289.8,171.85);

	this.shape_35 = new cjs.Shape();
	var sprImg_shape_35 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_35.onload = function(){
		this.shape_35.graphics.bf(sprImg_shape_35, null, new cjs.Matrix2D(0.474,-0.064,0,1,-86.9,-477.3)).s().p("EgNlhKkIbKjqMAAACYzI7KDqg")
	}.bind(this);
	this.shape_35.setTransform(-276,173.625);

	this.shape_36 = new cjs.Shape();
	var sprImg_shape_36 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_36.onload = function(){
		this.shape_36.graphics.bf(sprImg_shape_36, null, new cjs.Matrix2D(0.549,-0.055,0,1,-100.8,-479)).s().p("EgPuhK1IfdjIMAAACYzI/dDIg")
	}.bind(this);
	this.shape_36.setTransform(-262.225,175.375);

	this.shape_37 = new cjs.Shape();
	var sprImg_shape_37 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_37.onload = function(){
		this.shape_37.graphics.bf(sprImg_shape_37, null, new cjs.Matrix2D(0.624,-0.046,0,1,-114.6,-480.6)).s().p("EgR4hLFMAjxgCoMAAACY0MgjxACmg")
	}.bind(this);
	this.shape_37.setTransform(-248.425,177.15);

	this.shape_38 = new cjs.Shape();
	var sprImg_shape_38 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_38.onload = function(){
		this.shape_38.graphics.bf(sprImg_shape_38, null, new cjs.Matrix2D(0.699,-0.036,0,1,-128.4,-482.3)).s().p("EgUChLWMAoFgCGMAAACYzMgoFACGg")
	}.bind(this);
	this.shape_38.setTransform(-234.625,178.925);

	this.shape_39 = new cjs.Shape();
	var sprImg_shape_39 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_39.onload = function(){
		this.shape_39.graphics.bf(sprImg_shape_39, null, new cjs.Matrix2D(0.774,-0.027,0,1,-142.1,-484)).s().p("EgWMhLnMAsZgBkMAAACYzMgsZABkg")
	}.bind(this);
	this.shape_39.setTransform(-220.875,180.7);

	this.shape_40 = new cjs.Shape();
	var sprImg_shape_40 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_40.onload = function(){
		this.shape_40.graphics.bf(sprImg_shape_40, null, new cjs.Matrix2D(0.85,-0.018,0,1,-155.9,-485.6)).s().p("EgYWhL4MAwtgBCMAAACYyMgwtABEg")
	}.bind(this);
	this.shape_40.setTransform(-207.075,182.45);

	this.shape_41 = new cjs.Shape();
	var sprImg_shape_41 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_41.onload = function(){
		this.shape_41.graphics.bf(sprImg_shape_41, null, new cjs.Matrix2D(0.925,-0.009,0,1,-169.7,-487.3)).s().p("EgaghMIMA1BgAiMAAACYzMg1BAAig")
	}.bind(this);
	this.shape_41.setTransform(-193.3,184.225);

	this.shape_42 = new cjs.Shape();
	var sprImg_shape_42 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_42.onload = function(){
		this.shape_42.graphics.bf(sprImg_shape_42, null, new cjs.Matrix2D(1,0,0,1,-183.5,-489)).s().p("EgcqBMaMAAAiYzMA5VAAAMAAACYzg")
	}.bind(this);
	this.shape_42.setTransform(-179.5,186);

	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.setTransform(-363,186);

	this.instance_2 = new lib.folderFront("synched",0);
	this.instance_2.setTransform(5,186,1,1,0,0,0,0,-489);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29}]},14).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({scaleX:0.0323},5).to({_off:true},1).wait(5));

	// open_left
	this.shape_43 = new cjs.Shape();
	var sprImg_shape_43 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_43.onload = function(){
		this.shape_43.graphics.bf(sprImg_shape_43, null, new cjs.Matrix2D(0.5,0,0,0.5,-183.5,-487.5)).s().p("EgcqBMLMAAAiYVMA5VAAAMAAACYVg")
	}.bind(this);
	this.shape_43.setTransform(-546.5,184.15);

	this.shape_44 = new cjs.Shape();
	var sprImg_shape_44 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_44.onload = function(){
		this.shape_44.graphics.bf(sprImg_shape_44, null, new cjs.Matrix2D(0.456,0.005,0,0.5,-167.4,-489.4)).s().p("EgaJBL4MAAAiYVMA0UAAmMAAACYVg")
	}.bind(this);
	this.shape_44.setTransform(-530.45,182.425);

	this.shape_45 = new cjs.Shape();
	var sprImg_shape_45 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_45.onload = function(){
		this.shape_45.graphics.bf(sprImg_shape_45, null, new cjs.Matrix2D(0.413,0.01,0,0.5,-151.4,-491.2)).s().p("EgXpBLmMAAAiYVMAvTABKMAAACYVg")
	}.bind(this);
	this.shape_45.setTransform(-514.4,180.675);

	this.shape_46 = new cjs.Shape();
	var sprImg_shape_46 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_46.onload = function(){
		this.shape_46.graphics.bf(sprImg_shape_46, null, new cjs.Matrix2D(0.369,0.015,0,0.5,-135.3,-493.1)).s().p("EgVIBLTMAAAiYVMAqSABwMAAACYVg")
	}.bind(this);
	this.shape_46.setTransform(-498.35,178.95);

	this.shape_47 = new cjs.Shape();
	var sprImg_shape_47 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_47.onload = function(){
		this.shape_47.graphics.bf(sprImg_shape_47, null, new cjs.Matrix2D(0.325,0.02,0,0.5,-119.3,-495)).s().p("EgSoBLAMAAAiYVMAlRACWMAAACYVg")
	}.bind(this);
	this.shape_47.setTransform(-482.3,177.225);

	this.shape_48 = new cjs.Shape();
	var sprImg_shape_48 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_48.onload = function(){
		this.shape_48.graphics.bf(sprImg_shape_48, null, new cjs.Matrix2D(0.281,0.025,0,0.5,-103.3,-496.8)).s().p("EgQHBKuMAAAiYWMAgPAC7MAAACYWg")
	}.bind(this);
	this.shape_48.setTransform(-466.2,175.5);

	this.shape_49 = new cjs.Shape();
	var sprImg_shape_49 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_49.onload = function(){
		this.shape_49.graphics.bf(sprImg_shape_49, null, new cjs.Matrix2D(0.238,0.031,0,0.5,-87.2,-498.7)).s().p("EgNnBKbMAAAiYVIbPDgMAAACYVg")
	}.bind(this);
	this.shape_49.setTransform(-450.15,173.75);

	this.shape_50 = new cjs.Shape();
	var sprImg_shape_50 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_50.onload = function(){
		this.shape_50.graphics.bf(sprImg_shape_50, null, new cjs.Matrix2D(0.194,0.036,0,0.5,-71.2,-500.6)).s().p("EgLHBKIMAAAiYVIWOEGMAAACYVg")
	}.bind(this);
	this.shape_50.setTransform(-434.1,172.025);

	this.shape_51 = new cjs.Shape();
	var sprImg_shape_51 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_51.onload = function(){
		this.shape_51.graphics.bf(sprImg_shape_51, null, new cjs.Matrix2D(0.15,0.041,0,0.5,-55.1,-502.4)).s().p("EgImBJ2MAAAiYWIRNEsMAAACYVg")
	}.bind(this);
	this.shape_51.setTransform(-418.05,170.3);

	this.shape_52 = new cjs.Shape();
	var sprImg_shape_52 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_52.onload = function(){
		this.shape_52.graphics.bf(sprImg_shape_52, null, new cjs.Matrix2D(0.106,0.046,0,0.5,-39.1,-504.3)).s().p("EgGGBJjMAAAiYVIMMFQMAAACYVg")
	}.bind(this);
	this.shape_52.setTransform(-402,168.55);

	this.shape_53 = new cjs.Shape();
	var sprImg_shape_53 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_53.onload = function(){
		this.shape_53.graphics.bf(sprImg_shape_53, null, new cjs.Matrix2D(0.063,0.051,0,0.5,-23,-506.2)).s().p("EgDlBJQMAAAiYVIHLF2MAAACYVg")
	}.bind(this);
	this.shape_53.setTransform(-385.95,166.825);

	this.shape_54 = new cjs.Shape();
	var sprImg_shape_54 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_54.onload = function(){
		this.shape_54.graphics.bf(sprImg_shape_54, null, new cjs.Matrix2D(0.026,0.068,0,0.5,-9.5,-512.6)).s().p("EgBeBIQMAAAiYVIC9H2MAAACYVg")
	}.bind(this);
	this.shape_54.setTransform(-372.425,166.85);

	this.shape_55 = new cjs.Shape();
	var sprImg_shape_55 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_55.onload = function(){
		this.shape_55.graphics.bf(sprImg_shape_55, null, new cjs.Matrix2D(-0.007,0.046,0,0.5,2.7,-504.3)).s().p("EgAahJiIA1lQMAAACYVIg1FQg")
	}.bind(this);
	this.shape_55.setTransform(-360.225,165.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[]},14).to({state:[]},1).wait(11));

	// pocket
	this.instance_3 = new lib.pocket();
	this.instance_3.setTransform(-361,348,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:true},1).wait(10));

	// move_up_6
	this.insert6btn = new lib.insert6button();
	this.insert6btn.name = "insert6btn";
	this.insert6btn.setTransform(4.8,423.95,1,1,0,0,0,0,-251.1);
	new cjs.ButtonHelper(this.insert6btn, 0, 1, 1);

	this.instance_4 = new lib.insert1();
	this.instance_4.setTransform(-351,173,0.3602,0.3602);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.insert6btn}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.insert6btn}]},28).to({state:[]},1).wait(10));

	// move_up_5
	this.insert5btn = new lib.insert5button();
	this.insert5btn.name = "insert5btn";
	this.insert5btn.setTransform(4.6,382.3,1,1,0,0,0,0,-293.3);
	new cjs.ButtonHelper(this.insert5btn, 0, 1, 1);

	this.instance_5 = new lib.insert2();
	this.instance_5.setTransform(-351,89,0.3603,0.3603);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.insert5btn}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.insert5btn}]},28).to({state:[]},1).wait(10));

	// move_up_4
	this.insert4btn = new lib.insert4button();
	this.insert4btn.name = "insert4btn";
	this.insert4btn.setTransform(4.95,340.2,1,1,0,0,0,0,-334.9);
	new cjs.ButtonHelper(this.insert4btn, 0, 1, 1);

	this.instance_6 = new lib.insert3();
	this.instance_6.setTransform(-351,5,0.3607,0.3607);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.insert4btn}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.insert4btn}]},28).to({state:[]},1).wait(10));

	// move_up_3
	this.insert3btn = new lib.insert3button();
	this.insert3btn.name = "insert3btn";
	this.insert3btn.setTransform(4.85,298.05,1,1,0,0,0,0,-377.2);
	new cjs.ButtonHelper(this.insert3btn, 0, 1, 1);

	this.instance_7 = new lib.insert4();
	this.instance_7.setTransform(-351,-79,0.3802,0.3802);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.insert3btn}]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.insert3btn}]},28).to({state:[]},1).wait(10));

	// move_up_2_
	this.insert2btn = new lib.insert2button();
	this.insert2btn.name = "insert2btn";
	this.insert2btn.setTransform(4.65,256.65,1,1,0,0,0,0,-418.8);
	new cjs.ButtonHelper(this.insert2btn, 0, 1, 1);

	this.instance_8 = new lib.insert5();
	this.instance_8.setTransform(-351,-162,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.insert2btn}]}).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.insert2btn}]},28).to({state:[]},1).wait(10));

	// move_up_1
	this.insert1btn = new lib.insert1_1();
	this.insert1btn.name = "insert1btn";
	this.insert1btn.setTransform(4.65,215.1,1,1,0,0,0,0,-460.2);
	new cjs.ButtonHelper(this.insert1btn, 0, 1, 1);

	this.instance_9 = new lib.insert6();
	this.instance_9.setTransform(-351,-245,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.insert1btn}]}).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.insert1btn}]},28).to({state:[]},1).wait(10));

	// back
	this.instance_10 = new lib.insidecenter();
	this.instance_10.setTransform(-363,-303,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-730,-350.9,1471,1030.4);


// stage content:
(lib.CarePkgEng1_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"folder closed":0,"left panel opened":29,"right panel opened":59,"default":60,"1popout":64,"1foreground":74,read1:85,"2popout":99,"2foreground":109,read2:120,"3popout":134,"3foreground":144,read3:155,"4popout":169,"4foreground":179,read4:190,"5popout":204,"5foreground":214,read5:225,"6popout":239,"6foreground":249,read6:260,close:274,next:315};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,60,84,94,119,129,154,164,189,199,224,234,259,269,314,338];
	// timeline functions:
	this.frame_0 = function() {
		setTimeout(function() {
		  // Code to execute after the 2-second pause
		}, 2000);
	}
	this.frame_60 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.insert1btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay("1popout");
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.insert2btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_10.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_10()
		{
			this.gotoAndPlay("2popout");
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.insert3btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_12.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_12()
		{
			this.gotoAndPlay("3popout");
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.insert4btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_16.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_16()
		{
			this.gotoAndPlay("4popout");
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.insert5btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_17.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_17()
		{
			this.gotoAndPlay("5popout");
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.insert6btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_18.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_18()
		{
			this.gotoAndPlay("6popout");
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.leftPanelBtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_19.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_19()
		{
			this.gotoAndPlay("close");
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.rightPanelBtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_20.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_20()
		{
			this.gotoAndPlay("close");
		}
	}
	this.frame_84 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.insert1goBack.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay("read1");
		}
	}
	this.frame_94 = function() {
		this.gotoAndStop("default");
	}
	this.frame_119 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.insert2goBack.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay("read2");
		}
	}
	this.frame_129 = function() {
		this.gotoAndStop("default");
	}
	this.frame_154 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.insert3button.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_11.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_11()
		{
			this.gotoAndPlay("read3");
		}
	}
	this.frame_164 = function() {
		this.gotoAndStop("default");
	}
	this.frame_189 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.insert4button.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay("read4");
		}
	}
	this.frame_199 = function() {
		this.gotoAndStop("default");
	}
	this.frame_224 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.insert5button.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay("read5");
		}
	}
	this.frame_234 = function() {
		this.gotoAndStop("default");
	}
	this.frame_259 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.insert6button.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay("read6");
		}
	}
	this.frame_269 = function() {
		this.gotoAndStop("default");
	}
	this.frame_314 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.folderBackBtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_21.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_21()
		{
			this.gotoAndPlay("next");
		}
	}
	this.frame_338 = function() {
		this.gotoAndPlay("folder closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60).call(this.frame_60).wait(24).call(this.frame_84).wait(10).call(this.frame_94).wait(25).call(this.frame_119).wait(10).call(this.frame_129).wait(25).call(this.frame_154).wait(10).call(this.frame_164).wait(25).call(this.frame_189).wait(10).call(this.frame_199).wait(25).call(this.frame_224).wait(10).call(this.frame_234).wait(25).call(this.frame_259).wait(10).call(this.frame_269).wait(45).call(this.frame_314).wait(24).call(this.frame_338).wait(2));

	// foreground_6
	this.insert6button = new lib.Tween19();
	this.insert6button.name = "insert6button";
	this.insert6button.setTransform(754.8,829);
	this.insert6button._off = true;
	new cjs.ButtonHelper(this.insert6button, 0, 1, 2, false, new lib.Tween19(), 3);

	this.timeline.addTween(cjs.Tween.get(this.insert6button).wait(249).to({_off:false},0).to({scaleX:1.15,scaleY:1.15,y:890.95},10).wait(1).to({scaleX:1,scaleY:1,y:829},4).to({_off:true},1).wait(75));

	// foreground_5
	this.insert5button = new lib.Tween16();
	this.insert5button.name = "insert5button";
	this.insert5button.setTransform(754.6,636.2);
	this.insert5button._off = true;
	new cjs.ButtonHelper(this.insert5button, 0, 1, 2, false, new lib.Tween16(), 3);

	this.timeline.addTween(cjs.Tween.get(this.insert5button).wait(214).to({_off:false},0).to({scaleX:1.15,scaleY:1.15,x:754.55,y:864.2},10).wait(1).to({scaleX:1,scaleY:1,x:754.6,y:636.2},4).to({_off:true},1).wait(110));

	// foreground_4
	this.insert4button = new lib.Tween13();
	this.insert4button.name = "insert4button";
	this.insert4button.setTransform(754.95,599.95);
	this.insert4button._off = true;
	new cjs.ButtonHelper(this.insert4button, 0, 1, 2, false, new lib.Tween13(), 3);

	this.timeline.addTween(cjs.Tween.get(this.insert4button).wait(179).to({_off:false},0).to({scaleX:1.15,scaleY:1.15,x:754.6,y:947.1},10).wait(1).to({scaleX:1,scaleY:1,x:754.95,y:599.95},4).to({_off:true},1).wait(145));

	// foreground_3
	this.insert3button = new lib.Tween10();
	this.insert3button.name = "insert3button";
	this.insert3button.setTransform(754.85,565);
	this.insert3button._off = true;
	new cjs.ButtonHelper(this.insert3button, 0, 1, 2, false, new lib.Tween10(), 3);

	this.timeline.addTween(cjs.Tween.get(this.insert3button).wait(144).to({_off:false},0).to({scaleX:1.15,scaleY:1.15,y:895.05},10).wait(1).to({scaleX:1,scaleY:1,y:565},4).to({_off:true},1).wait(180));

	// foreground_2
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(754.65,515);
	this.instance._off = true;

	this.insert2goBack = new lib.Tween7("synched",0);
	this.insert2goBack.name = "insert2goBack";
	this.insert2goBack.setTransform(754.6,852.25,1.15,1.15);
	this.insert2goBack._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({_off:true,scaleX:1.15,scaleY:1.15,x:754.6,y:852.25},10).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.insert2goBack).wait(109).to({_off:false},10).wait(1).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:754.65,y:518.25},4).to({_off:true},1).wait(215));

	// foreground_1
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(754.65,476.85);
	this.instance_1._off = true;

	this.insert1goBack = new lib.Tween30("synched",0,false);
	this.insert1goBack.name = "insert1goBack";
	this.insert1goBack.setTransform(754.65,810.05,1.15,1.15);
	this.insert1goBack._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({_off:true,scaleX:1.15,scaleY:1.15,y:810.05,loop:false},10).to({_off:false},1).to({scaleX:1,scaleY:1,y:476.85},4).to({_off:true},1).wait(250));
	this.timeline.addTween(cjs.Tween.get(this.insert1goBack).wait(74).to({_off:false},10).to({_off:true},1).wait(255));

	// right_panel
	this.instance_2 = new lib.outright();
	this.instance_2.setTransform(754,437,0.5,0.5);

	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-184.5,-489)).s().p("Egc0BMaMAAAiYzMA5pAAAMAAACYzg")
	}.bind(this);
	this.shape.setTransform(938.5,926);

	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(0.465,0.005,0,0.5,-171.5,-490.7)).s().p("EgayBMJMAAAiYzMA1lAAiMAAACYzg")
	}.bind(this);
	this.shape_1.setTransform(951.5,924.325);

	this.shape_2 = new cjs.Shape();
	var sprImg_shape_2 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_2.onload = function(){
		this.shape_2.graphics.bf(sprImg_shape_2, null, new cjs.Matrix2D(0.43,0.009,0,0.5,-158.5,-492.3)).s().p("EgYwBL5MAAAiYzMAxhABCMAAACYzg")
	}.bind(this);
	this.shape_2.setTransform(964.475,922.675);

	this.shape_3 = new cjs.Shape();
	var sprImg_shape_3 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_3.onload = function(){
		this.shape_3.graphics.bf(sprImg_shape_3, null, new cjs.Matrix2D(0.394,0.014,0,0.5,-145.5,-494)).s().p("EgWuBLoMAAAiYzMAtdABkMAAACYzg")
	}.bind(this);
	this.shape_3.setTransform(977.475,921);

	this.shape_4 = new cjs.Shape();
	var sprImg_shape_4 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_4.onload = function(){
		this.shape_4.graphics.bf(sprImg_shape_4, null, new cjs.Matrix2D(0.359,0.018,0,0.5,-132.5,-495.7)).s().p("EgUtBLXMAAAiYzMApbACGMAAACYzg")
	}.bind(this);
	this.shape_4.setTransform(990.45,919.325);

	this.shape_5 = new cjs.Shape();
	var sprImg_shape_5 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_5.onload = function(){
		this.shape_5.graphics.bf(sprImg_shape_5, null, new cjs.Matrix2D(0.324,0.023,0,0.5,-119.6,-497.3)).s().p("EgSrBLHMAAAiY0MAlXACoMAAACYyg")
	}.bind(this);
	this.shape_5.setTransform(1003.425,917.65);

	this.shape_6 = new cjs.Shape();
	var sprImg_shape_6 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_6.onload = function(){
		this.shape_6.graphics.bf(sprImg_shape_6, null, new cjs.Matrix2D(0.289,0.027,0,0.5,-106.6,-499)).s().p("EgQpBK2MAAAiYzMAhTADIMAAACYzg")
	}.bind(this);
	this.shape_6.setTransform(1016.425,916);

	this.shape_7 = new cjs.Shape();
	var sprImg_shape_7 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_7.onload = function(){
		this.shape_7.graphics.bf(sprImg_shape_7, null, new cjs.Matrix2D(0.254,0.032,0,0.5,-93.6,-500.7)).s().p("EgOnBKlMAAAiYzIdPDqMAAACYzg")
	}.bind(this);
	this.shape_7.setTransform(1029.4,914.325);

	this.shape_8 = new cjs.Shape();
	var sprImg_shape_8 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_8.onload = function(){
		this.shape_8.graphics.bf(sprImg_shape_8, null, new cjs.Matrix2D(0.218,0.036,0,0.5,-80.6,-502.3)).s().p("EgMlBKVMAAAiYzIZLEKMAAACYzg")
	}.bind(this);
	this.shape_8.setTransform(1042.4,912.675);

	this.shape_9 = new cjs.Shape();
	var sprImg_shape_9 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_9.onload = function(){
		this.shape_9.graphics.bf(sprImg_shape_9, null, new cjs.Matrix2D(0.183,0.041,0,0.5,-67.6,-504)).s().p("EgKjBKEMAAAiYzIVHEsMAAACYzg")
	}.bind(this);
	this.shape_9.setTransform(1055.375,911);

	this.shape_10 = new cjs.Shape();
	var sprImg_shape_10 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_10.onload = function(){
		this.shape_10.graphics.bf(sprImg_shape_10, null, new cjs.Matrix2D(0.148,0.045,0,0.5,-54.6,-505.7)).s().p("EgIiBJzMAAAiYzIRFFOMAAACYzg")
	}.bind(this);
	this.shape_10.setTransform(1068.35,909.325);

	this.shape_11 = new cjs.Shape();
	var sprImg_shape_11 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_11.onload = function(){
		this.shape_11.graphics.bf(sprImg_shape_11, null, new cjs.Matrix2D(0.113,0.05,0,0.5,-41.6,-507.3)).s().p("EgGgBJjMAAAiYzINBFuMAAACYzg")
	}.bind(this);
	this.shape_11.setTransform(1081.35,907.675);

	this.shape_12 = new cjs.Shape();
	var sprImg_shape_12 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_12.onload = function(){
		this.shape_12.graphics.bf(sprImg_shape_12, null, new cjs.Matrix2D(0.078,0.054,0,0.5,-28.7,-509)).s().p("EgEeBJSMAAAiYzII9GQMAAACYzg")
	}.bind(this);
	this.shape_12.setTransform(1094.325,906);

	this.shape_13 = new cjs.Shape();
	var sprImg_shape_13 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_13.onload = function(){
		this.shape_13.graphics.bf(sprImg_shape_13, null, new cjs.Matrix2D(0.043,0.059,0,0.5,-15.7,-510.6)).s().p("EgCcBJBMAAAiYzIE5GyMAAACYyg")
	}.bind(this);
	this.shape_13.setTransform(1107.325,904.35);

	this.shape_14 = new cjs.Shape();
	var sprImg_shape_14 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_14.onload = function(){
		this.shape_14.graphics.bf(sprImg_shape_14, null, new cjs.Matrix2D(0.007,0.063,0,0.5,-2.7,-512.3)).s().p("EgAaBIxMAAAiYzIA1HSMAAACYzg")
	}.bind(this);
	this.shape_14.setTransform(1120.3,902.675);

	this.shape_15 = new cjs.Shape();
	var sprImg_shape_15 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],1);
	sprImg_shape_15.onload = function(){
		this.shape_15.graphics.bf(sprImg_shape_15, null, new cjs.Matrix2D(0.006,0.063,0,0.5,-2.2,-512.3)).s().p("EgAVBIxMAAAiYzIArHSMAAACYzg")
	}.bind(this);
	this.shape_15.setTransform(1124.125,902.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.shape}]},29).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).wait(295));

	// open_right
	this.shape_16 = new cjs.Shape();
	var sprImg_shape_16 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_16.onload = function(){
		this.shape_16.graphics.bf(sprImg_shape_16, null, new cjs.Matrix2D(0.006,-0.065,0,0.5,-2.1,-465)).s().p("EgAUhIpIAongMAAACYzIgoHgg")
	}.bind(this);
	this.shape_16.setTransform(1124.3,902.05);

	this.shape_17 = new cjs.Shape();
	var sprImg_shape_17 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_17.onload = function(){
		this.shape_17.graphics.bf(sprImg_shape_17, null, new cjs.Matrix2D(0.024,-0.065,0,0.5,-8.7,-465)).s().p("EgBWhIpICtngMAAACYzIitHgg")
	}.bind(this);
	this.shape_17.setTransform(1131.8,902.05);

	this.shape_18 = new cjs.Shape();
	var sprImg_shape_18 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_18.onload = function(){
		this.shape_18.graphics.bf(sprImg_shape_18, null, new cjs.Matrix2D(0.047,-0.065,0,0.5,-17.4,-465)).s().p("EgCthIpIFbngMAAACYzIlbHgg")
	}.bind(this);
	this.shape_18.setTransform(1140.425,902.05);

	this.shape_19 = new cjs.Shape();
	var sprImg_shape_19 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_19.onload = function(){
		this.shape_19.graphics.bf(sprImg_shape_19, null, new cjs.Matrix2D(0.082,-0.06,0,0.5,-30.2,-466.8)).s().p("EgEthI8IJbm6MAAACYzIpbG7g")
	}.bind(this);
	this.shape_19.setTransform(1153.25,903.9);

	this.shape_20 = new cjs.Shape();
	var sprImg_shape_20 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_20.onload = function(){
		this.shape_20.graphics.bf(sprImg_shape_20, null, new cjs.Matrix2D(0.117,-0.055,0,0.5,-43,-468.7)).s().p("EgGthJOINbmWMAAACYzItbGWg")
	}.bind(this);
	this.shape_20.setTransform(1166.05,905.75);

	this.shape_21 = new cjs.Shape();
	var sprImg_shape_21 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_21.onload = function(){
		this.shape_21.graphics.bf(sprImg_shape_21, null, new cjs.Matrix2D(0.152,-0.05,0,0.5,-55.9,-470.5)).s().p("EgIthJgIRblyMAAACYzIxbFyg")
	}.bind(this);
	this.shape_21.setTransform(1178.875,907.575);

	this.shape_22 = new cjs.Shape();
	var sprImg_shape_22 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_22.onload = function(){
		this.shape_22.graphics.bf(sprImg_shape_22, null, new cjs.Matrix2D(0.187,-0.045,0,0.5,-68.7,-472.4)).s().p("EgKthJzIVblMMAAACYzI1bFMg")
	}.bind(this);
	this.shape_22.setTransform(1191.675,909.425);

	this.shape_23 = new cjs.Shape();
	var sprImg_shape_23 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_23.onload = function(){
		this.shape_23.graphics.bf(sprImg_shape_23, null, new cjs.Matrix2D(0.221,-0.04,0,0.5,-81.5,-474.2)).s().p("EgMuhKFIZckoMAAACYzI5cEog")
	}.bind(this);
	this.shape_23.setTransform(1204.5,911.275);

	this.shape_24 = new cjs.Shape();
	var sprImg_shape_24 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_24.onload = function(){
		this.shape_24.graphics.bf(sprImg_shape_24, null, new cjs.Matrix2D(0.256,-0.035,0,0.5,-94.3,-476.1)).s().p("EgOuhKYIddkCMAAACYzI9dECg")
	}.bind(this);
	this.shape_24.setTransform(1217.325,913.125);

	this.shape_25 = new cjs.Shape();
	var sprImg_shape_25 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_25.onload = function(){
		this.shape_25.graphics.bf(sprImg_shape_25, null, new cjs.Matrix2D(0.291,-0.03,0,0.5,-107.1,-477.9)).s().p("EgQuhKqMAhdgDeMAAACYzMghdADeg")
	}.bind(this);
	this.shape_25.setTransform(1230.1,914.925);

	this.shape_26 = new cjs.Shape();
	var sprImg_shape_26 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_26.onload = function(){
		this.shape_26.graphics.bf(sprImg_shape_26, null, new cjs.Matrix2D(0.326,-0.025,0,0.5,-119.9,-479.8)).s().p("EgSuhK9MAldgC4MAAACYzMgldAC4g")
	}.bind(this);
	this.shape_26.setTransform(1242.925,916.775);

	this.shape_27 = new cjs.Shape();
	var sprImg_shape_27 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_27.onload = function(){
		this.shape_27.graphics.bf(sprImg_shape_27, null, new cjs.Matrix2D(0.361,-0.02,0,0.5,-132.7,-481.6)).s().p("EgUuhLPMApegCUMAAACYzMgpeACUg")
	}.bind(this);
	this.shape_27.setTransform(1255.75,918.625);

	this.shape_28 = new cjs.Shape();
	var sprImg_shape_28 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_28.onload = function(){
		this.shape_28.graphics.bf(sprImg_shape_28, null, new cjs.Matrix2D(0.396,-0.015,0,0.5,-145.5,-483.5)).s().p("EgWuhLiMAtdgBuMAAACYzMgtdABug")
	}.bind(this);
	this.shape_28.setTransform(1268.55,920.475);

	this.shape_29 = new cjs.Shape();
	var sprImg_shape_29 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_29.onload = function(){
		this.shape_29.graphics.bf(sprImg_shape_29, null, new cjs.Matrix2D(0.43,-0.01,0,0.5,-158.4,-485.3)).s().p("EgYvhL0MAxfgBKMAAACYzMgxfABKg")
	}.bind(this);
	this.shape_29.setTransform(1281.375,922.3);

	this.shape_30 = new cjs.Shape();
	var sprImg_shape_30 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_30.onload = function(){
		this.shape_30.graphics.bf(sprImg_shape_30, null, new cjs.Matrix2D(0.465,-0.005,0,0.5,-171.2,-487.1)).s().p("EgavhMGMA1fgAmMAAACYzMg1fAAlg")
	}.bind(this);
	this.shape_30.setTransform(1294.175,924.15);

	this.shape_31 = new cjs.Shape();
	var sprImg_shape_31 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_3"],0);
	sprImg_shape_31.onload = function(){
		this.shape_31.graphics.bf(sprImg_shape_31, null, new cjs.Matrix2D(0.5,0,0,0.5,-184,-489)).s().p("EgcvBMaMAAAiYzMA5fAAAMAAACYzg")
	}.bind(this);
	this.shape_31.setTransform(1307,926);

	this.rightPanelBtn = new lib.rightPanelButton();
	this.rightPanelBtn.name = "rightPanelBtn";
	this.rightPanelBtn.setTransform(1307,926,1,1,0,0,0,0,-489);
	new cjs.ButtonHelper(this.rightPanelBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},44).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.rightPanelBtn}]},1).to({state:[]},210).wait(70));

	// left_panel
	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.setTransform(387,926);

	this.shape_32 = new cjs.Shape();
	var sprImg_shape_32 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_32.onload = function(){
		this.shape_32.graphics.bf(sprImg_shape_32, null, new cjs.Matrix2D(1,0,0,1,-183.5,-489)).s().p("EgcqBMaMAAAiYzMA5VAAAMAAACYzg")
	}.bind(this);
	this.shape_32.setTransform(570.5,926);

	this.shape_33 = new cjs.Shape();
	var sprImg_shape_33 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_33.onload = function(){
		this.shape_33.graphics.bf(sprImg_shape_33, null, new cjs.Matrix2D(0.925,-0.009,0,1,-169.7,-487.3)).s().p("EgaghMIMA1BgAiMAAACYzMg1BAAig")
	}.bind(this);
	this.shape_33.setTransform(556.7,924.225);

	this.shape_34 = new cjs.Shape();
	var sprImg_shape_34 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_34.onload = function(){
		this.shape_34.graphics.bf(sprImg_shape_34, null, new cjs.Matrix2D(0.85,-0.018,0,1,-155.9,-485.6)).s().p("EgYWhL4MAwtgBCMAAACYyMgwtABDg")
	}.bind(this);
	this.shape_34.setTransform(542.925,922.45);

	this.shape_35 = new cjs.Shape();
	var sprImg_shape_35 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_35.onload = function(){
		this.shape_35.graphics.bf(sprImg_shape_35, null, new cjs.Matrix2D(0.774,-0.027,0,1,-142.1,-484)).s().p("EgWMhLnMAsZgBkMAAACYzMgsZABkg")
	}.bind(this);
	this.shape_35.setTransform(529.125,920.7);

	this.shape_36 = new cjs.Shape();
	var sprImg_shape_36 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_36.onload = function(){
		this.shape_36.graphics.bf(sprImg_shape_36, null, new cjs.Matrix2D(0.699,-0.036,0,1,-128.4,-482.3)).s().p("EgUChLWMAoFgCGMAAACYzMgoFACGg")
	}.bind(this);
	this.shape_36.setTransform(515.375,918.925);

	this.shape_37 = new cjs.Shape();
	var sprImg_shape_37 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_37.onload = function(){
		this.shape_37.graphics.bf(sprImg_shape_37, null, new cjs.Matrix2D(0.624,-0.046,0,1,-114.6,-480.6)).s().p("EgR4hLGMAjxgCnMAAACYzMgjxACog")
	}.bind(this);
	this.shape_37.setTransform(501.575,917.15);

	this.shape_38 = new cjs.Shape();
	var sprImg_shape_38 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_38.onload = function(){
		this.shape_38.graphics.bf(sprImg_shape_38, null, new cjs.Matrix2D(0.549,-0.055,0,1,-100.8,-479)).s().p("EgPuhK1IfdjIMAAACYzI/dDIg")
	}.bind(this);
	this.shape_38.setTransform(487.775,915.375);

	this.shape_39 = new cjs.Shape();
	var sprImg_shape_39 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_39.onload = function(){
		this.shape_39.graphics.bf(sprImg_shape_39, null, new cjs.Matrix2D(0.474,-0.064,0,1,-86.9,-477.3)).s().p("EgNkhKkIbKjqMAAACYzI7KDqg")
	}.bind(this);
	this.shape_39.setTransform(474,913.625);

	this.shape_40 = new cjs.Shape();
	var sprImg_shape_40 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_40.onload = function(){
		this.shape_40.graphics.bf(sprImg_shape_40, null, new cjs.Matrix2D(0.399,-0.073,0,1,-73.1,-475.6)).s().p("EgLahKTIW1kMMAAACY0I21EKg")
	}.bind(this);
	this.shape_40.setTransform(460.2,911.85);

	this.shape_41 = new cjs.Shape();
	var sprImg_shape_41 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_41.onload = function(){
		this.shape_41.graphics.bf(sprImg_shape_41, null, new cjs.Matrix2D(0.323,-0.082,0,1,-59.3,-474)).s().p("EgJQhKDIShksMAAACYzIyhEsg")
	}.bind(this);
	this.shape_41.setTransform(446.4,910.075);

	this.shape_42 = new cjs.Shape();
	var sprImg_shape_42 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_42.onload = function(){
		this.shape_42.graphics.bf(sprImg_shape_42, null, new cjs.Matrix2D(0.248,-0.091,0,1,-45.6,-472.3)).s().p("EgHHhJyIOOlOMAAACYzIuOFOg")
	}.bind(this);
	this.shape_42.setTransform(432.65,908.3);

	this.shape_43 = new cjs.Shape();
	var sprImg_shape_43 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_43.onload = function(){
		this.shape_43.graphics.bf(sprImg_shape_43, null, new cjs.Matrix2D(0.173,-0.1,0,1,-31.8,-470.6)).s().p("EgE9hJiIJ7luMAAACYyIp7Fwg")
	}.bind(this);
	this.shape_43.setTransform(418.85,906.55);

	this.shape_44 = new cjs.Shape();
	var sprImg_shape_44 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_44.onload = function(){
		this.shape_44.graphics.bf(sprImg_shape_44, null, new cjs.Matrix2D(0.098,-0.109,0,1,-18,-469)).s().p("EgCzhJRIFnmQMAAACYzIlnGQg")
	}.bind(this);
	this.shape_44.setTransform(405.075,904.775);

	this.shape_45 = new cjs.Shape();
	var sprImg_shape_45 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_1"],0);
	sprImg_shape_45.onload = function(){
		this.shape_45.graphics.bf(sprImg_shape_45, null, new cjs.Matrix2D(0.023,-0.118,0,1,-4.2,-467.3)).s().p("EgAphJAIBTmyMAAACYzIhTGyg")
	}.bind(this);
	this.shape_45.setTransform(391.275,903);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[]},1).wait(325));

	// open_left
	this.shape_46 = new cjs.Shape();
	var sprImg_shape_46 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_46.onload = function(){
		this.shape_46.graphics.bf(sprImg_shape_46, null, new cjs.Matrix2D(-0.007,0.046,0,0.5,2.7,-504.3)).s().p("EgAahJiIA1lQMAAACYVIg1FQg")
	}.bind(this);
	this.shape_46.setTransform(389.775,905.575);

	this.shape_47 = new cjs.Shape();
	var sprImg_shape_47 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_47.onload = function(){
		this.shape_47.graphics.bf(sprImg_shape_47, null, new cjs.Matrix2D(0.026,0.068,0,0.5,-9.5,-512.6)).s().p("EgBeBIQMAAAiYVIC9H2MAAACYVg")
	}.bind(this);
	this.shape_47.setTransform(377.575,906.85);

	this.shape_48 = new cjs.Shape();
	var sprImg_shape_48 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_48.onload = function(){
		this.shape_48.graphics.bf(sprImg_shape_48, null, new cjs.Matrix2D(0.063,0.051,0,0.5,-23,-506.2)).s().p("EgDlBJQMAAAiYVIHLF2MAAACYVg")
	}.bind(this);
	this.shape_48.setTransform(364.05,906.825);

	this.shape_49 = new cjs.Shape();
	var sprImg_shape_49 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_49.onload = function(){
		this.shape_49.graphics.bf(sprImg_shape_49, null, new cjs.Matrix2D(0.096,0.047,0,0.5,-35.4,-504.7)).s().p("EgFgBJfMAAAiYWILCFaMAAACYVg")
	}.bind(this);
	this.shape_49.setTransform(351.7,908.15);

	this.shape_50 = new cjs.Shape();
	var sprImg_shape_50 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_50.onload = function(){
		this.shape_50.graphics.bf(sprImg_shape_50, null, new cjs.Matrix2D(0.13,0.043,0,0.5,-47.7,-503.3)).s().p("EgHcBJtMAAAiYVIO5E8MAAACYVg")
	}.bind(this);
	this.shape_50.setTransform(339.35,909.5);

	this.shape_51 = new cjs.Shape();
	var sprImg_shape_51 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_51.onload = function(){
		this.shape_51.graphics.bf(sprImg_shape_51, null, new cjs.Matrix2D(0.164,0.039,0,0.5,-60.1,-501.9)).s().p("EgJYBJ7MAAAiYVISxEgMAAACYVg")
	}.bind(this);
	this.shape_51.setTransform(327,910.825);

	this.shape_52 = new cjs.Shape();
	var sprImg_shape_52 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_52.onload = function(){
		this.shape_52.graphics.bf(sprImg_shape_52, null, new cjs.Matrix2D(0.197,0.035,0,0.5,-72.4,-500.4)).s().p("EgLTBKKMAAAiYVIWnECMAAACYVg")
	}.bind(this);
	this.shape_52.setTransform(314.65,912.175);

	this.shape_53 = new cjs.Shape();
	var sprImg_shape_53 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_53.onload = function(){
		this.shape_53.graphics.bf(sprImg_shape_53, null, new cjs.Matrix2D(0.231,0.031,0,0.5,-84.7,-499)).s().p("EgNPBKYMAAAiYVIafDmMAAACYVg")
	}.bind(this);
	this.shape_53.setTransform(302.3,913.5);

	this.shape_54 = new cjs.Shape();
	var sprImg_shape_54 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_54.onload = function(){
		this.shape_54.graphics.bf(sprImg_shape_54, null, new cjs.Matrix2D(0.264,0.027,0,0.5,-97.1,-497.6)).s().p("EgPKBKmMAAAiYVIeVDKMAAACYVg")
	}.bind(this);
	this.shape_54.setTransform(289.95,914.825);

	this.shape_55 = new cjs.Shape();
	var sprImg_shape_55 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_55.onload = function(){
		this.shape_55.graphics.bf(sprImg_shape_55, null, new cjs.Matrix2D(0.298,0.023,0,0.5,-109.4,-496.1)).s().p("EgRFBK1MAAAiYVMAiLACsMAAACYVg")
	}.bind(this);
	this.shape_55.setTransform(277.6,916.15);

	this.shape_56 = new cjs.Shape();
	var sprImg_shape_56 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_56.onload = function(){
		this.shape_56.graphics.bf(sprImg_shape_56, null, new cjs.Matrix2D(0.332,0.02,0,0.5,-121.8,-494.7)).s().p("EgTBBLDMAAAiYVMAmDACQMAAACYVg")
	}.bind(this);
	this.shape_56.setTransform(265.25,917.475);

	this.shape_57 = new cjs.Shape();
	var sprImg_shape_57 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_57.onload = function(){
		this.shape_57.graphics.bf(sprImg_shape_57, null, new cjs.Matrix2D(0.365,0.016,0,0.5,-134.1,-493.2)).s().p("EgU8BLSMAAAiYWMAp5ABzMAAACYVg")
	}.bind(this);
	this.shape_57.setTransform(252.9,918.8);

	this.shape_58 = new cjs.Shape();
	var sprImg_shape_58 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_58.onload = function(){
		this.shape_58.graphics.bf(sprImg_shape_58, null, new cjs.Matrix2D(0.399,0.012,0,0.5,-146.4,-491.8)).s().p("EgW3BLgMAAAiYVMAtwABWMAAACYVg")
	}.bind(this);
	this.shape_58.setTransform(240.55,920.15);

	this.shape_59 = new cjs.Shape();
	var sprImg_shape_59 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_59.onload = function(){
		this.shape_59.graphics.bf(sprImg_shape_59, null, new cjs.Matrix2D(0.433,0.008,0,0.5,-158.8,-490.4)).s().p("EgYzBLuMAAAiYVMAxnAA6MAAACYVg")
	}.bind(this);
	this.shape_59.setTransform(228.2,921.475);

	this.shape_60 = new cjs.Shape();
	var sprImg_shape_60 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_60.onload = function(){
		this.shape_60.graphics.bf(sprImg_shape_60, null, new cjs.Matrix2D(0.466,0.004,0,0.5,-171.1,-488.9)).s().p("EgauBL9MAAAiYVMA1eAAcMAAACYVg")
	}.bind(this);
	this.shape_60.setTransform(215.85,922.825);

	this.shape_61 = new cjs.Shape();
	var sprImg_shape_61 = cjs.SpriteSheetUtils.extractFrame(ss["CarePkg_HTML5 Canvas_atlas_2"],0);
	sprImg_shape_61.onload = function(){
		this.shape_61.graphics.bf(sprImg_shape_61, null, new cjs.Matrix2D(0.5,0,0,0.5,-183.5,-487.5)).s().p("EgcqBMLMAAAiYVMA5VAAAMAAACYVg")
	}.bind(this);
	this.shape_61.setTransform(203.5,924.15);

	this.leftPanelBtn = new lib.leftPanelButton();
	this.leftPanelBtn.name = "leftPanelBtn";
	this.leftPanelBtn.setTransform(203.5,924.15,1,1,0,0,0,0,-487.5);
	new cjs.ButtonHelper(this.leftPanelBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46}]},14).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.leftPanelBtn}]},31).to({state:[]},210).wait(70));

	// pocket
	this.instance_4 = new lib.pocket();
	this.instance_4.setTransform(389,1088,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},206).wait(70));

	// move_up_6
	this.instance_5 = new lib.insert1();
	this.instance_5.setTransform(399,913,0.3602,0.3602);

	this.insert6btn = new lib.insert6button();
	this.insert6btn.name = "insert6btn";
	this.insert6btn.setTransform(754.8,1163.95,1,1,0,0,0,0,-251.1);
	new cjs.ButtonHelper(this.insert6btn, 0, 1, 1);

	this.insert6button_1 = new lib.Tween19();
	this.insert6button_1.name = "insert6button_1";
	this.insert6button_1.setTransform(754.8,1164);
	this.insert6button_1._off = true;
	new cjs.ButtonHelper(this.insert6button_1, 0, 1, 2, false, new lib.Tween19(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.insert6btn}]},60).to({state:[]},1).to({state:[{t:this.insert6button_1}]},3).to({state:[{t:this.insert6button_1}]},175).to({state:[{t:this.insert6button_1}]},10).to({state:[]},1).to({state:[{t:this.insert6button_1}]},14).to({state:[{t:this.insert6button_1}]},5).to({state:[]},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.insert6button_1).wait(64).to({_off:false},0).wait(175).to({y:829},10).to({_off:true},1).wait(14).to({_off:false},0).to({y:1164},5).to({_off:true},1).wait(70));

	// move_up_5
	this.instance_6 = new lib.insert2();
	this.instance_6.setTransform(399,829,0.3603,0.3603);

	this.insert5btn = new lib.insert5button();
	this.insert5btn.name = "insert5btn";
	this.insert5btn.setTransform(754.6,1122.3,1,1,0,0,0,0,-293.3);
	new cjs.ButtonHelper(this.insert5btn, 0, 1, 1);

	this.insert5button_1 = new lib.Tween16();
	this.insert5button_1.name = "insert5button_1";
	this.insert5button_1.setTransform(754.6,1122.3);
	this.insert5button_1._off = true;
	new cjs.ButtonHelper(this.insert5button_1, 0, 1, 2, false, new lib.Tween16(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.insert5btn}]},60).to({state:[]},1).to({state:[{t:this.insert5button_1}]},3).to({state:[{t:this.insert5button_1}]},140).to({state:[{t:this.insert5button_1}]},10).to({state:[]},1).to({state:[{t:this.insert5button_1}]},14).to({state:[{t:this.insert5button_1}]},5).to({state:[]},36).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.insert5button_1).wait(64).to({_off:false},0).wait(140).to({y:636.2},10).to({_off:true},1).wait(14).to({_off:false},0).to({y:1122.3},5).to({_off:true},36).wait(70));

	// move_up_4
	this.instance_7 = new lib.insert3();
	this.instance_7.setTransform(399,745,0.3607,0.3607);

	this.insert4btn = new lib.insert4button();
	this.insert4btn.name = "insert4btn";
	this.insert4btn.setTransform(754.95,1080.2,1,1,0,0,0,0,-334.9);
	new cjs.ButtonHelper(this.insert4btn, 0, 1, 1);

	this.insert4button_1 = new lib.Tween13();
	this.insert4button_1.name = "insert4button_1";
	this.insert4button_1.setTransform(754.95,1080.05);
	this.insert4button_1._off = true;
	new cjs.ButtonHelper(this.insert4button_1, 0, 1, 2, false, new lib.Tween13(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.insert4btn}]},60).to({state:[]},1).to({state:[{t:this.insert4button_1}]},3).to({state:[{t:this.insert4button_1}]},105).to({state:[{t:this.insert4button_1}]},10).to({state:[]},1).to({state:[{t:this.insert4button_1}]},14).to({state:[{t:this.insert4button_1}]},5).to({state:[]},71).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.insert4button_1).wait(64).to({_off:false},0).wait(105).to({y:599.95},10).to({_off:true},1).wait(14).to({_off:false},0).to({y:1080.05},5).to({_off:true},71).wait(70));

	// move_up_3
	this.instance_8 = new lib.insert4();
	this.instance_8.setTransform(399,661,0.3802,0.3802);

	this.insert3btn = new lib.insert3button();
	this.insert3btn.name = "insert3btn";
	this.insert3btn.setTransform(754.85,1038.05,1,1,0,0,0,0,-377.2);
	new cjs.ButtonHelper(this.insert3btn, 0, 1, 1);

	this.insert3button_1 = new lib.Tween10();
	this.insert3button_1.name = "insert3button_1";
	this.insert3button_1.setTransform(754.85,1038.1);
	this.insert3button_1._off = true;
	new cjs.ButtonHelper(this.insert3button_1, 0, 1, 2, false, new lib.Tween10(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.insert3btn}]},60).to({state:[]},1).to({state:[{t:this.insert3button_1}]},3).to({state:[{t:this.insert3button_1}]},70).to({state:[{t:this.insert3button_1}]},10).to({state:[]},1).to({state:[{t:this.insert3button_1}]},14).to({state:[{t:this.insert3button_1}]},5).to({state:[]},106).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.insert3button_1).wait(64).to({_off:false},0).wait(70).to({y:565},10).to({_off:true},1).wait(14).to({_off:false},0).to({y:1038.1},5).to({_off:true},106).wait(70));

	// move_up_2_
	this.instance_9 = new lib.insert5();
	this.instance_9.setTransform(399,578,0.38,0.38);

	this.insert2btn = new lib.insert2button();
	this.insert2btn.name = "insert2btn";
	this.insert2btn.setTransform(754.65,996.65,1,1,0,0,0,0,-418.8);
	new cjs.ButtonHelper(this.insert2btn, 0, 1, 1);

	this.insert2button = new lib.Tween7();
	this.insert2button.name = "insert2button";
	this.insert2button.setTransform(754.65,996.7);
	this.insert2button._off = true;
	new cjs.ButtonHelper(this.insert2button, 0, 1, 2, false, new lib.Tween7(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.insert2btn}]},60).to({state:[]},1).to({state:[{t:this.insert2button}]},3).to({state:[{t:this.insert2button}]},35).to({state:[{t:this.insert2button}]},10).to({state:[]},1).to({state:[{t:this.insert2button}]},14).to({state:[{t:this.insert2button}]},5).to({state:[]},141).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.insert2button).wait(64).to({_off:false},0).wait(35).to({y:515},10).to({_off:true},1).wait(14).to({_off:false,y:518.25},0).to({y:996.7},5).to({_off:true},141).wait(70));

	// move_up_1
	this.instance_10 = new lib.insert6();
	this.instance_10.setTransform(399,495,0.38,0.38);

	this.insert1btn = new lib.insert1_1();
	this.insert1btn.name = "insert1btn";
	this.insert1btn.setTransform(754.65,955.1,1,1,0,0,0,0,-460.2);
	this.insert1btn._off = true;
	new cjs.ButtonHelper(this.insert1btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.insert1btn}]},60).to({state:[]},1).to({state:[{t:this.insert1btn}]},3).to({state:[{t:this.insert1btn}]},10).to({state:[]},1).to({state:[{t:this.insert1btn}]},14).to({state:[{t:this.insert1btn}]},5).to({state:[]},176).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.insert1btn).wait(60).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({y:476.8},10).to({_off:true},1).wait(14).to({_off:false},0).to({y:955.1},5).to({_off:true},176).wait(70));

	// back
	this.instance_11 = new lib.insidecenter();
	this.instance_11.setTransform(387,437,0.5,0.5);

	this.instance_12 = new lib.folderFront("synched",0);
	this.instance_12.setTransform(754.3,926.35,0.0217,1,0,0,0,0,-489);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_11}]},60).to({state:[]},210).to({state:[{t:this.instance_12}]},52).to({state:[{t:this.instance_12}]},9).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(322).to({_off:false},0).to({scaleX:1},9).wait(9));

	// Layer_1
	this.instance_13 = new lib.closingFolder("synched",0);
	this.instance_13.setTransform(754.8,904.15,1,1,0,0,0,5.5,164.2);

	this.folderBackBtn = new lib.folderBack();
	this.folderBackBtn.name = "folderBackBtn";
	this.folderBackBtn.setTransform(755.25,926.45,1,1,0,0,0,0,-489.2);
	this.folderBackBtn._off = true;
	new cjs.ButtonHelper(this.folderBackBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},274).to({state:[{t:this.folderBackBtn}]},40).to({state:[{t:this.folderBackBtn}]},1).to({state:[{t:this.folderBackBtn}]},5).to({state:[]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.folderBackBtn).wait(314).to({_off:false},0).wait(1).to({scaleX:0.0595},5).to({_off:true},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1491,1419.5);
// library properties:
lib.properties = {
	id: '18A7B35C2CE4497DAD43334B01F68EA3',
	width: 1500,
	height: 1480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/insert5.jpg?1696452963739", id:"insert5"},
		{src:"images/insert6.jpg?1696452963739", id:"insert6"},
		{src:"images/CarePkg_HTML5 Canvas_atlas_1.png?1696452963660", id:"CarePkg_HTML5 Canvas_atlas_1"},
		{src:"images/CarePkg_HTML5 Canvas_atlas_2.png?1696452963660", id:"CarePkg_HTML5 Canvas_atlas_2"},
		{src:"images/CarePkg_HTML5 Canvas_atlas_3.png?1696452963660", id:"CarePkg_HTML5 Canvas_atlas_3"},
		{src:"images/CarePkg_HTML5 Canvas_atlas_4.png?1696452963660", id:"CarePkg_HTML5 Canvas_atlas_4"},
		{src:"images/CarePkg_HTML5 Canvas_atlas_5.png?1696452963660", id:"CarePkg_HTML5 Canvas_atlas_5"},
		{src:"images/CarePkg_HTML5 Canvas_atlas_6.png?1696452963660", id:"CarePkg_HTML5 Canvas_atlas_6"},
		{src:"images/CarePkg_HTML5 Canvas_atlas_7.png?1696452963660", id:"CarePkg_HTML5 Canvas_atlas_7"},
		{src:"images/CarePkg_HTML5 Canvas_atlas_8.png?1696452963660", id:"CarePkg_HTML5 Canvas_atlas_8"},
		{src:"images/CarePkg_HTML5 Canvas_atlas_9.png?1696452963660", id:"CarePkg_HTML5 Canvas_atlas_9"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['18A7B35C2CE4497DAD43334B01F68EA3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;