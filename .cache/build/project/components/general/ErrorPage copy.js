import fw from 'ians-fw';
const OBSIDIAN = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVQ4T22SQQ4CMQwDg5C4wIEHrLjuIxC/4P9fKUq1TmZND5HaNE5sp3G73kfE5RSZez62obf3/h376zPvGXlWLlQkUJ4drDvBXXNMzWR1PRrmOSOL2Zw1QYoqFF1NEXglbzYgmMUrbxTFYAWkZoUbWY0FFjWZRIBYtu5mVFtIsNylYSspNDs8SUnaAqf++aWE6+cKyZJbKBPdWYW/sUn7Yq6LDRvQVNKftSygefSBX5dmTyaulZTZyN/aXFxI23OUdvoH7jL1c0NkwPgBAzkxXiBf0HkAAAAASUVORK5CYII=';
const TNT = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVQ4y2N45SzxH4Rv60v93yiq/p9UPgOIAeNM1BX8Typ/OBjwHwjOnTv3/+7Nm2AMYiPzcYmBMAiADQBxzM3CwFhaygbOh2lEFoOpAYmDDQBJ7Nu0Ga4QpgmmGMaGuQDERnYFiheQJWFsZIOQLQFZCjcA5k+YJDYvoHsH7gWQSZRgBlB0wKIEhEnlD4eUCPMTTIBUPgDuSGGtq/CnywAAAABJRU5ErkJggg==';
fw.css `.scene {
  width: 100vw;
  height: 100vh;
  position:absolute;
  overflow:hidden;
  top:0px;
  left:0px;
  perspective: 400px;
}

.cube {
  width: 50px;
  height: 50px;
  position: absolute;
  top:0;
  left:0;
  transform-style: preserve-3d;
  transform: translateZ(var(--z)) translateY(-200px) translateX(var(--x));
  z-index:10000;
}

.cube__face {
  position: absolute;
  width: 50px;
  height: 50px;
}
.cube__face--front  { transform: rotateY(  0deg) translateZ(25px); }
.cube__face--right  { transform: rotateY( 90deg) translateZ(25px); }
.cube__face--back   { transform: rotateY(180deg) translateZ(25px); }
.cube__face--left   { transform: rotateY(-90deg) translateZ(25px); }
.cube__face--top    { transform: rotateX( 90deg) translateZ(25px); }
.cube__face--bottom { transform: rotateX(-90deg) translateZ(25px); }
.vanishing-text{
            opacity:0;
            animation-fill-mode: forwards;
            animation-name: vanishing-text;
            animation-duration: 1s;
        }
        @keyframes vanishing-text{
            from{opacity:0;}
            to{opacity:1;}
        }`;
function Delayed({ delay, children }) {
    const elements = fw.StatefulData([]);
    setTimeout(() => {
        elements.value = children;
    }, delay);
    return elements;
}
function ApearingText(props) {
    return (fw.dom("div", null, props.children[0].split('').map((_, i) => (fw.dom("span", { className: "vanishing-text", style: 'animation-delay:' + ((props.offset || 0) + i * 0.05) + 's' }, _)))));
}
let cssmin = 0;
function Obsidian({ x, y, z, delay }) {
    cssmin++;
    fw.css(`@keyframes cube-${cssmin} {to{transform: translateZ(${z}px) translateY(${y}px) translateX(${x}px);}}
        .cube-${cssmin}{animation:cube-${cssmin};animation-duration: 1s;animation-fill-mode: forwards;}`);
    return (fw.dom(Delayed, { delay: Math.floor(delay + Math.random() * 1000) },
        fw.dom("div", { className: 'cube cube-' + cssmin, style: `--x:${x}px;--y:${y}px;--z:${z}px;` },
            fw.dom("img", { src: OBSIDIAN, className: "cube__face cube__face--front" }))));
}
function Tnt({ x, y, z, delay }) {
    cssmin++;
    fw.css(`@keyframes cube-${cssmin} {20%{transform: translateZ(${z}px) translateY(${y}px) translateX(${x}px);}40%{filter: invert(1);}60%{filter:none;}80%{filter: invert(1);}95%{filter: none;transform: translateZ(${z}px) translateY(${y}px) translateX(${x}px) scale(1.0);}98%{filter: none;transform: translateZ(${z}px) translateY(${y}px) translateX(${x}px) scale(2.0);}100%{filter: invert(1);transform: translateZ(${z}px) translateY(${y}px) translateX(${x}px) scale(0.0);}}
        .cube-${cssmin}{width: 50px;
  height: 50px;
  position: absolute;
  top:0;
  left:0;
  transform-style: preserve-3d;
  animation:cube-${cssmin};animation-duration: 5s;animation-fill-mode: forwards;z-index:100000;}`);
    return (fw.dom(Delayed, { delay: Math.floor(delay + Math.random() * 1000) },
        fw.dom("div", { className: 'cube cube-' + cssmin, style: `--x:${x}px;--y:${y}px;--z:${z}px;` },
            fw.dom("img", { src: TNT, className: "cube__face cube__face--front" }))));
}
export function ErrorPage(props) {
    const map = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0]
    ];
    let blocks = [];
    const ymax = 1000;
    for (let x = -100; x < window.innerWidth + 50; x += 50) {
        for (let y = 0; y < ymax; y += 50) {
            if (map[Math.floor(y / 100)] && map[Math.floor(y / 50)] && map[Math.floor(y / 50)][Math.floor(x / 50)]) {
                blocks.push(fw.dom(Tnt, { x: x, y: y, z: 0, delay: 65000 + 20 * (ymax - y) }));
                blocks.push(fw.dom(Obsidian, { x: x, y: y, z: 0, delay: 65000 + 20 * (ymax - y) }));
            }
            else {
                blocks.push(fw.dom(Obsidian, { x: x, y: y, z: 0, delay: 65000 + 20 * (ymax - y) }));
            }
        }
    }
    return (fw.dom("div", null,
        fw.dom("h1", null,
            fw.dom(ApearingText, null, "An error has occured")),
        fw.dom(Delayed, { delay: 50000 },
            fw.dom("div", { className: "scene" }, blocks)),
        fw.dom(ApearingText, { offset: 1 }, "the url may not be 100% correct or the sky is falling, whatever the issue may be you can safely use the navigation bar on the top to get back to viewing this site. did you know that sometimes i just write what is on my mind, right now i am wondering if Trezy will find the easter egg i have left in this page for him. if he is anything like me he might but he might also choose to explore the different pages or give the framework a try ;) anyways, have a good day and i hope you where able to find my easter egg by now. Journal #1: today i tried to rewrite the dom-diffing for this framework to make it more accomidating, that failed badly and i ended up adding 2 edge cases, the first one is for when the component needs to be removed and the 2nd one is when a component needs to be outright replace, it has just occured to me that i have used the word component instead of dom node, please read them as dom nodes.")));
}
