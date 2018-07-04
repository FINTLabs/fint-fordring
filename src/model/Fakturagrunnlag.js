class Fakturagrunnlag{

    constructor(list){
        this.avgifter = 2000;
        this.fakturadato = 1529929885651;
        this.fakturalinjer = list;
        this.fakturanummer = {gyldighetsperiode: null, identifikatorverdi: "test"};
        this.forfallsdato = 1529929885651;
        this.leveringsdato = 1529929885651;
        this.netto = 3000;
    }
}

export default Fakturagrunnlag