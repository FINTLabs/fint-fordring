class Fakturagrunnlag{

    constructor(){
        this.avgifter = 2000;
        this.fakturadato = 1529929885651;
        this.fakturalinjer = [];
        this.fakturanummer = {gyldighetsperiode: null, identifikatorverdi: "test"};
        this.forfallsdato = 1529929885651;
        this.leveringsdato = 1529929885651;
        this.netto = 3000;
    }
}

export default Fakturagrunnlag