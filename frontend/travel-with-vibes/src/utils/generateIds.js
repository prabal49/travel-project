const generatePNR = () => {
    return "PNR" + Math.floor(100000 + Math.random() * 900000);
};

const generateRefId = () => {
    return "REF" + Date.now();
};

module.exports = { generatePNR, generateRefId };