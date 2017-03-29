// Generated by Phaser Editor v1.4.0 (Phaser v2.6.2)


/**
 * Preloader.
 */
class Preloader extends Phaser.State {
	
	constructor() {
		
		super();
		
	}
	
	init() {
		
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		
	}
	
	preload () {
		
		this.load.pack('preloader', 'assets/pack.json');
		
		
		var _logo = this.add.sprite(299, 231, 'logo');
		
		this.load.setPreloadSprite(_logo, 0);
		
	};
	
	create() {
		
		this.nextState();
		
		
		
	}
	
	
	/* state-methods-begin */
	
	nextState() {
		this.game.state.start("Menu");
	}

	/* state-methods-end */
	
}
/* --- end generated code --- */
// -- user code here --