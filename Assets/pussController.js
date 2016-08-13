#pragma strict

var head : GameObject;
var tail : GameObject;
var legs : GameObject[];

var pussyHeight : float;

var debugText : UI.Text;


function FixedUpdate () {

    pussyHeight = transform.position.y * 10;
    Wiggle();
    debugText.text = "Pussy Height: " + pussyHeight / 10;

}

function Update(){
    transform.Translate( -Vector3.up / 10 * Time.deltaTime );
}

function Wiggle(){
    head.transform.rotation.z = ( Mathf.Sin(Time.time * pussyHeight ) / 5 );
    tail.transform.rotation.z = ( Mathf.Sin(Time.time * pussyHeight * 1.5 ) / 3 );

    for ( var leg in legs ){
        leg.transform.rotation.z = ( Mathf.Sin(Time.time * pussyHeight * Random.Range(0,0.2)) / 2 );
    }
}