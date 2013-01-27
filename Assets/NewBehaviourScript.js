#pragma strict

function Start () {

}

function Update () {
	transform.position.x += Input.GetAxis("Horizontal") * (200.0 * Time.deltaTime);
	transform.position.y += Input.GetAxis("Vertical") * (200.0 * Time.deltaTime);
}