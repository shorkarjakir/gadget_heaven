const checkWL = () => {
    const wlData = localStorage.getItem('wh-list');
    if (wlData) {
        return JSON.parse(wlData);
    }
    return [];
}

const setWlInLs = (data) => {
    const wlData = JSON.stringify(data);
    localStorage.setItem('wh-list', wlData);
}

const addWhToLs = (data) => {
    let whdata = checkWL();
    if (!Array.isArray(whdata)) {
        whdata = [];
    }
    const isDuplicate = whdata.some(item => item === data);
    if(!isDuplicate){
        whdata.push(data);
        setWlInLs(whdata);
    }
}

const handleRemove = (id) => {
    const whdata = checkWL();
    const remainingItem = whdata.filter(item => item !== id);
    setWlInLs(remainingItem);
}

export { checkWL, handleRemove, addWhToLs };