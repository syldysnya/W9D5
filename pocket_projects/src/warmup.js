
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    if (!htmlElement.hasChildNodes()) {
        const p = document.createElement('p');
        p.innerText = string;
        htmlElement.append(p);
    } else {
        Array.from(htmlElement.childNodes).forEach( child => {
            // const newItem = arr[arr.length - 1];
            const p = document.createElement('p');
            p.innerText = string;
            htmlElement.append(p);
        }); 
        // const arr = Array.from(htmlElement.childNodes);
    }
};

htmlGenerator('Party Time.', partyHeader);