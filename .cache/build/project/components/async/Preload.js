import fw from 'ians-fw';
export function preload(props) {
    return fw.dom("div", { class: "preload-waiting-for-elements" });
}
