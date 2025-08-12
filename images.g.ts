// 自動產生的程式碼。請勿編輯。
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "image1":
            case "water":return img`
. . . . . . f f f f . . . . . . 
. . . . . f 8 6 9 1 f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f 8 1 f . . . . . . 
. . . . . f 8 6 9 1 f . . . . . 
. . . . f 8 6 6 9 9 1 f . . . . 
. . . . . f 8 6 9 1 f . . . . . 
. . . . f 8 6 9 9 9 1 f . . . . 
. . . . f 8 6 9 9 9 1 f . . . . 
. . . . f 8 6 9 9 9 1 f . . . . 
. . . . f 8 6 9 9 9 1 f . . . . 
. . . . f 8 6 9 9 9 1 f . . . . 
. . . . f 8 6 6 6 6 1 f . . . . 
. . . . f 8 8 6 6 6 1 f . . . . 
. . . . f 8 8 8 8 8 8 f . . . . 
. . . . . f f f f f f . . . . . 
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "fatman-moveright":
            case "anim1":return [img`
....fffffffff....
...fffcfffffff...
..cfffcccfffff...
..cffffffffcff...
..ccffffffffec...
..fccffffeeeef...
..ffff44ebf44....
..ffff4441f44....
...ffffe44444....
....fffe4444e....
.....f44e7777....
.....e44e44444...
.....feef4444e...
......66666666...
.....b6666666....
....bbbfffbbbb...
.....bbbbbbbb....
.................
`, img`
.................
....fffffffff....
...fffcfffffff...
..cfffcccfffff...
..cffffffffcff...
..ccffffffffec...
..fccffffeeeef...
..ffff44ebf44....
..ffff4441f44....
...ffffee4444....
....fff44e444....
.....ee44e7777...
.....4eeef4444...
......66666666f..
.....f666666fff..
....bfffbbbfffb..
.....bbbbbbbbb...
.................
`, img`
....fffffffff....
...fffcfffffff...
..cfffcccfffff...
..cffffffffcff...
..ccffffffffec...
..fccffffeeeef...
..ffff44ebf44....
..ffff4441f44....
...ffffe44444....
....fffe4444e....
.....f44e7777....
.....e44e44444...
.....feef4444e...
......66666666...
.....b6666666....
....bbbfffbbbb...
.....bbbbbbbb....
.................
`, img`
.................
....fffffffff....
...fffcfffffff...
..cfffcccfffff...
..cffffffffcff...
..ccffffffffec...
..fccffffeeeef...
..ffff44ebf44....
..ffff4441f44....
...ffffee4444....
....f44ee4444....
....e44e777777...
....feef444444...
......66666666f..
.....ff666666ff..
....bfffbbbfffb..
.....bbbbbbbbb...
.................
`];
            case "fatman-stop":
            case "anim4":return [img`
....fffffffff....
...fffffffcfff...
..ffffffcccfffc..
..fffcffffffffc..
..cccfffeeeffcc..
..fffffeeeffccf..
..fffbfeeefbff...
..f441f444f144...
...e444444444e...
....f44eee44f....
..ef777777777fe..
.e4744444444474e.
.ee44444e44444ee.
...66666666666...
...b666666666b...
..bbfffbbbfffbb..
...bbbbbbbbbbb...
.................
`];
            case "fatman-moveright_stop":
            case "anim2":return [img`
....fffffffff....
...fffcfffffff...
..cfffcccfffff...
..cffffffffcff...
..ccffffffffec...
..fccffffeeeef...
..ffff44ebf44....
..ffff4441f44....
...ffffe44444....
....fffe4444e....
.....f44e7777....
.....e44e44444...
.....feef4444e...
......66666666...
......6666666....
.....bbfffbbbb...
......bbbbbbb....
.................
`];
            case "smokeman-animation":
            case "anim9":return [img`
. . . . . . . . 6 8 6 6 6 6 . . . 
. . . . . 8 6 6 6 8 8 8 6 6 6 . . 
. . . . . 6 8 8 6 6 6 6 6 . . . . 
. . . . 8 6 6 6 6 6 8 6 6 . . . . 
. . . . 8 8 f f 6 f f 8 . . . b . 
. . . . 6 b c f b f c b . . . . b 
. . . . . d 3 f d f 3 d . b . . . 
. . . . . b d d d d d b . . b . . 
. . . . . f c d 4 1 1 2 b . . . b 
. . . . b f c d d d c f b . . . . 
. . . b d c c d d d c c d b . . . 
. . . b b c c f f f c c b b . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . c c . c c . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . . . . . 6 6 . . . 
. . . . . . . . 6 8 6 6 6 6 . . . 
. . . . . 8 6 6 6 8 8 8 6 6 . . . 
. . . . . 6 8 8 6 6 6 6 6 . . . b 
. . . . 8 6 6 6 6 6 8 6 6 . . b . 
. . . . 8 8 f f 6 f f 8 . . . . . 
. . . . 6 b c f b f c b . . b . . 
. . . . . d 3 f d f 3 d . . . . b 
. . . . . b d d d d d b . b . . . 
. . . . b f c d 4 1 1 2 b . . . . 
. . . b d c c d d d c c d b . . . 
. . . b b c c f f f c c b b . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . c c . c c . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . 6 8 6 6 6 6 6 . . 
. . . . . 8 6 6 6 8 8 8 6 6 . . . 
. . . . . 6 8 8 6 6 6 6 6 . . . . 
. . . . 8 6 6 6 6 6 8 6 6 . . b . 
. . . . 8 8 f f 6 f f 8 . . . . . 
. . . . 6 b c f b f c b . . b . b 
. . . . . d 3 f d f 3 d . b . . . 
. . . . . b d d d d d b . . . b . 
. . . . . f c d 4 1 1 2 . . . . . 
. . . . b f c d d d c f b . . . . 
. . . b d c c d d d c c d b . . . 
. . . b b c c f f f c c b b . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . c c . c c . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . 6 8 6 6 6 6 . . . 
. . . . . 8 6 6 6 8 8 8 6 6 6 . . 
. . . . . 6 8 8 6 6 6 6 6 . . . . 
. . . . 8 6 6 6 6 6 8 6 6 . . . . 
. . . . 8 8 6 6 6 6 8 8 . . . b . 
. . . . 6 b b b b 6 6 b . . . . b 
. . . . . d f f d f f d . b . . . 
. . . . . b d d d d d b . . b . . 
. . . . . f c d 4 1 1 2 b . . . b 
. . . . b f c d d d c f b . . . . 
. . . b d c c d d d c c d b . . . 
. . . b b c c f f f c c b b . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . c c . c c . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . . . . . 6 6 . . . 
. . . . . . . . 6 8 6 6 6 6 . . . 
. . . . . 8 6 6 6 8 8 8 6 6 . . . 
. . . . . 6 8 8 6 6 6 6 6 . . . b 
. . . . 8 6 6 6 6 6 8 6 6 . . b . 
. . . . 8 8 f f 6 f f 8 . . . . . 
. . . . 6 b c f b f c b . . b . . 
. . . . . d 3 f d f 3 d . . . . b 
. . . . . b d d d d d b . b . . . 
. . . . b f c d 4 1 1 2 b . . . . 
. . . b d c c d d d c c d b . . . 
. . . b b c c f f f c c b b . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . c c . c c . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . 6 8 6 6 6 6 6 . . 
. . . . . 8 6 6 6 8 8 8 6 6 . . . 
. . . . . 6 8 8 6 6 6 6 6 . . . . 
. . . . 8 6 6 6 6 6 8 6 6 . . b . 
. . . . 8 8 f f 6 f f 8 . . . . . 
. . . . 6 b c f b f c b . . b . b 
. . . . . d 3 f d f 3 d . b . . . 
. . . . . b d d d d d b . . . b . 
. . . . . f c d 4 1 1 2 . . . . . 
. . . . b f c d d d c f b . . . . 
. . . b d c c d d d c c d b . . . 
. . . b b c c f f f c c b b . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . c c . c c . . . . . . 
. . . . . . f f . f f . . . . . . 
`];
            case "drunkman-animation":
            case "anim10":return [img`
. . . . . . . . . . . . . . . . . 
. . . . . . d c c c d . . . 5 . . 
. . . . . c d d d c d c . 5 . 5 . 
. . 5 . . c d d d d d c . . 5 . . 
. 5 . 5 . d c c b c c b . . . . . 
. . 5 . . d b f d f b b . . . . . 
. . . . . d 1 f d f 1 b . . . . . 
. . . . 3 3 d c c c d 3 3 . . . . 
. . . . . f f c d c f f . e . . . 
. . . . 1 f 1 1 c 1 1 f 1 7 . . . 
. . . b d 1 1 1 1 1 1 1 7 7 . . . 
. . . b b d d d d d d d 5 7 . . . 
. . . . . d d d b d d d 7 7 . . . 
. . . . . . 8 8 8 8 8 . . . . . . 
. . . . . . 8 8 . 8 8 . . . . . . 
. . . . . . e e . e e . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . c . . . 5 . . 
. . . . . . d c c c d . . 5 5 5 . 
. . 5 . . c d d d d d c . . 5 . . 
. 5 5 5 . c d d d d d c . . . . . 
. . 5 . . d c c b c c b . . . . . 
. . . . . d b f d f b b . . . . . 
. . . . . d 1 f d f 1 b . . . . . 
. . . . . 3 d c c c d 3 . e . . . 
. . . . 1 f f c d c f f 1 7 . . . 
. . . b d 1 1 1 c 1 1 1 7 7 . . . 
. . . b b d d d d d d d 5 7 . . . 
. . . . . d d d b d d d 7 7 . . . 
. . . . . . 8 8 8 8 8 . . . . . . 
. . . . . . 8 8 . 8 8 . . . . . . 
. . . . . . e e . e e . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . d c c c c . . . 5 . . 
. . . . . c d d d d d c . . . . . 
. . 5 . . c d d d d d c . . . . . 
. . . . . d c c b c c b . . . . . 
. . . . . d b f d f b b . . . . . 
. . . . . d 1 f d f 1 b . . . . . 
. . . . 3 3 d c c c d 3 3 . . . . 
. . . . . f f c d c f f . e . . . 
. . . . 1 f 1 1 c 1 1 f 1 7 . . . 
. . . b d 1 1 1 1 1 1 1 7 7 . . . 
. . . b b d d d b d d d 5 7 . . . 
. . . . . d d d d d d d 7 7 . . . 
. . . . . . 8 8 . 8 8 . . . . . . 
. . . . . . e e . e e . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . d c c c d . . . 5 . . 
. . . . . c d d d c d c . 5 . 5 . 
. . 5 . . c d d d d d c . . 5 . . 
. 5 . 5 . d d d d d d b . . . . . 
. . 5 . . d d d d d b b . . . . . 
. . . . . d c c b c c b . . . . . 
. . . . 3 3 d c c c d 3 3 . . . . 
. . . . . f f c d c f f . e . . . 
. . . . 1 f 1 1 c 1 1 f 1 7 . . . 
. . . b d 1 1 1 1 1 1 1 7 7 . . . 
. . . b b d d d d d d d 5 7 . . . 
. . . . . d d d b d d d 7 7 . . . 
. . . . . . 8 8 8 8 8 . . . . . . 
. . . . . . 8 8 . 8 8 . . . . . . 
. . . . . . e e . e e . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . c . . . 5 . . 
. . . . . . d c c c d . . 5 5 5 . 
. . 5 . . c d d d d d c . . 5 . . 
. 5 5 5 . c d d d d d c . . . . . 
. . 5 . . d c c b c c b . . . . . 
. . . . . d b f d f b b . . . . . 
. . . . . d 1 f d f 1 b . . . . . 
. . . . . 3 d c c c d 3 . e . . . 
. . . . 1 f f c d c f f 1 7 . . . 
. . . b d 1 1 1 c 1 1 1 7 7 . . . 
. . . b b d d d d d d d 5 7 . . . 
. . . . . d d d b d d d 7 7 . . . 
. . . . . . 8 8 8 8 8 . . . . . . 
. . . . . . 8 8 . 8 8 . . . . . . 
. . . . . . e e . e e . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . d c c c c . . . 5 . . 
. . . . . c d d d d d c . . . . . 
. . 5 . . c d d d d d c . . . . . 
. . . . . d c c b c c b . . . . . 
. . . . . d b f d f b b . . . . . 
. . . . . d 1 f d f 1 b . . . . . 
. . . . 3 3 d c c c d 3 3 . . . . 
. . . . . f f c d c f f . e . . . 
. . . . 1 f 1 1 c 1 1 f 1 7 . . . 
. . . b d 1 1 1 1 1 1 1 7 7 . . . 
. . . b b d d d b d d d 5 7 . . . 
. . . . . d d d d d d d 7 7 . . . 
. . . . . . 8 8 . 8 8 . . . . . . 
. . . . . . e e . e e . . . . . . 
`];
            case "sleepman-animation":
            case "anim11":return [img`
. . . . . . f f f f c . . . . . . 
. . . . . f f c f f c f . . . . . 
. . . . f c c f f f f f f . . 1 . 
. . . . f f f f f b f f f . 1 . 1 
. 1 . . f f f f b f f f f . . 1 . 
1 . 1 . f f 6 6 6 6 6 f f . . . . 
. 1 . 2 . d 1 f 9 f 1 d . 2 . . . 
. f f . . b d d d d d b . . f f . 
. f . . . f 1 b b b 1 f . . . f . 
. . . . b 1 5 1 2 1 5 1 b . . . . 
. . . b d 1 5 1 2 1 5 1 d b . . . 
. . . b b 5 3 3 3 3 3 5 b b . . . 
. . . . . 3 3 3 3 3 3 3 . . . . . 
. . . . . . d d . d d . . . . . . 
. . . . . . 1 1 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . f f f f c . . . . . . 
. . . . . f f c f f c f . . . 1 . 
. . . . f c c f f f f f f . 1 1 1 
. 1 . . f f f f f b f f f . . 1 . 
1 1 1 . f f f f b f f f f . . . . 
. 1 . . f f 6 6 6 6 6 f f . . . . 
. f . 2 . d 1 f 9 f 1 d . 2 . f . 
. . f . . b d d d d d b . . f . . 
. . . . b f 1 b b b 1 f b . . . . 
. . . b d 1 5 1 2 1 5 1 d b . . . 
. . . b b 5 3 3 3 3 3 5 b b . . . 
. . . . . 3 3 3 3 3 3 3 . . . . . 
. . . . . . d d . d d . . . . . . 
. . . . . . 1 1 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . f f f f c . . . . . . 
. . . . . f f c f f c f . . . . . 
. . . . f c c f f f f f f . . 1 . 
. . . . f f f f f b f f f . . . . 
. 1 . . f f f f b f f f f . . . . 
. . . . f f 6 6 6 6 6 f f . . . . 
. . . 2 . d 1 f 9 f 1 d . 2 . . . 
. f f . . b d d d d d b . . f f . 
. . . . . f 1 b b b 1 f . . . . . 
. . . . b 1 5 1 2 1 5 1 b . . . . 
. . . b d 1 5 1 2 1 5 1 d b . . . 
. . . b b 5 3 3 3 3 3 5 b b . . . 
. . . . . 3 3 3 3 3 3 3 . . . . . 
. . . . . . 1 1 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . f f f f c . . . . . . 
. . . . . f f c f f c f . . . . . 
. . . . f c c f f f f f f . . 1 . 
. . . . f f f f f b f f f . 1 . 1 
. 1 . . f f f f b f f f f . . 1 . 
1 . 1 . f f 6 6 6 6 6 f f . . . . 
. 1 . 2 . d f f 9 f f d . 2 . . . 
. f f . . b d d d d d b . . f f . 
. f . . . f 1 b b b 1 f . . . f . 
. . . . b 1 5 1 2 1 5 1 b . . . . 
. . . b d 1 5 1 2 1 5 1 d b . . . 
. . . b b 5 3 3 3 3 3 5 b b . . . 
. . . . . 3 3 3 3 3 3 3 . . . . . 
. . . . . . d d . d d . . . . . . 
. . . . . . 1 1 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . f f f f c . . . . . . 
. . . . . f f c f f c f . . . 1 . 
. . . . f c c f f f f f f . 1 1 1 
. 1 . . f f f f f b f f f . . 1 . 
1 1 1 . f f f f b f f f f . . . . 
. 1 . . f f 6 6 6 6 6 f f . . . . 
. f . 2 . d 1 f 9 f 1 d . 2 . f . 
. . f . . b d d d d d b . . f . . 
. . . . b f 1 b b b 1 f b . . . . 
. . . b d 1 5 1 2 1 5 1 d b . . . 
. . . b b 5 3 3 3 3 3 5 b b . . . 
. . . . . 3 3 3 3 3 3 3 . . . . . 
. . . . . . d d . d d . . . . . . 
. . . . . . 1 1 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . f f f f c . . . . . . 
. . . . . f f c f f c f . . . . . 
. . . . f c c f f f f f f . . 1 . 
. . . . f f f f f b f f f . . . . 
. 1 . . f f f f b f f f f . . . . 
. . . . f f 6 6 6 6 6 f f . . . . 
. . . 2 . d 1 f 9 f 1 d . 2 . . . 
. f f . . b d d d d d b . . f f . 
. . . . . f 1 b b b 1 f . . . . . 
. . . . b 1 5 1 2 1 5 1 b . . . . 
. . . b d 1 5 1 2 1 5 1 d b . . . 
. . . b b 5 3 3 3 3 3 5 b b . . . 
. . . . . 3 3 3 3 3 3 3 . . . . . 
. . . . . . 1 1 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
`];
            case "body change":
            case "7Zh6G|yBEveM:g":return [img`
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . f f f f f f c c c f f f c . . 
. . f f f c f f f f f f f f c . . 
. . c c c f f f e e e f f c c . . 
. . f f f f f e e e f f c c f . . 
. . . f f b f e e e f b f f . . . 
. . . 4 4 1 f 4 4 4 f 1 4 4 . . . 
. . . e 4 4 4 4 4 4 4 4 4 e . . . 
. . . . f 4 4 e e e 4 4 f . . . . 
. . e f 7 7 7 7 7 7 7 7 7 f e . . 
. e 4 7 4 4 4 4 4 4 4 4 4 7 4 e . 
. e e 4 4 4 4 4 e 4 4 4 4 4 e e . 
. . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
. . . . 6 6 6 6 6 6 6 6 6 . . . . 
. . . . f f f . . . f f f . . . . 
`, img`
. . . . . . f f f c f . . . . . . 
. . . . . f f f f c f f . . . . . 
. . . . f f c f f f f f f . . . . 
. . . . f c f f f e f f f . . . . 
. . . . f f f f e f f c f . . . . 
. . . . . f b f e f b f . . . . . 
. . . . . 4 1 f 4 f 1 4 . . . . . 
. . . . . e 4 4 4 4 4 e . . . . . 
. . . . . f f e e e f f . . . . . 
. . . . e f 7 b 7 b 7 f e . . . . 
. . . e 4 f 7 b 7 b 7 f 4 e . . . 
. . . e e f 6 6 6 6 6 f e e . . . 
. . . . . . 6 6 . 6 6 . . . . . . 
. . . . . . 4 4 . 4 4 . . . . . . 
. . . . . . 1 1 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
`];
            case "fatman-upwalk":
            case "anim3":return [img`
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . f f f f f f c c c f f f c . . 
. . f f f c f f f f f f f f c . . 
. . c c c f f f f f f f f c c . . 
. . f f f f f f f c f f c c f . . 
. . . f f f f c c f f f f f . . . 
. . . c f f f c f f f f c f . . . 
. . . f c f f f f f c c f f . . . 
. . . . f c f f f f f f f . . . . 
. . e f 7 7 7 7 7 7 7 7 7 f e . . 
. e 4 7 7 7 7 7 7 7 7 7 7 7 4 e . 
. e e 4 4 4 4 4 4 4 4 4 4 4 e e . 
. . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
. . . . 6 6 6 6 6 6 6 6 6 . . . . 
. . . . f f f . . . f f f . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . f f f f f f c c c f f f c . . 
. . c f f c f f f f f f f f c . . 
. . f c c f f f f f f f f c f . . 
. . . f f f f f f f f f c c . . . 
. . . f f f f c c f f f f f . . . 
. . . c f f f c f f f f c f . . . 
. . . f c f f f f f c c f f . . . 
. . e f f c f f f f f f f 4 e . . 
. . 4 7 7 7 7 7 7 7 f e 4 4 4 . . 
. . e 7 7 7 7 7 7 7 7 e e 4 . . . 
. . 6 6 6 6 6 6 6 6 6 6 . . . . . 
. . . 6 6 6 6 6 6 6 6 6 . . . . . 
. . . f f f f . . . . . . . . . . 
`, img`
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . f f f f f f c c c f f f c . . 
. . f f f c f f f f f f f f c . . 
. . c c c f f f f f f f f c c . . 
. . f f f f f f f c f f c c f . . 
. . . f f f f c c f f f f f . . . 
. . . c f f f c f f f f c f . . . 
. . . f c f f f f f c c f f . . . 
. . . . f c f f f f f f f . . . . 
. . e f 7 7 7 7 7 7 7 7 7 f e . . 
. e 4 7 7 7 7 7 7 7 7 7 7 7 4 e . 
. e e 4 4 4 4 4 4 4 4 4 4 4 e e . 
. . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
. . . . 6 6 6 6 6 6 6 6 6 . . . . 
. . . . f f f . . . f f f . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . f f f f f f c c c f f f c . . 
. . c f f c f f f f f f f f c . . 
. . f c c f f f f f f f f c f . . 
. . . f f f f f f f f f c c . . . 
. . . f f f f c c f f f f f . . . 
. . . c f f f c f f f f c f . . . 
. . . f c f f f f f c c f f . . . 
. . e 4 f c f f f f f f f f e . . 
. . 4 4 4 e f 7 7 7 7 7 7 7 4 . . 
. . . 4 e e 7 7 7 7 7 7 7 7 e . . 
. . . . . 6 6 6 6 6 6 6 6 6 6 . . 
. . . . . 6 6 6 6 6 6 6 6 6 . . . 
. . . . . . . . . . f f f f . . . 
`];
            case "fitman-upmove":
            case "anim6":return [img`
. . . . . . f f f c f . . . . . . 
. . . . . f f f f c f f . . . . . 
. . . . f f c f f f f f f . . . . 
. . . . f c f f f f f f f . . . . 
. . . . f f f f f f f c f . . . . 
. . . . . c f f f c c f . . . . . 
. . . . . f c f f f f f . . . . . 
. . . . . e f f f f f e . . . . . 
. . . . . f f b 7 b f f . . . . . 
. . . . e f 7 b 7 b 7 f e . . . . 
. . . e 4 f 7 b 7 b 7 f 4 e . . . 
. . . e e f 6 6 6 6 6 f e e . . . 
. . . . . . 6 6 . 6 6 . . . . . . 
. . . . . . 4 4 . 4 4 . . . . . . 
. . . . . . 1 1 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . f f f c f . . . . . . 
. . . . . f f f f c f f . . . . . 
. . . . f f c f f f f f f . . . . 
. . . . f c f f f f f f f . . . . 
. . . . f f f f f f f c f . . . . 
. . . . . c f f f c c f . . . . . 
. . . . . f c f f f f f . . . . . 
. . . . f e f f f f f e . . . . . 
. . . . e f 7 b 7 e 4 4 f . . . . 
. . . . 4 f 7 b 7 b e 4 e . . . . 
. . . . . f 6 6 6 6 6 e . . . . . 
. . . . . . 4 4 . 6 6 . . . . . . 
. . . . . . 1 1 . 4 4 . . . . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . f f . . . . . . . . . 
`, img`
. . . . . . f f f c f . . . . . . 
. . . . . f f f f c f f . . . . . 
. . . . f f c f f f f f f . . . . 
. . . . f c f f f f f f f . . . . 
. . . . f f f f f f f c f . . . . 
. . . . . c f f f c c f . . . . . 
. . . . . f c f f f f f . . . . . 
. . . . . e f f f f f e . . . . . 
. . . . . f f b 7 b f f . . . . . 
. . . . e f 7 b 7 b 7 f e . . . . 
. . . e 4 f 7 b 7 b 7 f 4 e . . . 
. . . e e f 6 6 6 6 6 f e e . . . 
. . . . . . 6 6 . 6 6 . . . . . . 
. . . . . . 4 4 . 4 4 . . . . . . 
. . . . . . 1 1 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . f c f f f . . . . . . 
. . . . . f f c f f f f . . . . . 
. . . . f f f f f f c f f . . . . 
. . . . f f f f f f f c f . . . . 
. . . . f c f f f f f f f . . . . 
. . . . . f c c f f f c . . . . . 
. . . . . f f f f f c f . . . . . 
. . . . . e f f f f f e f . . . . 
. . . . f 4 4 e 7 b 7 f e . . . . 
. . . . e 4 e b 7 b 7 f 4 . . . . 
. . . . . e 6 6 6 6 6 f . . . . . 
. . . . . . 6 6 . 4 4 . . . . . . 
. . . . . . 4 4 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . . . . f f . . . . . . 
`];
            case "fatman-moveright0":
            case "anim5":return [img`
. . . . f f f f f f f f f . . . . 
. . . f f f c f f f f f f f . . . 
. . c f f f c c c f f f f f . . . 
. . c f f f f f f f f c f f . . . 
. . c c f f f f f f f f e c . . . 
. . f c c f f f f e e e e f . . . 
. . f f f f 4 4 e b f 4 4 . . . . 
. . f f f f 4 4 4 1 f 4 4 . . . . 
. . . f f f f e 4 4 4 4 4 . . . . 
. . . . f f f e 4 4 4 4 e . . . . 
. . . . . f 4 4 e 7 7 7 7 . . . . 
. . . . . e 4 4 e 4 4 4 4 4 . . . 
. . . . . f e e f 4 4 4 4 e . . . 
. . . . . . 6 6 6 6 6 6 6 6 . . . 
. . . . . . 6 6 6 6 6 6 6 . . . . 
. . . . . . . f f f . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . f f f f f f f f f . . . . 
. . . f f f c f f f f f f f . . . 
. . c f f f c c c f f f f f . . . 
. . c f f f f f f f f c f f . . . 
. . c c f f f f f f f f e c . . . 
. . f c c f f f f e e e e f . . . 
. . f f f f 4 4 e b f 4 4 . . . . 
. . f f f f 4 4 4 1 f 4 4 . . . . 
. . . f f f f e e 4 4 4 4 . . . . 
. . . . f f f 4 4 e 4 4 4 . . . . 
. . . . . e e 4 4 e 7 7 7 7 . . . 
. . . . . 4 e e e f 4 4 4 4 . . . 
. . . . . . 6 6 6 6 6 6 6 6 f . . 
. . . . . f 6 6 6 6 6 6 f f f . . 
. . . . . f f f . . . f f f . . . 
`, img`
. . . . f f f f f f f f f . . . . 
. . . f f f c f f f f f f f . . . 
. . c f f f c c c f f f f f . . . 
. . c f f f f f f f f c f f . . . 
. . c c f f f f f f f f e c . . . 
. . f c c f f f f e e e e f . . . 
. . f f f f 4 4 e b f 4 4 . . . . 
. . f f f f 4 4 4 1 f 4 4 . . . . 
. . . f f f f e 4 4 4 4 4 . . . . 
. . . . f f f e 4 4 4 4 e . . . . 
. . . . . f 4 4 e 7 7 7 7 . . . . 
. . . . . e 4 4 e 4 4 4 4 4 . . . 
. . . . . e e e f 4 4 4 4 e . . . 
. . . . . . 6 6 6 6 6 6 6 6 . . . 
. . . . . . 6 6 6 6 6 6 6 . . . . 
. . . . . . . f f f . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . f f f f f f f f f . . . . 
. . . f f f c f f f f f f f . . . 
. . c f f f c c c f f f f f . . . 
. . c f f f f f f f f c f f . . . 
. . c c f f f f f f f f e c . . . 
. . f c c f f f f e e e e f . . . 
. . f f f f 4 4 e b f 4 4 . . . . 
. . f f f f 4 4 4 1 f 4 4 . . . . 
. . . f f f f e e 4 4 4 4 . . . . 
. . . . f 4 4 e e 4 4 4 4 . . . . 
. . . . e 4 4 e 7 7 7 7 7 7 . . . 
. . . . f e e f 4 4 4 4 4 4 . . . 
. . . . . . 6 6 6 6 6 6 6 6 f . . 
. . . . . f f 6 6 6 6 6 6 f f . . 
. . . . . f f f . . . f f f . . . 
`];
            case "fitman-rightmove":
            case "anim8":return [img`
. . . . . . f f c f f f . . . . . 
. . . . . f f f c f f f f . . . . 
. . . . f f f f f f f c f f . . . 
. . . . f f f f f f f f c f . . . 
. . . . f f c f f f f e f f . . . 
. . . . f f 4 4 e b f e f . . . . 
. . . . f f 4 4 4 1 f 4 . . . . . 
. . . . . f f e 4 4 4 4 . . . . . 
. . . . . . . f e e e . . . . . . 
. . . . . . f 4 7 b 7 . . . . . . 
. . . . . . e 4 4 b 7 . . . . . . 
. . . . . . f e e 6 6 . . . . . . 
. . . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . 4 4 . . . . . . . 
. . . . . . . . 1 1 . . . . . . . 
. . . . . . . . f f . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . f f c f f f . . . . . 
. . . . . f f f c f f f f . . . . 
. . . . f f f f f f f c f f . . . 
. . . . f f f f f f f f c f . . . 
. . . . f f c f f f f e f f . . . 
. . . . f f 4 4 e b f e f . . . . 
. . . . f f 4 4 4 1 f 4 . . . . . 
. . . . . f f e 4 4 4 4 . . . . . 
. . . . . . . f b 7 7 . . . . . . 
. . . . . . . e 4 4 7 . . . . . . 
. . . . . . . f e e 6 . . . . . . 
. . . . . . . 6 6 6 6 . . . . . . 
. . . . . . . 4 4 6 6 4 . . . . . 
. . . . . . f 1 . . . 1 1 . . . . 
. . . . . . f f . . . f f . . . . 
`, img`
. . . . . . f f c f f f . . . . . 
. . . . . f f f c f f f f . . . . 
. . . . f f f f f f f c f f . . . 
. . . . f f f f f f f f c f . . . 
. . . . f f c f f f f e f f . . . 
. . . . f f 4 4 e b f e f . . . . 
. . . . f f 4 4 4 1 f 4 . . . . . 
. . . . . f f e 4 4 4 4 . . . . . 
. . . . . . . f e e e . . . . . . 
. . . . . . f 4 7 b 7 . . . . . . 
. . . . . . e 4 4 b 7 . . . . . . 
. . . . . . f e e 6 6 . . . . . . 
. . . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . 4 4 . . . . . . . 
. . . . . . . . 1 1 . . . . . . . 
. . . . . . . . f f . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . f f c f f f . . . . . 
. . . . . f f f c f f f f . . . . 
. . . . f f f f f f f c f f . . . 
. . . . f f f f f f f f c f . . . 
. . . . f f c f f f f e f f . . . 
. . . . f f 4 4 e b f e f . . . . 
. . . . f f 4 4 4 1 f 4 . . . . . 
. . . . . f f e 4 4 4 4 . . . . . 
. . . . . . . f 7 7 7 . . . . . . 
. . . . . . . e 4 4 7 . . . . . . 
. . . . . . . f e e 6 . . . . . . 
. . . . . . . 6 6 6 6 . . . . . . 
. . . . . . . 4 6 6 4 4 . . . . . 
. . . . . . f 1 . . . 1 1 . . . . 
. . . . . . f f . . . f f . . . . 
`];
            case "fatman-moveleft":
            case "anim7":return [img`
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . . f f f f f c c c f f f c . . 
. . . f f c f f f f f f f f c . . 
. . . c e f f f f f f f f c c . . 
. . . f e e e e f f f f c c f . . 
. . . . 4 4 f b e 4 4 f f f f . . 
. . . . 4 4 f 1 4 4 4 f f f f . . 
. . . . 4 4 4 4 4 e f f f f . . . 
. . . . e 4 4 4 4 e f f f . . . . 
. . . . 7 7 7 7 e 4 4 f . . . . . 
. . . 4 4 4 4 4 e 4 4 e . . . . . 
. . . e 4 4 4 4 f e e f . . . . . 
. . . 6 6 6 6 6 6 6 6 . . . . . . 
. . . . 6 6 6 6 6 6 6 . . . . . . 
. . . . . . . f f f . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . . f f f f f c c c f f f c . . 
. . . f f c f f f f f f f f c . . 
. . . c e f f f f f f f f c c . . 
. . . f e e e e f f f f c c f . . 
. . . . 4 4 f b e 4 4 f f f f . . 
. . . . 4 4 f 1 4 4 4 f f f f . . 
. . . . 4 4 4 4 e e f f f f . . . 
. . . . 4 4 4 e 4 4 f f f . . . . 
. . . 7 7 7 7 e 4 4 e e . . . . . 
. . . 4 4 4 4 f e e e 4 . . . . . 
. . f 6 6 6 6 6 6 6 6 . . . . . . 
. . f f f 6 6 6 6 6 6 f . . . . . 
. . . f f f . . . f f f . . . . . 
`, img`
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . . f f f f f c c c f f f c . . 
. . . f f c f f f f f f f f c . . 
. . . c e f f f f f f f f c c . . 
. . . f e e e e f f f f c c f . . 
. . . . 4 4 f b e 4 4 f f f f . . 
. . . . 4 4 f 1 4 4 4 f f f f . . 
. . . . 4 4 4 4 4 e f f f f . . . 
. . . . e 4 4 4 4 e f f f . . . . 
. . . . 7 7 7 7 e 4 4 f . . . . . 
. . . 4 4 4 4 4 e 4 4 e . . . . . 
. . . e 4 4 4 4 f e e e . . . . . 
. . . 6 6 6 6 6 6 6 6 . . . . . . 
. . . . 6 6 6 6 6 6 6 . . . . . . 
. . . . . . . f f f . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . . f f f f f c c c f f f c . . 
. . . f f c f f f f f f f f c . . 
. . . c e f f f f f f f f c c . . 
. . . f e e e e f f f f c c f . . 
. . . . 4 4 f b e 4 4 f f f f . . 
. . . . 4 4 f 1 4 4 4 f f f f . . 
. . . . 4 4 4 4 e e f f f f . . . 
. . . . 4 4 4 4 e e 4 4 f . . . . 
. . . 7 7 7 7 7 7 e 4 4 e . . . . 
. . . 4 4 4 4 4 4 f e e f . . . . 
. . f 6 6 6 6 6 6 6 6 . . . . . . 
. . f f 6 6 6 6 6 6 f f . . . . . 
. . . f f f . . . f f f . . . . . 
`];
            case "fitman-leftmove":
            case "anim12":return [img`
. . . . . f f f c f f . . . . . . 
. . . . f f f f c f f f . . . . . 
. . . f f c f f f f f f f . . . . 
. . . f c f f f f f f f f . . . . 
. . . f f e f f f f c f f . . . . 
. . . . f e f b e 4 4 f f . . . . 
. . . . . 4 f 1 4 4 4 f f . . . . 
. . . . . 4 4 4 4 e f f . . . . . 
. . . . . . e e e f . . . . . . . 
. . . . . . 7 b 7 4 f . . . . . . 
. . . . . . 7 b 4 4 e . . . . . . 
. . . . . . 6 6 e e f . . . . . . 
. . . . . . 6 6 6 6 . . . . . . . 
. . . . . . . 4 4 . . . . . . . . 
. . . . . . . 1 1 . . . . . . . . 
. . . . . . . f f . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . f f f c f f . . . . . . 
. . . . f f f f c f f f . . . . . 
. . . f f c f f f f f f f . . . . 
. . . f c f f f f f f f f . . . . 
. . . f f e f f f f c f f . . . . 
. . . . f e f b e 4 4 f f . . . . 
. . . . . 4 f 1 4 4 4 f f . . . . 
. . . . . 4 4 4 4 e f f . . . . . 
. . . . . . 7 7 b f . . . . . . . 
. . . . . . 7 4 4 e . . . . . . . 
. . . . . . 6 e e f . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . . 
. . . . . 4 6 6 4 4 . . . . . . . 
. . . . 1 1 . . . 1 f . . . . . . 
. . . . f f . . . f f . . . . . . 
`, img`
. . . . . f f f c f f . . . . . . 
. . . . f f f f c f f f . . . . . 
. . . f f c f f f f f f f . . . . 
. . . f c f f f f f f f f . . . . 
. . . f f e f f f f c f f . . . . 
. . . . f e f b e 4 4 f f . . . . 
. . . . . 4 f 1 4 4 4 f f . . . . 
. . . . . 4 4 4 4 e f f . . . . . 
. . . . . . e e e f . . . . . . . 
. . . . . . 7 b 7 4 f . . . . . . 
. . . . . . 7 b 4 4 e . . . . . . 
. . . . . . 6 6 e e f . . . . . . 
. . . . . . 6 6 6 6 . . . . . . . 
. . . . . . . 4 4 . . . . . . . . 
. . . . . . . 1 1 . . . . . . . . 
. . . . . . . f f . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . f f f c f f . . . . . . 
. . . . f f f f c f f f . . . . . 
. . . f f c f f f f f f f . . . . 
. . . f c f f f f f f f f . . . . 
. . . f f e f f f f c f f . . . . 
. . . . f e f b e 4 4 f f . . . . 
. . . . . 4 f 1 4 4 4 f f . . . . 
. . . . . 4 4 4 4 e f f . . . . . 
. . . . . . 7 7 7 f . . . . . . . 
. . . . . . 7 4 4 e . . . . . . . 
. . . . . . 6 e e f . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . . 
. . . . . 4 4 6 6 4 . . . . . . . 
. . . . 1 1 . . . 1 f . . . . . . 
. . . . f f . . . f f . . . . . . 
`];
            case "fatman-downwalk":
            case "anim13":return [img`
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . f f f f f f c c c f f f c . . 
. . f f f c f f f f f f f f c . . 
. . c c c f f f e e e f f c c . . 
. . f f f f f e e e f f c c f . . 
. . . f f b f e e e f b f f . . . 
. . . 4 4 1 f 4 4 4 f 1 4 4 . . . 
. . . e 4 4 4 4 4 4 4 4 4 e . . . 
. . . . f 4 4 e e e 4 4 f . . . . 
. . e f 7 7 7 7 7 7 7 7 7 f e . . 
. e 4 7 4 4 4 4 4 4 4 4 4 7 4 e . 
. e e 4 4 4 4 4 e 4 4 4 4 4 e e . 
. . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
. . . . 6 6 6 6 6 6 6 6 6 . . . . 
. . . . f f f . . . f f f . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . f f f f f f c c c f f f c . . 
. . c f f c f f f f f f f f c . . 
. . f c c f f f e e e f f c f . . 
. . . f f f f e e e f f c c . . . 
. . . f f b f e e e f b f f . . . 
. . . 4 4 1 f 4 4 4 f 1 4 4 . . . 
. . . f 4 4 4 4 4 4 4 4 4 f . . . 
. . e f 7 7 7 7 7 7 7 7 4 e e . . 
. e 4 7 4 4 4 4 4 4 f e 4 4 e . . 
. e e 4 4 4 4 e 4 4 4 e 4 4 e . . 
. . 6 6 6 6 6 6 6 6 6 6 e e . . . 
. . . 6 6 6 6 6 6 6 6 6 . . . . . 
. . . f f f f . . . . . . . . . . 
`, img`
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . f f f f f f c c c f f f c . . 
. . f f f c f f f f f f f f c . . 
. . c c c f f f e e e f f c c . . 
. . f f f f f e e e f f c c f . . 
. . . f f b f e e e f b f f . . . 
. . . 4 4 1 f 4 4 4 f 1 4 4 . . . 
. . . e 4 4 4 4 4 4 4 4 4 e . . . 
. . . . f 4 4 e e e 4 4 f . . . . 
. . e f 7 7 7 7 7 7 7 7 7 f e . . 
. e 4 7 4 4 4 4 4 4 4 4 4 7 4 e . 
. e e 4 4 4 4 4 e 4 4 4 4 4 e e . 
. . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
. . . . 6 6 6 6 6 6 6 6 6 . . . . 
. . . . f f f . . . f f f . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . f f f f f f f f f . . . . 
. . . f f f f f f f c f f f . . . 
. . f f f f f f c c c f f f c . . 
. . c f f c f f f f f f f f c . . 
. . f c c f f f e e e f f c f . . 
. . . f f f f e e e f f c c . . . 
. . . f f b f e e e f b f f . . . 
. . . 4 4 1 f 4 4 4 f 1 4 4 . . . 
. . . f 4 4 4 4 4 4 4 4 4 f . . . 
. . e e 4 7 7 7 7 7 7 7 7 f e . . 
. . e 4 4 e f 4 4 4 4 4 4 7 4 e . 
. . e 4 4 e 4 4 4 e 4 4 4 4 e e . 
. . . e e 6 6 6 6 6 6 6 6 6 6 . . 
. . . . . 6 6 6 6 6 6 6 6 6 . . . 
. . . . . . . . . . f f f f . . . 
`];
            case "fitman-downmove":
            case "anim14":return [img`
. . . . . . f f f c f . . . . . . 
. . . . . f f f f c f f . . . . . 
. . . . f f c f f f f f f . . . . 
. . . . f c f f f e f f f . . . . 
. . . . f f f f e f f c f . . . . 
. . . . . f b f e f b f . . . . . 
. . . . . 4 1 f 4 f 1 4 . . . . . 
. . . . . e 4 4 4 4 4 e . . . . . 
. . . . . f f e e e f f . . . . . 
. . . . e f 7 b 7 b 7 f e . . . . 
. . . e 4 f 7 b 7 b 7 f 4 e . . . 
. . . e e f 6 6 6 6 6 f e e . . . 
. . . . . . 6 6 . 6 6 . . . . . . 
. . . . . . 4 4 . 4 4 . . . . . . 
. . . . . . 1 1 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . f f f c f . . . . . . 
. . . . . f f f f c f f . . . . . 
. . . . f f c f f f f f f . . . . 
. . . . f c f f f e f f f . . . . 
. . . . . f f f e f f c . . . . . 
. . . . . f b f e f b f . . . . . 
. . . . . 4 1 f 4 f 1 4 . . . . . 
. . . . f e 4 4 4 4 e e . . . . . 
. . . f e f 7 b 7 e 4 4 f . . . . 
. . . e 4 f 7 b 7 e 4 4 e . . . . 
. . . . . f 6 6 6 6 e e . . . . . 
. . . . . . 4 4 . 6 6 . . . . . . 
. . . . . . 1 1 . 4 4 . . . . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . f f . . . . . . . . . 
`, img`
. . . . . . f f f c f . . . . . . 
. . . . . f f f f c f f . . . . . 
. . . . f f c f f f f f f . . . . 
. . . . f c f f f e f f f . . . . 
. . . . f f f f e f f c f . . . . 
. . . . . f b f e f b f . . . . . 
. . . . . 4 1 f 4 f 1 4 . . . . . 
. . . . . e 4 4 4 4 4 e . . . . . 
. . . . . f f e e e f f . . . . . 
. . . . e f 7 b 7 b 7 f e . . . . 
. . . e 4 f 7 b 7 b 7 f 4 e . . . 
. . . e e f 6 6 6 6 6 f e e . . . 
. . . . . . 6 6 . 6 6 . . . . . . 
. . . . . . 4 4 . 4 4 . . . . . . 
. . . . . . 1 1 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . 
. . . . . . f f f c f . . . . . . 
. . . . . f f f f c f f . . . . . 
. . . . f f c f f f f f f . . . . 
. . . . f c f f f e f f f . . . . 
. . . . . f f f e f f c . . . . . 
. . . . . f b f e f b f . . . . . 
. . . . . 4 1 f 4 f 1 4 . . . . . 
. . . . . e e 4 4 4 4 e f . . . . 
. . . . f 4 4 e 7 b 7 f e f . . . 
. . . . e 4 4 e 7 b 7 f 4 e . . . 
. . . . . e e 6 6 6 6 f . . . . . 
. . . . . . 6 6 . 4 4 . . . . . . 
. . . . . . 4 4 . 1 1 . . . . . . 
. . . . . . f f . f f . . . . . . 
. . . . . . . . . f f . . . . . . 
`];
        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

}
// 自動產生的程式碼。請勿編輯。
