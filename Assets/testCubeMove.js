#pragma strict

var speed : float = 2;

var _rb : Rigidbody2D;

function FixedUpdate () {
    var hor = Input.GetAxis("Horizontal") * speed * Time.fixedDeltaTime;
    var ver = Input.GetAxis("Vertical") * speed * Time.fixedDeltaTime;
    //transform.Translate( Vector3(hor,ver,0));
    _rb.MovePosition( _rb.position + Vector2(hor,ver) );
}