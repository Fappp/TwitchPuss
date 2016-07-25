#pragma strict

var thickness : float = 0.2;
var segments : int = 5;
var segmentLength : float = 1;
var spacing : float = 0.1;

var segmentPrefab : GameObject;
var segmentObjs : GameObject[];

var pivots : Vector2[];

var tester : Transform;

var attach : boolean;

function Start(){
    pivots = new Vector2[ segments ];
    segmentObjs = new GameObject[ segments ];
    SpawnRope( segments, segmentLength );
}

function SpawnRope ( _segments : int, _segLength : float ) {

    var i=0;

    while ( i < _segments ){

        var startPos = transform.position.y - ( i * _segLength ) - ( spacing * i );
        pivots[i] = Vector2( transform.position.x ,startPos + ( (_segLength /2 ) + (spacing / 2) ) );
        var clone = Instantiate( segmentPrefab, Vector3( transform.position.x, startPos, 0 ), Quaternion.identity);
        segmentObjs[i] = clone;
        clone.transform.localScale.x = thickness;
        clone.transform.localScale.y = _segLength;
        if ( i == 0 ){
            clone.GetComponent(Rigidbody2D).isKinematic = true;
        }
        else{
            clone.GetComponent(HingeJoint2D).connectedBody = segmentObjs[i -1].GetComponent(Rigidbody2D);
        }
        i++;

    }

    if ( attach ){
        yield WaitForSeconds(0.5);
        segmentObjs[ _segments - 1 ].GetComponent(Rigidbody2D).isKinematic = true;
    }
}

    function OnDrawGizmos(){
        Gizmos.DrawWireSphere( transform.position, 1 );
    }