import React, {Component} from 'react';
import {
    MDBContainer,
    MDBTypography
} from "mdb-react-ui-kit";

class Home extends Component {
    componentDidMount() {
    }

    render() {
        return (

                <MDBContainer>
                    <MDBTypography variant='h5'>Mål och Vision</MDBTypography>

                    <MDBTypography note noteColor='primary'>
                        Smygehuk FF ska stå för glädje, kamratskap och ett bra ledarskap, därför skall föreningen vara det självklara valet när man vill spela fotboll.
                        Verksamhetens målsättning är att kunna försörja vår junior- och seniortrupp med egna produkter med Mål och Vision hög kompetens och som är
                        goda förebilder. Målet är också att bredda vår ungdomsverksamhet i antalet aktiva och att ha verksamhet för alla åldersgrupper från 3-19 år
                        samt bredda vår verksamhet så fotboll finns för alla som vill träna.
                    </MDBTypography>
                    <MDBTypography variant='h5'>Strategi</MDBTypography>
                    <MDBTypography note noteColor='primary'>
                        Vidareutveckla kompetensen på våra ledare både genom intern- och extern ledareutbildning och genom Ökat samarbete mellan lagen.
                        Ny spelare i föreningen får prova på att träna 3 ggr innan man behöver betala medlemsavgift.
                        Ej betald medlemsavgift innebär att man inte får spela match. När spelaren har bestämt sig för att bli medlem i föreningen, lämnas talongen till ansvarig ledare, som lämnar vidare till kansliet.
                        Sverigelotterna gäller/medlem får inte lämnas tillbaka till föreningen.
                        Någon form av Bingolotter till jul kan man ej köpa sig fri ifrån.
                    </MDBTypography>
                </MDBContainer>
        );
    }
}
export default Home;