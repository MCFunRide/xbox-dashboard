function XboxDash( ) {
	
  this.GAME_PADDING = 10;

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

  this.initGamePosition = function( index, value ) {

    console.log( 'initGamePositions( ' + index + ', ' + value + ' )');
	
  };

  this.enableMouseEvents = function( ) {
    
    $( '.box' ).click( $.proxy( this.onGameClick, this) );

    $( '.box' ).css({ width: 320, height: 450 });

	$( '.box' ).hover(
	    function( ) {
            $( this ).transition({ width: 1.1 * 320, height: 1.1 * 450, x: -0.05 * 320, y: -0.05 * 450 });
	    },
	    function( ) {
            $( this ).transition({ width: 320, height: 450, x: 0, y: 0 });
	    }
	);

  };

  this.onGameClick = function( ) {

    console.log( 'onGameClick( )' );

  };

}

$( document ).ready( function( ) {

  var dash = new XboxDash( );
  dash.init( );

});
