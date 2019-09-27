import fw from 'ians-fw';
fw.css `html,body{
    padding:0px;
    margin:0px;
}`;
export function CSS() {
    return fw.dom("imports", null);
}
