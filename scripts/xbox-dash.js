function XboxDash( ) {

  this.init = function( ) {
	
    console.log('init( )');
	
	this.initGamePositions( );
	this.enableMouseEvents( );

  };

  this.initGamePositions = function( ) {

    $( '.game' ).each( function( index, value ) {

      console.log( index + ': ' + value );
      console.log( $( this ) );

     $( this ).css( {
       'left': index * 320 + 'px'
     } )

    } );

  };

  this.initGamePosition = function( index, value ) {

    console.log( 'initGamePositions( ' + index + ', ' + value + ' )');
	
  };

  this.enableMouseEvents = function( ) {
    
    $( '.box' ).click( $.proxy( this.onGameClick, this) );

	$( '.box' ).hover(
	    function( ) {
            $( this ).transition({ scale: 1.1 });
	    },
	    function( ) {
            $( this ).transition({ scale: 1 });
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
