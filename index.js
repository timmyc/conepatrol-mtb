var express = require( 'express' ),
	app = express(),
	mtb = require( 'conepatrol-mtb-sensors' );

// Setup some Express stuff
app.set('port', (process.env.PORT || 5000));

app.get( '/conditions', function( req, res ) {
	mtb.getConditionsPageData( function( err, data ) {
		if ( err ) {
			return res.json( { error: 'MTB Fail' } );
		}
		res.json( data );
	} );
} );

app.get( '/sensors', function( req, res ) {
	mtb.getWeatherData( function( err, data ) {
		if ( err ) {
			return res.json( { error: 'MTB Fail' } );
		}
		res.json( data );
	} );
} );

var server = app.listen( app.get( 'port' ), function () {
	console.log( "app is now listening on", app.get( 'port' ) );
} );