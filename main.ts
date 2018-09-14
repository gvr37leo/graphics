/// <reference path="node_modules/utilsx/utils.ts" />
/// <reference path="node_modules/vectorx/vector.ts" />
/// <reference path="graphics.ts" />


var crret = createCanvas(500,500)
var canvas = crret.canvas
var ctxt = crret.ctxt
var gfx = new Graphics(ctxt)
gfx.load()
gfx.putPixel(100,100,[255,0,0,255])
gfx.flush()
https://github.com/gvr37leo/graphics.git