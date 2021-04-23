
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    debugger
    const p = document.createElement('p');
    p.innerText = string;
    
    // if (!htmlElement.hasChildNodes()) {
    //     htmlElement.append(p);
    // } else {
    //     htmlElement.removeChild(htmlElement.lastChild);
    //     htmlElement.append(p);
    // }
    while (htmlElement.firstChild) {
        htmlElement.removeChild(htmlElement.lastChild);
    }
    htmlElement.append(p);
};

htmlGenerator('Party Time.', partyHeader);