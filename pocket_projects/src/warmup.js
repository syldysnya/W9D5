
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    debugger
    const p = document.createElement('p');
    p.innerText = string;
    
    htmlElement.append(p);
    debugger
    Array.from(htmlElement, (current) => {
        htmlElement.removeChild(htmlElement.lastChild);
        htmlElement.append(p);
        debugger
    }); 
    // if (!htmlElement.hasChildNodes()) {
    //     htmlElement.append(p);
    // } else {
    //     htmlElement.removeChild(htmlElement.lastChild);
    //     htmlElement.append(p);
    // }
    // while (htmlElement.firstChild) {
    // }
};

htmlGenerator('Party Time.', partyHeader);