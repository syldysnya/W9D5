
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const p = document.createElement('p');
    p.innerText = string;

    if (!htmlElement.hasChildNodes()) {
        htmlElement.append(p);
    } else {
        htmlElement.removeChild(htmlElement.lastChild);
        htmlElement.append(p);
    }
};

htmlGenerator('Party Time.', partyHeader);