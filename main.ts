music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
for (let index = 0; index < 4; index++) {
    let right: neopixel.Strip = null
    right.showRainbow(1, 360)
    cuteBot.forward()
    cuteBot.backforward()
    cuteBot.stopcar()
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
}
led.plot(2, 2 * 2)
basic.forever(function () {
	
})
