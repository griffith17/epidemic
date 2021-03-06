﻿/*
LocationDisplay.js

Displays locations like the debug version. Will be replaced by sprites.
*/

var loc : Location;

function Start () {
  loc = this.GetComponent.<Location>();
}

function OnGUI () {
  var localStyle = new GUIStyle(GUI.skin.label);
  localStyle.normal.textColor = Color.black;
  var statusText = String.Format ("{0}: {1}", loc.name, loc.population);
  GUI.Label (Rect (100, (loc.index * 20), 100, 30), statusText, localStyle);
}
