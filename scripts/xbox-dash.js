function XboxDash( ) {
	
  this.GAME_PADDING = 8;

  this.currentGame = '';

  this.init = function( ) {
	
    console.log('init( )');
	
	this.initGamePositions( );
	this.enableMouseEvents( );

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
      this.selectGame( '' );
    } else {
      this.selectGame( 'cod' );
    }

  };

  this.selectGame = function( title ) {

    this.currentGame = title;

	var opacity = ( title == "cod" ? 0.1 : 1 );
    $( '.game' ).each( function( index, value ) {

      if ( index > 0 ) {
        $( this ).transition( { opacity: opacity }, 500 );
      }

	} );

  };

}

$( document ).ready( function( ) {

  var dash = new XboxDash( );
  dash.init( );

});
