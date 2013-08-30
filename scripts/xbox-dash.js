function XboxDash( ) {

  this.GAME_PADDING = 8;

  this.currentGame = '';

  this.init = function( ) {

    console.log('init( )');

	this.initParse();
	this.initGamePositions( );
	this.enableMouseEvents( );

  };

  this.initParse = function( ) {

    Parse.initialize("TlmkVItvqaT8TUWkjc8c0vq073BJrcJWNsEjffAd", "N4qvHqHS4sMcZEEJXKBvKtnsXO0TVutYrcm7469s");

  };

  this.initGamePositions = function( ) {

    var parent = this;

    $( '.game' ).each( function( index, value ) {

      console.log( index + ': ' + value );
      console.log( $( this ) );

     $( this ).css( {
       'left': 100 + index * ( 320 + parent.GAME_PADDING ) + 'px',
       'z-index': -index
     } )

    } );

  };

  this.enableMouseEvents = function( ) {

    $( '.box' ).click( $.proxy( this.onGameClick, this) );

    $( '.box' ).css({ width: 320, height: 450 });

	$( '.box' ).hover(
	    function( ) {
            $( this ).transition( { width: 1.1 * 320, height: 1.1 * 450, x: -0.05 * 320, y: -0.05 * 450 } );
	    },
	    function( ) {
            $( this ).transition( { width: 320, height: 450, x: 0, y: 0 } );
	    }
	);

  };

  this.onGameClick = function( ) {

    console.log( 'onGameClick( )' );

    if ( this.currentGame == "cod" ) {
      this.selectGame( 'dash' );
    } else {
      this.selectGame( 'cod' );
    }

  };

  this.selectGame = function( title ) {

    this.currentGame = title;

	this.sendParseData( this.currentGame );

	var opacity = ( title == "cod" ? 0.1 : 1 );
    $( '.game' ).each( function( index, value ) {

      if ( index > 0 ) {
        $( this ).transition( { opacity: opacity }, 500 );
      }

	} );

  };

  this.sendParseData = function( title ) {

	var GameObject = Parse.Object.extend('GameObject');
	var gameObject = new GameObject();
	gameObject.save({game: title}, {
	  success: function(object) {
	    console.log('saved data');
	  }
	});

  };

}

$( document ).ready( function( ) {

  var dash = new XboxDash( );
  dash.init( );

});
